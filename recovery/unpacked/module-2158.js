import module2159 from "./module-2159.js";
import module1513 from "./module-1513.js";
import module2161 from "./module-2161.js";
import { ifOverflowMatches } from "./module-1161.js";
import { findAllByType } from "./module-810.js";
import { isNumber } from "./module-827.js";
export const detectReferenceElementsDomain = function(e, t, n, s, c) {
    const f = findAllByType(e, module1513);
    const d = findAllByType(e, module2159);
    const p = f.concat(d);
    const h = findAllByType(e, module2161);
    const v = `${s}Id`;
    const g = s[0];
    let y = t;
    if (p.length) {
        y = p.reduce((acc, item)=>{
            if (item.props[v] === n && ifOverflowMatches(item.props, "extendDomain") && isNumber(item.props[g])) {
                const r = item.props[g];
                return [
                    Math.min(acc[0], r),
                    Math.max(acc[1], r)
                ];
            }
            return acc;
        }, y);
    }
    if (h.length) {
        const m = `${g}1`;
        const b = `${g}2`;
        y = h.reduce((acc, item)=>{
            if (item.props[v] === n && ifOverflowMatches(item.props, "extendDomain") && isNumber(item.props[m]) && isNumber(item.props[b])) {
                const r = item.props[m];
                const o = item.props[b];
                return [
                    Math.min(acc[0], r, o),
                    Math.max(acc[1], r, o)
                ];
            }
            return acc;
        }, y);
    }
    if (c && c.length) {
        y = c.reduce((acc, item)=>{
            if (isNumber(item)) {
                return [
                    Math.min(acc[0], item),
                    Math.max(acc[1], item)
                ];
            }
            return acc;
        }, y);
    }
    return y;
};
