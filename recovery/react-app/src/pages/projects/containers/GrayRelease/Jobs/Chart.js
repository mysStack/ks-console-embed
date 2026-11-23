import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
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
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import { PieChart } from "components/Charts/index";
import module1448 from "unpacked/module-1448.js";
const h = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.getSeriesData = function() {
            const e_props = e.props;
            const { data, legendData } = e_props;
            return [
                {
                    name: legendData[0],
                    itemStyle: {
                        fill: "#329dce"
                    },
                    value: data[0] || 0
                },
                {
                    name: legendData[1],
                    itemStyle: {
                        fill: "#c7deef"
                    },
                    value: data[1] || 0
                }
            ];
        };
        return e;
    }
    module37(r, [
        {
            key: "renderTip",
            value: function() {
                const tip = this.props.tip;
                return <module186.Tooltip content={tip}><module186.Icon name="information" className={module1448.tip}/></module186.Tooltip>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { name, icon, data, unit, tip } = props;
                return <div className={module1448.chart}><div className={module1448.circle}><module186.Icon name={icon} size={20}/><PieChart width={60} height={60} data={this.getSeriesData()}/></div><div className={module1448.chartDetail}><div><strong>{name}</strong> {tip && this.renderTip()}</div><p className={module1448.tag}>{isNaN(data[0]) ? t("NO_DATA_SCAP") : `${data[0]} ${unit}`}</p><p className={module1448.tag}>{isNaN(data[1]) ? t("NO_DATA_SCAP") : `${data[1]} ${unit}`}</p></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default h;
h.propTypes = {
    name: module1.string,
    tip: module1.string,
    unit: module1.string,
    data: module1.array,
    legendData: module1.array
};
h.defaultProps = {
    name: "",
    data: [],
    legendData: []
};
