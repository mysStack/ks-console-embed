import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import * as module553 from "./module-553.js";
import { observer } from "./module-239.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import module884 from "./module-884.js";
import module14 from "./module-14.js";
import { getLastMonitoringData } from "./module-795.js";
import module4089 from "./module-4089.js";
import module4093 from "./module-4093.js";
let l;
let o;
let c;
let i;
const A = {
    cpu_usage: "cluster_pod_cpu_usage",
    cpu_requests: "cluster_pod_cpu_requests_total",
    cpu_limits: "cluster_pod_cpu_limits_total",
    cpu_total: "cluster_cpu_total",
    cpu_requests_non_master: "cluster_pod_cpu_requests_non_master_total",
    cpu_limits_non_master: "cluster_pod_cpu_limits_non_master_total",
    cpu_total_non_master: "cluster_cpu_non_master_total",
    memory_requests: "cluster_pod_memory_requests_total",
    memorylimits: "cluster_pod_memory_limits_total",
    memory_total: "cluster_memory_total",
    memory_usage_non_master: "cluster_pod_memory_non_master_usage_wo_cache",
    memory_requests_non_master: "cluster_pod_memory_requests_non_master_total",
    memory_limits_non_master: "cluster_pod_memory_limits_non_master_total",
    memory_total_non_master: "cluster_memory_non_master_total",
    namespace_cpu_usage: "cluster_namespace_quota_cpu_usage",
    namespace_cpu_requests: "cluster_namespace_quota_cpu_requests_hard_total",
    namespace_cpu_limits: "cluster_namespace_quota_cpu_limits_hard_total",
    namespace_cpu_requests_non_master: "cluster_namespace_quota_cpu_requests_hard_total",
    namespace_cpu_limits_non_master: "cluster_namespace_quota_cpu_limits_hard_total",
    namespace_memory_usage: "cluster_namespace_quota_memory_usage",
    namespace_memory_requests: "cluster_namespace_quota_memory_requests_hard_total",
    namespace_memorylimits: "cluster_namespace_quota_memory_limits_hard_total",
    namespace_memory_usage_non_master: "cluster_namespace_quota_memory_usage",
    namespace_memory_requests_non_master: "cluster_namespace_quota_memory_requests_hard_total",
    namespace_memorylimits_non_master: "cluster_namespace_quota_memory_limits_hard_total"
};
const P = observer((o = ((e)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.monitorStore = new module884({
            cluster: e.props.cluster
        });
        module65(e, "resourceType", c, module88(e));
        module65(e, "metriceData", i, module88(e));
        e.getValue = function(e) {
            return module26(e, "value[1]", 0);
        };
        e.fetchData = function() {
            e.monitorStore.fetchMetrics({
                metrics: Object.values(A),
                last: true
            });
        };
        e.handleTypeChange = function(t) {
            e.resourceType = t;
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "render",
            value: function() {
                return module553.default.createElement("div", {
                    className: module4093.container
                }, module553.default.createElement("div", {
                    className: module4093.header
                }, module553.default.createElement("div", {
                    className: module4093.title
                }, t("APPLICATION_CLUSTER_QUOTA_STATISTICS")), module553.default.createElement(module186.RadioGroup, {
                    mode: "button",
                    buttonWidth: 110,
                    value: this.resourceType,
                    onChange: this.handleTypeChange,
                    wrapClassName: module4093.radio
                }, module553.default.createElement(module186.RadioButton, {
                    value: "pod",
                    key: "pod"
                }, t("CONTAINER")), module553.default.createElement(module186.RadioButton, {
                    value: "project",
                    key: "project"
                }, t("PROJECT")))), module553.default.createElement(module186.Loading, {
                    spinning: this.monitorStore.isLoading
                }, module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                    className: module4093.usageContainer
                }, module553.default.createElement(module4089, {
                    merticType: "cpu",
                    title: t("CPU_QUOTA"),
                    resourceType: this.resourceType,
                    data: this.metricData.cpu
                }), module553.default.createElement(module4089, {
                    merticType: "memory",
                    title: t("MEMORY_QUOTA"),
                    resourceType: this.resourceType,
                    data: this.metricData.memory
                })))));
            }
        },
        {
            key: "metrics",
            get: function() {
                return this.monitorStore.data;
            }
        },
        {
            key: "showLicenseTip",
            get: function() {
                return globals.licenseInfo?.showLicenseTip || !module26(globals, 'ksConfig["gpu.monitoring"]', false);
            }
        },
        {
            key: "metricData",
            get: function() {
                let e;
                const t = getLastMonitoringData(this.metrics);
                if (this.resourceType === "pod") {
                    e = this.props.isExclude ? {
                        cpu: {
                            requests: this.getValue(t[A.cpu_requests_non_master]),
                            limits: this.getValue(t[A.cpu_limits_non_master]),
                            total: this.getValue(t[A.cpu_total_non_master])
                        },
                        memory: {
                            requests: this.getValue(t[A.memory_requests_non_master]),
                            limits: this.getValue(t[A.memory_limits_non_master]),
                            total: this.getValue(t[A.memory_total_non_master])
                        }
                    } : {
                        cpu: {
                            requests: this.getValue(t[A.cpu_requests]),
                            limits: this.getValue(t[A.cpu_limits]),
                            total: this.getValue(t[A.cpu_total])
                        },
                        memory: {
                            requests: this.getValue(t[A.memory_requests]),
                            limits: this.getValue(t[A.memorylimits]),
                            total: this.getValue(t[A.memory_total])
                        }
                    };
                }
                if (this.resourceType === "project") {
                    e = this.props.isExclude ? {
                        cpu: {
                            requests: this.getValue(t[A.namespace_cpu_requests_non_master]),
                            limits: this.getValue(t[A.namespace_cpu_limits_non_master]),
                            total: this.getValue(t[A.cpu_total_non_master])
                        },
                        memory: {
                            requests: this.getValue(t[A.namespace_memory_requests_non_master]),
                            limits: this.getValue(t[A.namespace_memorylimits_non_master]),
                            total: this.getValue(t[A.memory_total_non_master])
                        }
                    } : {
                        cpu: {
                            requests: this.getValue(t[A.namespace_cpu_requests]),
                            limits: this.getValue(t[A.namespace_cpu_limits]),
                            total: this.getValue(t[A.cpu_total])
                        },
                        memory: {
                            requests: this.getValue(t[A.namespace_memory_requests]),
                            limits: this.getValue(t[A.namespace_memorylimits]),
                            total: this.getValue(t[A.memory_total])
                        }
                    };
                }
                return e;
            }
        }
    ]);
    return r;
})(module553.Component), c = module49(o.prototype, "resourceType", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "pod";
    }
}), i = module49(o.prototype, "metriceData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
}), l = o)) || l;
export default P;
