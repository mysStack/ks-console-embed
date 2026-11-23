"use strict";
const module25 = require("./module-25.js");
const module372 = require("./module-372.js").default;
const module373 = require("./module-373.js");
const module30 = require("./module-30.js").default;
const module102 = require("./module-102.js").default;
const module123 = require("./module-123.js");
const u = require("./module-40.js").default("iterator");
const module30_values = module30.values;
const f = function(e, t) {
    if (e) {
        if (e[u] !== module30_values) {
            try {
                module102(e, u, module30_values);
            } catch (t) {
                e[u] = module30_values;
            }
        }
        module123(e, t, true);
        if (module372[t]) {
            for(const n in module30){
                if (e[n] !== module30[n]) {
                    try {
                        module102(e, n, module30[n]);
                    } catch (t) {
                        e[n] = module30[n];
                    }
                }
            }
        }
    }
};
for(const d in module372){
    f(module25[d] && module25[d].prototype, d);
}
f(module373, "DOMTokenList");
