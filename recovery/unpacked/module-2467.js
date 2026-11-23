"use strict";
require("./module-15.js");
const module20 = require("./module-20.js").default;
require("./module-5.js");
require("./module-4.js");
require("./module-23.js");
require("./module-17.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("./module-45.js");
require("./module-5.js");
require("./module-42.js");
require("./module-4.js");
require("./module-22.js");
require("./module-23.js");
require("./module-57.js");
require("./module-17.js");
const n = module20(require("./module-41.js"));
const l = module20(require("./module-58.js").default);
require("./module-41.js");
let u;
let o;
let i;
const c = module20(require("./module-44.js").default);
const s = module20(require("./module-65.js").default);
const f = module20(require("./module-36.js").default);
const d = module20(require("./module-88.js").default);
const p = module20(require("./module-55.js").default);
const m = module20(require("./module-56.js").default);
const h = module20(require("./module-51.js"));
const v = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const module14 = require("./module-14.js");
u = ((e)=>{
    p.default(a, e);
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
            const r = h.default(e);
            if (t) {
                const n = h.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return m.default(this, a);
        };
    })(a);
    function a(...n) {
        let e;
        f.default(this, a);
        e = t.call(this, ...n);
        e.resourceName = "categories";
        e.getUrl = function({ category_id } = {}) {
            if (category_id) {
                return `${e.baseUrl}/${e.resourceName}/${category_id}`;
            }
            return `${e.baseUrl}/${e.resourceName}`;
        };
        s.default(e, "update", o, d.default(e));
        s.default(e, "delete", i, d.default(e));
        return e;
    }
    return a;
})(module20(require("./module-458.js")).default);
o = v.default(u.prototype, "update", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return c.default(n.default.mark(function* t() {
            let a;
            let category_id;
            let u;
            const o = arguments;
            a = o.length > 0 && o[0] !== undefined ? o[0] : {};
            category_id = a.category_id;
            u = l.default(a, [
                "category_id"
            ]);
            yield _this.submitting(request.patch(_this.getUrl({
                category_id
            }), u));
        }));
    }
});
i = v.default(u.prototype, "delete", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ category_id }) {
            return _this.submitting(request.delete(_this.getUrl({
                category_id
            }), {}));
        };
    }
});
exports.default = u;
