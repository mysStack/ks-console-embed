import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-24.js";
import "./module-64.js";
import "./module-1092.js";
import "./module-41.js";
import module61 from "./module-61.js";
import "./module-31.js";
import module58 from "./module-58.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module74 from "./module-74.js";
import module14 from "./module-14.js";
import module1015 from "stores/alerting/policy";
import { MySQLAlertYaml, kafkaAlertYaml, openSearchAlertYaml, pgAlertYaml, redisAlertYaml } from "./module-3181.js";
import { RadonDBAppId } from "./module-817.js";
let i;
i = ((e)=>{
    module55(r, e);
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "fetchList",
            value: async function() {
                let t;
                let cluster;
                let namespace;
                let u;
                let i;
                let c;
                let s;
                let f;
                let d;
                let labelSelector;
                let m;
                let h;
                let total;
                const _this = this;
                const E = arguments;
                t = E.length > 0 && E[0] !== undefined ? E[0] : {};
                cluster = t.cluster;
                t.workspace;
                namespace = t.namespace;
                u = t.more;
                i = t.id;
                c = module58(t, [
                    "cluster",
                    "workspace",
                    "namespace",
                    "more",
                    "id"
                ]);
                this.list.isLoading = true;
                if (!(c.sortBy || c.ascending !== undefined)) {
                    c.sortBy = "createTime";
                }
                if (!(c.limit !== Infinity && c.limit !== -1)) {
                    c.limit = -1;
                    c.page = 1;
                }
                s = this.getFilterParams(c);
                ({ labelSelector: f, ...d } = s);
                labelSelector = f;
                if (f) {
                    labelSelector += `,app_instance=${i}`;
                } else {
                    labelSelector = `app_instance=${i}`;
                }
                c.limit = c.limit || 10;
                m = await request.get(this.getResourceUrl({
                    cluster,
                    namespace
                }), {
                    ...d,
                    labelSelector
                });
                h = (module26(m, "items") || []).map((e)=>({
                        cluster,
                        namespace,
                        ..._this.mapper(e)
                    }));
                total = m.totalItems || m.items.length;
                this.list.update({
                    data: u ? [].concat(module61(this.list.data), module61(h)) : h,
                    total,
                    ...c,
                    limit: Number(c.limit) || 10,
                    page: Number(c.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return h;
            }
        },
        {
            key: "create",
            value: function(e, t = {}) {
                module74(e, "metadata.name", `${t.cluster_id}-${e.metadata.name}`);
                return this.submitting(request.post(this.getListUrl({
                    ...t,
                    k8sOpt: true
                }), e));
            }
        },
        {
            key: "createDefaultAlert",
            value: function(e, { name, namespace, cluster }) {
                let l = {};
                function u(e) {
                    e = e.replaceAll("namespaceName", namespace).replaceAll("clusterId", name);
                    return JSON.parse(e);
                }
                switch(e){
                    case RadonDBAppId.RedisCluster:
                    case RadonDBAppId.RedisSentinel:
                        l = u(JSON.stringify(redisAlertYaml));
                        break;
                    case RadonDBAppId.OpenSearch:
                        l = u(JSON.stringify(openSearchAlertYaml));
                        break;
                    case RadonDBAppId.Kafka:
                        l = u(JSON.stringify(kafkaAlertYaml));
                        break;
                    case RadonDBAppId.PostgreSQL:
                        l = u(JSON.stringify(pgAlertYaml));
                        break;
                    case RadonDBAppId.MySQL:
                        l = u(JSON.stringify(MySQLAlertYaml));
                        break;
                    default:
                        l = {};
                }
                if (!module63(l)) {
                    return this.submitting(request.post(this.getListUrl({
                        cluster,
                        namespace,
                        name,
                        k8sOpt: true
                    }), l));
                }
            }
        }
    ]);
    return r;
})(module1015);
module49(i.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchList"), i.prototype);
module49(i.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "create"), i.prototype);
module49(i.prototype, "createDefaultAlert", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "createDefaultAlert"), i.prototype);
export default i;
