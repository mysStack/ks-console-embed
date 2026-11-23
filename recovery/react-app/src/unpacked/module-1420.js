const module1237 = require("unpacked/module-1237.js").default;
const module1873 = require("unpacked/module-1873.js");
const module1421 = require("unpacked/module-1421.js").default;
exports.f = require("unpacked/module-1077.js") ? Object.defineProperty : function(e, t, n) {
    module1237(e);
    t = module1421(t, true);
    module1237(n);
    if (module1873) {
        try {
            return Object.defineProperty(e, t, n);
        } catch (e) {}
    }
    if ("get" in n || "set" in n) {
        throw TypeError("Accessors not supported!");
    }
    if ("value" in n) {
        e[t] = n.value;
    }
    return e;
};
