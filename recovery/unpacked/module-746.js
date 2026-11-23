import module163 from "./module-163.js";
export default function(e, t) {
    if (e !== t) {
        const n = e !== undefined;
        const o = e === null;
        const a = e == e;
        const i = module163(e);
        const l = t !== undefined;
        const s = t === null;
        const u = t == t;
        const c = module163(t);
        if (!s && !c && !i && e > t || i && l && u && !s && !c || o && l && u || !n && u || !a) {
            return 1;
        }
        if (!o && !i && !c && e < t || c && n && a && !o && !i || s && n && a || !l && a || !u) {
            return -1;
        }
    }
    return 0;
};
