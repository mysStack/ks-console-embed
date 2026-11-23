import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-27.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import { observer } from "./module-239.js";
import module26 from "./module-26.js";
import { getAreaChartOps, getChartData, getLastMonitoringData, getSuitableUnit, getValueByUnit } from "./module-795.js";
import { learnMoreTip } from "./module-52.js";
import module1832 from "./module-1832.js";
import module863 from "./module-863.js";
import module186 from "./module-186.js";
import module790 from "./module-790.js";
import { SimpleArea } from "./module-799.js";
import module3921 from "./module-3921.js";
let u;
let o;
let i;
const N = {
    inodeUsage: "pvc_inodes_used",
    inodeTotal: "pvc_inodes_total",
    inodeUtilisation: "pvc_inodes_utilisation",
    capacityAvailable: "pvc_bytes_available",
    capacityTotal: "pvc_bytes_total",
    capacityUtilisation: "pvc_bytes_utilisation"
};
const T = observer((i = o = ((e)=>{
    module55(r, e);
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                if (!globals.app.hasKSModule("whizard-monitoring")) {
                    return null;
                }
                this.timer = this.props.store.monitoringMetrics({
                    step: "1m",
                    times: 60,
                    metrics: Object.values(N)
                }, {
                    interval: 60000
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                clearInterval(this.timer);
            }
        },
        {
            key: "parseMetrics",
            value: function(e, t) {
                const unit = getSuitableUnit(e, t);
                return {
                    unit,
                    count: getValueByUnit(e, unit)
                };
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { title, store } = props;
                const { isLoading, isRefreshing } = store;
                const u = t.html("VOLUME_MONITORING_TIP");
                return module553.default.createElement(module790, {
                    title
                }, module553.default.createElement(module186.Loading, {
                    spinning: isLoading
                }, module553.default.createElement("div", {
                    "data-refreshing": isRefreshing
                }, module553.default.createElement(module186.Alert, {
                    type: "warning",
                    className: "margin-b12",
                    message: learnMoreTip(u)
                }), this.renderStatus(), this.renderMonitor())));
            }
        },
        {
            key: "renderStatus",
            value: function() {
                const data = this.props.store.data;
                const a = getLastMonitoringData(data);
                const r = module26(a, `${N.capacityAvailable}.value[1]`, 0);
                const n = module26(a, `${N.capacityTotal}.value[1]`, 0);
                const l = this.parseMetrics(r, "memory");
                const u = this.parseMetrics(n, "memory");
                const o = module26(a, `${N.capacityUtilisation}.value[1]`, 0);
                return module553.default.createElement("header", {
                    className: module3921.header
                }, module553.default.createElement("div", {
                    className: module3921.card
                }, module553.default.createElement(module1832, {
                    rate: Number(o)
                })), module553.default.createElement("div", {
                    className: module3921.description
                }, module553.default.createElement("h3", null, l.count, module553.default.createElement("small", null, l.unit)), module553.default.createElement("p", null, t("AVAILABLE_CAPACITY"))), module553.default.createElement("div", {
                    className: module3921.description
                }, module553.default.createElement("h3", null, u.count, module553.default.createElement("small", null, u.unit)), module553.default.createElement("p", null, t("TOTAL_CAPACITY"))));
            }
        },
        {
            key: "renderMonitor",
            value: function() {
                if (!globals.app.hasKSModule("whizard-monitoring")) {
                    return null;
                }
                const data = this.props.store.data;
                const data_1 = module26(data, `${N.inodeUtilisation}.data.result`);
                const r = module26(data, `${N.inodeUsage}.data.result[0].values`, []);
                const n = module26(data, `${N.inodeTotal}.data.result[0].values`, []);
                const l = getAreaChartOps({
                    title: t("INODE_USAGE"),
                    unit: "%",
                    legend: [
                        "USAGE"
                    ],
                    data: data_1,
                    renderTooltip: function() {
                        const usageData = getChartData({
                            unit: "",
                            legend: [
                                "USAGE"
                            ],
                            valuesData: [
                                r
                            ]
                        });
                        const totalData = getChartData({
                            unit: "",
                            legend: [
                                "USAGE"
                            ],
                            valuesData: [
                                n
                            ]
                        });
                        return module553.default.createElement(module863, {
                            usageData,
                            totalData
                        });
                    }
                });
                return module553.default.createElement(SimpleArea, {
                    width: "100%",
                    theme: "dark",
                    ...l
                });
            }
        }
    ]);
    return r;
})(module553.Component), o.propTypes = {
    store: module1.object,
    title: module1.string
}, u = i)) || u;
export default T;
