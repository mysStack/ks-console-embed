"use strict";
const module8 = require("unpacked/module-8.js").default;
const some = require("unpacked/module-112.js").default.some;
module8({
    target: "Array",
    proto: true,
    forced: !require("unpacked/module-128.js").default("some")
}, {
    some: function(e, _param_1) {
        return some(this, e, _param_1);
    }
});
