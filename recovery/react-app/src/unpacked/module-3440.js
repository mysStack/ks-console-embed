import module1021 from "unpacked/module-1021.js";
const l = Object.create(null);
export default function(e) {
    let t;
    let n;
    for(var o = 0; l[e + (o || "")];){
        ++o;
    }
    l[e += o || ""] = true;
    Object.defineProperty(Object.prototype, t = `@@${e}`, module1021.gs(null, function(e) {
        if (!n) {
            n = true;
            Object.defineProperty(this, t, module1021(e));
            n = false;
        }
    }));
    return t;
};
