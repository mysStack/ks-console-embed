import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
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
import Module793 from "unpacked/module-793.js";
import Module797 from "components/Tables/List";
import module794, { ListPage } from "components/HOCs/withList";
import { getLocalTime } from "utils/index";
import { ICON_TYPES } from "utils/constants";
import module441 from "stores/role";
let s;
const A = module794({
    store: new module441("globalroles"),
    module: "globalroles",
    authKey: "roles",
    name: "PLATFORM_ROLE"
})(s = ((Component_1)=>{
    module55(n, Component_1);
    var r = ((t)=>{
        const e = (()=>{
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
            } catch (t) {
                return false;
            }
        })();
        return function() {
            let r;
            const n = module51(t);
            if (e) {
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
        e.showAction = function(t) {
            return !globals.config.presetGlobalRoles.includes(t.name);
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { getSortOrder, module } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    width: "25%",
                    render: function(title, e) {
                        return <Module789 icon={ICON_TYPES[module]} to={`/access/roles/${title}`} title={title} desc={e.aliasName}/>;
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
                    render: function(t) {
                        return getLocalTime(t).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { store, trigger, getData } = e_props;
            return trigger("role.create", {
                title: t("CREATE_PLATFORM_ROLE"),
                roleTemplates: module14.toJS(store.roleTemplates.data),
                roleModules: module14.toJS(store.roleCategory),
                success: getData
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.props.store.fetchRoleTemplates("global");
                this.props.store.fetchTemplatesCategory("global");
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} noWatch><Module793 {...bannerProps} tabs={this.tabs}/><Module797 {...tableProps} tableActions={this.tableActions} itemActions={this.itemActions} columns={this.getColumns()} searchType="name"/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { trigger, store, name, module, routing } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(t) {
                            return trigger("resource.baseinfo.edit", {
                                detail: t,
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
        }
    ]);
    return n;
})(Component)) || s;
export default A;
