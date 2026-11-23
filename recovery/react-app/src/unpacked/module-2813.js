export default function(e, t) {
    const n = {};
    const r = (e, t = true)=>{
        n[e] = t;
    };
    if (e === 0) {
        r("first-child");
    }
    if (e === t - 1) {
        r("last-child");
    }
    if (e === 0 || e % 2 == 0) {
        r("even");
    }
    if (Math.abs(e % 2) === 1) {
        r("odd");
    }
    r("nth-child", e);
    return n;
};
