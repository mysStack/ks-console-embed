import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-6.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-98.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-42.js";
import "./module-436.js";
import "./module-57.js";
import module96 from "./module-96.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import { ICON_TYPES } from "./module-72.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import { getNodeStatus } from "./module-444.js";
import Module789 from "./module-789.js";
import Module796 from "./module-796.js";
import Module791 from "./module-791.js";
import { getValueByUnit } from "./module-795.js";
import module1570 from "./module-1570.js";
const C = {
    cpu_used: "node_cpu_usage",
    cpu_total: "node_cpu_total",
    cpu_utilisation: "node_cpu_utilisation",
    memory_used: "node_memory_usage_wo_cache",
    memory_total: "node_memory_total",
    memory_utilisation: "node_memory_utilisation",
    pod_used: "node_pod_running_count",
    pod_total: "node_pod_quota"
};
const D = ((Component_1)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.handleClick = function() {
            const e_props = e.props;
            e_props.onClick(e_props.detail);
        };
        e.renderStatus = function(a) {
            const r = getNodeStatus(a);
            const a_taints = a.taints;
            return <Module791 title=<><Module796 type={r} name={t(`NODE_STATUS_${r.toUpperCase()}`)}/>{!module63(a_taints) && a.importStatus === "success" && <module186.Tooltip content={e.renderTaintsTip(a_taints)}><span className={module1570.taints}>{a_taints.length}</span></module186.Tooltip>}</> description={t("STATUS")}/>;
        };
        e.renderTaintsTip = function(e) {
            return <div><div>{t("TAINTS")}:</div><div>{e.map((e)=>{
                const t = `${e.key}=${e.value || ""}:${e.effect}`;
                return <div key={t}>{t}</div>;
            })}</div></div>;
        };
        e.getLastValue = function(t, a, r) {
            const metricsData = e.props.metricsData;
            const l = (module26(metricsData[a], "data.result") || []).find((e)=>module26(e, "metric.node") === t.name);
            return getValueByUnit(module26(l, "value[1]", 0), r);
        };
        e.getRecordMetrics = function(t, a) {
            const r = {};
            a.forEach((a)=>{
                r[a.type] = parseFloat(e.getLastValue(t, C[a.type], a.unit));
            });
            return r;
        };
        e.renderCPU = function(a) {
            const r = e.getRecordMetrics(a, [
                {
                    type: "cpu_used",
                    unit: "Core"
                },
                {
                    type: "cpu_total",
                    unit: "Core"
                },
                {
                    type: "cpu_utilisation"
                }
            ]);
            return <Module791 title=<div className={module1570.resource}><span>{`${Math.round(100 * r.cpu_utilisation)}%`}</span>{r.cpu_utilisation >= 0.9 && <module186.Icon name="exclamation"/>}</div> description={t("CPU")}/>;
        };
        e.renderMemory = function(a) {
            const r = e.getRecordMetrics(a, [
                {
                    type: "memory_used",
                    unit: "Gi"
                },
                {
                    type: "memory_total",
                    unit: "Gi"
                },
                {
                    type: "memory_utilisation"
                }
            ]);
            return <Module791 title=<div className={module1570.resource}><span>{`${Math.round(100 * r.memory_utilisation)}%`}</span>{r.memory_utilisation >= 0.9 && <module186.Icon name="exclamation"/>}</div> description={t("MEMORY")}/>;
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { detail, selected, hasMonitoring } = props;
                return <div className={module3(module1570.item, module31({}, module1570.selected, selected))} onClick={this.handleClick}><module186.Icon name={ICON_TYPES.nodes} size={20}/><div className={module1570.ring}/><div className={module1570.name}><Module789 icon={null} to={null} title={detail.name} desc={detail.ip}/></div>{this.renderStatus(detail)}<div><Module791 title=<>{detail.role.join(",")}</> description={t("ROLE")}/></div>{hasMonitoring && <><div>{this.renderCPU(detail)}</div><div>{this.renderMemory(detail)}</div></>}</div>;
            }
        },
        {
            key: "metricTypesMap",
            get: function() {
                if (!this.props.isEdgeWize) {
                    return C;
                }
                const e = {};
                Object.entries(C).forEach((t)=>{
                    const a = module96(t, 2);
                    const r = a[0];
                    const n = a[1];
                    e[`${r}`] = `edge_${n}`;
                });
                return e;
            }
        }
    ]);
    return r;
})(Component);
export default D;
