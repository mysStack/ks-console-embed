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
    require("unpacked/module-18.js");
    require("unpacked/module-48.js");
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
    require("unpacked/module-18.js");
    require("unpacked/module-28.js");
    require("unpacked/module-48.js");
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
    const l = module20(require("unpacked/module-61.js").default);
    const o = module20(require("unpacked/module-315.js"));
    const c = module20(require("unpacked/module-41.js"));
    const i = module20(require("unpacked/module-31.js").default);
    const s = module20(require("unpacked/module-58.js").default);
    require("unpacked/module-41.js");
    let d;
    const f = module20(require("utils/babel-helpers/asyncToGenerator").default);
    const p = module20(require("unpacked/module-36.js").default);
    const m = module20(require("unpacked/module-37.js").default);
    const h = module20(require("unpacked/module-55.js").default);
    const v = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
    const y = module20(require("unpacked/module-51.js"));
    const g = module158(require("unpacked/module-553.js"));
    const _ = module20(require("components/Base/Avatar"));
    const E = module20(require("components/Base/Status"));
    const b = module20(require("unpacked/module-793.js"));
    const S = module158(require("components/HOCs/withList"));
    const module186 = require("unpacked/module-186.js");
    const R = module20(require("components/Tables/List"));
    const T = module20(require("unpacked/module-26.js").default);
    const C = module20(require("unpacked/module-247.js").default);
    const module14 = require("unpacked/module-14.js");
    const module52 = require("utils/index");
    const module879 = require("utils/alerting");
    const module832 = require("configs/alerting/metrics/rule.config");
    const D = module20(require("unpacked/module-1416.js"));
    const w = module20(require("stores/cluster"));
    const L = module20(require("unpacked/module-995.js"));
    const I = module20(require("unpacked/module-1857.js"));
    const M = module20(require("unpacked/module-1858.js").default);
    function j(e, t) {
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
    function x(e) {
        for(let t = 1; t < arguments.length; t++){
            var a = arguments[t] ?? {};
            if (t % 2) {
                j(Object(a), true).forEach((t)=>{
                    i.default(e, t, a[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(a));
            } else {
                j(Object(a)).forEach((t)=>{
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                });
            }
        }
        return e;
    }
    const U = S.default({
        store: new D.default,
        module: "rules",
        authKey: "alert-rules",
        name: "ALERTING_POLICY"
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
                const r = y.default(e);
                if (t) {
                    const n = y.default(this).constructor;
                    a = Reflect.construct(r, arguments, n);
                } else {
                    a = r.apply(this, arguments);
                }
                return v.default(this, a);
            };
        })(n);
        function n(...u_1) {
            let e;
            p.default(this, n);
            e = r.call(this, ...u_1);
            e.clusterStore = new w.default;
            e.state = {
                type: "builtin",
                allClusters: []
            };
            e.getData = f.default(c.default.mark(function* t() {
                let a;
                let r;
                let n;
                let u;
                const l = arguments;
                a = l.length > 0 && l[0] !== undefined ? l[0] : {};
                r = a.silent;
                n = s.default(a, [
                    "silent"
                ]);
                u = e.props.store;
                if (r) {
                    u.list.silent = true;
                }
                yield u.fetchList(x(x(x({}, e.props.match.params), n), {}, {
                    builtin: true
                }));
                yield e.props.store.fetchCount();
                u.list.silent = false;
            }));
            e.getAllCluster = f.default(c.default.mark(function* t() {
                let allClusters;
                allClusters = yield e.clusterStore.fetchList({
                    limit: -1
                });
                e.setState({
                    allClusters
                });
            }));
            e.renderRestCluster = function(t) {
                const content = g.default.createElement("div", {
                    className: M.default.tipClusterList
                }, t.map((t, a)=>g.default.createElement(L.default, {
                        key: `${t}-${a}`,
                        cluster: t,
                        allClusters: e.state.allClusters
                    })));
                return g.default.createElement(module186.Tooltip, {
                    content,
                    placement: "top"
                }, g.default.createElement("span", {
                    className: M.default.restText
                }, t.length));
            };
            e.getColumns = function() {
                const getFilteredValue = e.props.getFilteredValue;
                return [
                    {
                        title: t("NAME"),
                        dataIndex: "name",
                        search: true,
                        render: function(t, a) {
                            return g.default.createElement(_.default, {
                                avatar: "/assets/bell_gear_duotone.svg",
                                title: module52.getDisplayName(a),
                                desc: a.description,
                                className: M.default["table-icon"],
                                to: `${e.props.match.url}/${t}`
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
                            return g.default.createElement(E.default, {
                                className: M.default.status_icon,
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
                            return g.default.createElement(I.default, {
                                rulesStats: t.rulesStats
                            });
                        }
                    },
                    {
                        title: t("CLUSTER"),
                        dataIndex: "clusterSelector",
                        isHideable: true,
                        with: "24.6%",
                        render: function(a, r) {
                            const n = T.default(r, "_originData.spec.rules", []);
                            let u = [];
                            n.forEach((e)=>{
                                if (T.default(e, "clusterSelector.inValues", []).length > 0) {
                                    u = u.concat(e.clusterSelector.inValues);
                                }
                            });
                            const l = C.default(u).slice(0, 3);
                            const o = C.default(u).slice(3);
                            if (u.length > 0) {
                                return g.default.createElement("div", {
                                    className: M.default.clusterLine
                                }, l.map((t, a)=>g.default.createElement(L.default, {
                                        key: `${t}-${a}`,
                                        cluster: t,
                                        allClusters: e.state.allClusters
                                    })), o.length > 0 && e.renderRestCluster(o));
                            }
                            return g.default.createElement(module186.Tag, {
                                type: "secondary"
                            }, t("ALL_CLUSTERS"));
                        }
                    },
                    {
                        title: t("RECENT_DETECT_TIME"),
                        dataIndex: "lastEvaluation",
                        isHideable: true,
                        width: "15.8%",
                        render: function(e, t) {
                            const a = T.default(t._originDataWithStatus, "status.lastEvaluation");
                            return g.default.createElement("span", null, a ? module52.getLocalTime(a).format("YYYY-MM-DD HH:mm:ss") : "-");
                        }
                    }
                ];
            };
            return e;
        }
        m.default(n, [
            {
                key: "componentDidMount",
                value: function() {
                    this.getAllCluster();
                }
            },
            {
                key: "getStatus",
                value: function() {
                    return module879.ALERTING_STATUS.map((e)=>({
                            text: e === "disabled" ? t("DISABLED") : t(`ALERT_RULE_${e.toUpperCase()}`),
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
                    return g.default.createElement(S.ListPage, o.default({}, this.props, {
                        getData: this.getData,
                        noWatch: true
                    }), g.default.createElement(b.default, o.default({}, bannerProps, {
                        icon: function() {
                            return g.default.createElement("img", {
                                src: "/assets/bell_gear_duotone.svg"
                            });
                        },
                        tips: this.tips,
                        title: t("BUILT_IN_POLICIES"),
                        description: t("ALERTING_POLICY_DESC")
                    })), g.default.createElement(R.default, o.default({}, tableProps, {
                        enabledActions: this.enabledAction,
                        rowKey: "name",
                        itemActions: this.itemActions,
                        columns: this.getColumns(),
                        tableActions: this.tableActions,
                        onCreate: null
                    })));
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
                key: "enabledAction",
                get: function() {
                    const e = [].concat(l.default(this.props.tableProps.enabledActions), [
                        "view"
                    ]);
                    if (this.state.type === "custom") {
                        return [].concat(l.default(e), [
                            "manage",
                            "create",
                            "edit"
                        ]);
                    }
                    return [].concat(l.default(e), [
                        "edit"
                    ]);
                }
            },
            {
                key: "itemActions",
                get: function() {
                    const props = this.props;
                    const { trigger, routing, match, name } = props;
                    const type = this.state.type;
                    return [
                        {
                            key: "edit",
                            icon: "pen",
                            text: t("EDIT_INFORMATION"),
                            action: "edit",
                            onClick: function(a) {
                                trigger("multi.alerting.baseInfo.edit", {
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
                                return trigger("multi.alerting.yaml.edit", {
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
                                trigger("multi.alerting.rule.edit", {
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
                                trigger(enabled ? "multi.alarm.rule.update" : "multi.enable.alarm.rule", {
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
                        },
                        {
                            key: "reset",
                            icon: "restart",
                            text: t("RESET"),
                            action: "edit",
                            onClick: function(e) {
                                return trigger("multi.alarm.rule.reset", {
                                    type,
                                    cluster: match.params.cluster,
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
                    const { tableProps, trigger, name, store, match, routing } = props;
                    const type = this.state.type;
                    const s = module14.toJS(store.list.data);
                    const d = module14.toJS(store.list.selectedRowKeys);
                    const f = s.filter((e)=>d.includes(e.name)).every((e)=>!JSON.parse(e.enabled));
                    const p = s.filter((e)=>d.includes(e.name)).every((e)=>JSON.parse(e.enabled));
                    return x(x({}, tableProps.tableActions), {}, {
                        selectActions: [].concat(l.default(tableProps.tableActions.selectActions), [
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
                                disabled: f,
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
            }
        ]);
        return n;
    })(g.Component)) || d;
    exports.default = U;
})(require("unpacked/module-139.js").default(module));
