"use strict";
const module8 = require("./module-8.js").default;
const from = require("./module-502.js").default;
module8({
    target: "Array",
    stat: true,
    forced: !require("./module-271.js")(function(e) {
        Array.from(e);
    })
}, {
    from
});
