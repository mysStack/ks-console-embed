"use strict";
const module1303 = require("./module-1303.js").default;
const o = [
    [
        "normalize",
        require("./module-2357.js").default
    ],
    [
        "block",
        require("./module-2358.js").default
    ],
    [
        "inline",
        require("./module-2359.js").default
    ],
    [
        "linkify",
        require("./module-2360.js").default
    ],
    [
        "replacements",
        require("./module-2361.js").default
    ],
    [
        "smartquotes",
        require("./module-2362.js").default
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
i.prototype.State = require("./module-2363.js").default;
module.exports = i;
