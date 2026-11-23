"use strict";
const module20 = require("utils/babel-helpers/interopRequireDefault").default;
require("./module-12.js");
require("./module-5.js");
require("./module-11.js");
require("./module-6.js");
require("./module-16.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-23.js");
require("./module-17.js");
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
require("./module-7.js");
const n = module20(require("./module-41.js"));
const l = module20(require("./module-31.js").default);
require("./module-41.js");
let u;
let o;
const i = module20(require("utils/babel-helpers/asyncToGenerator").default);
const c = module20(require("./module-65.js").default);
const s = module20(require("./module-36.js").default);
const f = module20(require("./module-37.js").default);
const d = module20(require("./module-88.js").default);
const p = module20(require("./module-55.js").default);
const m = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const h = module20(require("./module-51.js"));
const v = module20(require("./module-49.js").default);
module20(require("utils/babel-helpers/initializerWarningHelper").default);
const g = module20(require("./module-26.js").default);
const module14 = require("./module-14.js");
u = ((e)=>{
    p.default(r, e);
    var a = ((e)=>{
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
    })(r);
    function r(...n) {
        let e;
        s.default(this, r);
        e = a.call(this, ...n);
        e.module = "apptemplates";
        c.default(e, "allTemplates", o, d.default(e));
        e.getUrl = function({ cluster = "", name }) {
            return `/apis${cluster && `/clusters/${cluster}`}/apps.edgewize.io/v1alpha1/${e.module}/${name}`;
        };
        e.getResourceUrl = function({ cluster = "", workspace = "" } = {}) {
            return `/kapis${cluster && `/clusters/${cluster}`}/apps.edgewize.io/v1alpha1${workspace && `/workspaces/${workspace}`}/${e.module}`;
        };
        return e;
    }
    f.default(r, [
        {
            key: "fetchDetail",
            value: async function(t) {
                let a;
                let r;
                this.isLoading = true;
                a = await request.get(`${this.getResourceUrl(t)}/${t.name}`);
                r = {
                    ...t,
                    ...this.mapper(a)
                };
                this.detail = r;
                this.isLoading = false;
                return r;
            }
        },
        {
            key: "create",
            value: function({ cluster }, t) {
                const name = g.default(t, "metadata.name");
                const n = this.getUrl({
                    cluster,
                    name
                });
                return this.submitting(request.post(n, t));
            }
        },
        {
            key: "delete",
            value: function({ cluster, name }) {
                const r = this.getUrl({
                    cluster,
                    name
                });
                return this.submitting(request.delete(r));
            }
        }
    ]);
    return r;
})(module20(require("stores/base")).default);
o = v.default(u.prototype, "allTemplates", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
v.default(u.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchDetail"), u.prototype);
v.default(u.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "create"), u.prototype);
v.default(u.prototype, "delete", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "delete"), u.prototype);
exports.default = u;
