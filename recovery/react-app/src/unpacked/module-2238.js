import "./module-15.js";
import "./module-18.js";
import module31 from "./module-31.js";
import { disabledRuleConfig } from "./module-969.js";
import { arrayToObject } from "./module-931.js";
const u = [
    {
        NameZh: "集群健康状态为 yellow",
        NameEn: "ClusterHealthStatusYellow",
        Expression: 'elasticsearch_cluster_health_status{service="$CLUSTERID-es-elasticsearch-exporter",namespace="$NAMESPACE",color="yellow"} == 1',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "3m",
        Explain: "集群健康状态为 yellow",
        Summary: "RadonDB Elasticsearch 【$CLUSTERID】 集群健康状态为 yellow",
        Message: "RadonDB Elasticsearch: $CLUSTERID，集群健康状态为 yellow。 当前值：{{ $value }}"
    },
    {
        NameZh: "集群健康状态为 red",
        NameEn: "ClusterHealthStatusRed",
        Expression: 'elasticsearch_cluster_health_status{service="$CLUSTERID-es-elasticsearch-exporter",namespace="$NAMESPACE",color="red"} == 1',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "3m",
        Explain: "集群健康状态为 red",
        Summary: "RadonDB Elasticsearch 【$CLUSTERID】 集群健康状态为 red",
        Message: "RadonDB Elasticsearch: $CLUSTERID，集群健康状态为 red。 当前值：{{ $value }}"
    },
    {
        NameZh: "堆内存使用率超过85%",
        NameEn: "HeapMemTooHigh85%",
        Expression: 'max(round(elasticsearch_jvm_memory_used_bytes{service="$CLUSTERID-es-elasticsearch-exporter",namespace="$NAMESPACE",area="heap"}/elasticsearch_jvm_memory_max_bytes{service="$CLUSTERID-es-elasticsearch-exporter",namespace="$NAMESPACE",area="heap"}*100,0.1)) > 85',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "3m",
        Explain: "堆内存使用率超过85%",
        Summary: "RadonDB Elasticsearch 【$CLUSTERID】 堆内存使用率超过85%",
        Message: "RadonDB Elasticsearch: $CLUSTERID，堆内存使用率超过85%。 当前值：{{ $value }}"
    },
    {
        NameZh: "堆内存使用率超过90%",
        NameEn: "HeapMemTooHigh90%",
        Expression: 'max(round(elasticsearch_jvm_memory_used_bytes{service="$CLUSTERID-es-elasticsearch-exporter",namespace="$NAMESPACE",area="heap"}/elasticsearch_jvm_memory_max_bytes{service="$CLUSTERID-es-elasticsearch-exporter",namespace="$NAMESPACE",area="heap"}*100,0.1)) > 90',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "3m",
        Explain: "堆内存使用率超过90%",
        Summary: "RadonDB Elasticsearch 【$CLUSTERID】 堆内存使用率超过90%",
        Message: "RadonDB Elasticsearch: $CLUSTERID，堆内存使用率超过90%。 当前值：{{ $value }}"
    },
    {
        NameZh: "CPU使用率超过90%",
        NameEn: "CPUUsageOver90%",
        Expression: 'max(elasticsearch_os_cpu_percent{service="$CLUSTERID-es-elasticsearch-exporter",namespace="$NAMESPACE"}) > 90',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "3m",
        Explain: "CPU使用率超过90%",
        Summary: "RadonDB Elasticsearch 【$CLUSTERID】 CPU使用率超过90%",
        Message: "RadonDB Elasticsearch: $CLUSTERID，CPU使用率超过90%。 当前值：{{ $value }}"
    },
    {
        NameZh: "磁盘可用百分比小于15%",
        NameEn: "AvailableDiskLessThan15%",
        Expression: 'min(round(elasticsearch_filesystem_data_free_bytes{service="$CLUSTERID-es-elasticsearch-exporter",namespace="$NAMESPACE"}/elasticsearch_filesystem_data_size_bytes{service="$CLUSTERID-es-elasticsearch-exporter",namespace="$NAMESPACE"}*100,0.1)) < 15',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Explain: "磁盘可用百分比小于15%",
        Summary: "RadonDB Elasticsearch 【$CLUSTERID】 磁盘可用百分比小于15%",
        Message: "RadonDB Elasticsearch: $CLUSTERID，磁盘可用百分比小于15%。 当前值：{{ $value }}"
    },
    {
        NameZh: "磁盘可用百分比小于10%",
        NameEn: "AvailableDiskLessThan10%",
        Expression: 'min(round(elasticsearch_filesystem_data_free_bytes{service="$CLUSTERID-es-elasticsearch-exporter",namespace="$NAMESPACE"}/elasticsearch_filesystem_data_size_bytes{service="$CLUSTERID-es-elasticsearch-exporter",namespace="$NAMESPACE"}*100,0.1)) < 10',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Explain: "磁盘可用百分比小于10%",
        Summary: "RadonDB Elasticsearch 【$CLUSTERID】 磁盘可用百分比小于10%",
        Message: "RadonDB Elasticsearch: $CLUSTERID，磁盘可用百分比小于10%。 当前值：{{ $value }}"
    },
    {
        NameZh: "磁盘可用百分比小于5%",
        NameEn: "AvailableDiskLessThan5%",
        Expression: 'min(round(elasticsearch_filesystem_data_free_bytes{service="$CLUSTERID-es-elasticsearch-exporter",namespace="$NAMESPACE"}/elasticsearch_filesystem_data_size_bytes{service="$CLUSTERID-es-elasticsearch-exporter",namespace="$NAMESPACE"}*100,0.1)) < 5',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Explain: "磁盘可用百分比小于5%",
        Summary: "RadonDB Elasticsearch 【$CLUSTERID】 磁盘可用百分比小于5%",
        Message: "RadonDB Elasticsearch: $CLUSTERID，磁盘可用百分比小于5%。 当前值：{{ $value }}"
    }
];
const c = {
    Metric: {
        ClusterHealthStatusYellow: {
            label: "ClusterHealthStatusYellow",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        ClusterHealthStatusRed: {
            label: "ClusterHealthStatusRed",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        "HeapMemTooHigh85%": {
            label: "HeapMemTooHigh85%",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        "HeapMemTooHigh90%": {
            label: "HeapMemTooHigh90%",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        "CPUUsageOver90%": {
            label: "CPUUsageOver90%",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        "AvailableDiskLessThan15%": {
            label: "AvailableDiskLessThan15%",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        "AvailableDiskLessThan10%": {
            label: "AvailableDiskLessThan10%",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        "AvailableDiskLessThan5%": {
            label: "AvailableDiskLessThan5%",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        }
    },
    Query: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Expression))),
    Message: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Message))),
    Summary: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Summary)))
};
export default c;
