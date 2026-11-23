import module2140 from "./module-2140.js";
module2140.prototype.formulaEval = function() {
    "use strict";
    let e;
    let t;
    let n;
    const r = [];
    for(let o = this.value, i = 0; i < o.length; i++){
        if (o[i].type === 1 || o[i].type === 3) {
            r.push({
                value: o[i].type === 3 ? o[i].show : o[i].value,
                type: 1
            });
        } else if (o[i].type === 13) {
            r.push({
                value: o[i].show,
                type: 1
            });
        } else if (o[i].type === 0) {
            r[r.length - 1] = {
                value: o[i].show + (o[i].show != "-" ? "(" : "") + r[r.length - 1].value + (o[i].show != "-" ? ")" : ""),
                type: 0
            };
        } else if (o[i].type === 7) {
            r[r.length - 1] = {
                value: (r[r.length - 1].type != 1 ? "(" : "") + r[r.length - 1].value + (r[r.length - 1].type != 1 ? ")" : "") + o[i].show,
                type: 7
            };
        } else if (o[i].type === 10) {
            e = r.pop();
            t = r.pop();
            if (o[i].show === "P" || o[i].show === "C") {
                r.push({
                    value: `<sup>${t.value}</sup>${o[i].show}<sub>${e.value}</sub>`,
                    type: 10
                });
            } else {
                r.push({
                    value: `${(t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "")}<sup>${e.value}</sup>`,
                    type: 1
                });
            }
        } else if (o[i].type === 2 || o[i].type === 9) {
            e = r.pop();
            t = r.pop();
            r.push({
                value: (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "") + o[i].show + (e.type != 1 ? "(" : "") + e.value + (e.type != 1 ? ")" : ""),
                type: o[i].type
            });
        } else if (o[i].type === 12) {
            e = r.pop();
            t = r.pop();
            n = r.pop();
            r.push({
                value: `${o[i].show}(${n.value},${t.value},${e.value})`,
                type: 12
            });
        }
    }
    return r[0].value;
};
export default module2140;
