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
const v = module20(require("unpacked/module-26.js").default);
const module14 = require("unpacked/module-14.js");
const module52 = require("utils/index");
const E = module20(require("utils/object.mapper"));
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
        e.module = "clusters";
        i.default(e, "parameters", u, f.default(e));
        return e;
    }
    s.default(r, [
        {
            key: "fetchParameters",
            value: async function() {
                let t;
                t = await request.get("api/v1/namespaces/kubekey-system/configmaps/kubekey-parameters", {}, {}, function() {});
                this.parameters = module52.safeParseJSON(v.default(t, "data['parameters.json']", ""), {});
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "apis/kubekey.kubesphere.io/v1alpha1";
            }
        },
        {
            key: "mapper",
            get: function() {
                return E.default.kkclusters;
            }
        }
    ]);
    return r;
})(module20(require("stores/base")).default);
u = h.default(l.prototype, "parameters", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
h.default(l.prototype, "fetchParameters", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchParameters"), l.prototype);
exports.default = l;
