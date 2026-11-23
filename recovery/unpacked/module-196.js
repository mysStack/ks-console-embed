import module8 from "./module-8.js";
import module79 from "./module-79.js";
import module153 from "./module-153.js";
import module19 from "./module-19.js";
import module78 from "./module-78.js";
import module35 from "./module-35.js";
import module261 from "./module-261.js";
import module379 from "./module-379.js";
import module67 from "./module-67.js";
const d = module153 && module153.prototype;
module8({
    target: "Promise",
    proto: true,
    real: true,
    forced: !!module153 && module19(function() {
        d.finally.call({
            then: function() {}
        }, function() {});
    })
}, {
    finally: function(e) {
        const t = module261(this, module78("Promise"));
        const n = module35(e);
        return this.then(n ? (n)=>module379(t, e()).then(()=>n) : e, n ? (n)=>module379(t, e()).then(()=>{
                throw n;
            }) : e);
    }
});
if (!module79 && module35(module153)) {
    const p = module78("Promise").prototype.finally;
    if (d.finally !== p) {
        module67(d, "finally", p, {
            unsafe: true
        });
    }
}
