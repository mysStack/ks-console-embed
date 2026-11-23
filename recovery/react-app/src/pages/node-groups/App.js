import "unpacked/module-15.js";
import { inject } from "unpacked/module-239.js";
import { renderRoutes } from "utils/router.config";
import module5273 from "pages/node-groups/routes";
const c = inject("rootStore")(function() {
    return renderRoutes(module5273);
});
export default c;
