"use strict";
require("unpacked/module-15.js");
const module20 = require("utils/babel-helpers/interopRequireDefault").default;
require("unpacked/module-5.js");
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
require("unpacked/module-4.js");
require("unpacked/module-22.js");
require("unpacked/module-23.js");
require("unpacked/module-57.js");
require("unpacked/module-17.js");
const n = module20(require("unpacked/module-41.js"));
const l = module20(require("unpacked/module-58.js").default);
require("unpacked/module-41.js");
let u;
let o;
const i = module20(require("utils/babel-helpers/asyncToGenerator").default);
const c = module20(require("unpacked/module-65.js").default);
const s = module20(require("unpacked/module-36.js").default);
const f = module20(require("unpacked/module-88.js").default);
const d = module20(require("unpacked/module-55.js").default);
const p = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const m = module20(require("unpacked/module-51.js"));
const h = module20(require("unpacked/module-49.js").default);
module20(require("utils/babel-helpers/initializerWarningHelper").default);
const module14 = require("unpacked/module-14.js");
const module1048 = require("configs/openpitrix/version");
u = ((e)=>{
    d.default(a, e);
    var t = ((e)=>{
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
    })(a);
    function a(...n) {
        let e;
        s.default(this, a);
        e = t.call(this, ...n);
        e.resourceName = "versions";
        e.sortKey = "sequence";
        e.defaultStatus = module1048.DEFAULT_QUERY_STATUS;
        c.default(e, "handle", o, f.default(e));
        return e;
    }
    return a;
})(module20(require("stores/openpitrix/base")).default);
o = h.default(u.prototype, "handle", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return i.default(n.default.mark(function* t() {
            let a;
            let app_id;
            let version_id;
            let workspace;
            let i;
            let c;
            const s = arguments;
            a = s.length > 0 && s[0] !== undefined ? s[0] : {};
            app_id = a.app_id;
            version_id = a.version_id;
            workspace = a.workspace;
            i = l.default(a, [
                "app_id",
                "version_id",
                "workspace"
            ]);
            c = _this.getUrl({
                app_id,
                version_id,
                workspace,
                name: "action"
            });
            return yield _this.submitting(request.post(c, i));
        }));
    }
});
exports.default = u;
