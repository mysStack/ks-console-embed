let r;
const o = typeof Reflect === "object" ? Reflect : null;
const i = o && typeof o.apply === "function" ? o.apply : (e, t, n)=>Function.prototype.apply.call(e, t, n);
r = o && typeof o.ownKeys === "function" ? o.ownKeys : Object.getOwnPropertySymbols ? function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : function(e) {
    return Object.getOwnPropertyNames(e);
};
const a = Number.isNaN || ((e)=>e != e);
function l() {
    l.init.call(this);
}
export default l;
export const once = l.once = function(e, t) {
    return new Promise((resolve, reject)=>{
        function o() {
            if (i !== undefined) {
                e.removeListener("error", i);
            }
            resolve(Array.prototype.slice.call(arguments));
        }
        var i;
        if (t !== "error") {
            i = function(n) {
                e.removeListener(t, o);
                reject(n);
            };
            e.once("error", i);
        }
        e.once(t, o);
    });
};
l.EventEmitter = l;
l.prototype._events = undefined;
l.prototype._eventsCount = 0;
l.prototype._maxListeners = undefined;
let u = 10;
function s(e) {
    if (typeof e !== "function") {
        throw new TypeError(`The "listener" argument must be of type Function. Received type ${typeof e}`);
    }
}
function c(e) {
    if (e._maxListeners === undefined) {
        return l.defaultMaxListeners;
    }
    return e._maxListeners;
}
function f(e, t, n, r) {
    let o;
    let i;
    let a;
    let l;
    s(n);
    if ((i = e._events) === undefined) {
        i = e._events = Object.create(null);
        e._eventsCount = 0;
    } else {
        if (i.newListener !== undefined) {
            e.emit("newListener", t, n.listener ? n.listener : n);
            i = e._events;
        }
        a = i[t];
    }
    if (a === undefined) {
        a = i[t] = n;
        ++e._eventsCount;
    } else {
        if (typeof a === "function") {
            a = i[t] = r ? [
                n,
                a
            ] : [
                a,
                n
            ];
        } else if (r) {
            a.unshift(n);
        } else {
            a.push(n);
        }
        if ((o = c(e)) > 0 && a.length > o && !a.warned) {
            a.warned = true;
            const u = new Error(`Possible EventEmitter memory leak detected. ${a.length} ${String(t)} listeners added. Use emitter.setMaxListeners() to increase limit`);
            u.name = "MaxListenersExceededWarning";
            u.emitter = e;
            u.type = t;
            u.count = a.length;
            l = u;
            if (console && console.warn) {
                console.warn(l);
            }
        }
    }
    return e;
}
function d() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) {
            return this.listener.call(this.target);
        }
        return this.listener.apply(this.target, arguments);
    }
}
function p(target, type, listener) {
    const r = {
        fired: false,
        wrapFn: undefined,
        target,
        type,
        listener
    };
    const o = d.bind(r);
    o.listener = listener;
    r.wrapFn = o;
    return o;
}
function h({ _events }, t, n) {
    if (_events === undefined) {
        return [];
    }
    const o = _events[t];
    if (o === undefined) {
        return [];
    }
    if (typeof o === "function") {
        if (n) {
            return [
                o.listener || o
            ];
        }
        return [
            o
        ];
    }
    if (n) {
        return ((e)=>{
            for(var t = new Array(e.length), n = 0; n < t.length; ++n){
                t[n] = e[n].listener || e[n];
            }
            return t;
        })(o);
    }
    return g(o, o.length);
}
function v(e) {
    const _events = this._events;
    if (_events !== undefined) {
        const n = _events[e];
        if (typeof n === "function") {
            return 1;
        }
        if (n !== undefined) {
            return n.length;
        }
    }
    return 0;
}
function g(e, t) {
    const n = new Array(t);
    for(let r = 0; r < t; ++r){
        n[r] = e[r];
    }
    return n;
}
Object.defineProperty(l, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
        return u;
    },
    set: function(e) {
        if (typeof e !== "number" || e < 0 || a(e)) {
            throw new RangeError(`The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ${e}.`);
        }
        u = e;
    }
});
l.init = function() {
    if (!(this._events !== undefined && this._events !== Object.getPrototypeOf(this)._events)) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
l.prototype.setMaxListeners = function(e) {
    if (typeof e !== "number" || e < 0 || a(e)) {
        throw new RangeError(`The value of "n" is out of range. It must be a non-negative number. Received ${e}.`);
    }
    this._maxListeners = e;
    return this;
};
l.prototype.getMaxListeners = function() {
    return c(this);
};
l.prototype.emit = function(e) {
    const t = [];
    for(var n = 1; n < arguments.length; n++){
        t.push(arguments[n]);
    }
    let r = e === "error";
    const _events = this._events;
    if (_events !== undefined) {
        r = r && _events.error === undefined;
    } else if (!r) {
        return false;
    }
    if (r) {
        let a;
        if (t.length > 0) {
            a = t[0];
        }
        if (a instanceof Error) {
            throw a;
        }
        const l = new Error(`Unhandled error.${a ? ` (${a.message})` : ""}`);
        l.context = a;
        throw l;
    }
    const u = _events[e];
    if (u === undefined) {
        return false;
    }
    if (typeof u === "function") {
        i(u, this, t);
    } else {
        const s = u.length;
        const c = g(u, s);
        for(n = 0; n < s; ++n){
            i(c[n], this, t);
        }
    }
    return true;
};
l.prototype.addListener = function(e, t) {
    return f(this, e, t, false);
};
l.prototype.on = l.prototype.addListener;
l.prototype.prependListener = function(e, t) {
    return f(this, e, t, true);
};
l.prototype.once = function(e, t) {
    s(t);
    this.on(e, p(this, e, t));
    return this;
};
l.prototype.prependOnceListener = function(e, t) {
    s(t);
    this.prependListener(e, p(this, e, t));
    return this;
};
l.prototype.removeListener = function(e, t) {
    let n;
    let r;
    let o;
    let i;
    let a;
    s(t);
    if ((r = this._events) === undefined) {
        return this;
    }
    if ((n = r[e]) === undefined) {
        return this;
    }
    if (n === t || n.listener === t) {
        if (--this._eventsCount == 0) {
            this._events = Object.create(null);
        } else {
            delete r[e];
            if (r.removeListener) {
                this.emit("removeListener", e, n.listener || t);
            }
        }
    } else if (typeof n !== "function") {
        o = -1;
        for(i = n.length - 1; i >= 0; i--){
            if (n[i] === t || n[i].listener === t) {
                a = n[i].listener;
                o = i;
                break;
            }
        }
        if (o < 0) {
            return this;
        }
        if (o === 0) {
            n.shift();
        } else {
            ((e, t)=>{
                for(; t + 1 < e.length; t++){
                    e[t] = e[t + 1];
                }
                e.pop();
            })(n, o);
        }
        if (n.length === 1) {
            r[e] = n[0];
        }
        if (r.removeListener !== undefined) {
            this.emit("removeListener", e, a || t);
        }
    }
    return this;
};
l.prototype.off = l.prototype.removeListener;
l.prototype.removeAllListeners = function(e) {
    let t;
    let n;
    let r;
    if ((n = this._events) === undefined) {
        return this;
    }
    if (n.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else {
            if (n[e] !== undefined) {
                if (--this._eventsCount == 0) {
                    this._events = Object.create(null);
                } else {
                    delete n[e];
                }
            }
        }
        return this;
    }
    if (arguments.length === 0) {
        let o;
        const i = Object.keys(n);
        for(r = 0; r < i.length; ++r){
            if ((o = i[r]) !== "removeListener") {
                this.removeAllListeners(o);
            }
        }
        this.removeAllListeners("removeListener");
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    if (typeof (t = n[e]) === "function") {
        this.removeListener(e, t);
    } else if (t !== undefined) {
        for(r = t.length - 1; r >= 0; r--){
            this.removeListener(e, t[r]);
        }
    }
    return this;
};
l.prototype.listeners = function(e) {
    return h(this, e, true);
};
l.prototype.rawListeners = function(e) {
    return h(this, e, false);
};
l.listenerCount = function(e, t) {
    if (typeof e.listenerCount === "function") {
        return e.listenerCount(t);
    }
    return v.call(e, t);
};
l.prototype.listenerCount = v;
l.prototype.eventNames = function() {
    if (this._eventsCount > 0) {
        return r(this._events);
    }
    return [];
};
