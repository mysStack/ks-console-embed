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
import module959 from "./module-959.js";
import module891 from "./module-891.js";
import { SimpleArea } from "./module-799.js";
import { observer } from "./module-239.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import { hideGPUByLicense } from "./module-52.js";
import Module1393 from "./module-1393.js";
import { getAreaChartOps, getLastMonitoringData, getSuitableUnit, getValueByUnit } from "./module-795.js";
import module4522 from "./module-4522.js";
let l;
const C = {
    cpu_usage: "namespace_cpu_usage",
    gpu_usage: "namespace_gpu_usage",
    gpu_memory_usage: "namespace_gpu_memory_usage",
    memory_usage: "namespace_memory_usage",
    limit_memory_usage: "namespace_memory_requests_hard",
    limit_cpu_usage: "namespace_cpu_requests_hard",
    storage_size_usage: "namespace_pvc_bytes_used",
    storage_size_usage_block: "namespace_block_storage_pvc_bytes_used",
    storage_size_usage_file: "namespace_file_storage_pvc_bytes_used",
    storage_size_usage_object: "namespace_object_storage_pvc_bytes_used",
    storage_size_usage_undefined: "namespace_undefined_pvc_bytes_used",
    storage_size_total: "namespace_pvc_bytes_total",
    storage_size_total_block: "namespace_block_storage_pvc_bytes_total",
    storage_size_total_file: "namespace_file_storage_pvc_bytes_total",
    storage_size_total_object: "namespace_object_storage_pvc_bytes_total",
    storage_size_total_undefined: "namespace_undefined_pvc_bytes_total"
};
const P = {
    cpu_total: "cluster_cpu_total",
    gpu_total: "cluster_gpu_total",
    gpu_memory_total: "cluster_gpu_memory_total",
    memory_total: "cluster_memory_total"
};
const N = {
    BlockStorage: {
        total: "storage_size_total_block",
        usage: "storage_size_usage_block"
    },
    FileStorage: {
        total: "storage_size_total_file",
        usage: "storage_size_usage_file"
    },
    ObjectStorage: {
        total: "storage_size_total_object",
        usage: "storage_size_usage_object"
    },
    UndefinedStorage: {
        total: "storage_size_total_undefined",
        usage: "storage_size_usage_undefined"
    },
    all: {
        total: "storage_size_total",
        usage: "storage_size_usage"
    }
};
const I = observer(l = ((Component_1)=>{
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
        e.state = {
            active: "cpu",
            params: {
                times: 10,
                step: "48m"
            },
            storageClass: "all"
        };
        e.monitorStore = new module959({
            cluster: e.cluster
        });
        e.clusterMonitorStore = new module891({
            cluster: e.cluster
        });
        e.fetchData = async (a)=>{
            await e.monitorStore.fetchMetrics({
                metrics: Object.values(hideGPUByLicense(C, e.cluster)),
                ...e.state.params,
                ...a
            });
        };
        e.fetchClusterData = async (a)=>{
            await e.clusterMonitorStore.fetchMetrics({
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
        e.renderTabItem = function({ type, icon, name, unit, used, total, unitType, filters }) {
            const unit_1 = getSuitableUnit(total || used, unitType) || unit;
            const g = getValueByUnit(used, unit_1);
            const _ = getValueByUnit(total, unit_1);
            const y = unit_1 === "core" ? "CORE_PL" : unit_1;
            const E = e.state.active === type;
            const S = g && _ ? g / _ * 100 : 0;
            const length = e.tabOptions.length;
            const k = name === "PERSISTENT_VOLUME";
            return <div className={module3(module4522.tabItem, module31({}, module4522.checked, E))} key={type} onClick={function() {
                return e.handleSelect(type);
            }}><div className={module4522.labelRow}><div className={module4522.label}><module186.Icon name={icon} size={20} type={E ? "light" : "dark"}/><span className={k && length === 5 ? module4522.text : ""} title={t(name)}>{t(name)}</span><span>{t(y)}</span>{k && <module186.Tooltip content={t("PVC_USAGE_TOOLTIP_MESSAGE")}><module186.Icon name="question" size={20}/></module186.Tooltip>}</div>{filters && <div onClick={function(e) {
                e.stopPropagation();
            }}><module186.Select size="small" options={filters.options} value={e.state[filters.key] ?? "all"} onChange={filters.onChange ?? function(t) {
                e.setState({
                    params: {
                        ...e.state.params,
                        ...module31({}, filters.key, t === "all" ? undefined : t)
                    }
                });
            }}/></div>}</div><div className={module4522.value}><span>{g}</span><span>/{_}</span></div><div className={module4522.progress}><Module1393 className={module3(module31({}, module4522.progressActive, E))} percent={parseFloat(S.toFixed(2))} content=<div className={module4522.tabItem_tooltip}><div>{t(name)}</div><p><i/>{unit_1 === "core" ? t("USED_VALUE_CORES_PERCENTAGE", {
                value: g,
                percentage: S !== 0 ? `${S.toFixed(2)}%` : "0%"
            }) : t("USED_VALUE_UNIT_PERCENTAGE", {
                value: g,
                unit: unit_1,
                percentage: S !== 0 ? `${S.toFixed(2)}%` : "0%"
            })}</p><p><i/>{unit_1 === "core" ? t("TOTAL_VALUE_CORES", {
                value: _
            }) : t("TOTAL_VALUE_UNIT", {
                value: _,
                unit: unit_1
            })}</p></div>/></div></div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData({
                    namespace: this.namespace
                });
                this.fetchClusterData();
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
                    height: "100%",
                    referenceLineColor: "yellow",
                    showReferenceLabel: false
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
                const isLoading_1 = this.clusterMonitorStore.isLoading;
                return <div className={module4522.container}><div className={module4522.header}><div className={module4522.title}>{t("RESOURCE_USAGE")}</div></div><module186.Loading spinning={isLoading || isLoading_1}><><div className={module4522.tabs}><div className={module4522.tabsHeader}>{this.tabOptions.map((t)=>_this.renderTabItem(t))}</div><div className={module4522.tabsBody}/></div><div className={module4522.chartContainer}>{this.renderChart()}</div></></module186.Loading></div>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.currentResource.cluster;
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.currentResource.workspace;
            }
        },
        {
            key: "namespace",
            get: function() {
                return this.props.currentResource.namespace;
            }
        },
        {
            key: "metrics",
            get: function() {
                return this.monitorStore.data;
            }
        },
        {
            key: "clusterMetrics",
            get: function() {
                return this.clusterMonitorStore.data;
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
                const _this = this;
                const n = getLastMonitoringData(this.metrics);
                const o = getLastMonitoringData(this.clusterMetrics);
                const c = [
                    {
                        icon: "cpu",
                        type: "cpu",
                        name: "CPU",
                        unitType: "cpu",
                        used: this.getValue(n[C.cpu_usage]),
                        total: this.getValue(o[P.cpu_total])
                    },
                    {
                        icon: "memory",
                        type: "memory",
                        name: "MEMORY",
                        unitType: "memory",
                        used: this.getValue(n[C.memory_usage]),
                        total: this.getValue(o[P.memory_total])
                    },
                    {
                        icon: "gpu",
                        type: "gpu",
                        name: "GPU",
                        used: this.getValue(n[C.gpu_usage]),
                        total: this.getValue(o[P.gpu_total])
                    },
                    {
                        icon: "computing",
                        type: "gpu_merrory",
                        name: "GPU_MEMORY",
                        unitType: "memory",
                        used: this.getValue(n[C.gpu_memory_usage]),
                        total: this.getValue(o[P.gpu_memory_total])
                    },
                    {
                        icon: "storage",
                        type: "storage",
                        name: "PERSISTENT_VOLUME",
                        unitType: "memory",
                        used: this.getValue(n[C[N[this.state.storageClass]?.usage]]),
                        total: this.getValue(n[C[N[this.state.storageClass]?.total]]),
                        filters: {
                            key: "storageClass",
                            onChange: function(storageClass) {
                                _this.setState({
                                    storageClass
                                });
                            },
                            options: [
                                {
                                    value: "all",
                                    label: t("ALL")
                                },
                                {
                                    value: "BlockStorage",
                                    label: t("BLOCK_STORAGE")
                                },
                                {
                                    value: "ObjectStorage",
                                    label: t("OBJECT_STORAGE")
                                },
                                {
                                    value: "FileStorage",
                                    label: t("FILE_STORAGE")
                                },
                                {
                                    value: "UndefinedStorage",
                                    label: t("UNCLASSIFIED")
                                }
                            ]
                        }
                    }
                ].filter((e)=>!e.isHidden);
                return hideGPUByLicense(c, this.cluster);
            }
        },
        {
            key: "renderChartOption",
            get: function() {
                const t = getLastMonitoringData(this.metrics);
                const a = [
                    {
                        key: "CPU_USAGE",
                        title: "CPU_USAGE",
                        category: "cpu",
                        unitType: "cpu",
                        legend: [
                            "CPU_USAGE"
                        ],
                        alert: {
                            name: "requests.cpu",
                            value: this.getValue(t[C.limit_cpu_usage])
                        },
                        data: module26(this.metrics, `${C.cpu_usage}.data.result`)
                    },
                    {
                        key: "MEMORY_USAGE",
                        title: "MEMORY_USAGE",
                        category: "memory",
                        unitType: "memory",
                        legend: [
                            "MEMORY_USAGE"
                        ],
                        alert: {
                            name: "requests.memory",
                            value: this.getValue(t[C.limit_memory_usage])
                        },
                        data: module26(this.metrics, `${C.memory_usage}.data.result`)
                    },
                    {
                        key: "GPU_USAGE",
                        title: "GPU_USAGE",
                        category: "gpu",
                        unitType: "gpu",
                        legend: [
                            "GPU_USAGE"
                        ],
                        data: module26(this.metrics, `${C.gpu_usage}.data.result`)
                    },
                    {
                        key: "GPU_MEMORY_USAGE",
                        title: "GPU_MEMORY_USAGE",
                        category: "gpu_merrory",
                        unitType: "memory",
                        legend: [
                            "GPU_MEMORY_USAGE"
                        ],
                        data: module26(this.metrics, `${C.gpu_memory_usage}.data.result`)
                    },
                    {
                        key: "PERSISTENT_VOLUME_CLAIM_LOW_PL",
                        title: "PVC_BYTES_USED_TCAP",
                        category: "storage",
                        unitType: "memory",
                        legend: [
                            "PVC_BYTES_USED_TCAP"
                        ],
                        data: module26(this.metrics, `${C[N[this.state.storageClass]?.usage]}.data.result`)
                    }
                ];
                return hideGPUByLicense(a, this.cluster);
            }
        }
    ]);
    return r;
})(Component)) || l;
export default I;
