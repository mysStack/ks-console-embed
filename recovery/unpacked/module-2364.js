"use strict";
const module1303 = require("./module-1303.js").default;
const o = [
    [
        "table",
        require("./module-2365.js").default,
        [
            "paragraph",
            "reference"
        ]
    ],
    [
        "code",
        require("./module-2366.js").default
    ],
    [
        "fence",
        require("./module-2367.js").default,
        [
            "paragraph",
            "reference",
            "blockquote",
            "list"
        ]
    ],
    [
        "blockquote",
        require("./module-2368.js").default,
        [
            "paragraph",
            "reference",
            "blockquote",
            "list"
        ]
    ],
    [
        "hr",
        require("./module-2369.js").default,
        [
            "paragraph",
            "reference",
            "blockquote",
            "list"
        ]
    ],
    [
        "list",
        require("./module-2370.js").default,
        [
            "paragraph",
            "reference",
            "blockquote"
        ]
    ],
    [
        "reference",
        require("./module-2371.js").default
    ],
    [
        "heading",
        require("./module-2372.js").default,
        [
            "paragraph",
            "reference",
            "blockquote"
        ]
    ],
    [
        "lheading",
        require("./module-2373.js").default
    ],
    [
        "html_block",
        require("./module-2374.js").default,
        [
            "paragraph",
            "reference",
            "blockquote"
        ]
    ],
    [
        "paragraph",
        require("./module-2376.js").default
    ]
];
class i {
    constructor(){
        this.ruler = new module1303;
        for(let e = 0; e < o.length; e++){
            this.ruler.push(o[e][0], o[e][1], {
                alt: (o[e][2] || []).slice()
            });
        }
    }
    tokenize(e, t, n) {
        let r;
        const o = this.ruler.getRules("");
        const o_length = o.length;
        for(let a = t, l = false, u = e.md.options.maxNesting; a < n && (e.line = a = e.skipEmptyLines(a), !(a >= n)) && !(e.sCount[a] < e.blkIndent);){
            if (e.level >= u) {
                e.line = n;
                break;
            }
            for(r = 0; r < o_length && !o[r](e, a, n, false); r++);
            e.tight = !l;
            if (e.isEmpty(e.line - 1)) {
                l = true;
            }
            if ((a = e.line) < n && e.isEmpty(a)) {
                l = true;
                a++;
                e.line = a;
            }
        }
    }
    parse(e, t, n, r) {
        let o;
        if (e) {
            o = new this.State(e, t, n, r);
            this.tokenize(o, o.line, o.lineMax);
        }
    }
}
i.prototype.State = require("./module-2377.js").default;
module.exports = i;
