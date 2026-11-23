import "./module-15.js";
import "./module-5.js";
import "./module-73.js";
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
import module1 from "./module-1.js";
import module26 from "./module-26.js";
import { ALL_METRICS_CONFIG } from "./module-1784.js";
import module186 from "./module-186.js";
import Module791 from "./module-791.js";
import module1235 from "./module-1235.js";
const y = ((Component_1)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const { kind, data = {}, resources = [] } = this.props;
                const { condition_type, thresholds, unit, _metricType } = data;
                const title = `${t(kind)}: ${resources.join(", ")}`;
                const g = module26(ALL_METRICS_CONFIG, _metricType) || {};
                const _ = ` ${condition_type} ${thresholds}${unit}`;
                return <div className={module1235.item}><Module791 title={title} description={t("MONITORING_TARGETS_SCAP")}/><Module791 title=<span><module186.Icon name={g.prefixIcon || "appcenter"} size={20}/>{t(g.label || "Unknown")}{_}</span> description={t("ACTIVATION_CONDITION_SCAP")}/></div>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.propTypes = {
    data: module1.object,
    resources: module1.array
};
y.defaultProps = {
    data: {},
    resources: []
};
