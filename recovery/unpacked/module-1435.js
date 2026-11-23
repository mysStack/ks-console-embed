import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-48.js";
import "./module-16.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import module41 from "./module-41.js";
import "./module-31.js";
import module58 from "./module-58.js";
import module44 from "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import module68 from "./module-68.js";
import { getPodStatusAndRestartCount } from "./module-434.js";
import { RadonDBAppId } from "./module-817.js";
let l;
let i;
let u;
l = ((e)=>{
    module55(a, e);
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
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(a);
    function a(...n_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...n_1);
        e.resourceName = "db_services";
        module65(e, "data", i, module88(e));
        e.getUrl = function({ cluster, namespace, chi, app_id } = {}) {
            const c = `${e.baseUrl}${e.getPath({
                cluster,
                namespace
            })}/pods?labelSelector=`;
            return c + e.getLabelSelector(app_id, chi);
        };
        e.getWatchListUrl = function({ namespace, cluster, app_id, chi }) {
            return `api/v1/watch/klusters/${cluster}/namespaces/${namespace}/pods?labelSelector=${e.getLabelSelector(app_id, chi)}`;
        };
        module65(e, "fetchList", u, module88(e));
        return e;
    }
    module37(a, [
        {
            key: "getPath",
            value: function({ namespace, cluster }) {
                let r = "";
                if (globals.app.isMultiCluster && cluster) {
                    r += `/clusters/${cluster}`;
                }
                r += "/v1";
                if (namespace) {
                    r += `/namespaces/${namespace}`;
                }
                return r;
            }
        },
        {
            key: "getCapacityUrl",
            value: function({ cluster, namespace, chi, app_id } = {}) {
                const o = `${this.baseUrl}${this.getPath({
                    cluster,
                    namespace
                })}/persistentvolumeclaims?labelSelector=`;
                return o + this.getLabelSelector(app_id, chi, true);
            }
        },
        {
            key: "getLabelSelector",
            value: function(e, t, a) {
                switch(e){
                    case RadonDBAppId.ClickHouse:
                        return `clickhouse.radondb.com/zooKeeper!=zookeeper,clickhouse.radondb.com/chi=${t}`;
                    case RadonDBAppId.PostgreSQL:
                        return `app-name=${t}`;
                    case RadonDBAppId.RedisCluster:
                    case RadonDBAppId.RedisSentinel:
                        return `redis.radondb.com/name=${t}`;
                    case RadonDBAppId.Elasticsearch:
                        return `elasticsearch.k8s.elastic.co/cluster-name=${t}`;
                    case RadonDBAppId.Kafka:
                        return `app.kubernetes.io/instance=${t}${`${a ? "" : ",strimzi.io/controller=strimzipodset"}`}`;
                    default:
                        return `app.kubernetes.io/instance=${t}`;
                }
            }
        },
        {
            key: "baseUrl",
            get: function() {
                return "/api";
            }
        }
    ]);
    return a;
})(module68);
i = module49(l.prototype, "data", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
u = module49(l.prototype, "fetchList", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return module44(module41.mark(function a() {
            let r;
            let n;
            let c;
            let l;
            let i;
            let u;
            let f;
            let m;
            let filters;
            let v;
            let g;
            let cluster;
            let namespace;
            let b;
            let S;
            const A = arguments;
            return module41.wrap(function(a) {
                while(true){
                    switch(a.prev = a.next){
                        case 0:
                            r = A.length > 0 && A[0] !== undefined ? A[0] : {};
                            n = r.esKibana;
                            c = module58(r, [
                                "esKibana"
                            ]);
                            a.next = 3;
                            return request.get(_this.getUrl(c));
                        case 3:
                            l = a.sent;
                            a.next = 6;
                            return request.get(_this.getCapacityUrl(c));
                        case 6:
                            i = a.sent;
                            _this.isLoading = true;
                            u = c.dataFilters || {};
                            ({ limit: f = 10, page: m = 1 } = u);
                            filters = module58(u, [
                                "limit",
                                "page"
                            ]);
                            v = {
                                items: []
                            };
                            g = {
                                items: []
                            };
                            if (!n) {
                                a.next = 19;
                                break;
                            }
                            cluster = c.cluster;
                            namespace = c.namespace;
                            b = c.chi;
                            a.next = 15;
                            return request.get(`${_this.baseUrl}${_this.getPath({
                                cluster,
                                namespace
                            })}/pods?labelSelector=common.k8s.elastic.co/type=kibana,kibana.k8s.elastic.co/name=${b}`);
                        case 15:
                            v = a.sent;
                            a.next = 18;
                            return request.get(`${_this.baseUrl}${_this.getPath({
                                cluster,
                                namespace
                            })}/persistentvolumeclaims?labelSelector=common.k8s.elastic.co/type=kibana,kibana.k8s.elastic.co/name=${b}`);
                        case 18:
                            g = a.sent;
                        case 19:
                            S = l.items.concat(v.items || []).map((e)=>{
                                const a = module26(e, "metadata.labels.role");
                                let nodeRole = "";
                                let roleText = [
                                    "leader",
                                    "master",
                                    "LEADER",
                                    "primary"
                                ].includes(a) ? t("PRIMARY_NODE") : t("STANDBY_NODE");
                                if (c.app_id === RadonDBAppId.PostgreSQL) {
                                    if ((nodeRole = module26(e, 'metadata.labels["node-name"]')) === "autofailover") {
                                        roleText = t("MANAGEMENT_NODE");
                                    }
                                } else if (c.app_id === RadonDBAppId.RedisSentinel) {
                                    if (module26(e, 'metadata.labels["redis.radondb.com/role"]') === "master") {
                                        roleText = t("PRIMARY_NODE");
                                    }
                                    if (a === "sentinel") {
                                        roleText = t("SENTINEL_NODE");
                                    }
                                } else if (c.app_id === RadonDBAppId.Elasticsearch) {
                                    if (module26(e, 'metadata.labels["elasticsearch.k8s.elastic.co/node-master"]') === "true") {
                                        roleText = t("PRIMARY_NODE");
                                        nodeRole = "master";
                                    } else if (module26(e, 'metadata.labels["elasticsearch.k8s.elastic.co/node-data_hot"]') === "true") {
                                        roleText = t("HOT_NODE");
                                        nodeRole = "hot";
                                    } else if (module26(e, 'metadata.labels["elasticsearch.k8s.elastic.co/node-data_warm"]') === "true") {
                                        roleText = t("WARM_NODE");
                                        nodeRole = "warm";
                                    } else if (module26(e, 'metadata.labels["elasticsearch.k8s.elastic.co/node-data_cold"]') === "true") {
                                        roleText = t("COLD_NODE");
                                        nodeRole = "cold";
                                    } else if (module26(e, 'metadata.labels["common.k8s.elastic.co/type"]') === "kibana") {
                                        roleText = t("KIBANA_NODE");
                                        nodeRole = "kibana";
                                    }
                                } else if (c.app_id === RadonDBAppId.Kafka) {
                                    if (module26(e, 'metadata.labels["app.kubernetes.io/name"]') === "kafka") {
                                        roleText = t("KAFKA_NODE");
                                        nodeRole = "kafka";
                                    } else if (module26(e, 'metadata.labels["app.kubernetes.io/name"]') === "zookeeper") {
                                        roleText = t("ZOOKEEPER_NODE");
                                        nodeRole = "zookeeper";
                                    }
                                } else if (c.app_id === RadonDBAppId.OpenSearch) {
                                    const o = module26(e, 'metadata.labels["opster.io/opensearch-nodepool"]');
                                    switch(o){
                                        case "data-node-hot":
                                            roleText = t("HOT_NODE");
                                            nodeRole = "hot";
                                            break;
                                        case "data-node-warm":
                                            roleText = t("WARM_NODE");
                                            nodeRole = "warm";
                                            break;
                                        case "data-node-cold":
                                            roleText = t("COLD_NODE");
                                            nodeRole = "cold";
                                            break;
                                        default:
                                            if (o === "masters") {
                                                roleText = t("PRIMARY_NODE");
                                                nodeRole = "master";
                                            }
                                    }
                                    if (module26(e, 'metadata.labels["opensearch.opster.io/logstash"]')) {
                                        nodeRole = "logstash";
                                        roleText = t("LOGSTASH_NODE");
                                    }
                                    if (module26(e, 'metadata.labels["opensearch.cluster.dashboards"]')) {
                                        nodeRole = "dashboard";
                                        roleText = t("DASHBOARD_NODE");
                                        v.items.push(e);
                                    }
                                }
                                const isPredixy = module26(e, "metadata.labels.redis_setup_type", "") === "proxy";
                                if (isPredixy) {
                                    roleText = t("PROXY_NODE");
                                }
                                const l = getPodStatusAndRestartCount(e);
                                return {
                                    name: e.metadata.name,
                                    creationTimestamp: e.metadata.creationTimestamp,
                                    status: module26(l, "type", "creating"),
                                    ip: e.status.podIP,
                                    spec: module26(e, "spec.containers[0].resources.limits", {
                                        cpu: "",
                                        memory: ""
                                    }),
                                    serviceName: e.spec.subdomain,
                                    capacity: module26(i.items.concat(g.items || []).find((t)=>t.metadata.name.includes(e.metadata.name) || t.metadata.name === module26(e, "metadata.labels[deployment-name]")), "status.capacity.storage"),
                                    canDelete: c.app_id !== RadonDBAppId.ClickHouse,
                                    deploymentName: module26(e, "metadata.labels[deployment-name]"),
                                    noMonitoring: module26(v, "items", []).includes(e),
                                    isPredixy,
                                    roleText,
                                    nodeRole
                                };
                            }).filter((e)=>{
                                let t = true;
                                if (c.app_id === RadonDBAppId.Elasticsearch && e.name.includes("exporter")) {
                                    t = false;
                                }
                                if (filters) {
                                    for(const a in filters){
                                        if (e[a] && !(t = e[a].includes(filters[a]))) {
                                            break;
                                        }
                                    }
                                }
                                return t;
                            });
                            _this.list.update({
                                data: S.slice((m - 1) * f, m * f),
                                total: S.length || 0,
                                filters,
                                limit: Number(f),
                                page: Number(m),
                                isLoading: false,
                                ...!_this.list.silent ? {
                                    selectedRowKeys: []
                                } : {}
                            });
                            _this.data = S;
                            _this.isLoading = false;
                            return a.abrupt("return", S);
                        case 24:
                        case "end":
                            return a.stop();
                    }
                }
            }, a);
        }));
    }
});
export default l;
