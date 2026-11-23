export default function(e, t, o, i) {
    let a = -1;
    for(var l = Math.max(Math.ceil((t - e) / (o || 1)), 0), u = Array(l); l--;){
        u[i ? l : ++a] = e;
        e += o;
    }
    return u;
};
