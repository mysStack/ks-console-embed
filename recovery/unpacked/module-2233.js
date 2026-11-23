import "./module-15.js";
import "./module-18.js";
import module31 from "./module-31.js";
import { PERCENT_RULE_CONFIG, TIME_RULE_CONFIG, disabledRuleConfig } from "./module-969.js";
import { arrayToObject } from "./module-931.js";
const u = [
    {
        NameZh: "MySQL下线",
        NameEn: "MySQLIsDown",
        Expression: 'mysql_up{namespace="$NAMESPACE",service="$CLUSTERID-metrics"} == 0',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Explain: "MySQL下线",
        Summary: "RadonDB MySQL 【$CLUSTERID】 MySQL下线",
        Message: "RadonDB MySQL: $CLUSTERID，MySQL下线。 当前值：{{ $value }}"
    },
    {
        NameZh: "主从复制延迟",
        NameEn: "MySQLSlaveBehindMaster",
        Expression: 'rate(mysql_slave_status_seconds_behind_master{namespace="$NAMESPACE",service="$CLUSTERID-metrics"}[1m])',
        Operator: ">",
        Unit: "s",
        ProposedDuration: "1m",
        Explain: "从库落后主库$THRESHOLD$UNIT ",
        Summary: "RadonDB MySQL 【$CLUSTERID】 从库落后主库$THRESHOLD$UNIT ",
        Message: "RadonDB MySQL: $CLUSTERID，从库落后主库$THRESHOLD$UNIT 。 当前值：{{ $value }}"
    },
    {
        NameZh: "CPU使用率",
        NameEn: "MySQLCPUUtilization",
        Expression: '(sum(irate(container_cpu_usage_seconds_total{namespace="$NAMESPACE",pod=~".*$CLUSTERID.*",container!="POD",container!=""}[3m])) by (pod)) / (sum(kube_pod_container_resource_limits{resource="cpu",namespace="$NAMESPACE",pod=~".*$CLUSTERID.*"}) by (pod)) * 100',
        Operator: ">",
        Unit: "%",
        ProposedDuration: "1m",
        Explain: "CPU使用率超过$THRESHOLD$UNIT",
        Summary: "RadonDB MySQL 【$CLUSTERID】 CPU使用率超过$THRESHOLD$UNIT",
        Message: "RadonDB MySQL: $CLUSTERID，CPU使用率超过$THRESHOLD$UNIT。 当前值：{{ $value }}"
    },
    {
        NameZh: "内存使用率",
        NameEn: "MySQLMemUtilization",
        Expression: '(sum(container_memory_working_set_bytes{namespace="$NAMESPACE",pod=~".*$CLUSTERID.*",container!="POD",container!=""}) by (pod)) / (sum(kube_pod_container_resource_limits{resource="memory",namespace="$NAMESPACE",pod=~".*$CLUSTERID.*"}) by (pod)) * 100',
        Operator: ">",
        Unit: "%",
        ProposedDuration: "1m",
        Explain: "内存使用率超过$THRESHOLD$UNIT",
        Summary: "RadonDB MySQL 【$CLUSTERID】 内存使用率超过$THRESHOLD$UNIT",
        Message: "RadonDB MySQL: $CLUSTERID，内存使用率超过$THRESHOLD$UNIT。 当前值：{{ $value }}"
    },
    {
        NameZh: "磁盘使用率",
        NameEn: "MySQLDisk",
        Expression: '(kubelet_volume_stats_used_bytes{persistentvolumeclaim=~".*$CLUSTERID.*"} / kubelet_volume_stats_capacity_bytes{persistentvolumeclaim=~".*$CLUSTERID.*"} * 100)',
        Operator: ">",
        Unit: "%",
        ProposedDuration: "1m",
        Explain: "磁盘使用率超过$THRESHOLD$UNIT",
        Summary: "RadonDB MySQL 【$CLUSTERID】 磁盘使用率超过$THRESHOLD$UNIT",
        Message: "RadonDB MySQL: $CLUSTERID，磁盘使用率超过$THRESHOLD$UNIT。 当前值：{{ $value }}"
    },
    {
        NameZh: "连接数利用率",
        NameEn: "MySQLTooManyConnections",
        Expression: 'mysql_global_status_max_used_connections{namespace="$NAMESPACE",service="$CLUSTERID-metrics"} / mysql_global_variables_max_connections{namespace="$NAMESPACE",service="$CLUSTERID-metrics"} * 100',
        Operator: ">",
        Unit: "%",
        ProposedDuration: "1m",
        Explain: "连接数使用超过$THRESHOLD$UNIT",
        Summary: "RadonDB MySQL 【$CLUSTERID】 连接数使用超过$THRESHOLD$UNIT",
        Message: "RadonDB MySQL: $CLUSTERID，连接数使用超过$THRESHOLD$UNIT。 当前值：{{ $value }}"
    }
];
const c = {
    Metric: {
        MySQLIsDown: {
            label: "MySQLIsDown",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        MySQLSlaveBehindMaster: {
            label: "MySQLSlaveBehindMaster",
            ruleConfig: TIME_RULE_CONFIG
        },
        MySQLCPUUtilization: {
            label: "MySQLCPUUtilization",
            ruleConfig: PERCENT_RULE_CONFIG
        },
        MySQLMemUtilization: {
            label: "MySQLMemUtilization",
            ruleConfig: PERCENT_RULE_CONFIG
        },
        MySQLDisk: {
            label: "MySQLDisk",
            ruleConfig: PERCENT_RULE_CONFIG
        },
        MySQLTooManyConnections: {
            label: "MySQLTooManyConnections",
            ruleConfig: PERCENT_RULE_CONFIG
        }
    },
    Query: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Expression))),
    Message: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Message))),
    Summary: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Summary)))
};
export default c;
