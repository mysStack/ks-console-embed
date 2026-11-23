import "./module-15.js";
export const redisAlertYaml = {
    apiVersion: "alerting.kubesphere.io/v2beta1",
    kind: "RuleGroup",
    metadata: {
        annotations: {
            dmp_managed_field: '[{"metricType":"Memory Usage","comparator":">=","thresholds":"70"}]',
            "kubesphere.io/creator": "admin"
        },
        creationTimestamp: "2023-10-07T08:11:25Z",
        generation: 1,
        labels: {
            "alerting.kubesphere.io/enable": "true",
            app_instance: "clusterId",
            openpitrix_app_id: "app-redis-sentinel"
        },
        name: "clusterId-default",
        namespace: "namespaceName",
        uid: "94e4f243-9027-4cea-a663-7b4989d2c4cc"
    },
    spec: {
        rules: [
            {
                alert: "MemoryUsage",
                annotations: {
                    message: "RadonDB Redis: clusterId，当前内存使用率超过 %。 当前值：{{ $value }}",
                    summary: "RadonDB Redis 【clusterId】 当前内存使用率超过 %"
                },
                expr: 'redis_memory_used_bytes{namespace="namespaceName",service=~".*clusterId.*"}/redis_memory_max_bytes{namespace="namespaceName",service=~".*clusterId.*"}*100 >= 70',
                for: "1m",
                labels: {
                    rule_id: "794e0a39-4d7c-42fc-91ae-c8c45d8110b3"
                },
                severity: "warning"
            }
        ]
    }
};
