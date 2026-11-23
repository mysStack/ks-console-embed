import { a as a_1 } from "./module-1243.js";
import { a as a_2 } from "./module-1438.js";
import { a as a_3 } from "./module-1437.js";
import { a as a_4 } from "./module-1241.js";
import { a as a_5 } from "./module-1439.js";
import { a as a_6 } from "./module-1140.js";
import { b as b_1 } from "./module-1141.js";
import { a as a_7 } from "./module-1244.js";
const a = function(e) {
    return new Array(e.length);
};
function l(e, t) {
    this.ownerDocument = e.ownerDocument;
    this.namespaceURI = e.namespaceURI;
    this._next = null;
    this._parent = e;
    this.__data__ = t;
}
function u(e, t, n, r, o, i) {
    let a;
    for(var u = 0, s = t.length, c = i.length; u < c; ++u){
        if (a = t[u]) {
            a.__data__ = i[u];
            r[u] = a;
        } else {
            n[u] = new l(e, i[u]);
        }
    }
    for(; u < s; ++u){
        if (a = t[u]) {
            o[u] = a;
        }
    }
}
function s(e, t, n, r, o, i, a) {
    let u;
    let s;
    let c;
    const f = {};
    const t_length = t.length;
    const i_length = i.length;
    const h = new Array(t_length);
    for(u = 0; u < t_length; ++u){
        if (s = t[u]) {
            h[u] = c = `\$${a.call(s, s.__data__, u, t)}`;
            if (c in f) {
                o[u] = s;
            } else {
                f[c] = s;
            }
        }
    }
    for(u = 0; u < i_length; ++u){
        if (s = f[c = `\$${a.call(e, i[u], u, i)}`]) {
            r[u] = s;
            s.__data__ = i[u];
            f[c] = null;
        } else {
            n[u] = new l(e, i[u]);
        }
    }
    for(u = 0; u < t_length; ++u){
        if ((s = t[u]) && f[h[u]] === s) {
            o[u] = s;
        }
    }
}
function c(e, t) {
    if (e < t) {
        return -1;
    }
    if (e > t) {
        return 1;
    }
    if (e >= t) {
        return 0;
    }
    return NaN;
}
l.prototype = {
    constructor: l,
    appendChild: function(e) {
        return this._parent.insertBefore(e, this._next);
    },
    insertBefore: function(e, t) {
        return this._parent.insertBefore(e, t);
    },
    querySelector: function(e) {
        return this._parent.querySelector(e);
    },
    querySelectorAll: function(e) {
        return this._parent.querySelectorAll(e);
    }
};
function d(e) {
    return function() {
        this.removeAttribute(e);
    };
}
function p(e) {
    return function() {
        this.removeAttributeNS(e.space, e.local);
    };
}
function h(e, t) {
    return function() {
        this.setAttribute(e, t);
    };
}
function v(e, t) {
    return function() {
        this.setAttributeNS(e.space, e.local, t);
    };
}
function g(e, t) {
    return function() {
        const n = t.apply(this, arguments);
        if (n == null) {
            this.removeAttribute(e);
        } else {
            this.setAttribute(e, n);
        }
    };
}
function y(e, t) {
    return function() {
        const n = t.apply(this, arguments);
        if (n == null) {
            this.removeAttributeNS(e.space, e.local);
        } else {
            this.setAttributeNS(e.space, e.local, n);
        }
    };
}
function b(e) {
    return function() {
        delete this[e];
    };
}
function x(e, t) {
    return function() {
        this[e] = t;
    };
}
function w(e, t) {
    return function() {
        const n = t.apply(this, arguments);
        if (n == null) {
            delete this[e];
        } else {
            this[e] = n;
        }
    };
}
function _(e) {
    return e.trim().split(/^|\s+/);
}
function C(e) {
    return e.classList || new O(e);
}
function O(e) {
    this._node = e;
    this._names = _(e.getAttribute("class") || "");
}
function E(e, t) {
    const n = C(e);
    for(let r = -1, o = t.length; ++r < o;){
        n.add(t[r]);
    }
}
function M(e, t) {
    const n = C(e);
    for(let r = -1, o = t.length; ++r < o;){
        n.remove(t[r]);
    }
}
function S(e) {
    return function() {
        E(this, e);
    };
}
function A(e) {
    return function() {
        M(this, e);
    };
}
function k(e, t) {
    return function() {
        (t.apply(this, arguments) ? E : M)(this, e);
    };
}
function j() {
    this.textContent = "";
}
function T(e) {
    return function() {
        this.textContent = e;
    };
}
function P(e) {
    return function() {
        const t = e.apply(this, arguments);
        this.textContent = t ?? "";
    };
}
function L() {
    this.innerHTML = "";
}
function z(e) {
    return function() {
        this.innerHTML = e;
    };
}
function N(e) {
    return function() {
        const t = e.apply(this, arguments);
        this.innerHTML = t ?? "";
    };
}
function D() {
    if (this.nextSibling) {
        this.parentNode.appendChild(this);
    }
}
function I() {
    if (this.previousSibling) {
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
}
O.prototype = {
    add: function(e) {
        if (this._names.indexOf(e) < 0) {
            this._names.push(e);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function(e) {
        const t = this._names.indexOf(e);
        if (t >= 0) {
            this._names.splice(t, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function(e) {
        return this._names.indexOf(e) >= 0;
    }
};
function H() {
    return null;
}
function B() {
    const parentNode = this.parentNode;
    if (parentNode) {
        parentNode.removeChild(this);
    }
}
function F() {
    const e = this.cloneNode(false);
    const parentNode = this.parentNode;
    if (parentNode) {
        return parentNode.insertBefore(e, this.nextSibling);
    }
    return e;
}
function V() {
    const e = this.cloneNode(true);
    const parentNode = this.parentNode;
    if (parentNode) {
        return parentNode.insertBefore(e, this.nextSibling);
    }
    return e;
}
function Z(e, t, n) {
    const r = a_7(e);
    let r_CustomEvent = r.CustomEvent;
    if (typeof r_CustomEvent === "function") {
        r_CustomEvent = new r_CustomEvent(t, n);
    } else {
        r_CustomEvent = r.document.createEvent("Event");
        if (n) {
            r_CustomEvent.initEvent(t, n.bubbles, n.cancelable);
            r_CustomEvent.detail = n.detail;
        } else {
            r_CustomEvent.initEvent(t, false, false);
        }
    }
    e.dispatchEvent(r_CustomEvent);
}
function W(e, t) {
    return function() {
        return Z(this, e, t);
    };
}
function K(e, t) {
    return function() {
        return Z(this, e, t.apply(this, arguments));
    };
}
const G = [
    null
];
export { G as c };
function q(e, t) {
    this._groups = e;
    this._parents = t;
}
export { q as a };
function Y() {
    return new q([
        [
            document.documentElement
        ]
    ], G);
}
q.prototype = Y.prototype = {
    constructor: q,
    select: function(e) {
        if (typeof e !== "function") {
            e = a_1(e);
        }
        const _groups = this._groups;
        for(var n = _groups.length, o = new Array(n), i = 0; i < n; ++i){
            let a;
            let l;
            const u = _groups[i];
            for(let s = u.length, c = o[i] = new Array(s), f = 0; f < s; ++f){
                if ((a = u[f]) && (l = e.call(a, a.__data__, f, u))) {
                    if ("__data__" in a) {
                        l.__data__ = a.__data__;
                    }
                    c[f] = l;
                }
            }
        }
        return new q(o, this._parents);
    },
    selectAll: function(e) {
        if (typeof e !== "function") {
            e = a_2(e);
        }
        const _groups = this._groups;
        for(var n = _groups.length, r = [], i = [], a = 0; a < n; ++a){
            let l;
            const u = _groups[a];
            for(let s = u.length, c = 0; c < s; ++c){
                if (l = u[c]) {
                    r.push(e.call(l, l.__data__, c, u));
                    i.push(l);
                }
            }
        }
        return new q(r, i);
    },
    filter: function(e) {
        if (typeof e !== "function") {
            e = a_3(e);
        }
        const _groups = this._groups;
        for(var n = _groups.length, r = new Array(n), o = 0; o < n; ++o){
            let a;
            const l = _groups[o];
            for(let u = l.length, s = r[o] = [], c = 0; c < u; ++c){
                if ((a = l[c]) && e.call(a, a.__data__, c, l)) {
                    s.push(a);
                }
            }
        }
        return new q(r, this._parents);
    },
    data: function(e, t) {
        if (!e) {
            g = new Array(this.size());
            d = -1;
            this.each(function(e) {
                g[++d] = e;
            });
            return g;
        }
        let n;
        const r = t ? s : u;
        const _parents = this._parents;
        const _groups = this._groups;
        if (typeof e !== "function") {
            n = e;
            e = function() {
                return n;
            };
        }
        for(var a = _groups.length, l = new Array(a), c = new Array(a), f = new Array(a), d = 0; d < a; ++d){
            const p = _parents[d];
            const h = _groups[d];
            const v = h.length;
            var g = e.call(p, p && p.__data__, d, _parents);
            const y = g.length;
            const m = c[d] = new Array(y);
            const b = l[d] = new Array(y);
            r(p, h, m, b, f[d] = new Array(v), g, t);
            let x;
            let w;
            for(let _ = 0, C = 0; _ < y; ++_){
                if (x = m[_]) {
                    for(_ >= C && (C = _ + 1); !(w = b[C]) && ++C < y;);
                    x._next = w || null;
                }
            }
        }
        l = new q(l, _parents);
        l._enter = c;
        l._exit = f;
        return l;
    },
    enter: function() {
        return new q(this._enter || this._groups.map(a), this._parents);
    },
    exit: function() {
        return new q(this._exit || this._groups.map(a), this._parents);
    },
    join: function(e, t, n) {
        let r = this.enter();
        let o = this;
        const i = this.exit();
        r = typeof e === "function" ? e(r) : r.append(`${e}`);
        if (t != null) {
            o = t(o);
        }
        if (n == null) {
            i.remove();
        } else {
            n(i);
        }
        if (r && o) {
            return r.merge(o).order();
        }
        return o;
    },
    merge: function(e) {
        const _groups = this._groups;
        const e__groups = e._groups;
        const t_length = _groups.length;
        const n_length = e__groups.length;
        for(var i = Math.min(t_length, n_length), a = new Array(t_length), l = 0; l < i; ++l){
            let u;
            const s = _groups[l];
            const c = e__groups[l];
            for(let f = s.length, d = a[l] = new Array(f), p = 0; p < f; ++p){
                if (u = s[p] || c[p]) {
                    d[p] = u;
                }
            }
        }
        for(; l < t_length; ++l){
            a[l] = _groups[l];
        }
        return new q(a, this._parents);
    },
    order: function() {
        const _groups = this._groups;
        for(let t = -1, n = _groups.length; ++t < n;){
            let r;
            const o = _groups[t];
            for(let i = o.length - 1, a = o[i]; --i >= 0;){
                if (r = o[i]) {
                    if (a && 4 ^ r.compareDocumentPosition(a)) {
                        a.parentNode.insertBefore(r, a);
                    }
                    a = r;
                }
            }
        }
        return this;
    },
    sort: function(e) {
        function t(t, n) {
            if (t && n) {
                return e(t.__data__, n.__data__);
            }
            return !t - !n;
        }
        if (!e) {
            e = c;
        }
        const _groups = this._groups;
        for(var r = _groups.length, o = new Array(r), i = 0; i < r; ++i){
            let a;
            const l = _groups[i];
            for(var u = l.length, s = o[i] = new Array(u), f = 0; f < u; ++f){
                if (a = l[f]) {
                    s[f] = a;
                }
            }
            s.sort(t);
        }
        return new q(o, this._parents).order();
    },
    call: function() {
        const e = arguments[0];
        arguments[0] = this;
        e.apply(null, arguments);
        return this;
    },
    nodes: function() {
        const e = new Array(this.size());
        let t = -1;
        this.each(function() {
            e[++t] = this;
        });
        return e;
    },
    node: function() {
        const _groups = this._groups;
        for(let t = 0, n = _groups.length; t < n; ++t){
            const _group = _groups[t];
            for(let o = 0, i = _group.length; o < i; ++o){
                const a = _group[o];
                if (a) {
                    return a;
                }
            }
        }
        return null;
    },
    size: function() {
        let e = 0;
        this.each(function() {
            ++e;
        });
        return e;
    },
    empty: function() {
        return !this.node();
    },
    each: function(e) {
        const _groups = this._groups;
        for(let n = 0, r = _groups.length; n < r; ++n){
            let o;
            const _group = _groups[n];
            for(let a = 0, l = _group.length; a < l; ++a){
                if (o = _group[a]) {
                    e.call(o, o.__data__, a, _group);
                }
            }
        }
        return this;
    },
    attr: function(e, t) {
        const n = a_4(e);
        if (arguments.length < 2) {
            const r = this.node();
            if (n.local) {
                return r.getAttributeNS(n.space, n.local);
            }
            return r.getAttribute(n);
        }
        return this.each((t == null ? n.local ? p : d : typeof t === "function" ? n.local ? y : g : n.local ? v : h)(n, t));
    },
    style: a_5,
    property: function(e, t) {
        if (arguments.length > 1) {
            return this.each((t == null ? b : typeof t === "function" ? w : x)(e, t));
        }
        return this.node()[e];
    },
    classed: function(e, t) {
        const n = _(`${e}`);
        if (arguments.length < 2) {
            const r = C(this.node());
            for(let o = -1, i = n.length; ++o < i;){
                if (!r.contains(n[o])) {
                    return false;
                }
            }
            return true;
        }
        return this.each((typeof t === "function" ? k : t ? S : A)(n, t));
    },
    text: function(e) {
        if (arguments.length) {
            return this.each(e == null ? j : (typeof e === "function" ? P : T)(e));
        }
        return this.node().textContent;
    },
    html: function(e) {
        if (arguments.length) {
            return this.each(e == null ? L : (typeof e === "function" ? N : z)(e));
        }
        return this.node().innerHTML;
    },
    raise: function() {
        return this.each(D);
    },
    lower: function() {
        return this.each(I);
    },
    append: function(e) {
        const t = typeof e === "function" ? e : a_6(e);
        return this.select(function() {
            return this.appendChild(t.apply(this, arguments));
        });
    },
    insert: function(e, t) {
        const n = typeof e === "function" ? e : a_6(e);
        const o = t == null ? H : typeof t === "function" ? t : a_1(t);
        return this.select(function() {
            return this.insertBefore(n.apply(this, arguments), o.apply(this, arguments) || null);
        });
    },
    remove: function() {
        return this.each(B);
    },
    clone: function(e) {
        return this.select(e ? V : F);
    },
    datum: function(e) {
        if (arguments.length) {
            return this.property("__data__", e);
        }
        return this.node().__data__;
    },
    on: b_1,
    dispatch: function(e, t) {
        return this.each((typeof t === "function" ? K : W)(e, t));
    }
};
export { Y as b };
