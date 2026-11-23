((e)=>{
    ace.define("ace/mode/properties_highlight_rules", [
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
            const regex = /\\u[0-9a-fA-F]{4}|\\/;
            this.$rules = {
                start: [
                    {
                        token: "comment",
                        regex: /[!#].*$/
                    },
                    {
                        token: "keyword",
                        regex: /[=:]$/
                    },
                    {
                        token: "keyword",
                        regex: /[=:]/,
                        next: "value"
                    },
                    {
                        token: "constant.language.escape",
                        regex
                    },
                    {
                        defaultToken: "variable"
                    }
                ],
                value: [
                    {
                        regex: /\\$/,
                        token: "string",
                        next: "value"
                    },
                    {
                        regex: /$/,
                        token: "string",
                        next: "start"
                    },
                    {
                        token: "constant.language.escape",
                        regex
                    },
                    {
                        defaultToken: "string"
                    }
                ]
            };
        };
        n.inherits(s, TextHighlightRules);
        t.PropertiesHighlightRules = s;
    });
    ace.define("ace/mode/properties", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/mode/text",
        "ace/mode/properties_highlight_rules"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/oop");
        const Mode = e("./text").Mode;
        const PropertiesHighlightRules = e("./properties_highlight_rules").PropertiesHighlightRules;
        const r = function() {
            this.HighlightRules = PropertiesHighlightRules;
            this.$behaviour = this.$defaultBehaviour;
        };
        n.inherits(r, Mode);
        (function() {
            this.$id = "ace/mode/properties";
        }).call(r.prototype);
        t.Mode = r;
    });
    ace.require([
        "ace/mode/properties"
    ], function(t) {
        if (e) {
            e.exports = t;
        }
    });
})(require("unpacked/module-139.js").default(module));
