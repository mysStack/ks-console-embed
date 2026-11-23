const lib = require("js-base64");
const Base64 = lib.Base64 || lib;

module.exports = { Base64 };
module.exports.Base64 = Base64;
module.exports.default = { Base64 };
