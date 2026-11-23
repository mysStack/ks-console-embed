import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-31.js";
import "./module-58.js";
import { Modal } from "./module-904.js";
import modal from "./module-2712.js";
function s(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const i = {
    "pod.events": {
        on: function({ store, detail, success, ...rest }) {
            var f = Modal.open({
                onOk: function() {
                    Modal.close(f);
                    if (success) {
                        success();
                    }
                },
                store,
                modal,
                title: t("REMOVE_CLUSTER"),
                resource: detail.name,
                detail,
                hideFooter: true,
                ...rest
            });
        }
    }
};
export default i;
