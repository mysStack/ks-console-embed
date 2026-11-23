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
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import "./module-553.js";
import module186 from "./module-186.js";
import module1132 from "./module-1132.js";
import { hideGPUByLicense } from "./module-52.js";
import { Component } from "./module-1798.js";
let o;
const k = {
    cpu_usage: "workspace_cpu_usage",
    memory_usage: "workspace_memory_usage_wo_cache",
    gpu_usage: "workspace_gpu_usage",
    gpu_memory_usage: "workspace_gpu_memory_usage",
    disk_usage: "workspace_disk_size_usage",
    pvc_usage: "workspace_pvc_bytes_used",
    pvc_useage_block: "workspace_block_storage_pvc_bytes_used",
    pvc_useage_file: "workspace_file_storage_pvc_bytes_used",
    pvc_useage_object: "workspace_object_storage_pvc_bytes_used",
    pvc_useage_undefined: "workspace_undefined_pvc_bytes_used"
};
const O = inject("rootStore")(o = observer(o = ((Component_1)=>{
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
        e.state = {
            storageClass: "pvc_usage"
        };
        e.getMonitoringCfgs = function() {
            return [
                {
                    type: "cpu",
                    title: "CPU_USAGE",
                    unitType: "cpu",
                    legend: [
                        "CPU"
                    ],
                    metricType: k.cpu_usage
                },
                {
                    type: "memory",
                    title: "MEMORY_USAGE",
                    unitType: "memory",
                    legend: [
                        "MEMORY"
                    ],
                    metricType: k.memory_usage
                },
                {
                    type: "pvc",
                    title: "PVC_BYTES_USED_TCAP",
                    unitType: "memory",
                    legend: [
                        "PVC_BYTES_USED_TCAP"
                    ],
                    metricType: k[e.state.storageClass],
                    filters: {
                        key: "storageClass",
                        options: [
                            {
                                value: "pvc_usage",
                                label: t("ALL")
                            },
                            {
                                value: "pvc_useage_block",
                                label: t("BLOCK_STORAGE")
                            },
                            {
                                value: "pvc_useage_file",
                                label: t("OBJECT_STORAGE")
                            },
                            {
                                value: "pvc_useage_object",
                                label: t("FILE_STORAGE")
                            },
                            {
                                value: "pvc_useage_undefined",
                                label: t("UNCLASSIFIED")
                            }
                        ],
                        onChange: function(storageClass) {
                            e.setState({
                                storageClass
                            });
                        },
                        getMetricsFilter: function(e) {
                            return k[e] || k.pvc_usage;
                        }
                    }
                },
                {
                    type: "gpu",
                    title: "GPU_USAGE",
                    unitType: "gpu",
                    legend: [
                        "GPU"
                    ],
                    metricType: k.gpu_usage
                },
                {
                    type: "gpu_memory",
                    title: "GPU_MEMORY_USAGE",
                    unitType: "memory",
                    legend: [
                        "GPU_MEMORY"
                    ],
                    metricType: k.gpu_memory_usage
                }
            ];
        };
        e.getControllerProps = function() {
            return {
                title: t("PHYSICAL_RESOURCES"),
                createTime: e.createTime,
                customAction: e.renderClusters()
            };
        };
        e.fetchData = function(t) {
            e.monitorStore.cluster = e.props.cluster;
            e.monitorStore.fetchMetrics({
                workspace: e.workspace,
                metrics: Object.values(hideGPUByLicense(k, e.props.cluster)),
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
export default O;
