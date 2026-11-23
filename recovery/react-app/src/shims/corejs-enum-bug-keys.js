const wrap = require("./cjs-default");
const keys = require("core-js3/internals/enum-bug-keys.js").slice();
module.exports = wrap(keys);
