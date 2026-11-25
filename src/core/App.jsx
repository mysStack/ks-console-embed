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

import '@kube-design/components/esm/styles/index.scss'
import { createBrowserHistory } from 'history'
import { Provider } from 'mobx-react'
import { syncHistoryWithStore } from 'mobx-react-router'
import React, { Component } from 'react'
import { Router } from 'react-router'
import 'scss/main.scss'

import { get } from 'lodash'

import RootStore from 'stores/root'
import { lazy } from 'utils'
import { renderRoutes } from 'utils/router.config'

import routes from './routes'
import { getRouterBasename } from './routerBase'
import {
  getParentHostPathname,
  notifyHostRouteChange,
  shouldNotifyHostOfInitialRoute,
  shouldNotifyHostOfRouteChange,
} from './routeSync'
import {
  createTriggerActionHandler,
  shouldListenForHostActions,
} from './wujieActions'

const getActions = lazy(() =>
  import(/* webpackChunkName: "actions" */ 'actions')
)

class App extends Component {
  constructor(props) {
    super(props)

    this.rootStore = new RootStore()
    this.history = syncHistoryWithStore(
      createBrowserHistory({
        basename: getRouterBasename(window.location.pathname),
      }),
      this.rootStore.routing
    )
    this.skipHostRoute = shouldListenForHostActions(
      window.$wujie,
      window.__WUJIE && window.__WUJIE.id
    )
    this.unlistenRoute = this.skipHostRoute
      ? () => {}
      : this.history.listen((location, action) => {
          if (
            !shouldNotifyHostOfRouteChange({
              action,
              childPathname: location.pathname,
              hostPathname: getParentHostPathname(),
            })
          ) {
            return
          }
          notifyHostRouteChange(location, action)
        })
    this.offTriggerAction = null
    this.pendingTriggerAction = null
  }

  componentDidMount() {
    if (this.skipHostRoute) {
      document.documentElement.style.background = 'transparent'
      document.body.style.background = 'transparent'
    }
    if (
      !this.skipHostRoute &&
      shouldNotifyHostOfInitialRoute({
        childPathname: this.history.location.pathname,
        hostPathname: getParentHostPathname(),
      })
    ) {
      notifyHostRouteChange(this.history.location)
    }
    const wujie = window.$wujie
    const handleTrigger = createTriggerActionHandler(this.rootStore)
    if (
      wujie?.bus &&
      shouldListenForHostActions(wujie, window.__WUJIE && window.__WUJIE.id)
    ) {
      const onTrigger = (actionId, params = {}) => {
        if (!handleTrigger(actionId, params)) {
          this.pendingTriggerAction = { actionId, params }
        }
      }
      wujie.bus.$on('triggerAction', onTrigger)
      this.offTriggerAction = () => {
        wujie.bus.$off && wujie.bus.$off('triggerAction', onTrigger)
      }
    }
    getActions().then(actions => {
      this.rootStore.registerActions(actions.default)
      if (this.pendingTriggerAction) {
        const pending = this.pendingTriggerAction
        this.pendingTriggerAction = null
        handleTrigger(pending.actionId, pending.params)
      }
      const appName =
        (window.__WUJIE && window.__WUJIE.id) ||
        get(wujie, 'props.name', 'consolev3')
      wujie?.bus?.$emit('loadCompleted', appName)
    })
  }

  componentWillUnmount() {
    this.unlistenRoute()
    this.offTriggerAction && this.offTriggerAction()
  }

  render() {
    return (
      <Provider rootStore={this.rootStore}>
        {this.skipHostRoute ? (
          <div data-test="console-v3-actions-root">
            <style>
              {`html,body,#root{background:transparent!important}`}
            </style>
          </div>
        ) : (
          <Router history={this.history}>{renderRoutes(routes)}</Router>
        )}
      </Provider>
    )
  }
}

export default App
