import "./module-15.js";
import "./module-48.js";
import "./module-24.js";
import "./module-193.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import { learnMoreTip } from "./module-52.js";
import { durationUnitOptions } from "./module-994.js";
import module1082 from "./module-1082.js";
import module2210 from "./module-2210.js";
import module996 from "./module-996.js";
import module1029 from "./module-1029.js";
import module2213 from "./module-2213.js";
const E = module553.forwardRef(function(e, a) {
    const e_editRule = e.editRule;
    const nRef = module553.useRef();
    module553.useImperativeHandle(a, function() {
        return {
            target: nRef.current
        };
    });
    const l = module553.useState({
        alert: module26(e_editRule, "alert", ""),
        annotations: {
            summary: module26(e_editRule, "annotations.summary", ""),
            message: module26(e_editRule, "annotations.message", "")
        },
        for: module26(e_editRule, "for", ""),
        expr: module26(e_editRule, "expr", ""),
        severity: module26(e_editRule, "severity", "critical"),
        disable: module26(e_editRule, "disable", false),
        labels: module26(e_editRule, "labels")
    });
    const data = module96(l, 1)[0];
    return module553.default.createElement(module186.Form, {
        data,
        ref: nRef
    }, module553.default.createElement("div", {
        className: module2213.label
    }, t("RULE_SETTINGS")), module553.default.createElement("div", {
        className: module2213.contentGroup
    }, module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
        label: t("RULE_NAME"),
        desc: t("CUSTOM_RULE_NAME_DESC"),
        rules: [
            {
                required: true,
                message: t("RULE_NAME_REQUIRED")
            }
        ]
    }, module553.default.createElement(module186.Input, {
        name: "alert",
        maxLength: 63
    }))), module553.default.createElement(module186.Column, null)), module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
        label: t("DURATION"),
        desc: t("ALERT_DURATION"),
        rules: [
            {
                validator: function(e, a, r) {
                    const n = a.slice(0, -1);
                    if (!/^[0-9]*$/.test(n)) {
                        return r({
                            message: t("INVALID_TIME_DESC")
                        });
                    }
                    r();
                }
            }
        ]
    }, module553.default.createElement(module1082, {
        name: "for",
        inputClassName: module2213.duration,
        unitOptions: durationUnitOptions,
        defaultValue: durationUnitOptions[1].value
    }))), module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
        label: t("SEVERITY"),
        rules: [
            {
                required: true,
                message: t("SEVERITY_REQUIRED")
            }
        ]
    }, module553.default.createElement(module1029, {
        name: "severity",
        defaultValue: "critical"
    })))), module553.default.createElement(module186.Form.Item, {
        label: t("RULE_EXPRESSION"),
        desc: learnMoreTip(t.html("ALERT_RULE_EXPRESSION_DESC")),
        rules: [
            {
                required: true,
                message: t("ALERT_RULE_REQUIRED")
            }
        ]
    }, module553.default.createElement(module2210, {
        name: "expr",
        store: e.store,
        cluster: e.cluster,
        namespace: e.namespace
    }))), module553.default.createElement(module996, null), module553.default.createElement("div", {
        className: module2213.label
    }, t("MESSAGE_SETTINGS")), module553.default.createElement("div", {
        className: module2213.contentGroup
    }, module553.default.createElement(module186.Form.Item, {
        className: module2213.message,
        label: t("MESSAGE_SUMMARY"),
        desc: t("MESSAGE_SUMMARY_DESC"),
        rules: [
            {
                required: true,
                message: t("MESSAGE_REQUIRED")
            }
        ]
    }, module553.default.createElement(module186.Input, {
        name: "annotations.summary",
        maxLength: 63
    })), module553.default.createElement(module186.Form.Item, {
        className: module2213.message,
        label: t("MESSAGE_DETAILS"),
        desc: t("MESSAGE_DETAILS_DESC")
    }, module553.default.createElement(module186.TextArea, {
        name: "annotations.message",
        maxLength: 256
    }))));
});
export default E;
