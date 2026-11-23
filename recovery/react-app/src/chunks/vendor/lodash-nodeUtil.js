"use strict";
// Webcrack of Wakaru-failed webpack factory module-1056 (vendor.js).
// lodash `_nodeUtil`: process.binding("util") / util.types.
const freeGlobal = require("../../unpacked/module-1644.js");
const processImpl = freeGlobal && freeGlobal.a && freeGlobal.a.process;
let nodeUtil;
try {
  nodeUtil =
    typeof require === "function" && require("util").types
      ? require("util").types
      : processImpl && processImpl.binding && processImpl.binding("util");
} catch (err) {
  nodeUtil = undefined;
}
module.exports = { a: nodeUtil, default: nodeUtil };
