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
  assert.match(handlerSource, /props\.actions/)
  assert.match(handlerSource, /consoleV3Actions/)
  assert.match(storeSource, /workload: module => new WorkloadStore\(module\)/)
})
