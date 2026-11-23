import "./module-15.js";
import "./module-18.js";
import "./module-315.js";
import "./module-436.js";
import * as module553 from "./module-553.js";
import { MediumArea, MultiPie } from "./module-799.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import { getAreaChartOps, getLastMonitoringData } from "./module-795.js";
import module14 from "./module-14.js";
import module4301 from "./module-4301.js";
import module4305 from "./module-4305.js";
export default function({ resources, alerts, originClusterList }) {
    const u = module553.useCallback(function() {
        const e = module14.toJS(resources.data);
        const r = getLastMonitoringData(e);
        return {
            title: "GLOBAL_ALERTS",
            total: h(r.clusters_alerts_total),
            dataList: [
                {
                    dataKey: "value",
                    innerRadius: 45,
                    outerRadius: 60,
                    colors: [
                        "#CA2621",
                        "#F5A623",
                        "#EFF4F9"
                    ],
                    cx: 55,
                    data: [
                        {
                            name: t("ALERT_RULE_FIRING"),
                            value: h(r.clusters_alerts_firing_total)
                        },
                        {
                            name: t("ALERT_RULE_PENDING"),
                            value: h(r.clusters_alerts_pending_total)
                        }
                    ]
                }
            ]
        };
    }, [
        resources
    ]);
    var h = module553.useCallback(function(e) {
        return parseFloat(module26(e, "value[1]", 0));
    }, []);
    const v = module553.useCallback(function() {
        const e = module14.toJS(resources.data);
        const r = getLastMonitoringData(e);
        return [
            {
                category: "criticalAlert",
                data: module26(e, "clusters_alerts_critical_total.data.result"),
                title: t("CRITICAL_ALERT"),
                unit: "",
                legend: [
                    t("CRITICAL_ALERT")
                ],
                used: h(r.clusters_alerts_critical_total),
                areaColors: [
                    "red"
                ]
            },
            {
                category: "errorAlert",
                data: module26(e, "clusters_alerts_error_total.data.result"),
                title: t("ERROR_ALERT"),
                unit: "",
                legend: [
                    t("ERROR_ALERT")
                ],
                used: h(r.clusters_alerts_error_total),
                areaColors: [
                    "yellow"
                ]
            },
            {
                category: "warningAlert",
                data: module26(e, "clusters_alerts_warning_total.data.result"),
                title: t("WARNING_ALERT"),
                legend: [
                    t("WARNING_ALERT")
                ],
                unit: "",
                used: h(r.clusters_alerts_warning_total),
                areaColors: [
                    "orange"
                ]
            },
            {
                category: "infoAlert",
                data: module26(e, "clusters_alerts_info_total.data.result"),
                title: t("INFO_ALERT"),
                legend: [
                    t("INFO_ALERT")
                ],
                unit: "",
                used: h(r.clusters_alerts_info_total),
                areaColors: [
                    "darkGray"
                ]
            }
        ];
    }, [
        resources
    ]);
    return module553.default.createElement(module186.Loading, {
        spinning: resources.isLoading
    }, module553.default.createElement("div", {
        className: module4305.alertStatus
    }, module553.default.createElement("div", {
        className: module4305.alertWrapper
    }, module553.default.createElement("div", {
        className: module4305.title
    }, module553.default.createElement("span", {
        className: module4305.titleText
    }, t("GLOBAL_ALERTS")), module553.default.createElement(module186.Tooltip, {
        content: module553.default.createElement("div", {
            className: module4305.alertTooltipWrapper
        }, t("GLOBAL_ALERTS_TOOLTIP")),
        placement: "top"
    }, module553.default.createElement(module186.Icon, {
        name: "question"
    }))), module553.default.createElement("div", {
        className: module4305.charts
    }, module553.default.createElement("div", {
        className: module4305.pieCharts
    }, module553.default.createElement(MultiPie, {
        legendClassName: module4305.legendClassName,
        dataList: u().dataList
    }), module553.default.createElement("div", {
        className: module4305.summary
    }, module553.default.createElement("p", null, u().total), module553.default.createElement("p", null, u().total === 1 ? t("ALERTING_MESSAGE") : t("ALERTING_MESSAGE_PL")))), module553.default.createElement("div", {
        className: module4305.lineCharts
    }, v().map((e)=>module553.default.createElement("div", {
            className: module4305.areaCharts,
            key: e.category
        }, module553.default.createElement(MediumArea, {
            ...getAreaChartOps(e),
            key: e.title,
            width: "100%",
            height: 60,
            renderTitle: function() {
                return module553.default.createElement("div", {
                    className: module4305.areaTitle
                }, module553.default.createElement("p", null, e.title), module553.default.createElement("b", null, e.used));
            },
            top: 4
        })))))), module553.default.createElement(module4301, {
        alerts,
        originClusterList
    })));
};
