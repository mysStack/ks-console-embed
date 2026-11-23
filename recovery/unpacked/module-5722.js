((e)=>{
    ace.define("ace/mode/json_highlight_rules", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/mode/text_highlight_rules"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/oop");
        const TextHighlightRules = e("./text_highlight_rules").TextHighlightRules;
        const s = function() {
            this.$rules = {
                start: [
                    {
                        token: "variable",
                        regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'
                    },
                    {
                        token: "string",
                        regex: '"',
                        next: "string"
                    },
                    {
                        token: "constant.numeric",
                        regex: "0[xX][0-9a-fA-F]+\\b"
                    },
                    {
                        token: "constant.numeric",
                        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
                    },
                    {
                        token: "constant.language.boolean",
                        regex: "(?:true|false)\\b"
                    },
                    {
                        token: "text",
                        regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
                    },
                    {
                        token: "comment",
                        regex: "\\/\\/.*$"
                    },
                    {
                        token: "comment.start",
                        regex: "\\/\\*",
                        next: "comment"
                    },
                    {
                        token: "paren.lparen",
                        regex: "[[({]"
                    },
                    {
                        token: "paren.rparen",
                        regex: "[\\])}]"
                    },
                    {
                        token: "text",
                        regex: "\\s+"
                    }
                ],
                string: [
                    {
                        token: "constant.language.escape",
                        regex: /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/
                    },
                    {
                        token: "string",
                        regex: '"|$',
                        next: "start"
                    },
                    {
                        defaultToken: "string"
                    }
                ],
                comment: [
                    {
                        token: "comment.end",
                        regex: "\\*\\/",
                        next: "start"
                    },
                    {
                        defaultToken: "comment"
                    }
                ]
            };
        };
        n.inherits(s, TextHighlightRules);
        t.JsonHighlightRules = s;
    });
    ace.define("ace/mode/json5_highlight_rules", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/mode/json_highlight_rules"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/oop");
        const JsonHighlightRules = e("./json_highlight_rules").JsonHighlightRules;
        const s = function() {
            JsonHighlightRules.call(this);
            const e = [
                {
                    token: "variable",
                    regex: /[a-zA-Z$_\u00a1-\uffff][\w$\u00a1-\uffff]*\s*(?=:)/
                },
                {
                    token: "variable",
                    regex: /['](?:(?:\\.)|(?:[^'\\]))*?[']\s*(?=:)/
                },
                {
                    token: "constant.language.boolean",
                    regex: /(?:null)\b/
                },
                {
                    token: "string",
                    regex: /'/,
                    next: [
                        {
                            token: "constant.language.escape",
                            regex: /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\/bfnrt]|$)/,
                            consumeLineEnd: true
                        },
                        {
                            token: "string",
                            regex: /'|$/,
                            next: "start"
                        },
                        {
                            defaultToken: "string"
                        }
                    ]
                },
                {
                    token: "string",
                    regex: /"(?![^"]*":)/,
                    next: [
                        {
                            token: "constant.language.escape",
                            regex: /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\/bfnrt]|$)/,
                            consumeLineEnd: true
                        },
                        {
                            token: "string",
                            regex: /"|$/,
                            next: "start"
                        },
                        {
                            defaultToken: "string"
                        }
                    ]
                },
                {
                    token: "constant.numeric",
                    regex: /[+-]?(?:Infinity|NaN)\b/
                }
            ];
            for(const t in this.$rules){
                this.$rules[t].unshift.apply(this.$rules[t], e);
            }
            this.normalizeRules();
        };
        n.inherits(s, JsonHighlightRules);
        t.Json5HighlightRules = s;
    });
    ace.define("ace/mode/matching_brace_outdent", [
        "require",
        "exports",
        "module",
        "ace/range"
    ], function(e, t, i) {
        "use strict";
        const Range = e("../range").Range;
        const o = function() {};
        (function() {
            this.checkOutdent = function(e, t) {
                return !!/^\s+$/.test(e) && /^\s*\}/.test(t);
            };
            this.autoOutdent = function(e, row) {
                const i = e.getLine(row).match(/^(\s*\})/);
                if (!i) {
                    return 0;
                }
                const length = i[1].length;
                const s = e.findMatchingBracket({
                    row,
                    column: length
                });
                if (!s || s.row == row) {
                    return 0;
                }
                const r = this.$getIndent(e.getLine(s.row));
                e.replace(new Range(row, 0, row, length - 1), r);
            };
            this.$getIndent = function(e) {
                return e.match(/^\s*/)[0];
            };
        }).call(o.prototype);
        t.MatchingBraceOutdent = o;
    });
    ace.define("ace/mode/folding/cstyle", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/range",
        "ace/mode/folding/fold_mode"
    ], function(e, t, i) {
        "use strict";
        const n = e("../../lib/oop");
        const Range = e("../../range").Range;
        const FoldMode = e("./fold_mode").FoldMode;
        const r = t.FoldMode = function(e) {
            if (e) {
                this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, `|${e.start}`));
                this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, `|${e.end}`));
            }
        };
        n.inherits(r, FoldMode);
        (function() {
            this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
            this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
            this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
            this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
            this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
            this._getFoldWidgetBase = this.getFoldWidget;
            this.getFoldWidget = function(e, t, i) {
                const n = e.getLine(i);
                if (this.singleLineBlockCommentRe.test(n) && !this.startRegionRe.test(n) && !this.tripleStarBlockCommentRe.test(n)) {
                    return "";
                }
                const o = this._getFoldWidgetBase(e, t, i);
                if (!o && this.startRegionRe.test(n)) {
                    return "start";
                }
                return o;
            };
            this.getFoldWidgetRange = function(e, t, i, n) {
                let o;
                const s = e.getLine(i);
                if (this.startRegionRe.test(s)) {
                    return this.getCommentRegionBlock(e, s, i);
                }
                if (o = s.match(this.foldingStartMarker)) {
                    var r = o.index;
                    if (o[1]) {
                        return this.openingBracketBlock(e, o[1], i, r);
                    }
                    let a = e.getCommentFoldRange(i, r + o[0].length, 1);
                    if (a && !a.isMultiLine()) {
                        if (n) {
                            a = this.getSectionRange(e, i);
                        } else if (t != "all") {
                            a = null;
                        }
                    }
                    return a;
                }
                if (t !== "markbegin" && (o = s.match(this.foldingStopMarker))) {
                    r = o.index + o[0].length;
                    if (o[1]) {
                        return this.closingBracketBlock(e, o[1], i, r);
                    }
                    return e.getCommentFoldRange(i, r, -1);
                }
            };
            this.getSectionRange = function(e, t) {
                let i = e.getLine(t);
                const n = i.search(/\S/);
                const s = t;
                const i_length = i.length;
                let a = t += 1;
                for(const c = e.getLength(); ++t < c;){
                    const l = (i = e.getLine(t)).search(/\S/);
                    if (l !== -1) {
                        if (n > l) {
                            break;
                        }
                        const h = this.getFoldWidgetRange(e, "all", t);
                        if (h) {
                            if (h.start.row <= s) {
                                break;
                            }
                            if (h.isMultiLine()) {
                                t = h.end.row;
                            } else if (n == l) {
                                break;
                            }
                        }
                        a = t;
                    }
                }
                return new Range(s, i_length, a, e.getLine(a).length);
            };
            this.getCommentRegionBlock = function(e, t, i) {
                const n = t.search(/\s*$/);
                for(var s = e.getLength(), r = i, a = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/, c = 1; ++i < s;){
                    t = e.getLine(i);
                    const l = a.exec(t);
                    if (l && (l[1] ? c-- : c++, !c)) {
                        break;
                    }
                }
                if (i > r) {
                    return new Range(r, n, i, t.length);
                }
            };
        }).call(r.prototype);
    });
    ace.define("ace/mode/json5", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/mode/text",
        "ace/mode/json5_highlight_rules",
        "ace/mode/matching_brace_outdent",
        "ace/mode/behaviour/cstyle",
        "ace/mode/folding/cstyle"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/oop");
        const Mode = e("./text").Mode;
        const Json5HighlightRules = e("./json5_highlight_rules").Json5HighlightRules;
        const MatchingBraceOutdent = e("./matching_brace_outdent").MatchingBraceOutdent;
        const CstyleBehaviour = e("./behaviour/cstyle").CstyleBehaviour;
        const FoldMode = e("./folding/cstyle").FoldMode;
        const l = function() {
            this.HighlightRules = Json5HighlightRules;
            this.$outdent = new MatchingBraceOutdent;
            this.$behaviour = new CstyleBehaviour;
            this.foldingRules = new FoldMode;
        };
        n.inherits(l, Mode);
        (function() {
            this.lineCommentStart = "//";
            this.blockComment = {
                start: "/*",
                end: "*/"
            };
            this.checkOutdent = function(e, t, i) {
                return this.$outdent.checkOutdent(t, i);
            };
            this.autoOutdent = function(e, t, i) {
                this.$outdent.autoOutdent(t, i);
            };
            this.$id = "ace/mode/json5";
        }).call(l.prototype);
        t.Mode = l;
    });
    ace.require([
        "ace/mode/json5"
    ], function(t) {
        if (e) {
            e.exports = t;
        }
    });
})(require("./module-139.js").default(module));
