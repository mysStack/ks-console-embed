"use strict";
const module202 = require("./module-202.js");
const module126 = require("./module-126.js").default;
const module103 = require("./module-103.js").default;
const module177 = require("./module-177.js").default;
const l = require("./module-40.js").default("iterator");
module.exports = function(e) {
    if (!module103(e)) {
        return module126(e, l) || module126(e, "@@iterator") || module177[module202(e)];
    }
};
