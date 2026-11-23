import { Component, cloneElement, forwardRef, useCallback, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } from "./module-553.js";
import module106 from "./module-106.js";
import module3 from "./module-3.js";
import * as module1260 from "./module-1260.js";
import "./module-761.js";
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
        if (o(e) !== "object" || e === null) {
            return e;
        }
        const n = e[Symbol.toPrimitive];
        if (n !== undefined) {
            const r = n.call(e, t);
            if (o(r) !== "object") {
                return r;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
    })(e);
    if (o(t) === "symbol") {
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
function s(e, t) {
    if (t == null || t > e.length) {
        t = e.length;
    }
    for(var n = 0, r = new Array(t); n < t; n++){
        r[n] = e[n];
    }
    return r;
}
function c(e, t) {
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
                return s(e, t);
            }
            let n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) {
                n = e.constructor.name;
            }
            if (n === "Map" || n === "Set") {
                return Array.from(e);
            }
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                return s(e, t);
            }
            return undefined;
        }
    })(e, t) || (()=>{
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
}
const Filler = forwardRef(function({ height, offsetY, offsetX, children, prefixCls, onInnerResize, innerProps, rtl, extra }, t) {
    let n;
    let m = {};
    let b = {
        display: "flex",
        flexDirection: "column"
    };
    if (offsetY !== undefined) {
        m = {
            height,
            position: "relative",
            overflow: "hidden"
        };
        b = {
            ...b,
            ...(a(n = {
                transform: `translateY(${offsetY}px)`
            }, rtl ? "marginRight" : "marginLeft", -offsetX), a(n, "position", "absolute"), a(n, "left", 0), a(n, "right", 0), a(n, "top", 0), n)
        };
    }
    return <div style={m}><module1260.a onResize={function(e) {
        if (e.offsetHeight && onInnerResize) {
            onInnerResize();
        }
    }}><div style={b} className={module3({
        [`${prefixCls}-holder-inner`]: prefixCls
    })} ref={t} {...innerProps}>{children}{extra}</div></module1260.a></div>;
});
Filler.displayName = "Filler";
const B1 = Filler;
let x = function(e) {
    return +setTimeout(e, 16);
};
let w = function(e) {
    return clearTimeout(e);
};
if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
    x = function(e) {
        return window.requestAnimationFrame(e);
    };
    w = function(e) {
        return window.cancelAnimationFrame(e);
    };
}
let _ = 0;
const map = new Map;
function O(e) {
    map.delete(e);
}
const E = function(e, t = 1) {
    const n = _ += 1;
    function r(t) {
        if (t === 0) {
            O(n);
            e();
        } else {
            const o = x(function() {
                r(t - 1);
            });
            map.set(n, o);
        }
    }
    r(t);
    return n;
};
E.cancel = function(e) {
    const t = map.get(e);
    O(t);
    return w(t);
};
const M = E;
function S(e, horizontal) {
    return ("touches" in e ? e.touches[0] : e)[horizontal ? "pageX" : "pageY"];
}
const A = forwardRef(function({ prefixCls, rtl, scrollOffset, scrollRange, onStartMove, onStopMove, onScroll, horizontal, spinSize, containerSize }, t) {
    let n;
    const [m, setM] = useState(false);
    const [pageY, setPageY] = useState(null);
    const [startTop, setStartTop] = useState(null);
    const A = !rtl;
    const kRef = useRef();
    const jRef = useRef();
    const [P, setP] = useState(false);
    const zRef = useRef();
    const N = function() {
        clearTimeout(zRef.current);
        setP(true);
        zRef.current = setTimeout(()=>{
            setP(false);
        }, 3000);
    };
    const D = scrollRange - containerSize || 0;
    const I = containerSize - spinSize || 0;
    const R = D > 0;
    const H = useMemo(function() {
        if (scrollOffset === 0 || D === 0) {
            return 0;
        }
        return scrollOffset / D * I;
    }, [
        scrollOffset,
        D,
        I
    ]);
    const BRef = useRef({
        top: H,
        dragging: m,
        pageY,
        startTop
    });
    BRef.current = {
        top: H,
        dragging: m,
        pageY,
        startTop
    };
    const onMouseDown = function(e) {
        setM(true);
        setPageY(S(e, horizontal));
        setStartTop(BRef.current.top);
        onStartMove();
        e.stopPropagation();
        e.preventDefault();
    };
    useEffect(function() {
        const e = function(e) {
            e.preventDefault();
        };
        const kRef_current = kRef.current;
        const jRef_current = jRef.current;
        kRef_current.addEventListener("touchstart", e);
        jRef_current.addEventListener("touchstart", onMouseDown);
        return function() {
            kRef_current.removeEventListener("touchstart", e);
            jRef_current.removeEventListener("touchstart", onMouseDown);
        };
    }, []);
    const VRef = useRef();
    VRef.current = D;
    const $RefRef = useRef();
    $RefRef.current = I;
    useEffect(function() {
        if (m) {
            let e;
            const t = function(t) {
                const BRef_current = BRef.current;
                const { dragging, pageY, startTop } = BRef_current;
                M.cancel(e);
                if (dragging) {
                    const a = S(t, horizontal) - pageY;
                    let l = startTop;
                    if (!A && horizontal) {
                        l -= a;
                    } else {
                        l += a;
                    }
                    const u = VRef.current;
                    const s = $RefRef.current;
                    const c = s ? l / s : 0;
                    let f = Math.ceil(c * u);
                    f = Math.max(f, 0);
                    f = Math.min(f, u);
                    e = M(function() {
                        onScroll(f, horizontal);
                    });
                }
            };
            const n = function() {
                setM(false);
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
                M.cancel(e);
            };
        }
    }, [
        m
    ]);
    useEffect(function() {
        N();
    }, [
        scrollOffset
    ]);
    useImperativeHandle(t, function() {
        return {
            delayHidden: N
        };
    });
    const U = `${prefixCls}-scrollbar`;
    const Z = {
        position: "absolute",
        visibility: P && R ? null : "hidden"
    };
    const W = {
        position: "absolute",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: 99,
        cursor: "pointer",
        userSelect: "none"
    };
    if (horizontal) {
        Z.height = 8;
        Z.left = 0;
        Z.right = 0;
        Z.bottom = 0;
        W.height = "100%";
        W.width = spinSize;
        if (A) {
            W.left = H;
        } else {
            W.right = H;
        }
    } else {
        Z.width = 8;
        Z.top = 0;
        Z.bottom = 0;
        if (A) {
            Z.right = 0;
        } else {
            Z.left = 0;
        }
        W.width = "100%";
        W.height = spinSize;
        W.top = H;
    }
    return <div ref={kRef} className={module3(U, (n = {}, a(n, `${U}-horizontal`, horizontal), a(n, `${U}-vertical`, !horizontal), a(n, `${U}-visible`, P), n))} style={Z} onMouseDown={function(e) {
        e.stopPropagation();
        e.preventDefault();
    }} onMouseMove={N}><div ref={jRef} className={module3(`${U}-thumb`, {
        [`${U}-thumb-moving`]: m
    })} style={W} onMouseDown={onMouseDown}/></div>;
});
function K1Component({ children, setRef }) {
    const r = useCallback(function(e) {
        setRef(e);
    }, []);
    return cloneElement(children, {
        ref: r
    });
}
function j(e) {
    if (((e)=>e instanceof HTMLElement || e instanceof SVGElement)(e)) {
        return e;
    }
    if (e instanceof Component) {
        return module106.findDOMNode(e);
    }
    return null;
}
function T(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, i(r.key), r);
    }
}
const P = (()=>{
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
        T(t.prototype, n);
    }
    Object.defineProperty(t, "prototype", {
        writable: false
    });
    return e;
})();
const L = (typeof navigator === "undefined" ? "undefined" : o(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const useZ = (e, bottom)=>{
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
function useN(e, t, n, r, o) {
    const iRef = useRef(0);
    const aRef = useRef(null);
    const lRef = useRef(null);
    const uRef = useRef(false);
    const s = useZ(t, n);
    const cRef = useRef(null);
    const dRef = useRef(null);
    return [
        function(t) {
            if (e) {
                M.cancel(dRef.current);
                dRef.current = M(function() {
                    cRef.current = null;
                }, 2);
                const { deltaX, deltaY } = t;
                const p = Math.abs(deltaX);
                const h = Math.abs(deltaY);
                if (cRef.current === null) {
                    cRef.current = r && p > h ? "x" : "y";
                }
                if (cRef.current === "x") {
                    ((e)=>{
                        const e_deltaX = e.deltaX;
                        o(e_deltaX, true);
                        if (!L) {
                            e.preventDefault();
                        }
                    })(t);
                } else {
                    ((e)=>{
                        M.cancel(aRef.current);
                        const e_deltaY = e.deltaY;
                        iRef.current += e_deltaY;
                        lRef.current = e_deltaY;
                        if (!s(e_deltaY)) {
                            if (!L) {
                                e.preventDefault();
                            }
                            aRef.current = M(function() {
                                const e = uRef.current ? 10 : 1;
                                o(iRef.current * e);
                                iRef.current = 0;
                            });
                        }
                    })(t);
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
const D = typeof window !== "undefined" && window.document && window.document.createElement ? useLayoutEffect : useEffect;
const useI = (e, t)=>{
    const nRef = useRef(true);
    D(function() {
        return e(nRef.current);
    }, t);
    D(function() {
        nRef.current = false;
        return function() {
            nRef.current = true;
        };
    }, []);
};
function R(e = 0, t = 0) {
    let n = e / t * 100;
    if (isNaN(n)) {
        n = 0;
    }
    n = Math.max(n, 20);
    n = Math.min(n, e / 2);
    return Math.floor(n);
}
function useH(e) {
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
let B = {};
const F = [];
function V(e, t) {}
function $(e, t) {}
function U(e, t, n) {
    if (!(t || B[n])) {
        e(false, n);
        B[n] = true;
    }
}
function Z(e, t) {
    U(V, e, t);
}
Z.preMessage = function(e) {
    F.push(e);
};
Z.resetWarned = function() {
    B = {};
};
Z.noteOnce = function(e, t) {
    U($, e, t);
};
const K = [];
const G = {
    overflowY: "auto",
    overflowAnchor: "none"
};
const List = forwardRef(function({ prefixCls = "rc-virtual-list", className, height, itemHeight, fullHeight = true, style, data, children, itemKey, virtual, direction, scrollWidth, component = "div", onScroll, onVirtualScroll, onVisibleChange, innerProps, extraRender, ...rest }, t) {
    const U = !(virtual === false || !height || !itemHeight);
    const virtual_1 = U && data && itemHeight * data.length > height;
    const rtl = direction === "rtl";
    const className_1 = module3(prefixCls, {
        [`${prefixCls}-rtl`]: rtl
    }, className);
    const X = data || K;
    const JRef = useRef();
    const QRef = useRef();
    const [te, setTe] = useState(0);
    const [oe, setOe] = useState(0);
    const [le, setLe] = useState(false);
    const onStartMove = function() {
        setLe(true);
    };
    const onStopMove = function() {
        setLe(false);
    };
    const getKey = useCallback(function(e) {
        if (typeof itemKey === "function") {
            return itemKey(e);
        }
        return e?.[itemKey];
    }, [
        itemKey
    ]);
    const de = {
        getKey
    };
    function pe(e) {
        setTe(function(t) {
            const n = ((e)=>{
                let t = e;
                if (!Number.isNaN(DeRef.current)) {
                    t = Math.min(t, DeRef.current);
                }
                return Math.max(t, 0);
            })(typeof e === "function" ? e(t) : e);
            JRef.current.scrollTop = n;
            return n;
        });
    }
    const heRef = useRef({
        start: 0,
        end: X.length
    });
    const veRef = useRef();
    const ge = c(((e, getKey_1, n)=>{
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
                let index = null;
                let multiple = Math.abs(e_length - t_length) !== 1;
                for(let f = 0; f < o.length; f += 1){
                    const d = u(r[f]);
                    if (d !== u(o[f])) {
                        index = f;
                        multiple = multiple || d !== u(o[f + 1]);
                        break;
                    }
                }
                if (index === null) {
                    return null;
                }
                return {
                    index,
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
    })(X, getKey), 1)[0];
    veRef.current = ge;
    const ye = ((getKey_1, t, n)=>{
        const [o, setO] = useState(0);
        const aRef = useRef(new Map);
        const lRef = useRef(new P);
        const uRef = useRef();
        function s() {
            M.cancel(uRef.current);
        }
        function d() {
            s();
            uRef.current = M(function() {
                aRef.current.forEach((e, t)=>{
                    if (e && e.offsetParent) {
                        const n = j(e);
                        const r = n.offsetHeight;
                        if (lRef.current.get(t) !== r) {
                            lRef.current.set(t, n.offsetHeight);
                        }
                    }
                });
                setO(function(e) {
                    return e + 1;
                });
            });
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
                    d();
                } else {
                    aRef.current.delete(r);
                }
            },
            d,
            lRef.current,
            o
        ];
    })(getKey);
    const [be, xe, we, _e] = ye;
    const Ce = useMemo(function() {
        if (!U) {
            return {
                scrollHeight: undefined,
                start: 0,
                end: X.length - 1,
                offset: undefined
            };
        }
        if (!virtual_1) {
            return {
                scrollHeight: QRef.current?.offsetHeight || 0,
                start: 0,
                end: X.length - 1,
                offset: undefined
            };
        }
        let start_1;
        let offset_1;
        let r;
        let scrollHeight_1 = 0;
        for(let i = X.length, a = 0; a < i; a += 1){
            const l = X[a];
            const u = getKey(l);
            const c = we.get(u);
            const f = scrollHeight_1 + (c === undefined ? itemHeight : c);
            if (f >= te && start_1 === undefined) {
                start_1 = a;
                offset_1 = scrollHeight_1;
            }
            if (f > te + height && r === undefined) {
                r = a;
            }
            scrollHeight_1 = f;
        }
        if (start_1 === undefined) {
            start_1 = 0;
            offset_1 = 0;
            r = Math.ceil(height / itemHeight);
        }
        if (r === undefined) {
            r = X.length - 1;
        }
        return {
            scrollHeight: scrollHeight_1,
            start: start_1,
            end: r = Math.min(r + 1, X.length - 1),
            offset: offset_1
        };
    }, [
        virtual_1,
        U,
        te,
        X,
        _e,
        height
    ]);
    const { scrollHeight, start, end, offset } = Ce;
    heRef.current.start = start;
    heRef.current.end = end;
    const [ke, setKe] = useState({
        width: 0,
        height
    });
    const TeRef = useRef();
    const PeRef = useRef();
    const Le = useMemo(function() {
        return R(ke.width, scrollWidth);
    }, [
        ke.width,
        scrollWidth
    ]);
    const ze = useMemo(function() {
        return R(ke.height, scrollHeight);
    }, [
        ke.height,
        scrollHeight
    ]);
    const Ne = scrollHeight - height;
    var DeRef = useRef(Ne);
    DeRef.current = Ne;
    const Ie = te <= 0;
    const Re = te >= Ne;
    const He = useZ(Ie, Re);
    const getScrollInfo = function() {
        return {
            x: rtl ? -oe : oe,
            y: te
        };
    };
    const FeRef = useRef(getScrollInfo());
    const Ve = useH(function() {
        if (onVirtualScroll) {
            const e = getScrollInfo();
            if (!(FeRef.current.x === e.x && FeRef.current.y === e.y)) {
                onVirtualScroll(e);
                FeRef.current = e;
            }
        }
    });
    function onScroll_1(e, t) {
        const n = e;
        if (t) {
            module106.flushSync(function() {
                setOe(n);
            });
            Ve();
        } else {
            pe(n);
        }
    }
    const Ue = (e)=>{
        let t = e;
        const n = scrollWidth - ke.width;
        t = Math.max(t, 0);
        return Math.min(t, n);
    };
    const Ze = useH(function(e, t) {
        if (t) {
            module106.flushSync(function() {
                setOe(function(t) {
                    return Ue(t + (rtl ? -e : e));
                });
            });
            Ve();
        } else {
            pe(function(t) {
                return t + e;
            });
        }
    });
    const [Ke, Ge] = useN(U, Ie, Re, !!scrollWidth, Ze);
    ((e, JRef_1, n)=>{
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
        useI(()=>{
            if (e) {
                JRef_1.current.addEventListener("touchstart", c);
            }
            return function() {
                JRef_1.current?.removeEventListener("touchstart", c);
                r();
                clearInterval(lRef.current);
            };
        }, [
            e
        ]);
    })(U, JRef, (deltaY, t)=>!He(deltaY, t) && (Ke({
            preventDefault: function() {},
            deltaY
        }), true));
    useI(()=>{
        function e(e) {
            if (U) {
                e.preventDefault();
            }
        }
        const JRef_current = JRef.current;
        JRef_current.addEventListener("wheel", Ke);
        JRef_current.addEventListener("DOMMouseScroll", Ge);
        JRef_current.addEventListener("MozMousePixelScroll", e);
        return function() {
            JRef_current.removeEventListener("wheel", Ke);
            JRef_current.removeEventListener("DOMMouseScroll", Ge);
            JRef_current.removeEventListener("MozMousePixelScroll", e);
        };
    }, [
        U
    ]);
    const onMouseEnter = function() {
        TeRef.current?.delayHidden();
        PeRef.current?.delayHidden();
    };
    const Ye = ((JRef_1, t, n, itemHeight_1, getKey_1, a, l, onMouseEnter_1)=>{
        const sRef = useRef();
        return function(c) {
            if (c != null) {
                M.cancel(sRef.current);
                if (typeof c === "number") {
                    l(c);
                } else if (c && o(c) === "object") {
                    let f;
                    const d = c.align;
                    f = "index" in c ? c.index : t.findIndex((e)=>getKey_1(e) === c.key);
                    const p = c.offset;
                    const h = p === undefined ? 0 : p;
                    (function o(u, c) {
                        if (!(u < 0) && JRef_1.current) {
                            const p = JRef_1.current.clientHeight;
                            let v = false;
                            let g = c;
                            if (p) {
                                const y = c || d;
                                let m = 0;
                                let b = 0;
                                let x = 0;
                                for(let w = Math.min(t.length, f), _ = 0; _ <= w; _ += 1){
                                    const C = getKey_1(t[_]);
                                    b = m;
                                    const O = n.get(C);
                                    m = x = b + (O === undefined ? itemHeight_1 : O);
                                    if (_ === f && O === undefined) {
                                        v = true;
                                    }
                                }
                                let E = null;
                                switch(y){
                                    case "top":
                                        E = b - h;
                                        break;
                                    case "bottom":
                                        E = x - p + h;
                                        break;
                                    default:
                                        const S = JRef_1.current.scrollTop;
                                        if (b < S) {
                                            g = "top";
                                        } else if (x > S + p) {
                                            g = "bottom";
                                        }
                                }
                                if (E !== null && E !== JRef_1.current.scrollTop) {
                                    l(E);
                                }
                            }
                            sRef.current = M(function() {
                                if (v) {
                                    a();
                                }
                                o(u - 1, g);
                            }, 2);
                        }
                    })(3);
                }
            } else {
                onMouseEnter_1();
            }
        };
    })(JRef, X, we, itemHeight, getKey, xe, pe, onMouseEnter);
    useImperativeHandle(t, function() {
        return {
            getScrollInfo,
            scrollTo: function(e) {
                let t;
                if ((t = e) && o(t) === "object" && ("left" in t || "top" in t)) {
                    if (e.left !== undefined) {
                        setOe(Ue(e.left));
                    }
                    Ye(e.top);
                } else {
                    Ye(e);
                }
            }
        };
    });
    useI(()=>{
        if (onVisibleChange) {
            const e = X.slice(start, end + 1);
            onVisibleChange(e, X);
        }
    }, [
        start,
        end,
        X
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
    })(X, getKey, we, itemHeight);
    const extra = extraRender?.({
        start,
        end,
        virtual: virtual_1,
        offsetX: oe,
        offsetY: offset,
        rtl,
        getSize
    });
    const Qe = ((e, t, n, width, o, i, { getKey })=>e.slice(t, n + 1).map((e, n)=>{
            const a = i(e, t + n, {
                style: {
                    width
                }
            });
            const key = getKey(e);
            return <K1Component key={key} setRef={function(t) {
                return o(e, t);
            }}>{a}</K1Component>;
        }))(X, start, end, scrollWidth, be, children, de);
    let et = null;
    if (height) {
        et = u({
            [fullHeight ? "height" : "maxHeight"]: height
        }, G);
        if (U) {
            et.overflowY = "hidden";
            if (scrollWidth) {
                et.overflowX = "hidden";
            }
            if (le) {
                et.pointerEvents = "none";
            }
        }
    }
    const tt = {};
    if (rtl) {
        tt.dir = "rtl";
    }
    return <div style={{
        ...style,
        position: "relative"
    }} className={className_1} {...tt} {...rest}><module1260.a onResize={function(e) {
        setKe(e);
    }}><component className={`${prefixCls}-holder`} style={et} ref={JRef} onScroll={function(e) {
        const scrollTop = e.currentTarget.scrollTop;
        if (scrollTop !== te) {
            pe(scrollTop);
        }
        onScroll?.(e);
        Ve();
    }} onMouseEnter={onMouseEnter}>{<B1 prefixCls={prefixCls} height={scrollHeight} offsetX={oe} offsetY={offset} scrollWidth={scrollWidth} onInnerResize={xe} ref={QRef} innerProps={innerProps} rtl={rtl} extra={extra}>{Qe}</B1>}</component></module1260.a>{virtual_1 && scrollHeight > height && <A ref={TeRef} prefixCls={prefixCls} scrollOffset={te} scrollRange={scrollHeight} rtl={rtl} onScroll={onScroll_1} onStartMove={onStartMove} onStopMove={onStopMove} spinSize={ze} containerSize={ke.height}/>}{virtual_1 && scrollWidth && <A ref={PeRef} prefixCls={prefixCls} scrollOffset={oe} scrollRange={scrollWidth} rtl={rtl} onScroll={onScroll_1} onStartMove={onStartMove} onStopMove={onStopMove} spinSize={Le} containerSize={ke.width} horizontal/>}</div>;
});
List.displayName = "List";
export default List;
