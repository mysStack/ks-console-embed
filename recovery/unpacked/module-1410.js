import "./module-12.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
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
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module837 from "./module-837.js";
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import { ICON_TYPES } from "./module-72.js";
import { startAutoRefresh, stopAutoRefresh } from "./module-795.js";
import module1411 from "./module-1411.js";
import module959 from "./module-959.js";
import module3973 from "./module-3973.js";
import module1196 from "./module-1196.js";
import module1836 from "./module-1836.js";
import { hideGPUByLicense } from "./module-52.js";
import module186 from "./module-186.js";
import Module790 from "./module-790.js";
import Module3974 from "./module-3974.js";
import Module1837 from "./module-1837.js";
import module3979 from "./module-3979.js";
let l;
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
    "namespace_ingresses_extensions_count"
];
const A = [
    "namespace_cpu_usage",
    "namespace_memory_usage_wo_cache",
    "namespace_gpu_usage",
    "namespace_gpu_memory_usage"
];
const j = inject("rootStore")(l = observer(l = ((Component_1)=>{
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
        t.fetchData = function(e) {
            t.fetchMetrics();
            t.overviewStore.fetchResourceStatus(e);
        };
        t.fetchMetrics = function(e) {
            const t_state = t.state;
            const { resourceType, range } = t_state;
            if (resourceType === "application") {
                t.appResourceMonitorStore.fetchMetrics({
                    ...t.props.match.params,
                    metrics,
                    step: `${Math.floor(range / 10)}s`,
                    times: 10,
                    fillZero: true,
                    ...e,
                    autoRefresh: false
                });
            } else {
                t.physicalResourceMonitorStore.fetchMetrics({
                    ...t.props.match.params,
                    metrics: hideGPUByLicense(A, t.cluster),
                    step: `${Math.floor(range / 40)}s`,
                    times: 40,
                    fillZero: true,
                    ...e,
                    autoRefresh: false
                });
            }
        };
        t.getResourceData = function() {
            const { quota = {}, status = {} } = module14.toJS(t.overviewStore.resource);
            const u = quota.used || {};
            return [
                {
                    key: "pods",
                    icon: ICON_TYPES.pods,
                    name: "POD",
                    routeName: "pods",
                    num: u["count/pods"],
                    warnNum: status.pods,
                    metric: "namespace_pod_count"
                },
                {
                    key: "deployments",
                    icon: ICON_TYPES.deployments,
                    name: "DEPLOYMENT",
                    routeName: "deployments",
                    num: u["count/deployments.apps"],
                    warnNum: status.deployments,
                    metric: "namespace_deployment_count"
                },
                {
                    key: "statefulsets",
                    icon: ICON_TYPES.statefulsets,
                    name: "STATEFULSET",
                    routeName: "statefulsets",
                    num: u["count/statefulsets.apps"],
                    warnNum: status.statefulsets,
                    metric: "namespace_statefulset_count"
                },
                {
                    key: "daemonsets",
                    icon: ICON_TYPES.daemonsets,
                    name: "DAEMONSET",
                    routeName: "daemonsets",
                    num: u["count/daemonsets.apps"],
                    warnNum: status.daemonsets,
                    metric: "namespace_daemonset_count"
                },
                {
                    key: "jobs",
                    icon: ICON_TYPES.jobs,
                    name: "JOB",
                    routeName: "jobs",
                    num: u["count/jobs.batch"],
                    metric: "namespace_job_count"
                },
                {
                    key: "cronjobs",
                    icon: ICON_TYPES.cronjobs,
                    name: "CRONJOB",
                    routeName: "cronjobs",
                    num: u["count/cronjobs.batch"],
                    metric: "namespace_cronjob_count"
                },
                {
                    key: "volumes",
                    icon: ICON_TYPES.volumes,
                    name: "PERSISTENT_VOLUME_CLAIM",
                    routeName: "volumes",
                    num: u.persistentvolumeclaims || u["count/persistentvolumeclaims"],
                    warnNum: status["persistent-volume-claims"],
                    metric: "namespace_pvc_count"
                },
                {
                    key: "services",
                    icon: ICON_TYPES.services,
                    name: "SERVICE",
                    routeName: "services",
                    num: u["count/services"],
                    metric: "namespace_service_count"
                },
                {
                    key: "routes",
                    icon: ICON_TYPES.ingresses,
                    name: "ROUTE",
                    routeName: "ingresses",
                    num: u["count/ingresses.extensions"],
                    metric: "namespace_ingresses_extensions_count"
                }
            ];
        };
        t.handleResouceTypeChange = function(resourceType) {
            t.setState({
                resourceType
            }, function() {
                t.fetchMetrics();
            });
        };
        t.handleRangeChange = function(range) {
            t.setState({
                range
            }, function() {
                t.fetchMetrics();
            });
        };
        t.state = {
            resourceType: "application",
            range: 43200
        };
        t.overviewStore = e.isEdgeWize ? new module3973 : new module1411;
        t.appResourceMonitorStore = t.props.isObservability ? new module1836 : e.isEdgeWize ? new module1196 : new module959;
        t.physicalResourceMonitorStore = t.props.isObservability ? new module1836 : e.isEdgeWize ? new module1196 : new module959;
        t.fetchData(t.props.match.params);
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!module837(e.match.params, this.props.match.params)) {
                    this.fetchData(this.props.match.params);
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
                const isLoading_1 = module14.toJS(this.overviewStore.resource).isLoading;
                const appResourceMonitorStore = this.appResourceMonitorStore;
                const { data, isLoading, isRefreshing } = appResourceMonitorStore;
                const l = this.getResourceData();
                const props = this.props;
                const { isEdgeWize, isObservability, match } = props;
                return <module186.Loading spinning={isLoading_1}><div className={module3979.resources}>{l.filter(({ key, disabled })=>!(isEdgeWize && [
                        "routes",
                        "volumes"
                    ].includes(key) || disabled)).map((e)=><Module3974 {...match.params} {...e} isEdgeWize={isEdgeWize} metrics={module26(data, `${e.metric}.data.result`)} isMetricsLoading={isLoading || isRefreshing} isObservability={isObservability}/>)}</div></module186.Loading>;
            }
        },
        {
            key: "renderPhysicalResource",
            value: function() {
                const _this = this;
                const physicalResourceMonitorStore = this.physicalResourceMonitorStore;
                const { data, isLoading, isRefreshing } = physicalResourceMonitorStore;
                const u = this.timeOptions.find((t)=>t.value === _this.state.range) || {};
                return <div><Module1837 type="cpu" title={t("CPU_USAGE_TIME", {
                    time: u.label
                })} metrics={module26(data, "namespace_cpu_usage.data.result")} isLoading={isLoading || isRefreshing} showDay={u.value >= 172800}/><Module1837 type="memory" title={t("MEMORY_USAGE_TIME", {
                    time: u.label
                })} metrics={module26(data, "namespace_memory_usage_wo_cache.data.result")} isLoading={isLoading || isRefreshing} showDay={u.value >= 172800}/>{this.showLicenseTip && <><Module1837 type="cpu" title={t("GPU_USAGE_TIME", {
                    time: u.label
                })} metrics={module26(data, "namespace_gpu_usage.data.result")} isLoading={isLoading || isRefreshing} showDay={u.value >= 172800}/><Module1837 type="memory" title={t("GPU_MEMORY_USAGE_TIME", {
                    time: u.label
                })} metrics={module26(data, "namespace_gpu_memory_usage.data.result")} isLoading={isLoading || isRefreshing} showDay={u.value >= 172800}/></>}</div>;
            }
        },
        {
            key: "renderHeader",
            value: function() {
                if (globals.app.hasClusterModule(this.cluster, "whizard-monitoring")) {
                    return <div className={module3979.header}><module186.RadioGroup mode="button" value={this.state.resourceType} onChange={this.handleResouceTypeChange} size="small"><module186.RadioButton value="application">{t("APPLICATION_RESOURCE_PL")}</module186.RadioButton><module186.RadioButton value="physical">{t("PHYSICAL_RESOURCE_PL")}</module186.RadioButton></module186.RadioGroup><module186.Select className={module3979.timeSelect} defaultValue={this.state.range} options={this.timeOptions} onChange={this.handleRangeChange}/></div>;
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                const resourceType = this.state.resourceType;
                return <Module790 className={module3979.wrapper} title={t("RESOURCE_STATUS")}>{this.renderHeader()}{resourceType === "application" ? this.renderApplicationResource() : this.renderPhysicalResource()}</Module790>;
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
            key: "cluster",
            get: function() {
                return module26(this.props.match, "params.cluster");
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
        },
        {
            key: "showLicenseTip",
            get: function() {
                return !globals.licenseInfo?.showLicenseTip && module26(globals, 'ksConfig["gpu.monitoring"]', false);
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default j;
