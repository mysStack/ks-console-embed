"use strict";
const module8 = require("./module-8.js").default;
const isDisjointFrom = require("./module-677.js").default;
module8({
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-133.js").default("isDisjointFrom")
}, {
    isDisjointFrom
});
