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
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import module186 from "unpacked/module-186.js";
import Module789 from "components/Base/Avatar";
import Module796 from "components/Base/Status";
import Module793 from "unpacked/module-793.js";
import module794, { ListPage } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import { getLocalTime } from "utils/index";
import module1693 from "unpacked/module-1693.js";
import module1463 from "unpacked/module-1463.js";
import module854 from "unpacked/module-854.js";
let l;
const N = module794({
    store: new module1693,
    authKey: "nodegroups",
    name: "CLUSTER_MEMBER"
})(l = ((Component_1)=>{
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
        e.roleStore = new module1463;
        e.nodeGroupStore = new module854;
        e.getColumns = function() {
            return [
                {
                    title: t("USERNAME"),
                    dataIndex: "name",
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
                    dataIndex: "nodegrouprole",
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
        e.getData = async (r)=>{
            let n;
            n = e.props.store;
            await n.fetchChildResource({
                ...r,
                kind: "members",
                cluster: e.cluster,
                group: e.group
            });
        };
        e.showCreate = function() {
            e.props.trigger("node.group.member.invite", {
                cluster: e.cluster,
                group: e.group,
                roles: module14.toJS(e.roleStore.list.data),
                success: e.getData
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "showAction",
            value: function(e) {
                return globals.user.username !== e.name;
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.roleStore.fetchChildResource({
                    kind: "roles",
                    cluster: this.cluster,
                    group: this.group,
                    limit: "-1"
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps} icon="human" title={t("NODE_GROUP_MEMBER_PL")} description={t("INVITE_NODE_GROUP_MEMBER_DESC")}/><Module797 {...tableProps} emptyProps={this.emptyProps} tableActions={this.tableActions} itemActions={this.itemActions} columns={this.getColumns()} searchType="name"/></ListPage>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "group",
            get: function() {
                return this.props.match.params.group;
            }
        },
        {
            key: "canViewRoles",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return globals.app.hasPermission({
                    cluster,
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
                const trigger = this.props.trigger;
                return [
                    {
                        key: "modify",
                        icon: "pen",
                        text: t("CHANGE_ROLE"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(detail) {
                            return trigger("node.group.member.edit", {
                                ..._this.props.match.params,
                                detail,
                                store: _this.props.store,
                                roles: module14.toJS(_this.roleStore.list.data),
                                role: detail.nodegrouprole,
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
                        onClick: function(t) {
                            return trigger("node.group.member.remove", {
                                resources: [
                                    t.name
                                ],
                                cluster: _this.cluster,
                                group: _this.group,
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
                                return r_trigger("node.group.member.invite", {
                                    cluster: _this.cluster,
                                    group: _this.group,
                                    roles: module14.toJS(_this.roleStore.list.data),
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
                                return r_trigger("node.group.member.remove", {
                                    cluster: _this.cluster,
                                    group: _this.group,
                                    success: _this.getData
                                });
                            }
                        }
                    ],
                    getCheckboxProps: function(t) {
                        return {
                            disabled: !_this.showAction(t),
                            name: t.name
                        };
                    }
                };
            }
        },
        {
            key: "emptyProps",
            get: function() {
                return {
                    icon: "human",
                    name: t("NODE_GROUP_MEMBER_PL"),
                    desc: t("INVITE_NODE_GROUP_MEMBER_DESC"),
                    action: <module186.Button type="control" onClick={this.showCreate}>{t("INVITE")}</module186.Button>
                };
            }
        }
    ]);
    return n;
})(Component)) || l;
export default N;
