import {
  getEmbeddedRoute,
  getHostRoute,
  getParentHostPathname,
  isHostOnDeeperResource,
  shouldNotifyHostOfInitialRoute,
  shouldNotifyHostOfRouteChange,
} from './routeSync'

const DETAIL =
  '/dev-workspace/clusters/host/projects/dev-wes/deployments/wes-v2-server/resource-status'
const LIST = '/dev-workspace/clusters/host/projects/dev-wes/deployments'

describe('getHostRoute', () => {
  it('removes the consolev3 prefix from an embedded route', () => {
    expect(
      getHostRoute(
        '/consolev3/dev-workspace/clusters/host/projects/dev-wes/deployments/wes-v2-server/resource-status'
      )
    ).toBe(
      '/dev-workspace/clusters/host/projects/dev-wes/deployments/wes-v2-server/resource-status'
    )
  })

  it('ignores routes outside the embedded console', () => {
    expect(getHostRoute('/login')).toBeNull()
  })

  it('adds the embedded prefix to history paths', () => {
    expect(getEmbeddedRoute('/projects')).toBe('/consolev3/projects')
    expect(getEmbeddedRoute('/consolev3/projects')).toBe('/consolev3/projects')
  })
})

describe('direct detail must not follow the boot list URL', () => {
  it('detects a host detail sitting under the child list path', () => {
    expect(isHostOnDeeperResource(DETAIL, LIST)).toBe(true)
    expect(isHostOnDeeperResource(DETAIL, `/consolev3${LIST}`)).toBe(true)
    expect(isHostOnDeeperResource(LIST, LIST)).toBe(false)
    expect(isHostOnDeeperResource(LIST, `${LIST}/wes-v2-server`)).toBe(false)
  })

  it('skips the initial mount report when the host is already on detail', () => {
    expect(
      shouldNotifyHostOfInitialRoute({
        childPathname: LIST,
        hostPathname: DETAIL,
      })
    ).toBe(false)
    expect(
      shouldNotifyHostOfInitialRoute({
        childPathname: LIST,
        hostPathname: LIST,
      })
    ).toBe(true)
  })

  it('notifies PUSH list clicks so breadcrumbs still leave detail', () => {
    expect(
      shouldNotifyHostOfRouteChange({
        action: 'PUSH',
        childPathname: LIST,
        hostPathname: DETAIL,
      })
    ).toBe(true)
  })

  it('ignores replace/popstate of the boot list while the host is on detail', () => {
    expect(
      shouldNotifyHostOfRouteChange({
        action: 'POP',
        childPathname: LIST,
        hostPathname: DETAIL,
      })
    ).toBe(false)
    expect(
      shouldNotifyHostOfRouteChange({
        action: 'REPLACE',
        childPathname: LIST,
        hostPathname: DETAIL,
      })
    ).toBe(false)
    expect(
      shouldNotifyHostOfRouteChange({
        childPathname: LIST,
        hostPathname: DETAIL,
      })
    ).toBe(false)
  })

  it('still reports list-to-detail PUSH and same-route boots', () => {
    expect(
      shouldNotifyHostOfRouteChange({
        action: 'PUSH',
        childPathname: `${LIST}/wes-v2-server`,
        hostPathname: LIST,
      })
    ).toBe(true)
    expect(
      shouldNotifyHostOfRouteChange({
        childPathname: LIST,
        hostPathname: LIST,
      })
    ).toBe(true)
  })

  it('reads the parent host path from the embedding window', () => {
    expect(
      getParentHostPathname({
        parent: { location: { pathname: DETAIL } },
      })
    ).toBe(DETAIL)
    expect(
      getParentHostPathname({
        get parent() {
          throw new Error('cross-origin')
        },
      })
    ).toBe('')
  })
})
