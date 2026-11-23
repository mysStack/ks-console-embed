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
let c;
let s;
const f = module20(require("utils/babel-helpers/asyncToGenerator").default);
const d = module20(require("unpacked/module-65.js").default);
const p = module20(require("unpacked/module-36.js").default);
const m = module20(require("unpacked/module-37.js").default);
const h = module20(require("unpacked/module-88.js").default);
const v = module20(require("unpacked/module-55.js").default);
const g = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const y = module20(require("unpacked/module-51.js"));
const E = module20(require("unpacked/module-49.js").default);
module20(require("utils/babel-helpers/initializerWarningHelper").default);
const module14 = require("unpacked/module-14.js");
const _ = module20(require("unpacked/module-903.js").default);
const O = module20(require("unpacked/module-26.js").default);
l = ((e)=>{
    v.default(r, e);
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
            const r = y.default(e);
            if (t) {
                const n = y.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return g.default(this, a);
        };
    })(r);
    function r(...n) {
        let e;
        p.default(this, r);
        e = a.call(this, ...n);
        d.default(e, "startTime", u, h.default(e));
        d.default(e, "endTime", o, h.default(e));
        d.default(e, "interval", i, h.default(e));
        d.default(e, "histograms", c, h.default(e));
        d.default(e, "logsCount", s, h.default(e));
        return e;
    }
    m.default(r, [
        {
            key: "fetch",
            value: async function() {
                let t;
                let a;
                let r;
                const l = arguments;
                t = l.length > 0 && l[0] !== undefined ? l[0] : {};
                a = {
                    operation: "histogram",
                    start_time: this.startTime,
                    end_time: this.endTime,
                    interval: this.interval
                };
                r = await this.request(_.default(a, t));
                this.histograms = O.default(r, "histogram.histograms", []) || [];
                this.logsCount = O.default(r, "histogram.total", 0);
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
u = E.default(l.prototype, "startTime", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
o = E.default(l.prototype, "endTime", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
i = E.default(l.prototype, "interval", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "15m";
    }
});
c = E.default(l.prototype, "histograms", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
s = E.default(l.prototype, "logsCount", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
E.default(l.prototype, "fetch", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetch"), l.prototype);
exports.default = l;
