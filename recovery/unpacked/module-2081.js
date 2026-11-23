import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-97.js";
import "./module-16.js";
import "./module-98.js";
import "./module-10.js";
import "./module-7.js";
import "./module-4.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module247 from "./module-247.js";
import module857 from "./module-857.js";
import module447 from "./module-447.js";
import module159 from "./module-159.js";
import module1483 from "./module-1483.js";
import module1484 from "./module-1484.js";
import module2089 from "./module-2089.js";
import module996 from "./module-996.js";
const TabPanel = module186.Tabs.TabPanel;
const b = module553.forwardRef(function(e, a) {
    const { editRule, exprBuilderTypeChange } = e;
    const l = module553.useState("node");
    const activeName = module96(l, 1)[0];
    const _ = module553.useState(function() {
        return module26(editRule, "clusterSelector.inValues", []);
    });
    const clusterTargets = module96(_, 1)[0];
    const S = module553.useCallback(function(e, t) {
        if (editRule.exprBuilder) {
            return module26(editRule, e, t);
        }
        return t;
    }, [
        editRule
    ]);
    const C = module553.useState(function() {
        let e = "node";
        if (!module63(editRule) && editRule.exprBuilder) {
            const t = editRule.exprBuilder;
            e = Object.keys(t)[0];
        }
        const a = e !== "node";
        return {
            alert: S("alert", ""),
            annotations: {
                summary: S("annotations.summary", ""),
                message: S("annotations.message", "")
            },
            clusterSelector: {
                inValues: S("clusterSelector.inValues", [])
            },
            exprBuilder: {
                node: {
                    names: a ? [
                        {
                            cluster: "",
                            names: []
                        }
                    ] : S("exprBuilder.node.names", [
                        {
                            cluster: "",
                            names: []
                        }
                    ]),
                    comparator: S("exprBuilder.node.comparator", ">"),
                    metricThreshold: a ? {} : S("exprBuilder.node.metricThreshold", {}),
                    for: S("for", "1m"),
                    severity: S("severity", "critical")
                }
            },
            disable: S("disable", false),
            labels: module26(editRule, "labels")
        };
    });
    const data = module96(C, 1)[0];
    const kRef = module553.useRef();
    module553.useImperativeHandle(a, function() {
        return {
            target: kRef.current
        };
    });
    return module553.default.createElement(module186.Form, {
        data,
        ref: kRef
    }, module553.default.createElement("div", {
        className: module1483.label
    }, t("RULE_SETTINGS")), module553.default.createElement("div", {
        className: module1483.contentGroup
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
    })), module553.default.createElement("div", {
        className: module1483.tabs
    }, module553.default.createElement(module186.Tabs, {
        type: "button",
        activeName,
        onChange: function(e) {
            return exprBuilderTypeChange(e);
        }
    }, module553.default.createElement(TabPanel, {
        label: t("NODE"),
        name: "node"
    }), module553.default.createElement(TabPanel, {
        label: t("WORKLOAD"),
        name: "workload"
    }))), module553.default.createElement(module186.Form.Item, {
        label: t("MONITORING_TARGETS"),
        rules: [
            {
                required: true,
                message: t("MONITOR_TARGET_EMPTY")
            },
            {
                validator: function(a, r, n) {
                    const l = module857(r.filter((e)=>e !== "" && e.cluster !== ""), function(e) {
                        return e.cluster;
                    });
                    if (Object.entries(l).some((e)=>{
                        const t = module96(e, 2)[1];
                        let a = [];
                        t.forEach((e)=>{
                            a = a.concat(e.names);
                        });
                        return module247(a).length !== a.length;
                    })) {
                        return n({
                            message: t("NODE_TARGET_REPEAT")
                        });
                    }
                    r.forEach((a)=>{
                        if (a === "") {
                            return n({
                                message: t("MONITOR_TARGET_EMPTY")
                            });
                        }
                        if (a.cluster === "") {
                            return n({
                                message: t("CLUSTER_FIELD_EMPTY")
                            });
                        }
                        if (e.allClusters.find((e)=>e.name === a.cluster)) {
                            if (module63(a.names)) {
                                return n({
                                    message: t("SELECT_A_TARGET_NODE")
                                });
                            }
                            return undefined;
                        }
                        return n({
                            message: t("MONITOR_TARGET_CLUSTER_DELETED_DESC")
                        });
                    });
                    return n();
                }
            }
        ]
    }, module553.default.createElement(module1484, {
        monitorLevel: "node",
        resourceType: "node",
        name: "exprBuilder.node.names",
        clusterTargets,
        allClusters: e.allClusters
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
                    if (module63(a.metricThreshold)) {
                        return r({
                            message: t("THRESHOLD_REQUIRED"),
                            field: e.field
                        });
                    }
                    const n = Object.keys(a.metricThreshold)[0];
                    const l = Object.keys(a.metricThreshold[n])[0];
                    const u = a.metricThreshold[n][l];
                    if (u === "" || !u || module159(u)) {
                        return r({
                            message: t("THRESHOLD_REQUIRED"),
                            field: e.field
                        });
                    }
                    if (module447(u, ".")) {
                        return r({
                            message: t("THRESHOLD_INVALID"),
                            field: e.field
                        });
                    }
                    r();
                }
            }
        ]
    }, module553.default.createElement(module2089, {
        resourceType: "node",
        name: "exprBuilder.node"
    }))), module553.default.createElement(module996, null), module553.default.createElement("div", {
        className: module1483.label
    }, t("MESSAGE_SETTINGS")), module553.default.createElement("div", {
        className: module1483.contentGroup
    }, module553.default.createElement(module186.Form.Item, {
        className: module1483.message,
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
        className: module1483.message,
        label: t("MESSAGE_DETAILS"),
        desc: t("MESSAGE_DETAILS_DESC")
    }, module553.default.createElement(module186.TextArea, {
        name: "annotations.message",
        maxLength: 256
    }))));
});
export default b;
