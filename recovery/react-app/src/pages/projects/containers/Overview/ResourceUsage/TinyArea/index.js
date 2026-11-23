import "unpacked/module-15.js";
import "unpacked/module-828.js";
import "unpacked/module-11.js";
import "unpacked/module-18.js";
import "unpacked/module-10.js";
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
import { COLORS_MAP } from "utils/constants";
import Module901 from "unpacked/module-901.js";
import Module870 from "unpacked/module-870.js";
import Module871 from "unpacked/module-871.js";
import Module948 from "unpacked/module-948.js";
import Module930 from "unpacked/module-930.js";
import Module872 from "unpacked/module-872.js";
import Module863 from "unpacked/module-863.js";
const E = ((Component_1)=>{
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
            key: "getVeticalPoints",
            value: function() {
                const e = (this.props.width - 10) / 10;
                return Array(10).fill("").map((t, a)=>5 + e * a);
            }
        },
        {
            key: "renderArea",
            value: function() {
                const props = this.props;
                const { unit, areaColors } = props;
                const dot = {
                    stroke: "#55bc8a",
                    strokeWidth: 1,
                    fill: "#fff",
                    fillOpacity: 1
                };
                return this.series.map((e, n)=>{
                    const l = COLORS_MAP[areaColors[n]];
                    return <Module901 key={e} dataKey={e} stroke={l} fillOpacity="0.1" fill={l} unit={unit} dot={dot}/>;
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { width, height, xKey, data } = props;
                return <Module872 width={width} height={height} debounce={1}><Module948 data={data}><Module871 dataKey={xKey} hide/><Module870 wrapperStyle={{
                    zIndex: 1000
                }} content=<Module863/>/><Module930 strokeDasharray="3 6" horizontal={false} verticalPoints={this.getVeticalPoints()}/>{this.renderArea()}</Module948></Module872>;
            }
        },
        {
            key: "series",
            get: function() {
                const props = this.props;
                const { xKey, data } = props;
                return Object.keys(data[0] || {}).filter((e)=>e !== xKey);
            }
        }
    ]);
    return a;
})(Component);
export default E;
E.propTypes = {
    width: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    height: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    xKey: module1.string,
    unit: module1.string,
    data: module1.array,
    bgColor: module1.string,
    areaColors: module1.array
};
E.defaultProps = {
    width: 180,
    height: 56,
    xKey: "time",
    unit: "",
    bgColor: COLORS_MAP.lightest,
    areaColors: [
        "green",
        "blue",
        "yellow",
        "red"
    ],
    data: []
};
