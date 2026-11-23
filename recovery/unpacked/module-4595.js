import module835 from "./module-835.js";
export default function(e, t, n) {
    let o;
    const i = {};
    module835.forEach(n, function(n) {
        let r;
        let a;
        for(let l = e.parent(n); l;){
            if (r = e.parent(l)) {
                a = i[r];
                i[r] = l;
            } else {
                a = o;
                o = l;
            }
            if (a && a !== l) {
                return void t.setEdge(a, l);
            }
            l = r;
        }
    });
};
