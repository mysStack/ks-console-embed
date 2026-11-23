((e)=>{
    ace.define("ace/mode/doc_comment_highlight_rules", [
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
                        token: "comment.doc.tag",
                        regex: "@[\\w\\d_]+"
                    },
                    s.getTagRule(),
                    {
                        defaultToken: "comment.doc",
                        caseInsensitive: true
                    }
                ]
            };
        };
        n.inherits(s, TextHighlightRules);
        s.getTagRule = function(e) {
            return {
                token: "comment.doc.tag.storage.type",
                regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
            };
        };
        s.getStartRule = function(e) {
            return {
                token: "comment.doc",
                regex: "\\/\\*(?=\\*)",
                next: e
            };
        };
        s.getEndRule = function(e) {
            return {
                token: "comment.doc",
                regex: "\\*\\/",
                next: e
            };
        };
        t.DocCommentHighlightRules = s;
    });
    ace.define("ace/mode/javascript_highlight_rules", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/mode/doc_comment_highlight_rules",
        "ace/mode/text_highlight_rules"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/oop");
        const DocCommentHighlightRules = e("./doc_comment_highlight_rules").DocCommentHighlightRules;
        const TextHighlightRules = e("./text_highlight_rules").TextHighlightRules;
        const r = "[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*";
        const a = function(e) {
            const t = this.createKeywordMapper({
                "variable.language": "Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",
                keyword: "const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static",
                "storage.type": "const|let|var|function",
                "constant.language": "null|Infinity|NaN|undefined",
                "support.function": "alert",
                "constant.language.boolean": "true|false"
            }, "identifier");
            const regex = "\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";
            this.$rules = {
                no_regex: [
                    DocCommentHighlightRules.getStartRule("doc-start"),
                    l("no_regex"),
                    {
                        token: "string",
                        regex: "'(?=.)",
                        next: "qstring"
                    },
                    {
                        token: "string",
                        regex: '"(?=.)',
                        next: "qqstring"
                    },
                    {
                        token: "constant.numeric",
                        regex: /0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/
                    },
                    {
                        token: "constant.numeric",
                        regex: /(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/
                    },
                    {
                        token: [
                            "storage.type",
                            "punctuation.operator",
                            "support.function",
                            "punctuation.operator",
                            "entity.name.function",
                            "text",
                            "keyword.operator"
                        ],
                        regex: `(${r})(\\.)(prototype)(\\.)(${r})(\\s*)(=)`,
                        next: "function_arguments"
                    },
                    {
                        token: [
                            "storage.type",
                            "punctuation.operator",
                            "entity.name.function",
                            "text",
                            "keyword.operator",
                            "text",
                            "storage.type",
                            "text",
                            "paren.lparen"
                        ],
                        regex: `(${r})(\\.)(${r})(\\s*)(=)(\\s*)(function)(\\s*)(\\()`,
                        next: "function_arguments"
                    },
                    {
                        token: [
                            "entity.name.function",
                            "text",
                            "keyword.operator",
                            "text",
                            "storage.type",
                            "text",
                            "paren.lparen"
                        ],
                        regex: `(${r})(\\s*)(=)(\\s*)(function)(\\s*)(\\()`,
                        next: "function_arguments"
                    },
                    {
                        token: [
                            "storage.type",
                            "punctuation.operator",
                            "entity.name.function",
                            "text",
                            "keyword.operator",
                            "text",
                            "storage.type",
                            "text",
                            "entity.name.function",
                            "text",
                            "paren.lparen"
                        ],
                        regex: `(${r})(\\.)(${r})(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()`,
                        next: "function_arguments"
                    },
                    {
                        token: [
                            "storage.type",
                            "text",
                            "entity.name.function",
                            "text",
                            "paren.lparen"
                        ],
                        regex: `(function)(\\s+)(${r})(\\s*)(\\()`,
                        next: "function_arguments"
                    },
                    {
                        token: [
                            "entity.name.function",
                            "text",
                            "punctuation.operator",
                            "text",
                            "storage.type",
                            "text",
                            "paren.lparen"
                        ],
                        regex: `(${r})(\\s*)(:)(\\s*)(function)(\\s*)(\\()`,
                        next: "function_arguments"
                    },
                    {
                        token: [
                            "text",
                            "text",
                            "storage.type",
                            "text",
                            "paren.lparen"
                        ],
                        regex: "(:)(\\s*)(function)(\\s*)(\\()",
                        next: "function_arguments"
                    },
                    {
                        token: "keyword",
                        regex: "from(?=\\s*('|\"))"
                    },
                    {
                        token: "keyword",
                        regex: "(?:case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void)\\b",
                        next: "start"
                    },
                    {
                        token: [
                            "support.constant"
                        ],
                        regex: /that\b/
                    },
                    {
                        token: [
                            "storage.type",
                            "punctuation.operator",
                            "support.function.firebug"
                        ],
                        regex: /(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/
                    },
                    {
                        token: t,
                        regex: r
                    },
                    {
                        token: "punctuation.operator",
                        regex: /[.](?![.])/,
                        next: "property"
                    },
                    {
                        token: "storage.type",
                        regex: /=>/,
                        next: "start"
                    },
                    {
                        token: "keyword.operator",
                        regex: /--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,
                        next: "start"
                    },
                    {
                        token: "punctuation.operator",
                        regex: /[?:,;.]/,
                        next: "start"
                    },
                    {
                        token: "paren.lparen",
                        regex: /[\[({]/,
                        next: "start"
                    },
                    {
                        token: "paren.rparen",
                        regex: /[\])}]/
                    },
                    {
                        token: "comment",
                        regex: /^#!.*$/
                    }
                ],
                property: [
                    {
                        token: "text",
                        regex: "\\s+"
                    },
                    {
                        token: [
                            "storage.type",
                            "punctuation.operator",
                            "entity.name.function",
                            "text",
                            "keyword.operator",
                            "text",
                            "storage.type",
                            "text",
                            "entity.name.function",
                            "text",
                            "paren.lparen"
                        ],
                        regex: `(${r})(\\.)(${r})(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()`,
                        next: "function_arguments"
                    },
                    {
                        token: "punctuation.operator",
                        regex: /[.](?![.])/
                    },
                    {
                        token: "support.function",
                        regex: /(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/
                    },
                    {
                        token: "support.function.dom",
                        regex: /(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/
                    },
                    {
                        token: "support.constant",
                        regex: /(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/
                    },
                    {
                        token: "identifier",
                        regex: r
                    },
                    {
                        regex: "",
                        token: "empty",
                        next: "no_regex"
                    }
                ],
                start: [
                    DocCommentHighlightRules.getStartRule("doc-start"),
                    l("start"),
                    {
                        token: "string.regexp",
                        regex: "\\/",
                        next: "regex"
                    },
                    {
                        token: "text",
                        regex: "\\s+|^$",
                        next: "start"
                    },
                    {
                        token: "empty",
                        regex: "",
                        next: "no_regex"
                    }
                ],
                regex: [
                    {
                        token: "regexp.keyword.operator",
                        regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
                    },
                    {
                        token: "string.regexp",
                        regex: "/[sxngimy]*",
                        next: "no_regex"
                    },
                    {
                        token: "invalid",
                        regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
                    },
                    {
                        token: "constant.language.escape",
                        regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
                    },
                    {
                        token: "constant.language.delimiter",
                        regex: /\|/
                    },
                    {
                        token: "constant.language.escape",
                        regex: /\[\^?/,
                        next: "regex_character_class"
                    },
                    {
                        token: "empty",
                        regex: "$",
                        next: "no_regex"
                    },
                    {
                        defaultToken: "string.regexp"
                    }
                ],
                regex_character_class: [
                    {
                        token: "regexp.charclass.keyword.operator",
                        regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
                    },
                    {
                        token: "constant.language.escape",
                        regex: "]",
                        next: "regex"
                    },
                    {
                        token: "constant.language.escape",
                        regex: "-"
                    },
                    {
                        token: "empty",
                        regex: "$",
                        next: "no_regex"
                    },
                    {
                        defaultToken: "string.regexp.charachterclass"
                    }
                ],
                function_arguments: [
                    {
                        token: "variable.parameter",
                        regex: r
                    },
                    {
                        token: "punctuation.operator",
                        regex: "[, ]+"
                    },
                    {
                        token: "punctuation.operator",
                        regex: "$"
                    },
                    {
                        token: "empty",
                        regex: "",
                        next: "no_regex"
                    }
                ],
                qqstring: [
                    {
                        token: "constant.language.escape",
                        regex
                    },
                    {
                        token: "string",
                        regex: "\\\\$",
                        consumeLineEnd: true
                    },
                    {
                        token: "string",
                        regex: '"|$',
                        next: "no_regex"
                    },
                    {
                        defaultToken: "string"
                    }
                ],
                qstring: [
                    {
                        token: "constant.language.escape",
                        regex
                    },
                    {
                        token: "string",
                        regex: "\\\\$",
                        consumeLineEnd: true
                    },
                    {
                        token: "string",
                        regex: "'|$",
                        next: "no_regex"
                    },
                    {
                        defaultToken: "string"
                    }
                ]
            };
            if (!(e && e.noES6)) {
                this.$rules.no_regex.unshift({
                    regex: "[{}]",
                    onMatch: function(e, t, i) {
                        this.next = e == "{" ? this.nextState : "";
                        if (e == "{" && i.length) {
                            i.unshift("start", t);
                        } else if (e == "}" && i.length && (i.shift(), this.next = i.shift(), this.next.indexOf("string") != -1 || this.next.indexOf("jsx") != -1)) {
                            return "paren.quasi.end";
                        }
                        if (e == "{") {
                            return "paren.lparen";
                        }
                        return "paren.rparen";
                    },
                    nextState: "start"
                }, {
                    token: "string.quasi.start",
                    regex: /`/,
                    push: [
                        {
                            token: "constant.language.escape",
                            regex
                        },
                        {
                            token: "paren.quasi.start",
                            regex: /\${/,
                            push: "start"
                        },
                        {
                            token: "string.quasi.end",
                            regex: /`/,
                            next: "pop"
                        },
                        {
                            defaultToken: "string.quasi"
                        }
                    ]
                });
                if (!(e && e.jsx == 0)) {
                    c.call(this);
                }
            }
            this.embedRules(DocCommentHighlightRules, "doc-", [
                DocCommentHighlightRules.getEndRule("no_regex")
            ]);
            this.normalizeRules();
        };
        function c() {
            const e = r.replace("\\d", "\\d\\-");
            const t = {
                onMatch: function(e, t, i) {
                    const n = e.charAt(1) == "/" ? 2 : 1;
                    if (n == 1) {
                        if (t != this.nextState) {
                            i.unshift(this.next, this.nextState, 0);
                        } else {
                            i.unshift(this.next);
                        }
                        i[2]++;
                    } else if (n == 2 && t == this.nextState) {
                        i[1]--;
                        if (!i[1] || i[1] < 0) {
                            i.shift();
                            i.shift();
                        }
                    }
                    return [
                        {
                            type: `meta.tag.punctuation.${n == 1 ? "" : "end-"}tag-open.xml`,
                            value: e.slice(0, n)
                        },
                        {
                            type: "meta.tag.tag-name.xml",
                            value: e.substr(n)
                        }
                    ];
                },
                regex: `</?${e}`,
                next: "jsxAttributes",
                nextState: "jsx"
            };
            this.$rules.start.unshift(t);
            const i = {
                regex: "{",
                token: "paren.quasi.start",
                push: "start"
            };
            this.$rules.jsx = [
                i,
                t,
                {
                    include: "reference"
                },
                {
                    defaultToken: "string"
                }
            ];
            this.$rules.jsxAttributes = [
                {
                    token: "meta.tag.punctuation.tag-close.xml",
                    regex: "/?>",
                    onMatch: function(e, t, i) {
                        if (t == i[0]) {
                            i.shift();
                        }
                        if (e.length == 2) {
                            if (i[0] == this.nextState) {
                                i[1]--;
                            }
                            if (!i[1] || i[1] < 0) {
                                i.splice(0, 2);
                            }
                        }
                        this.next = i[0] || "start";
                        return [
                            {
                                type: this.token,
                                value: e
                            }
                        ];
                    },
                    nextState: "jsx"
                },
                i,
                l("jsxAttributes"),
                {
                    token: "entity.other.attribute-name.xml",
                    regex: e
                },
                {
                    token: "keyword.operator.attribute-equals.xml",
                    regex: "="
                },
                {
                    token: "text.tag-whitespace.xml",
                    regex: "\\s+"
                },
                {
                    token: "string.attribute-value.xml",
                    regex: "'",
                    stateName: "jsx_attr_q",
                    push: [
                        {
                            token: "string.attribute-value.xml",
                            regex: "'",
                            next: "pop"
                        },
                        {
                            include: "reference"
                        },
                        {
                            defaultToken: "string.attribute-value.xml"
                        }
                    ]
                },
                {
                    token: "string.attribute-value.xml",
                    regex: '"',
                    stateName: "jsx_attr_qq",
                    push: [
                        {
                            token: "string.attribute-value.xml",
                            regex: '"',
                            next: "pop"
                        },
                        {
                            include: "reference"
                        },
                        {
                            defaultToken: "string.attribute-value.xml"
                        }
                    ]
                },
                t
            ];
            this.$rules.reference = [
                {
                    token: "constant.language.escape.reference.xml",
                    regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
                }
            ];
        }
        function l(e) {
            return [
                {
                    token: "comment",
                    regex: /\/\*/,
                    next: [
                        DocCommentHighlightRules.getTagRule(),
                        {
                            token: "comment",
                            regex: "\\*\\/",
                            next: e || "pop"
                        },
                        {
                            defaultToken: "comment",
                            caseInsensitive: true
                        }
                    ]
                },
                {
                    token: "comment",
                    regex: "\\/\\/",
                    next: [
                        DocCommentHighlightRules.getTagRule(),
                        {
                            token: "comment",
                            regex: "$|^",
                            next: e || "pop"
                        },
                        {
                            defaultToken: "comment",
                            caseInsensitive: true
                        }
                    ]
                }
            ];
        }
        n.inherits(a, TextHighlightRules);
        t.JavaScriptHighlightRules = a;
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
    ace.define("ace/mode/javascript", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/mode/text",
        "ace/mode/javascript_highlight_rules",
        "ace/mode/matching_brace_outdent",
        "ace/worker/worker_client",
        "ace/mode/behaviour/cstyle",
        "ace/mode/folding/cstyle"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/oop");
        const Mode = e("./text").Mode;
        const JavaScriptHighlightRules = e("./javascript_highlight_rules").JavaScriptHighlightRules;
        const MatchingBraceOutdent = e("./matching_brace_outdent").MatchingBraceOutdent;
        const WorkerClient = e("../worker/worker_client").WorkerClient;
        const CstyleBehaviour = e("./behaviour/cstyle").CstyleBehaviour;
        const FoldMode = e("./folding/cstyle").FoldMode;
        const h = function() {
            this.HighlightRules = JavaScriptHighlightRules;
            this.$outdent = new MatchingBraceOutdent;
            this.$behaviour = new CstyleBehaviour;
            this.foldingRules = new FoldMode;
        };
        n.inherits(h, Mode);
        (function() {
            this.lineCommentStart = "//";
            this.blockComment = {
                start: "/*",
                end: "*/"
            };
            this.$quotes = {
                '"': '"',
                "'": "'",
                "`": "`"
            };
            this.getNextLineIndent = function(e, t, i) {
                let n = this.$getIndent(t);
                const o = this.getTokenizer().getLineTokens(t, e);
                const { tokens, state } = o;
                if (tokens.length && tokens[tokens.length - 1].type == "comment") {
                    return n;
                }
                if (e == "start" || e == "no_regex") {
                    if (a = t.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/)) {
                        n += i;
                    }
                } else if (e == "doc-start") {
                    if (state == "start" || state == "no_regex") {
                        return "";
                    }
                    var a;
                    if (a = t.match(/^\s*(\/?)\*/)) {
                        if (a[1]) {
                            n += " ";
                        }
                        n += "* ";
                    }
                }
                return n;
            };
            this.checkOutdent = function(e, t, i) {
                return this.$outdent.checkOutdent(t, i);
            };
            this.autoOutdent = function(e, t, i) {
                this.$outdent.autoOutdent(t, i);
            };
            this.createWorker = function(e) {
                const t = new WorkerClient([
                    "ace"
                ], "ace/mode/javascript_worker", "JavaScriptWorker");
                t.attachToDocument(e.getDocument());
                t.on("annotate", function(t) {
                    e.setAnnotations(t.data);
                });
                t.on("terminate", function() {
                    e.clearAnnotations();
                });
                return t;
            };
            this.$id = "ace/mode/javascript";
            this.snippetFileId = "ace/snippets/javascript";
        }).call(h.prototype);
        t.Mode = h;
    });
    ace.define("ace/mode/groovy_highlight_rules", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/mode/doc_comment_highlight_rules",
        "ace/mode/text_highlight_rules"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/oop");
        const DocCommentHighlightRules = e("./doc_comment_highlight_rules").DocCommentHighlightRules;
        const TextHighlightRules = e("./text_highlight_rules").TextHighlightRules;
        const r = function() {
            const e = this.createKeywordMapper({
                "variable.language": "this",
                keyword: "assert|with|abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|def|float|native|super|while",
                "support.function": "AbstractMethodError|AssertionError|ClassCircularityError|ClassFormatError|Deprecated|EnumConstantNotPresentException|ExceptionInInitializerError|IllegalAccessError|IllegalThreadStateException|InstantiationError|InternalError|NegativeArraySizeException|NoSuchFieldError|Override|Process|ProcessBuilder|SecurityManager|StringIndexOutOfBoundsException|SuppressWarnings|TypeNotPresentException|UnknownError|UnsatisfiedLinkError|UnsupportedClassVersionError|VerifyError|InstantiationException|IndexOutOfBoundsException|ArrayIndexOutOfBoundsException|CloneNotSupportedException|NoSuchFieldException|IllegalArgumentException|NumberFormatException|SecurityException|Void|InheritableThreadLocal|IllegalStateException|InterruptedException|NoSuchMethodException|IllegalAccessException|UnsupportedOperationException|Enum|StrictMath|Package|Compiler|Readable|Runtime|StringBuilder|Math|IncompatibleClassChangeError|NoSuchMethodError|ThreadLocal|RuntimePermission|ArithmeticException|NullPointerException|Long|Integer|Short|Byte|Double|Number|Float|Character|Boolean|StackTraceElement|Appendable|StringBuffer|Iterable|ThreadGroup|Runnable|Thread|IllegalMonitorStateException|StackOverflowError|OutOfMemoryError|VirtualMachineError|ArrayStoreException|ClassCastException|LinkageError|NoClassDefFoundError|ClassNotFoundException|RuntimeException|Exception|ThreadDeath|Error|Throwable|System|ClassLoader|Cloneable|Class|CharSequence|Comparable|String|Object",
                "constant.language": "null|Infinity|NaN|undefined"
            }, "identifier");
            this.$rules = {
                start: [
                    {
                        token: "comment",
                        regex: "\\/\\/.*$"
                    },
                    DocCommentHighlightRules.getStartRule("doc-start"),
                    {
                        token: "comment",
                        regex: "\\/\\*",
                        next: "comment"
                    },
                    {
                        token: "string.regexp",
                        regex: "[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"
                    },
                    {
                        token: "string",
                        regex: '"""',
                        next: "qqstring"
                    },
                    {
                        token: "string",
                        regex: "'''",
                        next: "qstring"
                    },
                    {
                        token: "string",
                        regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
                    },
                    {
                        token: "string",
                        regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
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
                        token: e,
                        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                    },
                    {
                        token: "keyword.operator",
                        regex: "\\?:|\\?\\.|\\*\\.|<=>|=~|==~|\\.@|\\*\\.@|\\.&|as|in|is|!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"
                    },
                    {
                        token: "lparen",
                        regex: "[[({]"
                    },
                    {
                        token: "rparen",
                        regex: "[\\])}]"
                    },
                    {
                        token: "text",
                        regex: "\\s+"
                    }
                ],
                comment: [
                    {
                        token: "comment",
                        regex: "\\*\\/",
                        next: "start"
                    },
                    {
                        defaultToken: "comment"
                    }
                ],
                qqstring: [
                    {
                        token: "constant.language.escape",
                        regex: /\\(?:u[0-9A-Fa-f]{4}|.|$)/
                    },
                    {
                        token: "constant.language.escape",
                        regex: /\$[\w\d]+/
                    },
                    {
                        token: "constant.language.escape",
                        regex: /\$\{[^"\}]+\}?/
                    },
                    {
                        token: "string",
                        regex: '"{3,5}',
                        next: "start"
                    },
                    {
                        token: "string",
                        regex: ".+?"
                    }
                ],
                qstring: [
                    {
                        token: "constant.language.escape",
                        regex: /\\(?:u[0-9A-Fa-f]{4}|.|$)/
                    },
                    {
                        token: "string",
                        regex: "'{3,5}",
                        next: "start"
                    },
                    {
                        token: "string",
                        regex: ".+?"
                    }
                ]
            };
            this.embedRules(DocCommentHighlightRules, "doc-", [
                DocCommentHighlightRules.getEndRule("start")
            ]);
        };
        n.inherits(r, TextHighlightRules);
        t.GroovyHighlightRules = r;
    });
    ace.define("ace/mode/groovy", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/mode/javascript",
        "ace/mode/groovy_highlight_rules"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/oop");
        const Mode = e("./javascript").Mode;
        const GroovyHighlightRules = e("./groovy_highlight_rules").GroovyHighlightRules;
        const r = function() {
            Mode.call(this);
            this.HighlightRules = GroovyHighlightRules;
        };
        n.inherits(r, Mode);
        (function() {
            this.createWorker = function(e) {
                return null;
            };
            this.$id = "ace/mode/groovy";
        }).call(r.prototype);
        t.Mode = r;
    });
    ace.require([
        "ace/mode/groovy"
    ], function(t) {
        if (e) {
            e.exports = t;
        }
    });
})(require("./module-139.js").default(module));
