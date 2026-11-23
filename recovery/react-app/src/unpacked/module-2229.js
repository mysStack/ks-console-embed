import "./module-15.js";
export const mongoYaml = {
    resources: {
        apiVersion: "mongodbcommunity.mongodb.com/v1",
        kind: "MongoDBCommunity",
        metadata: {
            name: "mongodb"
        },
        spec: {
            members: 1,
            type: "ReplicaSet",
            version: "4.2.19",
            prometheus: {
                username: "Prometheus",
                passwordSecretRef: {
                    name: "mongodb-metrics-password"
                }
            },
            security: {
                authentication: {
                    modes: [
                        "SCRAM"
                    ]
                }
            },
            users: [
                {
                    name: "operator",
                    db: "admin",
                    passwordSecretRef: {
                        name: "mongodb-operator-password"
                    },
                    roles: [
                        {
                            name: "root",
                            db: "admin"
                        }
                    ],
                    scramCredentialsSecretName: "mongodb-operator-password"
                },
                {
                    name: "root",
                    db: "admin",
                    passwordSecretRef: {
                        name: "mongodb-root-password"
                    },
                    roles: [
                        {
                            name: "root",
                            db: "admin"
                        }
                    ],
                    scramCredentialsSecretName: "mongodb-root-password"
                }
            ],
            additionalMongodConfig: {
                net: {
                    port: 27017,
                    maxIncomingConnections: 10000
                },
                storage: {
                    wiredTiger: {
                        engineConfig: {
                            journalCompressor: "zlib"
                        }
                    }
                },
                replication: {
                    oplogSizeMB: 10240,
                    enableMajorityReadConcern: true
                },
                operationProfiling: {
                    mode: "off",
                    slowOpThresholdMs: 100
                },
                systemLog: {
                    destination: "file",
                    path: "/data/mongod.log",
                    logAppend: true,
                    logRotate: "reopen",
                    component: {
                        command: {
                            verbosity: 0
                        },
                        index: {
                            verbosity: 0
                        },
                        query: {
                            verbosity: 0
                        },
                        network: {
                            verbosity: 0
                        },
                        write: {
                            verbosity: 0
                        }
                    }
                },
                setParameter: {
                    cursorTimeoutMillis: 700000
                }
            },
            statefulSet: {
                spec: {
                    template: {
                        spec: {
                            initContainers: [
                                {
                                    name: "mongod-posthook",
                                    imagePullPolicy: "IfNotPresent",
                                    resources: {
                                        limits: {
                                            cpu: "0.2",
                                            memory: "250M"
                                        },
                                        requests: {
                                            cpu: "0.2",
                                            memory: "250M"
                                        }
                                    }
                                },
                                {
                                    name: "mongodb-agent-readinessprobe",
                                    imagePullPolicy: "IfNotPresent",
                                    resources: {
                                        limits: {
                                            cpu: "0.2",
                                            memory: "250M"
                                        },
                                        requests: {
                                            cpu: "0.2",
                                            memory: "250M"
                                        }
                                    }
                                }
                            ],
                            containers: [
                                {
                                    name: "mongod",
                                    imagePullPolicy: "IfNotPresent",
                                    resources: {
                                        limits: {
                                            cpu: "8",
                                            memory: "16G"
                                        },
                                        requests: {
                                            cpu: 2,
                                            memory: "4G"
                                        }
                                    }
                                },
                                {
                                    name: "mongodb-agent",
                                    imagePullPolicy: "IfNotPresent",
                                    resources: {
                                        limits: {
                                            cpu: "0.2",
                                            memory: "250M"
                                        },
                                        requests: {
                                            cpu: "0.2",
                                            memory: "250M"
                                        }
                                    }
                                }
                            ],
                            affinity: {
                                podAntiAffinity: {
                                    preferredDuringSchedulingIgnoredDuringExecution: [
                                        {
                                            podAffinityTerm: {
                                                labelSelector: {
                                                    matchExpressions: [
                                                        {
                                                            key: "app.kubernetes.io/instance",
                                                            operator: "In",
                                                            values: [
                                                                111
                                                            ]
                                                        }
                                                    ]
                                                },
                                                topologyKey: "kubernetes.io/hostname"
                                            },
                                            weight: 1
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    volumeClaimTemplates: [
                        {
                            metadata: {
                                name: "data-volume"
                            },
                            spec: {
                                accessModes: [
                                    "ReadWriteOnce"
                                ],
                                resources: {
                                    requests: {
                                        storage: "100G"
                                    }
                                },
                                storageClassName: "csi-high-capacity"
                            }
                        }
                    ]
                }
            }
        }
    },
    masterSecret: {
        apiVersion: "v1",
        kind: "Secret",
        metadata: {
            name: "mongodb-operator-password"
        },
        type: "Opaque",
        stringData: {
            password: "operator_pwd"
        }
    },
    rootSecret: {
        apiVersion: "v1",
        kind: "Secret",
        metadata: {
            name: "mongodb-root-password"
        },
        type: "Opaque",
        stringData: {
            password: "root_pwd"
        }
    }
};
