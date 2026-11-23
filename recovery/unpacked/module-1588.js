import module798 from "./module-798.js";
(function(e) {
    module798(e);
    let t;
    let n;
    let r;
    const i = e.replace(/[- ]+/g, "");
    let a = 0;
    for(let l = i.length - 1; l >= 0; l--){
        t = i.substring(l, l + 1);
        n = parseInt(t, 10);
        a += r && (n *= 2) >= 10 ? n % 10 + 1 : n;
        r = !r;
    }
    return !(a % 10 != 0 || !i);
});
export default exports.default;
