import "./module-15.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import { observer } from "./module-239.js";
import "./module-241.js";
import module788 from "./module-788.js";
import module186 from "./module-186.js";
import "./module-322.js";
import "./module-854.js";
import module953 from "./module-953.js";
import module1308 from "./module-1308.js";
import module3014 from "./module-3014.js";
new module953;
export const BoundNodeGroupModal = observer(function({ cluster, visible, onCancel, onOk }) {
    const ref = module553.createRef();
    const f = module553.useState();
    const m = module96(f, 2);
    const v = m[0];
    const h = m[1];
    return module553.default.createElement(module788, {
        bodyClassName: module3014["tree-modal-body"],
        visible,
        width: 600,
        title: t("BOUND_NODE_GROUP"),
        onOk: function() {
            onOk(v);
        },
        onCancel
    }, module553.default.createElement(module186.Form, {
        ref
    }, module553.default.createElement(module186.Form.Item, {
        label: t("NODE_GROUP")
    }, module553.default.createElement(module1308, {
        cluster,
        onSelect: function(e) {
            h(e);
        }
    }))));
});
export default BoundNodeGroupModal;
