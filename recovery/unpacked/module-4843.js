import "./module-15.js";
import "./module-5.js";
import "./module-48.js";
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
                            expr: `max(zookeeper_quorumsize{namespace="${namespace}",strimzi_io_cluster="${name}",job=~"${namespace}/${name}.*",strimzi_io_kind="Kafka"})`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `avg(zookeeper_inmemorydatatree_nodecount{namespace="${namespace}",strimzi_io_cluster="${name}",job=~"${namespace}/${name}.*",strimzi_io_kind="Kafka"})`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `sum(zookeeper_numaliveconnections{namespace="${namespace}",strimzi_io_cluster="${name}",job=~"${namespace}/${name}.*",strimzi_io_kind="Kafka"})`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `sum(zookeeper_inmemorydatatree_watchcount{namespace="${namespace}",strimzi_io_cluster="${name}",job=~"${namespace}/${name}.*",strimzi_io_kind="Kafka"})`
                        }
                    ]
                }
            ];
        },
        getMonitoringCfgs: function(e) {
            return [
                {
                    title: t("QUORUM_SIZE"),
                    legend: [
                        t("QUORUM_SIZE")
                    ],
                    data: [
                        module26(e, "1.data.result[0]", {})
                    ]
                },
                {
                    title: t("ZNODE_COUNT"),
                    legend: [
                        t("ZNODE_COUNT")
                    ],
                    data: [
                        module26(e, "2.data.result[0]", {})
                    ]
                },
                {
                    title: t("ACTIVE_CONNECTIONS"),
                    legend: [
                        t("ACTIVE_CONNECTIONS")
                    ],
                    data: [
                        module26(e, "3.data.result[0]", {})
                    ]
                },
                {
                    title: t("WATCHER_COUNT"),
                    legend: [
                        t("WATCHER_COUNT")
                    ],
                    data: [
                        module26(e, "4.data.result[0]")
                    ]
                }
            ];
        }
    },
    pod: {
        getConfig: function({ detail }, t) {
            const { namespace, name } = detail;
            const t_name = t.name;
            return [
                {
                    targets: [
                        {
                            expr: `sum(container_memory_usage_bytes{namespace="${namespace}",pod=~"${t_name}",container="zookeeper"}) by (pod)`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `sum(rate(container_cpu_usage_seconds_total{namespace="${namespace}",pod=~"${t_name}",container="zookeeper"}[5m])) by (pod)`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `process_open_fds{namespace="${namespace}",pod=~"${t_name}",job=~"${namespace}/${name}.*",container="zookeeper"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `jvm_threads_current{namespace="${namespace}",kubernetes_pod_name=~"${t_name}",strimzi_io_name="${name}-zookeeper",job=~".*${name}.*"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `sum(jvm_memory_bytes_used{namespace="${namespace}",kubernetes_pod_name=~"${t_name}",strimzi_io_name="${name}-zookeeper",job=~".*${name}.*"}) by (kubernetes_pod_name)`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `zookeeper_avgrequestlatency{namespace="${namespace}",job=~"${namespace}/${name}.*",kubernetes_pod_name=~"${t_name}"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `zookeeper_maxrequestlatency{namespace="${namespace}",job=~"${namespace}/${name}.*",kubernetes_pod_name=~"${t_name}"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `kubelet_volume_stats_available_bytes{namespace="${namespace}",persistentvolumeclaim=~"data-${name}-zookeeper-${t_name.slice(-1)}"}`
                        }
                    ]
                }
            ];
        },
        getMonitoringCfgs: function(e) {
            return [
                {
                    title: t("ZOOKEEPER_MEMORY_USAGE"),
                    legend: [
                        t("ZOOKEEPER_MEMORY_USAGE")
                    ],
                    unitType: "memory",
                    data: [
                        module26(e, "1.data.result[0]", {})
                    ]
                },
                {
                    title: t("ZOOKEEPER_CPU_USAGE"),
                    legend: [
                        t("ZOOKEEPER_CPU_USAGE")
                    ],
                    data: [
                        module26(e, "2.data.result[0]", {})
                    ]
                },
                {
                    title: t("OPEN_FILE_DESCRIPTORS"),
                    legend: [
                        t("OPEN_FILE_DESCRIPTORS")
                    ],
                    data: [
                        module26(e, "3.data.result[0]", {})
                    ]
                },
                {
                    title: t("JVM_THREAD_COUNT"),
                    legend: [
                        t("JVM_THREAD_COUNT")
                    ],
                    data: [
                        module26(e, "4.data.result[0]")
                    ]
                },
                {
                    title: t("JVM_MEMORY_USAGE"),
                    legend: [
                        t("JVM_MEMORY_USAGE")
                    ],
                    unitType: "memory",
                    data: [
                        module26(e, "5.data.result[0]", {})
                    ]
                },
                {
                    title: t("REQUEST_LATENCY_AVERAGE"),
                    legend: [
                        t("REQUEST_LATENCY_AVERAGE")
                    ],
                    unitType: "second",
                    data: [
                        module26(e, "6.data.result[0]", {})
                    ]
                },
                {
                    title: t("REQUEST_LATENCY_MAXIMUM"),
                    legend: [
                        t("REQUEST_LATENCY_MAXIMUM")
                    ],
                    unitType: "second",
                    data: [
                        module26(e, "7.data.result[0]", {})
                    ]
                },
                {
                    title: t("AVAILABLE_DISK_SPACE"),
                    legend: [
                        t("AVAILABLE_DISK_SPACE")
                    ],
                    unitType: "memory",
                    data: [
                        module26(e, "8.data.result[0]", {})
                    ]
                }
            ];
        }
    }
};
export default c;
