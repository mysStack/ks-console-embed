"use strict";
((e)=>{
    const module20 = require("utils/babel-helpers/interopRequireDefault").default;
    require("unpacked/module-12.js");
    require("unpacked/module-5.js");
    require("unpacked/module-11.js");
    require("unpacked/module-6.js");
    require("unpacked/module-18.js");
    require("unpacked/module-9.js");
    require("unpacked/module-13.js");
    require("unpacked/module-1065.js");
    require("unpacked/module-10.js");
    require("unpacked/module-7.js");
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;
    require("unpacked/module-12.js");
    require("unpacked/module-5.js");
    require("unpacked/module-11.js");
    require("unpacked/module-6.js");
    require("unpacked/module-18.js");
    require("unpacked/module-28.js");
    require("unpacked/module-442.js");
    require("unpacked/module-34.js");
    require("unpacked/module-15.js");
    require("unpacked/module-9.js");
    require("unpacked/module-13.js");
    require("unpacked/module-1065.js");
    require("unpacked/module-10.js");
    require("unpacked/module-4.js");
    require("unpacked/module-22.js");
    require("unpacked/module-7.js");
    const n = module20(require("unpacked/module-31.js").default);
    const l = module20(require("unpacked/module-41.js"));
    const u = module20(require("unpacked/module-58.js").default);
    require("unpacked/module-41.js");
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
    let b;
    let _;
    const O = module20(require("utils/babel-helpers/asyncToGenerator").default);
    const S = module20(require("unpacked/module-65.js").default);
    const C = module20(require("unpacked/module-36.js").default);
    const D = module20(require("unpacked/module-37.js").default);
    const k = module20(require("unpacked/module-49.js").default);
    module20(require("utils/babel-helpers/initializerWarningHelper").default);
    const module14 = require("unpacked/module-14.js");
    const T = module20(require("unpacked/module-903.js").default);
    const R = module20(require("unpacked/module-26.js").default);
    const module52 = require("utils/index");
    const w = module20(require("unpacked/module-243.js"));
    const M = module20(require("unpacked/module-1387.js").default);
    function P(e, t) {
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
    function A(e) {
        for(let t = 1; t < arguments.length; t++){
            var a = arguments[t] ?? {};
            if (t % 2) {
                P(Object(a), true).forEach((t)=>{
                    n.default(e, t, a[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(a));
            } else {
                P(Object(a)).forEach((t)=>{
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                });
            }
        }
        return e;
    }
    o = (()=>{
        function t(r = {}) {
            const _this = this;
            C.default(this, t);
            S.default(this, "isLoading", i, this);
            S.default(this, "isHistogramTodayLoading", c, this);
            S.default(this, "isHistogramLoading", s, this);
            S.default(this, "histogramTodayData", f, this);
            S.default(this, "histogramData", d, this);
            S.default(this, "interval", p, this);
            S.default(this, "data", m, this);
            S.default(this, "from", h, this);
            S.default(this, "total", v, this);
            S.default(this, "size", g, this);
            S.default(this, "namespaces", y, this);
            S.default(this, "logsCount", E, this);
            S.default(this, "headers", b, this);
            S.default(this, "changeTimeRang", _, this);
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
        D.default(t, [
            {
                key: "fetchUrl",
                value: function() {
                    return "kapis/logging.kubesphere.io/v1alpha2/auditing";
                }
            },
            {
                key: "fetchTodayHistogram",
                value: (n = O.default(l.default.mark(function* e() {
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
                    this.isHistogramTodayLoading = true;
                    n = {
                        operation: "statistics",
                        start_time: Math.ceil(w.default().startOf("day").valueOf() / 1000),
                        end_time: Math.ceil(Date.now() / 1000),
                        interval: this.interval,
                        cluster: a
                    };
                    o = yield module52.to(request.get(this.fetchUrl(), T.default(n, r), {
                        headers: this.headers
                    }));
                    ({ statistics: c = {} } = o);
                    this.isLoading = false;
                    this.isHistogramTodayLoading = false;
                    this.histogramTodayData = c;
                })), function() {
                    return n.apply(this, arguments);
                })
            },
            {
                key: "fetchHistogram",
                value: (r = O.default(l.default.mark(function* e() {
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
                    this.isHistogramLoading = true;
                    n = {
                        operation: "histogram",
                        start_time: Math.ceil(Date.now() / 1000) - 43200,
                        end_time: Math.ceil(Date.now() / 1000),
                        interval: this.interval,
                        cluster: a
                    };
                    o = yield module52.to(request.get(this.fetchUrl(), T.default(n, r), {
                        headers: this.headers
                    }));
                    ({ histogram: c = {} } = o);
                    this.logsCount = c.total || 0;
                    this.isLoading = false;
                    this.isHistogramLoading = false;
                    this.histogramData = c;
                })), function() {
                    return r.apply(this, arguments);
                })
            },
            {
                key: "fetchQuery",
                value: (a = O.default(l.default.mark(function* e() {
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
                    i = T.default(o, r);
                    c = yield module52.to(request.get(this.fetchUrl(), i, {
                        headers: this.headers
                    }));
                    s = R.default(c, "query", {});
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
                    return e.map((e)=>A(A({}, e), {}, {
                            logStripANSI: M.default(e.log)
                        }));
                }
            }
        ]);
        return t;
    })();
    i = k.default(o.prototype, "isLoading", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return true;
        }
    });
    c = k.default(o.prototype, "isHistogramTodayLoading", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return true;
        }
    });
    s = k.default(o.prototype, "isHistogramLoading", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return true;
        }
    });
    f = k.default(o.prototype, "histogramTodayData", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return {};
        }
    });
    d = k.default(o.prototype, "histogramData", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return {};
        }
    });
    p = k.default(o.prototype, "interval", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return "30m";
        }
    });
    m = k.default(o.prototype, "data", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return [];
        }
    });
    h = k.default(o.prototype, "from", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return 0;
        }
    });
    v = k.default(o.prototype, "total", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return 0;
        }
    });
    g = k.default(o.prototype, "size", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return 10;
        }
    });
    y = k.default(o.prototype, "namespaces", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return [];
        }
    });
    E = k.default(o.prototype, "logsCount", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return 0;
        }
    });
    b = k.default(o.prototype, "headers", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return {};
        }
    });
    _ = k.default(o.prototype, "changeTimeRang", [
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
    k.default(o.prototype, "fetchTodayHistogram", [
        module14.action
    ], Object.getOwnPropertyDescriptor(o.prototype, "fetchTodayHistogram"), o.prototype);
    k.default(o.prototype, "fetchHistogram", [
        module14.action
    ], Object.getOwnPropertyDescriptor(o.prototype, "fetchHistogram"), o.prototype);
    k.default(o.prototype, "fetchQuery", [
        module14.action
    ], Object.getOwnPropertyDescriptor(o.prototype, "fetchQuery"), o.prototype);
    exports.default = o;
})(require("unpacked/module-69.js").default);
