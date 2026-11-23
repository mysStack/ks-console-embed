import module822 from "unpacked/module-822.js";
module822(module822.S, "Math", {
    hypot: function(e, t) {
        let n;
        let r;
        let i = 0;
        for(var a = 0, l = arguments.length, u = 0; a < l;){
            if (u < (n = Math.abs(arguments[a++]))) {
                i = i * (r = u / n) * r + 1;
                u = n;
            } else {
                i += n > 0 ? (r = n / u) * r : n;
            }
        }
        if (u === Infinity) {
            return Infinity;
        }
        return u * Math.sqrt(i);
    }
});
