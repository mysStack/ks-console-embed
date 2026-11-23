import "unpacked/module-15.js";
import { BANDWIDTH_RULE_CONFIG, BASE_RULE_CONFIG, DISK_RULE_CONFIG, PERCENT_RULE_CONFIG, THROUGHPUT_RULE_CONFIG } from "configs/alerting/metrics/rule.config";
const n = {
    "node:pod_abnormal:ratio{$1}": {
        label: "UNAVAILABLE_POD_RATIO",
        prefixIcon: "pod",
        ruleConfig: PERCENT_RULE_CONFIG
    },
    "node:pod_utilisation:ratio{$1}": {
        label: "POD_QUOTA_UTILIZATION_SCAP",
        prefixIcon: "pod",
        ruleConfig: PERCENT_RULE_CONFIG
    },
    "node:node_cpu_utilisation:avg1m{$1}": {
        label: "CPU_UTILIZATION_SCAP",
        prefixIcon: "cpu",
        ruleConfig: PERCENT_RULE_CONFIG
    },
    "node:load1:ratio{$1}": {
        label: "CPU_LOAD_1",
        prefixIcon: "cpu",
        ruleConfig: BASE_RULE_CONFIG
    },
    "node:load5:ratio{$1}": {
        label: "CPU_LOAD_5",
        prefixIcon: "cpu",
        ruleConfig: BASE_RULE_CONFIG
    },
    "node:load15:ratio{$1}": {
        label: "CPU_LOAD_15",
        prefixIcon: "cpu",
        ruleConfig: BASE_RULE_CONFIG
    },
    "node:node_memory_bytes_available:sum{$1}": {
        label: "MEMORY_AVAILABLE",
        prefixIcon: "memory",
        ruleConfig: DISK_RULE_CONFIG
    },
    "node:node_memory_utilisation:{$1}": {
        label: "MEMORY_UTILIZATION_SCAP",
        prefixIcon: "memory",
        ruleConfig: PERCENT_RULE_CONFIG
    },
    "node:disk_space_available:{$1}": {
        label: "DISK_SPACE_AVAILABLE",
        prefixIcon: "storage",
        ruleConfig: DISK_RULE_CONFIG
    },
    "node:disk_space_utilization:ratio{$1}": {
        label: "DISK_SPACE_UTILIZATION",
        prefixIcon: "storage",
        ruleConfig: PERCENT_RULE_CONFIG
    },
    "node:disk_inode_utilization:ratio{$1}": {
        label: "INODE_UTILIZATION",
        prefixIcon: "storage",
        ruleConfig: PERCENT_RULE_CONFIG
    },
    "node:data_volume_iops_reads:sum{$1}": {
        label: "DISK_READ_IOPS",
        prefixIcon: "storage",
        ruleConfig: BASE_RULE_CONFIG
    },
    "node:data_volume_iops_writes:sum{$1}": {
        label: "DISK_WRITE_IOPS",
        prefixIcon: "storage",
        ruleConfig: BASE_RULE_CONFIG
    },
    "node:data_volume_throughput_bytes_read:sum{$1}": {
        label: "DISK_READ_THROUGHPUT",
        prefixIcon: "storage",
        ruleConfig: THROUGHPUT_RULE_CONFIG
    },
    "node:data_volume_throughput_bytes_written:sum{$1}": {
        label: "DISK_WRITE_THROUGHPUT",
        prefixIcon: "storage",
        ruleConfig: THROUGHPUT_RULE_CONFIG
    },
    "node:node_net_bytes_transmitted:sum_irate{$1}": {
        label: "DATA_SEND_RATE",
        prefixIcon: "network",
        ruleConfig: BANDWIDTH_RULE_CONFIG
    },
    "node:node_net_bytes_received:sum_irate{$1}": {
        label: "DATA_RECEIVE_RATE",
        prefixIcon: "network",
        ruleConfig: BANDWIDTH_RULE_CONFIG
    }
};
export default n;
