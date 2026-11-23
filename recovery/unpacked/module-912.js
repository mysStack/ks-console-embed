import module807 from "./module-807.js";
import module446 from "./module-446.js";
import module926 from "./module-926.js";
import module195 from "./module-195.js";
import module60 from "./module-60.js";
import module1156 from "./module-1156.js";
import module968 from "./module-968.js";
import module1506 from "./module-1506.js";
import module194 from "./module-194.js";
import module26 from "./module-26.js";
import module844 from "./module-844.js";
import { getNiceTickValues, getTickValuesFixedDomain } from "./module-2144.js";
import module2017 from "./module-2017.js";
import { stack, stackOffsetExpand, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stackOrderNone } from "./module-1258.js";
import { findEntryInArray, getPercentValue, isNumOrStr, isNumber, mathSign, uniqueId } from "./module-827.js";
import module1158 from "./module-1158.js";
import module928 from "./module-928.js";
import { findAllByType, findChildByType, getDisplayName } from "./module-810.js";
function w() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    w = function() {
        return weakMap;
    };
    return weakMap;
}
export const getValueByDataKey = function(e, t, n) {
    if (module844(e) || module844(t)) {
        return n;
    }
    if (isNumOrStr(t)) {
        return module26(e, t, n);
    }
    if (module194(t)) {
        return t(e);
    }
    return n;
};
export const getDomainOfDataByKey = function(e, t, n, r) {
    const o = module1506(e, function(e) {
        return getValueByDataKey(e, t);
    });
    if (n === "number") {
        const i = o.filter((e)=>isNumber(e) || parseFloat(e, 10));
        if (i.length) {
            return [
                module968(i),
                module1156(i)
            ];
        }
        return [
            Infinity,
            -Infinity
        ];
    }
    return (r ? o.filter((e)=>!module844(e)) : o).map((e)=>{
        if (isNumOrStr(e)) {
            return e;
        }
        return "";
    });
};
export const calculateActiveTickIndex = function(e, t, n, r) {
    let o = -1;
    const t_length = t.length;
    if (t_length > 1) {
        if (r && r.axisType === "angleAxis" && Math.abs(Math.abs(r.range[1] - r.range[0]) - 360) <= 0.000001) {
            const a = r.range;
            for(let l = 0; l < t_length; l++){
                const u = l > 0 ? n[l - 1].coordinate : n[t_length - 1].coordinate;
                const s = n[l].coordinate;
                const c = l >= t_length - 1 ? n[0].coordinate : n[l + 1].coordinate;
                let f;
                if (mathSign(s - u) !== mathSign(c - s)) {
                    const d = [];
                    if (mathSign(c - s) === mathSign(a[1] - a[0])) {
                        f = c;
                        const p = s + a[1] - a[0];
                        d[0] = Math.min(p, (p + u) / 2);
                        d[1] = Math.max(p, (p + u) / 2);
                    } else {
                        f = u;
                        const h = c + a[1] - a[0];
                        d[0] = Math.min(s, (h + s) / 2);
                        d[1] = Math.max(s, (h + s) / 2);
                    }
                    const v = [
                        Math.min(s, (f + s) / 2),
                        Math.max(s, (f + s) / 2)
                    ];
                    if (e > v[0] && e <= v[1] || e >= d[0] && e <= d[1]) {
                        o = n[l].index;
                        break;
                    }
                } else {
                    const g = Math.min(u, c);
                    const m = Math.max(u, c);
                    if (e > (g + s) / 2 && e <= (m + s) / 2) {
                        o = n[l].index;
                        break;
                    }
                }
            }
        } else {
            for(let b = 0; b < t_length; b++){
                if (b === 0 && e <= (t[b].coordinate + t[b + 1].coordinate) / 2 || b > 0 && b < t_length - 1 && e > (t[b].coordinate + t[b - 1].coordinate) / 2 && e <= (t[b].coordinate + t[b + 1].coordinate) / 2 || b === t_length - 1 && e > (t[b].coordinate + t[b - 1].coordinate) / 2) {
                    o = t[b].index;
                    break;
                }
            }
        }
    } else {
        o = 0;
    }
    return o;
};
export const getMainColorOfGraphicItem = function(e) {
    let t;
    const displayName = e.type.displayName;
    const e_props = e.props;
    const { stroke, fill } = e_props;
    switch(displayName){
        case "Line":
            t = stroke;
            break;
        case "Area":
        case "Radar":
            t = stroke && stroke !== "none" ? stroke : fill;
            break;
        default:
            t = fill;
    }
    return t;
};
export const getLegendProps = function({ children, formatedGraphicalItems, legendWidth, legendContent }) {
    let t;
    const a = findChildByType(children, module928);
    if (a) {
        t = a.props && a.props.payload ? a.props && a.props.payload : legendContent === "children" ? (formatedGraphicalItems || []).reduce((acc, { item, props })=>{
            const o = props.sectors || props.data || [];
            return acc.concat(o.map((e)=>({
                    type: a.props.iconType || item.props.legendType,
                    value: e.name,
                    color: e.fill,
                    payload: e
                })));
        }, []) : (formatedGraphicalItems || []).map(({ item })=>{
            const item_props = item.props;
            const { dataKey, name, legendType } = item_props;
            return {
                inactive: item_props.hide,
                dataKey,
                type: a.props.iconType || legendType || "square",
                color: getMainColorOfGraphicItem(item),
                value: name || dataKey,
                payload: item.props
            };
        });
        return {
            ...a.props,
            ...module928.getWithHeight(a, legendWidth),
            payload: t,
            item: a
        };
    }
    return null;
};
export const getBarSizeList = function({ barSize, stackGroups = {} }) {
    if (!stackGroups) {
        return {};
    }
    const o = {};
    const i = Object.keys(stackGroups);
    for(let a = 0, l = i.length; a < l; a++){
        const u = stackGroups[i[a]].stackGroups;
        const s = Object.keys(u);
        for(let c = 0, f = s.length; c < f; c++){
            const d = u[s[c]];
            const { items, cateAxisId } = d;
            const g = items.filter((e)=>getDisplayName(e.type).indexOf("Bar") >= 0);
            if (g && g.length) {
                const y = g[0].props.barSize;
                const m = g[0].props[cateAxisId];
                if (!o[m]) {
                    o[m] = [];
                }
                o[m].push({
                    item: g[0],
                    stackList: g.slice(1),
                    barSize: module844(y) ? barSize : y
                });
            }
        }
    }
    return o;
};
export const getBarPosition = function({ barGap, barCategoryGap, bandSize, sizeList = [], maxBarSize }) {
    const sizeList_length = sizeList.length;
    if (sizeList_length < 1) {
        return null;
    }
    let u;
    let s = getPercentValue(barGap, bandSize, 0, true);
    if (sizeList[0].barSize === +sizeList[0].barSize) {
        let c = false;
        let f = bandSize / sizeList_length;
        let d = sizeList.reduce((acc, item)=>acc + item.barSize || 0, 0);
        if ((d += (sizeList_length - 1) * s) >= bandSize) {
            d -= (sizeList_length - 1) * s;
            s = 0;
        }
        if (d >= bandSize && f > 0) {
            c = true;
            d = sizeList_length * (f *= 0.9);
        }
        let position = {
            offset: ((bandSize - d) / 2 >> 0) - s,
            size: 0
        };
        u = sizeList.reduce((acc, item)=>{
            const n = [
                ...acc,
                {
                    item: item.item,
                    position: {
                        offset: position.offset + position.size + s,
                        size: c ? f : item.barSize
                    }
                }
            ];
            position = n[n.length - 1].position;
            if (item.stackList && item.stackList.length) {
                item.stackList.forEach((e)=>{
                    n.push({
                        item: e,
                        position
                    });
                });
            }
            return n;
        }, []);
    } else {
        const h = getPercentValue(barCategoryGap, bandSize, 0, true);
        if (bandSize - 2 * h - (sizeList_length - 1) * s <= 0) {
            s = 0;
        }
        let v = (bandSize - 2 * h - (sizeList_length - 1) * s) / sizeList_length;
        if (v > 1) {
            v >>= 0;
        }
        const size = maxBarSize === +maxBarSize ? Math.min(v, maxBarSize) : v;
        u = sizeList.reduce((acc, item, index)=>{
            const r = [
                ...acc,
                {
                    item: item.item,
                    position: {
                        offset: h + (v + s) * index + (v - size) / 2,
                        size
                    }
                }
            ];
            if (item.stackList && item.stackList.length) {
                item.stackList.forEach((e)=>{
                    r.push({
                        item: e,
                        position: r[r.length - 1].position
                    });
                });
            }
            return r;
        }, []);
    }
    return u;
};
export const appendOffsetOfLegend = function(e, items, { children, width, height, margin }, r) {
    const legendWidth = width - (margin.left || 0) - (margin.right || 0);
    const legendHeight = height - (margin.top || 0) - (margin.bottom || 0);
    const c = getLegendProps({
        children,
        items,
        legendWidth,
        legendHeight
    });
    let f = e;
    if (c) {
        const d = r || {};
        const { align, verticalAlign, layout } = c;
        if ((layout === "vertical" || layout === "horizontal" && verticalAlign === "center") && isNumber(e[align])) {
            f = {
                ...e,
                ...{
                    [align]: f[align] + (d.width || 0)
                }
            };
        }
        if ((layout === "horizontal" || layout === "vertical" && align === "center") && isNumber(e[verticalAlign])) {
            f = {
                ...e,
                ...{
                    [verticalAlign]: f[verticalAlign] + (d.height || 0)
                }
            };
        }
    }
    return f;
};
export const getDomainOfErrorBars = function(e, t, n, r) {
    const children = t.props.children;
    const i = findAllByType(children, module1158).filter((e)=>{
        const direction = e.props.direction;
        return !(!module844(direction) && !module844(r)) || r.indexOf(direction) >= 0;
    });
    if (i && i.length) {
        const a = i.map((e)=>e.props.dataKey);
        return e.reduce((acc, item)=>{
            const r = getValueByDataKey(item, n, 0);
            const o = module60(r) ? [
                module968(r),
                module1156(r)
            ] : [
                r,
                r
            ];
            const i = a.reduce((acc_1, item_1)=>{
                const r = getValueByDataKey(item, item_1, 0);
                const i = o[0] - Math.abs(module60(r) ? r[0] : r);
                const a = o[1] + Math.abs(module60(r) ? r[1] : r);
                return [
                    Math.min(i, acc_1[0]),
                    Math.max(a, acc_1[1])
                ];
            }, [
                Infinity,
                -Infinity
            ]);
            return [
                Math.min(i[0], acc[0]),
                Math.max(i[1], acc[1])
            ];
        }, [
            Infinity,
            -Infinity
        ]);
    }
    return null;
};
export const parseErrorBarsOfAxis = function(e, t, n, r) {
    const o = t.map((t)=>getDomainOfErrorBars(e, t, n, r)).filter((e)=>!module844(e));
    if (o && o.length) {
        return o.reduce((acc, item)=>[
                Math.min(acc[0], item[0]),
                Math.max(acc[1], item[1])
            ], [
            Infinity,
            -Infinity
        ]);
    }
    return null;
};
export const getDomainOfItemsWithSameAxis = function(e, t, n, r) {
    const o = t.map((t)=>{
        const dataKey = t.props.dataKey;
        return n === "number" && dataKey && getDomainOfErrorBars(e, t, dataKey) || getDomainOfDataByKey(e, dataKey, n, r);
    });
    if (n === "number") {
        return o.reduce((acc, item)=>[
                Math.min(acc[0], item[0]),
                Math.max(acc[1], item[1])
            ], [
            Infinity,
            -Infinity
        ]);
    }
    const i = {};
    return o.reduce((acc, item)=>{
        for(let n = 0, r = item.length; n < r; n++){
            if (!i[item[n]]) {
                i[item[n]] = true;
                acc.push(item[n]);
            }
        }
        return acc;
    }, []);
};
export const isCategorialAxis = function(e, t) {
    return e === "horizontal" && t === "xAxis" || e === "vertical" && t === "yAxis" || e === "centric" && t === "angleAxis" || e === "radial" && t === "radiusAxis";
};
export const getCoordinatesOfGrid = function(e, t, n) {
    let r;
    let o;
    const i = e.map((e)=>{
        if (e.coordinate === t) {
            r = true;
        }
        if (e.coordinate === n) {
            o = true;
        }
        return e.coordinate;
    });
    if (!r) {
        i.push(t);
    }
    if (!o) {
        i.push(n);
    }
    return i;
};
export const getTicksOfAxis = function(e, t, n) {
    if (!e) {
        return null;
    }
    const { scale, duplicateDomain, type, range } = e;
    let offset = (t || n) && type === "category" && scale.bandwidth ? scale.bandwidth() / 2 : 0;
    offset = e.axisType === "angleAxis" ? 2 * mathSign(range[0] - range[1]) * offset : offset;
    if (t && (e.ticks || e.niceTicks)) {
        return (e.ticks || e.niceTicks).map((e)=>{
            const t = duplicateDomain ? duplicateDomain.indexOf(e) : e;
            return {
                coordinate: scale(t) + offset,
                value: e,
                offset
            };
        });
    }
    if (e.isCategorial && e.categoricalDomain) {
        return e.categoricalDomain.map((e, t)=>({
                coordinate: scale(e),
                value: e,
                index: t,
                offset
            }));
    }
    if (scale.ticks && !n) {
        return scale.ticks(e.tickCount).map((e)=>({
                coordinate: scale(e) + offset,
                value: e,
                offset
            }));
    }
    return scale.domain().map((e, t)=>({
            coordinate: scale(e) + offset,
            value: duplicateDomain ? duplicateDomain[e] : e,
            index: t,
            offset
        }));
};
export const combineEventHandlers = function(e, t, n) {
    let r;
    if (module194(n)) {
        r = n;
    } else if (module194(t)) {
        r = t;
    }
    if (module194(e) || r) {
        return function(t, n, o, i) {
            if (module194(e)) {
                e(t, n, o, i);
            }
            if (module194(r)) {
                r(t, n, o, i);
            }
        };
    }
    return null;
};
export const parseScale = function({ scale, type, layout, axisType }, t) {
    if (scale === "auto") {
        if (layout === "radial" && axisType === "radiusAxis") {
            return {
                scale: module2017.scaleBand(),
                realScaleType: "band"
            };
        }
        if (layout === "radial" && axisType === "angleAxis") {
            return {
                scale: module2017.scaleLinear(),
                realScaleType: "linear"
            };
        }
        if (type === "category" && t && (t.indexOf("LineChart") >= 0 || t.indexOf("AreaChart") >= 0)) {
            return {
                scale: module2017.scalePoint(),
                realScaleType: "point"
            };
        }
        if (type === "category") {
            return {
                scale: module2017.scaleBand(),
                realScaleType: "band"
            };
        }
        return {
            scale: module2017.scaleLinear(),
            realScaleType: "linear"
        };
    }
    if (module195(scale)) {
        const l = `scale${scale.slice(0, 1).toUpperCase()}${scale.slice(1)}`;
        return {
            scale: (module2017[l] || module2017.scalePoint)(),
            realScaleType: module2017[l] ? l : "point"
        };
    }
    if (module194(scale)) {
        return {
            scale
        };
    }
    return {
        scale: module2017.scalePoint(),
        realScaleType: "point"
    };
};
export const checkDomainOfScale = function(e) {
    const t = e.domain();
    if (t && !(t.length <= 2)) {
        const n = t.length;
        const r = e.range();
        const o = Math.min(r[0], r[1]) - 0.0001;
        const i = Math.max(r[0], r[1]) + 0.0001;
        const a = e(t[0]);
        const l = e(t[n - 1]);
        if (a < o || a > i || l < o || l > i) {
            e.domain([
                t[0],
                t[n - 1]
            ]);
        }
    }
};
export const findPositionOfBar = function(e, t) {
    if (!e) {
        return null;
    }
    for(let n = 0, r = e.length; n < r; n++){
        if (e[n].item === t) {
            return e[n].position;
        }
    }
    return null;
};
export const truncateByDomain = function(e, t) {
    if (!t || t.length !== 2 || !isNumber(t[0]) || !isNumber(t[1])) {
        return e;
    }
    const n = Math.min(t[0], t[1]);
    const r = Math.max(t[0], t[1]);
    const o = [
        e[0],
        e[1]
    ];
    if (!isNumber(e[0]) || e[0] < n) {
        o[0] = n;
    }
    if (!isNumber(e[1]) || e[1] > r) {
        o[1] = r;
    }
    if (o[0] > r) {
        o[0] = r;
    }
    if (o[1] < n) {
        o[1] = n;
    }
    return o;
};
export const offsetSign = function(e) {
    const e_length = e.length;
    if (!(e_length <= 0)) {
        for(let n = 0, r = e[0].length; n < r; ++n){
            let o = 0;
            let a = 0;
            for(let l = 0; l < e_length; ++l){
                const u = module926(e[l][n][1]) ? e[l][n][0] : e[l][n][1];
                if (u >= 0) {
                    e[l][n][0] = o;
                    e[l][n][1] = o + u;
                    o = e[l][n][1];
                } else {
                    e[l][n][0] = a;
                    e[l][n][1] = a + u;
                    a = e[l][n][1];
                }
            }
        }
    }
};
const L = {
    sign: offsetSign,
    expand: stackOffsetExpand,
    none: stackOffsetNone,
    silhouette: stackOffsetSilhouette,
    wiggle: stackOffsetWiggle
};
export const getStackedData = function(e, t, n) {
    const r = t.map((e)=>e.props.dataKey);
    return stack().keys(r).value(function(e, t) {
        return +getValueByDataKey(e, t, 0);
    }).order(stackOrderNone).offset(L[n])(e);
};
export const getStackGroupsByAxisId = function(e, t, numericAxisId, cateAxisId, o, i) {
    if (!e) {
        return null;
    }
    const a = (i ? t.reverse() : t).reduce((acc, item)=>{
        const t_props = item.props;
        const o_stackId = t_props.stackId;
        if (t_props.hide) {
            return acc;
        }
        const a = item.props[numericAxisId];
        const l = acc[a] || {
            hasStack: false,
            stackGroups: {}
        };
        if (isNumOrStr(o_stackId)) {
            const u = l.stackGroups[o_stackId] || {
                numericAxisId,
                cateAxisId,
                items: []
            };
            u.items.push(item);
            l.hasStack = true;
            l.stackGroups[o_stackId] = u;
        } else {
            l.stackGroups[uniqueId("_stackId_")] = {
                numericAxisId,
                cateAxisId,
                items: [
                    item
                ]
            };
        }
        return {
            ...acc,
            ...{
                [a]: l
            }
        };
    }, {});
    return Object.keys(a).reduce((acc, key)=>{
        const l = a[key];
        if (l.hasStack) {
            l.stackGroups = Object.keys(l.stackGroups).reduce((acc_1, key_1)=>{
                const a = l.stackGroups[key_1];
                return {
                    ...acc_1,
                    ...{
                        [key_1]: {
                            numericAxisId,
                            cateAxisId,
                            items: a.items,
                            stackedData: getStackedData(e, a.items, o)
                        }
                    }
                };
            }, {});
        }
        return {
            ...acc,
            ...{
                [key]: l
            }
        };
    }, {});
};
export const calculateDomainOfTicks = function(e, t) {
    if (t === "number") {
        return [
            module968(e),
            module1156(e)
        ];
    }
    return e;
};
export const getTicksOfScale = function(e, t) {
    const { realScaleType, type, tickCount, originalDomain, allowDecimals } = t;
    const l = realScaleType || t.scale;
    if (l !== "auto" && l !== "linear") {
        return null;
    }
    if (tickCount && type === "number" && originalDomain && (originalDomain[0] === "auto" || originalDomain[1] === "auto")) {
        const u = e.domain();
        const niceTicks = getNiceTickValues(u, tickCount, allowDecimals);
        e.domain(calculateDomainOfTicks(niceTicks, type));
        return {
            niceTicks
        };
    }
    if (tickCount && type === "number") {
        const c = e.domain();
        return {
            niceTicks: getTickValuesFixedDomain(c, tickCount, allowDecimals)
        };
    }
    return null;
};
export const getCateCoordinateOfLine = function({ axis, ticks, bandSize, entry, index, dataKey }) {
    if (axis.type === "category") {
        if (!axis.allowDuplicatedCategory && axis.dataKey && !module844(entry[axis.dataKey])) {
            const l = findEntryInArray(ticks, "value", entry[axis.dataKey]);
            if (l) {
                return l.coordinate + bandSize / 2;
            }
        }
        if (ticks[index]) {
            return ticks[index].coordinate + bandSize / 2;
        }
        return null;
    }
    const u = getValueByDataKey(entry, module844(dataKey) ? axis.dataKey : dataKey);
    if (module844(u)) {
        return null;
    }
    return axis.scale(u);
};
export const getCateCoordinateOfBar = function({ axis, ticks, offset, bandSize, entry, index }) {
    if (axis.type === "category") {
        if (ticks[index]) {
            return ticks[index].coordinate + offset;
        }
        return null;
    }
    const l = getValueByDataKey(entry, axis.dataKey, axis.domain[index]);
    if (module844(l)) {
        return null;
    }
    return axis.scale(l) - bandSize / 2 + offset;
};
export const getBaseValueOfBar = function({ numericAxis }) {
    const n = numericAxis.scale.domain();
    if (numericAxis.type === "number") {
        const r = Math.min(n[0], n[1]);
        const o = Math.max(n[0], n[1]);
        if (r <= 0 && o >= 0) {
            return 0;
        }
        if (o < 0) {
            return o;
        }
        return r;
    }
    return n[0];
};
export const getStackedDataOfItem = function(e, t) {
    const stackId = e.props.stackId;
    if (isNumOrStr(stackId)) {
        const r = t[stackId];
        if (r && r.items.length) {
            let o = -1;
            for(let i = 0, a = r.items.length; i < a; i++){
                if (r.items[i] === e) {
                    o = i;
                    break;
                }
            }
            if (o >= 0) {
                return r.stackedData[o];
            }
            return null;
        }
    }
    return null;
};
export const getDomainOfStackGroups = function(e, t, n) {
    return Object.keys(e).reduce((acc, key)=>{
        const i = e[key].stackedData.reduce((acc_1, item)=>{
            const o = item.slice(t, n + 1).reduce((acc_2, item_1)=>[
                    module968(item_1.concat([
                        acc_2[0]
                    ]).filter(isNumber)),
                    module1156(item_1.concat([
                        acc_2[1]
                    ]).filter(isNumber))
                ], [
                Infinity,
                -Infinity
            ]);
            return [
                Math.min(acc_1[0], o[0]),
                Math.max(acc_1[1], o[1])
            ];
        }, [
            Infinity,
            -Infinity
        ]);
        return [
            Math.min(i[0], acc[0]),
            Math.max(i[1], acc[1])
        ];
    }, [
        Infinity,
        -Infinity
    ]).map((e)=>{
        if (e === Infinity || e === -Infinity) {
            return 0;
        }
        return e;
    });
};
export const MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
export const MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
export const parseSpecifiedDomain = function(e, t, n) {
    if (!module60(e)) {
        return t;
    }
    const r = [];
    if (isNumber(e[0])) {
        r[0] = n ? e[0] : Math.min(e[0], t[0]);
    } else if (MIN_VALUE_REG.test(e[0])) {
        const o = +MIN_VALUE_REG.exec(e[0])[1];
        r[0] = t[0] - o;
    } else {
        if (module194(e[0])) {
            r[0] = e[0](t[0]);
        } else {
            r[0] = t[0];
        }
    }
    if (isNumber(e[1])) {
        r[1] = n ? e[1] : Math.max(e[1], t[1]);
    } else if (MAX_VALUE_REG.test(e[1])) {
        const i = +MAX_VALUE_REG.exec(e[1])[1];
        r[1] = t[1] + i;
    } else {
        if (module194(e[1])) {
            r[1] = e[1](t[1]);
        } else {
            r[1] = t[1];
        }
    }
    return r;
};
export const getBandSizeOfAxis = function(e, t) {
    if (e && e.scale && e.scale.bandwidth) {
        return e.scale.bandwidth();
    }
    if (e && t && t.length >= 2) {
        const n = module446(t, function(e) {
            return e.coordinate;
        });
        let r = Infinity;
        for(let i = 1, a = n.length; i < a; i++){
            const l = n[i];
            const u = n[i - 1];
            r = Math.min((l.coordinate || 0) - (u.coordinate || 0), r);
        }
        if (r === Infinity) {
            return 0;
        }
        return r;
    }
    return 0;
};
export const parseDomainOfCategoryAxis = function(e, t, n) {
    if (e && e.length) {
        if (module807(e, module26(n, "type.defaultProps.domain"))) {
            return t;
        }
        return e;
    }
    return t;
};
