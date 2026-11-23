/** ArrayBuffer copy with Buffer.from fallback. Not lodash/_cloneBuffer (npm uses allocUnsafe). */
function copyArrayBuffer(input, isDeep) {
  if (isDeep) {
    return input.slice();
  }
  if (typeof Buffer !== "undefined" && Buffer.from) {
    return Buffer.from(input);
  }
  return input.slice();
}

module.exports = { a: copyArrayBuffer };
module.exports.a = copyArrayBuffer;
module.exports.default = copyArrayBuffer;
