import module1507 from "unpacked/module-1507.js";
import { curry } from "unpacked/module-1508.js";
const a = {
    rangeStep: function(e, t, n) {
        for(var r = new module1507(e), i = 0, a = []; r.lt(t) && i < 100000;){
            a.push(r.toNumber());
            r = r.add(n);
            i++;
        }
        return a;
    },
    getDigitCount: function(e) {
        if (e === 0) {
            return 1;
        }
        return Math.floor(new module1507(e).abs().log(10).toNumber()) + 1;
    },
    interpolateNumber: curry(function(e, t, n) {
        const r = +e;
        return r + n * (+t - r);
    }),
    uninterpolateNumber: curry(function(e, t, n) {
        const r = t - +e;
        return (n - e) / (r || Infinity);
    }),
    uninterpolateTruncation: curry(function(e, t, n) {
        let r = t - +e;
        r = r || Infinity;
        return Math.max(0, Math.min(1, (n - e) / r));
    })
};
export default a;
