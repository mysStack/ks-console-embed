const lib = require("react-sortablejs");
const ReactSortable = lib.ReactSortable || lib.default || lib;

module.exports = lib;
module.exports.default = lib.default || lib;
module.exports.ReactSortable = ReactSortable;
