import "./module-12.js";
import "./module-187.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
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
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import module159 from "./module-159.js";
import module26 from "./module-26.js";
import module189 from "./module-189.js";
import { cacheFunc, hideGPUByLicense } from "./module-52.js";
import { getAreaChartOps, getZeroValues } from "./module-795.js";
import module884 from "./module-884.js";
import { Controller } from "./module-824.js";
import { MediumArea } from "./module-799.js";
import Module1214 from "./module-1214.js";
import module4156 from "./module-4156.js";
const k = {
    cpu_usage: "cluster_cpu_usage",
    memory_usage: "cluster_memory_usage_wo_cache",
    gpu_usage: "cluster_gpu_usage",
    gpu_memory_usage: "cluster_gpu_memory_usage",
    disk_usage: "cluster_disk_size_usage"
};
const N = ((Component_1)=>{
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
            t.monitorStore.fetchMetrics({
                metrics: Object.values(hideGPUByLicense(k, t.cluster)),
                ...e
            });
        };
        t.isEmptyData = function(e) {
            return !!module63(e) || Object.values(e).every((e)=>module63(module26(e, "data.result")));
        };
        t.showModal = function(e) {
            return cacheFunc(`_showModal_${e.type}`, function() {
                if (t.props.workspace) {
                    e.workspace = t.props.workspace;
                }
                t.setState({
                    showModal: true,
                    selectItem: {
                        ...e
                    }
                });
            }, module88(t));
        };
        t.hideModal = function() {
            t.setState({
                showModal: false,
                selectItem: {}
            });
        };
        t.getControllerProps = function() {
            return {};
        };
        t.getMonitoringCfgs = function() {
            return [
                {
                    type: "cpu",
                    title: "CPU",
                    unitType: "cpu",
                    legend: [
                        "USAGE"
                    ],
                    metricType: k.cpu_usage
                },
                {
                    type: "memory",
                    title: "MEMORY",
                    unitType: "memory",
                    legend: [
                        "USAGE"
                    ],
                    metricType: k.memory_usage
                },
                {
                    type: "gpu",
                    title: "GPU",
                    unitType: "gpu",
                    legend: [
                        "USAGE"
                    ],
                    metricType: k.gpu_usage
                },
                {
                    type: "gpu_memory",
                    title: "GPU_MEMORY",
                    unitType: "memory",
                    legend: [
                        "USAGE"
                    ],
                    metricType: k.gpu_memory_usage
                }
            ];
        };
        t.state = {
            showModal: false,
            selectItem: {}
        };
        t.init();
        return t;
    }
    module37(r, [
        {
            key: "init",
            value: function() {
                this.monitorStore = new module884({
                    cluster: this.cluster
                });
            }
        },
        {
            key: "renderCard",
            value: function() {
                const _this = this;
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const o = hideGPUByLicense(this.getMonitoringCfgs(), this.cluster);
                return <Controller title={t("CLUSTER_RESOURCE_USAGE")} step="1h" times={24} onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} isEmpty={this.isEmptyData(this.metrics)} {...this.getControllerProps()}><div className={module4156.content}>{o.map((t)=>{
                    const a = module189(t, [
                        "onClick"
                    ]);
                    const onClick = module159(t.onClick) ? _this.showModal(a) : t.onClick && t.onClick(a);
                    const n = module26(_this.metrics, `${t.metricType}.data.result`) || [];
                    const o = getAreaChartOps({
                        ...a,
                        data: module63(n) ? [
                            {
                                values: getZeroValues()
                            }
                        ] : n
                    });
                    return <div key={t.type} className={module3(module4156.item, module31({}, module4156.cursor, !!onClick))} onClick={onClick}><MediumArea width="100%" height={100} {...o}/></div>;
                })}</div></Controller>;
            }
        },
        {
            key: "renderModal",
            value: function() {
                const state = this.state;
                const { showModal, selectItem } = state;
                return <div><Module1214 visible={showModal} detail={selectItem} cluster={this.cluster} workspace={this.workspace} workspaceStore={this.props.workspaceStore} onCancel={this.hideModal}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div>{this.renderCard()}{this.renderModal()}</div>;
            }
        },
        {
            key: "metrics",
            get: function() {
                return this.monitorStore.data;
            }
        },
        {
            key: "cluster",
            get: function() {
                return module26(this.props, "match.params.cluster");
            }
        }
    ]);
    return r;
})(Component);
const D = inject("rootStore")(observer(N));
export default D;
const w = N;
export { w as Component };
