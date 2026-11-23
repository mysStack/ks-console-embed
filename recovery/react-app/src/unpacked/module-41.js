const r = ((e)=>{
    "use strict";
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const r = typeof Symbol === "function" ? Symbol : {};
    const o = r.iterator || "@@iterator";
    const a = r.asyncIterator || "@@asyncIterator";
    const i = r.toStringTag || "@@toStringTag";
    function l(e, t, value) {
        Object.defineProperty(e, t, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return e[t];
    }
    try {
        l({}, "");
    } catch (e) {
        l = function(e, t, n) {
            return e[t] = n;
        };
    }
    function s(e, t, n, r) {
        const o = t && t.prototype instanceof f ? t : f;
        const a = Object.create(o.prototype);
        const i = new constructor(r || []);
        a._invoke = ((e, t, n)=>{
            let r = "suspendedStart";
            return function(o, a) {
                if (r === "executing") {
                    throw new Error("Generator is already running");
                }
                if (r === "completed") {
                    if (o === "throw") {
                        throw a;
                    }
                    return {
                        value: undefined,
                        done: true
                    };
                }
                n.method = o;
                for(n.arg = a;;){
                    const i = n.delegate;
                    if (i) {
                        const l = C(i, n);
                        if (l) {
                            if (l === c) {
                                continue;
                            }
                            return l;
                        }
                    }
                    if (n.method === "next") {
                        n.sent = n._sent = n.arg;
                    } else if (n.method === "throw") {
                        if (r === "suspendedStart") {
                            r = "completed";
                            throw n.arg;
                        }
                        n.dispatchException(n.arg);
                    } else {
                        if (n.method === "return") {
                            n.abrupt("return", n.arg);
                        }
                    }
                    r = "executing";
                    const s = u(e, t, n);
                    if (s.type === "normal") {
                        r = n.done ? "completed" : "suspendedYield";
                        if (s.arg === c) {
                            continue;
                        }
                        return {
                            value: s.arg,
                            done: n.done
                        };
                    }
                    if (s.type === "throw") {
                        r = "completed";
                        n.method = "throw";
                        n.arg = s.arg;
                    }
                }
            };
        })(e, n, i);
        return a;
    }
    function u(e, t, n) {
        try {
            return {
                type: "normal",
                arg: e.call(t, n)
            };
        } catch (arg) {
            return {
                type: "throw",
                arg
            };
        }
    }
    e.wrap = s;
    var c = {};
    function f() {}
    function d() {}
    function p() {}
    let h = {};
    h[o] = function() {
        return this;
    };
    const m = Object.getPrototypeOf && Object.getPrototypeOf(Object.getPrototypeOf(M([])));
    if (m && m !== Object.prototype && hasOwnProperty.call(m, o)) {
        h = m;
    }
    const g = p.prototype = f.prototype = Object.create(h);
    function y(e) {
        [
            "next",
            "throw",
            "return"
        ].forEach((t)=>{
            l(e, t, function(e) {
                return this._invoke(t, e);
            });
        });
    }
    function b(e, t) {
        let r;
        this._invoke = function(o, a) {
            function i() {
                return new t(function(r, i) {
                    (function r(o, a, i, l) {
                        const s = u(e[o], e, a);
                        if (s.type !== "throw") {
                            const c = s.arg;
                            const f = c.value;
                            if (f && typeof f === "object" && hasOwnProperty.call(f, "__await")) {
                                return t.resolve(f.__await).then((e)=>{
                                    r("next", e, i, l);
                                }, (e)=>{
                                    r("throw", e, i, l);
                                });
                            }
                            return t.resolve(f).then((e)=>{
                                c.value = e;
                                i(c);
                            }, (e)=>r("throw", e, i, l));
                        }
                        l(s.arg);
                    })(o, a, r, i);
                });
            }
            return r = r ? r.then(i, i) : i();
        };
    }
    function C(e, t) {
        const n = e.iterator[t.method];
        if (n === undefined) {
            t.delegate = null;
            if (t.method === "throw") {
                if (e.iterator.return && (t.method = "return", t.arg = undefined, C(e, t), t.method === "throw")) {
                    return c;
                }
                t.method = "throw";
                t.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return c;
        }
        const r = u(n, e.iterator, t.arg);
        if (r.type === "throw") {
            t.method = "throw";
            t.arg = r.arg;
            t.delegate = null;
            return c;
        }
        const r_arg = r.arg;
        if (r_arg) {
            if (r_arg.done) {
                t[e.resultName] = r_arg.value;
                t.next = e.nextLoc;
                if (t.method !== "return") {
                    t.method = "next";
                    t.arg = undefined;
                }
                t.delegate = null;
                return c;
            }
            return r_arg;
        }
        t.method = "throw";
        t.arg = new TypeError("iterator result is not an object");
        t.delegate = null;
        return c;
    }
    function w(e) {
        const t = {
            tryLoc: e[0]
        };
        if (1 in e) {
            t.catchLoc = e[1];
        }
        if (2 in e) {
            t.finallyLoc = e[2];
            t.afterLoc = e[3];
        }
        this.tryEntries.push(t);
    }
    function _(e) {
        const t = e.completion || {};
        t.type = "normal";
        delete t.arg;
        e.completion = t;
    }
    function constructor(e) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        e.forEach(w, this);
        this.reset(true);
    }
    function M(e) {
        if (e) {
            const t = e[o];
            if (t) {
                return t.call(e);
            }
            if (typeof e.next === "function") {
                return e;
            }
            if (!isNaN(e.length)) {
                let r = -1;
                const a = function t() {
                    while(++r < e.length){
                        if (hasOwnProperty.call(e, r)) {
                            t.value = e[r];
                            t.done = false;
                            return t;
                        }
                    }
                    t.value = undefined;
                    t.done = true;
                    return t;
                };
                return a.next = a;
            }
        }
        return {
            next
        };
    }
    function next() {
        return {
            value: undefined,
            done: true
        };
    }
    d.prototype = g.constructor = p;
    p.constructor = d;
    d.displayName = l(p, i, "GeneratorFunction");
    e.isGeneratorFunction = function(e) {
        const t = typeof e === "function" && e.constructor;
        return !!t && (t === d || (t.displayName || t.name) === "GeneratorFunction");
    };
    e.mark = function(e) {
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e, p);
        } else {
            e.__proto__ = p;
            l(e, i, "GeneratorFunction");
        }
        e.prototype = Object.create(g);
        return e;
    };
    e.awrap = function(__await) {
        return {
            __await
        };
    };
    y(b.prototype);
    b.prototype[a] = function() {
        return this;
    };
    e.AsyncIterator = b;
    e.async = function(t, n, r, o, a = Promise) {
        const i = new b(s(t, n, r, o), a);
        if (e.isGeneratorFunction(n)) {
            return i;
        }
        return i.next().then((e)=>{
            if (e.done) {
                return e.value;
            }
            return i.next();
        });
    };
    y(g);
    l(g, i, "Generator");
    g[o] = function() {
        return this;
    };
    g.toString = function() {
        return "[object Generator]";
    };
    e.keys = function(e) {
        const t = [];
        for(const n in e){
            t.push(n);
        }
        t.reverse();
        return function n() {
            while(t.length){
                const r = t.pop();
                if (r in e) {
                    n.value = r;
                    n.done = false;
                    return n;
                }
            }
            n.done = true;
            return n;
        };
    };
    e.values = M;
    constructor.prototype = {
        constructor,
        reset: function(e) {
            this.prev = 0;
            this.next = 0;
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(_);
            if (!e) {
                for(const t in this){
                    if (t.charAt(0) === "t" && hasOwnProperty.call(this, t) && !isNaN(+t.slice(1))) {
                        this[t] = undefined;
                    }
                }
            }
        },
        stop: function() {
            this.done = true;
            const completion = this.tryEntries[0].completion;
            if (completion.type === "throw") {
                throw completion.arg;
            }
            return this.rval;
        },
        dispatchException: function(e) {
            if (this.done) {
                throw e;
            }
            const _this = this;
            function r(n, r) {
                i.type = "throw";
                i.arg = e;
                _this.next = n;
                if (r) {
                    _this.method = "next";
                    _this.arg = undefined;
                }
                return !!r;
            }
            for(let o = this.tryEntries.length - 1; o >= 0; --o){
                const a = this.tryEntries[o];
                var i = a.completion;
                if (a.tryLoc === "root") {
                    return r("end");
                }
                if (a.tryLoc <= this.prev) {
                    const l = hasOwnProperty.call(a, "catchLoc");
                    const s = hasOwnProperty.call(a, "finallyLoc");
                    if (l && s) {
                        if (this.prev < a.catchLoc) {
                            return r(a.catchLoc, true);
                        }
                        if (this.prev < a.finallyLoc) {
                            return r(a.finallyLoc);
                        }
                    } else if (l) {
                        if (this.prev < a.catchLoc) {
                            return r(a.catchLoc, true);
                        }
                    } else {
                        if (!s) {
                            throw new Error("try statement without catch or finally");
                        }
                        if (this.prev < a.finallyLoc) {
                            return r(a.finallyLoc);
                        }
                    }
                }
            }
        },
        abrupt: function(e, t) {
            for(let r = this.tryEntries.length - 1; r >= 0; --r){
                const o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && hasOwnProperty.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var a = o;
                    break;
                }
            }
            if (a && (e === "break" || e === "continue") && a.tryLoc <= t && t <= a.finallyLoc) {
                a = null;
            }
            const i = a ? a.completion : {};
            i.type = e;
            i.arg = t;
            if (a) {
                this.method = "next";
                this.next = a.finallyLoc;
                return c;
            }
            return this.complete(i);
        },
        complete: function(e, t) {
            if (e.type === "throw") {
                throw e.arg;
            }
            if (e.type === "break" || e.type === "continue") {
                this.next = e.arg;
            } else if (e.type === "return") {
                this.rval = this.arg = e.arg;
                this.method = "return";
                this.next = "end";
            } else if (e.type === "normal" && t) {
                this.next = t;
            }
            return c;
        },
        finish: function(e) {
            for(let t = this.tryEntries.length - 1; t >= 0; --t){
                const n = this.tryEntries[t];
                if (n.finallyLoc === e) {
                    this.complete(n.completion, n.afterLoc);
                    _(n);
                    return c;
                }
            }
        },
        catch: function(e) {
            for(let t = this.tryEntries.length - 1; t >= 0; --t){
                const n = this.tryEntries[t];
                if (n.tryLoc === e) {
                    const r = n.completion;
                    if (r.type === "throw") {
                        var o = r.arg;
                        _(n);
                    }
                    return o;
                }
            }
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(e, resultName, nextLoc) {
            this.delegate = {
                iterator: M(e),
                resultName,
                nextLoc
            };
            if (this.method === "next") {
                this.arg = undefined;
            }
            return c;
        }
    };
    return e;
})(module.exports);
try {
    regeneratorRuntime = r;
} catch (e) {
    Function("r", "regeneratorRuntime = r")(r);
}
