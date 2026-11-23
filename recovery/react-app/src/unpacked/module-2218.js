import "./module-15.js";
import "./module-18.js";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import module2219 from "./module-2219.js";
import module2220 from "./module-2220.js";
export default function({ AddRuleClick, formTemplate, handleEdit, handleDisable, handleDelete, onEdit }) {
    const p = module553.useState(module26(formTemplate, "spec.rules", []));
    const m = module96(p, 1)[0];
    return module553.default.createElement("div", {
        className: module2219.ruleContainer
    }, m.map((rule, t)=>module553.default.createElement(module2220, {
            rule,
            key: t,
            handleEdit: function() {
                return ((e, rule_1)=>{
                    handleEdit(e, rule_1);
                    if (onEdit) {
                        onEdit();
                    }
                })(t, rule);
            },
            handleDisable: function(e) {
                return handleDisable(t, e);
            },
            handleDelete: function() {
                return handleDelete(t);
            }
        })), module553.default.createElement("div", {
        className: module2219.addRuleContainer,
        onClick: function() {
            AddRuleClick();
        }
    }, module553.default.createElement("span", null, t("ADD_ALERTING_RULE")), module553.default.createElement("span", null, t("ADD_ALERTING_RULE_DESC"))));
};
