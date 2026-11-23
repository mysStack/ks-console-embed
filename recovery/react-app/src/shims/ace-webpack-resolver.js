const ace = require("ace-builds/src-noconflict/ace");
if (typeof window !== "undefined") {
  window.ace = ace;
}
require("ace-builds/src-noconflict/mode-yaml");
require("ace-builds/src-noconflict/mode-groovy");
require("ace-builds/src-noconflict/theme-chaos");
require("ace-builds/src-noconflict/keybinding-vscode");
require("ace-builds/src-noconflict/ext-searchbox");
module.exports = {};
