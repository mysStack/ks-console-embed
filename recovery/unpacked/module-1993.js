"use strict";
require("./module-15.js");
const module20 = require("./module-20.js").default;
require("./module-5.js");
require("./module-18.js");
require("./module-16.js");
require("./module-4.js");
require("./module-22.js");
require("./module-196.js");
require("./module-23.js");
require("./module-17.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("./module-45.js");
require("./module-5.js");
require("./module-18.js");
require("./module-42.js");
require("./module-16.js");
require("./module-4.js");
require("./module-22.js");
require("./module-196.js");
require("./module-23.js");
require("./module-57.js");
require("./module-17.js");
const a = module20(require("./module-41.js"));
require("./module-41.js");
let o;
let i;
let l;
let s;
const u = module20(require("./module-44.js").default);
const c = module20(require("./module-65.js").default);
const d = module20(require("./module-36.js").default);
const f = module20(require("./module-88.js").default);
const p = module20(require("./module-55.js").default);
const h = module20(require("./module-56.js").default);
const m = module20(require("./module-51.js"));
const v = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const g = module20(require("./module-60.js").default);
const module14 = require("./module-14.js");
const b = module20(require("./module-105.js"));
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
})(module20(require("./module-323.js")).default);
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
