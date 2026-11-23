import "./module-12.js";
import "./module-5.js";
import "./module-187.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-436.js";
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
import { observer } from "./module-239.js";
import module891 from "./module-891.js";
import module186 from "./module-186.js";
import { MediumArea, MultiPie } from "./module-799.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import { getAreaChartOps, getLastMonitoringData } from "./module-795.js";
import module14 from "./module-14.js";
import module3702 from "./module-3702.js";
let c;
const A = {
    oomkilled: "cluster_pod_oomkilled_count",
    pending: "cluster_pod_pending_count",
    evict: "cluster_pod_evicted_count",
    pod_total: "cluster_pod_count",
    pod_running: "cluster_pod_running_count",
    pod_pending: "cluster_pod_pending_count",
    pod_succeeded: "cluster_pod_succeeded_count",
    pod_failed: "cluster_pod_failed_count",
    pod_unknown: "cluster_pod_unknown_count",
    guaranteed: "cluster_pod_qos_guaranteed_count",
    burstable: "cluster_pod_qos_burstable_count",
    bestEffort: "cluster_pod_qos_besteffort_count"
};
const N = observer(c = ((Component_1)=>{
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...o_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...o_1);
        e.monitorStore = new module891({
            cluster: e.props.cluster
        });
        e.state = {
            params: {
                times: 10,
                step: "48m"
            }
        };
        e.fetchData = async (r)=>{
            await e.monitorStore.fetchMetrics({
                metrics: Object.values(A),
                ...e.state.params,
                ...r
            });
        };
        e.getValue = function(e) {
            return parseFloat(module26(e, "value[1]", 0));
        };
        e.renderChartTitle = function({ icon, imgIcon, used, title }) {
            return <div className={module3702.chartTitle}>{imgIcon ? <img src={imgIcon}/> : <module186.Icon name={icon} size={40}/>}<div className={module3702.chartInfo}><p>{used}</p><p>{t(title)}</p></div></div>;
        };
        e.renderTooltipQos = function() {
            const content = <div className={module3702.qosContent}><p>{t.html("QOS_GUARANTEED")}</p><br/><p>{t.html("QOS_BURSTABLE")}</p><br/><p>{t.html("QOS_BESTEFFORT")}</p></div>;
            return <module186.Tooltip content={content}><module186.Icon name="question" size={16}/></module186.Tooltip>;
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "renderChart",
            value: function(e) {
                const r = getAreaChartOps(e);
                if (module63(r.data)) {
                    return <p className={module3702.noData}>{t("NO_DATA")}</p>;
                }
                return <MediumArea {...r} noTitle top={4} height={48} width="100%" key={e.title}/>;
            }
        },
        {
            key: "renderPie",
            value: function(e) {
                const t = e.dataList.every((e)=>e.data.every((e)=>e.value === 0));
                return <>{t && <div className={module3702.emptyPie}><div/></div>}<MultiPie legendClassName={module3702.legendClassName} dataList={e.dataList} wrapperStyle={{
                    display: "flex",
                    left: "166px",
                    justifyContent: "space-between",
                    width: "calc(100% - 166px)"
                }}/></>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const isLoading = this.monitorStore.isLoading;
                return <div className={module3702.container}><div className={module3702.header}><div className={module3702.title}>{t("POD_PL")}</div></div><module186.Loading spinning={isLoading}><div className={module3702.flexcontainer}><div className={module3(module3702.chartbox, module3702.status)}>{this.renderPieOption.map((r, n)=>{
                    const a = r.dataList.every((e)=>e.data.every((e)=>e.value === 0));
                    return <div className={module3(module3702.item_pie, module3702.item)} key={n}><div className={module3702.pie_title}>{t(r.title)}<span className={module3702.pie_title_tooltip}>{r.title === "QoS" && _this.renderTooltipQos()}</span></div><div className={module3702.pie_box}>{a ? <div className={module3702.pieNoData}><img src="/assets/doughnut_chart_duotone.svg"/><p>{t("NO_DATA")}</p></div> : <>{_this.renderPie(r)}<div className={module3702.summary}><p>{r.total}</p><p>{t("ALL")}</p></div></>}</div></div>;
                })}</div><div className={module3702.chartbox}>{this.renderChartOption.map((t, r)=><div className={module3(module3702.item, module3702.areaChartItem)} key={r}>{_this.renderChartTitle(t)}<div className={module3702.chartBox}>{_this.renderChart(t)}</div></div>)}</div></div></module186.Loading></div>;
            }
        },
        {
            key: "metrics",
            get: function() {
                return module14.toJS(this.monitorStore.data);
            }
        },
        {
            key: "renderChartOption",
            get: function() {
                const e = getLastMonitoringData(this.metrics);
                return [
                    {
                        category: "oomkilled",
                        title: "OOM_KILL_PODS",
                        icon: "error",
                        unit: "",
                        legend: [
                            "OOM_KILL_PODS"
                        ],
                        data: module26(this.metrics, `${A.oomkilled}.data.result`),
                        used: this.getValue(e[A.oomkilled])
                    },
                    {
                        category: "pending",
                        title: "PENDING_PODS",
                        icon: "history-duotone",
                        unit: "",
                        legend: [
                            "PENDING_PODS"
                        ],
                        data: module26(this.metrics, `${A.pending}.data.result`),
                        used: this.getValue(e[A.pending])
                    },
                    {
                        category: "evict",
                        title: "EVICTED_PODS",
                        unit: "",
                        legend: [
                            "EVICTED_PODS"
                        ],
                        icon: "logout-right-duotone",
                        data: module26(this.metrics, `${A.evict}.data.result`),
                        used: this.getValue(e[A.evict])
                    }
                ];
            }
        },
        {
            key: "renderPieOption",
            get: function() {
                const e = getLastMonitoringData(this.metrics);
                return [
                    {
                        title: "POD_STATUS",
                        total: this.getValue(e[A.pod_total]),
                        dataList: [
                            {
                                dataKey: "value",
                                innerRadius: 45,
                                outerRadius: 60,
                                colors: [
                                    "#55BC8A",
                                    "#F5A623",
                                    "#79879C",
                                    "#CA2621",
                                    "#E3E9EF",
                                    "#EFF4F9"
                                ],
                                data: [
                                    {
                                        name: t("RUNNING"),
                                        value: this.getValue(e[A.pod_running])
                                    },
                                    {
                                        name: t("PENDING"),
                                        value: this.getValue(e[A.pod_pending])
                                    },
                                    {
                                        name: t("COMPLETED"),
                                        value: this.getValue(e[A.pod_succeeded])
                                    },
                                    {
                                        name: t("FAILED"),
                                        value: this.getValue(e[A.pod_failed])
                                    },
                                    {
                                        name: t("UNKNOWN"),
                                        value: this.getValue(e[A.pod_unknown])
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: "QoS",
                        total: this.getValue(e[A.pod_total]),
                        dataList: [
                            {
                                dataKey: "value",
                                innerRadius: 45,
                                outerRadius: 60,
                                colors: [
                                    "#55BC8A",
                                    "#329DCE",
                                    "#F5A623",
                                    "#EFF4F9"
                                ],
                                data: [
                                    {
                                        name: "Guaranteed",
                                        value: this.getValue(e[A.guaranteed])
                                    },
                                    {
                                        name: "Burstable",
                                        value: this.getValue(e[A.burstable])
                                    },
                                    {
                                        name: "BestEffort",
                                        value: this.getValue(e[A.bestEffort])
                                    }
                                ]
                            }
                        ]
                    }
                ];
            }
        }
    ]);
    return n;
})(Component)) || c;
export default N;
