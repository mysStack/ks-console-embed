const path = require("path");
const config = require("./webpack.config.js");

config.output = Object.assign({}, config.output, {
  path: path.resolve(__dirname, "phase4-build"),
  clean: true,
});

config.optimization = Object.assign({}, config.optimization, {
  concatenateModules: false,
});

module.exports = config;
