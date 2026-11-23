import "unpacked/module-15.js";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "unpacked/module-553.js";
import module788 from "components/Base/Modal";
import module1790 from "unpacked/module-1790.js";
import module4102 from "unpacked/module-4102.js";
const d = module553.memo(function(e) {
    const e_visible = e.visible;
    const r = e_visible === undefined || e_visible;
    const { onCancel, type, cluster } = e;
    const f = module553.useState(false);
    const p = module96(f, 2);
    const visible = p[0];
    const h = p[1];
    module553.useEffect(function() {
        h(r);
    }, [
        r
    ]);
    const onCancel_1 = module553.useCallback(function() {
        h(false);
        onCancel?.();
    }, []);
    return module553.default.createElement(module788, {
        bodyClassName: module4102.body,
        title: t("RESOURCE_USAGE_RANKING"),
        visible,
        onCancel: onCancel_1,
        fullScreen: true,
        hideFooter: true
    }, module553.default.createElement(module1790, {
        type,
        cluster
    }));
});
export default d;
