import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
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
import * as module553 from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import graph from "components/Modals/CustomMonitoring/containers/GraphMonitorOverview";
import module1183 from "unpacked/module-1183.js";
import module2826 from "components/Modals/CustomMonitoring/components/Cards/GraphContainer";
let l;
const h = {
    graph,
    table: function() {}
};
const E = observer(l = ((e)=>{
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
            key: "render",
            value: function() {
                return module553.default.createElement("div", null, this.props.rows.map((e)=>module553.default.createElement(module553.default.Fragment, {
                        key: e.config.id
                    }, e.monitors.map((monitor)=>{
                        const t = monitor.config || {};
                        const { id: key, title, description, type } = t;
                        const o = h[type];
                        const u = Object.prototype.toString.call(o);
                        return module553.default.createElement(module1183, {
                            key,
                            errorMessage: monitor.errorMessage
                        }, module553.default.createElement(module2826, {
                            title,
                            description
                        }, u !== "[object Function]" && o ? module553.default.createElement(o, {
                            monitor
                        }) : null));
                    }))));
            }
        }
    ]);
    return a;
})(module553.Component)) || l;
export default E;
