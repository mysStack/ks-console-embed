import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import Module789 from "components/Base/Avatar";
import Module797 from "components/Tables/List";
import module794, { ListPage } from "components/HOCs/withList";
import { getDisplayName, getLocalTime } from "utils/index";
import { ICON_TYPES } from "utils/constants";
import module441 from "stores/role";
let u;
const O = module794({
    store: new module441("workspaceroles"),
    module: "workspaceroles",
    authKey: "roles",
    name: "WORKSPACE_ROLE",
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
    function a(...o_1) {
        let e;
        module36(this, a);
        e = r.call(this, ...o_1);
        e.showAction = function(t) {
            return !globals.config.presetWorkspaceRoles.includes(t.name.slice(e.workspace.length + 1));
        };
        e.getColumns = function() {
            const getSortOrder = e.props.getSortOrder;
            const workspace = e.props.match.params.workspace;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    width: "25%",
                    render: function(t, r) {
                        return <Module789 icon={ICON_TYPES[e.module]} to={`/workspaces/${workspace}/roles/${t}`} title={getDisplayName(r)}/>;
                    }
                },
                {
                    title: t("DESCRIPTION"),
                    key: "description",
                    dataIndex: "description",
                    isHideable: true,
                    width: "55%"
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    sorter: true,
                    sortOrder: getSortOrder("createTime"),
                    isHideable: true,
                    width: "19%",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { match, trigger, getData } = e_props;
            return trigger("role.create", {
                title: t("CREATE_WORKSPACE_ROLE"),
                roleTemplates: e.roleTemplates,
                workspace: match.params.workspace,
                isEdge: e.isEdge,
                roleModules: module14.toJS(store.roleCategory),
                success: getData
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.props.store.fetchRoleTemplates("workspace");
                this.props.store.fetchTemplatesCategory("workspace");
            }
        },
        {
            key: "render",
            value: function() {
                const tableProps = this.props.tableProps;
                return <ListPage {...this.props} noWatch><Module797 {...tableProps} emptyProps={this.emptyProps} tableActions={this.tableActions} itemActions={this.itemActions} columns={this.getColumns()} searchType="name"/></ListPage>;
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
                const { trigger, store, name, module, routing } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(e) {
                            return trigger("resource.baseinfo.edit", {
                                detail: e,
                                success: routing.query
                            });
                        }
                    },
                    {
                        key: "editRole",
                        icon: "pen",
                        text: t("EDIT_PERMISSIONS"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(t) {
                            return trigger("role.edit", {
                                module,
                                detail: t,
                                roleTemplates: module14.toJS(store.roleTemplates.data),
                                roleModules: module14.toJS(store.roleCategory),
                                isEdge: _this.isEdge,
                                success: routing.query
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
                            return trigger("role.delete", {
                                detail: t,
                                type: name,
                                workspace: _this.props.match.params.workspace,
                                success: routing.query
                            });
                        }
                    }
                ];
            }
        },
        {
            key: "tableActions",
            get: function() {
                const tableProps = this.props.tableProps;
                const t = this.isEdge ? {} : {
                    onCreate: this.showCreate
                };
                return {
                    ...tableProps.tableActions,
                    selectActions: [],
                    ...t
                };
            }
        },
        {
            key: "isEdge",
            get: function() {
                return this.props.workspaceStore.isEdge;
            }
        },
        {
            key: "roleTemplates",
            get: function() {
                return module14.toJS(this.props.store.roleTemplates.data);
            }
        },
        {
            key: "emptyProps",
            get: function() {
                return {
                    desc: t("WORKSPACE_ROLE_EMPTY_DESC")
                };
            }
        }
    ]);
    return a;
})(Component)) || u;
export default O;
