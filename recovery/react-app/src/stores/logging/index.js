"use strict";
((e)=>{
    const module20 = require("utils/babel-helpers/interopRequireDefault").default;
    require("unpacked/module-12.js");
    require("unpacked/module-11.js");
    require("unpacked/module-6.js");
    require("unpacked/module-9.js");
    require("unpacked/module-13.js");
    require("unpacked/module-1065.js");
    require("unpacked/module-10.js");
    require("unpacked/module-4.js");
    require("unpacked/module-17.js");
    require("unpacked/module-7.js");
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;
    require("unpacked/module-12.js");
    require("unpacked/module-45.js");
    require("unpacked/module-11.js");
    require("unpacked/module-6.js");
    require("unpacked/module-28.js");
    require("unpacked/module-42.js");
    require("unpacked/module-34.js");
    require("unpacked/module-15.js");
    require("unpacked/module-9.js");
    require("unpacked/module-13.js");
    require("unpacked/module-1065.js");
    require("unpacked/module-10.js");
    require("unpacked/module-4.js");
    require("unpacked/module-22.js");
    require("unpacked/module-17.js");
    require("unpacked/module-7.js");
    const n = module20(require("unpacked/module-41.js"));
    const l = module20(require("unpacked/module-31.js").default);
    const u = module20(require("unpacked/module-58.js").default);
    require("unpacked/module-41.js");
    let o;
    let i;
    let c;
    let s;
    let f;
    const d = module20(require("utils/babel-helpers/asyncToGenerator").default);
    const p = module20(require("unpacked/module-65.js").default);
    const m = module20(require("unpacked/module-36.js").default);
    const h = module20(require("unpacked/module-37.js").default);
    const v = module20(require("unpacked/module-49.js").default);
    module20(require("utils/babel-helpers/initializerWarningHelper").default);
    const module14 = require("unpacked/module-14.js");
    function y(e, t) {
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
    function E(e) {
        for(let t = 1; t < arguments.length; t++){
            var a = arguments[t] ?? {};
            if (t % 2) {
                y(Object(a), true).forEach((t)=>{
                    l.default(e, t, a[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(a));
            } else {
                y(Object(a)).forEach((t)=>{
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                });
            }
        }
        return e;
    }
    o = (()=>{
        function t(r = {}) {
            const _this = this;
            m.default(this, t);
            p.default(this, "isLoading", i, this);
            p.default(this, "pathParams", c, this);
            p.default(this, "data", s, this);
            p.default(this, "headers", f, this);
            Object.getOwnPropertyNames(r).forEach((e)=>{
                _this[e] = r[e];
            });
            this.headers = {
                "X-Remote-User": e.globals.user.username
            };
        }
        h.default(t, [
            {
                key: "getApiPath",
                value: function() {
                    return "kapis/logging.kubesphere.io/v1alpha2/logs";
                }
            },
            {
                key: "request",
                value: ((e)=>{
                    function t() {
                        return e.apply(this, arguments);
                    }
                    t.toString = function() {
                        return e.toString();
                    };
                    return t;
                })(d.default(n.default.mark(function* e() {
                    let t;
                    let a;
                    let r;
                    let l;
                    let cluster;
                    let i;
                    let c;
                    const s = arguments;
                    t = s.length > 0 && s[0] !== undefined ? s[0] : {};
                    a = s.length > 1 && s[1] !== undefined ? s[1] : "get";
                    this.isLoading = true;
                    r = t.start_time;
                    l = t.end_time;
                    cluster = t.cluster;
                    i = u.default(t, [
                        "start_time",
                        "end_time",
                        "cluster"
                    ]);
                    c = yield request[a](this.getApiPath(), E(E({}, i), {}, {
                        start_time: r ? Math.floor(r / 1000) : undefined,
                        end_time: l ? Math.floor(l / 1000) : undefined,
                        cluster
                    }), {
                        headers: this.headers
                    });
                    this.isLoading = false;
                    return c;
                })))
            },
            {
                key: "apiVersion",
                get: function() {
                    return "kapis/logging.kubesphere.io/v1alpha2";
                }
            }
        ]);
        return t;
    })();
    i = v.default(o.prototype, "isLoading", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return false;
        }
    });
    c = v.default(o.prototype, "pathParams", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return {};
        }
    });
    s = v.default(o.prototype, "data", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return [];
        }
    });
    f = v.default(o.prototype, "headers", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return {};
        }
    });
    v.default(o.prototype, "request", [
        module14.action
    ], Object.getOwnPropertyDescriptor(o.prototype, "request"), o.prototype);
    exports.default = o;
})(require("unpacked/module-69.js").default);
