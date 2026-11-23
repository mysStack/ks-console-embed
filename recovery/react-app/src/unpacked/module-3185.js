import "./module-15.js";
export const pgAlertYaml = {
    apiVersion: "alerting.kubesphere.io/v2beta1",
    kind: "RuleGroup",
    metadata: {
        annotations: {
            dmp_managed_field: '[{"metricType":"PGDisk","comparator":">=","thresholds":85}]',
            "kubesphere.io/creator": "admin"
        },
        creationTimestamp: "2023-10-08T04:59:40Z",
        generation: 1,
        labels: {
            "alerting.kubesphere.io/enable": "true",
            app_instance: "clusterId",
            openpitrix_app_id: "app-postgresql"
        },
        name: "clusterId-default",
        namespace: "namespaceName",
        uid: "2c3c72f8-5239-45b8-af87-9721cea217fd"
    },
    spec: {
        rules: [
            {
                alert: "PGDisk",
                annotations: {
                    message: "RadonDB PostgreSQL: clusterId，磁盘使用率超过 %。 当前值：{{ $value }}",
                    summary: "RadonDB PostgreSQL 【clusterId】 磁盘使用率超过 %。"
                },
                expr: 'kubelet_volume_stats_used_bytes{persistentvolumeclaim=~".*clusterId-readwriteinstance.*|.*clusterId-readonlyinstance.*"} / kubelet_volume_stats_capacity_bytes{persistentvolumeclaim=~".*clusterId-readwriteinstance.*|.*clusterId-readonlyinstance.*"} * 100 >= 85',
                for: "1m",
                labels: {
                    rule_id: "e7a5e07a-979f-4503-8fda-1c992e920d80"
                },
                severity: "warning"
            }
        ]
    }
};
