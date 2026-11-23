import "./module-12.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-97.js";
import "./module-16.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-31.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module247 from "./module-247.js";
import module857 from "./module-857.js";
import module136 from "./module-136.js";
import module74 from "./module-74.js";
import module447 from "./module-447.js";
import module159 from "./module-159.js";
import module2095 from "./module-2095.js";
import module1484 from "./module-1484.js";
import module2096 from "./module-2096.js";
import module1483 from "./module-1483.js";
import module996 from "./module-996.js";
const TabPanel = module186.Tabs.TabPanel;
const k = {
    Deployment: "Deployment",
    Statefulset: "StatefulSet",
    Daemonset: "DaemonSet"
};
const N = module553.forwardRef(function(e, a) {
    const { editRule, exprBuilderTypeChange } = e;
    const l = module553.useState("workload");
    const activeName = module96(l, 1)[0];
    const S = module553.useState("Deployment");
    const N = module96(S, 2);
    const workloadType = N[0];
    const R = N[1];
    const I = module553.useState(function() {
        return module26(editRule, "clusterSelector.inValues", []);
    });
    const clusterTargets = module96(I, 1)[0];
    const M = module2095();
    const allWorkspace = module96(M, 1)[0];
    const A = module553.useCallback(function(e, t) {
        if (editRule.exprBuilder) {
            return module26(editRule, e, t);
        }
        return t;
    }, [
        editRule
    ]);
    const j = module553.useState(function() {
        let e = "workload";
        if (!module63(editRule) && editRule.exprBuilder) {
            const t = editRule.exprBuilder;
            e = Object.keys(t)[0];
        }
        const a = e !== "workload";
        return {
            alert: A("alert", ""),
            annotations: {
                summary: A("annotations.summary", ""),
                message: A("annotations.message", "")
            },
            clusterSelector: {
                inValues: A("clusterSelector.inValues", [])
            },
            namespaceSelector: {
                inValues: A("namespaceSelector.inValues", [])
            },
            expr: "",
            exprBuilder: {
                workload: {
                    names: a ? [
                        {
                            cluster: "",
                            namespace: "",
                            names: []
                        }
                    ] : A("exprBuilder.workload.names", [
                        {
                            cluster: "",
                            namespace: "",
                            names: []
                        }
                    ]),
                    kind: k[A("exprBuilder.workload.kind", "Deployment")],
                    metricThreshold: a ? {} : A("exprBuilder.workload.metricThreshold", {}),
                    comparator: A("exprBuilder.workload.comparator", ">"),
                    for: A("for", "1m"),
                    severity: A("severity", "critical")
                }
            },
            disable: A("disable", false),
            labels: module26(editRule, "labels")
        };
    });
    const L = module96(j, 2);
    const x = L[0];
    const U = L[1];
    const zRef = module553.useRef();
    module553.useImperativeHandle(a, function() {
        return {
            target: zRef.current
        };
    });
    return module553.default.createElement("div", null, module553.default.createElement(module186.Form, {
        data: x,
        ref: zRef,
        key: "workload"
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
        label: t("RESOURCE_TYPE")
    }, module553.default.createElement(module186.Select, {
        className: module1483.workloadType,
        name: "exprBuilder.workload.kind",
        options: [
            {
                label: t("DEPLOYMENT"),
                value: "Deployment"
            },
            {
                label: t("STATEFULSET"),
                value: "StatefulSet"
            },
            {
                label: t("DAEMONSET"),
                value: "DaemonSet"
            }
        ],
        onChange: function(e) {
            R(e);
            const t = module136(x);
            module74(t, "exprBuilder.workload.names", [
                {
                    cluster: "",
                    namespace: "",
                    names: []
                }
            ]);
            U(t);
        }
    })), module553.default.createElement(module186.Form.Item, {
        label: t("MONITORING_TARGETS"),
        rules: [
            {
                required: true,
                message: t("MONITOR_TARGET_EMPTY")
            },
            {
                validator: function(a, r, n) {
                    const l = module857(r.filter((e)=>e !== "" && e.namespace !== ""), function(e) {
                        return e.cluster;
                    });
                    if (Object.entries(l).some((e)=>{
                        const t = module96(e, 2)[1].map((e)=>e.namespace);
                        return module247(t).length !== t.length;
                    })) {
                        return n({
                            message: t("NAME_SPACE_REPEAT")
                        });
                    }
                    r.filter((e)=>e !== "").forEach((a)=>{
                        if (a.cluster === "") {
                            return n({
                                message: t("CLUSTER_FIELD_EMPTY")
                            });
                        }
                        if (e.allClusters.find((e)=>e.name === a.cluster)) {
                            if (a.namespace === "") {
                                return n({
                                    message: t("SET_NAMESPACE_BELONGS_TO")
                                });
                            }
                            if (module63(a.names)) {
                                return n({
                                    message: t("MONITOR_TARGET_EMPTY")
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
        monitorLevel: "workload",
        workloadType,
        name: "exprBuilder.workload.names",
        clusterTargets,
        allClusters: e.allClusters,
        allWorkspace,
        handleChangeNs: function(e) {
            const t = e.filter((e)=>e !== "" && e.namespace !== "").map((e)=>e.namespace);
            U({
                ...x,
                namespaceSelector: {
                    inValues: module247(t)
                }
            });
        }
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
    }, module553.default.createElement(module2096, {
        name: "exprBuilder.workload"
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
    })))));
});
export default N;
