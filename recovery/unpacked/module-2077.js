import "./module-15.js";
import { CORE_RULE_CONFIG, MBPS_RULE_CONFIG, MIB_RULE_CONFIG, PERCENT_RULE_CONFIG } from "./module-1271.js";
const n = {
    "cpu:usage": {
        label: "CPU_USAGE_SCAP",
        tcapLabel: "CPU_USAGE_TCAP",
        prefixIcon: "cpu",
        ruleConfig: CORE_RULE_CONFIG
    },
    "memory:usage": {
        label: "MEMORY_USAGE_SCAP",
        tcapLabel: "MEMORY_USAGE_TCAP",
        prefixIcon: "memory",
        ruleConfig: MIB_RULE_CONFIG
    },
    "memory:usageWoCache": {
        label: "MEMORY_USAGE_WO_CACHE_SCAP",
        tcapLabel: "MEMORY_USAGE_WO_CACHE_TCAP",
        prefixIcon: "memory",
        ruleConfig: MIB_RULE_CONFIG
    },
    "network:transmittedRate": {
        label: "DATA_SEND_RATE",
        tcapLabel: "DATA_SEND_RATE_TCAP",
        prefixIcon: "network",
        ruleConfig: MBPS_RULE_CONFIG
    },
    "network:receivedRate": {
        label: "DATA_RECEIVE_RATE",
        tcapLabel: "DATA_RECEIVE_RATE_TCAP",
        prefixIcon: "network",
        ruleConfig: MBPS_RULE_CONFIG
    },
    "replica:unavailableRatio": {
        label: "UNAVAILABLE_WORKLOAD_REPLICA_RATIO",
        tcapLabel: "UNAVAILABLE_WORKLOAD_REPLICA_RATIO_NO_PERCENT_TCAP",
        prefixIcon: "backup",
        ruleConfig: PERCENT_RULE_CONFIG
    }
};
export default n;
