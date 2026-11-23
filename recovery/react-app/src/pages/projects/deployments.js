import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-86.js";
import "unpacked/module-18.js";
import "unpacked/module-97.js";
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
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import { inject, observer } from "unpacked/module-239.js";
import Module789 from "components/Base/Avatar";
import Module793 from "unpacked/module-793.js";
import { ListPage, withProjectList } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import Module805 from "unpacked/module-805.js";
import Module866 from "unpacked/module-866.js";
import module318 from "stores/workload/index";
import { getDisplayName, getLocalTime } from "utils/index";
import { ICON_TYPES, WORKLOAD_STATUS } from "utils/constants";
import module14 from "unpacked/module-14.js";
import { getDeployStatus, getWorkloadStatus } from "utils/status";
let o;
const P = withProjectList({
    store: new module318("deployments"),
    module: "deployments",
    name: "DEPLOYMENT",
    rowKey: "uid"
})(o = inject("workspaceStore")(o = observer(o = ((Component_1)=>{
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
    function r(...o_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...o_1);
        e.handleTabChange = function(t) {
            e.props.routing.push(`${e.prefix}/${t}`);
        };
        e.disableStopButton = function() {
            const tableProps = e.props.tableProps;
            const { data, selectedRowKeys } = tableProps;
            return module14.toJS(data).filter((e)=>selectedRowKeys.indexOf(e.uid) !== -1).some((e)=>getDeployStatus(e) === "Stopped");
        };
        e.disableStopButton = function() {
            const tableProps = e.props.tableProps;
            const { data, selectedRowKeys } = tableProps;
            return module14.toJS(data).filter((e)=>selectedRowKeys.indexOf(e.uid) !== -1).some((e)=>getDeployStatus(e) === "Stopped");
        };
        e.getItemDesc = function(a) {
            const r = getWorkloadStatus(a, e.props.module);
            const { status, reason } = r;
            if (reason) {
                return <Module805 status={status} reason={t(reason)} data={a}/>;
            }
            return a.description || "-";
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { getSortOrder, getFilteredValue, module } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    render: function(t, a) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(a)} desc={e.getItemDesc(a)} to={`${e.prefix}/${module}/${t}`} isMultiCluster={a.isFedManaged}/>;
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
                    title: t("APP"),
                    dataIndex: "app",
                    isHideable: true,
                    search: true,
                    width: "22%"
                },
                {
                    title: t("UPDATE_TIME_TCAP"),
                    dataIndex: "updateTime",
                    sorter: true,
                    sortOrder: getSortOrder("updateTime"),
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
            const { match, module, projectStore } = e_props;
            return e.props.trigger("workload.create", {
                module,
                projectDetail: projectStore.detail,
                namespace: match.params.namespace,
                cluster: match.params.cluster,
                supportGpuSelect: true,
                isProject: true,
                isEdge: e.isEdge,
                rootStore: e.props.rootStore
            });
        };
        return e;
    }
    module37(r, [
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
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props}><Module793 {...bannerProps} title={t("WORKLOAD_PL")} description={t("WORKLOAD_DESC")} tabs={this.tabs}/><Module797 {...tableProps} itemActions={this.itemActions} tableActions={this.tableActions} selectActions={this.selectActions} columns={this.getColumns()} onCreate={this.showCreate}/></ListPage>;
            }
        },
        {
            key: "prefix",
            get: function() {
                const params = this.props.match.params;
                const { workspace, namespace, cluster } = params;
                return `/${workspace}/clusters/${cluster}/projects/${namespace}`;
            }
        },
        {
            key: "isEdge",
            get: function() {
                return this.props.workspaceStore.isEdge;
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
                        !this.isEdge && {
                            value: "statefulsets",
                            label: t("STATEFULSETS")
                        },
                        !this.isEdge && {
                            value: "daemonsets",
                            label: t("DAEMONSETS")
                        }
                    ].filter(Boolean)
                };
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
                        onClick: function(t) {
                            trigger("workload.delete", {
                                type: name,
                                detail: t,
                                k8sVersion: _this.k8sVersion
                            });
                        }
                    }
                ];
            }
        },
        {
            key: "tableActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, name, rowKey } = props;
                return {
                    ...props.tableProps.tableActions,
                    selectActions: [
                        {
                            key: "delete",
                            type: "danger",
                            text: t("DELETE"),
                            action: "delete",
                            onClick: function() {
                                return trigger("workload.batch.delete", {
                                    type: name,
                                    rowKey,
                                    k8sVersion: _this.k8sVersion
                                });
                            }
                        }
                    ]
                };
            }
        }
    ]);
    return r;
})(Component)) || o) || o) || o;
const N = inject()(function(e) {
    const cluster = e.match.params.cluster;
    const k8sVersion = globals.clusterConfig?.[cluster]?.k8sVersion;
    return <P k8sVersion={k8sVersion} {...e}/>;
});
export default N;
