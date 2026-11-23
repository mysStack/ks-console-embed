"use strict";
((e)=>{
    const module20 = require("./module-20.js").default;
    require("./module-12.js");
    require("./module-5.js");
    require("./module-11.js");
    require("./module-6.js");
    require("./module-18.js");
    require("./module-9.js");
    require("./module-13.js");
    require("./module-1065.js");
    require("./module-10.js");
    require("./module-7.js");
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;
    require("./module-12.js");
    require("./module-5.js");
    require("./module-11.js");
    require("./module-6.js");
    require("./module-18.js");
    require("./module-28.js");
    require("./module-442.js");
    require("./module-34.js");
    require("./module-15.js");
    require("./module-9.js");
    require("./module-13.js");
    require("./module-1065.js");
    require("./module-10.js");
    require("./module-4.js");
    require("./module-22.js");
    require("./module-7.js");
    const n = module20(require("./module-31.js").default);
    const l = module20(require("./module-41.js"));
    const u = module20(require("./module-58.js").default);
    require("./module-41.js");
    let o;
    let i;
    let c;
    let s;
    let f;
    let d;
    let p;
    let m;
    let h;
    let v;
    let g;
    let y;
    let E;
    const b = module20(require("./module-44.js").default);
    const _ = module20(require("./module-65.js").default);
    const O = module20(require("./module-36.js").default);
    const S = module20(require("./module-37.js").default);
    const C = module20(require("./module-49.js").default);
    module20(require("./module-66.js").default);
    const module14 = require("./module-14.js");
    const k = module20(require("./module-903.js").default);
    const N = module20(require("./module-26.js").default);
    const module52 = require("./module-52.js");
    const R = module20(require("./module-243.js"));
    const I = module20(require("./module-1387.js").default);
    function w(e, t) {
        const a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            let r = Object.getOwnPropertySymbols(e);
            if (t) {
                r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
            }
            a.push.apply(a, r);
        }
        return a;
    }
    function M(e) {
        for(let t = 1; t < arguments.length; t++){
            var a = arguments[t] ?? {};
            if (t % 2) {
                w(Object(a), true).forEach((t)=>{
                    n.default(e, t, a[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(a));
            } else {
                w(Object(a)).forEach((t)=>{
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                });
            }
        }
        return e;
    }
    o = (()=>{
        function t(r = {}) {
            const _this = this;
            O.default(this, t);
            _.default(this, "isLoading", i, this);
            _.default(this, "histogramTodayData", c, this);
            _.default(this, "histogramData", s, this);
            _.default(this, "interval", f, this);
            _.default(this, "data", d, this);
            _.default(this, "from", p, this);
            _.default(this, "total", m, this);
            _.default(this, "size", h, this);
            _.default(this, "namespaces", v, this);
            _.default(this, "logsCount", g, this);
            _.default(this, "headers", y, this);
            _.default(this, "changeTimeRang", E, this);
            Object.getOwnPropertyNames(r).forEach((e)=>{
                _this[e] = r[e];
            });
            this.headers = {
                "X-Remote-User": e.globals.user.username
            };
        }
        let a;
        let r;
        let n;
        S.default(t, [
            {
                key: "fetchUrl",
                value: function() {
                    return "kapis/logging.kubesphere.io/v1alpha2/events";
                }
            },
            {
                key: "fetchTodayHistogram",
                value: (n = b.default(l.default.mark(function* e() {
                    let t;
                    let a;
                    let r;
                    let n;
                    let o;
                    let c;
                    const s = arguments;
                    t = s.length > 0 && s[0] !== undefined ? s[0] : {};
                    a = t.cluster;
                    r = u.default(t, [
                        "cluster"
                    ]);
                    this.isLoading = true;
                    n = {
                        operation: "statistics",
                        start_time: Math.ceil(R.default().startOf("day").valueOf() / 1000),
                        end_time: Math.ceil(Date.now() / 1000),
                        interval: this.interval,
                        cluster: a
                    };
                    o = yield module52.to(request.get(this.fetchUrl(), k.default(n, r), {
                        headers: this.headers
                    }));
                    ({ statistics: c = {} } = o);
                    this.isLoading = false;
                    this.histogramTodayData = c;
                })), function() {
                    return n.apply(this, arguments);
                })
            },
            {
                key: "fetchHistogram",
                value: (r = b.default(l.default.mark(function* e() {
                    let t;
                    let a;
                    let r;
                    let n;
                    let o;
                    let c;
                    const s = arguments;
                    t = s.length > 0 && s[0] !== undefined ? s[0] : {};
                    a = t.cluster;
                    r = u.default(t, [
                        "cluster"
                    ]);
                    this.isLoading = true;
                    n = {
                        operation: "histogram",
                        start_time: Math.ceil(Date.now() / 1000) - 43200,
                        end_time: Math.ceil(Date.now() / 1000),
                        interval: this.interval,
                        cluster: a
                    };
                    o = yield module52.to(request.get(this.fetchUrl(), k.default(n, r), {
                        headers: this.headers
                    }));
                    ({ histogram: c = {} } = o);
                    this.logsCount = c.total || 0;
                    this.isLoading = false;
                    this.histogramData = c;
                })), function() {
                    return r.apply(this, arguments);
                })
            },
            {
                key: "fetchQuery",
                value: (a = b.default(l.default.mark(function* e() {
                    let t;
                    let a;
                    let r;
                    let n;
                    let o;
                    let i;
                    let c;
                    let s;
                    let f;
                    const d = arguments;
                    t = d.length > 0 && d[0] !== undefined ? d[0] : {};
                    a = t.cluster;
                    r = u.default(t, [
                        "cluster"
                    ]);
                    n = d.length > 1 && d[1] !== undefined ? d[1] : {};
                    this.isLoading = true;
                    o = {
                        operation: "query",
                        from: this.from,
                        size: this.size,
                        cluster: a
                    };
                    i = k.default(o, r);
                    c = yield module52.to(request.get(this.fetchUrl(), i), {
                        headers: this.headers
                    });
                    s = N.default(c, "query", {});
                    f = this.stripAnsiRecords(s.records || []);
                    this.data = n.loadMore ? this.data.concat(f) : f;
                    this.total = s.total || 0;
                    this.isLoading = false;
                    this.from = i.from;
                    this.size = i.size;
                    this.preParams = i;
                })), function() {
                    return a.apply(this, arguments);
                })
            },
            {
                key: "stripAnsiRecords",
                value: function(e = []) {
                    return e.map((e)=>M(M({}, e), {}, {
                            logStripANSI: I.default(e.log)
                        }));
                }
            }
        ]);
        return t;
    })();
    i = C.default(o.prototype, "isLoading", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return true;
        }
    });
    c = C.default(o.prototype, "histogramTodayData", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return {};
        }
    });
    s = C.default(o.prototype, "histogramData", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return {};
        }
    });
    f = C.default(o.prototype, "interval", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return "30m";
        }
    });
    d = C.default(o.prototype, "data", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return [];
        }
    });
    p = C.default(o.prototype, "from", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return 0;
        }
    });
    m = C.default(o.prototype, "total", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return 0;
        }
    });
    h = C.default(o.prototype, "size", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return 10;
        }
    });
    v = C.default(o.prototype, "namespaces", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return [];
        }
    });
    g = C.default(o.prototype, "logsCount", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return 0;
        }
    });
    y = C.default(o.prototype, "headers", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return {};
        }
    });
    E = C.default(o.prototype, "changeTimeRang", [
        module14.action
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            const _this = this;
            return function(t) {
                _this.time_rang = t;
                _this.fetchQuery();
            };
        }
    });
    C.default(o.prototype, "fetchTodayHistogram", [
        module14.action
    ], Object.getOwnPropertyDescriptor(o.prototype, "fetchTodayHistogram"), o.prototype);
    C.default(o.prototype, "fetchHistogram", [
        module14.action
    ], Object.getOwnPropertyDescriptor(o.prototype, "fetchHistogram"), o.prototype);
    C.default(o.prototype, "fetchQuery", [
        module14.action
    ], Object.getOwnPropertyDescriptor(o.prototype, "fetchQuery"), o.prototype);
    exports.default = o;
})(require("./module-69.js").default);
