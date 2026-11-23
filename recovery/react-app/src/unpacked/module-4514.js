import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-320.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-110.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module41 from "unpacked/module-41.js";
import module61 from "unpacked/module-61.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "unpacked/module-31.js";
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
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module14 from "unpacked/module-14.js";
import module443 from "stores/service";
import module858 from "stores/node";
import { RadonDBAppId } from "unpacked/module-817.js";
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
        e.nodeStore = new module858;
        module65(e, "data", i, module88(e));
        e.getUrl = function({ namespace, chi, app_id, cluster } = {}) {
            let c = `${e.baseUrl}${e.getPath({
                cluster,
                namespace
            })}/services?labelSelector=`;
            switch(app_id){
                case RadonDBAppId.ClickHouse:
                    c = `${c}clickhouse.radondb.com/chi=${chi},clickhouse.radondb.com/Service=chi `;
                    break;
                case RadonDBAppId.MySQL:
                    c = `${c}app.kubernetes.io/instance=${chi},mysql.radondb.com/service-type+in+(leader-service,follower-service)`;
                    break;
                case RadonDBAppId.PostgreSQL:
                    c = `${c}app-name=${chi}`;
                    break;
                case RadonDBAppId.RedisCluster:
                    c = `${c}redis.radondb.com/name=${chi},role+in+(leader,follower,proxy)`;
                    break;
                case RadonDBAppId.RedisSentinel:
                    c = `${c}redis.radondb.com/name=${chi},redis.radondb.com/role+in+%28master%2Cslave%29`;
                    break;
                case RadonDBAppId.Elasticsearch:
                    c = `${c}elasticsearch.k8s.elastic.co/cluster-name=${chi}`;
                    break;
                case "kibana":
                    c = `${c}common.k8s.elastic.co/type=kibana,kibana.k8s.elastic.co/name=${chi}`;
                    break;
                case RadonDBAppId.OpenSearch:
                    c = `${c}app.kubernetes.io/service=${chi}`;
                    break;
                default:
                    c = `${c}app.kubernetes.io/instance=${chi}`;
            }
            return c;
        };
        e.dataFormatter = function(_originData, nodeIP = "") {
            const tcpPort = module26(_originData, "spec.ports[0].port", "");
            const type = _originData.spec.type;
            const httpPort = module26(_originData, "spec.ports[0].nodePort", "");
            const namespace = _originData.metadata.namespace;
            const name = _originData.metadata.name;
            const clusterIP = _originData.spec.clusterIP;
            return {
                serviceName: name,
                namespace,
                role: module26(_originData, "metadata.labels.role", ""),
                uid: _originData.metadata.uid,
                tcpPort,
                httpPort,
                nodeIP,
                type,
                clusterIP,
                address: type === "NodePort" ? `${nodeIP}:${httpPort}` : `${name}.${namespace}:${tcpPort}`,
                _originData
            };
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
            key: "baseUrl",
            get: function() {
                return "/api";
            }
        }
    ]);
    return a;
})(module443);
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
        return (()=>{
            const t = module44(module41.mark(function t(a) {
                let r;
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
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                t.next = 2;
                                return _this.nodeStore.fetchList({
                                    cluster: a.cluster,
                                    namespace: a.namespace,
                                    workspace: a.workspace
                                });
                            case 2:
                                r = module26(_this.nodeStore, "list.data[0].ip", location.hostname);
                                s = module26(_this.nodeStore.list.data.find((e)=>module26(e, "role[1]") === "master"), "ip", r);
                                t.next = 6;
                                return request.get(_this.getUrl(a));
                            case 6:
                                l = t.sent;
                                i = [];
                                i = l.items.map((t)=>_this.dataFormatter(t, s));
                                if (a.app_id !== RadonDBAppId.MySQL) {
                                    t.next = 13;
                                    break;
                                }
                                i.sort((e)=>{
                                    if (e.serviceName.endsWith("leader")) {
                                        return -1;
                                    }
                                    return 0;
                                });
                                t.next = 31;
                                break;
                            case 13:
                                if (a.app_id !== RadonDBAppId.PostgreSQL) {
                                    t.next = 18;
                                    break;
                                }
                                if (u = i.find((e)=>e.serviceName.endsWith("readwrite"))) {
                                    d = i.find((e)=>e.serviceName.endsWith("standby-readonly"));
                                    i = [
                                        u
                                    ];
                                    if (d) {
                                        i.push(d);
                                    }
                                } else {
                                    i = [];
                                }
                                t.next = 31;
                                break;
                            case 18:
                                if (a.app_id !== RadonDBAppId.MongoDB) {
                                    t.next = 22;
                                    break;
                                }
                                i = i.filter((e)=>!e.serviceName.endsWith("arb-svc"));
                                t.next = 31;
                                break;
                            case 22:
                                if (a.app_id !== RadonDBAppId.Elasticsearch) {
                                    t.next = 30;
                                    break;
                                }
                                t.next = 25;
                                return request.get(_this.getUrl({
                                    ...a,
                                    app_id: "kibana"
                                }));
                            case 25:
                                f = t.sent;
                                p = f.items.map((t)=>_this.dataFormatter(t, s));
                                i = i.filter((e)=>e.serviceName.endsWith("es-http")).concat(p);
                                t.next = 31;
                                break;
                            case 30:
                                if (a.app_id === RadonDBAppId.RedisCluster) {
                                    i = i.filter((e)=>!(e.type === "ClusterIP" && e.clusterIP === "None"));
                                    m = i.filter((e)=>e.role === "proxy");
                                    h = module96(m, 1);
                                    v = h[0];
                                    g = i.filter((e)=>[
                                            "master",
                                            "leader"
                                        ].includes(e.role));
                                    _ = i.filter((e)=>[
                                            "slave",
                                            "follower"
                                        ].includes(e.role));
                                    i = [].concat(module61(g), module61(_));
                                    if (v) {
                                        i.push(v);
                                    }
                                } else if (a.app_id === RadonDBAppId.Kafka) {
                                    if (!(y = i.find((e)=>e.serviceName === `${a.chi}-kafka-external-bootstrap`))) {
                                        if (y = i.find((e)=>e.serviceName === `${a.chi}-kafka-bootstrap`)) {
                                            module74(y, "tcpPort", 9092);
                                            module74(y, "address", `${y.serviceName}.${y.namespace}:${y.tcpPort}`);
                                        } else {
                                            y = {};
                                        }
                                    }
                                    i = [
                                        y
                                    ];
                                } else if (a.app_id === RadonDBAppId.OpenSearch) {
                                    i = i.filter((e)=>[
                                            `${a.chi}-dashboards`,
                                            a.chi
                                        ].includes(e.serviceName));
                                }
                            case 31:
                                _this.data = i;
                                return t.abrupt("return", i);
                            case 33:
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
export default l;
