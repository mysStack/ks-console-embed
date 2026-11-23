import module807 from "unpacked/module-807.js";
import module26 from "unpacked/module-26.js";
import module264 from "unpacked/module-264.js";
import module194 from "unpacked/module-194.js";
import module844 from "unpacked/module-844.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module991 from "unpacked/module-991.js";
import module3 from "unpacked/module-3.js";
import module869 from "unpacked/module-869.js";
import module1160 from "unpacked/module-1160.js";
import module1083 from "unpacked/module-1083.js";
import module1032 from "unpacked/module-1032.js";
import module998 from "unpacked/module-998.js";
import module1031 from "unpacked/module-1031.js";
import module999 from "unpacked/module-999.js";
import { EVENT_ATTRIBUTES, LEGEND_TYPES, PRESENTATION_ATTRIBUTES, TOOLTIP_TYPES, filterEventsOfChild, findAllByType, getPresentationAttributes, isSsr } from "unpacked/module-810.js";
import { getMaxRadius, polarToCartesian } from "unpacked/module-927.js";
import { getPercentValue, interpolateNumber, isNumber, mathSign, uniqueId } from "unpacked/module-827.js";
import { getValueByDataKey } from "unpacked/module-912.js";
import { warn } from "unpacked/module-1086.js";
function O() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    O = function() {
        return weakMap;
    };
    return weakMap;
}
function M(e) {
    return (M = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function T(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function P(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function L(e, t) {
    if (!t || M(t) !== "object" && typeof t !== "function") {
        return ((e)=>{
            if (e === undefined) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e;
        })(e);
    }
    return t;
}
function z(e) {
    return (z = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function N(e, t) {
    return (N = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const Pie = ((e)=>{
    function t(...o) {
        let n;
        T(this, t);
        n = L(this, z(t).call(this, ...o));
        n.state = {
            isAnimationFinished: false
        };
        n.id = uniqueId("recharts-pie-");
        n.cachePrevData = function(prevSectors) {
            n.setState({
                prevSectors
            });
        };
        n.handleAnimationEnd = function() {
            const onAnimationEnd = n.props.onAnimationEnd;
            n.setState({
                isAnimationFinished: true
            });
            if (module194(onAnimationEnd)) {
                onAnimationEnd();
            }
        };
        n.handleAnimationStart = function() {
            const onAnimationStart = n.props.onAnimationStart;
            n.setState({
                isAnimationFinished: false
            });
            if (module194(onAnimationStart)) {
                onAnimationStart();
            }
        };
        return n;
    }
    let n;
    let s;
    let m;
    ((e, t)=>{
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: true,
                configurable: true
            }
        });
        if (t) {
            N(e, t);
        }
    })(t, e);
    n = t;
    m = [
        {
            key: "getTextAnchor",
            value: function(e, t) {
                if (e > t) {
                    return "start";
                }
                if (e < t) {
                    return "end";
                }
                return "middle";
            }
        },
        {
            key: "renderLabelLineItem",
            value: function(e, t) {
                if (module553.default.isValidElement(e)) {
                    return module553.default.cloneElement(e, t);
                }
                if (module194(e)) {
                    return e(t);
                }
                return module553.default.createElement(module1083, {
                    ...t,
                    type: "linear",
                    className: "recharts-pie-label-line"
                });
            }
        },
        {
            key: "renderLabelItem",
            value: function(e, t, n) {
                if (module553.default.isValidElement(e)) {
                    return module553.default.cloneElement(e, t);
                }
                let r = n;
                if (module194(e) && (r = e(t), module553.default.isValidElement(r))) {
                    return r;
                }
                return module553.default.createElement(module1032, {
                    ...t,
                    alignmentBaseline: "middle",
                    className: "recharts-pie-label-text"
                }, r);
            }
        },
        {
            key: "renderSectorItem",
            value: function(e, t) {
                if (module553.default.isValidElement(e)) {
                    return module553.default.cloneElement(e, t);
                }
                if (module194(e)) {
                    return e(t);
                }
                if (module264(e)) {
                    return module553.default.createElement(module1160, {
                        ...t,
                        ...e
                    });
                }
                return module553.default.createElement(module1160, t);
            }
        }
    ];
    if (s = [
        {
            key: "componentWillReceiveProps",
            value: function(e) {
                const props = this.props;
                const { animationId, sectors } = props;
                if (e.isAnimationActive !== this.props.isAnimationActive) {
                    this.cachePrevData([]);
                } else if (e.animationId !== animationId) {
                    this.cachePrevData(sectors);
                }
            }
        },
        {
            key: "isActiveIndex",
            value: function(e) {
                const activeIndex = this.props.activeIndex;
                if (Array.isArray(activeIndex)) {
                    return activeIndex.indexOf(e) !== -1;
                }
                return e === activeIndex;
            }
        },
        {
            key: "renderLabels",
            value: function(e) {
                const _this = this;
                if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
                    return null;
                }
                const props = this.props;
                const { label, labelLine, dataKey, valueKey } = props;
                const s = getPresentationAttributes(this.props);
                const c = getPresentationAttributes(label);
                const f = getPresentationAttributes(labelLine);
                const p = label && label.offsetRadius || 20;
                const h = e.map((e, index)=>{
                    const h = (e.startAngle + e.endAngle) / 2;
                    const v = polarToCartesian(e.cx, e.cy, e.outerRadius + p, h);
                    const g = {
                        ...s,
                        ...e,
                        stroke: "none",
                        ...c,
                        index,
                        textAnchor: _this.constructor.getTextAnchor(v.x, e.cx),
                        ...v
                    };
                    const y = {
                        ...s,
                        ...e,
                        fill: "none",
                        stroke: e.fill,
                        ...f,
                        index,
                        points: [
                            polarToCartesian(e.cx, e.cy, e.outerRadius, h),
                            v
                        ],
                        key: "line"
                    };
                    let m = dataKey;
                    if (module844(dataKey) && module844(valueKey)) {
                        m = "value";
                    } else if (module844(dataKey)) {
                        m = valueKey;
                    }
                    return module553.default.createElement(module869, {
                        key: `label-${index}`
                    }, labelLine && _this.constructor.renderLabelLineItem(labelLine, y), _this.constructor.renderLabelItem(label, g, getValueByDataKey(e, m)));
                });
                return module553.default.createElement(module869, {
                    className: "recharts-pie-labels"
                }, h);
            }
        },
        {
            key: "renderSectorsStatically",
            value: function(e) {
                const _this = this;
                const props = this.props;
                const { activeShape, blendStroke } = props;
                return e.map((e, n)=>{
                    const i = _this.isActiveIndex(n) ? activeShape : null;
                    const a = {
                        ...e,
                        stroke: blendStroke ? e.fill : e.stroke
                    };
                    return module553.default.createElement(module869, {
                        className: "recharts-pie-sector",
                        ...filterEventsOfChild(_this.props, e, n),
                        key: `sector-${n}`
                    }, _this.constructor.renderSectorItem(i, a));
                });
            }
        },
        {
            key: "renderSectorsWithAnimation",
            value: function() {
                const _this = this;
                const props = this.props;
                const { sectors, isAnimationActive, animationBegin, animationDuration, animationEasing, animationId } = props;
                const prevSectors = this.state.prevSectors;
                return module553.default.createElement(module991, {
                    begin: animationBegin,
                    duration: animationDuration,
                    isActive: isAnimationActive,
                    easing: animationEasing,
                    from: {
                        t: 0
                    },
                    to: {
                        t: 1
                    },
                    key: `pie-${animationId}`,
                    onAnimationStart: this.handleAnimationStart,
                    onAnimationEnd: this.handleAnimationEnd
                }, function({ t: t_1 }) {
                    const i = [];
                    let startAngle = (sectors && sectors[0]).startAngle;
                    sectors.forEach((e, t)=>{
                        const n = prevSectors && prevSectors[t];
                        const l = t > 0 ? module26(e, "paddingAngle", 0) : 0;
                        if (n) {
                            const u = interpolateNumber(n.endAngle - n.startAngle, e.endAngle - e.startAngle);
                            const s = {
                                ...e,
                                startAngle: startAngle + l,
                                endAngle: startAngle + u(t_1) + l
                            };
                            i.push(s);
                            startAngle = s.endAngle;
                        } else {
                            const { endAngle, startAngle: startAngle_1 } = e;
                            const p = interpolateNumber(0, endAngle - startAngle_1)(t_1);
                            const h = {
                                ...e,
                                startAngle: startAngle + l,
                                endAngle: startAngle + p + l
                            };
                            i.push(h);
                            startAngle = h.endAngle;
                        }
                    });
                    return module553.default.createElement(module869, null, _this.renderSectorsStatically(i));
                });
            }
        },
        {
            key: "renderSectors",
            value: function() {
                const props = this.props;
                const { sectors, isAnimationActive } = props;
                const prevSectors = this.state.prevSectors;
                if (!(isAnimationActive && sectors && sectors.length) || prevSectors && module807(prevSectors, sectors)) {
                    return this.renderSectorsStatically(sectors);
                }
                return this.renderSectorsWithAnimation();
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { hide, sectors, className, label, cx, cy, innerRadius, outerRadius, isAnimationActive, prevSectors } = props;
                if (hide || !sectors || !sectors.length || !isNumber(cx) || !isNumber(cy) || !isNumber(innerRadius) || !isNumber(outerRadius)) {
                    return null;
                }
                const className_1 = module3("recharts-pie", className);
                return module553.default.createElement(module869, {
                    className: className_1
                }, this.renderSectors(), label && this.renderLabels(sectors), module998.renderCallByParent(this.props, null, false), (!isAnimationActive || prevSectors && module807(prevSectors, sectors)) && module1031.renderCallByParent(this.props, sectors, false));
            }
        }
    ]) {
        P(n.prototype, s);
    }
    if (m) {
        P(n, m);
    }
    return t;
})(module553.PureComponent);
Pie.displayName = "Pie";
Pie.propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    className: module1.string,
    animationId: module1.number,
    cx: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    cy: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    startAngle: module1.number,
    endAngle: module1.number,
    paddingAngle: module1.number,
    innerRadius: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    outerRadius: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    cornerRadius: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    dataKey: module1.oneOfType([
        module1.string,
        module1.number,
        module1.func
    ]).isRequired,
    nameKey: module1.oneOfType([
        module1.string,
        module1.number,
        module1.func
    ]),
    valueKey: module1.oneOfType([
        module1.string,
        module1.number,
        module1.func
    ]),
    data: module1.arrayOf(module1.object),
    blendStroke: module1.bool,
    minAngle: module1.number,
    legendType: module1.oneOf(LEGEND_TYPES),
    tooltipType: module1.oneOf(TOOLTIP_TYPES),
    maxRadius: module1.number,
    sectors: module1.arrayOf(module1.object),
    hide: module1.bool,
    labelLine: module1.oneOfType([
        module1.object,
        module1.func,
        module1.element,
        module1.bool
    ]),
    label: module1.oneOfType([
        module1.shape({
            offsetRadius: module1.number
        }),
        module1.func,
        module1.element,
        module1.bool
    ]),
    activeShape: module1.oneOfType([
        module1.object,
        module1.func,
        module1.element
    ]),
    activeIndex: module1.oneOfType([
        module1.number,
        module1.arrayOf(module1.number)
    ]),
    onAnimationStart: module1.func,
    onAnimationEnd: module1.func,
    isAnimationActive: module1.bool,
    animationBegin: module1.number,
    animationDuration: module1.number,
    animationEasing: module1.oneOf([
        "ease",
        "ease-in",
        "ease-out",
        "ease-in-out",
        "spring",
        "linear"
    ]),
    id: module1.string
};
Pie.defaultProps = {
    stroke: "#fff",
    fill: "#808080",
    legendType: "rect",
    cx: "50%",
    cy: "50%",
    startAngle: 0,
    endAngle: 360,
    innerRadius: 0,
    outerRadius: "80%",
    paddingAngle: 0,
    labelLine: true,
    hide: false,
    minAngle: 0,
    isAnimationActive: !isSsr(),
    animationBegin: 400,
    animationDuration: 1500,
    animationEasing: "ease",
    nameKey: "name",
    blendStroke: false
};
Pie.parseDeltaAngle = function({ startAngle, endAngle }) {
    return mathSign(endAngle - startAngle) * Math.min(Math.abs(endAngle - startAngle), 360);
};
Pie.getRealPieData = function(e) {
    const e_props = e.props;
    const { data, children } = e_props;
    const o = getPresentationAttributes(e.props);
    const i = findAllByType(children, module999);
    if (data && data.length) {
        return data.map((e, t)=>({
                payload: e,
                ...o,
                ...e,
                ...i && i[t] && i[t].props
            }));
    }
    if (i && i.length) {
        return i.map((e)=>({
                ...o,
                ...e.props
            }));
    }
    return [];
};
Pie.parseCoordinateOfPie = function(e, { top, left, width, height }) {
    const a = getMaxRadius(width, height);
    return {
        cx: left + getPercentValue(e.props.cx, width, width / 2),
        cy: top + getPercentValue(e.props.cy, height, height / 2),
        innerRadius: getPercentValue(e.props.innerRadius, a, 0),
        outerRadius: getPercentValue(e.props.outerRadius, a, 0.8 * a),
        maxRadius: e.props.maxRadius || Math.sqrt(width * width + height * height) / 2
    };
};
Pie.getComposedData = function({ item, offset, onItemMouseLeave, onItemMouseEnter }) {
    const i = Pie.getRealPieData(item);
    if (!i || !i.length) {
        return [];
    }
    const item_props = item.props;
    const { cornerRadius, startAngle, endAngle, paddingAngle, dataKey, nameKey, valueKey, tooltipType } = item_props;
    const g = Math.abs(item.props.minAngle);
    const y = Pie.parseCoordinateOfPie(item, offset);
    const i_length = i.length;
    const b = Pie.parseDeltaAngle({
        startAngle,
        endAngle
    });
    const O = Math.abs(b);
    const E = O - i_length * g - (O >= 360 ? i_length : i_length - 1) * paddingAngle;
    let dataKey_1 = dataKey;
    if (module844(dataKey) && module844(valueKey)) {
        warn(false, 'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0');
        dataKey_1 = "value";
    } else if (module844(dataKey)) {
        warn(false, 'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0');
        dataKey_1 = valueKey;
    }
    let sectors;
    let A;
    const j = i.reduce((acc, item_1)=>{
        const n = getValueByDataKey(item_1, dataKey_1, 0);
        return acc + (isNumber(n) ? n : 0);
    }, 0);
    if (j > 0) {
        sectors = i.map((e, t)=>{
            let startAngle_1;
            const r = getValueByDataKey(e, dataKey_1, 0);
            const name = getValueByDataKey(e, nameKey, t);
            const percent = (isNumber(r) ? r : 0) / j;
            const endAngle_1 = (startAngle_1 = t ? A.endAngle + mathSign(b) * paddingAngle : startAngle) + mathSign(b) * (g + percent * E);
            const midAngle = (startAngle_1 + endAngle_1) / 2;
            const middleRadius = (y.innerRadius + y.outerRadius) / 2;
            const tooltipPayload = [
                {
                    name,
                    value: r,
                    payload: e,
                    dataKey: dataKey_1,
                    type: tooltipType
                }
            ];
            const tooltipPosition = polarToCartesian(y.cx, y.cy, middleRadius, midAngle);
            return A = {
                percent,
                cornerRadius,
                name,
                tooltipPayload,
                midAngle,
                middleRadius,
                tooltipPosition,
                ...e,
                ...y,
                value: getValueByDataKey(e, dataKey_1),
                startAngle: startAngle_1,
                endAngle: endAngle_1,
                payload: e,
                paddingAngle: mathSign(b) * paddingAngle
            };
        });
    }
    return {
        ...y,
        sectors,
        data: i,
        onMouseLeave: onItemMouseLeave,
        onMouseEnter: onItemMouseEnter
    };
};
export default Pie;
