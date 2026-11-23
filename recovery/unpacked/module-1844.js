"use strict";
const module20 = require("./module-20.js").default;
require("./module-12.js");
require("./module-5.js");
require("./module-11.js");
require("./module-6.js");
require("./module-84.js");
require("./module-16.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-23.js");
require("./module-17.js");
require("./module-85.js");
require("./module-7.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("./module-12.js");
require("./module-45.js");
require("./module-5.js");
require("./module-11.js");
require("./module-6.js");
require("./module-84.js");
require("./module-28.js");
require("./module-42.js");
require("./module-16.js");
require("./module-34.js");
require("./module-15.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-22.js");
require("./module-23.js");
require("./module-57.js");
require("./module-17.js");
require("./module-85.js");
require("./module-7.js");
const n = module20(require("./module-41.js"));
require("./module-41.js");
let l;
let u;
const o = module20(require("./module-44.js").default);
const i = module20(require("./module-31.js").default);
const c = module20(require("./module-65.js").default);
const s = module20(require("./module-36.js").default);
const f = module20(require("./module-37.js").default);
const d = module20(require("./module-88.js").default);
const p = module20(require("./module-55.js").default);
const m = module20(require("./module-56.js").default);
const h = module20(require("./module-51.js"));
const v = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const g = module20(require("./module-63.js").default);
const y = module20(require("./module-26.js").default);
const E = module20(require("./module-136.js").default);
const module14 = require("./module-14.js");
const module72 = require("./module-72.js");
const module52 = require("./module-52.js");
l = ((e)=>{
    p.default(i, e);
    var l = ((e)=>{
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
            const r = h.default(e);
            if (t) {
                const n = h.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return m.default(this, a);
        };
    })(i);
    function i(...a_1) {
        let e;
        s.default(this, i);
        e = l.call(this, ...a_1);
        e.module = "licenses";
        c.default(e, "licenseInfo", u, d.default(e));
        e.handleLicenseInfo = function(e) {
            let isOverLimit = false;
            let isUnAuthorized = false;
            let isExpired = false;
            let unExpired = false;
            const l = E.default(e);
            const u = y.default(l, "violation.type");
            const o = y.default(l, "licenseType");
            const i = y.default(l, "maEndTime");
            const c = y.default(l, "serverTime");
            const s = i ? module52.getLocalTime(i).format("x") : module52.getLocalTime(y.default(l, "endTime", new Date)).format("x");
            const f = c ? module52.getLocalTime(c).format("x") : (new Date).getTime();
            const d = o === "subscription" ? module52.getLocalTime(y.default(l, "endTime", new Date)).format("x") : s;
            const p = d - f >= 0 ? (d - f) / 86400 / 1000 : d - f;
            const dueDate = p >= 0 ? p >= 0 && p < 1 ? Math.ceil(p) : Math.floor(p) : d - f;
            if (module72.LICENSE_UNAUTHORIZED_STATUS_MAP.includes(u)) {
                isUnAuthorized = true;
            } else if (u === "Time expired" && o === "subscription") {
                isExpired = true;
            } else if (module72.LICENSE_OVERLIMIT_STATUS_MAP.includes(u)) {
                isOverLimit = true;
            } else if (dueDate > 0 && dueDate <= 30 || dueDate <= 0 && o !== "subscription") {
                unExpired = true;
            }
            return {
                showLicenseTip: module72.STATUS_MAPPER.includes(u),
                isExpired,
                isUnAuthorized,
                isOverLimit,
                unExpired,
                dueDate,
                ...l
            };
        };
        return e;
    }
    f.default(i, [
        {
            key: "getUrl",
            value: function({ name }) {
                return `${this.apiVersion}/${this.module}/${name}`;
            }
        },
        {
            key: "fetchLicense",
            value: async function() {
                let a;
                let t = {};
                a = await request.get(this.getUrl({
                    name: "ks-license"
                }), {}, {}, function() {
                    return {};
                });
                if (!g.default(a)) {
                    t = {
                        ...this.mapper(a)
                    };
                }
                this.licenseInfo = this.handleLicenseInfo(t);
                return module14.toJS(this.licenseInfo);
            }
        },
        {
            key: "updateLicense",
            value: async function(t) {
                let a;
                a = {
                    data: t
                };
                return this.submitting(request.put(this.getUrl({
                    name: "ks-license"
                }), a));
            }
        },
        {
            key: "invalidLicense",
            value: async function(t) {
                let a;
                a = {
                    data: t
                };
                return this.submitting(request.put(`${this.getUrl({
                    name: "ks-license"
                })}?validate=true`, a));
            }
        }
    ]);
    return i;
})(module20(require("./module-68.js")).default);
u = v.default(l.prototype, "licenseInfo", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
v.default(l.prototype, "fetchLicense", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchLicense"), l.prototype);
v.default(l.prototype, "updateLicense", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "updateLicense"), l.prototype);
v.default(l.prototype, "invalidLicense", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "invalidLicense"), l.prototype);
exports.default = l;
