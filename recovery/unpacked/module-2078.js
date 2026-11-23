import "./module-15.js";
import "./module-18.js";
import "./module-10.js";
import "./module-315.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module242 from "./module-242.js";
import module2079 from "./module-2079.js";
import module2080 from "./module-2080.js";
import module2098 from "./module-2098.js";
const y = [
    {
        label: t("RULE_TEMPLATE"),
        value: "ruleTemplate"
    },
    {
        label: t("CUSTOM_RULE"),
        value: "customRule"
    }
];
const useE = function(e, a) {
    const e_editRule = e.editRule;
    const n = module63(e_editRule) ? y[0].value : module63(module26(e_editRule, "exprBuilder", {})) ? y[1].value : y[0].value;
    const l = module553.useState(n);
    const c = module96(l, 2);
    const E = c[0];
    const b = c[1];
    const ref = module553.useRef();
    const O = function(t) {
        const e_onSave = e.onSave;
        const target = ref.current.target;
        if (target) {
            target.validate(function() {
                const e = target.getData();
                if (E === "ruleTemplate") {
                    const n = Object.keys(module26(e, "exprBuilder"))[0];
                    const l = module26(e, `exprBuilder.${n}.for`);
                    const u = module26(e, `exprBuilder.${n}.severity`);
                    module74(e, "for", l);
                    module74(e, "severity", u);
                    module242(e, `exprBuilder.${n}.for`);
                    module242(e, `exprBuilder.${n}.severity`);
                } else {
                    module74(e, "exprBuilder", {});
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
            a_registerSubRoute(O, e_onCancel);
        }
    }, [
        E
    ]);
    return module553.default.createElement("div", {
        className: module2079.AddRuleContainer
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
        className: module2079.AddForm
    }, module553.default.createElement(module186.RadioGroup, {
        buttonWidth: 132,
        value: E,
        wrapClassName: "radio",
        onChange: function(e) {
            return b(e);
        }
    }, y.map((e)=>module553.default.createElement(module186.RadioButton, {
            key: e.value,
            value: e.value
        }, e.label))), E === "ruleTemplate" ? module553.default.createElement(module2080, {
        ref,
        ...e
    }) : module553.default.createElement(module2098, {
        ref,
        ...e
    })));
};
useE.contextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
};
export default useE;
