"use strict";
((module)=>{
    const module20 = require("utils/babel-helpers/interopRequireDefault").default;
    const module158 = require("unpacked/module-158.js").default;
    require("unpacked/module-12.js");
    require("unpacked/module-135.js");
    require("unpacked/module-5.js");
    require("unpacked/module-187.js");
    require("unpacked/module-11.js");
    require("unpacked/module-6.js");
    require("unpacked/module-84.js");
    require("unpacked/module-86.js");
    require("unpacked/module-18.js");
    require("unpacked/module-16.js");
    require("unpacked/module-9.js");
    require("unpacked/module-13.js");
    require("unpacked/module-10.js");
    require("unpacked/module-4.js");
    require("unpacked/module-23.js");
    require("unpacked/module-24.js");
    require("unpacked/module-17.js");
    require("unpacked/module-85.js");
    require("unpacked/module-62.js");
    require("unpacked/module-7.js");
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;
    require("unpacked/module-12.js");
    require("unpacked/module-135.js");
    require("unpacked/module-45.js");
    require("unpacked/module-5.js");
    require("unpacked/module-187.js");
    require("unpacked/module-11.js");
    require("unpacked/module-6.js");
    require("unpacked/module-84.js");
    require("unpacked/module-86.js");
    require("unpacked/module-18.js");
    require("unpacked/module-28.js");
    require("unpacked/module-42.js");
    require("unpacked/module-16.js");
    require("unpacked/module-34.js");
    require("unpacked/module-15.js");
    require("unpacked/module-9.js");
    require("unpacked/module-13.js");
    require("unpacked/module-10.js");
    require("unpacked/module-4.js");
    require("unpacked/module-22.js");
    require("unpacked/module-23.js");
    require("unpacked/module-57.js");
    require("unpacked/module-24.js");
    require("unpacked/module-17.js");
    require("unpacked/module-85.js");
    require("unpacked/module-62.js");
    require("unpacked/module-7.js");
    const c = module20(require("unpacked/module-61.js").default);
    const s = module20(require("unpacked/module-315.js"));
    const l = module20(require("unpacked/module-41.js"));
    const i = module20(require("unpacked/module-31.js").default);
    const u = module20(require("unpacked/module-58.js").default);
    require("unpacked/module-41.js");
    let d;
    const f = module20(require("utils/babel-helpers/asyncToGenerator").default);
    const p = module20(require("unpacked/module-36.js").default);
    const m = module20(require("unpacked/module-37.js").default);
    const h = module20(require("unpacked/module-55.js").default);
    const v = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
    const g = module20(require("unpacked/module-51.js"));
    const _ = module20(require("unpacked/module-553.js"));
    const y = module20(require("unpacked/module-26.js").default);
    const module14 = require("unpacked/module-14.js");
    const b = module20(require("components/Base/Avatar"));
    const S = module20(require("components/Base/Status"));
    const O = module158(require("components/HOCs/withList"));
    const R = module20(require("components/Tables/List"));
    const module52 = require("utils/index");
    const module879 = require("utils/alerting");
    const module832 = require("configs/alerting/metrics/rule.config");
    const D = module20(require("unpacked/module-1714.js"));
    const C = module20(require("unpacked/module-1786.js"));
    const P = module20(require("unpacked/module-4879.js").default);
    function N(e, t) {
        const a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            let r = Object.getOwnPropertySymbols(e);
            if (t) {
                r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
            }
            a.push.apply(a, r);
        }
        return a;
    }
    function I(e) {
        for(let t = 1; t < arguments.length; t++){
            var a = arguments[t] ?? {};
            if (t % 2) {
                N(Object(a), true).forEach((t)=>{
                    i.default(e, t, a[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(a));
            } else {
                N(Object(a)).forEach((t)=>{
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                });
            }
        }
        return e;
    }
    const w = O.default({
        store: new D.default,
        module: "rules",
        authKey: "rulegroups",
        name: "ALERTING_POLICY",
        injectStores: [
            "rootStore",
            "detailStore"
        ]
    })(d = ((a)=>{
        h.default(n, a);
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
                let a;
                const r = g.default(e);
                if (t) {
                    const n = g.default(this).constructor;
                    a = Reflect.construct(r, arguments, n);
                } else {
                    a = r.apply(this, arguments);
                }
                return v.default(this, a);
            };
        })(n);
        function n(...o_1) {
            let e;
            p.default(this, n);
            e = r.call(this, ...o_1);
            e.getData = f.default(l.default.mark(function* t() {
                let a;
                let r;
                let n;
                let o;
                const c = arguments;
                a = c.length > 0 && c[0] !== undefined ? c[0] : {};
                r = a.silent;
                n = u.default(a, [
                    "silent"
                ]);
                o = e.props.store;
                if (r) {
                    o.list.silent = true;
                }
                yield o.fetchList(I(I({}, e.props.match.params), n));
                o.list.silent = false;
            }));
            e.getColumns = function() {
                const e_props = e.props;
                const { getFilteredValue, match } = e_props;
                const o = match.url.substring(match.url.indexOf("/applications"), -1);
                return [
                    {
                        title: t("NAME"),
                        dataIndex: "name",
                        search: true,
                        render: function(e, t) {
                            return _.default.createElement(b.default, {
                                avatar: "/assets/bell_gear_duotone.svg",
                                title: module52.getDisplayName(t),
                                desc: t.description,
                                className: P.default["table-icon"],
                                to: `${o}/alert-rules/${e}`
                            });
                        }
                    },
                    {
                        title: t("POLICY_STATUS"),
                        dataIndex: "enable",
                        filters: e.getEnableFilter(),
                        filteredValue: getFilteredValue("enable"),
                        isHideable: true,
                        search: true,
                        width: "16%",
                        render: function(e, a) {
                            return _.default.createElement(S.default, {
                                className: P.default.status_icon,
                                type: a.enabled && JSON.parse(a.enabled) ? "active" : "disabled",
                                name: a.enabled && JSON.parse(a.enabled) ? t("ENABLED") : t("DISABLED")
                            });
                        }
                    },
                    {
                        title: t("RULE_STATUS"),
                        dataIndex: "state",
                        search: true,
                        filters: e.getStatus(),
                        isHideable: true,
                        width: "16%",
                        render: function(e, t) {
                            return _.default.createElement(C.default, {
                                rulesStats: t.rulesStats
                            });
                        }
                    },
                    {
                        title: t("TIME_SPENT"),
                        dataIndex: "evaluationTime",
                        isHideable: true,
                        width: "12%",
                        render: function(num) {
                            return _.default.createElement("span", null, num !== "-" ? t("TIME_S", {
                                num
                            }) : num);
                        }
                    },
                    {
                        title: t("RECENT_DETECT_TIME"),
                        dataIndex: "lastEvaluation",
                        isHideable: true,
                        width: "15.8%",
                        render: function(e, t) {
                            const a = y.default(t._originDataWithStatus, "status.lastEvaluation");
                            return _.default.createElement("span", null, a ? module52.getLocalTime(a).format("YYYY-MM-DD HH:mm:ss") : "-");
                        }
                    }
                ];
            };
            e.showCreate = function() {
                const e_props = e.props;
                const { match, getData, module, detailStore } = e_props;
                return e.props.trigger("alerting.policy.create", {
                    module,
                    cluster: match.params.cluster,
                    namespace: match.params.namespace,
                    title: t("CREATE_ALERTING_POLICY"),
                    app_id: detailStore.detail.app_id,
                    cluster_id: match.params.id,
                    success: getData
                });
            };
            return e;
        }
        m.default(n, [
            {
                key: "componentDidMount",
                value: function() {
                    const params = this.props.match.params;
                    const e_cluster = params.cluster;
                    if (!params.namespace) {
                        this.props.store.fetchCount({
                            cluster: e_cluster
                        });
                    }
                    localStorage.setItem("alert-policy-detail-referrer", this.props.match.url);
                }
            },
            {
                key: "getStatus",
                value: function() {
                    return module879.ALERTING_STATUS.map((e)=>({
                            text: t(`ALERT_RULE_${e.toUpperCase()}`),
                            value: e
                        }));
                }
            },
            {
                key: "getEnableFilter",
                value: function() {
                    return [
                        {
                            text: t("ENABLED"),
                            value: "true"
                        },
                        {
                            text: t("DISABLED"),
                            value: "false"
                        }
                    ];
                }
            },
            {
                key: "getAlertingTypes",
                value: function() {
                    return module832.SEVERITY_LEVEL.map((e)=>({
                            text: t(e.label),
                            value: e.value
                        }));
                }
            },
            {
                key: "render",
                value: function() {
                    const tableProps = this.props.tableProps;
                    return _.default.createElement(O.ListPage, s.default({}, this.props, {
                        getData: this.getData,
                        noWatch: true
                    }), _.default.createElement(R.default, s.default({}, tableProps, {
                        rowKey: "name",
                        itemActions: this.itemActions,
                        columns: this.getColumns(),
                        tableActions: this.tableActions
                    })));
                }
            },
            {
                key: "itemActions",
                get: function() {
                    const _this = this;
                    const props = this.props;
                    const { trigger, routing, match, name } = props;
                    return [
                        {
                            key: "edit",
                            icon: "pen",
                            text: t("EDIT_INFORMATION"),
                            action: "edit",
                            onClick: function(r) {
                                trigger("alerting.baseinfo.edit", {
                                    detail: r,
                                    module,
                                    cluster: match.params.cluster,
                                    namespace: match.params.namespace,
                                    title: t("EDIT_ALERTING_POLICY"),
                                    success: _this.getData
                                });
                            }
                        },
                        {
                            key: "editYaml",
                            icon: "pen",
                            text: t("EDIT_YAML"),
                            action: "edit",
                            onClick: function(e) {
                                return trigger("alerting.yaml.edit", {
                                    detail: e,
                                    cluster: match.params.cluster,
                                    namespace: match.params.namespace,
                                    title: t("EDIT_ALERTING_POLICY"),
                                    success: _this.getData
                                });
                            }
                        },
                        {
                            key: "editRule",
                            icon: "wrench",
                            text: t("EDIT_ALERT_RULES"),
                            action: "edit",
                            onClick: function(e) {
                                trigger("alerting.rule.edit", {
                                    detail: e,
                                    cluster: match.params.cluster,
                                    namespace: match.params.namespace,
                                    success: routing.query
                                });
                            }
                        },
                        {
                            key: "disablePolicy",
                            icon: function(e) {
                                if (JSON.parse(e.enabled)) {
                                    return "stop";
                                }
                                return "start";
                            },
                            text: function(e) {
                                if (JSON.parse(e.enabled)) {
                                    return t("DISABLE");
                                }
                                return t("ENABLE");
                            },
                            action: "edit",
                            onClick: function(e) {
                                const enabled = JSON.parse(e.enabled);
                                trigger("alerting.rule.update", {
                                    detail: e,
                                    cluster: match.params.cluster,
                                    namespace: match.params.namespace,
                                    resourceName: name,
                                    success: routing.query,
                                    title: enabled ? t("DISABLE_ALERTING_POLICY") : t("ENABLE_ALERTING_POLICY"),
                                    enabled
                                });
                            }
                        },
                        {
                            key: "delete",
                            icon: "trash",
                            text: t("DELETE"),
                            action: "delete",
                            onClick: function(e) {
                                return trigger("alerting.rule.delete", {
                                    name,
                                    cluster: match.params.cluster,
                                    namespace: match.params.namespace,
                                    detail: e,
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
                    const props = this.props;
                    const { tableProps, getData, trigger, name, store, match, detailStore } = props;
                    const u = module14.toJS(store.list.data);
                    const d = module14.toJS(store.list.selectedRowKeys);
                    const f = u.filter((e)=>d.includes(e.name)).every((e)=>!JSON.parse(e.enabled));
                    const p = u.filter((e)=>d.includes(e.name)).every((e)=>JSON.parse(e.enabled));
                    const actions = [
                        {
                            key: "deploy",
                            type: "control",
                            text: t("CREATE"),
                            action: "create",
                            forbidden: !detailStore.detail.isRunning,
                            onClick: this.showCreate
                        }
                    ];
                    if (!detailStore.detail.isRunning) {
                        actions[0].tooltip = {
                            message: t("ALERTING_POLICY_CREATION_NOT_ALLOWED"),
                            placement: y.default(store, "list.data.length") ? "bottomRight" : "bottom"
                        };
                    }
                    return I(I({}, tableProps.tableActions), {}, {
                        actions,
                        selectActions: [].concat(c.default(tableProps.tableActions.selectActions), [
                            {
                                key: "enable",
                                text: t("ENABLE"),
                                action: "edit",
                                disabled: p,
                                onClick: function() {
                                    trigger("alerting.rule.update", {
                                        resourceName: name,
                                        cluster: match.params.cluster,
                                        namespace: match.params.namespace,
                                        title: t("ENABLE_ALERTING_POLICY"),
                                        enabled: false,
                                        success: getData,
                                        batchMode: true
                                    });
                                }
                            },
                            {
                                key: "disable",
                                text: t("DISABLE"),
                                action: "edit",
                                disabled: f,
                                onClick: function() {
                                    trigger("alerting.rule.update", {
                                        resourceName: name,
                                        cluster: match.params.cluster,
                                        namespace: match.params.namespace,
                                        title: t("DISABLE_ALERTING_POLICY"),
                                        enabled: true,
                                        success: getData,
                                        batchMode: true
                                    });
                                }
                            }
                        ])
                    });
                }
            }
        ]);
        return n;
    })(_.default.Component)) || d;
    exports.default = w;
})(require("unpacked/module-139.js").default(module));
