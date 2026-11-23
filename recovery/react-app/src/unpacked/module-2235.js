import "./module-15.js";
import "./module-18.js";
import module31 from "./module-31.js";
import { arrayToObject } from "./module-931.js";
import { ITEM_RULE_CONFIG, disabledRuleConfig } from "./module-969.js";
const u = [
    {
        NameZh: "ClickHouse服务下线",
        NameEn: "ClickHouseServerDown",
        Expression: 'chi_clickhouse_metric_fetch_errors{namespace="$NAMESPACE",service="clickhouse-$CLUSTERID",fetch_type="system.metrics"} > 0',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Explain: "ClickHouse 无法提供数据库服务",
        Summary: "RadonDB ClickHouse 【$CLUSTERID】 ClickHouse 无法提供数据库服务",
        Message: "RadonDB ClickHouse: $CLUSTERID，ClickHouse 无法提供数据库服务。 当前值：{{ $value }}"
    },
    {
        NameZh: "ClickHouse服务重启",
        NameEn: "ClickHouseServerRestartRecently",
        Expression: 'chi_clickhouse_metric_Uptime{namespace="$NAMESPACE",service="clickhouse-$CLUSTERID"} > 1 < 180',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Explain: "clickhouse server进程已在不到3分钟前启动",
        Summary: "RadonDB ClickHouse 【$CLUSTERID】 clickhouse server进程已在不到3分钟前启动",
        Message: "RadonDB ClickHouse: $CLUSTERID，clickhouse server进程已在不到3分钟前启动。查看之前的ClickHouse pod日志，以调查重启原因。 当前值：{{ $value }}"
    },
    {
        NameZh: "ClickHouse分布式表文件插入频繁",
        NameEn: "ClickHouseDistributedFilesToInsertHigh",
        Expression: 'chi_clickhouse_metric_DistributedFilesToInsert{namespace="$NAMESPACE",service="clickhouse-$CLUSTERID"}',
        Operator: ">",
        Unit: "个",
        ProposedDuration: "1m",
        Explain: "clickhouse服务器超过$THRESHOLD$UNIT分布式文件在做插入操作",
        Summary: "RadonDB ClickHouse 【$CLUSTERID】 clickhouse服务器超过$THRESHOLD$UNIT分布式文件在做插入操作",
        Message: "RadonDB ClickHouse: $CLUSTERID，clickhouse服务器超过$THRESHOLD$UNIT分布式文件在做插入操作。 当前值：{{ $value }}"
    },
    {
        NameZh: "ClickHouse分布式连接异常",
        NameEn: "ClickHouseDistributedConnectionExceptions",
        Expression: 'increase(chi_clickhouse_event_DistributedConnectionFailTry{namespace="$NAMESPACE",service="clickhouse-$CLUSTERID"}[1m]) > 0 or increase(chi_clickhouse_event_DistributedConnectionFailAtAll{namespace="$NAMESPACE",service="clickhouse-$CLUSTERID"}[1m]) > 0',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Explain: "分布式连接发生异常",
        Summary: "RadonDB ClickHouse 【$CLUSTERID】 分布式连接发生异常",
        Message: "RadonDB ClickHouse: $CLUSTERID，分布式连接发生异常。 当前值：{{ $value }}"
    },
    {
        NameZh: "ClickHouse拒绝Insert操作",
        NameEn: "ClickHouseRejectedInsert",
        Expression: 'increase(chi_clickhouse_event_RejectedInserts{namespace="$NAMESPACE",service="clickhouse-$CLUSTERID"}[1m]) > 0',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Explain: "出现拒绝插入异常",
        Summary: "RadonDB ClickHouse 【$CLUSTERID】 出现拒绝插入异常",
        Message: "RadonDB ClickHouse: $CLUSTERID，出现拒绝插入异常。 当前值：{{ $value }}"
    },
    {
        NameZh: "ClickHouse低插入元组数",
        NameEn: "ClickHouseLowInsertedRowsPerQuery",
        Expression: 'increase(chi_clickhouse_event_InsertQuery{namespace="$NAMESPACE",service="clickhouse-$CLUSTERID"}[1m]) > 0 and (increase(chi_clickhouse_event_InsertedRows{namespace="$NAMESPACE",service="clickhouse-$CLUSTERID"}[1m]) / increase(chi_clickhouse_event_InsertQuery{namespace="$NAMESPACE",service="clickhouse-$CLUSTERID"}[1m]) <= 1000)',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Explain: "建议增加每次Insert操作的插入元组数",
        Summary: "RadonDB ClickHouse 【$CLUSTERID】 建议增加每次Insert操作的插入元组数",
        Message: "RadonDB ClickHouse: $CLUSTERID，建议增加每次Insert操作的插入元组数。 当前值：{{ $value }}"
    },
    {
        NameZh: "ClickHouse慢查询",
        NameEn: "ClickHouseLongestRunningQuery",
        Expression: 'chi_clickhouse_metric_LongestRunningQuery{namespace="$NAMESPACE",service="clickhouse-$CLUSTERID"} > 600',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Explain: "出现了长时间运行的慢查询",
        Summary: "RadonDB ClickHouse 【$CLUSTERID】 出现了长时间运行的慢查询",
        Message: "RadonDB ClickHouse: $CLUSTERID，出现了长时间运行的慢查询。 当前值：{{ $value }}"
    },
    {
        NameZh: "ClickHouse抢占查询",
        NameEn: "ClickHouseQueryPreempted",
        Expression: 'chi_clickhouse_metric_QueryPreempted{namespace="$NAMESPACE",service="clickhouse-$CLUSTERID"} > 0',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Explain: "发生了抢占查询",
        Summary: "RadonDB ClickHouse 【$CLUSTERID】 发生了抢占查询",
        Message: "RadonDB ClickHouse: $CLUSTERID，发生了抢占查询。 当前值：{{ $value }}"
    },
    {
        NameZh: "ClickHouse太多连接数",
        NameEn: "ClickHouseTooManyConnections",
        Expression: 'chi_clickhouse_metric_HTTPConnection{namespace="$NAMESPACE",service="clickhouse-$CLUSTERID"} + chi_clickhouse_metric_TCPConnection{namespace="$NAMESPACE",service="clickhouse-$CLUSTERID"} + chi_clickhouse_metric_MySQLConnection{namespace="$NAMESPACE",service="clickhouse-$CLUSTERID"}',
        Operator: ">",
        Unit: "个",
        ProposedDuration: "1m",
        Explain: "总连接数超过了$THRESHOLD$UNIT",
        Summary: "RadonDB ClickHouse 【$CLUSTERID】 总连接数超过了$THRESHOLD$UNIT",
        Message: "RadonDB ClickHouse: $CLUSTERID，总连接数超过了$THRESHOLD$UNIT。 当前值：{{ $value }}"
    },
    {
        NameZh: "ClickHouse太多查询",
        NameEn: "ClickHouseTooManyRunningQueries",
        Expression: 'chi_clickhouse_metric_Query{namespace="$NAMESPACE",service="clickhouse-$CLUSTERID"}',
        Operator: ">",
        Unit: "个",
        ProposedDuration: "1m",
        Explain: "太多运行着的查询，超过了$THRESHOLD$UNIT",
        Summary: "RadonDB ClickHouse 【$CLUSTERID】 太多运行着的查询，超过了$THRESHOLD$UNIT",
        Message: "RadonDB ClickHouse: $CLUSTERID，太多运行着的查询，超过了$THRESHOLD$UNIT。 当前值：{{ $value }}"
    }
];
const c = {
    Metric: {
        ClickHouseServerDown: {
            label: "ClickHouseServerDown",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        ClickHouseServerRestartRecently: {
            label: "ClickHouseServerRestartRecently",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        ClickHouseDistributedFilesToInsertHigh: {
            label: "ClickHouseDistributedFilesToInsertHigh",
            ruleConfig: ITEM_RULE_CONFIG
        },
        ClickHouseLowInsertedRowsPerQuery: {
            label: "ClickHouseLowInsertedRowsPerQuery",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        ClickHouseLongestRunningQuery: {
            label: "ClickHouseLongestRunningQuery",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        ClickHouseQueryPreempted: {
            label: "ClickHouseQueryPreempted",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        ClickHouseTooManyConnections: {
            label: "ClickHouseTooManyConnections",
            ruleConfig: ITEM_RULE_CONFIG
        },
        ClickHouseTooManyRunningQueries: {
            label: "ClickHouseTooManyRunningQueries",
            ruleConfig: ITEM_RULE_CONFIG
        }
    },
    Query: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Expression))),
    Message: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Message))),
    Summary: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Summary)))
};
export default c;
