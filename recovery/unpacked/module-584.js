import module8 from "./module-8.js";
import module25 from "./module-25.js";
import module39 from "./module-39.js";
import module21 from "./module-21.js";
import module79 from "./module-79.js";
import module33 from "./module-33.js";
import module151 from "./module-151.js";
import module19 from "./module-19.js";
import module53 from "./module-53.js";
import module107 from "./module-107.js";
import module50 from "./module-50.js";
import module90 from "./module-90.js";
import module266 from "./module-266.js";
import module46 from "./module-46.js";
import module143 from "./module-143.js";
import module114 from "./module-114.js";
import module175 from "./module-175.js";
import module150 from "./module-150.js";
import module350 from "./module-350.js";
import module221 from "./module-221.js";
import module115 from "./module-115.js";
import module70 from "./module-70.js";
import module288 from "./module-288.js";
import module218 from "./module-218.js";
import module67 from "./module-67.js";
import module113 from "./module-113.js";
import module152 from "./module-152.js";
import module220 from "./module-220.js";
import module173 from "./module-173.js";
import module212 from "./module-212.js";
import module40 from "./module-40.js";
import module382 from "./module-382.js";
import module383 from "./module-383.js";
import module585 from "./module-585.js";
import module123 from "./module-123.js";
import module101 from "./module-101.js";
import module112 from "./module-112.js";
const module112_forEach = module112.forEach;
const I = module220("hidden");
const module101_set = module101.set;
const U = module101.getterFor("Symbol");
let module25_Symbol = module25.Symbol;
let q = module25_Symbol && module25_Symbol.prototype;
const { RangeError, TypeError, QObject } = module25;
const $ = module115.f;
const K = module70.f;
const J = module350.f;
const Q = module218.f;
const X = module21([].push);
const ee = module152("symbols");
const te = module152("op-symbols");
const ne = module152("wks");
let re = !QObject || !QObject.prototype || !QObject.prototype.findChild;
const oe = function(e, t, n) {
    const r = $(Object.prototype, t);
    if (r) {
        delete Object.prototype[t];
    }
    K(e, t, n);
    if (r && e !== Object.prototype) {
        K(Object.prototype, t, r);
    }
};
const ae = module33 && module19(function() {
    return module114(K({}, "a", {
        get: function() {
            return K(this, "a", {
                value: 7
            }).a;
        }
    })).a !== 7;
}) ? oe : K;
const ie = (tag, description)=>{
    const n = ee[tag] = module114(q);
    module101_set(n, {
        type: "Symbol",
        tag,
        description
    });
    if (!module33) {
        n.description = description;
    }
    return n;
};
const defineProperty = function(e, t, n) {
    if (e === Object.prototype) {
        defineProperty(te, t, n);
    }
    module50(e);
    const r = module266(t);
    module50(n);
    if (module53(ee, r)) {
        if (n.enumerable) {
            if (module53(e, I) && e[I][r]) {
                e[I][r] = false;
            }
            n = module114(n, {
                enumerable: module143(0, false)
            });
        } else {
            if (!module53(e, I)) {
                K(e, I, module143(1, module114(null)));
            }
            e[I][r] = true;
        }
        return ae(e, r, n);
    }
    return K(e, r, n);
};
const defineProperties = function(e, t) {
    module50(e);
    const n = module90(t);
    const r = module175(n).concat(de(n));
    module112_forEach(r, function(t) {
        if (!(module33 && !module39(ue, n, t))) {
            defineProperty(e, t, n[t]);
        }
    });
    return e;
};
var ue = function(e) {
    const t = module266(e);
    const n = module39(Q, this, t);
    return !(this === Object.prototype && module53(ee, t) && !module53(te, t)) && (!(n || !module53(this, t) || !module53(ee, t) || module53(this, I) && this[I][t]) || n);
};
const getOwnPropertyDescriptor = function(e, t) {
    const n = module90(e);
    const r = module266(t);
    if (n !== Object.prototype || !module53(ee, r) || module53(te, r)) {
        const o = $(n, r);
        if (!(!o || !module53(ee, r) || module53(n, I) && n[I][r])) {
            o.enumerable = true;
        }
        return o;
    }
};
const getOwnPropertyNames = function(e) {
    const t = J(module90(e));
    const n = [];
    module112_forEach(t, function(e) {
        if (!(module53(ee, e) || module53(module173, e))) {
            X(n, e);
        }
    });
    return n;
};
var de = function(e) {
    const t = e === Object.prototype;
    const n = J(t ? te : module90(e));
    const r = [];
    module112_forEach(n, function(e) {
        if (!(!module53(ee, e) || t && !module53(Object.prototype, e))) {
            X(r, ee[e]);
        }
    });
    return r;
};
if (!module151) {
    module67(q = (module25_Symbol = function(...args) {
        if (module107(q, this)) {
            throw new TypeError("Symbol is not a constructor");
        }
        const e = args.length && args[0] !== undefined ? module46(args[0]) : undefined;
        const t = module212(e);
        const set = function(e) {
            const r = this === undefined ? module25 : this;
            if (r === Object.prototype) {
                module39(set, te, e);
            }
            if (module53(r, I) && module53(r[I], t)) {
                r[I][t] = false;
            }
            const i = module143(1, e);
            try {
                ae(r, t, i);
            } catch (error) {
                if (!(error instanceof RangeError)) {
                    throw error;
                }
                oe(r, t, i);
            }
        };
        if (module33 && re) {
            ae(Object.prototype, t, {
                configurable: true,
                set
            });
        }
        return ie(t, e);
    }).prototype, "toString", function() {
        return U(this).tag;
    });
    module67(module25_Symbol, "withoutSetter", function(e) {
        return ie(module212(e), e);
    });
    module218.f = ue;
    module70.f = defineProperty;
    module288.f = defineProperties;
    module115.f = getOwnPropertyDescriptor;
    module150.f = module350.f = getOwnPropertyNames;
    module221.f = de;
    module382.f = function(e) {
        return ie(module40(e), e);
    };
    if (module33) {
        module113(q, "description", {
            configurable: true,
            get: function() {
                return U(this).description;
            }
        });
        if (!module79) {
            module67(Object.prototype, "propertyIsEnumerable", ue, {
                unsafe: true
            });
        }
    }
}
module8({
    global: true,
    constructor: true,
    wrap: true,
    forced: !module151,
    sham: !module151
}, {
    Symbol: module25_Symbol
});
module112_forEach(module175(ne), function(e) {
    module383(e);
});
module8({
    target: "Symbol",
    stat: true,
    forced: !module151
}, {
    useSetter: function() {
        re = true;
    },
    useSimple: function() {
        re = false;
    }
});
module8({
    target: "Object",
    stat: true,
    forced: !module151,
    sham: !module33
}, {
    create: function(e, t) {
        if (t === undefined) {
            return module114(e);
        }
        return defineProperties(module114(e), t);
    },
    defineProperty,
    defineProperties,
    getOwnPropertyDescriptor
});
module8({
    target: "Object",
    stat: true,
    forced: !module151
}, {
    getOwnPropertyNames
});
module585();
module123(module25_Symbol, "Symbol");
module173[I] = true;
