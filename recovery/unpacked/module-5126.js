"use strict";
require("./module-15.js");
const module20 = require("./module-20.js").default;
require("./module-5.js");
require("./module-9.js");
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
require("./module-9.js");
require("./module-4.js");
require("./module-23.js");
require("./module-57.js");
require("./module-17.js");
let n;
let u;
const o = module20(require("./module-65.js").default);
const l = module20(require("./module-36.js").default);
const i = module20(require("./module-37.js").default);
const c = module20(require("./module-88.js").default);
const s = module20(require("./module-55.js").default);
const f = module20(require("./module-56.js").default);
const d = module20(require("./module-51.js"));
const p = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const module14 = require("./module-14.js");
n = ((e)=>{
    s.default(a, e);
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
            const r = d.default(e);
            if (t) {
                const n = d.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return f.default(this, a);
        };
    })(a);
    function a(...n) {
        let e;
        l.default(this, a);
        e = t.call(this, ...n);
        o.default(e, "theme", u, c.default(e));
        return e;
    }
    i.default(a, [
        {
            key: "getImagePath",
            value: function(e = "") {
                if (e !== "") {
                    return `/theme/static/images/${e}`;
                }
                return "/theme/static/images";
            }
        },
        {
            key: "updateTheme",
            value: function(e) {
                return this.submitting(request.put(this.themePath, e));
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "/kapis/config.kubesphere.io/v1alpha2";
            }
        },
        {
            key: "themePath",
            get: function() {
                return `${this.apiVersion}/configs/theme`;
            }
        }
    ]);
    return a;
})(module20(require("./module-68.js")).default);
u = p.default(n.prototype, "theme", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
p.default(n.prototype, "updateTheme", [
    module14.action
], Object.getOwnPropertyDescriptor(n.prototype, "updateTheme"), n.prototype);
exports.default = n;
