import "./module-12.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import Module790 from "./module-790.js";
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import { Component } from "./module-553.js";
import module837 from "./module-837.js";
import module959 from "./module-959.js";
import module1411 from "./module-1411.js";
import { hideGPUByLicense } from "./module-52.js";
import { ICON_TYPES } from "./module-72.js";
import { startAutoRefresh, stopAutoRefresh } from "./module-795.js";
import Module4941 from "./module-4941.js";
import module4944 from "./module-4944.js";
import Module4945 from "./module-4945.js";
let o;
const metrics = [
    "namespace_pod_count",
    "namespace_deployment_count",
    "namespace_statefulset_count",
    "namespace_daemonset_count",
    "namespace_job_count",
    "namespace_cronjob_count",
    "namespace_pvc_count",
    "namespace_service_count",
    "namespace_secret_count",
    "namespace_configmap_count",
    "namespace_ingresses_extensions_count",
    "namespace_s2ibuilder_count"
];
const A = [
    "namespace_cpu_usage",
    "namespace_memory_usage_wo_cache",
    "namespace_gpu_usage",
    "namespace_gpu_memory_usage"
];
const j = inject("rootStore")(o = observer(o = ((Component_1)=>{
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
    function a(e) {
        let n;
        module36(this, a);
        n = r.call(this, e);
        n.fetchData = function(e = {}) {
            n.fetchMetrics();
            n.overviewStore.fetchResourceStatus({
                ...e,
                ...n.props.match.params,
                cluster: n.props.cluster
            });
        };
        n.fetchMetrics = function(e) {
            const n_state = n.state;
            const { resourceType, range } = n_state;
            if (resourceType === "application") {
                n.appResourceMonitorStore.fetchMetrics({
                    ...n.props.match.params,
                    cluster: n.props.cluster,
                    metrics,
                    step: `${Math.floor(range / 10)}s`,
                    times: 10,
                    fillZero: true,
                    ...e,
                    autoRefresh: false
                });
            } else {
                n.physicalResourceMonitorStore.fetchMetrics({
                    ...n.props.match.params,
                    cluster: n.props.cluster,
                    metrics: hideGPUByLicense(A, n.props.cluster),
                    step: `${Math.floor(range / 40)}s`,
                    times: 40,
                    fillZero: true,
                    ...e,
                    autoRefresh: false
                });
            }
        };
        n.getResourceData = function() {
            const { quota = {}, status = {} } = module14.toJS(n.overviewStore.resource);
            const c = quota.used || {};
            return [
                {
                    key: "deployments",
                    icon: ICON_TYPES.deployments,
                    name: "DEPLOYMENT",
                    routeName: "deployments",
                    num: c["count/deployments.apps"],
                    warnNum: status.deployments,
                    metric: "namespace_deployment_count"
                },
                {
                    key: "statefulsets",
                    icon: ICON_TYPES.statefulsets,
                    name: "STATEFULSET",
                    routeName: "statefulsets",
                    num: c["count/statefulsets.apps"],
                    warnNum: status.statefulsets,
                    metric: "namespace_statefulset_count"
                },
                {
                    key: "volumes",
                    icon: ICON_TYPES.volumes,
                    name: "PERSISTENT_VOLUME_CLAIM",
                    routeName: "volumes",
                    num: c.persistentvolumeclaims || c["count/persistentvolumeclaims"],
                    warnNum: status["persistent-volume-claims"],
                    metric: "namespace_pvc_count"
                },
                {
                    key: "services",
                    icon: ICON_TYPES.services,
                    name: "SERVICE",
                    routeName: "services",
                    num: c["count/services"],
                    metric: "namespace_service_count"
                },
                {
                    key: "ingresses",
                    icon: ICON_TYPES.ingresses,
                    name: "ROUTE",
                    routeName: "ingresses",
                    num: c["count/ingresses.extensions"],
                    metric: "namespace_ingresses_extensions_count"
                }
            ];
        };
        n.handleResouceTypeChange = function(resourceType) {
            n.setState({
                resourceType
            }, function() {
                n.fetchMetrics();
            });
        };
        n.handleRangeChange = function(range) {
            n.setState({
                range
            }, function() {
                n.fetchMetrics();
            });
        };
        n.clusterRenderer = function(e) {
            return t("CLUSTER_VALUE", {
                value: e.label
            });
        };
        n.state = {
            resourceType: "application",
            range: 43200
        };
        n.overviewStore = new module1411;
        n.appResourceMonitorStore = new module959;
        n.physicalResourceMonitorStore = new module959;
        n.fetchData();
        return n;
    }
    module37(a, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!(module837(e.match.params, this.props.match.params) && this.props.cluster === e.cluster)) {
                    this.fetchData();
                }
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                startAutoRefresh(this, {
                    method: "fetchMetrics",
                    interval: 10000,
                    leading: false
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                stopAutoRefresh(this);
            }
        },
        {
            key: "renderApplicationResource",
            value: function() {
                const _this = this;
                const isLoading_1 = module14.toJS(this.overviewStore.resource).isLoading;
                const appResourceMonitorStore = this.appResourceMonitorStore;
                const { data, isLoading, isRefreshing } = appResourceMonitorStore;
                const u = this.getResourceData();
                return <module186.Loading spinning={isLoading_1}><div className={module4944.resources}>{u.filter((e)=>!e.disabled).map((t)=><Module4941 {..._this.props.match.params} {...t} metrics={module26(data, `${t.metric}.data.result`)} isMetricsLoading={isLoading || isRefreshing}/>)}</div></module186.Loading>;
            }
        },
        {
            key: "renderPhysicalResource",
            value: function() {
                const _this = this;
                const physicalResourceMonitorStore = this.physicalResourceMonitorStore;
                const { data, isLoading, isRefreshing } = physicalResourceMonitorStore;
                const c = this.timeOptions.find((t)=>t.value === _this.state.range) || {};
                return <div><Module4945 type="cpu" title={t("CPU_USAGE_TIME", {
                    time: c.label
                })} metrics={module26(data, "namespace_cpu_usage.data.result")} isLoading={isLoading || isRefreshing} showDay={c.value >= 172800}/><Module4945 type="memory" title={t("MEMORY_USAGE_TIME", {
                    time: c.label
                })} metrics={module26(data, "namespace_memory_usage_wo_cache.data.result")} isLoading={isLoading || isRefreshing} showDay={c.value >= 172800}/></div>;
            }
        },
        {
            key: "renderHeader",
            value: function() {
                const props = this.props;
                const { cluster, clusters, onClusterChange } = props;
                return <div className={module4944.header}><module186.RadioGroup mode="button" value={this.state.resourceType} onChange={this.handleResouceTypeChange} size="small"><module186.RadioButton value="application">{t("APPLICATION_RESOURCE_PL")}</module186.RadioButton><module186.RadioButton value="physical">{t("PHYSICAL_RESOURCE_PL")}</module186.RadioButton></module186.RadioGroup><module186.Select className={module4944.timeSelect} defaultValue={this.state.range} options={this.timeOptions} onChange={this.handleRangeChange}/><module186.Select className={module4944.cluster} value={cluster} options={clusters} onChange={onClusterChange} valueRenderer={this.clusterRenderer} showTip/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const resourceType = this.state.resourceType;
                return <Module790 className={module4944.wrapper} title={t("RESOURCE_STATUS")}>{this.renderHeader()}{resourceType === "application" ? this.renderApplicationResource() : this.renderPhysicalResource()}</Module790>;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "namespace",
            get: function() {
                return module26(this.props.match, "params.namespace");
            }
        },
        {
            key: "timeOptions",
            get: function() {
                return [
                    {
                        label: t("LAST_TIME_H", {
                            num: 1
                        }),
                        value: 3600
                    },
                    {
                        label: t("LAST_TIME_H", {
                            num: 2
                        }),
                        value: 7200
                    },
                    {
                        label: t("LAST_TIME_H", {
                            num: 5
                        }),
                        value: 18000
                    },
                    {
                        label: t("LAST_TIME_H", {
                            num: 12
                        }),
                        value: 43200
                    },
                    {
                        label: t("LAST_TIME_D", {
                            num: 1
                        }),
                        value: 86400
                    },
                    {
                        label: t("LAST_TIME_D", {
                            num: 2
                        }),
                        value: 172800
                    },
                    {
                        label: t("LAST_TIME_D", {
                            num: 3
                        }),
                        value: 259200
                    },
                    {
                        label: t("LAST_TIME_D", {
                            num: 7
                        }),
                        value: 604800
                    }
                ];
            }
        }
    ]);
    return a;
})(Component)) || o) || o;
export default j;
