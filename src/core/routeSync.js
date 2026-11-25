const EMBEDDED_PREFIX = '/consolev3'

export const getHostRoute = pathname => {
  if (!pathname || !pathname.startsWith(`${EMBEDDED_PREFIX}/`)) {
    return null
  }

  return pathname.slice(EMBEDDED_PREFIX.length) || '/'
}

export const getEmbeddedRoute = pathname => {
  if (!pathname) {
    return EMBEDDED_PREFIX
  }
  return pathname.startsWith(EMBEDDED_PREFIX)
    ? pathname
    : `${EMBEDDED_PREFIX}${
        pathname.startsWith('/') ? pathname : `/${pathname}`
      }`
}

const stripTrailingSlash = pathname => {
  if (!pathname) {
    return ''
  }
  return pathname.replace(/\/+$/, '') || '/'
}

const toHostPathname = pathname => {
  const mapped = getHostRoute(pathname)
  return stripTrailingSlash(mapped || pathname)
}

export const isHostOnDeeperResource = (hostPathname, childPathname) => {
  const host = toHostPathname(hostPathname)
  const child = toHostPathname(getEmbeddedRoute(childPathname))
  if (!host || !child || host === child) {
    return false
  }
  return host.startsWith(`${child}/`)
}

export const shouldNotifyHostOfInitialRoute = ({
  childPathname,
  hostPathname,
} = {}) => !isHostOnDeeperResource(hostPathname, childPathname)

export const shouldNotifyHostOfRouteChange = ({
  action,
  childPathname,
  hostPathname,
} = {}) => {
  if (action && action !== 'PUSH') {
    return false
  }
  if (!action && isHostOnDeeperResource(hostPathname, childPathname)) {
    return false
  }
  return true
}

export const getParentHostPathname = (win = window) => {
  try {
    return win.parent?.location?.pathname || ''
  } catch (err) {
    return ''
  }
}

export const notifyHostRouteChange = (location, action) => {
  if (typeof window === 'undefined' || !window.__POWERED_BY_WUJIE__) {
    return
  }

  const pathname = location?.pathname || window.location.pathname
  const search = location?.search || window.location.search
  const hash = location?.hash || window.location.hash
  const embeddedPath = getEmbeddedRoute(pathname)
  const route = `${embeddedPath}${search}${hash}`
  window.$wujie?.bus?.$emit('consoleRouteChange', route, action)
  if (window.parent !== window) {
    window.parent.postMessage(
      { type: 'consoleRouteChange', route, action },
      window.location.origin
    )
  }
}
