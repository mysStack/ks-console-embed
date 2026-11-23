import "./module-15.js";
import "./module-18.js";
import module31 from "./module-31.js";
import { BYTE_RULE_CONFIG, ITEM_RULE_CONFIG, PERCENT_RULE_CONFIG, disabledRuleConfig } from "./module-969.js";
import { arrayToObject } from "./module-931.js";
const u = [
    {
        NameZh: "Redis连接数过多",
        NameEn: "Redis Client Usage",
        Expression: 'redis_connected_clients{namespace="$NAMESPACE",service=~".*$CLUSTERID.*"}/redis_config_maxclients{namespace="$NAMESPACE",service=~".*$CLUSTERID.*"}*100',
        Operator: ">",
        Unit: "%",
        ProposedDuration: "1m",
        Explain: "当前连接数使用超过$THRESHOLD$UNIT",
        Summary: "RadonDB Redis 【$CLUSTERID】 当前连接数使用超过$THRESHOLD$UNIT",
        Message: "RadonDB Redis: $CLUSTERID，当前连接数使用超过$THRESHOLD$UNIT。 当前值：{{ $value }}"
    },
    {
        NameZh: "被拒绝的Key个数",
        NameEn: "Evicted Keys",
        Expression: 'redis_evicted_keys_total{namespace="$NAMESPACE",service=~".*$CLUSTERID.*"}',
        Operator: ">",
        Unit: "个",
        ProposedDuration: "1m",
        Explain: "被拒绝的key的个数达到$THRESHOLD$UNIT",
        Summary: "RadonDB Redis 【$CLUSTERID】 被拒绝的key的个数达到$THRESHOLD$UNIT",
        Message: "RadonDB Redis: $CLUSTERID，被拒绝的key的个数达到$THRESHOLD$UNIT。 当前值：{{ $value }}"
    },
    {
        NameZh: "内存使用率",
        NameEn: "Memory Usage",
        Expression: 'redis_memory_used_bytes{namespace="$NAMESPACE",service=~".*$CLUSTERID.*"}/redis_memory_max_bytes{namespace="$NAMESPACE",service=~".*$CLUSTERID.*"}*100',
        Operator: ">",
        Unit: "%",
        ProposedDuration: "1m",
        Explain: "当前内存使用率超过$THRESHOLD$UNIT",
        Summary: "RadonDB Redis 【$CLUSTERID】 当前内存使用率超过$THRESHOLD$UNIT",
        Message: "RadonDB Redis: $CLUSTERID，当前内存使用率超过$THRESHOLD$UNIT。 当前值：{{ $value }}"
    },
    {
        NameZh: "阻塞的客户端数",
        NameEn: "Blocked Clients",
        Expression: 'redis_blocked_clients{namespace="$NAMESPACE",service=~".*$CLUSTERID.*"}',
        Operator: ">",
        Unit: "个",
        ProposedDuration: "1m",
        Explain: "阻塞客户端数超过$THRESHOLD$UNIT",
        Summary: "RadonDB Redis 【$CLUSTERID】 阻塞客户端数超过$THRESHOLD$UNIT",
        Message: "RadonDB Redis: $CLUSTERID，阻塞客户端数超过$THRESHOLD$UNIT。 当前值：{{ $value }}"
    },
    {
        NameZh: "拒绝的连接数",
        NameEn: "Rejected Connections",
        Expression: 'rate(redis_rejected_connections_total{namespace="$NAMESPACE",service=~".*$CLUSTERID.*"}[5m])',
        Operator: ">",
        Unit: "%",
        ProposedDuration: "1m",
        Explain: "拒绝的连接数超过$THRESHOLD$UNIT",
        Summary: "RadonDB Redis 【$CLUSTERID】 拒绝的连接数超过$THRESHOLD$UNIT",
        Message: "RadonDB Redis: $CLUSTERID，拒绝的连接数超过$THRESHOLD$UNIT。 当前值：{{ $value }}"
    },
    {
        NameZh: "已使用的rss字节数",
        NameEn: "Used RSS Bytes",
        Expression: 'redis_memory_used_rss_bytes{namespace="$NAMESPACE",service=~".*$CLUSTERID.*"}',
        Operator: ">",
        Unit: "byte",
        ProposedDuration: "1m",
        Explain: "内存已经使用的内存大小超过$THRESHOLD$UNIT",
        Summary: "RadonDB Redis 【$CLUSTERID】 内存已经使用的内存大小超过$THRESHOLD$UNIT",
        Message: "RadonDB Redis: $CLUSTERID，内存已经使用的内存大小超过$THRESHOLD$UNIT。 当前值：{{ $value }}"
    },
    {
        NameZh: "内存碎片率",
        NameEn: "Memory Fragmentation Ratio",
        Expression: 'redis_mem_fragmentation_ratio{namespace="$NAMESPACE",service=~".*$CLUSTERID.*"} > 1.5 ',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Explain: "内存碎片率过大，超过1.5",
        Summary: "RadonDB Redis 【$CLUSTERID】 内存碎片率过大，超过1.5",
        Message: "RadonDB Redis: $CLUSTERID，内存碎片率过大，超过1.5。 当前值：{{ $value }}"
    }
];
const c = {
    Metric: {
        "Redis Client Usage": {
            label: "Redis Client Usage",
            ruleConfig: PERCENT_RULE_CONFIG
        },
        "Evicted Keys": {
            label: "Evicted Keys",
            ruleConfig: ITEM_RULE_CONFIG
        },
        "Memory Usage": {
            label: "Memory Usage",
            ruleConfig: PERCENT_RULE_CONFIG
        },
        "Blocked Clients": {
            label: "Blocked Clients",
            ruleConfig: ITEM_RULE_CONFIG
        },
        "Rejected Connections": {
            label: "Rejected Connections",
            ruleConfig: PERCENT_RULE_CONFIG
        },
        "Used RSS Bytes": {
            label: "Used RSS Bytes",
            ruleConfig: BYTE_RULE_CONFIG
        },
        "Memory Fragmentation Ratio": {
            label: "Memory Fragmentation Ratio",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        }
    },
    Query: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Expression))),
    Message: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Message))),
    Summary: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Summary)))
};
export default c;
