import module8 from "./module-8.js";
import module77 from "./module-77.js";
import module99 from "./module-99.js";
import module353 from "./module-353.js";
import module340 from "./module-340.js";
import module263 from "./module-263.js";
module8({
    target: "Array",
    proto: true,
    arity: 1,
    forced: [].unshift(0) !== 1 || !(()=>{
        try {
            Object.defineProperty([], "length", {
                writable: false
            }).unshift();
        } catch (error) {
            return error instanceof TypeError;
        }
    })()
}, {
    unshift: function(e) {
        const t = module77(this);
        const n = module99(t);
        const arguments_length = arguments.length;
        if (arguments_length) {
            module263(n + arguments_length);
            for(let s = n; s--;){
                const c = s + arguments_length;
                if (s in t) {
                    t[c] = t[s];
                } else {
                    module340(t, c);
                }
            }
            for(let f = 0; f < arguments_length; f++){
                t[f] = arguments[f];
            }
        }
        return module353(t, n + arguments_length);
    }
});
