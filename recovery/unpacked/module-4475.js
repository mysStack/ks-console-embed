const module822 = require("./module-822.js").default;
const module1423 = require("./module-1423.js").default;
module822(module822.S + module822.F * require("./module-990.js").default(function() {
    return !Math.sinh(-2e-17) != -2e-17;
}), "Math", {
    sinh: function(e) {
        if (Math.abs(e = +e) < 1) {
            return (module1423(e) - module1423(-e)) / 2;
        }
        return (Math.exp(e - 1) - Math.exp(-e - 1)) * (Math.E / 2);
    }
});
