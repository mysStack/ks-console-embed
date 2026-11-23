import "./module-15.js";
import "./module-18.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import { ALERT_GROUP_MAX_LIMIT } from "./module-72.js";
import module26 from "./module-26.js";
import module2197 from "./module-2197.js";
import module2198 from "./module-2198.js";
export default function(e) {
    const { AddRuleClick, formTemplate, handleEdit, handleDisable, handleDelete, onEdit } = e;
    const m = module553.useState(module26(formTemplate, "spec.rules", []));
    const v = module96(m, 1)[0];
    return module553.default.createElement("div", {
        className: module2197.ruleContainer
    }, v.map((rule, a)=>module553.default.createElement(module2198, {
            rule,
            key: a,
            handleEdit: function() {
                return ((e, rule_1)=>{
                    handleEdit(e, rule_1);
                    if (onEdit) {
                        onEdit();
                    }
                })(a, rule);
            },
            handleDisable: function(e) {
                return handleDisable(a, e);
            },
            handleDelete: function() {
                return handleDelete(a);
            },
            builtInRule: e.builtInRule
        })), !e.builtInRule && v.length < ALERT_GROUP_MAX_LIMIT && module553.default.createElement("div", {
        className: module2197.addRuleContainer,
        onClick: function() {
            AddRuleClick();
        }
    }, module553.default.createElement("span", null, t("ADD_ALERTING_RULE")), module553.default.createElement("span", null, t("ADD_ALERTING_RULE_DESC"))));
};
