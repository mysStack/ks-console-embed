"use strict";
const module127 = require("./module-127.js").default;
const module222 = require("./module-222.js").default;
const module54 = require("./module-54.js").default;
const i = require("./module-40.js").default("species");
module.exports = function(e) {
    let t;
    if (module127(e)) {
        t = e.constructor;
        if (module222(t) && (t === Array || module127(t.prototype)) || module54(t) && (t = t[i]) === null) {
            t = undefined;
        }
    }
    if (t === undefined) {
        return Array;
    }
    return t;
};
