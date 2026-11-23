import module1159 from "unpacked/module-1159.js";
import module454 from "unpacked/module-454.js";
import module446 from "unpacked/module-446.js";
import module194 from "unpacked/module-194.js";
import module1085 from "unpacked/module-1085.js";
import module856 from "unpacked/module-856.js";
import module844 from "unpacked/module-844.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module1510 from "unpacked/module-1510.js";
import module869 from "unpacked/module-869.js";
import module870 from "unpacked/module-870.js";
import module928 from "unpacked/module-928.js";
import module1083 from "unpacked/module-1083.js";
import module2154 from "unpacked/module-2154.js";
import module1160 from "unpacked/module-1160.js";
import module947 from "unpacked/module-947.js";
import module1278 from "unpacked/module-1278.js";
import { filterEventAttributes, findAllByType, findChildByType, getDisplayName, getPresentationAttributes, getReactEventByType, isChildrenEqual, parseChildIndex, renderByOrder, validateWidthHeight } from "unpacked/module-810.js";
import module2155 from "unpacked/module-2155.js";
import module2156 from "unpacked/module-2156.js";
import { calculateChartCoordinate, getOffset } from "unpacked/module-1276.js";
import { findEntryInArray, getAnyElementOfObject, hasDuplicate, isNumber, uniqueId } from "unpacked/module-827.js";
import { appendOffsetOfLegend, calculateActiveTickIndex, combineEventHandlers, getBandSizeOfAxis, getBarPosition, getBarSizeList, getCoordinatesOfGrid, getDomainOfDataByKey, getDomainOfItemsWithSameAxis, getDomainOfStackGroups, getLegendProps, getMainColorOfGraphicItem, getStackGroupsByAxisId, getStackedDataOfItem, getTicksOfAxis, getValueByDataKey, isCategorialAxis, parseDomainOfCategoryAxis, parseErrorBarsOfAxis, parseSpecifiedDomain } from "unpacked/module-912.js";
import { detectReferenceElementsDomain } from "unpacked/module-2158.js";
import { inRangeOfSector, polarToCartesian } from "unpacked/module-927.js";
import { shallowEqual } from "unpacked/module-1275.js";
import module2162 from "unpacked/module-2162.js";
function P() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    P = function() {
        return weakMap;
    };
    return weakMap;
}
function z(e) {
    return (z = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function B(e, t, n) {
    if (t in e) {
        Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        e[t] = n;
    }
    return e;
}
function F(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function V(e) {
    return (V = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function $(e) {
    if (e === undefined) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return e;
}
function U(e, t) {
    return (U = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const Z = {
    xAxis: [
        "bottom",
        "top"
    ],
    yAxis: [
        "left",
        "right"
    ]
};
const W = {
    x: 0,
    y: 0
};
export default function({ chartName, GraphicalChild, eventType = "axis", axisComponents, legendContent, formatAxisMap, defaultProps, propTypes }) {
    const X = ((e)=>{
        function f(e) {
            let n;
            ((e, t)=>{
                if (!(e instanceof t)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            })(this, f);
            n = ((e, t)=>{
                if (!t || z(t) !== "object" && typeof t !== "function") {
                    return $(e);
                }
                return t;
            })(this, V(f).call(this, e));
            n.handleLegendBBoxUpdate = function(e) {
                if (e && n.legendInstance) {
                    const t = n.state;
                    const { dataStartIndex, dataEndIndex, updateId } = t;
                    n.setState(n.updateStateOfAxisMapsOffsetAndStackGroups({
                        props: n.props,
                        dataStartIndex,
                        dataEndIndex,
                        updateId
                    }));
                }
            };
            n.handleReceiveSyncEvent = function(e, t, r) {
                const n_props = n.props;
                const { syncId, layout } = n_props;
                const updateId = n.state.updateId;
                if (syncId === e && t !== n.uniqueChartId) {
                    const { dataStartIndex, dataEndIndex } = r;
                    if (module844(r.dataStartIndex) && module844(r.dataEndIndex)) {
                        if (module844(r.activeTooltipIndex)) {
                            n.setState(r);
                        } else {
                            const { chartX, chartY, activeTooltipIndex } = r;
                            const h = n.state;
                            const { offset, tooltipTicks } = h;
                            if (!offset) {
                                return;
                            }
                            const y = {
                                ...offset,
                                x: offset.left,
                                y: offset.top
                            };
                            const m = Math.min(chartX, y.x + y.width);
                            const b = Math.min(chartY, y.y + y.height);
                            const activeLabel = tooltipTicks[activeTooltipIndex] && tooltipTicks[activeTooltipIndex].value;
                            const activePayload = n.getTooltipContent(activeTooltipIndex);
                            const activeCoordinate = tooltipTicks[activeTooltipIndex] ? {
                                x: layout === "horizontal" ? tooltipTicks[activeTooltipIndex].coordinate : m,
                                y: layout === "horizontal" ? b : tooltipTicks[activeTooltipIndex].coordinate
                            } : W;
                            n.setState({
                                ...r,
                                activeLabel,
                                activeCoordinate,
                                activePayload
                            });
                        }
                    } else {
                        n.setState({
                            dataStartIndex,
                            dataEndIndex,
                            ...n.updateStateOfAxisMapsOffsetAndStackGroups({
                                props: n.props,
                                dataStartIndex,
                                dataEndIndex,
                                updateId
                            })
                        });
                    }
                }
            };
            n.handleBrushChange = function({ startIndex, endIndex }) {
                if (startIndex !== n.state.dataStartIndex || endIndex !== n.state.dataEndIndex) {
                    const o = n.state.updateId;
                    n.setState(function() {
                        return {
                            dataStartIndex: startIndex,
                            dataEndIndex: endIndex,
                            ...n.updateStateOfAxisMapsOffsetAndStackGroups({
                                props: n.props,
                                dataStartIndex: startIndex,
                                dataEndIndex: endIndex,
                                updateId: o
                            })
                        };
                    });
                    n.triggerSyncEvent({
                        dataStartIndex: startIndex,
                        dataEndIndex: endIndex
                    });
                }
            };
            n.handleMouseEnter = function(e) {
                const onMouseEnter = n.props.onMouseEnter;
                const r = n.getMouseInfo(e);
                if (r) {
                    const o = {
                        ...r,
                        isTooltipActive: true
                    };
                    n.setState(o);
                    n.triggerSyncEvent(o);
                    if (module194(onMouseEnter)) {
                        onMouseEnter(o, e);
                    }
                }
            };
            n.triggeredAfterMouseMove = function(e) {
                const onMouseMove = n.props.onMouseMove;
                const r = n.getMouseInfo(e);
                const o = r ? {
                    ...r,
                    isTooltipActive: true
                } : {
                    isTooltipActive: false
                };
                n.setState(o);
                n.triggerSyncEvent(o);
                if (module194(onMouseMove)) {
                    onMouseMove(o, e);
                }
            };
            n.handleItemMouseEnter = function(activeItem) {
                n.setState(function() {
                    return {
                        isTooltipActive: true,
                        activeItem,
                        activePayload: activeItem.tooltipPayload,
                        activeCoordinate: activeItem.tooltipPosition || {
                            x: activeItem.cx,
                            y: activeItem.cy
                        }
                    };
                });
            };
            n.handleItemMouseLeave = function() {
                n.setState(function() {
                    return {
                        isTooltipActive: false
                    };
                });
            };
            n.handleMouseMove = function(e) {
                if (e && module194(e.persist)) {
                    e.persist();
                }
                n.triggeredAfterMouseMove(e);
            };
            n.handleMouseLeave = function(e) {
                const onMouseLeave = n.props.onMouseLeave;
                const r = {
                    isTooltipActive: false
                };
                n.setState(r);
                n.triggerSyncEvent(r);
                if (module194(onMouseLeave)) {
                    onMouseLeave(r, e);
                }
            };
            n.handleOuterEvent = function(e) {
                const t = getReactEventByType(e);
                if (t && module194(n.props[t])) {
                    const r = n.getMouseInfo(e);
                    n.props[t](r, e);
                }
            };
            n.handleClick = function(e) {
                const onClick = n.props.onClick;
                if (module194(onClick)) {
                    onClick(n.getMouseInfo(e), e);
                }
            };
            n.handleMouseDown = function(e) {
                const onMouseDown = n.props.onMouseDown;
                if (module194(onMouseDown)) {
                    onMouseDown(n.getMouseInfo(e), e);
                }
            };
            n.handleMouseUp = function(e) {
                const onMouseUp = n.props.onMouseUp;
                if (module194(onMouseUp)) {
                    onMouseUp(n.getMouseInfo(e), e);
                }
            };
            n.handleTouchMove = function(e) {
                if (e.changedTouches != null && e.changedTouches.length > 0) {
                    n.handleMouseMove(e.changedTouches[0]);
                }
            };
            n.handleTouchStart = function(e) {
                if (e.changedTouches != null && e.changedTouches.length > 0) {
                    n.handleMouseDown(e.changedTouches[0]);
                }
            };
            n.handleTouchEnd = function(e) {
                if (e.changedTouches != null && e.changedTouches.length > 0) {
                    n.handleMouseUp(e.changedTouches[0]);
                }
            };
            n.verticalCoordinatesGenerator = function({ xAxis, width, height, offset }) {
                return getCoordinatesOfGrid(module2155.getTicks({
                    ...module2155.defaultProps,
                    ...xAxis,
                    ticks: getTicksOfAxis(xAxis, true),
                    viewBox: {
                        x: 0,
                        y: 0,
                        width,
                        height
                    }
                }), offset.left, offset.left + offset.width);
            };
            n.horizontalCoordinatesGenerator = function({ yAxis, width, height, offset }) {
                return getCoordinatesOfGrid(module2155.getTicks({
                    ...module2155.defaultProps,
                    ...yAxis,
                    ticks: getTicksOfAxis(yAxis, true),
                    viewBox: {
                        x: 0,
                        y: 0,
                        width,
                        height
                    }
                }), offset.top, offset.top + offset.height);
            };
            n.axesTicksGenerator = function(e) {
                return getTicksOfAxis(e, true);
            };
            n.tooltipTicksGenerator = function(e) {
                const tooltipAxis = getAnyElementOfObject(e);
                const tooltipTicks = getTicksOfAxis(tooltipAxis, false, true);
                return {
                    tooltipTicks,
                    orderedTooltipTicks: module446(tooltipTicks, function(e) {
                        return e.coordinate;
                    }),
                    tooltipAxis,
                    tooltipAxisBandSize: getBandSizeOfAxis(tooltipAxis)
                };
            };
            n.renderCursor = function(e) {
                const n_state = n.state;
                const { isTooltipActive, activeCoordinate, activePayload, offset } = n_state;
                if (!(e && e.props.cursor && isTooltipActive && activeCoordinate)) {
                    return null;
                }
                let u;
                const layout = n.props.layout;
                let f = module1083;
                if (chartName === "ScatterChart") {
                    u = activeCoordinate;
                    f = module2154;
                } else if (chartName === "BarChart") {
                    u = n.getCursorRectangle();
                    f = module1278;
                } else if (layout === "radial") {
                    const d = n.getCursorPoints();
                    const { cx, cy, radius } = d;
                    u = {
                        cx,
                        cy,
                        startAngle: d.startAngle,
                        endAngle: d.endAngle,
                        innerRadius: radius,
                        outerRadius: radius
                    };
                    f = module1160;
                } else {
                    u = {
                        points: n.getCursorPoints()
                    };
                    f = module1083;
                }
                const key = e.key || "_recharts-cursor";
                const x = {
                    stroke: "#ccc",
                    pointerEvents: "none",
                    ...offset,
                    ...u,
                    ...getPresentationAttributes(e.props.cursor),
                    payload: activePayload,
                    key,
                    className: "recharts-tooltip-cursor"
                };
                if (module553.isValidElement(e.props.cursor)) {
                    return module553.cloneElement(e.props.cursor, x);
                }
                return module553.createElement(f, x);
            };
            n.renderPolarAxis = function(e, t, r) {
                const axisType = e.type.axisType;
                const i = n.state[`${axisType}Map`][e.props[`${axisType}Id`]];
                return module553.cloneElement(e, {
                    ...i,
                    className: axisType,
                    key: e.key || `${t}-${r}`,
                    ticks: getTicksOfAxis(i, true)
                });
            };
            n.renderXAxis = function(e, t, r) {
                const o = n.state.xAxisMap[e.props.xAxisId];
                return n.renderAxis(o, e, t, r);
            };
            n.renderYAxis = function(e, t, r) {
                const o = n.state.yAxisMap[e.props.yAxisId];
                return n.renderAxis(o, e, t, r);
            };
            n.renderGrid = function(e) {
                const n_state = n.state;
                const { xAxisMap, yAxisMap, offset } = n_state;
                const n_props = n.props;
                const { width, height } = n_props;
                const xAxis = getAnyElementOfObject(xAxisMap);
                const yAxis = module454(yAxisMap, function(e) {
                    return module1159(e.domain, Number.isFinite);
                }) || getAnyElementOfObject(yAxisMap);
                const h = e.props || {};
                return module553.cloneElement(e, {
                    key: e.key || "grid",
                    x: isNumber(h.x) ? h.x : offset.left,
                    y: isNumber(h.y) ? h.y : offset.top,
                    width: isNumber(h.width) ? h.width : offset.width,
                    height: isNumber(h.height) ? h.height : offset.height,
                    xAxis,
                    yAxis,
                    offset,
                    chartWidth: width,
                    chartHeight: height,
                    verticalCoordinatesGenerator: h.verticalCoordinatesGenerator || n.verticalCoordinatesGenerator,
                    horizontalCoordinatesGenerator: h.horizontalCoordinatesGenerator || n.horizontalCoordinatesGenerator
                });
            };
            n.renderPolarGrid = function(e) {
                const n_state = n.state;
                const { radiusAxisMap, angleAxisMap } = n_state;
                const i = getAnyElementOfObject(radiusAxisMap);
                const a = getAnyElementOfObject(angleAxisMap);
                const { cx, cy, innerRadius, outerRadius } = a;
                return module553.cloneElement(e, {
                    polarAngles: getTicksOfAxis(a, true).map((e)=>e.coordinate),
                    polarRadius: getTicksOfAxis(i, true).map((e)=>e.coordinate),
                    cx,
                    cy,
                    innerRadius,
                    outerRadius,
                    key: e.key || "polar-grid"
                });
            };
            n.renderBrush = function(e) {
                const n_props = n.props;
                const { margin, data } = n_props;
                const n_state = n.state;
                const { offset, dataStartIndex, dataEndIndex, updateId } = n_state;
                return module553.cloneElement(e, {
                    key: e.key || "_recharts-brush",
                    onChange: combineEventHandlers(n.handleBrushChange, null, e.props.onChange),
                    data,
                    x: isNumber(e.props.x) ? e.props.x : offset.left,
                    y: isNumber(e.props.y) ? e.props.y : offset.top + offset.height + offset.brushBottom - (margin.bottom || 0),
                    width: isNumber(e.props.width) ? e.props.width : offset.width,
                    startIndex: dataStartIndex,
                    endIndex: dataEndIndex,
                    updateId: `brush-${updateId}`
                });
            };
            n.renderReferenceElement = function(e, t, r) {
                if (!e) {
                    return null;
                }
                const clipPathId = $(n).clipPathId;
                const n_state = n.state;
                const { xAxisMap, yAxisMap, offset } = n_state;
                const e_props = e.props;
                const { xAxisId, yAxisId } = e_props;
                return module553.cloneElement(e, {
                    key: e.key || `${t}-${r}`,
                    xAxis: xAxisMap[xAxisId],
                    yAxis: yAxisMap[yAxisId],
                    viewBox: {
                        x: offset.left,
                        y: offset.top,
                        width: offset.width,
                        height: offset.height
                    },
                    clipPathId
                });
            };
            n.renderGraphicChild = function(e, t, r) {
                const o = n.filterFormatItem(e, t, r);
                if (!o) {
                    return null;
                }
                const i = module553.cloneElement(e, o.props);
                const n_state = n.state;
                const { isTooltipActive, tooltipAxis, activeTooltipIndex, activeLabel } = n_state;
                const children = n.props.children;
                const h = findChildByType(children, module870);
                const o_props = o.props;
                const { points, isRange, baseLine } = o_props;
                const props = o.item.props;
                const x_activeDot = props.activeDot;
                if (!props.hide && isTooltipActive && h && x_activeDot && activeTooltipIndex >= 0) {
                    let activePoint;
                    let basePoint;
                    if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
                        const E = typeof tooltipAxis.dataKey === "function" ? function(e) {
                            return tooltipAxis.dataKey(e.payload);
                        } : `payload.${tooltipAxis.dataKey}`;
                        activePoint = findEntryInArray(points, E, activeLabel);
                        basePoint = isRange && baseLine && findEntryInArray(baseLine, E, activeLabel);
                    } else {
                        activePoint = points[activeTooltipIndex];
                        basePoint = isRange && baseLine && baseLine[activeTooltipIndex];
                    }
                    if (!module844(activePoint)) {
                        return [
                            i,
                            ...n.renderActivePoints({
                                item: o,
                                activePoint,
                                basePoint,
                                childIndex: activeTooltipIndex,
                                isRange
                            })
                        ];
                    }
                }
                if (isRange) {
                    return [
                        i,
                        null,
                        null
                    ];
                }
                return [
                    i,
                    null
                ];
            };
            n.renderCustomized = function(e) {
                return module553.cloneElement(e, {
                    ...n.props,
                    ...n.state
                });
            };
            const l = n.constructor.createDefaultState(e);
            n.state = {
                ...l,
                updateId: 0,
                ...n.updateStateOfAxisMapsOffsetAndStackGroups({
                    props: e,
                    ...l,
                    updateId: 0
                })
            };
            n.uniqueChartId = module844(e.id) ? uniqueId("recharts") : e.id;
            n.clipPathId = `${n.uniqueChartId}-clip`;
            if (e.throttleDelay) {
                n.triggeredAfterMouseMove = module856(n.triggeredAfterMouseMove, e.throttleDelay);
            }
            return n;
        }
        let P;
        let q;
        let Y;
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
                U(e, t);
            }
        })(f, e);
        P = f;
        Y = [
            {
                key: "getAxisNameByLayout",
                value: function(e) {
                    switch(e){
                        case "horizontal":
                            return {
                                numericAxisName: "yAxis",
                                cateAxisName: "xAxis"
                            };
                        case "vertical":
                            return {
                                numericAxisName: "xAxis",
                                cateAxisName: "yAxis"
                            };
                        case "centric":
                            return {
                                numericAxisName: "radiusAxis",
                                cateAxisName: "angleAxis"
                            };
                        default:
                            return {
                                numericAxisName: "angleAxis",
                                cateAxisName: "radiusAxis"
                            };
                    }
                }
            },
            {
                key: "renderActiveDot",
                value: function(e, t) {
                    let n;
                    n = module553.isValidElement(e) ? module553.cloneElement(e, t) : module194(e) ? e(t) : module553.default.createElement(module947, t);
                    return module553.default.createElement(module869, {
                        className: "recharts-active-dot",
                        key: t.key
                    }, n);
                }
            }
        ];
        if (q = [
            {
                key: "componentDidMount",
                value: function() {
                    if (!module844(this.props.syncId)) {
                        this.addListener();
                    }
                }
            },
            {
                key: "componentWillReceiveProps",
                value: function(e) {
                    const _this = this;
                    const props = this.props;
                    const { data, children, width, height, layout, stackOffset, margin } = props;
                    const updateId = this.state.updateId;
                    if (e.data === data && e.width === width && e.height === height && e.layout === layout && e.stackOffset === stackOffset && shallowEqual(e.margin, margin)) {
                        if (!isChildrenEqual(e.children, children)) {
                            const d = module844(e.data) ? updateId + 1 : updateId;
                            this.setState(function(n) {
                                return {
                                    updateId: d,
                                    ..._this.updateStateOfAxisMapsOffsetAndStackGroups({
                                        props: e,
                                        ...n,
                                        updateId: d
                                    })
                                };
                            });
                        }
                    } else {
                        const p = this.constructor.createDefaultState(e);
                        this.setState({
                            ...p,
                            updateId: updateId + 1,
                            ...this.updateStateOfAxisMapsOffsetAndStackGroups({
                                props: e,
                                ...p,
                                updateId: updateId + 1
                            })
                        });
                    }
                    if (module844(this.props.syncId) && !module844(e.syncId)) {
                        this.addListener();
                    }
                    if (!module844(this.props.syncId) && module844(e.syncId)) {
                        this.removeListener();
                    }
                }
            },
            {
                key: "componentWillUnmount",
                value: function() {
                    if (!module844(this.props.syncId)) {
                        this.removeListener();
                    }
                    if (typeof this.triggeredAfterMouseMove.cancel === "function") {
                        this.triggeredAfterMouseMove.cancel();
                    }
                }
            },
            {
                key: "getAxisMap",
                value: function(e, { axisType = "xAxis", AxisComp, graphicalItems, stackGroups, dataStartIndex, dataEndIndex }) {
                    const e_children = e.children;
                    const axisIdKey = `${axisType}Id`;
                    const axes = findAllByType(e_children, AxisComp);
                    let d = {};
                    if (axes && axes.length) {
                        d = this.getAxisMapByAxes(e, {
                            axes,
                            graphicalItems,
                            axisType,
                            axisIdKey,
                            stackGroups,
                            dataStartIndex,
                            dataEndIndex
                        });
                    } else if (graphicalItems && graphicalItems.length) {
                        d = this.getAxisMapByItems(e, {
                            Axis: AxisComp,
                            graphicalItems,
                            axisType,
                            axisIdKey,
                            stackGroups,
                            dataStartIndex,
                            dataEndIndex
                        });
                    }
                    return d;
                }
            },
            {
                key: "getAxisMapByAxes",
                value: function(e, t) {
                    const _this = this;
                    const { axes, graphicalItems, axisType, axisIdKey, stackGroups, dataStartIndex, dataEndIndex } = t;
                    const { layout, children, stackOffset } = e;
                    const v = isCategorialAxis(layout, axisType);
                    return axes.reduce((acc, item)=>{
                        const r_props = item.props;
                        const { type, dataKey, allowDataOverflow, allowDuplicatedCategory, scale, ticks } = r_props;
                        const C = item.props[axisIdKey];
                        const O = _this.constructor.getDisplayedData(e, {
                            graphicalItems: graphicalItems.filter((e)=>e.props[axisIdKey] === C),
                            dataStartIndex,
                            dataEndIndex
                        });
                        const O_length = O.length;
                        if (!acc[C]) {
                            let k;
                            let duplicateDomain;
                            let categoricalDomain;
                            if (dataKey) {
                                k = getDomainOfDataByKey(O, dataKey, type);
                                if (type === "category" && v) {
                                    const P = hasDuplicate(k);
                                    if (allowDuplicatedCategory && P) {
                                        duplicateDomain = k;
                                        k = module1085(0, O_length);
                                    } else if (!allowDuplicatedCategory) {
                                        k = parseDomainOfCategoryAxis(item.props.domain, k, item).reduce((acc_1, item_1)=>{
                                            if (acc_1.indexOf(item_1) >= 0) {
                                                return acc_1;
                                            }
                                            return [
                                                ...acc_1,
                                                item_1
                                            ];
                                        }, []);
                                    }
                                } else if (type === "category") {
                                    k = allowDuplicatedCategory ? k.filter((e)=>e !== "" && !module844(e)) : parseDomainOfCategoryAxis(item.props.domain, k, item).reduce((acc_1, item_1)=>{
                                        if (acc_1.indexOf(item_1) >= 0 || item_1 === "" || module844(item_1)) {
                                            return acc_1;
                                        }
                                        return [
                                            ...acc_1,
                                            item_1
                                        ];
                                    }, []);
                                } else if (type === "number") {
                                    const L = parseErrorBarsOfAxis(O, graphicalItems.filter((e)=>e.props[axisIdKey] === C && !e.props.hide), dataKey, axisType);
                                    if (L) {
                                        k = L;
                                    }
                                }
                                if (!(!v || type !== "number" && scale === "auto")) {
                                    categoricalDomain = getDomainOfDataByKey(O, dataKey, "category");
                                }
                            } else {
                                k = v ? module1085(0, O_length) : stackGroups && stackGroups[C] && stackGroups[C].hasStack && type === "number" ? stackOffset === "expand" ? [
                                    0,
                                    1
                                ] : getDomainOfStackGroups(stackGroups[C].stackGroups, dataStartIndex, dataEndIndex) : getDomainOfItemsWithSameAxis(O, graphicalItems.filter((e)=>e.props[axisIdKey] === C && !e.props.hide), type, true);
                            }
                            if (type === "number") {
                                k = detectReferenceElementsDomain(children, k, C, axisType, ticks);
                                if (item.props.domain) {
                                    k = parseSpecifiedDomain(item.props.domain, k, allowDataOverflow);
                                }
                            }
                            return {
                                ...acc,
                                ...{
                                    [C]: {
                                        ...item.props,
                                        axisType,
                                        domain: k,
                                        categoricalDomain,
                                        duplicateDomain,
                                        originalDomain: item.props.domain,
                                        isCategorial: v,
                                        layout
                                    }
                                }
                            };
                        }
                        return acc;
                    }, {});
                }
            },
            {
                key: "getAxisMapByItems",
                value: function(e, { graphicalItems, Axis, axisType, axisIdKey, stackGroups, dataStartIndex, dataEndIndex }) {
                    const { layout, children } = e;
                    const d = this.constructor.getDisplayedData(e, {
                        graphicalItems,
                        dataStartIndex,
                        dataEndIndex
                    });
                    const d_length = d.length;
                    const h = isCategorialAxis(layout, axisType);
                    let v = -1;
                    return graphicalItems.reduce((acc, graphicalItem)=>{
                        let g;
                        const y = graphicalItem.props[axisIdKey];
                        if (acc[y]) {
                            return acc;
                        }
                        v++;
                        if (h) {
                            g = module1085(0, d_length);
                        } else if (stackGroups && stackGroups[y] && stackGroups[y].hasStack) {
                            g = getDomainOfStackGroups(stackGroups[y].stackGroups, dataStartIndex, dataEndIndex);
                            g = detectReferenceElementsDomain(children, g, y, axisType);
                        } else {
                            g = parseSpecifiedDomain(Axis.defaultProps.domain, getDomainOfItemsWithSameAxis(d, graphicalItems.filter((e)=>e.props[axisIdKey] === y && !e.props.hide), "number"), Axis.defaultProps.allowDataOverflow);
                            g = detectReferenceElementsDomain(children, g, y, axisType);
                        }
                        return {
                            ...acc,
                            ...{
                                [y]: {
                                    axisType,
                                    ...Axis.defaultProps,
                                    hide: true,
                                    orientation: Z[axisType] && Z[axisType][v % 2],
                                    domain: g,
                                    originalDomain: Axis.defaultProps.domain,
                                    isCategorial: h,
                                    layout
                                }
                            }
                        };
                    }, {});
                }
            },
            {
                key: "getActiveCoordinate",
                value: function(e, t, n) {
                    const layout = this.props.layout;
                    const o = e.find((e)=>e && e.index === t);
                    if (o) {
                        if (layout === "horizontal") {
                            return {
                                x: o.coordinate,
                                y: n.y
                            };
                        }
                        if (layout === "vertical") {
                            return {
                                x: n.x,
                                y: o.coordinate
                            };
                        }
                        if (layout === "centric") {
                            const i = o.coordinate;
                            const a = n.radius;
                            return {
                                ...n,
                                ...polarToCartesian(n.cx, n.cy, a, i),
                                angle: i,
                                radius: a
                            };
                        }
                        const l = o.coordinate;
                        const u = n.angle;
                        return {
                            ...n,
                            ...polarToCartesian(n.cx, n.cy, l, u),
                            angle: u,
                            radius: l
                        };
                    }
                    return W;
                }
            },
            {
                key: "getMouseInfo",
                value: function(e) {
                    if (!this.container) {
                        return null;
                    }
                    const t = getOffset(this.container);
                    const n = calculateChartCoordinate(e, t);
                    const r = this.inRange(n.chartX, n.chartY);
                    if (!r) {
                        return null;
                    }
                    const state = this.state;
                    const { xAxisMap, yAxisMap } = state;
                    if (eventType !== "axis" && xAxisMap && yAxisMap) {
                        const l = getAnyElementOfObject(xAxisMap).scale;
                        const u = getAnyElementOfObject(yAxisMap).scale;
                        return {
                            ...n,
                            xValue: l && l.invert ? l.invert(n.chartX) : null,
                            yValue: u && u.invert ? u.invert(n.chartY) : null
                        };
                    }
                    const state_1 = this.state;
                    const { orderedTooltipTicks, tooltipAxis, tooltipTicks } = state_1;
                    const p = this.calculateTooltipPos(r);
                    const activeTooltipIndex = calculateActiveTickIndex(p, orderedTooltipTicks, tooltipTicks, tooltipAxis);
                    if (activeTooltipIndex >= 0 && tooltipTicks) {
                        const activeLabel = tooltipTicks[activeTooltipIndex] && tooltipTicks[activeTooltipIndex].value;
                        return {
                            ...n,
                            activeTooltipIndex,
                            activeLabel,
                            activePayload: this.getTooltipContent(activeTooltipIndex, activeLabel),
                            activeCoordinate: this.getActiveCoordinate(orderedTooltipTicks, activeTooltipIndex, r)
                        };
                    }
                    return null;
                }
            },
            {
                key: "getTooltipContent",
                value: function(e, t) {
                    const state = this.state;
                    const { graphicalItems, tooltipAxis } = state;
                    const i = this.constructor.getDisplayedData(this.props, this.state);
                    if (e < 0 || !graphicalItems || !graphicalItems.length || e >= i.length) {
                        return null;
                    }
                    return graphicalItems.reduce((acc, graphicalItem)=>{
                        if (graphicalItem.props.hide) {
                            return acc;
                        }
                        let payload;
                        const r_props = graphicalItem.props;
                        const { dataKey, name, unit, formatter, data, tooltipType } = r_props;
                        if (payload = tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory ? findEntryInArray(data || i, tooltipAxis.dataKey, t) : data && data[e] || i[e]) {
                            return [
                                ...acc,
                                {
                                    ...getPresentationAttributes(graphicalItem),
                                    dataKey,
                                    unit,
                                    formatter,
                                    name: name || dataKey,
                                    color: getMainColorOfGraphicItem(graphicalItem),
                                    value: getValueByDataKey(payload, dataKey),
                                    type: tooltipType,
                                    payload
                                }
                            ];
                        }
                        return acc;
                    }, []);
                }
            },
            {
                key: "getFormatItems",
                value: function(e, t) {
                    const _this = this;
                    const { graphicalItems, stackGroups, offset, updateId, dataStartIndex, dataEndIndex } = t;
                    const { barSize, layout, barGap, barCategoryGap, maxBarSize } = e;
                    const v = this.constructor.getAxisNameByLayout(layout);
                    const { numericAxisName, cateAxisName } = v;
                    const m = this.constructor.hasBar(graphicalItems);
                    const b = m && getBarSizeList({
                        barSize,
                        stackGroups
                    });
                    const x = [];
                    graphicalItems.forEach((r, c)=>{
                        let v;
                        const displayedData = _this.constructor.getDisplayedData(e, {
                            dataStartIndex,
                            dataEndIndex
                        }, r);
                        const r_props = r.props;
                        const { dataKey, maxBarSize: maxBarSize_1 } = r_props;
                        const M = r.props[`${numericAxisName}Id`];
                        const A = r.props[`${cateAxisName}Id`];
                        const k = axisComponents.reduce((acc, axisComponent)=>{
                            let o;
                            const i = t[`${axisComponent.axisType}Map`];
                            const a = r.props[`${axisComponent.axisType}Id`];
                            const l = i && i[a];
                            return {
                                ...acc,
                                ...(B(o = {}, axisComponent.axisType, l), B(o, `${axisComponent.axisType}Ticks`, getTicksOfAxis(l)), o)
                            };
                        }, {});
                        const j = k[cateAxisName];
                        const T = k[`${cateAxisName}Ticks`];
                        const stackedData = stackGroups && stackGroups[M] && stackGroups[M].hasStack && getStackedDataOfItem(r, stackGroups[M].stackGroups);
                        const bandSize = getBandSizeOfAxis(j, T);
                        const maxBarSize_2 = module844(maxBarSize_1) ? maxBarSize : maxBarSize_1;
                        const barPosition = m && getBarPosition({
                            barGap,
                            barCategoryGap,
                            bandSize,
                            sizeList: b[A],
                            maxBarSize: maxBarSize_2
                        });
                        const D = r && r.type && r.type.getComposedData;
                        if (D) {
                            x.push({
                                props: {
                                    ...D({
                                        ...k,
                                        displayedData,
                                        props: e,
                                        dataKey,
                                        item: r,
                                        bandSize,
                                        barPosition,
                                        offset,
                                        stackedData,
                                        layout,
                                        dataStartIndex,
                                        dataEndIndex,
                                        onItemMouseLeave: combineEventHandlers(_this.handleItemMouseLeave, null, r.props.onMouseLeave),
                                        onItemMouseEnter: combineEventHandlers(_this.handleItemMouseEnter, null, r.props.onMouseEnter)
                                    }),
                                    ...(v = {
                                        key: r.key || `item-${c}`
                                    }, B(v, numericAxisName, k[numericAxisName]), B(v, cateAxisName, k[cateAxisName]), B(v, "animationId", updateId), v)
                                },
                                childIndex: parseChildIndex(r, e.children),
                                item: r
                            });
                        }
                    });
                    return x;
                }
            },
            {
                key: "getCursorRectangle",
                value: function() {
                    const layout = this.props.layout;
                    const state = this.state;
                    const { activeCoordinate, offset, tooltipAxisBandSize } = state;
                    const i = tooltipAxisBandSize / 2;
                    return {
                        stroke: "none",
                        fill: "#ccc",
                        x: layout === "horizontal" ? activeCoordinate.x - i : offset.left + 0.5,
                        y: layout === "horizontal" ? offset.top + 0.5 : activeCoordinate.y - i,
                        width: layout === "horizontal" ? tooltipAxisBandSize : offset.width - 1,
                        height: layout === "horizontal" ? offset.height - 1 : tooltipAxisBandSize
                    };
                }
            },
            {
                key: "getCursorPoints",
                value: function() {
                    let e;
                    let t;
                    let n;
                    let r;
                    const layout = this.props.layout;
                    const state = this.state;
                    const { activeCoordinate, offset } = state;
                    if (layout === "horizontal") {
                        n = e = activeCoordinate.x;
                        t = offset.top;
                        r = offset.top + offset.height;
                    } else if (layout === "vertical") {
                        r = t = activeCoordinate.y;
                        e = offset.left;
                        n = offset.left + offset.width;
                    } else if (!module844(activeCoordinate.cx) || !module844(activeCoordinate.cy)) {
                        if (layout !== "centric") {
                            const { cx: cx_1, cy: cy_1, radius, startAngle, endAngle } = activeCoordinate;
                            return {
                                points: [
                                    polarToCartesian(cx_1, cy_1, radius, startAngle),
                                    polarToCartesian(cx_1, cy_1, radius, endAngle)
                                ],
                                cx: cx_1,
                                cy: cy_1,
                                radius,
                                startAngle,
                                endAngle
                            };
                        }
                        const { cx, cy, innerRadius, outerRadius, angle } = activeCoordinate;
                        const b = polarToCartesian(cx, cy, innerRadius, angle);
                        const x = polarToCartesian(cx, cy, outerRadius, angle);
                        e = b.x;
                        t = b.y;
                        n = x.x;
                        r = x.y;
                    }
                    return [
                        {
                            x: e,
                            y: t
                        },
                        {
                            x: n,
                            y: r
                        }
                    ];
                }
            },
            {
                key: "calculateTooltipPos",
                value: function(e) {
                    const layout = this.props.layout;
                    switch(layout){
                        case "horizontal":
                            return e.x;
                        case "vertical":
                            return e.y;
                        case "centric":
                            return e.angle;
                        default:
                            return e.radius;
                    }
                }
            },
            {
                key: "inRange",
                value: function(e, t) {
                    const layout = this.props.layout;
                    if (layout === "horizontal" || layout === "vertical") {
                        const r = this.state.offset;
                        if (e >= r.left && e <= r.left + r.width && t >= r.top && t <= r.top + r.height) {
                            return {
                                x: e,
                                y: t
                            };
                        }
                        return null;
                    }
                    const state = this.state;
                    const { angleAxisMap, radiusAxisMap } = state;
                    if (angleAxisMap && radiusAxisMap) {
                        const l = getAnyElementOfObject(angleAxisMap);
                        return inRangeOfSector({
                            x: e,
                            y: t
                        }, l);
                    }
                    return null;
                }
            },
            {
                key: "parseEventsOfWrapper",
                value: function() {
                    const children = this.props.children;
                    const t = findChildByType(children, module870) && eventType === "axis" ? {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseMove: this.handleMouseMove,
                        onMouseLeave: this.handleMouseLeave,
                        onTouchMove: this.handleTouchMove,
                        onTouchStart: this.handleTouchStart,
                        onTouchEnd: this.handleTouchEnd
                    } : {};
                    return {
                        ...filterEventAttributes(this.props, this.handleOuterEvent),
                        ...t
                    };
                }
            },
            {
                key: "updateStateOfAxisMapsOffsetAndStackGroups",
                value: function(e) {
                    const _this = this;
                    const { props, dataStartIndex, dataEndIndex, updateId } = e;
                    if (!validateWidthHeight({
                        props
                    })) {
                        return null;
                    }
                    const { children, layout, stackOffset, data, reverseStackOrder } = props;
                    const p = this.constructor.getAxisNameByLayout(layout);
                    const { numericAxisName, cateAxisName } = p;
                    const graphicalItems = findAllByType(children, GraphicalChild);
                    const stackGroups = getStackGroupsByAxisId(data, graphicalItems, `${numericAxisName}Id`, `${cateAxisName}Id`, stackOffset, reverseStackOrder);
                    const m = axisComponents.reduce((acc, axisComponent)=>({
                            ...acc,
                            ...{
                                [`${axisComponent.axisType}Map`]: _this.getAxisMap(props, {
                                    ...axisComponent,
                                    graphicalItems,
                                    stackGroups: axisComponent.axisType === numericAxisName && stackGroups,
                                    dataStartIndex,
                                    dataEndIndex
                                })
                            }
                        }), {});
                    const offset = this.calculateOffset({
                        ...m,
                        props,
                        graphicalItems
                    });
                    Object.keys(m).forEach((e)=>{
                        m[e] = formatAxisMap(props, m[e], offset, e.replace("Map", ""), chartName);
                    });
                    const x = m[`${cateAxisName}Map`];
                    const w = this.tooltipTicksGenerator(x);
                    const formatedGraphicalItems = this.getFormatItems(props, {
                        ...m,
                        dataStartIndex,
                        dataEndIndex,
                        updateId,
                        graphicalItems,
                        stackGroups,
                        offset
                    });
                    return {
                        formatedGraphicalItems,
                        graphicalItems,
                        offset,
                        stackGroups,
                        ...w,
                        ...m
                    };
                }
            },
            {
                key: "addListener",
                value: function() {
                    module2162.eventCenter.on(module2162.SYNC_EVENT, this.handleReceiveSyncEvent);
                    if (module2162.eventCenter.setMaxListeners && module2162.eventCenter._maxListeners) {
                        module2162.eventCenter.setMaxListeners(module2162.eventCenter._maxListeners + 1);
                    }
                }
            },
            {
                key: "removeListener",
                value: function() {
                    module2162.eventCenter.removeListener(module2162.SYNC_EVENT, this.handleReceiveSyncEvent);
                    if (module2162.eventCenter.setMaxListeners && module2162.eventCenter._maxListeners) {
                        module2162.eventCenter.setMaxListeners(module2162.eventCenter._maxListeners - 1);
                    }
                }
            },
            {
                key: "calculateOffset",
                value: function({ props, graphicalItems, xAxisMap = {}, yAxisMap = {} }) {
                    const { width, height, children } = props;
                    const c = props.margin || {};
                    const f = findChildByType(children, module2156);
                    const d = findChildByType(children, module928);
                    const p = Object.keys(yAxisMap).reduce((acc, key)=>{
                        const n = yAxisMap[key];
                        const n_orientation = n.orientation;
                        if (n.mirror || n.hide) {
                            return acc;
                        }
                        return {
                            ...acc,
                            ...{
                                [n_orientation]: acc[n_orientation] + n.width
                            }
                        };
                    }, {
                        left: c.left || 0,
                        right: c.right || 0
                    });
                    const h = Object.keys(xAxisMap).reduce((acc, key)=>{
                        const n = xAxisMap[key];
                        const n_orientation = n.orientation;
                        if (n.mirror || n.hide) {
                            return acc;
                        }
                        return {
                            ...acc,
                            ...{
                                [n_orientation]: acc[n_orientation] + n.height
                            }
                        };
                    }, {
                        top: c.top || 0,
                        bottom: c.bottom || 0
                    });
                    let v = {
                        ...h,
                        ...p
                    };
                    const v_bottom = v.bottom;
                    if (f) {
                        v.bottom += f.props.height || module2156.defaultProps.height;
                    }
                    if (d && this.legendInstance) {
                        const m = this.legendInstance.getBBox();
                        v = appendOffsetOfLegend(v, graphicalItems, props, m);
                    }
                    return {
                        brushBottom: v_bottom,
                        ...v,
                        width: width - v.left - v.right,
                        height: height - v.top - v.bottom
                    };
                }
            },
            {
                key: "triggerSyncEvent",
                value: function(e) {
                    const syncId = this.props.syncId;
                    if (!module844(syncId)) {
                        module2162.eventCenter.emit(module2162.SYNC_EVENT, syncId, this.uniqueChartId, e);
                    }
                }
            },
            {
                key: "filterFormatItem",
                value: function(e, t, n) {
                    const formatedGraphicalItems = this.state.formatedGraphicalItems;
                    for(let o = 0, i = formatedGraphicalItems.length; o < i; o++){
                        const formatedGraphicalItem = formatedGraphicalItems[o];
                        if (formatedGraphicalItem.item === e || formatedGraphicalItem.props.key === e.key || t === getDisplayName(formatedGraphicalItem.item.type) && n === formatedGraphicalItem.childIndex) {
                            return formatedGraphicalItem;
                        }
                    }
                    return null;
                }
            },
            {
                key: "renderAxis",
                value: function(e, t, n, r) {
                    const props = this.props;
                    const { width, height } = props;
                    return module553.default.createElement(module2155, {
                        ...e,
                        className: `recharts-${e.axisType} ${e.axisType}`,
                        key: t.key || `${n}-${r}`,
                        viewBox: {
                            x: 0,
                            y: 0,
                            width,
                            height
                        },
                        ticksGenerator: this.axesTicksGenerator
                    });
                }
            },
            {
                key: "renderLegend",
                value: function() {
                    const _this = this;
                    const formatedGraphicalItems = this.state.formatedGraphicalItems;
                    const props = this.props;
                    const { children, width, height } = props;
                    const margin = this.props.margin || {};
                    const legendWidth = width - (margin.left || 0) - (margin.right || 0);
                    const legendHeight = height - (margin.top || 0) - (margin.bottom || 0);
                    const s = getLegendProps({
                        children,
                        formatedGraphicalItems,
                        legendWidth,
                        legendHeight,
                        legendContent
                    });
                    if (!s) {
                        return null;
                    }
                    const { item, ...rest } = s;
                    return module553.cloneElement(item, {
                        ...rest,
                        chartWidth: width,
                        chartHeight: height,
                        margin,
                        ref: function(t) {
                            _this.legendInstance = t;
                        },
                        onBBoxUpdate: this.handleLegendBBoxUpdate
                    });
                }
            },
            {
                key: "renderTooltip",
                value: function() {
                    const children = this.props.children;
                    const t = findChildByType(children, module870);
                    if (!t) {
                        return null;
                    }
                    const state = this.state;
                    const { isTooltipActive, activeCoordinate, activePayload, activeLabel, offset } = state;
                    return module553.cloneElement(t, {
                        viewBox: {
                            ...offset,
                            x: offset.left,
                            y: offset.top
                        },
                        active: isTooltipActive,
                        label: activeLabel,
                        payload: isTooltipActive ? activePayload : [],
                        coordinate: activeCoordinate
                    });
                }
            },
            {
                key: "renderActivePoints",
                value: function({ item, activePoint, basePoint, childIndex, isRange }) {
                    const a = [];
                    const key = item.props.key;
                    const props = item.item.props;
                    const u_activeDot = props.activeDot;
                    const c = {
                        index: childIndex,
                        dataKey: props.dataKey,
                        cx: activePoint.x,
                        cy: activePoint.y,
                        r: 4,
                        fill: getMainColorOfGraphicItem(item.item),
                        strokeWidth: 2,
                        stroke: "#fff",
                        payload: activePoint.payload,
                        value: activePoint.value,
                        key: `${key}-activePoint-${childIndex}`,
                        ...getPresentationAttributes(u_activeDot),
                        ...filterEventAttributes(u_activeDot)
                    };
                    a.push(this.constructor.renderActiveDot(u_activeDot, c, childIndex));
                    if (basePoint) {
                        a.push(this.constructor.renderActiveDot(u_activeDot, {
                            ...c,
                            cx: basePoint.x,
                            cy: basePoint.y,
                            key: `${key}-basePoint-${childIndex}`
                        }, childIndex));
                    } else if (isRange) {
                        a.push(null);
                    }
                    return a;
                }
            },
            {
                key: "renderClipPath",
                value: function() {
                    const clipPathId = this.clipPathId;
                    const offset = this.state.offset;
                    const { left, top, height, width } = offset;
                    return module553.default.createElement("defs", null, module553.default.createElement("clipPath", {
                        id: clipPathId
                    }, module553.default.createElement("rect", {
                        x: left,
                        y: top,
                        height,
                        width
                    })));
                }
            },
            {
                key: "render",
                value: function() {
                    const _this = this;
                    if (!validateWidthHeight(this)) {
                        return null;
                    }
                    const props = this.props;
                    const { children, className, width, height, style, compact, ...rest } = props;
                    const s = getPresentationAttributes(rest);
                    const f = {
                        CartesianGrid: {
                            handler: this.renderGrid,
                            once: true
                        },
                        ReferenceArea: {
                            handler: this.renderReferenceElement
                        },
                        ReferenceLine: {
                            handler: this.renderReferenceElement
                        },
                        ReferenceDot: {
                            handler: this.renderReferenceElement
                        },
                        XAxis: {
                            handler: this.renderXAxis
                        },
                        YAxis: {
                            handler: this.renderYAxis
                        },
                        Brush: {
                            handler: this.renderBrush,
                            once: true
                        },
                        Bar: {
                            handler: this.renderGraphicChild
                        },
                        Line: {
                            handler: this.renderGraphicChild
                        },
                        Area: {
                            handler: this.renderGraphicChild
                        },
                        Radar: {
                            handler: this.renderGraphicChild
                        },
                        RadialBar: {
                            handler: this.renderGraphicChild
                        },
                        Scatter: {
                            handler: this.renderGraphicChild
                        },
                        Pie: {
                            handler: this.renderGraphicChild
                        },
                        Funnel: {
                            handler: this.renderGraphicChild
                        },
                        Tooltip: {
                            handler: this.renderCursor,
                            once: true
                        },
                        PolarGrid: {
                            handler: this.renderPolarGrid,
                            once: true
                        },
                        PolarAngleAxis: {
                            handler: this.renderPolarAxis
                        },
                        PolarRadiusAxis: {
                            handler: this.renderPolarAxis
                        },
                        Customized: {
                            handler: this.renderCustomized
                        }
                    };
                    if (compact) {
                        return module553.default.createElement(module1510, {
                            ...s,
                            width,
                            height
                        }, this.renderClipPath(), renderByOrder(children, f));
                    }
                    const h = this.parseEventsOfWrapper();
                    return module553.default.createElement("div", {
                        className: module3("recharts-wrapper", className),
                        style: {
                            position: "relative",
                            cursor: "default",
                            width,
                            height,
                            ...style
                        },
                        ...h,
                        ref: function(t) {
                            _this.container = t;
                        }
                    }, module553.default.createElement(module1510, {
                        ...s,
                        width,
                        height
                    }, this.renderClipPath(), renderByOrder(children, f)), this.renderLegend(), this.renderTooltip());
                }
            }
        ]) {
            F(P.prototype, q);
        }
        if (Y) {
            F(P, Y);
        }
        return f;
    })(module553.Component);
    X.displayName = chartName;
    X.propTypes = {
        syncId: module1.oneOfType([
            module1.string,
            module1.number
        ]),
        compact: module1.bool,
        width: module1.number,
        height: module1.number,
        data: module1.arrayOf(module1.object),
        layout: module1.oneOf([
            "horizontal",
            "vertical"
        ]),
        stackOffset: module1.oneOf([
            "sign",
            "expand",
            "none",
            "wiggle",
            "silhouette"
        ]),
        throttleDelay: module1.number,
        margin: module1.shape({
            top: module1.number,
            right: module1.number,
            bottom: module1.number,
            left: module1.number
        }),
        barCategoryGap: module1.oneOfType([
            module1.number,
            module1.string
        ]),
        barGap: module1.oneOfType([
            module1.number,
            module1.string
        ]),
        barSize: module1.oneOfType([
            module1.number,
            module1.string
        ]),
        maxBarSize: module1.number,
        style: module1.object,
        className: module1.string,
        children: module1.oneOfType([
            module1.arrayOf(module1.node),
            module1.node
        ]),
        defaultShowTooltip: module1.bool,
        onClick: module1.func,
        onMouseLeave: module1.func,
        onMouseEnter: module1.func,
        onMouseMove: module1.func,
        onMouseDown: module1.func,
        onMouseUp: module1.func,
        reverseStackOrder: module1.bool,
        id: module1.string,
        ...propTypes
    };
    X.defaultProps = {
        layout: "horizontal",
        stackOffset: "none",
        barCategoryGap: "10%",
        barGap: 4,
        margin: {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5
        },
        reverseStackOrder: false,
        ...defaultProps
    };
    X.createDefaultState = function(e) {
        const { children, defaultShowTooltip } = e;
        const r = findChildByType(children, module2156);
        return {
            chartX: 0,
            chartY: 0,
            dataStartIndex: r && r.props && r.props.startIndex || 0,
            dataEndIndex: r && r.props && r.props.endIndex || e.data && e.data.length - 1 || 0,
            activeTooltipIndex: -1,
            isTooltipActive: !module844(defaultShowTooltip) && defaultShowTooltip
        };
    };
    X.hasBar = function(e) {
        return !(!e || !e.length) && e.some((e)=>{
            const t = getDisplayName(e && e.type);
            return t && t.indexOf("Bar") >= 0;
        });
    };
    X.getDisplayedData = function(e, { graphicalItems, dataStartIndex, dataEndIndex }, n) {
        const a = (graphicalItems || []).reduce((acc, item)=>{
            const data = item.props.data;
            if (data && data.length) {
                return [
                    ...acc,
                    ...data
                ];
            }
            return acc;
        }, []);
        if (a && a.length > 0) {
            return a;
        }
        if (n && n.props && n.props.data && n.props.data.length > 0) {
            return n.props.data;
        }
        const e_data = e.data;
        if (e_data && e_data.length && isNumber(dataStartIndex) && isNumber(dataEndIndex)) {
            return e_data.slice(dataStartIndex, dataEndIndex + 1);
        }
        return [];
    };
    return X;
};
