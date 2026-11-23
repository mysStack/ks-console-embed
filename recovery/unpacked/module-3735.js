import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-86.js";
import "./module-18.js";
import "./module-97.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module61 from "./module-61.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import Module811 from "./module-811.js";
import Module789 from "./module-789.js";
import { ListPage, withClusterList } from "./module-794.js";
import module26 from "./module-26.js";
import Module805 from "./module-805.js";
import Module866 from "./module-866.js";
import { Component } from "./module-553.js";
import { Link } from "./module-433.js";
import module318 from "./module-318.js";
import { getDisplayName, getLocalTime, showNameAndAlias } from "./module-52.js";
import { ICON_TYPES, WORKLOAD_STATUS } from "./module-72.js";
import module14 from "./module-14.js";
import { getStatefulSetStatus, getWorkloadStatus } from "./module-434.js";
import { inject } from "./module-239.js";
let o;
const D = withClusterList({
    store: new module318("statefulsets"),
    module: "statefulsets",
    name: "STATEFULSET",
    rowKey: "uid"
})(o = ((Component_1)=>{
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
        e.handleTabChange = function(t) {
            const cluster = e.props.match.params.cluster;
            e.props.routing.push(`/clusters/${cluster}/${t}`);
        };
        e.showAction = function(e) {
            return !e.isFedManaged;
        };
        e.disableStopButton = function() {
            const tableProps = e.props.tableProps;
            const { data, selectedRowKeys } = tableProps;
            return module14.toJS(data).filter((e)=>selectedRowKeys.indexOf(e.uid) !== -1).some((e)=>getStatefulSetStatus(e) === "Stopped");
        };
        e.getItemDesc = function(r) {
            const n = getWorkloadStatus(r, e.props.module);
            const { status, reason } = n;
            if (reason) {
                return <Module805 status={status} reason={t(reason)} data={r}/>;
            }
            return r.description || "-";
        };
        e.getCheckboxProps = function(e) {
            return {
                disabled: e.isFedManaged,
                name: e.name
            };
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { getSortOrder, getFilteredValue, module } = e_props;
            const cluster = e.props.match.params.cluster;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    render: function(t, r) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(r)} desc={e.getItemDesc(r)} isMultiCluster={r.isFedManaged} to={`/clusters/${cluster}/projects/${r.namespace}/${module}/${t}`}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    filters: e.getStatus(),
                    filteredValue: getFilteredValue("status"),
                    isHideable: true,
                    search: true,
                    width: "22%",
                    render: function(e, data) {
                        return <Module866 data={data} module={module}/>;
                    }
                },
                {
                    title: t("PROJECT"),
                    dataIndex: "namespace",
                    isHideable: true,
                    width: "22%",
                    render: function(e) {
                        return <Link to={`/clusters/${cluster}/projects/${e}`}>{showNameAndAlias(e, "project")}</Link>;
                    }
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    sorter: true,
                    sortOrder: getSortOrder("createTime"),
                    isHideable: true,
                    width: 150,
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { query, match, module } = e_props;
            return e.props.trigger("workload.create", {
                module,
                namespace: query.namespace,
                cluster: match.params.cluster,
                rootStore: e.props.rootStore
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "getStatus",
            value: function() {
                return WORKLOAD_STATUS.map((e)=>({
                        text: t(e.text),
                        value: e.value
                    }));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { match, tableProps } = props;
                return <ListPage {...this.props}><Module811 {...tableProps} itemActions={this.itemActions} selectActions={this.selectActions} columns={this.getColumns()} onCreate={this.showCreate} cluster={match.params.cluster} getCheckboxProps={this.getCheckboxProps}/></ListPage>;
            }
        },
        {
            key: "tabs",
            get: function() {
                return {
                    value: this.props.module,
                    onChange: this.handleTabChange,
                    options: [
                        {
                            value: "deployments",
                            label: t("DEPLOYMENTS")
                        },
                        {
                            value: "statefulsets",
                            label: t("STATEFULSETS")
                        },
                        {
                            value: "daemonsets",
                            label: t("DAEMONSETS")
                        }
                    ]
                };
            }
        },
        {
            key: "k8sVersion",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return globals.clusterConfig?.[cluster]?.k8sVersion;
            }
        },
        {
            key: "selectActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { tableProps, trigger, name, rootStore } = props;
                const disabled = this.disableStopButton();
                return module61(module26(tableProps, "tableActions.selectActions", {})).filter((e)=>e.key !== "delete").concat([
                    {
                        key: "delete",
                        type: "danger",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function() {
                            trigger("workload.batch.delete", {
                                type: name,
                                rowKey: "uid",
                                k8sVersion: _this.k8sVersion
                            });
                        }
                    },
                    {
                        key: "stop",
                        text: t("STOP"),
                        disabled,
                        action: "edit",
                        onClick: function() {
                            return trigger("resource.batch.stop", {
                                type: name,
                                rowKey: "uid",
                                success: rootStore.routing.query()
                            });
                        }
                    }
                ]);
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { module, trigger, name } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(e) {
                            return trigger("resource.baseinfo.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "editYaml",
                        icon: "pen",
                        text: t("EDIT_YAML"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(e) {
                            return trigger("resource.yaml.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "redeploy",
                        icon: "restart",
                        text: t("RECREATE"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(e) {
                            return trigger("workload.redeploy", {
                                module,
                                detail: e
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        show: this.showAction,
                        onClick: function(t) {
                            return trigger("workload.delete", {
                                type: name,
                                detail: t,
                                k8sVersion: _this.k8sVersion
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return n;
})(Component)) || o;
const A = inject()(function(e) {
    const cluster = e.match.params.cluster;
    const k8sVersion = globals.clusterConfig?.[cluster]?.k8sVersion;
    return <D k8sVersion={k8sVersion} {...e}/>;
});
export default A;
