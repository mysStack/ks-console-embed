import "./module-15.js";
import "./module-48.js";
import "./module-24.js";
import "./module-193.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import module3 from "./module-3.js";
import { learnMoreTip } from "./module-52.js";
import module1082 from "./module-1082.js";
import module2101 from "./module-2101.js";
import module2111 from "./module-2111.js";
import module2123 from "./module-2123.js";
import { durationUnitOptions } from "./module-994.js";
import module996 from "./module-996.js";
import module1029 from "./module-1029.js";
const E = module553.forwardRef(function(e, a) {
    const e_editRule = e.editRule;
    const nRef = module553.useRef();
    module553.useImperativeHandle(a, function() {
        return {
            target: nRef.current
        };
    });
    const l = module553.useState(function() {
        return {
            alert: module26(e_editRule, "alert", ""),
            annotations: {
                summary: module26(e_editRule, "annotations.summary", ""),
                message: module26(e_editRule, "annotations.message", "")
            },
            clusterSelector: {
                inValues: module26(e_editRule, "clusterSelector.inValues", [])
            },
            for: module26(e_editRule, "for", ""),
            expr: module26(e_editRule, "expr", ""),
            severity: module26(e_editRule, "severity", "critical"),
            disable: module26(e_editRule, "disable", false),
            labels: module26(e_editRule, "labels")
        };
    });
    const data = module96(l, 1)[0];
    const b = module553.useCallback(function(e, a, r) {
        const n = a.slice(0, -1);
        if (!/^[0-9]*$/.test(n)) {
            return r({
                message: t("INVALID_TIME_DESC")
            });
        }
        r();
    }, []);
    const _ = module553.useCallback(function(e, a, r) {
        if (!a) {
            return r({
                message: t("CLUSTER_SETTINGS_LIMIT_DESC")
            });
        }
        r();
    }, []);
    return module553.default.createElement(module186.Form, {
        data,
        ref: nRef
    }, module553.default.createElement("div", {
        className: module2123.label
    }, t("CLUSTER_SETTINGS")), module553.default.createElement("div", {
        className: module2123.contentGroup
    }, module553.default.createElement("div", null, module553.default.createElement(module186.Form.Item, {
        rules: [
            {
                validator: _
            }
        ]
    }, module553.default.createElement(module2111, {
        name: "clusterSelector.inValues",
        allClusters: e.allClusters,
        fetchClusterList: e.fetchClusterList
    })))), module553.default.createElement("div", {
        className: module2123.label
    }, t("RULE_SETTINGS")), module553.default.createElement("div", {
        className: module2123.contentGroup
    }, module553.default.createElement(module186.Columns, {
        className: module2123.inline
    }, module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
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
    })))), module553.default.createElement(module186.Columns, {
        className: module2123.inline
    }, module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
        label: t("DURATION"),
        desc: t("ALERT_DURATION"),
        rules: [
            {
                validator: b
            }
        ]
    }, module553.default.createElement(module1082, {
        name: "for",
        inputClassName: module2123.duration,
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
    }, module553.default.createElement(module2101, {
        name: "expr",
        store: e.store,
        cluster: e.cluster
    }))), module553.default.createElement(module996, null), module553.default.createElement("div", {
        className: module2123.label
    }, t("MESSAGE_SETTINGS")), module553.default.createElement("div", {
        className: module3(module2123.contentGroup, module2123.lineContent)
    }, module553.default.createElement(module186.Form.Item, {
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
        label: t("MESSAGE_DETAILS"),
        desc: t("MESSAGE_DETAILS_DESC")
    }, module553.default.createElement(module186.TextArea, {
        name: "annotations.message",
        maxLength: 256
    }))));
});
export default E;
