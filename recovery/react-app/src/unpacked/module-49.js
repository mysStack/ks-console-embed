export default function(e, t, n, r, o) {
    let a = {};
    Object.keys(r).forEach((e)=>{
        a[e] = r[e];
    });
    a.enumerable = !!a.enumerable;
    a.configurable = !!a.configurable;
    if ("value" in a || a.initializer) {
        a.writable = true;
    }
    a = n.slice().reverse().reduce((acc, item)=>item(e, t, acc) || acc, a);
    if (o && a.initializer !== undefined) {
        a.value = a.initializer ? a.initializer.call(o) : undefined;
        a.initializer = undefined;
    }
    if (a.initializer === undefined) {
        Object.defineProperty(e, t, a);
        a = null;
    }
    return a;
};
