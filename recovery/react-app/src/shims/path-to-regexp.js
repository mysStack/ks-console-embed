const lib = require("path-to-regexp");
const pathToRegexp = lib.default || lib;

module.exports = pathToRegexp;
module.exports.default = pathToRegexp;
module.exports.parse = lib.parse;
module.exports.compile = lib.compile;
module.exports.tokensToFunction = lib.tokensToFunction;
module.exports.tokensToRegExp = lib.tokensToRegExp;
