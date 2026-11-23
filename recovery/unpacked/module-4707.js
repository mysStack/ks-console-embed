import "./module-15.js";
import "./module-5.js";
import "./module-27.js";
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
import module186 from "./module-186.js";
import { PieChart } from "./module-799.js";
import { getSuitableValue } from "./module-795.js";
import module1447 from "./module-1447.js";
const g = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.getSeriesData = function() {
            const e_props = e.props;
            const { data, legendData, whiteMode } = e_props;
            const o = data[0] ? module26(data[0], `[${data[0].length - 1}].[1]`, NaN) : NaN;
            const c = data[1] ? module26(data[1], `[${data[1].length - 1}].[1]`, NaN) : NaN;
            return [
                {
                    name: legendData[0],
                    itemStyle: {
                        fill: whiteMode ? "#ffffff" : "#329dce"
                    },
                    value: Number(o)
                },
                {
                    name: legendData[1],
                    itemStyle: {
                        fill: whiteMode ? "#6fbadc" : "#c7deef"
                    },
                    value: Number(c)
                }
            ];
        };
        return e;
    }
    module37(r, [
        {
            key: "renderTip",
            value: function() {
                const props = this.props;
                const { tip, whiteMode } = props;
                return <module186.Tooltip content={tip}><module186.Icon name="information" className={module1447.tip} type={whiteMode ? "light" : "dark"}/></module186.Tooltip>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { title, tip, data, unit } = props;
                const c = data[0] ? module26(data[0], `[${data[0].length - 1}].[1]`, NaN) : NaN;
                const s = data[1] ? module26(data[1], `[${data[1].length - 1}].[1]`, NaN) : NaN;
                return <div className={module1447.chart}><div className={module1447.circle}><PieChart width={40} height={40} data={this.getSeriesData()}/></div><div className={module1447.chartDetail}><div className={module1447.title}>{title} {tip && this.renderTip()}</div><div><span className={module1447.tag}>{isNaN(c) ? t("NO_DATA_SCAP") : `${getSuitableValue(c, unit)} ${unit}`}</span><span className={module1447.tag}>{isNaN(s) ? t("NO_DATA_SCAP") : `${getSuitableValue(s, unit)} ${unit}`}</span></div></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default g;
g.propTypes = {
    title: module1.string,
    unit: module1.string,
    data: module1.array,
    legendData: module1.array,
    whiteMode: module1.bool
};
g.defaultProps = {
    title: "",
    data: [],
    legendData: [],
    whiteMode: false
};
