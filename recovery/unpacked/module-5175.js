import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
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
import module3 from "./module-3.js";
import module451 from "./module-451.js";
import module26 from "./module-26.js";
import { Link } from "./module-433.js";
import Module797 from "./module-797.js";
import Module793 from "./module-793.js";
import Module796 from "./module-796.js";
import Module791 from "./module-791.js";
import module794, { ListPage } from "./module-794.js";
import module1152 from "./module-1152.js";
import { MODULE_KIND_MAP } from "./module-72.js";
import { getAlertingResource } from "./module-879.js";
import { checkComponentAuthorized, getLocalTime } from "./module-52.js";
import { SEVERITY_LEVEL } from "./module-832.js";
import module1998 from "./module-1998.js";
import module5176 from "./module-5176.js";
let i;
const I = module794({
    store: new module1998,
    module: "alerts",
    name: "ALERTING_MESSAGE"
})(i = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(n);
    function n(...o_1) {
        let e;
        module36(this, n);
        e = a.call(this, ...o_1);
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
                    render: function(e) {
                        const a = module1152.find((t)=>t.value === e);
                        if (a) {
                            return <span style={{
                                backgroundColor: a.bgColor,
                                color: a.color,
                                fontWeight: 600,
                                padding: "0px 4px"
                            }}>{t(a.label)}</span>;
                        }
                        return "-";
                    }
                },
                {
                    title: t("ALERTING_POLICY"),
                    dataIndex: "ruleName",
                    isHideable: true,
                    width: "12%",
                    render: function(t, a) {
                        const n = module26(a, "labels.rule_group");
                        return <Link to={e.state.type === "builtin" ? `${e.getPrefix()}/alert-rules/builtin/${n}` : `${e.getPrefix()}/alert-rules/${n}`}>{n}</Link>;
                    }
                },
                {
                    title: t("MONITORING_TARGET"),
                    dataIndex: "labels",
                    isHideable: true,
                    width: "16%",
                    render: function(a) {
                        const n = getAlertingResource(a);
                        const { module, name, namespace } = n;
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
    module37(n, [
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
                return `/v2/edgewize${workspace ? `/${workspace}` : ""}/clusters/${cluster}${namespace ? `/projects/${namespace}` : ""}`;
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
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps} tips={this.tips} tabs={this.tabs} icon="loudspeaker" title={t("ALERTING_MESSAGE_PL")} description={t("ALERT_MESSAGE_DESC")} className={module3(module5176.tab_button, bannerProps.className)}/><Module797 {...tableProps} {...this.getTableProps()} rowKey="id" itemActions={[]} columns={this.getColumns()}/></ListPage>;
            }
        },
        {
            key: "tabs",
            get: function() {
                const namespace = this.props.match.params.namespace;
                globals.app.hasKSModule("whizard");
                module26(globals, "ksConfig.multicluster", false);
                if (namespace) {
                    return {};
                }
                const a = {
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
                checkComponentAuthorized({
                    componentName: "whizard",
                    componentConstraints: module26(globals, "licenseInfo.componentConstraints", [])
                });
                return a;
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
    return n;
})(Component)) || i;
export default I;
