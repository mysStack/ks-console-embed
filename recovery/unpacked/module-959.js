import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-31.js";
import "./module-41.js";
import "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module14 from "./module-14.js";
import { to } from "./module-52.js";
import { getLastMonitoringData } from "./module-795.js";
import module847 from "./module-847.js";
let u;
let o;
let i;
const metrics = [
    "namespace_alerts_critical_total",
    "namespace_alerts_warning_total",
    "namespace_alerts_error_total",
    "namespace_alerts_total",
    "namespace_alerts_firing_total",
    "namespace_alerts_pending_total"
];
u = ((e)=>{
    module55(n, e);
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
    })(n);
    function n(...a) {
        let e;
        module36(this, n);
        e = r.call(this, ...a);
        module65(e, "baseResourcesSummary", o, module88(e));
        module65(e, "alertData", i, module88(e));
        e.getApi = function() {
            return `${e.apiVersion}/namespace_metrics`;
        };
        return e;
    }
    module37(n, [
        {
            key: "getBaseResourcesSummary",
            value: async function(t) {
                let a;
                let r;
                let n;
                let u;
                let o;
                let i;
                a = t.cluster;
                r = t.namespace;
                this.baseResourcesSummary.isLoading = true;
                n = `/kapis/resources.kubesphere.io/v1alpha3/klusters/${a}/namespaces/${r}/metrics`;
                u = await to(request.get(n));
                o = this.getResult(u);
                i = getLastMonitoringData(o);
                this.baseResourcesSummary.isLoading = false;
                this.baseResourcesSummary.data = i;
                return i;
            }
        },
        {
            key: "fetchAlertData",
            value: async function() {
                let t;
                const a = arguments;
                t = a.length > 0 && a[0] !== undefined ? a[0] : {};
                this.alertData.isLoading = true;
                await this.fetchMetrics({
                    metrics,
                    ...t
                });
                this.alertData = {
                    isLoading: false,
                    data: this.data
                };
            }
        }
    ]);
    return n;
})(module847);
o = module49(u.prototype, "baseResourcesSummary", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            isLoading: true,
            data: {}
        };
    }
});
i = module49(u.prototype, "alertData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            isLoading: false,
            data: {}
        };
    }
});
module49(u.prototype, "getBaseResourcesSummary", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "getBaseResourcesSummary"), u.prototype);
module49(u.prototype, "fetchAlertData", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchAlertData"), u.prototype);
export default u;
