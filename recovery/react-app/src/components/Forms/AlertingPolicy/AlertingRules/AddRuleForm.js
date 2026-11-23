import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-10.js";
import "unpacked/module-315.js";
import module61 from "unpacked/module-61.js";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module242 from "unpacked/module-242.js";
import { capitalize } from "utils/index";
import module2201 from "unpacked/module-2201.js";
import module2202 from "components/Forms/AlertingPolicy/AlertingRules/AddRuleForm/TemplateRule";
import module2209 from "components/Forms/AlertingPolicy/AlertingRules/AddRuleForm/CustomRule";
const b = [
    {
        label: t("RULE_TEMPLATE"),
        value: "ruleTemplate"
    },
    {
        label: t("CUSTOM_RULE"),
        value: "customRule"
    }
];
const useS = function(e, a) {
    const { editRule, namespace } = e;
    const l = module63(editRule) ? b[0].value : module63(module26(editRule, "exprBuilder", {})) ? b[1].value : b[0].value;
    const i = module553.useState(l);
    const S = module96(i, 2);
    const _ = S[0];
    const O = S[1];
    const CRef = module553.useRef();
    const T = function(t) {
        const e_onSave = e.onSave;
        const target = CRef.current.target;
        if (target) {
            target.validate(function() {
                const e = target.getData();
                if (_ === "ruleTemplate") {
                    const l = Object.keys(module26(e, "exprBuilder"))[0];
                    const o = module26(e, `exprBuilder.${l}.for`);
                    const c = module26(e, `exprBuilder.${l}.severity`);
                    module74(e, "for", o);
                    module74(e, "severity", c);
                    module74(e, "expr", "");
                    module242(e, `exprBuilder.${l}.for`);
                    module242(e, `exprBuilder.${l}.severity`);
                    if (namespace) {
                        module74(e, "exprBuilder.workload.kind", capitalize(module26(e, "exprBuilder.workloadKind.kind")));
                        module74(e, "exprBuilder.workload.names", module61(module26(e, "exprBuilder.workloadKind.names")));
                        module242(e, "exprBuilder.workloadKind");
                    }
                }
                e_onSave(e);
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
            a_registerSubRoute(T, e_onCancel);
        }
    }, [
        _
    ]);
    return module553.default.createElement("div", {
        className: module2201.AddRuleContainer
    }, module553.default.createElement("div", {
        className: "h6",
        style: {
            display: "flex",
            alignItems: "center"
        }
    }, module553.default.createElement(module186.Icon, {
        name: "return",
        size: 20,
        onClick: function() {
            const a_resetSubRoute = a.resetSubRoute;
            if (a_resetSubRoute) {
                a_resetSubRoute();
            }
            e.onCancel();
        }
    }), module553.default.createElement("span", null, t("ADD_ALERTING_RULE"))), module553.default.createElement("div", {
        className: module2201.AddForm
    }, module553.default.createElement(module186.RadioGroup, {
        buttonWidth: 132,
        value: _,
        wrapClassName: "radio",
        onChange: function(e) {
            return O(e);
        }
    }, b.map((e)=>module553.default.createElement(module186.RadioButton, {
            key: e.value,
            value: e.value
        }, e.label))), _ === "ruleTemplate" ? module553.default.createElement(module2202, {
        ref: CRef,
        ...e
    }) : module553.default.createElement(module2209, {
        ref: CRef,
        ...e
    })));
};
useS.contextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
};
export default useS;
