import "unpacked/module-15.js";
import { inject } from "unpacked/module-239.js";
import { renderRoutes } from "utils/router.config";
import module1782 from "pages/clusters/actions/index";
import module3656 from "pages/clusters/routes";
const c = inject("rootStore")(function(e) {
    e.rootStore.registerActions(module1782);
    return renderRoutes(module3656);
});
export default c;
