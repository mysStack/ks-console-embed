const g = require("core-js3/internals/global.js");
const exp = {
  __esModule: true,
  default: g,
  RegExp: g.RegExp,
  String: g.String,
  Number: g.Number,
  TypeError: g.TypeError,
  RangeError: g.RangeError,
  SyntaxError: g.SyntaxError,
  Error: g.Error,
  Symbol: g.Symbol,
  Object: g.Object,
  Array: g.Array,
  Function: g.Function,
  Date: g.Date,
  Map: g.Map,
  Set: g.Set,
  Promise: g.Promise,
  Reflect: g.Reflect,
  JSON: g.JSON,
  Math: g.Math,
  parseInt: g.parseInt,
  parseFloat: g.parseFloat,
};
module.exports = new Proxy(exp, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    }
    return g[prop];
  },
  has(target, prop) {
    return prop in target || prop in g;
  },
});
