"use strict";
const module8 = require("unpacked/module-8.js").default;
const trim = require("unpacked/module-214.js").default.trim;
module8({
    target: "String",
    proto: true,
    forced: require("unpacked/module-530.js").default("trim")
}, {
    trim: function() {
        return trim(this);
    }
});
