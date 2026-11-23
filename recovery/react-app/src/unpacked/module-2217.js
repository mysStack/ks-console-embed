import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-192.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-191.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-315.js";
import "./module-31.js";
import "./module-58.js";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import module136 from "./module-136.js";
import module63 from "./module-63.js";
import module74 from "./module-74.js";
import module186 from "./module-186.js";
import module2218 from "./module-2218.js";
import module2222 from "./module-2222.js";
export default function(e) {
    const t = module553.useState(false);
    const a = module96(t, 2);
    const r = a[0];
    const n = a[1];
    const o = module553.useState(module26(e, "formTemplate"));
    const E = module96(o, 2);
    const g = E[0];
    const b = E[1];
    const S = module553.useState(null);
    const _ = module96(S, 2);
    const O = _[0];
    const C = _[1];
    const T = module553.useState({});
    const R = module96(T, 2);
    const editRule = R[0];
    const N = R[1];
    const k = ()=>{
        C(null);
        N({});
    };
    module553.useEffect(function() {
        if (e.cluster_id) {
            module74(g, "metadata.labels.app_instance", e.cluster_id);
        }
        if (e.app_id) {
            module74(g, "metadata.labels.openpitrix_app_id", e.app_id);
        }
    }, []);
    return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Form, {
        data: g,
        ref: e.formRef
    }), module553.default.createElement("div", null, r ? module553.default.createElement(module2222, {
        ...e,
        formTemplate: g,
        onCancel: function() {
            n(false);
            k();
        },
        onSave: function({ rule, ...rest }) {
            const r = module26(g, "spec.rules", []);
            const l = JSON.parse(module26(g, "metadata.annotations.dmp_managed_field", "[]"));
            if (module63(editRule)) {
                r.push(rest);
                l.push(rule);
            } else {
                r.splice(O, 1, rest);
                l.splice(O, 1, rule);
            }
            module74(g, "metadata.annotations.dmp_managed_field", JSON.stringify(l));
            b({
                ...g,
                spec: {
                    ...g.spec,
                    rules: r
                }
            });
            n(false);
            k();
        },
        editRule
    }) : module553.default.createElement(module2218, {
        formTemplate: g,
        AddRuleClick: function() {
            return n(true);
        },
        handleEdit: function(e, t) {
            n(true);
            const exprBuilder = module26(JSON.parse(module26(g, "metadata.annotations.dmp_managed_field", "[]")), `[${e}]`);
            N({
                ...module136(t),
                exprBuilder
            });
            C(e);
        },
        handleDisable: function(e, t) {
            const a = module26(g, "spec.rules", []);
            module74(a[e], "disable", t);
            b({
                ...g,
                spec: {
                    ...g.spec,
                    rules: a
                }
            });
        },
        handleDelete: function(e) {
            const t = module26(g, "spec.rules", []);
            t.splice(e, 1);
            b({
                ...g,
                spec: {
                    ...g.spec,
                    rules: t
                }
            });
        },
        onEdit: e.onEdit,
        index: "ruleList"
    })));
};
