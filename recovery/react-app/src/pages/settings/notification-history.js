import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-188.js";
import "unpacked/module-7.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-442.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module96 from "utils/babel-helpers/slicedToArray";
import { Component } from "unpacked/module-553.js";
import module189 from "unpacked/module-189.js";
import module26 from "unpacked/module-26.js";
import module243 from "unpacked/module-243.js";
import module794, { ListPage } from "components/HOCs/withList";
import Module881 from "unpacked/module-881.js";
import Module793 from "unpacked/module-793.js";
import Module797 from "components/Tables/List";
import { getDateStr, getTimeLabel } from "unpacked/module-950.js";
import { getHostClusterName, showNameAndAlias } from "utils/index";
import module5142 from "unpacked/module-5142.js";
import module244 from "unpacked/module-244.js";
import Module5143 from "unpacked/module-5143.js";
let h;
const M = {
    firing: t("ALERT_RULE_FIRING"),
    resolved: t("ALERT_RESOLVED")
};
const w = module794({
    store: new module5142,
    name: "NOTIFICATION_HISTORY",
    module: "notificationhistory"
})(h = ((Component_1)=>{
    module55(n, Component_1);
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
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(n);
    function n(e) {
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.getData = async (t)=>{
            let cluster;
            cluster = a.state.cluster;
            a.props.store.fetchList({
                ...a.props.match.params,
                cluster,
                ...t
            });
        };
        a.getColumns = function() {
            return [
                {
                    width: "9%",
                    title: t("ALERTING_NAME_TCAP"),
                    dataIndex: "alertname",
                    search: true,
                    searchKey: "alertname_fuzzy"
                },
                {
                    width: "9%",
                    title: t("ALERTING_TYPE_TCAP"),
                    dataIndex: "alerttype",
                    isHideable: true,
                    render: function(e) {
                        return t({
                            metric: "METRIC_ALERT",
                            event: "EVENT_ALERT",
                            auditing: "AUDIT_ALERT",
                            logging: "LOGGING_ALERT"
                        }[e]);
                    }
                },
                {
                    width: "9%",
                    title: t("ALERTING_SEVERITY_TCAP"),
                    dataIndex: "severity",
                    isHideable: true,
                    search: true,
                    filters: a.getAlertingTypes(),
                    filteredValue: a.props.getFilteredValue("severity"),
                    render: function(data) {
                        return <Module881 data={data}/>;
                    }
                },
                {
                    width: "20%",
                    title: t("NOTIFICATION_MESSAGE"),
                    dataIndex: "message",
                    search: true,
                    searchKey: "message_fuzzy",
                    isHideable: true
                },
                {
                    width: "8%",
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    search: true,
                    filters: Object.keys(M).map((e)=>({
                            text: t(M[e]),
                            value: e
                        })),
                    filteredValue: a.props.getFilteredValue("status"),
                    render: function(e) {
                        return module26(M, e, t("ALERT_RESOLVED"));
                    }
                },
                {
                    width: "9%",
                    title: t("PROJECT"),
                    dataIndex: "namespace",
                    search: true,
                    searchKey: "namespace_fuzzy",
                    isHideable: true,
                    render: function(e) {
                        return showNameAndAlias(e, "project");
                    }
                },
                {
                    width: "9%",
                    title: t("SERVICE"),
                    dataIndex: "service",
                    isHideable: true
                },
                {
                    width: "9%",
                    title: t("POD"),
                    dataIndex: "pod",
                    isHideable: true
                },
                {
                    width: "9%",
                    title: t("CONTAINER"),
                    dataIndex: "container",
                    isHideable: true
                },
                {
                    width: "9%",
                    title: t("NOTIFICATION_TIME"),
                    dataIndex: "notificationTime",
                    isHideable: true,
                    render: function(e) {
                        return module243(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        a.handleTimeSelectorChange = function({ start, end, lastTime }) {
            let start_time;
            let end_time;
            let timeRange;
            let o;
            let l;
            let i;
            let c;
            if (lastTime) {
                end_time = Math.ceil(Date.now() / 1000);
                start_time = Math.ceil(Date.now() / 1000) - (o = lastTime.match(/(\d+)(\w+)/), ((i = (l = module96(o, 3))[1]) === undefined ? 0 : i) * ({
                    s: 1,
                    m: 60,
                    h: 3600,
                    d: 86400
                })[(c = l[2]) === undefined ? "s" : c]);
                timeRange = t("LAST_TIME", {
                    value: getTimeLabel(lastTime)
                });
            } else {
                end_time = Math.floor(end);
                start_time = Math.floor(start);
                timeRange = `${getDateStr(start_time)} ~ ${getDateStr(end_time)}`;
            }
            a.props.rootStore.routing.query({
                start_time,
                end_time,
                timeRange
            });
        };
        a.handleTimeSelectorDelete = function(e) {
            a.props.rootStore.routing.query({
                ...module189(e, [
                    "start_time",
                    "end_time",
                    "timeRange"
                ])
            }, true);
        };
        a.changeCluster = function(cluster) {
            const routing = a.props.routing;
            a.setState({
                cluster
            });
            routing.query({
                cluster
            });
        };
        const u = getHostClusterName();
        const o = module244.parse(location.search.slice(1));
        a.state = {
            cluster: o.cluster || u,
            clusters: []
        };
        return a;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchClusterList();
            }
        },
        {
            key: "fetchClusterList",
            value: async function() {
                this.props.store.fetchClusterList();
            }
        },
        {
            key: "getAlertingTypes",
            value: function() {
                return this.severityLevel.map((e)=>({
                        text: t(e.label),
                        value: `${e.value}`
                    }));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps, store } = props;
                const cluster = this.state.cluster;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps}/><Module797 {...tableProps} itemActions={[]} rowKey="uid" customFilter=<Module5143 cluster={cluster} store={store} onChange={this.changeCluster}/> columns={this.getColumns()} showTimeSelector onTimeSelectorChange={this.handleTimeSelectorChange} onTimeSelectorDelete={this.handleTimeSelectorDelete}/></ListPage>;
            }
        },
        {
            key: "severityLevel",
            get: function() {
                return [
                    {
                        type: "critical",
                        label: "CRITICAL_ALERT",
                        value: "critical"
                    },
                    {
                        type: "error",
                        label: "ERROR_ALERT",
                        value: "error"
                    },
                    {
                        type: "warning",
                        label: "WARNING_ALERT",
                        value: "warning"
                    },
                    {
                        type: "secondary",
                        label: "INFO_ALERT",
                        value: "info"
                    }
                ];
            }
        }
    ]);
    return n;
})(Component)) || h;
export default w;
