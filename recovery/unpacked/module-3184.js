import "./module-15.js";
export const openSearchAlertYaml = {
    apiVersion: "alerting.kubesphere.io/v2beta1",
    kind: "RuleGroup",
    metadata: {
        annotations: {
            dmp_managed_field: '[{"metricType":"OpenSearchAvailableDiskLessThan15%","comparator":"-","thresholds":""},{"metricType":"OpenSearchAvailableDiskLessThan10%","comparator":"-","thresholds":""},{"metricType":"OpenSearchHeapMemTooHigh90%","comparator":"-","thresholds":""}]',
            "kubesphere.io/creator": "admin"
        },
        creationTimestamp: "2023-10-07T07:53:28Z",
        generation: 3,
        labels: {
            "alerting.kubesphere.io/enable": "true",
            app_instance: "clusterId",
            openpitrix_app_id: "app-opensearch"
        },
        name: "clusterId-default",
        namespace: "namespaceName",
        uid: "defeed56-e6b0-4b33-a677-ef232b5c8329"
    },
    spec: {
        rules: [
            {
                alert: "AvailableDiskLessThan15Percent",
                annotations: {
                    message: "RadonDB OpenSearch: clusterId，磁盘可用百分比小于15%。 当前值：{{ $value }}",
                    summary: "RadonDB OpenSearch 【clusterId】 磁盘可用百分比小于15%"
                },
                expr: 'min(round(opensearch_fs_total_available_bytes{service="clusterId",namespace="namespaceName"}/opensearch_fs_total_total_bytes{service="clusterId",namespace="namespaceName"}*100,0.1))<15',
                for: "1m",
                labels: {
                    rule_id: "0d159444-bd60-4777-a327-075487d62549"
                },
                severity: "warning"
            },
            {
                alert: "AvailableDiskLessThan10Percent",
                annotations: {
                    message: "RadonDB OpenSearch: clusterId，磁盘可用百分比小于10%。 当前值：{{ $value }}",
                    summary: "RadonDB OpenSearch 【clusterId】 磁盘可用百分比小于10%"
                },
                expr: 'min(round(opensearch_fs_total_available_bytes{service="clusterId",namespace="namespaceName"}/opensearch_fs_total_total_bytes{service="clusterId",namespace="namespaceName"}*100,0.1))<10',
                for: "1m",
                labels: {
                    rule_id: "37ac67a4-3fca-41d6-a54d-0813d5a7ee21"
                },
                severity: "error"
            }
        ]
    }
};
