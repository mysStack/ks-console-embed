const semver = require("semver");
const lib = semver.default || semver;

module.exports = lib;
module.exports.default = lib;
module.exports.gte = lib.gte;
module.exports.satisfies = lib.satisfies;
module.exports.validRange = lib.validRange;
module.exports.parse = lib.parse;
module.exports.valid = lib.valid;
module.exports.coerce = lib.coerce;
module.exports.SemVer = lib.SemVer;
module.exports.Range = lib.Range;
