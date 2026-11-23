"use strict";
require.r(exports);
(function(e, r) {
    require.d(exports, "$mobx", function() {
        return Xn;
    });
    require.d(exports, "FlowCancellationError", function() {
        return Ht;
    });
    require.d(exports, "IDerivationState", function() {
        return ie;
    });
    require.d(exports, "ObservableMap", function() {
        return Tn;
    });
    require.d(exports, "ObservableSet", function() {
        return An;
    });
    require.d(exports, "Reaction", function() {
        return Xe;
    });
    require.d(exports, "_allowStateChanges", function() {
        return De;
    });
    require.d(exports, "_allowStateChangesInsideComputed", function() {
        return He;
    });
    require.d(exports, "_allowStateReadsEnd", function() {
        return _e;
    });
    require.d(exports, "_allowStateReadsStart", function() {
        return we;
    });
    require.d(exports, "_endAction", function() {
        return ze;
    });
    require.d(exports, "_getAdministration", function() {
        return Gn;
    });
    require.d(exports, "_getGlobalState", function() {
        return Ze;
    });
    require.d(exports, "_interceptReads", function() {
        return jt;
    });
    require.d(exports, "_isComputingDerivation", function() {
        return he;
    });
    require.d(exports, "_resetGlobalState", function() {
        return qe;
    });
    require.d(exports, "_startAction", function() {
        return Le;
    });
    require.d(exports, "action", function() {
        return ht;
    });
    require.d(exports, "autorun", function() {
        return yt;
    });
    require.d(exports, "comparer", function() {
        return H;
    });
    require.d(exports, "computed", function() {
        return ce;
    });
    require.d(exports, "configure", function() {
        return Et;
    });
    require.d(exports, "createAtom", function() {
        return T;
    });
    require.d(exports, "decorate", function() {
        return kt;
    });
    require.d(exports, "entries", function() {
        return Yt;
    });
    require.d(exports, "extendObservable", function() {
        return St;
    });
    require.d(exports, "extendShallowObservable", function() {
        return Ot;
    });
    require.d(exports, "flow", function() {
        return At;
    });
    require.d(exports, "get", function() {
        return Qt;
    });
    require.d(exports, "getAtom", function() {
        return Wn;
    });
    require.d(exports, "getDebugName", function() {
        return getDebugName;
    });
    require.d(exports, "getDependencyTree", function() {
        return Lt;
    });
    require.d(exports, "getObserverTree", function() {
        return Dt;
    });
    require.d(exports, "has", function() {
        return Jt;
    });
    require.d(exports, "intercept", function() {
        return Nt;
    });
    require.d(exports, "isAction", function() {
        return mt;
    });
    require.d(exports, "isArrayLike", function() {
        return y;
    });
    require.d(exports, "isBoxedObservable", function() {
        return Ae;
    });
    require.d(exports, "isComputed", function() {
        return Bt;
    });
    require.d(exports, "isComputedProp", function() {
        return Ut;
    });
    require.d(exports, "isFlowCancellationError", function() {
        return Pt;
    });
    require.d(exports, "isObservable", function() {
        return Zt;
    });
    require.d(exports, "isObservableArray", function() {
        return zn;
    });
    require.d(exports, "isObservableMap", function() {
        return Hn;
    });
    require.d(exports, "isObservableObject", function() {
        return qn;
    });
    require.d(exports, "isObservableProp", function() {
        return qt;
    });
    require.d(exports, "isObservableSet", function() {
        return Rn;
    });
    require.d(exports, "keys", function() {
        return Wt;
    });
    require.d(exports, "observable", function() {
        return oe;
    });
    require.d(exports, "observe", function() {
        return Xt;
    });
    require.d(exports, "onBecomeObserved", function() {
        return _t;
    });
    require.d(exports, "onBecomeUnobserved", function() {
        return xt;
    });
    require.d(exports, "onReactionError", function() {
        return et;
    });
    require.d(exports, "reaction", function() {
        return wt;
    });
    require.d(exports, "remove", function() {
        return Kt;
    });
    require.d(exports, "runInAction", function() {
        return vt;
    });
    require.d(exports, "set", function() {
        return $t;
    });
    require.d(exports, "spy", function() {
        return spy;
    });
    require.d(exports, "toJS", function() {
        return nn;
    });
    require.d(exports, "trace", function() {
        return rn;
    });
    require.d(exports, "transaction", function() {
        return an;
    });
    require.d(exports, "untracked", function() {
        return ye;
    });
    require.d(exports, "values", function() {
        return Gt;
    });
    require.d(exports, "when", function() {
        return ln;
    });
    const o = [];
    Object.freeze(o);
    var a = {};
    Object.freeze(a);
    var i = {};
    function l() {
        if (typeof window !== "undefined") {
            return window;
        }
        if (e !== undefined) {
            return e;
        }
        if (typeof self !== "undefined") {
            return self;
        }
        return i;
    }
    function s() {
        return ++Fe.mobxGuid;
    }
    function u(e) {
        c(false, e);
        throw "X";
    }
    function c(e, t) {
        if (!e) {
            throw new Error(`[mobx] ${t || "An invariant failed, however the error is obfuscated because this is an production build."}`);
        }
    }
    function f(e) {
        let t = false;
        return function() {
            if (!t) {
                t = true;
                return e.apply(this, arguments);
            }
        };
    }
    var d = function() {};
    function p(e) {
        return e !== null && typeof e === "object";
    }
    function h(e) {
        if (e === null || typeof e !== "object") {
            return false;
        }
        const t = Object.getPrototypeOf(e);
        return t === Object.prototype || t === null;
    }
    function v(e, t, n) {
        Object.defineProperty(e, t, {
            enumerable: false,
            writable: true,
            configurable: true,
            value: n
        });
    }
    function m(e, t, n) {
        Object.defineProperty(e, t, {
            enumerable: false,
            writable: false,
            configurable: true,
            value: n
        });
    }
    function g(e, t) {
        const n = `isMobX${e}`;
        t.prototype[n] = true;
        return function(e) {
            return p(e) && e[n] === true;
        };
    }
    function y(e) {
        return Array.isArray(e) || zn(e);
    }
    function b(e) {
        return l().Map !== undefined && e instanceof l().Map;
    }
    function C(e) {
        return e instanceof Set;
    }
    function w(e) {
        const t = [];
        while(true){
            const n = e.next();
            if (n.done) {
                break;
            }
            t.push(n.value);
        }
        return t;
    }
    function _() {
        return typeof Symbol === "function" && Symbol.toPrimitive || "@@toPrimitive";
    }
    function x(e) {
        if (e === null) {
            return null;
        }
        if (typeof e === "object") {
            return `${e}`;
        }
        return e;
    }
    function M(e, t) {
        for(let n = e.next(); !n.done;){
            t(n.value);
            n = e.next();
        }
    }
    function E() {
        return typeof Symbol === "function" && Symbol.iterator || "@@iterator";
    }
    function k(e, t) {
        m(e, E(), t);
    }
    function O(e) {
        e[E()] = L;
        return e;
    }
    function S() {
        return typeof Symbol === "function" && Symbol.toStringTag || "@@toStringTag";
    }
    function L() {
        return this;
    }
    var z = (()=>{
        function e(e = `Atom@${s()}`) {
            this.name = e;
            this.isPendingUnobservation = false;
            this.isBeingObserved = false;
            this.observers = [];
            this.observersIndexes = {};
            this.diffValue = 0;
            this.lastAccessedBy = 0;
            this.lowestObserverState = ie.NOT_TRACKING;
        }
        e.prototype.onBecomeUnobserved = function() {};
        e.prototype.onBecomeObserved = function() {};
        e.prototype.reportObserved = function() {
            return Je(this);
        };
        e.prototype.reportChanged = function() {
            $e();
            ((e)=>{
                if (e.lowestObserverState !== ie.STALE) {
                    e.lowestObserverState = ie.STALE;
                    const t = e.observers;
                    for(let n = t.length; n--;){
                        const r = t[n];
                        if (r.dependenciesState === ie.UP_TO_DATE) {
                            if (r.isTracing !== le.NONE) {
                                Qe(r, e);
                            }
                            r.onBecomeStale();
                        }
                        r.dependenciesState = ie.STALE;
                    }
                }
            })(this);
            Ke();
        };
        e.prototype.toString = function() {
            return this.name;
        };
        return e;
    })();
    var D = g("Atom", z);
    function T(e, t = d, n = d) {
        const r = new z(e);
        _t(r, t);
        xt(r, n);
        return r;
    }
    function identity(e, t) {
        return e === t;
    }
    var H = {
        identity,
        structural: function(e, t) {
            return Kn(e, t);
        },
        default: function(e, t) {
            return ((e, t)=>typeof e === "number" && typeof t === "number" && isNaN(e) && isNaN(t))(e, t) || identity(e, t);
        },
        shallow: function(e, t) {
            return Kn(e, t, 1);
        }
    };
    let P = function(e, t) {
        return (P = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for(const n in t){
                if (t.hasOwnProperty(n)) {
                    e[n] = t[n];
                }
            }
        })(e, t);
    };
    function A(e, t) {
        function n() {
            this.constructor = e;
        }
        P(e, t);
        e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n);
    }
    var R = function() {
        return (R = Object.assign || function(e) {
            let t;
            for(let n = 1, r = arguments.length; n < r; n++){
                for(const o in t = arguments[n]){
                    if (Object.prototype.hasOwnProperty.call(t, o)) {
                        e[o] = t[o];
                    }
                }
            }
            return e;
        }).apply(this, arguments);
    };
    function j(e, t) {
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
    }
    function N(...args) {
        let e = [];
        for(let t = 0; t < args.length; t++){
            e = e.concat(j(args[t]));
        }
        return e;
    }
    const I = {};
    const B = {};
    function U(prop, enumerable) {
        const n = enumerable ? I : B;
        return n[prop] || (n[prop] = {
            configurable: true,
            enumerable,
            get: function() {
                F(this);
                return this[prop];
            },
            set: function(t) {
                F(this);
                this[prop] = t;
            }
        });
    }
    function F(e) {
        if (e.__mobxDidRunLazyInitializers !== true) {
            const t = e.__mobxDecorators;
            if (t) {
                v(e, "__mobxDidRunLazyInitializers", true);
                for(const n in t){
                    const r = t[n];
                    r.propertyCreator(e, r.prop, r.descriptor, r.decoratorTarget, r.decoratorArguments);
                }
            }
        }
    }
    function Z(e, propertyCreator) {
        return function() {
            let decoratorArguments;
            const r = function(decoratorTarget, prop, descriptor, i) {
                if (i === true) {
                    propertyCreator(decoratorTarget, prop, descriptor, decoratorTarget, decoratorArguments);
                    return null;
                }
                if (!Object.prototype.hasOwnProperty.call(decoratorTarget, "__mobxDecorators")) {
                    const l = decoratorTarget.__mobxDecorators;
                    v(decoratorTarget, "__mobxDecorators", R({}, l));
                }
                decoratorTarget.__mobxDecorators[prop] = {
                    prop,
                    propertyCreator,
                    descriptor,
                    decoratorTarget,
                    decoratorArguments
                };
                return U(prop, e);
            };
            if (q(arguments)) {
                decoratorArguments = o;
                return r.apply(null, arguments);
            }
            decoratorArguments = Array.prototype.slice.call(arguments);
            return r;
        };
    }
    function q(e) {
        return (e.length === 2 || e.length === 3) && typeof e[1] === "string" || e.length === 4 && e[3] === true;
    }
    function W(e, t, n) {
        if (Zt(e)) {
            return e;
        }
        if (Array.isArray(e)) {
            return oe.array(e, {
                name: n
            });
        }
        if (h(e)) {
            return oe.object(e, undefined, {
                name: n
            });
        }
        if (b(e)) {
            return oe.map(e, {
                name: n
            });
        }
        if (C(e)) {
            return oe.set(e, {
                name: n
            });
        }
        return e;
    }
    function G(e) {
        return e;
    }
    function Y(e) {
        c(e);
        const t = Z(true, function(t, n, r, o, a) {
            In(t, n, r ? r.initializer ? r.initializer.call(t) : r.value : undefined, e);
        });
        r !== undefined && r.env;
        const n = t;
        n.enhancer = e;
        return n;
    }
    var $ = {
        deep: true,
        name: undefined,
        defaultDecorator: undefined
    };
    var K = {
        deep: false,
        name: undefined,
        defaultDecorator: undefined
    };
    function J(e) {
        if (e == null) {
            return $;
        }
        if (typeof e === "string") {
            return {
                name: e,
                deep: true
            };
        }
        return e;
    }
    function Q(e) {
        if (e.defaultDecorator) {
            return e.defaultDecorator.enhancer;
        }
        if (e.deep === false) {
            return G;
        }
        return W;
    }
    Object.freeze($);
    Object.freeze(K);
    var deep = Y(W);
    const shallow = Y(function(e, t, n) {
        if (e == null || qn(e) || zn(e) || Hn(e) || Rn(e)) {
            return e;
        }
        if (Array.isArray(e)) {
            return oe.array(e, {
                name: n,
                deep: false
            });
        }
        if (h(e)) {
            return oe.object(e, undefined, {
                name: n,
                deep: false
            });
        }
        if (b(e)) {
            return oe.map(e, {
                name: n,
                deep: false
            });
        }
        if (C(e)) {
            return oe.set(e, {
                name: n,
                deep: false
            });
        }
        return u(false);
    });
    var ref = Y(G);
    const struct = Y(function(e, t, n) {
        if (Kn(e, t)) {
            return t;
        }
        return e;
    });
    const re = {
        box: function(e, t) {
            if (arguments.length > 2) {
                ae("box");
            }
            const n = J(t);
            return new Pe(e, Q(n), n.name, true, n.equals);
        },
        shallowBox: function(e, t) {
            if (arguments.length > 2) {
                ae("shallowBox");
            }
            return oe.box(e, {
                name: t,
                deep: false
            });
        },
        array: function(e, t) {
            if (arguments.length > 2) {
                ae("array");
            }
            const n = J(t);
            return new Mn(e, Q(n), n.name);
        },
        shallowArray: function(e, t) {
            if (arguments.length > 2) {
                ae("shallowArray");
            }
            return oe.array(e, {
                name: t,
                deep: false
            });
        },
        map: function(e, t) {
            if (arguments.length > 2) {
                ae("map");
            }
            const n = J(t);
            return new Tn(e, Q(n), n.name);
        },
        shallowMap: function(e, t) {
            if (arguments.length > 2) {
                ae("shallowMap");
            }
            return oe.map(e, {
                name: t,
                deep: false
            });
        },
        set: function(e, t) {
            if (arguments.length > 2) {
                ae("set");
            }
            const n = J(t);
            return new An(e, Q(n), n.name);
        },
        object: function(e, t, n) {
            if (typeof arguments[1] === "string") {
                ae("object");
            }
            const r = J(n);
            return St({}, e, t, r);
        },
        shallowObject: function(e, t) {
            if (typeof arguments[1] === "string") {
                ae("shallowObject");
            }
            return oe.object(e, {}, {
                name: t,
                deep: false
            });
        },
        ref,
        shallow,
        deep,
        struct
    };
    var oe = function(e, t, n) {
        if (typeof arguments[1] === "string") {
            return deep.apply(null, arguments);
        }
        if (Zt(e)) {
            return e;
        }
        const r = h(e) ? oe.object(e, t, n) : Array.isArray(e) ? oe.array(e, t) : b(e) ? oe.map(e, t) : C(e) ? oe.set(e, t) : e;
        if (r !== e) {
            return r;
        }
        u(false);
    };
    function ae(e) {
        u(`Expected one or two arguments to observable.${e}. Did you accidentally try to use observable.${e} as decorator?`);
    }
    Object.keys(re).forEach((e)=>oe[e] = re[e]);
    var ie;
    var le;
    var se = Z(false, function(e, t, { get, set }, r, o) {
        const l = o[0] || {};
        ((e, t, n)=>{
            const r = Nn(e);
            n.name = `${r.name}.${t}`;
            n.context = e;
            r.values[t] = new Re(n);
            Object.defineProperty(e, t, ((e)=>Un[e] || (Un[e] = {
                    configurable: Fe.computedConfigurable,
                    enumerable: false,
                    get: function() {
                        return Fn(this).read(this, e);
                    },
                    set: function(t) {
                        Fn(this).write(this, e, t);
                    }
                }))(t));
        })(e, t, R({
            get,
            set
        }, l));
    });
    const ue = se({
        equals: H.structural
    });
    var ce = function(e, t, n) {
        if (typeof t === "string") {
            return se.apply(null, arguments);
        }
        if (e !== null && typeof e === "object" && arguments.length === 1) {
            return se.apply(null, arguments);
        }
        const r = typeof t === "object" ? t : {};
        r.get = e;
        r.set = typeof t === "function" ? t : r.set;
        r.name = r.name || e.name || "";
        return new Re(r);
    };
    ce.struct = ue;
    ie = {
        NOT_TRACKING: -1,
        [-1]: "NOT_TRACKING",
        UP_TO_DATE: 0,
        0: "UP_TO_DATE",
        POSSIBLY_STALE: 1,
        1: "POSSIBLY_STALE",
        STALE: 2,
        2: "STALE"
    };
    le = {
        NONE: 0,
        0: "NONE",
        LOG: 1,
        1: "LOG",
        BREAK: 2,
        2: "BREAK"
    };
    const fe = function(e) {
        this.cause = e;
    };
    function de(e) {
        return e instanceof fe;
    }
    function pe(e) {
        switch(e.dependenciesState){
            case ie.UP_TO_DATE:
                return false;
            case ie.NOT_TRACKING:
            case ie.STALE:
                return true;
            case ie.POSSIBLY_STALE:
                const t = we(true);
                const n = be();
                const r = e.observing;
                for(let o = r.length, a = 0; a < o; a++){
                    const i = r[a];
                    if (je(i)) {
                        if (Fe.disableErrorBoundaries) {
                            i.get();
                        } else {
                            try {
                                i.get();
                            } catch (e) {
                                Ce(n);
                                _e(t);
                                return true;
                            }
                        }
                        if (e.dependenciesState === ie.STALE) {
                            Ce(n);
                            _e(t);
                            return true;
                        }
                    }
                }
                xe(e);
                Ce(n);
                _e(t);
                return false;
        }
    }
    function he() {
        return Fe.trackingDerivation !== null;
    }
    function ve(e) {
        const t = e.observers.length > 0;
        if (Fe.computationDepth > 0 && t) {
            u(false);
        }
        if (!(Fe.allowStateChanges || !t && Fe.enforceActions !== "strict")) {
            u(false);
        }
    }
    function me(e, t, n) {
        const r = we(true);
        xe(e);
        e.newObserving = new Array(e.observing.length + 100);
        e.unboundDepsCount = 0;
        e.runId = ++Fe.runId;
        let o;
        const Fe_trackingDerivation = Fe.trackingDerivation;
        Fe.trackingDerivation = e;
        if (Fe.disableErrorBoundaries === true) {
            o = t.call(n);
        } else {
            try {
                o = t.call(n);
            } catch (error) {
                o = new fe(error);
            }
        }
        Fe.trackingDerivation = Fe_trackingDerivation;
        ((e)=>{
            const e_observing = e.observing;
            const n = e.observing = e.newObserving;
            let ie_UP_TO_DATE = ie.UP_TO_DATE;
            let o = 0;
            for(var a = e.unboundDepsCount, i = 0; i < a; i++){
                if ((l = n[i]).diffValue === 0) {
                    l.diffValue = 1;
                    if (o !== i) {
                        n[o] = l;
                    }
                    o++;
                }
                if (l.dependenciesState > ie_UP_TO_DATE) {
                    ie_UP_TO_DATE = l.dependenciesState;
                }
            }
            n.length = o;
            e.newObserving = null;
            for(a = e_observing.length; a--;){
                if ((l = e_observing[a]).diffValue === 0) {
                    Ge(l, e);
                }
                l.diffValue = 0;
            }
            while(o--){
                var l;
                if ((l = n[o]).diffValue === 1) {
                    l.diffValue = 0;
                    We(l, e);
                }
            }
            if (ie_UP_TO_DATE !== ie.UP_TO_DATE) {
                e.dependenciesState = ie_UP_TO_DATE;
                e.onBecomeStale();
            }
        })(e);
        e.observing.length;
        _e(r);
        return o;
    }
    function ge(e) {
        const e_observing = e.observing;
        e.observing = [];
        for(let n = e_observing.length; n--;){
            Ge(e_observing[n], e);
        }
        e.dependenciesState = ie.NOT_TRACKING;
    }
    function ye(e) {
        const t = be();
        const n = e();
        Ce(t);
        return n;
    }
    function be() {
        const Fe_trackingDerivation = Fe.trackingDerivation;
        Fe.trackingDerivation = null;
        return Fe_trackingDerivation;
    }
    function Ce(e) {
        Fe.trackingDerivation = e;
    }
    function we(e) {
        const Fe_allowStateReads = Fe.allowStateReads;
        Fe.allowStateReads = e;
        return Fe_allowStateReads;
    }
    function _e(e) {
        Fe.allowStateReads = e;
    }
    function xe(e) {
        if (e.dependenciesState !== ie.UP_TO_DATE) {
            e.dependenciesState = ie.UP_TO_DATE;
            const t = e.observing;
            for(let n = t.length; n--;){
                t[n].lowestObserverState = ie.UP_TO_DATE;
            }
        }
    }
    var parentActionId = 0;
    var Ee = 1;
    const ke = Object.getOwnPropertyDescriptor(function() {}, "name");
    function Oe(e, t) {
        const n = function() {
            return Se(e, t, this, arguments);
        };
        n.isMobxAction = true;
        return n;
    }
    function Se(e, t, n, r) {
        const o = Le(e, n, r);
        try {
            return t.apply(n, r);
        } catch (error) {
            o.error = error;
            throw error;
        } finally{
            ze(o);
        }
    }
    function Le(e, t, n) {
        const notifySpy = at() && !!e;
        let startTime = 0;
        if (notifySpy) {
            startTime = Date.now();
            const a = n && n.length || 0;
            const i = new Array(a);
            if (a > 0) {
                for(let l = 0; l < a; l++){
                    i[l] = n[l];
                }
            }
            lt({
                type: "action",
                name: e,
                object: t,
                arguments: i
            });
        }
        const prevDerivation = be();
        $e();
        const u = {
            prevDerivation,
            prevAllowStateChanges: Te(true),
            prevAllowStateReads: we(true),
            notifySpy,
            startTime,
            actionId: Ee++,
            parentActionId
        };
        parentActionId = u.actionId;
        return u;
    }
    function ze(e) {
        if (parentActionId !== e.actionId) {
            u("invalid action stack. did you forget to finish an action?");
        }
        parentActionId = e.parentActionId;
        if (e.error !== undefined) {
            Fe.suppressReactionErrors = true;
        }
        Ve(e.prevAllowStateChanges);
        _e(e.prevAllowStateReads);
        Ke();
        Ce(e.prevDerivation);
        if (e.notifySpy) {
            ut({
                time: Date.now() - e.startTime
            });
        }
        Fe.suppressReactionErrors = false;
    }
    function De(e, t) {
        let n;
        const r = Te(e);
        try {
            n = t();
        } finally{
            Ve(r);
        }
        return n;
    }
    function Te(e) {
        const Fe_allowStateChanges = Fe.allowStateChanges;
        Fe.allowStateChanges = e;
        return Fe_allowStateChanges;
    }
    function Ve(e) {
        Fe.allowStateChanges = e;
    }
    function He(e) {
        let t;
        const Fe_computationDepth = Fe.computationDepth;
        Fe.computationDepth = 0;
        try {
            t = e();
        } finally{
            Fe.computationDepth = Fe_computationDepth;
        }
        return t;
    }
    ke && ke.configurable;
    var Pe = ((e)=>{
        function t(t, n, r = `ObservableValue@${s()}`, o = true, a = H.default) {
            const i = e.call(this, r) || this;
            i.enhancer = n;
            i.name = r;
            i.equals = a;
            i.hasUnreportedChange = false;
            i.value = n(t, undefined, r);
            if (o && at()) {
                it({
                    type: "create",
                    name: i.name,
                    newValue: `${i.value}`
                });
            }
            return i;
        }
        A(t, e);
        t.prototype.dehanceValue = function(e) {
            if (this.dehancer !== undefined) {
                return this.dehancer(e);
            }
            return e;
        };
        t.prototype.set = function(e) {
            const value = this.value;
            if ((e = this.prepareNewValue(e)) !== Fe.UNCHANGED) {
                const n = at();
                if (n) {
                    lt({
                        type: "update",
                        name: this.name,
                        newValue: e,
                        oldValue: value
                    });
                }
                this.setNewValue(e);
                if (n) {
                    ut();
                }
            }
        };
        t.prototype.prepareNewValue = function(e) {
            ve(this);
            if (cn(this)) {
                const t = dn(this, {
                    object: this,
                    type: "update",
                    newValue: e
                });
                if (!t) {
                    return Fe.UNCHANGED;
                }
                e = t.newValue;
            }
            e = this.enhancer(e, this.value, this.name);
            if (this.equals(this.value, e)) {
                return Fe.UNCHANGED;
            }
            return e;
        };
        t.prototype.setNewValue = function(e) {
            const value = this.value;
            this.value = e;
            this.reportChanged();
            if (pn(this)) {
                vn(this, {
                    type: "update",
                    object: this,
                    newValue: e,
                    oldValue: value
                });
            }
        };
        t.prototype.get = function() {
            this.reportObserved();
            return this.dehanceValue(this.value);
        };
        t.prototype.intercept = function(e) {
            return fn(this, e);
        };
        t.prototype.observe = function(e, t) {
            if (t) {
                e({
                    object: this,
                    type: "update",
                    newValue: this.value,
                    oldValue: undefined
                });
            }
            return hn(this, e);
        };
        t.prototype.toJSON = function() {
            return this.get();
        };
        t.prototype.toString = function() {
            return `${this.name}[${this.value}]`;
        };
        t.prototype.valueOf = function() {
            return x(this.get());
        };
        return t;
    })(z);
    Pe.prototype[_()] = Pe.prototype.valueOf;
    var Ae = g("ObservableValue", Pe);
    class Re {
        constructor(e){
            this.dependenciesState = ie.NOT_TRACKING;
            this.observing = [];
            this.newObserving = null;
            this.isBeingObserved = false;
            this.isPendingUnobservation = false;
            this.observers = [];
            this.observersIndexes = {};
            this.diffValue = 0;
            this.runId = 0;
            this.lastAccessedBy = 0;
            this.lowestObserverState = ie.UP_TO_DATE;
            this.unboundDepsCount = 0;
            this.__mapid = `#${s()}`;
            this.value = new fe(null);
            this.isComputing = false;
            this.isRunningSetter = false;
            this.isTracing = le.NONE;
            c(e.get, "missing option for computed: get");
            this.derivation = e.get;
            this.name = e.name || `ComputedValue@${s()}`;
            if (e.set) {
                this.setter = Oe(`${this.name}-setter`, e.set);
            }
            this.equals = e.equals || (e.compareStructural || e.struct ? H.structural : H.default);
            this.scope = e.context;
            this.requiresReaction = !!e.requiresReaction;
            this.keepAlive = !!e.keepAlive;
        }
        onBecomeStale() {
            ((e)=>{
                if (e.lowestObserverState === ie.UP_TO_DATE) {
                    e.lowestObserverState = ie.POSSIBLY_STALE;
                    const t = e.observers;
                    for(let n = t.length; n--;){
                        const r = t[n];
                        if (r.dependenciesState === ie.UP_TO_DATE) {
                            r.dependenciesState = ie.POSSIBLY_STALE;
                            if (r.isTracing !== le.NONE) {
                                Qe(r, e);
                            }
                            r.onBecomeStale();
                        }
                    }
                }
            })(this);
        }
        onBecomeUnobserved() {}
        onBecomeObserved() {}
        get() {
            if (this.isComputing) {
                u(`Cycle detected in computation ${this.name}: ${this.derivation}`);
            }
            if (Fe.inBatch !== 0 || this.observers.length !== 0 || this.keepAlive) {
                Je(this);
                if (pe(this) && this.trackAndCompute()) {
                    ((e)=>{
                        if (e.lowestObserverState !== ie.STALE) {
                            e.lowestObserverState = ie.STALE;
                            const t = e.observers;
                            for(let n = t.length; n--;){
                                const r = t[n];
                                if (r.dependenciesState === ie.POSSIBLY_STALE) {
                                    r.dependenciesState = ie.STALE;
                                } else if (r.dependenciesState === ie.UP_TO_DATE) {
                                    e.lowestObserverState = ie.UP_TO_DATE;
                                }
                            }
                        }
                    })(this);
                }
            } else if (pe(this)) {
                this.warnAboutUntrackedRead();
                $e();
                this.value = this.computeValue(false);
                Ke();
            }
            const value = this.value;
            if (de(value)) {
                throw value.cause;
            }
            return value;
        }
        peek() {
            const e = this.computeValue(false);
            if (de(e)) {
                throw e.cause;
            }
            return e;
        }
        set(e) {
            if (this.setter) {
                c(!this.isRunningSetter, `The setter of computed value '${this.name}' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?`);
                this.isRunningSetter = true;
                try {
                    this.setter.call(this.scope, e);
                } finally{
                    this.isRunningSetter = false;
                }
            } else {
                c(false, false);
            }
        }
        trackAndCompute() {
            if (at()) {
                it({
                    object: this.scope,
                    type: "compute",
                    name: this.name
                });
            }
            const value = this.value;
            const t = this.dependenciesState === ie.NOT_TRACKING;
            const n = this.computeValue(true);
            const r = t || de(value) || de(n) || !this.equals(value, n);
            if (r) {
                this.value = n;
            }
            return r;
        }
        computeValue(e) {
            let t;
            this.isComputing = true;
            Fe.computationDepth++;
            if (e) {
                t = me(this, this.derivation, this.scope);
            } else if (Fe.disableErrorBoundaries === true) {
                t = this.derivation.call(this.scope);
            } else {
                try {
                    t = this.derivation.call(this.scope);
                } catch (error) {
                    t = new fe(error);
                }
            }
            Fe.computationDepth--;
            this.isComputing = false;
            return t;
        }
        suspend() {
            if (!this.keepAlive) {
                ge(this);
                this.value = undefined;
            }
        }
        observe(e, t) {
            const _this = this;
            let r = true;
            let o;
            return yt(function() {
                const a = _this.get();
                if (!r || t) {
                    const i = be();
                    e({
                        type: "update",
                        object: _this,
                        newValue: a,
                        oldValue: o
                    });
                    Ce(i);
                }
                r = false;
                o = a;
            });
        }
        warnAboutUntrackedRead() {}
        toJSON() {
            return this.get();
        }
        toString() {
            return `${this.name}[${this.derivation.toString()}]`;
        }
        valueOf() {
            return x(this.get());
        }
    }
    Re.prototype[_()] = Re.prototype.valueOf;
    var je = g("ComputedValue", Re);
    var Ne = [
        "mobxGuid",
        "spyListeners",
        "enforceActions",
        "computedRequiresReaction",
        "reactionRequiresObservable",
        "observableRequiresReaction",
        "allowStateReads",
        "disableErrorBoundaries",
        "runId",
        "UNCHANGED"
    ];
    var Ie = function() {
        this.version = 5;
        this.UNCHANGED = {};
        this.trackingDerivation = null;
        this.computationDepth = 0;
        this.runId = 0;
        this.mobxGuid = 0;
        this.inBatch = 0;
        this.pendingUnobservations = [];
        this.pendingReactions = [];
        this.isRunningReactions = false;
        this.allowStateChanges = true;
        this.allowStateReads = true;
        this.enforceActions = false;
        this.spyListeners = [];
        this.globalReactionErrorHandlers = [];
        this.computedRequiresReaction = false;
        this.reactionRequiresObservable = false;
        this.observableRequiresReaction = false;
        this.computedConfigurable = false;
        this.disableErrorBoundaries = false;
        this.suppressReactionErrors = false;
    };
    var Be = true;
    var Ue = false;
    var Fe = (()=>{
        const e = l();
        if (e.__mobxInstanceCount > 0 && !e.__mobxGlobals) {
            Be = false;
        }
        if (e.__mobxGlobals && e.__mobxGlobals.version !== (new Ie).version) {
            Be = false;
        }
        if (Be) {
            if (e.__mobxGlobals) {
                e.__mobxInstanceCount += 1;
                if (!e.__mobxGlobals.UNCHANGED) {
                    e.__mobxGlobals.UNCHANGED = {};
                }
                return e.__mobxGlobals;
            }
            e.__mobxInstanceCount = 1;
            return e.__mobxGlobals = new Ie;
        }
        setTimeout(()=>{
            if (!Ue) {
                u("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new Ie;
    })();
    function Ze() {
        return Fe;
    }
    function qe() {
        const e = new Ie;
        for(const t in e){
            if (Ne.indexOf(t) === -1) {
                Fe[t] = e[t];
            }
        }
        Fe.allowStateChanges = !Fe.enforceActions;
    }
    function We(e, t) {
        const length = e.observers.length;
        if (length) {
            e.observersIndexes[t.__mapid] = length;
        }
        e.observers[length] = t;
        if (e.lowestObserverState > t.dependenciesState) {
            e.lowestObserverState = t.dependenciesState;
        }
    }
    function Ge(e, t) {
        if (e.observers.length === 1) {
            e.observers.length = 0;
            Ye(e);
        } else {
            const { observers, observersIndexes } = e;
            const o = observers.pop();
            if (o !== t) {
                const a = observersIndexes[t.__mapid] || 0;
                if (a) {
                    observersIndexes[o.__mapid] = a;
                } else {
                    delete observersIndexes[o.__mapid];
                }
                observers[a] = o;
            }
            delete observersIndexes[t.__mapid];
        }
    }
    function Ye(e) {
        if (e.isPendingUnobservation === false) {
            e.isPendingUnobservation = true;
            Fe.pendingUnobservations.push(e);
        }
    }
    function $e() {
        Fe.inBatch++;
    }
    function Ke() {
        if (--Fe.inBatch == 0) {
            nt();
            for(let e = Fe.pendingUnobservations, t = 0; t < e.length; t++){
                const n = e[t];
                n.isPendingUnobservation = false;
                if (n.observers.length === 0) {
                    if (n.isBeingObserved) {
                        n.isBeingObserved = false;
                        n.onBecomeUnobserved();
                    }
                    if (n instanceof Re) {
                        n.suspend();
                    }
                }
            }
            Fe.pendingUnobservations = [];
        }
    }
    function Je(e) {
        const Fe_trackingDerivation = Fe.trackingDerivation;
        if (Fe_trackingDerivation !== null) {
            if (Fe_trackingDerivation.runId !== e.lastAccessedBy) {
                e.lastAccessedBy = Fe_trackingDerivation.runId;
                Fe_trackingDerivation.newObserving[Fe_trackingDerivation.unboundDepsCount++] = e;
                if (!e.isBeingObserved) {
                    e.isBeingObserved = true;
                    e.onBecomeObserved();
                }
            }
            return true;
        }
        if (e.observers.length === 0 && Fe.inBatch > 0) {
            Ye(e);
        }
        return false;
    }
    function Qe(e, t) {
        console.log(`[mobx.trace] '${e.name}' is invalidated due to a change in: '${t.name}'`);
        if (e.isTracing === le.BREAK) {
            const n = [];
            (function e(t, n, r) {
                if (n.length >= 1000) {
                    n.push("(and many more)");
                } else {
                    n.push(`${new Array(r).join("\t")}${t.name}`);
                    if (t.dependencies) {
                        t.dependencies.forEach((t)=>e(t, n, r + 1));
                    }
                }
            })(Lt(e), n, 1);
            new Function(`debugger;
/*
Tracing '${e.name}'

You are entering this break point because derivation '${e.name}' is being traced and '${t.name}' is now forcing it to update.
Just follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update
The stackframe you are looking for is at least ~6-8 stack-frames up.

${e instanceof Re ? e.derivation.toString().replace(/[*]\//g, "/") : ""}

The dependencies for this derivation are:

${n.join("\n")}
*/
    `)();
        }
    }
    class Xe {
        constructor(e = `Reaction@${s()}`, t, n, r = false){
            this.name = e;
            this.onInvalidate = t;
            this.errorHandler = n;
            this.requiresObservable = r;
            this.observing = [];
            this.newObserving = [];
            this.dependenciesState = ie.NOT_TRACKING;
            this.diffValue = 0;
            this.runId = 0;
            this.unboundDepsCount = 0;
            this.__mapid = `#${s()}`;
            this.isDisposed = false;
            this._isScheduled = false;
            this._isTrackPending = false;
            this._isRunning = false;
            this.isTracing = le.NONE;
        }
        onBecomeStale() {
            this.schedule();
        }
        schedule() {
            if (!this._isScheduled) {
                this._isScheduled = true;
                Fe.pendingReactions.push(this);
                nt();
            }
        }
        isScheduled() {
            return this._isScheduled;
        }
        runReaction() {
            if (!this.isDisposed) {
                $e();
                this._isScheduled = false;
                if (pe(this)) {
                    this._isTrackPending = true;
                    try {
                        this.onInvalidate();
                        if (this._isTrackPending && at()) {
                            it({
                                name: this.name,
                                type: "scheduled-reaction"
                            });
                        }
                    } catch (error) {
                        this.reportExceptionInDerivation(error);
                    }
                }
                Ke();
            }
        }
        track(e) {
            $e();
            let t;
            const n = at();
            if (n) {
                t = Date.now();
                lt({
                    name: this.name,
                    type: "reaction"
                });
            }
            this._isRunning = true;
            const r = me(this, e, undefined);
            this._isRunning = false;
            this._isTrackPending = false;
            if (this.isDisposed) {
                ge(this);
            }
            if (de(r)) {
                this.reportExceptionInDerivation(r.cause);
            }
            if (n) {
                ut({
                    time: Date.now() - t
                });
            }
            Ke();
        }
        reportExceptionInDerivation(e) {
            const _this = this;
            if (this.errorHandler) {
                this.errorHandler(e, this);
            } else {
                if (Fe.disableErrorBoundaries) {
                    throw e;
                }
                const message = `[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '${this}'`;
                if (Fe.suppressReactionErrors) {
                    console.warn(`[mobx] (error in reaction '${this.name}' suppressed, fix error of causing action below)`);
                } else {
                    console.error(message, e);
                }
                if (at()) {
                    it({
                        type: "error",
                        name: this.name,
                        message,
                        error: `${e}`
                    });
                }
                Fe.globalReactionErrorHandlers.forEach((n)=>n(e, _this));
            }
        }
        dispose() {
            if (!this.isDisposed) {
                this.isDisposed = true;
                if (!this._isRunning) {
                    $e();
                    ge(this);
                    Ke();
                }
            }
        }
        getDisposer() {
            const e = this.dispose.bind(this);
            e.$mobx = this;
            return e;
        }
        toString() {
            return `Reaction[${this.name}]`;
        }
        trace(e = false) {
            rn(this, e);
        }
    }
    function et(e) {
        Fe.globalReactionErrorHandlers.push(e);
        return function() {
            const t = Fe.globalReactionErrorHandlers.indexOf(e);
            if (t >= 0) {
                Fe.globalReactionErrorHandlers.splice(t, 1);
            }
        };
    }
    var tt = function(e) {
        return e();
    };
    function nt() {
        if (!(Fe.inBatch > 0 || Fe.isRunningReactions)) {
            tt(rt);
        }
    }
    function rt() {
        Fe.isRunningReactions = true;
        for(let e = Fe.pendingReactions, t = 0; e.length > 0;){
            if (++t == 100) {
                console.error(`Reaction doesn't converge to a stable state after 100 iterations. Probably there is a cycle in the reactive function: ${e[0]}`);
                e.splice(0);
            }
            const n = e.splice(0);
            for(let r = 0, o = n.length; r < o; r++){
                n[r].runReaction();
            }
        }
        Fe.isRunningReactions = false;
    }
    var ot = g("Reaction", Xe);
    function at() {
        return !!Fe.spyListeners.length;
    }
    function it(e) {
        if (Fe.spyListeners.length) {
            const t = Fe.spyListeners;
            for(let n = 0, r = t.length; n < r; n++){
                t[n](e);
            }
        }
    }
    function lt(e) {
        it(R(R({}, e), {
            spyReportStart: true
        }));
    }
    var st = {
        spyReportEnd: true
    };
    function ut(e) {
        it(e ? R(R({}, e), {
            spyReportEnd: true
        }) : st);
    }
    function spy(e) {
        Fe.spyListeners.push(e);
        return f(()=>{
            Fe.spyListeners = Fe.spyListeners.filter((t)=>t !== e);
        });
    }
    function set() {
        u(false);
    }
    function dt(e) {
        return function(t, n, r) {
            if (r) {
                if (r.value) {
                    return {
                        value: Oe(e, r.value),
                        enumerable: false,
                        configurable: true,
                        writable: true
                    };
                }
                const o = r.initializer;
                return {
                    enumerable: false,
                    configurable: true,
                    writable: true,
                    initializer: function() {
                        return Oe(e, o.call(this));
                    }
                };
            }
            return pt(e).apply(this, arguments);
        };
    }
    function pt(e) {
        return function(t, n, r) {
            Object.defineProperty(t, n, {
                configurable: true,
                enumerable: false,
                get: function() {},
                set: function(t) {
                    v(this, n, ht(e, t));
                }
            });
        };
    }
    var ht = function(e, t, n, r) {
        if (arguments.length === 1 && typeof e === "function") {
            return Oe(e.name || "<unnamed action>", e);
        }
        if (arguments.length === 2 && typeof t === "function") {
            return Oe(e, t);
        }
        if (arguments.length === 1 && typeof e === "string") {
            return dt(e);
        }
        if (r !== true) {
            return dt(t).apply(null, arguments);
        }
        e[t] = Oe(e.name || t, n.value);
    };
    function vt(e, t) {
        return Se(typeof e === "string" ? e : e.name || "<unnamed action>", typeof e === "function" ? e : t, this, undefined);
    }
    function mt(e) {
        return typeof e === "function" && e.isMobxAction === true;
    }
    function gt(e, t, n) {
        v(e, t, Oe(t, n.bind(e)));
    }
    function yt(e, t = a) {
        let n;
        const r = t && t.name || e.name || `Autorun@${s()}`;
        if (t.scheduler || t.delay) {
            const o = Ct(t);
            let i = false;
            n = new Xe(r, function() {
                if (!i) {
                    i = true;
                    o(function() {
                        i = false;
                        if (!n.isDisposed) {
                            n.track(l);
                        }
                    });
                }
            }, t.onError, t.requiresObservable);
        } else {
            n = new Xe(r, function() {
                this.track(l);
            }, t.onError, t.requiresObservable);
        }
        function l() {
            e(n);
        }
        n.schedule();
        return n.getDisposer();
    }
    ht.bound = function(e, t, n, r) {
        if (r === true) {
            gt(e, t, n.value);
            return null;
        }
        if (n) {
            return {
                configurable: true,
                enumerable: false,
                get: function() {
                    gt(this, t, n.value || n.initializer.call(this));
                    return this[t];
                },
                set
            };
        }
        return {
            enumerable: false,
            configurable: true,
            set: function(e) {
                gt(this, t, e);
            },
            get: function() {}
        };
    };
    var bt = function(e) {
        return e();
    };
    function Ct(e) {
        if (e.scheduler) {
            return e.scheduler;
        }
        if (e.delay) {
            return function(t) {
                return setTimeout(t, e.delay);
            };
        }
        return bt;
    }
    function wt(e, t, fireImmediately = a) {
        if (typeof fireImmediately === "boolean") {
            fireImmediately = {
                fireImmediately
            };
        }
        let r;
        let o;
        let i;
        const l = fireImmediately.name || `Reaction@${s()}`;
        const u = ht(l, fireImmediately.onError ? (r = fireImmediately.onError, o = t, function() {
            try {
                return o.apply(this, arguments);
            } catch (error) {
                r.call(this, error);
            }
        }) : t);
        const c = !fireImmediately.scheduler && !fireImmediately.delay;
        const f = Ct(fireImmediately);
        let d = true;
        let p = false;
        const h = fireImmediately.compareStructural ? H.structural : fireImmediately.equals || H.default;
        var v = new Xe(l, function() {
            if (d || c) {
                m();
            } else if (!p) {
                p = true;
                f(m);
            }
        }, fireImmediately.onError, fireImmediately.requiresObservable);
        function m() {
            p = false;
            if (!v.isDisposed) {
                let t = false;
                v.track(function() {
                    const n = e(v);
                    t = d || !h(i, n);
                    i = n;
                });
                if (d && fireImmediately.fireImmediately) {
                    u(i, v);
                }
                if (!(d || t !== true)) {
                    u(i, v);
                }
                if (d) {
                    d = false;
                }
            }
        }
        v.schedule();
        return v.getDisposer();
    }
    function _t(e, t, n) {
        return Mt("onBecomeObserved", e, t, n);
    }
    function xt(e, t, n) {
        return Mt("onBecomeUnobserved", e, t, n);
    }
    function Mt(e, t, n, r) {
        const o = typeof r === "function" ? Wn(t, n) : Wn(t);
        const a = typeof r === "function" ? r : n;
        const i = o[e];
        if (typeof i !== "function") {
            return u(false);
        }
        o[e] = function() {
            i.call(this);
            a.call(this);
        };
        return function() {
            o[e] = i;
        };
    }
    function Et(e) {
        const { enforceActions, computedRequiresReaction, computedConfigurable, disableErrorBoundaries, arrayBuffer, reactionScheduler, reactionRequiresObservable, observableRequiresReaction } = e;
        if (e.isolateGlobalState === true) {
            if (Fe.pendingReactions.length || Fe.inBatch || Fe.isRunningReactions) {
                u("isolateGlobalState should be called before MobX is running any reactions");
            }
            Ue = true;
            if (Be) {
                if (--l().__mobxInstanceCount == 0) {
                    l().__mobxGlobals = undefined;
                }
                Fe = new Ie;
            }
        }
        if (enforceActions !== undefined) {
            let f;
            switch(enforceActions){
                case true:
                case "observed":
                    f = true;
                    break;
                case false:
                case "never":
                    f = false;
                    break;
                case "strict":
                case "always":
                    f = "strict";
                    break;
                default:
                    u(`Invalid value for 'enforceActions': '${enforceActions}', expected 'never', 'always' or 'observed'`);
            }
            Fe.enforceActions = f;
            Fe.allowStateChanges = f !== true && f !== "strict";
        }
        if (computedRequiresReaction !== undefined) {
            Fe.computedRequiresReaction = !!computedRequiresReaction;
        }
        if (reactionRequiresObservable !== undefined) {
            Fe.reactionRequiresObservable = !!reactionRequiresObservable;
        }
        if (observableRequiresReaction !== undefined) {
            Fe.observableRequiresReaction = !!observableRequiresReaction;
            Fe.allowStateReads = !Fe.observableRequiresReaction;
        }
        if (computedConfigurable !== undefined) {
            Fe.computedConfigurable = !!computedConfigurable;
        }
        if (disableErrorBoundaries !== undefined) {
            if (disableErrorBoundaries === true) {
                console.warn("WARNING: Debug feature only. MobX will NOT recover from errors if this is on.");
            }
            Fe.disableErrorBoundaries = !!disableErrorBoundaries;
        }
        if (typeof arrayBuffer === "number") {
            Sn(arrayBuffer);
        }
        if (reactionScheduler) {
            ((reactionScheduler_1)=>{
                const t = tt;
                tt = function(n) {
                    return reactionScheduler_1(function() {
                        return t(n);
                    });
                };
            })(reactionScheduler);
        }
    }
    function kt(e, t) {
        const n = typeof e === "function" ? e.prototype : e;
        const r = (e)=>{
            let r = t[e];
            if (!Array.isArray(r)) {
                r = [
                    r
                ];
            }
            const o = Object.getOwnPropertyDescriptor(n, e);
            const a = r.reduce((acc, item)=>item(n, e, acc), o);
            if (a) {
                Object.defineProperty(n, e, a);
            }
        };
        for(const o in t){
            r(o);
        }
        return e;
    }
    function Ot(e, t, n) {
        return St(e, t, n, K);
    }
    function St(e, t, n, r) {
        const o = (r = J(r)).defaultDecorator || (r.deep === false ? ref : deep);
        F(e);
        Nn(e, r.name, o.enhancer);
        $e();
        try {
            const a = Object.getOwnPropertyNames(t);
            for(let i = 0, l = a.length; i < l; i++){
                const s = a[i];
                const u = Object.getOwnPropertyDescriptor(t, s);
                const c = (n && s in n ? n[s] : u.get ? se : o)(e, s, u, true);
                if (c) {
                    Object.defineProperty(e, s, c);
                }
            }
        } finally{
            Ke();
        }
        return e;
    }
    function Lt(e, t) {
        return zt(Wn(e, t));
    }
    function zt(e) {
        let t;
        let n;
        const r = {
            name: e.name
        };
        if (e.observing && e.observing.length > 0) {
            r.dependencies = (t = e.observing, n = [], t.forEach((e)=>{
                if (n.indexOf(e) === -1) {
                    n.push(e);
                }
            }), n).map(zt);
        }
        return r;
    }
    function Dt(e, t) {
        return Tt(Wn(e, t));
    }
    function Tt(e) {
        const t = {
            name: e.name
        };
        if (((e)=>e.observers && e.observers.length > 0)(e)) {
            t.observers = ((e)=>e.observers)(e).map(Tt);
        }
        return t;
    }
    var Vt = 0;
    function Ht() {
        this.message = "FLOW_CANCELLED";
    }
    function Pt(e) {
        return e instanceof Ht;
    }
    function At(e) {
        if (arguments.length !== 1) {
            u("Flow expects one 1 argument and cannot be used as decorator");
        }
        const t = e.name || "<unnamed flow>";
        return function() {
            let n;
            const _this = this;
            const o = arguments;
            const a = ++Vt;
            const i = ht(`${t} - runid: ${a} - init`, e).apply(_this, o);
            let l;
            const s = new Promise((resolve, reject)=>{
                let o = 0;
                function s(e) {
                    let n;
                    l = undefined;
                    try {
                        n = ht(`${t} - runid: ${a} - yield ${o++}`, i.next).call(i, e);
                    } catch (error) {
                        return reject(error);
                    }
                    c(n);
                }
                function u(e) {
                    let n;
                    l = undefined;
                    try {
                        n = ht(`${t} - runid: ${a} - yield ${o++}`, i.throw).call(i, e);
                    } catch (error) {
                        return reject(error);
                    }
                    c(n);
                }
                function c(t) {
                    if (!t || typeof t.then !== "function") {
                        if (t.done) {
                            return resolve(t.value);
                        }
                        return (l = Promise.resolve(t.value)).then(s, u);
                    }
                    t.then(c, reject);
                }
                n = reject;
                s(undefined);
            });
            s.cancel = ht(`${t} - runid: ${a} - cancel`, function() {
                try {
                    if (l) {
                        Rt(l);
                    }
                    const e = i.return(undefined);
                    const t = Promise.resolve(e.value);
                    t.then(d, d);
                    Rt(t);
                    n(new Ht);
                } catch (error) {
                    n(error);
                }
            });
            return s;
        };
    }
    function Rt(e) {
        if (typeof e.cancel === "function") {
            e.cancel();
        }
    }
    function jt(e, t, n) {
        let r;
        if (Hn(e) || zn(e) || Ae(e)) {
            r = Gn(e);
        } else {
            if (!qn(e)) {
                return u(false);
            }
            if (typeof t !== "string") {
                return u(false);
            }
            r = Gn(e, t);
        }
        if (r.dehancer !== undefined) {
            return u(false);
        }
        r.dehancer = typeof t === "function" ? t : n;
        return function() {
            r.dehancer = undefined;
        };
    }
    function Nt(e, t, n) {
        if (typeof n === "function") {
            return ((e, t, n)=>Gn(e, t).intercept(n))(e, t, n);
        }
        return ((e, t)=>Gn(e).intercept(t))(e, t);
    }
    function It(e, t) {
        if (e == null) {
            return false;
        }
        if (t !== undefined) {
            if (qn(e) === false) {
                return false;
            }
            if (!e.$mobx.values[t]) {
                return false;
            }
            const n = Wn(e, t);
            return je(n);
        }
        return je(e);
    }
    function Bt(e) {
        if (arguments.length > 1) {
            return u(false);
        }
        return It(e);
    }
    function Ut(e, t) {
        if (typeof t !== "string") {
            return u(false);
        }
        return It(e, t);
    }
    function Ft(e, t) {
        if (e == null) {
            return false;
        }
        if (t !== undefined) {
            if (qn(e)) {
                const n = e.$mobx;
                return n.values && !!n.values[t];
            }
            return false;
        }
        return qn(e) || !!e.$mobx || D(e) || ot(e) || je(e);
    }
    function Zt(e) {
        if (arguments.length !== 1) {
            u(false);
        }
        return Ft(e);
    }
    function qt(e, t) {
        if (typeof t !== "string") {
            return u(false);
        }
        return Ft(e, t);
    }
    function Wt(e) {
        if (qn(e)) {
            return e.$mobx.getKeys();
        }
        if (Hn(e) || Rn(e)) {
            return w(e.keys());
        }
        if (zn(e)) {
            return e.map((e, t)=>t);
        }
        return u(false);
    }
    function Gt(e) {
        if (qn(e)) {
            return Wt(e).map((t)=>e[t]);
        }
        if (Hn(e)) {
            return Wt(e).map((t)=>e.get(t));
        }
        if (Rn(e)) {
            return w(e.values());
        }
        if (zn(e)) {
            return e.slice();
        }
        return u(false);
    }
    function Yt(e) {
        if (qn(e)) {
            return Wt(e).map((t)=>[
                    t,
                    e[t]
                ]);
        }
        if (Hn(e)) {
            return Wt(e).map((t)=>[
                    t,
                    e.get(t)
                ]);
        }
        if (Rn(e)) {
            return w(e.entries());
        }
        if (zn(e)) {
            return e.map((e, t)=>[
                    t,
                    e
                ]);
        }
        return u(false);
    }
    function $t(e, t, n) {
        if (arguments.length !== 2 || Rn(e)) {
            if (qn(e)) {
                const r = e.$mobx;
                const o = r.values[t];
                if (o) {
                    r.write(e, t, n);
                } else {
                    In(e, t, n, r.defaultEnhancer);
                }
            } else if (Hn(e)) {
                e.set(t, n);
            } else if (Rn(e)) {
                e.add(t);
            } else {
                if (!zn(e)) {
                    return u(false);
                }
                if (typeof t !== "number") {
                    t = parseInt(t, 10);
                }
                c(t >= 0, `Not a valid index: '${t}'`);
                $e();
                if (t >= e.length) {
                    e.length = t + 1;
                }
                e[t] = n;
                Ke();
            }
        } else {
            $e();
            const a = t;
            try {
                for(const i in a){
                    $t(e, i, a[i]);
                }
            } finally{
                Ke();
            }
        }
    }
    function Kt(e, t) {
        if (qn(e)) {
            e.$mobx.remove(t);
        } else if (Hn(e)) {
            e.delete(t);
        } else if (Rn(e)) {
            e.delete(t);
        } else {
            if (!zn(e)) {
                return u(false);
            }
            if (typeof t !== "number") {
                t = parseInt(t, 10);
            }
            c(t >= 0, `Not a valid index: '${t}'`);
            e.splice(t, 1);
        }
    }
    function Jt(e, t) {
        if (qn(e)) {
            const n = Gn(e);
            n.getKeys();
            return !!n.values[t];
        }
        if (Hn(e) || Rn(e)) {
            return e.has(t);
        }
        if (zn(e)) {
            return t >= 0 && t < e.length;
        }
        return u(false);
    }
    function Qt(e, t) {
        if (Jt(e, t)) {
            if (qn(e)) {
                return e[t];
            }
            if (Hn(e)) {
                return e.get(t);
            }
            if (zn(e)) {
                return e[t];
            }
            return u(false);
        }
    }
    function Xt(e, t, n, r) {
        if (typeof n === "function") {
            return ((e, t, n, r)=>Gn(e, t).observe(n, r))(e, t, n, r);
        }
        return ((e, t, n)=>Gn(e).observe(t, n))(e, t, n);
    }
    Ht.prototype = Object.create(Error.prototype);
    var en = {
        detectCycles: true,
        exportMapsAsObjects: true,
        recurseEverything: false
    };
    function tn(e, t, n, detectCycles) {
        if (detectCycles.detectCycles) {
            e.set(t, n);
        }
        return n;
    }
    function nn(e, detectCycles) {
        let n;
        if (typeof detectCycles === "boolean") {
            detectCycles = {
                detectCycles
            };
        }
        if (!detectCycles) {
            detectCycles = en;
        }
        detectCycles.detectCycles = detectCycles.detectCycles === undefined ? detectCycles.recurseEverything === true : detectCycles.detectCycles === true;
        if (detectCycles.detectCycles) {
            n = new Map;
        }
        return function e(t, detectCycles_1, r) {
            if (!detectCycles_1.recurseEverything && !Zt(t)) {
                return t;
            }
            if (typeof t !== "object") {
                return t;
            }
            if (t === null) {
                return null;
            }
            if (t instanceof Date) {
                return t;
            }
            if (Ae(t)) {
                return e(t.get(), detectCycles_1, r);
            }
            if (Zt(t)) {
                Wt(t);
            }
            if (detectCycles_1.detectCycles === true && t !== null && r.has(t)) {
                return r.get(t);
            }
            if (zn(t) || Array.isArray(t)) {
                const o = tn(r, t, [], detectCycles_1);
                const a = t.map((t)=>e(t, detectCycles_1, r));
                o.length = a.length;
                for(let i = 0, l = a.length; i < l; i++){
                    o[i] = a[i];
                }
                return o;
            }
            if (Rn(t) || Object.getPrototypeOf(t) === Set.prototype) {
                if (detectCycles_1.exportMapsAsObjects === false) {
                    const s = tn(r, t, new Set, detectCycles_1);
                    t.forEach((t)=>{
                        s.add(e(t, detectCycles_1, r));
                    });
                    return s;
                }
                const u = tn(r, t, [], detectCycles_1);
                t.forEach((t)=>{
                    u.push(e(t, detectCycles_1, r));
                });
                return u;
            }
            if (Hn(t) || Object.getPrototypeOf(t) === Map.prototype) {
                if (detectCycles_1.exportMapsAsObjects === false) {
                    const c = tn(r, t, new Map, detectCycles_1);
                    t.forEach((t, o)=>{
                        c.set(o, e(t, detectCycles_1, r));
                    });
                    return c;
                }
                const f = tn(r, t, {}, detectCycles_1);
                t.forEach((t, o)=>{
                    f[o] = e(t, detectCycles_1, r);
                });
                return f;
            }
            const d = tn(r, t, {}, detectCycles_1);
            for(const p in t){
                d[p] = e(t[p], detectCycles_1, r);
            }
            return d;
        }(e, detectCycles, n);
    }
    function rn(...e) {
        let n = false;
        if (typeof e[e.length - 1] === "boolean") {
            n = e.pop();
        }
        const r = on(e);
        if (!r) {
            return u(false);
        }
        if (r.isTracing === le.NONE) {
            console.log(`[mobx.trace] '${r.name}' tracing enabled`);
        }
        r.isTracing = n ? le.BREAK : le.LOG;
    }
    function on(e) {
        switch(e.length){
            case 0:
                return Fe.trackingDerivation;
            case 1:
                return Wn(e[0]);
            case 2:
                return Wn(e[0], e[1]);
        }
    }
    function an(e, t = undefined) {
        $e();
        try {
            return e.apply(t);
        } finally{
            Ke();
        }
    }
    function ln(e, t, n) {
        if (arguments.length === 1 || t && typeof t === "object") {
            return un(e, t);
        }
        return sn(e, t, n || {});
    }
    function sn(e, t, n) {
        let r;
        if (typeof n.timeout === "number") {
            r = setTimeout(()=>{
                if (!a.$mobx.isDisposed) {
                    a();
                    const e = new Error("WHEN_TIMEOUT");
                    if (!n.onError) {
                        throw e;
                    }
                    n.onError(e);
                }
            }, n.timeout);
        }
        n.name = n.name || `When@${s()}`;
        const o = Oe(`${n.name}-effect`, t);
        var a = yt(function(t) {
            if (e()) {
                t.dispose();
                if (r) {
                    clearTimeout(r);
                }
                o();
            }
        }, n);
        return a;
    }
    function un(e, t) {
        let n;
        const r = new Promise((resolve, onError)=>{
            const a = sn(e, resolve, R(R({}, t), {
                onError
            }));
            n = function() {
                a();
                onError("WHEN_CANCELLED");
            };
        });
        r.cancel = n;
        return r;
    }
    function cn(e) {
        return e.interceptors !== undefined && e.interceptors.length > 0;
    }
    function fn(e, t) {
        const n = e.interceptors || (e.interceptors = []);
        n.push(t);
        return f(()=>{
            const e = n.indexOf(t);
            if (e !== -1) {
                n.splice(e, 1);
            }
        });
    }
    function dn(e, t) {
        const n = be();
        try {
            const r = e.interceptors;
            if (r) {
                for(let o = 0, a = r.length; o < a && (c(!(t = r[o](t)) || t.type, "Intercept handlers should return nothing or a change object"), t); o++);
            }
            return t;
        } finally{
            Ce(n);
        }
    }
    function pn(e) {
        return e.changeListeners !== undefined && e.changeListeners.length > 0;
    }
    function hn(e, t) {
        const n = e.changeListeners || (e.changeListeners = []);
        n.push(t);
        return f(()=>{
            const e = n.indexOf(t);
            if (e !== -1) {
                n.splice(e, 1);
            }
        });
    }
    function vn(e, t) {
        const n = be();
        let e_changeListeners = e.changeListeners;
        if (e_changeListeners) {
            for(let o = 0, a = (e_changeListeners = e_changeListeners.slice()).length; o < a; o++){
                e_changeListeners[o](t);
            }
            Ce(n);
        }
    }
    let gn;
    let yn;
    let bn;
    let mn = false;
    gn = {};
    Object.defineProperty(gn, "0", {
        set: function() {
            mn = true;
        }
    });
    Object.create(gn)[0] = 1;
    const Cn = mn === false;
    var wn = 0;
    const _n = function() {};
    yn = _n;
    bn = Array.prototype;
    if (Object.setPrototypeOf !== undefined) {
        Object.setPrototypeOf(yn.prototype, bn);
    } else if (yn.prototype.__proto__ !== undefined) {
        yn.prototype.__proto__ = bn;
    } else {
        yn.prototype = bn;
    }
    if (Object.isFrozen(Array)) {
        [
            "constructor",
            "push",
            "shift",
            "concat",
            "pop",
            "unshift",
            "replace",
            "find",
            "findIndex",
            "splice",
            "reverse",
            "sort"
        ].forEach((e)=>{
            Object.defineProperty(_n.prototype, e, {
                configurable: true,
                writable: true,
                value: Array.prototype[e]
            });
        });
    }
    class xn {
        constructor(e, t, n, r){
            this.array = n;
            this.owned = r;
            this.values = [];
            this.lastKnownLength = 0;
            this.atom = new z(e || `ObservableArray@${s()}`);
            this.enhancer = function(n, r) {
                return t(n, r, `${e}[..]`);
            };
        }
        dehanceValue(e) {
            if (this.dehancer !== undefined) {
                return this.dehancer(e);
            }
            return e;
        }
        dehanceValues(e) {
            if (this.dehancer !== undefined && e.length > 0) {
                return e.map(this.dehancer);
            }
            return e;
        }
        intercept(e) {
            return fn(this, e);
        }
        observe(e, t = false) {
            if (t) {
                e({
                    object: this.array,
                    type: "splice",
                    index: 0,
                    added: this.values.slice(),
                    addedCount: this.values.length,
                    removed: [],
                    removedCount: 0
                });
            }
            return hn(this, e);
        }
        getArrayLength() {
            this.atom.reportObserved();
            return this.values.length;
        }
        setArrayLength(e) {
            if (typeof e !== "number" || e < 0) {
                throw new Error(`[mobx.array] Out of range: ${e}`);
            }
            const length = this.values.length;
            if (e !== length) {
                if (e > length) {
                    const n = new Array(e - length);
                    for(let r = 0; r < e - length; r++){
                        n[r] = undefined;
                    }
                    this.spliceWithArray(length, 0, n);
                } else {
                    this.spliceWithArray(e, length - e);
                }
            }
        }
        updateArrayLength(e, t) {
            if (e !== this.lastKnownLength) {
                throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
            }
            this.lastKnownLength += t;
            if (t > 0 && e + t + 1 > wn) {
                Sn(e + t + 1);
            }
        }
        spliceWithArray(e, removedCount, n) {
            const _this = this;
            ve(this.atom);
            const length = this.values.length;
            if (e === undefined) {
                e = 0;
            } else if (e > length) {
                e = length;
            } else if (e < 0) {
                e = Math.max(0, length + e);
            }
            removedCount = arguments.length === 1 ? length - e : removedCount == null ? 0 : Math.max(0, Math.min(removedCount, length - e));
            if (n === undefined) {
                n = o;
            }
            if (cn(this)) {
                const i = dn(this, {
                    object: this.array,
                    type: "splice",
                    index: e,
                    removedCount,
                    added: n
                });
                if (!i) {
                    return o;
                }
                removedCount = i.removedCount;
                n = i.added;
            }
            const l = (n = n.length === 0 ? n : n.map((e)=>_this.enhancer(e, undefined))).length - removedCount;
            this.updateArrayLength(length, l);
            const s = this.spliceItemsIntoValues(e, removedCount, n);
            if (!(removedCount === 0 && n.length === 0)) {
                this.notifyArraySplice(e, n, s);
            }
            return this.dehanceValues(s);
        }
        spliceItemsIntoValues(e, t, n) {
            let r;
            if (n.length < 10000) {
                return (r = this.values).splice.apply(r, N([
                    e,
                    t
                ], n));
            }
            const o = this.values.slice(e, e + t);
            this.values = this.values.slice(0, e).concat(n, this.values.slice(e + t));
            return o;
        }
        notifyArrayChildUpdate(e, t, n) {
            const r = !this.owned && at();
            const o = pn(this);
            const a = o || r ? {
                object: this.array,
                type: "update",
                index: e,
                newValue: t,
                oldValue: n
            } : null;
            if (r) {
                lt(R(R({}, a), {
                    name: this.atom.name
                }));
            }
            this.atom.reportChanged();
            if (o) {
                vn(this, a);
            }
            if (r) {
                ut();
            }
        }
        notifyArraySplice(e, t, removed) {
            const r = !this.owned && at();
            const o = pn(this);
            const a = o || r ? {
                object: this.array,
                type: "splice",
                index: e,
                removed,
                added: t,
                removedCount: removed.length,
                addedCount: t.length
            } : null;
            if (r) {
                lt(R(R({}, a), {
                    name: this.atom.name
                }));
            }
            this.atom.reportChanged();
            if (o) {
                vn(this, a);
            }
            if (r) {
                ut();
            }
        }
    }
    var Mn = ((e)=>{
        function t(t, n, r = `ObservableArray@${s()}`, o = false) {
            const a = e.call(this) || this;
            const i = new xn(r, n, a, o);
            m(a, "$mobx", i);
            if (t && t.length) {
                const l = Te(true);
                a.spliceWithArray(0, 0, t);
                Ve(l);
            }
            if (Cn) {
                Object.defineProperty(i.array, "0", En);
            }
            return a;
        }
        A(t, e);
        t.prototype.intercept = function(e) {
            return this.$mobx.intercept(e);
        };
        t.prototype.observe = function(e, t = false) {
            return this.$mobx.observe(e, t);
        };
        t.prototype.clear = function() {
            return this.splice(0);
        };
        t.prototype.concat = function(...e_1) {
            this.$mobx.atom.reportObserved();
            return Array.prototype.concat.apply(this.peek(), e_1.map((e)=>{
                if (zn(e)) {
                    return e.peek();
                }
                return e;
            }));
        };
        t.prototype.replace = function(e) {
            return this.$mobx.spliceWithArray(0, this.$mobx.values.length, e);
        };
        t.prototype.toJS = function() {
            return this.slice();
        };
        t.prototype.toJSON = function() {
            return this.toJS();
        };
        t.prototype.peek = function() {
            this.$mobx.atom.reportObserved();
            return this.$mobx.dehanceValues(this.$mobx.values);
        };
        t.prototype.find = function(e, t, n = 0) {
            const r = this.findIndex(...arguments);
            if (r === -1) {
                return undefined;
            }
            return this.get(r);
        };
        t.prototype.findIndex = function(e, t, n = 0) {
            const r = this.peek();
            for(let o = r.length, a = n; a < o; a++){
                if (e.call(t, r[a], a, this)) {
                    return a;
                }
            }
            return -1;
        };
        t.prototype.splice = function(e, t) {
            const n = [];
            for(let r = 2; r < arguments.length; r++){
                n[r - 2] = arguments[r];
            }
            switch(arguments.length){
                case 0:
                    return [];
                case 1:
                    return this.$mobx.spliceWithArray(e);
                case 2:
                    return this.$mobx.spliceWithArray(e, t);
            }
            return this.$mobx.spliceWithArray(e, t, n);
        };
        t.prototype.spliceWithArray = function(e, t, n) {
            return this.$mobx.spliceWithArray(e, t, n);
        };
        t.prototype.push = function(...e) {
            const $mobx = this.$mobx;
            $mobx.spliceWithArray($mobx.values.length, 0, e);
            return $mobx.values.length;
        };
        t.prototype.pop = function() {
            return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
        };
        t.prototype.shift = function() {
            return this.splice(0, 1)[0];
        };
        t.prototype.unshift = function(...e) {
            const $mobx = this.$mobx;
            $mobx.spliceWithArray(0, 0, e);
            return $mobx.values.length;
        };
        t.prototype.reverse = function() {
            const e = this.slice();
            return e.reverse(...arguments);
        };
        t.prototype.sort = function(e) {
            const t = this.slice();
            return t.sort(...arguments);
        };
        t.prototype.remove = function(e) {
            const t = this.$mobx.dehanceValues(this.$mobx.values).indexOf(e);
            return t > -1 && (this.splice(t, 1), true);
        };
        t.prototype.move = function(e, t) {
            function n(e) {
                if (e < 0) {
                    throw new Error(`[mobx.array] Index out of bounds: ${e} is negative`);
                }
                const length = this.$mobx.values.length;
                if (e >= length) {
                    throw new Error(`[mobx.array] Index out of bounds: ${e} is not smaller than ${length}`);
                }
            }
            n.call(this, e);
            n.call(this, t);
            if (e !== t) {
                let r;
                const o = this.$mobx.values;
                r = e < t ? N(o.slice(0, e), o.slice(e + 1, t + 1), [
                    o[e]
                ], o.slice(t + 1)) : N(o.slice(0, t), [
                    o[e]
                ], o.slice(t, e), o.slice(e + 1));
                this.replace(r);
            }
        };
        t.prototype.get = function(e) {
            const $mobx = this.$mobx;
            if ($mobx) {
                if (e < $mobx.values.length) {
                    $mobx.atom.reportObserved();
                    return $mobx.dehanceValue($mobx.values[e]);
                }
                console.warn(`[mobx.array] Attempt to read an array index (${e}) that is out of bounds (${$mobx.values.length}). Please check length first. Out of bound indices will not be tracked by MobX`);
            }
        };
        t.prototype.set = function(e, t) {
            const $mobx = this.$mobx;
            const n_values = $mobx.values;
            if (e < n_values.length) {
                ve($mobx.atom);
                const o = n_values[e];
                if (cn($mobx)) {
                    const a = dn($mobx, {
                        type: "update",
                        object: this,
                        index: e,
                        newValue: t
                    });
                    if (!a) {
                        return;
                    }
                    t = a.newValue;
                }
                if ((t = $mobx.enhancer(t, o)) !== o) {
                    n_values[e] = t;
                    $mobx.notifyArrayChildUpdate(e, t, o);
                }
            } else {
                if (e !== n_values.length) {
                    throw new Error(`[mobx.array] Index out of bounds, ${e} is larger than ${n_values.length}`);
                }
                $mobx.spliceWithArray(e, 0, [
                    t
                ]);
            }
        };
        return t;
    })(_n);
    k(Mn.prototype, function() {
        this.$mobx.atom.reportObserved();
        const _this = this;
        let t = 0;
        return O({
            next: function() {
                if (t < _this.length) {
                    return {
                        value: _this[t++],
                        done: false
                    };
                }
                return {
                    done: true,
                    value: undefined
                };
            }
        });
    });
    Object.defineProperty(Mn.prototype, "length", {
        enumerable: false,
        configurable: true,
        get: function() {
            return this.$mobx.getArrayLength();
        },
        set: function(e) {
            this.$mobx.setArrayLength(e);
        }
    });
    v(Mn.prototype, S(), "Array");
    [
        "indexOf",
        "join",
        "lastIndexOf",
        "slice",
        "toString",
        "toLocaleString"
    ].forEach((e)=>{
        const t = Array.prototype[e];
        c(typeof t === "function", `Base function not defined on Array prototype: '${e}'`);
        v(Mn.prototype, e, function() {
            return t.apply(this.peek(), arguments);
        });
    });
    [
        "every",
        "filter",
        "forEach",
        "map",
        "some"
    ].forEach((e)=>{
        c(typeof Array.prototype[e] === "function", `Base function not defined on Array prototype: '${e}'`);
        v(Mn.prototype, e, function(t, n) {
            const _this = this;
            const $mobx = this.$mobx;
            $mobx.atom.reportObserved();
            return $mobx.dehanceValues($mobx.values)[e](function(e, o) {
                return t.call(n, e, o, _this);
            }, n);
        });
    });
    [
        "reduce",
        "reduceRight"
    ].forEach((e)=>{
        v(Mn.prototype, e, function(r) {
            const _this = this;
            const $mobx = this.$mobx;
            $mobx.atom.reportObserved();
            arguments[0] = function(e, o, a) {
                o = $mobx.dehanceValue(o);
                return r(e, o, a, _this);
            };
            return $mobx.values[e].apply($mobx.values, arguments);
        });
    });
    ((e, t)=>{
        for(let n = 0; n < t.length; n++){
            v(e, t[n], e[t[n]]);
        }
    })(Mn.prototype, [
        "constructor",
        "intercept",
        "observe",
        "clear",
        "concat",
        "get",
        "replace",
        "toJS",
        "toJSON",
        "peek",
        "find",
        "findIndex",
        "splice",
        "spliceWithArray",
        "push",
        "pop",
        "set",
        "shift",
        "unshift",
        "reverse",
        "sort",
        "remove",
        "move",
        "toString",
        "toLocaleString"
    ]);
    var En = kn(0);
    function kn(e) {
        return {
            enumerable: false,
            configurable: false,
            get: function() {
                return this.get(e);
            },
            set: function(t) {
                this.set(e, t);
            }
        };
    }
    function On(e) {
        Object.defineProperty(Mn.prototype, `${e}`, kn(e));
    }
    function Sn(e) {
        for(let t = wn; t < e; t++){
            On(t);
        }
        wn = e;
    }
    Sn(1000);
    var Ln = g("ObservableArrayAdministration", xn);
    function zn(e) {
        return p(e) && Ln(e.$mobx);
    }
    const Dn = {};
    class Tn {
        constructor(e, t = W, n = `ObservableMap@${s()}`){
            this.enhancer = t;
            this.name = n;
            this.$mobx = Dn;
            this._keysAtom = T(`${this.name}.keys()`);
            if (typeof Map !== "function") {
                throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
            }
            this._data = new Map;
            this._hasMap = new Map;
            this.merge(e);
        }
        _has(e) {
            return this._data.has(e);
        }
        has(e) {
            const _this = this;
            if (!Fe.trackingDerivation) {
                return this._has(e);
            }
            let n = this._hasMap.get(e);
            if (!n) {
                const r = n = new Pe(this._has(e), G, `${this.name}.${Vn(e)}?`, false);
                this._hasMap.set(e, r);
                xt(r, function() {
                    return _this._hasMap.delete(e);
                });
            }
            return n.get();
        }
        set(e, t) {
            const n = this._has(e);
            if (cn(this)) {
                const r = dn(this, {
                    type: n ? "update" : "add",
                    object: this,
                    newValue: t,
                    name: e
                });
                if (!r) {
                    return this;
                }
                t = r.newValue;
            }
            if (n) {
                this._updateValue(e, t);
            } else {
                this._addValue(e, t);
            }
            return this;
        }
        delete(e) {
            const _this = this;
            ve(this._keysAtom);
            if (cn(this) && !(o = dn(this, {
                type: "delete",
                object: this,
                name: e
            }))) {
                return false;
            }
            if (this._has(e)) {
                const n = at();
                const r = pn(this);
                var o = r || n ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(e).value,
                    name: e
                } : null;
                if (n) {
                    lt(R(R({}, o), {
                        name: this.name,
                        key: e
                    }));
                }
                an(()=>{
                    _this._keysAtom.reportChanged();
                    _this._updateHasMapEntry(e, false);
                    _this._data.get(e).setNewValue(undefined);
                    _this._data.delete(e);
                });
                if (r) {
                    vn(this, o);
                }
                if (n) {
                    ut();
                }
                return true;
            }
            return false;
        }
        _updateHasMapEntry(e, t) {
            const n = this._hasMap.get(e);
            if (n) {
                n.setNewValue(t);
            }
        }
        _updateValue(e, t) {
            const n = this._data.get(e);
            if ((t = n.prepareNewValue(t)) !== Fe.UNCHANGED) {
                const r = at();
                const o = pn(this);
                const a = o || r ? {
                    type: "update",
                    object: this,
                    oldValue: n.value,
                    name: e,
                    newValue: t
                } : null;
                if (r) {
                    lt(R(R({}, a), {
                        name: this.name,
                        key: e
                    }));
                }
                n.setNewValue(t);
                if (o) {
                    vn(this, a);
                }
                if (r) {
                    ut();
                }
            }
        }
        _addValue(e, t) {
            const _this = this;
            ve(this._keysAtom);
            an(()=>{
                const r = new Pe(t, _this.enhancer, `${_this.name}.${Vn(e)}`, false);
                _this._data.set(e, r);
                t = r.value;
                _this._updateHasMapEntry(e, true);
                _this._keysAtom.reportChanged();
            });
            const r = at();
            const o = pn(this);
            const a = o || r ? {
                type: "add",
                object: this,
                name: e,
                newValue: t
            } : null;
            if (r) {
                lt(R(R({}, a), {
                    name: this.name,
                    key: e
                }));
            }
            if (o) {
                vn(this, a);
            }
            if (r) {
                ut();
            }
        }
        get(e) {
            if (this.has(e)) {
                return this.dehanceValue(this._data.get(e).get());
            }
            return this.dehanceValue(undefined);
        }
        dehanceValue(e) {
            if (this.dehancer !== undefined) {
                return this.dehancer(e);
            }
            return e;
        }
        keys() {
            this._keysAtom.reportObserved();
            return this._data.keys();
        }
        values() {
            const _this = this;
            const t = this.keys();
            return O({
                next: function() {
                    const n = t.next();
                    const { done, value } = n;
                    return {
                        done,
                        value: done ? undefined : _this.get(value)
                    };
                }
            });
        }
        entries() {
            const _this = this;
            const t = this.keys();
            return O({
                next: function() {
                    const n = t.next();
                    const { done, value } = n;
                    return {
                        done,
                        value: done ? undefined : [
                            value,
                            _this.get(value)
                        ]
                    };
                }
            });
        }
        forEach(e, t) {
            const _this = this;
            this._keysAtom.reportObserved();
            this._data.forEach((r, o)=>e.call(t, _this.get(o), o, _this));
        }
        merge(e) {
            const _this = this;
            if (Hn(e)) {
                e = e.toJS();
            }
            an(()=>{
                const n = Te(true);
                try {
                    if (h(e)) {
                        Object.keys(e).forEach((n)=>_this.set(n, e[n]));
                    } else if (Array.isArray(e)) {
                        e.forEach((e)=>{
                            const n = j(e, 2);
                            const r = n[0];
                            const o = n[1];
                            return _this.set(r, o);
                        });
                    } else if (b(e)) {
                        if (e.constructor !== Map) {
                            u(`Cannot initialize from classes that inherit from Map: ${e.constructor.name}`);
                        } else {
                            e.forEach((e, n)=>_this.set(n, e));
                        }
                    } else if (e != null) {
                        u(`Cannot initialize map from ${e}`);
                    }
                } finally{
                    Ve(n);
                }
            });
            return this;
        }
        clear() {
            const _this = this;
            an(()=>{
                ye(()=>{
                    _this._data.forEach((t, n)=>_this.delete(n));
                });
            });
        }
        replace(e) {
            const _this = this;
            an(()=>{
                const n = ((e)=>{
                    if (b(e) || Hn(e)) {
                        return e;
                    }
                    if (Array.isArray(e)) {
                        return new Map(e);
                    }
                    if (h(e)) {
                        const t = new Map;
                        for(const n in e){
                            t.set(n, e[n]);
                        }
                        return t;
                    }
                    return u(`Cannot convert to map from '${e}'`);
                })(e);
                const map = new Map;
                let o = false;
                M(_this._data.keys(), (e)=>{
                    if (!n.has(e)) {
                        if (_this.delete(e)) {
                            o = true;
                        } else {
                            const a = _this._data.get(e);
                            map.set(e, a);
                        }
                    }
                });
                M(n.entries(), (e)=>{
                    const n = j(e, 2);
                    const a = n[0];
                    const i = n[1];
                    const l = _this._data.has(a);
                    _this.set(a, i);
                    if (_this._data.has(a)) {
                        const s = _this._data.get(a);
                        map.set(a, s);
                        if (!l) {
                            o = true;
                        }
                    }
                });
                if (!o) {
                    if (_this._data.size !== map.size) {
                        _this._keysAtom.reportChanged();
                    } else {
                        const a = _this._data.keys();
                        const i = map.keys();
                        for(let l = a.next(), s = i.next(); !l.done;){
                            if (l.value !== s.value) {
                                _this._keysAtom.reportChanged();
                                break;
                            }
                            l = a.next();
                            s = i.next();
                        }
                    }
                }
                _this._data = map;
            });
            return this;
        }
        get size() {
            this._keysAtom.reportObserved();
            return this._data.size;
        }
        toPOJO() {
            const _this = this;
            const t = {};
            this.forEach((n, r)=>t[typeof r === "symbol" ? r : Vn(r)] = _this.get(r));
            return t;
        }
        toJS() {
            return new Map(this);
        }
        toJSON() {
            return this.toPOJO();
        }
        toString() {
            const _this = this;
            return `${this.name}[{ ${w(this.keys()).map((t)=>`${Vn(t)}: ${_this.get(t)}`).join(", ")} }]`;
        }
        observe(e, t) {
            return hn(this, e);
        }
        intercept(e) {
            return fn(this, e);
        }
    }
    function Vn(e) {
        if (e && e.toString) {
            return e.toString();
        }
        return new String(e).toString();
    }
    k(Tn.prototype, function() {
        return this.entries();
    });
    m(Tn.prototype, S(), "Map");
    var Hn = g("ObservableMap", Tn);
    const Pn = {};
    class An {
        constructor(e, t = W, n = `ObservableSet@${s()}`){
            this.name = n;
            this.$mobx = Pn;
            this._data = new Set;
            this._atom = T(this.name);
            if (typeof Set !== "function") {
                throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
            }
            this.enhancer = function(e, r) {
                return t(e, r, n);
            };
            if (e) {
                this.replace(e);
            }
        }
        dehanceValue(e) {
            if (this.dehancer !== undefined) {
                return this.dehancer(e);
            }
            return e;
        }
        clear() {
            const _this = this;
            an(()=>{
                ye(()=>{
                    _this._data.forEach((t)=>{
                        _this.delete(t);
                    });
                });
            });
        }
        forEach(e, t) {
            const _this = this;
            this._atom.reportObserved();
            this._data.forEach((r)=>{
                e.call(t, r, r, _this);
            });
        }
        get size() {
            this._atom.reportObserved();
            return this._data.size;
        }
        add(e) {
            const _this = this;
            ve(this._atom);
            if (cn(this) && !(o = dn(this, {
                type: "add",
                object: this,
                newValue: e
            }))) {
                return this;
            }
            if (!this.has(e)) {
                an(()=>{
                    _this._data.add(_this.enhancer(e, undefined));
                    _this._atom.reportChanged();
                });
                const n = at();
                const r = pn(this);
                var o = r || n ? {
                    type: "add",
                    object: this,
                    newValue: e
                } : null;
                if (r) {
                    vn(this, o);
                }
            }
            return this;
        }
        delete(e) {
            const _this = this;
            if (cn(this) && !(o = dn(this, {
                type: "delete",
                object: this,
                oldValue: e
            }))) {
                return false;
            }
            if (this.has(e)) {
                const n = at();
                const r = pn(this);
                var o = r || n ? {
                    type: "delete",
                    object: this,
                    oldValue: e
                } : null;
                an(()=>{
                    _this._atom.reportChanged();
                    _this._data.delete(e);
                });
                if (r) {
                    vn(this, o);
                }
                return true;
            }
            return false;
        }
        has(e) {
            this._atom.reportObserved();
            return this._data.has(this.dehanceValue(e));
        }
        entries() {
            let e = 0;
            const t = w(this.keys());
            const n = w(this.values());
            return O({
                next: function() {
                    const r = e;
                    e += 1;
                    if (r < n.length) {
                        return {
                            value: [
                                t[r],
                                n[r]
                            ],
                            done: false
                        };
                    }
                    return {
                        done: true
                    };
                }
            });
        }
        keys() {
            return this.values();
        }
        values() {
            this._atom.reportObserved();
            let e;
            const _this = this;
            let n = 0;
            if (this._data.values !== undefined) {
                e = w(this._data.values());
            } else {
                e = [];
                this._data.forEach((t)=>e.push(t));
            }
            return O({
                next: function() {
                    if (n < e.length) {
                        return {
                            value: _this.dehanceValue(e[n++]),
                            done: false
                        };
                    }
                    return {
                        done: true
                    };
                }
            });
        }
        replace(e) {
            const _this = this;
            if (Rn(e)) {
                e = e.toJS();
            }
            an(()=>{
                const n = Te(true);
                try {
                    if (Array.isArray(e) || C(e)) {
                        _this.clear();
                        e.forEach((e)=>_this.add(e));
                    } else if (e != null) {
                        u(`Cannot initialize set from ${e}`);
                    }
                } finally{
                    Ve(n);
                }
            });
            return this;
        }
        observe(e, t) {
            return hn(this, e);
        }
        intercept(e) {
            return fn(this, e);
        }
        toJS() {
            return new Set(this);
        }
        toString() {
            return `${this.name}[ ${w(this.keys()).join(", ")} ]`;
        }
    }
    k(An.prototype, function() {
        return this.values();
    });
    m(An.prototype, S(), "Set");
    var Rn = g("ObservableSet", An);
    class jn {
        constructor(e, t, n){
            this.target = e;
            this.name = t;
            this.defaultEnhancer = n;
            this.values = {};
        }
        read(e, t) {
            if (this.target === e || (this.illegalAccess(e, t), this.values[t])) {
                return this.values[t].get();
            }
        }
        write(e, t, n) {
            const target = this.target;
            if (target !== e) {
                this.illegalAccess(e, t);
            }
            const o = this.values[t];
            if (o instanceof Re) {
                o.set(n);
            } else {
                if (cn(this)) {
                    if (!(l = dn(this, {
                        type: "update",
                        object: target,
                        name: t,
                        newValue: n
                    }))) {
                        return;
                    }
                    n = l.newValue;
                }
                if ((n = o.prepareNewValue(n)) !== Fe.UNCHANGED) {
                    const a = pn(this);
                    const i = at();
                    var l = a || i ? {
                        type: "update",
                        object: target,
                        oldValue: o.value,
                        name: t,
                        newValue: n
                    } : null;
                    if (i) {
                        lt(R(R({}, l), {
                            name: this.name,
                            key: t
                        }));
                    }
                    o.setNewValue(n);
                    if (a) {
                        vn(this, l);
                    }
                    if (i) {
                        ut();
                    }
                }
            }
        }
        remove(e) {
            if (this.values[e]) {
                const t = this.target;
                if (cn(this) && !(a = dn(this, {
                    object: t,
                    name: e,
                    type: "remove"
                }))) {
                    return;
                }
                try {
                    $e();
                    const n = pn(this);
                    const r = at();
                    const o = this.values[e].get();
                    if (this.keys) {
                        this.keys.remove(e);
                    }
                    delete this.values[e];
                    delete this.target[e];
                    var a = n || r ? {
                        type: "remove",
                        object: t,
                        oldValue: o,
                        name: e
                    } : null;
                    if (r) {
                        lt(R(R({}, a), {
                            name: this.name,
                            key: e
                        }));
                    }
                    if (n) {
                        vn(this, a);
                    }
                    if (r) {
                        ut();
                    }
                } finally{
                    Ke();
                }
            }
        }
        illegalAccess(e, t) {
            console.warn(`Property '${t}' of '${e}' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner`);
        }
        observe(e, t) {
            return hn(this, e);
        }
        intercept(e) {
            return fn(this, e);
        }
        getKeys() {
            const _this = this;
            if (this.keys === undefined) {
                this.keys = new Mn(Object.keys(this.values).filter((t)=>_this.values[t] instanceof Pe), G, `keys(${this.name})`, true);
            }
            return this.keys.slice();
        }
    }
    function Nn(e, t = "", n = W) {
        let e_$mobx = e.$mobx;
        return e_$mobx || (h(e) || (t = `${e.constructor.name || "ObservableObject"}@${s()}`), t || (t = `ObservableObject@${s()}`), m(e, "$mobx", e_$mobx = new jn(e, t, n)), e_$mobx);
    }
    function In(e, t, n, r) {
        const o = Nn(e);
        if (cn(o)) {
            const a = dn(o, {
                object: e,
                name: t,
                type: "add",
                newValue: n
            });
            if (!a) {
                return;
            }
            n = a.newValue;
        }
        n = (o.values[t] = new Pe(n, r, `${o.name}.${t}`, false)).value;
        Object.defineProperty(e, t, ((e)=>Bn[e] || (Bn[e] = {
                configurable: true,
                enumerable: true,
                get: function() {
                    return this.$mobx.read(this, e);
                },
                set: function(t) {
                    this.$mobx.write(this, e, t);
                }
            }))(t));
        if (o.keys) {
            o.keys.push(t);
        }
        ((e, t, n, r)=>{
            const o = pn(e);
            const a = at();
            const i = o || a ? {
                type: "add",
                object: t,
                name: n,
                newValue: r
            } : null;
            if (a) {
                lt(R(R({}, i), {
                    name: e.name,
                    key: n
                }));
            }
            if (o) {
                vn(e, i);
            }
            if (a) {
                ut();
            }
        })(o, e, t, n);
    }
    var Bn = Object.create(null);
    var Un = Object.create(null);
    function Fn(e) {
        return e.$mobx || (F(e), e.$mobx);
    }
    var Zn = g("ObservableObjectAdministration", jn);
    function qn(e) {
        return !!p(e) && (F(e), Zn(e.$mobx));
    }
    function Wn(e, t) {
        if (typeof e === "object" && e !== null) {
            if (zn(e)) {
                if (t !== undefined) {
                    u(false);
                }
                return e.$mobx.atom;
            }
            if (Rn(e)) {
                return e.$mobx;
            }
            if (Hn(e)) {
                const n = e;
                if (t === undefined) {
                    return n._keysAtom;
                }
                if (!(r = n._data.get(t) || n._hasMap.get(t))) {
                    u(false);
                }
                return r;
            }
            var r;
            F(e);
            t && !e.$mobx && e[t];
            if (qn(e)) {
                if (t) {
                    if (!(r = e.$mobx.values[t])) {
                        u(false);
                    }
                    return r;
                }
                return u(false);
            }
            if (D(e) || je(e) || ot(e)) {
                return e;
            }
        } else if (typeof e === "function" && ot(e.$mobx)) {
            return e.$mobx;
        }
        return u(false);
    }
    function Gn(e, t) {
        if (!e) {
            u("Expecting some object");
        }
        if (t !== undefined) {
            return Gn(Wn(e, t));
        }
        if (D(e) || je(e) || ot(e) || Hn(e) || Rn(e)) {
            return e;
        }
        F(e);
        if (e.$mobx) {
            return e.$mobx;
        }
        return void u(false);
    }
    function getDebugName(e, t) {
        return (t !== undefined ? Wn(e, t) : qn(e) || Hn(e) || Rn(e) ? Gn(e) : Wn(e)).name;
    }
    var toString = Object.prototype.toString;
    function Kn(e, t, n = -1) {
        return function e(t, n, r, o, a) {
            if (t === n) {
                return t !== 0 || 1 / t == 1 / n;
            }
            if (t == null || n == null) {
                return false;
            }
            if (t != t) {
                return n != n;
            }
            const i = typeof t;
            if (i !== "function" && i !== "object" && typeof n !== "object") {
                return false;
            }
            t = Jn(t);
            n = Jn(n);
            const l = toString.call(t);
            if (l !== toString.call(n)) {
                return false;
            }
            switch(l){
                case "[object RegExp]":
                case "[object String]":
                    return `${t}` == `${n}`;
                case "[object Number]":
                    if (+t != +t) {
                        return +n != +n;
                    }
                    if (+t == 0) {
                        return 1 / +t == 1 / n;
                    }
                    return +t == +n;
                case "[object Date]":
                case "[object Boolean]":
                    return +t == +n;
                case "[object Symbol]":
                    return typeof Symbol !== "undefined" && Symbol.valueOf.call(t) === Symbol.valueOf.call(n);
            }
            const s = l === "[object Array]";
            if (!s) {
                if (typeof t !== "object" || typeof n !== "object") {
                    return false;
                }
                const u = t.constructor;
                const c = n.constructor;
                if (u !== c && !(typeof u === "function" && u instanceof u && typeof c === "function" && c instanceof c) && "constructor" in t && "constructor" in n) {
                    return false;
                }
            }
            if (r === 0) {
                return false;
            }
            if (r < 0) {
                r = -1;
            }
            a = a || [];
            for(var f = (o = o || []).length; f--;){
                if (o[f] === t) {
                    return a[f] === n;
                }
            }
            o.push(t);
            a.push(n);
            if (s) {
                if ((f = t.length) !== n.length) {
                    return false;
                }
                while(f--){
                    if (!e(t[f], n[f], r - 1, o, a)) {
                        return false;
                    }
                }
            } else {
                const d = Object.keys(t);
                let p;
                f = d.length;
                if (Object.keys(n).length !== f) {
                    return false;
                }
                while(f--){
                    if (!Qn(n, p = d[f]) || !e(t[p], n[p], r - 1, o, a)) {
                        return false;
                    }
                }
            }
            o.pop();
            a.pop();
            return true;
        }(e, t, n);
    }
    function Jn(e) {
        if (zn(e)) {
            return e.peek();
        }
        if (b(e) || Hn(e) || C(e) || Rn(e)) {
            return w(e.entries());
        }
        return e;
    }
    function Qn(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }
    var Xn = "$mobx";
    if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy,
            extras: {
                getDebugName
            },
            $mobx: Xn
        });
    }
}).call(this, require("./module-69.js").default, require("./module-257.js").default);
