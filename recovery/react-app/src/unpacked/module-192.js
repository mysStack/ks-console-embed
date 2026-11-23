"use strict";
const module8 = require("unpacked/module-8.js").default;
const module77 = require("unpacked/module-77.js").default;
const module256 = require("unpacked/module-256.js").default;
const module111 = require("unpacked/module-111.js").default;
const module99 = require("unpacked/module-99.js").default;
const module353 = require("unpacked/module-353.js").default;
const module263 = require("unpacked/module-263.js").default;
const module259 = require("unpacked/module-259.js").default;
const module178 = require("unpacked/module-178.js").default;
const module340 = require("unpacked/module-340.js").default;
const p = require("unpacked/module-179.js").default("splice");
module8({
    target: "Array",
    proto: true,
    forced: !p
}, {
    splice: function(e, t) {
        let n;
        let r;
        let p;
        let m;
        let g;
        let y;
        const b = module77(this);
        const C = module99(b);
        const w = module256(e, C);
        const arguments_length = arguments.length;
        switch(arguments_length){
            case 0:
                r = 0;
                n = 0;
                break;
            case 1:
                n = 0;
                r = C - w;
                break;
            default:
                n = arguments_length - 2;
                r = Math.min(Math.max(module111(t), 0), C - w);
        }
        module263(C + n - r);
        p = module259(b, r);
        for(m = 0; m < r; m++){
            if ((g = w + m) in b) {
                module178(p, m, b[g]);
            }
        }
        p.length = r;
        if (n < r) {
            for(m = w; m < C - r; m++){
                y = m + n;
                if ((g = m + r) in b) {
                    b[y] = b[g];
                } else {
                    module340(b, y);
                }
            }
            for(m = C; m > C - r + n; m--){
                module340(b, m - 1);
            }
        } else if (n > r) {
            for(m = C - r; m > w; m--){
                y = m + n - 1;
                if ((g = m + r - 1) in b) {
                    b[y] = b[g];
                } else {
                    module340(b, y);
                }
            }
        }
        for(m = 0; m < n; m++){
            b[m + w] = arguments[m + 2];
        }
        module353(b, C - r + n);
        return p;
    }
});
