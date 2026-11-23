import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-138.js";
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
import module14 from "./module-14.js";
import Module789 from "./module-789.js";
import Module796 from "./module-796.js";
import module199 from "./module-199.js";
import module241 from "./module-241.js";
import Module793 from "./module-793.js";
import module794, { ListPage } from "./module-794.js";
import Module797 from "./module-797.js";
import { getLocalTime } from "./module-52.js";
import module322 from "./module-322.js";
import module441 from "./module-441.js";
let i;
const P = module794({
    store: new module322,
    module: "users",
    name: "DEVOPS_PROJECT_MEMBER",
    rowKey: "username",
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
        e.roleStore = new module441;
        e.fetchData = function() {
            e.props.store.getAllUserStatus();
            if (e.canViewRoles) {
                e.roleStore.fetchList({
                    devops: e.devops,
                    cluster: e.cluster,
                    limit: -1
                });
            }
        };
        e.getData = function(t) {
            const r = {
                ...t
            };
            e.props.store.fetchList({
                namespace: e.devops,
                cluster: e.cluster,
                ...r
            });
        };
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
                        return <Module796 type={e} name={e ? t(`USER_${e.toUpperCase()}`) : ""}/>;
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
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
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
                const _this = this;
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps} tabs={this.tabs} description={t("DEVOPS_PROJECT_MEM_DESC")}/><Module797 {...tableProps} data={this.userList} searchType="name" enabledActions={this.enabledActions} tableActions={this.tableActions} itemActions={this.itemActions} columns={this.getColumns()} onRefresh={function() {
                    _this.fetchData();
                    _this.getData();
                }}/></ListPage>;
            }
        },
        {
            key: "canViewRoles",
            get: function() {
                return globals.app.hasPermission({
                    ...this.props.match.params,
                    devops: this.devops,
                    module: "roles",
                    action: "view"
                });
            }
        },
        {
            key: "userList",
            get: function() {
                const _this = this;
                return (module14.toJS(this.props.store.list.data) ?? []).map((e)=>module199({}, e, module241(_this.props.store.allUserStatus[e.name] || {}, [
                        "status",
                        "email",
                        "lastLoginTime"
                    ])));
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "devops",
            get: function() {
                return this.props.devopsStore.devops;
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
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
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: "members",
                    devops: this.devops,
                    cluster: this.cluster
                });
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const trigger = this.props.trigger;
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
                                devops: _this.devops,
                                roles: module14.toJS(_this.roleStore.list.data),
                                role: detail.role,
                                success: _this.getData
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
                                devops: _this.devops,
                                success: _this.getData,
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
                const r_trigger = props.trigger;
                return {
                    ...props.tableProps.tableActions,
                    actions: [
                        {
                            key: "invite",
                            type: "control",
                            text: t("INVITE"),
                            action: "create",
                            onClick: function() {
                                return r_trigger("member.invite", {
                                    devops: _this.devops,
                                    workspace: _this.workspace,
                                    cluster: _this.cluster,
                                    roles: module14.toJS(_this.roleStore.list.data),
                                    roleModule: _this.roleStore.module,
                                    title: t("INVITE_MEMBER"),
                                    desc: t("INVITE_MEMBER_DESC_DEVOPS"),
                                    searchPlaceholder: t("SEARCH_BY_NAME"),
                                    success: _this.getData
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
                                return r_trigger("member.remove.batch", {
                                    success: _this.getData,
                                    devops: _this.devops,
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
                        desc: t("INVITE_MEMBER_DESC_DEVOPS")
                    }
                };
            }
        }
    ]);
    return n;
})(Component)) || i;
export default P;
