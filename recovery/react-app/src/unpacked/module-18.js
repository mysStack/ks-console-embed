"use strict";
const module8 = require("unpacked/module-8.js").default;
const map = require("unpacked/module-112.js").default.map;
module8({
    target: "Array",
    proto: true,
    forced: !require("unpacked/module-179.js").default("map")
}, {
    map: function(e, _param_1) {
        return map(this, e, _param_1);
    }
});
