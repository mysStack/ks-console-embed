"use strict";
const module8 = require("./module-8.js").default;
const trim = require("./module-214.js").default.trim;
module8({
    target: "String",
    proto: true,
    forced: require("./module-530.js").default("trim")
}, {
    trim: function() {
        return trim(this);
    }
});
