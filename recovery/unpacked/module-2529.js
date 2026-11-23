import module798 from "./module-798.js";
(function(e, t = {}) {
    module798(e);
    const n = t.strictSeparator ? a.test(e) : i.test(e);
    if (n && t.strict) {
        return l(e);
    }
    return n;
});
var i = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
var a = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
var l = (e)=>{
    const t = e.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);
    if (t) {
        const n = Number(t[1]);
        const r = Number(t[2]);
        if (n % 4 == 0 && n % 100 != 0 || n % 400 == 0) {
            return r <= 366;
        }
        return r <= 365;
    }
    const o = e.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
    const i = o[1];
    const a = o[2];
    const l = o[3];
    const u = a ? `0${a}`.slice(-2) : a;
    const s = l ? `0${l}`.slice(-2) : l;
    const c = new Date(`${i}-${u || "01"}-${s || "01"}`);
    return !a || !l || c.getUTCFullYear() === i && c.getUTCMonth() + 1 === a && c.getUTCDate() === l;
};
export default exports.default;
