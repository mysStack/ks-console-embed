import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-73.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-442.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
import "./module-31.js";
import module58 from "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module63 from "./module-63.js";
import { fillEmptyMetrics } from "./module-795.js";
import { to } from "./module-52.js";
import defaultExport from "./module-847.js";
const y = ((defaultExport_1)=>{
    module55(r, defaultExport_1);
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
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(r);
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.resourceName = "gateways";
        e.getGatewayParams = function({ resources = [], metrics = [], ...rest } = {}) {
            const u = {
                ...rest
            };
            if (!module63(resources)) {
                u.resources_filter = `${resources.join("|")}\$`;
            }
            if (!module63(metrics)) {
                u.metrics_filter = `${metrics.join("|")}\$`;
            }
            u.time = Math.floor(Date.now() / 1000);
            return u;
        };
        return e;
    }
    module37(r, [
        {
            key: "fetchGatewayMetrics",
            value: async function(t) {
                let r;
                let u;
                let c;
                let s;
                let f;
                let d;
                let p;
                let v;
                ({ autoRefresh: r = false, more: u = false, fillZero: c = true } = t);
                s = module58(t, [
                    "autoRefresh",
                    "more",
                    "fillZero"
                ]);
                if (r) {
                    s.last = true;
                    this.isRefreshing = true;
                } else {
                    this.isLoading = true;
                }
                if (s.cluster) {
                    this.cluster = s.cluster;
                }
                f = this.getGatewayParams(s);
                d = this.getApi(s);
                p = await to(request.get(d, f));
                v = this.getResult(p);
                if (r) {
                    v = this.getRefreshResult(v, this.data);
                }
                if (u) {
                    v = this.getMoreResult(v, this.data);
                }
                this.data = c ? fillEmptyMetrics(f, v) : v;
                this.isLoading = false;
                this.isRefreshing = false;
                return v;
            }
        }
    ]);
    return r;
})(defaultExport);
export default y;
