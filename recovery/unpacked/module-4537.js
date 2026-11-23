import "./module-15.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module788 from "./module-788.js";
import module4538 from "./module-4538.js";
import module4540 from "./module-4540.js";
const d = module553.memo(function(e) {
    const e_visible = e.visible;
    const r = e_visible === undefined || e_visible;
    const { onCancel, currentResource } = e;
    const d = module553.useState(false);
    const f = module96(d, 2);
    const visible = f[0];
    const m = f[1];
    module553.useEffect(function() {
        m(r);
    }, [
        r
    ]);
    const onCancel_1 = module553.useCallback(function() {
        m(false);
        onCancel?.();
    }, []);
    return module553.default.createElement(module788, {
        bodyClassName: module4540.body,
        title: t("RESOURCE_USAGE_RANKING"),
        visible,
        onCancel: onCancel_1,
        fullScreen: true,
        hideFooter: true
    }, module553.default.createElement(module4538, {
        currentResource
    }));
});
export default d;
