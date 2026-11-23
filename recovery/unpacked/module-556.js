export let unstable_now;
export let unstable_shouldYield;
export let unstable_forceFrameRate;
let r;
let o;
let a;
let i;
if (typeof performance === "object" && typeof performance.now === "function") {
    const l = performance;
    unstable_now = function() {
        return l.now();
    };
} else {
    const u = Date.now();
    unstable_now = function() {
        return Date.now() - u;
    };
}
if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    let c = null;
    let f = null;
    const d = function() {
        if (c !== null) {
            try {
                const e = unstable_now();
                c(true, e);
                c = null;
            } catch (error) {
                setTimeout(d, 0);
                throw error;
            }
        }
    };
    r = function(e) {
        if (c !== null) {
            setTimeout(r, 0, e);
        } else {
            c = e;
            setTimeout(d, 0);
        }
    };
    o = function(e, t) {
        f = setTimeout(e, t);
    };
    a = function() {
        clearTimeout(f);
    };
    unstable_shouldYield = function() {
        return false;
    };
    i = unstable_forceFrameRate = function() {};
} else {
    const { setTimeout, clearTimeout } = window;
    if (typeof console !== "undefined") {
        const v = window.cancelAnimationFrame;
        if (typeof window.requestAnimationFrame !== "function") {
            console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
        }
        if (typeof v !== "function") {
            console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
        }
    }
    let m = false;
    let g = null;
    let y = -1;
    let b = 5;
    let C = 0;
    unstable_shouldYield = function() {
        return unstable_now() >= C;
    };
    i = function() {};
    unstable_forceFrameRate = function(e) {
        if (e < 0 || e > 125) {
            console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        } else {
            b = e > 0 ? Math.floor(1000 / e) : 5;
        }
    };
    const w = new MessageChannel;
    const _ = w.port2;
    w.port1.onmessage = function() {
        if (g !== null) {
            const e = unstable_now();
            C = e + b;
            try {
                if (g(true, e)) {
                    _.postMessage(null);
                } else {
                    m = false;
                    g = null;
                }
            } catch (error) {
                _.postMessage(null);
                throw error;
            }
        } else {
            m = false;
        }
    };
    r = function(e) {
        g = e;
        if (!m) {
            m = true;
            _.postMessage(null);
        }
    };
    o = function(e, n) {
        y = setTimeout(function() {
            e(unstable_now());
        }, n);
    };
    a = function() {
        clearTimeout(y);
        y = -1;
    };
}
function x(e, t) {
    let e_length = e.length;
    e.push(t);
    e: while(true){
        const r = e_length - 1 >>> 1;
        const o = e[r];
        if (!(o !== undefined && k(o, t) > 0)) {
            break e;
        }
        e[r] = t;
        e[e_length] = o;
        e_length = r;
    }
}
function M(e) {
    if ((e = e[0]) === undefined) {
        return null;
    }
    return e;
}
function E(e) {
    const t = e[0];
    if (t !== undefined) {
        const n = e.pop();
        if (n !== t) {
            e[0] = n;
            e: for(let r = 0, o = e.length; r < o;){
                const a = 2 * (r + 1) - 1;
                const i = e[a];
                const l = a + 1;
                const s = e[l];
                if (i !== undefined && k(i, n) < 0) {
                    if (s !== undefined && k(s, i) < 0) {
                        e[r] = s;
                        e[l] = n;
                        r = l;
                    } else {
                        e[r] = i;
                        e[a] = n;
                        r = a;
                    }
                } else {
                    if (!(s !== undefined && k(s, n) < 0)) {
                        break e;
                    }
                    e[r] = s;
                    e[l] = n;
                    r = l;
                }
            }
        }
        return t;
    }
    return null;
}
function k(e, t) {
    const n = e.sortIndex - t.sortIndex;
    if (n !== 0) {
        return n;
    }
    return e.id - t.id;
}
const O = [];
const S = [];
let L = 1;
let z = null;
let D = 3;
let T = false;
let V = false;
let H = false;
function P(e) {
    for(let t = M(S); t !== null;){
        if (t.callback === null) {
            E(S);
        } else {
            if (!(t.startTime <= e)) {
                break;
            }
            E(S);
            t.sortIndex = t.expirationTime;
            x(O, t);
        }
        t = M(S);
    }
}
function A(e) {
    H = false;
    P(e);
    if (!V) {
        if (M(O) !== null) {
            V = true;
            r(R);
        } else {
            const t = M(S);
            if (t !== null) {
                o(A, t.startTime - e);
            }
        }
    }
}
function R(e, n) {
    V = false;
    if (H) {
        H = false;
        a();
    }
    T = true;
    const r = D;
    try {
        P(n);
        for(z = M(O); z !== null && (!(z.expirationTime > n) || e && !unstable_shouldYield());){
            const i = z.callback;
            if (typeof i === "function") {
                z.callback = null;
                D = z.priorityLevel;
                const l = i(z.expirationTime <= n);
                n = unstable_now();
                if (typeof l === "function") {
                    z.callback = l;
                } else if (z === M(O)) {
                    E(O);
                }
                P(n);
            } else {
                E(O);
            }
            z = M(O);
        }
        if (z !== null) var s = true;
        else {
            const u = M(S);
            if (u !== null) {
                o(A, u.startTime - n);
            }
            s = false;
        }
        return s;
    } finally{
        z = null;
        D = r;
        T = false;
    }
}
export const unstable_requestPaint = i;
export const unstable_IdlePriority = 5;
export const unstable_ImmediatePriority = 1;
export const unstable_LowPriority = 4;
export const unstable_NormalPriority = 3;
export const unstable_Profiling = null;
export const unstable_UserBlockingPriority = 2;
export const unstable_cancelCallback = function(e) {
    e.callback = null;
};
export const unstable_continueExecution = function() {
    if (!(V || T)) {
        V = true;
        r(R);
    }
};
export const unstable_getCurrentPriorityLevel = function() {
    return D;
};
export const unstable_getFirstCallbackNode = function() {
    return M(O);
};
export const unstable_next = function(e) {
    switch(D){
        case 1:
        case 2:
        case 3:
            var t = 3;
            break;
        default:
            t = D;
    }
    const n = D;
    D = t;
    try {
        return e();
    } finally{
        D = n;
    }
};
export const unstable_pauseExecution = function() {};
export const unstable_runWithPriority = function(e, t) {
    switch(e){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            e = 3;
    }
    const n = D;
    D = e;
    try {
        return t();
    } finally{
        D = n;
    }
};
export const unstable_scheduleCallback = function(priorityLevel, callback, startTime) {
    const l = unstable_now();
    startTime = typeof startTime === "object" && startTime !== null && typeof (startTime = startTime.delay) === "number" && startTime > 0 ? l + startTime : l;
    switch(priorityLevel){
        case 1:
            var s = -1;
            break;
        case 2:
            s = 250;
            break;
        case 5:
            s = 1073741823;
            break;
        case 4:
            s = 10000;
            break;
        default:
            s = 5000;
    }
    priorityLevel = {
        id: L++,
        callback,
        priorityLevel,
        startTime,
        expirationTime: s = startTime + s,
        sortIndex: -1
    };
    if (startTime > l) {
        priorityLevel.sortIndex = startTime;
        x(S, priorityLevel);
        if (M(O) === null && priorityLevel === M(S)) {
            if (H) {
                a();
            } else {
                H = true;
            }
            o(A, startTime - l);
        }
    } else {
        priorityLevel.sortIndex = s;
        x(O, priorityLevel);
        if (!(V || T)) {
            V = true;
            r(R);
        }
    }
    return priorityLevel;
};
export const unstable_wrapCallback = function(e) {
    const t = D;
    return function() {
        const n = D;
        D = t;
        try {
            return e.apply(this, arguments);
        } finally{
            D = n;
        }
    };
};
