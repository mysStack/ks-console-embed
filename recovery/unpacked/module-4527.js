import "./module-12.js";
import "./module-187.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-436.js";
import "./module-22.js";
import "./module-315.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import { MediumArea, MultiPie } from "./module-799.js";
import module26 from "./module-26.js";
import { getAreaChartOps, getLastMonitoringData } from "./module-795.js";
import module14 from "./module-14.js";
import module959 from "./module-959.js";
import module4528 from "./module-4528.js";
const E = module553.memo(function({ currentResource }) {
    const r = module553.useState({
        data: [],
        isLoading: false
    });
    const n = module96(r, 2);
    const o = n[0];
    const l = n[1];
    const _ = module553.useCallback(async (t)=>{
        l({
            isLoading: true,
            data: []
        });
        await t.fetchAlertData({
            ...currentResource
        });
        l(module14.toJS(t.alertData));
    }, []);
    module553.useEffect(function() {
        const e = new module959({
            cluster: currentResource.cluster
        });
        _(e);
    }, []);
    const E = module553.useCallback(function(e) {
        return parseFloat(module26(e, "value[1]", 0));
    }, []);
    const b = module553.useCallback(function() {
        const e = module14.toJS(o.data);
        const a = getLastMonitoringData(e);
        return [
            {
                category: "criticalAlert",
                data: module26(e, "namespace_alerts_critical_total.data.result"),
                title: t("CRITICAL_ALERT"),
                unit: "",
                legend: [
                    t("CRITICAL_ALERT")
                ],
                used: E(a.namespace_alerts_critical_total),
                areaColors: [
                    "red"
                ]
            },
            {
                category: "errorAlert",
                data: module26(e, "namespace_alerts_error_total.data.result"),
                title: t("ERROR_ALERT"),
                unit: "",
                legend: [
                    t("ERROR_ALERT")
                ],
                used: E(a.namespace_alerts_error_total),
                areaColors: [
                    "yellow"
                ]
            },
            {
                category: "warningAlert",
                data: module26(e, "namespace_alerts_warning_total.data.result"),
                title: t("WARNING_ALERT"),
                legend: [
                    t("WARNING_ALERT")
                ],
                unit: "",
                used: E(a.namespace_alerts_warning_total),
                areaColors: [
                    "darkGray"
                ]
            }
        ];
    }, [
        o.data
    ]);
    const S = module553.useCallback(function() {
        const e = module14.toJS(o.data);
        const a = getLastMonitoringData(e);
        return {
            title: "PROJECT_ALERTS",
            total: E(a.namespace_alerts_total),
            dataList: [
                {
                    dataKey: "value",
                    innerRadius: 45,
                    outerRadius: 60,
                    cx: 55,
                    colors: [
                        "#CA2621",
                        "#F5A623",
                        "#EFF4F9"
                    ],
                    data: [
                        {
                            name: t("ALERT_RULE_FIRING"),
                            value: E(a.namespace_alerts_firing_total)
                        },
                        {
                            name: t("ALERT_RULE_PENDING"),
                            value: E(a.namespace_alerts_pending_total)
                        }
                    ]
                }
            ]
        };
    }, [
        o.data
    ]);
    const O = S().dataList.every((e)=>e.data.every((e)=>e.value === 0));
    return module553.default.createElement("div", {
        className: module4528.alertStatus
    }, module553.default.createElement("div", {
        className: module4528.alertWrapper
    }, module553.default.createElement("div", {
        className: module4528.title
    }, t("PROJECT_ALERTS")), module553.default.createElement("div", {
        className: module4528.charts
    }, module553.default.createElement("div", {
        className: module4528.pieCharts
    }, O ? module553.default.createElement("div", {
        className: module4528.noData
    }, module553.default.createElement("img", {
        src: "/assets/doughnut_chart_duotone.svg"
    }), module553.default.createElement("p", null, t("NO_DATA"))) : module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(MultiPie, {
        legendClassName: module4528.legendClassName,
        dataList: S().dataList
    }), module553.default.createElement("div", {
        className: module4528.summary
    }, module553.default.createElement("p", null, S().total), module553.default.createElement("p", null, S().total === 1 ? t("ALERTING_MESSAGE") : t("ALERTING_MESSAGE_PL"))))), module553.default.createElement("div", {
        className: module4528.lineCharts
    }, b().map((e)=>module553.default.createElement("div", {
            className: module4528.areaCharts,
            key: e.category
        }, module553.default.createElement(MediumArea, {
            ...getAreaChartOps(e),
            key: e.title,
            width: "100%",
            height: 60,
            renderTitle: function() {
                return module553.default.createElement("div", {
                    className: module4528.areaTitle
                }, module553.default.createElement("p", null, e.title), module553.default.createElement("b", null, e.used));
            },
            top: 4
        })))))));
});
export default E;
