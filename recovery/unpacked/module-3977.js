import "./module-15.js";
import "./module-5.js";
import "./module-828.js";
import "./module-11.js";
import "./module-18.js";
import "./module-10.js";
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
import { Component, PureComponent } from "./module-553.js";
import module1 from "./module-1.js";
import { COLORS_MAP } from "./module-72.js";
import Module901 from "./module-901.js";
import Module870 from "./module-870.js";
import Module913 from "./module-913.js";
import Module871 from "./module-871.js";
import Module948 from "./module-948.js";
import Module930 from "./module-930.js";
import Module872 from "./module-872.js";
import Module863 from "./module-863.js";
function b(e) {
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
}
const _ = ((PureComponent_1)=>{
    module55(a, PureComponent_1);
    var t = b(a);
    function a() {
        module36(this, a);
        return t.apply(this, arguments);
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { x, y, payload } = props;
                return <g transform={`translate(${x},${y})`}><text x={0} y={0} dy={12} fill="#79879c" textAnchor="middle">{payload.value}</text></g>;
            }
        }
    ]);
    return a;
})(PureComponent);
const O = ((Component_1)=>{
    module55(a, Component_1);
    var t = b(a);
    function a() {
        module36(this, a);
        return t.apply(this, arguments);
    }
    module37(a, [
        {
            key: "getHorizontalPoints",
            value: function() {
                const e = (this.props.height - 30 - 6) / 4;
                return Array(4).fill("").map((t, a)=>30 + e * a);
            }
        },
        {
            key: "renderArea",
            value: function() {
                const props = this.props;
                const { unit, areaColors } = props;
                return this.series.map((e, r)=>{
                    const stroke = COLORS_MAP[areaColors[r]];
                    return <Module901 key={e} dataKey={e} stroke={stroke} fillOpacity="1" fill="url(#colorPv)" unit={unit}/>;
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { width, height, xKey, data } = props;
                return <Module872 width={width} height={height} debounce={1}><Module948 data={data} margin={{
                    top: 32,
                    left: 16,
                    right: 16,
                    bottom: 0
                }}><defs><linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#55bc8a" stopOpacity={0.2}/><stop offset="95%" stopColor="#55bc8a" stopOpacity={0}/></linearGradient></defs><Module930 vertical={false} stroke="#36435c" strokeDasharray="2 2" horizontalPoints={this.getHorizontalPoints()}/><Module871 dataKey={xKey} axisLine={false} tickLine={false} height={30} interval="preserveStart" tick=<_/> minTickGap={20}/><Module913 hide type="number" domain={[
                    function(e) {
                        return 0 - Math.abs(e);
                    },
                    function(e) {
                        return 1.6 * e;
                    }
                ]}/><Module870 wrapperStyle={{
                    zIndex: 1000
                }} content=<Module863/>/>{this.renderArea()}</Module948></Module872>;
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
export default O;
O.propTypes = {
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
O.defaultProps = {
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
