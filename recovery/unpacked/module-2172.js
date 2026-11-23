import "./module-15.js";
import "./module-84.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-140.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import "./module-251.js";
import "./module-252.js";
import "./module-193.js";
import "./module-315.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module807 from "./module-807.js";
import module63 from "./module-63.js";
import module929 from "./module-929.js";
import { COLORS_MAP } from "./module-72.js";
import Module1513 from "./module-1513.js";
import Module947 from "./module-947.js";
import Module901 from "./module-901.js";
import Module870 from "./module-870.js";
import Module913 from "./module-913.js";
import Module871 from "./module-871.js";
import Module928 from "./module-928.js";
import Module930 from "./module-930.js";
import Module948 from "./module-948.js";
import Module872 from "./module-872.js";
import Module1087 from "./module-1087.js";
import Module863 from "./module-863.js";
import { getActiveSeries } from "./module-1088.js";
import module2175 from "./module-2175.js";
const P = ((Component_1)=>{
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.handleLegendClick = function(e, t) {
            const activeSeries = module61(n.state.activeSeries);
            if (activeSeries.includes(t)) {
                module929(activeSeries, function(e) {
                    return e === t;
                });
            } else {
                activeSeries.push(t);
            }
            n.setState({
                activeSeries
            });
        };
        n.tickFormatter = function(e) {
            if (e <= 0) {
                return "";
            }
            if (e > 100000) {
                return `${Math.round(e / 1000)}k`;
            }
            return e;
        };
        n.getAlertLabel = function() {
            const n_props = n.props;
            const { unit, alert } = n_props;
            if (unit === "core") {
                return t("VALUE_CORES", {
                    value: alert.value
                });
            }
            return t("VALUE_UNIT", {
                value: alert.value,
                unit
            });
        };
        const l = getActiveSeries(e);
        n.state = {
            series: l,
            activeSeries: l
        };
        return n;
    }
    module37(r, [
        {
            key: "renderTitle",
            value: function() {
                const props = this.props;
                const { title, unit, renderTitle } = props;
                const l = renderTitle ? renderTitle() : module63(unit) ? t(title) : t("TITLE_UNIT", {
                    title: t(title),
                    unit
                });
                return <div className={module2175.title}>{l}</div>;
            }
        },
        {
            key: "renderCustomTooltip",
            value: function() {
                const props = this.props;
                const { renderTooltip, isTranslate, alert } = props;
                if (renderTooltip) {
                    return renderTooltip();
                }
                return <Module863 alert={alert} isTranslate={isTranslate}/>;
            }
        },
        {
            key: "renderLegend",
            value: function() {
                return <Module928 wrapperStyle={{
                    top: 0,
                    left: "auto",
                    right: 0,
                    width: "80%",
                    zIndex: 100
                }} content=<Module1087 isTranslate={this.props.isTranslate} showAll={this.props.showAll} extraLegend={this.props.extraLegend} activeSeries={this.state.activeSeries} onClick={this.handleLegendClick}/>/>;
            }
        },
        {
            key: "renderArea",
            value: function() {
                const props = this.props;
                const { unit, areaColors, yAxisId } = props;
                const state = this.state;
                const { series, activeSeries } = state;
                return series.map((e, n)=>{
                    const u = areaColors[n];
                    const i = COLORS_MAP[u] || u;
                    const c = {
                        fill: i,
                        fillOpacity: 0.1
                    };
                    if (new RegExp(`^${yAxisId}`).test(e)) {
                        c.yAxisId = yAxisId;
                    }
                    return <Module901 key={e} dataKey={e} stroke={i} activeDot=<Module947 r={4} stroke="#fff" strokeWidth={1} fill={i} fillOpacity={1}/> unit={unit} hide={!activeSeries.includes(e)} connectNulls {...c}/>;
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { theme, width, height, xKey, data, alert, xAxis, yAxis, yAxisId, showReferenceLabel, referenceLineColor } = props;
                const className = module3(module2175.chart, "chart", `chart-${theme}`);
                return <div className={className} style={{
                    width,
                    height
                }}>{this.renderTitle()}{module63(data) ? <p className={module2175.noData}>{t("NO_DATA")}</p> : <Module872 width={width} height={height} debounce={1}><Module948 data={data} margin={{
                    top: 42,
                    bottom: -20,
                    left: 13,
                    right: 13
                }}><Module930 stroke="#d8dee5" strokeDasharray="2 2" vertical={false}/><Module871 height={40} dataKey={xKey} axisLine={false} tickLine={false} interval="preserveStartEnd" minTickGap={60} tickMargin={12} {...xAxis}/><Module913 width={45} axisLine={false} tickLine={false} tickFormatter={this.tickFormatter} {...yAxis}/>{yAxisId && <Module913 width={45} axisLine={false} tickLine={false} yAxisId={yAxisId} orientation="right" tickFormatter={this.tickFormatter} {...yAxis}/>}<Module870 wrapperStyle={{
                    zIndex: 9999
                }} content={this.renderCustomTooltip()}/>{this.renderLegend()}{this.renderArea()}{!module63(alert) && <Module1513 y={alert.value} label={showReferenceLabel ? this.getAlertLabel() : undefined} stroke={COLORS_MAP[referenceLineColor]} strokeDasharray="3,2" isFront/>}</Module948></Module872>}</div>;
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
export default P;
P.propTypes = {
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
    bgColor: module1.string,
    areaColors: module1.array,
    renderTitle: module1.func,
    renderTooltip: module1.func,
    showReferenceLabel: module1.bool,
    referenceLineColor: module1.string
};
P.defaultProps = {
    theme: "light",
    width: "100%",
    height: 200,
    title: "Title",
    xKey: "time",
    unit: "",
    showAll: false,
    bgColor: COLORS_MAP.lightest,
    areaColors: [
        "green",
        "blue",
        "yellow",
        "red",
        "darkestGreen",
        "darkestBlue",
        "darkestYellow",
        "darkestRed",
        "lightestGreen",
        "lightestBlue",
        "lightestYellow",
        "lightestRed"
    ],
    data: [],
    showReferenceLabel: true,
    referenceLineColor: "red"
};
