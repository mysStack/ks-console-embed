import { a as a_1 } from "unpacked/module-59.js";
import module81 from "unpacked/module-81.js";
function o(e) {
    return e.charAt(0) === "/";
}
function a(e, t) {
    let n = t;
    for(let r = n + 1, o = e.length; r < o; n += 1, r += 1){
        e[n] = e[r];
    }
    e.pop();
}
const i = (pathname, t = "")=>{
    let n;
    const r = pathname && pathname.split("/") || [];
    let i = t && t.split("/") || [];
    const l = pathname && o(pathname);
    const s = t && o(t);
    const u = l || s;
    if (pathname && o(pathname)) {
        i = r;
    } else if (r.length) {
        i.pop();
        i = i.concat(r);
    }
    if (!i.length) {
        return "/";
    }
    if (i.length) {
        const c = i[i.length - 1];
        n = c === "." || c === ".." || c === "";
    } else {
        n = false;
    }
    let f = 0;
    for(let d = i.length; d >= 0; d--){
        const p = i[d];
        switch(p){
            case ".":
                a(i, d);
                break;
            case "..":
                a(i, d);
                f++;
                break;
            default:
                if (f) {
                    a(i, d);
                    f--;
                }
        }
    }
    if (!u) {
        for(; f--; f){
            i.unshift("..");
        }
    }
    if (!(!u || i[0] === "" || i[0] && o(i[0]))) {
        i.unshift("");
    }
    let h = i.join("/");
    if (n && h.substr(-1) !== "/") {
        h += "/";
    }
    return h;
};
function l(e) {
    if (e.valueOf) {
        return e.valueOf();
    }
    return Object.prototype.valueOf.call(e);
}
const s = function e(state, n) {
    if (state === n) {
        return true;
    }
    if (state == null || n == null) {
        return false;
    }
    if (Array.isArray(state)) {
        return Array.isArray(n) && state.length === n.length && state.every((t, r)=>e(t, n[r]));
    }
    if (typeof state === "object" || typeof n === "object") {
        const r = l(state);
        const o = l(n);
        if (r !== state || o !== n) {
            return e(r, o);
        }
        return Object.keys({
            ...state,
            ...n
        }).every((r)=>e(state[r], n[r]));
    }
    return false;
};
function c(e) {
    if (e.charAt(0) === "/") {
        return e;
    }
    return `/${e}`;
}
function encodePath(e) {
    if (e.charAt(0) === "/") {
        return e.substr(1);
    }
    return e;
}
function d(e, t) {
    if (((e, t)=>e.toLowerCase().indexOf(t.toLowerCase()) === 0 && "/?#".indexOf(e.charAt(t.length)) !== -1)(e, t)) {
        return e.substr(t.length);
    }
    return e;
}
function p(e) {
    if (e.charAt(e.length - 1) === "/") {
        return e.slice(0, -1);
    }
    return e;
}
export function parsePath(e) {
    let pathname = e || "/";
    let n = "";
    let r = "";
    const o = pathname.indexOf("#");
    if (o !== -1) {
        r = pathname.substr(o);
        pathname = pathname.substr(0, o);
    }
    const a = pathname.indexOf("?");
    if (a !== -1) {
        n = pathname.substr(a);
        pathname = pathname.substr(0, a);
    }
    return {
        pathname,
        search: n === "?" ? "" : n,
        hash: r === "#" ? "" : r
    };
}
export function createPath({ pathname, search, hash }) {
    let o = pathname || "/";
    if (search && search !== "?") {
        o += search.charAt(0) === "?" ? search : `?${search}`;
    }
    if (hash && hash !== "#") {
        o += hash.charAt(0) === "#" ? hash : `#${hash}`;
    }
    return o;
}
export function createLocation(e, t, n, o) {
    let a;
    if (typeof e === "string") {
        a = parsePath(e);
        a.state = t;
    } else {
        if ((a = {
            ...e
        }).pathname === undefined) {
            a.pathname = "";
        }
        if (a.search) {
            if (a.search.charAt(0) !== "?") {
                a.search = `?${a.search}`;
            }
        } else {
            a.search = "";
        }
        if (a.hash) {
            if (a.hash.charAt(0) !== "#") {
                a.hash = `#${a.hash}`;
            }
        } else {
            a.hash = "";
        }
        if (t !== undefined && a.state === undefined) {
            a.state = t;
        }
    }
    try {
        a.pathname = decodeURI(a.pathname);
    } catch (error) {
        throw error instanceof URIError ? new URIError(`Pathname "${a.pathname}" could not be decoded. This is likely caused by an invalid percent-encoding.`) : error;
    }
    if (n) {
        a.key = n;
    }
    if (o) {
        if (a.pathname) {
            if (a.pathname.charAt(0) !== "/") {
                a.pathname = i(a.pathname, o.pathname);
            }
        } else {
            a.pathname = o.pathname;
        }
    } else if (!a.pathname) {
        a.pathname = "/";
    }
    return a;
}
export function locationsAreEqual(e, t) {
    return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && e.key === t.key && s(e.state, t.state);
}
function y() {
    let e = null;
    let t = [];
    return {
        setPrompt: function(t) {
            e = t;
            return function() {
                if (e === t) {
                    e = null;
                }
            };
        },
        confirmTransitionTo: function(t, n, r, o) {
            if (e != null) {
                const a = typeof e === "function" ? e(t, n) : e;
                if (typeof a === "string") {
                    if (typeof r === "function") {
                        r(a, o);
                    } else {
                        o(true);
                    }
                } else {
                    o(a !== false);
                }
            } else {
                o(true);
            }
        },
        appendListener: function(e) {
            let n = true;
            function r() {
                if (n) {
                    e(...arguments);
                }
            }
            t.push(r);
            return function() {
                n = false;
                t = t.filter((e)=>e !== r);
            };
        },
        notifyListeners: function(...n) {
            t.forEach((e)=>e(...n));
        }
    };
}
const b = !(typeof window === "undefined" || !window.document || !window.document.createElement);
function C(e, t) {
    t(window.confirm(e));
}
function w() {
    try {
        return window.history.state || {};
    } catch (e) {
        return {};
    }
}
export function createBrowserHistory(e = {}) {
    if (!b) {
        module81(false);
    }
    let t;
    const window_history = window.history;
    const o = ((t = window.navigator.userAgent).indexOf("Android 2.") === -1 && t.indexOf("Android 4.0") === -1 || t.indexOf("Mobile Safari") === -1 || t.indexOf("Chrome") !== -1 || t.indexOf("Windows Phone") !== -1) && window.history && "pushState" in window.history;
    const a = !(window.navigator.userAgent.indexOf("Trident") === -1);
    const { forceRefresh = false, getUserConfirmation = C, keyLength = 6 } = e;
    const x = e.basename ? p(c(e.basename)) : "";
    function M(e) {
        const t = e || {};
        const { key, state } = t;
        const window_location = window.location;
        let a = window_location.pathname + window_location.search + window_location.hash;
        if (x) {
            a = d(a, x);
        }
        return createLocation(a, state, key);
    }
    function E() {
        return Math.random().toString(36).substr(2, keyLength);
    }
    const k = y();
    function O(e) {
        a_1(N, e);
        N.length = window_history.length;
        k.notifyListeners(N.location, N.action);
    }
    function S(e) {
        if (!((e)=>e.state === undefined && navigator.userAgent.indexOf("CriOS") === -1)(e)) {
            D(M(e.state));
        }
    }
    function L() {
        D(M(w()));
    }
    let z = false;
    function D(e) {
        if (z) {
            z = false;
            O();
        } else {
            k.confirmTransitionTo(e, "POP", getUserConfirmation, function(t) {
                if (t) {
                    O({
                        action: "POP",
                        location: e
                    });
                } else {
                    ((e)=>{
                        const N_location = N.location;
                        let n = V.indexOf(N_location.key);
                        if (n === -1) {
                            n = 0;
                        }
                        let r = V.indexOf(e.key);
                        if (r === -1) {
                            r = 0;
                        }
                        const o = n - r;
                        if (o) {
                            z = true;
                            P(o);
                        }
                    })(e);
                }
            });
        }
    }
    const T = M(w());
    var V = [
        T.key
    ];
    function createHref(e) {
        return x + createPath(e);
    }
    function P(e) {
        window_history.go(e);
    }
    let A = 0;
    function R(e) {
        if ((A += e) === 1 && e === 1) {
            window.addEventListener("popstate", S);
            if (a) {
                window.addEventListener("hashchange", L);
            }
        } else if (A === 0) {
            window.removeEventListener("popstate", S);
            if (a) {
                window.removeEventListener("hashchange", L);
            }
        }
    }
    let j = false;
    var N = {
        length: window_history.length,
        action: "POP",
        location: T,
        createHref,
        push: function(e, t) {
            const r = createLocation(e, t, E(), N.location);
            k.confirmTransitionTo(r, "PUSH", getUserConfirmation, function(e) {
                if (e) {
                    const t = createHref(r);
                    const { key, state } = r;
                    if (o) {
                        window_history.pushState({
                            key,
                            state
                        }, null, t);
                        if (forceRefresh) {
                            window.location.href = t;
                        } else {
                            const l = V.indexOf(N.location.key);
                            const u = V.slice(0, l + 1);
                            u.push(r.key);
                            V = u;
                            O({
                                action: "PUSH",
                                location: r
                            });
                        }
                    } else {
                        window.location.href = t;
                    }
                }
            });
        },
        replace: function(e, t) {
            const r = createLocation(e, t, E(), N.location);
            k.confirmTransitionTo(r, "REPLACE", getUserConfirmation, function(e) {
                if (e) {
                    const t = createHref(r);
                    const { key, state } = r;
                    if (o) {
                        window_history.replaceState({
                            key,
                            state
                        }, null, t);
                        if (forceRefresh) {
                            window.location.replace(t);
                        } else {
                            const l = V.indexOf(N.location.key);
                            if (l !== -1) {
                                V[l] = r.key;
                            }
                            O({
                                action: "REPLACE",
                                location: r
                            });
                        }
                    } else {
                        window.location.replace(t);
                    }
                }
            });
        },
        go: P,
        goBack: function() {
            P(-1);
        },
        goForward: function() {
            P(1);
        },
        block: function(e = false) {
            const t = k.setPrompt(e);
            if (!j) {
                R(1);
                j = true;
            }
            return function() {
                if (j) {
                    j = false;
                    R(-1);
                }
                return t();
            };
        },
        listen: function(e) {
            const t = k.appendListener(e);
            R(1);
            return function() {
                R(-1);
                t();
            };
        }
    };
    return N;
}
const x = {
    hashbang: {
        encodePath: function(e) {
            if (e.charAt(0) === "!") {
                return e;
            }
            return `!/${encodePath(e)}`;
        },
        decodePath: function(e) {
            if (e.charAt(0) === "!") {
                return e.substr(1);
            }
            return e;
        }
    },
    noslash: {
        encodePath,
        decodePath: c
    },
    slash: {
        encodePath: c,
        decodePath: c
    }
};
function M(href) {
    const t = href.indexOf("#");
    if (t === -1) {
        return href;
    }
    return href.slice(0, t);
}
function E() {
    const href = window.location.href;
    const t = href.indexOf("#");
    if (t === -1) {
        return "";
    }
    return href.substring(t + 1);
}
function k(e) {
    window.location.replace(`${M(window.location.href)}#${e}`);
}
export function createHashHistory(e = {}) {
    if (!b) {
        module81(false);
    }
    const window_history = window.history;
    window.navigator.userAgent.indexOf("Firefox");
    const { getUserConfirmation = C, hashType = "slash" } = e;
    const s = e.basename ? p(c(e.basename)) : "";
    const f = x[hashType];
    const { encodePath, decodePath } = f;
    function w() {
        let e = decodePath(E());
        if (s) {
            e = d(e, s);
        }
        return createLocation(e);
    }
    const _ = y();
    function O(e) {
        a_1(N, e);
        N.length = window_history.length;
        _.notifyListeners(N.location, N.action);
    }
    let S = false;
    let L = null;
    function z() {
        let e;
        let t;
        const n = E();
        const r = encodePath(n);
        if (n !== r) {
            k(r);
        } else {
            const o = w();
            const i = N.location;
            if (!S && (t = o, (e = i).pathname === t.pathname && e.search === t.search && e.hash === t.hash)) {
                return;
            }
            if (L === createPath(o)) {
                return;
            }
            L = null;
            ((e)=>{
                if (S) {
                    S = false;
                    O();
                } else {
                    _.confirmTransitionTo(e, "POP", getUserConfirmation, function(t) {
                        if (t) {
                            O({
                                action: "POP",
                                location: e
                            });
                        } else {
                            ((e)=>{
                                const N_location = N.location;
                                let n = H.lastIndexOf(createPath(N_location));
                                if (n === -1) {
                                    n = 0;
                                }
                                let r = H.lastIndexOf(createPath(e));
                                if (r === -1) {
                                    r = 0;
                                }
                                const o = n - r;
                                if (o) {
                                    S = true;
                                    P(o);
                                }
                            })(e);
                        }
                    });
                }
            })(o);
        }
    }
    const D = E();
    const T = encodePath(D);
    if (D !== T) {
        k(T);
    }
    const V = w();
    var H = [
        createPath(V)
    ];
    function P(e) {
        window_history.go(e);
    }
    let A = 0;
    function R(e) {
        if ((A += e) === 1 && e === 1) {
            window.addEventListener("hashchange", z);
        } else if (A === 0) {
            window.removeEventListener("hashchange", z);
        }
    }
    let j = false;
    var N = {
        length: window_history.length,
        action: "POP",
        location: V,
        createHref: function(e) {
            const baseElement = document.querySelector("base");
            let n = "";
            if (baseElement && baseElement.getAttribute("href")) {
                n = M(window.location.href);
            }
            return `${n}#${encodePath(s + createPath(e))}`;
        },
        push: function(e, t) {
            const n = createLocation(e, undefined, undefined, N.location);
            _.confirmTransitionTo(n, "PUSH", getUserConfirmation, function(e) {
                if (e) {
                    const t = createPath(n);
                    const r = encodePath(s + t);
                    if (E() !== r) {
                        L = t;
                        ((e)=>{
                            window.location.hash = e;
                        })(r);
                        const o = H.lastIndexOf(createPath(N.location));
                        const a = H.slice(0, o + 1);
                        a.push(t);
                        H = a;
                        O({
                            action: "PUSH",
                            location: n
                        });
                    } else {
                        O();
                    }
                }
            });
        },
        replace: function(e, t) {
            const n = createLocation(e, undefined, undefined, N.location);
            _.confirmTransitionTo(n, "REPLACE", getUserConfirmation, function(e) {
                if (e) {
                    const t = createPath(n);
                    const r = encodePath(s + t);
                    if (E() !== r) {
                        L = t;
                        k(r);
                    }
                    const o = H.indexOf(createPath(N.location));
                    if (o !== -1) {
                        H[o] = t;
                    }
                    O({
                        action: "REPLACE",
                        location: n
                    });
                }
            });
        },
        go: P,
        goBack: function() {
            P(-1);
        },
        goForward: function() {
            P(1);
        },
        block: function(e = false) {
            const t = _.setPrompt(e);
            if (!j) {
                R(1);
                j = true;
            }
            return function() {
                if (j) {
                    j = false;
                    R(-1);
                }
                return t();
            };
        },
        listen: function(e) {
            const t = _.appendListener(e);
            R(1);
            return function() {
                R(-1);
                t();
            };
        }
    };
    return N;
}
function S(e, t, n) {
    return Math.min(Math.max(e, t), n);
}
export function createMemoryHistory({ getUserConfirmation, initialEntries = [
    "/"
], initialIndex = 0, keyLength = 6 } = {}) {
    const c = y();
    function f(e) {
        a_1(C, e);
        C.length = C.entries.length;
        c.notifyListeners(C.location, C.action);
    }
    function d() {
        return Math.random().toString(36).substr(2, keyLength);
    }
    const p = S(initialIndex, 0, initialEntries.length - 1);
    const h = initialEntries.map((e)=>createLocation(e, undefined, typeof e === "string" ? d() : e.key || d()));
    const createHref = createPath;
    function b(e) {
        const t = S(C.index + e, 0, C.entries.length - 1);
        const r = C.entries[t];
        c.confirmTransitionTo(r, "POP", getUserConfirmation, function(e) {
            if (e) {
                f({
                    action: "POP",
                    location: r,
                    index: t
                });
            } else {
                f();
            }
        });
    }
    var C = {
        length: h.length,
        action: "POP",
        location: h[p],
        index: p,
        entries: h,
        createHref,
        push: function(e, t) {
            const r = createLocation(e, t, d(), C.location);
            c.confirmTransitionTo(r, "PUSH", getUserConfirmation, function(e) {
                if (e) {
                    const t = C.index + 1;
                    const n = C.entries.slice(0);
                    if (n.length > t) {
                        n.splice(t, n.length - t, r);
                    } else {
                        n.push(r);
                    }
                    f({
                        action: "PUSH",
                        location: r,
                        index: t,
                        entries: n
                    });
                }
            });
        },
        replace: function(e, t) {
            const r = createLocation(e, t, d(), C.location);
            c.confirmTransitionTo(r, "REPLACE", getUserConfirmation, function(e) {
                if (e) {
                    C.entries[C.index] = r;
                    f({
                        action: "REPLACE",
                        location: r
                    });
                }
            });
        },
        go: b,
        goBack: function() {
            b(-1);
        },
        goForward: function() {
            b(1);
        },
        canGo: function(e) {
            const t = C.index + e;
            return t >= 0 && t < C.entries.length;
        },
        block: function(e = false) {
            return c.setPrompt(e);
        },
        listen: function(e) {
            return c.appendListener(e);
        }
    };
    return C;
}
