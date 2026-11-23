"use strict";
const module8 = require("unpacked/module-8.js").default;
const every = require("unpacked/module-112.js").default.every;
module8({
    target: "Array",
    proto: true,
    forced: !require("unpacked/module-128.js").default("every")
}, {
    every: function(e, _param_1) {
        return every(this, e, _param_1);
    }
});
