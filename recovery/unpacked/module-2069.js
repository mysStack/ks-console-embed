import "./module-15.js";
import "./module-18.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import { ALERT_GROUP_MAX_LIMIT } from "./module-72.js";
import module2070 from "./module-2070.js";
import module2071 from "./module-2071.js";
export default function(e) {
    const { AddRuleClick, formTemplate, handleEdit, handleDisable, handleDelete, onEdit, allClusters, isEditRule } = e;
    const v = module553.useState(module26(formTemplate, "spec.rules", []));
    const g = module96(v, 1)[0];
    return module553.default.createElement("div", {
        className: module2070.ruleContainer
    }, g.map((rule, a)=>module553.default.createElement(module2071, {
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
            allClusters,
            isEditRule,
            builtInRule: e.builtInRule
        })), !e.builtInRule && g.length < ALERT_GROUP_MAX_LIMIT && module553.default.createElement("div", {
        className: module2070.addRuleContainer,
        onClick: function() {
            AddRuleClick();
        }
    }, module553.default.createElement("span", null, t("ADD_ALERTING_RULE")), module553.default.createElement("span", null, t("ADD_ALERTING_RULE_DESC"))));
};
