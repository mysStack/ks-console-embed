const Prism = require("prismjs");

module.exports = Prism;
module.exports.default = Prism;
Object.keys(Prism).forEach((key) => {
  module.exports[key] = Prism[key];
});
