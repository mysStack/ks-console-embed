"use strict";
const module8 = require("./module-8.js").default;
const map = require("./module-112.js").default.map;
module8({
    target: "Array",
    proto: true,
    forced: !require("./module-179.js").default("map")
}, {
    map: function(e, _param_1) {
        return map(this, e, _param_1);
    }
});
