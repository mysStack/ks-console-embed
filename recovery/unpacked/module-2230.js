import "./module-15.js";
export const ckYaml = {
    resources: {
        apiVersion: "clickhouse.radondb.com/v1",
        kind: "ClickHouseInstallation",
        metadata: {
            name: "ck-cluster-11",
            namespace: "default"
        },
        spec: {
            metricsExporter: "on",
            configuration: {
                zookeeper: {
                    install: true,
                    replica: 3,
                    port: 2181
                },
                users: {
                    "readonly/profile": "readonly",
                    "clickhouse/password": "c1ickh0use0perator",
                    "clickhouse/networks/ip": [
                        "127.0.0.1",
                        "::/0"
                    ],
                    "clickhouse/profile": "default",
                    "clickhouse/quotas": "default"
                },
                profiles: {
                    "readonly/readonly": "1",
                    "default/max_memory_usage": 200000000
                },
                quotas: {
                    "default/interval/duration": "3600"
                },
                settings: {
                    "compression/case/method": "zstd",
                    disable_internal_dns_cache: 1,
                    max_server_memory_usage: 1800000000,
                    "logger/log": "/var/lib/clickhouse/log/clickhouse-server.log",
                    "logger/errorlog": "/var/lib/clickhouse/log/clickhouse-server.err.log",
                    "logger/count": 10,
                    "logger/size": "100M",
                    timezone: "Asia/Shanghai"
                },
                clusters: [
                    {
                        name: "all-nodes",
                        layout: {
                            shardsCount: 1,
                            replicasCount: 2
                        }
                    }
                ]
            },
            defaults: {
                templates: {
                    podTemplate: "pod-template-with-volume",
                    dataVolumeClaimTemplate: "data",
                    logVolumeClaimTemplate: "data",
                    serviceTemplate: "chi-svc-template"
                }
            },
            templates: {
                serviceTemplates: [
                    {
                        name: "chi-svc-template",
                        spec: {
                            ports: [
                                {
                                    name: "http",
                                    port: 8123
                                },
                                {
                                    name: "tcp",
                                    port: 9000
                                }
                            ],
                            type: "NodePort"
                        }
                    }
                ],
                podTemplates: [
                    {
                        name: "pod-template-with-volume",
                        metadata: {
                            annotations: {
                                "backup.velero.io/backup-volumes": "data"
                            }
                        },
                        spec: {
                            affinity: {
                                podAntiAffinity: {
                                    preferredDuringSchedulingIgnoredDuringExecution: [
                                        {
                                            weight: 1,
                                            podAffinityTerm: {
                                                labelSelector: {
                                                    matchExpressions: [
                                                        {
                                                            key: "clickhouse.radondb.com/chi",
                                                            operator: "In",
                                                            values: [
                                                                "clickhouse"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                topologyKey: "kubernetes.io/hostname"
                                            }
                                        }
                                    ]
                                }
                            },
                            containers: [
                                {
                                    name: "clickhouse",
                                    image: "radondb/clickhouse-server:v21.1.3.32-stable",
                                    imagePullPolicy: "IfNotPresent",
                                    readinessProbe: {
                                        exec: {
                                            command: [
                                                "/usr/bin/clickhouse-client",
                                                "-q",
                                                "SELECT 1"
                                            ]
                                        }
                                    },
                                    initialDelaySeconds: 10,
                                    periodSeconds: 30,
                                    successThreshold: 1,
                                    failureThreshold: 4,
                                    timeoutSeconds: 10,
                                    livenessProbe: {
                                        exec: {
                                            command: [
                                                "/usr/bin/clickhouse-client",
                                                "-q",
                                                "SELECT 1"
                                            ]
                                        },
                                        initialDelaySeconds: 60,
                                        periodSeconds: 30,
                                        successThreshold: 1,
                                        failureThreshold: 4,
                                        timeoutSeconds: 10
                                    },
                                    volumeMounts: [
                                        {
                                            name: "data",
                                            mountPath: "/var/lib/clickhouse"
                                        }
                                    ],
                                    resources: {
                                        requests: {
                                            memory: "1Gi",
                                            cpu: "500m"
                                        },
                                        limits: {
                                            memory: "1Gi",
                                            cpu: "500m"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                ],
                volumeClaimTemplates: [
                    {
                        name: "data",
                        reclaimPolicy: "Retain",
                        spec: {
                            accessModes: [
                                "ReadWriteOnce"
                            ],
                            resources: {
                                requests: {
                                    storage: "10Gi"
                                }
                            },
                            storageClassName: "csi-qingcloud"
                        }
                    }
                ]
            }
        }
    }
};
