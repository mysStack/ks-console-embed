import "./module-15.js";
import "./module-5.js";
import module26 from "./module-26.js";
import { ReactComponent } from "./module-1802.js";
import { ReactComponent as ReactComponent_1 } from "./module-1803.js";
import { ReactComponent as ReactComponent_2 } from "./module-3812.js";
import module1361 from "./module-1361.js";
import module1362 from "./module-1362.js";
import module1684 from "./module-1684.js";
const pathGetter = function(e) {
    return `${module26(e, "Host")}:${module26(e, "Port")}`;
};
const p = {
    elasticsearch: {
        ICON: ReactComponent,
        title: "Elasticsearch",
        pathGetter,
        Form: module1361,
        get description () {
            return t("ES_DESC");
        },
        createConfig: {
            logs: {
                apiVersion: "v1",
                kind: "Secret",
                metadata: {
                    name: "vector-agent-logs-sink-elasticsearch",
                    namespace: "kubesphere-logging-system",
                    labels: {
                        "logging.whizard.io/component": "logs",
                        "logging.whizard.io/vector-role": "Agent",
                        "logging.whizard.io/enable": "true"
                    }
                },
                data: {
                    "sink.yaml": {
                        sinks: {
                            elasticsearch_logs: {
                                type: "elasticsearch",
                                inputs: [
                                    "kube_logs_remapped",
                                    "systemd_logs_remapped"
                                ],
                                bulk: {
                                    index: "{{ .cluster }}-logs-%Y.%m.%d"
                                },
                                endpoints: [
                                    "http://elasticsearch-logging-data.kubesphere-logging-system.svc:9200"
                                ]
                            }
                        }
                    }
                }
            },
            auditing: {
                apiVersion: "v1",
                kind: "Secret",
                metadata: {
                    name: "vector-agent-auditing-sink-elasticsearch",
                    namespace: "kubesphere-logging-system",
                    labels: {
                        "logging.whizard.io/component": "auditing",
                        "logging.whizard.io/vector-role": "Agent",
                        "logging.whizard.io/enable": "true"
                    }
                },
                data: {
                    "sink.yaml": {
                        sinks: {
                            elasticsearch_auditing: {
                                type: "elasticsearch",
                                inputs: [
                                    "auditing_remapped"
                                ],
                                bulk: {
                                    index: "{{ .cluster }}-auditing-%Y.%m.%d"
                                },
                                endpoints: [
                                    "http://elasticsearch-logging-data.kubesphere-logging-system.svc:9200"
                                ]
                            }
                        }
                    }
                }
            },
            events: {
                apiVersion: "v1",
                kind: "Secret",
                metadata: {
                    name: "vector-agent-events-sink-elasticsearch",
                    namespace: "kubesphere-logging-system",
                    labels: {
                        "logging.whizard.io/component": "events",
                        "logging.whizard.io/vector-role": "Agent",
                        "logging.whizard.io/enable": "true"
                    }
                },
                data: {
                    "sink.yaml": {
                        sinks: {
                            elasticsearch_events: {
                                type: "elasticsearch",
                                inputs: [
                                    "kube_events_remapped"
                                ],
                                bulk: {
                                    index: "{{ .cluster }}-events-%Y.%m.%d"
                                },
                                endpoints: [
                                    "http://elasticsearch-logging-data.kubesphere-logging-system.svc:9200"
                                ]
                            }
                        }
                    }
                }
            },
            "notification-history": {
                apiVersion: "v1",
                kind: "Secret",
                metadata: {
                    name: "vector-aggregator-notification-history-sink-elasticsearch",
                    namespace: "kubesphere-logging-system",
                    labels: {
                        "logging.whizard.io/component": "notification-history",
                        "logging.whizard.io/vector-role": "Aggregator",
                        "logging.whizard.io/enable": "true"
                    }
                },
                data: {
                    "sink.yaml": {
                        sinks: {
                            elasticsearch_notification_history: {
                                type: "elasticsearch",
                                inputs: [
                                    "notification_history_remapped"
                                ],
                                bulk: {
                                    index: "{{ .cluster }}-notification-history-%Y.%m.%d"
                                },
                                endpoints: [
                                    "http://elasticsearch-logging-data.kubesphere-logging-system.svc:9200"
                                ]
                            }
                        }
                    }
                }
            }
        }
    },
    opensearch: {
        ICON: ReactComponent_2,
        title: "Opensearch",
        pathGetter,
        Form: module1684,
        get description () {
            return t("OPENSEARCH_DESC");
        },
        createConfig: {
            logs: {
                apiVersion: "v1",
                kind: "Secret",
                metadata: {
                    name: "vector-agent-logs-sink-opensearch",
                    namespace: "kubesphere-logging-system",
                    labels: {
                        "logging.whizard.io/component": "logs",
                        "logging.whizard.io/vector-role": "Agent",
                        "logging.whizard.io/enable": "true"
                    }
                },
                data: {
                    "sink.yaml": {
                        sinks: {
                            opensearch_logs: {
                                type: "elasticsearch",
                                api_version: "v8",
                                auth: {
                                    strategy: "basic",
                                    user: "admin",
                                    password: "admin"
                                },
                                endpoints: [
                                    "https://opensearch-cluster-data.kubesphere-logging-system.svc:9200"
                                ],
                                tls: {
                                    verify_certificate: false
                                },
                                inputs: [
                                    "kube_logs_remapped",
                                    "systemd_logs_remapped"
                                ],
                                bulk: {
                                    index: "{{ .cluster }}-logs-%Y.%m.%d"
                                }
                            }
                        }
                    }
                }
            },
            auditing: {
                apiVersion: "v1",
                kind: "Secret",
                metadata: {
                    name: "vector-agent-auditing-sink-opensearch",
                    namespace: "kubesphere-logging-system",
                    labels: {
                        "logging.whizard.io/component": "auditing",
                        "logging.whizard.io/vector-role": "Agent",
                        "logging.whizard.io/enable": "true"
                    }
                },
                data: {
                    "sink.yaml": {
                        sinks: {
                            opensearch_auditing: {
                                type: "elasticsearch",
                                api_version: "v8",
                                auth: {
                                    strategy: "basic",
                                    user: "admin",
                                    password: "admin"
                                },
                                endpoints: [
                                    "https://opensearch-cluster-data.kubesphere-logging-system.svc:9200"
                                ],
                                tls: {
                                    verify_certificate: false
                                },
                                inputs: [
                                    "auditing_remapped"
                                ],
                                bulk: {
                                    index: "{{ .cluster }}-auditing-%Y.%m.%d"
                                }
                            }
                        }
                    }
                }
            },
            events: {
                apiVersion: "v1",
                kind: "Secret",
                metadata: {
                    name: "vector-agent-events-sink-opensearch",
                    namespace: "kubesphere-logging-system",
                    labels: {
                        "logging.whizard.io/component": "events",
                        "logging.whizard.io/vector-role": "Agent",
                        "logging.whizard.io/enable": "true"
                    }
                },
                data: {
                    "sink.yaml": {
                        sinks: {
                            opensearch_events: {
                                type: "elasticsearch",
                                api_version: "v8",
                                auth: {
                                    strategy: "basic",
                                    user: "admin",
                                    password: "admin"
                                },
                                endpoints: [
                                    "https://opensearch-cluster-data.kubesphere-logging-system.svc:9200"
                                ],
                                tls: {
                                    verify_certificate: false
                                },
                                inputs: [
                                    "kube_events_remapped"
                                ],
                                bulk: {
                                    index: "{{ .cluster }}-events-%Y.%m.%d"
                                }
                            }
                        }
                    }
                }
            },
            "notification-history": {
                apiVersion: "v1",
                kind: "Secret",
                metadata: {
                    name: "vector-aggregator-notification-history-sink-opensearch",
                    namespace: "kubesphere-logging-system",
                    labels: {
                        "logging.whizard.io/component": "notification-history",
                        "logging.whizard.io/vector-role": "Aggregator",
                        "logging.whizard.io/enable": "true"
                    }
                },
                data: {
                    "sink.yaml": {
                        sinks: {
                            opensearch_notification_history: {
                                type: "elasticsearch",
                                api_version: "v8",
                                auth: {
                                    strategy: "basic",
                                    user: "admin",
                                    password: "admin"
                                },
                                endpoints: [
                                    "https://opensearch-cluster-data.kubesphere-logging-system.svc:9200"
                                ],
                                tls: {
                                    verify_certificate: false
                                },
                                inputs: [
                                    "notification_history_remapped"
                                ],
                                bulk: {
                                    index: "{{ .cluster }}-notification-history-%Y.%m.%d"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    kafka: {
        ICON: ReactComponent_1,
        title: "Kafka",
        pathGetter: function(e) {
            return module26(e, "Brokers");
        },
        Form: module1362,
        get description () {
            return t("KAFKA_DESC");
        },
        createConfig: {
            logs: {
                apiVersion: "v1",
                kind: "Secret",
                metadata: {
                    name: "vector-agent-logs-sink-kafka",
                    namespace: "kubesphere-logging-system",
                    labels: {
                        "logging.whizard.io/component": "logs",
                        "logging.whizard.io/vector-role": "Agent",
                        "logging.whizard.io/enable": "true"
                    }
                },
                data: {
                    "sink.yaml": {
                        sinks: {
                            kafka_logs: {
                                type: "kafka",
                                inputs: [
                                    "kube_logs_remapped",
                                    "systemd_logs_remapped"
                                ],
                                bootstrap_servers: "10.27.0.30:9092",
                                topic: "{{ .cluster }}-logs-{{ .kubernetes.namespace_name }}",
                                encoding: {
                                    codec: "json"
                                }
                            }
                        }
                    }
                }
            },
            auditing: {
                apiVersion: "v1",
                kind: "Secret",
                metadata: {
                    name: "vector-agent-auditing-sink-kafka",
                    namespace: "kubesphere-logging-system",
                    labels: {
                        "logging.whizard.io/component": "auditing",
                        "logging.whizard.io/vector-role": "Agent",
                        "logging.whizard.io/enable": "true"
                    }
                },
                data: {
                    "sink.yaml": {
                        sinks: {
                            kafka_auditing: {
                                type: "kafka",
                                inputs: [
                                    "auditing_remapped"
                                ],
                                bootstrap_servers: "10.27.0.30:9092",
                                topic: "{{ .cluster }}-auditing-{{ .kubernetes.namespace_name }}",
                                encoding: {
                                    codec: "json"
                                }
                            }
                        }
                    }
                }
            },
            events: {
                apiVersion: "v1",
                kind: "Secret",
                metadata: {
                    name: "vector-agent-events-sink-kafka",
                    namespace: "kubesphere-logging-system",
                    labels: {
                        "logging.whizard.io/component": "events",
                        "logging.whizard.io/vector-role": "Agent",
                        "logging.whizard.io/enable": "true"
                    }
                },
                data: {
                    "sink.yaml": {
                        sinks: {
                            kafka_events: {
                                type: "kafka",
                                inputs: [
                                    "kube_events_remapped"
                                ],
                                bootstrap_servers: "10.27.0.30:9092",
                                topic: "{{ .cluster }}-events-{{ .kubernetes.namespace_name }}",
                                encoding: {
                                    codec: "json"
                                }
                            }
                        }
                    }
                }
            },
            "notification-history": {
                apiVersion: "v1",
                kind: "Secret",
                metadata: {
                    name: "vector-aggregator-notification-history-sink-kafka",
                    namespace: "kubesphere-logging-system",
                    labels: {
                        "logging.whizard.io/component": "notification-history",
                        "logging.whizard.io/vector-role": "Aggregator",
                        "logging.whizard.io/enable": "true"
                    }
                },
                data: {
                    "sink.yaml": {
                        sinks: {
                            kafka_notification_history: {
                                type: "kafka",
                                inputs: [
                                    "notification_history_remapped"
                                ],
                                bootstrap_servers: "10.27.0.30:9092",
                                topic: "{{ .cluster }}-notification-history-{{ .kubernetes.namespace_name }}",
                                encoding: {
                                    codec: "json"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
export default p;
export const supportNames = [
    "vector-agent-logs-sink-elasticsearch",
    "vector-agent-auditing-sink-elasticsearch",
    "vector-agent-events-sink-elasticsearch",
    "vector-aggregator-notification-history-sink-elasticsearch",
    "vector-agent-logs-sink-opensearch",
    "vector-agent-auditing-sink-opensearch",
    "vector-agent-events-sink-opensearch",
    "vector-aggregator-notification-history-sink-opensearch",
    "vector-agent-logs-sink-kafka",
    "vector-agent-auditing-sink-kafka",
    "vector-agent-events-sink-kafka",
    "vector-aggregator-notification-history-sink-kafka"
];
