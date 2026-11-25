const { readFileSync } = require('fs')
const { resolve } = require('path')
const vm = require('vm')
const test = require('node:test')
const assert = require('node:assert/strict')

const source = `${readFileSync(resolve(__dirname, 'routeSync.js'), 'utf8').replace(
  /export const /g,
  'const '
)}
Object.assign(exports, {
  getHostRoute,
  getEmbeddedRoute,
  isHostOnDeeperResource,
  shouldNotifyHostOfInitialRoute,
  shouldNotifyHostOfRouteChange,
  getParentHostPathname,
  notifyHostRouteChange,
})`
const exported = {}
vm.runInNewContext(source, { exports: exported, module: { exports: exported } })

const {
  getEmbeddedRoute,
  getHostRoute,
  getParentHostPathname,
  isHostOnDeeperResource,
  shouldNotifyHostOfInitialRoute,
  shouldNotifyHostOfRouteChange,
} = exported

const DETAIL =
  '/dev-workspace/clusters/host/projects/dev-wes/deployments/wes-v2-server/resource-status'
const LIST = '/dev-workspace/clusters/host/projects/dev-wes/deployments'

test('removes the consolev3 prefix from an embedded route', () => {
  assert.equal(
    getHostRoute(
      '/consolev3/dev-workspace/clusters/host/projects/dev-wes/deployments/wes-v2-server/resource-status'
    ),
    '/dev-workspace/clusters/host/projects/dev-wes/deployments/wes-v2-server/resource-status'
  )
})

test('ignores routes outside the embedded console', () => {
  assert.equal(getHostRoute('/login'), null)
})

test('adds the embedded prefix to history paths', () => {
  assert.equal(getEmbeddedRoute('/projects'), '/consolev3/projects')
  assert.equal(getEmbeddedRoute('/consolev3/projects'), '/consolev3/projects')
})

test('detects a host detail sitting under the child list path', () => {
  assert.equal(isHostOnDeeperResource(DETAIL, LIST), true)
  assert.equal(isHostOnDeeperResource(DETAIL, `/consolev3${LIST}`), true)
  assert.equal(isHostOnDeeperResource(LIST, LIST), false)
  assert.equal(isHostOnDeeperResource(LIST, `${LIST}/wes-v2-server`), false)
})

test('skips the initial mount report when the host is already on detail', () => {
  assert.equal(
    shouldNotifyHostOfInitialRoute({
      childPathname: LIST,
      hostPathname: DETAIL,
    }),
    false
  )
  assert.equal(
    shouldNotifyHostOfInitialRoute({
      childPathname: LIST,
      hostPathname: LIST,
    }),
    true
  )
})

test('notifies PUSH list clicks so breadcrumbs still leave detail', () => {
  assert.equal(
    shouldNotifyHostOfRouteChange({
      action: 'PUSH',
      childPathname: LIST,
      hostPathname: DETAIL,
    }),
    true
  )
})

test('ignores replace/popstate of the boot list while the host is on detail', () => {
  assert.equal(
    shouldNotifyHostOfRouteChange({
      action: 'POP',
      childPathname: LIST,
      hostPathname: DETAIL,
    }),
    false
  )
  assert.equal(
    shouldNotifyHostOfRouteChange({
      action: 'REPLACE',
      childPathname: LIST,
      hostPathname: DETAIL,
    }),
    false
  )
  assert.equal(
    shouldNotifyHostOfRouteChange({
      childPathname: LIST,
      hostPathname: DETAIL,
    }),
    false
  )
})

test('still reports list-to-detail PUSH and same-route boots', () => {
  assert.equal(
    shouldNotifyHostOfRouteChange({
      action: 'PUSH',
      childPathname: `${LIST}/wes-v2-server`,
      hostPathname: LIST,
    }),
    true
  )
  assert.equal(
    shouldNotifyHostOfRouteChange({
      childPathname: LIST,
      hostPathname: LIST,
    }),
    true
  )
})

test('reads the parent host path from the embedding window', () => {
  assert.equal(
    getParentHostPathname({
      parent: { location: { pathname: DETAIL } },
    }),
    DETAIL
  )
  assert.equal(
    getParentHostPathname({
      get parent() {
        throw new Error('cross-origin')
      },
    }),
    ''
  )
})
