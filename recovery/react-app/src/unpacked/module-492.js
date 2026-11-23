import module516 from "./module-516.js";
import module76 from "./module-76.js";
import module163 from "./module-163.js";
const i = /^[-+]0x[0-9a-f]+$/i;
const l = /^0b[01]+$/i;
const s = /^0o[0-7]+$/i;
const _parseInt = parseInt;
export default function(e) {
    if (typeof e === "number") {
        return e;
    }
    if (module163(e)) {
        return NaN;
    }
    if (module76(e)) {
        const t = typeof e.valueOf === "function" ? e.valueOf() : e;
        e = module76(t) ? `${t}` : t;
    }
    if (typeof e !== "string") {
        if (e === 0) {
            return e;
        }
        return +e;
    }
    e = module516(e);
    const n = l.test(e);
    if (n || s.test(e)) {
        return _parseInt(e.slice(2), n ? 2 : 8);
    }
    if (i.test(e)) {
        return NaN;
    }
    return +e;
};
