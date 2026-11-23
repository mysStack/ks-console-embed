"use strict";
const module33 = require("./module-33.js").default;
const module39 = require("./module-39.js").default;
const module218 = require("./module-218.js");
const module143 = require("./module-143.js").default;
const module90 = require("./module-90.js").default;
const module266 = require("./module-266.js").default;
const module53 = require("./module-53.js").default;
const module365 = require("./module-365.js").default;
exports.f = module33 ? Object.getOwnPropertyDescriptor : function(e, t) {
    e = module90(e);
    t = module266(t);
    if (module365) {
        try {
            return Object.getOwnPropertyDescriptor(e, t);
        } catch (e) {}
    }
    if (module53(e, t)) {
        return module143(!module39(module218.f, e, t), e[t]);
    }
};
