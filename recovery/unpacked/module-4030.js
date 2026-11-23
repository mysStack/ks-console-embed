import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-86.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-27.js";
import "./module-190.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import { SimpleCircle } from "./module-799.js";
import module3 from "./module-3.js";
import { ReactComponent } from "./module-1840.js";
import module1074 from "./module-1074.js";
import module439 from "./module-439.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module189 from "./module-189.js";
import { startAutoRefresh, stopAutoRefresh } from "./module-795.js";
import Module4031 from "./module-4031.js";
import module4035 from "./module-4035.js";
const R = {
    ingress_request_count: "ingress_request_count",
    ingress_request_5xx_count: "ingress_request_5xx_count",
    ingress_request_4xx_count: "ingress_request_4xx_count",
    ingress_active_connections: "ingress_active_connections",
    ingress_success_rate: "ingress_success_rate",
    ingress_request_duration_average: "ingress_request_duration_average",
    ingress_request_duration_50percentage: "ingress_request_duration_50percentage",
    ingress_request_duration_95percentage: "ingress_request_duration_95percentage",
    ingress_request_duration_99percentage: "ingress_request_duration_99percentage"
};
const I = ((Component_1)=>{
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
    function r(...c_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...c_1);
        e.state = {
            enableAutoRefresh: true,
            autoRefresh: false,
            duration: "10m",
            metrics: {},
            errorType: "ingress_request_4xx_count"
        };
        e.projectStore = new module439;
        e.monitorStore = new module1074({
            cluster: e.cluster
        });
        e.handleChange = function(duration) {
            e.setState({
                duration
            }, function() {
                e.fetchData();
            });
        };
        e.handleRequestError = function(errorType) {
            e.setState({
                errorType
            });
        };
        e.fetchProject = async function t() {
            let a;
            await e.projectStore.fetchList({
                cluster: e.cluster,
                workspace: e.props.match.params.workspace
            });
            a = e.projectStore.list.data.map((e)=>e.name);
            return a;
        };
        e.fetchData = (()=>{
            const t = module44(module41.mark(function t(a) {
                let duration;
                let n;
                let l;
                let o;
                let i;
                let namespace;
                let s;
                let f;
                let d;
                let p;
                let m;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                duration = e.state.duration;
                                e.setState({
                                    isLoading: true
                                });
                                n = e.detail || {};
                                l = n.name;
                                o = e.props.match.params;
                                i = o.cluster;
                                namespace = o.namespace;
                                s = o.workspace;
                                f = {
                                    duration,
                                    cluster: i || e.cluster,
                                    namespace,
                                    workspace: namespace ? undefined : s,
                                    metrics: Object.values(R),
                                    job: `${l}-metrics`,
                                    component: "ingress",
                                    ...a
                                };
                                if (!e.isWorkspaceGateway) {
                                    t.next = 11;
                                    break;
                                }
                                t.next = 8;
                                return e.fetchProject();
                            case 8:
                                d = t.sent;
                                f = module189(f, "namespace");
                                f.namespaced_resources_filter = d.join("|");
                            case 11:
                                t.next = 13;
                                return e.monitorStore.fetchGatewayMetrics(f);
                            case 13:
                                p = t.sent;
                                m = e.handleMetricsData(p);
                                e.setState({
                                    metrics: {
                                        ...m
                                    },
                                    duration,
                                    isLoading: false
                                });
                            case 16:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
        e.handleMetricsData = function(e) {
            if (!module63(e)) {
                const t = {};
                Object.values(R).map((t)=>e[t]).forEach((e)=>{
                    const a = module26(e, "data.result[0].value[1]", 0);
                    const r = typeof a === "string" && a.indexOf(".") > -1 ? Number(a).toFixed(4) : isNaN(Number(a)) ? 0 : a;
                    t[e.metric_name] = r;
                });
                return t;
            }
        };
        e.handleAutoRefresh = function() {
            e.setState({
                autoRefresh: !e.state.autoRefresh
            }, function() {
                if (e.state.autoRefresh) {
                    startAutoRefresh(module88(e));
                } else {
                    stopAutoRefresh(module88(e));
                }
            });
        };
        e.handleRefresh = function() {
            e.fetchData();
        };
        e.renderAutoRefresh = function() {
            const e_state = e.state;
            const { enableAutoRefresh, autoRefresh } = e_state;
            if (enableAutoRefresh) {
                return <module186.Button className={module4035.button} type="control" icon={autoRefresh ? "pause" : "start"} iconType="light" onClick={e.handleAutoRefresh}/>;
            }
            return null;
        };
        e.getMetricsData = function(t, a = 0) {
            return module26(e.state.metrics, `${t}`, a);
        };
        e.renderCustomLegend = function(e = {}) {
            e.className;
            const { payload, activeSeries } = e;
            const n = activeSeries === undefined ? [] : activeSeries;
            const e_showAll = e.showAll;
            const o = e_showAll !== undefined && e_showAll;
            const i = payload || [];
            if (i.length < 2 && !o) {
                return <div className={module4035.legend}/>;
            }
            const onClick = function(t) {
                const e_onClick = e.onClick;
                if (e_onClick) {
                    e_onClick(t, module26(t.target, "dataset.key"));
                }
            };
            return <div className={module4035.legend} onClick={onClick}>{i.map((e)=>{
                const a = !n.includes(e.value);
                const backgroundColor = module26(e, "payload.stroke");
                return <div key={e.dataKey} data-key={e.dataKey} className={module3(module4035.item, module31({}, module4035.inactive, a))}><i style={{
                    backgroundColor
                }}/>{t(e.value)}</div>;
            })}</div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { duration, errorType } = state;
                return <div className={module4035.overview}><div className={module4035.header}><p className={module4035.title}>{t("OVERVIEW")}</p><div className={module4035.operations}><Module4031 duration={duration} onChange={this.handleChange}/>{this.renderAutoRefresh()}<module186.Button className={module4035.button} type="control" icon="refresh" iconType="light" onClick={this.handleRefresh}/></div></div><div className={module4035.body}><div className={module4035.left}><div className={module4035.item}><module186.Icon name="gateway" size={56}/><div><p>{t("TOTAL_REQUESTS")}</p><span>{this.getMetricsData("ingress_request_count")}</span></div></div><div className={module4035.item}><module186.Icon name="error" size={56}/><div><module186.Select width={30} value={errorType} options={[
                    {
                        label: t("FOUR_XX_REQUEST_COUNT"),
                        value: "ingress_request_4xx_count"
                    },
                    {
                        label: t("FIVE_XX_REQUEST_COUNT"),
                        value: "ingress_request_5xx_count"
                    }
                ]} onChange={this.handleRequestError}/><span>{this.getMetricsData(errorType)}</span></div></div></div><div className={module4035.middle}><SimpleCircle theme="light" width={200} height={200} title="" value={`${(100 * this.getMetricsData("ingress_success_rate")).toFixed(2)}`} total={100} unit="%" innerRadius="80%" legend={[
                    "SUCCESSFUL_REQUESTS",
                    "TOTAL"
                ]} showCenter showRate={false} areaColors={[
                    "#55BC8A",
                    "#E3E9EF"
                ]} renderCustomCenter={function({ value }) {
                    return <div className={module4035.simpleContent}><p>{t("SUCCESSFUL_REQUESTS")}</p><span>{value}%</span></div>;
                }}/></div><div className={module4035.right}><div className={module4035.item}><span className={module4035.customIcon}><ReactComponent/></span><div><p>{t("AVERAGE_LATENCY")}</p><span>{`${this.getMetricsData("ingress_request_duration_average")} s`}</span></div></div><div className={module4035.itemSmall}><span>{t("P_FIFTY_LATENCY")}</span><span>{`${this.getMetricsData("ingress_request_duration_50percentage")} s`}</span></div><div className={module4035.itemSmall}><span>{t("P_NINETY_FIVE_LATENCY")}</span><span>{`${this.getMetricsData("ingress_request_duration_95percentage")} s`}</span></div><div className={module4035.itemSmall}><span>{t("P_NINETY_NINE_LATENCY")}</span><span>{`${this.getMetricsData("ingress_request_duration_99percentage")} s`}</span></div></div></div></div>;
            }
        },
        {
            key: "detail",
            get: function() {
                return this.props.detailStore.gateway.data;
            }
        },
        {
            key: "isWorkspaceGateway",
            get: function() {
                const params = this.props.match.params;
                const { workspace, namespace } = params;
                return workspace && !namespace;
            }
        },
        {
            key: "cluster",
            get: function() {
                const cluster = this.props.match.params.cluster;
                if (this.props.location.pathname.indexOf("federatedprojects") > -1 || this.isWorkspaceGateway) {
                    return localStorage.getItem("federated-cluster");
                }
                return cluster;
            }
        }
    ]);
    return r;
})(Component);
export default I;
