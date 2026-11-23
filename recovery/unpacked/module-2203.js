import "./module-15.js";
import "./module-10.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module447 from "./module-447.js";
import module159 from "./module-159.js";
import module186 from "./module-186.js";
import module1522 from "./module-1522.js";
import module2205 from "./module-2205.js";
import module996 from "./module-996.js";
import module1524 from "./module-1524.js";
const E = module553.forwardRef(function(e, a) {
    const { editRule, isEdgeWize } = e;
    const l = module553.useState(function() {
        return {
            alert: module26(editRule, "alert", ""),
            annotations: {
                summary: module26(editRule, "annotations.summary", ""),
                message: module26(editRule, "annotations.message", "")
            },
            exprBuilder: {
                node: {
                    names: module26(editRule, "exprBuilder.node.names", []),
                    comparator: module26(editRule, "exprBuilder.node.comparator", ">"),
                    metricThreshold: module26(editRule, "exprBuilder.node.metricThreshold", {}),
                    for: module26(editRule, "for", "1m"),
                    severity: module26(editRule, "severity", "critical")
                }
            },
            disable: module26(editRule, "disable", false),
            labels: module26(editRule, "labels")
        };
    });
    const E = module96(l, 1)[0];
    const yRef = module553.useRef();
    module553.useImperativeHandle(a, function() {
        return {
            target: yRef.current
        };
    });
    return module553.default.createElement(module186.Form, {
        data: E,
        ref: yRef
    }, module553.default.createElement("div", {
        className: module1524.label
    }, t("RULE_SETTINGS")), module553.default.createElement("div", {
        className: module1524.contentGroup
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
    })), module553.default.createElement(module2205, {
        isEdgeWize: e.isEdgeWize,
        resourceType: "node",
        targetName: "exprBuilder.node.names",
        namespace: e.namespace,
        cluster: e.cluster,
        formTemplate: E
    }), module553.default.createElement(module186.Form.Item, {
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
                    if (module63(a.metricThreshold)) {
                        return r({
                            message: t("THRESHOLD_REQUIRED"),
                            field: e.field
                        });
                    }
                    const n = Object.keys(a.metricThreshold)[0];
                    const l = Object.keys(a.metricThreshold[n])[0];
                    const o = a.metricThreshold[n][l];
                    if (o === "" || !o || module159(o)) {
                        return r({
                            message: t("THRESHOLD_REQUIRED"),
                            field: e.field
                        });
                    }
                    if (module447(o, ".")) {
                        return r({
                            message: t("THRESHOLD_INVALID"),
                            field: e.field
                        });
                    }
                    r();
                }
            }
        ]
    }, module553.default.createElement(module1522, {
        resourceType: "node",
        name: "exprBuilder.node",
        isEdge: isEdgeWize
    }))), module553.default.createElement(module996, null), module553.default.createElement("div", {
        className: module1524.label
    }, t("MESSAGE_SETTINGS")), module553.default.createElement("div", {
        className: module1524.contentGroup
    }, module553.default.createElement(module186.Form.Item, {
        className: module1524.message,
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
        className: module1524.message,
        label: t("MESSAGE_DETAILS"),
        desc: t("MESSAGE_DETAILS_DESC")
    }, module553.default.createElement(module186.TextArea, {
        name: "annotations.message",
        maxLength: 256
    }))));
});
export default E;
