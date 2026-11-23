let r;
r = function(e) {
    return ((e)=>{
        const t = {};
        function n(i) {
            if (t[i]) {
                return t[i].exports;
            }
            const o = t[i] = {
                i,
                l: false,
                exports: {}
            };
            e[i].call(o.exports, o, o.exports, n);
            o.l = true;
            return o.exports;
        }
        n.m = e;
        n.c = t;
        n.d = function(e, t, get) {
            if (!n.o(e, t)) {
                Object.defineProperty(e, t, {
                    enumerable: true,
                    get
                });
            }
        };
        n.r = function(e) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                });
            }
            Object.defineProperty(e, "__esModule", {
                value: true
            });
        };
        n.t = function(e, t) {
            if (1 & t) {
                e = n(e);
            }
            if (8 & t) {
                return e;
            }
            if (4 & t && typeof e === "object" && e && e.__esModule) {
                return e;
            }
            const r = Object.create(null);
            n.r(r);
            Object.defineProperty(r, "default", {
                enumerable: true,
                value: e
            });
            if (2 & t && typeof e !== "string") {
                for(const o in e){
                    n.d(r, o, (function(t) {
                        return e[t];
                    }).bind(null, o));
                }
            }
            return r;
        };
        n.n = function(e) {
            const t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            n.d(t, "a", t);
            return t;
        };
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        };
        n.p = "";
        return n(n.s = 1);
    })([
        function(t, n) {
            t.exports = e;
        },
        function(e, t, n) {
            e.exports = n(2);
        },
        function(e, t, n) {
            "use strict";
            n.r(t);
            let r;
            let o;
            const a = n(0);
            function i(e, t) {
                for (const r of t){
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                        r.writable = true;
                    }
                    Object.defineProperty(e, r.key, r);
                }
            }
            function l(e, t, n, r, o) {
                let a = {};
                Object.keys(r).forEach((e)=>{
                    a[e] = r[e];
                });
                a.enumerable = !!a.enumerable;
                a.configurable = !!a.configurable;
                if ("value" in a || a.initializer) {
                    a.writable = true;
                }
                a = n.slice().reverse().reduce((acc, item)=>item(e, t, acc) || acc, a);
                if (o && a.initializer !== undefined) {
                    a.value = a.initializer ? a.initializer.call(o) : undefined;
                    a.initializer = undefined;
                }
                if (a.initializer === undefined) {
                    Object.defineProperty(e, t, a);
                    a = null;
                }
                return a;
            }
            o = l((r = (()=>{
                function e() {
                    let t;
                    const _this = this;
                    ((e, t)=>{
                        if (!(e instanceof t)) {
                            throw new TypeError("Cannot call a class as a function");
                        }
                    })(this, e);
                    if (t = o) {
                        Object.defineProperty(this, "location", {
                            enumerable: t.enumerable,
                            configurable: t.configurable,
                            writable: t.writable,
                            value: t.initializer ? t.initializer.call(this) : undefined
                        });
                    }
                    this.history = null;
                    this.push = function(e, t) {
                        _this.history.push(e, t);
                    };
                    this.replace = function(e, t) {
                        _this.history.replace(e, t);
                    };
                    this.go = function(e) {
                        _this.history.go(e);
                    };
                    this.goBack = function() {
                        _this.history.goBack();
                    };
                    this.goForward = function() {
                        _this.history.goForward();
                    };
                    this.push = this.push.bind(this);
                    this.replace = this.replace.bind(this);
                    this.go = this.go.bind(this);
                    this.goBack = this.goBack.bind(this);
                    this.goForward = this.goForward.bind(this);
                }
                let t;
                let n;
                t = e;
                if (n = [
                    {
                        key: "_updateLocation",
                        value: function(e) {
                            this.location = e;
                        }
                    }
                ]) {
                    i(t.prototype, n);
                }
                return e;
            })()).prototype, "location", [
                a.observable
            ], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return null;
                }
            });
            l(r.prototype, "_updateLocation", [
                a.action
            ], Object.getOwnPropertyDescriptor(r.prototype, "_updateLocation"), r.prototype);
            const s = r;
            function u(e, t, n) {
                if (t in e) {
                    Object.defineProperty(e, t, {
                        value: n,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    e[t] = n;
                }
                return e;
            }
            const c = function(e, t) {
                t.history = e;
                const n = function(e) {
                    t._updateLocation(e);
                };
                const r = e.listen(n);
                n(e.location);
                e.subscribe = function(n) {
                    const r = a.observe(t, "location", function() {
                        const r = function(e) {
                            for(let t = 1; t < arguments.length; t++){
                                var n = arguments[t] ?? {};
                                let r = Object.keys(n);
                                if (typeof Object.getOwnPropertySymbols === "function") {
                                    r = r.concat(Object.getOwnPropertySymbols(n).filter((e)=>Object.getOwnPropertyDescriptor(n, e).enumerable));
                                }
                                r.forEach((t)=>{
                                    u(e, t, n[t]);
                                });
                            }
                            return e;
                        }({}, t.location);
                        n(r, e.action);
                    });
                    n(t.location, e.action);
                    return r;
                };
                e.unsubscribe = r;
                return e;
            };
            n.d(t, "RouterStore", function() {
                return s;
            });
            n.d(t, "syncHistoryWithStore", function() {
                return c;
            });
        }
    ]);
};
module.exports = r(require("./module-14.js"));
