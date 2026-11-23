import "unpacked/module-12.js";
import "unpacked/module-187.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-138.js";
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
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module3 from "unpacked/module-3.js";
import module63 from "unpacked/module-63.js";
import module159 from "unpacked/module-159.js";
import module26 from "unpacked/module-26.js";
import module189 from "unpacked/module-189.js";
import { cacheFunc, hideGPUByLicense } from "utils/index";
import { getAreaChartOps, getZeroValues } from "utils/monitoring";
import module891 from "unpacked/module-891.js";
import { Controller } from "components/Cards/Monitoring/index";
import { MediumArea } from "components/Charts/index";
import Module1214 from "components/Modals/Monitoring/ApplicationResource";
import module3788 from "unpacked/module-3788.js";
const R = {
    cpu_usage: "cluster_cpu_usage",
    memory_usage: "cluster_memory_usage_wo_cache",
    gpu_usage: "cluster_gpu_usage",
    gpu_memory_usage: "cluster_gpu_memory_usage",
    disk_usage: "cluster_disk_size_usage"
};
const I = ((Component_1)=>{
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
                metrics: Object.values(hideGPUByLicense(R, t.cluster)),
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
                    metricType: R.cpu_usage
                },
                {
                    type: "memory",
                    title: "MEMORY",
                    unitType: "memory",
                    legend: [
                        "USAGE"
                    ],
                    metricType: R.memory_usage
                },
                {
                    type: "gpu",
                    title: "GPU",
                    unitType: "gpu",
                    legend: [
                        "USAGE"
                    ],
                    metricType: R.gpu_usage
                },
                {
                    type: "gpu_memory",
                    title: "GPU_MEMORY",
                    unitType: "memory",
                    legend: [
                        "USAGE"
                    ],
                    metricType: R.gpu_memory_usage
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
                this.monitorStore = new module891({
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
                return <Controller title={t("CLUSTER_RESOURCE_USAGE")} step="1h" times={24} onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} isEmpty={this.isEmptyData(this.metrics)} {...this.getControllerProps()}><div className={module3788.content}>{o.map((t)=>{
                    const n = module189(t, [
                        "onClick"
                    ]);
                    const onClick = module159(t.onClick) ? _this.showModal(n) : t.onClick && t.onClick(n);
                    const i = module26(_this.metrics, `${t.metricType}.data.result`) || [];
                    const c = getAreaChartOps({
                        ...n,
                        data: module63(i) ? [
                            {
                                values: getZeroValues()
                            }
                        ] : i
                    });
                    const t_filters = t.filters;
                    if (t_filters) {
                        Object.assign(c, {
                            filters: {
                                ...t_filters,
                                value: _this.state[t_filters.key] ?? "all",
                                onChange: t_filters.onChange ?? function(t) {
                                    _this.setState(module31({}, t_filters.key, t === "all" ? undefined : t));
                                    _this.fetchData(module31({}, t_filters.key, t === "all" ? undefined : t));
                                }
                            }
                        });
                    }
                    return <div key={t.type} className={module3(module3788.item, module31({}, module3788.cursor, !!onClick))} onClick={onClick}><MediumArea width="100%" height={100} {...c}/></div>;
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
const w = inject("rootStore")(observer(I));
export default w;
const M = I;
export { M as Component };
