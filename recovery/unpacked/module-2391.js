"use strict";
function r(e) {
    const t = Array.prototype.slice.call(arguments, 1);
    t.forEach((t)=>{
        if (t) {
            Object.keys(t).forEach((n)=>{
                e[n] = t[n];
            });
        }
    });
    return e;
}
function o(e) {
    return Object.prototype.toString.call(e);
}
function i(e) {
    return o(e) === "[object Function]";
}
function a(e) {
    return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const l = {
    fuzzyLink: true,
    fuzzyEmail: true,
    fuzzyIP: false
};
const u = {
    "http:": {
        validate: function(e, t, n) {
            const r = e.slice(t);
            if (!n.re.http) {
                n.re.http = new RegExp(`^\\/\\/${n.re.src_auth}${n.re.src_host_port_strict}${n.re.src_path}`, "i");
            }
            if (n.re.http.test(r)) {
                return r.match(n.re.http)[0].length;
            }
            return 0;
        }
    },
    "https:": "http:",
    "ftp:": "http:",
    "//": {
        validate: function(e, t, n) {
            const r = e.slice(t);
            if (!n.re.no_http) {
                n.re.no_http = new RegExp(`^${n.re.src_auth}(?:localhost|(?:(?:${n.re.src_domain})\\.)+${n.re.src_domain_root})${n.re.src_port}${n.re.src_host_terminator}${n.re.src_path}`, "i");
            }
            if (n.re.no_http.test(r)) {
                if (t >= 3 && e[t - 3] === ":" || t >= 3 && e[t - 3] === "/") {
                    return 0;
                }
                return r.match(n.re.no_http)[0].length;
            }
            return 0;
        }
    },
    "mailto:": {
        validate: function(e, t, n) {
            const r = e.slice(t);
            if (!n.re.mailto) {
                n.re.mailto = new RegExp(`^${n.re.src_email_name}@${n.re.src_host_strict}`, "i");
            }
            if (n.re.mailto.test(r)) {
                return r.match(n.re.mailto)[0].length;
            }
            return 0;
        }
    }
};
const s = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function c(e) {
    const t = e.re = require("./module-2392.js")(e.__opts__);
    const r = e.__tlds__.slice();
    function l(e) {
        return e.replace("%TLDS%", t.src_tlds);
    }
    e.onCompile();
    if (!e.__tlds_replaced__) {
        r.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]");
    }
    r.push(t.src_xn);
    t.src_tlds = r.join("|");
    t.email_fuzzy = RegExp(l(t.tpl_email_fuzzy), "i");
    t.link_fuzzy = RegExp(l(t.tpl_link_fuzzy), "i");
    t.link_no_ip_fuzzy = RegExp(l(t.tpl_link_no_ip_fuzzy), "i");
    t.host_fuzzy_test = RegExp(l(t.tpl_host_fuzzy_test), "i");
    const u = [];
    function s(e, t) {
        throw new Error(`(LinkifyIt) Invalid schema "${e}": ${t}`);
    }
    e.__compiled__ = {};
    Object.keys(e.__schemas__).forEach((t)=>{
        const n = e.__schemas__[t];
        if (n !== null) {
            const r = {
                validate: null,
                link: null
            };
            e.__compiled__[t] = r;
            if (o(n) === "[object Object]") {
                if (((e)=>o(e) === "[object RegExp]")(n.validate)) {
                    r.validate = ((e)=>function(t, n) {
                            const r = t.slice(n);
                            if (e.test(r)) {
                                return r.match(e)[0].length;
                            }
                            return 0;
                        })(n.validate);
                } else if (i(n.validate)) {
                    r.validate = n.validate;
                } else {
                    s(t, n);
                }
                return void (i(n.normalize) ? r.normalize = n.normalize : n.normalize ? s(t, n) : r.normalize = function(e, t) {
                    t.normalize(e);
                });
            }
            if (!((e)=>o(e) === "[object String]")(n)) {
                s(t, n);
            } else {
                u.push(t);
            }
        }
    });
    u.forEach((t)=>{
        if (e.__compiled__[e.__schemas__[t]]) {
            e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate;
            e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize;
        }
    });
    e.__compiled__[""] = {
        validate: null,
        normalize: function(e, t) {
            t.normalize(e);
        }
    };
    const c = Object.keys(e.__compiled__).filter((t)=>t.length > 0 && e.__compiled__[t]).map(a).join("|");
    e.re.schema_test = RegExp(`(^|(?!_)(?:[><｜]|${t.src_ZPCc}))(${c})`, "i");
    e.re.schema_search = RegExp(`(^|(?!_)(?:[><｜]|${t.src_ZPCc}))(${c})`, "ig");
    e.re.pretest = RegExp(`(${e.re.schema_test.source})|(${e.re.host_fuzzy_test.source})|@`, "i");
    ((e)=>{
        e.__index__ = -1;
        e.__text_cache__ = "";
    })(e);
}
function f(e, t) {
    const { __index__, __last_index__ } = e;
    const o = e.__text_cache__.slice(__index__, __last_index__);
    this.schema = e.__schema__.toLowerCase();
    this.index = __index__ + t;
    this.lastIndex = __last_index__ + t;
    this.raw = o;
    this.text = o;
    this.url = o;
}
function d(e, t) {
    const n = new f(e, t);
    e.__compiled__[n.schema].normalize(n, e);
    return n;
}
class p {
    constructor(e, t){
        if (!(this instanceof p)) {
            return new p(e, t);
        }
        let n;
        if (!t) {
            n = e;
            if (Object.keys(n || {}).reduce((acc, key)=>acc || l.hasOwnProperty(key), false)) {
                t = e;
                e = {};
            }
        }
        this.__opts__ = r({}, l, t);
        this.__index__ = -1;
        this.__last_index__ = -1;
        this.__schema__ = "";
        this.__text_cache__ = "";
        this.__schemas__ = r({}, u, e);
        this.__compiled__ = {};
        this.__tlds__ = s;
        this.__tlds_replaced__ = false;
        this.re = {};
        c(this);
    }
    add(e, t) {
        this.__schemas__[e] = t;
        c(this);
        return this;
    }
    set(e) {
        this.__opts__ = r(this.__opts__, e);
        return this;
    }
    test(e) {
        this.__text_cache__ = e;
        this.__index__ = -1;
        if (!e.length) {
            return false;
        }
        let t;
        let n;
        let r;
        let o;
        let i;
        let a;
        let l;
        let u;
        if (this.re.schema_test.test(e)) {
            for((l = this.re.schema_search).lastIndex = 0; (t = l.exec(e)) !== null;){
                if (o = this.testSchemaAt(e, t[2], l.lastIndex)) {
                    this.__schema__ = t[2];
                    this.__index__ = t.index + t[1].length;
                    this.__last_index__ = t.index + t[0].length + o;
                    break;
                }
            }
        }
        if (this.__opts__.fuzzyLink && this.__compiled__["http:"] && (u = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || u < this.__index__) && (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
            i = n.index + n[1].length;
            if (this.__index__ < 0 || i < this.__index__) {
                this.__schema__ = "";
                this.__index__ = i;
                this.__last_index__ = n.index + n[0].length;
            }
        }
        if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && (r = e.match(this.re.email_fuzzy)) !== null) {
            i = r.index + r[1].length;
            a = r.index + r[0].length;
            if (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && a > this.__last_index__) {
                this.__schema__ = "mailto:";
                this.__index__ = i;
                this.__last_index__ = a;
            }
        }
        return this.__index__ >= 0;
    }
    pretest(e) {
        return this.re.pretest.test(e);
    }
    testSchemaAt(e, t, n) {
        if (this.__compiled__[t.toLowerCase()]) {
            return this.__compiled__[t.toLowerCase()].validate(e, n, this);
        }
        return 0;
    }
    match(e) {
        let t = 0;
        const n = [];
        if (this.__index__ >= 0 && this.__text_cache__ === e) {
            n.push(d(this, t));
            t = this.__last_index__;
        }
        for(let r = t ? e.slice(t) : e; this.test(r);){
            n.push(d(this, t));
            r = r.slice(this.__last_index__);
            t += this.__last_index__;
        }
        if (n.length) {
            return n;
        }
        return null;
    }
    tlds(e, t) {
        e = Array.isArray(e) ? e : [
            e
        ];
        if (t) {
            this.__tlds__ = this.__tlds__.concat(e).sort().filter((e, t, n)=>e !== n[t - 1]).reverse();
            c(this);
            return this;
        }
        this.__tlds__ = e.slice();
        this.__tlds_replaced__ = true;
        c(this);
        return this;
    }
    normalize(e) {
        if (!e.schema) {
            e.url = `http://${e.url}`;
        }
        if (!(e.schema !== "mailto:" || /^mailto:/i.test(e.url))) {
            e.url = `mailto:${e.url}`;
        }
    }
    onCompile() {}
}
module.exports = p;
