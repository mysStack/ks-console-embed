"use strict";
const module54 = require("./module-54.js").default;
const module91 = require("./module-91.js").default;
const a = require("./module-40.js").default("match");
module.exports = function(e) {
    let t;
    return module54(e) && ((t = e[a]) !== undefined ? !!t : module91(e) === "RegExp");
};
