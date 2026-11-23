"use strict";
const module8 = require("./module-8.js").default;
const module19 = require("./module-19.js").default;
const intersection = require("./module-675.js").default;
module8({
    target: "Set",
    proto: true,
    real: true,
    forced: !require("./module-133.js").default("intersection") || module19(function() {
        return String(Array.from(new Set([
            1,
            2,
            3
        ]).intersection(new Set([
            3,
            2
        ])))) !== "3,2";
    })
}, {
    intersection
});
