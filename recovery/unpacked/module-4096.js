import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-190.js";
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
import "./module-436.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-41.js";
import module31 from "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import Module1393 from "./module-1393.js";
import module884 from "./module-884.js";
import { SimpleArea } from "./module-799.js";
import { observer } from "./module-239.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import { hideGPUByLicense } from "./module-52.js";
import { getAreaChartOps, getLastMonitoringData, getSuitableUnit, getValueByUnit } from "./module-795.js";
import module4097 from "./module-4097.js";
let c;
const P = {
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
const k = observer(c = ((Component_1)=>{
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
    function r(...u) {
        let e;
        module36(this, r);
        e = a.call(this, ...u);
        e.state = {
            active: "cpu",
            params: {
                times: 10,
                step: "48m"
            }
        };
        e.monitorStore = new module884({
            cluster: e.cluster
        });
        e.fetchData = async (a)=>{
            await e.monitorStore.fetchMetrics({
                metrics: Object.values(hideGPUByLicense(P, e.cluster)),
                ...e.state.params,
                ...a
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
            const g = e.state.active === type;
            const _ = f && p ? f / p * 100 : 0;
            return <div className={module3(module4097.tabItem, module31({}, module4097.checked, g))} key={type} onClick={function() {
                return e.handleSelect(type);
            }}><div className={module4097.label}><module186.Icon name={icon} size={20} type={g ? "light" : "dark"}/><span>{t(name)}</span><span>{t(m)}</span></div><div className={module4097.value}><span>{f}</span><span>/{p}</span></div><div className={module3(module4097.progress, module31({}, module4097.progressActive, g))}><Module1393 className={module3(module31({}, module4097.progressActive, g))} content=<div className={module4097.tabItem_tooltip}><div>{t(name)}</div><p><i/>{unit_1 === "core" ? t("USED_VALUE_CORES_PERCENTAGE", {
                value: f,
                percentage: _ !== 0 ? `${_.toFixed(2)}%` : "0%"
            }) : t("USED_VALUE_UNIT_PERCENTAGE", {
                value: f,
                unit: unit_1,
                percentage: _ !== 0 ? `${_.toFixed(2)}%` : "0%"
            })}</p><p><i/>{unit_1 === "core" ? t("TOTAL_VALUE_CORES", {
                value: p
            }) : t("TOTAL_VALUE_UNIT", {
                value: p,
                unit: unit_1
            })}</p></div> percent={parseFloat(_.toFixed(2))}/></div></div>;
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
            key: "renderChart",
            value: function() {
                const _this = this;
                const t = this.renderChartOption.filter((t)=>t.category === _this.state.active)[0];
                const a = {
                    key: t.title,
                    width: "100%",
                    height: "100%"
                };
                const r = getAreaChartOps(t);
                return <SimpleArea {...a} {...r}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const isLoading = this.monitorStore.isLoading;
                return <div className={module4097.container}><div className={module4097.header}><div className={module4097.title}>{t("NODE_RESOURCE_USAGE")}</div></div><module186.Loading spinning={isLoading}><><div className={module4097.tabs}><div className={module4097.tabsHeader}>{this.tabOptions.map((t)=>_this.renderTabItem(t))}</div><div className={module4097.tabsBody}/></div><div className={module4097.chartContainer}>{this.renderChart()}</div></></module186.Loading></div>;
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
                        used: this.getValue(e[P.cpu_usage]),
                        total: this.getValue(e[P.cpu_total])
                    },
                    {
                        icon: "memory",
                        type: "memory",
                        name: "MEMORY",
                        unitType: "memory",
                        used: this.getValue(e[P.memory_usage]),
                        total: this.getValue(e[P.memory_total])
                    },
                    {
                        icon: "gpu",
                        type: "gpu",
                        name: "GPU",
                        used: this.getValue(e[P.gpu_usage]),
                        total: this.getValue(e[P.gpu_total])
                    },
                    {
                        icon: "computing",
                        type: "gpu_merrory",
                        name: "GPU_MEMORY",
                        unit: "Gi",
                        unitType: "memory",
                        used: this.getValue(e[P.gpu_memory_usage]),
                        total: this.getValue(e[P.gpu_memory_total])
                    },
                    {
                        icon: "storage",
                        type: "storage",
                        name: "DISK",
                        unitType: "disk",
                        used: this.getValue(e[P.disk_size_usage]),
                        total: this.getValue(e[P.disk_size_capacity])
                    },
                    {
                        icon: "pod",
                        type: "pod",
                        name: "POD_PL",
                        unit: "",
                        used: this.getValue(e[P.pod_count]),
                        total: this.getValue(e[P.pod_capacity])
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
                        data: module26(this.metrics, `${P.cpu_utilisation}.data.result`)
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
                        data: module26(this.metrics, `${P.memory_utilisation}.data.result`)
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
                        data: module26(this.metrics, `${P.gpu_utilization}.data.result`)
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
                        data: module26(this.metrics, `${P.gpu_memory_utilization}.data.result`)
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
                        data: module26(this.metrics, `${P.disk_utilisation}.data.result`)
                    },
                    {
                        key: "POD_COUNT",
                        title: "POD_COUNT",
                        category: "pod",
                        unit: "",
                        legend: [
                            "VALUE"
                        ],
                        data: module26(this.metrics, `${P.pod_count}.data.result`)
                    }
                ];
                return hideGPUByLicense(e, this.cluster);
            }
        }
    ]);
    return r;
})(Component)) || c;
export default k;
