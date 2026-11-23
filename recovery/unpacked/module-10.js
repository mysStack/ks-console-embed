"use strict";
const module8 = require("./module-8.js").default;
const module77 = require("./module-77.js").default;
const module175 = require("./module-175.js").default;
module8({
    target: "Object",
    stat: true,
    forced: require("./module-19.js").default(function() {
        module175(1);
    })
}, {
    keys: function(e) {
        return module175(module77(e));
    }
});
