import "unpacked/module-15.js";
import { inject } from "unpacked/module-239.js";
import { renderRoutes } from "utils/router.config";
import module5174 from "pages/edgewize/routes";
const u = inject("rootStore")(function() {
    return renderRoutes(module5174);
});
export default u;
