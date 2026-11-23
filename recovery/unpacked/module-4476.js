import module822 from "./module-822.js";
import module1423 from "./module-1423.js";
module822(module822.S, "Math", {
    tanh: function(e) {
        const t = module1423(e = +e);
        const n = module1423(-e);
        if (t == Infinity) {
            return 1;
        }
        if (n == Infinity) {
            return -1;
        }
        return (t - n) / (Math.exp(e) + Math.exp(-e));
    }
});
