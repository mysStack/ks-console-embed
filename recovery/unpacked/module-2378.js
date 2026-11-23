"use strict";
const module1303 = require("./module-1303.js").default;
const o = [
    [
        "text",
        require("./module-2379.js").default
    ],
    [
        "newline",
        require("./module-2380.js").default
    ],
    [
        "escape",
        require("./module-2381.js").default
    ],
    [
        "backticks",
        require("./module-2382.js").default
    ],
    [
        "strikethrough",
        require("./module-1562.js").tokenize
    ],
    [
        "emphasis",
        require("./module-1563.js").tokenize
    ],
    [
        "link",
        require("./module-2383.js").default
    ],
    [
        "image",
        require("./module-2384.js").default
    ],
    [
        "autolink",
        require("./module-2385.js").default
    ],
    [
        "html_inline",
        require("./module-2386.js").default
    ],
    [
        "entity",
        require("./module-2387.js").default
    ]
];
const i = [
    [
        "balance_pairs",
        require("./module-2388.js").default
    ],
    [
        "strikethrough",
        require("./module-1562.js").postProcess
    ],
    [
        "emphasis",
        require("./module-1563.js").postProcess
    ],
    [
        "text_collapse",
        require("./module-2389.js").default
    ]
];
class a {
    constructor(){
        let e;
        this.ruler = new module1303;
        for(e = 0; e < o.length; e++){
            this.ruler.push(o[e][0], o[e][1]);
        }
        this.ruler2 = new module1303;
        for(e = 0; e < i.length; e++){
            this.ruler2.push(i[e][0], i[e][1]);
        }
    }
    skipToken(e) {
        let t;
        let n;
        const e_pos = e.pos;
        const o = this.ruler.getRules("");
        const o_length = o.length;
        const maxNesting = e.md.options.maxNesting;
        const e_cache = e.cache;
        if (e_cache[e_pos] === undefined) {
            if (e.level < maxNesting) {
                for(n = 0; n < o_length && (e.level++, t = o[n](e, true), e.level--, !t); n++);
            } else {
                e.pos = e.posMax;
            }
            if (!t) {
                e.pos++;
            }
            e_cache[e_pos] = e.pos;
        } else {
            e.pos = e_cache[e_pos];
        }
    }
    tokenize(e) {
        let t;
        let n;
        const r = this.ruler.getRules("");
        const r_length = r.length;
        for(const i = e.posMax, a = e.md.options.maxNesting; e.pos < i;){
            if (e.level < a) {
                for(n = 0; n < r_length && !(t = r[n](e, false)); n++);
            }
            if (t) {
                if (e.pos >= i) {
                    break;
                }
            } else {
                e.pending += e.src[e.pos++];
            }
        }
        if (e.pending) {
            e.pushPending();
        }
    }
    parse(e, t, n, r) {
        let o;
        let i;
        let a;
        const l = new this.State(e, t, n, r);
        this.tokenize(l);
        a = (i = this.ruler2.getRules("")).length;
        for(o = 0; o < a; o++){
            i[o](l);
        }
    }
}
a.prototype.State = require("./module-2390.js").default;
module.exports = a;
