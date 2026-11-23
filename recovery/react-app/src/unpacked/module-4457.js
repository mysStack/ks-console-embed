import module822 from "unpacked/module-822.js";
import module1880 from "unpacked/module-1880.js";
module822(module822.S + module822.F * !(Math.acosh && Math.floor(Math.acosh(Number.MAX_VALUE)) == 710 && Math.acosh(Infinity) == Infinity), "Math", {
    acosh: function(e) {
        if ((e = +e) < 1) {
            return NaN;
        }
        if (e > 94906265.62425156) {
            return Math.log(e) + Math.LN2;
        }
        return module1880(e - 1 + Math.sqrt(e - 1) * Math.sqrt(e + 1));
    }
});
