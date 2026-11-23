import "unpacked/module-15.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import Module2824 from "components/Modals/CustomMonitoring/components/Graph/ComposeWithLegends";
let n;
const p = inject("monitoringStore")(n = observer(n = ((Component_1)=>{
    module55(a, Component_1);
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
            key: "render",
            value: function() {
                const e = this.props.monitoringStore.getTimeRange();
                const { from, to } = e;
                const timeRange = {
                    start: from.valueOf(),
                    end: to.valueOf()
                };
                const monitor = this.props.monitor;
                const { config, valueFormatter, graphData, legends } = monitor;
                const { title, lines, bars, stack } = config;
                return <Module2824 key={legends.map((e)=>e.ID).join(",")} title={title} line={lines} bar={bars} stacked={stack} timeRange={timeRange} valueFormatter={valueFormatter} legends={legends} data={graphData}/>;
            }
        }
    ]);
    return a;
})(Component)) || n) || n;
export default p;
