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
let o;
let i;
const c = module20(require("utils/babel-helpers/asyncToGenerator").default);
const s = module20(require("unpacked/module-65.js").default);
const f = module20(require("unpacked/module-36.js").default);
const d = module20(require("unpacked/module-37.js").default);
const p = module20(require("unpacked/module-88.js").default);
const m = module20(require("unpacked/module-55.js").default);
const h = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const v = module20(require("unpacked/module-51.js"));
const g = module20(require("unpacked/module-49.js").default);
module20(require("utils/babel-helpers/initializerWarningHelper").default);
const module14 = require("unpacked/module-14.js");
const E = module20(require("unpacked/module-903.js").default);
const b = module20(require("unpacked/module-26.js").default);
l = ((e)=>{
    m.default(r, e);
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
            const r = v.default(e);
            if (t) {
                const n = v.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return h.default(this, a);
        };
    })(r);
    function r(...n) {
        let e;
        f.default(this, r);
        e = a.call(this, ...n);
        s.default(e, "logsCount", u, p.default(e));
        s.default(e, "startTime", o, p.default(e));
        s.default(e, "namespaces", i, p.default(e));
        return e;
    }
    d.default(r, [
        {
            key: "fetch",
            value: async function() {
                let t;
                let a;
                let start_time;
                let end_time;
                let u;
                let o;
                let i;
                const c = arguments;
                t = c.length > 0 && c[0] !== undefined ? c[0] : {};
                a = c.length > 1 ? c[1] : undefined;
                start_time = new Date((new Date).setHours(0, 0, 0, 0)).getTime();
                end_time = (new Date).getTime();
                u = {
                    operation: "statistics",
                    start_time,
                    end_time
                };
                o = E.default(u, t);
                i = await this.request(o, "get", a);
                this.containersCount = b.default(i, "statistics.containers", 0);
                this.logsCount = b.default(i, "statistics.logs", 0);
                this.startTime = start_time;
                this.namespaces = b.default(i, "statistics.namespaces", []) || [];
            }
        },
        {
            key: "handleResult",
            value: function(e) {
                return e;
            }
        }
    ]);
    return r;
})(module20(require("stores/logging/index")).default);
u = g.default(l.prototype, "logsCount", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
o = g.default(l.prototype, "startTime", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
i = g.default(l.prototype, "namespaces", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
g.default(l.prototype, "fetch", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetch"), l.prototype);
exports.default = l;
