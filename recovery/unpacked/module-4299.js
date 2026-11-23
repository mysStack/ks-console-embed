"use strict";
require("./module-15.js");
const module20 = require("./module-20.js").default;
require("./module-5.js");
require("./module-16.js");
require("./module-9.js");
require("./module-4.js");
require("./module-22.js");
require("./module-196.js");
require("./module-23.js");
require("./module-17.js");
require("./module-109.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("./module-45.js");
require("./module-5.js");
require("./module-42.js");
require("./module-16.js");
require("./module-9.js");
require("./module-4.js");
require("./module-22.js");
require("./module-196.js");
require("./module-23.js");
require("./module-57.js");
require("./module-17.js");
require("./module-109.js");
const n = module20(require("./module-41.js"));
require("./module-41.js");
let u;
let l;
let o;
let c;
let i;
let s;
const d = module20(require("./module-44.js").default);
const f = module20(require("./module-65.js").default);
const p = module20(require("./module-36.js").default);
const m = module20(require("./module-37.js").default);
const h = module20(require("./module-88.js").default);
const v = module20(require("./module-55.js").default);
const y = module20(require("./module-56.js").default);
const g = module20(require("./module-51.js"));
const _ = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const module14 = require("./module-14.js");
const module52 = require("./module-52.js");
u = ((e)=>{
    v.default(u, e);
    var r = ((e)=>{
        const t = (()=>{
            if (typeof Reflect === "undefined" || !Reflect.construct) {
                return false;
            }
            if (Reflect.construct.sham) {
                return false;
            }
            if (typeof Proxy === "function") {
                return true;
            }
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        })();
        return function() {
            let a;
            const r = g.default(e);
            if (t) {
                const n = g.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return y.default(this, a);
        };
    })(u);
    function u(...a) {
        let e;
        p.default(this, u);
        e = r.call(this, ...a);
        f.default(e, "isSubmitting", l, h.default(e));
        f.default(e, "configs", o, h.default(e));
        f.default(e, "storage", c, h.default(e));
        f.default(e, "name", i, h.default(e));
        e.getConfigsApi = function() {
            return `${e.apiVersion}/configs/global`;
        };
        e.getStorageApi = function(t) {
            return `${e.apiVersion}/configs/storage${t ? `/${t}` : ""}`;
        };
        f.default(e, "submitting", s, h.default(e));
        return e;
    }
    m.default(u, [
        {
            key: "fetchConfigs",
            value: async function() {
                let t;
                this.configs.isLoading = true;
                t = await module52.to(request.get(this.getConfigsApi()), {}, {}, function(e, t) {
                    if (e) {
                        return {};
                    }
                    return t;
                });
                this.configs = {
                    data: t,
                    isLoading: false
                };
                return t;
            }
        },
        {
            key: "fetchStorage",
            value: async function() {
                let t;
                this.storage.isLoading = true;
                t = await module52.to(request.get(this.getStorageApi(this.name), {}, {}, function(e, t) {
                    if (e) {
                        return {};
                    }
                    return t;
                }));
                this.storage = {
                    data: t,
                    isLoading: false
                };
                return t;
            }
        },
        {
            key: "createConfigs",
            value: function(e) {
                return this.submitting(request.post(this.getConfigsApi(), e));
            }
        },
        {
            key: "updateConfigs",
            value: function(e) {
                return this.submitting(request.put(this.getConfigsApi(), e));
            }
        },
        {
            key: "createStorage",
            value: function(e) {
                return this.submitting(request.post(this.getStorageApi(), e));
            }
        },
        {
            key: "updateStorage",
            value: function(e) {
                return this.submitting(request.put(this.getStorageApi(this.name), e));
            }
        },
        {
            key: "deleteStorage",
            value: function() {
                return this.submitting(request.delete(this.getStorageApi(this.name)));
            }
        },
        {
            key: "verifyStorage",
            value: function(e) {
                return this.submitting(request.post(`${this.getStorageApi(this.name)}/verify`, e));
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "kapis/monitoring.observability.kubesphere.io/v1alpha1";
            }
        }
    ]);
    return u;
})(module20(require("./module-884.js")).default);
l = _.default(u.prototype, "isSubmitting", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
o = _.default(u.prototype, "configs", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: {},
            isLoading: false
        };
    }
});
c = _.default(u.prototype, "storage", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: {},
            isLoading: false
        };
    }
});
i = _.default(u.prototype, "name", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "remote";
    }
});
_.default(u.prototype, "fetchConfigs", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchConfigs"), u.prototype);
s = _.default(u.prototype, "submitting", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.isSubmitting = true;
            setTimeout(()=>{
                t.catch(()=>{}).finally(()=>{
                    _this.isSubmitting = false;
                });
            }, 500);
            return t;
        };
    }
});
_.default(u.prototype, "fetchStorage", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchStorage"), u.prototype);
_.default(u.prototype, "createConfigs", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "createConfigs"), u.prototype);
_.default(u.prototype, "updateConfigs", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "updateConfigs"), u.prototype);
_.default(u.prototype, "createStorage", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "createStorage"), u.prototype);
_.default(u.prototype, "updateStorage", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "updateStorage"), u.prototype);
_.default(u.prototype, "deleteStorage", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "deleteStorage"), u.prototype);
_.default(u.prototype, "verifyStorage", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "verifyStorage"), u.prototype);
exports.default = u;
