import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-190.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-436.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import module31 from "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module891 from "unpacked/module-891.js";
import { SimpleArea } from "components/Charts/index";
import { observer } from "unpacked/module-239.js";
import module3 from "unpacked/module-3.js";
import module26 from "unpacked/module-26.js";
import { hideGPUByLicense } from "utils/index";
import { getAreaChartOps, getLastMonitoringData, getSuitableUnit, getValueByUnit } from "utils/monitoring";
import Module1393 from "unpacked/module-1393.js";
import module3700 from "unpacked/module-3700.js";
let c;
const A = {
    cpu_usage: "cluster_cpu_usage",
    cpu_total: "cluster_cpu_total",
    cpu_utilisation: "cluster_cpu_utilisation",
    gpu_usage: "cluster_gpu_usage",
    gpu_total: "cluster_gpu_total",
    gpu_utilization: "cluster_gpu_utilization",
    gpu_memory_utilization: "cluster_gpu_memory_utilization",
    gpu_memory_usage: "cluster_gpu_memory_usage",
    gpu_memory_total: "cluster_gpu_memory_total",
    memory_usage: "cluster_memory_usage_wo_cache",
    memory_total: "cluster_memory_total",
    memory_utilisation: "cluster_memory_utilisation",
    disk_size_usage: "cluster_disk_size_usage",
    disk_size_capacity: "cluster_disk_size_capacity",
    disk_utilisation: "cluster_disk_size_utilisation",
    pod_count: "cluster_pod_running_count",
    pod_capacity: "cluster_pod_quota"
};
const N = observer(c = ((Component_1)=>{
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
    function n(...o) {
        let e;
        module36(this, n);
        e = r.call(this, ...o);
        e.state = {
            active: "cpu",
            params: {
                times: 10,
                step: "48m"
            }
        };
        e.monitorStore = new module891({
            cluster: e.cluster
        });
        e.fetchData = async (r)=>{
            await e.monitorStore.fetchMetrics({
                metrics: Object.values(hideGPUByLicense(A, e.cluster)),
                ...e.state.params,
                ...r
            });
        };
        e.getValue = function(e) {
            return module26(e, "value[1]", 0);
        };
        e.handleSelect = function(active) {
            e.setState({
                active
            });
        };
        e.renderTabItem = function({ type, icon, name, unit, used, total, unitType }) {
            const unit_1 = getSuitableUnit(total || used, unitType) || unit;
            const f = getValueByUnit(used, unit_1);
            const p = getValueByUnit(total, unit_1);
            const m = unit_1 === "core" ? "CORE_PL" : unit_1;
            const y = e.state.active === type;
            const v = f && p ? f / p * 100 : 0;
            return <div className={module3(module3700.tabItem, module31({}, module3700.checked, y))} key={type} onClick={function() {
                return e.handleSelect(type);
            }}><div className={module3700.label}><module186.Icon name={icon} size={20} type={y ? "light" : "dark"}/><span>{t(name)}</span><span>{t(m)}</span></div><div className={module3700.value}><span>{f}</span><span>/{p}</span></div><div className={module3700.progress}><Module1393 className={module3(module31({}, module3700.progressActive, y))} percent={parseFloat(v.toFixed(2))} content=<div className={module3700.tabItem_tooltip}><div>{t(name)}</div><p><i/>{unit_1 === "core" ? t("USED_VALUE_CORES_PERCENTAGE", {
                value: f,
                percentage: v !== 0 ? `${v.toFixed(2)}%` : "0%"
            }) : t("USED_VALUE_UNIT_PERCENTAGE", {
                value: f,
                unit: unit_1,
                percentage: v !== 0 ? `${v.toFixed(2)}%` : "0%"
            })}</p><p><i/>{unit_1 === "core" ? t("TOTAL_VALUE_CORES", {
                value: p
            }) : t("TOTAL_VALUE_UNIT", {
                value: p,
                unit: unit_1
            })}</p></div>/></div></div>;
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
            key: "renderChart",
            value: function() {
                const _this = this;
                const t = this.renderChartOption.filter((t)=>t.category === _this.state.active)[0];
                const r = {
                    key: t.title,
                    width: "100%",
                    height: "100%"
                };
                const n = getAreaChartOps(t);
                return <SimpleArea {...r} {...n}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const isLoading = this.monitorStore.isLoading;
                return <div className={module3700.container}><div className={module3700.header}><div className={module3700.title}>{t("NODE_RESOURCE_USAGE")}</div></div><module186.Loading spinning={isLoading}><><div className={module3700.tabs}><div className={module3700.tabsHeader}>{this.tabOptions.map((t)=>_this.renderTabItem(t))}</div><div className={module3700.tabsBody}/></div><div className={module3700.chartContainer}>{this.renderChart()}</div></></module186.Loading></div>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.clusterDetail.name;
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
            key: "tabOptions",
            get: function() {
                const e = getLastMonitoringData(this.metrics);
                const t = [
                    {
                        icon: "cpu",
                        type: "cpu",
                        name: "CPU",
                        unitType: "cpu",
                        used: this.getValue(e[A.cpu_usage]),
                        total: this.getValue(e[A.cpu_total])
                    },
                    {
                        icon: "memory",
                        type: "memory",
                        name: "MEMORY",
                        unitType: "memory",
                        used: this.getValue(e[A.memory_usage]),
                        total: this.getValue(e[A.memory_total])
                    },
                    {
                        icon: "gpu",
                        type: "gpu",
                        name: "GPU",
                        used: this.getValue(e[A.gpu_usage]),
                        total: this.getValue(e[A.gpu_total])
                    },
                    {
                        icon: "computing",
                        type: "gpu_merrory",
                        name: "GPU_MEMORY",
                        unit: "Gi",
                        unitType: "memory",
                        used: this.getValue(e[A.gpu_memory_usage]),
                        total: this.getValue(e[A.gpu_memory_total])
                    },
                    {
                        icon: "storage",
                        type: "storage",
                        name: "DISK",
                        unitType: "disk",
                        used: this.getValue(e[A.disk_size_usage]),
                        total: this.getValue(e[A.disk_size_capacity])
                    },
                    {
                        icon: "pod",
                        type: "pod",
                        name: "POD_PL",
                        unit: "",
                        used: this.getValue(e[A.pod_count]),
                        total: this.getValue(e[A.pod_capacity])
                    }
                ];
                return hideGPUByLicense(t, this.cluster);
            }
        },
        {
            key: "renderChartOption",
            get: function() {
                const e = [
                    {
                        key: "CPU_USAGE",
                        type: "utilisation",
                        renderTitle: function() {
                            return t("CPU_UTILISATION_TCAP");
                        },
                        category: "cpu",
                        unit: "%",
                        legend: [
                            "VALUE"
                        ],
                        data: module26(this.metrics, `${A.cpu_utilisation}.data.result`)
                    },
                    {
                        key: "MEMORY_USAGE",
                        type: "utilisation",
                        renderTitle: function() {
                            return t("MEMORY_UTILISATION_TCAP");
                        },
                        category: "memory",
                        unit: "%",
                        legend: [
                            "VALUE"
                        ],
                        data: module26(this.metrics, `${A.memory_utilisation}.data.result`)
                    },
                    {
                        key: "GPU_USAGE",
                        type: "utilisation",
                        renderTitle: function() {
                            return t("GPU_UTILIZATION");
                        },
                        category: "gpu",
                        unit: "%",
                        legend: [
                            "VALUE"
                        ],
                        data: module26(this.metrics, `${A.gpu_utilization}.data.result`)
                    },
                    {
                        key: "GPU_MEMORY_USAGE",
                        renderTitle: function() {
                            return t("GPU_MEMORY_UTILIZATION");
                        },
                        type: "utilisation",
                        category: "gpu_merrory",
                        unit: "%",
                        legend: [
                            "VALUE"
                        ],
                        data: module26(this.metrics, `${A.gpu_memory_utilization}.data.result`)
                    },
                    {
                        key: "DISK_USAGE",
                        type: "utilisation",
                        renderTitle: function() {
                            return t("DISK_SIZE_UTILISATION_TCAP");
                        },
                        category: "storage",
                        unit: "%",
                        legend: [
                            "VALUE"
                        ],
                        data: module26(this.metrics, `${A.disk_utilisation}.data.result`)
                    },
                    {
                        key: "POD_COUNT",
                        title: "POD_COUNT",
                        category: "pod",
                        unit: "",
                        legend: [
                            "VALUE"
                        ],
                        data: module26(this.metrics, `${A.pod_count}.data.result`)
                    }
                ];
                return hideGPUByLicense(e, this.cluster);
            }
        }
    ]);
    return n;
})(Component)) || c;
export default N;
