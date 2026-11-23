/** Attach leftover-style `.default` on a CJS value. Do not use for globalThis. */
function wrapCjsDefault(value) {
  if (value == null) {
    return { __esModule: true, default: value };
  }
  if (typeof value === "function" || typeof value === "object") {
    try {
      if (!Object.prototype.hasOwnProperty.call(value, "default")) {
        Object.defineProperty(value, "default", {
          configurable: true,
          enumerable: false,
          writable: true,
          value,
        });
      }
      return value;
    } catch (_err) {
      return { __esModule: true, default: value };
    }
  }
  return { __esModule: true, default: value };
}

module.exports = wrapCjsDefault;
