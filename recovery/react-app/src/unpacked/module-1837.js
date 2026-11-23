import "unpacked/module-15.js";
import "unpacked/module-27.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { getLocalTime } from "utils/index";
import { getAreaChartOps } from "utils/monitoring";
import Module3977 from "unpacked/module-3977.js";
import module3978 from "unpacked/module-3978.js";
const h = ((Component_1)=>{
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
                const props = this.props;
                const { type, title, metrics, showDay } = props;
                const u = getAreaChartOps({
                    title,
                    unitType: type,
                    legend: [
                        "VALUE"
                    ],
                    data: metrics,
                    xFormatter: function(e) {
                        return getLocalTime(1000 * Number(e)).format(showDay ? "MM-DD HH:mm" : "HH:mm");
                    }
                });
                return <div className={module3978.wrapper}><div className={module3978.chartWrapper}><div className={module3978.title}>{title}</div><div className={module3978.chart}><Module3977 width="100%" height={120} bgColor="transparent" {...u}/></div></div></div>;
            }
        }
    ]);
    return a;
})(Component);
export default h;
