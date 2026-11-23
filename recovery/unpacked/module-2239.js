import "./module-15.js";
import "./module-18.js";
import module31 from "./module-31.js";
import { disabledRuleConfig } from "./module-969.js";
import { arrayToObject } from "./module-931.js";
const u = [
    {
        NameZh: "存在不可用的 partitions",
        NameEn: "ExistOfflinePartitions",
        Expression: 'sum(kafka_controller_kafkacontroller_offlinepartitionscount{namespace="$NAMESPACE",strimzi_io_cluster="$CLUSTERID"}) > 0',
        Operator: "N/A",
        Unit: "N/A",
        Summary: "存在不可用的partitions。",
        Message: ""
    },
    {
        NameZh: "存在ISR数目小于最小ISR的partitions",
        NameEn: "ExistPartitionsUnderMinimumISR",
        Expression: 'sum(kafka_cluster_partition_underminisr{namespace="$NAMESPACE",strimzi_io_cluster="$CLUSTERID"}) > 0',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "3m",
        Summary: "存在ISR数目小于最小ISR的partitions。",
        Message: ""
    },
    {
        NameZh: "堆内存使用率超过85%",
        NameEn: "KafkaHeapMemTooHigh85%",
        Expression: 'round(sum(jvm_memory_bytes_used{namespace="$NAMESPACE",strimzi_io_name="$CLUSTERID-kafka"})/sum(jvm_memory_bytes_max{namespace="$NAMESPACE",strimzi_io_name="$CLUSTERID-kafka"})*100,0.1) > 85',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "3m",
        Summary: "堆内存使用率超过85%。",
        Message: ""
    },
    {
        NameZh: "磁盘可用百分比小于15%",
        NameEn: "KafkaAvailableDiskLessThan15%",
        Expression: 'round(sum(kubelet_volume_stats_available_bytes{namespace="$NAMESPACE",persistentvolumeclaim=~"data-0-$CLUSTERID-kafka.*"})/sum(kubelet_volume_stats_capacity_bytes{namespace="$NAMESPACE",persistentvolumeclaim=~"data-0-$CLUSTERID-kafka.*"})*100,0.1) < 15',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "3m",
        Summary: "磁盘可用百分比小于15%。",
        Message: ""
    },
    {
        NameZh: "磁盘可用百分比小于10%",
        NameEn: "KafkaAvailableDiskLessThan10%",
        Expression: 'round(sum(kubelet_volume_stats_available_bytes{namespace="$NAMESPACE",persistentvolumeclaim=~"data-0-$CLUSTERID-kafka.*"})/sum(kubelet_volume_stats_capacity_bytes{namespace="$NAMESPACE",persistentvolumeclaim=~"data-0-$CLUSTERID-kafka.*"})*100,0.1) < 10',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "3m",
        Summary: "磁盘可用百分比小于10%。",
        Message: ""
    },
    {
        NameZh: "磁盘可用百分比小于5%",
        NameEn: "KafkaAvailableDiskLessThan5%",
        Expression: 'round(sum(kubelet_volume_stats_available_bytes{namespace="$NAMESPACE",persistentvolumeclaim=~"data-0-$CLUSTERID-kafka.*"})/sum(kubelet_volume_stats_capacity_bytes{namespace="$NAMESPACE",persistentvolumeclaim=~"data-0-$CLUSTERID-kafka.*"})*100,0.1) < 5',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Summary: "磁盘可用百分比小于5%。",
        Message: ""
    },
    {
        NameZh: "平均响应时间超过1000ms",
        NameEn: "RequestLatencyAverage1s",
        Expression: 'zookeeper_avgrequestlatency{namespace="$NAMESPACE",kubernetes_pod_name=~"$CLUSTERID-zookeeper.*"} > 1000',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Summary: "平均响应时间超过1000ms。",
        Message: ""
    }
];
const c = {
    Metric: {
        ExistOfflinePartitions: {
            label: "ExistOfflinePartitions",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        ExistPartitionsUnderMinimumISR: {
            label: "ExistPartitionsUnderMinimumISR",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        "KafkaHeapMemTooHigh85%": {
            label: "HeapMemTooHigh85%",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        "KafkaAvailableDiskLessThan15%": {
            label: "AvailableDiskLessThan15%",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        "KafkaAvailableDiskLessThan10%": {
            label: "AvailableDiskLessThan10%",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        "KafkaAvailableDiskLessThan5%": {
            label: "AvailableDiskLessThan5%",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        RequestLatencyAverage1s: {
            label: "RequestLatencyAverage1s",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        }
    },
    Query: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Expression))),
    Message: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Message))),
    Summary: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Summary)))
};
export default c;
