const module964 = require("unpacked/module-964.js").default;
const module1872 = require("unpacked/module-1872.js");
const module1238 = require("unpacked/module-1238.js").default;
const a = require("unpacked/module-1877.js").default("src");
const module4458 = require("unpacked/module-4458.js").default;
const u = `${module4458}`.split("toString");
require("unpacked/module-1139.js").default.inspectSource = function(e) {
    return module4458.call(e);
};
(module.exports = function(e, t, n, l) {
    const s = typeof n === "function";
    if (s) {
        if (!module1238(n, "name")) {
            module1872(n, "name", t);
        }
    }
    if (e[t] !== n) {
        if (s) {
            if (!module1238(n, a)) {
                module1872(n, a, e[t] ? `${e[t]}` : u.join(String(t)));
            }
        }
        if (e === module964) {
            e[t] = n;
        } else if (l) {
            if (e[t]) {
                e[t] = n;
            } else {
                module1872(e, t, n);
            }
        } else {
            delete e[t];
            module1872(e, t, n);
        }
    }
})(Function.prototype, "toString", function() {
    return typeof this === "function" && this[a] || module4458.call(this);
});
