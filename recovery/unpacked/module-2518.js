import module798 from "./module-798.js";
(function(e) {
    module798(e);
    let t;
    let n;
    const r = Number(e.slice(-1));
    return i.test(e) && r === (n = 10 - (t = e).slice(0, -1).split("").map((e, n)=>Number(e) * ((e, t)=>{
            if (e === 8 || e === 14) {
                if (t % 2 == 0) {
                    return 3;
                }
                return 1;
            }
            if (t % 2 == 0) {
                return 1;
            }
            return 3;
        })(t.length, n)).reduce((acc, item)=>acc + item, 0) % 10, n < 10 ? n : 0);
});
var i = /^(\d{8}|\d{13}|\d{14})$/;
export default exports.default;
