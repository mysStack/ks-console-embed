import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import module26 from "unpacked/module-26.js";
const c = {
    main: {
        getConfig: function({ detail }) {
            const { namespace, name } = detail;
            return [
                {
                    targets: [
                        {
                            expr: `sum(elasticsearch_cluster_health_task_max_waiting_in_queue_millis{service="${name}-es-elasticsearch-exporter",namespace="${namespace}"})`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `sum(elasticsearch_cluster_health_number_of_in_flight_fetch{service="${name}-es-elasticsearch-exporter",namespace="${namespace}"})`
                        },
                        {
                            expr: `sum(elasticsearch_cluster_health_number_of_pending_tasks{service="${name}-es-elasticsearch-exporter",namespace="${namespace}"})`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `sum(elasticsearch_cluster_health_number_of_data_nodes{service="${name}-es-elasticsearch-exporter",namespace="${namespace}"})`
                        },
                        {
                            expr: `sum(elasticsearch_cluster_health_number_of_nodes{service="${name}-es-elasticsearch-exporter",namespace="${namespace}"})`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `sum(elasticsearch_cluster_health_delayed_unassigned_shards{service="${name}-es-elasticsearch-exporter",namespace="${namespace}"})`
                        },
                        {
                            expr: `sum(elasticsearch_cluster_health_initializing_shards{service="${name}-es-elasticsearch-exporter",namespace="${namespace}"})`
                        },
                        {
                            expr: `sum(elasticsearch_cluster_health_relocating_shards{service="${name}-es-elasticsearch-exporter",namespace="${namespace}"})`
                        },
                        {
                            expr: `sum(elasticsearch_cluster_health_unassigned_shards{service="${name}-es-elasticsearch-exporter",namespace="${namespace}"})`
                        },
                        {
                            expr: `sum(elasticsearch_cluster_health_active_primary_shards{service="${name}-es-elasticsearch-exporter",namespace="${namespace}"})`
                        },
                        {
                            expr: `sum(elasticsearch_cluster_health_active_shards{service="${name}-es-elasticsearch-exporter",namespace="${namespace}"})`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `sum(elasticsearch_cluster_health_status{service="${name}-es-elasticsearch-exporter",namespace="${namespace}",color="green"})`
                        },
                        {
                            expr: `sum(elasticsearch_cluster_health_status{service="${name}-es-elasticsearch-exporter",namespace="${namespace}",color="yellow"})`
                        },
                        {
                            expr: `sum(elasticsearch_cluster_health_status{service="${name}-es-elasticsearch-exporter",namespace="${namespace}",color="red"})`
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
                    unit: "ms",
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
                    title: t("SHARD_STATUS"),
                    dot: 2,
                    legend: [
                        t("CLUSTER_DELAYED_UNASSIGNED_SHARDS"),
                        t("CLUSTER_INITIALIZING_SHARDS"),
                        t("CLUSTER_RELOCATING_SHARDS"),
                        t("CLUSTER_UNASSIGNED_SHARDS"),
                        t("CLUSTER_ACTIVE_PRIMARY_SHARDS"),
                        t("CLUSTER_ACTIVE_SHARDS")
                    ],
                    data: [
                        module26(e, "6.data.result[0]"),
                        module26(e, "7.data.result[0]"),
                        module26(e, "8.data.result[0]"),
                        module26(e, "9.data.result[0]"),
                        module26(e, "10.data.result[0]"),
                        module26(e, "11.data.result[0]")
                    ]
                },
                {
                    title: t("CLUSTER_HEALTH_STATUS"),
                    legend: [
                        t("CLUSTER_HEALTH_STATUS_GREEN"),
                        t("CLUSTER_HEALTH_STATUS_YELLOW"),
                        t("CLUSTER_HEALTH_STATUS_RED")
                    ],
                    data: [
                        module26(e, "12.data.result[0]", {}),
                        module26(e, "13.data.result[0]", {}),
                        module26(e, "14.data.result[0]", {})
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
                            expr: `round(elasticsearch_jvm_memory_used_bytes{namespace="${namespace}",name="${t_name}",area="heap"}/elasticsearch_jvm_memory_max_bytes{namespace="${namespace}",name="${t_name}",area="heap"},0.001)`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `round(elasticsearch_filesystem_data_available_bytes{namespace="${namespace}",name="${t_name}"},0.1)`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `round(elasticsearch_filesystem_data_free_bytes{namespace="${namespace}",name="${t_name}"}/elasticsearch_filesystem_data_size_bytes{namespace="${namespace}",name="${t_name}"},0.001)`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `(elasticsearch_os_cpu_percent{namespace="${namespace}",name="${t_name}"}/100)`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `elasticsearch_os_load1{namespace="${namespace}",name="${t_name}"}`
                        },
                        {
                            expr: `elasticsearch_os_load5{namespace="${namespace}",name="${t_name}"}`
                        },
                        {
                            expr: `elasticsearch_os_load15{namespace="${namespace}",name="${t_name}"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `elasticsearch_indices_docs{namespace="${namespace}",name="${t_name}"}`
                        },
                        {
                            expr: `elasticsearch_indices_docs_deleted{namespace="${namespace}",name="${t_name}"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `rate(elasticsearch_indices_indexing_index_total{namespace="${namespace}",name="${t_name}"}[5m])`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `rate(elasticsearch_indices_search_query_total{namespace="${namespace}",name="${t_name}"}[5m])`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `round(rate(elasticsearch_indices_indexing_index_time_seconds_total{namespace="${namespace}",name="${t_name}"}[5m])*1000)`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `round(rate(elasticsearch_indices_search_query_time_seconds{namespace="${namespace}",name="${t_name}"}[5m])*1000)`
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
                    dot: "2",
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
                    unit: "ms",
                    data: [
                        module26(e, "12.data.result[0]", {})
                    ]
                },
                {
                    title: t("ELASTICSEARCH_INDICES_SEARCH_TIME_MS"),
                    legend: [
                        t("ELASTICSEARCH_INDICES_SEARCH_TIME_MS")
                    ],
                    unit: "ms",
                    data: [
                        module26(e, "13.data.result[0]", {})
                    ]
                }
            ];
        }
    }
};
export default c;
