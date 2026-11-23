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
import "./module-316.js";
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
import "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import { getAreaChartOps } from "./module-795.js";
import module1074 from "./module-1074.js";
import module186 from "./module-186.js";
import { Controller } from "./module-824.js";
import { SimpleArea } from "./module-799.js";
import Module4030 from "./module-4030.js";
let i;
const N = {
    ingress_request_count: "ingress_request_count",
    ingress_request_5xx_count: "ingress_request_5xx_count",
    ingress_request_4xx_count: "ingress_request_4xx_count",
    ingress_active_connections: "ingress_active_connections",
    ingress_success_rate: "ingress_success_rate",
    ingress_request_duration_average: "ingress_request_duration_average",
    ingress_request_duration_50percentage: "ingress_request_duration_50percentage",
    ingress_request_duration_95percentage: "ingress_request_duration_95percentage",
    ingress_request_duration_99percentage: "ingress_request_duration_99percentage",
    ingress_request_volume: "ingress_request_volume",
    ingress_request_volume_by_ingress: "ingress_request_volume_by_ingress",
    ingress_request_network_sent: "ingress_request_network_sent",
    ingress_request_network_received: "ingress_request_network_received"
};
const T = inject("detailStore")(i = observer(i = ((Component_1)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.monitorStore = new module1074({
            cluster: e.cluster
        });
        e.state = {
            options: [],
            podsName: ""
        };
        e.fetchData = async (timeParams)=>{
            let r;
            let pod;
            r = e.detail.name;
            pod = await e.getGatewayPods();
            e.monitorStore.fetchMetrics({
                resources: [],
                metrics: Object.values(N),
                job: `${r}-metrics`,
                component: "ingress",
                namespace: e.namespace,
                pod,
                fillZero: true,
                ...timeParams,
                workspace: e.namespace ? undefined : e.workspace
            });
            e.setState({
                timeParams
            });
        };
        e.handlePodName = function(t) {
            const name = e.detail.name;
            const timeParams = e.state.timeParams;
            e.monitorStore.fetchMetrics({
                resources: [],
                metrics: Object.values(N),
                job: `${name}-metrics`,
                component: "ingress",
                namespace: e.namespace,
                pod: t,
                workspace: e.namespace ? undefined : e.workspace,
                ...timeParams
            });
            e.setState({
                podsName: t
            });
        };
        e.getGatewayPods = async function t() {
            let a;
            let podsName;
            let options;
            a = await e.store.getGatewayPods({
                ...e.props.match.params,
                cluster: e.cluster
            });
            options = module63(a) ? [] : a.map((e)=>({
                    label: e.name,
                    value: e.name
                }));
            podsName = module63(options) ? "" : options[0].value;
            e.setState({
                options,
                podsName
            });
            return podsName;
        };
        e.getMonitoringCfgs = function() {
            const a = module26(e.metrics, `${N.ingress_request_volume_by_ingress}.data.result`, []);
            return [
                {
                    title: "REQUEST_COUNT",
                    unit: "",
                    legend: a.map((e)=>module26(e, "metric.ingress", "")),
                    data: a
                },
                {
                    title: "CONNECTION_COUNT",
                    unit: "",
                    legend: [
                        "CONNECTION_COUNT"
                    ],
                    data: module26(e.metrics, `${N.ingress_active_connections}.data.result`, {})
                },
                {
                    title: "REQUEST_LATENCY_MS",
                    legend: [
                        t("P_FIFTY_LATENCY"),
                        t("P_NINETY_FIVE_LATENCY"),
                        t("P_NINETY_NINE_LATENCY"),
                        t("AVERAGE_LATENCY")
                    ],
                    data: [
                        module26(e.metrics, `${N.ingress_request_duration_50percentage}.data.result[0]`, {}),
                        module26(e.metrics, `${N.ingress_request_duration_95percentage}.data.result[0]`, {}),
                        module26(e.metrics, `${N.ingress_request_duration_99percentage}.data.result[0]`, {}),
                        module26(e.metrics, `${N.ingress_request_duration_average}.data.result[0]`, {})
                    ],
                    dot: 4
                },
                {
                    title: "FAILED_REQUEST_COUNT",
                    unit: "",
                    legend: [
                        t("FOUR_XX_REQUEST_COUNT"),
                        t("FIVE_XX_REQUEST_COUNT")
                    ],
                    data: [
                        module26(e.metrics, `${N.ingress_request_4xx_count}.data.result[0]`, {}),
                        module26(e.metrics, `${N.ingress_request_5xx_count}.data.result[0]`, {})
                    ]
                },
                {
                    title: "NETWORK_TRAFFIC",
                    unit: "",
                    unitType: "traffic",
                    legend: [
                        t("INBOUND_TRAFFIC"),
                        t("INBOUND_TRAFFIC")
                    ],
                    data: [
                        module26(e.metrics, `${N.ingress_request_network_received}.data.result[0]`, {}),
                        module26(e.metrics, `${N.ingress_request_network_sent}.data.result[0]`, {})
                    ]
                }
            ];
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const createTime = module26(this.store.detail, "createTime");
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const state = this.state;
                const { podsName, options } = state;
                const i = this.getMonitoringCfgs();
                return <div><Module4030 {...this.props}/><Controller createTime={createTime} onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} title=<module186.Select value={podsName} options={options} onChange={this.handlePodName}/> isEmpty={module63(this.metrics)}>{i.map((e)=>{
                    const t = getAreaChartOps(e);
                    if (module63(t.data)) {
                        return null;
                    }
                    return <SimpleArea key={t.title} width="100%" {...t}/>;
                })}</Controller></div>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "detail",
            get: function() {
                return this.store.gateway.data || {};
            }
        },
        {
            key: "cluster",
            get: function() {
                const cluster = this.props.match.params.cluster;
                const pathname = this.props.location.pathname;
                if (pathname.indexOf("federatedprojects") > -1 || pathname.indexOf("/workspaces/") > -1) {
                    return localStorage.getItem("federated-cluster");
                }
                return cluster;
            }
        },
        {
            key: "namespace",
            get: function() {
                return this.props.match.params.namespace;
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "metrics",
            get: function() {
                return this.monitorStore.data;
            }
        }
    ]);
    return r;
})(Component)) || i) || i;
export default T;
