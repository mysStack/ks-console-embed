import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-73.js";
import "./module-18.js";
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
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import Module789 from "./module-789.js";
import module186 from "./module-186.js";
import module794, { ListPage } from "./module-794.js";
import Module797 from "./module-797.js";
import { getLocalTime } from "./module-52.js";
import { trigger } from "./module-792.js";
import module1408 from "./module-1408.js";
import module1445 from "./module-1445.js";
let c;
const C = module794({
    store: new module1408("namespacenetworkpolicies"),
    module: "namespacenetworkpolicies",
    name: "ALLOWLIST_ENTRY",
    authKey: "networkpolicies"
})(c = inject("rootStore")(c = trigger(c = observer(c = ((Component_1)=>{
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.fetchOutside = function({ direction, ...rest } = {}) {
            const n_props = n.props;
            const { cluster, namespace, workspace } = n_props;
            const l = [
                "kubesphere.io/policy-traffic=outside"
            ];
            if (direction && direction !== "all") {
                l.push(`kubesphere.io/policy-type=${direction}`);
            }
            n.outsideStore.fetchListOut({
                cluster,
                namespace,
                workspace,
                limit: 10,
                labelSelector: l.join(","),
                ...rest
            });
        };
        n.addIpBlock = function() {
            n.trigger("network.policies.addIpBlock", {
                ...n.props,
                success: n.fetchOutside
            });
        };
        n.editIpBlock = function(e, t) {
            n.trigger("network.policies.editIpBlock", {
                ...n.props,
                formTemplate: module14.toJS(t._originData),
                edit: true,
                name: e,
                store: n.outsideStore,
                success: n.fetchOutside
            });
        };
        n.viewIpBlock = function(e, t) {
            n.trigger("network.policies.viewIpBlock", {
                ...n.props,
                formTemplate: module14.toJS(t._originData),
                edit: true,
                name: e,
                store: n.outsideStore,
                fetchOutside: n.fetchOutside,
                success: n.fetchOutside
            });
        };
        n.handleDelete = function(e) {
            n.trigger("network.policies.delete", {
                ...n.props,
                ruleName: e,
                resource: e,
                store: n.outsideStore,
                type: "ALLOWLIST_ENTRY",
                success: n.fetchOutside
            });
        };
        n.getColumns = function() {
            const n_props = n.props;
            const { getSortOrder, getFilteredValue } = n_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    render: function(e, t) {
                        return <Module789 onClick={function() {
                            n.viewIpBlock(e, t);
                        }} className={module1445.avatar} desc={t.description || "-"} title={t.aliasName ? `${t.name}(${t.aliasName})` : t.name}/>;
                    }
                },
                {
                    title: t("TRAFFIC_DIRECTION"),
                    dataIndex: "direction",
                    filters: n.getStatus(),
                    filteredValue: getFilteredValue("direction"),
                    isHideable: true,
                    search: true,
                    render: function(e) {
                        return <div>{e === "ingress" ? t("INGRESS") : t("EGRESS")}</div>;
                    }
                },
                {
                    title: t("NETWORK_SEGMENT_QUANTITY"),
                    dataIndex: "ipBlockNumber",
                    isHideable: true,
                    search: true
                },
                {
                    title: t("PORT_QUANTITY"),
                    dataIndex: "portsNumber",
                    isHideable: true,
                    search: true
                },
                {
                    title: t("UPDATE_TIME_TCAP"),
                    dataIndex: "createTime",
                    sorter: true,
                    sortOrder: getSortOrder("updateTime"),
                    isHideable: true,
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        n.module = e.module;
        n.outsideStore = e.store;
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchOutside();
            }
        },
        {
            key: "getStatus",
            value: function() {
                return [
                    {
                        text: "ALL",
                        value: "all"
                    },
                    {
                        text: "EGRESS",
                        value: "egress"
                    },
                    {
                        text: "INGRESS",
                        value: "ingress"
                    }
                ].map((e)=>({
                        text: t(e.text),
                        value: e.value
                    }));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { canEdit, tableProps } = props;
                const data = this.outsideStore.list.data?.map(function(e) {
                    const t = module14.toJS(e._originData);
                    const a = module26(t, "spec.ingress[0].ports") || module26(t, "spec.egress[0].ports") || [];
                    const r = module26(t, "spec.ingress[0].to") || module26(t, "spec.egress[0].to") || module26(t, "spec.ingress[0].from") || module26(t, "spec.egress[0].from") || [];
                    const a_length = a.length;
                    return {
                        ...e,
                        direction: module26(t, "spec.ingress[0]") ? "ingress" : "egress",
                        portsNumber: a_length,
                        ipBlockNumber: r.length
                    };
                });
                return <><div className={module1445.rulemenu}><div>{t("EXTERNAL_ALLOWLIST_TIP")}</div>{canEdit && <module186.Button type="control" onClick={this.addIpBlock}>{t("ADD_ALLOWLIST_ENTRY")}</module186.Button>}</div><ListPage {...this.props} getData={this.fetchOutside} noWatch><Module797 {...tableProps} rowKey="name" data={data} hideSearch itemActions={this.itemActions} tableActions={this.tableActions} columns={this.getColumns()}/></ListPage></>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT"),
                        action: "edit",
                        onClick: function(t) {
                            _this.editIpBlock(t.name, t);
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(detail) {
                            return _this.trigger("resource.delete", {
                                detail,
                                type: "ALLOWLIST_ENTRY",
                                store: _this.outsideStore,
                                success: _this.fetchOutside
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
                    onFetch: this.fetchOutside
                };
            }
        }
    ]);
    return r;
})(Component)) || c) || c) || c) || c;
export default C;
