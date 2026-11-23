import "unpacked/module-15.js";
import { CPU_RULE_CONFIG, MEMORY_RULE_CONFIG, PERCENT_RULE_CONFIG, getBaseRuleConfig } from "configs/alerting/metrics/rule.config";
const ruleConfig = getBaseRuleConfig({
    thresholds: {
        unit: "Kbps"
    }
});
const l = {
    "namespace:workload_cpu_usage:sum{$1}": {
        label: "CPU_USAGE_SCAP",
        prefixIcon: "cpu",
        ruleConfig: CPU_RULE_CONFIG
    },
    "namespace:workload_memory_usage:sum{$1}": {
        label: "MEMORY_USAGE_SCAP",
        prefixIcon: "memory",
        ruleConfig: MEMORY_RULE_CONFIG
    },
    "namespace:workload_memory_usage_wo_cache:sum{$1}": {
        label: "MEMORY_USAGE_WO_CACHE_SCAP",
        prefixIcon: "memory",
        ruleConfig: MEMORY_RULE_CONFIG
    },
    "namespace:workload_net_bytes_transmitted:sum_irate{$1}": {
        label: "DATA_SEND_RATE",
        prefixIcon: "network",
        ruleConfig
    },
    "namespace:workload_net_bytes_received:sum_irate{$1}": {
        label: "DATA_RECEIVE_RATE",
        prefixIcon: "network",
        ruleConfig
    },
    "namespace:$2_unavailable_replicas:ratio{$1}": {
        label: "UNAVAILABLE_WORKLOAD_REPLICA_RATIO",
        prefixIcon: "backup",
        ruleConfig: PERCENT_RULE_CONFIG
    }
};
export default l;
