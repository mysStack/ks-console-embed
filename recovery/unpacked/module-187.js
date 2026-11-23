"use strict";
const module8 = require("./module-8.js").default;
const every = require("./module-112.js").default.every;
module8({
    target: "Array",
    proto: true,
    forced: !require("./module-128.js").default("every")
}, {
    every: function(e, _param_1) {
        return every(this, e, _param_1);
    }
});
