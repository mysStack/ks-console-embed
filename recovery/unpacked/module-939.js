import { a as a_1 } from "./module-1654.js";
import { a as a_2 } from "./module-841.js";
import { a as a_3 } from "./module-898.js";
const _a = /^[-+]0x[0-9a-f]+$/i;
const l = /^0b[01]+$/i;
const u = /^0o[0-7]+$/i;
const _parseInt = parseInt;
export const a = function(e) {
    if (typeof e === "number") {
        return e;
    }
    if (a_3(e)) {
        return NaN;
    }
    if (a_2(e)) {
        const t = typeof e.valueOf === "function" ? e.valueOf() : e;
        e = a_2(t) ? `${t}` : t;
    }
    if (typeof e !== "string") {
        if (e === 0) {
            return e;
        }
        return +e;
    }
    e = a_1(e);
    const n = l.test(e);
    if (n || u.test(e)) {
        return _parseInt(e.slice(2), n ? 2 : 8);
    }
    if (_a.test(e)) {
        return NaN;
    }
    return +e;
};
