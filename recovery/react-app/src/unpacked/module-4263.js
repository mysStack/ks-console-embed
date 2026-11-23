import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-86.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import { getAreaChartOps, getZeroValues } from "utils/monitoring";
import module1074 from "stores/monitoring/gateway";
import module186 from "unpacked/module-186.js";
import { Controller } from "components/Cards/Monitoring/index";
import { SimpleArea } from "components/Charts/index";
import Module4264 from "unpacked/module-4264.js";
let c;
const A = {
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
const P = inject("detailStore")(c = observer(c = ((Component_1)=>{
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
    function r(...u) {
        let e;
        module36(this, r);
        e = a.call(this, ...u);
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
                metrics: Object.values(A),
                job: `${r}-metrics`,
                namespace: e.namespace,
                pod,
                fillZero: true,
                component: "ingress",
                ...timeParams
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
                metrics: Object.values(A),
                job: `${name}-metrics`,
                namespace: e.namespace,
                pod: t,
                component: "ingress",
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
            const a = module26(e.metrics, `${A.ingress_request_volume_by_ingress}.data.result`, []);
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
                    data: module26(e.metrics, `${A.ingress_active_connections}.data.result`, {})
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
                        module26(e.metrics, `${A.ingress_request_duration_50percentage}.data.result[0]`, {}),
                        module26(e.metrics, `${A.ingress_request_duration_95percentage}.data.result[0]`, {}),
                        module26(e.metrics, `${A.ingress_request_duration_99percentage}.data.result[0]`, {}),
                        module26(e.metrics, `${A.ingress_request_duration_average}.data.result[0]`, {})
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
                        module26(e.metrics, `${A.ingress_request_4xx_count}.data.result[0]`, {}),
                        module26(e.metrics, `${A.ingress_request_5xx_count}.data.result[0]`, {})
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
                        module26(e.metrics, `${A.ingress_request_network_received}.data.result[0]`, {}),
                        module26(e.metrics, `${A.ingress_request_network_sent}.data.result[0]`, {})
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
                const c = this.getMonitoringCfgs();
                return <div><Module4264 {...this.props}/><Controller createTime={createTime} onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} title=<module186.Select value={podsName} options={options} onChange={this.handlePodName}/> isEmpty={module63(this.metrics)}>{c.map((e)=>{
                    e.data = module63(e.data) ? [
                        {
                            values: getZeroValues()
                        }
                    ] : e.data;
                    const t = getAreaChartOps(e);
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
                if (this.props.location.pathname.indexOf("federatedprojects") > -1) {
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
            key: "metrics",
            get: function() {
                return this.monitorStore.data;
            }
        }
    ]);
    return r;
})(Component)) || c) || c;
export default P;
