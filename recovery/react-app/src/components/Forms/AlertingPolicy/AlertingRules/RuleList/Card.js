import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-73.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-10.js";
import "unpacked/module-316.js";
import "unpacked/module-24.js";
import "unpacked/module-64.js";
import module31 from "unpacked/module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "unpacked/module-4.js";
import * as module553 from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module136 from "unpacked/module-136.js";
import module3 from "unpacked/module-3.js";
import { RESOURCE_METRICS_CONFIG } from "unpacked/module-924.js";
import module881 from "unpacked/module-881.js";
import module2199 from "unpacked/module-2199.js";
const E = {
    cpu: "cpu",
    pod: "pod",
    memory: "memory",
    disk: "storage",
    network: "network"
};
export default function(e) {
    let a;
    let r;
    let n;
    let l;
    let y;
    let alterTypeText;
    let b;
    let comparator;
    let thresholds;
    let unit;
    let durationValue;
    let T;
    let R;
    let D;
    const { rule, handleEdit } = e;
    const I = module63(module26(rule, "exprBuilder", "")) ? "custom" : "template";
    const P = !module63(module26(rule, "exprBuilder", "")) && Object.keys(rule.exprBuilder)[0];
    const A = module553.useState(module26(rule, "disable", false));
    const w = module96(A, 2);
    const M = w[0];
    const L = w[1];
    const j = module136(RESOURCE_METRICS_CONFIG[P || "node"]) || {};
    return module553.default.createElement("div", {
        className: module2199.container
    }, module553.default.createElement("div", {
        className: module2199.head
    }, module553.default.createElement("div", {
        className: module2199.title
    }, (D = Object.keys(module26(rule.exprBuilder, `${P}.metricThreshold.`, {}))[0] || "pod", module553.default.createElement("div", {
        className: module3(module2199.icon, (R = {}, module31(R, module2199.iconDisabled, M), module31(R, module2199.iconOn, !M), R))
    }, I === "custom" ? module553.default.createElement(module186.Icon, {
        name: "computing-setting",
        size: 40
    }) : module553.default.createElement(module186.Icon, {
        size: 40,
        name: E[D]
    }))), module553.default.createElement("div", {
        className: module2199.text
    }, module553.default.createElement("p", null, module553.default.createElement("span", {
        className: module2199.ruleName
    }, rule.alert), module553.default.createElement(module881, {
        data: module26(rule, "severity")
    })), module553.default.createElement("p", null, M ? t("DISABLED") : t("ENABLED")))), module553.default.createElement("div", {
        className: module2199.opt
    }, !e.builtInRule && module553.default.createElement("div", {
        className: module2199.iconBg
    }, module553.default.createElement(module186.Icon, {
        name: "trash",
        size: 16,
        onClick: function() {
            e.handleDelete();
        }
    })), module553.default.createElement("div", {
        className: module2199.iconBg
    }, module553.default.createElement(module186.Icon, {
        name: "pen",
        size: 16,
        onClick: function() {
            return handleEdit();
        }
    })), module553.default.createElement("div", {
        className: module2199.sToggle
    }, module553.default.createElement("div", {
        className: module2199.tooltip
    }, module553.default.createElement("span", null, M ? t("ENABLE_RULE") : t("DISABLE_RULE"))), module553.default.createElement("div", {
        className: module2199.triangle
    }), module553.default.createElement(module186.Toggle, {
        checked: !M,
        onChange: function() {
            L(!M);
            e.handleDisable(!M);
        }
    })))), module553.default.createElement("div", {
        className: module2199.desc
    }, I === "template" ? (a = module26(rule, `exprBuilder.${P}.names`, []), r = module26(rule, `exprBuilder.${P}.metricThreshold`), n = Object.keys(r)[0], l = Object.keys(r[n])[0], y = j[`${n}:${l}`], alterTypeText = t(`${y.label}`).replace(/[(（]%[)）]/g, "").replace(/\s$/, ""), b = y.ruleConfig.filter((e)=>e.name === "thresholds")[0].reverser, comparator = module26(rule, `exprBuilder.${P}.comparator`), thresholds = b(Number(Object.values(r[n])[0])), unit = y.ruleConfig[1].unit === "core" ? thresholds === 1 ? t("CORE") : t("CORE_PL") : y.ruleConfig[1].unit, durationValue = rule.for.slice(0, -1), T = rule.for.slice(-1), module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
        className: module2199.rule_inline
    }, module553.default.createElement("span", {
        className: module2199.title
    }, t("MONITORING_TARGETS"), ":"), module553.default.createElement("span", {
        className: module2199.descText
    }, a.join(", "))), module553.default.createElement("div", {
        className: module2199.last_inline
    }, module553.default.createElement("span", {
        className: module2199.title
    }, t("TRIGGER_CONDITION"), ":"), module553.default.createElement("span", {
        className: module2199.descText
    }, unit === "%" ? t({
        s: "ALERT_RULE_TEXT_PERCENT_SECOND",
        m: "ALERT_RULE_TEXT_PERCENT_MINUTE",
        h: "ALERT_RULE_TEXT_PERCENT_HOUR"
    }[T], {
        alterTypeText,
        comparator,
        thresholds,
        durationValue
    }) : t({
        s: "ALERT_RULE_TEXT_SECOND",
        m: "ALERT_RULE_TEXT_MINUTE",
        h: "ALERT_RULE_TEXT_HOUR"
    }[T], {
        alterTypeText,
        comparator,
        thresholds,
        unit,
        durationValue
    }))))) : module553.default.createElement("div", {
        className: module2199.customLine
    }, module553.default.createElement("span", {
        className: module2199.title
    }, t("RULE_EXPRESSION"), ":"), module553.default.createElement("span", {
        className: module2199.exprText
    }, rule.expr))));
};
