"use strict";
const module1745 = require("./module-1745.js").default;
const module1746 = require("./module-1746.js").default;
const module3412 = require("./module-3412.js").default;
module.exports = function(e, ...args) {
    let t;
    const a = module1745(args[0]);
    if (!a.normalizer) {
        if ((t = a.length = module1746(a.length, e.length, a.async)) !== 0) {
            if (a.primitive) {
                if (t === false) {
                    a.normalizer = require("./module-3447.js").default;
                } else if (t > 1) {
                    a.normalizer = require("./module-3448.js").default(t);
                }
            } else {
                a.normalizer = t === false ? require("./module-3449.js").default() : t === 1 ? require("./module-3453.js").default() : require("./module-3454.js").default(t);
            }
        }
    }
    if (a.async) {
        require("./module-3455.js");
    }
    if (a.promise) {
        require("./module-3458.js");
    }
    if (a.dispose) {
        require("./module-3464.js");
    }
    if (a.maxAge) {
        require("./module-3465.js");
    }
    if (a.max) {
        require("./module-3468.js");
    }
    if (a.refCounter) {
        require("./module-3470.js");
    }
    return module3412(e, a);
};
