const lib = require("file-saver");
const saveAs = lib.saveAs || lib;

module.exports = { saveAs };
module.exports.saveAs = saveAs;
module.exports.default = { saveAs };
