"use strict";
if (typeof Object.assign !== "function") {
    Object.assign = function(e, ...t) {
        if (!e) {
            throw TypeError("Cannot convert undefined or null to object");
        }
        for (const n of t){
            if (n) {
                Object.keys(n).forEach((t)=>e[t] = n[t]);
            }
        }
        return e;
    };
}
