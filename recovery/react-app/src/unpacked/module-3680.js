import "unpacked/module-15.js";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "unpacked/module-553.js";
import module788 from "components/Base/Modal";
import module3681 from "unpacked/module-3681.js";
import module3684 from "unpacked/module-3684.js";
const d = module553.memo(function(e) {
    const e_visible = e.visible;
    const n = e_visible === undefined || e_visible;
    const { onCancel, type, cluster } = e;
    const f = module553.useState(false);
    const p = module96(f, 2);
    const visible = p[0];
    const h = p[1];
    module553.useEffect(function() {
        h(n);
    }, [
        n
    ]);
    const onCancel_1 = module553.useCallback(function() {
        h(false);
        onCancel?.();
    }, []);
    return module553.default.createElement(module788, {
        bodyClassName: module3684.body,
        title: t("RESOURCE_USAGE_RANKING"),
        visible,
        onCancel: onCancel_1,
        fullScreen: true,
        hideFooter: true
    }, module553.default.createElement(module3681, {
        type,
        cluster
    }));
});
export default d;
