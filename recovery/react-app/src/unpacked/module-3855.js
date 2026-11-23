const _webpackExports = {};
((_webpackExports_1)=>{
    const t = /\S/;
    const n = /\"/g;
    const r = /\n/g;
    const o = /\r/g;
    const i = /\\/g;
    const a = /\u2028/;
    const l = /\u2029/;
    function u(e) {
        if (e.n.substr(e.n.length - 1) === "}") {
            e.n = e.n.substring(0, e.n.length - 1);
        }
    }
    function s(e) {
        if (e.trim) {
            return e.trim();
        }
        return e.replace(/^\s*|\s*$/g, "");
    }
    function c(e, t, n) {
        if (t.charAt(n) != e.charAt(0)) {
            return false;
        }
        for(let r = 1, o = e.length; r < o; r++){
            if (t.charAt(n + r) != e.charAt(r)) {
                return false;
            }
        }
        return true;
    }
    _webpackExports_1.tags = {
        "#": 1,
        "^": 2,
        "<": 3,
        $: 4,
        "/": 5,
        "!": 6,
        ">": 7,
        "=": 8,
        _v: 9,
        "{": 10,
        "&": 11,
        _t: 12
    };
    _webpackExports_1.scan = function(n, r) {
        const n_length = n.length;
        let i = 0;
        let tag = null;
        let l = null;
        let f = "";
        const d = [];
        let p = false;
        let h = 0;
        let v = 0;
        let otag = "{{";
        let ctag = "}}";
        function m() {
            if (f.length > 0) {
                d.push({
                    tag: "_t",
                    text: new String(f)
                });
                f = "";
            }
        }
        function b(n, r) {
            m();
            if (n && (()=>{
                let n = true;
                for(let r = v; r < d.length; r++){
                    if (!(n = _webpackExports_1.tags[d[r].tag] < _webpackExports_1.tags._v || d[r].tag == "_t" && d[r].text.match(t) === null)) {
                        return false;
                    }
                }
                return n;
            })()) {
                let o;
                for(let i = v; i < d.length; i++){
                    if (d[i].text) {
                        if ((o = d[i + 1]) && o.tag == ">") {
                            o.indent = d[i].text.toString();
                        }
                        d.splice(i, 1);
                    }
                }
            } else {
                if (!r) {
                    d.push({
                        tag: "\n"
                    });
                }
            }
            p = false;
            v = d.length;
        }
        function x(e, t) {
            const n = `=${ctag}`;
            const r = e.indexOf(n, t);
            const o = s(e.substring(e.indexOf("=", t) + 1, r)).split(" ");
            otag = o[0];
            ctag = o[o.length - 1];
            return r + n.length - 1;
        }
        if (r) {
            r = r.split(" ");
            otag = r[0];
            ctag = r[1];
        }
        for(h = 0; h < n_length; h++){
            if (i == 0) {
                if (c(otag, n, h)) {
                    --h;
                    m();
                    i = 1;
                } else if (n.charAt(h) == "\n") {
                    b(p);
                } else {
                    f += n.charAt(h);
                }
            } else if (i == 1) {
                h += otag.length - 1;
                if ((tag = (l = _webpackExports_1.tags[n.charAt(h + 1)]) ? n.charAt(h + 1) : "_v") == "=") {
                    h = x(n, h);
                    i = 0;
                } else {
                    if (l) {
                        h++;
                    }
                    i = 2;
                }
                p = h;
            } else if (c(ctag, n, h)) {
                d.push({
                    tag,
                    n: s(f),
                    otag,
                    ctag,
                    i: tag == "/" ? p - otag.length : h + ctag.length
                });
                f = "";
                h += ctag.length - 1;
                i = 0;
                if (tag == "{") {
                    if (ctag == "}}") {
                        h++;
                    } else {
                        u(d[d.length - 1]);
                    }
                }
            } else {
                f += n.charAt(h);
            }
        }
        b(p, true);
        return d;
    };
    const f = {
        _t: true,
        "\n": true,
        $: true,
        "/": true
    };
    function d(e, t) {
        for(let n = 0, r = t.length; n < r; n++){
            if (t[n].o == e.n) {
                e.tag = "#";
                return true;
            }
        }
    }
    function p(e, t, n) {
        for(let r = 0, o = n.length; r < o; r++){
            if (n[r].c == e && n[r].o == t) {
                return true;
            }
        }
    }
    function h(e) {
        const t = [];
        for(const n in e.partials){
            t.push(`"${g(n)}":{name:"${g(e.partials[n].name)}", ${h(e.partials[n])}}`);
        }
        return `partials: {${t.join(",")}}, subs: ${((e)=>{
            const t = [];
            for(const n in e){
                t.push(`"${g(n)}": function(c,p,t,i) {${e[n]}}`);
            }
            return `{ ${t.join(",")} }`;
        })(e.subs)}`;
    }
    _webpackExports_1.stringify = function(t, n, r) {
        return `{code: function (c,p,i) { ${_webpackExports_1.wrapMain(t.code)} },${h(t)}}`;
    };
    let v = 0;
    function g(e) {
        return e.replace(i, "\\\\").replace(n, '\\"').replace(r, "\\n").replace(o, "\\r").replace(a, "\\u2028").replace(l, "\\u2029");
    }
    function y(e) {
        if (~e.indexOf(".")) {
            return "d";
        }
        return "f";
    }
    function m(e, t) {
        const n = `<${t.prefix || ""}${e.n}${v++}`;
        t.partials[n] = {
            name: e.n,
            partials: {}
        };
        t.code += `t.b(t.rp("${g(n)}",c,p,"${e.indent || ""}"));`;
        return n;
    }
    function b(e, t) {
        t.code += `t.b(t.t(t.${y(e.n)}("${g(e.n)}",c,p,0)));`;
    }
    function x(e) {
        return `t.b(${e});`;
    }
    _webpackExports_1.generate = function(t, n, r) {
        v = 0;
        const o = {
            code: "",
            subs: {},
            partials: {}
        };
        _webpackExports_1.walk(t, o);
        if (r.asString) {
            return this.stringify(o, n, r);
        }
        return this.makeTemplate(o, n, r);
    };
    _webpackExports_1.wrapMain = function(e) {
        return `var t=this;t.b(i=i||"");${e}return t.fl();`;
    };
    _webpackExports_1.template = _webpackExports_1.Template;
    _webpackExports_1.makeTemplate = function(e, t, n) {
        const r = this.makePartials(e);
        r.code = new Function("c", "p", "i", this.wrapMain(e.code));
        return new this.template(r, t, this, n);
    };
    _webpackExports_1.makePartials = function(e) {
        let t;
        const n = {
            subs: {},
            partials: e.partials,
            name: e.name
        };
        for(t in n.partials){
            n.partials[t] = this.makePartials(n.partials[t]);
        }
        for(t in e.subs){
            n.subs[t] = new Function("c", "p", "t", "i", e.subs[t]);
        }
        return n;
    };
    _webpackExports_1.codegen = {
        "#": function(t, n) {
            n.code += `if(t.s(t.${y(t.n)}("${g(t.n)}",c,p,1),c,p,0,${t.i},${t.end},"${t.otag} ${t.ctag}")){t.rs(c,p,function(c,p,t){`;
            _webpackExports_1.walk(t.nodes, n);
            n.code += "});c.pop();}";
        },
        "^": function(t, n) {
            n.code += `if(!t.s(t.${y(t.n)}("${g(t.n)}",c,p,1),c,p,1,0,0,"")){`;
            _webpackExports_1.walk(t.nodes, n);
            n.code += "};";
        },
        ">": m,
        "<": function(t, n) {
            const r = {
                partials: {},
                code: "",
                subs: {},
                inPartial: true
            };
            _webpackExports_1.walk(t.nodes, r);
            const o = n.partials[m(t, n)];
            o.subs = r.subs;
            o.partials = r.partials;
        },
        $: function(t, n) {
            const r = {
                subs: {},
                code: "",
                partials: n.partials,
                prefix: t.n
            };
            _webpackExports_1.walk(t.nodes, r);
            n.subs[t.n] = r.code;
            if (!n.inPartial) {
                n.code += `t.sub("${g(t.n)}",c,p,i);`;
            }
        },
        "\n": function(e, t) {
            t.code += x(`"\\n"${e.last ? "" : " + i"}`);
        },
        _v: function(e, t) {
            t.code += `t.b(t.v(t.${y(e.n)}("${g(e.n)}",c,p,0)));`;
        },
        _t: function(e, t) {
            t.code += x(`"${g(e.text)}"`);
        },
        "{": b,
        "&": b
    };
    _webpackExports_1.walk = function(t, n) {
        let r;
        for(let o = 0, i = t.length; o < i; o++){
            if (r = _webpackExports_1.codegen[t[o].tag]) {
                r(t[o], n);
            }
        }
        return n;
    };
    _webpackExports_1.parse = function(t, n, r) {
        return function t(n, r, o, i) {
            let a;
            const l = [];
            let u = null;
            let s = null;
            for(a = o[o.length - 1]; n.length > 0;){
                s = n.shift();
                if (a && a.tag == "<" && !(s.tag in f)) {
                    throw new Error("Illegal content in < super tag.");
                }
                if (_webpackExports_1.tags[s.tag] <= _webpackExports_1.tags.$ || d(s, i)) {
                    o.push(s);
                    s.nodes = t(n, s.tag, o, i);
                } else {
                    if (s.tag == "/") {
                        if (o.length === 0) {
                            throw new Error(`Closing tag without opener: /${s.n}`);
                        }
                        u = o.pop();
                        if (s.n != u.n && !p(s.n, u.n, i)) {
                            throw new Error(`Nesting error: ${u.n} vs. ${s.n}`);
                        }
                        u.end = s.i;
                        return l;
                    }
                    if (s.tag == "\n") {
                        s.last = n.length == 0 || n[0].tag == "\n";
                    }
                }
                l.push(s);
            }
            if (o.length > 0) {
                throw new Error(`missing closing tag: ${o.pop().n}`);
            }
            return l;
        }(t, 0, [], (r = r || {}).sectionTags || []);
    };
    _webpackExports_1.cache = {};
    _webpackExports_1.cacheKey = function(e, t) {
        return [
            e,
            !!t.asString,
            !!t.disableLambda,
            t.delimiters,
            !!t.modelGet
        ].join("||");
    };
    _webpackExports_1.compile = function(t, n) {
        n = n || {};
        const r = _webpackExports_1.cacheKey(t, n);
        let o = this.cache[r];
        if (o) {
            const i = o.partials;
            for(const a in i){
                delete i[a].instance;
            }
            return o;
        }
        o = this.generate(this.parse(this.scan(t, n.delimiters), t, n), t, n);
        return this.cache[r] = o;
    };
})(_webpackExports);
export default _webpackExports;
