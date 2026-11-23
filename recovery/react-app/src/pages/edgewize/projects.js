import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
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
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import "utils/babel-helpers/asyncToGenerator";
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
import Module797 from "components/Tables/List";
import module794, { ListPage } from "components/HOCs/withList";
import { getDisplayName, hideGPUByLicense } from "utils/index";
import { getSuitableValue } from "utils/monitoring";
import module970 from "unpacked/module-970.js";
import module1196 from "unpacked/module-1196.js";
import { MetricTypes } from "pages/clusters/projects";
let s;
const w = module794({
    store: new module970,
    name: "PROJECT",
    module: "projects"
})(s = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(n);
    function n(...o_1) {
        let e;
        module36(this, n);
        e = a.call(this, ...o_1);
        e.monitoringStore = new module1196;
        e.getData = async function t() {
            let a;
            let n;
            let r;
            let o;
            const i = arguments;
            a = i.length > 0 && i[0] !== undefined ? i[0] : {};
            ({ silent: n, ...r } = a);
            e.query = r;
            r.type = r.type || "user";
            e.type = r.type;
            o = e.props.store;
            if (n) {
                o.list.silent = true;
            }
            await o.fetchList({
                ...e.props.match.params,
                ...r
            });
            o.list.silent = false;
        };
        e.getLastValue = function(t, a) {
            const data = e.monitoringStore.data;
            const r = (module26(data, `${a}.data.result`) || []).find((e)=>module26(e, "metric.namespace") === t.name);
            return module26(r, "value[1]", 0);
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
                        return <Module789 to={t.status === "Terminating" ? null : `${prefix}/${e}`} icon="project" iconSize={40} isMultiCluster={t.isFedHostNamespace} desc={t.description || "-"} title={getDisplayName(t)}/>;
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
                        return getSuitableValue(e.getLastValue(t, MetricTypes.cpu), "cpu", "-");
                    }
                },
                {
                    title: t("MEMORY_USAGE"),
                    key: "namespace_memory_usage_wo_cache",
                    isHideable: true,
                    render: function(t) {
                        return getSuitableValue(e.getLastValue(t, MetricTypes.memory), "memory", "-");
                    }
                },
                {
                    title: t("GPU_USAGE"),
                    key: "namespace_gpu_usage",
                    isHideable: true,
                    render: function(t) {
                        return getSuitableValue(e.getLastValue(t, MetricTypes.gpu), "gpu", "-");
                    }
                },
                {
                    title: t("GPU_MEMORY_USAGE"),
                    key: "namespace_gpu_memory_usage",
                    isHideable: true,
                    render: function(t) {
                        return getSuitableValue(e.getLastValue(t, MetricTypes.gpu_memory), "memory", "-");
                    }
                },
                {
                    title: t("POD_PL"),
                    key: "namespace_pod_count",
                    isHideable: true,
                    render: function(t) {
                        return e.getLastValue(t, MetricTypes.pod);
                    }
                }
            ];
        };
        e.handleFetch = function(t, a) {
            e.props.routing.query({
                ...t,
                type: e.type
            }, a);
        };
        e.handleTabChange = function(t) {
            const cluster = e.props.match.params.cluster;
            e.props.routing.push(`/v2/edgewize/clusters/${cluster}/projects?type=${t}`);
        };
        e.showAction = function(e) {
            return !e.isFedManaged;
        };
        e.showCreate = function() {
            return e.props.trigger("project.create", {
                ...e.props.match.params,
                isEdgeWize: true,
                success: function() {
                    return e.getData();
                }
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
                const isLoading = this.monitoringStore.isLoading;
                const columns = hideGPUByLicense(this.getColumns(), this.cluster);
                return <ListPage {...this.props} getData={this.getData} module="namespaces"><Module793 {...bannerProps} tabs={this.tabs}/><Module797 {...tableProps} itemActions={this.itemActions} tableActions={this.tableActions} columns={columns} onCreate={this.type === "system" ? null : this.showCreate} isLoading={tableProps.isLoading || isLoading} searchType="name"/></ListPage>;
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
                                isEdge: true,
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
        }
    ]);
    return n;
})(Component)) || s;
export default w;
