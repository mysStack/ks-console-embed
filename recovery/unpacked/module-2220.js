import "./module-15.js";
import "./module-10.js";
import module31 from "./module-31.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module881 from "./module-881.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module3 from "./module-3.js";
import module2221 from "./module-2221.js";
const v = {
    cpu: "cpu",
    pod: "pod",
    memory: "memory",
    disk: "storage",
    network: "network"
};
export default function(e) {
    let a;
    let r;
    const { rule, handleEdit } = e;
    const h = !module63(module26(rule, "exprBuilder", "")) && Object.keys(rule.exprBuilder)[0];
    const E = module553.useState(module26(rule, "disable", false));
    const y = module96(E, 2);
    const g = y[0];
    const b = y[1];
    return module553.default.createElement("div", {
        className: module2221.container
    }, module553.default.createElement("div", {
        className: module2221.head
    }, module553.default.createElement("div", {
        className: module2221.title
    }, (r = Object.keys(module26(rule.exprBuilder, `${h}.thresholds.`, {}))[0] || "pod", module553.default.createElement("div", {
        className: module3(module2221.icon, (a = {}, module31(a, module2221.iconDisabled, g), module31(a, module2221.iconOn, !g), a))
    }, module553.default.createElement(module186.Icon, {
        size: 40,
        name: v[r]
    }))), module553.default.createElement("div", {
        className: module2221.text
    }, module553.default.createElement("p", null, module553.default.createElement("span", null, rule.alert), module553.default.createElement(module881, {
        data: module26(rule, "severity")
    })), module553.default.createElement("p", null, g ? t("DISABLED") : t("ENABLED")))), module553.default.createElement("div", {
        className: module2221.opt
    }, module553.default.createElement(module186.Icon, {
        name: "trash",
        size: 16,
        onClick: function() {
            e.handleDelete();
        }
    }), module553.default.createElement(module186.Icon, {
        name: "pen",
        size: 16,
        onClick: function() {
            return handleEdit();
        }
    }), module553.default.createElement("div", {
        className: module2221.sToggle
    }, module553.default.createElement("div", {
        className: module2221.tooltip
    }, g ? t("DISABLED") : t("ENABLED")), module553.default.createElement("div", {
        className: module2221.triangle
    }), module553.default.createElement(module186.Toggle, {
        checked: !g,
        onChange: function() {
            b(!g);
            e.handleDisable(!g);
        }
    })))), module553.default.createElement("div", {
        className: module2221.desc
    }, module553.default.createElement("div", null, module553.default.createElement("span", {
        className: module2221.title
    }, `${t("RULE_EXPRESSION")}:`), module553.default.createElement("span", {
        className: module2221.descText
    }, rule.expr))));
};
