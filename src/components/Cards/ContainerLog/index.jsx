/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react'
import classNames from 'classnames'
import { observer } from 'mobx-react'
import { saveAs } from 'file-saver'
import { isEmpty } from 'lodash'
import AnsiUp from 'ansi_up'

import { PATTERN_UTC_TIME } from 'utils/constants'
import { Icon, Loading, Notify, Tooltip, Select } from '@kube-design/components'
import { Card, Empty } from 'components/Base'
import ContainerStore from 'stores/container'
import PodStore from 'stores/pod'

import styles from './index.scss'

const converter = new AnsiUp()
const TIME_UNITS = { m: 60, h: 3600, d: 86400 }
const TIME_OPTIONS = [
  '5m',
  '10m',
  '15m',
  '30m',
  '1h',
  '6h',
  '12h',
  '1d',
  '3d',
  '7d',
]

function parseRelativeTime(raw) {
  const matched = String(raw).match(/^(\d+)([mhd])$/)
  if (!matched) {
    return { value: 15, unit: 'm', seconds: 900, raw: '15m' }
  }
  const value = Number(matched[1]) || 15
  const unit = matched[2]
  return { value, unit, seconds: value * TIME_UNITS[unit], raw: `${value}${unit}` }
}

function splitLogLines(log) {
  const normalized = String(log || '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
  if (!normalized) {
    return []
  }
  const lines = normalized.split('\n')
  if (lines[lines.length - 1] === '') {
    lines.pop()
  }
  return lines
}

const MAX_LOG_MATCHES = 500
const MAX_HIGHLIGHTS_PER_LINE = 30

function findLogMatches(lines, keyword) {
  const needle = String(keyword || '').trim()
  if (!needle) {
    return []
  }
  const lower = needle.toLowerCase()
  const matches = []
  for (let index = 0; index < lines.length; index += 1) {
    const haystack = lines[index].toLowerCase()
    let from = 0
    while (from <= haystack.length - lower.length) {
      const start = haystack.indexOf(lower, from)
      if (start < 0) {
        break
      }
      matches.push({
        lineNumber: index + 1,
        start,
        end: start + needle.length,
      })
      if (matches.length >= MAX_LOG_MATCHES) {
        return matches
      }
      from = start + Math.max(lower.length, 1)
    }
  }
  return matches
}

function groupMatchesByLine(matches) {
  const grouped = new Map()
  matches.forEach((item, index) => {
    const next = { ...item, index }
    const row = grouped.get(item.lineNumber)
    if (!row) {
      grouped.set(item.lineNumber, [next])
      return
    }
    if (row.length < MAX_HIGHLIGHTS_PER_LINE) {
      row.push(next)
    }
  })
  return grouped
}

function wrapMatchIndex(index, total, step) {
  if (total <= 0) {
    return 0
  }
  return (index + step + total) % total
}

@observer
export default class ContainerLog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loadingPrev: false,
      loadingNext: false,
      isRealtime: !!props.isRealtime,
      match: '',
      matchDraft: '',
      filterActive: false,
      currentIndex: 0,
      timeRange: parseRelativeTime('15m'),
    }

    this.tailLines = 1000
    this.store = new ContainerStore()
    this.podStore = new PodStore()
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.getData({}, this.scrollToBottom)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.podName && this.props.podName !== prevProps.podName) {
      this.getData({}, this.scrollToBottom)
    }
    if (
      prevState.timeRange.seconds !== this.state.timeRange.seconds ||
      prevState.match !== this.state.match
    ) {
      this.setState({ currentIndex: 0, filterActive: false })
    }
  }

  componentWillUnmount() {
    if (this.matchTimer) {
      clearTimeout(this.matchTimer)
    }
    this.store.stopWatchLogs()
  }

  async getData(params, callback) {
    const {
      cluster,
      namespace,
      podName,
      containerName,
      gatewayName,
      gatewayNamespace,
    } = this.props

    this.store.stopWatchLogs()

    const result = await this.podStore.checkName({
      cluster,
      namespace,
      name: podName,
    })

    if (result.exist) {
      this.store.watchLogs(
        {
          cluster,
          namespace: gatewayName ? gatewayNamespace : namespace,
          podName,
          container: containerName,
          tailLines: this.tailLines,
          timestamps: true,
          sinceSeconds: this.state.timeRange.seconds,
          follow: this.state.isRealtime,
          gateways: gatewayName,
          ...params,
        },
        callback
      )
    }
  }

  scrollToBottom = () => {
    const ref = this.ref.current
    if (ref) {
      ref.scrollTop = ref.scrollHeight
    }
    this.setState({ loadingNext: false })
  }

  scrollToCurrent = () => {
    const ref = this.ref.current
    if (ref) {
      ref.scrollTop = ref.scrollHeight - this.currentHeight
    }
    this.setState({ loadingPrev: false })
  }

  handleNext = () => {
    this.tailLines = 1000
    this.setState({ loadingNext: true })
    this.getData({ silent: true }, this.scrollToBottom)
  }

  handlePrev = () => {
    this.tailLines += 1000
    this.setState({ loadingPrev: true })
    this.currentHeight = this.ref.current ? this.ref.current.scrollHeight : 0
    this.getData({ silent: true }, this.scrollToCurrent)
  }

  handleRealtime = () => {
    this.setState(
      ({ isRealtime }) => ({ isRealtime: !isRealtime }),
      () => this.getData({ silent: true }, this.scrollToBottom)
    )
  }

  handleDownload = () => {
    const { containerName: name } = this.props
    const result = this.store.logs.data
    if (!result) {
      Notify.info({
        content: t('NO_LOG_DATA_FOUND_TIP'),
      })
      return
    }
    const blob = new Blob([result], { type: 'text/plain;charset=utf-8' })
    saveAs(blob, `${name}.log`)
  }

  handleTimeChange = value => {
    this.setState({ timeRange: parseRelativeTime(value) }, () =>
      this.getData({ silent: true }, this.scrollToBottom)
    )
  }

  handleMatch = event => {
    const value = event.target.value
    this.setState({ matchDraft: value })
    if (this.matchTimer) {
      clearTimeout(this.matchTimer)
    }
    this.matchTimer = setTimeout(() => {
      this.setState({ match: value, currentIndex: 0 })
    }, 250)
  }

  getMatchState() {
    const { data } = this.store.logs
    const lines = splitLogLines(data)
    const matches = findLogMatches(lines, this.state.match)
    const lineNumbers =
      this.state.filterActive && matches.length
        ? [...new Set(matches.map(item => item.lineNumber))]
        : lines.map((_, index) => index + 1)
    return { lines, matches, lineNumbers }
  }

  renderHighlightedLine(text, lineMatches, currentIndex) {
    if (!lineMatches.length) {
      const utc = text.match(PATTERN_UTC_TIME)
      const content = utc ? text.replace(utc[0], '') : text
      return (
        <span
          dangerouslySetInnerHTML={{
            __html: converter.ansi_to_html(content),
          }}
        />
      )
    }
    const nodes = []
    let cursor = 0
    lineMatches.forEach(item => {
      if (item.start > cursor) {
        nodes.push(
          <span key={`t-${cursor}`}>{text.slice(cursor, item.start)}</span>
        )
      }
      nodes.push(
        <span
          key={`m-${item.index}`}
          className={
            item.index === currentIndex
              ? styles.currentMatch
              : styles.searchMatch
          }
        >
          {text.slice(item.start, item.end)}
        </span>
      )
      cursor = item.end
    })
    if (cursor < text.length) {
      nodes.push(<span key="tail">{text.slice(cursor)}</span>)
    }
    return nodes
  }

  renderToolbar() {
    const { isRealtime, timeRange } = this.state
    return (
      <div className={styles.toolbar}>
        <div className={styles.toolbarGroup}>
          <Select
            className={styles.timeSelect}
            value={timeRange.raw}
            onChange={this.handleTimeChange}
            options={TIME_OPTIONS.map(item => {
              const parsed = parseRelativeTime(item)
              return {
                label: t('LAST_TIME', {
                  value: t(`TIME_${parsed.unit.toUpperCase()}`, {
                    count: parsed.value,
                  }),
                }),
                value: item,
              }
            })}
          />
          <Tooltip
            content={t(
              isRealtime
                ? 'STOP_REAL_TIME_CONTAINER_LOG'
                : 'START_REAL_TIME_CONTAINER_LOG'
            )}
          >
            <button
              type="button"
              className={classNames(styles.outlineButton, {
                [styles.active]: isRealtime,
              })}
              onClick={this.handleRealtime}
            >
              <Icon
                name={isRealtime ? 'stop' : 'start'}
                size={16}
                color={{
                  primary: isRealtime ? '#fff' : '#36435c',
                  secondary: isRealtime ? '#fff' : '#36435c',
                }}
              />
              {t(isRealtime ? 'STOP_REAL_TIME' : 'START_REAL_TIME')}
            </button>
          </Tooltip>
        </div>
        <div className={styles.toolbarGroup}>
          <Tooltip content={t('REFRESH')}>
            <button
              type="button"
              className={styles.outlineButton}
              onClick={this.handleNext}
            >
              <Icon name="refresh" size={16} />
              {t('REFRESH')}
            </button>
          </Tooltip>
          <Tooltip content={t('DOWNLOAD')}>
            <button
              type="button"
              className={styles.outlineButton}
              onClick={this.handleDownload}
            >
              <Icon name="download" size={16} />
              {t('LOG_EXPORT')}
            </button>
          </Tooltip>
        </div>
      </div>
    )
  }

  renderSearchBar(matchCount) {
    const { match, matchDraft, filterActive } = this.state
    const navDisabled = matchCount === 0
    const label = matchCount === 1 ? t('LOG_MATCH') : t('LOG_MATCHES')
    return (
      <div className={styles.searchBar}>
        <span className={styles.matchCount} data-test="container-log-match-count">
          {matchCount} {label}
        </span>
        <input
          className={styles.searchInput}
          data-test="container-log-match"
          placeholder={t('SEARCH_BY_KEYWORD')}
          value={matchDraft}
          onChange={this.handleMatch}
          onKeyDown={event => {
            if (event.key !== 'Enter') {
              return
            }
            event.preventDefault()
            if (this.matchTimer) {
              clearTimeout(this.matchTimer)
            }
            if (matchDraft !== match) {
              this.setState({ match: matchDraft, currentIndex: 0 })
            }
            this.moveMatch(event.shiftKey ? -1 : 1)
          }}
        />
        <button
          type="button"
          className={classNames(styles.iconButton, {
            [styles.active]: filterActive,
          })}
          title={t('FILTER_LOG_LINES')}
          disabled={navDisabled}
          onClick={() =>
            this.setState(({ filterActive: current }) => ({
              filterActive: !current,
            }))
          }
        >
          <Icon name="filter" size={16} color={{ primary: '#fff', secondary: '#fff' }} />
        </button>
        <button
          type="button"
          className={styles.iconButton}
          title={t('PREVIOUS_MATCH')}
          disabled={navDisabled}
          onClick={() => this.moveMatch(-1)}
        >
          <Icon name="chevron-up" size={16} color={{ primary: '#fff', secondary: '#fff' }} />
        </button>
        <button
          type="button"
          className={styles.iconButton}
          title={t('NEXT_MATCH')}
          disabled={navDisabled}
          onClick={() => this.moveMatch(1)}
        >
          <Icon name="chevron-down" size={16} color={{ primary: '#fff', secondary: '#fff' }} />
        </button>
      </div>
    )
  }

  moveMatch = step => {
    this.setState(({ currentIndex }) => {
      const { matches } = this.getMatchState()
      return { currentIndex: wrapMatchIndex(currentIndex, matches.length, step) }
    })
  }

  renderContent() {
    const { contentClassName } = this.props
    const { data } = this.store.logs
    const { loadingPrev, loadingNext, currentIndex } = this.state

    if (isEmpty(data)) {
      return <Empty desc={'NO_DATA'} />
    }

    const { lines, matches, lineNumbers } = this.getMatchState()
    const matchesByLine = groupMatchesByLine(matches)
    const currentLine = matches[currentIndex] ? matches[currentIndex].lineNumber : 0

    return (
      <div className={styles.panel}>
        {this.renderSearchBar(matches.length)}
        <div
          className={classNames(styles.content, contentClassName)}
          ref={this.ref}
        >
          {this.tailLines <= lines.length && (
            <div className={styles.loading}>
              {loadingPrev ? (
                <Loading spinning={loadingPrev} size="small" />
              ) : (
                <div className={styles.more} onClick={this.handlePrev}>
                  {t('VIEW_MORE')}
                </div>
              )}
            </div>
          )}
          {lineNumbers.map(lineNumber => {
            const text = lines[lineNumber - 1] || ''
            return (
              <div
                key={lineNumber}
                className={classNames(styles.logLine, {
                  [styles.currentLine]: currentLine === lineNumber,
                })}
              >
                <span className={styles.logNumber}>{lineNumber}</span>
                <span className={styles.logContent}>
                  {this.renderHighlightedLine(
                    text,
                    matchesByLine.get(lineNumber) || [],
                    currentIndex
                  )}
                </span>
              </div>
            )
          })}
          <div className={styles.loading}>
            <Loading spinning={loadingNext} size="small" />
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { className } = this.props
    const { isLoading } = this.store.logs
    return (
      <Card
        className={classNames(styles.card, className)}
        empty={t('NO_LOG_DATA_FOUND')}
        loading={isLoading}
      >
        {this.renderToolbar()}
        {this.renderContent()}
      </Card>
    )
  }
}
