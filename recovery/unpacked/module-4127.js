import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-30.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-324.js";
import "./module-38.js";
import "./module-62.js";
import "./module-7.js";
import "./module-32.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-460.js";
import "./module-461.js";
import "./module-462.js";
import "./module-463.js";
import "./module-464.js";
import "./module-465.js";
import "./module-466.js";
import "./module-315.js";
import "./module-41.js";
import "./module-58.js";
import "./module-44.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import Module789 from "./module-789.js";
import Module796 from "./module-796.js";
import Module793 from "./module-793.js";
import module794, { ListPage } from "./module-794.js";
import Module797 from "./module-797.js";
import module26 from "./module-26.js";
import { Component } from "./module-553.js";
import module1836 from "./module-1836.js";
import module439 from "./module-439.js";
import { getDisplayNameNew, hideGPUByLicense } from "./module-52.js";
import { getSuitableValue } from "./module-795.js";
let i;
const N = {
    cpu: "namespace_cpu_usage",
    memory: "namespace_memory_usage_wo_cache",
    gpu: "namespace_gpu_usage",
    gpu_memory: "namespace_gpu_memory_usage",
    pod: "namespace_pod_count"
};
const D = module794({
    store: new module439,
    name: "PROJECT",
    module: "projects"
})(i = ((Component_1)=>{
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.monitoringStore = new module1836;
        e.handleFetch = function(t, a) {
            e.props.routing.query({
                ...t,
                type: e.type
            }, a);
        };
        e.handleTabChange = function(t) {
            const cluster = e.props.match.params.cluster;
            e.props.routing.push(`/whizard-telemetry/${cluster}/projects?type=${t}`);
        };
        e.getData = async function t() {
            let a;
            let r;
            let n;
            let u;
            let l;
            let i;
            let s;
            const d = arguments;
            a = d.length > 0 && d[0] !== undefined ? d[0] : {};
            ({ silent: r, ...n } = a);
            e.query = n;
            n.type = n.type || "user";
            e.type = n.type;
            u = e.props;
            l = u.store;
            i = u.match;
            s = i.params.cluster;
            if (r) {
                l.list.silent = true;
            }
            await l.fetchList({
                ...e.props.match.params,
                ...n
            });
            await e.monitoringStore.fetchMetrics({
                ...e.props.match.params,
                resources: l.list.data.map((e)=>e.name),
                metrics: Object.values(hideGPUByLicense(N, s)),
                last: true
            });
            l.list.silent = false;
        };
        e.getLastValue = function(t, a) {
            const data = e.monitoringStore.data;
            const n = (module26(data, `${a}.data.result`) || []).find((e)=>module26(e, "metric.namespace") === t.name);
            return module26(n, "value[1]", 0);
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { getSortOrder, prefix } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    render: function(e, t) {
                        return <Module789 to={t.status === "Terminating" ? null : `${prefix}/${e}`} icon="project" iconSize={40} isMultiCluster={t.isFedHostNamespace} desc={t.description || "-"} title={getDisplayNameNew(t)}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    render: function(e) {
                        return <Module796 type={e} name={t(e.toUpperCase())} flicker/>;
                    }
                },
                {
                    title: t("WORKSPACE"),
                    dataIndex: "workspace",
                    isHideable: true
                },
                {
                    title: t("CPU_USAGE"),
                    key: "namespace_cpu_usage",
                    isHideable: true,
                    render: function(t) {
                        return getSuitableValue(e.getLastValue(t, N.cpu), "cpu", "-");
                    }
                },
                {
                    title: t("MEMORY_USAGE"),
                    key: "namespace_memory_usage_wo_cache",
                    isHideable: true,
                    render: function(t) {
                        return getSuitableValue(e.getLastValue(t, N.memory), "memory", "-");
                    }
                },
                {
                    title: t("GPU_USAGE"),
                    key: "namespace_gpu_usage",
                    isHideable: true,
                    render: function(t) {
                        return getSuitableValue(e.getLastValue(t, N.gpu), "gpu", "-");
                    }
                },
                {
                    title: t("GPU_MEMORY_USAGE"),
                    key: "namespace_gpu_memory_usage",
                    isHideable: true,
                    render: function(t) {
                        return getSuitableValue(e.getLastValue(t, N.gpu_memory), "memory", "-");
                    }
                },
                {
                    title: t("POD_PL"),
                    key: "namespace_pod_count",
                    isHideable: true,
                    render: function(t) {
                        return e.getLastValue(t, N.pod);
                    }
                }
            ].filter((t)=>!e.omitKeys.has(t.key));
        };
        e.showCreate = function() {
            return e.props.trigger("project.create", {
                ...e.props.match.params,
                success: function() {
                    return e.getData();
                }
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                const cluster = props.match.params.cluster;
                const isLoading = this.monitoringStore.isLoading;
                const columns = hideGPUByLicense(this.getColumns(), cluster);
                return <ListPage {...this.props} getData={this.getData} module="namespaces"><Module793 {...bannerProps} tabs={this.tabs}/><Module797 className="table-1-7" {...tableProps} itemActions={this.itemActions} tableActions={this.tableActions} columns={columns} onCreate={this.type === "system" ? null : this.showCreate} isLoading={tableProps.isLoading || isLoading} searchType="name"/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                return [];
            }
        },
        {
            key: "tableActions",
            get: function() {
                return {
                    ...this.props.tableProps.tableActions,
                    actions: [],
                    onFetch: this.handleFetch,
                    selectActions: []
                };
            }
        },
        {
            key: "tabs",
            get: function() {
                return {
                    value: this.type || "user",
                    onChange: this.handleTabChange,
                    options: [
                        {
                            value: "user",
                            label: t("USER_PROJECTS")
                        },
                        {
                            value: "system",
                            label: t("SYSTEM_PROJECTS")
                        }
                    ]
                };
            }
        },
        {
            key: "hasMonitoring",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return globals.app.hasClusterModule(cluster, "whizard-monitoring");
            }
        },
        {
            key: "omitKeys",
            get: function() {
                return new Set(this.hasMonitoring ? [] : [
                    "namespace_cpu_usage",
                    "namespace_memory_usage_wo_cache",
                    "namespace_gpu_usage",
                    "namespace_gpu_memory_usage",
                    "namespace_pod_count"
                ]);
            }
        }
    ]);
    return r;
})(Component)) || i;
export default D;
