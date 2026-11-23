import module822 from "./module-822.js";
module822(module822.S + module822.F * !(Math.asinh && 1 / Math.asinh(0) > 0), "Math", {
    asinh: function e(t) {
        if (isFinite(t = +t) && t != 0) {
            if (t < 0) {
                return -e(-t);
            }
            return Math.log(t + Math.sqrt(t * t + 1));
        }
        return t;
    }
});
