const _webpackExports = {};
((_webpackExports_1)=>{
    function t(e, t, modelGet) {
        let r;
        if (t && typeof t === "object") {
            if (t[e] !== undefined) {
                r = t[e];
            } else if (modelGet && t.get && typeof t.get === "function") {
                r = t.get(e);
            }
        }
        return r;
    }
    _webpackExports_1.Template = function(e, t, n, r) {
        e = e || {};
        this.r = e.code || this.r;
        this.c = n;
        this.options = r || {};
        this.text = t || "";
        this.partials = e.partials || {};
        this.subs = e.subs || {};
        this.buf = "";
    };
    _webpackExports_1.Template.prototype = {
        r: function(e, t, n) {
            return "";
        },
        v: function(e) {
            e = t_1(e);
            if (l.test(e)) {
                return e.replace(n, "&amp;").replace(r, "&lt;").replace(o, "&gt;").replace(i, "&#39;").replace(a, "&quot;");
            }
            return e;
        },
        t: t_1,
        render: function(e, t, n) {
            return this.ri([
                e
            ], t || {}, n);
        },
        ri: function(e, t, n) {
            return this.r(e, t, n);
        },
        ep: function(e, t) {
            const n = this.partials[e];
            let r = t[n.name];
            if (n.instance && n.base == r) {
                return n.instance;
            }
            if (typeof r === "string") {
                if (!this.c) {
                    throw new Error("No compiler available.");
                }
                r = this.c.compile(r, this.options);
            }
            if (!r) {
                return null;
            }
            this.partials[e].base = r;
            if (n.subs) {
                if (!t.stackText) {
                    t.stackText = {};
                }
                for(key in n.subs){
                    if (!t.stackText[key]) {
                        t.stackText[key] = this.activeSub !== undefined && t.stackText[this.activeSub] ? t.stackText[this.activeSub] : this.text;
                    }
                }
                r = ((e, t, n, r, o, i)=>{
                    function a() {}
                    function l() {}
                    let u;
                    a.prototype = e;
                    l.prototype = e.subs;
                    const s = new a;
                    s.subs = new l;
                    s.subsText = {};
                    s.buf = "";
                    r = r || {};
                    s.stackSubs = r;
                    s.subsText = i;
                    for(u in t){
                        if (!r[u]) {
                            r[u] = t[u];
                        }
                    }
                    for(u in r){
                        s.subs[u] = r[u];
                    }
                    o = o || {};
                    s.stackPartials = o;
                    for(u in n){
                        if (!o[u]) {
                            o[u] = n[u];
                        }
                    }
                    for(u in o){
                        s.partials[u] = o[u];
                    }
                    return s;
                })(r, n.subs, n.partials, this.stackSubs, this.stackPartials, t.stackText);
            }
            this.partials[e].instance = r;
            return r;
        },
        rp: function(e, t, n, r) {
            const o = this.ep(e, n);
            if (o) {
                return o.ri(t, n, r);
            }
            return "";
        },
        rs: function(e, t, n) {
            const r = e[e.length - 1];
            if (s(r)) {
                for(let o = 0; o < r.length; o++){
                    e.push(r[o]);
                    n(e, t, this);
                    e.pop();
                }
            } else {
                n(e, t, this);
            }
        },
        s: function(e, t, n, r, o, i, a) {
            let l;
            return (!s(e) || e.length !== 0) && (typeof e === "function" && (e = this.ms(e, t, n, r, o, i, a)), l = !!e, !r && l && t && t.push(typeof e === "object" ? e : t[t.length - 1]), l);
        },
        d: function(e, n, r, o) {
            let i;
            const a = e.split(".");
            let l = this.f(a[0], n, r, o);
            const modelGet = this.options.modelGet;
            let c = null;
            if (e === "." && s(n[n.length - 2])) {
                l = n[n.length - 1];
            } else {
                for(let f = 1; f < a.length; f++){
                    if ((i = t(a[f], l, modelGet)) !== undefined) {
                        c = l;
                        l = i;
                    } else {
                        l = "";
                    }
                }
            }
            return !(o && !l) && (o || typeof l !== "function" || (n.push(c), l = this.mv(l, n, r), n.pop()), l);
        },
        f: function(e, n, r, o) {
            let i = false;
            let a = false;
            const modelGet = this.options.modelGet;
            for(let u = n.length - 1; u >= 0; u--){
                if ((i = t(e, n[u], modelGet)) !== undefined) {
                    a = true;
                    break;
                }
            }
            if (a) {
                if (!(o || typeof i !== "function")) {
                    i = this.mv(i, n, r);
                }
                return i;
            }
            return !o && "";
        },
        ls: function(e, t, n, r, o) {
            const delimiters = this.options.delimiters;
            this.options.delimiters = o;
            this.b(this.ct(t_1(e.call(t, r)), t, n));
            this.options.delimiters = delimiters;
            return false;
        },
        ct: function(e, t, n) {
            if (this.options.disableLambda) {
                throw new Error("Lambda features disabled.");
            }
            return this.c.compile(e, this.options).render(t, n);
        },
        b: function(e) {
            this.buf += e;
        },
        fl: function() {
            const buf = this.buf;
            this.buf = "";
            return buf;
        },
        ms: function(e, t, n, r, o, i, a) {
            let l;
            const u = t[t.length - 1];
            const s = e.call(u);
            if (typeof s === "function") {
                return !!r || (l = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(s, u, n, l.substring(o, i), a));
            }
            return s;
        },
        mv: function(e, t, n) {
            const r = t[t.length - 1];
            const o = e.call(r);
            if (typeof o === "function") {
                return this.ct(t_1(o.call(r)), r, n);
            }
            return o;
        },
        sub: function(e, t, n, r) {
            const o = this.subs[e];
            if (o) {
                this.activeSub = e;
                o(t, n, this, r);
                this.activeSub = false;
            }
        }
    };
    var n = /&/g;
    var r = /</g;
    var o = />/g;
    var i = /\'/g;
    var a = /\"/g;
    var l = /[&<>\"\']/;
    function t_1(e) {
        return String(e ?? "");
    }
    var s = Array.isArray || ((e)=>Object.prototype.toString.call(e) === "[object Array]");
})(_webpackExports);
export default _webpackExports;
