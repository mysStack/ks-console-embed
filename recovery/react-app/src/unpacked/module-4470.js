const module822 = require("unpacked/module-822.js").default;
module822(module822.S + module822.F * require("unpacked/module-990.js").default(function() {
    return Math.imul(4294967295, 5) != -5 || Math.imul.length != 2;
}), "Math", {
    imul: function(e, t) {
        const n = +e;
        const r = +t;
        const o = 65535 & n;
        const i = 65535 & r;
        return 0 | o * i + ((65535 & n >>> 16) * i + o * (65535 & r >>> 16) << 16 >>> 0);
    }
});
