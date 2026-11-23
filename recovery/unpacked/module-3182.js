import "./module-15.js";
export const kafkaAlertYaml = {
    apiVersion: "alerting.kubesphere.io/v2beta1",
    kind: "RuleGroup",
    metadata: {
        annotations: {
            dmp_managed_field: '[{"metricType":"KafkaHeapMemTooHigh85%","comparator":"-","thresholds":""},{"metricType":"KafkaAvailableDiskLessThan15%","comparator":"-","thresholds":""},{"metricType":"ExistOfflinePartitions","comparator":"-","thresholds":""}]',
            "kubesphere.io/creator": "admin"
        },
        creationTimestamp: "2023-10-07T08:09:27Z",
        generation: 3,
        labels: {
            "alerting.kubesphere.io/enable": "true",
            app_instance: "clusterId",
            openpitrix_app_id: "app-kafka"
        },
        name: "clusterId-default",
        namespace: "namespaceName",
        uid: "1f971403-b551-4ac9-ba09-15317b60d42d"
    },
    spec: {
        rules: [
            {
                alert: "HeapMemTooHigh",
                annotations: {
                    message: "",
                    summary: "堆内存使用率超过85%。"
                },
                expr: 'round(sum(jvm_memory_bytes_used{namespace="namespaceName",strimzi_io_name="clusterId-kafka"})/sum(jvm_memory_bytes_max{namespace="namespaceName",strimzi_io_name="clusterId-kafka"})*100,0.1) > 85',
                for: "1m",
                labels: {
                    rule_id: "e56cf89c-c323-4754-a6c4-2f4ff4e91458"
                },
                severity: "warning"
            },
            {
                alert: "AvailableDiskLessThan15Percent",
                annotations: {
                    message: "",
                    summary: "磁盘可用百分比小于15%。"
                },
                expr: 'round(sum(kubelet_volume_stats_available_bytes{namespace="namespaceName",persistentvolumeclaim=~"data-0-clusterId-kafka.*"})/sum(kubelet_volume_stats_capacity_bytes{namespace="namespaceName",persistentvolumeclaim=~"data-0-clusterId-kafka.*"})*100,0.1) < 15',
                for: "1m",
                labels: {
                    rule_id: "9c52bb99-4146-4ab6-8002-2bebac7f9bb2"
                },
                severity: "warning"
            },
            {
                alert: "ExistOfflinePartitions",
                annotations: {
                    message: "",
                    summary: "存在不可用的partitions。"
                },
                expr: 'sum(kafka_controller_kafkacontroller_offlinepartitionscount{namespace="namespaceName",strimzi_io_cluster="clusterId"}) > 0',
                for: "1m",
                labels: {
                    rule_id: "4bce37ac-fe22-42b9-854a-097a578bb52a"
                },
                severity: "error"
            }
        ]
    }
};
