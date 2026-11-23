"use strict";
const module8 = require("./module-8.js").default;
const module1551 = require("./module-1551.js").default;
module8({
    target: "String",
    proto: true,
    forced: require("./module-1552.js").default("link")
}, {
    link: function(e) {
        return module1551(this, "a", "href", e);
    }
});
