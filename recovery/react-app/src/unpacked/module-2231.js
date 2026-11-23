import "./module-15.js";
export const pgYaml = {
    resources: {
        apiVersion: "postgres.radondb.io/v1",
        kind: "PostgreSQL",
        metadata: {
            name: "lzzhang"
        },
        spec: {
            action: "start",
            deletepvc: true,
            volume_type: "local",
            antiaffinity: {
                policy: "preferred",
                podAntiAffinityTerm: "autofailover-readwrite",
                topologyKey: "kubernetes.io/hostname"
            },
            backupCluster: {
                backupToS3: {
                    policy: {
                        retention: "REDUNDANCY 10"
                    }
                }
            },
            services: [
                {
                    selector: "autofailover",
                    metadata: {
                        name: "autofailover"
                    },
                    spec: {
                        type: "ClusterIP",
                        ports: [
                            {
                                name: "exporter",
                                port: 9187
                            }
                        ]
                    }
                },
                {
                    selector: "primary",
                    metadata: {
                        name: "readwrite"
                    },
                    spec: {
                        type: "ClusterIP",
                        ports: [
                            {
                                name: "prime",
                                port: 5432
                            },
                            {
                                name: "exporter",
                                port: 9187
                            }
                        ]
                    }
                },
                {
                    selector: "standby-readonly",
                    metadata: {
                        name: "standby-readonly"
                    },
                    spec: {
                        type: "ClusterIP",
                        ports: [
                            {
                                name: "prime",
                                port: 5432
                            },
                            {
                                name: "exporter",
                                port: 9187
                            }
                        ]
                    }
                }
            ],
            autofailover: {
                hbas: [
                    "host all all all md5"
                ],
                configs: [
                    "enable_seqscan=on"
                ],
                podspec: {
                    terminationGracePeriodSeconds: 60,
                    containers: [
                        {
                            image: "radondb/radondb-postgresql:12.12-v1.1.0",
                            imagePullPolicy: "IfNotPresent",
                            name: "postgresql",
                            volumeMounts: [
                                {
                                    name: "data",
                                    mountPath: "/var/lib/postgresql/data"
                                }
                            ],
                            resources: {
                                limits: {
                                    memory: "500Mi",
                                    cpu: "0.5"
                                }
                            }
                        },
                        {
                            image: "radondb/radondb-postgres-exporter:v1.1.0",
                            imagePullPolicy: "IfNotPresent",
                            name: "exporter",
                            volumeMounts: [
                                {
                                    name: "data",
                                    mountPath: "/var/lib/postgresql/data"
                                }
                            ],
                            resources: {
                                limits: {
                                    memory: "100Mi",
                                    cpu: "0.1"
                                }
                            }
                        }
                    ]
                },
                volumeClaimTemplates: [
                    {
                        metadata: {
                            name: "data"
                        },
                        spec: {
                            accessModes: [
                                "ReadWriteOnce"
                            ],
                            resources: {
                                requests: {
                                    storage: "1Gi"
                                }
                            }
                        }
                    }
                ]
            },
            postgresql: {
                users: {
                    admin: [],
                    normal: []
                },
                hbas: [
                    "host all all all md5"
                ],
                configs: [
                    "enable_seqscan=on",
                    "autovacuum=true",
                    "autovacuum_analyze_scale_factor=0.05",
                    "autovacuum_vacuum_cost_delay=0",
                    "autovacuum_vacuum_cost_limit=10000",
                    "autovacuum_vacuum_scale_factor=0.02",
                    "bgwriter_delay=10",
                    "bgwriter_flush_after=512kB",
                    "bgwriter_lru_maxpages=1000",
                    "checkpoint_timeout=300",
                    "commit_delay=0",
                    "commit_siblings=5",
                    "cpu_index_tuple_cost=0.005",
                    "cpu_tuple_cost=0.01",
                    "fsync=true",
                    "full_page_writes=true",
                    "idle_in_transaction_session_timeout=86400000",
                    "jit=false",
                    "log_min_duration_statement=10000",
                    "log_min_messages=WARNING",
                    "log_statement=none",
                    "maintenance_work_mem=64MB",
                    "max_connections=100",
                    "max_replication_slots=15",
                    "max_wal_senders=15",
                    "max_worker_processes=20",
                    "port=5432",
                    "random_page_cost=1.1",
                    "seq_page_cost=1",
                    "shared_buffers=128MB",
                    "statement_timeout=0",
                    "synchronous_commit=on",
                    "temp_buffers=1MB",
                    "vacuum_defer_cleanup_age=10000",
                    "wal_compression=false",
                    "wal_level=replica",
                    "wal_writer_delay=10",
                    "wal_writer_flush_after=1MB",
                    "work_mem=4MB"
                ],
                readwriteinstance: {
                    replicas: 2,
                    podspec: {
                        terminationGracePeriodSeconds: 60,
                        containers: [
                            {
                                image: "radondb/radondb-postgresql:12.12-v1.1.0",
                                imagePullPolicy: "IfNotPresent",
                                name: "postgresql",
                                volumeMounts: [
                                    {
                                        name: "data",
                                        mountPath: "/var/lib/postgresql/data"
                                    }
                                ],
                                resources: {
                                    limits: {
                                        memory: "200Mi",
                                        cpu: "0.2"
                                    }
                                }
                            },
                            {
                                image: "radondb/radondb-postgres-exporter:v1.1.0",
                                imagePullPolicy: "IfNotPresent",
                                name: "exporter",
                                volumeMounts: [
                                    {
                                        name: "data",
                                        mountPath: "/var/lib/postgresql/data"
                                    }
                                ],
                                resources: {
                                    limits: {
                                        memory: "100Mi",
                                        cpu: "0.1"
                                    }
                                }
                            }
                        ]
                    },
                    volumeClaimTemplates: [
                        {
                            metadata: {
                                name: "data"
                            },
                            spec: {
                                accessModes: [
                                    "ReadWriteOnce"
                                ],
                                resources: {
                                    requests: {
                                        storage: "1Gi"
                                    }
                                }
                            }
                        }
                    ]
                },
                readonlyinstance: {
                    streaming: "async",
                    replicas: 0,
                    podspec: {
                        terminationGracePeriodSeconds: 60,
                        containers: [
                            {
                                image: "radondb/radondb-postgresql:12.12-v1.1.0",
                                imagePullPolicy: "IfNotPresent",
                                name: "postgresql",
                                volumeMounts: [
                                    {
                                        name: "data",
                                        mountPath: "/var/lib/postgresql/data"
                                    }
                                ],
                                resources: {
                                    limits: {
                                        memory: "200Mi",
                                        cpu: "0.2"
                                    }
                                }
                            },
                            {
                                image: "radondb/radondb-postgres-exporter:v1.1.0",
                                imagePullPolicy: "IfNotPresent",
                                name: "exporter",
                                volumeMounts: [
                                    {
                                        name: "data",
                                        mountPath: "/var/lib/postgresql/data"
                                    }
                                ],
                                resources: {
                                    limits: {
                                        memory: "100Mi",
                                        cpu: "0.1"
                                    }
                                }
                            }
                        ]
                    },
                    volumeClaimTemplates: [
                        {
                            metadata: {
                                name: "data"
                            },
                            spec: {
                                accessModes: [
                                    "ReadWriteOnce"
                                ],
                                resources: {
                                    requests: {
                                        storage: "1Gi"
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        }
    }
};
