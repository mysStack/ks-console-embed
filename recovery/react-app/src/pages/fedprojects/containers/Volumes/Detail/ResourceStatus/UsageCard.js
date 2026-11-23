import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import module26 from "unpacked/module-26.js";
import { getAreaChartOps, getChartData, getLastMonitoringData, getSuitableUnit, getValueByUnit } from "utils/monitoring";
import module1832 from "unpacked/module-1832.js";
import module863 from "unpacked/module-863.js";
import module790 from "components/Base/Panel";
import { SimpleArea } from "components/Charts/index";
import module816 from "components/Clusters/ClusterTitle";
import module1831 from "unpacked/module-1831.js";
import module5027 from "unpacked/module-5027.js";
let c;
const C = {
    inodeUsage: "pvc_inodes_used",
    inodeTotal: "pvc_inodes_total",
    inodeUtilisation: "pvc_inodes_utilisation",
    capacityAvailable: "pvc_bytes_available",
    capacityTotal: "pvc_bytes_total",
    capacityUtilisation: "pvc_bytes_utilisation"
};
const R = observer(c = ((e)=>{
    module55(a, e);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(e) {
        let t;
        module36(this, a);
        const params = (t = r.call(this, e)).props.match.params;
        const { namespace, name } = params;
        const cluster = t.props.cluster;
        t.monitor = new module1831({
            cluster: cluster.name,
            namespace,
            pvc: name
        });
        return t;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.timer = this.monitor.monitoringMetrics({
                    step: "1m",
                    times: 60,
                    metrics: Object.values(C)
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
                const monitor = this.monitor;
                const { isLoading, isRefreshing } = monitor;
                return module553.default.createElement(module790, null, module553.default.createElement(module186.Loading, {
                    spinning: isLoading
                }, module553.default.createElement("div", {
                    "data-refreshing": isRefreshing
                }, this.renderStatus(), this.renderMonitor())));
            }
        },
        {
            key: "renderStatus",
            value: function() {
                const cluster = this.props.cluster;
                const data = this.monitor.data;
                const a = getLastMonitoringData(data);
                const n = module26(a, `${C.capacityAvailable}.value[1]`, 0);
                const o = module26(a, `${C.capacityTotal}.value[1]`, 0);
                const c = this.parseMetrics(n, "memory");
                const u = this.parseMetrics(o, "memory");
                const l = module26(a, `${C.capacityUtilisation}.value[1]`, 0);
                return module553.default.createElement("header", {
                    className: module5027.header
                }, module553.default.createElement("div", {
                    className: module5027.cluster
                }, module553.default.createElement(module816, {
                    cluster,
                    theme: "light",
                    tagClass: "float-right"
                })), module553.default.createElement("div", {
                    className: module5027.space
                }), module553.default.createElement("div", {
                    className: module5027.card
                }, module553.default.createElement(module1832, {
                    rate: Number(l)
                })), module553.default.createElement("div", {
                    className: module5027.description
                }, module553.default.createElement("h3", null, c.count, module553.default.createElement("small", null, c.unit)), module553.default.createElement("p", null, t("AVAILABLE_CAPACITY"))), module553.default.createElement("div", {
                    className: module5027.description
                }, module553.default.createElement("h3", null, u.count, module553.default.createElement("small", null, u.unit)), module553.default.createElement("p", null, t("TOTAL_CAPACITY"))));
            }
        },
        {
            key: "renderMonitor",
            value: function() {
                if (!globals.app.hasKSModule("whizard-monitoring")) {
                    return null;
                }
                const data = this.monitor.data;
                const data_1 = module26(data, `${C.inodeUtilisation}.data.result`);
                const a = module26(data, `${C.inodeUsage}.data.result[0].values`, []);
                const n = module26(data, `${C.inodeTotal}.data.result[0].values`, []);
                const o = getAreaChartOps({
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
                                a
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
                    ...o
                });
            }
        }
    ]);
    return a;
})(module553.Component)) || c;
export default R;
