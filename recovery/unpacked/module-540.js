import module8 from "./module-8.js";
import module79 from "./module-79.js";
import module162 from "./module-162.js";
import module25 from "./module-25.js";
import module39 from "./module-39.js";
import module67 from "./module-67.js";
import module204 from "./module-204.js";
import module123 from "./module-123.js";
import module269 from "./module-269.js";
import module89 from "./module-89.js";
import module35 from "./module-35.js";
import module54 from "./module-54.js";
import module254 from "./module-254.js";
import module261 from "./module-261.js";
import module375 from "./module-375.js";
import module543 from "./module-543.js";
import module546 from "./module-546.js";
import module270 from "./module-270.js";
import module378 from "./module-378.js";
import module101 from "./module-101.js";
import module153 from "./module-153.js";
import module176 from "./module-176.js";
import module168 from "./module-168.js";
let r;
let o;
let a;
const module375_set = module375.set;
const { CONSTRUCTOR, REJECTION_EVENT, SUBCLASSING } = module176;
const T = module101.getterFor("Promise");
const module101_set = module101.set;
const H = module153 && module153.prototype;
let Promise = module153;
let A = H;
const { TypeError, document, process } = module25;
let I = module168.f;
const B = I;
const U = !!(document && document.createEvent && module25.dispatchEvent);
const F = (e)=>{
    let t;
    return !(!module54(e) || !module35(t = e.then)) && t;
};
const Z = (e, t)=>{
    let n;
    let r;
    let o;
    const t_value = t.value;
    const i = t.state === 1;
    const l = i ? e.ok : e.fail;
    const { resolve, reject, domain } = e;
    try {
        if (l) {
            if (!i) {
                if (t.rejection === 2) {
                    $(t);
                }
                t.rejection = 1;
            }
            if (l === true) {
                n = t_value;
            } else {
                if (domain) {
                    domain.enter();
                }
                n = l(t_value);
                if (domain) {
                    domain.exit();
                    o = true;
                }
            }
            if (n === e.promise) {
                reject(new TypeError("Promise-chain cycle"));
            } else if (r = F(n)) {
                module39(r, n, resolve, reject);
            } else {
                resolve(n);
            }
        } else {
            reject(t_value);
        }
    } catch (error) {
        if (domain && !o) {
            domain.exit();
        }
        reject(error);
    }
};
const q = (e, t)=>{
    if (!e.notified) {
        e.notified = true;
        module543(function() {
            let n;
            for(const r = e.reactions; n = r.get();){
                Z(n, e);
            }
            e.notified = false;
            if (t && !e.rejection) {
                G(e);
            }
        });
    }
};
const W = (e, promise, reason)=>{
    let r;
    let o;
    if (U) {
        r = document.createEvent("Event");
        r.promise = promise;
        r.reason = reason;
        r.initEvent(e, false, true);
        module25.dispatchEvent(r);
    } else {
        r = {
            promise,
            reason
        };
    }
    if (!REJECTION_EVENT && (o = module25[`on${e}`])) {
        o(r);
    } else if (e === "unhandledrejection") {
        module546("Unhandled promise rejection", reason);
    }
};
var G = (e)=>{
    module39(module375_set, module25, function() {
        let t;
        const { facade, value } = e;
        if (Y(e) && (t = module270(function() {
            if (module162) {
                process.emit("unhandledRejection", value, facade);
            } else {
                W("unhandledrejection", facade, value);
            }
        }), e.rejection = module162 || Y(e) ? 2 : 1, t.error)) {
            throw t.value;
        }
    });
};
var Y = (e)=>e.rejection !== 1 && !e.parent;
var $ = (e)=>{
    module39(module375_set, module25, function() {
        const e_facade = e.facade;
        if (module162) {
            process.emit("rejectionHandled", e_facade);
        } else {
            W("rejectionhandled", e_facade, e.value);
        }
    });
};
const K = (e, t, n)=>function(r) {
        e(t, r, n);
    };
const J = function(e, t, n) {
    if (!e.done) {
        e.done = true;
        if (n) {
            e = n;
        }
        e.value = t;
        e.state = 2;
        q(e, true);
    }
};
const Q = function(e, t, n) {
    if (!e.done) {
        e.done = true;
        if (n) {
            e = n;
        }
        try {
            if (e.facade === t) {
                throw new TypeError("Promise can't be resolved itself");
            }
            const r = F(t);
            if (r) {
                module543(function() {
                    const n = {
                        done: false
                    };
                    try {
                        module39(r, t, K(Q, n, e), K(J, n, e));
                    } catch (error) {
                        J(n, error, e);
                    }
                });
            } else {
                e.value = t;
                e.state = 1;
                q(e, false);
            }
        } catch (error) {
            J({
                done: false
            }, error, e);
        }
    }
};
if (CONSTRUCTOR && (A = (Promise = function(e) {
    module254(this, A);
    module89(e);
    module39(r, this);
    const t = T(this);
    try {
        e(K(Q, t), K(J, t));
    } catch (error) {
        J(t, error);
    }
}).prototype, (r = function(e) {
    module101_set(this, {
        type: "Promise",
        done: false,
        notified: false,
        parent: false,
        reactions: new module378,
        rejection: false,
        state: 0,
        value: undefined
    });
}).prototype = module67(A, "then", function(e, t) {
    const n = T(this);
    const r = I(module261(this, Promise));
    n.parent = true;
    r.ok = !module35(e) || e;
    r.fail = module35(t) && t;
    r.domain = module162 ? process.domain : undefined;
    if (n.state === 0) {
        n.reactions.add(r);
    } else {
        module543(function() {
            Z(r, n);
        });
    }
    return r.promise;
}), o = function() {
    const e = new r;
    const t = T(e);
    this.promise = e;
    this.resolve = K(Q, t);
    this.reject = K(J, t);
}, module168.f = I = function(e) {
    if (e === Promise || e === undefined) {
        return new o(e);
    }
    return B(e);
}, !module79 && module35(module153) && H !== Object.prototype)) {
    a = H.then;
    if (!SUBCLASSING) {
        module67(H, "then", function(e, t) {
            const _this = this;
            return new Promise(function(e, t) {
                module39(a, _this, e, t);
            }).then(e, t);
        }, {
            unsafe: true
        });
    }
    try {
        delete H.constructor;
    } catch (e) {}
    if (module204) {
        module204(H, A);
    }
}
module8({
    global: true,
    constructor: true,
    wrap: true,
    forced: CONSTRUCTOR
}, {
    Promise
});
module123(Promise, "Promise", false, true);
module269("Promise");
