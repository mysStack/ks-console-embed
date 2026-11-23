import module822 from "unpacked/module-822.js";
import module1885 from "unpacked/module-1885.js";
module822(module822.S, "Number", {
    isSafeInteger: function(e) {
        return module1885(e) && Math.abs(e) <= 9007199254740991;
    }
});
