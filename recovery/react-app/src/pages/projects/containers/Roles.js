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
import Module793 from "unpacked/module-793.js";
import { ListPage, withProjectList } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import { getLocalTime } from "utils/index";
import { ICON_TYPES } from "utils/constants";
import module441 from "stores/role";
let o;
const R = withProjectList({
    store: new module441,
    module: "roles",
    name: "PROJECT_ROLE"
})(o = ((Component_1)=>{
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
    function r(...o) {
        let e;
        module36(this, r);
        e = a.call(this, ...o);
        e.showAction = function(e) {
            return !globals.config.presetRoles.includes(e.name);
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
                    render: function(title, a) {
                        return <Module789 icon={ICON_TYPES[module]} title={title} desc={a.aliasName} iconSize={40} to={`${e.props.match.url}/${title}`}/>;
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
            const { match, getData, store } = e_props;
            return e.props.trigger("role.create", {
                namespace: match.params.namespace,
                cluster: match.params.cluster,
                roleTemplates: module14.toJS(store.roleTemplates.data),
                roleModules: module14.toJS(store.roleCategory),
                basicRoleTemplates: module14.toJS(store.basicRoleTemplates.data),
                success: getData
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.props.store.fetchRoleTemplates("namespace", "iam.kubesphere.io/scope=namespace,iam.kubesphere.io/hidden-role-template!=true,kubesphere.io/managed=true");
                this.props.store.fetchBasicRoleTemplates("namespace", "iam.kubesphere.io/scope=namespace,iam.kubesphere.io/basic-role-template=true,kubesphere.io/managed=true");
                this.props.store.fetchTemplatesCategory("namespace");
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} noWatch><Module793 {...bannerProps} tabs={this.tabs} description={t("PROJECT_ROLE_DESC")}/><Module797 {...tableProps} emptyProps={this.emptyProps} tableActions={this.tableActions} itemActions={this.itemActions} columns={this.getColumns()} searchType="name"/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { routing, trigger, store, name } = props;
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
                                detail: e,
                                roleTemplates: module14.toJS(store.roleTemplates.data),
                                basicRoleTemplates: module14.toJS(store.basicRoleTemplates.data),
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
                                cluster: _this.props.match.params.cluster,
                                namespace: _this.props.match.params.namespace,
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
                    desc: t("PROJECT_ROLE_EMPTY_DESC")
                };
            }
        }
    ]);
    return r;
})(Component)) || o;
export default R;
