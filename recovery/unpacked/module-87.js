"use strict";
const module8 = require("./module-8.js").default;
const left = require("./module-487.js").default.left;
const module128 = require("./module-128.js").default;
const module146 = require("./module-146.js").default;
module8({
    target: "Array",
    proto: true,
    forced: !require("./module-162.js").default && module146 > 79 && module146 < 83 || !module128("reduce")
}, {
    reduce: function(e) {
        const arguments_length = arguments.length;
        return left(this, e, arguments_length, arguments_length > 1 ? arguments[1] : undefined);
    }
});
