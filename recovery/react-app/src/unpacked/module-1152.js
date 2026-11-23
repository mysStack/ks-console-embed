import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-192.js";
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
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import module136 from "./module-136.js";
import module63 from "./module-63.js";
import module74 from "./module-74.js";
import module186 from "./module-186.js";
import module2069 from "./module-2069.js";
import module2078 from "./module-2078.js";
import module2124 from "./module-2124.js";
export default function(e) {
    const t = module553.useState(false);
    const a = module96(t, 2);
    const r = a[0];
    const n = a[1];
    const u = module553.useState(module26(e, "formTemplate"));
    const g = module96(u, 2);
    const E = g[0];
    const b = g[1];
    const _ = module553.useState(null);
    const O = module96(_, 2);
    const S = O[0];
    const C = O[1];
    const D = module553.useState({});
    const k = module96(D, 2);
    const editRule = k[0];
    const T = k[1];
    const R = module2124();
    const I = module96(R, 2);
    const allClusters = I[0];
    const fetchClusterList = I[1];
    const P = ()=>{
        C(null);
        T({});
    };
    return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Form, {
        data: E,
        ref: e.formRef
    }), module553.default.createElement("div", null, r ? module553.default.createElement(module2078, {
        ...e,
        formTemplate: E,
        onCancel: function() {
            n(false);
            P();
        },
        onSave: function(e) {
            const t = module26(E, "spec.rules", []);
            if (module63(editRule)) {
                t.push(e);
            } else {
                const a = {
                    ...module136(t[S]),
                    ...e
                };
                t.splice(S, 1, a);
            }
            b({
                ...E,
                spec: {
                    ...E.spec,
                    rules: t
                }
            });
            n(false);
            P();
        },
        editRule,
        allClusters,
        fetchClusterList
    }) : module553.default.createElement(module2069, {
        formTemplate: E,
        AddRuleClick: function() {
            return n(true);
        },
        handleEdit: function(e, t) {
            n(true);
            T(module136(t));
            C(e);
        },
        handleDisable: function(e, t) {
            const a = module26(E, "spec.rules", []);
            module74(a[e], "disable", t);
            b({
                ...E,
                spec: {
                    ...E.spec,
                    rules: a
                }
            });
        },
        handleDelete: function(e) {
            const t = module26(E, "spec.rules", []);
            t.splice(e, 1);
            b({
                ...E,
                spec: {
                    ...E.spec,
                    rules: t
                }
            });
        },
        onEdit: e.onEdit,
        index: "ruleList",
        allClusters,
        fetchClusterList,
        isEditRule: module26(e, "editMode", false),
        builtInRule: module26(e, "type", "custom") === "builtin"
    })));
};
