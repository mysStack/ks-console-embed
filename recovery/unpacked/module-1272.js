import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-137.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-193.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import * as module553 from "./module-553.js";
import module896 from "./module-896.js";
import module857 from "./module-857.js";
import module446 from "./module-446.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module1488 from "./module-1488.js";
import module1490 from "./module-1490.js";
import module2110 from "./module-2110.js";
let u;
let o;
const k = observer((o = ((e)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.handleMetricSelect = function(t) {
            e.props.onChange(t);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const { name, value, onChange, labelsets, onLabelSearch, supportMetrics, supportDebugButton = false } = this.props;
                return module553.default.createElement("div", {
                    className: module2110.wrapper
                }, module553.default.createElement(module1488, {
                    options: this.groupedMetrics,
                    onSelect: this.handleMetricSelect
                }, module553.default.createElement("span", {
                    className: module2110.trigger
                }, t("MONITOR_METRIC"), module553.default.createElement(module186.Icon, {
                    type: "light",
                    name: "caret-down"
                }))), module553.default.createElement("div", {
                    className: module2110.input
                }, module553.default.createElement(module1490, {
                    name,
                    value,
                    onChange,
                    metrics: supportMetrics,
                    labelsets,
                    onLabelSearch
                })), supportDebugButton && module553.default.createElement("div", {
                    onClick: this.props.onDebugClick,
                    className: module3(module2110.debug, module2110.btn)
                }, module553.default.createElement(module186.Icon, {
                    name: "terminal",
                    type: "light"
                }), " ", module553.default.createElement("span", null, t("DEBUGB_DATA"))));
            }
        },
        {
            key: "groupedMetrics",
            get: function() {
                const e = /:\w+:/;
                let t = module61(this.props.supportMetrics);
                t = t.filter((t)=>!e.test(t.value));
                t = module857(t, function(e) {
                    return e.value.split("_")[0];
                });
                t = module896(t, function(e, t) {
                    const a = e.length === 1 && e[0] === t ? [] : e.map((e)=>({
                            label: e.value,
                            value: e.value,
                            desc: e.desc
                        }));
                    return {
                        children: module446(a, "label"),
                        label: t,
                        value: t
                    };
                });
                return module446(t, "label");
            }
        }
    ]);
    return r;
})(module553.Component), module49(o.prototype, "groupedMetrics", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "groupedMetrics"), o.prototype), u = o)) || u;
export default k;
