"use strict";
const r = {};
r[require("./module-40.js").default("toStringTag")] = "z";
module.exports = String(r) === "[object z]";
