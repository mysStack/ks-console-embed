import module807 from "unpacked/module-807.js";
import { Children, Component, PureComponent, cloneElement } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module1500 from "unpacked/module-1500.js";
import module495 from "unpacked/module-495.js";
import module1030 from "unpacked/module-1030.js";
import module1501 from "unpacked/module-1501.js";
import module459 from "unpacked/module-459.js";
function f(e, t = 0) {
    let n = -1;
    const r = function r(o) {
        if (n < 0) {
            n = o;
        }
        if (o - n > t) {
            e(o);
            n = -1;
        } else {
            module1500(r);
        }
    };
    module1500(r);
}
function d(e) {
    return (d = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function p() {
    let e = function() {
        return null;
    };
    let t = false;
    return {
        stop: function() {
            t = true;
        },
        start: function(n) {
            t = false;
            (function n(r) {
                if (!t) {
                    if (Array.isArray(r)) {
                        if (!r.length) {
                            return;
                        }
                        const [i, ...a] = ((e)=>((e)=>{
                                if (Array.isArray(e)) {
                                    return e;
                                }
                            })(e) || ((e)=>{
                                if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") {
                                    return Array.from(e);
                                }
                            })(e) || (()=>{
                                throw new TypeError("Invalid attempt to destructure non-iterable instance");
                            })())(r);
                        if (typeof i === "number") {
                            return void f(n.bind(null, a), i);
                        }
                        n(i);
                        return void f(n.bind(null, a));
                    }
                    if (d(r) === "object") {
                        e(r);
                    }
                    if (typeof r === "function") {
                        r();
                    }
                }
            })(n);
        },
        subscribe: function(t) {
            e = t;
            return function() {
                e = function() {
                    return null;
                };
            };
        }
    };
}
const m = [
    "Webkit",
    "Moz",
    "O",
    "ms"
];
const b = [
    "-webkit-",
    "-moz-",
    "-o-",
    "-ms-"
];
const x = [
    "transform",
    "transformOrigin",
    "transition"
];
const w = function(e) {
    return e;
};
const _ = (e, t)=>Object.keys(t).reduce((acc, key)=>({
            ...acc,
            ...{
                [key]: e(key, t[key])
            }
        }), {});
export const translateStyle = function(e) {
    return Object.keys(e).reduce((acc, key)=>({
            ...acc,
            ...((key_1, t)=>{
                if (x.indexOf(key_1) === -1) {
                    return {
                        [key_1]: t
                    };
                }
                const n = key_1 === "transition";
                const r = key_1.replace(/(\w)/, (e)=>e.toUpperCase());
                let o = t;
                return m.reduce((acc_1, item, index)=>{
                    if (n) {
                        o = t.replace(/(transform|transform-origin)/gim, `${b[index]}\$1`);
                    }
                    return {
                        ...acc_1,
                        ...{
                            [item + r]: o
                        }
                    };
                }, {});
            })(key, acc[key])
        }), e);
};
const O = (e, duration, easing)=>e.map((e)=>{
        return `${r = e, r.replace(/([A-Z])/g, (e)=>`-${e.toLowerCase()}`)} ${duration}ms ${easing}`;
        var r;
    }).join(",");
function E(e, t) {
    return ((e)=>{
        if (Array.isArray(e)) {
            return e;
        }
    })(e) || ((e, t)=>{
        const n = [];
        let r = true;
        let o = false;
        let i;
        try {
            for(var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = true);
        } catch (error) {
            o = true;
            i = error;
        } finally{
            try {
                if (!(r || l.return == null)) {
                    l.return();
                }
            } finally{
                if (o) {
                    throw i;
                }
            }
        }
        return n;
    })(e, t) || (()=>{
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    })();
}
const M = (e, t)=>[
        0,
        3 * e,
        3 * t - 6 * e,
        3 * e - 3 * t + 1
    ];
const S = (e, t)=>e.map((e, n)=>e * t ** n).reduce((acc, item)=>acc + item);
const A = (e, t)=>function(n) {
        const r = M(e, t);
        return S(r, n);
    };
const k = (e, t)=>function(n) {
        const r = ((e)=>((e)=>{
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
            })())(M(e, t).map((e, t)=>e * t).slice(1)).concat([
            0
        ]);
        return S(r, n);
    };
export const configBezier = function(...t_1) {
    let r = t_1[0];
    let o = t_1[1];
    let i = t_1[2];
    let a = t_1[3];
    if (t_1.length === 1) {
        switch(t_1[0]){
            case "linear":
                r = 0;
                o = 0;
                i = 1;
                a = 1;
                break;
            case "ease":
                r = 0.25;
                o = 0.1;
                i = 0.25;
                a = 1;
                break;
            case "ease-in":
                r = 0.42;
                o = 0;
                i = 1;
                a = 1;
                break;
            case "ease-out":
                r = 0.42;
                o = 0;
                i = 0.58;
                a = 1;
                break;
            case "ease-in-out":
                r = 0;
                o = 0;
                i = 0.58;
                a = 1;
                break;
            default:
                const l = t_1[0].split("(");
                if (l[0] === "cubic-bezier" && l[1].split(")")[0].split(",").length === 4) {
                    const u = l[1].split(")")[0].split(",").map((e)=>parseFloat(e));
                    const s = E(u, 4);
                    r = s[0];
                    o = s[1];
                    i = s[2];
                    a = s[3];
                }
        }
    }
    [
        r,
        i,
        o,
        a
    ].every((e)=>typeof e === "number" && e >= 0 && e <= 1);
    const c = A(r, i);
    const f = A(o, a);
    const d = k(r, i);
    const p = (e)=>{
        if (e > 1) {
            return 1;
        }
        if (e < 0) {
            return 0;
        }
        return e;
    };
    const h = function(e) {
        const t = e > 1 ? 1 : e;
        let n = t;
        for(let r = 0; r < 8; ++r){
            const o = c(n) - t;
            const i = d(n);
            if (Math.abs(o - t) < 0.0001 || i < 0.0001) {
                return f(n);
            }
            n = p(n - o / i);
        }
        return f(n);
    };
    h.isStepper = false;
    return h;
};
export const configSpring = function({ stiff = 100, damping = 8, dt = 17 } = {}) {
    const l = function(e, t, r) {
        const i = r + (-(e - t) * stiff - r * damping) * dt / 1000;
        const l = r * dt / 1000 + e;
        if (Math.abs(l - t) < 0.0001 && Math.abs(i) < 0.0001) {
            return [
                t,
                0
            ];
        }
        return [
            l,
            i
        ];
    };
    l.isStepper = true;
    l.dt = dt;
    return l;
};
const I = (e, t, n)=>e + (t - e) * n;
const R = function(e) {
    return e.from !== e.to;
};
const H = (from, t, n, duration, changeStyle)=>{
    let i;
    let a;
    let l;
    let u;
    i = from;
    a = t;
    const f = module495(Object.keys(i), Object.keys(a));
    const d = f.reduce((acc, item)=>({
            ...acc,
            ...{
                [item]: [
                    from[item],
                    t[item]
                ]
            }
        }), {});
    let p = f.reduce((acc, item)=>({
            ...acc,
            ...{
                [item]: {
                    from: from[item],
                    velocity: 0,
                    to: t[item]
                }
            }
        }), {});
    let h = -1;
    let g = function() {
        return null;
    };
    g = n.isStepper ? function(r) {
        if (!l) {
            l = r;
        }
        const i = (r - l) / n.dt;
        p = function e(t, n, r) {
            const o = _((e, n)=>{
                if (R(n)) {
                    const r = ((e)=>{
                        const t = 2;
                        return ((e)=>{
                            if (Array.isArray(e)) {
                                return e;
                            }
                        })(e) || ((e, t)=>{
                            const n = [];
                            let r = true;
                            let o = false;
                            let i;
                            try {
                                for(var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = true);
                            } catch (error) {
                                o = true;
                                i = error;
                            } finally{
                                try {
                                    if (!(r || l.return == null)) {
                                        l.return();
                                    }
                                } finally{
                                    if (o) {
                                        throw i;
                                    }
                                }
                            }
                            return n;
                        })(e, t) || (()=>{
                            throw new TypeError("Invalid attempt to destructure non-iterable instance");
                        })();
                    })(t(n.from, n.to, n.velocity));
                    return {
                        ...n,
                        from: r[0],
                        velocity: r[1]
                    };
                }
                return n;
            }, n);
            if (r < 1) {
                return _((e, t)=>{
                    if (R(t)) {
                        return {
                            ...t,
                            velocity: I(t.velocity, o[e].velocity, r),
                            from: I(t.from, o[e].from, r)
                        };
                    }
                    return t;
                }, n);
            }
            return e(t, o, r - 1);
        }(n, p, i);
        changeStyle({
            ...from,
            ...t,
            ..._((e, t)=>t.from, p)
        });
        l = r;
        if (module1030(p, R).length) {
            h = module1500(g);
        }
    } : function(i) {
        if (!u) {
            u = i;
        }
        const a = (i - u) / duration;
        const l = _((e, t)=>I(...t, n(a)), d);
        changeStyle({
            ...from,
            ...t,
            ...l
        });
        if (a < 1) {
            h = module1500(g);
        } else {
            const s = _((e, t)=>I(...t, n(1)), d);
            changeStyle({
                ...from,
                ...t,
                ...s
            });
        }
    };
    return function() {
        module1500(g);
        return function() {
            module1500.cancel(h);
        };
    };
};
function B(e) {
    return (B = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function U(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function Z(e, t) {
    if (!t || B(t) !== "object" && typeof t !== "function") {
        return G(e);
    }
    return t;
}
function W(e) {
    return (W = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function K(e, t) {
    return (K = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
function G(e) {
    if (e === undefined) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return e;
}
const Animate = ((PureComponent_1)=>{
    function t(e, n) {
        let r;
        ((e, t)=>{
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        })(this, t);
        const props = (r = Z(this, W(t).call(this, e, n))).props;
        const { isActive, attributeName, from, to, steps, children } = props;
        r.handleStyleChange = r.handleStyleChange.bind(G(G(r)));
        r.changeStyle = r.changeStyle.bind(G(G(r)));
        if (!isActive) {
            r.state = {
                style: {}
            };
            if (typeof children === "function") {
                r.state = {
                    style: to
                };
            }
            return Z(r);
        }
        if (steps && steps.length) {
            r.state = {
                style: steps[0].style
            };
        } else if (from) {
            if (typeof children === "function") {
                r.state = {
                    style: from
                };
                return Z(r);
            }
            r.state = {
                style: attributeName ? {
                    [attributeName]: from
                } : from
            };
        } else {
            r.state = {
                style: {}
            };
        }
        return r;
    }
    let n;
    let r;
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
            K(e, t);
        }
    })(t, PureComponent_1);
    n = t;
    if (r = [
        {
            key: "componentDidMount",
            value: function() {
                const props = this.props;
                const { isActive, canBegin } = props;
                this.mounted = true;
                if (isActive && canBegin) {
                    this.runAnimation(this.props);
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                const props = this.props;
                const { isActive, canBegin, attributeName, shouldReAnimate } = props;
                if (canBegin) {
                    if (isActive) {
                        if (!(module807(e.to, this.props.to) && e.canBegin && e.isActive)) {
                            const l = !e.canBegin || !e.isActive;
                            if (this.manager) {
                                this.manager.stop();
                            }
                            if (this.stopJSAnimation) {
                                this.stopJSAnimation();
                            }
                            const from = l || shouldReAnimate ? this.props.from : e.to;
                            this.setState({
                                style: attributeName ? {
                                    [attributeName]: from
                                } : from
                            });
                            this.runAnimation({
                                ...this.props,
                                from,
                                begin: 0
                            });
                        }
                    } else {
                        this.setState({
                            style: attributeName ? {
                                [attributeName]: this.props.to
                            } : this.props.to
                        });
                    }
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.mounted = false;
                if (this.unSubscribe) {
                    this.unSubscribe();
                }
                if (this.manager) {
                    this.manager.stop();
                    this.manager = null;
                }
                if (this.stopJSAnimation) {
                    this.stopJSAnimation();
                }
            }
        },
        {
            key: "runJSAnimation",
            value: function(e) {
                const _this = this;
                const { from, to, duration, easing, begin, onAnimationEnd, onAnimationStart } = e;
                const s = H(from, to, ((...t)=>{
                    const r = t[0];
                    if (typeof r === "string") {
                        switch(r){
                            case "ease":
                            case "ease-in-out":
                            case "ease-out":
                            case "ease-in":
                            case "linear":
                                return configBezier(r);
                            case "spring":
                                return configSpring();
                            default:
                                if (r.split("(")[0] === "cubic-bezier") {
                                    return configBezier(r);
                                }
                        }
                    }
                    if (typeof r === "function") {
                        return r;
                    }
                    return null;
                })(easing), duration, this.changeStyle);
                this.manager.start([
                    onAnimationStart,
                    begin,
                    function() {
                        _this.stopJSAnimation = s();
                    },
                    duration,
                    onAnimationEnd
                ]);
            }
        },
        {
            key: "runStepAnimation",
            value: function(e) {
                const _this = this;
                const { steps, begin, onAnimationStart } = e;
                const { style, duration = 0 } = steps[0];
                return this.manager.start([
                    onAnimationStart,
                    ...steps.reduce((acc, step, index)=>{
                        if (index === 0) {
                            return acc;
                        }
                        const { duration, easing } = step;
                        const easing_1 = easing === undefined ? "ease" : easing;
                        const { style, properties, onAnimationEnd } = step;
                        const f = index > 0 ? steps[index - 1] : step;
                        const d = properties || Object.keys(style);
                        if (typeof easing_1 === "function" || easing_1 === "spring") {
                            return [
                                ...acc,
                                _this.runJSAnimation.bind(_this, {
                                    from: f.style,
                                    to: style,
                                    duration,
                                    easing: easing_1
                                }),
                                duration
                            ];
                        }
                        const p = O(d, duration, easing_1);
                        const h = {
                            ...f.style,
                            ...style,
                            transition: p
                        };
                        return [
                            ...acc,
                            h,
                            duration,
                            onAnimationEnd
                        ].filter(w);
                    }, [
                        style,
                        Math.max(duration, begin)
                    ]),
                    e.onAnimationEnd
                ]);
            }
        },
        {
            key: "runAnimation",
            value: function(e) {
                if (!this.manager) {
                    this.manager = p();
                }
                const { begin, duration, attributeName, to, easing, onAnimationStart, onAnimationEnd, steps, children } = e;
                const manager = this.manager;
                this.unSubscribe = manager.subscribe(this.handleStyleChange);
                if (typeof easing !== "function" && typeof children !== "function" && easing !== "spring") {
                    if (steps.length > 1) {
                        this.runStepAnimation(e);
                    } else {
                        const f = attributeName ? {
                            [attributeName]: to
                        } : to;
                        const d = O(Object.keys(f), duration, easing);
                        manager.start([
                            onAnimationStart,
                            begin,
                            {
                                ...f,
                                transition: d
                            },
                            duration,
                            onAnimationEnd
                        ]);
                    }
                } else {
                    this.runJSAnimation(e);
                }
            }
        },
        {
            key: "handleStyleChange",
            value: function(e) {
                this.changeStyle(e);
            }
        },
        {
            key: "changeStyle",
            value: function(e) {
                if (this.mounted) {
                    this.setState({
                        style: e
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { children, begin: _begin, duration: _duration, attributeName: _attributeName, easing: _easing, isActive, steps: _steps, from: _from, to, canBegin: _canBegin, onAnimationEnd: _onAnimationEnd, shouldReAnimate: _shouldReAnimate, onAnimationReStart: _onAnimationReStart, ...rest } = props;
                const o = Children.count(children);
                const l = translateStyle(this.state.style);
                if (typeof children === "function") {
                    return children(l);
                }
                if (!isActive || o === 0) {
                    return children;
                }
                const u = (e)=>{
                    const { style = {}, className } = e.props;
                    return cloneElement(e, {
                        ...rest,
                        style: {
                            ...style,
                            ...l
                        },
                        className
                    });
                };
                if (o === 1) {
                    return u(Children.only(children));
                }
                return <div>{Children.map(children, function(e) {
                    return u(e);
                })}</div>;
            }
        }
    ]) {
        U(n.prototype, r);
    }
    return t;
})(PureComponent);
Animate.displayName = "Animate";
Animate.propTypes = {
    from: module1.oneOfType([
        module1.object,
        module1.string
    ]),
    to: module1.oneOfType([
        module1.object,
        module1.string
    ]),
    attributeName: module1.string,
    duration: module1.number,
    begin: module1.number,
    easing: module1.oneOfType([
        module1.string,
        module1.func
    ]),
    steps: module1.arrayOf(module1.shape({
        duration: module1.number.isRequired,
        style: module1.object.isRequired,
        easing: module1.oneOfType([
            module1.oneOf([
                "ease",
                "ease-in",
                "ease-out",
                "ease-in-out",
                "linear"
            ]),
            module1.func
        ]),
        properties: module1.arrayOf("string"),
        onAnimationEnd: module1.func
    })),
    children: module1.oneOfType([
        module1.node,
        module1.func
    ]),
    isActive: module1.bool,
    canBegin: module1.bool,
    onAnimationEnd: module1.func,
    shouldReAnimate: module1.bool,
    onAnimationStart: module1.func,
    onAnimationReStart: module1.func
};
Animate.defaultProps = {
    begin: 0,
    duration: 1000,
    from: "",
    to: "",
    attributeName: "",
    easing: "ease",
    isActive: true,
    canBegin: true,
    steps: [],
    onAnimationEnd: function() {},
    onAnimationStart: function() {}
};
const Y = Animate;
function ee(e) {
    return (ee = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function re(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function oe(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function ie(e, t) {
    if (!t || ee(t) !== "object" && typeof t !== "function") {
        return ((e)=>{
            if (e === undefined) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e;
        })(e);
    }
    return t;
}
function ae(e) {
    return (ae = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function le(e, t) {
    return (le = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const ue = ({ steps, duration } = {})=>{
    if (steps && steps.length) {
        return steps.reduce((acc, step)=>acc + (module459(step.duration) && step.duration > 0 ? step.duration : 0), 0);
    }
    if (module459(duration)) {
        return duration;
    }
    return 0;
};
const se = ((Component_1)=>{
    function t(...o_1) {
        let n;
        re(this, t);
        n = ie(this, ae(t).call(this, ...o_1));
        n.state = {
            isActive: false
        };
        n.handleEnter = function(e, t) {
            const n_props = n.props;
            const { appearOptions, enterOptions } = n_props;
            n.handleStyleActive(t ? appearOptions : enterOptions);
        };
        n.handleExit = function() {
            n.handleStyleActive(n.props.leaveOptions);
        };
        return n;
    }
    let n;
    let r;
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
            le(e, t);
        }
    })(t, Component_1);
    n = t;
    if (r = [
        {
            key: "handleStyleActive",
            value: function(e) {
                if (e) {
                    const onAnimationEnd = e.onAnimationEnd ? function() {
                        e.onAnimationEnd();
                    } : null;
                    this.setState(function(e) {
                        for(let t = 1; t < arguments.length; t++){
                            var n = arguments[t] ?? {};
                            let r = Object.keys(n);
                            if (typeof Object.getOwnPropertySymbols === "function") {
                                r = r.concat(Object.getOwnPropertySymbols(n).filter((e)=>Object.getOwnPropertyDescriptor(n, e).enumerable));
                            }
                            r.forEach((t)=>{
                                e[t] = n[t];
                            });
                        }
                        return e;
                    }({}, e, {
                        onAnimationEnd,
                        isActive: true
                    }));
                }
            }
        },
        {
            key: "parseTimeout",
            value: function() {
                const props = this.props;
                const { appearOptions, enterOptions, leaveOptions } = props;
                return ue(appearOptions) + ue(enterOptions) + ue(leaveOptions);
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { children, appearOptions: _appearOptions, enterOptions: _enterOptions, leaveOptions: _leaveOptions, ...rest } = props;
                return <module1501.Transition {...rest} onEnter={this.handleEnter} onExit={this.handleExit} timeout={this.parseTimeout()}>{function() {
                    return <Y {..._this.state}>{Children.only(children)}</Y>;
                }}</module1501.Transition>;
            }
        }
    ]) {
        oe(n.prototype, r);
    }
    return t;
})(Component);
se.propTypes = {
    appearOptions: module1.object,
    enterOptions: module1.object,
    leaveOptions: module1.object,
    children: module1.element
};
const Se = se;
export function AnimateGroup({ component, children, appear, enter, leave }) {
    return <module1501.TransitionGroup component={component}>{Children.map(children, function(e, t) {
        return <Se appearOptions={appear} enterOptions={enter} leaveOptions={leave} key={`child-${t}`}>{e}</Se>;
    })}</module1501.TransitionGroup>;
}
AnimateGroup.propTypes = {
    appear: module1.object,
    enter: module1.object,
    leave: module1.object,
    children: module1.oneOfType([
        module1.array,
        module1.element
    ]),
    component: module1.any
};
AnimateGroup.defaultProps = {
    component: "span"
};
export default Y;
