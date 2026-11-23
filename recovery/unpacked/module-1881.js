const module4482 = require("./module-4482.js");
const module1875 = require("./module-1875.js").default;
const module1425 = require("./module-1425.js").default;
const module1421 = require("./module-1421.js").default;
const module1238 = require("./module-1238.js").default;
const module1873 = require("./module-1873.js");
exports.f = require("./module-1077.js") ? Object.getOwnPropertyDescriptor : function(e, t) {
    e = module1425(e);
    t = module1421(t, true);
    if (module1873) {
        try {
            return Object.getOwnPropertyDescriptor(e, t);
        } catch (e) {}
    }
    if (module1238(e, t)) {
        return module1875(!module4482.f.call(e, t), e[t]);
    }
};
