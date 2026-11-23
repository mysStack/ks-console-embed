const module100 = require("./module-100.js").default;
const module627 = require("./module-627.js").default;
const a = exports && !exports.nodeType && exports;
const i = a && typeof module === "object" && module && !module.nodeType && module;
const l = i && i.exports === a ? module100.Buffer : undefined;
const s = (l ? l.isBuffer : undefined) || module627;
module.exports = s;
