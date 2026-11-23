import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-187.js";
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
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-31.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module322 from "stores/user";
import module240 from "unpacked/module-240.js";
import Module789 from "components/Base/Avatar";
import Module796 from "components/Base/Status";
import Module793 from "unpacked/module-793.js";
import Module797 from "components/Tables/List";
import module794, { ListPage } from "components/HOCs/withList";
import module26 from "unpacked/module-26.js";
import { getLocalTime } from "utils/index";
let l;
const R = module794({
    store: new module322,
    module: "users",
    name: "USER"
})(l = ((Component_1)=>{
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
        e.handleStatus = async (n)=>{
            let a;
            let o;
            let s;
            a = e.props;
            o = a.routing;
            s = a.store;
            await s.handlechangeStatus(n);
            module240.success({
                content: t("UPDATE_SUCCESSFUL")
            });
            o.query();
        };
        e.handleBatchOperation = async (n)=>{
            let a;
            let o;
            let s;
            a = e.props;
            o = a.store;
            s = a.routing;
            await o.batchChangeStatus(n);
            module240.success({
                content: t("UPDATE_SUCCESSFUL")
            });
            s.query();
        };
        e.handledisabled = function() {
            const tableProps = e.props.tableProps;
            const t_selectedRowKeys = tableProps.selectedRowKeys;
            const n = tableProps.data.filter((t)=>t_selectedRowKeys.includes(t.name));
            if (n.every((t)=>t.status === "Active")) {
                return {
                    activeStatus: true,
                    disabledStatus: false
                };
            }
            if (n.every((t)=>t.status === "Disabled")) {
                return {
                    activeStatus: false,
                    disabledStatus: true
                };
            }
            return {
                activeStatus: false,
                disabledStatus: false
            };
        };
        e.getColumns = function() {
            return [
                {
                    title: t("USERNAME"),
                    dataIndex: "username",
                    render: function(title, e) {
                        return <Module789 avatar={e.avatar_url || "/assets/default-user.svg"} title={title} desc={e.email} to={`/access/accounts/${title}`}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    width: "20%",
                    render: function(e) {
                        return <Module796 type={e} name={t(`USER_${e.toUpperCase()}`)}/>;
                    }
                },
                {
                    title: t("PLATFORM_ROLE"),
                    dataIndex: "globalrole",
                    isHideable: true,
                    width: "20%",
                    render: function(t) {
                        return t || "-";
                    }
                },
                {
                    title: t("LAST_LOGIN"),
                    dataIndex: "lastLoginTime",
                    isHideable: true,
                    width: "20%",
                    render: function(e) {
                        if (e) {
                            return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                        }
                        return t("NOT_LOGIN_YET");
                    }
                }
            ];
        };
        e.showCreate = function() {
            return e.props.trigger("user.create", {
                success: e.props.getData
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "showAction",
            value: function(t) {
                return !globals.config.presetUsers.includes(t.name) && globals.user.username !== t.name;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props}><Module793 {...bannerProps} tabs={this.tabs}/><Module797 {...tableProps} tableActions={this.tableActions} itemActions={this.itemActions} columns={this.getColumns()} searchType="name"/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { name, trigger, getData, routing } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(detail) {
                            return trigger("user.edit", {
                                detail,
                                success: getData
                            });
                        }
                    },
                    {
                        key: "status",
                        icon: function(t) {
                            if (t.status === "Active") {
                                return "stop";
                            }
                            return "start";
                        },
                        text: function(e) {
                            if (e.status === "Active") {
                                return t("DISABLE");
                            }
                            return t("ENABLE");
                        },
                        action: "edit",
                        show: this.showAction,
                        onClick: this.handleStatus
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        show: this.showAction,
                        onClick: function(detail) {
                            return trigger("resource.delete", {
                                type: name,
                                resource: detail.username,
                                detail,
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
                const _this = this;
                const tableProps = this.props.tableProps;
                const n = this.handledisabled();
                const { activeStatus, disabledStatus } = n;
                return {
                    ...tableProps.tableActions,
                    onCreate: this.showCreate,
                    selectActions: [].concat(module61(module26(tableProps, "tableActions.selectActions", {})), [
                        {
                            key: "active",
                            type: "default",
                            text: t("ENABLE"),
                            action: "edit",
                            disabled: activeStatus,
                            onClick: function() {
                                _this.handleBatchOperation("active");
                            }
                        },
                        {
                            key: "disabled",
                            type: "default",
                            text: t("DISABLE"),
                            action: "edit",
                            disabled: disabledStatus,
                            onClick: function() {
                                _this.handleBatchOperation("disabled");
                            }
                        }
                    ]),
                    getCheckboxProps: function(t) {
                        return {
                            disabled: !_this.showAction(t),
                            name: t.name
                        };
                    }
                };
            }
        }
    ]);
    return n;
})(Component)) || l;
export default R;
