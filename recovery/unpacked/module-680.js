"use strict";
const module8 = require("./module-8.js").default;
const isSupersetOf = require("./module-681.js").default;
module8({
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-133.js").default("isSupersetOf")
}, {
    isSupersetOf
});
