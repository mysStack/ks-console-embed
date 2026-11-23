/** Browser Buffer.isBuffer fallback. Not lodash/isBuffer (2-hit leftover, missing nativeIsBuffer). */
function isBuffer(value) {
  return typeof Buffer !== "undefined" && typeof Buffer.isBuffer === "function"
    ? Buffer.isBuffer(value)
    : false;
}

module.exports = { a: isBuffer };
module.exports.a = isBuffer;
module.exports.default = isBuffer;
