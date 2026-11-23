import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-30.js";
import "unpacked/module-9.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-38.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import module14 from "unpacked/module-14.js";
import module26 from "unpacked/module-26.js";
import module_1015 from "stores/alerting/policy";
let u;
u = ((module_1015_1)=>{
    module55(u, module_1015_1);
    let t;
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
            let a;
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(u);
    function u(...a_1) {
        let e;
        module36(this, u);
        e = r.call(this, ...a_1);
        e.getRulePath = function() {
            return "globalrulegroups";
        };
        e.getListUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/${e.getRulePath(t)}`;
        };
        e.fetchMetric = (()=>{
            const e = module44(module41.mark(function e(t) {
                let expr;
                let step;
                let start;
                let end;
                let o;
                let c;
                let i;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                expr = t.expr;
                                step = t.step;
                                start = t.start;
                                end = t.end;
                                o = t.cluster;
                                c = t.namespace;
                                if (expr) {
                                    e.next = 3;
                                    break;
                                }
                                return e.abrupt("return", []);
                            case 3:
                                e.next = 5;
                                return request.get("kapis/monitoring.kubesphere.io/v1beta1/targets/query", {
                                    cluster: o,
                                    namespace: c,
                                    expr,
                                    step,
                                    start,
                                    end
                                }, null, function() {});
                            case 5:
                                i = e.sent;
                                return e.abrupt("return", module26(i, "data.result", []));
                            case 7:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        })();
        return e;
    }
    module37(u, [
        {
            key: "fetchCount",
            value: async function() {
                let t;
                t = await Promise.all([
                    request.get(this.getResourceUrl(), {
                        page: 1,
                        limit: 1,
                        builtin: false
                    }),
                    request.get(this.getResourceUrl({
                        type: "builtin"
                    }), {
                        page: 1,
                        limit: 1,
                        builtin: true
                    })
                ]);
                this.ruleCount = module26(t, "0.totalItems", 0);
                this.builtinRuleCount = module26(t, "1.totalItems", 0);
            }
        },
        {
            key: "fetchMetadata",
            value: (t = module44(module41.mark(function e(t) {
                let a;
                let r;
                let u;
                let l;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = t.cluster;
                                r = t.namespace;
                                e.next = 3;
                                return request.get("kapis/monitoring.kubesphere.io/v1beta1/targets/metadata", {
                                    cluster: a,
                                    namespace: r
                                });
                            case 3:
                                e.t0 = e.sent;
                                if (e.t0) {
                                    e.next = 6;
                                    break;
                                }
                                e.t0 = {
                                    data: []
                                };
                            case 6:
                                u = e.t0;
                                l = u.data;
                                this.targetsMetadata = l || [];
                            case 9:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return t.apply(this, arguments);
            })
        }
    ]);
    return u;
})(module_1015);
module49(u.prototype, "fetchCount", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchCount"), u.prototype);
module49(u.prototype, "fetchMetadata", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchMetadata"), u.prototype);
export default u;
