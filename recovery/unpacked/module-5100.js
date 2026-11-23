"use strict";
require("./module-15.js");
const module20 = require("./module-20.js").default;
require("./module-5.js");
require("./module-16.js");
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
require("./module-16.js");
require("./module-4.js");
require("./module-22.js");
require("./module-23.js");
require("./module-57.js");
require("./module-17.js");
const a = module20(require("./module-41.js"));
require("./module-41.js");
let o;
let i;
let l;
const s = module20(require("./module-44.js").default);
const u = module20(require("./module-65.js").default);
const c = module20(require("./module-36.js").default);
const d = module20(require("./module-37.js").default);
const f = module20(require("./module-88.js").default);
const p = module20(require("./module-55.js").default);
const h = module20(require("./module-56.js").default);
const m = module20(require("./module-51.js"));
const v = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const g = module20(require("./module-26.js").default);
const module14 = require("./module-14.js");
o = ((e)=>{
    p.default(n, e);
    var r = ((e)=>{
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
    })(n);
    function n(...a) {
        let e;
        c.default(this, n);
        e = r.call(this, ...a);
        u.default(e, "stepLogData", i, f.default(e));
        u.default(e, "handleResetStepLog", l, f.default(e));
        return e;
    }
    d.default(n, [
        {
            key: "getStepLog",
            value: async function(t) {
                let devops;
                let cluster;
                let i;
                let l;
                let s;
                let u;
                let c;
                let d;
                let headers;
                let p;
                let h;
                devops = t.devops;
                cluster = t.cluster;
                i = t.name;
                l = t.branch;
                s = t.runId;
                u = t.nodeId;
                c = t.stepId;
                d = this.stepLogData.start ? `?start=${this.stepLogData.start}` : "";
                headers = l ? {} : {
                    "x-file-size-limit": 5242880
                };
                p = await request.defaults({
                    url: `${this.getDevopsUrlV2({
                        cluster,
                        devops
                    })}pipelines/${decodeURIComponent(i)}${l ? `/branches/${encodeURIComponent(l)}` : ""}/runs/${s}/nodes/${u}/steps/${c}/log/${d}`,
                    options: {
                        headers
                    },
                    handler: function(e) {
                        if (e.status === 200) {
                            return e.text().then((data)=>({
                                    data,
                                    headers: e.headers
                                }));
                        }
                    }
                });
                h = this.stepLogData.start ? this.stepLogData.log : "";
                this.stepLogData = {
                    log: h + g.default(p, "data", ""),
                    start: p.headers.get("x-text-size"),
                    hasMore: Boolean(p.headers.get("x-more-data"))
                };
                if (p.headers.get("X-File-Size-Limit-Out") === "true" || this.log?.length > 5242880) {
                    this.stepLogData.hasMore = false;
                    this.stepLogData.log += "\n\n*****************************************************************   \n*                                                               * \n* The log is too large, please download it to view the details. *\n*                                                               * \n*****************************************************************    \n      ";
                }
            }
        }
    ]);
    return n;
})(module20(require("./module-323.js")).default);
i = v.default(o.prototype, "stepLogData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            log: "",
            start: 0,
            hasMore: false
        };
    }
});
l = v.default(o.prototype, "handleResetStepLog", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.stepLogData = {
                log: "",
                start: 0,
                hasMore: false
            };
        };
    }
});
exports.default = o;
