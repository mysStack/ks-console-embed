import "./module-15.js";
import "./module-29.js";
import "./module-18.js";
import "./module-87.js";
import "./module-27.js";
import "./module-190.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module790 from "./module-790.js";
import Module791 from "./module-791.js";
import Module838 from "./module-838.js";
import { getPodPhaseDetail } from "./module-72.js";
import { cpuFormat, getLocalTime, isEdgeWizePage, memoryFormat } from "./module-52.js";
import module858 from "./module-858.js";
import module1038 from "./module-1038.js";
import Module3899 from "./module-3899.js";
import module1828 from "./module-1828.js";
let l;
const k = {
    PodScheduled: "stretch",
    Initialized: "container",
    ContainersReady: "docker",
    Ready: "success"
};
const NComponent = function({ status, tip }) {
    const r = <module186.Icon className={module1828.status} name={status === "success" ? "success" : "error"} color={{
        primary: "#fff",
        secondary: status === "success" ? "#55bc8a" : "#ca2621"
    }}/>;
    if (tip) {
        return <module186.Tooltip content={tip}>{r}</module186.Tooltip>;
    }
    return r;
};
const T = inject("detailStore")(l = observer(l = ((Component_1)=>{
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
        t.nodeStore = isEdgeWizePage() ? new module1038 : new module858;
        t.fetchNodeDetail = function() {
            const detail = t.props.detailStore.detail;
            detail.requests = detail.containers.reduce((acc, container)=>{
                const a = module26(container, "resources.requests", {
                    cpu: "0",
                    memory: "0"
                });
                let a_cpu = a.cpu;
                let a_memory = a.memory;
                a_cpu = Number(cpuFormat(a_cpu));
                a_memory = Number(memoryFormat(a_memory));
                return {
                    cpu: acc.cpu + a_cpu,
                    memory: acc.memory + a_memory
                };
            }, {
                cpu: 0,
                memory: 0
            });
        };
        t.getSeriesData = function(e) {
            const detail = t.nodeStore.detail;
            const r = t.store.detail.requests[e];
            const n = e === "cpu" ? cpuFormat : memoryFormat;
            const l = Number(n(module26(detail, `status.allocatable[${e}]`)));
            const u = Number(n(module26(detail, `status.capacity[${e}]`)));
            return [
                {
                    name: "podRequests",
                    itemStyle: {
                        fill: "#f5a623"
                    },
                    value: r
                },
                {
                    name: "used",
                    itemStyle: {
                        fill: "#404e68"
                    },
                    value: Number((u - l - r).toFixed(3))
                },
                {
                    name: "allocatable",
                    itemStyle: {
                        fill: "#eff4f9"
                    },
                    value: l
                }
            ];
        };
        t.disposer = module14.when(function() {
            return t.store.detail.node;
        }, t.fetchNodeDetail);
        return t;
    }
    module37(r, [
        {
            key: "renderNodeScheduleTip",
            value: function() {
                return <div><div className="tooltip-title">{t("POD_SCHEDULING_METHOD")}</div><p className="tooltip-desc">{t("POD_ASSIGNED_DESC")}</p></div>;
            }
        },
        {
            key: "renderNode",
            value: function() {
                return <div className={module1828.nodes}><Module3899 metrics={this.getSeriesData("cpu")} icon="cpu" unit="Core"/><Module3899 metrics={this.getSeriesData("memory")} icon="memory" unit="Mi"/></div>;
            }
        },
        {
            key: "renderNodeSchedule",
            value: function() {
                const detail = this.store.detail;
                const a = module26(detail, "status.conditions", []).find((e)=>e.type === "PodScheduled") || {};
                return <Module790 title={t("SCHEDULING_RESULT")}><div className={module1828.wrapper}><div><Module791 className={module1828.info} icon="nodes" title=<div>{detail.node ? t("SCHEDULED_TO_NODE", {
                    value: detail.node
                }) : t("SCHEDULING_NOT_SUCCESSFUL")}<module186.Tooltip content={this.renderNodeScheduleTip()}><module186.Icon className="margin-l8" name="question" size={20}/></module186.Tooltip></div> description={getLocalTime(a.lastTransitionTime).format("YYYY-MM-DD HH:mm:ss")} extra=<NComponent status={a.status === "True" ? "success" : "warning"}/>/></div></div></Module790>;
            }
        },
        {
            key: "renderConditionTip",
            value: function(e) {
                return <div><div className="tooltip-title">{t(`POD_CONDITION_${e.type.toUpperCase()}`)}</div><div className="tooltip-desc"><p>{t("STATUS_VALUE", {
                    value: e.status === "True" ? t("SUCCESSFUL") : t("NOT_SUCCESSFUL")
                })}</p>{e.reason && <p>{t("REASON_VALUE", {
                    value: t(e.reason)
                })}</p>}{e.message && <p>{t("MESSAGE_VALUE", {
                    value: e.message
                })}</p>}<p>{t("UPDATED_AT_VALUE", {
                    value: getLocalTime(e.lastTransitionTime).format("YYYY-MM-DD HH:mm:ss")
                })}</p></div></div>;
            }
        },
        {
            key: "renderPodStatus",
            value: function() {
                const _this = this;
                const detail = this.store.detail;
                const r = module26(detail, "status.conditions", []);
                const phase = module26(detail, "status.phase", "");
                const l = getPodPhaseDetail({
                    phase
                });
                return <Module790 title={t("STATUS_INFORMATION")}><div className={module1828.header}><Module791 className={module1828.info} icon="pod" title={t(l.text)} description={t("PODS.CURRENT_PHASE")} extra=<Module838 className={module1828.status} {...l.indicatorProps}/>/></div><div className={module1828.content}>{Object.keys(k).map((a)=>{
                    const n = r.find((e)=>e.type === a);
                    if (n) {
                        return <Module791 key={n.type} className={module1828.condition} icon={k[n.type]} title={t(`POD_CONDITION_${n.type.toUpperCase()}`)} description={t(`POD_CONDITION_${n.type.toUpperCase()}_DESC`)} extra=<NComponent status={n.status === "True" ? "success" : "warning"} tip={_this.renderConditionTip(n)}/>/>;
                    }
                    return null;
                })}</div></Module790>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div>{this.renderNodeSchedule()}{this.renderPodStatus()}</div>;
            }
        },
        {
            key: "module",
            get: function() {
                return this.props.detailStore.module;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default T;
