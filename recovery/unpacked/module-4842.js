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
                            expr: `count(kafka_server_replicamanager_leadercount{namespace="${namespace}",strimzi_io_cluster="${name}",job=~"${namespace}/${name}.*"})`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `sum(kafka_cluster_partition_underminisr{namespace="${namespace}",strimzi_io_cluster="${name}",job=~"${namespace}/${name}.*"})`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `sum(kafka_controller_kafkacontroller_offlinepartitionscount{namespace="${namespace}",strimzi_io_cluster="${name}",job=~"${namespace}/${name}.*"})`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `sum(irate(kafka_server_brokertopicmetrics_bytesin_total{namespace="${namespace}",strimzi_io_cluster="${name}",job=~"${namespace}/${name}.*",topic!~"strimzi.cruisecontrol.modeltrainingsamples|strimzi.cruisecontrol.metrics|trainingsamples|__consumer_offsets|__strimzi-topic-operator-kstreams-topic-store-changelog|__strimzi_store_topic|strimzi.cruisecontrol.partitionmetricsamples|"}[2m]))`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `sum(irate(kafka_server_brokertopicmetrics_bytesout_total{namespace="${namespace}",strimzi_io_cluster="${name}",job=~"${namespace}/${name}.*",topic!~"strimzi.cruisecontrol.modeltrainingsamples|strimzi.cruisecontrol.metrics|trainingsamples|__consumer_offsets|__strimzi-topic-operator-kstreams-topic-store-changelog|__strimzi_store_topic|strimzi.cruisecontrol.partitionmetricsamples|"}[2m]))`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `sum(irate(kafka_server_brokertopicmetrics_messagesin_total{namespace="${namespace}",strimzi_io_cluster="${name}",job=~"${namespace}/${name}.*",topic!~"strimzi.cruisecontrol.modeltrainingsamples|strimzi.cruisecontrol.metrics|trainingsamples|__consumer_offsets|__strimzi-topic-operator-kstreams-topic-store-changelog|__strimzi_store_topic|strimzi.cruisecontrol.partitionmetricsamples|"}[2m]))`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `sum(irate(kafka_server_brokertopicmetrics_totalproducerequests_total{namespace="${namespace}",strimzi_io_cluster="${name}",job=~"${namespace}/${name}.*",topic!~"strimzi.cruisecontrol.modeltrainingsamples|strimzi.cruisecontrol.metrics|trainingsamples|__consumer_offsets|__strimzi-topic-operator-kstreams-topic-store-changelog|__strimzi_store_topic|strimzi.cruisecontrol.partitionmetricsamples|"}[2m]))`
                        }
                    ]
                }
            ];
        },
        getMonitoringCfgs: function(e) {
            return [
                {
                    title: t("ONLINE_BROKER_COUNT"),
                    legend: [
                        t("ONLINE_BROKER_COUNT")
                    ],
                    data: [
                        module26(e, "1.data.result[0]", {})
                    ]
                },
                {
                    title: t("PARTITIONS_UNDER_MINIMUM_ISR"),
                    legend: [
                        t("PARTITIONS_UNDER_MINIMUM_ISR")
                    ],
                    data: [
                        module26(e, "2.data.result[0]", {})
                    ]
                },
                {
                    title: t("OFFLINE_PARTITION_COUNT"),
                    legend: [
                        t("OFFLINE_PARTITION_COUNT")
                    ],
                    data: [
                        module26(e, "3.data.result[0]", {})
                    ]
                },
                {
                    title: t("TOPIC_INCOMING_DATA_RATE"),
                    legend: [
                        t("TOPIC_INCOMING_DATA_RATE")
                    ],
                    unitType: "traffic",
                    data: [
                        module26(e, "4.data.result[0]")
                    ]
                },
                {
                    title: t("TOPIC_OUTGOING_DATA_RATE"),
                    legend: [
                        t("TOPIC_OUTGOING_DATA_RATE")
                    ],
                    unitType: "traffic",
                    data: [
                        module26(e, "5.data.result[0]", {})
                    ]
                },
                {
                    title: t("TOPIC_INCOMING_MESSAGE_RATE"),
                    legend: [
                        t("TOPIC_INCOMING_MESSAGE_RATE")
                    ],
                    data: [
                        module26(e, "6.data.result[0]", {})
                    ]
                },
                {
                    title: t("TOPIC_OUTGOING_MESSAGE_RATE"),
                    legend: [
                        t("TOPIC_OUTGOING_MESSAGE_RATE")
                    ],
                    data: [
                        module26(e, "7.data.result[0]", {})
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
                            expr: `kafka_network_socketserver_networkprocessoravgidle_percent{namespace="${namespace}",strimzi_io_cluster="${name}",job=~"${namespace}/${name}.*",kubernetes_pod_name=~"${t_name}"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `irate(kafka_server_kafkaserver_linux_disk_write_bytes{namespace="${namespace}",strimzi_io_cluster="${name}",job=~"${namespace}/${name}.*",kubernetes_pod_name=~"${t_name}"}[2m])`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `irate(kafka_server_kafkaserver_linux_disk_read_bytes{namespace="${namespace}",strimzi_io_cluster="${name}",job=~"${namespace}/${name}.*",kubernetes_pod_name=~"${t_name}"}[2m])`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `sum(container_memory_usage_bytes{namespace="${namespace}",pod=~"${t_name}",container="kafka"}) by (pod)`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `sum(rate(container_cpu_usage_seconds_total{namespace="${namespace}",pod=~"${t_name}",container="kafka"}[5m])) by (pod)`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `process_open_fds{namespace="${namespace}",pod=~"${t_name}",job=~"${namespace}/${name}.*",container="kafka"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `sum(jvm_memory_bytes_used{namespace="${namespace}",kubernetes_pod_name=~"${t_name}",strimzi_io_name="${name}-kafka",job=~".*${name}.*"}) by (kubernetes_pod_name)`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `jvm_threads_current{namespace="${namespace}",kubernetes_pod_name=~"${t_name}",strimzi_io_name="${name}-kafka",job=~".*${name}.*"}`
                        }
                    ]
                },
                {
                    targets: [
                        {
                            expr: `kubelet_volume_stats_available_bytes{namespace="${namespace}",persistentvolumeclaim=~"data-0-${name}-kafka-0"}`
                        }
                    ]
                }
            ];
        },
        getMonitoringCfgs: function(e) {
            return [
                {
                    title: t("NETWORK_PROCESSOR_AVG_IDLE_PERCENT"),
                    legend: [
                        t("NETWORK_PROCESSOR_AVG_IDLE_PERCENT")
                    ],
                    unit: "%",
                    dot: 2,
                    data: [
                        module26(e, "1.data.result[0]", {})
                    ]
                },
                {
                    title: t("DISK_WRITES"),
                    legend: [
                        t("DISK_WRITES")
                    ],
                    unitType: "traffic",
                    data: [
                        module26(e, "2.data.result[0]", {})
                    ]
                },
                {
                    title: t("DISK_READS"),
                    legend: [
                        t("DISK_READS")
                    ],
                    unitType: "traffic",
                    data: [
                        module26(e, "3.data.result[0]", {})
                    ]
                },
                {
                    title: t("KAFKA_MEMORY_USAGE"),
                    legend: [
                        t("KAFKA_MEMORY_USAGE")
                    ],
                    unitType: "memory",
                    data: [
                        module26(e, "4.data.result[0]")
                    ]
                },
                {
                    title: t("KAFKA_CPU_USAGE"),
                    legend: [
                        t("KAFKA_CPU_USAGE")
                    ],
                    data: [
                        module26(e, "5.data.result[0]", {})
                    ]
                },
                {
                    title: t("KAFKA_OPEN_FILE_DESC"),
                    legend: [
                        t("KAFKA_OPEN_FILE_DESC")
                    ],
                    data: [
                        module26(e, "6.data.result[0]", {})
                    ]
                },
                {
                    title: t("JVM_MEMORY_USAGE"),
                    legend: [
                        t("JVM_MEMORY_USAGE")
                    ],
                    unitType: "memory",
                    data: [
                        module26(e, "7.data.result[0]", {})
                    ]
                },
                {
                    title: t("JVM_THREAD_COUNT"),
                    legend: [
                        t("JVM_THREAD_COUNT")
                    ],
                    data: [
                        module26(e, "8.data.result[0]", {})
                    ]
                },
                {
                    title: t("AVAILABLE_DISK_SPACE"),
                    legend: [
                        t("AVAILABLE_DISK_SPACE")
                    ],
                    unitType: "memory",
                    data: [
                        module26(e, "9.data.result[0]", {})
                    ]
                }
            ];
        }
    }
};
export default c;
