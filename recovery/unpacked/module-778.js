import "./module-15.js";
import { inject } from "./module-239.js";
import { renderRoutes } from "./module-317.js";
import module1782 from "./module-1782.js";
import module3656 from "./module-3656.js";
const c = inject("rootStore")(function(e) {
    e.rootStore.registerActions(module1782);
    return renderRoutes(module3656);
});
export default c;
