const PropTypes = require("prop-types");

module.exports = PropTypes;
Object.keys(PropTypes).forEach((key) => {
  module.exports[key] = PropTypes[key];
});
module.exports.default = PropTypes;
module.exports.__esModule = true;
