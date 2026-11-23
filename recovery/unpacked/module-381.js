export const extend = function(e) {
    let t;
    let n;
    let o;
    let a;
    const i = Array.prototype.slice.call(arguments, 1);
    t = 0;
    for(n = i.length; t < n; t += 1){
        if (o = i[t]) {
            for(a in o){
                if (hop.call(o, a)) {
                    e[a] = o[a];
                }
            }
        }
    }
    return e;
};
export var hop = Object.prototype.hasOwnProperty;
