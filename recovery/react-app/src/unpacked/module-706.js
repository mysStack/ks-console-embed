"use strict";
const module8 = require("./module-8.js").default;
const module25 = require("./module-25.js");
const setTimeout = require("./module-423.js").default(module25.setTimeout, true);
module8({
    global: true,
    bind: true,
    forced: module25.setTimeout !== setTimeout
}, {
    setTimeout
});
