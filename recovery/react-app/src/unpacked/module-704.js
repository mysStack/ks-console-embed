"use strict";
const module8 = require("./module-8.js").default;
const module25 = require("./module-25.js");
const setInterval = require("./module-423.js").default(module25.setInterval, true);
module8({
    global: true,
    bind: true,
    forced: module25.setInterval !== setInterval
}, {
    setInterval
});
