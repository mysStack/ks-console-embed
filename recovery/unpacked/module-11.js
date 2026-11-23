"use strict";
const module8 = require("./module-8.js").default;
const filter = require("./module-112.js").default.filter;
module8({
    target: "Array",
    proto: true,
    forced: !require("./module-179.js").default("filter")
}, {
    filter: function(e, _param_1) {
        return filter(this, e, _param_1);
    }
});
