"use strict";
((module)=>{
    const module20 = require("./module-20.js").default;
    const module158 = require("./module-158.js").default;
    require("./module-12.js");
    require("./module-135.js");
    require("./module-5.js");
    require("./module-187.js");
    require("./module-11.js");
    require("./module-6.js");
    require("./module-84.js");
    require("./module-86.js");
    require("./module-18.js");
    require("./module-16.js");
    require("./module-9.js");
    require("./module-13.js");
    require("./module-10.js");
    require("./module-4.js");
    require("./module-23.js");
    require("./module-24.js");
    require("./module-17.js");
    require("./module-85.js");
    require("./module-62.js");
    require("./module-188.js");
    require("./module-7.js");
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;
    exports.ClusterAlertingPolicies = undefined;
    require("./module-12.js");
    require("./module-135.js");
    require("./module-45.js");
    require("./module-5.js");
    require("./module-187.js");
    require("./module-11.js");
    require("./module-6.js");
    require("./module-84.js");
    require("./module-86.js");
    require("./module-18.js");
    require("./module-28.js");
    require("./module-42.js");
    require("./module-16.js");
    require("./module-34.js");
    require("./module-15.js");
    require("./module-9.js");
    require("./module-13.js");
    require("./module-10.js");
    require("./module-4.js");
    require("./module-22.js");
    require("./module-23.js");
    require("./module-57.js");
    require("./module-24.js");
    require("./module-17.js");
    require("./module-85.js");
    require("./module-62.js");
    require("./module-188.js");
    require("./module-7.js");
    const u = module20(require("./module-61.js").default);
    const o = module20(require("./module-315.js"));
    const i = module20(require("./module-41.js"));
    const c = module20(require("./module-31.js").default);
    const s = module20(require("./module-58.js").default);
    require("./module-41.js");
    let f;
    let d;
    const p = module20(require("./module-44.js").default);
    const m = module20(require("./module-36.js").default);
    const h = module20(require("./module-37.js").default);
    const v = module20(require("./module-55.js").default);
    const g = module20(require("./module-56.js").default);
    const y = module20(require("./module-51.js"));
    const E = module20(require("./module-789.js"));
    const b = module20(require("./module-796.js"));
    const _ = module20(require("./module-793.js"));
    const O = module158(require("./module-794.js"));
    const S = module20(require("./module-553.js"));
    const C = module20(require("./module-797.js"));
    const module832 = require("./module-832.js");
    const k = module20(require("./module-26.js").default);
    const module52 = require("./module-52.js");
    const module879 = require("./module-879.js");
    const R = module20(require("./module-3.js").default);
    const module14 = require("./module-14.js");
    const w = module20(require("./module-1015.js"));
    const M = module20(require("./module-1786.js"));
    const P = module20(require("./module-3662.js").default);
    function A(e, t) {
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
    function j(e) {
        for(let t = 1; t < arguments.length; t++){
            var a = arguments[t] ?? {};
            if (t % 2) {
                A(Object(a), true).forEach((t)=>{
                    c.default(e, t, a[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(a));
            } else {
                A(Object(a)).forEach((t)=>{
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                });
            }
        }
        return e;
    }
    function L(e) {
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
            const r = y.default(e);
            if (t) {
                const n = y.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return g.default(this, a);
        };
    }
    const x = ((a)=>{
        v.default(n, a);
        var r = L(n);
        function n(...l_1) {
            let e;
            m.default(this, n);
            e = r.call(this, ...l_1);
            e.state = {
                type: location.search.indexOf("type=builtin") > 0 ? "builtin" : "custom"
            };
            e.fetchCount = function() {
                const params = e.props.match.params;
                const t_cluster = params.cluster;
                if (!params.namespace) {
                    e.props.store.fetchCount({
                        cluster: t_cluster
                    });
                }
            };
            e.handleTabChange = function(type) {
                e.setState({
                    type
                }, function() {
                    e.props.store.list.reset();
                    e.getData();
                });
            };
            e.getData = p.default(i.default.mark(function* t() {
                let a;
                let r;
                let n;
                let l;
                const u = arguments;
                a = u.length > 0 && u[0] !== undefined ? u[0] : {};
                r = a.silent;
                n = s.default(a, [
                    "silent"
                ]);
                l = e.props.store;
                if (r) {
                    l.list.silent = true;
                }
                yield l.fetchList(j(j(j({}, e.props.match.params), n), {}, {
                    limit: n.limit || l.list.limit || 10,
                    page: n.page || l.list.page || 1,
                    type: e.state.type
                }));
                l.list.silent = false;
            }));
            e.getColumns = function() {
                const getFilteredValue = e.props.getFilteredValue;
                return [
                    {
                        title: t("NAME"),
                        dataIndex: "name",
                        search: true,
                        render: function(t, a) {
                            return S.default.createElement(E.default, {
                                avatar: "/assets/bell_gear_duotone.svg",
                                title: module52.getDisplayName(a),
                                desc: a.description,
                                className: P.default["table-icon"],
                                to: e.state.type === "builtin" ? `${e.props.match.url}/builtin/${a.name}` : `${e.props.match.url}/${t}`
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
                            return S.default.createElement(b.default, {
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
                            return S.default.createElement(M.default, {
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
                            return S.default.createElement("span", null, num !== "-" ? t("TIME_S", {
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
                            const a = k.default(t._originDataWithStatus, "status.lastEvaluation");
                            return S.default.createElement("span", null, a ? module52.getLocalTime(a).format("YYYY-MM-DD HH:mm:ss") : "-");
                        }
                    }
                ];
            };
            e.showCreate = function() {
                const e_props = e.props;
                const { match, routing, module } = e_props;
                return e.props.trigger("alerting.policy.create", {
                    module,
                    cluster: match.params.cluster,
                    namespace: match.params.namespace,
                    title: t("CREATE_ALERTING_POLICY"),
                    success: function() {
                        routing.query();
                        e.fetchCount();
                    }
                });
            };
            return e;
        }
        h.default(n, [
            {
                key: "componentDidMount",
                value: function() {
                    this.fetchCount();
                    localStorage.removeItem("alert-policy-detail-referrer");
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
                    const props = this.props;
                    const { bannerProps, tableProps } = props;
                    let showCreate = this.showCreate;
                    const tableActions = this.tableActions;
                    if (this.state.type === "builtin") {
                        tableActions.selectActions = tableActions.selectActions.filter((e)=>e.action !== "delete").concat(this.resetPolicy);
                        showCreate = null;
                    }
                    return S.default.createElement(O.ListPage, o.default({}, this.props, {
                        getData: this.getData,
                        noWatch: true
                    }), S.default.createElement(_.default, o.default({}, bannerProps, {
                        icon: function() {
                            return S.default.createElement("img", {
                                src: "/assets/bell_gear_duotone.svg"
                            });
                        },
                        tips: this.tips,
                        tabs: this.tabs,
                        className: R.default(P.default.tab_button, bannerProps.className)
                    })), S.default.createElement(C.default, o.default({}, tableProps, {
                        rowKey: "name",
                        itemActions: this.itemActions,
                        columns: this.getColumns(),
                        tableActions,
                        onCreate: showCreate
                    })));
                }
            },
            {
                key: "tabs",
                get: function() {
                    const namespace = this.props.match.params.namespace;
                    const n = globals.app.hasKSModule("whizard");
                    const l = window.parent.globals.ksConfig?.multicluster?.clusterRole !== "none";
                    if (namespace) {
                        return {};
                    }
                    const u = {
                        value: this.state.type,
                        onChange: this.handleTabChange,
                        options: [
                            {
                                value: "custom",
                                label: t("CUSTOM_POLICIES"),
                                count: this.props.store.ruleCount
                            }
                        ]
                    };
                    const o = module52.checkComponentAuthorized({
                        componentName: "whizard",
                        componentConstraints: k.default(globals, "licenseInfo.componentConstraints", [])
                    });
                    if (l && n) {
                        u.options.push(j({
                            value: "builtin",
                            label: t("BUILT_IN_POLICIES"),
                            disabled: true
                        }, o && {
                            tooltip: {
                                content: t("BUILT_IN_POLICIES_TOOLTIP"),
                                placement: "left"
                            }
                        }));
                    } else {
                        u.options.push({
                            value: "builtin",
                            label: t("BUILT_IN_POLICIES"),
                            count: this.props.store.builtinRuleCount
                        });
                    }
                    return u;
                }
            },
            {
                key: "tips",
                get: function() {
                    return [
                        {
                            title: t("REQUESTS_FOR_PUSH_AN_ALARM_Q"),
                            description: t("REQUESTS_FOR_PUSH_AN_ALARM_A")
                        }
                    ];
                }
            },
            {
                key: "itemActions",
                get: function() {
                    const _this = this;
                    const props = this.props;
                    const { trigger, routing, match, name } = props;
                    const type = this.state.type;
                    const c = [
                        {
                            key: "edit",
                            icon: "pen",
                            text: t("EDIT_INFORMATION"),
                            action: "edit",
                            onClick: function(a) {
                                trigger("alerting.baseinfo.edit", {
                                    type,
                                    detail: a,
                                    module,
                                    cluster: match.params.cluster,
                                    namespace: match.params.namespace,
                                    title: t("EDIT_ALERTING_POLICY"),
                                    success: routing.query
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
                                    type,
                                    detail: e,
                                    cluster: match.params.cluster,
                                    namespace: match.params.namespace,
                                    title: t("EDIT_ALERTING_POLICY"),
                                    success: routing.query
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
                                    type,
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
                                trigger(enabled ? "alerting.rule.update" : "enable.alerting.rule", {
                                    type,
                                    detail: e,
                                    cluster: match.params.cluster,
                                    namespace: match.params.namespace,
                                    resourceName: name,
                                    success: routing.query,
                                    title: enabled ? t("DISABLE_ALERTING_POLICY") : t("ENABLE_ALERTING_POLICY"),
                                    enabled
                                });
                            }
                        }
                    ];
                    if (type === "builtin") {
                        c.push(this.resetPolicy);
                    } else {
                        c.push({
                            key: "delete",
                            icon: "trash",
                            text: t("DELETE"),
                            action: "delete",
                            onClick: function(e) {
                                return trigger("alerting.rule.delete", {
                                    type,
                                    name,
                                    cluster: match.params.cluster,
                                    namespace: match.params.namespace,
                                    detail: e,
                                    success: function() {
                                        routing.query();
                                        _this.fetchCount();
                                    }
                                });
                            }
                        });
                    }
                    return c;
                }
            },
            {
                key: "tableActions",
                get: function() {
                    const props = this.props;
                    const { tableProps, trigger, name, store, match, routing } = props;
                    const type = this.state.type;
                    const s = module14.toJS(store.list.data);
                    const f = module14.toJS(store.list.selectedRowKeys);
                    const d = s.filter((e)=>f.includes(e.name)).every((e)=>!JSON.parse(e.enabled));
                    const p = s.filter((e)=>f.includes(e.name)).every((e)=>JSON.parse(e.enabled));
                    return j(j({}, tableProps.tableActions), {}, {
                        selectActions: [].concat(u.default(tableProps.tableActions.selectActions), [
                            {
                                key: "enable",
                                text: t("ENABLE"),
                                action: "edit",
                                disabled: p,
                                onClick: function() {
                                    trigger("enable.alerting.rule", {
                                        type,
                                        resourceName: name,
                                        cluster: match.params.cluster,
                                        namespace: match.params.namespace,
                                        title: t("ENABLE_ALERTING_POLICY"),
                                        enabled: false,
                                        success: routing.query,
                                        batchMode: true
                                    });
                                }
                            },
                            {
                                key: "disable",
                                text: t("DISABLE"),
                                action: "edit",
                                disabled: d,
                                onClick: function() {
                                    trigger("alerting.rule.update", {
                                        type,
                                        resourceName: name,
                                        cluster: match.params.cluster,
                                        namespace: match.params.namespace,
                                        enabled: true,
                                        success: routing.query,
                                        batchMode: true
                                    });
                                }
                            }
                        ])
                    });
                }
            },
            {
                key: "resetPolicy",
                get: function() {
                    const props = this.props;
                    const { match, trigger, routing } = props;
                    const type = this.state.type;
                    return {
                        key: "reset",
                        icon: "restart",
                        text: t("RESET"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("alerting.rule.reset", {
                                type,
                                cluster: match.params.cluster,
                                detail: e,
                                success: routing.query
                            });
                        }
                    };
                }
            }
        ]);
        return n;
    })(S.default.Component);
    const U = O.default({
        store: new w.default,
        module: "rules",
        authKey: "rulegroups",
        name: "ALERTING_POLICY"
    })(d = ((e)=>{
        v.default(a, e);
        var t = L(a);
        function a() {
            m.default(this, a);
            return t.apply(this, arguments);
        }
        return a;
    })(x)) || d;
    exports.default = U;
    const z = O.default({
        store: new w.default,
        module: "rules",
        authKey: "clusterrulegroups",
        name: "ALERTING_POLICY"
    })(f = ((e)=>{
        v.default(a, e);
        var t = L(a);
        function a() {
            m.default(this, a);
            return t.apply(this, arguments);
        }
        return a;
    })(x)) || f;
    exports.ClusterAlertingPolicies = z;
})(require("./module-139.js").default(module));
