"use strict";
require("./module-8.js").default({
    target: "Number",
    stat: true
}, {
    isNaN: function(e) {
        return e != e;
    }
});
