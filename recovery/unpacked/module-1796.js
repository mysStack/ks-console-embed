import "./module-15.js";
import "./module-5.js";
import "./module-84.js";
import "./module-27.js";
import "./module-190.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { observer } from "./module-239.js";
import module26 from "./module-26.js";
import module159 from "./module-159.js";
import { hideGPUByLicense } from "./module-52.js";
import { getSuitableUnit, getValueByUnit } from "./module-795.js";
import module186 from "./module-186.js";
import Module848 from "./module-848.js";
import Module1797 from "./module-1797.js";
import Module987 from "./module-987.js";
import module3781 from "./module-3781.js";
let l;
const O = observer(l = ((Component_1)=>{
    module55(RComponent, Component_1);
    var a = ((RComponent_1)=>{
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
            const r = module51(RComponent_1);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(RComponent);
    function RComponent(...l_1) {
        let e;
        module36(this, RComponent);
        e = a.call(this, ...l_1);
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
                    return <div><h3><Module1797 to={to} auth={e.canViewNode}>{a.node}</Module1797>{a.role === "master" && <span className={module3781.label}>{t("CONTROL_PLANE")}</span>}</h3><p>{module26(a, "host_ip", "-")}</p></div>;
                }
            },
            {
                key: "cpu",
                width: e.rankTdWidth,
                sort_metric: "node_cpu_utilisation",
                title: t("CPU_USAGE"),
                render: function(a) {
                    const r = getSuitableUnit(a.node_cpu_total, "cpu");
                    const n = getValueByUnit(a.node_cpu_usage, r);
                    const l = getValueByUnit(a.node_cpu_total, r);
                    const u = e.setUnitText(r);
                    return <div><h3>{e.toPercentage(a.node_cpu_utilisation)}</h3><div>{e.handleValue(n)}/{e.handleValue(l)}{t(u)}</div></div>;
                }
            },
            {
                width: e.rankTdWidth,
                key: "node_load1",
                title: <span className={module3781.averageload}>{t("AVERAGE_CPU_LOAD")}</span>,
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
                    const r = getValueByUnit(t.node_memory_total, "Gi");
                    return <div><h3>{e.toPercentage(t.node_memory_utilisation)}</h3><div>{e.handleValue(a)}/{e.handleValue(r)} Gi</div></div>;
                }
            },
            {
                width: e.rankTdWidth,
                sort_metric: "node_gpu_utilization",
                title: t("GPU_USAGE"),
                key: "GPU",
                render: function(a) {
                    const r = getSuitableUnit(a.node_gpu_total, "gpu");
                    const n = getValueByUnit(a.node_gpu_usage, r);
                    const l = getValueByUnit(a.node_gpu_total, r);
                    const u = e.setUnitText(r);
                    return <div><h3>{e.toPercentage(a.node_gpu_utilization)}</h3><div>{e.handleValue(n)}/{e.handleValue(l)} {t(u)}</div></div>;
                }
            },
            {
                width: e.rankTdWidth,
                sort_metric: "node_gpu_memory_utilization",
                title: t("GPU_MEMORY_USAGE"),
                key: "gpu_memory",
                render: function(t) {
                    const a = getValueByUnit(t.node_gpu_memory_usage, "Gi");
                    const r = getValueByUnit(t.node_gpu_memory_total, "Gi");
                    return <div><h3>{e.toPercentage(t.node_gpu_memory_utilization)}</h3><div>{e.handleValue(a)}/{e.handleValue(r)} Gi</div></div>;
                }
            },
            {
                title: t("DISK_USAGE"),
                key: "disk",
                sort_metric: "node_disk_size_utilisation",
                width: e.rankTdWidth,
                render: function(t) {
                    const a = getValueByUnit(t.node_disk_size_usage, "GB");
                    const r = getValueByUnit(t.node_disk_size_capacity, "GB");
                    return <div><h3>{e.toPercentage(t.node_disk_size_utilisation)}</h3><div>{e.handleValue(a)}/{e.handleValue(r)} GB</div></div>;
                }
            },
            {
                width: e.rankTdWidth,
                title: t("INODE_USAGE"),
                sort_metric: "node_disk_inode_utilisation",
                render: function(t) {
                    return <div><h3>{e.toPercentage(t.node_disk_inode_utilisation)}</h3><div>{t.node_disk_inode_usage || "-"}/{t.node_disk_inode_total || "-"}</div></div>;
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
    module37(RComponent, [
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
    return RComponent;
})(Component)) || l;
export default O;
