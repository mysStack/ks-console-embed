import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import { SimpleArea } from "components/Charts/index";
import { getAreaChartOps, getSuitableValue, startAutoRefresh, stopAutoRefresh } from "utils/monitoring";
import module1026 from "unpacked/module-1026.js";
let i;
const T = {
    JVM_THREADS_LIVE: "jvm.threads.live",
    JVM_THREADS_DAEMON: "jvm.threads.daemon",
    JVM_THREADS_PEAK: "jvm.threads.peak",
    JVM_MEMORY_MAX: "jvm.memory.max",
    JVM_MEMORY_USED: "jvm.memory.used",
    JVM_MEMORY_COMMITTED: "jvm.memory.committed",
    JVM_MEMORY_USED_METASPACE: "jvm.memory.used.metaspace"
};
const k = observer(i = ((Component_1)=>{
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.fetchData = async (t)=>{
            let a;
            let cluster;
            let namespace;
            let c;
            let l;
            let i;
            let u;
            a = n.props;
            cluster = a.cluster;
            namespace = a.namespace;
            c = a.instanceId;
            l = a.config;
            i = l.filters;
            u = l.metaspaceFilters;
            await n.instanceStore.fetchMetrics({
                cluster,
                namespace,
                name: c,
                ...i,
                ...t
            }, u);
        };
        n.getInstanceMonitoringCfgs = function() {
            const config = n.props.config;
            const { unitType, legend, extraLegend, metaspaceFilters: _metaspaceFilters, ...rest } = config;
            const l = getSuitableValue(module26(n.instanceMetrics, `['${T[extraLegend]}'].data.values[0][1]`), unitType);
            return {
                ...rest,
                unitType,
                legend,
                extraLegend: `${t(extraLegend)}: ${l}`,
                data: legend.map((e)=>module26(n.instanceMetrics, `['${T[e]}'].data`))
            };
        };
        n.instanceStore = new module1026;
        n.fetchData();
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                startAutoRefresh(this, {
                    interval: 2500
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                stopAutoRefresh(this);
            }
        },
        {
            key: "render",
            value: function() {
                const e = getAreaChartOps(this.getInstanceMonitoringCfgs());
                if (module63(e.data)) {
                    return null;
                }
                return <div key={e.title}><SimpleArea width="100%" {...e}/> </div>;
            }
        },
        {
            key: "instanceMetrics",
            get: function() {
                return module14.toJS(this.instanceStore.metrics);
            }
        }
    ]);
    return r;
})(Component)) || i;
export default k;
