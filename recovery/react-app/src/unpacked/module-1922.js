import "unpacked/module-30.js";
import module8 from "unpacked/module-8.js";
import module25 from "unpacked/module-25.js";
import module500 from "unpacked/module-500.js";
import module39 from "unpacked/module-39.js";
import module21 from "unpacked/module-21.js";
import module33 from "unpacked/module-33.js";
import module1921 from "unpacked/module-1921.js";
import module67 from "unpacked/module-67.js";
import module113 from "unpacked/module-113.js";
import module493 from "unpacked/module-493.js";
import module123 from "unpacked/module-123.js";
import module503 from "unpacked/module-503.js";
import module101 from "unpacked/module-101.js";
import module254 from "unpacked/module-254.js";
import module35 from "unpacked/module-35.js";
import module53 from "unpacked/module-53.js";
import module142 from "unpacked/module-142.js";
import module202 from "unpacked/module-202.js";
import module50 from "unpacked/module-50.js";
import module54 from "unpacked/module-54.js";
import module46 from "unpacked/module-46.js";
import module114 from "unpacked/module-114.js";
import module143 from "unpacked/module-143.js";
import module339 from "unpacked/module-339.js";
import module262 from "unpacked/module-262.js";
import module272 from "unpacked/module-272.js";
import module328 from "unpacked/module-328.js";
import module40 from "unpacked/module-40.js";
import module488 from "unpacked/module-488.js";
const P = module40("iterator");
const module101_set = module101.set;
const getState = module101.getterFor("URLSearchParams");
const N = module101.getterFor("URLSearchParamsIterator");
const D = module500("fetch");
const I = module500("Request");
const R = module500("Headers");
const H = I && I.prototype;
const B = R && R.prototype;
const { RegExp, TypeError, decodeURIComponent, encodeURIComponent } = module25;
const Z = module21("".charAt);
const W = module21([].join);
const K = module21([].push);
const G = module21("".replace);
const q = module21([].shift);
const Y = module21([].splice);
const X = module21("".split);
const J = module21("".slice);
const Q = /\+/g;
const ee = Array(4);
const te = (e)=>ee[e - 1] || (ee[e - 1] = RegExp(`((?:%[\\da-f]{2}){${e}})`, "gi"));
const ne = function(e) {
    try {
        return decodeURIComponent(e);
    } catch (t) {
        return e;
    }
};
const re = (e)=>{
    let t = G(e, Q, " ");
    let n = 4;
    try {
        return decodeURIComponent(t);
    } catch (e) {
        while(n){
            t = G(t, te(n--), ne);
        }
        return t;
    }
};
const oe = /[!'()~]|%20/g;
const ie = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
};
const ae = function(e) {
    return ie[e];
};
const le = (e)=>G(encodeURIComponent(e), oe, ae);
const ue = module503(function(e, kind) {
    module101_set(this, {
        type: "URLSearchParamsIterator",
        target: getState(e).entries,
        index: 0,
        kind
    });
}, "URLSearchParams", function() {
    const e = N(this);
    const e_target = e.target;
    const n = e.index++;
    if (!e_target || n >= e_target.length) {
        e.target = undefined;
        return module272(undefined, true);
    }
    const r = e_target[n];
    switch(e.kind){
        case "keys":
            return module272(r.key, false);
        case "values":
            return module272(r.value, false);
    }
    return module272([
        r.key,
        r.value
    ], false);
}, true);
const se = function(e) {
    this.entries = [];
    this.url = null;
    if (e !== undefined) {
        if (module54(e)) {
            this.parseObject(e);
        } else {
            this.parseQuery(typeof e === "string" ? Z(e, 0) === "?" ? J(e, 1) : e : module46(e));
        }
    }
};
se.prototype = {
    type: "URLSearchParams",
    bindURL: function(e) {
        this.url = e;
        this.update();
    },
    parseObject: function(e) {
        let t;
        let n;
        let r;
        let o;
        let i;
        let l;
        let u;
        const entries = this.entries;
        const c = module262(e);
        if (c) {
            for(n = (t = module339(e, c)).next; !(r = module39(n, t)).done;){
                i = (o = module339(module50(r.value))).next;
                if ((l = module39(i, o)).done || (u = module39(i, o)).done || !module39(i, o).done) {
                    throw new TypeError("Expected sequence with length 2");
                }
                K(entries, {
                    key: module46(l.value),
                    value: module46(u.value)
                });
            }
        } else {
            for(const f in e){
                if (module53(e, f)) {
                    K(entries, {
                        key: f,
                        value: module46(e[f])
                    });
                }
            }
        }
    },
    parseQuery: function(e) {
        if (e) {
            let t;
            let n;
            const r = this.entries;
            for(let o = X(e, "&"), i = 0; i < o.length;){
                if ((t = o[i++]).length) {
                    n = X(t, "=");
                    K(r, {
                        key: re(q(n)),
                        value: re(W(n, "="))
                    });
                }
            }
        }
    },
    serialize: function() {
        let e;
        for(var t = this.entries, n = [], r = 0; r < t.length;){
            e = t[r++];
            K(n, `${le(e.key)}=${le(e.value)}`);
        }
        return W(n, "&");
    },
    update: function() {
        this.entries.length = 0;
        this.parseQuery(this.url.query);
    },
    updateURL: function() {
        if (this.url) {
            this.url.update();
        }
    }
};
const URLSearchParams = function(e) {
    module254(this, ce_prototype);
    const t = module101_set(this, new se(e));
    if (!module33) {
        this.size = t.entries.length;
    }
};
var ce_prototype = URLSearchParams.prototype;
module493(ce_prototype, {
    append: function(e, t) {
        const n = getState(this);
        module328(arguments.length, 2);
        K(n.entries, {
            key: module46(e),
            value: module46(t)
        });
        if (!module33) {
            this.length++;
        }
        n.updateURL();
    },
    delete: function(e) {
        const t = getState(this);
        const n = module328(arguments.length, 1);
        for(var r = t.entries, o = module46(e), i = n < 2 ? undefined : arguments[1], a = i === undefined ? i : module46(i), l = 0; l < r.length;){
            const s = r[l];
            if (s.key !== o || a !== undefined && s.value !== a) {
                l++;
            } else {
                Y(r, l, 1);
                if (a !== undefined) {
                    break;
                }
            }
        }
        if (!module33) {
            this.size = r.length;
        }
        t.updateURL();
    },
    get: function(e) {
        const entries = getState(this).entries;
        module328(arguments.length, 1);
        const n = module46(e);
        for(let r = 0; r < entries.length; r++){
            if (entries[r].key === n) {
                return entries[r].value;
            }
        }
        return null;
    },
    getAll: function(e) {
        const entries = getState(this).entries;
        module328(arguments.length, 1);
        const n = module46(e);
        const r = [];
        for(let o = 0; o < entries.length; o++){
            if (entries[o].key === n) {
                K(r, entries[o].value);
            }
        }
        return r;
    },
    has: function(e) {
        for(let t = getState(this).entries, n = module328(arguments.length, 1), r = module46(e), o = n < 2 ? undefined : arguments[1], i = o === undefined ? o : module46(o), a = 0; a < t.length;){
            const l = t[a++];
            if (l.key === r && (i === undefined || l.value === i)) {
                return true;
            }
        }
        return false;
    },
    set: function(e, t) {
        const n = getState(this);
        module328(arguments.length, 1);
        let r;
        for(var o = n.entries, i = false, a = module46(e), l = module46(t), s = 0; s < o.length; s++){
            if ((r = o[s]).key === a) {
                if (i) {
                    Y(o, s--, 1);
                } else {
                    i = true;
                    r.value = l;
                }
            }
        }
        if (!i) {
            K(o, {
                key: a,
                value: l
            });
        }
        if (!module33) {
            this.size = o.length;
        }
        n.updateURL();
    },
    sort: function() {
        const e = getState(this);
        module488(e.entries, function(e, t) {
            if (e.key > t.key) {
                return 1;
            }
            return -1;
        });
        e.updateURL();
    },
    forEach: function(e, _param_1) {
        let t;
        for(let n = getState(this).entries, r = module142(e, _param_1), o = 0; o < n.length;){
            r((t = n[o++]).value, t.key, this);
        }
    },
    keys: function() {
        return new ue(this, "keys");
    },
    values: function() {
        return new ue(this, "values");
    },
    entries: function() {
        return new ue(this, "entries");
    }
}, {
    enumerable: true
});
module67(ce_prototype, P, ce_prototype.entries, {
    name: "entries"
});
module67(ce_prototype, "toString", function() {
    return getState(this).serialize();
}, {
    enumerable: true
});
if (module33) {
    module113(ce_prototype, "size", {
        get: function() {
            return getState(this).entries.length;
        },
        configurable: true,
        enumerable: true
    });
}
module123(URLSearchParams, "URLSearchParams");
module8({
    global: true,
    constructor: true,
    forced: !module1921
}, {
    URLSearchParams
});
if (!module1921 && module35(R)) {
    const de = module21(B.has);
    const pe = module21(B.set);
    const he = (e)=>{
        if (module54(e)) {
            let t;
            const n = e.body;
            if (module202(n) === "URLSearchParams") {
                t = e.headers ? new R(e.headers) : new R;
                if (!de(t, "content-type")) {
                    pe(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                }
                return module114(e, {
                    body: module143(0, module46(n)),
                    headers: module143(0, t)
                });
            }
        }
        return e;
    };
    if (module35(D)) {
        module8({
            global: true,
            enumerable: true,
            dontCallGetSet: true,
            forced: true
        }, {
            fetch: function(e) {
                return D(e, arguments.length > 1 ? he(arguments[1]) : {});
            }
        });
    }
    if (module35(I)) {
        const Request = function(e) {
            module254(this, H);
            return new I(e, arguments.length > 1 ? he(arguments[1]) : {});
        };
        H.constructor = Request;
        Request.prototype = H;
        module8({
            global: true,
            constructor: true,
            dontCallGetSet: true,
            forced: true
        }, {
            Request
        });
    }
}
export default {
    URLSearchParams,
    getState
};
