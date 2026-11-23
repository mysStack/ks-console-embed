import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module3 from "unpacked/module-3.js";
import module26 from "unpacked/module-26.js";
import module1136 from "unpacked/module-1136.js";
import module186 from "unpacked/module-186.js";
import Module802 from "components/Base/Card";
import { StatusCircle } from "components/Cards/Monitoring/index";
import { ClusterResourceStatus, ETCDStatus, ServiceComponentStatus } from "unpacked/module-1131.js";
import module4140 from "unpacked/module-4140.js";
let o;
let c;
const A = inject("rootStore")(o = observer((c = ((Component_1)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
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
            const o = {};
            kubernetes.forEach((e)=>{
                o[module26(e, "metadata.name")] = t.getComponentStatus(e);
            });
            o.node = node.healthyNodes === node.totalNodes ? "healthy" : "unhealthy";
            o["controller-manager"] = t.componentHealth.supportControllerManager ? "healthy" : "unhealthy";
            o.scheduler = t.componentHealth.supportKsScheduler ? "healthy" : "unhealthy";
            o["etcd-0"] = t.supportETCD ? "healthy" : "unhealthy";
            return o;
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
        t.handleComponentsClick = function(e, a) {
            if (a === "kubeSystem") {
                a = "kubernetes";
            }
            if (globals.app.hasPermission({
                module: "monitoring",
                action: "view",
                cluster: t.cluster
            }) && !e) {
                t.routing.push(`/clusters/${t.cluster}/components?type=${a}`);
            }
        };
        t.componentMonitoringStore = new module1136({
            cluster: t.cluster
        });
        t.fetchData();
        return t;
    }
    module37(r, [
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
                return <Module802 className={module4140.node} title={t("CLUSTER_NODE_STATUS")}><module186.Loading spinning={isLoading}><StatusCircle theme="light" className={module4140.nodeStatus} name={t("NODE_ONLINE_STATUS")} legend={[
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
                const r = [
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
                return <div className={module3(module4140.list, module4140.service)}>{r.map((r)=><div key={r.type} className={module3(module4140.item, module31({}, module4140.disabled, r.disabled))} onClick={function() {
                        return _this.handleComponentsClick(r.disabled, r.type);
                    }}><img src={r.icon}/>{r.disabled ? <span>{t("DISABLED")}</span> : <p>{module26(componentCounts, `[${r.type}].health`, 0)}<span>/{module26(componentCounts, `[${r.type}].total`, 0)}</span></p>}</div>)}</div>;
            }
        },
        {
            key: "renderCoreComponents",
            value: function() {
                const e = this.getCoreComponentStatus();
                const a = [
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
                return <div className={module3(module4140.list, module4140.core)}>{a.map((t)=>{
                    const a = e[t.type];
                    return <div key={t.type} className={module4140.item}><div className={module3(module4140.itemIcon, module4140[a])}><module186.Icon name={a === "healthy" || a === "ready" ? "check" : "substract"} type="light" size={16}/></div><p title={t.name}>{t.name}</p></div>;
                })}</div>;
            }
        },
        {
            key: "renderComponentStatus",
            value: function() {
                const isLoading = this.componentMonitoringStore.health.isLoading;
                const spinning = isLoading !== undefined && isLoading;
                return <Module802 className={module4140.components} title={t("COMPONENT_STATUS")}><module186.Loading spinning={spinning}><div className={module4140.wrapper}>{this.renderServiceComponents()}{this.renderCoreComponents()}</div></module186.Loading></Module802>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div><module186.Columns className="is-1_1"><module186.Column className="is-12">{this.renderNodeStatus()}</module186.Column></module186.Columns><module186.Columns><module186.Column className="is-12"><ClusterResourceStatus cluster={this.cluster}/>{this.supportETCD && <ETCDStatus cluster={this.cluster}/>}<ServiceComponentStatus cluster={this.cluster}/></module186.Column></module186.Columns></div>;
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
    return r;
})(Component), module49(c.prototype, "componentHealth", [
    module14.computed
], Object.getOwnPropertyDescriptor(c.prototype, "componentHealth"), c.prototype), module49(c.prototype, "supportETCD", [
    module14.computed
], Object.getOwnPropertyDescriptor(c.prototype, "supportETCD"), c.prototype), o = c)) || o) || o;
export default A;
