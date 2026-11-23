"use strict";
((e)=>{
    const module20 = require("./module-20.js").default;
    require("./module-12.js");
    require("./module-5.js");
    require("./module-11.js");
    require("./module-6.js");
    require("./module-48.js");
    require("./module-9.js");
    require("./module-13.js");
    require("./module-10.js");
    require("./module-24.js");
    require("./module-188.js");
    require("./module-7.js");
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;
    require("./module-12.js");
    require("./module-5.js");
    require("./module-11.js");
    require("./module-6.js");
    require("./module-28.js");
    require("./module-48.js");
    require("./module-34.js");
    require("./module-15.js");
    require("./module-9.js");
    require("./module-13.js");
    require("./module-10.js");
    require("./module-4.js");
    require("./module-22.js");
    require("./module-24.js");
    require("./module-188.js");
    require("./module-7.js");
    const o = module20(require("./module-41.js"));
    require("./module-41.js");
    let a;
    let i;
    let l;
    let s;
    let u;
    let c;
    let f;
    let d;
    let p;
    let h;
    let v;
    const m = module20(require("./module-44.js").default);
    const g = module20(require("./module-31.js").default);
    const y = module20(require("./module-65.js").default);
    const b = module20(require("./module-36.js").default);
    const C = module20(require("./module-37.js").default);
    const w = module20(require("./module-49.js").default);
    module20(require("./module-66.js").default);
    const _ = module20(require("./module-26.js").default);
    const module14 = require("./module-14.js");
    const module431 = require("./module-431.js");
    const module244 = require("./module-244.js").default;
    const k = module20(require("./module-322.js"));
    const O = module20(require("./module-325.js"));
    const module52 = require("./module-52.js");
    function L(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            let r = Object.getOwnPropertySymbols(e);
            if (t) {
                r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
            }
            n.push.apply(n, r);
        }
        return n;
    }
    function z(e) {
        for(let t = 1; t < arguments.length; t++){
            var n = arguments[t] ?? {};
            if (t % 2) {
                L(Object(n), true).forEach((t)=>{
                    g.default(e, t, n[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
            } else {
                L(Object(n)).forEach((t)=>{
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
        }
        return e;
    }
    a = (()=>{
        function t() {
            const _this = this;
            b.default(this, t);
            y.default(this, "navs", i, this);
            y.default(this, "showGlobalNav", l, this);
            y.default(this, "showLicenseTip", s, this);
            y.default(this, "licenseInfo", u, this);
            y.default(this, "actions", c, this);
            y.default(this, "oauthServers", f, this);
            this.query = function(e = {}) {
                const t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
                const location = _this.routing.location;
                const { pathname, search } = location;
                const i = module244.parse(search.slice(1));
                const l = t ? e : z(z({}, i), e);
                _this.routing.push(`${pathname}?${module52.getQueryString(l)}`);
            };
            y.default(this, "toggleGlobalNav", d, this);
            y.default(this, "hideLicenseTip", p, this);
            y.default(this, "hideGlobalNav", h, this);
            y.default(this, "registerActions", v, this);
            this.websocket = new O.default;
            this.user = new k.default;
            this.routing = new module431.RouterStore;
            this.routing.query = this.query;
            this.showLicenseTip = globals.licenseInfo?.showLicenseTip || globals.licenseInfo?.isExpired;
            e.navigateTo = this.routing.push;
        }
        let n;
        C.default(t, [
            {
                key: "register",
                value: function(e, t) {
                    module14.extendObservable(this, g.default({}, e, t));
                }
            },
            {
                key: "triggerAction",
                value: function(e, ...r) {
                    if (this.actions[e]) {
                        this.actions[e].on(...r);
                    }
                }
            },
            {
                key: "login",
                value: function(e) {
                    return request.post("login", e);
                }
            },
            {
                key: "loginIdentityProviders",
                value: function(e) {
                    const t = `/oauth/login/${e.title}`;
                    return request.post(t, z({}, e));
                }
            },
            {
                key: "logout",
                value: (n = m.default(o.default.mark(function* e() {
                    let t;
                    let n;
                    t = yield request.post("logout");
                    if (n = _.default(t, "data.url")) {
                        window.location.href = n;
                    }
                })), function() {
                    return n.apply(this, arguments);
                })
            },
            {
                key: "getRules",
                value: function(e) {
                    return this.user.fetchRules(z(z({}, e), {}, {
                        name: globals.user.username
                    }));
                }
            },
            {
                key: "setLicense",
                value: function(e) {
                    globals.licenseInfo = e;
                    this.setLicenseInfo(e);
                    this.showLicenseTip = e?.showLicenseTip || e?.unExpired;
                }
            },
            {
                key: "setLicenseInfo",
                value: function(e) {
                    this.licenseInfo = e;
                }
            }
        ]);
        return t;
    })();
    i = w.default(a.prototype, "navs", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return globals.config.navs;
        }
    });
    l = w.default(a.prototype, "showGlobalNav", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return false;
        }
    });
    s = w.default(a.prototype, "showLicenseTip", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return false;
        }
    });
    u = w.default(a.prototype, "licenseInfo", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return {};
        }
    });
    c = w.default(a.prototype, "actions", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return {};
        }
    });
    f = w.default(a.prototype, "oauthServers", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return [];
        }
    });
    d = w.default(a.prototype, "toggleGlobalNav", [
        module14.action
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            const _this = this;
            return function() {
                _this.showGlobalNav = !_this.showGlobalNav;
            };
        }
    });
    p = w.default(a.prototype, "hideLicenseTip", [
        module14.action
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            const _this = this;
            return function() {
                _this.showLicenseTip = false;
            };
        }
    });
    h = w.default(a.prototype, "hideGlobalNav", [
        module14.action
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            const _this = this;
            return function() {
                _this.showGlobalNav = false;
            };
        }
    });
    v = w.default(a.prototype, "registerActions", [
        module14.action
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            const _this = this;
            return function(t) {
                module14.extendObservable(_this.actions, t);
            };
        }
    });
    w.default(a.prototype, "triggerAction", [
        module14.action
    ], Object.getOwnPropertyDescriptor(a.prototype, "triggerAction"), a.prototype);
    w.default(a.prototype, "logout", [
        module14.action
    ], Object.getOwnPropertyDescriptor(a.prototype, "logout"), a.prototype);
    w.default(a.prototype, "getRules", [
        module14.action
    ], Object.getOwnPropertyDescriptor(a.prototype, "getRules"), a.prototype);
    w.default(a.prototype, "setLicense", [
        module14.action
    ], Object.getOwnPropertyDescriptor(a.prototype, "setLicense"), a.prototype);
    w.default(a.prototype, "setLicenseInfo", [
        module14.action
    ], Object.getOwnPropertyDescriptor(a.prototype, "setLicenseInfo"), a.prototype);
    exports.default = a;
})(require("./module-69.js").default);
