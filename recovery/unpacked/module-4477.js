import module822 from "./module-822.js";
module822(module822.S, "Math", {
    trunc: function(e) {
        return (e > 0 ? Math.floor : Math.ceil)(e);
    }
});
