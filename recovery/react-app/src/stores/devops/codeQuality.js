"use strict";
require("unpacked/module-15.js");
const module20 = require("utils/babel-helpers/interopRequireDefault").default;
require("unpacked/module-5.js");
require("unpacked/module-18.js");
require("unpacked/module-16.js");
require("unpacked/module-4.js");
require("unpacked/module-22.js");
require("unpacked/module-196.js");
require("unpacked/module-23.js");
require("unpacked/module-17.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("unpacked/module-45.js");
require("unpacked/module-5.js");
require("unpacked/module-18.js");
require("unpacked/module-42.js");
require("unpacked/module-16.js");
require("unpacked/module-4.js");
require("unpacked/module-22.js");
require("unpacked/module-196.js");
require("unpacked/module-23.js");
require("unpacked/module-57.js");
require("unpacked/module-17.js");
const a = module20(require("unpacked/module-41.js"));
require("unpacked/module-41.js");
let o;
let i;
let l;
let s;
const u = module20(require("utils/babel-helpers/asyncToGenerator").default);
const c = module20(require("unpacked/module-65.js").default);
const d = module20(require("unpacked/module-36.js").default);
const f = module20(require("unpacked/module-88.js").default);
const p = module20(require("unpacked/module-55.js").default);
const h = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const m = module20(require("unpacked/module-51.js"));
const v = module20(require("unpacked/module-49.js").default);
module20(require("utils/babel-helpers/initializerWarningHelper").default);
const g = module20(require("unpacked/module-60.js").default);
const module14 = require("unpacked/module-14.js");
const b = module20(require("utils/object.mapper"));
o = ((e)=>{
    p.default(r, e);
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
            let r;
            const n = m.default(e);
            if (t) {
                const a = m.default(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return h.default(this, r);
        };
    })(r);
    function r(...a) {
        let e;
        d.default(this, r);
        e = t.call(this, ...a);
        c.default(e, "detail", i, f.default(e));
        c.default(e, "isLoading", l, f.default(e));
        c.default(e, "fetchDetail", s, f.default(e));
        return e;
    }
    return r;
})(module20(require("stores/devops")).default);
i = v.default(o.prototype, "detail", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
l = v.default(o.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return true;
    }
});
s = v.default(o.prototype, "fetchDetail", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (r)=>{
            let devops;
            let o;
            let i;
            let cluster;
            let s;
            let u;
            let c;
            devops = r.devops;
            o = r.branch;
            i = r.name;
            cluster = r.cluster;
            s = o ? `${_this.getDevopsUrlV2({
                cluster,
                devops
            })}pipelines/${i}/branches/${encodeURIComponent(o)}/sonarstatus ` : `${_this.getDevopsUrlV2({
                cluster,
                devops
            })}pipelines/${i}/sonarstatus`;
            _this.isLoading = true;
            u = await request.get(s, null, null, function() {
                return "no  sonarqube";
            }).finally(()=>{
                _this.isLoading = false;
            });
            c = g.default(u) ? u : [];
            _this.detail = c.length ? c.map(b.default.codequality)[0] : {};
        };
    }
});
exports.default = o;
