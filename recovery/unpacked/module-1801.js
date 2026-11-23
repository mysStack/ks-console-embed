import "./module-15.js";
import "./module-5.js";
import "./module-27.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import Module789 from "./module-789.js";
import Module848 from "./module-848.js";
import Module987 from "./module-987.js";
import { inject, observer } from "./module-239.js";
import { Component } from "./module-553.js";
import { hideGPUByLicense, showNameAndAlias } from "./module-52.js";
import { getSuitableValue } from "./module-795.js";
let l;
const y = inject("rootStore")(l = observer(l = ((Component_1)=>{
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
    function RComponent(...l) {
        let e;
        module36(this, RComponent);
        e = a.call(this, ...l);
        e.IconWidth = 40;
        e.rankTdWidth = 124;
        e.columns = [
            {
                dataIndex: "namespace",
                title: t("PROJECT"),
                key: "avatar",
                render: function(t) {
                    return <Module789 icon="project" iconSize={40} title={showNameAndAlias(t, "project", {
                        cluster: e.props.cluster
                    })} to={`${e.prefix}/${t}`}/>;
                }
            },
            {
                sort_metric: "namespace_cpu_usage",
                key: "cpu",
                width: e.rankTdWidth,
                title: <div>{t("CPU_USAGE")}</div>,
                render: function(e) {
                    return <div><h3>{getSuitableValue(e.namespace_cpu_usage, "cpu", "-")}</h3><div>{t("QUOTA_VALUE", {
                        value: getSuitableValue(e.namespace_cpu_limit_hard, "cpu", "-")
                    })}</div></div>;
                }
            },
            {
                sort_metric: "namespace_memory_usage_wo_cache",
                width: e.rankTdWidth,
                title: <div>{t("MEMORY_USAGE")}</div>,
                key: "memory",
                render: function(e) {
                    return <div><h3>{getSuitableValue(e.namespace_memory_usage_wo_cache, "memory", "-")}</h3><div>{t("QUOTA_VALUE", {
                        value: getSuitableValue(e.namespace_memory_limit_hard, "memory", "-")
                    })}</div></div>;
                }
            },
            {
                sort_metric: "namespace_gpu_usage",
                key: "gpu",
                width: e.rankTdWidth,
                title: <div>{t("GPU_USAGE")}</div>,
                render: function(e) {
                    return <div><h3>{getSuitableValue(e.namespace_gpu_usage, "gpu", "-")}</h3><div>{t("QUOTA_VALUE", {
                        value: getSuitableValue(e.namespace_gpu_limit_hard, "gpu", "-")
                    })}</div></div>;
                }
            },
            {
                sort_metric: "namespace_gpu_memory_usage",
                width: e.rankTdWidth,
                title: <div>{t("GPU_MEMORY_USAGE")}</div>,
                key: "gpu_memory",
                render: function(e) {
                    return <div><h3>{getSuitableValue(e.namespace_gpu_memory_usage, "memory", "-")}</h3></div>;
                }
            },
            {
                sort_metric: "namespace_pod_count",
                title: t("POD_COUNT"),
                key: "pod",
                width: e.rankTdWidth,
                render: function(e) {
                    return <div><h3>{e.namespace_pod_count || "-"}</h3><div>{t("QUOTA_VALUE", {
                        value: e.namespace_pods_hard || "-"
                    })}</div></div>;
                }
            },
            {
                sort_metric: "namespace_net_bytes_transmitted",
                title: t("OUTBOUND_TRAFFIC"),
                key: "namespace_net_bytes_transmitted",
                width: e.rankTdWidth,
                render: function(e) {
                    return <div><h3>{getSuitableValue(e.namespace_net_bytes_transmitted, "bandwidth", "-")}</h3></div>;
                }
            },
            {
                sort_metric: "namespace_net_bytes_received",
                title: t("INBOUND_TRAFFIC"),
                key: "namespace_net_bytes_received",
                width: e.rankTdWidth,
                render: function(e) {
                    return <div><h3>{getSuitableValue(e.namespace_net_bytes_received, "bandwidth", "-")}</h3></div>;
                }
            }
        ];
        return e;
    }
    module37(RComponent, [
        {
            key: "toPercentage",
            value: function(e) {
                const t = Number(e) || 0;
                return `${Math.ceil(100 * t)}%`;
            }
        },
        {
            key: "toUnit",
            value: function(e, t = "") {
                if (isNaN(e)) {
                    return "-";
                }
                return `${e} ${t}`;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { theme, store, cluster } = props;
                const data = this.props.store.data;
                const columns = hideGPUByLicense(this.columns, cluster);
                return <Module987 rowKey="namespace" theme={theme} columns={columns} store={store} dataSource={data.toJS()} emptyText=<Module848/>/>;
            }
        },
        {
            key: "prefix",
            get: function() {
                const props = this.props;
                const { workspace, cluster } = props;
                return `${workspace ? `/${workspace}` : ""}/clusters/${cluster}/projects`;
            }
        }
    ]);
    return RComponent;
})(Component)) || l) || l;
export default y;
