require("xterm/dist/xterm.css");

const xterm = require("xterm");
const Terminal = xterm.Terminal || xterm;

module.exports = { Terminal };
module.exports.Terminal = Terminal;
module.exports.default = { Terminal };
