((e)=>{
    ace.define("ace/mode/yaml_highlight_rules", [
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
                        token: "comment",
                        regex: "#.*$"
                    },
                    {
                        token: "list.markup",
                        regex: /^(?:-{3}|\.{3})\s*(?=#|$)/
                    },
                    {
                        token: "list.markup",
                        regex: /^\s*[\-?](?:$|\s)/
                    },
                    {
                        token: "constant",
                        regex: "!![\\w//]+"
                    },
                    {
                        token: "constant.language",
                        regex: "[&\\*][a-zA-Z0-9-_]+"
                    },
                    {
                        token: [
                            "meta.tag",
                            "keyword"
                        ],
                        regex: /^(\s*\w.*?)(:(?=\s|$))/
                    },
                    {
                        token: [
                            "meta.tag",
                            "keyword"
                        ],
                        regex: /(\w+?)(\s*:(?=\s|$))/
                    },
                    {
                        token: "keyword.operator",
                        regex: "<<\\w*:\\w*"
                    },
                    {
                        token: "keyword.operator",
                        regex: "-\\s*(?=[{])"
                    },
                    {
                        token: "string",
                        regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
                    },
                    {
                        token: "string",
                        regex: /[|>][-+\d]*(?:$|\s+(?:$|#))/,
                        onMatch: function(e, t, i, n) {
                            n = n.replace(/ #.*/, "");
                            let length = /^ *((:\s*)?-(\s*[^|>])?)?/.exec(n)[0].replace(/\S\s*$/, "").length;
                            const s = parseInt(/\d+[\s+-]*$/.exec(n));
                            if (s) {
                                length += s - 1;
                                this.next = "mlString";
                            } else {
                                this.next = "mlStringPre";
                            }
                            if (i.length) {
                                i[0] = this.next;
                                i[1] = length;
                            } else {
                                i.push(this.next);
                                i.push(length);
                            }
                            return this.token;
                        },
                        next: "mlString"
                    },
                    {
                        token: "string",
                        regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
                    },
                    {
                        token: "constant.numeric",
                        regex: /(\b|[+\-\.])[\d_]+(?:(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)(?=[^\d-\w]|$)/
                    },
                    {
                        token: "constant.numeric",
                        regex: /[+\-]?\.inf\b|NaN\b|0x[\dA-Fa-f_]+|0b[10_]+/
                    },
                    {
                        token: "constant.language.boolean",
                        regex: "\\b(?:true|false|TRUE|FALSE|True|False|yes|no)\\b"
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
                        regex: /[^\s,:\[\]\{\}]+/
                    }
                ],
                mlStringPre: [
                    {
                        token: "indent",
                        regex: /^ *$/
                    },
                    {
                        token: "indent",
                        regex: /^ */,
                        onMatch: function(e, t, i) {
                            if (i[1] >= e.length) {
                                this.next = "start";
                                i.shift();
                                i.shift();
                            } else {
                                i[1] = e.length - 1;
                                this.next = i[0] = "mlString";
                            }
                            return this.token;
                        },
                        next: "mlString"
                    },
                    {
                        defaultToken: "string"
                    }
                ],
                mlString: [
                    {
                        token: "indent",
                        regex: /^ *$/
                    },
                    {
                        token: "indent",
                        regex: /^ */,
                        onMatch: function(e, t, i) {
                            if (i[1] >= e.length) {
                                this.next = "start";
                                i.splice(0);
                            } else {
                                this.next = "mlString";
                            }
                            return this.token;
                        },
                        next: "mlString"
                    },
                    {
                        token: "string",
                        regex: ".+"
                    }
                ]
            };
            this.normalizeRules();
        };
        n.inherits(s, TextHighlightRules);
        t.YamlHighlightRules = s;
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
    ace.define("ace/mode/folding/coffee", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/mode/folding/fold_mode",
        "ace/range"
    ], function(e, t, i) {
        "use strict";
        const n = e("../../lib/oop");
        const FoldMode = e("./fold_mode").FoldMode;
        const Range = e("../../range").Range;
        const r = t.FoldMode = function() {};
        n.inherits(r, FoldMode);
        (function() {
            this.getFoldWidgetRange = function(e, t, i) {
                const n = this.indentationBlock(e, i);
                if (n) {
                    return n;
                }
                const o = /\S/;
                let r = e.getLine(i);
                const a = r.search(o);
                if (a != -1 && r[a] == "#") {
                    const c = r.length;
                    for(var l = e.getLength(), h = i, d = i; ++i < l;){
                        const u = (r = e.getLine(i)).search(o);
                        if (u != -1) {
                            if (r[u] != "#") {
                                break;
                            }
                            d = i;
                        }
                    }
                    if (d > h) {
                        const f = e.getLine(d).length;
                        return new Range(h, c, d, f);
                    }
                }
            };
            this.getFoldWidget = function(e, t, i) {
                const n = e.getLine(i);
                const o = n.search(/\S/);
                const s = e.getLine(i + 1);
                const r = e.getLine(i - 1);
                const a = r.search(/\S/);
                const c = s.search(/\S/);
                if (o == -1) {
                    e.foldWidgets[i - 1] = a != -1 && a < c ? "start" : "";
                    return "";
                }
                if (a == -1) {
                    if (o == c && n[o] == "#" && s[o] == "#") {
                        e.foldWidgets[i - 1] = "";
                        e.foldWidgets[i + 1] = "";
                        return "start";
                    }
                } else if (a == o && n[o] == "#" && r[o] == "#" && e.getLine(i - 2).search(/\S/) == -1) {
                    e.foldWidgets[i - 1] = "start";
                    e.foldWidgets[i + 1] = "";
                    return "";
                }
                e.foldWidgets[i - 1] = a != -1 && a < o ? "start" : "";
                if (o < c) {
                    return "start";
                }
                return "";
            };
        }).call(r.prototype);
    });
    ace.define("ace/mode/yaml", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/mode/text",
        "ace/mode/yaml_highlight_rules",
        "ace/mode/matching_brace_outdent",
        "ace/mode/folding/coffee"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/oop");
        const Mode = e("./text").Mode;
        const YamlHighlightRules = e("./yaml_highlight_rules").YamlHighlightRules;
        const MatchingBraceOutdent = e("./matching_brace_outdent").MatchingBraceOutdent;
        const FoldMode = e("./folding/coffee").FoldMode;
        const c = function() {
            this.HighlightRules = YamlHighlightRules;
            this.$outdent = new MatchingBraceOutdent;
            this.foldingRules = new FoldMode;
            this.$behaviour = this.$defaultBehaviour;
        };
        n.inherits(c, Mode);
        (function() {
            this.lineCommentStart = [
                "#"
            ];
            this.getNextLineIndent = function(e, t, i) {
                let n = this.$getIndent(t);
                if (e == "start" && t.match(/^.*[\{\(\[]\s*$/)) {
                    n += i;
                }
                return n;
            };
            this.checkOutdent = function(e, t, i) {
                return this.$outdent.checkOutdent(t, i);
            };
            this.autoOutdent = function(e, t, i) {
                this.$outdent.autoOutdent(t, i);
            };
            this.$id = "ace/mode/yaml";
        }).call(c.prototype);
        t.Mode = c;
    });
    ace.require([
        "ace/mode/yaml"
    ], function(t) {
        if (e) {
            e.exports = t;
        }
    });
})(require("unpacked/module-139.js").default(module));
