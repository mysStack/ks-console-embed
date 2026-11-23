import "./module-15.js";
export const kafkaYaml = {
    resources: {
        apiVersion: "kafka.strimzi.io/v1beta2",
        kind: "Kafka",
        metadata: {
            name: "my-cluster"
        },
        spec: {
            clusterCa: {
                renewalDays: 30,
                validityDays: 3650
            },
            clientsCa: {
                renewalDays: 30,
                validityDays: 3650
            },
            kafka: {
                version: "3.2.0",
                replicas: 1,
                resources: {
                    requests: {
                        memory: "64Gi",
                        cpu: "8"
                    },
                    limits: {
                        memory: "64Gi",
                        cpu: "12"
                    }
                },
                listeners: [
                    {
                        name: "external",
                        port: 9092,
                        type: "nodeport",
                        tls: true,
                        authentication: {
                            type: "tls"
                        }
                    }
                ],
                metricsConfig: {
                    type: "jmxPrometheusExporter",
                    valueFrom: {
                        configMapKeyRef: {
                            key: "kafka-metrics-config.yml",
                            name: "kafka-metrics"
                        }
                    }
                },
                authorization: {
                    superUsers: [
                        "saas"
                    ],
                    type: "simple"
                },
                storage: {
                    type: "jbod",
                    volumes: [
                        {
                            id: 0,
                            type: "persistent-claim",
                            size: "100Gi",
                            deleteClaim: true
                        }
                    ]
                },
                config: {
                    "default.replication.factor": 3,
                    "min.insync.replicas": 2,
                    "auto.create.topics.enable": false,
                    "num.partitions": 3
                }
            },
            zookeeper: {
                replicas: 1,
                metricsConfig: {
                    type: "jmxPrometheusExporter",
                    valueFrom: {
                        configMapKeyRef: {
                            key: "zookeeper-metrics-config.yml",
                            name: "kafka-metrics"
                        }
                    }
                },
                resources: {
                    requests: {
                        memory: "8Gi",
                        cpu: "2"
                    },
                    limits: {
                        memory: "8Gi",
                        cpu: "2"
                    }
                },
                storage: {
                    type: "persistent-claim",
                    size: "100Gi",
                    deleteClaim: true
                }
            },
            entityOperator: {
                topicOperator: {},
                userOperator: {}
            },
            cruiseControl: {},
            kafkaExporter: {
                groupRegex: ".*",
                topicRegex: ".*"
            }
        }
    },
    user: {
        apiVersion: "kafka.strimzi.io/v1beta2",
        kind: "KafkaUser",
        metadata: {
            name: "saas",
            labels: {
                "strimzi.io/cluster": "my-cluster"
            }
        },
        spec: {
            authentication: {
                type: "scram-sha-512"
            },
            authorization: {
                type: "simple",
                acls: [
                    {
                        type: "allow",
                        operation: "Read",
                        resource: {
                            type: "topic",
                            patternType: "literal",
                            name: ""
                        }
                    }
                ]
            }
        }
    },
    topic: {
        apiVersion: "kafka.strimzi.io/v1beta2",
        kind: "KafkaTopic",
        metadata: {
            name: "my-topic2",
            labels: {
                "strimzi.io/cluster": "my-cluster"
            }
        },
        spec: {
            partitions: 3,
            replicas: 1,
            config: {
                "retention.ms": 604800000
            }
        }
    },
    configMap: {
        kind: "ConfigMap",
        apiVersion: "v1",
        metadata: {
            name: "kafka-metrics",
            namespace: "test",
            labels: {
                app: "strimzi",
                component: "configmap"
            }
        },
        data: {
            "kafka-metrics-config.yml": '# See https://github.com/prometheus/jmx_exporter for more info about JMX Prometheus Exporter metrics\nlowercaseOutputName: true\nrules:\n- pattern: kafka.(\\w+)<type=(.+), name=(.+)Percent\\w*><>MeanRate\n  name: kafka_$1_$2_$3_percent\n  type: GAUGE\n- pattern: kafka.(\\w+)<type=(.+), name=(.+)Percent\\w*><>Value\n  name: kafka_$1_$2_$3_percent\n  type: GAUGE\n- pattern: kafka.(\\w+)<type=(.+), name=(.+)Percent\\w*, (.+)=(.+)><>Value\n  name: kafka_$1_$2_$3_percent\n  type: GAUGE\n  labels:\n    "$4": "$5"\n- pattern: kafka.(\\w+)<type=(.+), name=(.+)PerSec\\w*, (.+)=(.+), (.+)=(.+)><>Count\n  name: kafka_$1_$2_$3_total\n  type: COUNTER\n  labels:\n    "$4": "$5"\n    "$6": "$7"\n- pattern: kafka.(\\w+)<type=(.+), name=(.+)PerSec\\w*, (.+)=(.+)><>Count\n  name: kafka_$1_$2_$3_total\n  type: COUNTER\n  labels:\n    "$4": "$5"\n- pattern: kafka.(\\w+)<type=(.+), name=(.+)PerSec\\w*><>Count\n  name: kafka_$1_$2_$3_total\n  type: COUNTER\n- pattern: kafka.cluster<type=(.+), name=UnderMinIsr, (.+)=(.+), (.+)=(.+)><>Value\n  name: kafka_cluster_$1_underminisr\n  type: GAUGE\n  labels:\n    "$2": "$3"\n    "$4": "$5"\n- pattern: kafka.cluster<type=(.+), name=UnderMinIsr, (.+)=(.+)><>Value\n  name: kafka_cluster_$1_underminisr\n  type: GAUGE\n  labels:\n    "$2": "$3"\n- pattern: kafka.cluster<type=(.+), name=UnderMinIsr><>Value\n  name: kafka_cluster_$1_underminisr\n  type: GAUGE\n- pattern: kafka.controller<type=(.+), name=(.+), (.+)=(.+), (.+)=(.+)><>Value\n  name: kafka_controller_$1_$2\n  type: GAUGE\n  labels:\n    "$3": "$4"\n    "$5": "$6"\n- pattern: kafka.controller<type=(.+), name=(.+), (.+)=(.+)><>Value\n  name: kafka_controller_$1_$2\n  type: GAUGE\n  labels:\n    "$3": "$4"\n- pattern: kafka.controller<type=(.+), name=(.+)><>Value\n  name: kafka_controller_$1_$2\n  type: GAUGE\n- pattern: kafka.server<type=(.+), name=(?!ConsumerLag)(.+), (.+)=(.+), (.+)=(.+)><>Value\n  name: kafka_server_$1_$2\n  type: GAUGE\n  labels:\n    "$3": "$4"\n    "$5": "$6"\n- pattern: kafka.server<type=(.+), name=(?!ConsumerLag)(.+), (.+)=(.+)><>Value\n  name: kafka_server_$1_$2\n  type: GAUGE\n  labels:\n    "$3": "$4"\n- pattern: kafka.server<type=(.+), name=(?!ConsumerLag)(.+)><>Value\n  name: kafka_server_$1_$2\n  type: GAUGE',
            "zookeeper-metrics-config.yml": '# See https://github.com/prometheus/jmx_exporter for more info about JMX Prometheus Exporter metrics\nlowercaseOutputName: true\nrules:\n# replicated Zookeeper\n- pattern: "org.apache.ZooKeeperService<name0=ReplicatedServer_id(\\\\d+)><>(\\\\w+)"\n  name: "zookeeper_$2"\n  type: GAUGE\n- pattern: "org.apache.ZooKeeperService<name0=ReplicatedServer_id(\\\\d+), name1=replica.(\\\\d+)><>(\\\\w+)"\n  name: "zookeeper_$3"\n  type: GAUGE\n  labels:\n    replicaId: "$2"\n- pattern: "org.apache.ZooKeeperService<name0=ReplicatedServer_id(\\\\d+), name1=replica.(\\\\d+), name2=(\\\\w+)><>(Packets\\\\w+)"\n  name: "zookeeper_$4"\n  type: COUNTER\n  labels:\n    replicaId: "$2"\n    memberType: "$3"\n- pattern: "org.apache.ZooKeeperService<name0=ReplicatedServer_id(\\\\d+), name1=replica.(\\\\d+), name2=(\\\\w+)><>(\\\\w+)"\n  name: "zookeeper_$4"\n  type: GAUGE\n  labels:\n    replicaId: "$2"\n    memberType: "$3"\n- pattern: "org.apache.ZooKeeperService<name0=ReplicatedServer_id(\\\\d+), name1=replica.(\\\\d+), name2=(\\\\w+), name3=(\\\\w+)><>(\\\\w+)"\n  name: "zookeeper_$4_$5"\n  type: GAUGE\n  labels:\n    replicaId: "$2"\n    memberType: "$3"'
        }
    },
    podMonitor: {
        apiVersion: "monitoring.coreos.com/v1",
        kind: "PodMonitor",
        metadata: {
            name: "kafka-resources-metrics",
            namespace: "test",
            labels: {
                app: "strimzi",
                component: "podmonitor"
            }
        },
        spec: {
            selector: {
                matchExpressions: [
                    {
                        key: "strimzi.io/kind",
                        operator: "In",
                        values: [
                            "Kafka",
                            "KafkaConnect",
                            "KafkaMirrorMaker",
                            "KafkaMirrorMaker2"
                        ]
                    },
                    {
                        key: "strimzi.io/component-type",
                        operator: "NotIn",
                        values: [
                            "kafka-exporter"
                        ]
                    }
                ]
            },
            namespaceSelector: {
                matchNames: [
                    "namespace"
                ]
            },
            podMetricsEndpoints: [
                {
                    path: "/metrics",
                    port: "tcp-prometheus",
                    relabelings: [
                        {
                            separator: ";",
                            regex: "__meta_kubernetes_pod_label_(strimzi_io_.+)",
                            replacement: "$1",
                            action: "labelmap"
                        },
                        {
                            sourceLabels: [
                                "__meta_kubernetes_namespace"
                            ],
                            separator: ";",
                            regex: "(.*)",
                            targetLabel: "namespace",
                            replacement: "$1",
                            action: "replace"
                        },
                        {
                            sourceLabels: [
                                "__meta_kubernetes_pod_name"
                            ],
                            separator: ";",
                            regex: "(.*)",
                            targetLabel: "kubernetes_pod_name",
                            replacement: "$1",
                            action: "replace"
                        },
                        {
                            sourceLabels: [
                                "__meta_kubernetes_pod_node_name"
                            ],
                            separator: ";",
                            regex: "(.*)",
                            targetLabel: "node_name",
                            replacement: "$1",
                            action: "replace"
                        },
                        {
                            sourceLabels: [
                                "__meta_kubernetes_pod_host_ip"
                            ],
                            separator: ";",
                            regex: "(.*)",
                            targetLabel: "node_ip",
                            replacement: "$1",
                            action: "replace"
                        }
                    ]
                }
            ]
        }
    },
    rebalance: {
        apiVersion: "kafka.strimzi.io/v1beta2",
        kind: "KafkaRebalance",
        metadata: {
            name: "my-rebalance2",
            labels: {
                "strimzi.io/cluster": "my-cluster"
            },
            annotations: {
                "strimzi.io/rebalance": "approve"
            }
        },
        spec: {
            mode: "full"
        }
    }
};
