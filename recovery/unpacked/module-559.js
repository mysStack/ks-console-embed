import module287 from "./module-287.js";
import { Children, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, createElement, isValidElement } from "./module-553.js";
function a(e) {
    let t = `https://reactjs.org/docs/error-decoder.html?invariant=${e}`;
    for(let n = 1; n < arguments.length; n++){
        t += `&args[]=${encodeURIComponent(arguments[n])}`;
    }
    return `Minified React error #${e}; visit ${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
}
let i = 60106;
let l = 60107;
let s = 60108;
let u = 60114;
let c = 60109;
let f = 60110;
let d = 60112;
let p = 60113;
let h = 60120;
let v = 60115;
let m = 60116;
let g = 60121;
let y = 60117;
let b = 60119;
let C = 60129;
let w = 60131;
if (typeof Symbol === "function" && Symbol.for) {
    i = Symbol.for("react.portal");
    l = Symbol.for("react.fragment");
    s = Symbol.for("react.strict_mode");
    u = Symbol.for("react.profiler");
    c = Symbol.for("react.provider");
    f = Symbol.for("react.context");
    d = Symbol.for("react.forward_ref");
    p = Symbol.for("react.suspense");
    h = Symbol.for("react.suspense_list");
    v = Symbol.for("react.memo");
    m = Symbol.for("react.lazy");
    g = Symbol.for("react.block");
    y = Symbol.for("react.fundamental");
    b = Symbol.for("react.scope");
    C = Symbol.for("react.debug_trace_mode");
    w = Symbol.for("react.legacy_hidden");
}
function x(e) {
    if (e == null) {
        return null;
    }
    if (typeof e === "function") {
        return e.displayName || e.name || null;
    }
    if (typeof e === "string") {
        return e;
    }
    switch(e){
        case l:
            return "Fragment";
        case i:
            return "Portal";
        case u:
            return "Profiler";
        case s:
            return "StrictMode";
        case p:
            return "Suspense";
        case h:
            return "SuspenseList";
    }
    if (typeof e === "object") {
        switch(e.$$typeof){
            case f:
                return `${e.displayName || "Context"}.Consumer`;
            case c:
                return `${e._context.displayName || "Context"}.Provider`;
            case d:
                var t = e.render;
                t = t.displayName || t.name || "";
                return e.displayName || (t !== "" ? `ForwardRef(${t})` : "ForwardRef");
            case v:
                return x(e.type);
            case g:
                return x(e._render);
            case m:
                t = e._payload;
                e = e._init;
                try {
                    return x(e(t));
                } catch (e) {}
        }
    }
    return null;
}
const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_1 = __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
const E = {};
function k(e, t) {
    for(let n = 0 | e._threadCount; n <= t; n++){
        e[n] = e._currentValue2;
        e._threadCount = n + 1;
    }
}
let O = new Uint16Array(16);
for(let S = 0; S < 15; S++){
    O[S] = S + 1;
}
O[15] = 0;
const L = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const D = {};
const T = {};
function V(e) {
    return !!hasOwnProperty.call(T, e) || !hasOwnProperty.call(D, e) && (L.test(e) ? T[e] = true : (D[e] = true, false));
}
function H(e, t, n, r, o, a, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4;
    this.attributeName = r;
    this.attributeNamespace = o;
    this.mustUseProperty = n;
    this.propertyName = e;
    this.type = t;
    this.sanitizeURL = a;
    this.removeEmptyString = i;
}
const P = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((e)=>{
    P[e] = new H(e, 0, false, e, null, false, false);
});
[
    [
        "acceptCharset",
        "accept-charset"
    ],
    [
        "className",
        "class"
    ],
    [
        "htmlFor",
        "for"
    ],
    [
        "httpEquiv",
        "http-equiv"
    ]
].forEach((e)=>{
    const t = e[0];
    P[t] = new H(t, 1, false, e[1], null, false, false);
});
[
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
].forEach((e)=>{
    P[e] = new H(e, 2, false, e.toLowerCase(), null, false, false);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
].forEach((e)=>{
    P[e] = new H(e, 2, false, e, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((e)=>{
    P[e] = new H(e, 3, false, e.toLowerCase(), null, false, false);
});
[
    "checked",
    "multiple",
    "muted",
    "selected"
].forEach((e)=>{
    P[e] = new H(e, 3, true, e, null, false, false);
});
[
    "capture",
    "download"
].forEach((e)=>{
    P[e] = new H(e, 4, false, e, null, false, false);
});
[
    "cols",
    "rows",
    "size",
    "span"
].forEach((e)=>{
    P[e] = new H(e, 6, false, e, null, false, false);
});
[
    "rowSpan",
    "start"
].forEach((e)=>{
    P[e] = new H(e, 5, false, e.toLowerCase(), null, false, false);
});
const A = /[\-:]([a-z])/g;
function R(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((e)=>{
    const t = e.replace(A, R);
    P[t] = new H(t, 1, false, e, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((e)=>{
    const t = e.replace(A, R);
    P[t] = new H(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
});
[
    "xml:base",
    "xml:lang",
    "xml:space"
].forEach((e)=>{
    const t = e.replace(A, R);
    P[t] = new H(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
});
[
    "tabIndex",
    "crossOrigin"
].forEach((e)=>{
    P[e] = new H(e, 1, false, e.toLowerCase(), null, false, false);
});
P.xlinkHref = new H("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
[
    "src",
    "href",
    "action",
    "formAction"
].forEach((e)=>{
    P[e] = new H(e, 1, false, e.toLowerCase(), null, true, true);
});
const j = /["'&<>]/;
function N(e) {
    if (typeof e === "boolean" || typeof e === "number") {
        return `${e}`;
    }
    e = `${e}`;
    let t = j.exec(e);
    if (t) {
        let n;
        let r = "";
        let o = 0;
        for(n = t.index; n < e.length; n++){
            switch(e.charCodeAt(n)){
                case 34:
                    t = "&quot;";
                    break;
                case 38:
                    t = "&amp;";
                    break;
                case 39:
                    t = "&#x27;";
                    break;
                case 60:
                    t = "&lt;";
                    break;
                case 62:
                    t = "&gt;";
                    break;
                default:
                    continue;
            }
            if (o !== n) {
                r += e.substring(o, n);
            }
            o = n + 1;
            r += t;
        }
        e = o !== n ? r + e.substring(o, n) : r;
    }
    return e;
}
function I(e, t) {
    let n;
    const r = P.hasOwnProperty(e) ? P[e] : null;
    if (n = e !== "style") {
        n = r !== null ? r.type === 0 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    if (n || ((e, t, n, r)=>{
        if (t == null || ((e, t, n, r)=>{
            if (n !== null && n.type === 0) {
                return false;
            }
            switch(typeof t){
                case "function":
                case "symbol":
                    return true;
                case "boolean":
                    if (n !== null) {
                        return !n.acceptsBooleans;
                    }
                    return (e = e.toLowerCase().slice(0, 5)) !== "data-" && e !== "aria-";
                default:
                    return false;
            }
        })(e, t, n)) {
            return true;
        }
        if (n !== null) {
            switch(n.type){
                case 3:
                    return !t;
                case 4:
                    return t === false;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || t < 1;
            }
        }
        return false;
    })(e, t, r)) {
        return "";
    }
    if (r !== null) {
        e = r.attributeName;
        if ((n = r.type) === 3 || n === 4 && t === true) {
            return `${e}=""`;
        }
        return r.sanitizeURL && (t = `${t}`), `${e}="${N(t)}"`;
    }
    if (V(e)) {
        return `${e}="${N(t)}"`;
    }
    return "";
}
const B = typeof Object.is === "function" ? Object.is : (e, t)=>e === t && (e !== 0 || 1 / e == 1 / t) || e != e && t != t;
let U = null;
let F = null;
let Z = null;
let q = false;
let W = false;
let G = null;
let Y = 0;
function $() {
    if (U === null) {
        throw Error(a(321));
    }
    return U;
}
function K() {
    if (Y > 0) {
        throw Error(a(312));
    }
    return {
        memoizedState: null,
        queue: null,
        next: null
    };
}
function J() {
    if (Z === null) {
        if (F === null) {
            q = false;
            F = Z = K();
        } else {
            q = true;
            Z = F;
        }
    } else if (Z.next === null) {
        q = false;
        Z = Z.next = K();
    } else {
        q = true;
        Z = Z.next;
    }
    return Z;
}
function Q(e, props, n, r) {
    while(W){
        W = false;
        Y += 1;
        Z = null;
        n = e(props, r);
    }
    X();
    return n;
}
function X() {
    U = null;
    W = false;
    F = null;
    Y = 0;
    G = null;
    Z = null;
}
function ee(e, t) {
    if (typeof t === "function") {
        return t(e);
    }
    return t;
}
function useReducer(e, t, n) {
    U = $();
    Z = J();
    if (q) {
        let r = Z.queue;
        t = r.dispatch;
        if (G !== null && (n = G.get(r)) !== undefined) {
            G.delete(r);
            r = Z.memoizedState;
            do {
                r = e(r, n.action);
                n = n.next;
            }while (n !== null)
            Z.memoizedState = r;
            return [
                r,
                t
            ];
        }
        return [
            Z.memoizedState,
            t
        ];
    }
    e = e === ee ? typeof t === "function" ? t() : t : n !== undefined ? n(t) : t;
    Z.memoizedState = e;
    e = (e = Z.queue = {
        last: null,
        dispatch: null
    }).dispatch = re.bind(null, U, e);
    return [
        Z.memoizedState,
        e
    ];
}
function useMemo(e, t) {
    U = $();
    t = t === undefined ? null : t;
    if ((Z = J()) !== null) {
        const n = Z.memoizedState;
        if (n !== null && t !== null) {
            let r = n[1];
            e: if (r === null) {
                r = false;
            } else {
                for(let o = 0; o < r.length && o < t.length; o++){
                    if (!B(t[o], r[o])) {
                        r = false;
                        break e;
                    }
                }
                r = true;
            }
            if (r) {
                return n[0];
            }
        }
    }
    e = e();
    Z.memoizedState = [
        e,
        t
    ];
    return e;
}
function re(e, t, action) {
    if (!(Y < 25)) {
        throw Error(a(301));
    }
    if (e === U) {
        W = true;
        e = {
            action,
            next: null
        };
        if (G === null) {
            G = new Map;
        }
        if ((action = G.get(t)) === undefined) {
            G.set(t, e);
        } else {
            for(t = action; t.next !== null;){
                t = t.next;
            }
            t.next = e;
        }
    }
}
function oe() {}
let ae = null;
const ie = {
    readContext: function(e) {
        const ae_threadID = ae.threadID;
        k(e, ae_threadID);
        return e[ae_threadID];
    },
    useContext: function(e) {
        $();
        const ae_threadID = ae.threadID;
        k(e, ae_threadID);
        return e[ae_threadID];
    },
    useMemo,
    useReducer,
    useRef: function(current) {
        U = $();
        const memoizedState = (Z = J()).memoizedState;
        if (memoizedState === null) {
            current = {
                current
            };
            return Z.memoizedState = current;
        }
        return memoizedState;
    },
    useState: function(e) {
        return useReducer(ee, e);
    },
    useLayoutEffect: function() {},
    useCallback: function(e, t) {
        return useMemo(function() {
            return e;
        }, t);
    },
    useImperativeHandle: oe,
    useEffect: oe,
    useDebugValue: oe,
    useDeferredValue: function(e) {
        $();
        return e;
    },
    useTransition: function() {
        $();
        return [
            function(e) {
                e();
            },
            false
        ];
    },
    useOpaqueIdentifier: function() {
        return `${ae.identifierPrefix || ""}R:${(ae.uniqueID++).toString(36)}`;
    },
    useMutableSource: function(e, t) {
        $();
        return t(e._source);
    }
};
const le = "http://www.w3.org/1999/xhtml";
function se(e) {
    switch(e){
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
const ue = {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
};
const ce = module287({
    menuitem: true
}, ue);
const fe = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
};
const de = [
    "Webkit",
    "ms",
    "Moz",
    "O"
];
Object.keys(fe).forEach((e)=>{
    de.forEach((t)=>{
        t = t + e.charAt(0).toUpperCase() + e.substring(1);
        fe[t] = fe[e];
    });
});
const pe = /([A-Z])/g;
const he = /^ms-/;
const Children_toArray = Children.toArray;
const M_ReactCurrentDispatcher = __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_1.ReactCurrentDispatcher;
const ge = {
    listing: true,
    pre: true,
    textarea: true
};
const ye = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
const be = {};
const Ce = {};
const hasOwnProperty_1 = Object.prototype.hasOwnProperty;
const _e = {
    children: null,
    dangerouslySetInnerHTML: null,
    suppressContentEditableWarning: null,
    suppressHydrationWarning: null
};
function xe(e, t) {
    if (e === undefined) {
        throw Error(a(152, x(t) || "Component"));
    }
}
function Me(child, t, threadID) {
    function i(o, i) {
        let l = i.prototype && i.prototype.isReactComponent;
        const s = ((e, t, threadID_1, r)=>{
            if (r && typeof (r = e.contextType) === "object" && r !== null) {
                k(r, threadID_1);
                return r[threadID_1];
            }
            if (e = e.contextTypes) {
                threadID_1 = {};
                for(const o in e){
                    threadID_1[o] = t[o];
                }
                t = threadID_1;
            } else {
                t = E;
            }
            return t;
        })(i, t, threadID, l);
        let u = [];
        let c = false;
        let f = {
            isMounted: function() {
                return false;
            },
            enqueueForceUpdate: function() {
                if (u === null) {
                    return null;
                }
            },
            enqueueReplaceState: function(e, t) {
                c = true;
                u = [
                    t
                ];
            },
            enqueueSetState: function(e, t) {
                if (u === null) {
                    return null;
                }
                u.push(t);
            }
        };
        if (l) {
            l = new i(o.props, s, f);
            if (typeof i.getDerivedStateFromProps === "function") {
                var d = i.getDerivedStateFromProps.call(null, o.props, l.state);
                if (d != null) {
                    l.state = module287({}, l.state, d);
                }
            }
        } else {
            U = {};
            l = i(o.props, s, f);
            if ((l = Q(i, o.props, l, s)) == null || l.render == null) {
                return void xe(child = l, i);
            }
        }
        l.props = o.props;
        l.context = s;
        l.updater = f;
        if ((f = l.state) === undefined) {
            l.state = f = null;
        }
        if (typeof l.UNSAFE_componentWillMount === "function" || typeof l.componentWillMount === "function") {
            if (typeof l.componentWillMount === "function" && typeof i.getDerivedStateFromProps !== "function") {
                l.componentWillMount();
            }
            if (typeof l.UNSAFE_componentWillMount === "function" && typeof i.getDerivedStateFromProps !== "function") {
                l.UNSAFE_componentWillMount();
            }
            if (u.length) {
                f = u;
                let p = c;
                u = null;
                c = false;
                if (p && f.length === 1) {
                    l.state = f[0];
                } else {
                    d = p ? f[0] : l.state;
                    let h = true;
                    for(p = p ? 1 : 0; p < f.length; p++){
                        let v = f[p];
                        if ((v = typeof v === "function" ? v.call(l, d, o.props, s) : v) != null) {
                            if (h) {
                                h = false;
                                d = module287({}, d, v);
                            } else {
                                module287(d, v);
                            }
                        }
                    }
                    l.state = d;
                }
            } else {
                u = null;
            }
        }
        xe(child = l.render(), i);
        if (typeof l.getChildContext === "function" && typeof (o = i.childContextTypes) === "object") {
            var m = l.getChildContext();
            for(const g in m){
                if (!(g in o)) {
                    throw Error(a(108, x(i) || "Unknown", g));
                }
            }
        }
        if (m) {
            t = module287({}, t, m);
        }
    }
    while(isValidElement(child)){
        const l = child;
        const s = l.type;
        if (typeof s !== "function") {
            break;
        }
        i(l, s);
    }
    return {
        child,
        context: t
    };
}
class Ee {
    constructor(e, t, n){
        if (isValidElement(e)) {
            if (e.type !== l) {
                e = [
                    e
                ];
            } else {
                e = e.props.children;
                e = isValidElement(e) ? [
                    e
                ] : Children_toArray(e);
            }
        } else {
            e = Children_toArray(e);
        }
        e = {
            type: null,
            domNamespace: le,
            children: e,
            childIndex: 0,
            context: E,
            footer: ""
        };
        var r = O[0];
        if (r === 0) {
            var i = O;
            var s = 2 * (r = i.length);
            if (!(s <= 65536)) {
                throw Error(a(304));
            }
            var u = new Uint16Array(s);
            u.set(i);
            O = u;
            O[0] = r + 1;
            for(i = r; i < s - 1; i++){
                O[i] = i + 1;
            }
            O[s - 1] = 0;
        } else {
            O[0] = O[r];
        }
        this.threadID = r;
        this.stack = [
            e
        ];
        this.exhausted = false;
        this.currentSelectValue = null;
        this.previousWasTextNode = false;
        this.makeStaticMarkup = t;
        this.suspenseDepth = 0;
        this.contextIndex = -1;
        this.contextStack = [];
        this.contextValueStack = [];
        this.uniqueID = 0;
        this.identifierPrefix = n && n.identifierPrefix || "";
    }
    destroy() {
        if (!this.exhausted) {
            this.exhausted = true;
            this.clearProviders();
            const e = this.threadID;
            O[e] = O[0];
            O[0] = e;
        }
    }
    pushProvider(e) {
        const t = ++this.contextIndex;
        const _context = e.type._context;
        const threadID = this.threadID;
        k(_context, threadID);
        const o = _context[threadID];
        this.contextStack[t] = _context;
        this.contextValueStack[t] = o;
        _context[threadID] = e.props.value;
    }
    popProvider() {
        const contextIndex = this.contextIndex;
        const t = this.contextStack[contextIndex];
        const n = this.contextValueStack[contextIndex];
        this.contextStack[contextIndex] = null;
        this.contextValueStack[contextIndex] = null;
        this.contextIndex--;
        t[this.threadID] = n;
    }
    clearProviders() {
        for(let e = this.contextIndex; e >= 0; e--){
            this.contextStack[e][this.threadID] = this.contextValueStack[e];
        }
    }
    read(e) {
        if (this.exhausted) {
            return null;
        }
        const t = ae;
        ae = this;
        const M_ReactCurrentDispatcher_current = M_ReactCurrentDispatcher.current;
        M_ReactCurrentDispatcher.current = ie;
        try {
            for(var r = [
                ""
            ], o = false; r[0].length < e;){
                if (this.stack.length === 0) {
                    this.exhausted = true;
                    const i = this.threadID;
                    O[i] = O[0];
                    O[0] = i;
                    break;
                }
                const l = this.stack[this.stack.length - 1];
                if (o || l.childIndex >= l.children.length) {
                    const s = l.footer;
                    if (s !== "") {
                        this.previousWasTextNode = false;
                    }
                    this.stack.pop();
                    if (l.type === "select") {
                        this.currentSelectValue = null;
                    } else if (l.type != null && l.type.type != null && l.type.type.$$typeof === c) {
                        this.popProvider(l.type);
                    } else if (l.type === p) {
                        this.suspenseDepth--;
                        const u = r.pop();
                        if (o) {
                            o = false;
                            const f = l.fallbackFrame;
                            if (!f) {
                                throw Error(a(303));
                            }
                            this.stack.push(f);
                            r[this.suspenseDepth] += "\x3c!--$!--\x3e";
                            continue;
                        }
                        r[this.suspenseDepth] += u;
                    }
                    r[this.suspenseDepth] += s;
                } else {
                    const d = l.children[l.childIndex++];
                    let h = "";
                    try {
                        h += this.render(d, l.context, l.domNamespace);
                    } catch (error) {
                        if (error != null && typeof error.then === "function") {
                            throw Error(a(294));
                        }
                        throw error;
                    }
                    if (r.length <= this.suspenseDepth) {
                        r.push("");
                    }
                    r[this.suspenseDepth] += h;
                }
            }
            return r[0];
        } finally{
            M_ReactCurrentDispatcher.current = M_ReactCurrentDispatcher_current;
            ae = t;
            X();
        }
    }
    render(e, t, n) {
        if (typeof e === "string" || typeof e === "number") {
            if ((n = `${e}`) == "") {
                return "";
            }
            if (this.makeStaticMarkup) {
                return N(n);
            }
            if (this.previousWasTextNode) {
                return `<!-- -->${N(n)}`;
            }
            this.previousWasTextNode = true;
            return N(n);
        }
        e = (t = Me(e, t, this.threadID)).child;
        t = t.context;
        if (e === null || e === false) {
            return "";
        }
        if (!isValidElement(e)) {
            if (e != null && e.$$typeof != null) {
                if ((n = e.$$typeof) === i) {
                    throw Error(a(257));
                }
                throw Error(a(258, n.toString()));
            }
            e = Children_toArray(e);
            this.stack.push({
                type: null,
                domNamespace: n,
                children: e,
                childIndex: 0,
                context: t,
                footer: ""
            });
            return "";
        }
        let e_type = e.type;
        if (typeof e_type === "string") {
            return this.renderDOM(e, t, n);
        }
        switch(e_type){
            case w:
            case C:
            case s:
            case u:
            case h:
            case l:
                e = Children_toArray(e.props.children);
                this.stack.push({
                    type: null,
                    domNamespace: n,
                    children: e,
                    childIndex: 0,
                    context: t,
                    footer: ""
                });
                return "";
            case p:
                throw Error(a(294));
            case b:
                throw Error(a(343));
        }
        if (typeof e_type === "object" && e_type !== null) {
            switch(e_type.$$typeof){
                case d:
                    U = {};
                    var _ = e_type.render(e.props, e.ref);
                    _ = Q(e_type.render, e.props, _, e.ref);
                    _ = Children_toArray(_);
                    this.stack.push({
                        type: null,
                        domNamespace: n,
                        children: _,
                        childIndex: 0,
                        context: t,
                        footer: ""
                    });
                    return "";
                case v:
                    e = [
                        <e_type.type {...module287({
                            ref: e.ref
                        }, e.props)}/>
                    ];
                    this.stack.push({
                        type: null,
                        domNamespace: n,
                        children: e,
                        childIndex: 0,
                        context: t,
                        footer: ""
                    });
                    return "";
                case c:
                    n = {
                        type: e,
                        domNamespace: n,
                        children: e_type = Children_toArray(e.props.children),
                        childIndex: 0,
                        context: t,
                        footer: ""
                    };
                    this.pushProvider(e);
                    this.stack.push(n);
                    return "";
                case f:
                    e_type = e.type;
                    _ = e.props;
                    const x = this.threadID;
                    k(e_type, x);
                    e_type = Children_toArray(_.children(e_type[x]));
                    this.stack.push({
                        type: e,
                        domNamespace: n,
                        children: e_type,
                        childIndex: 0,
                        context: t,
                        footer: ""
                    });
                    return "";
                case y:
                    throw Error(a(338));
                case m:
                    e_type = (_ = (e_type = e.type)._init)(e_type._payload);
                    e = [
                        createElement(e_type, module287({
                            ref: e.ref
                        }, e.props))
                    ];
                    this.stack.push({
                        type: null,
                        domNamespace: n,
                        children: e,
                        childIndex: 0,
                        context: t,
                        footer: ""
                    });
                    return "";
            }
        }
        throw Error(a(130, e_type == null ? e_type : typeof e_type, ""));
    }
    renderDOM(e, context, n) {
        const i = e.type.toLowerCase();
        if (n === le) {
            se(i);
        }
        if (!be.hasOwnProperty(i)) {
            if (!ye.test(i)) {
                throw Error(a(65, i));
            }
            be[i] = true;
        }
        let e_props = e.props;
        if (i === "input") {
            e_props = module287({
                type: undefined
            }, e_props, {
                defaultChecked: undefined,
                defaultValue: undefined,
                value: e_props.value ?? e_props.defaultValue,
                checked: e_props.checked ?? e_props.defaultChecked
            });
        } else if (i === "textarea") {
            var s = e_props.value;
            if (s == null) {
                s = e_props.defaultValue;
                var u = e_props.children;
                if (u != null) {
                    if (s != null) {
                        throw Error(a(92));
                    }
                    if (Array.isArray(u)) {
                        if (!(u.length <= 1)) {
                            throw Error(a(93));
                        }
                        u = u[0];
                    }
                    s = `${u}`;
                }
                if (s == null) {
                    s = "";
                }
            }
            e_props = module287({}, e_props, {
                value: undefined,
                children: `${s}`
            });
        } else if (i === "select") {
            this.currentSelectValue = e_props.value ?? e_props.defaultValue;
            e_props = module287({}, e_props, {
                value: undefined
            });
        } else if (i === "option") {
            u = this.currentSelectValue;
            var c = ((e)=>{
                if (e == null) {
                    return e;
                }
                let t = "";
                Children.forEach(e, function(e) {
                    if (e != null) {
                        t += e;
                    }
                });
                return t;
            })(e_props.children);
            if (u != null) {
                var f = e_props.value != null ? `${e_props.value}` : c;
                s = false;
                if (Array.isArray(u)) {
                    for(var d = 0; d < u.length; d++){
                        if (`${u[d]}` === f) {
                            s = true;
                            break;
                        }
                    }
                } else {
                    s = `${u}` === f;
                }
                e_props = module287({
                    selected: undefined,
                    children: undefined
                }, e_props, {
                    selected: s,
                    children: c
                });
            }
        }
        if (s = e_props) {
            if (ce[i] && (s.children != null || s.dangerouslySetInnerHTML != null)) {
                throw Error(a(137, i));
            }
            if (s.dangerouslySetInnerHTML != null) {
                if (s.children != null) {
                    throw Error(a(60));
                }
                if (typeof s.dangerouslySetInnerHTML !== "object" || !("__html" in s.dangerouslySetInnerHTML)) {
                    throw Error(a(61));
                }
            }
            if (s.style != null && typeof s.style !== "object") {
                throw Error(a(62));
            }
        }
        s = e_props;
        u = this.makeStaticMarkup;
        c = this.stack.length === 1;
        f = `<${e.type}`;
        e: if (i.indexOf("-") === -1) {
            d = typeof s.is === "string";
        } else {
            switch(i){
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    d = false;
                    break e;
                default:
                    d = true;
            }
        }
        for(w in s){
            if (hasOwnProperty_1.call(s, w)) {
                let p = s[w];
                if (p != null) {
                    if (w === "style") {
                        var h;
                        let v = "";
                        let m = "";
                        for(h in p){
                            if (p.hasOwnProperty(h)) {
                                let g = h.indexOf("--") === 0;
                                const y = p[h];
                                if (y != null) {
                                    if (g) var b = h;
                                    else {
                                        b = h;
                                        if (Ce.hasOwnProperty(b)) {
                                            b = Ce[b];
                                        } else {
                                            const C = b.replace(pe, "-$1").toLowerCase().replace(he, "-ms-");
                                            b = Ce[b] = C;
                                        }
                                    }
                                    v += `${m + b}:`;
                                    m = h;
                                    v += g = y == null || typeof y === "boolean" || y === "" ? "" : g || typeof y !== "number" || y === 0 || fe.hasOwnProperty(m) && fe[m] ? `${y}`.trim() : `${y}px`;
                                    m = ";";
                                }
                            }
                        }
                        p = v || null;
                    }
                    h = null;
                    if (d) {
                        if (!_e.hasOwnProperty(w)) {
                            h = V(h = w) && p != null ? `${h}="${N(p)}"` : "";
                        }
                    } else {
                        h = I(w, p);
                    }
                    if (h) {
                        f += ` ${h}`;
                    }
                }
            }
        }
        if (!u) {
            if (c) {
                f += ' data-reactroot=""';
            }
        }
        var w = f;
        s = "";
        if (ue.hasOwnProperty(i)) {
            w += "/>";
        } else {
            w += ">";
            s = `</${e.type}>`;
        }
        e: {
            if ((u = e_props.dangerouslySetInnerHTML) != null) {
                if (u.__html != null) {
                    u = u.__html;
                    break e;
                }
            } else if (typeof (u = e_props.children) === "string" || typeof u === "number") {
                u = N(u);
                break e;
            }
            u = null;
        }
        if (u != null) {
            e_props = [];
            if (ge.hasOwnProperty(i) && u.charAt(0) === "\n") {
                w += "\n";
            }
            w += u;
        } else {
            e_props = Children_toArray(e_props.children);
        }
        e = e.type;
        n = n == null || n === "http://www.w3.org/1999/xhtml" ? se(e) : n === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
        this.stack.push({
            domNamespace: n,
            type: i,
            children: e_props,
            childIndex: 0,
            context,
            footer: s
        });
        this.previousWasTextNode = false;
        return w;
    }
}
export const renderToNodeStream = function() {
    throw Error(a(207));
};
export const renderToStaticMarkup = function(e, t) {
    e = new Ee(e, true, t);
    try {
        return e.read(Infinity);
    } finally{
        e.destroy();
    }
};
export const renderToStaticNodeStream = function() {
    throw Error(a(208));
};
export const renderToString = function(e, t) {
    e = new Ee(e, false, t);
    try {
        return e.read(Infinity);
    } finally{
        e.destroy();
    }
};
export const version = "17.0.2";
