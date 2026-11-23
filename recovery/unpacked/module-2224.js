import "./module-15.js";
import "./module-10.js";
import "./module-24.js";
import "./module-64.js";
import "./module-1092.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import module136 from "./module-136.js";
import module74 from "./module-74.js";
import module63 from "./module-63.js";
import module2225 from "./module-2225.js";
import module2226 from "./module-2226.js";
import { ALL_MESSAGE_CONFIG, ALL_SUMMARY_CONFIG } from "./module-1285.js";
import module996 from "./module-996.js";
const E = module553.forwardRef(function(e, a) {
    const e_editRule = e.editRule;
    const n = module26(e.formTemplate, "metadata.labels.app_instance", e.cluster_id);
    const resourceType = module26(e.formTemplate, "metadata.labels.openpitrix_app_id", e.app_id);
    const E = module553.useState({
        alert: module26(e_editRule, "alert", ""),
        annotations: {
            summary: module26(e_editRule, "annotations.summary", ""),
            message: module26(e_editRule, "annotations.message", "")
        },
        exprBuilder: {
            metricType: module26(e_editRule, "exprBuilder.metricType", ""),
            comparator: module26(e_editRule, "exprBuilder.comparator", ""),
            thresholds: module26(e_editRule, "exprBuilder.thresholds", "")
        },
        for: module26(e_editRule, "for", "1m"),
        severity: module26(e_editRule, "severity", "warning"),
        disable: module26(e_editRule, "disable", false),
        labels: module26(e_editRule, "labels")
    });
    const y = module96(E, 2);
    const g = y[0];
    const b = y[1];
    const SRef = module553.useRef();
    module553.useImperativeHandle(a, function() {
        return {
            target: SRef.current
        };
    });
    return module553.default.createElement(module186.Form, {
        data: g,
        ref: SRef
    }, module553.default.createElement("div", {
        className: module2225.label
    }, t("RULE_SETTINGS")), module553.default.createElement("div", {
        className: module2225.contentGroup
    }, module553.default.createElement(module186.Form.Item, {
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
    })), module553.default.createElement(module186.Form.Item, {
        label: t("TRIGGER_CONDITION"),
        rules: [
            {
                required: true,
                message: t("SET_ACTIVATION_CONDITION_DESC")
            },
            {
                validator: function(e, a, r) {
                    if (!a) {
                        return r();
                    }
                    if (module63(a.comparator)) {
                        return r({
                            message: t("OPERATOR_REQUIRED"),
                            field: e.field
                        });
                    }
                    if (!module63(a.thresholds)) {
                        const n = Object.keys(a.thresholds)[0];
                        const l = Object.keys(a.thresholds[n])[0];
                        if (a.thresholds[n][l] === "") {
                            return r({
                                message: t("THRESHOLD_REQUIRED"),
                                field: e.field
                            });
                        }
                    }
                    r();
                }
            }
        ]
    }, module553.default.createElement(module2226, {
        resourceType,
        name: "exprBuilder",
        metricType: module26(g, "exprBuilder.metricType"),
        thresholds: module26(g, "exprBuilder.thresholds"),
        comparator: module26(g, "exprBuilder.comparator"),
        severity: module26(g, "severity"),
        for: module26(g, "for"),
        handleMetricChange: function(e, t, { unit } = {
            unit: ""
        }) {
            const o = module136(g);
            module74(o, "exprBuilder.thresholds", e.thresholds);
            module74(o, "exprBuilder.comparator", e.comparator);
            if (t && (module74(o, "exprBuilder.metricType", t), module63(e_editRule))) {
                const u = module26(ALL_SUMMARY_CONFIG, t, "").replaceAll("$CLUSTERID", n).replaceAll("$THRESHOLD", " ").replaceAll("$UNIT", unit);
                const c = module26(ALL_MESSAGE_CONFIG, t, "").replaceAll("$CLUSTERID", n).replaceAll("$THRESHOLD", " ").replaceAll("$UNIT", unit);
                module74(o, "annotations.summary", u);
                module74(o, "annotations.message", c);
            }
            module74(o, "for", e.duration);
            module74(o, "severity", e.severity);
            b(o);
        }
    }))), module553.default.createElement(module996, null), module553.default.createElement("div", {
        className: module2225.label
    }, t("MESSAGE_SETTINGS")), module553.default.createElement("div", {
        className: module2225.contentGroup
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
