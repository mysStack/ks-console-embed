const fit = require("xterm/lib/addons/fit/fit");

module.exports = fit;
module.exports.default = fit;
Object.keys(fit).forEach((key) => {
  module.exports[key] = fit[key];
});
