let r = {};
let o = null;
export { o as c };
function i(e, t, n) {
    e = a(e, t, n);
    return function(t) {
        const t_relatedTarget = t.relatedTarget;
        if (!(t_relatedTarget && (t_relatedTarget === this || 8 & t_relatedTarget.compareDocumentPosition(this)))) {
            e.call(this, t);
        }
    };
}
function a(e, t, n) {
    return function(r) {
        const i = o;
        o = r;
        try {
            e.call(this, this.__data__, t, n);
        } finally{
            o = i;
        }
    };
}
function l(e) {
    return e.trim().split(/^|\s+/).map((e)=>{
        let t = "";
        const n = e.indexOf(".");
        if (n >= 0) {
            t = e.slice(n + 1);
            e = e.slice(0, n);
        }
        return {
            type: e,
            name: t
        };
    });
}
function u(e) {
    return function() {
        const __on = this.__on;
        if (__on) {
            let n;
            for(var r = 0, o = -1, i = __on.length; r < i; ++r){
                n = __on[r];
                if (e.type && n.type !== e.type || n.name !== e.name) {
                    __on[++o] = n;
                } else {
                    this.removeEventListener(n.type, n.listener, n.capture);
                }
            }
            if (++o) {
                __on.length = o;
            } else {
                delete this.__on;
            }
        }
    };
}
function s(e, t, capture) {
    const o = r.hasOwnProperty(e.type) ? i : a;
    return function(r, i, a) {
        let l;
        const __on = this.__on;
        const listener = o(t, i, a);
        if (__on) {
            for(let c = 0, f = __on.length; c < f; ++c){
                if ((l = __on[c]).type === e.type && l.name === e.name) {
                    this.removeEventListener(l.type, l.listener, l.capture);
                    this.addEventListener(l.type, l.listener = listener, l.capture = capture);
                    return void (l.value = t);
                }
            }
        }
        this.addEventListener(e.type, listener, capture);
        l = {
            type: e.type,
            name: e.name,
            value: t,
            listener,
            capture
        };
        if (__on) {
            __on.push(l);
        } else {
            this.__on = [
                l
            ];
        }
    };
}
function c(e, t, n, r) {
    const i = o;
    e.sourceEvent = o;
    o = e;
    try {
        return t.apply(n, r);
    } finally{
        o = i;
    }
}
export { c as a };
if (typeof document !== "undefined") {
    if (!("onmouseenter" in document.documentElement)) {
        r = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
    }
}
export const b = function(e, t, n) {
    let r;
    let o;
    const i = l(`${e}`);
    const i_length = i.length;
    if (!(arguments.length < 2)) {
        __on = t ? s : u;
        if (n == null) {
            n = false;
        }
        for(r = 0; r < i_length; ++r){
            this.each(__on(i[r], t, n));
        }
        return this;
    }
    var __on = this.node().__on;
    if (__on) {
        let f;
        for(let d = 0, p = __on.length; d < p; ++d){
            r = 0;
            for(f = __on[d]; r < i_length; ++r){
                if ((o = i[r]).type === f.type && o.name === f.name) {
                    return f.value;
                }
            }
        }
    }
};
