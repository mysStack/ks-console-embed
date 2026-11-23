import { isSsr } from "./module-810.js";
const u = {
    widthCache: {},
    cacheCount: 0
};
const s = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre"
};
const c = [
    "minWidth",
    "maxWidth",
    "width",
    "minHeight",
    "maxHeight",
    "height",
    "top",
    "left",
    "fontSize",
    "lineHeight",
    "padding",
    "margin",
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "paddingBottom",
    "marginLeft",
    "marginRight",
    "marginTop",
    "marginBottom"
];
export const getStyleString = function(e) {
    return Object.keys(e).reduce((acc, key)=>{
        return `${acc}${i = key, i.split("").reduce((acc_1, item)=>{
            if (item === item.toUpperCase()) {
                return [
                    ...acc_1,
                    "-",
                    item.toLowerCase()
                ];
            }
            return [
                ...acc_1,
                item
            ];
        }, []).join("")}:${r = key, o = e[key], c.indexOf(r) >= 0 && o === +o ? `${o}px` : o};`;
        var r;
        var o;
        var i;
    }, "");
};
export const getStringSize = function(e, t = {}) {
    if (e == null || isSsr()) {
        return {
            width: 0,
            height: 0
        };
    }
    const n = `${e}`;
    const o = getStyleString(t);
    const a = `${n}-${o}`;
    if (u.widthCache[a]) {
        return u.widthCache[a];
    }
    try {
        let l = document.getElementById("recharts_measurement_span");
        if (!l) {
            (l = document.createElement("span")).setAttribute("id", "recharts_measurement_span");
            document.body.appendChild(l);
        }
        const c = {
            ...s,
            ...t
        };
        Object.keys(c).map((e)=>{
            l.style[e] = c[e];
            return e;
        });
        l.textContent = n;
        const d = l.getBoundingClientRect();
        const p = {
            width: d.width,
            height: d.height
        };
        u.widthCache[a] = p;
        if (++u.cacheCount > 2000) {
            u.cacheCount = 0;
            u.widthCache = {};
        }
        return p;
    } catch (e) {
        return {
            width: 0,
            height: 0
        };
    }
};
export const getOffset = function(e) {
    const documentElement = e.ownerDocument.documentElement;
    let n = {
        top: 0,
        left: 0
    };
    if (e.getBoundingClientRect !== undefined) {
        n = e.getBoundingClientRect();
    }
    return {
        top: n.top + window.pageYOffset - documentElement.clientTop,
        left: n.left + window.pageXOffset - documentElement.clientLeft
    };
};
export const calculateChartCoordinate = function(e, t) {
    return {
        chartX: Math.round(e.pageX - t.left),
        chartY: Math.round(e.pageY - t.top)
    };
};
