((t)=>{
    const n = ((e)=>{
        const t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
        let n = 0;
        const r = {};
        var o = {
            manual: e.Prism && e.Prism.manual,
            disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
            util: {
                encode: function e(t) {
                    if (t instanceof Token) {
                        return new Token(t.type, e(t.content), t.alias);
                    }
                    if (Array.isArray(t)) {
                        return t.map(e);
                    }
                    return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
                },
                type: function(e) {
                    return Object.prototype.toString.call(e).slice(8, -1);
                },
                objId: function(e) {
                    if (!e.__id) {
                        Object.defineProperty(e, "__id", {
                            value: ++n
                        });
                    }
                    return e.__id;
                },
                clone: function e(t, n) {
                    let r;
                    let i;
                    n = n || {};
                    switch(o.util.type(t)){
                        case "Object":
                            i = o.util.objId(t);
                            if (n[i]) {
                                return n[i];
                            }
                            r = {};
                            n[i] = r;
                            for(const a in t){
                                if (t.hasOwnProperty(a)) {
                                    r[a] = e(t[a], n);
                                }
                            }
                            return r;
                        case "Array":
                            i = o.util.objId(t);
                            if (n[i]) {
                                return n[i];
                            }
                            r = [];
                            n[i] = r;
                            t.forEach((t, o)=>{
                                r[o] = e(t, n);
                            });
                            return r;
                        default:
                            return t;
                    }
                },
                getLanguage: function(e) {
                    while(e){
                        const n = t.exec(e.className);
                        if (n) {
                            return n[1].toLowerCase();
                        }
                        e = e.parentElement;
                    }
                    return "none";
                },
                setLanguage: function(e, n) {
                    e.className = e.className.replace(RegExp(t, "gi"), "");
                    e.classList.add(`language-${n}`);
                },
                currentScript: function() {
                    if (typeof document === "undefined") {
                        return null;
                    }
                    if ("currentScript" in document) {
                        return document.currentScript;
                    }
                    try {
                        throw new Error;
                    } catch (error) {
                        const e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(error.stack) || [])[1];
                        if (e) {
                            const t = document.getElementsByTagName("script");
                            for(const n in t){
                                if (t[n].src == e) {
                                    return t[n];
                                }
                            }
                        }
                        return null;
                    }
                },
                isActive: function(e, t, n) {
                    const r = `no-${t}`;
                    while(e){
                        const o = e.classList;
                        if (o.contains(t)) {
                            return true;
                        }
                        if (o.contains(r)) {
                            return false;
                        }
                        e = e.parentElement;
                    }
                    return !!n;
                }
            },
            languages: {
                plain: r,
                plaintext: r,
                text: r,
                txt: r,
                extend: function(e, t) {
                    const n = o.util.clone(o.languages[e]);
                    for(const r in t){
                        n[r] = t[r];
                    }
                    return n;
                },
                insertBefore: function(e, t, n, r) {
                    const i = (r = r || o.languages)[e];
                    const a = {};
                    for(const l in i){
                        if (i.hasOwnProperty(l)) {
                            if (l == t) {
                                for(const u in n){
                                    if (n.hasOwnProperty(u)) {
                                        a[u] = n[u];
                                    }
                                }
                            }
                            if (!n.hasOwnProperty(l)) {
                                a[l] = i[l];
                            }
                        }
                    }
                    const s = r[e];
                    r[e] = a;
                    o.languages.DFS(o.languages, function(t, n) {
                        if (n === s && t != e) {
                            this[t] = a;
                        }
                    });
                    return a;
                },
                DFS: function e(t, n, r, i) {
                    i = i || {};
                    const objId = o.util.objId;
                    for(const l in t){
                        if (t.hasOwnProperty(l)) {
                            n.call(t, l, t[l], r || l);
                            const u = t[l];
                            const s = o.util.type(u);
                            if (s !== "Object" || i[objId(u)]) {
                                if (!(s !== "Array" || i[objId(u)])) {
                                    i[objId(u)] = true;
                                    e(u, n, l, i);
                                }
                            } else {
                                i[objId(u)] = true;
                                e(u, n, null, i);
                            }
                        }
                    }
                }
            },
            plugins: {},
            highlightAll: function(e, t) {
                o.highlightAllUnder(document, e, t);
            },
            highlightAllUnder: function(container, t, callback) {
                const r = {
                    callback,
                    container,
                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                };
                o.hooks.run("before-highlightall", r);
                r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector));
                o.hooks.run("before-all-elements-highlight", r);
                let i;
                for(let a = 0; i = r.elements[a++];){
                    o.highlightElement(i, t === true, r.callback);
                }
            },
            highlightElement: function(element, n, r) {
                const i = o.util.getLanguage(element);
                const a = o.languages[i];
                o.util.setLanguage(element, i);
                let t_parentElement = element.parentElement;
                if (t_parentElement && t_parentElement.nodeName.toLowerCase() === "pre") {
                    o.util.setLanguage(t_parentElement, i);
                }
                const u = {
                    element,
                    language: i,
                    grammar: a,
                    code: element.textContent
                };
                function s(e) {
                    u.highlightedCode = e;
                    o.hooks.run("before-insert", u);
                    u.element.innerHTML = u.highlightedCode;
                    o.hooks.run("after-highlight", u);
                    o.hooks.run("complete", u);
                    if (r) {
                        r.call(u.element);
                    }
                }
                o.hooks.run("before-sanity-check", u);
                if ((t_parentElement = u.element.parentElement) && t_parentElement.nodeName.toLowerCase() === "pre" && !t_parentElement.hasAttribute("tabindex")) {
                    t_parentElement.setAttribute("tabindex", "0");
                }
                if (!u.code) {
                    o.hooks.run("complete", u);
                    return void (r && r.call(u.element));
                }
                o.hooks.run("before-highlight", u);
                if (u.grammar) {
                    if (n && e.Worker) {
                        const c = new Worker(o.filename);
                        c.onmessage = function(e) {
                            s(e.data);
                        };
                        c.postMessage(JSON.stringify({
                            language: u.language,
                            code: u.code,
                            immediateClose: true
                        }));
                    } else {
                        s(o.highlight(u.code, u.grammar, u.language));
                    }
                } else {
                    s(o.util.encode(u.code));
                }
            },
            highlight: function(code, t, language) {
                const r = {
                    code,
                    grammar: t,
                    language
                };
                o.hooks.run("before-tokenize", r);
                if (!r.grammar) {
                    throw new Error(`The language "${r.language}" has no grammar.`);
                }
                r.tokens = o.tokenize(r.code, r.grammar);
                o.hooks.run("after-tokenize", r);
                return Token.stringify(o.util.encode(r.tokens), r.language);
            },
            tokenize: function(e, t) {
                const t_rest = t.rest;
                if (t_rest) {
                    for(const r in t_rest){
                        t[r] = t_rest[r];
                    }
                    delete t.rest;
                }
                const c = new l;
                u(c, c.head, e);
                (function e(t, n, r, l, c, f) {
                    for(const d in r){
                        if (r.hasOwnProperty(d) && r[d]) {
                            let p = r[d];
                            p = Array.isArray(p) ? p : [
                                p
                            ];
                            for(let h = 0; h < p.length; ++h){
                                if (f && f.cause == `${d},${h}`) {
                                    return;
                                }
                                const v = p[h];
                                const g = v.inside;
                                const y = !!v.lookbehind;
                                const m = !!v.greedy;
                                const b = v.alias;
                                if (m && !v.pattern.global) {
                                    const x = v.pattern.toString().match(/[imsuy]*$/)[0];
                                    v.pattern = RegExp(v.pattern.source, `${x}g`);
                                }
                                const w = v.pattern || v;
                                for(let _ = l.next, C = c; _ !== n.tail && !(f && C >= f.reach); C += _.value.length, _ = _.next){
                                    let O = _.value;
                                    if (n.length > t.length) {
                                        return;
                                    }
                                    if (!(O instanceof Token)) {
                                        let E;
                                        let M = 1;
                                        if (m) {
                                            if (!(E = a(w, C, t, y)) || E.index >= t.length) {
                                                break;
                                            }
                                            var S = E.index;
                                            const A = E.index + E[0].length;
                                            let k = C;
                                            for(k += _.value.length; S >= k;){
                                                k += (_ = _.next).value.length;
                                            }
                                            C = k -= _.value.length;
                                            if (_.value instanceof Token) {
                                                continue;
                                            }
                                            for(let j = _; j !== n.tail && (k < A || typeof j.value === "string"); j = j.next){
                                                M++;
                                                k += j.value.length;
                                            }
                                            M--;
                                            O = t.slice(C, k);
                                            E.index -= C;
                                        } else if (!(E = a(w, 0, O, y))) {
                                            continue;
                                        }
                                        S = E.index;
                                        const T = E[0];
                                        const P = O.slice(0, S);
                                        const L = O.slice(S + T.length);
                                        const reach = C + O.length;
                                        if (f && reach > f.reach) {
                                            f.reach = reach;
                                        }
                                        let N = _.prev;
                                        if (P) {
                                            N = u(n, N, P);
                                            C += P.length;
                                        }
                                        s(n, N, M);
                                        _ = u(n, N, new Token(d, g ? o.tokenize(T, g) : T, b, T));
                                        if (L) {
                                            u(n, _, L);
                                        }
                                        if (M > 1) {
                                            const D = {
                                                cause: `${d},${h}`,
                                                reach
                                            };
                                            e(t, n, r, _.prev, C, D);
                                            if (f && D.reach > f.reach) {
                                                f.reach = D.reach;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                })(e, c, t, c.head, 0);
                return ((e)=>{
                    const t = [];
                    for(let n = e.head.next; n !== e.tail;){
                        t.push(n.value);
                        n = n.next;
                    }
                    return t;
                })(c);
            },
            hooks: {
                all: {},
                add: function(e, t) {
                    const all = o.hooks.all;
                    all[e] = all[e] || [];
                    all[e].push(t);
                },
                run: function(e, t) {
                    const n = o.hooks.all[e];
                    if (n && n.length) {
                        let r;
                        for(let i = 0; r = n[i++];){
                            r(t);
                        }
                    }
                }
            },
            Token
        };
        function Token(e, t, n, r) {
            this.type = e;
            this.content = t;
            this.alias = n;
            this.length = 0 | (r || "").length;
        }
        function a(e, t, n, r) {
            e.lastIndex = t;
            const o = e.exec(n);
            if (o && r && o[1]) {
                const i = o[1].length;
                o.index += i;
                o[0] = o[0].slice(i);
            }
            return o;
        }
        function l() {
            const e = {
                value: null,
                prev: null,
                next: null
            };
            const t = {
                value: null,
                prev: e,
                next: null
            };
            e.next = t;
            this.head = e;
            this.tail = t;
            this.length = 0;
        }
        function u(e, t, value) {
            const t_next = t.next;
            const o = {
                value,
                prev: t,
                next: t_next
            };
            t.next = o;
            t_next.prev = o;
            e.length++;
            return o;
        }
        function s(e, t, n) {
            for(var r = t.next, o = 0; o < n && r !== e.tail; o++){
                r = r.next;
            }
            t.next = r;
            r.prev = t;
            e.length -= o;
        }
        e.Prism = o;
        Token.stringify = function e(t, n) {
            if (typeof t === "string") {
                return t;
            }
            if (Array.isArray(t)) {
                let r = "";
                t.forEach((t)=>{
                    r += e(t, n);
                });
                return r;
            }
            const i = {
                type: t.type,
                content: e(t.content, n),
                tag: "span",
                classes: [
                    "token",
                    t.type
                ],
                attributes: {},
                language: n
            };
            const t_alias = t.alias;
            if (t_alias) {
                if (Array.isArray(t_alias)) {
                    Array.prototype.push.apply(i.classes, t_alias);
                } else {
                    i.classes.push(t_alias);
                }
            }
            o.hooks.run("wrap", i);
            let l = "";
            for(const u in i.attributes){
                l += ` ${u}="${(i.attributes[u] || "").replace(/"/g, "&quot;")}"`;
            }
            return `<${i.tag} class="${i.classes.join(" ")}"${l}>${i.content}</${i.tag}>`;
        };
        if (!e.document) {
            if (e.addEventListener) {
                if (!o.disableWorkerMessageHandler) {
                    e.addEventListener("message", function(t) {
                        const n = JSON.parse(t.data);
                        const { language, code, immediateClose } = n;
                        e.postMessage(o.highlight(code, o.languages[language], language));
                        if (immediateClose) {
                            e.close();
                        }
                    }, false);
                }
                return o;
            }
            return o;
        }
        const c = o.util.currentScript();
        function f() {
            if (!o.manual) {
                o.highlightAll();
            }
        }
        if (c) {
            o.filename = c.src;
            if (c.hasAttribute("data-manual")) {
                o.manual = true;
            }
        }
        if (!o.manual) {
            const d = document.readyState;
            if (d === "loading" || d === "interactive" && c && c.defer) {
                document.addEventListener("DOMContentLoaded", f);
            } else if (window.requestAnimationFrame) {
                window.requestAnimationFrame(f);
            } else {
                window.setTimeout(f, 16);
            }
        }
        return o;
    })(typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {});
    if (module.exports) {
        module.exports = n;
    }
    if (t !== undefined) {
        t.Prism = n;
    }
    n.languages.markup = {
        comment: {
            pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
            greedy: true
        },
        prolog: {
            pattern: /<\?[\s\S]+?\?>/,
            greedy: true
        },
        doctype: {
            pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: true,
            inside: {
                "internal-subset": {
                    pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                    lookbehind: true,
                    greedy: true,
                    inside: null
                },
                string: {
                    pattern: /"[^"]*"|'[^']*'/,
                    greedy: true
                },
                punctuation: /^<!|>$|[[\]]/,
                "doctype-tag": /^DOCTYPE/i,
                name: /[^\s<>'"]+/
            }
        },
        cdata: {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            greedy: true
        },
        tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: true,
            inside: {
                tag: {
                    pattern: /^<\/?[^\s>\/]+/,
                    inside: {
                        punctuation: /^<\/?/,
                        namespace: /^[^\s>\/:]+:/
                    }
                },
                "special-attr": [],
                "attr-value": {
                    pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                    inside: {
                        punctuation: [
                            {
                                pattern: /^=/,
                                alias: "attr-equals"
                            },
                            /"|'/
                        ]
                    }
                },
                punctuation: /\/?>/,
                "attr-name": {
                    pattern: /[^\s>\/]+/,
                    inside: {
                        namespace: /^[^\s>\/:]+:/
                    }
                }
            }
        },
        entity: [
            {
                pattern: /&[\da-z]{1,8};/i,
                alias: "named-entity"
            },
            /&#x?[\da-f]{1,8};/i
        ]
    };
    n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity;
    n.languages.markup.doctype.inside["internal-subset"].inside = n.languages.markup;
    n.hooks.add("wrap", function(e) {
        if (e.type === "entity") {
            e.attributes.title = e.content.replace(/&amp;/, "&");
        }
    });
    Object.defineProperty(n.languages.markup.tag, "addInlined", {
        value: function(e, t) {
            const r = {};
            r[`language-${t}`] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: true,
                inside: n.languages[t]
            };
            r.cdata = /^<!\[CDATA\[|\]\]>$/i;
            const o = {
                "included-cdata": {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: r
                }
            };
            o[`language-${t}`] = {
                pattern: /[\s\S]+/,
                inside: n.languages[t]
            };
            const i = {};
            i[e] = {
                pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, ()=>e), "i"),
                lookbehind: true,
                greedy: true,
                inside: o
            };
            n.languages.insertBefore("markup", "cdata", i);
        }
    });
    Object.defineProperty(n.languages.markup.tag, "addAttribute", {
        value: function(e, t) {
            n.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp(`${/(^|["'\s])/.source}(?:${e})${/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source}`, "i"),
                lookbehind: true,
                inside: {
                    "attr-name": /^[^\s=]+/,
                    "attr-value": {
                        pattern: /=[\s\S]+/,
                        inside: {
                            value: {
                                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                lookbehind: true,
                                alias: [
                                    t,
                                    `language-${t}`
                                ],
                                inside: n.languages[t]
                            },
                            punctuation: [
                                {
                                    pattern: /^=/,
                                    alias: "attr-equals"
                                },
                                /"|'/
                            ]
                        }
                    }
                }
            });
        }
    });
    n.languages.html = n.languages.markup;
    n.languages.mathml = n.languages.markup;
    n.languages.svg = n.languages.markup;
    n.languages.xml = n.languages.extend("markup", {});
    n.languages.ssml = n.languages.xml;
    n.languages.atom = n.languages.xml;
    n.languages.rss = n.languages.xml;
    ((e)=>{
        const pattern = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
                pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                inside: {
                    rule: /^@[\w-]+/,
                    "selector-function-argument": {
                        pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                        lookbehind: true,
                        alias: "selector"
                    },
                    keyword: {
                        pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                        lookbehind: true
                    }
                }
            },
            url: {
                pattern: RegExp(`\\burl\\((?:${pattern.source}|${/(?:[^\\\r\n()"']|\\[\s\S])*/.source})\\)`, "i"),
                greedy: true,
                inside: {
                    function: /^url/i,
                    punctuation: /^\(|\)$/,
                    string: {
                        pattern: RegExp(`^${pattern.source}\$`),
                        alias: "url"
                    }
                }
            },
            selector: {
                pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|${pattern.source})*(?=\\s*\\{)`),
                lookbehind: true
            },
            string: {
                pattern,
                greedy: true
            },
            property: {
                pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                lookbehind: true
            },
            important: /!important\b/i,
            function: {
                pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                lookbehind: true
            },
            punctuation: /[(){};:,]/
        };
        e.languages.css.atrule.inside.rest = e.languages.css;
        const markup = e.languages.markup;
        if (markup) {
            markup.tag.addInlined("style", "css");
            markup.tag.addAttribute("style", "css");
        }
    })(n);
    n.languages.clike = {
        comment: [
            {
                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                lookbehind: true,
                greedy: true
            },
            {
                pattern: /(^|[^\\:])\/\/.*/,
                lookbehind: true,
                greedy: true
            }
        ],
        string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: true
        },
        "class-name": {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: true,
            inside: {
                punctuation: /[.\\]/
            }
        },
        keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
        boolean: /\b(?:false|true)\b/,
        function: /\b\w+(?=\()/,
        number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        punctuation: /[{}[\];(),.:]/
    };
    n.languages.javascript = n.languages.extend("clike", {
        "class-name": [
            n.languages.clike["class-name"],
            {
                pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
                lookbehind: true
            }
        ],
        keyword: [
            {
                pattern: /((?:^|\})\s*)catch\b/,
                lookbehind: true
            },
            {
                pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                lookbehind: true
            }
        ],
        function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        number: {
            pattern: RegExp(`${/(^|[^\w$])/.source}(?:${/NaN|Infinity/.source}|${/0[bB][01]+(?:_[01]+)*n?/.source}|${/0[oO][0-7]+(?:_[0-7]+)*n?/.source}|${/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source}|${/\d+(?:_\d+)*n/.source}|${/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source})${/(?![\w$])/.source}`),
            lookbehind: true
        },
        operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    });
    n.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
    n.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: true,
            greedy: true,
            inside: {
                "regex-source": {
                    pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                    lookbehind: true,
                    alias: "language-regex",
                    inside: n.languages.regex
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/
            }
        },
        "function-variable": {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function"
        },
        parameter: [
            {
                pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: true,
                inside: n.languages.javascript
            },
            {
                pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: true,
                inside: n.languages.javascript
            },
            {
                pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: true,
                inside: n.languages.javascript
            },
            {
                pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: true,
                inside: n.languages.javascript
            }
        ],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    n.languages.insertBefore("javascript", "string", {
        hashbang: {
            pattern: /^#!.*/,
            greedy: true,
            alias: "comment"
        },
        "template-string": {
            pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: true,
            inside: {
                "template-punctuation": {
                    pattern: /^`|`$/,
                    alias: "string"
                },
                interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                    lookbehind: true,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\$\{|\}$/,
                            alias: "punctuation"
                        },
                        rest: n.languages.javascript
                    }
                },
                string: /[\s\S]+/
            }
        },
        "string-property": {
            pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: true,
            greedy: true,
            alias: "property"
        }
    });
    n.languages.insertBefore("javascript", "operator", {
        "literal-property": {
            pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: true,
            alias: "property"
        }
    });
    if (n.languages.markup) {
        n.languages.markup.tag.addInlined("script", "javascript");
        n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
    }
    n.languages.js = n.languages.javascript;
    (()=>{
        if (n !== undefined && typeof document !== "undefined") {
            if (!Element.prototype.matches) {
                Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
            }
            const e = {
                js: "javascript",
                py: "python",
                rb: "ruby",
                ps1: "powershell",
                psm1: "powershell",
                sh: "bash",
                bat: "batch",
                h: "c",
                tex: "latex"
            };
            const t = 'pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])';
            n.hooks.add("before-highlightall", function(e) {
                e.selector += `, ${t}`;
            });
            n.hooks.add("before-sanity-check", function(r) {
                const r_element = r.element;
                if (r_element.matches(t)) {
                    r.code = "";
                    r_element.setAttribute("data-src-status", "loading");
                    const i = r_element.appendChild(document.createElement("CODE"));
                    i.textContent = "Loading…";
                    const a = r_element.getAttribute("data-src");
                    let l = r.language;
                    if (l === "none") {
                        const u = (/\.(\w+)$/.exec(a) || [
                            ,
                            "none"
                        ])[1];
                        l = e[u] || u;
                    }
                    n.util.setLanguage(i, l);
                    n.util.setLanguage(r_element, l);
                    const s = n.plugins.autoloader;
                    if (s) {
                        s.loadLanguages(l);
                    }
                    ((e, t, n)=>{
                        const xmlHttpRequest = new XMLHttpRequest;
                        xmlHttpRequest.open("GET", e, true);
                        xmlHttpRequest.onreadystatechange = function() {
                            if (xmlHttpRequest.readyState == 4) {
                                if (xmlHttpRequest.status < 400 && xmlHttpRequest.responseText) {
                                    t(xmlHttpRequest.responseText);
                                } else if (xmlHttpRequest.status >= 400) {
                                    n(`✖ Error ${xmlHttpRequest.status} while fetching file: ${xmlHttpRequest.statusText}`);
                                } else {
                                    n("✖ Error: File does not exist or is empty");
                                }
                            }
                        };
                        xmlHttpRequest.send(null);
                    })(a, (e)=>{
                        r_element.setAttribute("data-src-status", "loaded");
                        const t = ((e)=>{
                            const t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "");
                            if (t) {
                                const n = Number(t[1]);
                                const r = t[2];
                                const o = t[3];
                                if (r) {
                                    if (o) {
                                        return [
                                            n,
                                            Number(o)
                                        ];
                                    }
                                    return [
                                        n,
                                        undefined
                                    ];
                                }
                                return [
                                    n,
                                    n
                                ];
                            }
                        })(r_element.getAttribute("data-range"));
                        if (t) {
                            const r = e.split(/\r\n?|\n/g);
                            let a = t[0];
                            let l = t[1] ?? r.length;
                            if (a < 0) {
                                a += r.length;
                            }
                            a = Math.max(0, Math.min(a - 1, r.length));
                            if (l < 0) {
                                l += r.length;
                            }
                            l = Math.max(0, Math.min(l, r.length));
                            e = r.slice(a, l).join("\n");
                            if (!r_element.hasAttribute("data-start")) {
                                r_element.setAttribute("data-start", String(a + 1));
                            }
                        }
                        i.textContent = e;
                        n.highlightElement(i);
                    }, (e)=>{
                        r_element.setAttribute("data-src-status", "failed");
                        i.textContent = e;
                    });
                }
            });
            n.plugins.fileHighlight = {
                highlight: function(e) {
                    let r;
                    for(let o = (e || document).querySelectorAll(t), i = 0; r = o[i++];){
                        n.highlightElement(r);
                    }
                }
            };
            let r = false;
            n.fileHighlight = function() {
                if (!r) {
                    console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
                    r = true;
                }
                n.plugins.fileHighlight.highlight.apply(this, arguments);
            };
        }
    })();
})(require("./module-69.js").default);
