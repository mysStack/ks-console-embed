const lib = require("d3-selection");

module.exports = lib;
module.exports.default = lib;
Object.keys(lib).forEach((key) => {
  module.exports[key] = lib[key];
});
