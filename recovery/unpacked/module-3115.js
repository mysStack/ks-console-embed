import { format } from "./module-850.js";
export default function(e, t, n, o, i) {
    const a = typeof e.len === "number";
    const l = typeof e.min === "number";
    const u = typeof e.max === "number";
    let s = t;
    let c = null;
    const f = typeof t === "number";
    const d = typeof t === "string";
    const p = Array.isArray(t);
    if (f) {
        c = "number";
    } else if (d) {
        c = "string";
    } else if (p) {
        c = "array";
    }
    if (!c) {
        return false;
    }
    if (p) {
        s = t.length;
    }
    if (d) {
        s = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length;
    }
    if (a) {
        if (s !== e.len) {
            o.push(format(i.messages[c].len, e.fullField, e.len));
        }
    } else if (l && !u && s < e.min) {
        o.push(format(i.messages[c].min, e.fullField, e.min));
    } else if (u && !l && s > e.max) {
        o.push(format(i.messages[c].max, e.fullField, e.max));
    } else if (l && u && (s < e.min || s > e.max)) {
        o.push(format(i.messages[c].range, e.fullField, e.min, e.max));
    }
};
