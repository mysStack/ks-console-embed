import "./module-15.js";
import "./module-5.js";
import "./module-6.js";
import "./module-18.js";
import "./module-87.js";
import "./module-16.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import * as module553 from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module14 from "./module-14.js";
import module63 from "./module-63.js";
import module2822 from "./module-2822.js";
import module2828 from "./module-2828.js";
import module2839 from "./module-2839.js";
import module2841 from "./module-2841.js";
let l;
let o;
const _ = inject("monitoringStore")(l = observer((o = ((e)=>{
    module55(a, e);
    var t = ((e)=>{
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
    })(a);
    function a() {
        module36(this, a);
        return t.apply(this, arguments);
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                this.allMonitors.forEach((t)=>t.monitoring(_this.monitoringStore));
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.allMonitors.forEach((e)=>{
                    e.stopMonitoring();
                    e.clearMonitorMetrics();
                });
            }
        },
        {
            key: "render",
            value: function() {
                const isEditing = this.props.monitoringStore.isEditing;
                return module553.default.createElement(module2839, {
                    graphList: module553.default.createElement(module2822, {
                        rows: [
                            this.monitoringStore.unNameGraphRow
                        ].concat(module61(this.graphMonitorRows)),
                        monitos: this.allMonitors
                    }),
                    graphRowList: isEditing ? module553.default.createElement(module2828, null) : this.renderGraphRows()
                });
            }
        },
        {
            key: "monitorStatFactory",
            value: function(e) {
                return {
                    id: e.config.id,
                    title: e.config.title,
                    metrics: module63(e.stats) ? [] : e.stats.map((e)=>({
                            title: e.name,
                            id: e.id,
                            color: e.color,
                            value: e.stat
                        }))
                };
            }
        },
        {
            key: "renderGraphRows",
            value: function() {
                const _this = this;
                const t = [
                    {
                        id: 0,
                        hideTitle: true,
                        panels: this.unNameGraphRowMonitors.map(this.monitorStatFactory, this)
                    }
                ];
                const a = this.graphMonitorRows.map((t)=>({
                        title: t.config.title,
                        id: t.config.id,
                        panels: t.monitors.map(_this.monitorStatFactory, _this)
                    }));
                return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module2841, {
                    rows: t
                }), module553.default.createElement(module2841, {
                    rows: a
                }));
            }
        },
        {
            key: "monitoringStore",
            get: function() {
                return this.props.monitoringStore;
            }
        },
        {
            key: "graphMonitorRows",
            get: function() {
                return this.monitoringStore.graphMonitorRows;
            }
        },
        {
            key: "unNameGraphRowMonitors",
            get: function() {
                return this.monitoringStore.unNameGraphRow.monitors;
            }
        },
        {
            key: "monitorsInRows",
            get: function() {
                return this.graphMonitorRows.reduce((acc, graphMonitorRow)=>[].concat(module61(acc), module61(graphMonitorRow.monitors)), []);
            }
        },
        {
            key: "allMonitors",
            get: function() {
                return [].concat(module61(this.unNameGraphRowMonitors), module61(this.monitorsInRows));
            }
        }
    ]);
    return a;
})(module553.Component), module49(o.prototype, "monitoringStore", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "monitoringStore"), o.prototype), module49(o.prototype, "graphMonitorRows", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "graphMonitorRows"), o.prototype), module49(o.prototype, "unNameGraphRowMonitors", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "unNameGraphRowMonitors"), o.prototype), module49(o.prototype, "monitorsInRows", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "monitorsInRows"), o.prototype), module49(o.prototype, "allMonitors", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "allMonitors"), o.prototype), l = o)) || l) || l;
export default _;
