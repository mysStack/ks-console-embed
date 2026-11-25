const { readFileSync } = require('fs')
const { resolve } = require('path')
const test = require('node:test')
const assert = require('node:assert/strict')

const appSource = readFileSync(resolve(__dirname, 'App.jsx'), 'utf8')
const handlerSource = readFileSync(resolve(__dirname, 'wujieActions.js'), 'utf8')
const storeSource = readFileSync(
  resolve(__dirname, '../stores/getStore.js'),
  'utf8'
)

test('actions overlay listens for host triggerAction before actions finish loading', () => {
  assert.match(appSource, /shouldListenForHostActions/)
  assert.match(appSource, /\$on\('triggerAction'/)
  assert.match(appSource, /pendingTriggerAction/)
  assert.match(appSource, /loadCompleted/)
  assert.match(appSource, /skipHostRoute/)
  assert.match(appSource, /shouldNotifyHostOfInitialRoute/)
  assert.match(appSource, /shouldNotifyHostOfRouteChange/)
  assert.match(appSource, /data-test="console-v3-actions-root"/)
  assert.match(handlerSource, /props\.actions/)
  assert.match(handlerSource, /consoleV3Actions/)
  assert.match(handlerSource, /v3ActionModal/)
  const modalSource = readFileSync(
    resolve(__dirname, '../components/Base/Modal/modal.jsx'),
    'utf8'
  )
  assert.match(modalSource, /notifyHostActionModal\(true\)/)
  assert.match(modalSource, /notifyHostActionModal\(false\)/)
  assert.match(storeSource, /workload: module => new WorkloadStore\(module\)/)
})
