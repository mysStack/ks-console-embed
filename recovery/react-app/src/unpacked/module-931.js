import "./module-15.js";
import "./module-5.js";
import "./module-6.js";
import "./module-27.js";
import "./module-932.js";
import "./module-138.js";
import "./module-7.js";
import "./module-4.js";
import "./module-24.js";
import "./module-64.js";
import "./module-1092.js";
export const getDMPQuery = function({ rule, namespace, cluster_id, duration }) {
    const { ALL_QUERY_CONFIG } = require("./module-1285.js");
    let o = ALL_QUERY_CONFIG[rule.metricType];
    o = o.replaceAll("$NAMESPACE", namespace).replaceAll("$CLUSTERID", cluster_id).replaceAll("$DURATION", duration);
    if (rule.thresholds === "" || rule.thresholds === "-" || Number.isNaN(rule.thresholds)) {
        return o;
    }
    return `${o} ${rule.comparator} ${rule.thresholds}`;
};
export const arrayToObject = function(e) {
    const t = {};
    e.forEach((e)=>{
        Object.assign(t, e);
    });
    return t;
};
export const severityOptions = [
    {
        label: t("CRITICAL_ALERT"),
        value: "critical",
        bgColor: "#CA2621",
        color: "#FFFFFF"
    },
    {
        label: t("ERROR_ALERT"),
        value: "error",
        color: "#FFFFFF",
        bgColor: "#F5A623"
    },
    {
        label: t("WARNING_ALERT"),
        value: "warning",
        color: "#5F5110",
        bgColor: "#FFD939"
    },
    {
        label: t("INFO_ALERT"),
        value: "info",
        color: "#36435C",
        bgColor: "#D8DEE5"
    }
];
