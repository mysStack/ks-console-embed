import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-320.js";
import "unpacked/module-192.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-138.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-38.js";
import "unpacked/module-137.js";
import "unpacked/module-75.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import module41 from "unpacked/module-41.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-58.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import "unpacked/module-31.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-245.js";
import "unpacked/module-860.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-436.js";
import "unpacked/module-319.js";
import "unpacked/module-57.js";
import "unpacked/module-1431.js";
import "unpacked/module-1432.js";
import "unpacked/module-1433.js";
import "unpacked/module-1434.js";
import module74 from "unpacked/module-74.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module454 from "unpacked/module-454.js";
import module14 from "unpacked/module-14.js";
import { safeAtob } from "utils/base64";
import { getFilterString, getLocalTime, joinSelector } from "utils/index";
import module243 from "unpacked/module-243.js";
import module458 from "stores/openpitrix/base";
import { RadonDBAppId, convertAppIdToName, getAppIdByKind, getCpuAndMemoryFromSpecifications } from "unpacked/module-817.js";
import module4514 from "unpacked/module-4514.js";
import { getManifestApi } from "unpacked/module-1016.js";
import module1435 from "unpacked/module-1435.js";
import { eckYaml } from "unpacked/module-1527.js";
import { opensearchYaml } from "unpacked/module-1528.js";
export const isAppRunning = function(e) {
    const t = module26(e, "resourceState");
    const a = H[t] || t;
    return RunningStatus.includes(a);
};
let g;
let _;
let y;
let E;
let b;
let S;
let O;
let R;
let A;
let T;
var H = {
    Creating: "Creating",
    Initializing: "Creating",
    Updating: "Updating",
    InProgress: "Updating",
    ScaleIn: "Updating",
    ScaleOut: "Updating",
    Completed: "Completed",
    Running: "Running",
    Ready: "Running",
    Closed: "Closed",
    "pgcluster Shutdown": "Closed",
    CreateFailed: "Create Failed",
    UpdateFailed: "Update Failed",
    Terminating: "Terminating",
    FailedInvalidConfig: "Failed",
    FailedServiceConfig: "Failed",
    FailedTLSConfig: "Failed",
    FailedUserConfig: "Failed",
    FailedRBACConfig: "Failed",
    FailedDeployment: "Failed",
    FailedReset: "Failed",
    TLSNotValidYet: "Updating",
    ApplyingChanges: "Updating",
    MigratingData: "Updating",
    Stalled: "Updating",
    Invalid: "Failed",
    "True-Ready": "Running",
    "True-NotReady": "Creating",
    Expanding: "Updating"
};
export const DMPStatus = {
    "Create Failed": "Failed",
    "Update Failed": "Failed",
    Restoring: "Updating",
    Bootstapping: "Updating",
    Bootstapped: "Running",
    "In The Backup": "Updating"
};
export var RunningStatus = [
    H.Running,
    H.Completed
];
const z = (e, workspace)=>{
    let a;
    try {
        a = JSON.parse(e.customResource);
    } catch (e) {
        a = {};
    }
    const app_id = getAppIdByKind(a.kind);
    const { resourceState, creationTimestamp, appVersion, description } = e;
    const status_1 = H[resourceState] || resourceState;
    const i = {
        ...a.metadata,
        ...a,
        workspace,
        creationTimestamp,
        app_id,
        version: appVersion,
        description,
        status: status_1,
        isRunning: RunningStatus.includes(status_1),
        app_name: convertAppIdToName(app_id)
    };
    switch(app_id){
        case RadonDBAppId.ClickHouse:
            const u = module26(a, "spec.configuration.clusters[0].layout", {});
            const { replicasCount, shardsCount } = u;
            const p = module26(a, "spec.templates.podTemplates[0].spec.containers[0].resources.requests");
            const { cpu, memory } = p;
            const v = module26(a, "spec.templates.volumeClaimTemplates[0].spec.storageClassName");
            return {
                ...i,
                icon: "/assets/click-house.svg",
                replicasCount,
                shardsCount,
                cpu,
                memory,
                storage: module26(a, "spec.templates.volumeClaimTemplates[0].spec.resources.requests.storage"),
                storageclass: module26(a, "spec.reources.storageClassName") || v,
                update_time: module26(a, "metadata.managedFields[1].time")
            };
        case RadonDBAppId.PostgreSQL:
            const g = module26(a, "spec.postgresql.readwriteinstance.podspec.containers[0].resources.requests");
            const { cpu: cpu_1, memory: memory_1 } = g;
            const E = module26(a, "spec.autofailover.podspec.containers[0].image", "");
            const databaseVersion = module26(E.split(":"), "[1]", "").split(".")[0];
            return {
                ...i,
                icon: "/assets/postgre.svg",
                cpu: cpu_1,
                memory: memory_1,
                storage: module26(a, "spec.postgresql.readwriteinstance.volumeClaimTemplates[0].spec.resources.requests.storage"),
                storageclass: module26(a, "spec.postgresql.readwriteinstance.volumeClaimTemplates[0].spec.storageClassName"),
                shardsCount: module26(a, "spec.postgresql.readwriteinstance.replicas"),
                backupSchedule: module26(a, "spec.fullBackupSchedule"),
                databaseVersion,
                databaseVersionText: `PostgreSQL ${databaseVersion}`
            };
        case RadonDBAppId.MySQL:
            const S = module26(a, "spec.mysqlOpts.resources.requests");
            const { cpu: cpu_2, memory: memory_2 } = S;
            const shardsCount_1 = module26(a, "spec.replicas");
            return {
                ...i,
                icon: "/assets/mysql-qkcp.svg",
                cpu: cpu_2,
                memory: memory_2,
                shardsCount: shardsCount_1,
                storage: module26(a, "spec.persistence.size"),
                storageclass: module26(a, "spec.persistence.storageClass"),
                backupSchedule: module26(a, "spec.backupSchedule", "").substring(2),
                databaseVersion: module26(a, "spec.mysqlVersion"),
                databaseVersionText: `MySQL ${module26(a, "spec.mysqlVersion")}`,
                sidecarImage: module26(a, "spec.podPolicy.sidecarImage")
            };
        case RadonDBAppId.RedisCluster:
            const nodes = {
                master: module26(a, "spec.redisLeader.replicas")
            };
            if (module26(a, "spec.kubernetesConfig.endpointType") !== "hostname") {
                nodes.proxy = module26(a, "spec.redisProxy.replicas", 0);
            }
            return {
                ...i,
                icon: "/assets/radondb_redis.svg",
                cpu: module26(a, "spec.kubernetesConfig.resources.requests.cpu"),
                memory: module26(a, "spec.kubernetesConfig.resources.requests.memory"),
                storage: module26(a, "spec.storage.volumeClaimTemplate.spec.resources.requests.storage"),
                storageclass: module26(a, "spec.storage.volumeClaimTemplate.spec.storageClassName"),
                shardsCount: module26(a, "spec.redisLeader.replicas", 0),
                replicasCount: module26(a, "spec.redisFollower.replicas", 0),
                specifications: {
                    master: module26(a, "spec.kubernetesConfig.resources.requests"),
                    proxy: module26(a, "spec.redisProxy.resources.requests")
                },
                nodes,
                databaseVersionText: `Redis ${module26(a, "spec.kubernetesConfig.redisVersion")}`
            };
        case RadonDBAppId.RedisSentinel:
            return {
                ...i,
                icon: "/assets/radondb_redis.svg",
                cpu: module26(a, "spec.kubernetesConfig.resources.requests.cpu"),
                memory: module26(a, "spec.kubernetesConfig.resources.requests.memory"),
                storage: module26(a, "spec.storage.volumeClaimTemplate.spec.resources.requests.storage"),
                storageclass: module26(a, "spec.storage.volumeClaimTemplate.spec.storageClassName"),
                shardsCount: module26(a, "spec.clusterSize", 0),
                replicasCount: module26(a, "spec.clusterSize", 1) - 1,
                databaseVersionText: `Redis ${module26(a, "spec.kubernetesConfig.redisVersion")}`
            };
        case RadonDBAppId.MongoDB:
            return {
                ...i,
                icon: "/assets/mongo-db.svg",
                cpu: module26(a, "spec.statefulSet.spec.template.spec.containers[0].resources.requests.cpu"),
                memory: module26(a, "spec.statefulSet.spec.template.spec.containers[0].resources.requests.memory"),
                storage: module26(a, "spec.statefulSet.spec.volumeClaimTemplates[0].spec.resources.requests.storage"),
                storageclass: module26(a, "spec.statefulSet.spec.volumeClaimTemplates[0].spec.storageClassName"),
                shardsCount: module26(a, "spec.members", 0),
                databaseVersionText: `MongoDB ${module26(a, "spec.version")}`
            };
        case RadonDBAppId.Elasticsearch:
            const k = module26(a, "spec.nodeSets", []).map((e)=>({
                    name: e.name,
                    count: e.count,
                    specifications: module26(e, "podTemplate.spec.containers[0].resources.requests"),
                    storage: module26(e, "volumeClaimTemplates[0].spec.resources.requests.storage")
                }));
            const C = {
                count: 0,
                specifications: {
                    memory: "4Gi",
                    cpu: "2000m"
                },
                storage: "20Gi"
            };
            const P = k.find((e)=>e.name.includes("master")) || {
                ...C,
                specifications: {
                    memory: "1Gi",
                    cpu: "2000m"
                }
            };
            const N = k.find((e)=>e.name.includes("hot")) || C;
            const I = k.find((e)=>e.name.includes("warm")) || C;
            const w = k.find((e)=>e.name.includes("cold")) || C;
            return {
                ...i,
                icon: "/assets/eck.svg",
                app_name: "ECK",
                databaseVersionText: `ES ${module26(a, "spec.version")}`,
                nodes: {
                    master: P.count,
                    hot: N.count,
                    warm: I.count,
                    cold: w.count
                },
                specifications: {
                    master: P.specifications,
                    hot: N.specifications,
                    warm: I.specifications,
                    cold: w.specifications,
                    kibana: {}
                },
                storages: {
                    hot: N.storage,
                    warm: I.storage,
                    cold: w.storage
                },
                storageclass: module26(a, "spec.nodeSets[0].volumeClaimTemplates[0].spec.storageClassName")
            };
        case RadonDBAppId.Kafka:
            const authentication = module26(a, "spec.kafka.listeners[0].authentication.type");
            const status = status_1 ? status_1 === "Running" || status_1 === "Creating" ? status_1 : "Failed" : "Unknown";
            return {
                ...i,
                status,
                icon: "/assets/radondb_kafka.svg",
                databaseVersionText: `Kafka ${module26(a, "spec.kafka.version")}`,
                authentication,
                tls: module26(a, "spec.kafka.listeners[0].tls"),
                nodes: {
                    kafka: module26(a, "spec.kafka.replicas"),
                    zookeeper: module26(a, "spec.zookeeper.replicas")
                },
                specifications: {
                    kafka: module26(a, "spec.kafka.resources.requests"),
                    zookeeper: module26(a, "spec.zookeeper.resources.requests")
                },
                storages: {
                    kafka: module26(a, "spec.kafka.storage.volumes[0].size"),
                    zookeeper: module26(a, "spec.zookeeper.storage.size")
                },
                storageclass: module26(a, "spec.kafka.storage.volumes[0].class")
            };
        case RadonDBAppId.OpenSearch:
            const j = module26(a, "spec.nodePools", []).map((e)=>({
                    name: module26(e, 'additionalConfig["node.attr.datatier"]'),
                    count: e.replicas,
                    specifications: module26(e, "resources.requests"),
                    storage: module26(e, "diskSize")
                }));
            const U = {
                count: 0,
                specifications: {
                    memory: "4Gi",
                    cpu: "2000m"
                },
                storage: "20Gi"
            };
            const B = j.find((e)=>e.name.includes("master")) || {
                ...U,
                specifications: {
                    memory: "2Gi",
                    cpu: "1000m"
                }
            };
            const Y = j.find((e)=>e.name.includes("hot")) || U;
            const F = j.find((e)=>e.name.includes("warm")) || U;
            const V = j.find((e)=>e.name.includes("cold")) || U;
            return {
                ...i,
                databaseVersionText: `OpenSearch ${module26(a, "spec.general.version")}`,
                nodes: {
                    master: B.count,
                    hot: Y.count,
                    warm: F.count,
                    cold: V.count,
                    dashboard: module26(a, "spec.dashboards.replicas", 0)
                },
                specifications: {
                    master: B.specifications,
                    hot: Y.specifications,
                    warm: F.specifications,
                    cold: V.specifications,
                    dashboard: module26(a, "spec.dashboards.resources.requests", {
                        memory: "2Gi",
                        cpu: "1000m"
                    }),
                    logstash: {}
                },
                storages: {
                    hot: Y.storage,
                    warm: F.storage,
                    cold: V.storage
                },
                storageclass: module26(a, "spec.nodePools[0].persistence.pvc.storageClass")
            };
        default:
            return {
                ...i
            };
    }
};
g = ((e)=>{
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
        e.serviceStore = new module4514;
        e.podStore = new module1435;
        e.getWatchListUrl = function({ cluster, namespace } = {}) {
            return `apis/application.kubesphere.io/v1alpha1/watch/manifests?labelSelector=${joinSelector({
                "kubesphere.io/cluster": globals.app.isMultiCluster ? cluster : null,
                "kubesphere.io/namespace": namespace
            })}`;
        };
        e.getWatchUrl = function({ name } = {}) {
            return `apis/application.kubesphere.io/v1alpha1/watch/manifests/${name}`;
        };
        module65(e, "fetchList", _, module88(e));
        module65(e, "fetchDetail", y, module88(e));
        e.updateDetailService = function(e, t) {
            if (t.length !== 0) {
                const a = module26(t, "[0]", {});
                if (e.app_id === RadonDBAppId.ClickHouse) {
                    e.services = [
                        {
                            label: "READ_AND_WRITE_ADDRESS",
                            value: `http://${a.address}`,
                            type: a.type
                        },
                        {
                            label: "READ_AND_WRITE_ADDRESS",
                            value: `http://${a.serviceName}.${a.namespace}:${a.tcpPort}`,
                            type: "ClusterIP"
                        }
                    ];
                } else if (e.app_id === RadonDBAppId.MySQL || e.app_id === RadonDBAppId.PostgreSQL) {
                    e.services = [
                        {
                            label: "READ_AND_WRITE_ADDRESS",
                            value: a.address,
                            type: a.type
                        }
                    ];
                    const r = module26(t, "[1]");
                    if (r) {
                        e.services.push({
                            label: "READ_ONLY_ADDRESS",
                            value: r.address,
                            type: r.type
                        });
                    }
                } else if (e.app_id === RadonDBAppId.Elasticsearch) {
                    const n = module26(t, "[1]");
                    if (n) {
                        const o = [
                            {
                                label: "READ_AND_WRITE_ADDRESS",
                                value: a.address,
                                type: a.type
                            }
                        ];
                        o.push({
                            label: "KIBANA_ADDRESS",
                            value: n.address,
                            type: n.type
                        });
                        e.services = o;
                    }
                } else if (e.app_id === RadonDBAppId.RedisSentinel) {
                    const c = module26(t, "[1]", {});
                    e.services = [
                        {
                            label: "PRIMARY_ADDRESS",
                            value: a.address,
                            type: a.type
                        },
                        {
                            label: "STANDBY_ADDRESS",
                            value: c.address,
                            type: a.type
                        }
                    ];
                } else if (e.app_id === RadonDBAppId.RedisCluster) {
                    let s = [];
                    let l = t.length;
                    let i = t[l - 1];
                    if (i.serviceName.includes("proxy")) {
                        t.splice(-1, 1);
                        l--;
                    } else {
                        i = null;
                    }
                    if (l > 2) {
                        s = t.filter((e)=>e.type === "NodePort").map((e)=>{
                            const t = module26(e, '_originData.metadata.labels["statefulset.kubernetes.io/pod-name"]');
                            return {
                                label: [
                                    "master",
                                    "leader"
                                ].includes(e.role) ? "PRIMARY_ADDRESS" : "STANDBY_ADDRESS",
                                value: t ? `${e.serviceName}.${t}.${e.namespace}.svc:${e.tcpPort}` : e.address,
                                type: e.type
                            };
                        });
                    } else {
                        const u = module26(t, "[1]", {});
                        s = [
                            {
                                label: "PRIMARY_ADDRESS",
                                value: a.address,
                                type: a.type
                            },
                            {
                                label: "STANDBY_ADDRESS",
                                value: u.address,
                                type: a.type
                            }
                        ];
                    }
                    if (i) {
                        s.unshift({
                            label: "READ_AND_WRITE_ADDRESS",
                            value: i.address,
                            type: i.type
                        });
                    }
                    e.services = s;
                } else if (e.app_id === RadonDBAppId.Kafka) {
                    const d = [
                        {
                            label: "READ_AND_WRITE_ADDRESS",
                            value: a.address,
                            type: a.type || "ClusterIP"
                        }
                    ];
                    if (a.type === "NodePort") {
                        d.push({
                            label: "READ_AND_WRITE_ADDRESS",
                            value: `${a.serviceName}.${a.namespace}:${a.tcpPort}`,
                            type: "NodePort"
                        });
                    }
                    e.services = d;
                } else if (e.app_id === RadonDBAppId.OpenSearch && t.length > 1) {
                    e.services = [
                        {
                            label: "READ_AND_WRITE_ADDRESS",
                            value: a.address,
                            type: a.type
                        }
                    ];
                    const f = module26(t, "[1]");
                    if (f) {
                        e.services.push({
                            label: "DASHBOARD_ADDRESS",
                            value: f.address,
                            type: f.type
                        });
                    }
                } else {
                    e.services = [
                        {
                            label: "READ_AND_WRITE_ADDRESS",
                            value: a.address,
                            type: a.type || "ClusterIP"
                        }
                    ];
                }
            } else {
                e.services = [];
            }
        };
        module65(e, "delete", E, module88(e));
        module65(e, "batchDelete", b, module88(e));
        module65(e, "patch", S, module88(e));
        module65(e, "updateVersion", O, module88(e));
        module65(e, "updateShardsCount", R, module88(e));
        module65(e, "updateStorage", A, module88(e));
        module65(e, "updateSpecifications", T, module88(e));
        return e;
    }
    module37(a, [
        {
            key: "getSecretUrl",
            value: function(e, t, a) {
                return `/api${globals.app.isMultiCluster && e ? `/clusters/${e}` : ""}/v1/namespaces/${t}/secrets/${a}`;
            }
        },
        {
            key: "updateDetail",
            value: function({ detail, namespace, cluster, workspace }) {
                this.detail = {
                    ...this.detail,
                    ...z(detail, workspace),
                    namespace,
                    cluster
                };
            }
        },
        {
            key: "getECKKibanaUrl",
            value: function(e, t, a) {
                return `/apis${globals.app.isMultiCluster && e ? `/clusters/${e}` : ""}/kibana.k8s.elastic.co/v1/namespaces/${t}/kibanas${a ? `/${a}` : ""}`;
            }
        },
        {
            key: "getLogstashUrl",
            value: function(e, t, a) {
                return `/apis${globals.app.isMultiCluster && e ? `/clusters/${e}` : ""}/opensearch.opster.io/v1/namespaces/${t}/logstashes${a ? `/${a}` : ""}`;
            }
        }
    ]);
    return a;
})(module458);
_ = module49(g.prototype, "fetchList", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return module44(module41.mark(function* t() {
            let a;
            let r;
            let s;
            let l;
            let cluster;
            let namespace;
            let d;
            let f;
            let reverse;
            let filters;
            let h;
            let v;
            let g;
            let _;
            let y;
            const E = arguments;
            a = E.length > 0 && E[0] !== undefined ? E[0] : {};
            ({ limit: r, page: s, workspace: l, cluster, namespace, more: d, status: f, reverse, ...filters } = a);
            _this.list.isLoading = true;
            h = {
                conditions: getFilterString({
                    status: f || _this.defaultStatus
                })
            };
            if (!module63(filters)) {
                v = getFilterString(filters);
                h.conditions += v ? `,${v}` : "";
            }
            if (r !== Infinity) {
                h.paging = `limit=${r || 10},page=${s || 1}`;
            }
            g = yield request.get(getManifestApi({
                workspace: l,
                namespace,
                cluster
            }), h);
            (_ = (g.items || []).map((e)=>({
                    ...z(e, l),
                    cluster
                }))).sort((e, t)=>{
                if (filters.ascending) {
                    if (module243(e.creationTimestamp).isSameOrBefore(t.creationTimestamp)) {
                        return -1;
                    }
                    return 1;
                }
                if (module243(e.creationTimestamp).isSameOrBefore(t.creationTimestamp)) {
                    return 1;
                }
                return -1;
            });
            y = _.map((t)=>_this.serviceStore.fetchList({
                    cluster,
                    namespace,
                    chi: t.name,
                    app_id: t.app_id
                }));
            (yield Promise.all(y)).forEach((t, a)=>{
                _this.updateDetailService(_[a], t);
            });
            Object.assign(_this.list, {
                data: d ? [].concat(module61(_this.list.data), module61(_)) : _,
                total: g.total_count || _.length,
                limit: Number(r) || 10,
                page: Number(s) || 1,
                reverse,
                filters,
                isLoading: false,
                selectedRowKeys: []
            });
            return _;
        }));
    }
});
y = module49(g.prototype, "fetchDetail", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return (()=>{
            const t = module44(module41.mark(function t(a) {
                let r;
                let o;
                let c;
                let s;
                let l;
                let i;
                let u;
                let d;
                let f;
                let allowVolumeExpansion;
                let realStorage;
                let h;
                let v;
                let g;
                let _;
                let y;
                let secret;
                let b;
                let S;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                r = a.workspace;
                                o = a.namespace;
                                c = a.cluster;
                                s = a.id;
                                _this.isLoading = true;
                                t.next = 4;
                                return request.get(getManifestApi({
                                    workspace: r,
                                    namespace: o,
                                    cluster: c,
                                    cluster_id: s
                                }));
                            case 4:
                                l = t.sent;
                                _this.updateDetail({
                                    detail: l,
                                    namespace: o,
                                    cluster: c,
                                    workspace: r
                                });
                                t.next = 8;
                                return _this.podStore.fetchList({
                                    workspace: r,
                                    namespace: o,
                                    cluster: c,
                                    chi: s,
                                    app_id: _this.detail.app_id
                                });
                            case 8:
                                i = t.sent;
                                t.next = 11;
                                return _this.serviceStore.fetchList({
                                    cluster: c,
                                    namespace: o,
                                    chi: s,
                                    app_id: _this.detail.app_id
                                });
                            case 11:
                                u = t.sent;
                                t.next = 14;
                                return request.get(`/kapis${globals.app.isMultiCluster ? `/clusters/${c}` : ""}/resources.kubesphere.io/v1alpha3/storageclasses?sortBy=createTime`);
                            case 14:
                                d = t.sent;
                                f = d.items.map((e)=>({
                                        name: e.metadata.name,
                                        allowVolumeExpansion: e.allowVolumeExpansion
                                    }));
                                allowVolumeExpansion = module26(f.find((t)=>t.name === _this.detail.storageclass), "allowVolumeExpansion", false);
                                realStorage = module26(i, "[0].capacity", _this.detail.storage);
                                if (_this.detail.app_id !== RadonDBAppId.PostgreSQL) {
                                    t.next = 22;
                                    break;
                                }
                                realStorage = module26(i.find((e)=>e.name.includes("postgresql")), "capacity", _this.detail.storage);
                                t.next = 44;
                                break;
                            case 22:
                                if (_this.detail.app_id !== RadonDBAppId.Elasticsearch) {
                                    t.next = 36;
                                    break;
                                }
                                _this.detail.realStorages = {
                                    hot: module26(i.find((e)=>module26(e, 'metadata.labels["elasticsearch.k8s.elastic.co/node-hot"]') === true), "capacity", _this.detail.storages.hot),
                                    warm: module26(i.find((e)=>module26(e, 'metadata.labels["elasticsearch.k8s.elastic.co/node-warm"]') === true), "capacity", _this.detail.storages.warm),
                                    cold: module26(i.find((e)=>module26(e, 'metadata.labels["elasticsearch.k8s.elastic.co/node-cold"]') === true), "capacity", _this.detail.storages.cold)
                                };
                                h = {};
                                t.next = 27;
                                return request.get(_this.getECKKibanaUrl(c, o, s));
                            case 27:
                                h = t.sent;
                                v = module26(h, "spec.count", 0);
                                _this.detail.nodes.kibana = v;
                                g = module26(h, "spec.podTemplate.spec.containers[0].resources.requests");
                                if (parseInt(g.cpu, 10) < 100) {
                                    g.cpu = `${1000 * parseInt(g.cpu, 10)}m`;
                                }
                                _this.detail.specifications.kibana = g;
                                allowVolumeExpansion = true;
                                t.next = 44;
                                break;
                            case 36:
                                if (_this.detail.app_id !== RadonDBAppId.OpenSearch) {
                                    t.next = 44;
                                    break;
                                }
                                t.next = 39;
                                return request.get(_this.getLogstashUrl(c, o, s));
                            case 39:
                                _ = t.sent;
                                _this.detail.nodes.logstash = module26(_, "spec.replicas", 0);
                                y = module26(_, "spec.podTemplate.spec.containers[0].resources.requests");
                                if (parseInt(y.cpu, 10) < 100) {
                                    y.cpu = `${1000 * parseInt(y.cpu, 10)}m`;
                                }
                                _this.detail.specifications.logstash = y;
                            case 44:
                                _this.updateDetailService(_this.detail, u);
                                secret = null;
                                if (_this.detail.app_id !== RadonDBAppId.Kafka || !_this.detail.tls) {
                                    t.next = 52;
                                    break;
                                }
                                t.next = 49;
                                return request.get(_this.getSecretUrl(c, o, `${s}-cluster-ca-cert`));
                            case 49:
                                b = t.sent;
                                S = window.atob || safeAtob;
                                secret = {
                                    cert: S(module26(b, 'data["ca.p12"]', "")),
                                    password: S(module26(b, 'data["ca.password"]', "")),
                                    validDate: getLocalTime(module26(b, "metadata.creationTimestamp")).add(3650, "d").format("YYYY.MM.DD")
                                };
                            case 52:
                                _this.detail = {
                                    ..._this.detail,
                                    allowVolumeExpansion,
                                    realStorage,
                                    secret
                                };
                                _this.isLoading = false;
                            case 54:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
    }
});
E = module49(g.prototype, "delete", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ workspace, cluster_id, cluster, namespace, name }) {
            return _this.submitting(request.delete(getManifestApi({
                workspace,
                namespace,
                cluster_id: cluster_id || name,
                cluster
            })));
        };
    }
});
b = module49(g.prototype, "batchDelete", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t, { workspace, namespace, cluster }) {
            return _this.submitting(Promise.all(t.map((cluster_id)=>request.delete(getManifestApi({
                    workspace,
                    namespace,
                    cluster,
                    cluster_id
                })))));
        };
    }
});
S = module49(g.prototype, "patch", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a, r)=>{
            let o;
            let c;
            let s;
            let l;
            let i;
            let u;
            o = r.workspace;
            c = r.cluster_id;
            s = r.cluster;
            l = r.namespace;
            i = r.description;
            u = await request.get(getManifestApi({
                workspace: o,
                namespace: l,
                cluster_id: c,
                cluster: s
            }));
            u.description = i;
            u.version += 1;
            await request.put(getManifestApi({
                workspace: o,
                namespace: l,
                cluster_id: c,
                cluster: s
            }), u);
            _this.updateDetail({
                detail: u,
                namespace: l,
                cluster: s,
                workspace: o
            });
        };
    }
});
O = module49(g.prototype, "updateVersion", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return (()=>{
            const t = module44(module41.mark(function t(a) {
                let r;
                let o;
                let c;
                let s;
                let l;
                let i;
                let u;
                let d;
                let f;
                let p;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                r = a.cluster;
                                o = a.cluster_id;
                                c = a.workspace;
                                s = a.namespace;
                                t.next = 3;
                                return request.get(getManifestApi({
                                    workspace: c,
                                    namespace: s,
                                    cluster_id: o,
                                    cluster: r
                                }));
                            case 3:
                                l = t.sent;
                                i = JSON.parse(l.customResource);
                                t.t0 = a.app_id;
                                t.next = t.t0 === RadonDBAppId.OpenSearch ? 8 : 22;
                                break;
                            case 8:
                                module74(i, "spec.general.version", "2.8.0");
                                module74(i, "spec.dashboards.version", "2.8.0");
                                module74(i, "spec.confMgmt.forceRestart", true);
                                u = _this.getLogstashUrl(r, s, o);
                                t.next = 14;
                                return request.get(u);
                            case 14:
                                d = t.sent;
                                f = {
                                    name: "exporter",
                                    resources: {
                                        requests: {
                                            memory: "400Mi",
                                            cpu: "200m"
                                        },
                                        limits: {
                                            memory: "400Mi",
                                            cpu: "200m"
                                        }
                                    }
                                };
                                p = module26(d, "spec.podTemplate.spec.containers");
                                if (!module454(p, function(e) {
                                    return e.name === "exporter";
                                })) {
                                    p.push(f);
                                    module74(d, "spec.podTemplate.spec.containers", p);
                                }
                                t.next = 21;
                                return request.put(u, d);
                            case 21:
                            case 22:
                                return t.abrupt("break", 23);
                            case 23:
                                l.customResource = JSON.stringify(i);
                                l.version += 1;
                                t.next = 27;
                                return request.put(getManifestApi({
                                    workspace: c,
                                    namespace: s,
                                    cluster_id: o,
                                    cluster: r
                                }), l);
                            case 27:
                                _this.updateDetail({
                                    detail: l,
                                    namespace: s,
                                    cluster: r,
                                    workspace: c
                                });
                            case 28:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
    }
});
R = module49(g.prototype, "updateShardsCount", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return (()=>{
            const t = module44(module41.mark(function t(a) {
                let r;
                let c;
                let s;
                let l;
                let shardsCount;
                let u;
                let d;
                let f;
                let p;
                let m;
                let h;
                let v;
                let g;
                let _;
                let y;
                let E;
                let b;
                let S;
                let O;
                let R;
                let A;
                let T;
                let C;
                let P;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                r = a.workspace;
                                c = a.cluster_id;
                                s = a.cluster;
                                l = a.namespace;
                                shardsCount = a.shardsCount;
                                u = a.nodeRole;
                                d = a.specifications;
                                f = a.storage;
                                t.next = 3;
                                return request.get(getManifestApi({
                                    workspace: r,
                                    namespace: l,
                                    cluster_id: c,
                                    cluster: s
                                }));
                            case 3:
                                p = t.sent;
                                m = JSON.parse(p.customResource);
                                t.t0 = _this.detail.app_id;
                                t.next = t.t0 === RadonDBAppId.ClickHouse ? 8 : t.t0 === RadonDBAppId.PostgreSQL ? 11 : t.t0 === RadonDBAppId.MySQL ? 13 : t.t0 === RadonDBAppId.RedisCluster ? 15 : t.t0 === RadonDBAppId.RedisSentinel ? 18 : t.t0 === RadonDBAppId.MongoDB ? 21 : t.t0 === RadonDBAppId.Elasticsearch ? 23 : t.t0 === RadonDBAppId.Kafka ? 51 : t.t0 === RadonDBAppId.OpenSearch ? 53 : 78;
                                break;
                            case 8:
                                h = module26(m, "spec.configuration.clusters[0].layout");
                                module74(m, "spec.configuration.clusters[0].layout", {
                                    ...h,
                                    shardsCount
                                });
                                return t.abrupt("break", 79);
                            case 11:
                                module74(m, "spec.postgresql.readwriteinstance.replicas", shardsCount);
                                return t.abrupt("break", 79);
                            case 13:
                                module74(m, "spec.replicas", shardsCount);
                                return t.abrupt("break", 79);
                            case 15:
                                v = getCpuAndMemoryFromSpecifications(d);
                                if (u === "proxy") {
                                    module74(m, "spec.redisProxy.replicas", shardsCount);
                                    module74(m, "spec.redisProxy.resources.requests", v);
                                    module74(m, "spec.redisProxy.resources.limits", v);
                                    if (shardsCount > 0) {
                                        module74(m, "spec.redisProxy.enabled", true);
                                    }
                                } else {
                                    module74(m, "spec.clusterSize", shardsCount);
                                    module74(m, "spec.redisLeader.replicas", shardsCount);
                                    module74(m, "spec.redisFollower.replicas", shardsCount);
                                }
                                return t.abrupt("break", 79);
                            case 18:
                                module74(m, "spec.clusterSize", shardsCount);
                                module74(m, "spec.redisReplica.replicas", shardsCount);
                                return t.abrupt("break", 79);
                            case 21:
                                module74(m, "spec.members", shardsCount);
                                return t.abrupt("break", 79);
                            case 23:
                                g = getCpuAndMemoryFromSpecifications(d);
                                if (u !== "kibana") {
                                    t.next = 36;
                                    break;
                                }
                                _ = _this.getECKKibanaUrl(s, l, c);
                                t.next = 28;
                                return request.get(_);
                            case 28:
                                y = t.sent;
                                module74(y, "spec.count", shardsCount);
                                module74(y, "spec.podTemplate.spec.containers[0].resources.requests", g);
                                module74(y, "spec.podTemplate.spec.containers[0].resources.limits", g);
                                t.next = 34;
                                return request.put(_, y);
                            case 34:
                                _this.detail.nodes.kibana = shardsCount;
                                return t.abrupt("return");
                            case 36:
                                E = module26(m, "spec.nodeSets", []);
                                if (b = E.find((e)=>e.name.startsWith(u))) {
                                    t.next = 46;
                                    break;
                                }
                                S = module26(eckYaml.resources, "spec.nodeSets", []);
                                if (b = S.find((e)=>e.name.startsWith(u))) {
                                    t.next = 43;
                                    break;
                                }
                                return t.abrupt("break", 79);
                            case 43:
                                b = JSON.parse(JSON.stringify(b));
                                module74(b, "volumeClaimTemplates[0].spec.storageClassName", module26(E, "[0].volumeClaimTemplates[0].spec.storageClassName"));
                                module74(m, "spec.nodeSets", [].concat(module61(E), [
                                    b
                                ]));
                            case 46:
                                module74(b, "count", shardsCount);
                                module74(b, "podTemplate.spec.containers[0].resources", {
                                    limits: g,
                                    requests: g
                                });
                                module74(b, "podTemplate.spec.containers[0].env[0].value", `-Xms${parseInt(g.memory, 10) / 2}g -Xmx${parseInt(g.memory, 10) / 2}g`);
                                module74(b, "volumeClaimTemplates[0].spec.resources.requests.storage", f);
                                return t.abrupt("break", 79);
                            case 51:
                                module74(m, `spec.${u}.replicas`, shardsCount);
                                return t.abrupt("break", 79);
                            case 53:
                                O = getCpuAndMemoryFromSpecifications(d);
                                if (u !== "logstash") {
                                    t.next = 66;
                                    break;
                                }
                                R = _this.getLogstashUrl(s, l, c);
                                t.next = 58;
                                return request.get(R);
                            case 58:
                                A = t.sent;
                                module74(A, "spec.replicas", shardsCount);
                                module74(A, "spec.podTemplate.spec.containers[0].resources", {
                                    requests: O,
                                    limits: O
                                });
                                t.next = 63;
                                return request.put(R, A);
                            case 63:
                                _this.detail.nodes.logstash = shardsCount;
                                _this.detail = {
                                    ..._this.detail
                                };
                                return t.abrupt("return");
                            case 66:
                                if (u !== "dashboard") {
                                    t.next = 71;
                                    break;
                                }
                                if (shardsCount > 0) {
                                    module74(m, "spec.dashboards.enable", true);
                                }
                                module74(m, "spec.dashboards.replicas", shardsCount);
                                module74(m, "spec.dashboards.resources", {
                                    requests: O,
                                    limits: O
                                });
                                return t.abrupt("break", 79);
                            case 71:
                                T = module26(m, "spec.nodePools", []);
                                if (!(C = T.find((e)=>module26(e, 'additionalConfig["node.attr.datatier"]') === u))) {
                                    P = module26(T, "[0].persistence.pvc.storageClass");
                                    C = JSON.parse(JSON.stringify(opensearchYaml.node));
                                    module74(C, 'additionalConfig["node.attr.datatier"]', u);
                                    module74(C, "component", `data-node-${u}`);
                                    module74(C, "persistence.pvc.storageClass", P);
                                    module74(m, "spec.nodePools", [].concat(module61(T), [
                                        C
                                    ]));
                                }
                                module74(C, "replicas", shardsCount);
                                module74(C, "resources", {
                                    limits: O,
                                    requests: O
                                });
                                module74(C, "diskSize", f);
                                return t.abrupt("break", 79);
                            case 78:
                                return t.abrupt("break", 79);
                            case 79:
                                p.customResource = JSON.stringify(m);
                                p.version += 1;
                                t.next = 83;
                                return request.put(getManifestApi({
                                    workspace: r,
                                    namespace: l,
                                    cluster_id: c,
                                    cluster: s
                                }), p);
                            case 83:
                                _this.updateDetail({
                                    detail: p,
                                    namespace: l,
                                    cluster: s,
                                    workspace: r
                                });
                            case 84:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
    }
});
A = module49(g.prototype, "updateStorage", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return (()=>{
            const t = module44(module41.mark(function t(a) {
                let r;
                let o;
                let c;
                let s;
                let l;
                let i;
                let u;
                let d;
                let f;
                let p;
                let m;
                let h;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                r = a.workspace;
                                o = a.cluster_id;
                                c = a.cluster;
                                s = a.namespace;
                                l = a.storage;
                                i = a.nodeRole;
                                t.next = 3;
                                return request.get(getManifestApi({
                                    workspace: r,
                                    namespace: s,
                                    cluster_id: o,
                                    cluster: c
                                }));
                            case 3:
                                u = t.sent;
                                d = JSON.parse(u.customResource);
                                if (parseFloat(l) < 10) {
                                    l = "10Gi";
                                }
                                t.t0 = _this.detail.app_id;
                                t.next = t.t0 === RadonDBAppId.ClickHouse ? 9 : t.t0 === RadonDBAppId.PostgreSQL ? 11 : t.t0 === RadonDBAppId.MySQL ? 13 : t.t0 === RadonDBAppId.RedisCluster || t.t0 === RadonDBAppId.RedisSentinel ? 15 : t.t0 === RadonDBAppId.MongoDB ? 17 : t.t0 === RadonDBAppId.Elasticsearch ? 19 : t.t0 === RadonDBAppId.Kafka ? 23 : t.t0 === RadonDBAppId.OpenSearch ? 25 : 29;
                                break;
                            case 9:
                                module74(d, "spec.templates.volumeClaimTemplates[0].spec.resources.requests.storage", l);
                                return t.abrupt("break", 30);
                            case 11:
                                module74(d, "spec.postgresql.readwriteinstance.volumeClaimTemplates[0].spec.resources.requests.storage", l);
                                return t.abrupt("break", 30);
                            case 13:
                                module74(d, "spec.persistence.size", l);
                                return t.abrupt("break", 30);
                            case 15:
                                module74(d, "spec.storage.volumeClaimTemplate.spec.resources.requests.storage", l);
                                return t.abrupt("break", 30);
                            case 17:
                                module74(d, "spec.statefulSet.spec.volumeClaimTemplates[0].spec.resources.requests.storage", l);
                                return t.abrupt("break", 30);
                            case 19:
                                f = module26(d, "spec.nodeSets", []);
                                if (p = f.find((e)=>e.name.startsWith(i))) {
                                    module74(p, "volumeClaimTemplates[0].spec.resources.requests.storage", l);
                                    module74(p, "name", `${i}-${l.toLowerCase()}`);
                                }
                                return t.abrupt("break", 30);
                            case 23:
                                if (i === "kafka") {
                                    module74(d, "spec.kafka.storage.volumes[0].size", l);
                                } else {
                                    module74(d, "spec.zookeeper.storage.size", l);
                                }
                                return t.abrupt("break", 30);
                            case 25:
                                m = module26(d, "spec.nodePools", []);
                                h = m.find((e)=>module26(e, 'additionalConfig["node.attr.datatier"]') === i);
                                module74(h, "diskSize", l);
                                return t.abrupt("break", 30);
                            case 29:
                                return t.abrupt("break", 30);
                            case 30:
                                u.customResource = JSON.stringify(d);
                                u.version += 1;
                                t.next = 34;
                                return request.put(getManifestApi({
                                    workspace: r,
                                    namespace: s,
                                    cluster_id: o,
                                    cluster: c
                                }), u);
                            case 34:
                                if (i) {
                                    module74(_this.detail, `realStorages[${i}]`, l);
                                } else {
                                    _this.detail.realStorage = l;
                                }
                                _this.updateDetail({
                                    detail: u,
                                    namespace: s,
                                    cluster: c,
                                    workspace: r
                                });
                            case 36:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
    }
});
T = module49(g.prototype, "updateSpecifications", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return (()=>{
            const t = module44(module41.mark(function t(a) {
                let r;
                let o;
                let c;
                let s;
                let l;
                let i;
                let u;
                let d;
                let f;
                let p;
                let m;
                let h;
                let v;
                let g;
                let _;
                let y;
                let E;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                r = a.workspace;
                                o = a.cluster_id;
                                c = a.cluster;
                                s = a.namespace;
                                l = a.specifications;
                                i = a.nodeRole;
                                u = getCpuAndMemoryFromSpecifications(l);
                                t.next = 4;
                                return request.get(getManifestApi({
                                    workspace: r,
                                    namespace: s,
                                    cluster_id: o,
                                    cluster: c
                                }));
                            case 4:
                                d = t.sent;
                                f = JSON.parse(d.customResource);
                                t.t0 = _this.detail.app_id;
                                t.next = t.t0 === RadonDBAppId.ClickHouse ? 9 : t.t0 === RadonDBAppId.PostgreSQL ? 12 : t.t0 === RadonDBAppId.MySQL ? 14 : t.t0 === RadonDBAppId.RedisCluster ? 17 : t.t0 === RadonDBAppId.RedisSentinel ? 19 : t.t0 === RadonDBAppId.MongoDB ? 22 : t.t0 === RadonDBAppId.Elasticsearch ? 25 : t.t0 === RadonDBAppId.Kafka ? 40 : t.t0 === RadonDBAppId.OpenSearch ? 43 : 60;
                                break;
                            case 9:
                                module74(f, "spec.templates.podTemplates[0].spec.containers[0].resources.limits", u);
                                module74(f, "spec.templates.podTemplates[0].spec.containers[0].resources.requests", u);
                                return t.abrupt("break", 61);
                            case 12:
                                module74(f, "spec.postgresql.readwriteinstance.podspec.containers[0].resources", {
                                    requests: u,
                                    limits: u
                                });
                                return t.abrupt("break", 61);
                            case 14:
                                module74(f, "spec.mysqlOpts.resources.requests", u);
                                module74(f, "spec.mysqlOpts.resources.limits", u);
                                return t.abrupt("break", 61);
                            case 17:
                                if (i === "proxy") {
                                    module74(f, "spec.redisProxy.resources.requests", u);
                                    module74(f, "spec.redisProxy.resources.limits", u);
                                } else {
                                    module74(f, "spec.kubernetesConfig.resources.requests", u);
                                    module74(f, "spec.kubernetesConfig.resources.limits", u);
                                }
                                return t.abrupt("break", 61);
                            case 19:
                                module74(f, "spec.kubernetesConfig.resources.requests", u);
                                module74(f, "spec.kubernetesConfig.resources.limits", u);
                                return t.abrupt("break", 61);
                            case 22:
                                module74(f, "spec.statefulSet.spec.template.spec.containers[0].resources.requests", u);
                                module74(f, "spec.statefulSet.spec.template.spec.containers[0].resources.limits", u);
                                return t.abrupt("break", 61);
                            case 25:
                                if (i !== "kibana") {
                                    t.next = 36;
                                    break;
                                }
                                p = _this.getECKKibanaUrl(c, s, o);
                                t.next = 29;
                                return request.get(p);
                            case 29:
                                m = t.sent;
                                module74(m, "spec.podTemplate.spec.containers[0].resources.requests", u);
                                module74(m, "spec.podTemplate.spec.containers[0].resources.limits", u);
                                t.next = 34;
                                return request.put(p, m);
                            case 34:
                                _this.detail.specifications.kibana = u;
                                return t.abrupt("return");
                            case 36:
                                h = module26(f, "spec.nodeSets", []);
                                if (v = h.find((e)=>e.name.startsWith(i))) {
                                    module74(v, "podTemplate.spec.containers[0].resources", {
                                        limits: u,
                                        requests: u
                                    });
                                    module74(v, "podTemplate.spec.containers[0].env[0].value", `-Xms${parseInt(u.memory, 10) / 2}g -Xmx${parseInt(u.memory, 10) / 2}g`);
                                }
                                return t.abrupt("break", 61);
                            case 40:
                                module74(f, `spec.${i}.resources.requests`, u);
                                module74(f, `spec.${i}.resources.limits`, u);
                                return t.abrupt("break", 61);
                            case 43:
                                if (i !== "logstash") {
                                    t.next = 53;
                                    break;
                                }
                                g = _this.getLogstashUrl(c, s, o);
                                t.next = 47;
                                return request.get(g);
                            case 47:
                                _ = t.sent;
                                module74(_, "spec.podTemplate.spec.containers[0].resources", {
                                    requests: u,
                                    limits: u
                                });
                                t.next = 51;
                                return request.put(g, _);
                            case 51:
                                _this.detail = {
                                    ..._this.detail
                                };
                                return t.abrupt("return");
                            case 53:
                                if (i !== "dashboard") {
                                    t.next = 56;
                                    break;
                                }
                                module74(f, "spec.dashboards.resources", {
                                    requests: u,
                                    limits: u
                                });
                                return t.abrupt("break", 61);
                            case 56:
                                y = module26(f, "spec.nodePools", []);
                                E = y.find((e)=>module26(e, 'additionalConfig["node.attr.datatier"]') === i);
                                module74(E, "resources", {
                                    limits: u,
                                    requests: u
                                });
                                return t.abrupt("break", 61);
                            case 60:
                                return t.abrupt("break", 61);
                            case 61:
                                d.customResource = JSON.stringify(f);
                                d.version += 1;
                                t.next = 65;
                                return request.put(getManifestApi({
                                    workspace: r,
                                    namespace: s,
                                    cluster_id: o,
                                    cluster: c
                                }), d);
                            case 65:
                                _this.updateDetail({
                                    detail: d,
                                    namespace: s,
                                    cluster: c,
                                    workspace: r
                                });
                            case 66:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
    }
});
export default g;
