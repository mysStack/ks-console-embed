const module1420 = require("./module-1420.js");
const module1875 = require("./module-1875.js").default;
module.exports = require("./module-1077.js") ? function(e, t, n) {
    return module1420.f(e, t, module1875(1, n));
} : function(e, t, n) {
    e[t] = n;
    return e;
};
