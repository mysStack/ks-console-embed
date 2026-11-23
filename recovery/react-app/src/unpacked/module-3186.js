import "./module-15.js";
export const MySQLAlertYaml = {
    apiVersion: "alerting.kubesphere.io/v2beta1",
    kind: "RuleGroup",
    metadata: {
        annotations: {
            dmp_managed_field: '[{"metricType":"MySQLDisk","comparator":">=","thresholds":85}]',
            "kubesphere.io/creator": "admin"
        },
        creationTimestamp: "2023-10-09T03:17:04Z",
        generation: 1,
        labels: {
            "alerting.kubesphere.io/enable": "true",
            app_instance: "clusterId",
            openpitrix_app_id: "app-mysql"
        },
        name: "clusterId-default",
        namespace: "namespaceName",
        uid: "0361ef38-ed49-477f-a473-0da2d5a90b45"
    },
    spec: {
        rules: [
            {
                alert: "MySQLDisk",
                annotations: {
                    message: "RadonDB MySQL: clusterId，磁盘使用率超过 %。 当前值：{{ $value }}",
                    summary: "RadonDB MySQL 【clusterId】 磁盘使用率超过 %"
                },
                expr: '(kubelet_volume_stats_used_bytes{persistentvolumeclaim=~".*clusterId.*"} / kubelet_volume_stats_capacity_bytes{persistentvolumeclaim=~".*clusterId.*"} * 100) >= 85',
                for: "1m",
                labels: {
                    rule_id: "c0b9010a-d74c-4bf9-8b5a-b7a6105f6f93"
                },
                severity: "warning"
            }
        ]
    }
};
