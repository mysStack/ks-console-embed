import "./module-15.js";
import "./module-5.js";
import "./module-9.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import module58 from "./module-58.js";
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
import module26 from "./module-26.js";
import { to } from "./module-52.js";
import module847 from "./module-847.js";
import module323 from "./module-323.js";
let u;
let o;
let i;
function S(e) {
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
}
u = ((e)=>{
    module55(h, e);
    var u = S(h);
    function h(...a) {
        let e;
        module36(this, h);
        e = u.call(this, ...a);
        module65(e, "statistics", o, module88(e));
        module65(e, "resourceMetrics", i, module88(e));
        return e;
    }
    module37(h, [
        {
            key: "fetchStatistics",
            value: async function(t) {
                let a;
                let cluster;
                let n;
                let u;
                let o;
                let i;
                const c = arguments;
                a = c.length > 1 && c[1] !== undefined ? c[1] : {};
                cluster = a.cluster;
                this.statistics.isLoading = true;
                n = {
                    type: "statistics"
                };
                u = this.getApi({
                    workspace: t,
                    cluster
                });
                o = await to(request.get(u, n));
                i = this.getResult(o);
                this.statistics = {
                    data: i,
                    isLoading: false
                };
                return i;
            }
        },
        {
            key: "getDevopsCount",
            value: async (t)=>{
                let a;
                let r;
                let n;
                a = new module323;
                r = await request.get(a.getBaseUrl({
                    workspace: t
                }), {
                    paging: "limit=Infinity"
                });
                n = r && r.items.length > 0 ? r.items.length : 0;
                return n;
            }
        },
        {
            key: "fetchApplicationResourceMetrics",
            value: async function(t) {
                let a;
                let namespace;
                let o;
                let i;
                let c;
                let s;
                let f;
                let d;
                let originData;
                ({ workspace: a, namespace, autoRefresh: o = false } = t);
                i = module58(t, [
                    "workspace",
                    "namespace",
                    "autoRefresh"
                ]);
                if (o) {
                    i.last = true;
                } else {
                    this.resourceMetrics.isLoading = true;
                }
                if (i.cluster) {
                    this.cluster = i.cluster;
                }
                c = this.getParams(i);
                s = /^[a-zA-Z]+_/g;
                f = module26(i.metrics, "[0]", "").replace(s, "workspace_");
                if (namespace && namespace !== "all") {
                    c.metrics_filter = `${f.replace(s, "namespace_")}\$`;
                }
                d = await to(request.get(`${this.getApi({
                    cluster: this.cluster,
                    workspace: a,
                    namespace
                })}`, c));
                originData = this.getResult(d);
                if (o) {
                    originData = this.getRefreshResult(originData, this.resourceMetrics.originData);
                }
                this.resourceMetrics = {
                    originData,
                    data: module26(Object.values(originData), "[0].data.result", {}),
                    isLoading: false
                };
                return originData;
            }
        }
    ]);
    return h;
})(module847);
o = module49(u.prototype, "statistics", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: {},
            isLoading: false
        };
    }
});
i = module49(u.prototype, "resourceMetrics", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            originData: {},
            data: {},
            isLoading: false
        };
    }
});
module49(u.prototype, "fetchStatistics", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchStatistics"), u.prototype);
module49(u.prototype, "getDevopsCount", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "getDevopsCount"), u.prototype);
module49(u.prototype, "fetchApplicationResourceMetrics", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchApplicationResourceMetrics"), u.prototype);
export default u;
