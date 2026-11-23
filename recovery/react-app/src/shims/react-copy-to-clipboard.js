const lib = require("react-copy-to-clipboard");
const CopyToClipboard = lib.CopyToClipboard || lib.default || lib;
CopyToClipboard.CopyToClipboard = CopyToClipboard;

module.exports = CopyToClipboard;
module.exports.default = CopyToClipboard;
module.exports.CopyToClipboard = CopyToClipboard;
