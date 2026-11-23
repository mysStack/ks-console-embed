import "./module-15.js";
import "./module-5.js";
import "./module-6.js";
import "./module-18.js";
import "./module-97.js";
import "./module-16.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-7.js";
import "./module-109.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import module988 from "./module-988.js";
import module186 from "./module-186.js";
import Module802 from "./module-802.js";
import { StatusCircle } from "./module-824.js";
import { ClusterResourceStatus, ETCDStatus, ServiceComponentStatus } from "./module-1131.js";
import module3771 from "./module-3771.js";
let i;
let c;
const D = inject("rootStore")(i = observer((c = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.updateData = function() {
            t.timer = setTimeout(module44(module41.mark(function* e() {
                yield t.componentMonitoringStore.requestHealthMetrics();
                t.updateData();
            })), 2000);
        };
        t.getComponentStatus = function(e) {
            if ((e.conditions || []).some((e)=>e.status !== "Ture" && e.type !== "Healthy")) {
                return "unhealthy";
            }
            return "healthy";
        };
        t.getCoreComponentStatus = function() {
            const data = t.componentHealth.data;
            const { kubernetes = [], node = {} } = data === undefined ? {} : data;
            const i = {};
            kubernetes.forEach((e)=>{
                i[module26(e, "metadata.name")] = t.getComponentStatus(e);
            });
            i.node = node.healthyNodes === node.totalNodes ? "healthy" : "unhealthy";
            i["controller-manager"] = t.componentHealth.supportControllerManager ? "healthy" : "unhealthy";
            i.scheduler = t.componentHealth.supportKsScheduler ? "healthy" : "unhealthy";
            i["etcd-0"] = t.supportETCD ? "healthy" : "unhealthy";
            return i;
        };
        t.fetchData = function() {
            t.componentMonitoringStore.fetchHealthMetrics();
        };
        t.handleNodeClick = function() {
            if (globals.app.hasPermission({
                module: "nodes",
                action: "view",
                cluster: t.cluster
            })) {
                t.routing.push(`/clusters/${t.cluster}/nodes`);
            }
        };
        t.handleComponentsClick = function(e, r) {
            if (r === "kubeSystem") {
                r = "kubernetes";
            }
            if (globals.app.hasPermission({
                module: "monitoring",
                action: "view",
                cluster: t.cluster
            }) && !e) {
                t.routing.push(`/clusters/${t.cluster}/components?type=${r}`);
            }
        };
        t.componentMonitoringStore = new module988({
            cluster: t.cluster
        });
        t.fetchData();
        return t;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.updateData();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                clearTimeout(this.timer);
            }
        },
        {
            key: "renderNodeStatus",
            value: function() {
                const { counts, isLoading = false } = this.componentHealth;
                const { health = 0, total = 0 } = counts.node || {};
                return <Module802 className={module3771.node} title={t("CLUSTER_NODE_STATUS")}><module186.Loading spinning={isLoading}><StatusCircle theme="light" className={module3771.nodeStatus} name={t("NODE_ONLINE_STATUS")} legend={[
                    "ONLINE_NODES",
                    "ALL_NODES"
                ]} used={health} total={total} onClick={this.handleNodeClick}/></module186.Loading></Module802>;
            }
        },
        {
            key: "renderServiceComponents",
            value: function() {
                const _this = this;
                const componentCounts = this.componentHealth.componentCounts;
                const n = [
                    {
                        type: "kubesphere",
                        icon: "/assets/kubesphere.svg"
                    },
                    {
                        type: "kubeSystem",
                        icon: "/assets/kubernetes.svg"
                    },
                    {
                        type: "istio",
                        icon: "/assets/istio.svg",
                        disabled: !globals.app.hasClusterModule(this.cluster, "servicemesh")
                    },
                    {
                        type: "monitoring",
                        icon: "/assets/monitoring.svg",
                        disabled: !globals.app.hasClusterModule(this.cluster, "monitoring")
                    },
                    {
                        type: "logging",
                        icon: "/assets/logging.svg",
                        disabled: !globals.app.hasClusterModule(this.cluster, "logging")
                    },
                    {
                        type: "devops",
                        icon: "/assets/dev-ops.svg",
                        disabled: !globals.app.hasClusterModule(this.cluster, "devops")
                    }
                ];
                return <div className={module3(module3771.list, module3771.service)}>{n.map((n)=><div key={n.type} className={module3(module3771.item, module31({}, module3771.disabled, n.disabled))} onClick={function() {
                        return _this.handleComponentsClick(n.disabled, n.type);
                    }}><img src={n.icon}/>{n.disabled ? <span>{t("DISABLED")}</span> : <p>{module26(componentCounts, `[${n.type}].health`, 0)}<span>/{module26(componentCounts, `[${n.type}].total`, 0)}</span></p>}</div>)}</div>;
            }
        },
        {
            key: "renderCoreComponents",
            value: function() {
                const e = this.getCoreComponentStatus();
                const r = [
                    {
                        type: "etcd-0",
                        name: "etcd"
                    },
                    {
                        type: "controller-manager",
                        name: t("CONTROLLER_MANAGER")
                    },
                    {
                        type: "scheduler",
                        name: t("KUBERNETES_SCHEDULER")
                    }
                ];
                return <div className={module3(module3771.list, module3771.core)}>{r.map((t)=>{
                    const r = e[t.type];
                    return <div key={t.type} className={module3771.item}><div className={module3(module3771.itemIcon, module3771[r])}><module186.Icon name={r === "healthy" || r === "ready" ? "check" : "substract"} type="light" size={16}/></div><p title={t.name}>{t.name}</p></div>;
                })}</div>;
            }
        },
        {
            key: "renderComponentStatus",
            value: function() {
                const isLoading = this.componentMonitoringStore.health.isLoading;
                const spinning = isLoading !== undefined && isLoading;
                return <Module802 className={module3771.components} title={t("COMPONENT_STATUS")}><module186.Loading spinning={spinning}><div className={module3771.wrapper}>{this.renderServiceComponents()}{this.renderCoreComponents()}</div></module186.Loading></Module802>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div><module186.Columns className="is-1_1"><module186.Column className="is-5">{this.renderNodeStatus()}</module186.Column><module186.Column className="is-7">{this.renderComponentStatus()}</module186.Column></module186.Columns><module186.Columns><module186.Column className="is-12"><ClusterResourceStatus cluster={this.cluster}/>{this.supportETCD && <ETCDStatus cluster={this.cluster}/>}<ServiceComponentStatus cluster={this.cluster}/></module186.Column></module186.Columns></div>;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "componentHealth",
            get: function() {
                return module14.toJS(this.componentMonitoringStore.health);
            }
        },
        {
            key: "supportETCD",
            get: function() {
                return this.props.rootStore.monitoring.supportETCD;
            }
        }
    ]);
    return n;
})(Component), module49(c.prototype, "componentHealth", [
    module14.computed
], Object.getOwnPropertyDescriptor(c.prototype, "componentHealth"), c.prototype), module49(c.prototype, "supportETCD", [
    module14.computed
], Object.getOwnPropertyDescriptor(c.prototype, "supportETCD"), c.prototype), i = c)) || i) || i;
export default D;
