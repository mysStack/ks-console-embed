import module822 from "unpacked/module-822.js";
import module964 from "unpacked/module-964.js";
const module964_isFinite = module964.isFinite;
module822(module822.S, "Number", {
    isFinite: function(e) {
        return typeof e === "number" && module964_isFinite(e);
    }
});
