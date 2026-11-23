"use strict";
const module8 = require("unpacked/module-8.js").default;
const module77 = require("unpacked/module-77.js").default;
const module99 = require("unpacked/module-99.js").default;
const module353 = require("unpacked/module-353.js").default;
const module263 = require("unpacked/module-263.js").default;
module8({
    target: "Array",
    proto: true,
    arity: 1,
    forced: require("unpacked/module-19.js").default(function() {
        return Array.prototype.push.call({
            length: 4294967296
        }, 1) !== 4294967297;
    }) || !(()=>{
        try {
            Object.defineProperty([], "length", {
                writable: false
            }).push();
        } catch (error) {
            return error instanceof TypeError;
        }
    })()
}, {
    push: function(e) {
        const t = module77(this);
        let n = module99(t);
        const arguments_length = arguments.length;
        module263(n + arguments_length);
        for(let s = 0; s < arguments_length; s++){
            t[n] = arguments[s];
            n++;
        }
        module353(t, n);
        return n;
    }
});
