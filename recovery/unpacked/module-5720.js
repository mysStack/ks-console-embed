((e)=>{
    ace.define("ace/mode/toml_highlight_rules", [
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
            const token = this.createKeywordMapper({
                "constant.language.boolean": "true|false"
            }, "identifier");
            this.$rules = {
                start: [
                    {
                        token: "comment.toml",
                        regex: /#.*$/
                    },
                    {
                        token: "string",
                        regex: '"(?=.)',
                        next: "qqstring"
                    },
                    {
                        token: [
                            "variable.keygroup.toml"
                        ],
                        regex: "(?:^\\s*)(\\[\\[([^\\]]+)\\]\\])"
                    },
                    {
                        token: [
                            "variable.keygroup.toml"
                        ],
                        regex: "(?:^\\s*)(\\[([^\\]]+)\\])"
                    },
                    {
                        token,
                        regex: "[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*\\b"
                    },
                    {
                        token: "support.date.toml",
                        regex: "\\d{4}-\\d{2}-\\d{2}(T)\\d{2}:\\d{2}:\\d{2}(Z)"
                    },
                    {
                        token: "constant.numeric.toml",
                        regex: "-?\\d+(\\.?\\d+)?"
                    }
                ],
                qqstring: [
                    {
                        token: "string",
                        regex: "\\\\$",
                        next: "qqstring"
                    },
                    {
                        token: "constant.language.escape",
                        regex: '\\\\[0tnr"\\\\]'
                    },
                    {
                        token: "string",
                        regex: '"|$',
                        next: "start"
                    },
                    {
                        defaultToken: "string"
                    }
                ]
            };
        };
        n.inherits(s, TextHighlightRules);
        t.TomlHighlightRules = s;
    });
    ace.define("ace/mode/folding/ini", [
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
        const r = t.FoldMode = function() {};
        n.inherits(r, FoldMode);
        (function() {
            this.foldingStartMarker = /^\s*\[([^\])]*)]\s*(?:$|[;#])/;
            this.getFoldWidgetRange = function(e, t, i) {
                const foldingStartMarker = this.foldingStartMarker;
                let s = e.getLine(i);
                let r = s.match(foldingStartMarker);
                if (r) {
                    const a = `${r[1]}.`;
                    const c = s.length;
                    for(var l = e.getLength(), h = i, d = i; ++i < l;){
                        s = e.getLine(i);
                        if (!/^\s*$/.test(s)) {
                            if ((r = s.match(foldingStartMarker)) && r[1].lastIndexOf(a, 0) !== 0) {
                                break;
                            }
                            d = i;
                        }
                    }
                    if (d > h) {
                        const u = e.getLine(d).length;
                        return new Range(h, c, d, u);
                    }
                }
            };
        }).call(r.prototype);
    });
    ace.define("ace/mode/toml", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/mode/text",
        "ace/mode/toml_highlight_rules",
        "ace/mode/folding/ini"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/oop");
        const Mode = e("./text").Mode;
        const TomlHighlightRules = e("./toml_highlight_rules").TomlHighlightRules;
        const FoldMode = e("./folding/ini").FoldMode;
        const a = function() {
            this.HighlightRules = TomlHighlightRules;
            this.foldingRules = new FoldMode;
            this.$behaviour = this.$defaultBehaviour;
        };
        n.inherits(a, Mode);
        (function() {
            this.lineCommentStart = "#";
            this.$id = "ace/mode/toml";
        }).call(a.prototype);
        t.Mode = a;
    });
    ace.require([
        "ace/mode/toml"
    ], function(t) {
        if (e) {
            e.exports = t;
        }
    });
})(require("./module-139.js").default(module));
