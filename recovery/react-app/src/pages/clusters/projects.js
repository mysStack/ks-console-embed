import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "unpacked/module-58.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module189 from "unpacked/module-189.js";
import Module789 from "components/Base/Avatar";
import Module796 from "components/Base/Status";
import Module793 from "unpacked/module-793.js";
import module794, { ListPage } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import { compareVersion, getClusterVersion, getDisplayNameNew, hideGPUByLicense, showNameAndAlias } from "utils/index";
import module439 from "stores/project";
import { getSuitableValue } from "utils/monitoring";
import module959 from "unpacked/module-959.js";
let c;
export const MetricTypes = {
    cpu: "namespace_cpu_usage",
    memory: "namespace_memory_usage_wo_cache",
    gpu: "namespace_gpu_usage",
    gpu_memory: "namespace_gpu_memory_usage",
    pod: "namespace_pod_count"
};
const M = module794({
    store: new module439,
    name: "PROJECT",
    module: "projects"
})(c = ((Component_1)=>{
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
        e.monitoringStore = new module959;
        e.showAction = function(e) {
            return !e.isFedManaged;
        };
        e.handleFetch = function(t, a) {
            e.props.routing.query({
                ...t,
                type: e.type
            }, a);
        };
        e.handleTabChange = function(t) {
            e.props.routing.push(`/clusters/${e.cluster}/projects?type=${t}`);
        };
        e.getData = async function t() {
            let a;
            let r;
            let n;
            let l;
            const u = arguments;
            a = u.length > 0 && u[0] !== undefined ? u[0] : {};
            ({ silent: r, ...n } = a);
            e.query = n;
            n.type = n.type || "user";
            e.type = n.type;
            l = e.props.store;
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
                metrics: Object.values(hideGPUByLicense(MetricTypes, e.cluster)),
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
            const l = [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    render: function(e, t) {
                        return <Module789 to={t.status === "Terminating" ? null : `${prefix}/${e}`} icon="project" iconSize={40} isMultiCluster={t.isFedHostNamespace} desc={t.description || "-"} title={getDisplayNameNew(t)}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    search: true,
                    render: function(e) {
                        return <Module796 type={e} name={t(e.toUpperCase())} flicker/>;
                    }
                },
                {
                    title: t("WORKSPACE"),
                    dataIndex: "workspace",
                    isHideable: true,
                    search: true,
                    render: function(e) {
                        return showNameAndAlias(e, "workspace");
                    }
                }
            ];
            if (globals.app.hasClusterModule(e.cluster, "whizard-monitoring")) {
                l.push({
                    title: t("CPU_USAGE"),
                    key: "namespace_cpu_usage",
                    isHideable: true,
                    render: function(t) {
                        return getSuitableValue(e.getLastValue(t, MetricTypes.cpu), "cpu", "-");
                    }
                }, {
                    title: t("MEMORY_USAGE"),
                    key: "namespace_memory_usage_wo_cache",
                    isHideable: true,
                    render: function(t) {
                        return getSuitableValue(e.getLastValue(t, MetricTypes.memory), "memory", "-");
                    }
                }, {
                    title: t("GPU_USAGE"),
                    key: "namespace_gpu_usage",
                    isHideable: true,
                    render: function(t) {
                        return getSuitableValue(e.getLastValue(t, MetricTypes.gpu), "gpu", "-");
                    }
                }, {
                    title: t("GPU_MEMORY_USAGE"),
                    key: "namespace_gpu_memory_usage",
                    isHideable: true,
                    render: function(t) {
                        return getSuitableValue(e.getLastValue(t, MetricTypes.gpu_memory), "memory", "-");
                    }
                }, {
                    title: t("POD_PL"),
                    key: "namespace_pod_count",
                    isHideable: true,
                    render: function(t) {
                        return e.getLastValue(t, MetricTypes.pod);
                    }
                });
            }
            return l;
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
                const isLoading = this.monitoringStore.isLoading;
                const columns = hideGPUByLicense(this.getColumns(), this.cluster);
                return <ListPage {...this.props} getData={this.getData} module="namespaces"><Module793 {...bannerProps} tabs={this.tabs}/><Module797 {...tableProps} className="table-2-6 table-4-3" itemActions={this.itemActions} tableActions={this.tableActions} columns={columns} columnSearch={this.columnSearch} onCreate={this.type === "system" ? null : this.showCreate} isLoading={tableProps.isLoading || isLoading}/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, routing, name } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(e) {
                            return trigger("resource.baseinfo.edit", {
                                detail: module189(e, "workspace"),
                                success: routing.query
                            });
                        }
                    },
                    {
                        key: "edit-annotations",
                        icon: "pen",
                        text: t("EDIT_ANNOTATIONS"),
                        action: "manage",
                        show: function(t) {
                            return t.workspace !== globals.config.systemWorkspace && _this.showAction(t);
                        },
                        onClick: function(e) {
                            return trigger("resource.annotations.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "modify",
                        icon: "restart",
                        text: t("ASSIGN_WORKSPACE"),
                        action: "manage",
                        show: function(t) {
                            return !t.workspace && _this.showAction(t);
                        },
                        onClick: function(e) {
                            return trigger("project.assignworkspace", {
                                detail: e,
                                success: routing.query
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        show: function(t) {
                            return t.workspace !== globals.config.systemWorkspace && _this.showAction(t);
                        },
                        onClick: function(e) {
                            return trigger("resource.delete", {
                                type: name,
                                resource: e.name,
                                detail: module189(e, "workspace"),
                                success: routing.query
                            });
                        }
                    }
                ];
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
            key: "tableActions",
            get: function() {
                return {
                    ...this.props.tableProps.tableActions,
                    onFetch: this.handleFetch
                };
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "columnSearch",
            get: function() {
                const search = compareVersion(getClusterVersion(this.cluster), "3.4.0") >= 0;
                return [
                    {
                        dataIndex: "name",
                        title: t("NAME"),
                        search: true
                    },
                    {
                        dataIndex: "alias",
                        title: t("ALIAS"),
                        search
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || c;
export default M;
