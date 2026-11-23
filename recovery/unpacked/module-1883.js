const r = require("./module-1878.js")("keys");
const module1877 = require("./module-1877.js").default;
module.exports = function(e) {
    return r[e] || (r[e] = module1877(e));
};
