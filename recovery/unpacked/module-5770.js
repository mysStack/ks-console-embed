import module1173 from "./module-1173.js";
import { Children, Component, Fragment, cloneElement, createContext, createElement, createRef, forwardRef, isValidElement, memo, useCallback, useContext, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } from "./module-553.js";
import module106 from "./module-106.js";
import module1310 from "./module-1310.js";
import * as module1260 from "./module-1260.js";
import "./module-761.js";
import module2433 from "./module-2433.js";
import { isFragment, isMemo } from "./module-2434.js";
function o(e) {
    return (o = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function i(e) {
    const t = ((e)=>{
        const t = "string";
        if (o(e) != "object" || !e) {
            return e;
        }
        const n = e[Symbol.toPrimitive];
        if (n !== undefined) {
            const r = n.call(e, t);
            if (o(r) != "object") {
                return r;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
    })(e);
    if (o(t) == "symbol") {
        return t;
    }
    return String(t);
}
function a(e, t, n) {
    if ((t = i(t)) in e) {
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
function l(e, t) {
    const n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        n.push.apply(n, r);
    }
    return n;
}
function u(e) {
    for(let t = 1; t < arguments.length; t++){
        var n = arguments[t] ?? {};
        if (t % 2) {
            l(Object(n), true).forEach((t)=>{
                e[t] = n[t];
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
        } else {
            l(Object(n)).forEach((t)=>{
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
        }
    }
    return e;
}
function d(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function p(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, i(r.key), r);
    }
}
function h(e, t, n) {
    if (t) {
        p(e.prototype, t);
    }
    if (n) {
        p(e, n);
    }
    Object.defineProperty(e, "prototype", {
        writable: false
    });
    return e;
}
function v(e) {
    if (e === undefined) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return e;
}
function g(e, t) {
    return (g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
function y(e, Component) {
    if (typeof Component !== "function" && Component !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    e.prototype = Object.create(Component && Component.prototype, {
        constructor: {
            value: e,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(e, "prototype", {
        writable: false
    });
    if (Component) {
        g(e, Component);
    }
}
function m(e) {
    return (m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function b(e, t) {
    if (t && (o(t) === "object" || typeof t === "function")) {
        return t;
    }
    if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
    }
    return v(e);
}
function x(e) {
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
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    })();
    return function() {
        let n;
        const r = m(e);
        if (t) {
            const o = m(this).constructor;
            n = Reflect.construct(r, arguments, o);
        } else {
            n = r.apply(this, arguments);
        }
        return b(this, n);
    };
}
var C = {
    MAC_ENTER: 3,
    BACKSPACE: 8,
    TAB: 9,
    NUM_CENTER: 12,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    PRINT_SCREEN: 44,
    INSERT: 45,
    DELETE: 46,
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    QUESTION_MARK: 63,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    META: 91,
    WIN_KEY_RIGHT: 92,
    CONTEXT_MENU: 93,
    NUM_ZERO: 96,
    NUM_ONE: 97,
    NUM_TWO: 98,
    NUM_THREE: 99,
    NUM_FOUR: 100,
    NUM_FIVE: 101,
    NUM_SIX: 102,
    NUM_SEVEN: 103,
    NUM_EIGHT: 104,
    NUM_NINE: 105,
    NUM_MULTIPLY: 106,
    NUM_PLUS: 107,
    NUM_MINUS: 109,
    NUM_PERIOD: 110,
    NUM_DIVISION: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMLOCK: 144,
    SEMICOLON: 186,
    DASH: 189,
    EQUALS: 187,
    COMMA: 188,
    PERIOD: 190,
    SLASH: 191,
    APOSTROPHE: 192,
    SINGLE_QUOTE: 222,
    OPEN_SQUARE_BRACKET: 219,
    BACKSLASH: 220,
    CLOSE_SQUARE_BRACKET: 221,
    WIN_KEY: 224,
    MAC_FF_META: 224,
    WIN_IME: 229,
    isTextModifyingKeyEvent: function(e) {
        const e_keyCode = e.keyCode;
        if (e.altKey && !e.ctrlKey || e.metaKey || e_keyCode >= C.F1 && e_keyCode <= C.F12) {
            return false;
        }
        switch(e_keyCode){
            case C.ALT:
            case C.CAPS_LOCK:
            case C.CONTEXT_MENU:
            case C.CTRL:
            case C.DOWN:
            case C.END:
            case C.ESC:
            case C.HOME:
            case C.INSERT:
            case C.LEFT:
            case C.MAC_FF_META:
            case C.META:
            case C.NUMLOCK:
            case C.NUM_CENTER:
            case C.PAGE_DOWN:
            case C.PAGE_UP:
            case C.PAUSE:
            case C.PRINT_SCREEN:
            case C.RIGHT:
            case C.SHIFT:
            case C.UP:
            case C.WIN_KEY:
            case C.WIN_KEY_RIGHT:
                return false;
            default:
                return true;
        }
    },
    isCharacterKey: function(e) {
        if (e >= C.ZERO && e <= C.NINE) {
            return true;
        }
        if (e >= C.NUM_ZERO && e <= C.NUM_MULTIPLY) {
            return true;
        }
        if (e >= C.A && e <= C.Z) {
            return true;
        }
        if (window.navigator.userAgent.indexOf("WebKit") !== -1 && e === 0) {
            return true;
        }
        switch(e){
            case C.SPACE:
            case C.QUESTION_MARK:
            case C.NUM_PLUS:
            case C.NUM_MINUS:
            case C.NUM_PERIOD:
            case C.NUM_DIVISION:
            case C.SEMICOLON:
            case C.DASH:
            case C.EQUALS:
            case C.COMMA:
            case C.PERIOD:
            case C.SLASH:
            case C.APOSTROPHE:
            case C.SINGLE_QUOTE:
            case C.OPEN_SQUARE_BRACKET:
            case C.BACKSLASH:
            case C.CLOSE_SQUARE_BRACKET:
                return true;
            default:
                return false;
        }
    }
};
const O = C;
function E(e) {
    return (E = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
const k = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`.split(/[\s\n]+/);
function j(e, t) {
    return e.indexOf(t) === 0;
}
function T(e) {
    let t;
    const n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    t = n === false ? {
        aria: true,
        data: true,
        attr: true
    } : n === true ? {
        aria: true
    } : {
        ...n
    };
    const r = {};
    Object.keys(e).forEach((n)=>{
        if (t.aria && (n === "role" || j(n, "aria-")) || t.data && j(n, "data-") || t.attr && k.includes(n)) {
            r[n] = e[n];
        }
    });
    return r;
}
let P = {};
const L = [];
function z(e, t) {}
function N(e, t) {}
function D(e, t, n) {
    if (!(t || P[n])) {
        e(false, n);
        P[n] = true;
    }
}
function I(e, t) {
    D(z, e, t);
}
I.preMessage = function(e) {
    L.push(e);
};
I.resetWarned = function() {
    P = {};
};
I.noteOnce = function(e, t) {
    D(N, e, t);
};
const R = I;
const FContext = createContext(null);
function V(data) {
    if (data == null) {
        throw new TypeError(`Cannot destructure ${data}`);
    }
}
function U(props, t) {
    if (props == null) {
        return {};
    }
    let n;
    let r;
    const o = ((props_1, t)=>{
        if (props_1 == null) {
            return {};
        }
        let n;
        let r;
        const o = {};
        const i = Object.keys(props_1);
        for(r = 0; r < i.length; r++){
            n = i[r];
            if (!(t.indexOf(n) >= 0)) {
                o[n] = props_1[n];
            }
        }
        return o;
    })(props, t);
    if (Object.getOwnPropertySymbols) {
        const i = Object.getOwnPropertySymbols(props);
        for(r = 0; r < i.length; r++){
            n = i[r];
            if (!(t.indexOf(n) >= 0)) {
                if (Object.prototype.propertyIsEnumerable.call(props, n)) {
                    o[n] = props[n];
                }
            }
        }
    }
    return o;
}
function Z() {
    return !(typeof window === "undefined" || !window.document || !window.document.createElement);
}
const W = Z() ? useLayoutEffect : useEffect;
const useK = (e, t)=>{
    const nRef = useRef(true);
    W(function() {
        return e(nRef.current);
    }, t);
    W(function() {
        nRef.current = false;
        return function() {
            nRef.current = true;
        };
    }, []);
};
function q(e) {
    return (q = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function Y(e) {
    const t = ((e)=>{
        const t = "string";
        if (q(e) !== "object" || e === null) {
            return e;
        }
        const n = e[Symbol.toPrimitive];
        if (n !== undefined) {
            const r = n.call(e, t);
            if (q(r) !== "object") {
                return r;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
    })(e);
    if (q(t) === "symbol") {
        return t;
    }
    return String(t);
}
function X(e, t, n) {
    if ((t = Y(t)) in e) {
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
function J(e, t) {
    const n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        n.push.apply(n, r);
    }
    return n;
}
function Q(e) {
    for(let t = 1; t < arguments.length; t++){
        var n = arguments[t] ?? {};
        if (t % 2) {
            J(Object(n), true).forEach((t)=>{
                e[t] = n[t];
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
        } else {
            J(Object(n)).forEach((t)=>{
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
        }
    }
    return e;
}
function ee(e, t) {
    if (t == null || t > e.length) {
        t = e.length;
    }
    for(var n = 0, r = new Array(t); n < t; n++){
        r[n] = e[n];
    }
    return r;
}
function te(e, t) {
    return ((e)=>{
        if (Array.isArray(e)) {
            return e;
        }
    })(e) || ((e, t)=>{
        let n = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (n != null) {
            let r;
            let o;
            let i;
            let a;
            const l = [];
            let u = true;
            let s = false;
            try {
                i = (n = n.call(e)).next;
                if (t === 0) {
                    if (Object(n) !== n) {
                        return;
                    }
                    u = false;
                } else {
                    for(; !(u = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); u = true);
                }
            } catch (error) {
                s = true;
                o = error;
            } finally{
                try {
                    if (!u && n.return != null && (a = n.return(), Object(a) !== a)) {
                        return;
                    }
                } finally{
                    if (s) {
                        throw o;
                    }
                }
            }
            return l;
        }
    })(e, t) || ((e, t)=>{
        if (e) {
            if (typeof e === "string") {
                return ee(e, t);
            }
            let n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) {
                n = e.constructor.name;
            }
            if (n === "Map" || n === "Set") {
                return Array.from(e);
            }
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                return ee(e, t);
            }
            return undefined;
        }
    })(e, t) || (()=>{
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
}
const Filler = forwardRef(function({ height, offsetY, offsetX, children, prefixCls, onInnerResize, innerProps, rtl, extra }, t) {
    let n;
    let d = {};
    let p = {
        display: "flex",
        flexDirection: "column"
    };
    if (offsetY !== undefined) {
        d = {
            height,
            position: "relative",
            overflow: "hidden"
        };
        p = {
            ...p,
            ...(X(n = {
                transform: `translateY(${offsetY}px)`
            }, rtl ? "marginRight" : "marginLeft", -offsetX), X(n, "position", "absolute"), X(n, "left", 0), X(n, "right", 0), X(n, "top", 0), n)
        };
    }
    return <div style={d}><module1260.a onResize={function(e) {
        if (e.offsetHeight && onInnerResize) {
            onInnerResize();
        }
    }}><div style={p} className={module1310({
        [`${prefixCls}-holder-inner`]: prefixCls
    })} ref={t} {...innerProps}>{children}{extra}</div></module1260.a></div>;
});
Filler.displayName = "Filler";
const Ue = Filler;
let se = function(e) {
    return +setTimeout(e, 16);
};
let ce = function(e) {
    return clearTimeout(e);
};
if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
    se = function(e) {
        return window.requestAnimationFrame(e);
    };
    ce = function(e) {
        return window.cancelAnimationFrame(e);
    };
}
let fe = 0;
const map = new Map;
function pe(e) {
    map.delete(e);
}
const he = function(e, t = 1) {
    const n = fe += 1;
    function r(t) {
        if (t === 0) {
            pe(n);
            e();
        } else {
            const o = se(function() {
                r(t - 1);
            });
            map.set(n, o);
        }
    }
    r(t);
    return n;
};
he.cancel = function(e) {
    const t = map.get(e);
    pe(t);
    return ce(t);
};
const ve = he;
function ge(e, horizontal) {
    return ("touches" in e ? e.touches[0] : e)[horizontal ? "pageX" : "pageY"];
}
const Ye1 = forwardRef(function({ prefixCls, rtl, scrollOffset, scrollRange, onStartMove, onStopMove, onScroll, horizontal, spinSize, containerSize, style, thumbStyle }, t) {
    let n;
    const [g, setG] = useState(false);
    const [pageY, setPageY] = useState(null);
    const [startTop, setStartTop] = useState(null);
    const O = !rtl;
    const ERef = useRef();
    const MRef = useRef();
    const [A, setA] = useState(false);
    const jRef = useRef();
    const T = function() {
        clearTimeout(jRef.current);
        setA(true);
        jRef.current = setTimeout(()=>{
            setA(false);
        }, 3000);
    };
    const P = scrollRange - containerSize || 0;
    const L = containerSize - spinSize || 0;
    const z = P > 0;
    const N = useMemo(function() {
        if (scrollOffset === 0 || P === 0) {
            return 0;
        }
        return scrollOffset / P * L;
    }, [
        scrollOffset,
        P,
        L
    ]);
    const DRef = useRef({
        top: N,
        dragging: g,
        pageY,
        startTop
    });
    DRef.current = {
        top: N,
        dragging: g,
        pageY,
        startTop
    };
    const onMouseDown = function(e) {
        setG(true);
        setPageY(ge(e, horizontal));
        setStartTop(DRef.current.top);
        onStartMove();
        e.stopPropagation();
        e.preventDefault();
    };
    useEffect(function() {
        const e = function(e) {
            e.preventDefault();
        };
        const ERef_current = ERef.current;
        const MRef_current = MRef.current;
        ERef_current.addEventListener("touchstart", e);
        MRef_current.addEventListener("touchstart", onMouseDown);
        return function() {
            ERef_current.removeEventListener("touchstart", e);
            MRef_current.removeEventListener("touchstart", onMouseDown);
        };
    }, []);
    const RRef = useRef();
    RRef.current = P;
    const BRef = useRef();
    BRef.current = L;
    useEffect(function() {
        if (g) {
            let e;
            const t = function(t) {
                const DRef_current = DRef.current;
                const { dragging, pageY, startTop } = DRef_current;
                ve.cancel(e);
                if (dragging) {
                    const a = ge(t, horizontal) - pageY;
                    let l = startTop;
                    if (!O && horizontal) {
                        l -= a;
                    } else {
                        l += a;
                    }
                    const u = RRef.current;
                    const f = BRef.current;
                    const d = f ? l / f : 0;
                    let p = Math.ceil(d * u);
                    p = Math.max(p, 0);
                    p = Math.min(p, u);
                    e = ve(function() {
                        onScroll(p, horizontal);
                    });
                }
            };
            const n = function() {
                setG(false);
                onStopMove();
            };
            window.addEventListener("mousemove", t);
            window.addEventListener("touchmove", t);
            window.addEventListener("mouseup", n);
            window.addEventListener("touchend", n);
            return function() {
                window.removeEventListener("mousemove", t);
                window.removeEventListener("touchmove", t);
                window.removeEventListener("mouseup", n);
                window.removeEventListener("touchend", n);
                ve.cancel(e);
            };
        }
    }, [
        g
    ]);
    useEffect(function() {
        T();
    }, [
        scrollOffset
    ]);
    useImperativeHandle(t, function() {
        return {
            delayHidden: T
        };
    });
    const F = `${prefixCls}-scrollbar`;
    const V = {
        position: "absolute",
        visibility: A && z ? null : "hidden"
    };
    const $ = {
        position: "absolute",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: 99,
        cursor: "pointer",
        userSelect: "none"
    };
    if (horizontal) {
        V.height = 8;
        V.left = 0;
        V.right = 0;
        V.bottom = 0;
        $.height = "100%";
        $.width = spinSize;
        if (O) {
            $.left = N;
        } else {
            $.right = N;
        }
    } else {
        V.width = 8;
        V.top = 0;
        V.bottom = 0;
        if (O) {
            V.right = 0;
        } else {
            V.left = 0;
        }
        $.width = "100%";
        $.height = spinSize;
        $.top = N;
    }
    return <div ref={ERef} className={module1310(F, (n = {}, X(n, `${F}-horizontal`, horizontal), X(n, `${F}-vertical`, !horizontal), X(n, `${F}-visible`, A), n))} style={{
        ...V,
        ...style
    }} onMouseDown={function(e) {
        e.stopPropagation();
        e.preventDefault();
    }} onMouseMove={T}><div ref={MRef} className={module1310(`${F}-thumb`, {
        [`${F}-thumb-moving`]: g
    })} style={{
        ...$,
        ...thumbStyle
    }} onMouseDown={onMouseDown}/></div>;
});
function Me1Component({ children, setRef }) {
    const r = useCallback(function(e) {
        setRef(e);
    }, []);
    return cloneElement(children, {
        ref: r
    });
}
function be(e) {
    if (((e)=>e instanceof HTMLElement || e instanceof SVGElement)(e)) {
        return e;
    }
    if (e instanceof Component) {
        return module106.findDOMNode(e);
    }
    return null;
}
function xe(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, Y(r.key), r);
    }
}
const we = (()=>{
    function e() {
        ((e, t)=>{
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        })(this, e);
        this.maps = undefined;
        this.id = 0;
        this.maps = Object.create(null);
    }
    let t;
    let n;
    t = e;
    if (n = [
        {
            key: "set",
            value: function(e, t) {
                this.maps[e] = t;
                this.id += 1;
            }
        },
        {
            key: "get",
            value: function(e) {
                return this.maps[e];
            }
        }
    ]) {
        xe(t.prototype, n);
    }
    Object.defineProperty(t, "prototype", {
        writable: false
    });
    return e;
})();
const _e = typeof window !== "undefined" && window.document && window.document.createElement ? useLayoutEffect : useEffect;
const useCe = (e, t)=>{
    const nRef = useRef(true);
    _e(function() {
        return e(nRef.current);
    }, t);
    _e(function() {
        nRef.current = false;
        return function() {
            nRef.current = true;
        };
    }, []);
};
function useOe(e) {
    const tRef = useRef();
    tRef.current = e;
    return useCallback(function(...r) {
        let e;
        if ((e = tRef.current) === null || e === undefined) {
            return undefined;
        }
        return e.call(tRef, ...r);
    }, []);
}
typeof Reflect === "undefined" ? Object.keys : Reflect.ownKeys;
let Ee = {};
const Me = [];
function Se(e, t) {}
function Ae(e, t) {}
function ke(e, t, n) {
    if (!(t || Ee[n])) {
        e(false, n);
        Ee[n] = true;
    }
}
function je(e, t) {
    ke(Se, e, t);
}
je.preMessage = function(e) {
    Me.push(e);
};
je.resetWarned = function() {
    Ee = {};
};
je.noteOnce = function(e, t) {
    ke(Ae, e, t);
};
const Te = (typeof navigator === "undefined" ? "undefined" : q(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const usePe = (e, bottom)=>{
    const nRef = useRef(false);
    const rRef = useRef(null);
    function o() {
        clearTimeout(rRef.current);
        nRef.current = true;
        rRef.current = setTimeout(()=>{
            nRef.current = false;
        }, 50);
    }
    const iRef = useRef({
        top: e,
        bottom
    });
    iRef.current.top = e;
    iRef.current.bottom = bottom;
    return function(e) {
        const t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        const a = e < 0 && iRef.current.top || e > 0 && iRef.current.bottom;
        if (t && a) {
            clearTimeout(rRef.current);
            nRef.current = false;
        } else if (!(a && !nRef.current)) {
            o();
        }
        return !nRef.current && a;
    };
};
function useLe(e, t, n, r, o) {
    const iRef = useRef(0);
    const aRef = useRef(null);
    const lRef = useRef(null);
    const uRef = useRef(false);
    const s = usePe(t, n);
    const cRef = useRef(null);
    const fRef = useRef(null);
    return [
        function(t) {
            if (e) {
                ve.cancel(fRef.current);
                fRef.current = ve(function() {
                    cRef.current = null;
                }, 2);
                const { deltaX, deltaY, shiftKey } = t;
                let h = deltaX;
                let v = deltaY;
                if (cRef.current === "sx" || !cRef.current && shiftKey && deltaY && !deltaX) {
                    h = deltaY;
                    v = 0;
                    cRef.current = "sx";
                }
                const g = Math.abs(h);
                const y = Math.abs(v);
                if (cRef.current === null) {
                    cRef.current = r && g > y ? "x" : "y";
                }
                if (cRef.current === "y") {
                    ((e, t)=>{
                        ve.cancel(aRef.current);
                        iRef.current += t;
                        lRef.current = t;
                        if (!s(t)) {
                            if (!Te) {
                                e.preventDefault();
                            }
                            aRef.current = ve(function() {
                                const e = uRef.current ? 10 : 1;
                                o(iRef.current * e);
                                iRef.current = 0;
                            });
                        }
                    })(t, v);
                } else {
                    ((e, t)=>{
                        o(t, true);
                        if (!Te) {
                            e.preventDefault();
                        }
                    })(t, h);
                }
            }
        },
        function(t) {
            if (e) {
                uRef.current = t.detail === lRef.current;
            }
        }
    ];
}
function ze(e = 0, t = 0) {
    let n = e / t * 100;
    if (isNaN(n)) {
        n = 0;
    }
    n = Math.max(n, 20);
    n = Math.min(n, e / 2);
    return Math.floor(n);
}
const De = [];
const Ie = {
    overflowY: "auto",
    overflowAnchor: "none"
};
const List = forwardRef(function({ prefixCls = "rc-virtual-list", className, height, itemHeight, fullHeight = true, style, data, children, itemKey, virtual, direction, scrollWidth, component = "div", onScroll, onVirtualScroll, onVisibleChange, innerProps, extraRender, styles, ...rest }, t) {
    const E = !(virtual === false || !height || !itemHeight);
    const virtual_1 = E && data && (itemHeight * data.length > height || !!scrollWidth);
    const rtl = direction === "rtl";
    const A = module1310(prefixCls, {
        [`${prefixCls}-rtl`]: rtl
    }, className);
    const k = data || De;
    const jRef = useRef();
    const TRef = useRef();
    const [L, setL] = useState(0);
    const [D, setD] = useState(0);
    const [B, setB] = useState(false);
    const onStartMove = function() {
        setB(true);
    };
    const onStopMove = function() {
        setB(false);
    };
    const getKey = useCallback(function(e) {
        if (typeof itemKey === "function") {
            return itemKey(e);
        }
        return e?.[itemKey];
    }, [
        itemKey
    ]);
    const Z = {
        getKey
    };
    function W(e) {
        setL(function(t) {
            const n = ((e)=>{
                let t = e;
                if (!Number.isNaN(TeRef.current)) {
                    t = Math.min(t, TeRef.current);
                }
                return Math.max(t, 0);
            })(typeof e === "function" ? e(t) : e);
            jRef.current.scrollTop = n;
            return n;
        });
    }
    const KRef = useRef({
        start: 0,
        end: k.length
    });
    const YRef = useRef();
    const J = te(((e, getKey_1, n)=>{
        const [o, setO] = useState(e);
        const [l, setL] = useState(null);
        useEffect(function() {
            const r = ((e, t, getKey_1_1)=>{
                let r;
                let o;
                const e_length = e.length;
                const t_length = t.length;
                if (e_length === 0 && t_length === 0) {
                    return null;
                }
                if (e_length < t_length) {
                    r = e;
                    o = t;
                } else {
                    r = t;
                    o = e;
                }
                const l = {
                    __EMPTY_ITEM__: true
                };
                function u(e) {
                    if (e !== undefined) {
                        return getKey_1_1(e);
                    }
                    return l;
                }
                let s = null;
                let multiple = Math.abs(e_length - t_length) !== 1;
                for(let f = 0; f < o.length; f += 1){
                    const d = u(r[f]);
                    if (d !== u(o[f])) {
                        s = f;
                        multiple = multiple || d !== u(o[f + 1]);
                        break;
                    }
                }
                if (s === null) {
                    return null;
                }
                return {
                    index: s,
                    multiple
                };
            })(o || [], e || [], getKey_1);
            if (r?.index !== undefined) {
                if (n != null) {
                    n(r.index);
                }
                setL(e[r.index]);
            }
            setO(e);
        }, [
            e
        ]);
        return [
            l
        ];
    })(k, getKey), 1)[0];
    YRef.current = J;
    const ee = ((getKey_1, t, n)=>{
        const [o, setO] = useState(0);
        const aRef = useRef(new Map);
        const lRef = useRef(new we);
        const uRef = useRef();
        function s() {
            ve.cancel(uRef.current);
        }
        function c(...args) {
            const e = args.length > 0 && args[0] !== undefined && args[0];
            s();
            const t = function() {
                aRef.current.forEach((e, t)=>{
                    if (e && e.offsetParent) {
                        const n = be(e);
                        const r = n.offsetHeight;
                        if (lRef.current.get(t) !== r) {
                            lRef.current.set(t, n.offsetHeight);
                        }
                    }
                });
                setO(function(e) {
                    return e + 1;
                });
            };
            if (e) {
                t();
            } else {
                uRef.current = ve(t);
            }
        }
        useEffect(function() {
            return s;
        }, []);
        return [
            function(t, n) {
                const r = getKey_1(t);
                aRef.current.get(r);
                if (n) {
                    aRef.current.set(r, n);
                    c();
                } else {
                    aRef.current.delete(r);
                }
            },
            c,
            lRef.current,
            o
        ];
    })(getKey);
    const [oe, le, se, ce] = ee;
    const fe = useMemo(function() {
        if (!E) {
            return {
                scrollHeight: undefined,
                start: 0,
                end: k.length - 1,
                offset: undefined
            };
        }
        if (!virtual_1) {
            return {
                scrollHeight: TRef.current?.offsetHeight || 0,
                start: 0,
                end: k.length - 1,
                offset: undefined
            };
        }
        let start_1;
        let offset_1;
        let r;
        let scrollHeight_1 = 0;
        for(let l = k.length, u = 0; u < l; u += 1){
            const s = k[u];
            const c = getKey(s);
            const f = se.get(c);
            const d = scrollHeight_1 + (f === undefined ? itemHeight : f);
            if (d >= L && start_1 === undefined) {
                start_1 = u;
                offset_1 = scrollHeight_1;
            }
            if (d > L + height && r === undefined) {
                r = u;
            }
            scrollHeight_1 = d;
        }
        if (start_1 === undefined) {
            start_1 = 0;
            offset_1 = 0;
            r = Math.ceil(height / itemHeight);
        }
        if (r === undefined) {
            r = k.length - 1;
        }
        return {
            scrollHeight: scrollHeight_1,
            start: start_1,
            end: r = Math.min(r + 1, k.length - 1),
            offset: offset_1
        };
    }, [
        virtual_1,
        E,
        L,
        k,
        ce,
        height
    ]);
    const { scrollHeight, start, end, offset } = fe;
    KRef.current.start = start;
    KRef.current.end = end;
    const [_e, set_e] = useState({
        width: 0,
        height
    });
    const MeRef = useRef();
    const SeRef = useRef();
    const Ae = useMemo(function() {
        return ze(_e.width, scrollWidth);
    }, [
        _e.width,
        scrollWidth
    ]);
    const ke = useMemo(function() {
        return ze(_e.height, scrollHeight);
    }, [
        _e.height,
        scrollHeight
    ]);
    const je = scrollHeight - height;
    var TeRef = useRef(je);
    TeRef.current = je;
    const Re = L <= 0;
    const He = L >= je;
    const Be = usePe(Re, He);
    const getScrollInfo = function() {
        return {
            x: rtl ? -D : D,
            y: L
        };
    };
    const VeRef = useRef(getScrollInfo());
    const $e = useOe(function() {
        if (onVirtualScroll) {
            const e = getScrollInfo();
            if (!(VeRef.current.x === e.x && VeRef.current.y === e.y)) {
                onVirtualScroll(e);
                VeRef.current = e;
            }
        }
    });
    function onScroll_1(e, t) {
        const n = e;
        if (t) {
            module106.flushSync(function() {
                setD(n);
            });
            $e();
        } else {
            W(n);
        }
    }
    const Ze = (e)=>{
        let t = e;
        const n = scrollWidth - _e.width;
        t = Math.max(t, 0);
        return Math.min(t, n);
    };
    const We = useOe(function(e, t) {
        if (t) {
            module106.flushSync(function() {
                setD(function(t) {
                    return Ze(t + (rtl ? -e : e));
                });
            });
            $e();
        } else {
            W(function(t) {
                return t + e;
            });
        }
    });
    const [Ge, qe] = useLe(E, Re, He, !!scrollWidth, We);
    ((e, jRef_1, n)=>{
        let r;
        const oRef = useRef(false);
        const iRef = useRef(0);
        const aRef = useRef(null);
        const lRef = useRef(null);
        const u = function(e) {
            if (oRef.current) {
                const t = Math.ceil(e.touches[0].pageY);
                let r = iRef.current - t;
                iRef.current = t;
                if (n(r)) {
                    e.preventDefault();
                }
                clearInterval(lRef.current);
                lRef.current = setInterval(()=>{
                    if (!n(r *= 14 / 15, true) || Math.abs(r) <= 0.1) {
                        clearInterval(lRef.current);
                    }
                }, 16);
            }
        };
        const s = function() {
            oRef.current = false;
            r();
        };
        const c = function(e) {
            r();
            if (!(e.touches.length !== 1 || oRef.current)) {
                oRef.current = true;
                iRef.current = Math.ceil(e.touches[0].pageY);
                aRef.current = e.target;
                aRef.current.addEventListener("touchmove", u);
                aRef.current.addEventListener("touchend", s);
            }
        };
        r = function() {
            if (aRef.current) {
                aRef.current.removeEventListener("touchmove", u);
                aRef.current.removeEventListener("touchend", s);
            }
        };
        useCe(()=>{
            if (e) {
                jRef_1.current.addEventListener("touchstart", c);
            }
            return function() {
                jRef_1.current?.removeEventListener("touchstart", c);
                r();
                clearInterval(lRef.current);
            };
        }, [
            e
        ]);
    })(E, jRef, (deltaY, t)=>!Be(deltaY, t) && (Ge({
            preventDefault: function() {},
            deltaY
        }), true));
    useCe(()=>{
        function e(e) {
            if (E) {
                e.preventDefault();
            }
        }
        const jRef_current = jRef.current;
        jRef_current.addEventListener("wheel", Ge);
        jRef_current.addEventListener("DOMMouseScroll", qe);
        jRef_current.addEventListener("MozMousePixelScroll", e);
        return function() {
            jRef_current.removeEventListener("wheel", Ge);
            jRef_current.removeEventListener("DOMMouseScroll", qe);
            jRef_current.removeEventListener("MozMousePixelScroll", e);
        };
    }, [
        E
    ]);
    useCe(()=>{
        if (scrollWidth) {
            setD(function(e) {
                return Ze(e);
            });
        }
    }, [
        _e.width,
        scrollWidth
    ]);
    const onMouseEnter = function() {
        MeRef.current?.delayHidden();
        SeRef.current?.delayHidden();
    };
    const Xe = ((jRef_1, t, n, itemHeight_1, getKey_1, a, onMouseEnter_1)=>{
        const i = 0;
        const uRef = useRef();
        const [c, setC] = useState(null);
        useCe(()=>{
            if (c && c.times < 10) {
                if (!jRef_1.current) {
                    return void setC(function(e) {
                        return {
                            ...e
                        };
                    });
                }
                le(true);
                const { targetAlign, originAlign, index, offset } = c;
                const d = jRef_1.current.clientHeight;
                let p = false;
                let targetAlign_1 = targetAlign;
                let lastTop = null;
                if (d) {
                    const g = targetAlign || originAlign;
                    let y = 0;
                    let m = 0;
                    let b = 0;
                    for(var x = Math.min(t.length - 1, index), w = 0; w <= x; w += 1){
                        const _ = getKey_1(t[w]);
                        m = y;
                        const C = n.get(_);
                        y = b = m + (C === undefined ? itemHeight_1 : C);
                    }
                    let O = g === "top" ? offset : d - offset;
                    for(let E = x; E >= 0; E -= 1){
                        const M = getKey_1(t[E]);
                        const S = n.get(M);
                        if (S === undefined) {
                            p = true;
                            break;
                        }
                        if ((O -= S) <= 0) {
                            break;
                        }
                    }
                    switch(g){
                        case "top":
                            lastTop = m - offset;
                            break;
                        case "bottom":
                            lastTop = b - d + offset;
                            break;
                        default:
                            const A = jRef_1.current.scrollTop;
                            if (m < A) {
                                targetAlign_1 = "top";
                            } else if (b > A + d) {
                                targetAlign_1 = "bottom";
                            }
                    }
                    if (lastTop !== null) {
                        a(lastTop);
                    }
                    if (lastTop !== c.lastTop) {
                        p = true;
                    }
                }
                if (p) {
                    setC({
                        ...c,
                        times: c.times + 1,
                        targetAlign: targetAlign_1,
                        lastTop
                    });
                }
            }
        }, [
            c,
            jRef_1.current
        ]);
        return function(e) {
            if (e != null) {
                ve.cancel(uRef.current);
                if (typeof e === "number") {
                    a(e);
                } else if (e && q(e) === "object") {
                    let n;
                    const originAlign = e.align;
                    n = "index" in e ? e.index : t.findIndex((t)=>getKey_1(t) === e.key);
                    const i = e.offset;
                    setC({
                        times: 0,
                        index: n,
                        offset: i === undefined ? 0 : i,
                        originAlign
                    });
                }
            } else {
                onMouseEnter_1();
            }
        };
    })(jRef, k, se, itemHeight, getKey, W, onMouseEnter);
    useImperativeHandle(t, function() {
        return {
            getScrollInfo,
            scrollTo: function(e) {
                let t;
                if ((t = e) && q(t) === "object" && ("left" in t || "top" in t)) {
                    if (e.left !== undefined) {
                        setD(Ze(e.left));
                    }
                    Xe(e.top);
                } else {
                    Xe(e);
                }
            }
        };
    });
    useCe(()=>{
        if (onVisibleChange) {
            const e = k.slice(start, end + 1);
            onVisibleChange(e, k);
        }
    }, [
        start,
        end,
        k
    ]);
    const getSize = ((e, getKey_1, n, itemHeight_1)=>{
        const [i, a] = useMemo(function() {
            return [
                new Map,
                []
            ];
        }, [
            e,
            n.id,
            itemHeight_1
        ]);
        return function(o, l = o) {
            let u = i.get(o);
            let s = i.get(l);
            if (u === undefined || s === undefined) {
                for(let c = e.length, f = a.length; f < c; f += 1){
                    const p = e[f];
                    const h = getKey_1(p);
                    i.set(h, f);
                    const v = n.get(h) ?? itemHeight_1;
                    a[f] = (a[f - 1] || 0) + v;
                    if (h === o) {
                        u = f;
                    }
                    if (h === l) {
                        s = f;
                    }
                    if (u !== undefined && s !== undefined) {
                        break;
                    }
                }
            }
            return {
                top: a[u - 1] || 0,
                bottom: a[s]
            };
        };
    })(k, getKey, se, itemHeight);
    const extra = extraRender?.({
        start,
        end,
        virtual: virtual_1,
        offsetX: D,
        offsetY: offset,
        rtl,
        getSize
    });
    const et = ((e, t, n, width, o, i, { getKey })=>e.slice(t, n + 1).map((e, n)=>{
            const a = i(e, t + n, {
                style: {
                    width
                }
            });
            const u = getKey(e);
            return <Me1Component key={u} setRef={function(t) {
                return o(e, t);
            }}>{a}</Me1Component>;
        }))(k, start, end, scrollWidth, oe, children, Z);
    let tt = null;
    if (height) {
        tt = Q({
            [fullHeight ? "height" : "maxHeight"]: height
        }, Ie);
        if (E) {
            tt.overflowY = "hidden";
            if (scrollWidth) {
                tt.overflowX = "hidden";
            }
            if (B) {
                tt.pointerEvents = "none";
            }
        }
    }
    const nt = {};
    if (rtl) {
        nt.dir = "rtl";
    }
    return <div style={{
        ...style,
        position: "relative"
    }} className={A} {...nt} {...rest}><module1260.a onResize={function(e) {
        set_e({
            width: e.width || e.offsetWidth,
            height: e.height || e.offsetHeight
        });
    }}>{createElement(component, {
        className: `${prefixCls}-holder`,
        style: tt,
        ref: jRef,
        onScroll: function(e) {
            const scrollTop = e.currentTarget.scrollTop;
            if (scrollTop !== L) {
                W(scrollTop);
            }
            onScroll?.(e);
            $e();
        },
        onMouseEnter
    }, <Ue prefixCls={prefixCls} height={scrollHeight} offsetX={D} offsetY={offset} scrollWidth={scrollWidth} onInnerResize={le} ref={TRef} innerProps={innerProps} rtl={rtl} extra={extra}>{et}</Ue>)}</module1260.a>{virtual_1 && scrollHeight > height && <Ye1 ref={MeRef} prefixCls={prefixCls} scrollOffset={L} scrollRange={scrollHeight} rtl={rtl} onScroll={onScroll_1} onStartMove={onStartMove} onStopMove={onStopMove} spinSize={ke} containerSize={_e.height} style={styles?.verticalScrollBar} thumbStyle={styles?.verticalScrollBarThumb}/>}{virtual_1 && scrollWidth && <Ye1 ref={SeRef} prefixCls={prefixCls} scrollOffset={D} scrollRange={scrollWidth} rtl={rtl} onScroll={onScroll_1} onStartMove={onStartMove} onStopMove={onStopMove} spinSize={Ae} containerSize={_e.width} horizontal style={styles?.horizontalScrollBar} thumbStyle={styles?.horizontalScrollBarThumb}/>}</div>;
});
List.displayName = "List";
const He = List;
function Be(e) {
    return (Be = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function Fe(e) {
    const t = ((e)=>{
        const t = "string";
        if (Be(e) != "object" || !e) {
            return e;
        }
        const n = e[Symbol.toPrimitive];
        if (n !== undefined) {
            const r = n.call(e, t);
            if (Be(r) != "object") {
                return r;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
    })(e);
    if (Be(t) == "symbol") {
        return t;
    }
    return String(t);
}
function Ve(e, t, n) {
    if ((t = Fe(t)) in e) {
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
function Ze(e, t) {
    if (t == null || t > e.length) {
        t = e.length;
    }
    for(var n = 0, r = new Array(t); n < t; n++){
        r[n] = e[n];
    }
    return r;
}
function We(e, t) {
    return ((e)=>{
        if (Array.isArray(e)) {
            return e;
        }
    })(e) || ((e, t)=>{
        let n = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (n != null) {
            let r;
            let o;
            let i;
            let a;
            const l = [];
            let u = true;
            let s = false;
            try {
                i = (n = n.call(e)).next;
                if (t === 0) {
                    if (Object(n) !== n) {
                        return;
                    }
                    u = false;
                } else {
                    for(; !(u = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); u = true);
                }
            } catch (error) {
                s = true;
                o = error;
            } finally{
                try {
                    if (!u && n.return != null && (a = n.return(), Object(a) !== a)) {
                        return;
                    }
                } finally{
                    if (s) {
                        throw o;
                    }
                }
            }
            return l;
        }
    })(e, t) || ((e, t)=>{
        if (e) {
            if (typeof e === "string") {
                return Ze(e, t);
            }
            let n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) {
                n = e.constructor.name;
            }
            if (n === "Map" || n === "Set") {
                return Array.from(e);
            }
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                return Ze(e, t);
            }
            return undefined;
        }
    })(e, t) || (()=>{
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
}
function Ye(e, t) {
    if (typeof e === "function") {
        e(t);
    } else if (E(e) === "object" && e && "current" in e) {
        e.current = t;
    }
}
const JeContext = createContext({});
function Qe(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function et(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, Fe(r.key), r);
    }
}
function tt(e, t, n) {
    if (t) {
        et(e.prototype, t);
    }
    if (n) {
        et(e, n);
    }
    Object.defineProperty(e, "prototype", {
        writable: false
    });
    return e;
}
function nt(e, t) {
    return (nt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
function rt(e, Component) {
    if (typeof Component !== "function" && Component !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    e.prototype = Object.create(Component && Component.prototype, {
        constructor: {
            value: e,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(e, "prototype", {
        writable: false
    });
    if (Component) {
        nt(e, Component);
    }
}
function ot(e) {
    return (ot = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function it(e) {
    if (e === undefined) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return e;
}
function at(e, t) {
    if (t && (Be(t) === "object" || typeof t === "function")) {
        return t;
    }
    if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
    }
    return it(e);
}
function lt(e) {
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
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    })();
    return function() {
        let n;
        const r = ot(e);
        if (t) {
            const o = ot(this).constructor;
            n = Reflect.construct(r, arguments, o);
        } else {
            n = r.apply(this, arguments);
        }
        return at(this, n);
    };
}
const Ut = ((Component_1)=>{
    rt(n, Component_1);
    var t = lt(n);
    function n() {
        Qe(this, n);
        return t.apply(this, arguments);
    }
    tt(n, [
        {
            key: "render",
            value: function() {
                return this.props.children;
            }
        }
    ]);
    return n;
})(Component);
function st(e, t) {
    if (t == null || t > e.length) {
        t = e.length;
    }
    for(var n = 0, r = new Array(t); n < t; n++){
        r[n] = e[n];
    }
    return r;
}
function useCt(e) {
    const tRef = useRef(false);
    const n = ((e)=>{
        const t = 2;
        return ((e)=>{
            if (Array.isArray(e)) {
                return e;
            }
        })(e) || ((e, t)=>{
            let n = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (n != null) {
                let r;
                let o;
                let i;
                let a;
                const l = [];
                let u = true;
                let s = false;
                try {
                    i = (n = n.call(e)).next;
                    if (t === 0) {
                        if (Object(n) !== n) {
                            return;
                        }
                        u = false;
                    } else {
                        for(; !(u = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); u = true);
                    }
                } catch (error) {
                    s = true;
                    o = error;
                } finally{
                    try {
                        if (!u && n.return != null && (a = n.return(), Object(a) !== a)) {
                            return;
                        }
                    } finally{
                        if (s) {
                            throw o;
                        }
                    }
                }
                return l;
            }
        })(e, t) || ((e, t)=>{
            if (e) {
                if (typeof e === "string") {
                    return st(e, t);
                }
                let n = Object.prototype.toString.call(e).slice(8, -1);
                if (n === "Object" && e.constructor) {
                    n = e.constructor.name;
                }
                if (n === "Map" || n === "Set") {
                    return Array.from(e);
                }
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                    return st(e, t);
                }
                return undefined;
            }
        })(e, t) || (()=>{
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        })();
    })(useState(e));
    const r = n[0];
    const o = n[1];
    useEffect(function() {
        tRef.current = false;
        return function() {
            tRef.current = true;
        };
    }, []);
    return [
        r,
        function(e, n) {
            if (!(n && tRef.current)) {
                o(e);
            }
        }
    ];
}
function ft(e, t) {
    const n = {};
    n[e.toLowerCase()] = t.toLowerCase();
    n[`Webkit${e}`] = `webkit${t}`;
    n[`Moz${e}`] = `moz${t}`;
    n[`ms${e}`] = `MS${t}`;
    n[`O${e}`] = `o${t.toLowerCase()}`;
    return n;
}
let dt;
let pt;
let ht;
dt = Z();
pt = typeof window !== "undefined" ? window : {};
ht = {
    animationend: ft("Animation", "AnimationEnd"),
    transitionend: ft("Transition", "TransitionEnd")
};
if (dt) {
    if (!("AnimationEvent" in pt)) {
        delete ht.animationend.animation;
    }
    if (!("TransitionEvent" in pt)) {
        delete ht.transitionend.transition;
    }
}
const vt = ht;
let gt = {};
if (Z()) {
    const yt = document.createElement("div");
    gt = yt.style;
}
const mt = {};
function bt(e) {
    if (mt[e]) {
        return mt[e];
    }
    const t = vt[e];
    if (t) {
        const n = Object.keys(t);
        for(let r = n.length, o = 0; o < r; o += 1){
            const i = n[o];
            if (Object.prototype.hasOwnProperty.call(t, i) && i in gt) {
                mt[e] = t[i];
                return mt[e];
            }
        }
    }
    return "";
}
const xt = bt("animationend");
const wt = bt("transitionend");
const _t = !(!xt || !wt);
const Ct = xt || "animationend";
const Ot = wt || "transitionend";
function Et(motionName, t) {
    if (motionName) {
        if (Be(motionName) === "object") {
            return motionName[t.replace(/-\w/g, (e)=>e[1].toUpperCase())];
        }
        return `${motionName}-${t}`;
    }
    return null;
}
const Mt = Z() ? useLayoutEffect : useEffect;
let St = function(e) {
    return +setTimeout(e, 16);
};
let At = function(e) {
    return clearTimeout(e);
};
if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
    St = function(e) {
        return window.requestAnimationFrame(e);
    };
    At = function(e) {
        return window.cancelAnimationFrame(e);
    };
}
let kt = 0;
const map_1 = new Map;
function Tt(e) {
    map_1.delete(e);
}
const Pt = function(e, t = 1) {
    const n = kt += 1;
    function r(t) {
        if (t === 0) {
            Tt(n);
            e();
        } else {
            const o = St(function() {
                r(t - 1);
            });
            map_1.set(n, o);
        }
    }
    r(t);
    return n;
};
Pt.cancel = function(e) {
    const t = map_1.get(e);
    Tt(e);
    return At(t);
};
const Lt = Pt;
const zt = [
    "prepare",
    "start",
    "active",
    "end"
];
const Nt = [
    "prepare",
    "prepared"
];
function Dt(e) {
    return e === "active" || e === "end";
}
function useIt(e, visible, n, r) {
    const r_motionEnter = r.motionEnter;
    const i = r_motionEnter === undefined || r_motionEnter;
    const r_motionAppear = r.motionAppear;
    const l = r_motionAppear === undefined || r_motionAppear;
    const r_motionLeave = r.motionLeave;
    const s = r_motionLeave === undefined || r_motionLeave;
    const { motionDeadline, motionLeaveImmediately, onAppearPrepare, onEnterPrepare, onLeavePrepare, onAppearStart, onEnterStart, onLeaveStart, onAppearActive, onEnterActive, onLeaveActive, onAppearEnd, onEnterEnd, onLeaveEnd, onVisibleChanged } = r;
    const [M, S] = useCt();
    const [k, j] = useCt("none");
    const [P, L] = useCt(null);
    const zRef = useRef(false);
    const NRef = useRef(null);
    function D() {
        return n();
    }
    const IRef = useRef(false);
    function R() {
        j("none", true);
        L(null, true);
    }
    function B(e) {
        const t = D();
        if (!e || e.deadline || e.target === t) {
            let n;
            const r = IRef.current;
            if (k === "appear" && r) {
                n = onAppearEnd?.(t, e);
            } else if (k === "enter" && r) {
                n = onEnterEnd?.(t, e);
            } else if (k === "leave" && r) {
                n = onLeaveEnd?.(t, e);
            }
            if (k !== "none" && r && n !== false) {
                R();
            }
        }
    }
    const F = We(((e)=>{
        const tRef = useRef();
        const nRef = useRef(e);
        nRef.current = e;
        const r = useCallback(function(e) {
            nRef.current(e);
        }, []);
        function o(e) {
            if (e) {
                e.removeEventListener(Ot, r);
                e.removeEventListener(Ct, r);
            }
        }
        useEffect(function() {
            return function() {
                o(tRef.current);
            };
        }, []);
        return [
            function(e) {
                if (tRef.current && tRef.current !== e) {
                    o(tRef.current);
                }
                if (e && e !== tRef.current) {
                    e.addEventListener(Ot, r);
                    e.addEventListener(Ct, r);
                    tRef.current = e;
                }
            },
            o
        ];
    })(B), 1)[0];
    const V = (e)=>{
        let t;
        let n;
        let r;
        switch(e){
            case "appear":
                t = {};
                t.prepare = onAppearPrepare;
                t.start = onAppearStart;
                t.active = onAppearActive;
                return t;
            case "enter":
                n = {};
                n.prepare = onEnterPrepare;
                n.start = onEnterStart;
                n.active = onEnterActive;
                return n;
            case "leave":
                r = {};
                r.prepare = onLeavePrepare;
                r.start = onLeaveStart;
                r.active = onLeaveActive;
                return r;
            default:
                return {};
        }
    };
    const $ = useMemo(function() {
        return V(k);
    }, [
        k
    ]);
    var [Z, W] = ((e, t, n)=>{
        const [o, i] = useCt("none");
        const [l, u] = (()=>{
            const eRef = useRef(null);
            function t() {
                Lt.cancel(eRef.current);
            }
            useEffect(function() {
                return function() {
                    t();
                };
            }, []);
            return [
                function n(r, o = 2) {
                    t();
                    var i = Lt(function() {
                        if (o <= 1) {
                            r({
                                isCanceled: function() {
                                    return i !== eRef.current;
                                }
                            });
                        } else {
                            n(r, o - 1);
                        }
                    });
                    eRef.current = i;
                },
                t
            ];
        })();
        const s = t ? Nt : zt;
        Mt(function() {
            if (o !== "none" && o !== "end") {
                const e = s.indexOf(o);
                const t = s[e + 1];
                const r = n(o);
                if (r === false) {
                    i(t, true);
                } else if (t) {
                    l(function(e) {
                        function n() {
                            if (!e.isCanceled()) {
                                i(t, true);
                            }
                        }
                        if (r === true) {
                            n();
                        } else {
                            Promise.resolve(r).then(n);
                        }
                    });
                }
            }
        }, [
            e,
            o
        ]);
        useEffect(function() {
            return function() {
                u();
            };
        }, []);
        return [
            function() {
                i("prepare", true);
            },
            o
        ];
    })(k, !e, (e)=>{
        if (e === "prepare") {
            const t = $.prepare;
            return !!t && t(D());
        }
        if (W in $) {
            L($[W]?.(D(), null) || null);
        }
        if (W === "active") {
            F(D());
            if (motionDeadline > 0) {
                clearTimeout(NRef.current);
                NRef.current = setTimeout(()=>{
                    B({
                        deadline: true
                    });
                }, motionDeadline);
            }
        }
        if (W === "prepared") {
            R();
        }
        return true;
    });
    const K = Dt(W);
    IRef.current = K;
    Mt(function() {
        S(visible);
        let n;
        const zRef_current = zRef.current;
        zRef.current = true;
        if (!zRef_current && visible && l) {
            n = "appear";
        }
        if (zRef_current && visible && i) {
            n = "enter";
        }
        if (zRef_current && !visible && s || !zRef_current && motionLeaveImmediately && !visible && s) {
            n = "leave";
        }
        const o = V(n);
        if (n && (e || o.prepare)) {
            j(n);
            Z();
        } else {
            j("none");
        }
    }, [
        visible
    ]);
    useEffect(function() {
        if (k === "appear" && !l || k === "enter" && !i || k === "leave" && !s) {
            j("none");
        }
    }, [
        l,
        i,
        s
    ]);
    useEffect(function() {
        return function() {
            zRef.current = false;
            clearTimeout(NRef.current);
        };
    }, []);
    const GRef = useRef(false);
    useEffect(function() {
        if (M) {
            GRef.current = true;
        }
        if (M !== undefined && k === "none") {
            if (GRef.current || M) {
                if (onVisibleChanged != null) {
                    onVisibleChanged(M);
                }
            }
            GRef.current = true;
        }
    }, [
        M,
        k
    ]);
    let q = P;
    if ($.prepare && W === "start") {
        q = {
            transition: "none",
            ...q
        };
    }
    return [
        k,
        W,
        q,
        M ?? visible
    ];
}
const Rt = ((e)=>{
    let t = e;
    if (Be(e) === "object") {
        t = e.transitionSupport;
    }
    const CSSMotion = forwardRef(function(e, n) {
        const e_visible = e.visible;
        const visible = e_visible === undefined || e_visible;
        const e_removeOnLeave = e.removeOnLeave;
        const a = e_removeOnLeave === undefined || e_removeOnLeave;
        const { forceRender, children, motionName, leavedClassName, eventProps } = e;
        const d = ((e, n)=>!(!e.motionName || !t || n === false))(e, useContext(JeContext).motion);
        const pRef = useRef();
        const hRef = useRef();
        const [g, y, m, b] = useIt(d, visible, ()=>{
            try {
                if (pRef.current instanceof HTMLElement) {
                    return pRef.current;
                }
                return ((e)=>{
                    if (((e)=>e instanceof HTMLElement || e instanceof SVGElement)(e)) {
                        return e;
                    }
                    if (e instanceof Component) {
                        return module106.findDOMNode(e);
                    }
                    return null;
                })(hRef.current);
            } catch (e) {
                return null;
            }
        }, e);
        const xRef = useRef(b);
        if (b) {
            xRef.current = true;
        }
        let w;
        const _ = useCallback(function(e) {
            pRef.current = e;
            Ye(n, e);
        }, [
            n
        ]);
        const C = {
            ...eventProps,
            visible
        };
        if (children) {
            if (g === "none") {
                w = b ? children({
                    ...C
                }, _) : !a && xRef.current && leavedClassName ? children({
                    ...C,
                    className: leavedClassName
                }, _) : forceRender || !a && !leavedClassName ? children({
                    ...C,
                    style: {
                        display: "none"
                    }
                }, _) : null;
            } else {
                let O;
                let E;
                if (y === "prepare") {
                    E = "prepare";
                } else if (Dt(y)) {
                    E = "active";
                } else if (y === "start") {
                    E = "start";
                }
                const M = Et(motionName, `${g}-${E}`);
                w = children({
                    ...C,
                    className: module2433(Et(motionName, g), (O = {}, Ve(O, M, M && E), Ve(O, motionName, typeof motionName === "string"), O)),
                    style: m
                }, _);
            }
        } else {
            w = null;
        }
        if (isValidElement(w) && ((e)=>{
            let t;
            let n;
            const r = isMemo(e) ? e.type.type : e.type;
            return !!(typeof r !== "function" || (t = r.prototype) !== null && t !== undefined && t.render) && !!(typeof e !== "function" || (n = e.prototype) !== null && n !== undefined && n.render);
        })(w)) {
            if (!w.ref) {
                w = cloneElement(w, {
                    ref: _
                });
            }
        }
        return <Ut ref={hRef}>{w}</Ut>;
    });
    CSSMotion.displayName = "CSSMotion";
    return CSSMotion;
})(_t);
function Bt(e) {
    let t;
    return {
        ...t = e && Be(e) === "object" && "key" in e ? e : {
            key: e
        },
        key: String(t.key)
    };
}
function Ft(e = []) {
    return e.map(Bt);
}
function Vt(e = [], t = []) {
    let n = [];
    let r = 0;
    const t_length = t.length;
    const i = Ft(e);
    const a = Ft(t);
    i.forEach((e)=>{
        let t = false;
        for(let i = r; i < t_length; i += 1){
            const l = a[i];
            if (l.key === e.key) {
                if (r < i) {
                    n = n.concat(a.slice(r, i).map((e)=>({
                            ...e,
                            status: "add"
                        })));
                    r = i;
                }
                n.push({
                    ...l,
                    status: "keep"
                });
                r += 1;
                t = true;
                break;
            }
        }
        if (!t) {
            n.push({
                ...e,
                status: "remove"
            });
        }
    });
    if (r < t_length) {
        n = n.concat(a.slice(r).map((e)=>({
                ...e,
                status: "add"
            })));
    }
    const l = {};
    n.forEach(({ key })=>{
        l[key] = (l[key] || 0) + 1;
    });
    const u = Object.keys(l).filter((e)=>l[e] > 1);
    u.forEach((e)=>{
        (n = n.filter(({ key, status })=>key !== e || status !== "remove")).forEach((t)=>{
            if (t.key === e) {
                t.status = "keep";
            }
        });
    });
    return n;
}
const Zt = [
    "eventProps",
    "visible",
    "children",
    "motionName",
    "motionAppear",
    "motionEnter",
    "motionLeave",
    "motionLeaveImmediately",
    "motionDeadline",
    "removeOnLeave",
    "leavedClassName",
    "onAppearPrepare",
    "onAppearStart",
    "onAppearActive",
    "onAppearEnd",
    "onEnterStart",
    "onEnterActive",
    "onEnterEnd",
    "onLeaveStart",
    "onLeaveActive",
    "onLeaveEnd"
];
((e, T1 = Rt)=>{
    const n = ((Component_1)=>{
        rt(r, Component_1);
        var n = lt(r);
        function r(...o) {
            let e;
            Qe(this, r);
            it(e = n.call(this, ...o)).state = {
                keyEntities: []
            };
            it(e).removeKey = function(t) {
                const n = e.state.keyEntities.map((e)=>{
                    if (e.key !== t) {
                        return e;
                    }
                    return {
                        ...e,
                        status: "removed"
                    };
                });
                e.setState({
                    keyEntities: n
                });
                return n.filter((e)=>e.status !== "removed").length;
            };
            return e;
        }
        tt(r, [
            {
                key: "render",
                value: function() {
                    const _this = this;
                    const keyEntities = this.state.keyEntities;
                    const props = this.props;
                    const { component, children, onVisibleChanged, onAllRemoved, ...rest } = props;
                    const S = component || Fragment;
                    const c = {};
                    Zt.forEach((e)=>{
                        c[e] = rest[e];
                        delete rest[e];
                    });
                    delete rest.keys;
                    return <S {...rest}>{keyEntities.map(({ status, ...rest }, index)=>{
                        const visible = status === "add" || status === "keep";
                        return <T1 {...c} key={rest.key} visible={visible} eventProps={rest} onVisibleChanged={function(t) {
                            onVisibleChanged?.(t, {
                                key: rest.key
                            });
                            if (!t) {
                                if (_this.removeKey(rest.key) === 0 && onAllRemoved) {
                                    onAllRemoved();
                                }
                            }
                        }}>{function(e, t) {
                            return children({
                                ...e,
                                index
                            }, t);
                        }}</T1>;
                    })}</S>;
                }
            }
        ], [
            {
                key: "getDerivedStateFromProps",
                value: function({ keys }, t) {
                    const t_keyEntities = t.keyEntities;
                    const o = Ft(keys);
                    return {
                        keyEntities: Vt(t_keyEntities, o).filter((e)=>{
                            const t = t_keyEntities.find(({ key })=>e.key === key);
                            return !t || t.status !== "removed" || e.status !== "remove";
                        })
                    };
                }
            }
        ]);
        return r;
    })(Component);
    n.defaultProps = {
        component: "div"
    };
})(_t);
const Wt = Rt;
const Kt = memo(function(e) {
    const e_prefixCls = e.prefixCls;
    for(var n = e.level, r = e.isStart, o = e.isEnd, i = `${e_prefixCls}-indent-unit`, l = [], u = 0; u < n; u += 1){
        let s;
        l.push(<span key={u} className={module1173(i, (s = {}, a(s, `${i}-start`, r[u]), a(s, `${i}-end`, o[u]), s))}/>);
    }
    return <span aria-hidden="true" className={`${e_prefixCls}-indent`}>{l}</span>;
});
function Gt(e, t) {
    return e[t];
}
function qt(e, t) {
    const n = {
        ...e
    };
    if (Array.isArray(t)) {
        t.forEach((e)=>{
            delete n[e];
        });
    }
    return n;
}
const Yt = [
    "children"
];
function Xt(e, t) {
    return `${e}-${t}`;
}
function Jt(e, t) {
    return e ?? t;
}
function Qt(e) {
    const t = e || {};
    const n = t.title || "title";
    return {
        title: n,
        _title: t._title || [
            n
        ],
        key: t.key || "key",
        children: t.children || "children"
    };
}
function en(e, t, n) {
    const r = Qt(n);
    const { _title, key, children } = r;
    const l = new Set(t === true ? [] : t);
    const s = [];
    (function e(n, parent = null) {
        return n.map((c, d)=>{
            let p;
            const h = Xt(parent ? parent.pos : "0", d);
            const v = Jt(c[key], h);
            for(let g = 0; g < _title.length; g += 1){
                const y = _title[g];
                if (c[y] !== undefined) {
                    p = c[y];
                    break;
                }
            }
            const m = {
                ...qt(c, [
                    ..._title,
                    key,
                    children
                ]),
                title: p,
                key: v,
                parent,
                pos: h,
                children: null,
                data: c,
                isStart: [
                    ...parent ? parent.isStart : [],
                    d === 0
                ],
                isEnd: [
                    ...parent ? parent.isEnd : [],
                    d === n.length - 1
                ]
            };
            s.push(m);
            if (t === true || l.has(v)) {
                m.children = e(c[children] || [], m);
            } else {
                m.children = [];
            }
            return m;
        });
    })(e);
    return s;
}
function tn(e, t, externalGetKey_1) {
    let r;
    const i = (o(externalGetKey_1) === "object" ? externalGetKey_1 : {
        externalGetKey: externalGetKey_1
    }) || {};
    const { childrenPropName, externalGetKey } = i;
    const u = Qt(i.fieldNames);
    const { key, children } = u;
    const d = childrenPropName || children;
    if (externalGetKey) {
        if (typeof externalGetKey === "string") {
            r = function(e) {
                return e[externalGetKey];
            };
        } else if (typeof externalGetKey === "function") {
            r = function(e) {
                return externalGetKey(e);
            };
        }
    } else {
        r = function(e, t) {
            return Jt(e[key], t);
        };
    }
    (function n(o, i, a, l) {
        const u = o ? o[d] : e;
        const s = o ? Xt(a.pos, i) : "0";
        const nodes = o ? [
            ...l,
            o
        ] : [];
        if (o) {
            const p = r(o, s);
            const h = {
                node: o,
                index: i,
                pos: s,
                key: p,
                parentPos: a.node ? a.pos : null,
                level: a.level + 1,
                nodes
            };
            t(h);
        }
        if (u) {
            u.forEach((e, t)=>{
                n(e, t, {
                    node: o,
                    pos: s,
                    level: a ? a.level + 1 : -1
                }, nodes);
            });
        }
    })(null);
}
function nn(eventKey, t) {
    const { expandedKeys, selectedKeys, loadedKeys, loadingKeys, checkedKeys, halfCheckedKeys, dragOverNodeKey, dropPosition } = t;
    const c = Gt(t.keyEntities, eventKey);
    return {
        eventKey,
        expanded: expandedKeys.indexOf(eventKey) !== -1,
        selected: selectedKeys.indexOf(eventKey) !== -1,
        loaded: loadedKeys.indexOf(eventKey) !== -1,
        loading: loadingKeys.indexOf(eventKey) !== -1,
        checked: checkedKeys.indexOf(eventKey) !== -1,
        halfChecked: halfCheckedKeys.indexOf(eventKey) !== -1,
        pos: String(c ? c.pos : ""),
        dragOver: dragOverNodeKey === eventKey && dropPosition === 0,
        dragOverGapTop: dragOverNodeKey === eventKey && dropPosition === -1,
        dragOverGapBottom: dragOverNodeKey === eventKey && dropPosition === 1
    };
}
function rn(e) {
    const { data, expanded, selected, checked, loaded, loading, halfChecked, dragOver, dragOverGapTop, dragOverGapBottom, pos, active, eventKey } = e;
    const v = {
        ...data,
        expanded,
        selected,
        checked,
        loaded,
        loading,
        halfChecked,
        dragOver,
        dragOverGapTop,
        dragOverGapBottom,
        pos,
        active,
        key: eventKey
    };
    if (!("props" in v)) {
        Object.defineProperty(v, "props", {
            get: function() {
                R(false, "Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.");
                return e;
            }
        });
    }
    return v;
}
const An1 = ((Component_1)=>{
    y(n, Component_1);
    var t = x(n);
    function n(...o_1) {
        let e;
        d(this, n);
        e = t.call(this, ...o_1);
        e.state = {
            dragNodeHighlight: false
        };
        e.selectHandle = undefined;
        e.cacheIndent = undefined;
        e.onSelectorClick = function(t) {
            e.props.context.onNodeClick(t, rn(e.props));
            if (e.isSelectable()) {
                e.onSelect(t);
            } else {
                e.onCheck(t);
            }
        };
        e.onSelectorDoubleClick = function(t) {
            e.props.context.onNodeDoubleClick(t, rn(e.props));
        };
        e.onSelect = function(t) {
            if (!e.isDisabled()) {
                e.props.context.onNodeSelect(t, rn(e.props));
            }
        };
        e.onCheck = function(t) {
            if (!e.isDisabled()) {
                const n = e.props;
                const { disableCheckbox, checked } = n;
                const i = e.props.context.onNodeCheck;
                if (e.isCheckable() && !disableCheckbox) {
                    const a = !checked;
                    i(t, rn(e.props), a);
                }
            }
        };
        e.onMouseEnter = function(t) {
            e.props.context.onNodeMouseEnter(t, rn(e.props));
        };
        e.onMouseLeave = function(t) {
            e.props.context.onNodeMouseLeave(t, rn(e.props));
        };
        e.onContextMenu = function(t) {
            e.props.context.onNodeContextMenu(t, rn(e.props));
        };
        e.onDragStart = function(t) {
            const onNodeDragStart = e.props.context.onNodeDragStart;
            t.stopPropagation();
            e.setState({
                dragNodeHighlight: true
            });
            onNodeDragStart(t, v(e));
            try {
                t.dataTransfer.setData("text/plain", "");
            } catch (e) {}
        };
        e.onDragEnter = function(t) {
            const onNodeDragEnter = e.props.context.onNodeDragEnter;
            t.preventDefault();
            t.stopPropagation();
            onNodeDragEnter(t, v(e));
        };
        e.onDragOver = function(t) {
            const onNodeDragOver = e.props.context.onNodeDragOver;
            t.preventDefault();
            t.stopPropagation();
            onNodeDragOver(t, v(e));
        };
        e.onDragLeave = function(t) {
            const onNodeDragLeave = e.props.context.onNodeDragLeave;
            t.stopPropagation();
            onNodeDragLeave(t, v(e));
        };
        e.onDragEnd = function(t) {
            const onNodeDragEnd = e.props.context.onNodeDragEnd;
            t.stopPropagation();
            e.setState({
                dragNodeHighlight: false
            });
            onNodeDragEnd(t, v(e));
        };
        e.onDrop = function(t) {
            const onNodeDrop = e.props.context.onNodeDrop;
            t.preventDefault();
            t.stopPropagation();
            e.setState({
                dragNodeHighlight: false
            });
            onNodeDrop(t, v(e));
        };
        e.onExpand = function(t) {
            const e_props = e.props;
            const n_loading = e_props.loading;
            const onNodeExpand = e_props.context.onNodeExpand;
            if (!n_loading) {
                onNodeExpand(t, rn(e.props));
            }
        };
        e.setSelectHandle = function(t) {
            e.selectHandle = t;
        };
        e.getNodeState = function() {
            const expanded = e.props.expanded;
            if (e.isLeaf()) {
                return null;
            }
            if (expanded) {
                return "open";
            }
            return "close";
        };
        e.hasChildren = function() {
            const eventKey = e.props.eventKey;
            return !!((Gt(e.props.context.keyEntities, eventKey) || {}).children || []).length;
        };
        e.isLeaf = function() {
            const e_props = e.props;
            const { isLeaf, loaded } = e_props;
            const loadData = e.props.context.loadData;
            const i = e.hasChildren();
            return isLeaf !== false && (isLeaf || !loadData && !i || loadData && loaded && !i);
        };
        e.isDisabled = function() {
            const disabled = e.props.disabled;
            return !(!e.props.context.disabled && !disabled);
        };
        e.isCheckable = function() {
            const checkable = e.props.checkable;
            const checkable_1 = e.props.context.checkable;
            return !(!checkable_1 || checkable === false) && checkable_1;
        };
        e.syncLoadData = function({ expanded, loading, loaded }) {
            const context = e.props.context;
            const { loadData, onNodeLoad } = context;
            if (!loading) {
                if (loadData && expanded && !e.isLeaf()) {
                    if (!(e.hasChildren() || loaded)) {
                        onNodeLoad(rn(e.props));
                    }
                }
            }
        };
        e.isDraggable = function() {
            const e_props = e.props;
            const t_data = e_props.data;
            const draggable = e_props.context.draggable;
            return !(!draggable || draggable.nodeDraggable && !draggable.nodeDraggable(t_data));
        };
        e.renderDragHandler = function() {
            const context = e.props.context;
            const { draggable, prefixCls } = context;
            if (draggable?.icon) {
                return <span className={`${prefixCls}-draggable-icon`}>{draggable.icon}</span>;
            }
            return null;
        };
        e.renderSwitcherIconDom = function(isLeaf) {
            const switcherIcon = e.props.switcherIcon;
            const switcherIcon_1 = e.props.context.switcherIcon;
            const o = switcherIcon || switcherIcon_1;
            if (typeof o === "function") {
                return o({
                    ...e.props,
                    isLeaf
                });
            }
            return o;
        };
        e.renderSwitcher = function() {
            const expanded = e.props.expanded;
            const prefixCls = e.props.context.prefixCls;
            if (e.isLeaf()) {
                const r = e.renderSwitcherIconDom(true);
                if (r !== false) {
                    return <span className={module1173(`${prefixCls}-switcher`, `${prefixCls}-switcher-noop`)}>{r}</span>;
                }
                return null;
            }
            const o = module1173(`${prefixCls}-switcher`, `${prefixCls}-switcher_${expanded ? "open" : "close"}`);
            const i = e.renderSwitcherIconDom(false);
            if (i !== false) {
                return <span onClick={e.onExpand} className={o}>{i}</span>;
            }
            return null;
        };
        e.renderCheckbox = function() {
            const e_props = e.props;
            const { checked, halfChecked, disableCheckbox } = e_props;
            const prefixCls = e.props.context.prefixCls;
            const a = e.isDisabled();
            const l = e.isCheckable();
            if (!l) {
                return null;
            }
            const u = typeof l !== "boolean" ? l : null;
            return <span className={module1173(`${prefixCls}-checkbox`, checked && `${prefixCls}-checkbox-checked`, !checked && halfChecked && `${prefixCls}-checkbox-indeterminate`, (a || disableCheckbox) && `${prefixCls}-checkbox-disabled`)} onClick={e.onCheck}>{u}</span>;
        };
        e.renderIcon = function() {
            const loading = e.props.loading;
            const prefixCls = e.props.context.prefixCls;
            return <span className={module1173(`${prefixCls}-iconEle`, `${prefixCls}-icon__${e.getNodeState() || "docu"}`, loading && `${prefixCls}-icon_loading`)}/>;
        };
        e.renderSelector = function() {
            let t;
            let n;
            const dragNodeHighlight = e.state.dragNodeHighlight;
            const { title = "---", selected, icon, loading, data } = e.props;
            const context = e.props.context;
            const { prefixCls, showIcon, icon: icon_1, loadData, titleRender } = context;
            const y = e.isDisabled();
            const m = `${prefixCls}-node-content-wrapper`;
            if (showIcon) {
                const b = icon || icon_1;
                t = b ? <span className={module1173(`${prefixCls}-iconEle`, `${prefixCls}-icon__customize`)}>{typeof b === "function" ? b(e.props) : b}</span> : e.renderIcon();
            } else {
                if (loadData && loading) {
                    t = e.renderIcon();
                }
            }
            n = typeof title === "function" ? title(data) : titleRender ? titleRender(data) : title;
            const x = <span className={`${prefixCls}-title`}>{n}</span>;
            return <span ref={e.setSelectHandle} title={typeof title === "string" ? title : ""} className={module1173(`${m}`, `${m}-${e.getNodeState() || "normal"}`, !y && (selected || dragNodeHighlight) && `${prefixCls}-node-selected`)} onMouseEnter={e.onMouseEnter} onMouseLeave={e.onMouseLeave} onContextMenu={e.onContextMenu} onClick={e.onSelectorClick} onDoubleClick={e.onSelectorDoubleClick}>{t}{x}{e.renderDropIndicator()}</span>;
        };
        e.renderDropIndicator = function() {
            const e_props = e.props;
            const { disabled, eventKey } = e_props;
            const context = e.props.context;
            const { draggable, dropLevelOffset, dropPosition, prefixCls, indent, dropIndicatorRender, dragOverNodeKey, direction } = context;
            const p = !disabled && !!draggable && dragOverNodeKey === eventKey;
            const indent_1 = indent ?? e.cacheIndent;
            e.cacheIndent = indent;
            if (p) {
                return dropIndicatorRender({
                    dropPosition,
                    dropLevelOffset,
                    indent: indent_1,
                    prefixCls,
                    direction
                });
            }
            return null;
        };
        return e;
    }
    h(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.syncLoadData(this.props);
            }
        },
        {
            key: "componentDidUpdate",
            value: function() {
                this.syncLoadData(this.props);
            }
        },
        {
            key: "isSelectable",
            value: function() {
                const selectable = this.props.selectable;
                const selectable_1 = this.props.context.selectable;
                if (typeof selectable === "boolean") {
                    return selectable;
                }
                return selectable_1;
            }
        },
        {
            key: "render",
            value: function() {
                let e;
                const props = this.props;
                const { eventKey, className, style, dragOver, dragOverGapTop, dragOverGapBottom, isLeaf, isStart, isEnd, expanded, selected, checked, halfChecked, loading, domRef, active, data: _data, onMouseMove, selectable, ...rest } = props;
                const context = this.props.context;
                const { prefixCls, filterTreeNode, keyEntities, dropContainerKey, dropTargetKey, draggingNodeKey } = context;
                const P = this.isDisabled();
                const L = T(rest, {
                    aria: true,
                    data: true
                });
                const level = (Gt(keyEntities, eventKey) || {}).level;
                const N = isEnd[isEnd.length - 1];
                const D = this.isDraggable();
                const I = !P && D;
                const R = draggingNodeKey === eventKey;
                const B = selectable !== undefined ? {
                    "aria-selected": !!selectable
                } : undefined;
                return <div ref={domRef} className={module1173(className, `${prefixCls}-treenode`, (e = {}, a(e, `${prefixCls}-treenode-disabled`, P), a(e, `${prefixCls}-treenode-switcher-${expanded ? "open" : "close"}`, !isLeaf), a(e, `${prefixCls}-treenode-checkbox-checked`, checked), a(e, `${prefixCls}-treenode-checkbox-indeterminate`, halfChecked), a(e, `${prefixCls}-treenode-selected`, selected), a(e, `${prefixCls}-treenode-loading`, loading), a(e, `${prefixCls}-treenode-active`, active), a(e, `${prefixCls}-treenode-leaf-last`, N), a(e, `${prefixCls}-treenode-draggable`, D), a(e, "dragging", R), a(e, "drop-target", dropTargetKey === eventKey), a(e, "drop-container", dropContainerKey === eventKey), a(e, "drag-over", !P && dragOver), a(e, "drag-over-gap-top", !P && dragOverGapTop), a(e, "drag-over-gap-bottom", !P && dragOverGapBottom), a(e, "filter-node", filterTreeNode && filterTreeNode(rn(this.props))), e))} style={style} draggable={I} aria-grabbed={R} onDragStart={I ? this.onDragStart : undefined} onDragEnter={D ? this.onDragEnter : undefined} onDragOver={D ? this.onDragOver : undefined} onDragLeave={D ? this.onDragLeave : undefined} onDrop={D ? this.onDrop : undefined} onDragEnd={D ? this.onDragEnd : undefined} onMouseMove={onMouseMove} {...B} {...L}><Kt prefixCls={prefixCls} level={level} isStart={isStart} isEnd={isEnd}/>{this.renderDragHandler()}{this.renderSwitcher()}{this.renderCheckbox()}{this.renderSelector()}</div>;
            }
        }
    ]);
    return n;
})(Component);
const TreeNode1 = function(e) {
    return <FContext.Consumer>{function(context) {
        return <An1 {...e} context={context}/>;
    }}</FContext.Consumer>;
};
TreeNode1.displayName = "TreeNode";
TreeNode1.isTreeNode = 1;
const Un = TreeNode1;
export { Un as TreeNode };
const MotionTreeNode = function({ className, style, motion, motionNodes, motionType, onMotionStart, onMotionEnd, active, treeNodeRequiredProps, ...rest }, t) {
    const [h, setH] = useState(true);
    const prefixCls = useContext(FContext).prefixCls;
    const y = motionNodes && motionType !== "hide";
    useK(()=>{
        if (motionNodes && y !== h) {
            setH(y);
        }
    }, [
        motionNodes
    ]);
    const mRef = useRef(false);
    const b = function() {
        if (motionNodes && !mRef.current) {
            mRef.current = true;
            onMotionEnd();
        }
    };
    ((t)=>{
        const e = 0;
        const [r, setR] = useState(false);
        useK(()=>{
            if (r) {
                if (motionNodes) {
                    onMotionStart();
                }
                return function() {
                    t();
                };
            }
        }, [
            r
        ]);
        useK(()=>{
            setR(true);
            return function() {
                setR(false);
            };
        }, []);
    })(b);
    if (motionNodes) {
        return <Wt ref={t} visible={h} {...motion} motionAppear={motionType === "show"} onVisibleChanged={function(e) {
            if (y === e) {
                b();
            }
        }}>{function({ className, style }, t) {
            return <div ref={t} className={module1173(`${prefixCls}-treenode-motion`, className)} style={style}>{motionNodes.map((e)=>{
                const t = {
                    ...(V(e.data), e.data)
                };
                const { title, key, isStart, isEnd } = e;
                delete t.children;
                const l = nn(key, treeNodeRequiredProps);
                return <Un {...t} {...l} title={title} active={active} data={e.data} key={key} isStart={isStart} isEnd={isEnd}/>;
            })}</div>;
        }}</Wt>;
    }
    return <Un domRef={t} className={className} style={style} {...rest} active={active}/>;
};
MotionTreeNode.displayName = "MotionTreeNode";
const Fn = forwardRef(MotionTreeNode);
function dn(e, t, key) {
    const r = e.findIndex((e)=>e.key === key);
    const o = e[r + 1];
    const i = t.findIndex((e)=>e.key === key);
    if (o) {
        const a = t.findIndex((e)=>e.key === o.key);
        return t.slice(i + 1, a);
    }
    return t.slice(i + 1);
}
const hn = {
    width: 0,
    height: 0,
    display: "flex",
    overflow: "hidden",
    opacity: 0,
    border: 0,
    padding: 0,
    margin: 0
};
const onChange = function() {};
const gn = `RC_TREE_MOTION_${Math.random()}`;
const yn = {
    key: gn
};
const mn = {
    key: gn,
    level: 0,
    index: 0,
    pos: "0",
    node: yn,
    nodes: [
        yn
    ]
};
const bn = {
    parent: null,
    children: [],
    pos: mn.pos,
    data: yn,
    title: null,
    key: gn,
    isStart: [],
    isEnd: []
};
function xn(e, virtual, height, itemHeight) {
    if (virtual !== false && height) {
        return e.slice(0, Math.ceil(height / itemHeight) + 1);
    }
    return e;
}
function itemKey(e) {
    return Jt(e.key, e.pos);
}
const NodeList = forwardRef(function({ prefixCls, data, selectable: _selectable, checkable: _checkable, expandedKeys, selectedKeys, checkedKeys, loadedKeys, loadingKeys, halfCheckedKeys, keyEntities, disabled, dragging, dragOverNodeKey, dropPosition, motion, height, itemHeight, virtual, focusable, activeItem, focused, tabIndex, onKeyDown, onFocus, onBlur, onActiveChange, onListChangeStart, onListChangeEnd, ...rest }, t) {
    const TRef = useRef(null);
    const PRef = useRef(null);
    useImperativeHandle(t, function() {
        return {
            scrollTo: function(e) {
                TRef.current.scrollTo(e);
            },
            getIndentWidth: function() {
                return PRef.current.offsetWidth;
            }
        };
    });
    const [z, setZ] = useState(expandedKeys);
    const [I, setI] = useState(data);
    const [F, setF] = useState(data);
    const [G, setG] = useState([]);
    const [motionType, setMotionType] = useState(null);
    const QRef = useRef(data);
    function onMotionEnd() {
        const QRef_current = QRef.current;
        setI(QRef_current);
        setF(QRef_current);
        setG([]);
        setMotionType(null);
        onListChangeEnd();
    }
    QRef.current = data;
    useK(()=>{
        setZ(expandedKeys);
        const e = ((e = [], t = [])=>{
            const e_length = e.length;
            const t_length = t.length;
            if (Math.abs(e_length - t_length) !== 1) {
                return {
                    add: false,
                    key: null
                };
            }
            function o(e, t) {
                const map = new Map;
                e.forEach((e)=>{
                    map.set(e, true);
                });
                const r = t.filter((e)=>!map.has(e));
                if (r.length === 1) {
                    return r[0];
                }
                return null;
            }
            if (e_length < t_length) {
                return {
                    add: true,
                    key: o(e, t)
                };
            }
            return {
                add: false,
                key: o(t, e)
            };
        })(z, expandedKeys);
        if (e.key !== null) {
            if (e.add) {
                const t = I.findIndex((t)=>t.key === e.key);
                const n = xn(dn(I, data, e.key), virtual, height, itemHeight);
                const r = I.slice();
                r.splice(t + 1, 0, bn);
                setF(r);
                setG(n);
                setMotionType("show");
            } else {
                const a = data.findIndex((t)=>t.key === e.key);
                const l = xn(dn(data, I, e.key), virtual, height, itemHeight);
                const u = data.slice();
                u.splice(a + 1, 0, bn);
                setF(u);
                setG(l);
                setMotionType("hide");
            }
        } else {
            if (I !== data) {
                setI(data);
                setF(data);
            }
        }
    }, [
        expandedKeys,
        data
    ]);
    useEffect(function() {
        if (!dragging) {
            onMotionEnd();
        }
    }, [
        dragging
    ]);
    const data_1 = motion ? F : data;
    const treeNodeRequiredProps = {
        expandedKeys,
        selectedKeys,
        loadedKeys,
        loadingKeys,
        checkedKeys,
        halfCheckedKeys,
        dragOverNodeKey,
        dropPosition,
        keyEntities
    };
    return <>{focused && activeItem && <span style={hn} aria-live="assertive">{((activeItem_1)=>{
        let t = String(activeItem_1.data.key);
        for(let n = activeItem_1; n.parent;){
            n = n.parent;
            t = `${n.data.key} > ${t}`;
        }
        return t;
    })(activeItem)}</span>}<div><input style={hn} disabled={focusable === false || disabled} tabIndex={focusable !== false ? tabIndex : null} onKeyDown={onKeyDown} onFocus={onFocus} onBlur={onBlur} value="" onChange={onChange} aria-label="for screen reader"/></div><div className={`${prefixCls}-treenode`} aria-hidden style={{
        position: "absolute",
        pointerEvents: "none",
        visibility: "hidden",
        height: 0,
        overflow: "hidden",
        border: 0,
        padding: 0
    }}><div className={`${prefixCls}-indent`}><div ref={PRef} className={`${prefixCls}-indent-unit`}/></div></div><He {...rest} data={data_1} itemKey={itemKey} height={height} fullHeight={false} virtual={virtual} itemHeight={itemHeight} prefixCls={`${prefixCls}-list`} ref={TRef} onVisibleChange={function(e, t) {
        const n = new Set(e);
        if (t.filter((e)=>!n.has(e)).some((e)=>itemKey(e) === gn)) {
            onMotionEnd();
        }
    }}>{function(e) {
        const e_pos = e.pos;
        const n = {
            ...(V(e.data), e.data)
        };
        const { title, key, isStart, isEnd } = e;
        const u = Jt(key, e_pos);
        delete n.key;
        delete n.children;
        const s = nn(u, treeNodeRequiredProps);
        return <Fn {...n} {...s} title={title} active={!!activeItem && key === activeItem.key} pos={e_pos} data={e.data} isStart={isStart} isEnd={isEnd} motion={motion} motionNodes={key === gn ? G : null} motionType={motionType} onMotionStart={onListChangeStart} onMotionEnd={onMotionEnd} treeNodeRequiredProps={treeNodeRequiredProps} onMouseMove={function() {
            onActiveChange(null);
        }}/>;
    }}</He></>;
});
NodeList.displayName = "NodeList";
const Cn = NodeList;
function On(e, t) {
    if (!e) {
        return [];
    }
    const n = e.slice();
    const r = n.indexOf(t);
    if (r >= 0) {
        n.splice(r, 1);
    }
    return n;
}
function En(e, t) {
    const n = (e || []).slice();
    if (n.indexOf(t) === -1) {
        n.push(t);
    }
    return n;
}
function Mn(e) {
    return e.split("-");
}
function Sn(eventKey, keyEntities) {
    const n = [];
    (function e(t = []) {
        t.forEach(({ key, children })=>{
            n.push(key);
            e(children);
        });
    })(Gt(keyEntities, eventKey).children);
    return n;
}
function An(e) {
    if (e.parent) {
        const t = Mn(e.pos);
        return Number(t[t.length - 1]) === e.parent.children.length - 1;
    }
    return false;
}
function kn(e, dragNode, n, indent, dragStartMousePosition, allowDrop, flattenNodes, keyEntities, expandedKeys, direction) {
    const { clientX, clientY } = e;
    const p = e.target.getBoundingClientRect();
    const { top, height } = p;
    const g = ((direction === "rtl" ? -1 : 1) * ((dragStartMousePosition?.x || 0) - clientX) - 12) / indent;
    let y = Gt(keyEntities, n.props.eventKey);
    if (clientY < top + height / 2) {
        const m = flattenNodes.findIndex((e)=>e.key === y.key);
        const b = flattenNodes[m <= 0 ? 0 : m - 1].key;
        y = Gt(keyEntities, b);
    }
    const y_key = y.key;
    const w = y;
    const y_key_1 = y.key;
    let dropPosition = 0;
    let dropLevelOffset = 0;
    if (!expandedKeys.includes(y_key)) {
        for(let E = 0; E < g && An(y); E += 1){
            y = y.parent;
            dropLevelOffset += 1;
        }
    }
    let M;
    const data = dragNode.props.data;
    const y_node = y.node;
    let dropAllowed = true;
    M = Mn(y.pos);
    if (Number(M[M.length - 1]) === 0 && y.level === 0 && clientY < top + height / 2 && allowDrop({
        dragNode: data,
        dropNode: y_node,
        dropPosition: -1
    }) && y.key === n.props.eventKey) {
        dropPosition = -1;
    } else if ((w.children || []).length && expandedKeys.includes(y_key_1)) {
        if (allowDrop({
            dragNode: data,
            dropNode: y_node,
            dropPosition: 0
        })) {
            dropPosition = 0;
        } else {
            dropAllowed = false;
        }
    } else if (dropLevelOffset === 0) {
        if (g > -1.5) {
            if (allowDrop({
                dragNode: data,
                dropNode: y_node,
                dropPosition: 1
            })) {
                dropPosition = 1;
            } else {
                dropAllowed = false;
            }
        } else if (allowDrop({
            dragNode: data,
            dropNode: y_node,
            dropPosition: 0
        })) {
            dropPosition = 0;
        } else if (allowDrop({
            dragNode: data,
            dropNode: y_node,
            dropPosition: 1
        })) {
            dropPosition = 1;
        } else {
            dropAllowed = false;
        }
    } else if (allowDrop({
        dragNode: data,
        dropNode: y_node,
        dropPosition: 1
    })) {
        dropPosition = 1;
    } else {
        dropAllowed = false;
    }
    return {
        dropPosition,
        dropLevelOffset,
        dropTargetKey: y.key,
        dropTargetPos: y.pos,
        dragOverNodeKey: y_key_1,
        dropContainerKey: dropPosition === 0 ? null : y.parent?.key || null,
        dropAllowed
    };
}
function jn(e, prevProps) {
    if (e) {
        if (prevProps.multiple) {
            return e.slice();
        }
        if (e.length) {
            return [
                e[0]
            ];
        }
        return e;
    }
}
function Tn(e) {
    if (!e) {
        return null;
    }
    let t;
    if (Array.isArray(e)) {
        t = {
            checkedKeys: e,
            halfCheckedKeys: undefined
        };
    } else {
        if (o(e) !== "object") {
            R(false, "`checkedKeys` is not an array or an object");
            return null;
        }
        t = {
            checkedKeys: e.checked || undefined,
            halfCheckedKeys: e.halfChecked || undefined
        };
    }
    return t;
}
function Pn(e, t) {
    const set = new Set;
    (e || []).forEach((e)=>{
        (function e(r) {
            if (!set.has(r)) {
                const o = Gt(t, r);
                if (o) {
                    set.add(r);
                    const i = o.parent;
                    if (!o.node.disabled) {
                        if (i) {
                            e(i.key);
                        }
                    }
                }
            }
        })(e);
    });
    return [
        ...set
    ];
}
function Ln(e, t) {
    const set = new Set;
    e.forEach((e)=>{
        if (!t.has(e)) {
            set.add(e);
        }
    });
    return set;
}
function zn(e) {
    const t = e || {};
    const { disabled, disableCheckbox, checkable } = t;
    return !(!disabled && !disableCheckbox) || checkable === false;
}
function Nn(e, t, n, r) {
    let o;
    const i = [];
    o = r || zn;
    const a = new Set(e.filter((e)=>{
        const t = !!Gt(n, e);
        if (!t) {
            i.push(e);
        }
        return t;
    }));
    const map = new Map;
    let u = 0;
    Object.keys(n).forEach((e)=>{
        const t = n[e];
        const t_level = t.level;
        let o = map.get(t_level);
        if (!o) {
            o = new Set;
            map.set(t_level, o);
        }
        o.add(t);
        u = Math.max(u, t_level);
    });
    R(!i.length, `Tree missing follow keys: ${i.slice(0, 100).map((e)=>`'${e}'`).join(", ")}`);
    if (t === true) {
        return ((e, map_1, n, r)=>{
            const o = new Set(e);
            const set = new Set;
            for(let a = 0; a <= n; a += 1){
                (map_1.get(a) || new Set).forEach(({ key, node, children = [] })=>{
                    if (o.has(key) && !r(node)) {
                        children.filter((e)=>!r(e.node)).forEach((e)=>{
                            o.add(e.key);
                        });
                    }
                });
            }
            const set_1 = new Set;
            for(let u = n; u >= 0; u -= 1){
                (map_1.get(u) || new Set).forEach((e)=>{
                    const { parent, node } = e;
                    if (!r(node) && e.parent && !set_1.has(e.parent.key)) {
                        if (r(e.parent.node)) {
                            set_1.add(parent.key);
                        } else {
                            let a = true;
                            let u = false;
                            (parent.children || []).filter((e)=>!r(e.node)).forEach(({ key })=>{
                                const n = o.has(key);
                                if (a && !n) {
                                    a = false;
                                }
                                if (!(u || !n && !set.has(key))) {
                                    u = true;
                                }
                            });
                            if (a) {
                                o.add(parent.key);
                            }
                            if (u) {
                                set.add(parent.key);
                            }
                            set_1.add(parent.key);
                        }
                    }
                });
            }
            return {
                checkedKeys: Array.from(o),
                halfCheckedKeys: Array.from(Ln(set, o))
            };
        })(a, map, u, o);
    }
    return ((e, t, map_1, r, o)=>{
        const i = new Set(e);
        let a = new Set(t);
        for(let l = 0; l <= r; l += 1){
            (map_1.get(l) || new Set).forEach(({ key, node, children = [] })=>{
                if (!(i.has(key) || a.has(key) || o(node))) {
                    children.filter((e)=>!o(e.node)).forEach((e)=>{
                        i.delete(e.key);
                    });
                }
            });
        }
        a = new Set;
        const set = new Set;
        for(let s = r; s >= 0; s -= 1){
            (map_1.get(s) || new Set).forEach((e)=>{
                const { parent, node } = e;
                if (!o(node) && e.parent && !set.has(e.parent.key)) {
                    if (o(e.parent.node)) {
                        set.add(parent.key);
                    } else {
                        let r = true;
                        let l = false;
                        (parent.children || []).filter((e)=>!o(e.node)).forEach(({ key })=>{
                            const n = i.has(key);
                            if (r && !n) {
                                r = false;
                            }
                            if (!(l || !n && !a.has(key))) {
                                l = true;
                            }
                        });
                        if (!r) {
                            i.delete(parent.key);
                        }
                        if (l) {
                            a.add(parent.key);
                        }
                        set.add(parent.key);
                    }
                }
            });
        }
        return {
            checkedKeys: Array.from(i),
            halfCheckedKeys: Array.from(Ln(a, i))
        };
    })(a, t.halfCheckedKeys, map, u, o);
}
const Dn = ((Component_1)=>{
    y(n, Component_1);
    var t = x(n);
    function n(...o_1) {
        let e;
        d(this, n);
        e = t.call(this, ...o_1);
        e.destroyed = false;
        e.delayedDragEnterLogic = undefined;
        e.loadingRetryTimes = {};
        e.state = {
            keyEntities: {},
            indent: null,
            selectedKeys: [],
            checkedKeys: [],
            halfCheckedKeys: [],
            loadedKeys: [],
            loadingKeys: [],
            expandedKeys: [],
            draggingNodeKey: null,
            dragChildrenKeys: [],
            dropTargetKey: null,
            dropPosition: null,
            dropContainerKey: null,
            dropLevelOffset: null,
            dropTargetPos: null,
            dropAllowed: true,
            dragOverNodeKey: null,
            treeData: [],
            flattenNodes: [],
            focused: false,
            activeKey: null,
            listChanging: false,
            prevProps: null,
            fieldNames: Qt()
        };
        e.dragStartMousePosition = null;
        e.dragNode = undefined;
        e.currentMouseOverDroppableNodeKey = null;
        e.listRef = createRef();
        e.onNodeDragStart = function(t, n) {
            const e_state = e.state;
            const { expandedKeys, keyEntities } = e_state;
            const onDragStart = e.props.onDragStart;
            const eventKey = n.props.eventKey;
            e.dragNode = n;
            e.dragStartMousePosition = {
                x: t.clientX,
                y: t.clientY
            };
            const u = On(expandedKeys, eventKey);
            e.setState({
                draggingNodeKey: eventKey,
                dragChildrenKeys: Sn(eventKey, keyEntities),
                indent: e.listRef.current.getIndentWidth()
            });
            e.setExpandedKeys(u);
            window.addEventListener("dragend", e.onWindowDragEnd);
            onDragStart?.({
                event: t,
                node: rn(n.props)
            });
        };
        e.onNodeDragEnter = function(t, n) {
            const e_state = e.state;
            const { expandedKeys, keyEntities, dragChildrenKeys, flattenNodes, indent } = e_state;
            const e_props = e.props;
            const { onDragEnter, onExpand, allowDrop, direction } = e_props;
            const n_props = n.props;
            const { pos, eventKey } = n_props;
            const dragNode = v(e).dragNode;
            if (e.currentMouseOverDroppableNodeKey !== eventKey) {
                e.currentMouseOverDroppableNodeKey = eventKey;
            }
            if (dragNode) {
                const x = kn(t, dragNode, n, indent, e.dragStartMousePosition, allowDrop, flattenNodes, keyEntities, expandedKeys, direction);
                const { dropPosition, dropLevelOffset, dropTargetKey, dropContainerKey, dropTargetPos, dropAllowed, dragOverNodeKey } = x;
                if (dragChildrenKeys.indexOf(dropTargetKey) === -1 && dropAllowed) {
                    if (!e.delayedDragEnterLogic) {
                        e.delayedDragEnterLogic = {};
                    }
                    Object.keys(e.delayedDragEnterLogic).forEach((t)=>{
                        clearTimeout(e.delayedDragEnterLogic[t]);
                    });
                    if (dragNode.props.eventKey !== n.props.eventKey) {
                        t.persist();
                        e.delayedDragEnterLogic[pos] = window.setTimeout(function() {
                            if (e.state.draggingNodeKey !== null) {
                                let r = [
                                    ...expandedKeys
                                ];
                                const a = Gt(keyEntities, n.props.eventKey);
                                if (a && (a.children || []).length) {
                                    r = En(expandedKeys, n.props.eventKey);
                                }
                                if (!("expandedKeys" in e.props)) {
                                    e.setExpandedKeys(r);
                                }
                                onExpand?.(r, {
                                    node: rn(n.props),
                                    expanded: true,
                                    nativeEvent: t.nativeEvent
                                });
                            }
                        }, 800);
                    }
                    if (dragNode.props.eventKey !== dropTargetKey || dropLevelOffset !== 0) {
                        e.setState({
                            dragOverNodeKey,
                            dropPosition,
                            dropLevelOffset,
                            dropTargetKey,
                            dropContainerKey,
                            dropTargetPos,
                            dropAllowed
                        });
                        if (onDragEnter != null) {
                            onDragEnter({
                                event: t,
                                node: rn(n.props),
                                expandedKeys
                            });
                        }
                    } else {
                        e.resetDragState();
                    }
                } else {
                    e.resetDragState();
                }
            } else {
                e.resetDragState();
            }
        };
        e.onNodeDragOver = function(t, n) {
            const e_state = e.state;
            const { dragChildrenKeys, flattenNodes, keyEntities, expandedKeys, indent } = e_state;
            const e_props = e.props;
            const { onDragOver, allowDrop, direction } = e_props;
            const dragNode = v(e).dragNode;
            if (dragNode) {
                const h = kn(t, dragNode, n, indent, e.dragStartMousePosition, allowDrop, flattenNodes, keyEntities, expandedKeys, direction);
                const { dropPosition, dropLevelOffset, dropTargetKey, dropContainerKey, dropAllowed, dropTargetPos, dragOverNodeKey } = h;
                if (dragChildrenKeys.indexOf(dropTargetKey) === -1 && dropAllowed) {
                    if (dragNode.props.eventKey === dropTargetKey && dropLevelOffset === 0) {
                        if (!(e.state.dropPosition === null && e.state.dropLevelOffset === null && e.state.dropTargetKey === null && e.state.dropContainerKey === null && e.state.dropTargetPos === null && e.state.dropAllowed === false && e.state.dragOverNodeKey === null)) {
                            e.resetDragState();
                        }
                    } else if (!(dropPosition === e.state.dropPosition && dropLevelOffset === e.state.dropLevelOffset && dropTargetKey === e.state.dropTargetKey && dropContainerKey === e.state.dropContainerKey && dropTargetPos === e.state.dropTargetPos && dropAllowed === e.state.dropAllowed && dragOverNodeKey === e.state.dragOverNodeKey)) {
                        e.setState({
                            dropPosition,
                            dropLevelOffset,
                            dropTargetKey,
                            dropContainerKey,
                            dropTargetPos,
                            dropAllowed,
                            dragOverNodeKey
                        });
                    }
                    if (onDragOver != null) {
                        onDragOver({
                            event: t,
                            node: rn(n.props)
                        });
                    }
                }
            }
        };
        e.onNodeDragLeave = function(t, n) {
            if (!(e.currentMouseOverDroppableNodeKey !== n.props.eventKey || t.currentTarget.contains(t.relatedTarget))) {
                e.resetDragState();
                e.currentMouseOverDroppableNodeKey = null;
            }
            const onDragLeave = e.props.onDragLeave;
            onDragLeave?.({
                event: t,
                node: rn(n.props)
            });
        };
        e.onWindowDragEnd = function(t) {
            e.onNodeDragEnd(t, null, true);
            window.removeEventListener("dragend", e.onWindowDragEnd);
        };
        e.onNodeDragEnd = function(t, n) {
            const onDragEnd = e.props.onDragEnd;
            e.setState({
                dragOverNodeKey: null
            });
            e.cleanDragState();
            onDragEnd?.({
                event: t,
                node: rn(n.props)
            });
            e.dragNode = null;
            window.removeEventListener("dragend", e.onWindowDragEnd);
        };
        e.onNodeDrop = function(t, n) {
            const o = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
            const e_state = e.state;
            const { dragChildrenKeys, dropPosition, dropTargetKey, dropTargetPos, dropAllowed } = e_state;
            if (dropAllowed) {
                const d = e.props.onDrop;
                e.setState({
                    dragOverNodeKey: null
                });
                e.cleanDragState();
                if (dropTargetKey !== null) {
                    const p = {
                        ...nn(dropTargetKey, e.getTreeNodeRequiredProps()),
                        active: e.getActiveItem()?.key === dropTargetKey,
                        data: Gt(e.state.keyEntities, dropTargetKey).node
                    };
                    const h = dragChildrenKeys.indexOf(dropTargetKey) !== -1;
                    R(!h, "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");
                    const v = Mn(dropTargetPos);
                    const g = {
                        event: t,
                        node: rn(p),
                        dragNode: e.dragNode ? rn(e.dragNode.props) : null,
                        dragNodesKeys: [
                            e.dragNode.props.eventKey
                        ].concat(dragChildrenKeys),
                        dropToGap: dropPosition !== 0,
                        dropPosition: dropPosition + Number(v[v.length - 1])
                    };
                    if (!(o || d == null)) {
                        d(g);
                    }
                    e.dragNode = null;
                }
            }
        };
        e.cleanDragState = function() {
            if (e.state.draggingNodeKey !== null) {
                e.setState({
                    draggingNodeKey: null,
                    dropPosition: null,
                    dropContainerKey: null,
                    dropTargetKey: null,
                    dropLevelOffset: null,
                    dropAllowed: true,
                    dragOverNodeKey: null
                });
            }
            e.dragStartMousePosition = null;
            e.currentMouseOverDroppableNodeKey = null;
        };
        e.triggerExpandActionExpand = function(t, n) {
            const e_state = e.state;
            const { expandedKeys, flattenNodes } = e_state;
            const { expanded, key } = n;
            if (!(n.isLeaf || t.shiftKey || t.metaKey || t.ctrlKey)) {
                const s = flattenNodes.filter((e)=>e.key === key)[0];
                const c = rn({
                    ...nn(key, e.getTreeNodeRequiredProps()),
                    data: s.data
                });
                e.setExpandedKeys(expanded ? On(expandedKeys, key) : En(expandedKeys, key));
                e.onNodeExpand(t, c);
            }
        };
        e.onNodeClick = function(t, n) {
            const e_props = e.props;
            const r_onClick = e_props.onClick;
            if (e_props.expandAction === "click") {
                e.triggerExpandActionExpand(t, n);
            }
            r_onClick?.(t, n);
        };
        e.onNodeDoubleClick = function(t, n) {
            const e_props = e.props;
            const r_onDoubleClick = e_props.onDoubleClick;
            if (e_props.expandAction === "doubleClick") {
                e.triggerExpandActionExpand(t, n);
            }
            r_onDoubleClick?.(t, n);
        };
        e.onNodeSelect = function(t, n) {
            let selectedKeys = e.state.selectedKeys;
            const e_state = e.state;
            const { keyEntities, fieldNames } = e_state;
            const e_props = e.props;
            const { onSelect, multiple } = e_props;
            const n_selected = n.selected;
            const f = n[fieldNames.key];
            const selected = !n_selected;
            const selectedNodes = (selectedKeys = selected ? multiple ? En(selectedKeys, f) : [
                f
            ] : On(selectedKeys, f)).map((e)=>{
                const t = Gt(keyEntities, e);
                if (t) {
                    return t.node;
                }
                return null;
            }).filter((e)=>e);
            e.setUncontrolledState({
                selectedKeys
            });
            onSelect?.(selectedKeys, {
                event: "select",
                selected,
                node: n,
                selectedNodes,
                nativeEvent: t.nativeEvent
            });
        };
        e.onNodeCheck = function(t, n, checked) {
            let o;
            const e_state = e.state;
            const { keyEntities, checkedKeys, halfCheckedKeys } = e_state;
            const e_props = e.props;
            const { checkStrictly, onCheck } = e_props;
            const n_key = n.key;
            const h = {
                event: "check",
                node: n,
                checked,
                nativeEvent: t.nativeEvent
            };
            if (checkStrictly) {
                const v = checked ? En(checkedKeys, n_key) : On(checkedKeys, n_key);
                o = {
                    checked: v,
                    halfChecked: On(halfCheckedKeys, n_key)
                };
                h.checkedNodes = v.map((e)=>Gt(keyEntities, e)).filter((e)=>e).map((e)=>e.node);
                e.setUncontrolledState({
                    checkedKeys: v
                });
            } else {
                const g = Nn([
                    ...checkedKeys,
                    n_key
                ], true, keyEntities);
                let y = g.checkedKeys;
                let halfCheckedKeys_1 = g.halfCheckedKeys;
                if (!checked) {
                    const b = new Set(y);
                    b.delete(n_key);
                    const x = Nn(Array.from(b), {
                        checked: false,
                        halfCheckedKeys: halfCheckedKeys_1
                    }, keyEntities);
                    y = x.checkedKeys;
                    halfCheckedKeys_1 = x.halfCheckedKeys;
                }
                o = y;
                h.checkedNodes = [];
                h.checkedNodesPositions = [];
                h.halfCheckedKeys = halfCheckedKeys_1;
                y.forEach((e)=>{
                    const t = Gt(keyEntities, e);
                    if (t) {
                        const { node, pos } = t;
                        h.checkedNodes.push(node);
                        h.checkedNodesPositions.push({
                            node,
                            pos
                        });
                    }
                });
                e.setUncontrolledState({
                    checkedKeys: y
                }, false, {
                    halfCheckedKeys: halfCheckedKeys_1
                });
            }
            onCheck?.(o, h);
        };
        e.onNodeLoad = function(t) {
            const t_key = t.key;
            const r = new Promise((resolve, reject)=>{
                e.setState(function({ loadedKeys = [], loadingKeys = [] }) {
                    const e_props = e.props;
                    const { loadData, onLoad } = e_props;
                    if (loadData && loadedKeys.indexOf(t_key) === -1 && loadingKeys.indexOf(t_key) === -1) {
                        loadData(t).then(()=>{
                            const loadedKeys_1 = En(e.state.loadedKeys, t_key);
                            onLoad?.(loadedKeys_1, {
                                event: "load",
                                node: t
                            });
                            e.setUncontrolledState({
                                loadedKeys: loadedKeys_1
                            });
                            e.setState(function(e) {
                                return {
                                    loadingKeys: On(e.loadingKeys, t_key)
                                };
                            });
                            resolve();
                        }).catch((t)=>{
                            e.setState(function(e) {
                                return {
                                    loadingKeys: On(e.loadingKeys, t_key)
                                };
                            });
                            e.loadingRetryTimes[t_key] = (e.loadingRetryTimes[t_key] || 0) + 1;
                            if (e.loadingRetryTimes[t_key] >= 10) {
                                const i = e.state.loadedKeys;
                                R(false, "Retry for `loadData` many times but still failed. No more retry.");
                                e.setUncontrolledState({
                                    loadedKeys: En(i, t_key)
                                });
                                resolve();
                            }
                            reject(t);
                        });
                        return {
                            loadingKeys: En(loadingKeys, t_key)
                        };
                    }
                    return null;
                });
            });
            r.catch(()=>{});
            return r;
        };
        e.onNodeMouseEnter = function(t, n) {
            const onMouseEnter = e.props.onMouseEnter;
            onMouseEnter?.({
                event: t,
                node: n
            });
        };
        e.onNodeMouseLeave = function(t, n) {
            const onMouseLeave = e.props.onMouseLeave;
            onMouseLeave?.({
                event: t,
                node: n
            });
        };
        e.onNodeContextMenu = function(t, n) {
            const onRightClick = e.props.onRightClick;
            if (onRightClick) {
                t.preventDefault();
                onRightClick({
                    event: t,
                    node: n
                });
            }
        };
        e.onFocus = function(...r) {
            const onFocus = e.props.onFocus;
            e.setState({
                focused: true
            });
            onFocus?.(...r);
        };
        e.onBlur = function(...r) {
            const onBlur = e.props.onBlur;
            e.setState({
                focused: false
            });
            e.onActiveChange(null);
            onBlur?.(...r);
        };
        e.getTreeNodeRequiredProps = function() {
            const e_state = e.state;
            return {
                expandedKeys: e_state.expandedKeys || [],
                selectedKeys: e_state.selectedKeys || [],
                loadedKeys: e_state.loadedKeys || [],
                loadingKeys: e_state.loadingKeys || [],
                checkedKeys: e_state.checkedKeys || [],
                halfCheckedKeys: e_state.halfCheckedKeys || [],
                dragOverNodeKey: e_state.dragOverNodeKey,
                dropPosition: e_state.dropPosition,
                keyEntities: e_state.keyEntities
            };
        };
        e.setExpandedKeys = function(expandedKeys) {
            const e_state = e.state;
            const r = en(e_state.treeData, expandedKeys, e_state.fieldNames);
            e.setUncontrolledState({
                expandedKeys,
                flattenNodes: r
            }, true);
        };
        e.onNodeExpand = function(t, n) {
            let expandedKeys = e.state.expandedKeys;
            const e_state = e.state;
            const { listChanging, fieldNames } = e_state;
            const e_props = e.props;
            const { onExpand, loadData } = e_props;
            const n_expanded = n.expanded;
            const f = n[fieldNames.key];
            if (!listChanging) {
                const d = expandedKeys.indexOf(f);
                const expanded = !n_expanded;
                R(n_expanded && d !== -1 || !n_expanded && d === -1, "Expand state not sync with index check");
                expandedKeys = expanded ? En(expandedKeys, f) : On(expandedKeys, f);
                e.setExpandedKeys(expandedKeys);
                onExpand?.(expandedKeys, {
                    node: n,
                    expanded,
                    nativeEvent: t.nativeEvent
                });
                if (expanded && loadData) {
                    const h = e.onNodeLoad(n);
                    if (h) {
                        h.then(()=>{
                            const t = en(e.state.treeData, expandedKeys, fieldNames);
                            e.setUncontrolledState({
                                flattenNodes: t
                            });
                        }).catch(()=>{
                            const t = On(e.state.expandedKeys, f);
                            e.setExpandedKeys(t);
                        });
                    }
                }
            }
        };
        e.onListChangeStart = function() {
            e.setUncontrolledState({
                listChanging: true
            });
        };
        e.onListChangeEnd = function() {
            setTimeout(()=>{
                e.setUncontrolledState({
                    listChanging: false
                });
            });
        };
        e.onActiveChange = function(t) {
            const activeKey = e.state.activeKey;
            const { onActiveChange, itemScrollOffset = 0 } = e.props;
            if (activeKey !== t) {
                e.setState({
                    activeKey: t
                });
                if (t !== null) {
                    e.scrollTo({
                        key: t,
                        offset: itemScrollOffset
                    });
                }
                if (onActiveChange != null) {
                    onActiveChange(t);
                }
            }
        };
        e.getActiveItem = function() {
            const e_state = e.state;
            const { activeKey, flattenNodes } = e_state;
            if (activeKey === null) {
                return null;
            }
            return flattenNodes.find((e)=>e.key === activeKey) || null;
        };
        e.offsetActiveKey = function(t) {
            const e_state = e.state;
            const { flattenNodes, activeKey } = e_state;
            let i = flattenNodes.findIndex((e)=>e.key === activeKey);
            if (i === -1 && t < 0) {
                i = flattenNodes.length;
            }
            const a = flattenNodes[i = (i + t + flattenNodes.length) % flattenNodes.length];
            if (a) {
                const l = a.key;
                e.onActiveChange(l);
            } else {
                e.onActiveChange(null);
            }
        };
        e.onKeyDown = function(t) {
            const e_state = e.state;
            const { activeKey, expandedKeys, checkedKeys, fieldNames } = e_state;
            const e_props = e.props;
            const { onKeyDown, checkable, selectable } = e_props;
            switch(t.which){
                case O.UP:
                    e.offsetActiveKey(-1);
                    t.preventDefault();
                    break;
                case O.DOWN:
                    e.offsetActiveKey(1);
                    t.preventDefault();
            }
            const d = e.getActiveItem();
            if (d && d.data) {
                const p = e.getTreeNodeRequiredProps();
                const h = d.data.isLeaf === false || !!(d.data[fieldNames.children] || []).length;
                const v = rn({
                    ...nn(activeKey, p),
                    data: d.data,
                    active: true
                });
                switch(t.which){
                    case O.LEFT:
                        if (h && expandedKeys.includes(activeKey)) {
                            e.onNodeExpand({}, v);
                        } else if (d.parent) {
                            e.onActiveChange(d.parent.key);
                        }
                        t.preventDefault();
                        break;
                    case O.RIGHT:
                        if (h && !expandedKeys.includes(activeKey)) {
                            e.onNodeExpand({}, v);
                        } else if (d.children && d.children.length) {
                            e.onActiveChange(d.children[0].key);
                        }
                        t.preventDefault();
                        break;
                    case O.ENTER:
                    case O.SPACE:
                        if (!checkable || v.disabled || v.checkable === false || v.disableCheckbox) {
                            if (!(checkable || !selectable || v.disabled || v.selectable === false)) {
                                e.onNodeSelect({}, v);
                            }
                        } else {
                            e.onNodeCheck({}, v, !checkedKeys.includes(activeKey));
                        }
                }
            }
            onKeyDown?.(t);
        };
        e.setUncontrolledState = function(t, _param_1, r = null) {
            const n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
            if (!e.destroyed) {
                let o = false;
                let i = true;
                const a = {};
                Object.keys(t).forEach((n)=>{
                    if (n in e.props) {
                        i = false;
                    } else {
                        o = true;
                        a[n] = t[n];
                    }
                });
                if (!(!o || n && !i)) {
                    e.setState({
                        ...a,
                        ...r
                    });
                }
            }
        };
        e.scrollTo = function(t) {
            e.listRef.current.scrollTo(t);
        };
        return e;
    }
    h(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.destroyed = false;
                this.onUpdated();
            }
        },
        {
            key: "componentDidUpdate",
            value: function() {
                this.onUpdated();
            }
        },
        {
            key: "onUpdated",
            value: function() {
                const { activeKey, itemScrollOffset = 0 } = this.props;
                if (activeKey !== undefined && activeKey !== this.state.activeKey) {
                    this.setState({
                        activeKey
                    });
                    if (activeKey !== null) {
                        this.scrollTo({
                            key: activeKey,
                            offset: itemScrollOffset
                        });
                    }
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                window.removeEventListener("dragend", this.onWindowDragEnd);
                this.destroyed = true;
            }
        },
        {
            key: "resetDragState",
            value: function() {
                this.setState({
                    dragOverNodeKey: null,
                    dropPosition: null,
                    dropLevelOffset: null,
                    dropTargetKey: null,
                    dropContainerKey: null,
                    dropTargetPos: null,
                    dropAllowed: false
                });
            }
        },
        {
            key: "render",
            value: function() {
                let e;
                let t;
                const state = this.state;
                const { focused, flattenNodes, keyEntities, draggingNodeKey, activeKey, dropLevelOffset, dropContainerKey, dropTargetKey, dropPosition, dragOverNodeKey, indent } = state;
                const { prefixCls, className, style, showLine, focusable, tabIndex = 0, selectable, showIcon, icon, switcherIcon, draggable, checkable, checkStrictly, disabled, motion, loadData, filterTreeNode, height, itemHeight, virtual, titleRender, dropIndicatorRender, onContextMenu, onScroll, direction, rootClassName, rootStyle } = this.props;
                const Y = T(this.props, {
                    aria: true,
                    data: true
                });
                if (draggable) {
                    t = o(draggable) === "object" ? draggable : typeof draggable === "function" ? {
                        nodeDraggable: draggable
                    } : {};
                }
                return <FContext.Provider value={{
                    prefixCls,
                    selectable,
                    showIcon,
                    icon,
                    switcherIcon,
                    draggable: t,
                    draggingNodeKey,
                    checkable,
                    checkStrictly,
                    disabled,
                    keyEntities,
                    dropLevelOffset,
                    dropContainerKey,
                    dropTargetKey,
                    dropPosition,
                    dragOverNodeKey,
                    indent,
                    direction,
                    dropIndicatorRender,
                    loadData,
                    filterTreeNode,
                    titleRender,
                    onNodeClick: this.onNodeClick,
                    onNodeDoubleClick: this.onNodeDoubleClick,
                    onNodeExpand: this.onNodeExpand,
                    onNodeSelect: this.onNodeSelect,
                    onNodeCheck: this.onNodeCheck,
                    onNodeLoad: this.onNodeLoad,
                    onNodeMouseEnter: this.onNodeMouseEnter,
                    onNodeMouseLeave: this.onNodeMouseLeave,
                    onNodeContextMenu: this.onNodeContextMenu,
                    onNodeDragStart: this.onNodeDragStart,
                    onNodeDragEnter: this.onNodeDragEnter,
                    onNodeDragOver: this.onNodeDragOver,
                    onNodeDragLeave: this.onNodeDragLeave,
                    onNodeDragEnd: this.onNodeDragEnd,
                    onNodeDrop: this.onNodeDrop
                }}><div role="tree" className={module1173(prefixCls, className, rootClassName, (e = {}, a(e, `${prefixCls}-show-line`, showLine), a(e, `${prefixCls}-focused`, focused), a(e, `${prefixCls}-active-focused`, activeKey !== null), e))} style={rootStyle}><Cn ref={this.listRef} prefixCls={prefixCls} style={style} data={flattenNodes} disabled={disabled} selectable={selectable} checkable={!!checkable} motion={motion} dragging={draggingNodeKey !== null} height={height} itemHeight={itemHeight} virtual={virtual} focusable={focusable} focused={focused} tabIndex={tabIndex} activeItem={this.getActiveItem()} onFocus={this.onFocus} onBlur={this.onBlur} onKeyDown={this.onKeyDown} onActiveChange={this.onActiveChange} onListChangeStart={this.onListChangeStart} onListChangeEnd={this.onListChangeEnd} onContextMenu={onContextMenu} onScroll={onScroll} {...this.getTreeNodeRequiredProps()} {...Y}/></div></FContext.Provider>;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(prevProps, t) {
                let n;
                const t_prevProps = t.prevProps;
                const o = {
                    prevProps
                };
                function i(t) {
                    return !t_prevProps && t in prevProps || t_prevProps && t_prevProps[t] !== prevProps[t];
                }
                let t_fieldNames = t.fieldNames;
                if (i("fieldNames")) {
                    t_fieldNames = Qt(prevProps.fieldNames);
                    o.fieldNames = t_fieldNames;
                }
                if (i("treeData")) {
                    n = prevProps.treeData;
                } else if (i("children")) {
                    R(false, "`children` of Tree is deprecated. Please use `treeData` instead.");
                    n = ((e)=>(function e(t) {
                            return (function e(t, n = {}) {
                                let r = [];
                                Children.forEach(t, function(t) {
                                    if (t != null || n.keepEmpty) {
                                        if (Array.isArray(t)) {
                                            r = r.concat(e(t));
                                        } else if (isFragment(t) && t.props) {
                                            r = r.concat(e(t.props.children, n));
                                        } else {
                                            r.push(t);
                                        }
                                    }
                                });
                                return r;
                            })(t).map((t)=>{
                                if (!((e)=>e && e.type && e.type.isTreeNode)(t)) {
                                    R(!t, "Tree/TreeNode can only accept TreeNode as children.");
                                    return null;
                                }
                                const { key, props } = t;
                                const props_children = props.children;
                                const i = {
                                    key,
                                    ...U(props, Yt)
                                };
                                const a = e(props_children);
                                if (a.length) {
                                    i.children = a;
                                }
                                return i;
                            }).filter((e)=>e);
                        })(e))(prevProps.children);
                }
                if (n) {
                    o.treeData = n;
                    const s = ((e, { initWrapper, processEntity, onProcessFinished, externalGetKey, childrenPropName, fieldNames } = {}, u)=>{
                        const externalGetKey_1 = externalGetKey || u;
                        const posEntities = {};
                        const f = {};
                        let d = {
                            posEntities,
                            keyEntities: f
                        };
                        if (initWrapper) {
                            d = initWrapper(d) || d;
                        }
                        tn(e, (e)=>{
                            const { node, index, pos, key, parentPos, level } = e;
                            const u = {
                                node,
                                nodes: e.nodes,
                                index,
                                key,
                                pos,
                                level
                            };
                            const s = Jt(key, pos);
                            posEntities[pos] = u;
                            f[s] = u;
                            u.parent = posEntities[parentPos];
                            if (u.parent) {
                                u.parent.children = u.parent.children || [];
                                u.parent.children.push(u);
                            }
                            if (processEntity) {
                                processEntity(u, d);
                            }
                        }, {
                            externalGetKey: externalGetKey_1,
                            childrenPropName,
                            fieldNames
                        });
                        if (onProcessFinished) {
                            onProcessFinished(d);
                        }
                        return d;
                    })(n, {
                        fieldNames: t_fieldNames
                    });
                    o.keyEntities = u({
                        [gn]: mn
                    }, s.keyEntities);
                }
                let c;
                const f = o.keyEntities || t.keyEntities;
                if (i("expandedKeys") || t_prevProps && i("autoExpandParent")) {
                    o.expandedKeys = prevProps.autoExpandParent || !t_prevProps && prevProps.defaultExpandParent ? Pn(prevProps.expandedKeys, f) : prevProps.expandedKeys;
                } else if (!t_prevProps && prevProps.defaultExpandAll) {
                    const d = {
                        ...f
                    };
                    delete d[gn];
                    o.expandedKeys = Object.keys(d).map((e)=>d[e].key);
                } else {
                    if (!t_prevProps && prevProps.defaultExpandedKeys) {
                        o.expandedKeys = prevProps.autoExpandParent || prevProps.defaultExpandParent ? Pn(prevProps.defaultExpandedKeys, f) : prevProps.defaultExpandedKeys;
                    }
                }
                if (!o.expandedKeys) {
                    delete o.expandedKeys;
                }
                if (n || o.expandedKeys) {
                    const p = en(n || t.treeData, o.expandedKeys || t.expandedKeys, t_fieldNames);
                    o.flattenNodes = p;
                }
                if (prevProps.selectable) {
                    if (i("selectedKeys")) {
                        o.selectedKeys = jn(prevProps.selectedKeys, prevProps);
                    } else if (!t_prevProps && prevProps.defaultSelectedKeys) {
                        o.selectedKeys = jn(prevProps.defaultSelectedKeys, prevProps);
                    }
                }
                if (prevProps.checkable && (i("checkedKeys") ? c = Tn(prevProps.checkedKeys) || {} : !t_prevProps && prevProps.defaultCheckedKeys ? c = Tn(prevProps.defaultCheckedKeys) || {} : n && (c = Tn(prevProps.checkedKeys) || {
                    checkedKeys: t.checkedKeys,
                    halfCheckedKeys: t.halfCheckedKeys
                }), c)) {
                    let { checkedKeys = [], halfCheckedKeys = [] } = c;
                    if (!prevProps.checkStrictly) {
                        const b = Nn(checkedKeys, true, f);
                        checkedKeys = b.checkedKeys;
                        halfCheckedKeys = b.halfCheckedKeys;
                    }
                    o.checkedKeys = checkedKeys;
                    o.halfCheckedKeys = halfCheckedKeys;
                }
                if (i("loadedKeys")) {
                    o.loadedKeys = prevProps.loadedKeys;
                }
                return o;
            }
        }
    ]);
    return n;
})(Component);
Dn.defaultProps = {
    prefixCls: "rc-tree",
    showLine: false,
    showIcon: true,
    selectable: true,
    multiple: false,
    checkable: false,
    disabled: false,
    checkStrictly: false,
    draggable: false,
    defaultExpandParent: true,
    autoExpandParent: false,
    defaultExpandAll: false,
    defaultExpandedKeys: [],
    defaultCheckedKeys: [],
    defaultSelectedKeys: [],
    dropIndicatorRender: function({ dropPosition, dropLevelOffset, indent }) {
        const o = {
            pointerEvents: "none",
            position: "absolute",
            right: 0,
            backgroundColor: "red",
            height: 2
        };
        switch(dropPosition){
            case -1:
                o.top = 0;
                o.left = -dropLevelOffset * indent;
                break;
            case 1:
                o.bottom = 0;
                o.left = -dropLevelOffset * indent;
                break;
            case 0:
                o.bottom = 0;
                o.left = indent;
        }
        return <div style={o}/>;
    },
    allowDrop: function() {
        return true;
    },
    expandAction: false
};
Dn.TreeNode = Un;
export default Dn;
