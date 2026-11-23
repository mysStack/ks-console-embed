import "./module-15.js";
import "./module-18.js";
import module31 from "./module-31.js";
import { arrayToObject } from "./module-931.js";
import { ITEM_RULE_CONFIG, disabledRuleConfig } from "./module-969.js";
const u = [
    {
        NameZh: "当前连接数过多",
        NameEn: "MongodbTooManyConnections",
        Expression: 'mongodb_connections_current{namespace="$NAMESPACE",cluster_name="$CLUSTERID"}',
        Operator: ">",
        Unit: "个",
        ProposedDuration: "1m",
        Explain: "当前连接数超过$THRESHOLD$UNIT",
        Summary: "RadonDB MongoDB 【$CLUSTERID】 当前连接数超过$THRESHOLD$UNIT",
        Message: "RadonDB MongoDB: $CLUSTERID，当前连接数超过$THRESHOLD$UNIT。 当前值：{{ $value }}"
    },
    {
        NameZh: "当前游标打开数量过多",
        NameEn: "MongodbTooManyCursors",
        Expression: 'mongodb_metrics_cursor_open_total{namespace="$NAMESPACE",cluster_name="$CLUSTERID"}',
        Operator: ">",
        Unit: "个",
        ProposedDuration: "1m",
        Explain: "当前游标打开数量大于$THRESHOLD$UNIT",
        Summary: "RadonDB MongoDB 【$CLUSTERID】 当前游标打开数量大于$THRESHOLD$UNIT",
        Message: "RadonDB MongoDB: $CLUSTERID，当前游标打开数量大于$THRESHOLD$UNIT。 当前值：{{ $value }}"
    },
    {
        NameZh: "当前事务读并发已达到最大值",
        NameEn: "MongodbMaxTransactionConcurrentRead",
        Expression: 'mongodb_wiredTiger_concurrentTransactions_read_out{namespace="$NAMESPACE",cluster_name="$CLUSTERID"} >= 128',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Explain: "当前事务读并发已达到最大值128",
        Summary: "RadonDB MongoDB 【$CLUSTERID】 当前事务读并发已达到最大值128",
        Message: "RadonDB MongoDB: $CLUSTERID，当前事务读并发已达到最大值128。 当前值：{{ $value }}"
    },
    {
        NameZh: "当前事务写并发已达到最大值",
        NameEn: "MongodbMaxTransactionConcurrentWrite",
        Expression: 'mongodb_wiredTiger_concurrentTransactions_write_out{namespace="$NAMESPACE",cluster_name="$CLUSTERID"} >= 128',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Explain: "当前事务写并发已达到最大值128",
        Summary: "RadonDB MongoDB 【$CLUSTERID】 当前事务写并发已达到最大值128",
        Message: "RadonDB MongoDB: $CLUSTERID，当前事务写并发已达到最大值128。 当前值：{{ $value }}"
    },
    {
        NameZh: "WiredTiger 内存使用达到90%",
        NameEn: "MongoDBWiredTigerUsageEvition",
        Expression: 'mongodb_wiredTiger_cache_bytes_currently_in_the_cache{namespace="$NAMESPACE",cluster_name="$CLUSTERID"}/mongodb_wiredTiger_cache_maximum_bytes_configured{namespace="$NAMESPACE",cluster_name="$CLUSTERID"} * 100 >= 90',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Explain: "WiredTiger 内存使用达到90%",
        Summary: "RadonDB MongoDB 【$CLUSTERID】 WiredTiger 内存使用达到90%",
        Message: "RadonDB MongoDB: $CLUSTERID，WiredTiger 内存使用达到90%。 当前值：{{ $value }}"
    },
    {
        NameZh: "WiredTiger 内存脏页达到20%",
        NameEn: "MongoDBWiredTigerDirtyEvition",
        Expression: 'mongodb_wiredTiger_cache_tracked_dirty_bytes_in_the_cache{namespace="$NAMESPACE",cluster_name="$CLUSTERID"}/mongodb_wiredTiger_cache_maximum_bytes_configured{namespace="$NAMESPACE",cluster_name="$CLUSTERID"} * 100 >= 20',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Explain: "WiredTiger 内存脏页达到20%",
        Summary: "RadonDB MongoDB 【$CLUSTERID】 WiredTiger 内存脏页达到20%",
        Message: "RadonDB MongoDB: $CLUSTERID，WiredTiger 内存脏页达到20%。 当前值：{{ $value }}"
    }
];
const c = {
    Metric: {
        MongodbTooManyConnections: {
            label: "MongodbTooManyConnections",
            ruleConfig: ITEM_RULE_CONFIG
        },
        MongodbTooManyCursors: {
            label: "MongodbTooManyCursors",
            ruleConfig: ITEM_RULE_CONFIG
        },
        MongodbMaxTransactionConcurrentRead: {
            label: "MongodbMaxTransactionConcurrentRead",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        MongodbMaxTransactionConcurrentWrite: {
            label: "MongodbMaxTransactionConcurrentWrite",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        MongoDBWiredTigerUsageEvition: {
            label: "MongoDBWiredTigerUsageEvition",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        MongoDBWiredTigerDirtyEvition: {
            label: "MongoDBWiredTigerDirtyEvition",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        }
    },
    Query: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Expression))),
    Message: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Message))),
    Summary: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Summary)))
};
export default c;
