import module21 from "./module-21.js";
import module80 from "./module-80.js";
import module46 from "./module-46.js";
const a = /"/g;
const l = module21("".replace);
export default function(e, t, n, r) {
    const u = module46(module80(e));
    let s = `<${t}`;
    if (n !== "") {
        s += ` ${n}="${l(module46(r), a, "&quot;")}"`;
    }
    return `${s}>${u}</${t}>`;
};
