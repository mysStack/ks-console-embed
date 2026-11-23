import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
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
import "unpacked/module-58.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module794, { ListPage } from "components/HOCs/withList";
import { getDisplayName, getLocalTime } from "utils/index";
import module26 from "unpacked/module-26.js";
import module889 from "stores/notification/receiver";
import module789 from "components/Base/Avatar";
import module796 from "components/Base/Status";
import module797 from "components/Tables/List";
import module5155 from "unpacked/module-5155.js";
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
