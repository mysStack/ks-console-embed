import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module63 from "unpacked/module-63.js";
import module807 from "unpacked/module-807.js";
import module929 from "unpacked/module-929.js";
import { COLORS_MAP } from "utils/constants";
import Module1034 from "unpacked/module-1034.js";
import Module870 from "unpacked/module-870.js";
import Module913 from "unpacked/module-913.js";
import Module871 from "unpacked/module-871.js";
import Module928 from "unpacked/module-928.js";
import Module930 from "unpacked/module-930.js";
import Module1279 from "unpacked/module-1279.js";
import Module872 from "unpacked/module-872.js";
import Module1087 from "unpacked/module-1087.js";
import Module863 from "unpacked/module-863.js";
import { getActiveSeries } from "unpacked/module-1088.js";
import module2183 from "unpacked/module-2183.js";
const I = ((Component_1)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.getBarSize = function(e = []) {
            if (e.length <= 20) {
                return 20;
            }
            return 8;
        };
        t.handleLegendClick = function(e, a) {
            const activeSeries = module61(t.state.activeSeries);
            if (activeSeries.includes(a)) {
                module929(activeSeries, function(e) {
                    return e === a;
                });
            } else {
                activeSeries.push(a);
            }
            t.setState({
                activeSeries
            });
        };
        const n = getActiveSeries(e);
        t.state = {
            series: n,
            activeSeries: n
        };
        return t;
    }
    module37(r, [
        {
            key: "renderTitle",
            value: function() {
                const props = this.props;
                const { title, unit, renderTitle } = props;
                const l = renderTitle ? renderTitle() : module63(unit) ? t(title) : `${t(title)} (${unit})`;
                return <div className={module2183.title}>{l}</div>;
            }
        },
        {
            key: "renderLegend",
            value: function() {
                return <Module928 wrapperStyle={{
                    top: 0,
                    left: "auto",
                    right: 0,
                    width: "70%",
                    zIndex: 1001
                }} content=<Module1087 activeSeries={this.state.activeSeries} onClick={this.handleLegendClick}/>/>;
            }
        },
        {
            key: "renderBar",
            value: function() {
                const _this = this;
                const props = this.props;
                const { unit, areaColors, renderBar } = props;
                const state = this.state;
                const { series, activeSeries } = state;
                if (renderBar) {
                    return renderBar();
                }
                return series.map((t, n)=>{
                    const l = areaColors[n];
                    const u = COLORS_MAP[l] || l;
                    const barSize = _this.getBarSize(_this.series);
                    const radius = n === 0 ? [
                        0,
                        0,
                        2,
                        2
                    ] : n === _this.series.length - 1 ? [
                        2,
                        2,
                        0,
                        0
                    ] : null;
                    return <Module1034 key={t} dataKey={t} stackId="series" barSize={barSize} stroke={u} strokeWidth={0} fill={u} radius={radius} unit={unit} hide={!activeSeries.includes(t)}/>;
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { theme, width, height, xKey, data } = props;
                const className = module3(module2183.chart, "chart", `chart-${theme}`);
                return <div className={className} style={{
                    width,
                    height
                }}>{this.renderTitle()}<Module872 width="100%" height="100%" debounce={1}><Module1279 data={data} margin={{
                    top: 50,
                    bottom: -20,
                    left: 0,
                    right: 20
                }}><Module930 stroke="#d8dee5" strokeDasharray="2 3" vertical={false}/><Module871 dataKey={xKey} axisLine={false} tickLine={false}/><Module913 width={45} axisLine={false} tickLine={false} tickFormatter={function(e) {
                    if (e > 0) {
                        return e;
                    }
                    return "";
                }}/><Module870 wrapperStyle={{
                    zIndex: 1000
                }} cursor={theme === "dark" ? {
                    fill: COLORS_MAP.lightest,
                    fillOpacity: 0.2
                } : {
                    fill: COLORS_MAP.grey
                }} content=<Module863/>/>{this.renderLegend()}{this.renderBar()}</Module1279></Module872></div>;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                const a = getActiveSeries(e);
                if (module807(a, t.series)) {
                    return null;
                }
                return {
                    series: a,
                    activeSeries: a
                };
            }
        }
    ]);
    return r;
})(Component);
export default I;
I.propTypes = {
    theme: module1.oneOf([
        "light",
        "dark"
    ]),
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
    areaColors: module1.array,
    renderTitle: module1.func,
    renderBar: module1.func
};
I.defaultProps = {
    theme: "light",
    width: "100%",
    height: 200,
    title: "Title",
    xKey: "time",
    unit: "",
    areaColors: [
        "green",
        "blue",
        "yellow"
    ],
    data: []
};
