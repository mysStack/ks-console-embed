import "unpacked/module-15.js";
import { CPU_RULE_CONFIG, MEMORY_RULE_CONFIG, PERCENT_RULE_CONFIG, getBaseRuleConfig } from "configs/alerting/metrics/rule.config";
const ruleConfig = getBaseRuleConfig({
    thresholds: {
        unit: "Kbps"
    }
});
const l = {
    pod_cpu_usage: {
        label: "CPU_USAGE_SCAP",
        prefixIcon: "cpu",
        ruleConfig: CPU_RULE_CONFIG
    },
    pod_cpu_utilisation: {
        label: "CPU_UTILIZATION_SCAP",
        prefixIcon: "cpu",
        ruleConfig: PERCENT_RULE_CONFIG
    },
    pod_memory_usage: {
        label: "MEMORY_USAGE_SCAP",
        prefixIcon: "memory",
        ruleConfig: MEMORY_RULE_CONFIG
    },
    pod_memory_usage_wo_cache: {
        label: "MEMORY_USAGE_WO_CACHE_SCAP",
        prefixIcon: "memory",
        ruleConfig: MEMORY_RULE_CONFIG
    },
    pod_memory_utilisation: {
        label: "MEMORY_UTILIZATION_SCAP",
        prefixIcon: "memory",
        ruleConfig: PERCENT_RULE_CONFIG
    },
    pod_net_bytes_transmitted: {
        label: "DATA_SEND_RATE",
        prefixIcon: "network",
        ruleConfig
    },
    pod_net_bytes_received: {
        label: "DATA_RECEIVE_RATE",
        prefixIcon: "network",
        ruleConfig
    }
};
export default l;
