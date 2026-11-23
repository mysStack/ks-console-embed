"use strict";
const module8 = require("./module-8.js").default;
const module168 = require("./module-168.js");
module8({
    target: "Promise",
    stat: true,
    forced: require("./module-176.js").default.CONSTRUCTOR
}, {
    reject: function(e) {
        const t = module168.f(this);
        t.reject(e);
        return t.promise;
    }
});
