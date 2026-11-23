import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-828.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import module246 from "unpacked/module-246.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-45.js";
import "unpacked/module-442.js";
import "unpacked/module-42.js";
import "unpacked/module-319.js";
import "unpacked/module-57.js";
import { PureComponent, createRef } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module243 from "unpacked/module-243.js";
import module3 from "unpacked/module-3.js";
import Module1034 from "unpacked/module-1034.js";
import Module901 from "unpacked/module-901.js";
import Module870 from "unpacked/module-870.js";
import Module913 from "unpacked/module-913.js";
import Module930 from "unpacked/module-930.js";
import Module871 from "unpacked/module-871.js";
import Module872 from "unpacked/module-872.js";
import Module2793 from "unpacked/module-2793.js";
import module2796 from "unpacked/module-2796.js";
let d;
const R = ({ from, to, count })=>{
    const n = parseInt((to - from) / (count + 1), 10);
    return Array(count).fill({}).reduce((acc, item, index)=>acc.concat(from + n * (index + 1)), []);
};
d = {};
module31(d, 60000, "mm:ss");
module31(d, 3600000, "HH:mm");
module31(d, 86400000, "ddd HH:mm");
module31(d, 1296000000, "MMM Do");
module31(d, "Infinity", "MMM YYYY");
const D = d;
function labelFormatter(e = Date.now()) {
    return module243(e).format("YYYY-MM-DD HH:mm:ss");
}
const k = ((PureComponent_1)=>{
    module55(a, PureComponent_1);
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
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.ref = createRef();
        return e;
    }
    module37(a, [
        {
            key: "getTickCount",
            value: function() {
                const e = module26(this.ref, "current.offsetWidth");
                if (e) {
                    return Math.floor(e / 75);
                }
                return 5;
            }
        },
        {
            key: "getXAxisExpand",
            value: function() {
                const props = this.props;
                const { data, timeRange, bar } = props;
                const data_length = data.length;
                const l = timeRange.end - timeRange.start;
                if (data_length > 1 && bar) {
                    return l / (2 * data_length - 2);
                }
                return 0;
            }
        },
        {
            key: "getTicks",
            value: function(count = 5) {
                const t = this.getDomain();
                const a = module96(t, 2);
                const from = a[0];
                const to = a[1];
                return R({
                    from,
                    to,
                    count
                });
            }
        },
        {
            key: "getDomain",
            value: function() {
                const timeRange = this.props.timeRange;
                const { start, end } = timeRange;
                const r = this.getXAxisExpand();
                return [
                    start - r,
                    end + r
                ];
            }
        },
        {
            key: "getTickFormatter",
            value: function(e) {
                const t = this.getDomain();
                const a = module96(t, 2);
                const r = a[0];
                const o = (a[1] - r) / e;
                for(var u in D){
                    if (o <= Number(u)) {
                        const c = (()=>{
                            const e = D[u];
                            return {
                                v: function(t) {
                                    return module243(t).format(e);
                                }
                            };
                        })();
                        if (module246(c) === "object") {
                            return c.v;
                        }
                    }
                }
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const { data, legends, line, bar, cartesianGrid = true, stacked = false, yAxis = true, className, valueFormatter } = this.props;
                return <div style={{
                    height: "300px"
                }} className={module3(module2796.wrapper, className)} ref={this.ref}><Module872 debounce={100}><Module2793 data={data}>{cartesianGrid && <Module930 vertical={false}/>}{this.renderTimeXAxis()}{yAxis && <Module913 tickFormatter={valueFormatter} tickLine={null} axisLine={null}/>}{bar && legends.map((t)=><Module1034 isAnimationActive={false} connectNulls key={`${t.ID} - bar`} name={t.name} dataKey={t.ID} fill={t.color} stroke={t.color} stackId={stacked ? "A" : undefined} fillOpacity={t.opacity || 1} barSize={_this.singleBarSize}/>)}{line && legends.map((e)=><Module901 isAnimationActive={false} connectNulls key={`${e.ID} - area`} name={e.name} dataKey={e.ID} fill={e.color} stroke={e.color} stackId={stacked ? "A" : undefined} fillOpacity={e.opacity || 0.4}/>)}<Module870 wrapperStyle={{
                    zIndex: 1000
                }} formatter={valueFormatter} labelFormatter={labelFormatter}/></Module2793></Module872></div>;
            }
        },
        {
            key: "renderTimeXAxis",
            value: function() {
                const xAxis = this.props.xAxis;
                const t = xAxis === undefined || xAxis;
                const domain = this.getDomain();
                const r = this.getTickCount();
                const ticks = this.getTicks(r);
                const tickFormatter = this.getTickFormatter(r);
                const o = this.XAxisShouldPadding ? 30 : 0;
                return <Module871 hide={!t} type="number" dataKey="time" scale="time" interval={0} tickLine={null} domain={domain} ticks={ticks} tickFormatter={tickFormatter} allowDataOverflow="false" padding={{
                    left: o,
                    right: o
                }}/>;
            }
        },
        {
            key: "singleBarSize",
            get: function() {
                const legends = this.props.legends;
                if (this.XAxisShouldPadding) {
                    return Math.floor(60 / legends.length);
                }
            }
        },
        {
            key: "XAxisShouldPadding",
            get: function() {
                const props = this.props;
                const { data, timeRange } = props;
                const r = "YYYY-MM-DD HH:mm:ss";
                if (data.length === 1) {
                    const n = module243(timeRange.start).format(r);
                    const l = module243(timeRange.end).format(r);
                    const o = module243(data[0].time).format(r);
                    return o === n || o === l;
                }
                return false;
            }
        }
    ]);
    return a;
})(PureComponent);
export default k;
k.defaultProps = {
    valueFormatter: function(e) {
        return e;
    }
};
