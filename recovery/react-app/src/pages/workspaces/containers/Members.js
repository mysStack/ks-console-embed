import "unpacked/module-12.js";
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
import module322 from "stores/user";
import module441 from "stores/role";
import Module789 from "components/Base/Avatar";
import Module796 from "components/Base/Status";
import Module797 from "components/Tables/List";
import module794, { ListPage } from "components/HOCs/withList";
import { getLocalTime } from "utils/index";
let u;
const w = module794({
    store: new module322,
    module: "users",
    authKey: "members",
    name: "WORKSPACE_MEMBER"
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
        e.roleStore = new module441("workspaceroles");
        e.getColumns = function() {
            const prefix = e.props.prefix;
            return [
                {
                    title: t("USERNAME"),
                    dataIndex: "username",
                    width: "40%",
                    render: function(title, t) {
                        return <Module789 to={`${prefix}/${title}`} avatar={t.avatar_url || "/assets/default-user.svg"} title={title} desc={t.email}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    width: "19%",
                    render: function(e) {
                        return <Module796 type={e} name={t(`USER_${e.toUpperCase()}`)}/>;
                    }
                },
                {
                    title: t("ROLE"),
                    dataIndex: "workspacerole",
                    isHideable: true,
                    width: "19%"
                },
                {
                    title: t("LAST_LOGIN"),
                    dataIndex: "lastLoginTime",
                    isHideable: true,
                    width: "19%",
                    render: function(e) {
                        return <p>{e ? getLocalTime(e).format("YYYY-MM-DD HH:mm:ss") : t("NOT_LOGIN_YET")}</p>;
                    }
                }
            ];
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.canViewRoles) {
                    this.roleStore.fetchList({
                        ...this.props.match.params,
                        limit: -1
                    });
                }
            }
        },
        {
            key: "showAction",
            value: function(e) {
                return globals.user.username !== e.name;
            }
        },
        {
            key: "render",
            value: function() {
                const tableProps = this.props.tableProps;
                return <ListPage {...this.props} noWatch><Module797 {...tableProps} tableActions={this.tableActions} itemActions={this.itemActions} columns={this.getColumns()} searchType="name"/></ListPage>;
            }
        },
        {
            key: "canViewRoles",
            get: function() {
                const workspace = this.props.match.params.workspace;
                return globals.app.hasPermission({
                    workspace,
                    module: "roles",
                    action: "view"
                });
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, getData } = props;
                return [
                    {
                        key: "modify",
                        icon: "pen",
                        text: t("CHANGE_ROLE"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(detail) {
                            return trigger("member.edit", {
                                detail,
                                ..._this.props.match.params,
                                roles: module14.toJS(_this.roleStore.list.data),
                                role: detail.workspacerole,
                                success: getData
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("REMOVE"),
                        action: "delete",
                        show: this.showAction,
                        onClick: function(detail) {
                            return trigger("member.remove", {
                                detail,
                                success: getData,
                                ..._this.props.match.params
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
                const { tableProps, routing, getData, trigger } = props;
                return {
                    ...tableProps.tableActions,
                    actions: [
                        {
                            key: "invite",
                            type: "control",
                            text: t("INVITE"),
                            action: "create",
                            onClick: function() {
                                return trigger("member.invite", {
                                    ..._this.props.match.params,
                                    roleModule: _this.roleStore.module,
                                    roles: module14.toJS(_this.roleStore.list.data),
                                    title: t("INVITE_MEMBER"),
                                    desc: t("INVITE_WORKSPACE_MEMBER_DESC"),
                                    searchPlaceholder: t("SEARCH_BY_NAME"),
                                    success: routing.query
                                });
                            }
                        }
                    ],
                    selectActions: [
                        {
                            key: "delete",
                            type: "danger",
                            text: t("REMOVE"),
                            action: "delete",
                            onClick: function() {
                                return trigger("member.remove.batch", {
                                    ..._this.props.match.params,
                                    success: getData
                                });
                            }
                        }
                    ],
                    getCheckboxProps: function(t) {
                        return {
                            disabled: !_this.showAction(t),
                            name: t.name
                        };
                    },
                    emptyProps: {
                        desc: t("WORKSPACE_MEMBER_EMPTY_DESC")
                    }
                };
            }
        }
    ]);
    return a;
})(Component)) || u;
export default w;
