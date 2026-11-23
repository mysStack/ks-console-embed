"use strict";
const module8 = require("unpacked/module-8.js").default;
const module168 = require("unpacked/module-168.js");
module8({
    target: "Promise",
    stat: true,
    forced: require("unpacked/module-176.js").default.CONSTRUCTOR
}, {
    reject: function(e) {
        const t = module168.f(this);
        t.reject(e);
        return t.promise;
    }
});
