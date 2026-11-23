import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import module26 from "unpacked/module-26.js";
const c = {
    getConfig: function(e, t) {
        const namespace = e.detail.namespace;
        const t_name = t.name;
        return [
            {
                targets: [
                    {
                        expr: `redis_memory_used_bytes{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `redis_memory_max_bytes{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `redis_memory_used_bytes{namespace="${namespace}",pod="${t_name}"} / redis_memory_max_bytes{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `rate(redis_commands_processed_total{namespace="${namespace}",pod="${t_name}"}[1m])`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `topk(5, irate(redis_commands_total{namespace="${namespace}",pod="${t_name}"} [1m]))`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `rate(redis_net_input_bytes_total{namespace="${namespace}",pod="${t_name}"}[5m])`
                    },
                    {
                        expr: `rate(redis_net_output_bytes_total{namespace="${namespace}",pod="${t_name}"}[5m])`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `sum (redis_db_keys{namespace="${namespace}",pod="${t_name}"}) by (db)`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `sum (redis_db_keys{namespace="${namespace}",pod="${t_name}"}) - sum (redis_db_keys_expiring{namespace="${namespace}",pod="${t_name}"})`
                    },
                    {
                        expr: `sum (redis_db_keys_expiring{namespace="${namespace}",pod="${t_name}"})`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `redis_connected_clients{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `irate(redis_keyspace_hits_total{namespace="${namespace}",pod="${t_name}"}[5m]) * 100`
                    },
                    {
                        expr: `irate(redis_keyspace_misses_total{namespace="${namespace}",pod="${t_name}"}[5m]) * 100`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `redis_mem_fragmentation_ratio{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `rate(redis_rejected_connections_total{namespace="${namespace}",pod="${t_name}"}[5m])`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `redis_evicted_keys_total{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            }
        ];
    },
    getMonitoringCfgs: function(e) {
        return [
            {
                title: t("REDIS_MEMORY_USAGE"),
                legend: [
                    t("REDIS_USED_MEMORY"),
                    t("REDIS_MAX_MEMORY")
                ],
                unitType: "memory",
                data: [
                    module26(e, "1.data.result[0]", {}),
                    module26(e, "2.data.result[0]", {})
                ]
            },
            {
                title: t("REDIS_MEMORY_USAGE"),
                unit: "%",
                dot: 2,
                legend: [
                    t("REDIS_MEMORY_USAGE")
                ],
                data: [
                    module26(e, "3.data.result[0]", {})
                ]
            },
            {
                title: t("COMMANDS_EXECUTED_PER_MINUTE"),
                legend: [
                    t("COMMANDS_EXECUTED_PER_MINUTE")
                ],
                data: [
                    module26(e, "4.data.result[0]", {})
                ]
            },
            {
                title: t("TOP_5_REDIS_COMMANDS_PER_MINUTE"),
                dot: 2,
                legend: module26(e, "5.data.result", []).map((e)=>module26(e, "metric.cmd")),
                data: module26(e, "5.data.result")
            },
            {
                title: t("NETWORK_IO"),
                unitType: "memory",
                legend: [
                    t("NETWORK_INPUT_BYTES"),
                    t("NETWORK_OUTPUT_BYTES")
                ],
                data: [
                    module26(e, "6.data.result[0]", {}),
                    module26(e, "7.data.result[0]", {})
                ]
            },
            {
                title: t("TOTAL_DB_KEYS"),
                legend: [
                    t("TOTAL_DB_KEYS")
                ],
                data: [
                    module26(e, "8.data.result[0]", {})
                ]
            },
            {
                title: t("DB_KEYS"),
                legend: [
                    t("VALID_KEYS"),
                    t("EXPIRED_KEYS")
                ],
                data: [
                    module26(e, "9.data.result[0]", {}),
                    module26(e, "10.data.result[0]", {})
                ]
            },
            {
                title: t("CLIENT_COUNT"),
                legend: [
                    t("CLIENT_COUNT")
                ],
                data: [
                    module26(e, "11.data.result[0]", {})
                ]
            },
            {
                title: t("KEYSPACE"),
                legend: [
                    t("KEYSPACE_HITS_TOTAL"),
                    t("KEYSPACE_MISSES_TOTAL")
                ],
                data: [
                    module26(e, "12.data.result[0]", {}),
                    module26(e, "13.data.result[0]", {})
                ]
            },
            {
                title: t("MEMORY_FRAGMENTATION_RATIO"),
                legend: [
                    t("MEMORY_FRAGMENTATION_RATIO")
                ],
                unit: "%",
                data: [
                    module26(e, "14.data.result[0]", {})
                ]
            },
            {
                title: t("REJECTED_CONNECTION_RATIO"),
                legend: [
                    t("REJECTED_CONNECTION_RATIO")
                ],
                unit: "%",
                data: [
                    module26(e, "15.data.result[0]", {})
                ]
            },
            {
                title: t("REVICTED_KEY_RATIO"),
                legend: [
                    t("REVICTED_KEY_RATIO")
                ],
                data: [
                    module26(e, "16.data.result[0]", {})
                ]
            }
        ];
    }
};
export default c;
