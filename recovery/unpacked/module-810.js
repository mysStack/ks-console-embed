import module844 from "./module-844.js";
import module195 from "./module-195.js";
import module76 from "./module-76.js";
import module194 from "./module-194.js";
import module60 from "./module-60.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import { isNumber } from "./module-827.js";
import { shallowEqual } from "./module-1275.js";
function d() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    d = function() {
        return weakMap;
    };
    return weakMap;
}
export const PRESENTATION_ATTRIBUTES = {
    "aria-current": module1.string,
    "aria-details": module1.any,
    "aria-disabled": module1.any,
    "aria-hidden": module1.any,
    "aria-invalid": module1.any,
    "aria-keyshortcuts": module1.any,
    "aria-label": module1.any,
    "aria-roledescription": module1.any,
    "aria-autocomplete": module1.any,
    "aria-checked": module1.any,
    "aria-expanded": module1.any,
    "aria-haspopup": module1.any,
    "aria-level": module1.any,
    "aria-modal": module1.any,
    "aria-multiline": module1.any,
    "aria-multiselectable": module1.any,
    "aria-orientation": module1.any,
    "aria-placeholder": module1.any,
    "aria-pressed": module1.any,
    "aria-readonly": module1.any,
    "aria-required": module1.any,
    "aria-selected": module1.any,
    "aria-sort": module1.any,
    "aria-valuemax": module1.any,
    "aria-valuemin": module1.any,
    "aria-valuenow": module1.any,
    "aria-valuetext": module1.any,
    "aria-atomic": module1.any,
    "aria-busy": module1.any,
    "aria-live": module1.any,
    "aria-relevant": module1.any,
    "aria-dropeffect": module1.any,
    "aria-grabbed": module1.any,
    "aria-activedescendant": module1.any,
    "aria-colcount": module1.any,
    "aria-colindex": module1.any,
    "aria-colspan": module1.any,
    "aria-controls": module1.any,
    "aria-describedby": module1.any,
    "aria-errormessage": module1.any,
    "aria-flowto": module1.any,
    "aria-labelledby": module1.any,
    "aria-owns": module1.any,
    "aria-posinset": module1.any,
    "aria-rowcount": module1.any,
    "aria-rowindex": module1.any,
    "aria-rowspan": module1.any,
    "aria-setsize": module1.any,
    alignmentBaseline: module1.string,
    angle: module1.number,
    baselineShift: module1.string,
    clip: module1.string,
    clipPath: module1.string,
    clipRule: module1.string,
    color: module1.string,
    colorInterpolation: module1.string,
    colorInterpolationFilters: module1.string,
    colorProfile: module1.string,
    colorRendering: module1.string,
    cursor: module1.string,
    direction: module1.oneOf([
        "ltr",
        "rtl",
        "inherit"
    ]),
    display: module1.string,
    dominantBaseline: module1.string,
    enableBackground: module1.string,
    fill: module1.string,
    fillOpacity: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    fillRule: module1.oneOf([
        "nonzero",
        "evenodd",
        "inherit"
    ]),
    filter: module1.string,
    floodColor: module1.string,
    floodOpacity: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    font: module1.string,
    fontFamily: module1.string,
    fontSize: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    fontSizeAdjust: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    fontStretch: module1.oneOf([
        "normal",
        "wider",
        "narrower",
        "ultra-condensed",
        "extra-condensed",
        "condensed",
        "semi-condensed",
        "semi-expanded",
        "expanded",
        "extra-expanded",
        "ultra-expanded",
        "inherit"
    ]),
    fontStyle: module1.oneOf([
        "normal",
        "italic",
        "oblique",
        "inherit"
    ]),
    fontVariant: module1.oneOf([
        "normal",
        "small-caps",
        "inherit"
    ]),
    fontWeight: module1.oneOf([
        "normal",
        "bold",
        "bolder",
        "lighter",
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900,
        "inherit"
    ]),
    glyphOrientationHorizontal: module1.string,
    glyphOrientationVertical: module1.string,
    imageRendering: module1.oneOf([
        "auto",
        "optimizeSpeed",
        "optimizeQuality",
        "inherit"
    ]),
    kerning: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    letterSpacing: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    lightingColor: module1.string,
    lineHeight: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    markerEnd: module1.string,
    markerMid: module1.string,
    markerStart: module1.string,
    mask: module1.string,
    opacity: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    overflow: module1.oneOf([
        "visible",
        "hidden",
        "scroll",
        "auto",
        "inherit"
    ]),
    pointerEvents: module1.oneOf([
        "visiblePainted",
        "visibleFill",
        "visibleStroke",
        "visible",
        "painted",
        "fill",
        "stroke",
        "all",
        "none",
        "inherit"
    ]),
    shapeRendering: module1.oneOf([
        "auto",
        "optimizeSpeed",
        "crispEdges",
        "geometricPrecision",
        "inherit"
    ]),
    stopColor: module1.string,
    stopOpacity: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    stroke: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    strokeDasharray: module1.string,
    strokeDashoffset: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    strokeLinecap: module1.oneOf([
        "butt",
        "round",
        "square",
        "inherit"
    ]),
    strokeLinejoin: module1.oneOf([
        "miter",
        "round",
        "bevel",
        "inherit"
    ]),
    strokeMiterlimit: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    strokeOpacity: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    strokeWidth: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    textAnchor: module1.oneOf([
        "start",
        "middle",
        "end",
        "inherit"
    ]),
    textDecoration: module1.oneOf([
        "none",
        "underline",
        "overline",
        "line-through",
        "blink",
        "inherit"
    ]),
    textRendering: module1.oneOf([
        "auto",
        "optimizeSpeed",
        "optimizeLegibility",
        "geometricPrecision",
        "inherit"
    ]),
    unicodeBidi: module1.oneOf([
        "normal",
        "embed",
        "bidi-override",
        "inherit"
    ]),
    visibility: module1.oneOf([
        "visible",
        "hidden",
        "collapse",
        "inherit"
    ]),
    wordSpacing: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    writingMode: module1.oneOf([
        "lr-tb",
        "rl-tb",
        "tb-rl",
        "lr",
        "rl",
        "tb",
        "inherit"
    ]),
    transform: module1.string,
    role: module1.string,
    focusable: module1.string,
    tabIndex: module1.string,
    style: module1.object,
    width: module1.number,
    height: module1.number,
    dx: module1.number,
    dy: module1.number,
    x: module1.number,
    y: module1.number,
    r: module1.number,
    radius: module1.oneOfType([
        module1.number,
        module1.array
    ])
};
export const EVENT_ATTRIBUTES = {
    onClick: module1.func,
    onMouseDown: module1.func,
    onMouseUp: module1.func,
    onMouseOver: module1.func,
    onMouseMove: module1.func,
    onMouseOut: module1.func,
    onMouseEnter: module1.func,
    onMouseLeave: module1.func,
    onTouchEnd: module1.func,
    onTouchMove: module1.func,
    onTouchStart: module1.func,
    onTouchCancel: module1.func
};
const y = {
    click: "onClick",
    mousedown: "onMouseDown",
    mouseup: "onMouseUp",
    mouseover: "onMouseOver",
    mousemove: "onMouseMove",
    mouseout: "onMouseOut",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart"
};
export const SCALE_TYPES = [
    "auto",
    "linear",
    "pow",
    "sqrt",
    "log",
    "identity",
    "time",
    "band",
    "point",
    "ordinal",
    "quantile",
    "quantize",
    "utc",
    "sequential",
    "threshold"
];
export const LEGEND_TYPES = [
    "plainline",
    "line",
    "square",
    "rect",
    "circle",
    "cross",
    "diamond",
    "star",
    "triangle",
    "wye",
    "none"
];
export const TOOLTIP_TYPES = [
    "none"
];
export const getDisplayName = function(e) {
    if (typeof e === "string") {
        return e;
    }
    if (e) {
        return e.displayName || e.name || "Component";
    }
    return "";
};
export const findAllByType = function(e, t) {
    const n = [];
    let r = [];
    r = module60(t) ? t.map((e)=>getDisplayName(e)) : [
        getDisplayName(t)
    ];
    module553.default.Children.forEach(e, function(e) {
        const t = e && e.type && (e.type.displayName || e.type.name);
        if (r.indexOf(t) !== -1) {
            n.push(e);
        }
    });
    return n;
};
export const findChildByType = function(e, t) {
    const n = findAllByType(e, t);
    return n && n[0];
};
export const withoutType = function(e, t) {
    let n;
    const r = [];
    n = module60(t) ? t.map((e)=>getDisplayName(e)) : [
        getDisplayName(t)
    ];
    module553.default.Children.forEach(e, function(e) {
        if (!(e && e.type && e.type.displayName && n.indexOf(e.type.displayName) !== -1)) {
            r.push(e);
        }
    });
    return r;
};
export const getPresentationAttributes = function(e) {
    if (!e || module194(e)) {
        return null;
    }
    const t = module553.default.isValidElement(e) ? e.props : e;
    if (!module76(t)) {
        return null;
    }
    let n = null;
    for(const r in t){
        if (Object.prototype.hasOwnProperty.call(t, r) && PRESENTATION_ATTRIBUTES[r]) {
            if (!n) {
                n = {};
            }
            n[r] = t[r];
        }
    }
    return n;
};
const x = (e, t)=>function(n) {
        e(t, n);
        return null;
    };
