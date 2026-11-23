import "unpacked/module-15.js";
import { inject } from "unpacked/module-239.js";
import { renderRoutes } from "utils/router.config";
import module4340 from "pages/access/routes";
const c = inject("rootStore")(function() {
    return renderRoutes(module4340);
});
export default c;
