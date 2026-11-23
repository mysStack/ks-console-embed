import module71 from "unpacked/module-71.js";
import module94 from "unpacked/module-94.js";
export default ((e, t, n)=>{
    let a = null;
    let i = null;
    let l = null;
    try {
        l = new module94(t, n);
    } catch (e) {
        return null;
    }
    e.forEach((e)=>{
        if (l.test(e)) {
            if (!(a && i.compare(e) !== 1)) {
                a = e;
                i = new module71(a, n);
            }
        }
    });
    return a;
});
