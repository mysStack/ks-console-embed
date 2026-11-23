import "./module-15.js";
import "./module-18.js";
import module31 from "./module-31.js";
import { disabledRuleConfig } from "./module-969.js";
import { arrayToObject } from "./module-931.js";
const u = [
    {
        NameEn: "OpenSearchClusterHealthStatusYellow",
        Expression: 'max(opensearch_cluster_status{service="$CLUSTERID",namespace="$NAMESPACE"})==1',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "3m",
        Summary: "RadonDB OpenSearch 【$CLUSTERID】 集群健康状态为 yellow",
        Message: "RadonDB OpenSearch: $CLUSTERID，集群健康状态为 yellow。 当前值：{{ $value }}"
    },
    {
        NameEn: "OpenSearchClusterHealthStatusRed",
        Expression: 'max(opensearch_cluster_status{service="$CLUSTERID",namespace="$NAMESPACE"})==2',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "3m",
        Summary: "RadonDB OpenSearch 【$CLUSTERID】 集群健康状态为 red",
        Message: "RadonDB OpenSearch: $CLUSTERID，集群健康状态为 red。 当前值：{{ $value }}"
    },
    {
        NameEn: "OpenSearchHeapMemTooHigh85%",
        Expression: 'max(opensearch_jvm_mem_heap_used_percent{service="$CLUSTERID",namespace="$NAMESPACE"})>85',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "3m",
        Summary: "RadonDB OpenSearch 【$CLUSTERID】 堆内存使用率超过85%",
        Message: "RadonDB OpenSearch: $CLUSTERID，堆内存使用率超过85%。 当前值：{{ $value }}"
    },
    {
        NameEn: "OpenSearchHeapMemTooHigh90%",
        Expression: 'max(opensearch_jvm_mem_heap_used_percent{service="$CLUSTERID",namespace="$NAMESPACE"})>90',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "3m",
        Summary: "RadonDB OpenSearch 【$CLUSTERID】 堆内存使用率超过90%",
        Message: "RadonDB OpenSearch: $CLUSTERID，堆内存使用率超过90%。 当前值：{{ $value }}"
    },
    {
        NameEn: "OpenSearchCPUUsageOver90%",
        Expression: 'max(opensearch_os_cpu_percent{service="$CLUSTERID",namespace="$NAMESPACE"})>90',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "3m",
        Summary: "RadonDB OpenSearch 【$CLUSTERID】 CPU使用率超过90%",
        Message: "RadonDB OpenSearch: $CLUSTERID，CPU使用率超过90%。 当前值：{{ $value }}"
    },
    {
        NameEn: "OpenSearchAvailableDiskLessThan15%",
        Expression: 'min(round(opensearch_fs_total_available_bytes{service="$CLUSTERID",namespace="$NAMESPACE"}/opensearch_fs_total_total_bytes{service="$CLUSTERID",namespace="$NAMESPACE"}*100,0.1))<15',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Summary: "RadonDB OpenSearch 【$CLUSTERID】 磁盘可用百分比小于15%",
        Message: "RadonDB OpenSearch: $CLUSTERID，磁盘可用百分比小于15%。 当前值：{{ $value }}"
    },
    {
        NameEn: "OpenSearchAvailableDiskLessThan10%",
        Expression: 'min(round(opensearch_fs_total_available_bytes{service="$CLUSTERID",namespace="$NAMESPACE"}/opensearch_fs_total_total_bytes{service="$CLUSTERID",namespace="$NAMESPACE"}*100,0.1))<10',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Summary: "RadonDB OpenSearch 【$CLUSTERID】 磁盘可用百分比小于10%",
        Message: "RadonDB OpenSearch: $CLUSTERID，磁盘可用百分比小于10%。 当前值：{{ $value }}"
    },
    {
        NameEn: "OpenSearchAvailableDiskLessThan5%",
        Expression: 'min(round(opensearch_fs_total_available_bytes{service="$CLUSTERID",namespace="$NAMESPACE"}/opensearch_fs_total_total_bytes{service="$CLUSTERID",namespace="$NAMESPACE"}*100,0.1))<5',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Summary: "RadonDB OpenSearch 【$CLUSTERID】 磁盘可用百分比小于5%",
        Message: "RadonDB OpenSearch: $CLUSTERID，磁盘可用百分比小于5%。 当前值：{{ $value }}"
    }
];
const c = {
    Metric: {
        OpenSearchClusterHealthStatusYellow: {
            label: "ClusterHealthStatusYellow",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        OpenSearchClusterHealthStatusRed: {
            label: "ClusterHealthStatusRed",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        "OpenSearchHeapMemTooHigh85%": {
            label: "HeapMemTooHigh85%",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        "OpenSearchHeapMemTooHigh90%": {
            label: "HeapMemTooHigh90%",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        "OpenSearchCPUUsageOver90%": {
            label: "CPUUsageOver90%",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        "OpenSearchAvailableDiskLessThan15%": {
            label: "AvailableDiskLessThan15%",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        "OpenSearchAvailableDiskLessThan10%": {
            label: "AvailableDiskLessThan10%",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        "OpenSearchAvailableDiskLessThan5%": {
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
