import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-16.js";
import "unpacked/module-138.js";
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
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import Module789 from "components/Base/Avatar";
import Module793 from "unpacked/module-793.js";
import module794, { ListPage } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import module14 from "unpacked/module-14.js";
import { Component } from "unpacked/module-553.js";
import module441 from "stores/role";
import { getLocalTime } from "utils/index";
import { ICON_TYPES } from "utils/constants";
let i;
const O = module794({
    store: new module441,
    module: "roles",
    name: "DEVOPS_PROJECT_ROLE",
    injectStores: [
        "rootStore",
        "devopsStore"
    ]
})(i = ((Component_1)=>{
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
    function n(...o) {
        let e;
        module36(this, n);
        e = r.call(this, ...o);
        e.showAction = function(e) {
            return !globals.config.presetDevOpsRoles.includes(e.name);
        };
        e.getData = function(t) {
            const r = {
                ...t
            };
            e.props.store.fetchList({
                devops: e.devops,
                cluster: e.cluster,
                ...r
            });
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { getSortOrder, module } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    render: function(title) {
                        return <Module789 icon={ICON_TYPES[module]} title={title} to={`${e.props.match.url}/${title}`}/>;
                    }
                },
                {
                    title: t("DESCRIPTION"),
                    key: "description",
                    dataIndex: "description",
                    isHideable: true,
                    width: "40%"
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
            const { isHostCluster, store } = e_props;
            e.props.trigger("role.create", {
                module: isHostCluster ? "devopsroles" : "devopsrolesNotHostCluster",
                devops: e.devops,
                namespace: e.devops,
                cluster: e.cluster,
                roleModules: module14.toJS(store.roleCategory),
                roleTemplates: module14.toJS(e.props.store.roleTemplates.data).filter((e)=>e),
                success: e.getData
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.props.store.fetchRoleTemplates("devops", "iam.kubesphere.io/scope=namespace,devops.kubesphere.io/managed=true");
                this.props.store.fetchTemplatesCategory("namespace", "devops");
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps} tabs={this.tabs} description={t("DEVOPS_PROJECT_ROLES_DESC")}/><Module797 {...tableProps} enabledActions={this.enabledActions} emptyProps={this.emptyProps} tableActions={this.tableActions} itemActions={this.itemActions} columns={this.getColumns()} searchType="name"/></ListPage>;
            }
        },
        {
            key: "devops",
            get: function() {
                return this.props.devopsStore.devops;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: "roles",
                    devops: this.devops,
                    cluster: this.cluster
                });
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { routing, trigger, store, name, isHostCluster } = props;
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
                        onClick: function(e) {
                            return trigger("role.edit", {
                                module: isHostCluster ? "devopsroles" : "devopsrolesNotHostCluster",
                                detail: e,
                                roleTemplates: module14.toJS(store.roleTemplates.data),
                                roleModules: module14.toJS(store.roleCategory),
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
                                namespace: _this.devops,
                                cluster: _this.cluster,
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
                return {
                    ...this.props.tableProps.tableActions,
                    onCreate: this.showCreate,
                    selectActions: []
                };
            }
        },
        {
            key: "emptyProps",
            get: function() {
                return {
                    desc: t("DEVOPS_PROJECT_ROLE_EMPTY_DESC")
                };
            }
        }
    ]);
    return n;
})(Component)) || i;
export default O;
