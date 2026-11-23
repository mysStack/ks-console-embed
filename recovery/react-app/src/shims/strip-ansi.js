const stripAnsi = require("strip-ansi");
const lib = stripAnsi.default || stripAnsi;

module.exports = lib;
module.exports.default = lib;
