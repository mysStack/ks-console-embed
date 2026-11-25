jest.mock('stores/getStore', () => ({
  getStore: (module, params) => ({ module: params, kind: module }),
}))

import { readFileSync } from 'fs'
import { resolve } from 'path'

import {
  createTriggerActionHandler,
  shouldListenForHostActions,
  shouldNotifyHostActionModal,
} from './wujieActions'

describe('Wujie host actions', () => {
  it('listens for the actions overlay even without props.actions', () => {
    expect(shouldListenForHostActions({ props: { actions: true } })).toBe(true)
    expect(
      shouldListenForHostActions({ props: {} }, 'consoleV3Actions')
    ).toBe(true)
    expect(shouldListenForHostActions({ props: {} })).toBe(false)
    expect(shouldListenForHostActions(undefined, 'consolev3')).toBe(false)
  })

  it('opens a registered action with the mapped store', () => {
    const opened = []
    const rootStore = {
      actions: {
        'workload.template.edit': {
          on: opts => opened.push(opts),
        },
      },
      triggerAction() {},
    }
    const handle = createTriggerActionHandler(rootStore)

    expect(handle('missing', {})).toBe(false)
    expect(
      handle('workload.template.edit', {
        v3Module: 'workload',
        v3StoreParams: 'deployments',
        cluster: 'host',
      })
    ).toBe(true)
    expect(opened).toHaveLength(1)
    expect(opened[0].cluster).toBe('host')
    expect(opened[0].store.module).toBe('deployments')
    expect(opened[0].store.kind).toBe('workload')
  })

  it('subscribes to triggerAction from the host bus', () => {
    const source = readFileSync(resolve(__dirname, 'App.jsx'), 'utf8')
    expect(source).toMatch(/shouldListenForHostActions/)
    expect(source).toMatch(/\$on\('triggerAction'/)
    expect(source).toMatch(/pendingTriggerAction/)
    expect(source).toMatch(/loadCompleted/)
    expect(source).toMatch(/skipHostRoute/)
    expect(source).toMatch(/shouldNotifyHostOfInitialRoute/)
    expect(source).toMatch(/shouldNotifyHostOfRouteChange/)
    expect(source).toMatch(/data-test="console-v3-actions-root"/)
  })

  it('only tells the host to expand the overlay from the actions app', () => {
    expect(
      shouldNotifyHostActionModal({ props: { actions: true } }, 'consoleV3Actions', true)
    ).toBe(true)
    expect(shouldNotifyHostActionModal({ props: {} }, 'consolev3', true)).toBe(
      false
    )
    expect(
      shouldNotifyHostActionModal(
        { props: { actions: true } },
        'consoleV3Actions',
        false
      )
    ).toBe(false)
  })
})
