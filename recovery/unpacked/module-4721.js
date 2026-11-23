import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-109.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module63 from "./module-63.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import { getLocalTime, showNameAndAlias } from "./module-52.js";
import module1026 from "./module-1026.js";
import module452 from "./module-452.js";
import Module806 from "./module-806.js";
import module4722 from "./module-4722.js";
let o;
const S = observer(o = ((Component_1)=>{
    module55(r, Component_1);
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
    function r(...o_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...o_1);
        e.store = new module1026;
        e.podStore = new module452;
        e.fetchData = function() {
            const params = e.props.match.params;
            const { cluster, namespace, instanceId } = params;
            e.store.fetchDetail({
                cluster,
                namespace,
                name: decodeURIComponent(instanceId)
            });
        };
        e.fetchPodData = function() {
            const params = e.props.match.params;
            const { cluster, namespace, podName } = params;
            e.podStore.fetchDetail({
                cluster,
                namespace,
                name: podName
            });
        };
        e.getOperations = function() {
            const specEnabled = e.store.detail.specEnabled;
            return [
                {
                    key: "online",
                    text: specEnabled ? t("TAKE_OFFLINE") : t("TAKE_ONLINE"),
                    action: "edit",
                    type: specEnabled ? "danger" : "control",
                    onClick: e.handleLine
                }
            ];
        };
        e.getAttrs = function() {
            const params = e.props.match.params;
            const { cluster, namespace } = params;
            const detail = e.store.detail;
            const c = detail === undefined ? {} : detail;
            if (module63(c)) {
                return null;
            }
            const { instanceId, enabled } = c;
            const { app, podIp, node, nodeIp, podStatus = {}, status = {}, createTime } = e.podDetail;
            return [
                {
                    name: t("CLUSTER"),
                    value: showNameAndAlias(cluster, "cluster")
                },
                {
                    name: t("PROJECT"),
                    value: showNameAndAlias(namespace, "project")
                },
                {
                    name: t("APP"),
                    value: app
                },
                {
                    name: t("MICROSERVICE_INSTANCE_ID"),
                    value: instanceId
                },
                {
                    name: t("MICROSERVICE_INSTANCE_STATUS"),
                    value: enabled ? t("MICROSERVICE_INSTANCE_STATUS_RUNNING") : t("MICROSERVICE_INSTANCE_STATUS_OFFLINE")
                },
                {
                    name: t("POD_STATUS"),
                    value: t(podStatus.status)
                },
                {
                    name: t("POD_IP_ADDRESS"),
                    value: podIp
                },
                {
                    name: t("NODE_NAME"),
                    value: node
                },
                {
                    name: t("NODE_IP_ADDRESS"),
                    value: nodeIp
                },
                {
                    name: t("RESTART_PL"),
                    value: podStatus.restarts
                },
                {
                    name: t("QOS_CLASS"),
                    value: status.qosClass
                },
                {
                    name: t("CREATION_TIME_TCAP"),
                    value: getLocalTime(createTime).format("YYYY-MM-DD HH:mm:ss")
                }
            ];
        };
        e.handleLine = function() {
            const e_store = e.store;
            const a_detail = e_store.detail;
            if (e_store.detail.specEnabled) {
                e.store.offLine(a_detail).then(setTimeout(()=>{
                    module240.success({
                        content: t("TAKE_OFFLINE_SUCCESS")
                    });
                    e.fetchData();
                }, 1000));
            } else {
                e.store.onLine(a_detail).then(setTimeout(()=>{
                    module240.success({
                        content: t("TAKE_ONLINE_SUCCESS")
                    });
                    e.fetchData();
                }, 1000));
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
                this.fetchPodData();
            }
        },
        {
            key: "render",
            value: function() {
                const podName = this.props.match.params.podName;
                const stores = {
                    detailStore: this.podStore,
                    instanceDetailStore: this.store
                };
                if (this.store.isLoading && !this.store.detail.name) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const r = {
                    module: this.module,
                    authKey: "springcloud-microservices",
                    name: this.store.detail.podName || podName,
                    desc: this.store.detail.description,
                    icon: "pod",
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("MICROSERVICE_INSTANCE_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module806 stores={stores} {...r} routes={module4722(this.props.match.path)}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "microservices";
            }
        },
        {
            key: "podDetail",
            get: function() {
                return this.podStore.detail;
            }
        },
        {
            key: "listUrl",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                if (workspace) {
                    return `/${workspace}/clusters/${cluster}/projects/${namespace}/${this.module}`;
                }
                return `/clusters/${cluster}/${this.module}`;
            }
        }
    ]);
    return r;
})(Component)) || o;
export default S;
