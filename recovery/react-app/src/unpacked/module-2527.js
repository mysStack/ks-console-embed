import module798 from "./module-798.js";
const i = /^[A-Z]{3}(U[0-9]{7})|([J,Z][0-9]{6,7})$/;
const a = /^[0-9]$/;
export function isISO6346(e) {
    module798(e);
    e = e.toUpperCase();
    if (!i.test(e)) {
        return false;
    }
    if (e.length === 11) {
        let t = 0;
        for(let n = 0; n < e.length - 1; n++){
            if (a.test(e[n])) {
                t += e[n] * 2 ** n;
            } else {
                const r = e.charCodeAt(n) - 55;
                t += (r < 11 ? r : r >= 11 && r <= 20 ? 12 + r % 11 : r >= 21 && r <= 30 ? 23 + r % 21 : 34 + r % 31) * 2 ** n;
            }
        }
        const l = t % 11;
        return Number(e[e.length - 1]) === l;
    }
    return true;
}
export const isFreightContainerID = isISO6346;
