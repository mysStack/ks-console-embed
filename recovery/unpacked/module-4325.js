import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
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
import "./module-44.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import Module796 from "./module-796.js";
import Module791 from "./module-791.js";
import Module881 from "./module-881.js";
import Module793 from "./module-793.js";
import module794, { ListPage } from "./module-794.js";
import Module797 from "./module-797.js";
import { SEVERITY_LEVEL } from "./module-832.js";
import module451 from "./module-451.js";
import module26 from "./module-26.js";
import Module995 from "./module-995.js";
import { Component } from "./module-553.js";
import { Link } from "./module-433.js";
import module1236 from "./module-1236.js";
import module438 from "./module-438.js";
import { getLocalTime } from "./module-52.js";
import { getAlertingResource } from "./module-879.js";
import { MODULE_KIND_MAP } from "./module-72.js";
import module1859 from "./module-1859.js";
let c;
const j = module794({
    store: new module1236,
    module: "alerts",
    name: "ALERTING_MESSAGE"
})(c = ((Component_1)=>{
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.clusterStore = new module438;
        e.state = {
            allClusters: [],
            type: "custom"
        };
        e.getData = function(t) {
            e.props.store.fetchList({
                ...e.props.match.params,
                ...t,
                sortBy: "activeAt",
                type: e.state.type
            });
        };
        e.getAllCluster = async function t() {
            let allClusters;
            allClusters = await e.clusterStore.fetchList({
                limit: -1
            });
            e.setState({
                allClusters
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
            const allClusters = e.state.allClusters;
            const filters = allClusters.map((e)=>({
                    text: e.name,
                    value: e.name
                }));
            if (allClusters.length < 1) {
                return [];
            }
            return [
                {
                    title: t("MESSAGE"),
                    dataIndex: "annotations.message",
                    width: "20%",
                    render: function(e, t) {
                        return <Module791 icon="loudspeaker" title={module26(t, "_originData.annotations.summary")} description={module26(t, "_originData.annotations.message") || module26(t, "_originData.annotations.description", "-")}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "state",
                    filters: e.getStatus(),
                    filteredValue: getFilteredValue("state"),
                    isHideable: true,
                    search: true,
                    width: "9.5%",
                    render: function(defaultValue) {
                        return <Module796 className={module1859.status} type={defaultValue === "pending" ? "warning" : defaultValue === "firing" ? "critical" : defaultValue} name={t(`ALERT_RULE_${defaultValue.toUpperCase()}`, {
                            defaultValue
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
                    width: "9.5%",
                    render: function(e, { severity }) {
                        return <Module881 data={severity}/>;
                    }
                },
                {
                    title: t("ALERTING_RULE_NAME"),
                    dataIndex: "labels.alertname",
                    filteredValue: getFilteredValue("labels.alertname"),
                    isHideable: true,
                    width: "9.5%",
                    search: true,
                    render: function(e, t) {
                        return t.alertname;
                    }
                },
                {
                    title: t("ALERTING_POLICY"),
                    dataIndex: "rule_group",
                    isHideable: true,
                    width: "9.5%",
                    render: function(e) {
                        return <Link to={`/whizard-telemetry/metrics/alerting/custom-rules/${e}/rules`}>{e}</Link>;
                    }
                },
                {
                    title: t("MONITORING_TARGET"),
                    dataIndex: "labels",
                    isHideable: true,
                    width: "16%",
                    render: function(a, r) {
                        if (r.rule_type !== "template") {
                            return "-";
                        }
                        const n = getAlertingResource(r);
                        const { module, name, namespace } = n;
                        if (module) {
                            if (module === "hpas") {
                                return <span>{t(MODULE_KIND_MAP[module])}: {name}</span>;
                            }
                            return <Link to={`${e.getPrefix({
                                cluster: r.cluster,
                                namespace
                            })}/${module}/${name}`} className={module1859.ruleNameLink} title={`${t(MODULE_KIND_MAP[module].toUpperCase())}: ${name}`}>{t(MODULE_KIND_MAP[module].toUpperCase())}: {name}</Link>;
                        }
                        return "-";
                    }
                },
                {
                    title: t("CLUSTER"),
                    dataIndex: "cluster",
                    search: true,
                    filters,
                    filteredValue: getFilteredValue("cluster"),
                    isHideable: true,
                    width: "12%",
                    render: function(cluster) {
                        if (cluster && cluster !== "") {
                            return <Module995 cluster={cluster} allClusters={allClusters}/>;
                        }
                        return "-";
                    }
                },
                {
                    title: t("TRIGGER_TIME"),
                    dataIndex: "activeAt",
                    isHideable: true,
                    width: "14%",
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
                this.getAllCluster();
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
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps} tips={this.tips} icon="loudspeaker" title={t("WHIZARD_MONITORING.CUSTOM_ALERTING_PL")} description={t("ALERT_MESSAGE_DESC")}/><Module797 {...tableProps} {...this.getTableProps()} rowKey="id" itemActions={[]} columns={this.getColumns()} onCreate={this.showCreate} showKeywords/></ListPage>;
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
})(Component)) || c;
export default j;
