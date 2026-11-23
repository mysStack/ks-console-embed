import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-97.js";
import "unpacked/module-320.js";
import "unpacked/module-16.js";
import "unpacked/module-326.js";
import "unpacked/module-27.js";
import "unpacked/module-1769.js";
import "unpacked/module-190.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-38.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-249.js";
import "unpacked/module-45.js";
import "unpacked/module-118.js";
import "unpacked/module-28.js";
import "unpacked/module-245.js";
import "unpacked/module-42.js";
import "unpacked/module-448.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module446 from "unpacked/module-446.js";
import module243 from "unpacked/module-243.js";
import { TRACING_COLORS_HEX } from "utils/constants";
const c = (()=>{
    function e(t, a = []) {
        module36(this, e);
        this.value = t;
        this.children = a;
    }
    module37(e, null, [
        {
            key: "iterFunction",
            value: function(e, t = 0) {
                return function(a) {
                    return e(a.value, a, t);
                };
            }
        },
        {
            key: "searchFunction",
            value: function(t) {
                if (typeof t === "function") {
                    return t;
                }
                return function(a, r) {
                    if (t instanceof e) {
                        return r === t;
                    }
                    return a === t;
                };
            }
        }
    ]);
    module37(e, [
        {
            key: "addChild",
            value: function(t) {
                this.children.push(t instanceof e ? t : new e(t));
                return this;
            }
        },
        {
            key: "find",
            value: function(t) {
                if (e.iterFunction(e.searchFunction(t))(this)) {
                    return this;
                }
                for(let a = 0; a < this.children.length; a++){
                    const r = this.children[a].find(t);
                    if (r) {
                        return r;
                    }
                }
                return null;
            }
        },
        {
            key: "getPath",
            value: function(t) {
                const a = e.iterFunction(e.searchFunction(t));
                return function e(t, r) {
                    const n = r.concat([
                        t
                    ]);
                    if (a(t)) {
                        return n;
                    }
                    for(let l = 0; l < t.children.length; l++){
                        const u = e(t.children[l], n);
                        if (u) {
                            return u;
                        }
                    }
                    return null;
                }(this, []);
            }
        },
        {
            key: "walk",
            value: function(e, t = 0) {
                const a = [];
                let depth_1 = t;
                for(a.push({
                    node: this,
                    depth: depth_1
                }); a.length;){
                    const n = a.pop();
                    const { node, depth } = n;
                    e(node.value, node, depth);
                    depth_1 = depth + 1;
                    for(let o = node.children.length - 1; o >= 0;){
                        a.push({
                            node: node.children[o],
                            depth: depth_1
                        });
                        o--;
                    }
                }
            }
        },
        {
            key: "depth",
            get: function() {
                return this.children.reduce((acc, child)=>Math.max(child.depth + 1, acc), 1);
            }
        },
        {
            key: "size",
            get: function() {
                let e = 0;
                this.walk(function() {
                    return e++;
                });
                return e;
            }
        }
    ]);
    return e;
})();
export const transformTraceItem = function(e) {
    let e_traceID = e.traceID;
    if (!e_traceID) {
        return null;
    }
    e_traceID = e_traceID.toLowerCase();
    let endTime = 0;
    let Number_MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
    const map = new Map;
    const map_1 = new Map;
    e.spans = e.spans.filter((e)=>Boolean(e.startTime));
    for(let u = e.spans.length, o = 0; o < u; o++){
        const i = e.spans[o];
        const { startTime, duration, processID } = i;
        let p = i.spanID;
        if (startTime < Number_MAX_SAFE_INTEGER) {
            Number_MAX_SAFE_INTEGER = startTime;
        }
        if (startTime + duration > endTime) {
            endTime = startTime + duration;
        }
        const m = map.get(p);
        if (m != null) {
            map.set(p, m + 1);
            p = `${p}_${m}`;
            i.spanID = p;
        } else {
            map.set(p, 1);
        }
        i.process = e.processes[processID];
        map_1.set(p, i);
    }
    const h = ((e)=>{
        const t = new Map(e.spans.map((e)=>[
                e.spanID,
                new c(e.spanID)
            ]));
        const a = new Map(e.spans.map((e)=>[
                e.spanID,
                e
            ]));
        const r = new c("__root__");
        e.spans.forEach((e)=>{
            const a = t.get(e.spanID);
            if (Array.isArray(e.references) && e.references.length) {
                const n = e.references[0];
                const { refType, spanID } = n;
                if (refType !== "CHILD_OF" && refType !== "FOLLOWS_FROM") {
                    throw new Error(`Unrecognized ref type: ${refType}`);
                }
                (t.get(spanID) || r).children.push(a);
            } else {
                r.children.push(a);
            }
        });
        const n = function(e, t) {
            const r = a.get(e.value);
            const n = a.get(t.value);
            return +(r.startTime > n.startTime) || +(r.startTime === n.startTime) - 1;
        };
        e.spans.forEach((e)=>{
            const a = t.get(e.spanID);
            if (a.children.length > 1) {
                a.children.sort(n);
            }
        });
        r.children.sort(n);
        return r;
    })(e);
    const spans = [];
    const g = {};
    let traceName = "";
    h.walk(function(e, t, a = 0) {
        if (e !== "__root__") {
            const n = map_1.get(e);
            if (n) {
                const u = n.process.serviceName;
                g[u] = (g[u] || 0) + 1;
                if (!(n.references && n.references.length)) {
                    traceName = `${u}: ${n.operationName}`;
                }
                n.relativeStartTime = n.startTime - Number_MAX_SAFE_INTEGER;
                n.depth = a - 1;
                n.hasChildren = t.children.length > 0;
                n.references.forEach((e)=>{
                    const t = map_1.get(e.spanID);
                    if (t) {
                        e.span = t;
                    }
                });
                spans.push(n);
            }
        }
    });
    return {
        services: Object.keys(g).map((e)=>({
                name: e,
                numberOfSpans: g[e]
            })),
        spans,
        traceID: e_traceID,
        traceName,
        processes: e.processes,
        duration: endTime - Number_MAX_SAFE_INTEGER,
        startTime: Number_MAX_SAFE_INTEGER,
        endTime
    };
};
export const transformTraces = function(e) {
    const t = e.map(transformTraceItem);
    let a = 0;
    let r = 0;
    const n = {};
    t.forEach((e)=>{
        if (e.duration) {
            a = Math.max(a, e.duration);
        }
        e.services.forEach((e)=>{
            if (!n[e.name]) {
                n[e.name] = TRACING_COLORS_HEX[r++];
            }
        });
    });
    t.forEach((e)=>{
        if (a) {
            e.durationPercent = 100 * e.duration / a;
        }
        e.serviceColorMap = n;
    });
    return module446(t, "startTime").reverse();
};
export const spanHasTag = function(e, t, a) {
    return !(!Array.isArray(a.tags) || !a.tags.length) && a.tags.some((a)=>a.key === e && a.value === t);
};
export const isClientSpan = spanHasTag.bind(null, "span.kind", "client");
export const isServerSpan = spanHasTag.bind(null, "span.kind", "server");
const m = spanHasTag.bind(null, "error", true);
const h = spanHasTag.bind(null, "error", "true");
export const isErrorSpan = function(e) {
    return m(e) || h(e);
};
export const formatRelativeDate = function(e, t) {
    const a = module243.isMoment(e) ? e : module243(e);
    const r = t ? "MMMM" : "MMM";
    const date = new Date;
    if (date.getFullYear() !== a.year()) {
        return a.format(`${r} D, YYYY`);
    }
    const l = a.month();
    const u = a.date();
    const i = date.getDate();
    if (l === date.getMonth() && u === i) {
        return "Today";
    }
    date.setDate(i - 1);
    if (l === date.getMonth() && u === date.getDate()) {
        return "Yesterday";
    }
    return a.format(`${r} D`);
};
export const formatDuration = function(e, t = "microseconds") {
    let a = e;
    if (t === "microseconds") {
        a = e / 1000;
    }
    let r = "ms";
    if (a >= 1000) {
        r = "s";
        a /= 1000;
    }
    return a.toFixed(2) + r;
};
export const createViewedBoundsFunc = function({ min, max, viewStart, viewEnd }) {
    const l = max - min;
    const u = min + viewStart * l;
    const o = max - (1 - viewEnd) * l - u;
    return function(e, t) {
        return {
            start: (e - u) / o,
            end: (t - u) / o
        };
    };
};
export const renderIntoCanvas = function(e, t, a, r) {
    const map = new Map;
    const l = (t.length < 60 ? 60 : Math.min(t.length, 200)) - 1;
    const u = 2 * window.innerWidth;
    e.width = u;
    e.height = l;
    const o = Math.min(Math.max(2, (l - (1 * t.length - 1)) / t.length), 4);
    const i = l / t.length;
    const c = e.getContext("2d", {
        alpha: false
    });
    c.fillStyle = "#fff";
    c.fillRect(0, 0, u, l);
    for(let s = 0; s < t.length; s++){
        const f = t[s];
        const { valueWidth, valueOffset, serviceName } = f;
        const h = valueOffset / a * u;
        let v = valueWidth / a * u;
        if (v < 10) {
            v = 10;
        }
        let g = map.get(serviceName);
        if (!g) {
            g = `${r(serviceName)}a0`;
            map.set(serviceName, g);
        }
        c.fillStyle = g;
        c.fillRect(h, s * i, v, o);
    }
};
export const COORD_COUNT = 4;
