import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
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
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import { translateTimeAlias } from "./module-467.js";
import module186 from "./module-186.js";
import Module2763 from "./module-2763.js";
import { refreshInterval } from "./module-1634.js";
let l;
const E = inject("monitoringStore")(l = observer(l = ((Component_1)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.handleChange = function(t) {
            e.props.monitoringStore.changeRefreshInterval(t);
        };
        e.options = refreshInterval.map((e)=>({
                label: e ? `${t("INTERVAL")} ${translateTimeAlias(e)}` : t("NO_REFRESHING"),
                value: e
            }));
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const refresh = this.props.monitoringStore.refresh;
                return <Module2763 prefixIcon=<module186.Icon name="refresh" type="light"/> onChange={this.handleChange} options={this.options} value={refresh}/>;
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default E;
