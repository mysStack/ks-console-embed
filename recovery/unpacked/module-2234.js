import "./module-15.js";
import "./module-18.js";
import module31 from "./module-31.js";
import { arrayToObject } from "./module-931.js";
import { PERCENT_RULE_CONFIG, TIME_RULE_CONFIG, disabledRuleConfig } from "./module-969.js";
const u = [
    {
        NameEn: "PGUnhealth",
        Expression: 'pg_auto_failover_unhealth_count{namespace="$NAMESPACE",service="$CLUSTERID-autofailover"} != 0',
        Operator: "N/A",
        Unit: "N/A",
        ProposedDuration: "1m",
        Summary: "PostgreSQL 节点不健康。",
        Message: "PostgreSQL 节点不健康。"
    },
    {
        NameEn: "PGAsync",
        Expression: 'pg_auto_failover_async_count{namespace="$NAMESPACE",service="$CLUSTERID-autofailover"} != 0',
        Operator: ">",
        Unit: "s",
        ProposedDuration: "1m",
        Summary: "PostgreSQL 节点出现异步模式。",
        Message: "PostgreSQL 节点出现异步模式。"
    },
    {
        NameEn: "PGNotRunning",
        Expression: 'pg_auto_failover_not_running_count{namespace="$NAMESPACE",service="$CLUSTERID-autofailover"} != 0',
        Operator: ">",
        Unit: "s",
        ProposedDuration: "1m",
        Summary: "PostgreSQL 未运行。",
        Message: "PostgreSQL 未运行。"
    },
    {
        NameEn: "PGInvalid",
        Expression: 'pg_auto_failover_not_running_count{namespace="$NAMESPACE",service="$CLUSTERID-autofailover"} != 0 ',
        Operator: ">",
        Unit: "s",
        ProposedDuration: "1m",
        Summary: "PostgreSQL 存在无效节点。",
        Message: "PostgreSQL 存在无效节点。"
    },
    {
        NameEn: "PGCPUUtilization",
        Expression: '(sum(irate(container_cpu_usage_seconds_total{namespace="$NAMESPACE",pod=~".*$CLUSTERID-readwriteinstance.*|.*$CLUSTERID-readonlyinstance.*",container="postgresql"}[3m])) by (pod)) / (sum(kube_pod_container_resource_limits{resource="cpu", container="postgresql", namespace="$NAMESPACE",pod=~".*$CLUSTERID-readwriteinstance.*|.*$CLUSTERID-readonlyinstance.*"}) by (pod)) * 100',
        Operator: ">",
        Unit: "%",
        ProposedDuration: "1m",
        Summary: "RadonDB PostgreSQL 【$CLUSTERID】 CPU使用率超过$THRESHOLD$UNIT。",
        Message: "RadonDB PostgreSQL: $CLUSTERID，CPU使用率超过$THRESHOLD$UNIT。 当前值：{{ $value }}"
    },
    {
        NameEn: "PGMemUtilization",
        Expression: '(sum(container_memory_working_set_bytes{namespace="$NAMESPACE",pod=~".*$CLUSTERID-readwriteinstance.*|.*$CLUSTERID-readonlyinstance.*",container="postgresql"}) by (pod)) / (sum(kube_pod_container_resource_limits{resource="memory", container="postgresql", namespace="$NAMESPACE", pod=~".*$CLUSTERID-readwriteinstance.*|.*$CLUSTERID-readonlyinstance.*"}) by (pod)) * 100',
        Operator: ">",
        Unit: "%",
        ProposedDuration: "1m",
        Summary: "RadonDB PostgreSQL 【$CLUSTERID】 内存使用率超过$THRESHOLD$UNIT。",
        Message: "RadonDB PostgreSQL: $CLUSTERID，内存使用率超过$THRESHOLD$UNIT。 当前值：{{ $value }}"
    },
    {
        NameEn: "PGDisk",
        Expression: 'kubelet_volume_stats_used_bytes{persistentvolumeclaim=~".*$CLUSTERID-readwriteinstance.*|.*$CLUSTERID-readonlyinstance.*"} / kubelet_volume_stats_capacity_bytes{persistentvolumeclaim=~".*$CLUSTERID-readwriteinstance.*|.*$CLUSTERID-readonlyinstance.*"} * 100',
        Operator: ">",
        Unit: "%",
        ProposedDuration: "1m",
        Summary: "RadonDB PostgreSQL 【$CLUSTERID】 磁盘使用率超过$THRESHOLD$UNIT。",
        Message: "RadonDB PostgreSQL: $CLUSTERID，磁盘使用率超过$THRESHOLD$UNIT。 当前值：{{ $value }}"
    },
    {
        NameEn: "PGConnPerc",
        Expression: '(sum(pg_stat_database_numbackends{namespace="$NAMESPACE",service=~"$CLUSTERID-readwrite|$CLUSTERID-standby-readonly"}) by (pod) / sum(pg_settings_max_connections{namespace="$NAMESPACE",service=~"$CLUSTERID-readwrite|$CLUSTERID-standby-readonly"}) by (pod)) * 100',
        Operator: ">",
        Unit: "%",
        ProposedDuration: "1m",
        Summary: "RadonDB PostgreSQL 【$CLUSTERID】 连接数消耗已超过最大可用连接数的$THRESHOLD$UNIT",
        Message: "RadonDB PostgreSQL: $CLUSTERID，连接数消耗已超过最大可用连接数的$THRESHOLD$UNIT。 当前值：{{ $value }}"
    },
    {
        NameEn: "PGCacheHitRatio",
        Expression: 'round(100*sum(pg_stat_database_blks_hit{namespace="$NAMESPACE",service=~"$CLUSTERID-readwrite|$CLUSTERID-standby-readonly"}) by(pod) / (sum(pg_stat_database_blks_hit{namespace="$NAMESPACE",service=~"$CLUSTERID-readwrite|$CLUSTERID-standby-readonly"}) by(pod) + sum(pg_stat_database_blks_read{namespace="$NAMESPACE",service=~"$CLUSTERID-readwrite|$CLUSTERID-standby-readonly"}) by(pod)),0.1)',
        Operator: ">",
        Unit: "%",
        ProposedDuration: "1m",
        Summary: "RadonDB PostgreSQL 【$CLUSTERID】 缓存命中率小于$THRESHOLD$UNIT。",
        Message: "RadonDB PostgreSQL: $CLUSTERID，缓存命中率小于$THRESHOLD$UNIT。 当前值：{{ $value }}"
    },
    {
        NameEn: "MaxTxDuration",
        Expression: 'max(pg_stat_activity_max_tx_duration{namespace="$NAMESPACE",service=~"$CLUSTERID-readwrite|$CLUSTERID-standby-readonly"})',
        Operator: ">",
        Unit: "%",
        ProposedDuration: "1m",
        Summary: "RadonDB PostgreSQL 【$CLUSTERID】 最大事务持续时间超过$THRESHOLD$UNIT。",
        Message: "RadonDB PostgreSQL: $CLUSTERID，最大事务持续时间超过$THRESHOLD$UNIT。 当前值：{{ $value }}"
    }
];
const c = {
    Metric: {
        PGUnhealth: {
            label: "PGUnhealth",
            autoComplete: true,
            ruleConfig: disabledRuleConfig
        },
        PGAsync: {
            label: "PGAsync",
            ruleConfig: disabledRuleConfig
        },
        PGNotRunning: {
            label: "PGNotRunning",
            ruleConfig: disabledRuleConfig
        },
        PGInvalid: {
            label: "PGInvalid",
            ruleConfig: disabledRuleConfig
        },
        PGCPUUtilization: {
            label: "PGCPUUtilization",
            ruleConfig: PERCENT_RULE_CONFIG
        },
        PGMemUtilization: {
            label: "PGMemUtilization",
            ruleConfig: PERCENT_RULE_CONFIG
        },
        PGDisk: {
            label: "PGDisk",
            autoComplete: true,
            ruleConfig: PERCENT_RULE_CONFIG
        },
        PGConnPerc: {
            label: "PGConnPerc",
            ruleConfig: PERCENT_RULE_CONFIG
        },
        PGCacheHitRatio: {
            label: "PGCacheHitRatio",
            ruleConfig: PERCENT_RULE_CONFIG
        },
        MaxTxDuration: {
            label: "MaxTxDuration",
            autoComplete: true,
            ruleConfig: TIME_RULE_CONFIG
        }
    },
    Query: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Expression))),
    Message: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Message))),
    Summary: arrayToObject(u.map((e)=>module31({}, e.NameEn, e.Summary)))
};
export default c;
