import { Children, Component, cloneElement, createContext, forwardRef, isValidElement, useCallback, useContext, useEffect, useImperativeHandle, useMemo, useRef } from "./module-553.js";
import { isFragment, isMemo } from "./module-761.js";
import module106 from "./module-106.js";
import module1514 from "./module-1514.js";
let l = {};
const u = [];
function s(e, t) {}
function c(e, t) {}
function f(e, t, n) {
    if (!(t || l[n])) {
        e(false, n);
        l[n] = true;
    }
}
function d(e, t) {
    f(s, e, t);
}
function p(e) {
    return (p = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function h(key) {
    const t = ((key_1)=>{
        const t = "string";
        if (p(key_1) !== "object" || key_1 === null) {
            return key_1;
        }
        const n = key_1[Symbol.toPrimitive];
        if (n !== undefined) {
            const r = n.call(key_1, t);
            if (p(r) !== "object") {
                return r;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(key_1);
    })(key);
    if (p(t) === "symbol") {
        return t;
    }
    return String(t);
}
function m(e, t) {
    if (typeof e === "function") {
        e(t);
    } else if (p(e) === "object" && e && "current" in e) {
        e.current = t;
    }
}
function b(e) {
    let t;
    let n;
    const r = isMemo(e) ? e.type.type : e.type;
    return !!(typeof r !== "function" || (t = r.prototype) !== null && t !== undefined && t.render) && !!(typeof e !== "function" || (n = e.prototype) !== null && n !== undefined && n.render);
}
d.preMessage = function(e) {
    u.push(e);
};
d.resetWarned = function() {
    l = {};
};
d.noteOnce = function(e, t) {
    f(c, e, t);
};
function _(e) {
    if (((e)=>e instanceof HTMLElement || e instanceof SVGElement)(e)) {
        return e;
    }
    if (e instanceof Component) {
        return module106.findDOMNode(e);
    }
    return null;
}
const map = new Map;
const E = new module1514.default(function(e) {
    e.forEach(({ target })=>{
        map.get(target)?.forEach(function(e) {
            return e(target);
        });
    });
});
function M(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function S(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, h(r.key), r);
    }
}
function A(e, t) {
    return (A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
function k(e) {
    return (k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function j(e, t) {
    if (t && (p(t) === "object" || typeof t === "function")) {
        return t;
    }
    if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
    }
    return ((e)=>{
        if (e === undefined) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e;
    })(e);
}
const T = ((Component_1)=>{
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
        Object.defineProperty(e, "prototype", {
            writable: false
        });
        if (t) {
            A(e, t);
        }
    })(o, Component_1);
    let t;
    let n;
    var r = ((e)=>{
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
            const r = k(e);
            if (t) {
                const o = k(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else {
                n = r.apply(this, arguments);
            }
            return j(this, n);
        };
    })(o);
    function o() {
        M(this, o);
        return r.apply(this, arguments);
    }
    t = o;
    if (n = [
        {
            key: "render",
            value: function() {
                return this.props.children;
            }
        }
    ]) {
        S(t.prototype, n);
    }
    Object.defineProperty(t, "prototype", {
        writable: false
    });
    return o;
})(Component);
const PContext = createContext(null);
const L = forwardRef(function(e, t) {
    const { children, disabled } = e;
    const iRef = useRef(null);
    const aRef = useRef(null);
    const l = useContext(PContext);
    const u = typeof children === "function";
    const s = u ? children(iRef) : children;
    const cRef = useRef({
        width: -1,
        height: -1,
        offsetWidth: -1,
        offsetHeight: -1
    });
    const f = !u && isValidElement(s) && b(s);
    const d = f ? s.ref : null;
    const ref = useMemo(function() {
        return ((...t_1)=>{
            const r = t_1.filter((e)=>e);
            if (r.length <= 1) {
                return r[0];
            }
            return function(e) {
                t_1.forEach((t)=>{
                    m(t, e);
                });
            };
        })(d, iRef);
    }, [
        d,
        iRef
    ]);
    const h = ()=>_(iRef.current) || _(aRef.current);
    useImperativeHandle(t, function() {
        return h();
    });
    const vRef = useRef(e);
    vRef.current = e;
    const g = useCallback(function(e) {
        const vRef_current = vRef.current;
        const { onResize, data } = vRef_current;
        const o = e.getBoundingClientRect();
        const { width, height } = o;
        const { offsetWidth, offsetHeight } = e;
        const width_1 = Math.floor(width);
        const height_1 = Math.floor(height);
        if (cRef.current.width !== width_1 || cRef.current.height !== height_1 || cRef.current.offsetWidth !== offsetWidth || cRef.current.offsetHeight !== offsetHeight) {
            const p = {
                width: width_1,
                height: height_1,
                offsetWidth,
                offsetHeight
            };
            cRef.current = p;
            const offsetWidth_1 = offsetWidth === Math.round(width) ? width : offsetWidth;
            const offsetHeight_1 = offsetHeight === Math.round(height) ? height : offsetHeight;
            const m = {
                ...p,
                offsetWidth: offsetWidth_1,
                offsetHeight: offsetHeight_1
            };
            l?.(m, e, data);
            if (onResize) {
                Promise.resolve().then(()=>{
                    onResize(m, e);
                });
            }
        }
    }, []);
    useEffect(function() {
        let e;
        let t;
        const n = h();
        if (n && !disabled) {
            e = n;
            t = g;
            if (!map.has(e)) {
                map.set(e, new Set);
                E.observe(e);
            }
            map.get(e).add(t);
        }
        return function() {
            return ((e, t)=>{
                if (map.has(e)) {
                    map.get(e).delete(t);
                    if (!map.get(e).size) {
                        E.unobserve(e);
                        map.delete(e);
                    }
                }
            })(n, g);
        };
    }, [
        iRef.current,
        disabled
    ]);
    return <T ref={aRef}>{f ? cloneElement(s, {
        ref
    }) : s}</T>;
});
export const a = forwardRef(function(e, t) {
    const e_children = e.children;
    return (typeof e_children === "function" ? [
        e_children
    ] : function e(e_children_1, n = {}) {
        let r = [];
        Children.forEach(e_children_1, function(t) {
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
    }(e_children)).map((n, i)=>{
        const key = n?.key || `rc-observer-key-${i}`;
        return <L {...e} key={key} ref={i === 0 ? t : undefined}>{n}</L>;
    });
});
a.Collection = function({ children, onBatchResize }) {
    const rRef = useRef(0);
    const iRef = useRef([]);
    const a = useContext(PContext);
    const value = useCallback(function(size, element, o) {
        rRef.current += 1;
        const rRef_current = rRef.current;
        iRef.current.push({
            size,
            element,
            data: o
        });
        Promise.resolve().then(()=>{
            if (rRef_current === rRef.current) {
                if (onBatchResize != null) {
                    onBatchResize(iRef.current);
                }
                iRef.current = [];
            }
        });
        a?.(size, element, o);
    }, [
        onBatchResize,
        a
    ]);
    return <PContext.Provider value={value}>{children}</PContext.Provider>;
};
