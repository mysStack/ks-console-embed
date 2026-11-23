import module822 from "unpacked/module-822.js";
module822(module822.S + module822.F * !(Math.atanh && 1 / Math.atanh(-0) < 0), "Math", {
    atanh: function(e) {
        if ((e = +e) == 0) {
            return e;
        }
        return Math.log((1 + e) / (1 - e)) / 2;
    }
});
