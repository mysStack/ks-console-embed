import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-86.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-190.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import module31 from "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import { SimpleCircle } from "components/Charts/index";
import module3 from "unpacked/module-3.js";
import { ReactComponent } from "unpacked/module-1840.js";
import module1074 from "stores/monitoring/gateway";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import { startAutoRefresh, stopAutoRefresh } from "utils/monitoring";
import Module4265 from "unpacked/module-4265.js";
import module4269 from "unpacked/module-4269.js";
const A = {
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
const P = ((Component_1)=>{
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
    function r(...i_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...i_1);
        e.state = {
            enableAutoRefresh: true,
            autoRefresh: false,
            duration: "10m",
            metrics: {},
            errorType: "ingress_request_4xx_count"
        };
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
        e.fetchData = async (a)=>{
            let duration;
            let n;
            let cluster;
            let o;
            let c;
            let i;
            duration = e.state.duration;
            e.setState({
                isLoading: true
            });
            n = e.detail || {};
            cluster = n.cluster;
            o = n.name;
            c = await e.monitorStore.fetchGatewayMetrics({
                duration,
                cluster,
                workspace: e.props.match.params.workspace,
                metrics: Object.values(A),
                job: `${o}-metrics`,
                component: "ingress",
                ...a
            });
            i = e.handleMetricsData(c);
            e.setState({
                metrics: {
                    ...i
                },
                duration,
                isLoading: false
            });
        };
        e.handleMetricsData = function(e) {
            if (!module63(e)) {
                const t = {};
                Object.values(A).map((t)=>e[t]).forEach((e)=>{
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
                return <module186.Button className={module4269.button} type="control" icon={autoRefresh ? "pause" : "start"} iconType="light" onClick={e.handleAutoRefresh}/>;
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
            const c = payload || [];
            if (c.length < 2 && !o) {
                return <div className={module4269.legend}/>;
            }
            const onClick = function(t) {
                const e_onClick = e.onClick;
                if (e_onClick) {
                    e_onClick(t, module26(t.target, "dataset.key"));
                }
            };
            return <div className={module4269.legend} onClick={onClick}>{c.map((e)=>{
                const a = !n.includes(e.value);
                const backgroundColor = module26(e, "payload.stroke");
                return <div key={e.dataKey} data-key={e.dataKey} className={module3(module4269.item, module31({}, module4269.inactive, a))}><i style={{
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
                this.fetchData(this.props.match.params);
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { duration, errorType } = state;
                return <div className={module4269.overview}><div className={module4269.header}><p className={module4269.title}>{t("OVERVIEW")}</p><div className={module4269.operations}><Module4265 duration={duration} onChange={this.handleChange}/>{this.renderAutoRefresh()}<module186.Button className={module4269.button} type="control" icon="refresh" iconType="light" onClick={this.handleRefresh}/></div></div><div className={module4269.body}><div className={module4269.left}><div className={module4269.item}><module186.Icon name="gateway" size={56}/><div><p>{t("TOTAL_REQUESTS")}</p><span>{this.getMetricsData("ingress_request_count")}</span></div></div><div className={module4269.item}><module186.Icon name="error" size={56}/><div><module186.Select width={30} value={errorType} options={[
                    {
                        label: t("FOUR_XX_REQUEST_COUNT"),
                        value: "ingress_request_4xx_count"
                    },
                    {
                        label: t("FIVE_XX_REQUEST_COUNT"),
                        value: "ingress_request_5xx_count"
                    }
                ]} onChange={this.handleRequestError}/><span>{this.getMetricsData(errorType)}</span></div></div></div><div className={module4269.middle}><SimpleCircle theme="light" width={200} height={200} title="" value={`${(100 * this.getMetricsData("ingress_success_rate")).toFixed(2)}`} total={100} unit="%" innerRadius="80%" legend={[
                    "SUCCESSFUL_REQUESTS",
                    "TOTAL"
                ]} showCenter showRate={false} areaColors={[
                    "#55BC8A",
                    "#E3E9EF"
                ]} renderCustomCenter={function({ value }) {
                    return <div className={module4269.simpleContent}><p>{t("SUCCESSFUL_REQUESTS")}</p><span>{value}%</span></div>;
                }}/></div><div className={module4269.right}><div className={module4269.item}><span className={module4269.customIcon}><ReactComponent/></span><div><p>{t("AVERAGE_LATENCY")}</p><span>{`${this.getMetricsData("ingress_request_duration_average")} ms`}</span></div></div><div className={module4269.itemSmall}><span>{t("P_FIFTY_LATENCY")}</span><span>{`${this.getMetricsData("ingress_request_duration_50percentage")} ms`}</span></div><div className={module4269.itemSmall}><span>{t("P_NINETY_FIVE_LATENCY")}</span><span>{`${this.getMetricsData("ingress_request_duration_95percentage")} ms`}</span></div><div className={module4269.itemSmall}><span>{t("P_NINETY_NINE_LATENCY")}</span><span>{`${this.getMetricsData("ingress_request_duration_99percentage")} ms`}</span></div></div></div></div>;
            }
        },
        {
            key: "detail",
            get: function() {
                return this.props.detailStore.gateway.data;
            }
        }
    ]);
    return r;
})(Component);
export default P;
