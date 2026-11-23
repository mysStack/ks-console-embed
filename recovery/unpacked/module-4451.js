import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-553.js";
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import module1132 from "./module-1132.js";
import { Component } from "./module-1800.js";
let o;
const b = {
    deployment_count: "workspace_deployment_count",
    statefulset_count: "workspace_statefulset_count",
    daemonset_count: "workspace_daemonset_count",
    job_count: "workspace_job_count",
    cronjob_count: "workspace_cronjob_count",
    pvc_count: "workspace_pvc_count",
    service_count: "workspace_service_count",
    route_count: "workspace_ingresses_extensions_count",
    pod_running_count: "workspace_pod_running_count"
};
const k = inject("rootStore")(o = observer(o = ((Component_1)=>{
    module55(a, Component_1);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(...o) {
        let e;
        module36(this, a);
        e = r.call(this, ...o);
        e.getMonitoringCfgs = function() {
            const isEdge = e.props.isEdge;
            return [
                {
                    type: "deployment",
                    title: "DEPLOYMENT",
                    legend: [
                        "DEPLOYMENT_PL"
                    ],
                    metricType: b.deployment_count
                },
                {
                    type: "statefulset",
                    title: "STATEFULSET",
                    legend: [
                        "STATEFULSET_PL"
                    ],
                    metricType: b.statefulset_count,
                    isHidden: isEdge
                },
                {
                    type: "daemonset",
                    title: "DAEMONSET",
                    legend: [
                        "DAEMONSET_PL"
                    ],
                    metricType: b.daemonset_count,
                    isHidden: isEdge
                },
                {
                    type: "job",
                    title: "JOB",
                    legend: [
                        "JOB_PL"
                    ],
                    metricType: b.job_count
                },
                {
                    type: "cronjob",
                    title: "CRONJOB",
                    legend: [
                        "CRONJOB_PL"
                    ],
                    metricType: b.cronjob_count
                },
                {
                    type: "pvc",
                    title: "PERSISTENT_VOLUME_CLAIM",
                    legend: [
                        "PERSISTENT_VOLUME_CLAIM_PL"
                    ],
                    metricType: b.pvc_count,
                    isHidden: isEdge
                },
                {
                    type: "service",
                    title: "SERVICE",
                    legend: [
                        "SERVICE_PL"
                    ],
                    metricType: b.service_count,
                    isHidden: isEdge
                },
                {
                    type: "routes",
                    title: "ROUTE",
                    legend: [
                        "ROUTE_PL"
                    ],
                    metricType: b.route_count,
                    isHidden: isEdge
                },
                {
                    type: "pod",
                    title: "POD",
                    legend: [
                        "RUNNING_PODS"
                    ],
                    metricType: b.pod_running_count
                }
            ].filter((e)=>!e.isHidden);
        };
        e.getControllerProps = function() {
            return {
                title: t("APPLICATION_RESOURCE_PL"),
                createTime: e.createTime,
                customAction: e.renderClusters()
            };
        };
        e.fetchData = function(t) {
            e.monitorStore.cluster = e.props.cluster;
            e.monitorStore.fetchMetrics({
                workspace: e.workspace,
                metrics: Object.values(b),
                ...t
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (e.cluster !== this.props.cluster) {
                    this.fetchData();
                }
            }
        },
        {
            key: "init",
            value: function() {
                this.monitorStore = new module1132;
            }
        },
        {
            key: "renderClusters",
            value: function() {
                const props = this.props;
                const { workspace: _workspace, cluster, ...rest } = props;
                if (rest.options.length) {
                    return <module186.Select value={cluster} {...rest}/>;
                }
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.workspace;
            }
        },
        {
            key: "createTime",
            get: function() {
                return module26(this.props.rootStore, "workspace.detail.createTime");
            }
        }
    ]);
    return a;
})(Component)) || o) || o;
export default k;
