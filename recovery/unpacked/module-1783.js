import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-86.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-188.js";
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
import module451 from "./module-451.js";
import module26 from "./module-26.js";
import { Link } from "./module-433.js";
import Module791 from "./module-791.js";
import Module796 from "./module-796.js";
import Module881 from "./module-881.js";
import Module793 from "./module-793.js";
import module794, { ListPage } from "./module-794.js";
import { checkComponentAuthorized, getLocalTime } from "./module-52.js";
import Module797 from "./module-797.js";
import { MODULE_KIND_MAP } from "./module-72.js";
import { getAlertingResource } from "./module-879.js";
import { SEVERITY_LEVEL } from "./module-832.js";
import module3 from "./module-3.js";
import module1127 from "./module-1127.js";
import module3660 from "./module-3660.js";
let u;
const P = module794({
    store: new module1127,
    module: "alerts",
    name: "ALERTING_MESSAGE"
})(u = ((Component_1)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.state = {
            type: location.search.indexOf("type=builtin") > 0 ? "builtin" : "custom"
        };
        e.handleTabChange = function(type) {
            e.setState({
                type
            }, function() {
                e.props.store.list.reset();
                e.getData();
            });
        };
        e.getData = function(t) {
            e.props.store.fetchList({
                ...e.props.match.params,
                ...t,
                sortBy: "activeAt",
                type: e.state.type
            });
        };
        e.getResourceType = function(e) {
            const a = module451(e);
            return t("ALERT_TYPE", {
                type: t(a)
            });
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { getFilteredValue, getSortOrder } = e_props;
            return [
                {
                    title: t("MESSAGE"),
                    dataIndex: "name",
                    render: function(e, t) {
                        return <Module791 icon="loudspeaker" title={module26(t, "annotations.summary")} description={module26(t, "annotations.message") || module26(t, "annotations.description", "-")}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "state",
                    filters: e.getStatus(),
                    filteredValue: getFilteredValue("state"),
                    isHideable: true,
                    search: true,
                    width: "12%",
                    render: function(e) {
                        return <Module796 type={e} name={t(`ALERT_RULE_${e.toUpperCase()}`, {
                            defaultValue: e
                        })}/>;
                    }
                },
                {
                    title: t("SEVERITY"),
                    dataIndex: "labels.severity",
                    filters: e.getAlertingTypes(),
                    filteredValue: getFilteredValue("labels.severity"),
                    isHideable: true,
                    search: true,
                    width: "12%",
                    render: function(data) {
                        return <Module881 data={data}/>;
                    }
                },
                {
                    title: t("ALERTING_RULE_NAME"),
                    dataIndex: "labels.alertname",
                    filteredValue: getFilteredValue("labels.alertname"),
                    isHideable: true,
                    width: "12%",
                    search: true
                },
                {
                    title: t("ALERTING_POLICY"),
                    dataIndex: "ruleName",
                    isHideable: true,
                    width: "12%",
                    render: function(t, a) {
                        const r = module26(a, "labels.rule_group");
                        return <Link to={e.state.type === "builtin" ? `${e.getPrefix()}/alert-rules/builtin/${r}` : `${e.getPrefix()}/alert-rules/${r}`}>{r}</Link>;
                    }
                },
                {
                    title: t("MONITORING_TARGET"),
                    dataIndex: "labels",
                    isHideable: true,
                    width: "16%",
                    render: function(a) {
                        if (a.rule_type !== "template") {
                            return "-";
                        }
                        const r = getAlertingResource(a);
                        const { module, name, namespace } = r;
                        if (module) {
                            if (module === "hpas") {
                                return <span>{t(MODULE_KIND_MAP[module])}: {name}</span>;
                            }
                            return <Link to={`${e.getPrefix({
                                namespace
                            })}/${module}/${name}`}>{t(MODULE_KIND_MAP[module])}: {name}</Link>;
                        }
                        return "-";
                    }
                },
                {
                    title: t("TRIGGER_TIME"),
                    dataIndex: "activeAt",
                    isHideable: true,
                    width: 200,
                    sorter: true,
                    sortOrder: getSortOrder("activeAt"),
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        return e;
    }
    module37(r, [
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
            }
        },
        {
            key: "getPrefix",
            value: function({ cluster, namespace } = {}) {
                const params = this.props.match.params;
                const { cluster: cluster_1, namespace: namespace_1, workspace } = params;
                cluster = cluster || cluster_1;
                namespace = namespace || namespace_1;
                return `${workspace ? `/${workspace}` : ""}/clusters/${cluster}${namespace ? `/projects/${namespace}` : ""}`;
            }
        },
        {
            key: "getTableProps",
            value: function() {
                return {
                    tableActions: {
                        ...this.props.tableProps.tableActions,
                        selectActions: []
                    },
                    emptyProps: {
                        desc: t("ALERTING_MESSAGE_EMPTY_DESC")
                    }
                };
            }
        },
        {
            key: "getAlertingTypes",
            value: function() {
                return SEVERITY_LEVEL.map((e)=>({
                        text: t(e.label),
                        value: e.value
                    }));
            }
        },
        {
            key: "getStatus",
            value: function() {
                return [
                    "pending",
                    "firing"
                ].map((e)=>({
                        text: t(`ALERT_RULE_${e.toUpperCase()}`),
                        value: e
                    }));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps} tips={this.tips} tabs={this.tabs} icon="loudspeaker" title={t("ALERTING_MESSAGE_PL")} description={t("ALERT_MESSAGE_DESC")} className={module3(module3660.tab_button, bannerProps.className)}/><Module797 {...tableProps} {...this.getTableProps()} rowKey="id" itemActions={[]} columns={this.getColumns()} onCreate={this.showCreate} showKeywords/></ListPage>;
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
                            label: t("ALERTS_FROM_CUSTOM_POLICIES"),
                            count: this.props.store.ruleCount
                        }
                    ]
                };
                const o = checkComponentAuthorized({
                    componentName: "whizard",
                    componentConstraints: module26(globals, "licenseInfo.componentConstraints", [])
                });
                if (l && n) {
                    u.options.push({
                        value: "builtin",
                        label: t("ALERTS_FROM_BUILT_IN_POLICIES"),
                        disabled: true,
                        ...o && {
                            tooltip: {
                                content: t("BUILT_IN_POLICIES_TOOLTIP"),
                                placement: "left"
                            }
                        }
                    });
                } else {
                    u.options.push({
                        value: "builtin",
                        label: t("ALERTS_FROM_BUILT_IN_POLICIES"),
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
                        title: t("REQUESTS_FOR_TRIGGER_AN_ALARM_Q"),
                        description: t("REQUESTS_FOR_TRIGGER_AN_ALARM_A")
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || u;
export default P;
