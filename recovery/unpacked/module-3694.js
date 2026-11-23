import "./module-15.js";
import "./module-187.js";
import "./module-6.js";
import "./module-10.js";
import "./module-7.js";
import "./module-4.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import { MultiPie } from "./module-799.js";
import module186 from "./module-186.js";
import { getSuitableUnit, getValueByUnit } from "./module-795.js";
import module1791 from "./module-1791.js";
import module3696 from "./module-3696.js";
export default function({ merticType = "cpu", title, data, resourceType }) {
    const m = module553.useState({
        requests: 0,
        limits: 0,
        total: 0
    });
    const h = module96(m, 2);
    const mertic = h[0];
    const y = h[1];
    const unit = getSuitableUnit(data.total || data.limits || data.requests || 0, merticType);
    module553.useEffect(function() {
        const e = {};
        Object.keys(data).forEach((t)=>{
            e[t] = getValueByUnit(data[t], unit);
        });
        y(e);
    }, [
        data
    ]);
    const _ = (total, t)=>{
        if (total < t) {
            return 0;
        }
        return (100 * total - 100 * t) / 100;
    };
    const dataList = module553.useMemo(function() {
        if (merticType === "cpu") {
            return [
                {
                    dataKey: "value",
                    innerRadius: 48,
                    outerRadius: 60,
                    colors: [
                        "#329DCE",
                        "#EFF4F9"
                    ],
                    data: [
                        {
                            name: t("QUOTA_REQUEST"),
                            value: mertic.requests,
                            unit: "core"
                        },
                        {
                            name: t("QUOTA_TOTAL"),
                            value: _(mertic.total, mertic.requests),
                            unit: "core"
                        }
                    ]
                },
                {
                    dataKey: "value",
                    innerRadius: 34,
                    outerRadius: 46,
                    colors: [
                        "#F5A623",
                        "#EFF4F9"
                    ],
                    data: [
                        {
                            name: t("QUOTA_LIMIT"),
                            value: mertic.limits,
                            unit: "core"
                        },
                        {
                            name: t("QUOTA_TOTAL"),
                            value: _(mertic.total, mertic.limits),
                            unit: "core"
                        }
                    ]
                }
            ];
        }
        return [
            {
                dataKey: "value",
                innerRadius: 48,
                outerRadius: 60,
                colors: [
                    "#329DCE",
                    "#EFF4F9"
                ],
                data: [
                    {
                        name: t("QUOTA_REQUEST"),
                        value: mertic.requests,
                        unit
                    },
                    {
                        name: t("QUOTA_TOTAL"),
                        value: _(mertic.total, mertic.requests),
                        unit
                    }
                ]
            },
            {
                dataKey: "value",
                innerRadius: 34,
                outerRadius: 46,
                colors: [
                    "#F5A623",
                    "#EFF4F9"
                ],
                data: [
                    {
                        name: t("QUOTA_LIMIT"),
                        value: mertic.limits,
                        unit
                    },
                    {
                        name: t("QUOTA_TOTAL"),
                        value: _(mertic.total, mertic.limits),
                        unit
                    }
                ]
            }
        ];
    }, [
        mertic,
        merticType
    ]);
    const O = dataList.every((e)=>e.data.every((e)=>e.value === 0));
    return module553.default.createElement("div", {
        className: module3696.container
    }, module553.default.createElement("div", {
        className: module3696.flexContainer
    }, module553.default.createElement("div", {
        className: module3696.chartContainer
    }, module553.default.createElement("div", {
        className: module3696.title
    }, title), module553.default.createElement("div", {
        className: module3696.chart
    }, O ? module553.default.createElement("div", {
        className: module3696.noData
    }, module553.default.createElement("img", {
        src: "/assets/doughnut_chart_duotone.svg"
    }), module553.default.createElement("p", null, t("NO_DATA"))) : module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(MultiPie, {
        dataList,
        total: mertic.total,
        wrapperStyle: {
            display: "flex",
            left: "166px",
            justifyContent: "space-between",
            width: "calc(100% - 178px)"
        },
        noTooltip: true
    }), module553.default.createElement(module186.Icon, {
        className: module3696.icon,
        name: merticType,
        size: 32
    })))), module553.default.createElement(module1791, {
        resourceType,
        mertic,
        unit
    })));
};
