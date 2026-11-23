import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-18.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import * as module553 from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module14 from "./module-14.js";
import module186 from "./module-186.js";
import module818 from "./module-818.js";
import { MONITOR_GRAPH_COLORS } from "./module-72.js";
import module1337 from "./module-1337.js";
import { GraphTextInput, ThemeSelector } from "./module-1338.js";
import module1053 from "./module-1053.js";
import module1636 from "./module-1636.js";
import module2797 from "./module-2797.js";
import module1183 from "./module-1183.js";
import module1111 from "./module-1111.js";
import module2799 from "./module-2799.js";
let o;
let u;
const N = inject("monitoringStore", "labelStore")(o = observer((u = ((e)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.handleLabelSearch = function(metric) {
            const monitoringStore = e.props.monitoringStore;
            const { cluster, namespace } = monitoringStore;
            const l = e.props.monitoringStore.getTimeRange();
            const { from, to } = l;
            e.props.labelStore.fetchLabelSets({
                cluster,
                namespace,
                metric,
                start: Math.floor(from.valueOf() / 1000),
                end: Math.floor(to.valueOf() / 1000)
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.props.monitoringStore.fetchMetadata();
            }
        },
        {
            key: "render",
            value: function() {
                const config = this.monitor.config;
                const { title, lines, bars, stack, description } = config;
                const errorMessage = this.monitor.errorMessage;
                const legends = this.monitor.legends;
                const labelsets = module14.toJS(this.props.labelStore.labelsets);
                return module553.default.createElement(module1337, {
                    preview: module553.default.createElement(module1183, {
                        errorMessage
                    }, module553.default.createElement(module2797, {
                        title,
                        description
                    }, module553.default.createElement(module1636, {
                        line: lines,
                        bar: bars,
                        stacked: stack,
                        timeRange: this.timeRange,
                        valueFormatter: this.monitor.valueFormatter,
                        legends,
                        data: this.monitor.graphData
                    }))),
                    sidebar: module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(GraphTextInput, {
                        type: this.monitor.config.lines ? "line" : "bar"
                    }), module553.default.createElement(module1111, {
                        className: "margin-t12",
                        label: t("GRAPH_TYPES")
                    }, module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module1053, {
                        name: "stack",
                        debounce: 100
                    }, function({ onChange, value }) {
                        return module553.default.createElement(module818, {
                            defaultValue: false,
                            value,
                            onChange,
                            options: [
                                {
                                    value: true,
                                    label: t("STACKED_GRAPH_TYPE"),
                                    icon: "barchart",
                                    description: t("STACKED_GRAPH_TYPE_DESC")
                                },
                                {
                                    value: false,
                                    label: t("SINGLE_GRAPH_TYPE_NAME"),
                                    icon: "barchart",
                                    description: t("SINGLE_GRAPH_TYPE")
                                }
                            ]
                        });
                    }))), module553.default.createElement(module1111, {
                        label: t("GRAPH_COLORS")
                    }, module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module1053, {
                        name: "colors",
                        defaultValue: 0,
                        debounce: 100
                    }, function({ onChange, value }) {
                        return module553.default.createElement(ThemeSelector, {
                            onChange,
                            value,
                            options: MONITOR_GRAPH_COLORS.map((e)=>({
                                    label: t(e.nameI18nKey),
                                    value: e.colors
                                }))
                        });
                    })))),
                    main: module553.default.createElement(module2799, {
                        supportMetrics: this.supportMetrics,
                        labelsets,
                        onLabelSearch: this.handleLabelSearch
                    })
                });
            }
        },
        {
            key: "monitor",
            get: function() {
                return this.props.monitor;
            }
        },
        {
            key: "supportMetrics",
            get: function() {
                return this.props.monitoringStore.targetsMetadata.map((e)=>({
                        value: e.metric,
                        desc: e.help,
                        type: e.type
                    }));
            }
        },
        {
            key: "timeRange",
            get: function() {
                return this.monitor.timeRange;
            }
        }
    ]);
    return r;
})(module553.Component), module49(u.prototype, "monitor", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "monitor"), u.prototype), module49(u.prototype, "supportMetrics", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "supportMetrics"), u.prototype), o = u)) || o) || o;
export default N;
