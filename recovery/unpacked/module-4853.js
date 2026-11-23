import module4854 from "./module-4854.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
export default function(e) {
    const t = `${e.name}`;
    const n = module4854[t];
    for(let i = hasOwnProperty.call(module4854, t) ? n.length : 0; i--;){
        const a = n[i];
        const l = a.func;
        if (l == null || l == e) {
            return a.name;
        }
    }
    return t;
};
