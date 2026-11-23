import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module61 from "./module-61.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import Module789 from "./module-789.js";
import Module796 from "./module-796.js";
import Module793 from "./module-793.js";
import { ListPage, withProjectList } from "./module-794.js";
import Module797 from "./module-797.js";
import Module1980 from "./module-1980.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import { ICON_TYPES } from "./module-72.js";
import module437 from "./module-437.js";
import module318 from "./module-318.js";
let o;
const P = withProjectList({
    store: new module437(new module318("deployments")),
    module: "deployments",
    name: "DEPLOYMENT",
    rowKey: "uid"
})(o = ((Component_1)=>{
    module55(a, Component_1);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(...o) {
        let e;
        module36(this, a);
        e = r.call(this, ...o);
        e.handleTabChange = function(t) {
            e.props.routing.push(`${e.prefix}/${t}`);
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { module, projectStore } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    render: function(t, r) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} isMultiCluster={r.isFedManaged} title={getDisplayName(r)} desc={r.description || "-"} to={r.deletionTime ? null : `${e.props.match.url}/${t}`}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    width: "22%",
                    render: function(e, data) {
                        if (e === "Deleting") {
                            return <Module796 type={e} name={t(e.toUpperCase())} flicker/>;
                        }
                        return <Module1980 data={data} module={module} clusters={projectStore.detail.clusters}/>;
                    }
                },
                {
                    title: t("APP"),
                    dataIndex: "app",
                    isHideable: true,
                    width: "22%"
                },
                {
                    title: t("UPDATE_TIME_TCAP"),
                    dataIndex: "updateTime",
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
                isFederated: true,
                projectDetail: projectStore.detail,
                namespace: match.params.namespace,
                renderScheduleTab: true,
                supportGpuSelect: true
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} isFederated><Module793 {...bannerProps} title={t("WORKLOAD_PL")} description={t("WORKLOAD_DESC")} tabs={this.tabs}/><Module797 {...tableProps} itemActions={this.itemActions} tableActions={this.tableActions} selectActions={this.selectActions} columns={this.getColumns()} onCreate={this.showCreate} searchType="name"/></ListPage>;
            }
        },
        {
            key: "prefix",
            get: function() {
                const params = this.props.match.params;
                const { workspace, namespace } = params;
                return `/${workspace}/federatedprojects/${namespace}`;
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
                        }
                    ]
                };
            }
        },
        {
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { trigger, name } = props;
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
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(e) {
                            return trigger("workload.delete", {
                                type: name,
                                detail: e,
                                isFederated: true
                            });
                        }
                    }
                ];
            }
        },
        {
            key: "selectActions",
            get: function() {
                const props = this.props;
                const { tableProps, trigger, name, rootStore } = props;
                return [].concat(module61(module26(tableProps, "tableActions.selectActions", {})), [
                    {
                        key: "stop",
                        text: t("STOP"),
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
            key: "tableActions",
            get: function() {
                const props = this.props;
                const { trigger, name } = props;
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
                                    rowKey: "name",
                                    isFederated: true
                                });
                            }
                        }
                    ]
                };
            }
        }
    ]);
    return a;
})(Component)) || o;
export default P;
