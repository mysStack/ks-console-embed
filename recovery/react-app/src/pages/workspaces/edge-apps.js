import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
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
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import module26 from "unpacked/module-26.js";
import Module789 from "components/Base/Avatar";
import Module797 from "components/Tables/List";
import Module793 from "unpacked/module-793.js";
import module794, { ListPage } from "components/HOCs/withList";
import { getDisplayName, getLocalTime } from "utils/index";
import module1099 from "unpacked/module-1099.js";
let u;
const w = module794({
    store: new module1099,
    module: "apptemplates",
    authKey: "app-templates",
    name: "EDGE_APP_TEMPLATES",
    rowKey: "name",
    injectStores: [
        "rootStore",
        "workspaceStore"
    ]
})(u = ((Component_1)=>{
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
        e.getData = function(t) {
            e.props.store.fetchList({
                cluster: e.cluster,
                workspace: e.workspace,
                ...t
            });
        };
        e.showCreate = function() {
            e.props.trigger("app.template.create", {
                workspace: e.workspace,
                cluster: e.cluster,
                success: e.getData
            });
        };
        e.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    key: "name",
                    render: function(t, r) {
                        return <Module789 to={`/workspaces/${e.workspace}/edge-apps/${t}`} icon="appcenter" iconSize={40} title={getDisplayName(r)} desc={r.description || "-"}/>;
                    }
                },
                {
                    title: t("LATEST_VERSION"),
                    dataIndex: "latestVersion",
                    isHideable: true,
                    width: "20%",
                    render: function(e) {
                        return e.name || "-";
                    }
                },
                {
                    title: t("CONTAINER_COUNTS"),
                    dataIndex: "status",
                    isHideable: true,
                    width: "20%",
                    render: function(e, t) {
                        return module26(t, "latestVersion.containers", []).length;
                    }
                },
                {
                    title: t("UPDATE_TIME_TCAP"),
                    dataIndex: "updateTime",
                    sorter: true,
                    isHideable: true,
                    width: "120",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps} icon="appcenter"/><Module797 {...tableProps} tableActions={this.tableActions} itemActions={this.itemActions} columns={this.getColumns()} searchType="name"/></ListPage>;
            }
        },
        {
            key: "cluster",
            get: function() {
                const detail = this.props.workspaceStore.detail;
                return module26(module14.toJS(detail), "clusters.[0].name", "");
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, name } = props;
                return [
                    {
                        key: "create",
                        icon: "cogwheel",
                        text: t("CREATE_APP_TEMPLATE_VERSION"),
                        action: "create",
                        onClick: function(t) {
                            return trigger("app.template.version.create", {
                                cluster: _this.cluster,
                                workspace: _this.workspace,
                                templateName: t.name,
                                success: _this.getData
                            });
                        }
                    },
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        onClick: function(t) {
                            return trigger("resource.baseinfo.edit", {
                                detail: t,
                                success: _this.getData
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(t) {
                            return trigger("resource.delete", {
                                type: name,
                                detail: t,
                                success: _this.getData
                            });
                        }
                    }
                ];
            }
        },
        {
            key: "tableActions",
            get: function() {
                return {
                    ...this.props.tableProps.tableActions,
                    onCreate: this.showCreate,
                    getCheckboxProps: function(e) {
                        return {
                            disabled: e.deletionTime,
                            name: e.name
                        };
                    },
                    emptyProps: {
                        icon: "appcenter"
                    }
                };
            }
        }
    ]);
    return a;
})(Component)) || u;
export default w;
