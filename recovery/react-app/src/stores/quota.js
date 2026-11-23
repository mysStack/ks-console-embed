"use strict";
require("unpacked/module-15.js");
const module20 = require("utils/babel-helpers/interopRequireDefault").default;
require("unpacked/module-5.js");
require("unpacked/module-9.js");
require("unpacked/module-4.js");
require("unpacked/module-23.js");
require("unpacked/module-17.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("unpacked/module-45.js");
require("unpacked/module-5.js");
require("unpacked/module-42.js");
require("unpacked/module-9.js");
require("unpacked/module-4.js");
require("unpacked/module-22.js");
require("unpacked/module-23.js");
require("unpacked/module-57.js");
require("unpacked/module-17.js");
const n = module20(require("unpacked/module-41.js"));
require("unpacked/module-41.js");
let l;
let u;
const o = module20(require("utils/babel-helpers/asyncToGenerator").default);
const i = module20(require("unpacked/module-65.js").default);
const c = module20(require("unpacked/module-36.js").default);
const s = module20(require("unpacked/module-37.js").default);
const f = module20(require("unpacked/module-88.js").default);
const d = module20(require("unpacked/module-55.js").default);
const p = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const m = module20(require("unpacked/module-51.js"));
const h = module20(require("unpacked/module-49.js").default);
module20(require("utils/babel-helpers/initializerWarningHelper").default);
const module14 = require("unpacked/module-14.js");
l = ((e)=>{
    d.default(r, e);
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
            const r = m.default(e);
            if (t) {
                const n = m.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return p.default(this, a);
        };
    })(r);
    function r(...n) {
        let e;
        c.default(this, r);
        e = a.call(this, ...n);
        e.module = "resourcequotas";
        i.default(e, "data", u, f.default(e));
        return e;
    }
    s.default(r, [
        {
            key: "fetch",
            value: async function(t) {
                let a;
                this.isLoading = true;
                a = await request.get(`kapis/resources.kubesphere.io/v1alpha2${this.getPath(t)}/quotas`);
                this.data = a.data;
                this.isLoading = false;
                return a;
            }
        }
    ]);
    return r;
})(module20(require("stores/base")).default);
u = h.default(l.prototype, "data", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
h.default(l.prototype, "fetch", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetch"), l.prototype);
exports.default = l;
