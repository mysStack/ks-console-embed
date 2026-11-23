"use strict";
const module91 = require("./module-91.js").default;
const module90 = require("./module-90.js").default;
const a = require("./module-150.js").f;
const module124 = require("./module-124.js").default;
const l = typeof window === "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
module.exports.f = function(e) {
    if (l && module91(e) === "Window") {
        return ((e)=>{
            try {
                return a(e);
            } catch (e) {
                return module124(l);
            }
        })(e);
    }
    return a(module90(e));
};
