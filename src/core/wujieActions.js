import { get } from 'lodash'

import { getStore } from 'stores/getStore'

export function shouldListenForHostActions(wujie, appId) {
  return Boolean(get(wujie, 'props.actions')) || appId === 'consoleV3Actions'
}

export function shouldNotifyHostActionModal(wujie, appId, poweredByWujie) {
  return Boolean(poweredByWujie) && shouldListenForHostActions(wujie, appId)
}

export function notifyHostActionModal(open) {
  if (typeof window === 'undefined') {
    return
  }
  if (
    !shouldNotifyHostActionModal(
      window.$wujie,
      window.__WUJIE && window.__WUJIE.id,
      window.__POWERED_BY_WUJIE__
    )
  ) {
    return
  }
  window.$wujie?.bus?.$emit('v3ActionModal', open)
}

export function createTriggerActionHandler(rootStore) {
  return (actionId, params = {}) => {
    if (!rootStore.actions[actionId]) {
      return false
    }

    const { v3Module, v3StoreParams, hasRootStore, hasTrigger, ...rest } = params
    const store = getStore(v3Module, v3StoreParams)

    rootStore.actions[actionId].on({
      ...rest,
      ...(hasRootStore ? { rootStore } : {}),
      ...(hasTrigger
        ? { trigger: rootStore.triggerAction.bind(rootStore) }
        : {}),
      store,
    })
    return true
  }
}
