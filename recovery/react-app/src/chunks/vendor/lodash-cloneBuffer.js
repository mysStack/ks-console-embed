"use strict";
// Webcrack of Wakaru-failed webpack factory module-1648 (vendor.js).
// lodash `_cloneBuffer`: Buffer.allocUnsafe copy, else typed-array copy.
const root = require("../../unpacked/module-861.js");
const BufferImpl = root && root.a && root.a.Buffer;
const allocUnsafe = BufferImpl ? BufferImpl.allocUnsafe : undefined;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  const length = buffer.length;
  const result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
module.exports = { a: cloneBuffer, default: cloneBuffer };
