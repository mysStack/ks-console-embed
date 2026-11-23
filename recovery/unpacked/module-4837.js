import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import module61 from "./module-61.js";
import module26 from "./module-26.js";
function getConfig(e, t) {
    const namespace = e.detail.namespace;
    const t_name = t.name;
    return [
        {
            targets: [
                {
                    expr: `sum(pg_stat_activity_count{namespace="${namespace}",pod="${t_name}",state="active"})`
                },
                {
                    expr: `sum(pg_stat_activity_count{namespace="${namespace}",pod="${t_name}",state="idle in transaction"})`
                },
                {
                    expr: `sum(pg_stat_activity_count{namespace="${namespace}",pod="${t_name}",state="idle"})`
                }
            ]
        },
        {
            targets: [
                {
                    expr: `(sum(pg_stat_database_numbackends{namespace="${namespace}",pod="${t_name}"}) / sum(pg_settings_max_connections{namespace="${namespace}",pod="${t_name}"}))`
                }
            ]
        },
        {
            targets: [
                {
                    expr: `round(sum(pg_stat_database_blks_hit{namespace="${namespace}",pod="${t_name}"}) / (sum(pg_stat_database_blks_hit{namespace="${namespace}",pod="${t_name}"}) + sum(pg_stat_database_blks_read{namespace="${namespace}",pod="${t_name}"})),0.001)`
                }
            ]
        },
        {
            targets: [
                {
                    expr: `pg_stat_database_blks_hit{namespace="${namespace}",pod="${t_name}",datname!="template0", datname!="template1",datname!=""} / (pg_stat_database_blks_read{namespace="${namespace}",pod="${t_name}",datname!="template0", datname!="template1",datname!=""} + pg_stat_database_blks_hit{namespace="${namespace}",pod="${t_name}",datname!="template0", datname!="template1",datname!=""})`
                }
            ]
        },
        {
            targets: [
                {
                    expr: `irate(pg_stat_database_tup_fetched{namespace="${namespace}",pod="${t_name}",datname!="template0", datname!="template1",datname!=""}[1m])`
                },
                {
                    expr: `irate(pg_stat_database_tup_inserted{namespace="${namespace}",pod="${t_name}",datname!="template0", datname!="template1",datname!=""}[1m])`
                },
                {
                    expr: `irate(pg_stat_database_tup_updated{namespace="${namespace}",pod="${t_name}",datname!="template0", datname!="template1",datname!=""}[1m])`
                },
                {
                    expr: `irate(pg_stat_database_tup_deleted{namespace="${namespace}",pod="${t_name}",datname!="template0", datname!="template1",datname!=""}[1m])`
                },
                {
                    expr: `irate(pg_stat_database_tup_returned{namespace="${namespace}",pod="${t_name}",datname!="template0", datname!="template1",datname!=""}[1m])`
                }
            ]
        },
        {
            targets: [
                {
                    expr: `irate(pg_stat_database_conflicts{namespace="${namespace}",pod="${t_name}",datname!="template0", datname!="template1",datname!=""}[1m])`
                },
                {
                    expr: `irate(pg_stat_database_deadlocks{namespace="${namespace}",pod="${t_name}",datname!="template0", datname!="template1",datname!=""}[1m])`
                },
                {
                    expr: `irate(pg_stat_database_xact_commit{namespace="${namespace}",pod="${t_name}",datname!="template0", datname!="template1",datname!=""}[1m])`
                },
                {
                    expr: `irate(pg_stat_database_xact_rollback{namespace="${namespace}",pod="${t_name}",datname!="template0", datname!="template1",datname!=""}[1m])`
                }
            ]
        },
        {
            targets: [
                {
                    expr: `max(pg_stat_activity_max_tx_duration{namespace="${namespace}",pod="${t_name}",datname!="template0", datname!="template1",datname!=""}) by (datname)`
                }
            ]
        },
        {
            targets: [
                {
                    expr: `pg_locks_count{namespace="${namespace}",pod="${t_name}",datname!="template0", datname!="template1",datname!=""} > 0`
                }
            ]
        },
        {
            targets: [
                {
                    expr: `pg_database_size_bytes{namespace="${namespace}",pod="${t_name}",datname!="template0", datname!="template1",datname!=""}`
                }
            ]
        }
    ];
}
function getMonitoringCfgs(e) {
    return [
        {
            title: t("CONNECTIONS"),
            legend: [
                t("ACTIVE_CONNECTIONS"),
                t("IDLE_IN_TRANSACTION"),
                t("IDLE_CONNECTIONS")
            ],
            data: [
                module26(e, "[1].data.result[0]", {}),
                module26(e, "[2].data.result[0]", {}),
                module26(e, "[3].data.result[0]", {})
            ]
        },
        {
            title: t("ACTIVE_SESSIONS"),
            legend: [
                t("ACTIVE_SESSIONS")
            ],
            unit: "%",
            dot: 2,
            data: [
                module26(e, "[4].data.result[0]", {})
            ]
        },
        {
            title: t("CACHE_HIT_RATIO"),
            legend: [
                t("CACHE_HIT_RATIO")
            ],
            unit: "%",
            dot: 2,
            data: [
                module26(e, "[5].data.result[0]", {})
            ]
        },
        {
            title: t("CACHE_HIT_RATIO_EACH_DATABASE"),
            legend: module26(e, "[6].data.result", []).map((e)=>e.metric.datname),
            unit: "%",
            dot: 2,
            data: module26(e, "[6].data.result", [])
        },
        {
            title: t("FETCHED_PER_SECOND"),
            legend: module26(e, "[7].data.result", []).map((e)=>e.metric.datname),
            dot: 2,
            data: module26(e, "[7].data.result", [])
        },
        {
            title: t("INSERTED_PER_SECOND"),
            legend: module26(e, "[8].data.result", []).map((e)=>e.metric.datname),
            dot: 2,
            data: module26(e, "[8].data.result", [])
        },
        {
            title: t("UPDATED_PER_SECOND"),
            legend: module26(e, "[9].data.result", []).map((e)=>e.metric.datname),
            dot: 2,
            data: module26(e, "[9].data.result", [])
        },
        {
            title: t("DELETED_PER_SECOND"),
            legend: module26(e, "[10].data.result", []).map((e)=>e.metric.datname),
            dot: 2,
            data: module26(e, "[10].data.result", [])
        },
        {
            title: t("RETURNED_PER_SECOND"),
            legend: module26(e, "[11].data.result", []).map((e)=>e.metric.datname),
            dot: 2,
            data: module26(e, "[11].data.result", [])
        },
        {
            title: t("CONFLICTS_PER_SECOND"),
            legend: module26(e, "[12].data.result", []).map((e)=>e.metric.datname),
            dot: 2,
            data: module26(e, "[12].data.result", [])
        },
        {
            title: t("DEADLOCKS_PER_SECOND"),
            legend: module26(e, "[13].data.result", []).map((e)=>e.metric.datname),
            dot: 2,
            data: module26(e, "[13].data.result", [])
        },
        {
            title: t("COMMITS_PER_SECOND"),
            legend: module26(e, "[14].data.result", []).map((e)=>e.metric.datname),
            dot: 2,
            data: module26(e, "[14].data.result", [])
        },
        {
            title: t("ROLLBACKS_PER_SECOND"),
            legend: module26(e, "[15].data.result", []).map((e)=>e.metric.datname),
            dot: 2,
            data: module26(e, "[15].data.result", [])
        },
        {
            title: t("MAX_TX_DURATION"),
            legend: module26(e, "[15].data.result", []).map((e)=>e.metric.datname),
            data: module26(e, "[16].data.result", [])
        },
        {
            title: t("LOCKS"),
            legend: module26(e, "[17].data.result", []).map((e)=>`${e.metric.datname}-${e.metric.mode}`),
            data: module26(e, "[17].data.result", [])
        },
        {
            title: t("DATABASE_SIZE"),
            unitType: "disk",
            legend: module26(e, "[18].data.result", []).map((e)=>e.metric.datname),
            data: module26(e, "[18].data.result", [])
        }
    ];
}
const i = {
    postgresql: {
        getConfig,
        getMonitoringCfgs
    },
    autofailover: {
        getConfig: function(e, t) {
            const namespace = e.detail.namespace;
            const t_name = t.name;
            return [].concat(module61(getConfig(e, t)), [
                {
                    targets: [
                        {
                            expr: `pg_auto_failover_async_count{namespace="${namespace}",pod="${t_name}"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `pg_auto_failover_invalid_count{namespace="${namespace}",pod="${t_name}"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `pg_auto_failover_not_running_count{namespace="${namespace}",pod="${t_name}"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `pg_auto_failover_unhealth_count{namespace="${namespace}",pod="${t_name}"}`
                        }
                    ]
                }
            ]);
        },
        getMonitoringCfgs: function(e) {
            return [
                {
                    title: t("ASYNC_NODE_NUMBER"),
                    legend: [
                        t("ASYNC_NODE_NUMBER")
                    ],
                    data: [
                        module26(e, "[19].data.result[0]", {})
                    ]
                },
                {
                    title: t("INVALID_STATUS_NODE_NUMBER"),
                    legend: [
                        t("INVALID_STATUS_NODE_NUMBER")
                    ],
                    data: [
                        module26(e, "[20].data.result[0]", {})
                    ]
                },
                {
                    title: t("NOT_RUNNING_NODE_NUMBER"),
                    legend: [
                        t("NOT_RUNNING_NODE_NUMBER")
                    ],
                    data: [
                        module26(e, "[21].data.result[0]", {})
                    ]
                },
                {
                    title: t("UNHEALTH_NODE_NUMBER"),
                    legend: [
                        t("UNHEALTH_NODE_NUMBER")
                    ],
                    data: [
                        module26(e, "[22].data.result[0]", {})
                    ]
                }
            ].concat(getMonitoringCfgs(e));
        }
    }
};
export default i;
