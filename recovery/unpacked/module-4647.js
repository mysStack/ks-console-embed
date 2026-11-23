import "./module-12.js";
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
import "./module-315.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import Module789 from "./module-789.js";
import Module796 from "./module-796.js";
import Module793 from "./module-793.js";
import { ListPage, withProjectList } from "./module-794.js";
import Module797 from "./module-797.js";
import { getLocalTime } from "./module-52.js";
import module322 from "./module-322.js";
import module441 from "./module-441.js";
let o;
const T = withProjectList({
    store: new module322,
    module: "users",
    authKey: "members",
    name: "PROJECT_MEMBER",
    rowKey: "username"
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
        e.roleStore = new module441;
        e.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "username",
                    sorter: true,
                    render: function(title, t) {
                        return <Module789 avatar={t.avatar_url || "/assets/default-user.svg"} title={title} desc={t.email || "-"} noLink/>;
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
                    dataIndex: "role",
                    isHideable: true,
                    width: "19%"
                },
                {
                    title: t("LAST_LOGIN"),
                    dataIndex: "lastLoginTime",
                    isHideable: true,
                    width: 150,
                    render: function(e) {
                        return <p>{e ? getLocalTime(e).format("YYYY-MM-DD HH:mm:ss") : t("NOT_LOGIN_YET")}</p>;
                    }
                }
            ];
        };
        return e;
    }
    module37(r, [
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
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} noWatch><Module793 {...bannerProps} tabs={this.tabs} description={t("PROJECT_MEMBER_DESC")}/><Module797 {...tableProps} searchType="name" tableActions={this.tableActions} itemActions={this.itemActions} columns={this.getColumns()}/></ListPage>;
            }
        },
        {
            key: "canViewRoles",
            get: function() {
                return globals.app.hasPermission({
                    ...this.props.match.params,
                    project: this.props.match.params.namespace,
                    module: "roles",
                    action: "view"
                });
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("HOW_TO_INVITE_MEMBER_Q"),
                        description: t("HOW_TO_INVITE_MEMBER_A")
                    }
                ];
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { getData, trigger } = props;
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
                                role: detail.role,
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
                const { routing, getData, trigger } = props;
                return {
                    ...props.tableProps.tableActions,
                    actions: [
                        {
                            key: "invite",
                            type: "control",
                            text: t("INVITE"),
                            action: "create",
                            onClick: function() {
                                return trigger("member.invite", {
                                    ..._this.props.match.params,
                                    roles: module14.toJS(_this.roleStore.list.data),
                                    roleModule: _this.roleStore.module,
                                    workspace: module26(_this.props, "projectStore.detail.workspace"),
                                    title: t("INVITE_MEMBER"),
                                    desc: t("INVITE_MEMBER_DESC"),
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
                                    success: getData,
                                    ..._this.props.match.params
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
                        desc: t("PROJECT_MEMBER_EMPTY_DESC")
                    }
                };
            }
        }
    ]);
    return r;
})(Component)) || o;
export default T;
