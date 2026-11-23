import module414 from "./module-414.js";
import module122 from "./module-122.js";
export default function(e) {
    const t = module122(e);
    for(let n = t.length; n--;){
        const a = t[n];
        const i = e[a];
        t[n] = [
            a,
            i,
            module414(i)
        ];
    }
    return t;
};
