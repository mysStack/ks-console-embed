import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-84.js";
import "unpacked/module-27.js";
import "unpacked/module-190.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module159 from "unpacked/module-159.js";
import module186 from "unpacked/module-186.js";
import { hideGPUByLicense } from "utils/index";
import { getSuitableUnit, getValueByUnit } from "utils/monitoring";
import Module1797 from "unpacked/module-1797.js";
import Module848 from "components/Base/Empty";
import Module987 from "components/Tables/Ranking";
import module5207 from "unpacked/module-5207.js";
let o;
const S = observer(o = ((Component_1)=>{
    module55(NComponent, Component_1);
    var a = ((NComponent_1)=>{
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
            const n = module51(NComponent_1);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(NComponent);
    function NComponent(...o_1) {
        let e;
        module36(this, NComponent);
        e = a.call(this, ...o_1);
        e.IconWidth = 40;
        e.rankTdWidth = 124;
        e.handleValue = function(e) {
            if (e == null || isNaN(e)) {
                return 0;
            }
            return e;
        };
        e.setUnitText = function(e) {
            if (e === "core") {
                return "CORE_PL";
            }
            return e;
        };
        e.columns = [
            {
                width: e.IconWidth,
                key: "icon",
                render: function() {
                    return <module186.Icon name={e.isEdgeWizePage ? "edge-node" : "nodes"} type="dark" size={40}/>;
                }
            },
            {
                title: t("NODE"),
                key: "node",
                render: function(a) {
                    const cluster = e.props.cluster;
                    const to = e.isEdgeWizePage || !module26(a, "role", []).includes("edge") ? `${e.prefix}/${cluster}/nodes/${a.node}` : `${e.prefix}/${cluster}/edgenodes/${a.node}`;
                    return <div><h3><Module1797 to={to} auth={e.canViewNode}>{a.node}</Module1797>{a.role === "master" && <span className={module5207.label}>{t("CONTROL_PLANE")}</span>}</h3><p>{module26(a, "host_ip", "-")}</p></div>;
                }
            },
            {
                key: "cpu",
                width: e.rankTdWidth,
                sort_metric: "node_cpu_utilisation",
                title: t("CPU_USAGE"),
                render: function(a) {
                    const n = getSuitableUnit(a.node_cpu_total, "cpu");
                    const r = getValueByUnit(a.node_cpu_usage, n);
                    const o = getValueByUnit(a.node_cpu_total, n);
                    const i = e.setUnitText(n);
                    return <div><h3>{e.toPercentage(a.node_cpu_utilisation)}</h3><div>{e.handleValue(r)}/{e.handleValue(o)}{t(i)}</div></div>;
                }
            },
            {
                width: e.rankTdWidth,
                key: "node_load1",
                title: <span className={module5207.averageload}>{t("AVERAGE_CPU_LOAD")}</span>,
                sort_metric: "node_load1",
                render: function(e) {
                    return <div><h3>{e.node_load1 && Number(e.node_load1).toFixed(2) || "-"}</h3></div>;
                }
            },
            {
                width: e.rankTdWidth,
                sort_metric: "node_memory_utilisation",
                title: t("MEMORY_USAGE"),
                key: "Memory",
                render: function(t) {
                    const a = getValueByUnit(t.node_memory_usage_wo_cache, "Gi");
                    const n = getValueByUnit(t.node_memory_total, "Gi");
                    return <div><h3>{e.toPercentage(t.node_memory_utilisation)}</h3><div>{e.handleValue(a)}/{e.handleValue(n)} Gi</div></div>;
                }
            },
            {
                width: e.rankTdWidth,
                sort_metric: "node_gpu_utilization",
                title: t("GPU_USAGE"),
                key: "GPU",
                render: function(t) {
                    const a = getSuitableUnit(t.node_gpu_total, "gpu");
                    const n = getValueByUnit(t.node_gpu_usage, a);
                    const r = getValueByUnit(t.node_gpu_total, a);
                    return <div><h3>{e.toPercentage(t.node_gpu_utilization)}</h3><div>{e.handleValue(n)}/{e.handleValue(r)} GPU</div></div>;
                }
            },
            {
                width: e.rankTdWidth,
                sort_metric: "node_gpu_memory_utilization",
                title: t("GPU_MEMORY_USAGE"),
                key: "gpu_memory",
                render: function(t) {
                    const a = getValueByUnit(t.node_gpu_memory_usage, "Gi");
                    const n = getValueByUnit(t.node_gpu_memory_total, "Gi");
                    return <div><h3>{e.toPercentage(t.node_gpu_memory_utilization)}</h3><div>{e.handleValue(a)}/{e.handleValue(n)} Gi</div></div>;
                }
            },
            {
                title: t("POD_USAGE"),
                key: "Pod",
                width: e.rankTdWidth,
                sort_metric: "node_pod_utilisation",
                render: function(t) {
                    return <div><h3>{e.toPercentage(t.node_pod_utilisation)}</h3><div>{t.node_pod_running_count || "-"}/{t.node_pod_quota || "-"}</div></div>;
                }
            }
        ];
        return e;
    }
    module37(NComponent, [
        {
            key: "toPercentage",
            value: function(e) {
                const t = module159(e) || isNaN(e) ? 0 : Number(e);
                return `${Math.ceil(100 * t)}%`;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { theme, store, cluster } = props;
                const data = this.props.store.data;
                const columns = hideGPUByLicense(this.columns, cluster);
                return <Module987 theme={theme} columns={columns} store={store} dataSource={data.toJS()} emptyText=<Module848/>/>;
            }
        },
        {
            key: "isEdgeWizePage",
            get: function() {
                return this.props.isEdgeWize;
            }
        },
        {
            key: "canViewNode",
            get: function() {
                const cluster = this.props.cluster;
                return globals.app.hasPermission({
                    skipAuth: this.isEdgeWizePage,
                    cluster,
                    module: "nodes",
                    action: "view"
                });
            }
        },
        {
            key: "prefix",
            get: function() {
                return this.props.prefix || "/clusters";
            }
        }
    ]);
    return NComponent;
})(Component)) || o;
export default S;
