import module1816 from "unpacked/module-1816.js";
import module1817 from "unpacked/module-1817.js";
const r = {
    INSERT: "insert",
    DELETE: "delete",
    CONTEXT: "context"
};
const o = RegExp(`[${[
    "-",
    "[",
    "]",
    "/",
    "{",
    "}",
    "(",
    ")",
    "*",
    "+",
    "?",
    ".",
    "\\",
    "^",
    "$",
    "|"
].join("\\")}]`, "g");
function i(e) {
    if (e) {
        return e.replace(/\\/g, "/");
    }
    return e;
}
function a(e, language) {
    const n = e.split(".");
    if (n.length > 1) {
        return n[n.length - 1];
    }
    return language;
}
function l(e, t) {
    return t.reduce((acc, item)=>acc || e.startsWith(item), false);
}
const u = [
    "a/",
    "b/",
    "i/",
    "w/",
    "c/",
    "o/"
];
function s(e, t, n) {
    const r = n !== undefined ? function() {
        let e = 0;
        for(var t = 0, n = arguments.length; t < n; t++){
            e += arguments[t].length;
        }
        const r = Array(e);
        let o = 0;
        for(t = 0; t < n; t++){
            const i = arguments[t];
            for(let a = 0, l = i.length; a < l; a++, o++){
                r[o] = i[a];
            }
        }
        return r;
    }(u, [
        n
    ]) : u;
    const i = ((t ? new RegExp(`^${t.replace(o, "\\$&")} "?(.+?)"?\$`) : new RegExp('^"?(.+?)"?$')).exec(e) || [])[1];
    const a = i === undefined ? "" : i;
    const l = r.find((e)=>a.indexOf(e) === 0);
    return (l ? a.slice(l.length) : a).replace(/\s+\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}(?:\.\d+)? [+-]\d{4}.*$/, "");
}
function c(e, t = {}) {
    const n = [];
    let o = null;
    let i = null;
    let oldStartLine = null;
    let oldStartLine2 = null;
    let newStartLine = null;
    let d = null;
    let p = null;
    const h = /^old mode (\d{6})/;
    const v = /^new mode (\d{6})/;
    const g = /^deleted file mode (\d{6})/;
    const y = /^new file mode (\d{6})/;
    const m = /^copy from "?(.+)"?/;
    const b = /^copy to "?(.+)"?/;
    const x = /^rename from "?(.+)"?/;
    const w = /^rename to "?(.+)"?/;
    const _ = /^similarity index (\d+)%/;
    const C = /^dissimilarity index (\d+)%/;
    const O = /^index ([\da-z]+)\.\.([\da-z]+)\s*(\d{6})?/;
    const E = /^Binary files (.*) and (.*) differ/;
    const M = /^GIT binary patch/;
    const S = /^index ([\da-z]+),([\da-z]+)\.\.([\da-z]+)/;
    const A = /^mode (\d{6}),(\d{6})\.\.(\d{6})/;
    const k = /^new file mode (\d{6})/;
    const j = /^deleted file mode (\d{6}),(\d{6})/;
    const T = e.replace(/\\ No newline at end of file/g, "").replace(/\r\n?/g, "\n").split("\n");
    function P() {
        if (i !== null && o !== null) {
            o.blocks.push(i);
            i = null;
        }
    }
    function L() {
        if (o !== null) {
            if (!(o.oldName || d === null)) {
                o.oldName = d;
            }
            if (!(o.newName || p === null)) {
                o.newName = p;
            }
            if (o.newName) {
                n.push(o);
                o = null;
            }
        }
        d = null;
        p = null;
    }
    function z() {
        P();
        L();
        o = {
            blocks: [],
            deletedLines: 0,
            addedLines: 0
        };
    }
    function N(header) {
        let t;
        P();
        if (o !== null) {
            if (t = /^@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@.*/.exec(header)) {
                o.isCombined = false;
                oldStartLine = parseInt(t[1], 10);
                newStartLine = parseInt(t[2], 10);
            } else if (t = /^@@@ -(\d+)(?:,\d+)? -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@@.*/.exec(header)) {
                o.isCombined = true;
                oldStartLine = parseInt(t[1], 10);
                oldStartLine2 = parseInt(t[2], 10);
                newStartLine = parseInt(t[3], 10);
            } else {
                if (header.startsWith("@@")) {
                    console.error("Failed to parse lines, starting in 0!");
                }
                oldStartLine = 0;
                newStartLine = 0;
                o.isCombined = false;
            }
        }
        i = {
            lines: [],
            oldStartLine,
            oldStartLine2,
            newStartLine,
            header
        };
    }
    T.forEach((e, n)=>{
        if (e && !e.startsWith("*")) {
            let c;
            const P = T[n - 1];
            const L = T[n + 1];
            const D = T[n + 2];
            if (e.startsWith("diff")) {
                z();
                if (c = /^diff --git "?(.+)"? "?(.+)"?/.exec(e)) {
                    d = s(c[1], undefined, t.dstPrefix);
                    p = s(c[2], undefined, t.srcPrefix);
                }
                if (o === null) {
                    throw new Error("Where is my file !!!");
                }
                o.isGitDiff = true;
            } else {
                if (!o || !o.isGitDiff && o && e.startsWith("--- ") && L.startsWith("+++ ") && D.startsWith("@@")) {
                    z();
                }
                if (e.startsWith("--- ") && L.startsWith("+++ ") || e.startsWith("+++ ") && P.startsWith("--- ")) {
                    if (o && !o.oldName && e.startsWith("--- ") && (c = ((e, t)=>s(e, "---", t))(e, t.srcPrefix))) {
                        o.oldName = c;
                        return void (o.language = a(o.oldName, o.language));
                    }
                    if (o && !o.newName && e.startsWith("+++ ") && (c = ((e, t)=>s(e, "+++", t))(e, t.dstPrefix))) {
                        o.newName = c;
                        return void (o.language = a(o.newName, o.language));
                    }
                }
                if (o && (e.startsWith("@@") || o.isGitDiff && o.oldName && o.newName && !i)) {
                    N(e);
                } else if (i && (e.startsWith("+") || e.startsWith("-") || e.startsWith(" "))) {
                    ((e)=>{
                        if (o !== null && i !== null && oldStartLine !== null && newStartLine !== null) {
                            const t = {
                                content: e
                            };
                            const n = o.isCombined ? [
                                "+ ",
                                " +",
                                "++"
                            ] : [
                                "+"
                            ];
                            const a = o.isCombined ? [
                                "- ",
                                " -",
                                "--"
                            ] : [
                                "-"
                            ];
                            if (l(e, n)) {
                                o.addedLines++;
                                t.type = r.INSERT;
                                t.oldNumber = undefined;
                                t.newNumber = newStartLine++;
                            } else if (l(e, a)) {
                                o.deletedLines++;
                                t.type = r.DELETE;
                                t.oldNumber = oldStartLine++;
                                t.newNumber = undefined;
                            } else {
                                t.type = r.CONTEXT;
                                t.oldNumber = oldStartLine++;
                                t.newNumber = newStartLine++;
                            }
                            i.lines.push(t);
                        }
                    })(e);
                } else {
                    const I = !((e, t)=>{
                        for(let n = t; n < T.length - 3;){
                            if (e.startsWith("diff")) {
                                return false;
                            }
                            if (T[n].startsWith("--- ") && T[n + 1].startsWith("+++ ") && T[n + 2].startsWith("@@")) {
                                return true;
                            }
                            n++;
                        }
                        return false;
                    })(e, n);
                    if (o === null) {
                        throw new Error("Where is my file !!!");
                    }
                    if (c = h.exec(e)) {
                        o.oldMode = c[1];
                    } else if (c = v.exec(e)) {
                        o.newMode = c[1];
                    } else if (c = g.exec(e)) {
                        o.deletedFileMode = c[1];
                        o.isDeleted = true;
                    } else if (c = y.exec(e)) {
                        o.newFileMode = c[1];
                        o.isNew = true;
                    } else if (c = m.exec(e)) {
                        if (I) {
                            o.oldName = c[1];
                        }
                        o.isCopy = true;
                    } else if (c = b.exec(e)) {
                        if (I) {
                            o.newName = c[1];
                        }
                        o.isCopy = true;
                    } else if (c = x.exec(e)) {
                        if (I) {
                            o.oldName = c[1];
                        }
                        o.isRename = true;
                    } else if (c = w.exec(e)) {
                        if (I) {
                            o.newName = c[1];
                        }
                        o.isRename = true;
                    } else if (c = E.exec(e)) {
                        o.isBinary = true;
                        o.oldName = s(c[1], undefined, t.srcPrefix);
                        o.newName = s(c[2], undefined, t.dstPrefix);
                        N("Binary file");
                    } else if (M.test(e)) {
                        o.isBinary = true;
                        N(e);
                    } else if (c = _.exec(e)) {
                        o.unchangedPercentage = parseInt(c[1], 10);
                    } else if (c = C.exec(e)) {
                        o.changedPercentage = parseInt(c[1], 10);
                    } else if (c = O.exec(e)) {
                        o.checksumBefore = c[1];
                        o.checksumAfter = c[2];
                        if (c[3]) {
                            o.mode = c[3];
                        }
                    } else if (c = S.exec(e)) {
                        o.checksumBefore = [
                            c[2],
                            c[3]
                        ];
                        o.checksumAfter = c[1];
                    } else if (c = A.exec(e)) {
                        o.oldMode = [
                            c[2],
                            c[3]
                        ];
                        o.newMode = c[1];
                    } else if (c = k.exec(e)) {
                        o.newFileMode = c[1];
                        o.isNew = true;
                    } else if (c = j.exec(e)) {
                        o.deletedFileMode = c[1];
                        o.isDeleted = true;
                    }
                }
            }
        }
    });
    P();
    L();
    return n;
}
function d(e) {
    return function(t, n) {
        const r = e(t).trim();
        const o = e(n).trim();
        return ((e, t)=>{
            if (e.length === 0) {
                return t.length;
            }
            if (t.length === 0) {
                return e.length;
            }
            let n;
            let r;
            const o = [];
            for(n = 0; n <= t.length; n++){
                o[n] = [
                    n
                ];
            }
            for(r = 0; r <= e.length; r++){
                o[0][r] = r;
            }
            for(n = 1; n <= t.length; n++){
                for(r = 1; r <= e.length; r++){
                    if (t.charAt(n - 1) === e.charAt(r - 1)) {
                        o[n][r] = o[n - 1][r - 1];
                    } else {
                        o[n][r] = Math.min(o[n - 1][r - 1] + 1, Math.min(o[n][r - 1] + 1, o[n - 1][r] + 1));
                    }
                }
            }
            return o[t.length][e.length];
        })(r, o) / (r.length + o.length);
    };
}
function p(e) {
    return function t(n, r, o = 0, i = new Map) {
        const a = ((t, n, r = new Map)=>{
            let o;
            let i = Infinity;
            for(let indexA = 0; indexA < t.length; ++indexA){
                for(let indexB = 0; indexB < n.length; ++indexB){
                    const u = JSON.stringify([
                        t[indexA],
                        n[indexB]
                    ]);
                    let s;
                    if (!(r.has(u) && (s = r.get(u)))) {
                        s = e(t[indexA], n[indexB]);
                        r.set(u, s);
                    }
                    if (s < i) {
                        o = {
                            indexA,
                            indexB,
                            score: i = s
                        };
                    }
                }
            }
            return o;
        })(n, r, i);
        if (!a || n.length + r.length < 3) {
            return [
                [
                    n,
                    r
                ]
            ];
        }
        const l = n.slice(0, a.indexA);
        const u = r.slice(0, a.indexB);
        const s = [
            n[a.indexA]
        ];
        const c = [
            r[a.indexB]
        ];
        const f = a.indexA + 1;
        const d = a.indexB + 1;
        const p = n.slice(f);
        const h = r.slice(d);
        const v = t(l, u, o + 1, i);
        const g = t(s, c, o + 1, i);
        const y = t(p, h, o + 1, i);
        let m = g;
        if (a.indexA > 0 || a.indexB > 0) {
            m = v.concat(m);
        }
        if (n.length > f || r.length > d) {
            m = m.concat(y);
        }
        return m;
    };
}
const CSSLineClass = {
    INSERTS: "d2h-ins",
    DELETES: "d2h-del",
    CONTEXT: "d2h-cntx",
    INFO: "d2h-info",
    INSERT_CHANGES: "d2h-ins d2h-change",
    DELETE_CHANGES: "d2h-del d2h-change"
};
const g = {
    matching: "none",
    matchWordsThreshold: 0.25,
    maxLineLengthHighlight: 10000,
    diffStyle: "word"
};
const y = d((e)=>e.value);
const m = p(y);
function b(e) {
    return e.indexOf("dev/null") !== -1;
}
function x(e) {
    return e.replace(/(<del[^>]*>((.|\n)*?)<\/del>)/g, "");
}
function w(type) {
    switch(type){
        case r.CONTEXT:
            return CSSLineClass.CONTEXT;
        case r.INSERT:
            return CSSLineClass.INSERTS;
        case r.DELETE:
            return CSSLineClass.DELETES;
    }
}
function _(e) {
    return e.slice(0).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
}
function C(e, t, n = true) {
    const r = ((e)=>{
        if (e) {
            return 2;
        }
        return 1;
    })(t);
    return {
        prefix: e.substring(0, r),
        content: n ? _(e.substring(r)) : e.substring(r)
    };
}
function O(e) {
    const t = i(e.oldName);
    const n = i(e.newName);
    if (t === n || b(t) || b(n)) {
        if (b(n)) {
            return t;
        }
        return n;
    }
    const r = [];
    const o = [];
    for(var a = t.split("/"), l = n.split("/"), u = 0, s = a.length - 1, c = l.length - 1; u < s && u < c && a[u] === l[u];){
        r.push(l[u]);
        u += 1;
    }
    while(s > u && c > u && a[s] === l[c]){
        o.unshift(l[c]);
        s -= 1;
        c -= 1;
    }
    const f = r.join("/");
    const d = o.join("/");
    const p = a.slice(u, s + 1).join("/");
    const h = l.slice(u, c + 1).join("/");
    if (f.length && d.length) {
        return `${f}/{${p} → ${h}}/${d}`;
    }
    if (f.length) {
        return `${f}/{${p} → ${h}}`;
    }
    if (d.length) {
        return `{${p} → ${h}}/${d}`;
    }
    return `${t} → ${n}`;
}
function E(e) {
    return `d2h-${((e)=>{
        let t;
        let n;
        let r = 0;
        t = 0;
        for(n = e.length; t < n; t++){
            r = (r << 5) - r + e.charCodeAt(t);
            r |= 0;
        }
        return r;
    })(O(e)).toString().slice(-6)}`;
}
function M(e) {
    let t = "file-changed";
    if (e.isRename || e.isCopy) {
        t = "file-renamed";
    } else if (e.isNew) {
        t = "file-added";
    } else if (e.isDeleted) {
        t = "file-deleted";
    } else if (e.newName !== e.oldName) {
        t = "file-renamed";
    }
    return t;
}
function S(content, t, n, r = {}) {
    const o = {
        ...g,
        ...r
    };
    const { matching, maxLineLengthHighlight, matchWordsThreshold, diffStyle } = o;
    const s = C(content, n, false);
    const c = C(t, n, false);
    if (s.content.length > maxLineLengthHighlight || c.content.length > maxLineLengthHighlight) {
        return {
            oldLine: {
                prefix: s.prefix,
                content: _(s.content)
            },
            newLine: {
                prefix: c.prefix,
                content: _(c.content)
            }
        };
    }
    const d = diffStyle === "char" ? module1816.diffChars(s.content, c.content) : module1816.diffWordsWithSpace(s.content, c.content);
    const p = [];
    if (diffStyle === "word" && matching === "words") {
        const v = d.filter((e)=>e.removed);
        const b = d.filter((e)=>e.added);
        m(b, v).forEach((e)=>{
            if (e[0].length === 1 && e[1].length === 1 && y(e[0][0], e[1][0]) < matchWordsThreshold) {
                p.push(e[0][0]);
                p.push(e[1][0]);
            }
        });
    }
    let w;
    const O = d.reduce((acc, item)=>{
        const n = item.added ? "ins" : item.removed ? "del" : null;
        const r = p.indexOf(item) > -1 ? ' class="d2h-change"' : "";
        const o = _(item.value);
        if (n !== null) {
            return `${acc}<${n}${r}>${o}</${n}>`;
        }
        return `${acc}${o}`;
    }, "");
    return {
        oldLine: {
            prefix: s.prefix,
            content: (w = O, w.replace(/(<ins[^>]*>((.|\n)*?)<\/ins>)/g, ""))
        },
        newLine: {
            prefix: c.prefix,
            content: x(O)
        }
    };
}
const k = {
    ...g,
    renderNothingWhenEmpty: false,
    matchingMaxComparisons: 2500,
    maxLineSizeInBlockForComparison: 200
};
class j {
    constructor(e, t = {}){
        this.hoganUtils = e;
        this.config = {
            ...k,
            ...t
        };
    }
    render(e) {
        const _this = this;
        const n = e.map((e)=>{
            let n;
            n = e.blocks.length ? _this.generateFileHtml(e) : _this.generateEmptyDiff();
            return _this.makeFileDiffHtml(e, n);
        }).join("\n");
        return this.hoganUtils.render("generic", "wrapper", {
            content: n
        });
    }
    makeFileDiffHtml(e, t) {
        if (this.config.renderNothingWhenEmpty && Array.isArray(e.blocks) && e.blocks.length === 0) {
            return "";
        }
        const n = this.hoganUtils.template("line-by-line", "file-diff");
        const r = this.hoganUtils.template("generic", "file-path");
        const o = this.hoganUtils.template("icon", "file");
        const i = this.hoganUtils.template("tag", M(e));
        return n.render({
            file: e,
            fileHtmlId: E(e),
            diffs: t,
            filePath: r.render({
                fileDiffName: O(e)
            }, {
                fileIcon: o,
                fileTag: i
            })
        });
    }
    generateEmptyDiff() {
        return this.hoganUtils.render("generic", "empty-diff", {
            contentClass: "d2h-code-line",
            CSSLineClass
        });
    }
    generateFileHtml(e) {
        const _this = this;
        const n = p(d((t)=>C(t.content, e.isCombined).content));
        return e.blocks.map((r)=>{
            let o = _this.hoganUtils.render("generic", "block-header", {
                CSSLineClass,
                blockHeader: _(r.header),
                lineClass: "d2h-code-linenumber",
                contentClass: "d2h-code-line"
            });
            _this.applyLineGroupping(r).forEach(([i, a, l])=>{
                if (a.length && l.length && !i.length) {
                    _this.applyRematchMatching(a, l, n).map(([r, i])=>{
                        const a = _this.processChangedLines(e.isCombined, r, i);
                        const { left, right } = a;
                        o += left;
                        o += right;
                    });
                } else if (i.length) {
                    i.forEach((n)=>{
                        const r = C(n.content, e.isCombined);
                        const { prefix, content } = r;
                        o += _this.generateSingleLineHtml({
                            type: CSSLineClass.CONTEXT,
                            prefix,
                            content,
                            oldNumber: n.oldNumber,
                            newNumber: n.newNumber
                        });
                    });
                } else if (a.length || l.length) {
                    const u = _this.processChangedLines(e.isCombined, a, l);
                    const { left, right } = u;
                    o += left;
                    o += right;
                } else {
                    console.error("Unknown state reached while processing groups of lines", i, a, l);
                }
            });
            return o;
        }).join("\n");
    }
    applyLineGroupping(e) {
        const t = [];
        let n = [];
        let o = [];
        for(let i = 0; i < e.lines.length; i++){
            const line = e.lines[i];
            if (line.type !== r.INSERT && o.length || line.type === r.CONTEXT && n.length > 0) {
                t.push([
                    [],
                    n,
                    o
                ]);
                n = [];
                o = [];
            }
            if (line.type === r.CONTEXT) {
                t.push([
                    [
                        line
                    ],
                    [],
                    []
                ]);
            } else if (line.type === r.INSERT && n.length === 0) {
                t.push([
                    [],
                    [],
                    [
                        line
                    ]
                ]);
            } else if (line.type === r.INSERT && n.length > 0) {
                o.push(line);
            } else if (line.type === r.DELETE) {
                n.push(line);
            }
        }
        if (n.length || o.length) {
            t.push([
                [],
                n,
                o
            ]);
            n = [];
            o = [];
        }
        return t;
    }
    applyRematchMatching(e, t, n) {
        const r = e.length * t.length;
        const o = Math.max.apply(null, [
            0
        ].concat(e.concat(t).map((e)=>e.content.length)));
        if (r < this.config.matchingMaxComparisons && o < this.config.maxLineSizeInBlockForComparison && (this.config.matching === "lines" || this.config.matching === "words")) {
            return n(e, t);
        }
        return [
            [
                e,
                t
            ]
        ];
    }
    processChangedLines(e, t, n) {
        const r = {
            right: "",
            left: ""
        };
        for(let o = Math.max(t.length, n.length), i = 0; i < o; i++){
            const a = t[i];
            const l = n[i];
            const u = a !== undefined && l !== undefined ? S(a.content, l.content, e, this.config) : undefined;
            const s = a !== undefined && a.oldNumber !== undefined ? {
                ...u !== undefined ? {
                    prefix: u.oldLine.prefix,
                    content: u.oldLine.content,
                    type: CSSLineClass.DELETE_CHANGES
                } : {
                    ...C(a.content, e),
                    type: w(a.type)
                },
                oldNumber: a.oldNumber,
                newNumber: a.newNumber
            } : undefined;
            const c = l !== undefined && l.newNumber !== undefined ? {
                ...u !== undefined ? {
                    prefix: u.newLine.prefix,
                    content: u.newLine.content,
                    type: CSSLineClass.INSERT_CHANGES
                } : {
                    ...C(l.content, e),
                    type: w(l.type)
                },
                oldNumber: l.oldNumber,
                newNumber: l.newNumber
            } : undefined;
            const f = this.generateLineHtml(s, c);
            const { left, right } = f;
            r.left += left;
            r.right += right;
        }
        return r;
    }
    generateLineHtml(e, t) {
        return {
            left: this.generateSingleLineHtml(e),
            right: this.generateSingleLineHtml(t)
        };
    }
    generateSingleLineHtml(e) {
        if (e === undefined) {
            return "";
        }
        const lineNumber = this.hoganUtils.render("line-by-line", "numbers", {
            oldNumber: e.oldNumber || "",
            newNumber: e.newNumber || ""
        });
        return this.hoganUtils.render("generic", "line", {
            type: e.type,
            lineClass: "d2h-code-linenumber",
            contentClass: "d2h-code-line",
            prefix: e.prefix === " " ? "&nbsp;" : e.prefix,
            content: e.content,
            lineNumber
        });
    }
}
const P = {
    ...g,
    renderNothingWhenEmpty: false,
    matchingMaxComparisons: 2500,
    maxLineSizeInBlockForComparison: 200
};
class L {
    constructor(e, t = {}){
        this.hoganUtils = e;
        this.config = {
            ...P,
            ...t
        };
    }
    render(e) {
        const _this = this;
        const n = e.map((e)=>{
            let n;
            n = e.blocks.length ? _this.generateFileHtml(e) : _this.generateEmptyDiff();
            return _this.makeFileDiffHtml(e, n);
        }).join("\n");
        return this.hoganUtils.render("generic", "wrapper", {
            content: n
        });
    }
    makeFileDiffHtml(e, t) {
        if (this.config.renderNothingWhenEmpty && Array.isArray(e.blocks) && e.blocks.length === 0) {
            return "";
        }
        const n = this.hoganUtils.template("side-by-side", "file-diff");
        const r = this.hoganUtils.template("generic", "file-path");
        const o = this.hoganUtils.template("icon", "file");
        const i = this.hoganUtils.template("tag", M(e));
        return n.render({
            file: e,
            fileHtmlId: E(e),
            diffs: t,
            filePath: r.render({
                fileDiffName: O(e)
            }, {
                fileIcon: o,
                fileTag: i
            })
        });
    }
    generateEmptyDiff() {
        return {
            right: "",
            left: this.hoganUtils.render("generic", "empty-diff", {
                contentClass: "d2h-code-side-line",
                CSSLineClass
            })
        };
    }
    generateFileHtml(e) {
        const _this = this;
        const n = p(d((t)=>C(t.content, e.isCombined).content));
        return e.blocks.map((r)=>{
            const o = {
                left: _this.makeHeaderHtml(r.header),
                right: _this.makeHeaderHtml("")
            };
            _this.applyLineGroupping(r).forEach(([i, a, l])=>{
                if (a.length && l.length && !i.length) {
                    _this.applyRematchMatching(a, l, n).map(([r, i])=>{
                        const a = _this.processChangedLines(e.isCombined, r, i);
                        const { left, right } = a;
                        o.left += left;
                        o.right += right;
                    });
                } else if (i.length) {
                    i.forEach((n)=>{
                        const r = C(n.content, e.isCombined);
                        const { prefix, content } = r;
                        const l = _this.generateLineHtml({
                            type: CSSLineClass.CONTEXT,
                            prefix,
                            content,
                            number: n.oldNumber
                        }, {
                            type: CSSLineClass.CONTEXT,
                            prefix,
                            content,
                            number: n.newNumber
                        });
                        const { left, right } = l;
                        o.left += left;
                        o.right += right;
                    });
                } else if (a.length || l.length) {
                    const u = _this.processChangedLines(e.isCombined, a, l);
                    const { left, right } = u;
                    o.left += left;
                    o.right += right;
                } else {
                    console.error("Unknown state reached while processing groups of lines", i, a, l);
                }
            });
            return o;
        }).reduce((acc, item)=>({
                left: acc.left + item.left,
                right: acc.right + item.right
            }), {
            left: "",
            right: ""
        });
    }
    applyLineGroupping(e) {
        const t = [];
        let n = [];
        let o = [];
        for(let i = 0; i < e.lines.length; i++){
            const line = e.lines[i];
            if (line.type !== r.INSERT && o.length || line.type === r.CONTEXT && n.length > 0) {
                t.push([
                    [],
                    n,
                    o
                ]);
                n = [];
                o = [];
            }
            if (line.type === r.CONTEXT) {
                t.push([
                    [
                        line
                    ],
                    [],
                    []
                ]);
            } else if (line.type === r.INSERT && n.length === 0) {
                t.push([
                    [],
                    [],
                    [
                        line
                    ]
                ]);
            } else if (line.type === r.INSERT && n.length > 0) {
                o.push(line);
            } else if (line.type === r.DELETE) {
                n.push(line);
            }
        }
        if (n.length || o.length) {
            t.push([
                [],
                n,
                o
            ]);
            n = [];
            o = [];
        }
        return t;
    }
    applyRematchMatching(e, t, n) {
        const r = e.length * t.length;
        const o = Math.max.apply(null, [
            0
        ].concat(e.concat(t).map((e)=>e.content.length)));
        if (r < this.config.matchingMaxComparisons && o < this.config.maxLineSizeInBlockForComparison && (this.config.matching === "lines" || this.config.matching === "words")) {
            return n(e, t);
        }
        return [
            [
                e,
                t
            ]
        ];
    }
    makeHeaderHtml(e) {
        return this.hoganUtils.render("generic", "block-header", {
            CSSLineClass,
            blockHeader: _(e),
            lineClass: "d2h-code-side-linenumber",
            contentClass: "d2h-code-side-line"
        });
    }
    processChangedLines(e, t, n) {
        const r = {
            right: "",
            left: ""
        };
        for(let o = Math.max(t.length, n.length), i = 0; i < o; i++){
            const a = t[i];
            const l = n[i];
            const u = a !== undefined && l !== undefined ? S(a.content, l.content, e, this.config) : undefined;
            const s = a !== undefined && a.oldNumber !== undefined ? {
                ...u !== undefined ? {
                    prefix: u.oldLine.prefix,
                    content: u.oldLine.content,
                    type: CSSLineClass.DELETE_CHANGES
                } : {
                    ...C(a.content, e),
                    type: w(a.type)
                },
                number: a.oldNumber
            } : undefined;
            const c = l !== undefined && l.newNumber !== undefined ? {
                ...u !== undefined ? {
                    prefix: u.newLine.prefix,
                    content: u.newLine.content,
                    type: CSSLineClass.INSERT_CHANGES
                } : {
                    ...C(l.content, e),
                    type: w(l.type)
                },
                number: l.newNumber
            } : undefined;
            const f = this.generateLineHtml(s, c);
            const { left, right } = f;
            r.left += left;
            r.right += right;
        }
        return r;
    }
    generateLineHtml(e, t) {
        return {
            left: this.generateSingleHtml(e),
            right: this.generateSingleHtml(t)
        };
    }
    generateSingleHtml(e) {
        return this.hoganUtils.render("generic", "line", {
            type: e?.type || `${CSSLineClass.CONTEXT} d2h-emptyplaceholder`,
            lineClass: e !== undefined ? "d2h-code-side-linenumber" : "d2h-code-side-linenumber d2h-code-side-emptyplaceholder",
            contentClass: e !== undefined ? "d2h-code-side-line" : "d2h-code-side-line d2h-code-side-emptyplaceholder",
            prefix: e?.prefix === " " ? "&nbsp;" : e?.prefix,
            content: e?.content,
            lineNumber: e?.number
        });
    }
}
const N = {};
N["file-summary-line"] = new module1817.Template({
    code: function(e, t, n) {
        const _this = this;
        _this.b(n = n || "");
        _this.b('<li class="d2h-file-list-line">');
        _this.b(`
${n}`);
        _this.b('    <span class="d2h-file-name-wrapper">');
        _this.b(`
${n}`);
        _this.b(_this.rp("<fileIcon0", e, t, "      "));
        _this.b('      <a href="#');
        _this.b(_this.v(_this.f("fileHtmlId", e, t, 0)));
        _this.b('" class="d2h-file-name">');
        _this.b(_this.v(_this.f("fileName", e, t, 0)));
        _this.b("</a>");
        _this.b(`
${n}`);
        _this.b('      <span class="d2h-file-stats">');
        _this.b(`
${n}`);
        _this.b('          <span class="d2h-lines-added">');
        _this.b(_this.v(_this.f("addedLines", e, t, 0)));
        _this.b("</span>");
        _this.b(`
${n}`);
        _this.b('          <span class="d2h-lines-deleted">');
        _this.b(_this.v(_this.f("deletedLines", e, t, 0)));
        _this.b("</span>");
        _this.b(`
${n}`);
        _this.b("      </span>");
        _this.b(`
${n}`);
        _this.b("    </span>");
        _this.b(`
${n}`);
        _this.b("</li>");
        return _this.fl();
    },
    partials: {
        "<fileIcon0": {
            name: "fileIcon",
            partials: {},
            subs: {}
        }
    },
    subs: {}
});
N["file-summary-wrapper"] = new module1817.Template({
    code: function(e, t, n) {
        const _this = this;
        _this.b(n = n || "");
        _this.b('<div class="d2h-file-list-wrapper">');
        _this.b(`
${n}`);
        _this.b('    <div class="d2h-file-list-header">');
        _this.b(`
${n}`);
        _this.b('        <span class="d2h-file-list-title">Files changed (');
        _this.b(_this.v(_this.f("filesNumber", e, t, 0)));
        _this.b(")</span>");
        _this.b(`
${n}`);
        _this.b('        <a class="d2h-file-switch d2h-hide">hide</a>');
        _this.b(`
${n}`);
        _this.b('        <a class="d2h-file-switch d2h-show">show</a>');
        _this.b(`
${n}`);
        _this.b("    </div>");
        _this.b(`
${n}`);
        _this.b('    <ol class="d2h-file-list">');
        _this.b(`
${n}`);
        _this.b("    ");
        _this.b(_this.t(_this.f("files", e, t, 0)));
        _this.b(`
${n}`);
        _this.b("    </ol>");
        _this.b(`
${n}`);
        _this.b("</div>");
        return _this.fl();
    },
    partials: {},
    subs: {}
});
N["generic-block-header"] = new module1817.Template({
    code: function(e, t, n) {
        const _this = this;
        _this.b(n = n || "");
        _this.b("<tr>");
        _this.b(`
${n}`);
        _this.b('    <td class="');
        _this.b(_this.v(_this.f("lineClass", e, t, 0)));
        _this.b(" ");
        _this.b(_this.v(_this.d("CSSLineClass.INFO", e, t, 0)));
        _this.b('"></td>');
        _this.b(`
${n}`);
        _this.b('    <td class="');
        _this.b(_this.v(_this.d("CSSLineClass.INFO", e, t, 0)));
        _this.b('">');
        _this.b(`
${n}`);
        _this.b('        <div class="');
        _this.b(_this.v(_this.f("contentClass", e, t, 0)));
        _this.b(" ");
        _this.b(_this.v(_this.d("CSSLineClass.INFO", e, t, 0)));
        _this.b('">');
        _this.b(_this.t(_this.f("blockHeader", e, t, 0)));
        _this.b("</div>");
        _this.b(`
${n}`);
        _this.b("    </td>");
        _this.b(`
${n}`);
        _this.b("</tr>");
        return _this.fl();
    },
    partials: {},
    subs: {}
});
N["generic-empty-diff"] = new module1817.Template({
    code: function(e, t, n) {
        const _this = this;
        _this.b(n = n || "");
        _this.b("<tr>");
        _this.b(`
${n}`);
        _this.b('    <td class="');
        _this.b(_this.v(_this.d("CSSLineClass.INFO", e, t, 0)));
        _this.b('">');
        _this.b(`
${n}`);
        _this.b('        <div class="');
        _this.b(_this.v(_this.f("contentClass", e, t, 0)));
        _this.b(" ");
        _this.b(_this.v(_this.d("CSSLineClass.INFO", e, t, 0)));
        _this.b('">');
        _this.b(`
${n}`);
        _this.b("            File without changes");
        _this.b(`
${n}`);
        _this.b("        </div>");
        _this.b(`
${n}`);
        _this.b("    </td>");
        _this.b(`
${n}`);
        _this.b("</tr>");
        return _this.fl();
    },
    partials: {},
    subs: {}
});
N["generic-file-path"] = new module1817.Template({
    code: function(e, t, n) {
        const _this = this;
        _this.b(n = n || "");
        _this.b('<span class="d2h-file-name-wrapper">');
        _this.b(`
${n}`);
        _this.b(_this.rp("<fileIcon0", e, t, "    "));
        _this.b('    <span class="d2h-file-name">');
        _this.b(_this.v(_this.f("fileDiffName", e, t, 0)));
        _this.b("</span>");
        _this.b(`
${n}`);
        _this.b(_this.rp("<fileTag1", e, t, "    "));
        _this.b("</span>");
        return _this.fl();
    },
    partials: {
        "<fileIcon0": {
            name: "fileIcon",
            partials: {},
            subs: {}
        },
        "<fileTag1": {
            name: "fileTag",
            partials: {},
            subs: {}
        }
    },
    subs: {}
});
N["generic-line"] = new module1817.Template({
    code: function(e, t, n) {
        const _this = this;
        _this.b(n = n || "");
        _this.b("<tr>");
        _this.b(`
${n}`);
        _this.b('    <td class="');
        _this.b(_this.v(_this.f("lineClass", e, t, 0)));
        _this.b(" ");
        _this.b(_this.v(_this.f("type", e, t, 0)));
        _this.b('">');
        _this.b(`
${n}`);
        _this.b("      ");
        _this.b(_this.t(_this.f("lineNumber", e, t, 0)));
        _this.b(`
${n}`);
        _this.b("    </td>");
        _this.b(`
${n}`);
        _this.b('    <td class="');
        _this.b(_this.v(_this.f("type", e, t, 0)));
        _this.b('">');
        _this.b(`
${n}`);
        _this.b('        <div class="');
        _this.b(_this.v(_this.f("contentClass", e, t, 0)));
        _this.b(" ");
        _this.b(_this.v(_this.f("type", e, t, 0)));
        _this.b('">');
        _this.b(`
${n}`);
        if (_this.s(_this.f("prefix", e, t, 1), e, t, 0, 171, 247, "{{ }}")) {
            _this.rs(e, t, function(e, t, r) {
                r.b('            <span class="d2h-code-line-prefix">');
                r.b(r.t(r.f("prefix", e, t, 0)));
                r.b("</span>");
                r.b(`
${n}`);
            });
            e.pop();
        }
        if (!_this.s(_this.f("prefix", e, t, 1), e, t, 1, 0, 0, "")) {
            _this.b('            <span class="d2h-code-line-prefix">&nbsp;</span>');
            _this.b(`
${n}`);
        }
        if (_this.s(_this.f("content", e, t, 1), e, t, 0, 380, 454, "{{ }}")) {
            _this.rs(e, t, function(e, t, r) {
                r.b('            <span class="d2h-code-line-ctn">');
                r.b(r.t(r.f("content", e, t, 0)));
                r.b("</span>");
                r.b(`
${n}`);
            });
            e.pop();
        }
        if (!_this.s(_this.f("content", e, t, 1), e, t, 1, 0, 0, "")) {
            _this.b('            <span class="d2h-code-line-ctn"><br></span>');
            _this.b(`
${n}`);
        }
        _this.b("        </div>");
        _this.b(`
${n}`);
        _this.b("    </td>");
        _this.b(`
${n}`);
        _this.b("</tr>");
        return _this.fl();
    },
    partials: {},
    subs: {}
});
N["generic-wrapper"] = new module1817.Template({
    code: function(e, t, n) {
        const _this = this;
        _this.b(n = n || "");
        _this.b('<div class="d2h-wrapper">');
        _this.b(`
${n}`);
        _this.b("    ");
        _this.b(_this.t(_this.f("content", e, t, 0)));
        _this.b(`
${n}`);
        _this.b("</div>");
        return _this.fl();
    },
    partials: {},
    subs: {}
});
N["icon-file-added"] = new module1817.Template({
    code: function(e, t, n) {
        const _this = this;
        _this.b(n = n || "");
        _this.b('<svg aria-hidden="true" class="d2h-icon d2h-added" height="16" title="added" version="1.1" viewBox="0 0 14 16"');
        _this.b(`
${n}`);
        _this.b('     width="14">');
        _this.b(`
${n}`);
        _this.b('    <path d="M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM6 9H3V7h3V4h2v3h3v2H8v3H6V9z"></path>');
        _this.b(`
${n}`);
        _this.b("</svg>");
        return _this.fl();
    },
    partials: {},
    subs: {}
});
N["icon-file-changed"] = new module1817.Template({
    code: function(e, t, n) {
        const _this = this;
        _this.b(n = n || "");
        _this.b('<svg aria-hidden="true" class="d2h-icon d2h-changed" height="16" title="modified" version="1.1"');
        _this.b(`
${n}`);
        _this.b('     viewBox="0 0 14 16" width="14">');
        _this.b(`
${n}`);
        _this.b('    <path d="M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM4 8c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z"></path>');
        _this.b(`
${n}`);
        _this.b("</svg>");
        return _this.fl();
    },
    partials: {},
    subs: {}
});
N["icon-file-deleted"] = new module1817.Template({
    code: function(e, t, n) {
        const _this = this;
        _this.b(n = n || "");
        _this.b('<svg aria-hidden="true" class="d2h-icon d2h-deleted" height="16" title="removed" version="1.1"');
        _this.b(`
${n}`);
        _this.b('     viewBox="0 0 14 16" width="14">');
        _this.b(`
${n}`);
        _this.b('    <path d="M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM11 9H3V7h8v2z"></path>');
        _this.b(`
${n}`);
        _this.b("</svg>");
        return _this.fl();
    },
    partials: {},
    subs: {}
});
N["icon-file-renamed"] = new module1817.Template({
    code: function(e, t, n) {
        const _this = this;
        _this.b(n = n || "");
        _this.b('<svg aria-hidden="true" class="d2h-icon d2h-moved" height="16" title="renamed" version="1.1"');
        _this.b(`
${n}`);
        _this.b('     viewBox="0 0 14 16" width="14">');
        _this.b(`
${n}`);
        _this.b('    <path d="M6 9H3V7h3V4l5 4-5 4V9z m8-7v12c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h12c0.55 0 1 0.45 1 1z m-1 0H1v12h12V2z"></path>');
        _this.b(`
${n}`);
        _this.b("</svg>");
        return _this.fl();
    },
    partials: {},
    subs: {}
});
N["icon-file"] = new module1817.Template({
    code: function(e, t, n) {
        const _this = this;
        _this.b(n = n || "");
        _this.b('<svg aria-hidden="true" class="d2h-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">');
        _this.b(`
${n}`);
        _this.b('    <path d="M6 5H2v-1h4v1zM2 8h7v-1H2v1z m0 2h7v-1H2v1z m0 2h7v-1H2v1z m10-7.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v12h10V5z"></path>');
        _this.b(`
${n}`);
        _this.b("</svg>");
        return _this.fl();
    },
    partials: {},
    subs: {}
});
N["line-by-line-file-diff"] = new module1817.Template({
    code: function(e, t, n) {
        const _this = this;
        _this.b(n = n || "");
        _this.b('<div id="');
        _this.b(_this.v(_this.f("fileHtmlId", e, t, 0)));
        _this.b('" class="d2h-file-wrapper" data-lang="');
        _this.b(_this.v(_this.d("file.language", e, t, 0)));
        _this.b('">');
        _this.b(`
${n}`);
        _this.b('    <div class="d2h-file-header">');
        _this.b(`
${n}`);
        _this.b("    ");
        _this.b(_this.t(_this.f("filePath", e, t, 0)));
        _this.b(`
${n}`);
        _this.b("    </div>");
        _this.b(`
${n}`);
        _this.b('    <div class="d2h-file-diff">');
        _this.b(`
${n}`);
        _this.b('        <div class="d2h-code-wrapper">');
        _this.b(`
${n}`);
        _this.b('            <table class="d2h-diff-table">');
        _this.b(`
${n}`);
        _this.b('                <tbody class="d2h-diff-tbody">');
        _this.b(`
${n}`);
        _this.b("                ");
        _this.b(_this.t(_this.f("diffs", e, t, 0)));
        _this.b(`
${n}`);
        _this.b("                </tbody>");
        _this.b(`
${n}`);
        _this.b("            </table>");
        _this.b(`
${n}`);
        _this.b("        </div>");
        _this.b(`
${n}`);
        _this.b("    </div>");
        _this.b(`
${n}`);
        _this.b("</div>");
        return _this.fl();
    },
    partials: {},
    subs: {}
});
N["line-by-line-numbers"] = new module1817.Template({
    code: function(e, t, n) {
        const _this = this;
        _this.b(n = n || "");
        _this.b('<div class="line-num1">');
        _this.b(_this.v(_this.f("oldNumber", e, t, 0)));
        _this.b("</div>");
        _this.b(`
${n}`);
        _this.b('<div class="line-num2">');
        _this.b(_this.v(_this.f("newNumber", e, t, 0)));
        _this.b("</div>");
        return _this.fl();
    },
    partials: {},
    subs: {}
});
N["side-by-side-file-diff"] = new module1817.Template({
    code: function(e, t, n) {
        const _this = this;
        _this.b(n = n || "");
        _this.b('<div id="');
        _this.b(_this.v(_this.f("fileHtmlId", e, t, 0)));
        _this.b('" class="d2h-file-wrapper" data-lang="');
        _this.b(_this.v(_this.d("file.language", e, t, 0)));
        _this.b('">');
        _this.b(`
${n}`);
        _this.b('    <div class="d2h-file-header">');
        _this.b(`
${n}`);
        _this.b("      ");
        _this.b(_this.t(_this.f("filePath", e, t, 0)));
        _this.b(`
${n}`);
        _this.b("    </div>");
        _this.b(`
${n}`);
        _this.b('    <div class="d2h-files-diff">');
        _this.b(`
${n}`);
        _this.b('        <div class="d2h-file-side-diff">');
        _this.b(`
${n}`);
        _this.b('            <div class="d2h-code-wrapper">');
        _this.b(`
${n}`);
        _this.b('                <table class="d2h-diff-table">');
        _this.b(`
${n}`);
        _this.b('                    <tbody class="d2h-diff-tbody">');
        _this.b(`
${n}`);
        _this.b("                    ");
        _this.b(_this.t(_this.d("diffs.left", e, t, 0)));
        _this.b(`
${n}`);
        _this.b("                    </tbody>");
        _this.b(`
${n}`);
        _this.b("                </table>");
        _this.b(`
${n}`);
        _this.b("            </div>");
        _this.b(`
${n}`);
        _this.b("        </div>");
        _this.b(`
${n}`);
        _this.b('        <div class="d2h-file-side-diff">');
        _this.b(`
${n}`);
        _this.b('            <div class="d2h-code-wrapper">');
        _this.b(`
${n}`);
        _this.b('                <table class="d2h-diff-table">');
        _this.b(`
${n}`);
        _this.b('                    <tbody class="d2h-diff-tbody">');
        _this.b(`
${n}`);
        _this.b("                    ");
        _this.b(_this.t(_this.d("diffs.right", e, t, 0)));
        _this.b(`
${n}`);
        _this.b("                    </tbody>");
        _this.b(`
${n}`);
        _this.b("                </table>");
        _this.b(`
${n}`);
        _this.b("            </div>");
        _this.b(`
${n}`);
        _this.b("        </div>");
        _this.b(`
${n}`);
        _this.b("    </div>");
        _this.b(`
${n}`);
        _this.b("</div>");
        return _this.fl();
    },
    partials: {},
    subs: {}
});
N["tag-file-added"] = new module1817.Template({
    code: function(e, t, n) {
        const _this = this;
        _this.b(n = n || "");
        _this.b('<span class="d2h-tag d2h-added d2h-added-tag">ADDED</span>');
        return _this.fl();
    },
    partials: {},
    subs: {}
});
N["tag-file-changed"] = new module1817.Template({
    code: function(e, t, n) {
        const _this = this;
        _this.b(n = n || "");
        _this.b('<span class="d2h-tag d2h-changed d2h-changed-tag">CHANGED</span>');
        return _this.fl();
    },
    partials: {},
    subs: {}
});
N["tag-file-deleted"] = new module1817.Template({
    code: function(e, t, n) {
        const _this = this;
        _this.b(n = n || "");
        _this.b('<span class="d2h-tag d2h-deleted d2h-deleted-tag">DELETED</span>');
        return _this.fl();
    },
    partials: {},
    subs: {}
});
N["tag-file-renamed"] = new module1817.Template({
    code: function(e, t, n) {
        const _this = this;
        _this.b(n = n || "");
        _this.b('<span class="d2h-tag d2h-moved d2h-moved-tag">RENAMED</span>');
        return _this.fl();
    },
    partials: {},
    subs: {}
});
class I {
    constructor({ compiledTemplates = {}, rawTemplates = {} }){
        var i = Object.entries(rawTemplates).reduce((acc, [r, o])=>{
            const i = module1817.compile(o, {
                asString: false
            });
            return {
                ...acc,
                ...{
                    [r]: i
                }
            };
        }, {});
        this.preCompiledTemplates = {
            ...N,
            ...compiledTemplates,
            ...i
        };
    }
    static compile(e) {
        return module1817.compile(e, {
            asString: false
        });
    }
    render(e, t, n, r, o) {
        const i = this.templateKey(e, t);
        try {
            return this.preCompiledTemplates[i].render(n, r, o);
        } catch (e) {
            throw new Error(`Could not find template to render '${i}'`);
        }
    }
    template(e, t) {
        return this.preCompiledTemplates[this.templateKey(e, t)];
    }
    templateKey(e, t) {
        return `${e}-${t}`;
    }
}
export const defaultDiff2HtmlConfig = {
    ...k,
    ...P,
    outputFormat: "line-by-line",
    drawFileList: true
};
export function parse(e, t = {}) {
    return c(e, {
        ...defaultDiff2HtmlConfig,
        ...t
    });
}
export function html(e, t = {}) {
    const n = {
        ...defaultDiff2HtmlConfig,
        ...t
    };
    const r = typeof e === "string" ? c(e, n) : e;
    const o = new I(n);
    return (n.drawFileList ? ((e, t)=>{
        const files = e.map((e)=>t.render("file-summary", "line", {
                fileHtmlId: E(e),
                oldName: e.oldName,
                newName: e.newName,
                fileName: O(e),
                deletedLines: `-${e.deletedLines}`,
                addedLines: `+${e.addedLines}`
            }, {
                fileIcon: t.template("icon", M(e))
            })).join("\n");
        return t.render("file-summary", "wrapper", {
            filesNumber: e.length,
            files
        });
    })(r, o) : "") + (n.outputFormat === "side-by-side" ? new L(o, n).render(r) : new j(o, n).render(r));
}
