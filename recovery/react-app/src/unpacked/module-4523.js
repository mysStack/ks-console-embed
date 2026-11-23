import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-187.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-436.js";
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
import { observer } from "unpacked/module-239.js";
import module959 from "unpacked/module-959.js";
import module186 from "unpacked/module-186.js";
import { MediumArea, MultiPie } from "components/Charts/index";
import module3 from "unpacked/module-3.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import { getAreaChartOps, getLastMonitoringData } from "utils/monitoring";
import module4524 from "unpacked/module-4524.js";
let l;
const k = {
    oomkilled: "namespace_pod_oomkilled_count",
    pending: "namespace_pod_pending_count",
    evict: "namespace_pod_evicted_count",
    pod_total: "namespace_pod_count",
    pod_running: "namespace_pod_running_count",
    pod_pending: "namespace_pod_pending_count",
    pod_succeeded: "namespace_pod_succeeded_count",
    pod_failed: "namespace_pod_failed_count",
    pod_unknown: "namespace_pod_unknown_count",
    guaranteed: "namespace_pod_qos_guaranteed_count",
    burstable: "namespace_pod_qos_burstable_count",
    bestEffort: "namespace_pod_qos_besteffort_count"
};
const D = observer(l = ((Component_1)=>{
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
    function r(...o) {
        let e;
        module36(this, r);
        e = a.call(this, ...o);
        e.monitorStore = new module959({
            cluster: e.props.currentResource.cluster
        });
        e.state = {
            params: {
                times: 10,
                step: "48m"
            }
        };
        e.fetchData = async (a)=>{
            await e.monitorStore.fetchMetrics({
                metrics: Object.values(k),
                ...e.state.params,
                ...a
            });
        };
        e.getValue = function(e) {
            return parseFloat(module26(e, "value[1]", 0));
        };
        e.renderChartTitle = function({ icon, used, title }) {
            return <div className={module4524.chartTitle}><module186.Icon name={icon} size={42}/><div className={module4524.chartInfo}><p>{used}</p><p>{t(title)}</p></div></div>;
        };
        e.renderTooltipQos = function() {
            const content = <div className={module4524.qosContent}><p>{t.html("QOS_GUARANTEED")}</p><br/><p>{t.html("QOS_BURSTABLE")}</p><br/><p>{t.html("QOS_BESTEFFORT")}</p></div>;
            return <module186.Tooltip content={content}><module186.Icon name="question" size={16}/></module186.Tooltip>;
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData({
                    namespace: this.props.currentResource.namespace
                });
            }
        },
        {
            key: "renderChart",
            value: function(e) {
                const a = getAreaChartOps(e);
                if (module63(a.data)) {
                    return <p className={module4524.noData}>{t("NO_DATA")}</p>;
                }
                return <MediumArea {...a} noTitle top={4} width="100%" height={48} key={e.title}/>;
            }
        },
        {
            key: "renderPie",
            value: function(e) {
                return <MultiPie legendClassName={module4524.legendClassName} dataList={e.dataList} wrapperStyle={{
                    display: "flex",
                    left: "166px",
                    justifyContent: "space-between",
                    width: "calc(100% - 166px)"
                }}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const isLoading = this.monitorStore.isLoading;
                return <div className={module4524.container}><div className={module4524.header}><div className={module4524.title}>{t("POD_PL")}</div></div><module186.Loading spinning={isLoading}><div className={module4524.flexcontainer}><div className={module3(module4524.chartbox, module4524.status)}>{this.renderPieOption.map((a, r)=>{
                    const n = a.dataList.every((e)=>e.data.every((e)=>e.value === 0));
                    return <div className={module3(module4524.item_pie, module4524.item)} key={r}><div className={module4524.pie_title}>{t(a.title)}<span className={module4524.pie_title_tooltip}>{a.title === "QoS" && _this.renderTooltipQos()}</span></div><div className={module4524.pie_box}>{n ? <div className={module4524.pieNoData}><img src="/assets/doughnut_chart_duotone.svg"/><p>{t("NO_DATA")}</p></div> : <>{_this.renderPie(a)}<div className={module4524.summary}><p>{a.total}</p><p>{t("ALL")}</p></div></>}</div></div>;
                })}</div><div className={module4524.chartbox}>{this.renderChartOption.map((t, a)=><div className={module3(module4524.item, module4524.areaChartItem)} key={a}>{_this.renderChartTitle(t)}<div className={module4524.chartBox}>{_this.renderChart(t)}</div></div>)}</div></div></module186.Loading></div>;
            }
        },
        {
            key: "metrics",
            get: function() {
                return this.monitorStore.data;
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
                        data: module26(this.metrics, `${k.oomkilled}.data.result`),
                        used: this.getValue(e[k.oomkilled])
                    },
                    {
                        category: "pending",
                        title: "PENDING_PODS",
                        icon: "history-duotone",
                        unit: "",
                        legend: [
                            "PENDING_PODS"
                        ],
                        data: module26(this.metrics, `${k.pending}.data.result`),
                        used: this.getValue(e[k.pending])
                    },
                    {
                        category: "evict",
                        title: "EVICTED_PODS",
                        unit: "",
                        legend: [
                            "EVICTED_PODS"
                        ],
                        icon: "logout-right-duotone",
                        data: module26(this.metrics, `${k.evict}.data.result`),
                        used: this.getValue(e[k.evict])
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
                        total: this.getValue(e[k.pod_total]),
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
                                        value: this.getValue(e[k.pod_running])
                                    },
                                    {
                                        name: t("PENDING"),
                                        value: this.getValue(e[k.pod_pending])
                                    },
                                    {
                                        name: t("COMPLETED"),
                                        value: this.getValue(e[k.pod_succeeded])
                                    },
                                    {
                                        name: t("FAILED"),
                                        value: this.getValue(e[k.pod_failed])
                                    },
                                    {
                                        name: t("UNKNOWN"),
                                        value: this.getValue(e[k.pod_unknown])
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: "QoS",
                        total: this.getValue(e[k.pod_total]),
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
                                        value: this.getValue(e[k.guaranteed])
                                    },
                                    {
                                        name: "Burstable",
                                        value: this.getValue(e[k.burstable])
                                    },
                                    {
                                        name: "BestEffort",
                                        value: this.getValue(e[k.bestEffort])
                                    }
                                ]
                            }
                        ]
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || l;
export default D;
