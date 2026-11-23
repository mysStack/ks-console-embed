import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
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
import "./module-85.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-41.js";
import "./module-31.js";
import "./module-58.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import module1024 from "./module-1024.js";
import module186 from "./module-186.js";
import Module789 from "./module-789.js";
import Module796 from "./module-796.js";
import Module793 from "./module-793.js";
import Module797 from "./module-797.js";
import module794, { ListPage } from "./module-794.js";
import { getDisplayName, hideGPUByLicense } from "./module-52.js";
import { getSuitableValue } from "./module-795.js";
import module854 from "./module-854.js";
import module1196 from "./module-1196.js";
import { MetricTypes } from "./module-1194.js";
import module5275 from "./module-5275.js";
let s;
const M = {
    active: "RUNNING"
};
const I = module794({
    store: new module854,
    name: "PROJECT",
    module: "projects",
    authKey: "nodegroups",
    skipAuth: true
})(s = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...o_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...o_1);
        e.monitoringStore = new module1196;
        e.getData = async function t() {
            let r;
            let n;
            let a;
            let group;
            let u;
            const i = arguments;
            r = i.length > 0 && i[0] !== undefined ? i[0] : {};
            ({ silent: n, ...a } = r);
            group = e.props.match.params.group;
            u = e.props.store;
            if (n) {
                u.list.silent = true;
            }
            await u.fetchChildResource({
                ...a,
                kind: "namespaces",
                cluster: e.cluster,
                group
            });
            await e.monitoringStore.fetchMetrics({
                cluster: e.cluster,
                resources: u.list.data.map((e)=>e.name),
                metrics: Object.values(hideGPUByLicense(MetricTypes, e.cluster)),
                last: true
            });
            u.list.silent = false;
        };
        e.getLastValue = function(t, r) {
            const data = e.monitoringStore.data;
            const a = (module26(data, `${r}.data.result`) || []).find((e)=>module26(e, "metric.namespace") === t.name);
            return module26(a, "value[1]", 0);
        };
        e.getColumns = function() {
            const getSortOrder = e.props.getSortOrder;
            const n = [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    render: function(e, t) {
                        return <Module789 icon="project" iconSize={40} isMultiCluster={t.isFedHostNamespace} desc={t.description || "-"} title={getDisplayName(t)} noLink/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    width: "12.7%",
                    render: function(e) {
                        if (module26(M, e)) {
                            return <Module796 type={e} name={t(e.toUpperCase())} flicker/>;
                        }
                        return "-";
                    }
                },
                {
                    title: t("WORKSPACE"),
                    dataIndex: "workspace",
                    isHideable: true,
                    width: "20.9%",
                    render: function(e, t) {
                        return module26(t, 'labels["kubesphere.io/workspace"]', "-");
                    }
                },
                {
                    title: t("CPU_USAGE"),
                    key: "namespace_cpu_usage",
                    isHideable: true,
                    width: "12.7%",
                    render: function(t) {
                        return getSuitableValue(e.getLastValue(t, MetricTypes.cpu), "cpu", "-");
                    }
                },
                {
                    title: t("MEMORY_USAGE"),
                    key: "namespace_memory_usage_wo_cache",
                    isHideable: true,
                    width: "12.7%",
                    render: function(t) {
                        return getSuitableValue(e.getLastValue(t, MetricTypes.memory), "memory", "-");
                    }
                },
                {
                    title: t("GPU_USAGE"),
                    key: "namespace_gpu_usage",
                    isHideable: true,
                    width: "12.7%",
                    render: function(t) {
                        return getSuitableValue(e.getLastValue(t, MetricTypes.gpu), "gpu", "-");
                    }
                },
                {
                    title: t("GPU_MEMORY_USAGE"),
                    key: "namespace_gpu_memory_usage",
                    isHideable: true,
                    width: "12.7%",
                    render: function(t) {
                        return getSuitableValue(e.getLastValue(t, MetricTypes.gpu_memory), "memory", "-");
                    }
                },
                {
                    title: t("POD_PL"),
                    key: "namespace_pod_count",
                    isHideable: true,
                    width: "12.7%",
                    render: function(t) {
                        return e.getLastValue(t, MetricTypes.pod);
                    }
                },
                {
                    title: "",
                    key: "opt",
                    width: "7%",
                    render: function(t, r) {
                        return <module186.Button type="flat" className={module5275.button} onClick={function() {
                            return e.unBoundNamespace(r);
                        }}><img src="/assets/subtract_circle.svg" style={{
                            width: "16px"
                        }}/></module186.Button>;
                    }
                }
            ];
            if (module1024(e.enabledActions) > 0 && e.enabledActions.includes("delete")) {
                return n;
            }
            return n.filter((e)=>e.key !== "opt");
        };
        e.showAction = function(e) {
            return !e.isFedManaged;
        };
        e.showCreate = function() {
            return e.props.trigger("node.group.bound.project", {
                ...e.props.match.params,
                cluster: e.cluster,
                success: function() {
                    return e.getData();
                }
            });
        };
        e.unBoundNamespace = function(t) {
            e.props.trigger("node.group.unbound.namespace", {
                group: e.group,
                cluster: e.cluster,
                namespace: t.name,
                resource: [
                    t.name
                ],
                success: e.getData
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps}/><Module797 {...tableProps} columns={this.getColumns()} itemActions={this.itemActions} tableActions={this.tableActions} onCreate={this.showCreate} createText={t("BOUND")} emptyProps={{
                    icon: "edge-node",
                    title: t("NODE_GROUP_PROJECT_EMPTY"),
                    action: <module186.Button type="control" onClick={this.showCreate}>{t("BOUND")}</module186.Button>
                }} searchType="name"/></ListPage>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "group",
            get: function() {
                return this.props.match.params.group;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    ...this.props.match.params,
                    nodegroup: this.group,
                    module: "nodegroups"
                });
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
                const _this = this;
                const props = this.props;
                const { tableProps, trigger } = props;
                return {
                    ...tableProps.tableActions,
                    onFetch: this.getData,
                    selectActions: [
                        {
                            key: "delete",
                            type: "danger",
                            text: t("DELETE"),
                            action: "delete",
                            onClick: function() {
                                return trigger("node.group.unbound.namespace", {
                                    group: _this.group,
                                    cluster: _this.cluster,
                                    success: _this.getData
                                });
                            }
                        }
                    ]
                };
            }
        }
    ]);
    return n;
})(Component)) || s;
export default I;
