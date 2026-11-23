import "./module-15.js";
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
import module26 from "./module-26.js";
import module1337 from "./module-1337.js";
import { GraphTextInput } from "./module-1338.js";
import { SingleStatGraph } from "./module-2785.js";
import module1111 from "./module-1111.js";
import module2789 from "./module-2789.js";
import module1183 from "./module-1183.js";
let o;
let u;
const C = inject("monitoringStore", "labelStore")(o = observer((u = ((e)=>{
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
                const stat = this.stat;
                const title = module26(this.monitor, "config.title", "");
                const labelsets = module14.toJS(this.props.labelStore.labelsets);
                return module553.default.createElement(module1337, {
                    preview: module553.default.createElement(module1183, {
                        errorMessage: this.monitor.errorMessage
                    }, module553.default.createElement(SingleStatGraph, {
                        singleState: stat,
                        title
                    })),
                    sidebar: module553.default.createElement(GraphTextInput, {
                        type: "singlestat"
                    }),
                    main: module553.default.createElement(module1111, {
                        label: t("DATA")
                    }, module553.default.createElement(module2789, {
                        supportMetrics: this.supportMetrics,
                        labelsets,
                        onLabelSearch: this.handleLabelSearch
                    }))
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
            key: "stat",
            get: function() {
                return this.monitor.stat;
            }
        }
    ]);
    return r;
})(module553.Component), module49(u.prototype, "monitor", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "monitor"), u.prototype), module49(u.prototype, "supportMetrics", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "supportMetrics"), u.prototype), module49(u.prototype, "stat", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "stat"), u.prototype), o = u)) || o) || o;
export default C;
