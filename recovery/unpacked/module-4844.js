import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
import module26 from "./module-26.js";
const c = {
    main: {
        getConfig: function({ detail }) {
            const { namespace, name } = detail;
            return [
                {
                    targets: [
                        {
                            expr: `opensearch_cluster_task_max_waiting_time_seconds{namespace="${namespace}",pod="${name}-masters-0"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `opensearch_cluster_inflight_fetch_number{namespace="${namespace}",pod="${name}-masters-0"}`
                        },
                        {
                            expr: `opensearch_cluster_pending_tasks_number{namespace="${namespace}",pod="${name}-masters-0"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `opensearch_cluster_datanodes_number{namespace="${namespace}",pod="${name}-masters-0"}`
                        },
                        {
                            expr: `opensearch_cluster_nodes_number{namespace="${namespace}",pod="${name}-masters-0"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `round(opensearch_cluster_shards_active_percent{namespace="${namespace}",pod="${name}-masters-0"} / 100, 0.01)`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `opensearch_cluster_shards_number{namespace="${namespace}",pod="${name}-masters-0",type="initializing"}`
                        },
                        {
                            expr: `opensearch_cluster_shards_number{namespace="${namespace}",pod="${name}-masters-0",type="relocating"}`
                        },
                        {
                            expr: `opensearch_cluster_shards_number{namespace="${namespace}",pod="${name}-masters-0",type="unassigned"}`
                        },
                        {
                            expr: `opensearch_cluster_shards_number{namespace="${namespace}",pod="${name}-masters-0",type="active_primary"}`
                        },
                        {
                            expr: `opensearch_cluster_shards_number{namespace="${namespace}",pod="${name}-masters-0",type="active"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `opensearch_cluster_status{namespace="${namespace}",pod="${name}-masters-0"}`
                        }
                    ]
                }
            ];
        },
        getMonitoringCfgs: function(e) {
            return [
                {
                    title: t("CLUSTER_TASK_WAITING_TIME"),
                    legend: [
                        t("CLUSTER_TASK_WAITING_TIME")
                    ],
                    unit: "s",
                    data: [
                        module26(e, "1.data.result[0]", {})
                    ]
                },
                {
                    title: t("CLUSTER_TASK_STATUS"),
                    legend: [
                        t("CLUSTER_NUMBER_OF_IN_FLIGHT_FETCH"),
                        t("CLUSTER_NUMBER_OF_PENDING_TASKS")
                    ],
                    data: [
                        module26(e, "2.data.result[0]", {}),
                        module26(e, "3.data.result[0]", {})
                    ]
                },
                {
                    title: t("CLUSTER_NUMBER_OF_NODES"),
                    legend: [
                        t("CLUSTER_NUMBER_OF_DATA_NODES"),
                        t("CLUSTER_NUMBER_OF_ALL_NODES")
                    ],
                    data: [
                        module26(e, "4.data.result[0]", {}),
                        module26(e, "5.data.result[0]", {})
                    ]
                },
                {
                    title: t("CLUSTER_SHARDS_ACTIVE_PERCENT"),
                    legend: [
                        t("CLUSTER_SHARDS_ACTIVE_PERCENT")
                    ],
                    unit: "%",
                    dot: 2,
                    data: [
                        module26(e, "6.data.result[0]", {})
                    ]
                },
                {
                    title: t("SHARD_STATUS"),
                    legend: [
                        t("CLUSTER_INITIALIZING_SHARDS"),
                        t("CLUSTER_RELOCATING_SHARDS"),
                        t("CLUSTER_UNASSIGNED_SHARDS"),
                        t("CLUSTER_ACTIVE_PRIMARY_SHARDS"),
                        t("CLUSTER_ACTIVE_SHARDS")
                    ],
                    data: [
                        module26(e, "7.data.result[0]", {}),
                        module26(e, "8.data.result[0]", {}),
                        module26(e, "9.data.result[0]", {}),
                        module26(e, "10.data.result[0]", {}),
                        module26(e, "11.data.result[0]", {})
                    ]
                },
                {
                    title: t("CLUSTER_HEALTH_STATUS"),
                    legend: [
                        t("CLUSTER_HEALTH_STATUS")
                    ],
                    data: [
                        module26(e, "12.data.result[0]", {})
                    ]
                }
            ];
        }
    },
    pod: {
        getConfig: function(e, t) {
            const namespace = e.detail.namespace;
            const t_name = t.name;
            return [
                {
                    targets: [
                        {
                            expr: `round(opensearch_jvm_mem_heap_used_percent{namespace="${namespace}",pod="${t_name}"} / 100, 0.01)`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `round(opensearch_fs_total_available_bytes{namespace="${namespace}",pod="${t_name}"})`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `opensearch_fs_total_available_bytes{namespace="${namespace}",pod="${t_name}"}/opensearch_fs_total_total_bytes{namespace="${namespace}",pod="${t_name}"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `round(opensearch_os_cpu_percent{namespace="${namespace}",pod="${t_name}"} /100, 0.01)`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `opensearch_os_load_average_one_minute{namespace="${namespace}",pod="${t_name}"}`
                        },
                        {
                            expr: `opensearch_os_load_average_five_minutes{namespace="${namespace}",pod="${t_name}"}`
                        },
                        {
                            expr: `opensearch_os_load_average_fifteen_minutes{namespace="${namespace}",pod="${t_name}"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `opensearch_indices_doc_number{namespace="${namespace}",pod="${t_name}"}`
                        },
                        {
                            expr: `opensearch_indices_doc_deleted_number{namespace="${namespace}",pod="${t_name}"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `opensearch_indices_indexing_index_current_number{namespace="${namespace}", pod="${t_name}"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `opensearch_indices_search_query_current_number{namespace="${namespace}", pod="${t_name}"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `delta(opensearch_indices_indexing_index_time_seconds{namespace="${namespace}", pod="${t_name}"}[5m])`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `delta(opensearch_indices_search_query_time_seconds{namespace="${namespace}", pod="${t_name}"}[5m])`
                        }
                    ]
                }
            ];
        },
        getMonitoringCfgs: function(e) {
            return [
                {
                    title: t("HEAP_MEMORY"),
                    legend: [
                        t("JVM_MEMORY_HEAP_USAGE_PER")
                    ],
                    unit: "%",
                    dot: 2,
                    data: [
                        module26(e, "1.data.result[0]", {})
                    ]
                },
                {
                    title: t("DATA_AVAILABLE_BYTES"),
                    legend: [
                        t("DATA_AVAILABLE_BYTES")
                    ],
                    unitType: "memory",
                    data: [
                        module26(e, "2.data.result[0]", {})
                    ]
                },
                {
                    title: t("DATA_AVAILABLE_PERCENT"),
                    legend: [
                        t("DATA_AVAILABLE_PERCENT")
                    ],
                    unit: "%",
                    dot: 2,
                    data: [
                        module26(e, "3.data.result[0]", {})
                    ]
                },
                {
                    title: "CPU",
                    legend: [
                        t("ECK_CPU_USAGE")
                    ],
                    unit: "%",
                    dot: 2,
                    data: [
                        module26(e, "4.data.result[0]", {})
                    ]
                },
                {
                    title: t("OS_LOAD"),
                    legend: [
                        t("OS_LOAD1"),
                        t("OS_LOAD5"),
                        t("OS_LOAD15")
                    ],
                    data: [
                        module26(e, "5.data.result[0]", {}),
                        module26(e, "6.data.result[0]", {}),
                        module26(e, "7.data.result[0]", {})
                    ]
                },
                {
                    title: t("DOC_STATISTICS"),
                    legend: [
                        t("ELASTICSEARCH_INDICES_DOCS"),
                        t("ELASTICSEARCH_INDICES_DOCS_DELETED")
                    ],
                    data: [
                        module26(e, "8.data.result[0]", {}),
                        module26(e, "9.data.result[0]", {})
                    ]
                },
                {
                    title: t("ELASTICSEARCH_INDICES_INDEXING_INDEX_QPS"),
                    legend: [
                        t("ELASTICSEARCH_INDICES_INDEXING_INDEX_QPS")
                    ],
                    data: [
                        module26(e, "10.data.result[0]", {})
                    ]
                },
                {
                    title: t("ELASTICSEARCH_INDICES_SEARCH_QUERY_QPS"),
                    legend: [
                        t("ELASTICSEARCH_INDICES_SEARCH_QUERY_QPS")
                    ],
                    data: [
                        module26(e, "11.data.result[0]", {})
                    ]
                },
                {
                    title: t("ELASTICSEARCH_INDICES_INDEXING_TIME_MS"),
                    legend: [
                        t("ELASTICSEARCH_INDICES_INDEXING_TIME_MS")
                    ],
                    unit: "s",
                    data: [
                        module26(e, "12.data.result[0]", {})
                    ]
                },
                {
                    title: t("ELASTICSEARCH_INDICES_SEARCH_TIME_MS"),
                    legend: [
                        t("ELASTICSEARCH_INDICES_SEARCH_TIME_MS")
                    ],
                    unit: "s",
                    data: [
                        module26(e, "13.data.result[0]", {})
                    ]
                }
            ];
        }
    },
    logstash: {
        getConfig: function(e, t) {
            const namespace = e.detail.namespace;
            const t_name = t.name;
            return [
                {
                    targets: [
                        {
                            expr: `logstash_stats_jvm_mem_heap_used_bytes{namespace="${namespace}",pod="${t_name}"}/logstash_stats_jvm_mem_heap_max_bytes{namespace="${namespace}",pod="${t_name}"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `logstash_stats_process_cpu_percent{namespace="${namespace}",pod="${t_name}"}*0.01`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `logstash_stats_process_cpu_load_average_1m{namespace="${namespace}",pod="${t_name}"}`
                        },
                        {
                            expr: `logstash_stats_process_cpu_load_average_5m{namespace="${namespace}",pod="${t_name}"}`
                        },
                        {
                            expr: `logstash_stats_process_cpu_load_average_15m{namespace="${namespace}",pod="${t_name}"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `rate(logstash_stats_events_in{namespace="${namespace}",pod="${t_name}"}[2m])`
                        },
                        {
                            expr: `rate(logstash_stats_events_filtered{namespace="${namespace}",pod="${t_name}"}[2m])`
                        },
                        {
                            expr: `rate(logstash_stats_events_out{namespace="${namespace}",pod="${t_name}"}[2m])`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `logstash_stats_queue_events_count{namespace="${namespace}",pod="${t_name}"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `logstash_stats_jvm_threads_count{namespace="${namespace}",pod="${t_name}"}`
                        }
                    ]
                }
            ];
        },
        getMonitoringCfgs: function(e) {
            return [
                {
                    title: t("OPENSEARCH_HEAP_MEMORY"),
                    legend: [
                        t("OPENSEARCH_HEAP_MEMORY_PER")
                    ],
                    unit: "%",
                    dot: 2,
                    data: [
                        module26(e, "1.data.result[0]", {})
                    ]
                },
                {
                    title: t("OPENSEARCH_CPU_USAGE"),
                    legend: [
                        t("OPENSEARCH_CPU_USAGE_PER")
                    ],
                    unit: "%",
                    dot: 2,
                    data: [
                        module26(e, "2.data.result[0]", {})
                    ]
                },
                {
                    title: t("CPU_LOAD"),
                    legend: [
                        t("CPU_LOAD1"),
                        t("CPU_LOAD5"),
                        t("CPU_LOAD15")
                    ],
                    data: [
                        module26(e, "3.data.result[0]", {}),
                        module26(e, "4.data.result[0]", {}),
                        module26(e, "5.data.result[0]", {})
                    ]
                },
                {
                    title: t("EVENTS_STATISTICS"),
                    legend: [
                        t("IN_EVENTS_STATISTICS"),
                        t("FILTERED_EVENTS_STATISTICS"),
                        t("OUT_EVENTS_STATISTICS")
                    ],
                    data: [
                        module26(e, "6.data.result[0]", {}),
                        module26(e, "7.data.result[0]", {}),
                        module26(e, "8.data.result[0]", {})
                    ]
                },
                {
                    title: t("QUEUE_EVENTS_COUNT"),
                    legend: [
                        t("QUEUE_EVENTS_COUNT")
                    ],
                    data: [
                        module26(e, "9.data.result[0]", {})
                    ]
                },
                {
                    title: t("JVM_THREADS_COUNT"),
                    legend: [
                        t("JVM_THREADS_COUNT")
                    ],
                    data: [
                        module26(e, "10.data.result[0]", {})
                    ]
                }
            ];
        }
    }
};
export default c;
