import module71 from "./module-71.js";
import module94 from "./module-94.js";
import module235 from "./module-235.js";
export default ((e, t)=>{
    e = new module94(e, t);
    let n = new module71("0.0.0");
    if (e.test(n)) {
        return n;
    }
    n = new module71("0.0.0-0");
    if (e.test(n)) {
        return n;
    }
    n = null;
    for(let o = 0; o < e.set.length; ++o){
        const t = e.set[o];
        let i = null;
        t.forEach((e)=>{
            const t = new module71(e.semver.version);
            switch(e.operator){
                case ">":
                    if (t.prerelease.length === 0) {
                        t.patch++;
                    } else {
                        t.prerelease.push(0);
                    }
                    t.raw = t.format();
                case "":
                case ">=":
                    if (!(i && !module235(t, i))) {
                        i = t;
                    }
                    break;
                case "<":
                case "<=":
                    break;
                default:
                    throw new Error(`Unexpected operation: ${e.operator}`);
            }
        });
        if (!(!i || n && !module235(n, i))) {
            n = i;
        }
    }
    if (n && e.test(n)) {
        return n;
    }
    return null;
});
