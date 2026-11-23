"use strict";
const module1303 = require("unpacked/module-1303.js").default;
const o = [
    [
        "normalize",
        require("unpacked/module-2357.js").default
    ],
    [
        "block",
        require("unpacked/module-2358.js").default
    ],
    [
        "inline",
        require("unpacked/module-2359.js").default
    ],
    [
        "linkify",
        require("unpacked/module-2360.js").default
    ],
    [
        "replacements",
        require("unpacked/module-2361.js").default
    ],
    [
        "smartquotes",
        require("unpacked/module-2362.js").default
    ]
];
class i {
    constructor(){
        this.ruler = new module1303;
        for(let e = 0; e < o.length; e++){
            this.ruler.push(o[e][0], o[e][1]);
        }
    }
    process(e) {
        let n;
        let r;
        let t = 0;
        for(n = (r = this.ruler.getRules("")).length; t < n; t++){
            r[t](e);
        }
    }
}
i.prototype.State = require("unpacked/module-2363.js").default;
module.exports = i;
