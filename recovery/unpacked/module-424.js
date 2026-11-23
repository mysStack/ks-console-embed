const n = /^[0-9]+$/;
const compareIdentifiers = (e, t)=>{
    const r = n.test(e);
    const o = n.test(t);
    if (r && o) {
        e = +e;
        t = +t;
    }
    if (e === t) {
        return 0;
    }
    if (r && !o) {
        return -1;
    }
    if (o && !r) {
        return 1;
    }
    if (e < t) {
        return -1;
    }
    return 1;
};
export default {
    compareIdentifiers,
    rcompareIdentifiers: (e, t)=>compareIdentifiers(t, e)
};
