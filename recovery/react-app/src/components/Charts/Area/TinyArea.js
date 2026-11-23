import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-18.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module449 from "unpacked/module-449.js";
import module3 from "unpacked/module-3.js";
import { COLORS_MAP } from "utils/constants";
import Module901 from "unpacked/module-901.js";
import Module870 from "unpacked/module-870.js";
import Module871 from "unpacked/module-871.js";
import Module948 from "unpacked/module-948.js";
import Module872 from "unpacked/module-872.js";
import Module863 from "unpacked/module-863.js";
import module2169 from "unpacked/module-2169.js";
const S = ((Component_1)=>{
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
            key: "renderTitle",
            value: function() {
                const props = this.props;
                const { title, renderTitle } = props;
                if (renderTitle) {
                    return renderTitle();
                }
                return <div className={module2169.title}>{`${t(title)} ${this.lastValue}`}</div>;
            }
        },
        {
            key: "renderArea",
            value: function() {
                const props = this.props;
                const { unit, areaColors, renderArea } = props;
                if (renderArea) {
                    return renderArea();
                }
                return this.series.map((e, r)=>{
                    const n = COLORS_MAP[areaColors[r]];
                    return <Module901 key={e} dataKey={e} stroke={n} fillOpacity="0.1" fill={n} unit={unit}/>;
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { width, height, bgColor, xKey, data, darkMode } = props;
                return <div className={module3(module2169.chart, module31({}, module2169.dark, darkMode))} style={{
                    width,
                    height,
                    background: bgColor
                }}>{this.renderTitle()}<Module872 width="100%" height="100%" debounce={1}><Module948 data={data} margin={{
                    top: 30,
                    left: 0,
                    right: 0,
                    bottom: 0
                }}><Module871 dataKey={xKey} hide/><Module870 wrapperStyle={{
                    zIndex: 1000
                }} cursor={{
                    stroke: COLORS_MAP.dark,
                    strokeDasharray: "3,2",
                    strokeWidth: 2
                }} content=<Module863/>/>{this.renderArea()}</Module948></Module872></div>;
            }
        },
        {
            key: "series",
            get: function() {
                const props = this.props;
                const { xKey, data } = props;
                return Object.keys(data[0] || {}).filter((e)=>e !== xKey);
            }
        },
        {
            key: "lastValue",
            get: function() {
                const props = this.props;
                const { unit, data } = props;
                const series = this.series;
                if (series.length === 1) {
                    return `${module449(data)[series[0]]} ${unit}`;
                }
                return "";
            }
        }
    ]);
    return r;
})(Component);
export default S;
S.propTypes = {
    width: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    height: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    title: module1.string,
    xKey: module1.string,
    unit: module1.string,
    data: module1.array,
    bgColor: module1.string,
    areaColors: module1.array,
    renderTitle: module1.func,
    renderArea: module1.func,
    darkMode: module1.bool
};
S.defaultProps = {
    width: 180,
    height: 56,
    title: "Title",
    xKey: "time",
    unit: "",
    bgColor: COLORS_MAP.lightest,
    areaColors: [
        "green",
        "blue",
        "yellow",
        "red"
    ],
    data: [],
    darkMode: false
};
