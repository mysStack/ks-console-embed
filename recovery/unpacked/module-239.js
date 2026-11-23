import module14 from "./module-14.js";
import { Component, PureComponent, createContext, createElement, forwardRef, memo, useContext, useDebugValue, useEffect, useLayoutEffect, useRef, useState } from "./module-553.js";
import module106 from "./module-106.js";
import module95 from "./module-95.js";
if (!useState) {
    throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!module14.spy) {
    throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
}
const s = module95.b("observerBatching");
function u(e) {
    e();
}
export function observerBatching(reactionScheduler) {
    if (!reactionScheduler) {
        reactionScheduler = u;
    }
    module14.configure({
        reactionScheduler
    });
    module95.a()[s] = true;
}
let f = false;
export function useStaticRendering(e) {
    f = e;
}
export function isUsingStaticRendering() {
    return f;
}
function h(e) {
    return module14.getDependencyTree(e);
}
let v;
const set = new Set;
function g() {
    if (v === undefined) {
        v = setTimeout(y, 10000);
    }
}
function y() {
    v = undefined;
    const e = Date.now();
    set.forEach((t)=>{
        const t_current = t.current;
        if (t_current && e >= t_current.cleanAt) {
            t_current.reaction.dispose();
            t.current = null;
            set.delete(t);
        }
    });
    if (set.size > 0) {
        g();
    }
}
let b = false;
let C = [];
const w = {};
function _(e) {
    return `observer${e}`;
}
export function useObserver(e, t = "observed", n = w) {
    if (isUsingStaticRendering()) {
        return e();
    }
    let o;
    const i = ((e)=>function() {
            if (b) {
                C.push(e);
            } else {
                e();
            }
        })((n.useForceUpdate || module95.d)());
    const sRef = useRef(null);
    if (!sRef.current) {
        var u = new module14.Reaction(_(t), function() {
            if (c.mounted) {
                i();
            } else {
                u.dispose();
                sRef.current = null;
            }
        });
        var c = ((reaction_1)=>({
                cleanAt: Date.now() + 10000,
                reaction: reaction_1
            }))(u);
        sRef.current = c;
        o = sRef;
        set.add(o);
        g();
    }
    const reaction = sRef.current.reaction;
    useDebugValue(reaction, h);
    useEffect(function() {
        let e;
        e = sRef;
        set.delete(e);
        if (sRef.current) {
            sRef.current.mounted = true;
        } else {
            sRef.current = {
                reaction: new module14.Reaction(_(t), function() {
                    i();
                }),
                cleanAt: Infinity
            };
            i();
        }
        return function() {
            sRef.current.reaction.dispose();
            sRef.current = null;
        };
    }, []);
    return ((e)=>{
        b = true;
        C = [];
        try {
            const t = e();
            b = false;
            const n = C.length > 0 ? C : undefined;
            useLayoutEffect(function() {
                if (n) {
                    n.forEach((e)=>e());
                }
            }, [
                n
            ]);
            return t;
        } finally{
            b = false;
        }
    })(()=>{
        let t;
        let n;
        reaction.track(function() {
            try {
                t = e();
            } catch (error) {
                n = error;
            }
        });
        if (n) {
            throw n;
        }
        return t;
    });
}
const E = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true
};
function Observer1({ children, render }) {
    const r = children || render;
    if (typeof r !== "function") {
        return null;
    }
    return useObserver(r);
}
export { Observer1 as Observer };
function O(e, t, n, r, o) {
    const a = t === "children" ? "render" : "children";
    const i = typeof e[t] === "function";
    const l = typeof e[a] === "function";
    if (i && l) {
        return new Error(`MobX Observer: Do not use children and render in the same time in\`${n}`);
    }
    if (i || l) {
        return null;
    }
    return new Error(`Invalid prop \`${o}\` of type \`${typeof e[t]}\` supplied to \`${n}\`, expected \`function\`.`);
}
Observer1.propTypes = {
    children: O,
    render: O
};
Observer1.displayName = "Observer";
function useS(e, t) {
    if (!t || e !== undefined) {
        const n = ((e)=>{
            let t = 1;
            let n = typeof Symbol === "function" && e[Symbol.iterator];
            if (!n) {
                return e;
            }
            let r;
            let o;
            const a = n.call(e);
            const i = [];
            try {
                while((t === undefined || t-- > 0) && !(r = a.next()).done){
                    i.push(r.value);
                }
            } catch (error) {
                o = {
                    error
                };
            } finally{
                try {
                    if (r && !r.done && (n = a.return)) {
                        n.call(a);
                    }
                } finally{
                    if (o) {
                        throw o.error;
                    }
                }
            }
            return i;
        })(useState(function() {
            return module14.observable(e, {}, {
                deep: false
            });
        }))[0];
        module14.runInAction(function() {
            Object.assign(n, e);
        });
        return n;
    }
}
export function useAsObservableSource(e) {
    return useS(e, false);
}
export function useLocalStore(e, t) {
    const n = useS(t, true);
    return useState(function() {
        const t = module14.observable(e(n));
        if (module95.c(t)) {
            module14.runInAction(function() {
                Object.keys(t).forEach((e)=>{
                    let n;
                    let o;
                    const a = t[e];
                    if (typeof a === "function") {
                        t[e] = (n = a, o = t, function(...e) {
                            return module14.transaction(function() {
                                return n.apply(o, e);
                            });
                        });
                    }
                });
            });
        }
        return t;
    })[0];
}
observerBatching(module106.unstable_batchedUpdates);
let D = 0;
const T = {};
function V(e) {
    if (!T[e]) {
        T[e] = ((e)=>{
            if (typeof Symbol === "function") {
                return Symbol(e);
            }
            const t = `__\$mobx-react ${e} (${D})`;
            D++;
            return t;
        })(e);
    }
    return T[e];
}
function H(e, t) {
    if (P(e, t)) {
        return true;
    }
    if (typeof e !== "object" || e === null || typeof t !== "object" || t === null) {
        return false;
    }
    const n = Object.keys(e);
    const r = Object.keys(t);
    if (n.length !== r.length) {
        return false;
    }
    for(let o = 0; o < n.length; o++){
        if (!Object.hasOwnProperty.call(t, n[o]) || !P(e[n[o]], t[n[o]])) {
            return false;
        }
    }
    return true;
}
function P(e, t) {
    if (e === t) {
        return e !== 0 || 1 / e == 1 / t;
    }
    return e != e && t != t;
}
const A = {
    $$typeof: 1,
    render: 1,
    compare: 1,
    type: 1,
    childContextTypes: 1,
    contextType: 1,
    contextTypes: 1,
    defaultProps: 1,
    getDefaultProps: 1,
    getDerivedStateFromError: 1,
    getDerivedStateFromProps: 1,
    mixins: 1,
    propTypes: 1
};
function R(e, t, n) {
    if (Object.hasOwnProperty.call(e, t)) {
        e[t] = n;
    } else {
        Object.defineProperty(e, t, {
            enumerable: false,
            configurable: true,
            writable: true,
            value: n
        });
    }
}
const j = V("patchMixins");
const N = V("patchedDefinition");
function I(e, t, ...o) {
    const _this = this;
    t.locks++;
    try {
        let i;
        if (e != null) {
            i = e.apply(this, o);
        }
        return i;
    } finally{
        t.locks--;
        if (t.locks === 0) {
            t.methods.forEach((e)=>{
                e.apply(_this, o);
            });
        }
    }
}
function B(e, t) {
    return function(...r) {
        I.call(this, e, t, ...r);
    };
}
function U(e, t, n) {
    const r = ((e, t)=>{
        const n = e[j] = e[j] || {};
        const r = n[t] = n[t] || {};
        r.locks = r.locks || 0;
        r.methods = r.methods || [];
        return r;
    })(e, t);
    if (r.methods.indexOf(n) < 0) {
        r.methods.push(n);
    }
    const o = Object.getOwnPropertyDescriptor(e, t);
    if (!o || !o[N]) {
        const a = e[t];
        const i = function e(t, n, enumerable, o, a) {
            let l = B(a, o);
            return {
                [N]: true,
                get: function() {
                    return l;
                },
                set: function(a) {
                    if (this === t) {
                        l = B(a, o);
                    } else {
                        const i = e(this, n, enumerable, o, a);
                        Object.defineProperty(this, n, i);
                    }
                },
                configurable: true,
                enumerable
            };
        }(e, t, o ? o.enumerable : undefined, r, a);
        Object.defineProperty(e, t, i);
    }
}
const F = module14.$mobx || "$mobx";
const Z = V("isMobXReactObserver");
const q = V("isUnmounted");
const W = V("skipRender");
const G = V("isForcingUpdate");
function Y(e) {
    return e.displayName || e.name || e.constructor && (e.constructor.displayName || e.constructor.name) || "<component>";
}
function $(e) {
    const _this = this;
    if (isUsingStaticRendering() === true) {
        return e.call(this);
    }
    R(this, W, false);
    R(this, G, false);
    const n = Y(this);
    const a = e.bind(this);
    let i = false;
    var l = new module14.Reaction(`${n}.render()`, function() {
        if (!i && (i = true, _this[q] !== true)) {
            let e = true;
            try {
                R(_this, G, true);
                if (!_this[W]) {
                    Component.prototype.forceUpdate.call(_this);
                }
                e = false;
            } finally{
                R(_this, G, false);
                if (e) {
                    l.dispose();
                }
            }
        }
    });
    function s() {
        i = false;
        let e;
        let t;
        l.track(function() {
            try {
                t = module14._allowStateChanges(false, a);
            } catch (error) {
                e = error;
            }
        });
        if (e) {
            throw e;
        }
        return t;
    }
    l.reactComponent = this;
    s[F] = l;
    this.render = s;
    return s.call(this);
}
function K(e, t) {
    if (isUsingStaticRendering()) {
        console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
    }
    return this.state !== t || !H(this.props, e);
}
function J(e, t) {
    const n = V(`reactProp_${t}_valueHolder`);
    const o = V(`reactProp_${t}_atomHolder`);
    function a() {
        if (!this[o]) {
            R(this, o, module14.createAtom(`reactive ${t}`));
        }
        return this[o];
    }
    Object.defineProperty(e, t, {
        configurable: true,
        enumerable: true,
        get: function() {
            let e = false;
            if (module14._allowStateReadsStart && module14._allowStateReadsEnd) {
                e = module14._allowStateReadsStart(true);
            }
            a.call(this).reportObserved();
            if (module14._allowStateReadsStart && module14._allowStateReadsEnd) {
                module14._allowStateReadsEnd(e);
            }
            return this[n];
        },
        set: function(e) {
            if (this[G] || H(this[n], e)) {
                R(this, n, e);
            } else {
                R(this, n, e);
                R(this, W, true);
                a.call(this).reportChanged();
                R(this, W, false);
            }
        }
    });
}
const Q = typeof Symbol === "function" && Symbol.for;
const X = Q ? Symbol.for("react.forward_ref") : typeof forwardRef === "function" && forwardRef(function(e) {
    return null;
}).$$typeof;
const ee = Q ? Symbol.for("react.memo") : typeof memo === "function" && memo(function(e) {
    return null;
}).$$typeof;
export function observer(e) {
    if (e.isMobxInjector === true) {
        console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
    }
    if (ee && e.$$typeof === ee) {
        throw new Error("Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");
    }
    if (X && e.$$typeof === X) {
        const t = e.render;
        if (typeof t !== "function") {
            throw new Error("render property of ForwardRef was not a function");
        }
        return forwardRef(function() {
            const e = arguments;
            return <Observer1>{function() {
                return t.apply(undefined, e);
            }}</Observer1>;
        });
    }
    if (typeof e !== "function" || e.prototype && e.prototype.render || e.isReactClass || Object.prototype.isPrototypeOf.call(Component, e)) {
        return ((e)=>{
            const e_prototype = e.prototype;
            if (e[Z]) {
                const n = Y(e_prototype);
                console.warn(`The provided component class (${n}) 
                has already been declared as an observer component.`);
            } else {
                e[Z] = true;
            }
            if (e_prototype.componentWillReact) {
                throw new Error("The componentWillReact life-cycle event is no longer supported");
            }
            if (e.__proto__ !== PureComponent) {
                if (e_prototype.shouldComponentUpdate) {
                    if (e_prototype.shouldComponentUpdate !== K) {
                        throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
                    }
                } else {
                    e_prototype.shouldComponentUpdate = K;
                }
            }
            J(e_prototype, "props");
            J(e_prototype, "state");
            const t_render = e_prototype.render;
            e_prototype.render = function() {
                return $.call(this, t_render);
            };
            U(e_prototype, "componentWillUnmount", function() {
                let e;
                if (isUsingStaticRendering() !== true && ((e = this.render[F]) === null || e === undefined || e.dispose(), this[q] = true, !this.render[F])) {
                    const t = Y(this);
                    console.warn(`The reactive render of an observer class component (${t}) 
                was overriden after MobX attached. This may result in a memory leak if the 
                overriden reactive render was not properly disposed.`);
                }
            });
            return e;
        })(e);
    }
    return ((e, t)=>{
        if (isUsingStaticRendering()) {
            return e;
        }
        let n;
        let r;
        let a;
        const i = {
            forwardRef: false,
            ...t
        };
        const l = e.displayName || e.name;
        const s = function(t, n) {
            return useObserver(()=>e(t, n), l);
        };
        s.displayName = l;
        n = i.forwardRef ? memo(forwardRef(s)) : memo(s);
        r = e;
        a = n;
        Object.keys(r).forEach((e)=>{
            if (!E[e]) {
                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(r, e));
            }
        });
        n.displayName = l;
        return n;
    })(e);
}
export const MobXProviderContext = createContext({});
function MobXProvider(e) {
    const e_children = e.children;
    const n = ((e, t)=>{
        if (e == null) {
            return {};
        }
        let n;
        let r;
        const o = {};
        const a = Object.keys(e);
        for(r = 0; r < a.length; r++){
            n = a[r];
            if (!(t.indexOf(n) >= 0)) {
                o[n] = e[n];
            }
        }
        return o;
    })(e, [
        "children"
    ]);
    const r = useContext(MobXProviderContext);
    const current = useRef({
        ...r,
        ...n
    }).current;
    return <MobXProviderContext.Provider value={current}>{e_children}</MobXProviderContext.Provider>;
}
export { MobXProvider as Provider };
function ae(e, t, n, r) {
    let o;
    let i;
    let l;
    let s = forwardRef(function(n, r) {
        const o = {
            ...n
        };
        const i = useContext(MobXProviderContext);
        Object.assign(o, e(i || {}, o) || {});
        if (r) {
            o.ref = r;
        }
        return createElement(t, o);
    });
    if (r) {
        s = observer(s);
    }
    s.isMobxInjector = true;
    o = t;
    i = s;
    l = Object.getOwnPropertyNames(Object.getPrototypeOf(o));
    Object.getOwnPropertyNames(o).forEach((e)=>{
        if (!(A[e] || l.indexOf(e) !== -1)) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
        }
    });
    s.wrappedComponent = t;
    s.displayName = ((e, t)=>{
        const n = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
        if (t) {
            return `inject-with-${t}(${n})`;
        }
        return `inject(${n})`;
    })(t, n);
    return s;
}
function ie(e) {
    return function(t, n) {
        e.forEach((e)=>{
            if (!(e in n)) {
                if (!(e in t)) {
                    throw new Error(`MobX injector: Store '${e}' is not available! Make sure it is provided by some Provider`);
                }
                n[e] = t[e];
            }
        });
        return n;
    };
}
export function inject(...t) {
    if (typeof t[0] === "function") {
        const r = t[0];
        return function(e) {
            return ae(r, e, r.name, true);
        };
    }
    return function(e) {
        return ae(ie(t), e, t.join("-"), false);
    };
}
MobXProvider.displayName = "MobXProvider";
const se = V("disposeOnUnmountProto");
const ue = V("disposeOnUnmountInst");
function ce() {
    const _this = this;
    [].concat(this[se] || [], this[ue] || []).forEach((t)=>{
        const n = typeof t === "string" ? _this[t] : t;
        if (n != null) {
            if (Array.isArray(n)) {
                n.map((e)=>e());
            } else {
                n();
            }
        }
    });
}
export function disposeOnUnmount(e, t) {
    if (Array.isArray(t)) {
        return t.map((t)=>disposeOnUnmount(e, t));
    }
    const constructor = Object.getPrototypeOf(e).constructor;
    const r = Object.getPrototypeOf(e.constructor);
    const o = Object.getPrototypeOf(Object.getPrototypeOf(e));
    if (constructor !== Component && constructor !== PureComponent && r !== Component && r !== PureComponent && o !== Component && o !== PureComponent) {
        throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");
    }
    if (typeof t !== "string" && typeof t !== "function" && !Array.isArray(t)) {
        throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");
    }
    const i = typeof t === "string";
    const l = !!e[se] || !!e[ue];
    (i ? e[se] || (e[se] = []) : e[ue] || (e[ue] = [])).push(t);
    if (!l) {
        U(e, "componentWillUnmount", ce);
    }
    if (typeof t !== "string") {
        return t;
    }
}
function de(e) {
    function t(t, n, o, a, i, l, ...u) {
        return module14.untracked(function() {
            a = a || "<<anonymous>>";
            l = l || o;
            if (n[o] == null) {
                if (t) {
                    const r = n[o] === null ? "null" : "undefined";
                    return new Error(`The ${i} \`${l}\` is marked as required in \`${a}\`, but its value is \`${r}\`.`);
                }
                return null;
            }
            return e(n, o, a, i, l, ...u);
        });
    }
    const n = t.bind(null, false);
    n.isRequired = t.bind(null, true);
    return n;
}
function pe(e) {
    const t = typeof e;
    if (Array.isArray(e)) {
        return "array";
    }
    if (e instanceof RegExp) {
        return "object";
    }
    if (((e, t)=>e === "symbol" || t["@@toStringTag"] === "Symbol" || typeof Symbol === "function" && t instanceof Symbol)(t, e)) {
        return "symbol";
    }
    return t;
}
function he(e, t) {
    return de((n, o, a, i, l)=>module14.untracked(function() {
            if (e && pe(n[o]) === t.toLowerCase()) {
                return null;
            }
            let i;
            switch(t){
                case "Array":
                    i = module14.isObservableArray;
                    break;
                case "Object":
                    i = module14.isObservableObject;
                    break;
                case "Map":
                    i = module14.isObservableMap;
                    break;
                default:
                    throw new Error(`Unexpected mobxType: ${t}`);
            }
            const s = n[o];
            if (!i(s)) {
                const u = ((e)=>{
                    const t = pe(e);
                    if (t === "object") {
                        if (e instanceof Date) {
                            return "date";
                        }
                        if (e instanceof RegExp) {
                            return "regexp";
                        }
                    }
                    return t;
                })(s);
                const c = e ? ` or javascript \`${t.toLowerCase()}\`` : "";
                return new Error(`Invalid prop \`${l}\` of type \`${u}\` supplied to \`${a}\`, expected \`mobx.Observable${t}\`${c}.`);
            }
            return null;
        }));
}
function ve(e, t) {
    return de((n, o, a, i, l, ...u)=>module14.untracked(function() {
            if (typeof t !== "function") {
                return new Error(`Property \`${l}\` of component \`${a}\` has invalid PropType notation.`);
            }
            let r = he(e, "Array")(n, o, a, i, l);
            if (r instanceof Error) {
                return r;
            }
            for(let s = n[o], c = 0; c < s.length; c++){
                if ((r = t(s, c, a, i, `${l}[${c}]`, ...u)) instanceof Error) {
                    return r;
                }
            }
            return null;
        }));
}
export const PropTypes = {
    observableArray: he(false, "Array"),
    observableArrayOf: ve.bind(null, false),
    observableMap: he(false, "Map"),
    observableObject: he(false, "Object"),
    arrayOrObservableArray: he(true, "Array"),
    arrayOrObservableArrayOf: ve.bind(null, true),
    objectOrObservableObject: he(true, "Object")
};
if (!Component) {
    throw new Error("mobx-react requires React to be available");
}
if (!module14.observable) {
    throw new Error("mobx-react requires mobx to be available");
}
