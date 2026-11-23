import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-41.js";
import "./module-31.js";
import "./module-58.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module794, { ListPage } from "./module-794.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import module26 from "./module-26.js";
import module889 from "./module-889.js";
import module789 from "./module-789.js";
import module796 from "./module-796.js";
import module797 from "./module-797.js";
import module5155 from "./module-5155.js";
let s;
const O = module794({
    store: new module889,
    module: "subscription-mail",
    name: "NOTIFICATION_SUBSCRIPTION",
    rowKey: "uid",
    authKey: "platform-settings"
})(s = ((e)=>{
    module55(r, e);
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.getItemDesc = function(e) {
            return e.description || "-";
        };
        e.getColumns = function() {
            const getSortOrder = e.props.getSortOrder;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    render: function(t, a) {
                        return module553.default.createElement(module789, {
                            className: module5155.avatar,
                            avatar: "/assets/receiver.svg",
                            title: getDisplayName(a),
                            desc: e.getItemDesc(a),
                            to: `/settings/notification-subscription/subscription-mail/detail/${t}`
                        });
                    }
                },
                {
                    title: t("NOTIFICATION_RECEIVER_STATUS"),
                    dataIndex: "status",
                    width: "22%",
                    render: function(e, a) {
                        const r = module26(a, "_originData.spec.email.enabled", true);
                        const type = r ? "success" : "disabled";
                        const u = r ? "ENABLED" : "DISABLED";
                        return module553.default.createElement(module796, {
                            type,
                            name: t(u)
                        });
                    }
                },
                {
                    title: t("NOTIFICATION_SUBSCRIPTION_TOTAL"),
                    dataIndex: "count",
                    render: function(e, t) {
                        return module26(t, "_originData.spec.email.to", []).length;
                    }
                },
                {
                    title: t("CREATION_TIME"),
                    dataIndex: "createTime",
                    sorter: true,
                    sortOrder: getSortOrder("creationTimestamp"),
                    isHideable: true,
                    width: 150,
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.showCreate = function() {
            e.props.routing.push("/settings/notification-subscription/subscription-mail/create");
        };
        e.getData = async function t() {
            let a;
            let r;
            let n;
            let u;
            const o = arguments;
            a = o.length > 0 && o[0] !== undefined ? o[0] : {};
            ({ silent: r, ...n } = a);
            u = e.props.store;
            if (r) {
                u.list.silent = true;
            }
            await u.fetchList({
                ...n,
                type: "email"
            });
            u.list.silent = false;
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const tableProps = this.props.tableProps;
                return module553.default.createElement(ListPage, {
                    ...this.props,
                    getData: this.getData,
                    noWatch: true
                }, module553.default.createElement(module797, {
                    ...tableProps,
                    itemActions: this.itemActions,
                    columns: this.getColumns(),
                    onCreate: this.showCreate
                }));
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
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT"),
                        action: "edit",
                        onClick: function(t) {
                            return _this.props.routing.push(`/settings/notification-subscription/subscription-mail/detail/${t.name}/edit`);
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(detail) {
                            return trigger("resource.delete", {
                                type: name,
                                detail,
                                success: _this.props.routing.query
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return r;
})(module553.Component)) || s;
export default O;
