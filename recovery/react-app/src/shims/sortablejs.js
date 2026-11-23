const lib = require("sortablejs");
const Sortable = lib.default || lib;

module.exports = Sortable;
module.exports.default = Sortable;
module.exports.Sortable = Sortable;
Object.keys(lib).forEach((key) => {
  if (key !== "default") {
    module.exports[key] = lib[key];
  }
});
