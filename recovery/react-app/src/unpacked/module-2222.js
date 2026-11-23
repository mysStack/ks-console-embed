import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-315.js";
import "./module-31.js";
import "./module-58.js";
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import module1 from "./module-1.js";
import { ReactComponent } from "./module-882.js";
import module2223 from "./module-2223.js";
import module2224 from "./module-2224.js";
import { getDMPQuery } from "./module-931.js";
const useY = function(e, a) {
    const rRef = module553.useRef();
    const cluster_id = module26(e.formTemplate, "metadata.labels.app_instance", e.cluster_id);
    const l = function(t) {
        const e_onSave = e.onSave;
        const target = rRef.current.target;
        if (target) {
            rRef.current.target.validate(function() {
                const r = target.getData();
                const { exprBuilder, ...rest } = r;
                const expr = getDMPQuery({
                    rule: exprBuilder,
                    duration: rest.for,
                    cluster_id,
                    namespace: e.namespace
                });
                e_onSave({
                    ...rest,
                    expr,
                    rule: exprBuilder
                });
                if (t) {
                    t();
                }
            });
        }
    };
    module553.useEffect(function() {
        const a_registerSubRoute = a.registerSubRoute;
        const e_onCancel = e.onCancel;
        if (a_registerSubRoute) {
            a_registerSubRoute(l, e_onCancel);
        }
    }, []);
    return module553.default.createElement("div", {
        className: module2223.AddRuleContainer
    }, module553.default.createElement("div", {
        className: "h6"
    }, module553.default.createElement("span", {
        style: {
            cursor: "pointer"
        },
        onClick: function() {
            const a_resetSubRoute = a.resetSubRoute;
            if (a_resetSubRoute) {
                a_resetSubRoute();
            }
            e.onCancel();
        }
    }, module553.default.createElement(ReactComponent, null), module553.default.createElement("span", null, t("ADD_ALERTING_RULE")))), module553.default.createElement("div", {
        className: module2223.AddForm
    }, module553.default.createElement(module2224, {
        ref: rRef,
        ...e
    })));
};
useY.contextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
};
export default useY;
