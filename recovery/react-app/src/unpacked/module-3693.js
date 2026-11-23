import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import * as module553 from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module186 from "unpacked/module-186.js";
import module891 from "unpacked/module-891.js";
import module14 from "unpacked/module-14.js";
import { getLastMonitoringData } from "utils/monitoring";
import module3694 from "unpacked/module-3694.js";
import module3697 from "unpacked/module-3697.js";
let u;
let i;
let c;
let l;
const D = {
    cpu_requests: "cluster_pod_cpu_requests_total",
    cpu_limits: "cluster_pod_cpu_limits_total",
    cpu_total: "cluster_cpu_total",
    cpu_requests_non_master: "cluster_pod_cpu_requests_non_master_total",
    cpu_limits_non_master: "cluster_pod_cpu_limits_non_master_total",
    cpu_total_non_master: "cluster_cpu_non_master_total",
    memory_requests: "cluster_pod_memory_requests_total",
    memorylimits: "cluster_pod_memory_limits_total",
    memory_total: "cluster_memory_total",
    memory_requests_non_master: "cluster_pod_memory_requests_non_master_total",
    memory_limits_non_master: "cluster_pod_memory_limits_non_master_total",
    memory_total_non_master: "cluster_memory_non_master_total",
    namespace_cpu_requests: "cluster_namespace_quota_cpu_requests_hard_total",
    namespace_cpu_limits: "cluster_namespace_quota_cpu_limits_hard_total",
    namespace_cpu_requests_non_master: "cluster_namespace_quota_cpu_requests_hard_total",
    namespace_cpu_limits_non_master: "cluster_namespace_quota_cpu_limits_hard_total",
    namespace_memory_requests: "cluster_namespace_quota_memory_requests_hard_total",
    namespace_memorylimits: "cluster_namespace_quota_memory_limits_hard_total",
    namespace_memory_requests_non_master: "cluster_namespace_quota_memory_requests_hard_total",
    namespace_memorylimits_non_master: "cluster_namespace_quota_memory_limits_hard_total"
};
const A = observer((i = ((e)=>{
    module55(n, e);
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
    function n(...a) {
        let e;
        module36(this, n);
        e = r.call(this, ...a);
        e.monitorStore = new module891({
            cluster: e.props.cluster
        });
        module65(e, "resourceType", c, module88(e));
        module65(e, "metriceData", l, module88(e));
        e.getValue = function(e) {
            return module26(e, "value[1]", 0);
        };
        e.fetchData = function() {
            e.monitorStore.fetchMetrics({
                metrics: Object.values(D),
                last: true
            });
        };
        e.handleTypeChange = function(t) {
            e.resourceType = t;
        };
        return e;
    }
    module37(n, [
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
                    className: module3697.container
                }, module553.default.createElement("div", {
                    className: module3697.header
                }, module553.default.createElement("div", {
                    className: module3697.title
                }, t("APPLICATION_CLUSTER_QUOTA_STATISTICS")), module553.default.createElement(module186.RadioGroup, {
                    mode: "button",
                    buttonWidth: 110,
                    value: this.resourceType,
                    onChange: this.handleTypeChange,
                    wrapClassName: module3697.radio
                }, module553.default.createElement(module186.RadioButton, {
                    value: "pod",
                    key: "pod"
                }, t("CONTAINER")), module553.default.createElement(module186.RadioButton, {
                    value: "project",
                    key: "project"
                }, t("PROJECT")))), module553.default.createElement(module186.Loading, {
                    spinning: this.monitorStore.isLoading
                }, module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                    className: module3697.usageContainer
                }, module553.default.createElement(module3694, {
                    merticType: "cpu",
                    title: t("CPU_QUOTA"),
                    resourceType: this.resourceType,
                    data: this.metricData.cpu
                }), module553.default.createElement(module3694, {
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
                            requests: this.getValue(t[D.cpu_requests_non_master]),
                            limits: this.getValue(t[D.cpu_limits_non_master]),
                            total: this.getValue(t[D.cpu_total_non_master])
                        },
                        memory: {
                            requests: this.getValue(t[D.memory_requests_non_master]),
                            limits: this.getValue(t[D.memory_limits_non_master]),
                            total: this.getValue(t[D.memory_total_non_master])
                        }
                    } : {
                        cpu: {
                            requests: this.getValue(t[D.cpu_requests]),
                            limits: this.getValue(t[D.cpu_limits]),
                            total: this.getValue(t[D.cpu_total])
                        },
                        memory: {
                            requests: this.getValue(t[D.memory_requests]),
                            limits: this.getValue(t[D.memorylimits]),
                            total: this.getValue(t[D.memory_total])
                        }
                    };
                }
                if (this.resourceType === "project") {
                    e = this.props.isExclude ? {
                        cpu: {
                            requests: this.getValue(t[D.namespace_cpu_requests_non_master]),
                            limits: this.getValue(t[D.namespace_cpu_limits_non_master]),
                            total: this.getValue(t[D.cpu_total_non_master])
                        },
                        memory: {
                            requests: this.getValue(t[D.namespace_memory_requests_non_master]),
                            limits: this.getValue(t[D.namespace_memorylimits_non_master]),
                            total: this.getValue(t[D.memory_total_non_master])
                        }
                    } : {
                        cpu: {
                            requests: this.getValue(t[D.namespace_cpu_requests]),
                            limits: this.getValue(t[D.namespace_cpu_limits]),
                            total: this.getValue(t[D.cpu_total])
                        },
                        memory: {
                            requests: this.getValue(t[D.namespace_memory_requests]),
                            limits: this.getValue(t[D.namespace_memorylimits]),
                            total: this.getValue(t[D.memory_total])
                        }
                    };
                }
                return e;
            }
        }
    ]);
    return n;
})(module553.Component), c = module49(i.prototype, "resourceType", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "pod";
    }
}), l = module49(i.prototype, "metriceData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
}), u = i)) || u;
export default A;
