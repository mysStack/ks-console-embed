import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
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
import module447 from "./module-447.js";
import module159 from "./module-159.js";
import module318 from "./module-318.js";
import module859 from "./module-859.js";
import module1522 from "./module-1522.js";
import module1523 from "./module-1523.js";
import module996 from "./module-996.js";
import module1524 from "./module-1524.js";
function b(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const S = {
    Deployment: "Deployment",
    Statefulset: "StatefulSet",
    Daemonset: "DaemonSet"
};
const _ = module553.forwardRef(function(e, a) {
    const { editRule, isEdgeWize } = e;
    const l = module553.useState(function() {
        return {
            alert: module26(editRule, "alert", ""),
            annotations: {
                summary: module26(editRule, "annotations.summary", ""),
                message: module26(editRule, "annotations.message", "")
            },
            exprBuilder: {
                workload: {
                    comparator: module26(editRule, "exprBuilder.workload.comparator", ">"),
                    metricThreshold: module26(editRule, "exprBuilder.workload.metricThreshold", {}),
                    for: module26(editRule, "for", "1m"),
                    severity: module26(editRule, "severity", "critical")
                },
                workloadKind: {
                    kind: S[module26(editRule, "exprBuilder.workload.kind", "Deployment")],
                    names: module26(editRule, "exprBuilder.workload.names", [])
                }
            },
            disable: module26(editRule, "disable", false),
            labels: module26(editRule, "labels")
        };
    });
    const data = module96(l, 1)[0];
    const O = module553.useState(false);
    const C = module96(O, 2);
    const isLoading = C[0];
    const R = C[1];
    const D = module553.useState([]);
    const N = module96(D, 2);
    const workloads = N[0];
    const I = N[1];
    const PRef = module553.useRef({
        Deployment: isEdgeWize ? new module859("deployments") : new module318("deployments"),
        StatefulSet: isEdgeWize ? new module859("statefulsets") : new module318("statefulsets"),
        DaemonSet: isEdgeWize ? new module859("daemonsets") : new module318("daemonsets")
    });
    const ARef = module553.useRef();
    module553.useImperativeHandle(a, function() {
        return {
            target: ARef.current
        };
    });
    const fetchWorkloads = module553.useCallback(function(t, a) {
        const { cluster, namespace } = e;
        const l = PRef.current[t];
        R(true);
        l.fetchList({
            cluster,
            namespace,
            ...a
        }).then(()=>{
            I(l.list.data.map((e)=>({
                    label: e.name,
                    value: e.name
                })));
            R(false);
        });
    }, []);
    module553.useEffect(function() {
        fetchWorkloads("Deployment", {});
    }, []);
    return module553.default.createElement(module186.Form, {
        data,
        ref: ARef
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
    })), module553.default.createElement(module186.Form.Item, {
        label: t("RESOURCE_TYPE"),
        rules: [
            {
                validator: function(e, a, r) {
                    if (module63(a.names)) {
                        return r({
                            message: t("MONITOR_TARGET_EMPTY")
                        });
                    }
                    return r();
                }
            }
        ]
    }, module553.default.createElement(module1523, {
        name: "exprBuilder.workloadKind",
        namespace: e.namespace,
        cluster: e.cluster,
        workloads,
        fetchWorkloads,
        stores: PRef.current,
        isLoading
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
        name: "exprBuilder.workload",
        resourceType: "workload"
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
export default _;
