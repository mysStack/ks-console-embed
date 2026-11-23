import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-192.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module136 from "unpacked/module-136.js";
import module63 from "unpacked/module-63.js";
import module74 from "unpacked/module-74.js";
import module186 from "unpacked/module-186.js";
import module2196 from "components/Forms/AlertingPolicy/AlertingRules/RuleList";
import module2200 from "components/Forms/AlertingPolicy/AlertingRules/AddRuleForm";
export default function(e) {
    const t = module553.useState(false);
    const a = module96(t, 2);
    const r = a[0];
    const n = a[1];
    const o = module553.useState(module26(e, "formTemplate"));
    const h = module96(o, 2);
    const y = h[0];
    const g = h[1];
    const b = module553.useState(null);
    const S = module96(b, 2);
    const _ = S[0];
    const O = S[1];
    const C = module553.useState({});
    const T = module96(C, 2);
    const editRule = T[0];
    const D = T[1];
    const N = ()=>{
        O(null);
        D({});
    };
    return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Form, {
        data: y,
        ref: e.formRef
    }), module553.default.createElement("div", null, r ? module553.default.createElement(module2200, {
        ...e,
        formTemplate: y,
        onCancel: function() {
            n(false);
            N();
        },
        onSave: function(e) {
            const t = module26(y, "spec.rules", []);
            if (module63(editRule)) {
                t.push(e);
            } else {
                const a = {
                    ...module136(t[_]),
                    ...e
                };
                t.splice(_, 1, a);
            }
            g({
                ...y,
                spec: {
                    ...y.spec,
                    rules: t
                }
            });
            n(false);
            N();
        },
        editRule
    }) : module553.default.createElement(module2196, {
        formTemplate: y,
        AddRuleClick: function() {
            return n(true);
        },
        handleEdit: function(e, t) {
            n(true);
            D(module136(t));
            O(e);
        },
        handleDisable: function(e, t) {
            const a = module26(y, "spec.rules", []);
            module74(a[e], "disable", t);
            g({
                ...y,
                spec: {
                    ...y.spec,
                    rules: a
                }
            });
        },
        handleDelete: function(e) {
            const t = module26(y, "spec.rules", []);
            t.splice(e, 1);
            g({
                ...y,
                spec: {
                    ...y.spec,
                    rules: t
                }
            });
        },
        onEdit: e.onEdit,
        index: "ruleList",
        builtInRule: module26(e, "type", "custom") === "builtin"
    })));
};
