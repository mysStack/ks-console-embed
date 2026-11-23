import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-24.js";
import "./module-64.js";
import "./module-75.js";
import "./module-4.js";
import { ALL_METRICS_CONFIG } from "./module-1784.js";
export const getQuery = function({ kind, rule, resources }) {
    let l = "";
    const { _metricType, thresholds, condition_type } = rule;
    switch(kind){
        case "Node":
            l = _metricType.replace("$1", `node=${resources.length > 1 ? "~" : ""}"${resources.join("|")}"`);
            break;
        case "Deployment":
        case "StatefulSet":
        case "DaemonSet":
            l = _metricType.replace("$1", `workload=${resources.length > 1 ? "~" : ""}"${resources.map((e)=>`${kind}:${e}`).join("|")}"`).replace("$2", kind.toLowerCase());
    }
    let c = thresholds;
    const s = ALL_METRICS_CONFIG[_metricType].ruleConfig.find((e)=>e.name === "thresholds");
    if (s && s.converter) {
        c = s.converter(thresholds);
    }
    return l + ` ${condition_type} ${c}`;
};
const n = {
    Deployment: "deployments",
    StatefulSet: "statefulsets",
    DaemonSet: "daemonsets",
    Pod: "pods"
};
export const getAlertingResource = function(e = {}) {
    const t = (e, t)=>{
        const e_pod = e.pod;
        if (e_pod && e_pod.startsWith(e[t])) {
            return {
                module: "pods",
                name: e.pod,
                namespace: e.namespace
            };
        }
        return {
            module: t === "job_name" ? "jobs" : `${t}s`,
            name: e[t],
            namespace: e.namespace
        };
    };
    if (e.node) {
        return {
            module: "nodes",
            name: e.node
        };
    }
    if (e.namespace) {
        if (e.workload) {
            return {
                module: n[e.owner_kind],
                name: e.workload.replace(`${e.owner_kind}:`, ""),
                namespace: e.namespace
            };
        }
        if (e.job_name) {
            return t(e, "job_name");
        }
        if (e.cronjob) {
            return t(e, "cronjob");
        }
        if (e.hpa) {
            return {
                module: "hpas",
                name: e.hpa,
                namespace: e.namespace
            };
        }
        if (e.deployment) {
            return t(e, "deployment");
        }
        if (e.statefulset) {
            return t(e, "statefulset");
        }
        if (e.daemonset) {
            return t(e, "daemonset");
        }
        if (e.pod) {
            return {
                module: "pods",
                name: e.pod,
                namespace: e.namespace
            };
        }
        if (e.service) {
            return {
                module: "services",
                name: e.service,
                namespace: e.namespace
            };
        }
    }
    return {};
};
export const ALERTING_STATUS = [
    "disabled",
    "inactive",
    "pending",
    "firing"
];
