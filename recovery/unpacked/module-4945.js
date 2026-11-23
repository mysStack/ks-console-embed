import "./module-15.js";
import "./module-27.js";
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
import { Component } from "./module-553.js";
import { getLocalTime } from "./module-52.js";
import { getAreaChartOps } from "./module-795.js";
import Module4946 from "./module-4946.js";
import module4947 from "./module-4947.js";
const h = ((Component_1)=>{
    module55(r, Component_1);
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
            let r;
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(r);
    function r() {
        module36(this, r);
        return t.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { type, title, metrics, showDay } = props;
                const c = getAreaChartOps({
                    title,
                    unitType: type,
                    legend: [
                        "COUNT"
                    ],
                    data: metrics,
                    xFormatter: function(e) {
                        return getLocalTime(1000 * Number(e)).format(showDay ? "MM-DD HH:mm" : "HH:mm");
                    }
                });
                return <div className={module4947.wrapper}><div className={module4947.chartWrapper}><div className={module4947.title}>{title}</div><div className={module4947.chart}><Module4946 width="100%" height={120} bgColor="transparent" {...c}/></div></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default h;
