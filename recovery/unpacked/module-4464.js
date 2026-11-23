import module822 from "./module-822.js";
module822(module822.S, "Math", {
    clz32: function(e) {
        if (e >>>= 0) {
            return 31 - Math.floor(Math.log(e + 0.5) * Math.LOG2E);
        }
        return 32;
    }
});
