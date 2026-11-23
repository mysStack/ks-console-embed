import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-6.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-64.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module63 from "unpacked/module-63.js";
import module807 from "unpacked/module-807.js";
import module60 from "unpacked/module-60.js";
import module186 from "unpacked/module-186.js";
import { SimpleArea } from "components/Charts/index";
import { getAreaChartOps, getValueByUnit } from "utils/monitoring";
import Module833 from "unpacked/module-833.js";
import Module3532 from "components/Modals/Bill/components/LineChart/MonitorTab";
import { METER_RESOURCE_TITLE, METER_RESOURCE_USAGE_TITLE } from "components/Modals/Bill/constats";
import module3534 from "unpacked/module-3534.js";
const C = ((Component_1)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.state = {
            chartData: e.props.chartData,
            loading: false
        };
        e.setNoPriceChartData = function(t) {
            t.forEach((e)=>{
                e.title = METER_RESOURCE_TITLE[e.type];
            });
            e.setState({
                chartData: t
            });
        };
        e.setAreaChartData = function(a) {
            e.setState({
                loading: true
            }, function() {
                if (module63(a)) {
                    e.setState({
                        loading: false,
                        chartData: []
                    });
                } else {
                    if (module63(e.priceConfig)) {
                        e.setNoPriceChartData(a);
                    } else {
                        a.forEach((t)=>{
                            t.values = t.values.map((a)=>{
                                const r = module26(a, [
                                    1
                                ]);
                                const n = (r === "-1" ? null : getValueByUnit(r, t.unit.value)) * e.priceConfig[t.type];
                                module74(a, [
                                    1
                                ], n);
                                return a;
                            });
                            t.type = METER_RESOURCE_TITLE[t.type];
                        });
                        const legend = a.map((e)=>module26(e, "type"));
                        const n = {
                            title: t("CONSUMER_TRENDS"),
                            unit: e.priceConfig.currency ? e.priceConfig.currency : " ",
                            data: a,
                            legend
                        };
                        const l = getAreaChartOps(n);
                        l.data.shift();
                        e.setState({
                            chartData: l
                        });
                    }
                    e.setState({
                        loading: false
                    });
                }
            });
        };
        e.renderNoPriceChart = function() {
            const chartData = e.state.chartData;
            if (module63(chartData) || !module60(chartData)) {
                return null;
            }
            const r = {
                CPU: "cpu",
                Memory: "memory",
                Volumes: "storage",
                "Net Received": "network",
                "Net Transmitted": "network"
            };
            const tabs = chartData.map((e)=>({
                    key: e.title,
                    icon: r[e.title],
                    unit: e.unit.value,
                    legend: [
                        e.title
                    ],
                    title: t(METER_RESOURCE_USAGE_TITLE[e.type].toUpperCase().replace(/\s+/g, "_")),
                    data: [
                        e
                    ],
                    yAxis: true,
                    titleValue: e.sum_value,
                    dot: 3
                }));
            return <Module3532 tabs={tabs}/>;
        };
        return e;
    }
    module37(r, [
        {
            key: "shouldComponentUpdate",
            value: function(e, t) {
                return this.state.loading !== t.loading || !module807(this.props.chartData, e.chartData);
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!module807(this.props.chartData, e.chartData)) {
                    this.setAreaChartData(this.props.chartData);
                }
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module3534.chartContainer}><module186.Loading spinning={this.state.loading}>{module63(this.state.chartData) ? <Module833 className="no-shadow" icon="exclamation" title={t("NO_DATA")} desc={t("NO_RESOURCE_FOUND")}/> : module63(this.priceConfig) ? this.renderNoPriceChart() : <SimpleArea width="100%" height={245} {...this.state.chartData}/>}</module186.Loading></div>;
            }
        },
        {
            key: "priceConfig",
            get: function() {
                return this.props.priceConfig;
            }
        }
    ]);
    return r;
})(Component);
export default C;
