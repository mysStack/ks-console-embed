import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module794, { ListPage } from "./module-794.js";
import module1995 from "./module-1995.js";
import module243 from "./module-243.js";
import { inject, observer } from "./module-239.js";
import Module797 from "./module-797.js";
import module937 from "./module-937.js";
import { trigger } from "./module-792.js";
import { silentPolicyConditions, silentPolicyTypes } from "./module-72.js";
import Module789 from "./module-789.js";
import { getDisplayName } from "./module-52.js";
import { getValue } from "./module-895.js";
import Module1996 from "./module-1996.js";
let o;
const enabledActions = [
    "edit",
    "delete",
    "create"
];
const A = inject("rootStore")(o = module937([
    "volume-off-duotone"
])(o = module794({
    store: new module1995
})(o = observer(o = trigger(o = ((Component_1)=>{
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
        n.showAddModal = function() {
            const routing = n.props.routing;
            n.props.trigger("silent-policy.add", {
                title: t("CREATE_SILENCE_POLICY"),
                module: n.store.module,
                success: routing.query
            });
        };
        n.store = e.store;
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const tableProps = this.props.tableProps;
                return <ListPage {...this.props} noWatch><Module1996 type="silent-policy"/><Module797 {...tableProps} showEmpty={false} enabledActions={enabledActions} itemActions={this.itemActions} rowKey="name" tableActions={this.tableActions} columns={this.columns} onCreate={this.showAddModal} searchType="name"/></ListPage>;
            }
        },
        {
            key: "columns",
            get: function() {
                const prefix = this.props.prefix;
                return [
                    {
                        title: t("NAME"),
                        dataIndex: "name",
                        search: true,
                        sorter: true,
                        render: function(t, a) {
                            return <Module789 to={`${prefix}/${t}`} icon="volume-off-duotone" iconSize={40} desc={a.desc || "-"} title={getDisplayName(a)}/>;
                        }
                    },
                    {
                        title: t("SILENCE_TIME"),
                        dataIndex: "type",
                        render: function(e) {
                            return t(Object.values(silentPolicyTypes).find((t)=>t.value === e)?.name);
                        }
                    },
                    {
                        title: t("SILENCE_CONDITIONS"),
                        dataIndex: "condition",
                        render: function(e) {
                            return t(Object.values(silentPolicyConditions).find((t)=>t.value === e)?.name);
                        }
                    },
                    {
                        width: 150,
                        title: t("CREATION_TIME_TCAP"),
                        sorter: true,
                        dataIndex: "createTime",
                        render: function(e) {
                            return module243(e).format("YYYY-MM-DD HH:mm:ss");
                        }
                    }
                ];
            }
        },
        {
            key: "tableActions",
            get: function() {
                const _this = this;
                return {
                    ...this.props.tableProps.tableActions,
                    selectActions: [
                        {
                            key: "delete",
                            type: "danger",
                            text: t("DELETE"),
                            action: "delete",
                            onClick: function() {
                                return _this.props.trigger("resource.batch.delete", {
                                    type: "SILENCE_POLICY",
                                    rowKey: "name",
                                    success: _this.props.routing.query
                                });
                            }
                        }
                    ]
                };
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const routing = this.props.routing;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        onClick: function(t) {
                            _this.props.trigger("silent-policy.edit", {
                                detail: t,
                                module: _this.store.module,
                                success: routing.query
                            });
                        }
                    },
                    {
                        key: "editYaml",
                        icon: "pen",
                        text: t("EDIT_YAML"),
                        action: "edit",
                        onClick: function(t) {
                            _this.props.trigger("silent-policy.yaml.update", {
                                yaml: getValue(t.__data),
                                detail: {
                                    ...t.__data,
                                    name: t.name
                                },
                                module: _this.store.module,
                                success: routing.query
                            });
                        }
                    },
                    {
                        key: "editCondition",
                        icon: "volume-off-duotone",
                        text: t("EDIT_SILENCE_CONDITIONS"),
                        action: "edit",
                        onClick: function(t) {
                            _this.props.trigger("silent-policy.editCondition", {
                                detail: t,
                                module: _this.store.module,
                                success: routing.query
                            });
                        }
                    },
                    {
                        key: "editTime",
                        icon: "volume-off-duotone",
                        text: t("EDIT_SILENCE_TIME"),
                        action: "edit",
                        onClick: function(t) {
                            _this.props.trigger("silent-policy.editTime", {
                                detail: t,
                                module: _this.store.module,
                                success: routing.query
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(t) {
                            return _this.props.trigger("resource.delete", {
                                type: "SILENCE_POLICY",
                                detail: t,
                                success: routing.query
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || o) || o) || o) || o) || o;
export default A;
