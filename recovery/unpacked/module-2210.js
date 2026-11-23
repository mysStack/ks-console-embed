import "./module-15.js";
import "./module-18.js";
import "./module-9.js";
import "./module-4.js";
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
import module49 from "./module-49.js";
import * as module553 from "./module-553.js";
import { observer } from "./module-239.js";
import module14 from "./module-14.js";
import module2211 from "./module-2211.js";
let l;
let o;
const y = observer((o = ((e)=>{
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
                const props = this.props;
                const { cluster, namespace } = props;
                if (this.hasMonitoring) {
                    this.props.store.fetchMetadata({
                        cluster,
                        namespace
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                return module553.default.createElement(module2211, {
                    ...this.props,
                    supportMetrics: this.supportMetrics
                });
            }
        },
        {
            key: "hasMonitoring",
            get: function() {
                const cluster = this.props.cluster;
                return globals.app.hasClusterModule(cluster, "whizard-monitoring");
            }
        },
        {
            key: "supportMetrics",
            get: function() {
                if (this.hasMonitoring) {
                    return this.props.store.targetsMetadata.map((e)=>({
                            value: e.metric,
                            desc: e.help,
                            type: e.type
                        }));
                }
                return [];
            }
        }
    ]);
    return a;
})(module553.Component), module49(o.prototype, "supportMetrics", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "supportMetrics"), o.prototype), l = o)) || l;
export default y;