export const filterEventAttributes = function(e, t) {
    const n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    if (!e || module194(e)) {
        return null;
    }
    const r = module553.default.isValidElement(e) ? e.props : e;
    if (!module76(r)) {
        return null;
    }
    let o = null;
    for(const l in r){
        if (Object.prototype.hasOwnProperty.call(r, l) && EVENT_ATTRIBUTES[l]) {
            if (!o) {
                o = {};
            }
            o[l] = t || (n ? x(r[l], r) : r[l]);
        }
    }
    return o;
};
const w = (e, t, n)=>function(r) {
        e(t, n, r);
        return null;
    };
export const filterEventsOfChild = function(e, t, n) {
    if (!module76(e)) {
        return null;
    }
    let r = null;
    for(const o in e){
        if (Object.prototype.hasOwnProperty.call(e, o) && EVENT_ATTRIBUTES[o] && module194(e[o])) {
            if (!r) {
                r = {};
            }
            r[o] = w(e[o], t, n);
        }
    }
    return r;
};
export const validateWidthHeight = function(e) {
    if (!e || !e.props) {
        return false;
    }
    const e_props = e.props;
    const { width, height } = e_props;
    return !(!isNumber(width) || width <= 0 || !isNumber(height) || height <= 0);
};
export const isSsr = function() {
    return !(typeof window !== "undefined" && window.document && window.document.createElement && window.setTimeout);
};
const _ = [
    "a",
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColormatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-url",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "lineGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "script",
    "set",
    "stop",
    "style",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "title",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern"
];
export const filterSvgElements = function(e) {
    const t = [];
    module553.default.Children.forEach(e, function(e) {
        if (e && e.type && module195(e.type) && _.indexOf(e.type) >= 0) {
            t.push(e);
        }
    });
    return t;
};
export const isSingleChildEqual = function(e, t) {
    if (module844(e) && module844(t)) {
        return true;
    }
    if (!module844(e) && !module844(t)) {
        const n = e.props || {};
        const { children, ...rest } = n;
        const a = t.props || {};
        const { children: children_1, ...rest_1 } = a;
        if (children && children_1) {
            return shallowEqual(rest, rest_1) && isChildrenEqual(children, children_1);
        }
        return !children && !children_1 && shallowEqual(rest, rest_1);
    }
    return false;
};
export var isChildrenEqual = function e(t, n) {
    if (t === n) {
        return true;
    }
    if (module553.Children.count(t) !== module553.Children.count(n)) {
        return false;
    }
    const r = module553.Children.count(t);
    if (r === 0) {
        return true;
    }
    if (r === 1) {
        return isSingleChildEqual(module60(t) ? t[0] : t, module60(n) ? n[0] : n);
    }
    for(let o = 0; o < r; o++){
        const i = t[o];
        const a = n[o];
        if (module60(i) || module60(a)) {
            if (!e(i, a)) {
                return false;
            }
        } else if (!isSingleChildEqual(i, a)) {
            return false;
        }
    }
    return true;
};
export const renderByOrder = function(e, t) {
    let n = [];
    const r = {};
    module553.Children.forEach(e, function(e, i) {
        if (e && ((e)=>e && e.type && module195(e.type) && _.indexOf(e.type) >= 0)(e)) {
            n.push(e);
        } else if (e && t[getDisplayName(e.type)]) {
            const a = getDisplayName(e.type);
            const u = t[a];
            const { handler, once } = u;
            if (once && !r[a] || !once) {
                const f = handler(e, a, i);
                if (module60(f)) {
                    n = [
                        n
                    ].concat(((e)=>((e)=>{
                            if (Array.isArray(e)) {
                                for(var t = 0, n = new Array(e.length); t < e.length; t++){
                                    n[t] = e[t];
                                }
                                return n;
                            }
                        })(e) || ((e)=>{
                            if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") {
                                return Array.from(e);
                            }
                        })(e) || (()=>{
                            throw new TypeError("Invalid attempt to spread non-iterable instance");
                        })())(f));
                } else {
                    n.push(f);
                }
                r[a] = true;
            }
        }
    });
    return n;
};
export const getReactEventByType = function(e) {
    const t = e && e.type;
    if (t && y[t]) {
        return y[t];
    }
    return null;
};
export const parseChildIndex = function(e, t) {
    let n = -1;
    module553.Children.forEach(t, function(t, r) {
        if (t === e) {
            n = r;
        }
    });
    return n;
};
