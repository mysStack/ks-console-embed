import module2142 from "./module-2142.js";
module2142.prototype.toPostfix = function() {
    "use strict";
    let e;
    let t;
    let n;
    let o;
    let i;
    const a = [];
    const l = [
        {
            value: "(",
            type: 4,
            pre: 0
        }
    ];
    for(let u = this.value, s = 1; s < u.length; s++){
        if (u[s].type === 1 || u[s].type === 3 || u[s].type === 13) {
            if (u[s].type === 1) {
                u[s].value = Number(u[s].value);
            }
            a.push(u[s]);
        } else if (u[s].type === 4) {
            l.push(u[s]);
        } else if (u[s].type === 5) {
            while((t = l.pop()).type !== 4){
                a.push(t);
            }
        } else if (u[s].type === 11) {
            while((t = l.pop()).type !== 4){
                a.push(t);
            }
            l.push(t);
        } else {
            o = (e = u[s]).pre;
            n = (i = l[l.length - 1]).pre;
            let c = i.value == "Math.pow" && e.value == "Math.pow";
            if (o > n) {
                l.push(e);
            } else {
                while(n >= o && !c || c && o < n){
                    t = l.pop();
                    i = l[l.length - 1];
                    a.push(t);
                    n = i.pre;
                    c = e.value == "Math.pow" && i.value == "Math.pow";
                }
                l.push(e);
            }
        }
    }
    return new module2142(a);
};
export default module2142;
