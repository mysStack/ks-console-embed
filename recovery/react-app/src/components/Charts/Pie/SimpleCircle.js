import "unpacked/module-12.js";
import "unpacked/module-828.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-190.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-436.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import { getColorByName } from "utils/monitoring";
import Module928 from "unpacked/module-928.js";
import Module870 from "unpacked/module-870.js";
import Module1160 from "unpacked/module-1160.js";
import Module1035 from "unpacked/module-1035.js";
import Module1089 from "unpacked/module-1089.js";
import Module872 from "unpacked/module-872.js";
import module2185 from "unpacked/module-2185.js";
const T = ((Component_1)=>{
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
        n.getRate = function(e = 1) {
            if (n.total) {
                return (n.value / n.total * 100).toFixed(e);
            }
            return 0;
        };
        n.getPrimaryColor = function(e) {
            const t = e || {};
            const { areaColors, active, showRate, fixedColor, rateNum } = t;
            const i = n.getRate(rateNum);
            let c = module26(areaColors, [
                0
            ], "#fff");
            if (showRate && !fixedColor) {
                if (active) {
                    c = "white";
                }
                if (i >= 80) {
                    c = "yellow";
                }
                if (i >= 90) {
                    c = "red";
                }
            }
            return c;
        };
        n.getFills = function(e) {
            const t = e || {};
            const { areaColors, active } = t;
            const activeFill = {
                fill: getColorByName(n.getPrimaryColor(e))
            };
            const u = areaColors[1] || activeFill.fill;
            return {
                activeFill,
                totalFill: active ? {
                    fill: "#fff",
                    fillOpacity: 0.4
                } : {
                    fill: getColorByName(u),
                    fillOpacity: areaColors[1] ? 1 : 0.2
                }
            };
        };
        n.getData = function() {
            return [
                {
                    name: n.props.legend[0],
                    value: n.value
                },
                {
                    name: "Remaining",
                    value: n.remain
                }
            ];
        };
        n.renderActiveShape = function({ cx, cy, innerRadius, outerRadius, startAngle, endAngle } = {}) {
            return <g><Module1160 cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} {...n.state.activeFill}/></g>;
        };
        n.renderTooltip = function(e) {
            if (!e.active) {
                return null;
            }
            const n_props = n.props;
            const { title, legend, unit, value, total, showRate, rateNum, isShowTotalTooltip } = n_props;
            const d = unit === "%" ? "%" : ` ${unit}`;
            const m = showRate && ` (${n.getRate(rateNum)}%)`;
            return <div className={module2185.tooltip}><div className={module2185.label}>{t(title)}</div><div className={module2185.list}><div className={module2185.item}><i style={{
                background: n.state.activeFill.fill
            }}/><label>{t(legend[0])}:</label><p>{value}{d}{m}</p></div>{isShowTotalTooltip && <div className={module2185.item}><i style={{
                background: "#fff"
            }}/><label>{t(legend[1])}:</label><p>{total}{d}</p></div>}</div></div>;
        };
        n.state = {
            ...n.getFills(e)
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (e.active !== this.props.active) {
                    this.setState({
                        ...this.getFills(this.props)
                    });
                }
            }
        },
        {
            key: "renderCenter",
            value: function() {
                let e;
                const props = this.props;
                const { theme, value, total, showRate, showRatio, renderCustomCenter, showName, rateNum } = props;
                const f = this.getPrimaryColor(this.props);
                const d = showRate ? module31({}, module2185.standard, true) : showRatio ? (e = {}, module31(e, module2185.mid, value > 99 || total > 99), module31(e, module2185.mini, value > 999 || total > 999), e) : {};
                const m = showRate ? `${this.getRate(rateNum)}%` : showRatio ? <p><strong>{value}</strong><span>/</span>{total}</p> : null;
                return <div className={module3(module2185.center, module2185[f], d, module31({}, module2185.white, theme === "dark"))}>{showName && <p className={module2185["show-name"]}>{this.props.legend[0]}</p>}{renderCustomCenter ? renderCustomCenter({
                    value,
                    total
                }) : m}</div>;
            }
        },
        {
            key: "renderLegend",
            value: function() {
                const props = this.props;
                const { legend, areaColors } = props;
                return <Module928 wrapperStyle={{
                    bottom: 0,
                    zIndex: 100
                }} content={function({ payload }) {
                    const u = module61(payload);
                    if (!module63(u)) {
                        u[u.length - 1].value = legend[legend.length - 1];
                        u[u.length - 1].color = areaColors[u.length - 1] || "#fff";
                    }
                    return <div className={module2185.legend}>{u.map((e)=>{
                        const backgroundColor = module26(e, "payload.fill");
                        return <div key={e.dataKey} data-key={e.dataKey} className={module2185.item}><i style={{
                            backgroundColor
                        }}/>{t(e.value)}</div>;
                    })}</div>;
                }}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const { width, height, showCenter, innerRadius = "70%" } = this.props;
                const data = this.getData();
                return <div className={module2185.chart} style={{
                    width,
                    height
                }}>{showCenter && this.renderCenter()}<Module872 width="100%" height="100%" debounce={1}><Module1089><Module1035 data={data} dataKey="value" activeIndex={0} activeShape={this.renderActiveShape} innerRadius={innerRadius} outerRadius="100%" stroke="transparent" {...this.state.totalFill}/><Module870 wrapperStyle={{
                    zIndex: 100
                }} content={this.renderTooltip}/></Module1089></Module872></div>;
            }
        },
        {
            key: "value",
            get: function() {
                const e = parseFloat(this.props.value || 0);
                if (e > 0) {
                    return e;
                }
                return 0;
            }
        },
        {
            key: "total",
            get: function() {
                return parseFloat(this.props.total || 0);
            }
        },
        {
            key: "remain",
            get: function() {
                const e = this.total - this.value;
                if (this.total === 0) {
                    return 1;
                }
                return e;
            }
        }
    ]);
    return r;
})(Component);
export default T;
T.propTypes = {
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
    legend: module1.array,
    value: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    total: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    unit: module1.string,
    areaColors: module1.array,
    showCenter: module1.bool,
    showRate: module1.bool,
    showRatio: module1.bool,
    active: module1.bool,
    rateNum: module1.number,
    isShowTotalTooltip: module1.bool
};
T.defaultProps = {
    theme: "light",
    width: 100,
    height: 100,
    title: "",
    legend: [
        "USED",
        "TOTAL"
    ],
    value: 0,
    total: 0,
    unit: "",
    isShowTotalTooltip: true,
    areaColors: [
        "green"
    ],
    showCenter: true,
    showRate: false,
    showRatio: true,
    active: false,
    rateNum: 0
};
