import assign from "./module-287.js";
let o = 60103;
let a = 60106;
export let Fragment = 60107;
export let StrictMode = 60108;
export let Profiler = 60114;
let i = 60109;
let l = 60110;
let s = 60112;
export let Suspense = 60113;
let u = 60115;
let c = 60116;
if (typeof Symbol === "function" && Symbol.for) {
    o = Symbol.for("react.element");
    a = Symbol.for("react.portal");
    Fragment = Symbol.for("react.fragment");
    StrictMode = Symbol.for("react.strict_mode");
    Profiler = Symbol.for("react.profiler");
    i = Symbol.for("react.provider");
    l = Symbol.for("react.context");
    s = Symbol.for("react.forward_ref");
    Suspense = Symbol.for("react.suspense");
    u = Symbol.for("react.memo");
    c = Symbol.for("react.lazy");
}
const d = typeof Symbol === "function" && Symbol.iterator;
function p(e) {
    let t = `https://reactjs.org/docs/error-decoder.html?invariant=${e}`;
    for(let n = 1; n < arguments.length; n++){
        t += `&args[]=${encodeURIComponent(arguments[n])}`;
    }
    return `Minified React error #${e}; visit ${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
}
const h = {
    isMounted: function() {
        return false;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
};
const v = {};
export function Component(e, t, n) {
    this.props = e;
    this.context = t;
    this.refs = v;
    this.updater = n || h;
}
function g() {}
export function PureComponent(e, t, n) {
    this.props = e;
    this.context = t;
    this.refs = v;
    this.updater = n || h;
}
Component.prototype.isReactComponent = {};
Component.prototype.setState = function(e, t) {
    if (typeof e !== "object" && typeof e !== "function" && e != null) {
        throw Error(p(85));
    }
    this.updater.enqueueSetState(this, e, t, "setState");
};
Component.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
g.prototype = Component.prototype;
const b = PureComponent.prototype = new g;
b.constructor = PureComponent;
assign(b, Component.prototype);
b.isPureReactComponent = true;
const ReactCurrentOwner = {
    current: null
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const _ = {
    key: true,
    ref: true,
    __self: true,
    __source: true
};
export function createElement(e, t, n) {
    let r;
    const a = {};
    let i = null;
    let ref = null;
    if (t != null) {
        if (t.ref !== undefined) {
            ref = t.ref;
        }
        if (t.key !== undefined) {
            i = `${t.key}`;
        }
        for(r in t){
            if (hasOwnProperty.call(t, r) && !_.hasOwnProperty(r)) {
                a[r] = t[r];
            }
        }
    }
    let s = arguments.length - 2;
    if (s === 1) {
        a.children = n;
    } else if (s > 1) {
        const u = Array(s);
        for(let c = 0; c < s; c++){
            u[c] = arguments[c + 2];
        }
        a.children = u;
    }
    if (e && e.defaultProps) {
        for(r in s = e.defaultProps){
            if (a[r] === undefined) {
                a[r] = s[r];
            }
        }
    }
    return {
        $$typeof: o,
        type: e,
        key: i,
        ref,
        props: a,
        _owner: ReactCurrentOwner.current
    };
}
export function isValidElement(e) {
    return typeof e === "object" && e !== null && e.$$typeof === o;
}
const E = /\/+/g;
function k(e, t) {
    if (typeof e === "object" && e !== null && e.key != null) {
        return ((e)=>{
            const t = {
                "=": "=0",
                ":": "=2"
            };
            return `\$${e.replace(/[=:]/g, (e)=>t[e])}`;
        })(`${e.key}`);
    }
    return t.toString(36);
}
function O(e, t, n, r, i) {
    let l = typeof e;
    if (!(l !== "undefined" && l !== "boolean")) {
        e = null;
    }
    let s = false;
    if (e === null) {
        s = true;
    } else {
        switch(l){
            case "string":
            case "number":
                s = true;
                break;
            case "object":
                switch(e.$$typeof){
                    case o:
                    case a:
                        s = true;
                }
        }
    }
    if (s) {
        i = i(s = e);
        e = r === "" ? `.${k(s, 0)}` : r;
        if (Array.isArray(i)) {
            n = "";
            if (e != null) {
                n = `${e.replace(E, "$&/")}/`;
            }
            O(i, t, n, "", function(e) {
                return e;
            });
        } else if (i != null) {
            if (isValidElement(i)) {
                i = ((e, key)=>({
                        $$typeof: o,
                        type: e.type,
                        key,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }))(i, n + (!i.key || s && s.key === i.key ? "" : `${`${i.key}`.replace(E, "$&/")}/`) + e);
            }
            t.push(i);
        }
        return 1;
    }
    s = 0;
    r = r === "" ? "." : `${r}:`;
    if (Array.isArray(e)) {
        for(var u = 0; u < e.length; u++){
            var c = r + k(l = e[u], u);
            s += O(l, t, n, c, i);
        }
    } else if (typeof (c = ((e)=>{
        if (e === null || typeof e !== "object") {
            return null;
        }
        if (typeof (e = d && e[d] || e["@@iterator"]) === "function") {
            return e;
        }
        return null;
    })(e)) === "function") {
        e = c.call(e);
        for(u = 0; !(l = e.next()).done;){
            s += O(l = l.value, t, n, c = r + k(l, u++), i);
        }
    } else if (l === "object") {
        t = `${e}`;
        throw Error(p(31, t === "[object Object]" ? `object with keys {${Object.keys(e).join(", ")}}` : t));
    }
    return s;
}
function map(e, t, n) {
    if (e == null) {
        return e;
    }
    const r = [];
    let o = 0;
    O(e, r, "", "", function(e) {
        return t.call(n, e, o++);
    });
    return r;
}
function _init(e) {
    if (e._status === -1) {
        let t = e._result;
        t = t();
        e._status = 0;
        e._result = t;
        t.then((t)=>{
            if (e._status === 0) {
                t = t.default;
                e._status = 1;
                e._result = t;
            }
        }, (t)=>{
            if (e._status === 0) {
                e._status = 2;
                e._result = t;
            }
        });
    }
    if (e._status === 1) {
        return e._result;
    }
    throw e._result;
}
const ReactCurrentDispatcher = {
    current: null
};
function D() {
    const z_current = ReactCurrentDispatcher.current;
    if (z_current === null) {
        throw Error(p(321));
    }
    return z_current;
}
export const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
    ReactCurrentDispatcher,
    ReactCurrentBatchConfig: {
        transition: 0
    },
    ReactCurrentOwner,
    IsSomeRendererActing: {
        current: false
    },
    assign
};
export const Children = {
    map,
    forEach: function(e, t, n) {
        map(e, function() {
            t.apply(this, arguments);
        }, n);
    },
    count: function(e) {
        let t = 0;
        map(e, ()=>{
            t++;
        });
        return t;
    },
    toArray: function(e) {
        return map(e, (e)=>e) || [];
    },
    only: function(e) {
        if (!isValidElement(e)) {
            throw Error(p(143));
        }
        return e;
    }
};
export const cloneElement = function(e, t, n) {
    if (e == null) {
        throw Error(p(267, e));
    }
    const a = assign({}, e.props);
    let e_key = e.key;
    let e_ref = e.ref;
    let e__owner = e._owner;
    if (t != null) {
        if (t.ref !== undefined) {
            e_ref = t.ref;
            e__owner = ReactCurrentOwner.current;
        }
        if (t.key !== undefined) {
            e_key = `${t.key}`;
        }
        if (e.type && e.type.defaultProps) var u = e.type.defaultProps;
        for(c in t){
            if (hasOwnProperty.call(t, c) && !_.hasOwnProperty(c)) {
                a[c] = t[c] === undefined && u !== undefined ? u[c] : t[c];
            }
        }
    }
    var c = arguments.length - 2;
    if (c === 1) {
        a.children = n;
    } else if (c > 1) {
        u = Array(c);
        for(let f = 0; f < c; f++){
            u[f] = arguments[f + 2];
        }
        a.children = u;
    }
    return {
        $$typeof: o,
        type: e.type,
        key: e_key,
        ref: e_ref,
        props: a,
        _owner: e__owner
    };
};
export const createContext = function(e, _calculateChangedBits = null) {
    e = {
        $$typeof: l,
        _calculateChangedBits,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null
    };
    e.Provider = {
        $$typeof: i,
        _context: e
    };
    return e.Consumer = e;
};
export const createFactory = function(e) {
    const t = createElement.bind(null, e);
    t.type = e;
    return t;
};
export const createRef = function() {
    return {
        current: null
    };
};
export const forwardRef = function(render) {
    return {
        $$typeof: s,
        render
    };
};
export const lazy = function(_result) {
    return {
        $$typeof: c,
        _payload: {
            _status: -1,
            _result
        },
        _init
    };
};
export const memo = function(type, t) {
    return {
        $$typeof: u,
        type,
        compare: t === undefined ? null : t
    };
};
export const useCallback = function(e, t) {
    return D().useCallback(e, t);
};
export const useContext = function(e, t) {
    return D().useContext(e, t);
};
export const useDebugValue = function() {};
export const useEffect = function(e, t) {
    return D().useEffect(e, t);
};
export const useImperativeHandle = function(e, t, n) {
    return D().useImperativeHandle(e, t, n);
};
export const useLayoutEffect = function(e, t) {
    return D().useLayoutEffect(e, t);
};
export const useMemo = function(e, t) {
    return D().useMemo(e, t);
};
export const useReducer = function(e, t, n) {
    return D().useReducer(e, t, n);
};
export const useRef = function(e) {
    return D().useRef(e);
};
export const useState = function(e) {
    return D().useState(e);
};
export const version = "17.0.2";
