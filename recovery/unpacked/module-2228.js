import "./module-15.js";
export const redisSentinal = {
    resource: {
        apiVersion: "redis.radondb.com/v1beta1",
        kind: "RedisSentinel",
        metadata: {
            name: "redis-sentinel",
            namespace: "redis-sentinel"
        },
        spec: {
            clusterSize: 3,
            kubernetesConfig: {
                redisVersion: "6.2.5",
                image: "radondb/redis:v6.2.5",
                imagePullPolicy: "Always",
                resources: {
                    requests: {
                        cpu: "101m",
                        memory: "128Mi"
                    },
                    limits: {
                        cpu: "101m",
                        memory: "128Mi"
                    }
                }
            },
            redisExporter: {
                enabled: true,
                image: "radondb/redis-exporter:v1.44.0",
                imagePullPolicy: "Always",
                resources: {
                    requests: {
                        cpu: "100m",
                        memory: "128Mi"
                    },
                    limits: {
                        cpu: "100m",
                        memory: "128Mi"
                    }
                }
            },
            redisReplica: {
                replicas: 3,
                redisConfig: {
                    additionalRedisConfig: "redis-sentinel-external-config"
                },
                affinity: {
                    podAntiAffinity: {
                        preferredDuringSchedulingIgnoredDuringExecution: [
                            {
                                podAffinityTerm: {
                                    labelSelector: {
                                        matchExpressions: [
                                            {
                                                key: "redis.radondb.com/name",
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
            },
            aclConfig: {
                aclFile: "redis-sentinel-acl-config"
            },
            redisSentinel: {
                replicas: 3,
                sentinelConfig: {
                    quorum: 2,
                    parallelSyncs: 3
                },
                resources: {
                    requests: {
                        cpu: "100m",
                        memory: "128Mi"
                    },
                    limits: {
                        cpu: "100m",
                        memory: "128Mi"
                    }
                },
                affinity: {
                    podAntiAffinity: {
                        preferredDuringSchedulingIgnoredDuringExecution: [
                            {
                                podAffinityTerm: {
                                    labelSelector: {
                                        matchExpressions: [
                                            {
                                                key: "redis.radondb.com/name",
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
            },
            storage: {
                volumeClaimTemplate: {
                    spec: {
                        storageClassName: "standard",
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
            }
        }
    },
    externalConfig: {
        apiVersion: "v1",
        kind: "ConfigMap",
        metadata: {
            namespace: "redis-sentinel",
            name: "redis-sentinel-external-config"
        },
        data: {
            "redis-external.conf": "aclfile /etc/redis/acl.conf.d/aclfile.conf\ntcp-keepalive 400\nslowlog-max-len 158\nstream-node-max-bytes 2048\nio-threads 1\nio-threads-do-reads no\nmaxmemory 0"
        }
    },
    secret: {
        apiVersion: "v1",
        kind: "Secret",
        metadata: {
            name: "redis-secret-password-secret",
            namespace: "redis-sentinel"
        },
        type: "Opaque",
        data: {
            password: "bWd3MjE2ODAwMA=="
        }
    },
    aclConfig: {
        apiVersion: "v1",
        kind: "ConfigMap",
        metadata: {
            namespace: "redis-sentinel",
            name: "redis-sentinel-acl-config"
        },
        data: {
            "aclfile.conf": "user radondb on >radondb123@ ~* &* +@all"
        }
    }
};
export const redisCluster = {
    resource: {
        apiVersion: "redis.radondb.com/v1beta1",
        kind: "RedisCluster",
        metadata: {
            name: "redis-cluster",
            namespace: "redis-cluster"
        },
        spec: {
            clusterSize: 3,
            kubernetesConfig: {
                redisVersion: "6.2.5",
                image: "radondb/redis:v6.2.5",
                imagePullPolicy: "IfNotPresent",
                resources: {
                    requests: {
                        cpu: "101m",
                        memory: "128Mi"
                    },
                    limits: {
                        cpu: "101m",
                        memory: "128Mi"
                    }
                }
            },
            redisExporter: {
                enabled: true,
                image: "radondb/redis-exporter:v1.44.0",
                imagePullPolicy: "IfNotPresent",
                resources: {
                    requests: {
                        cpu: "100m",
                        memory: "128Mi"
                    },
                    limits: {
                        cpu: "100m",
                        memory: "128Mi"
                    }
                }
            },
            redisLeader: {
                replicas: 3,
                redisConfig: {
                    additionalRedisConfig: "redis-cluster-external-config"
                },
                affinity: {
                    podAntiAffinity: {
                        preferredDuringSchedulingIgnoredDuringExecution: [
                            {
                                podAffinityTerm: {
                                    labelSelector: {
                                        matchExpressions: [
                                            {
                                                key: "redis.radondb.com/name",
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
            },
            redisFollower: {
                replicas: 3,
                redisConfig: {
                    additionalRedisConfig: "redis-cluster-external-config"
                },
                affinity: {
                    podAntiAffinity: {
                        preferredDuringSchedulingIgnoredDuringExecution: [
                            {
                                podAffinityTerm: {
                                    labelSelector: {
                                        matchExpressions: [
                                            {
                                                key: "redis.radondb.com/name",
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
            },
            aclConfig: {
                aclFile: "redis-cluster-acl-config"
            },
            storage: {
                volumeClaimTemplate: {
                    spec: {
                        storageClassName: "csi-standard",
                        accessModes: [
                            "ReadWriteOnce"
                        ],
                        resources: {
                            requests: {
                                storage: "200Mi"
                            }
                        }
                    }
                }
            },
            predixyExporter: {
                enabled: true,
                image: "radondb/predixy-exporter:v1.0.0",
                imagePullPolicy: "IfNotPresent",
                resources: {
                    requests: {
                        cpu: "100m",
                        memory: "128Mi"
                    },
                    limits: {
                        cpu: "100m",
                        memory: "128Mi"
                    }
                }
            },
            redisProxy: {
                enabled: false,
                replicas: 3,
                image: "radondb/predixy:v1.0.5",
                imagePullPolicy: "IfNotPresent",
                resources: {
                    requests: {
                        cpu: "101m",
                        memory: "128Mi"
                    },
                    limits: {
                        cpu: "101m",
                        memory: "128Mi"
                    }
                },
                affinity: {
                    podAntiAffinity: {
                        preferredDuringSchedulingIgnoredDuringExecution: [
                            {
                                podAffinityTerm: {
                                    labelSelector: {
                                        matchExpressions: [
                                            {
                                                key: "redis.radondb.com/name",
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
                },
                predixyConfigParams: {
                    clusterName: "redis-cluster",
                    workerThreads: 2,
                    clientTimeout: 0,
                    bufSize: 1048576,
                    masterReadPriority: 100,
                    slaveReadPriority: 0,
                    refreshInterval: 1,
                    serverTimeout: 3,
                    serverFailureLimit: 10,
                    serverRetryTimeout: 5,
                    keepAlive: 120
                }
            }
        }
    },
    externalConfig: {
        apiVersion: "v1",
        kind: "ConfigMap",
        metadata: {
            namespace: "redis-cluster",
            name: "redis-cluster-external-config"
        },
        data: {
            "redis-external.conf": 'maxmemory 128mb\nmaxmemory-policy volatile-lru\nactiverehashing yes\nappendonly yes\nappendfsync everysec\ntcp-keepalive 400\ncluster-node-timeout 15000\nslowlog-max-len 128\nstream-node-max-bytes 2048\nmaxclients 102400\nlatency-monitor-threshold 0\nmaxmemory-samples 3\nmin-slaves-max-lag 10\nmin-slaves-to-write 0\nno-appendfsync-on-rewrite no\nnotify-keyspace-events ""\nrepl-backlog-size 1mb\nrepl-backlog-ttl 3600\nrepl-timeout 60\nset-max-intset-entries 512\nslowlog-log-slower-than -1\nslowlog-max-len 128\nhash-max-ziplist-entries 512\nhash-max-ziplist-value 64\nzset-max-ziplist-entries 512\nzset-max-ziplist-value 64\nlua-time-limit 5000\nio-threads 1\nio-threads-do-reads no\nlogfile logfile\n'
        }
    },
    secret: {
        apiVersion: "v1",
        kind: "Secret",
        metadata: {
            name: "redis-secret-password-secret",
            namespace: "redis-cluster"
        },
        type: "Opaque",
        data: {
            password: "bWd3MjE2ODAwMA=="
        }
    },
    aclConfig: {
        apiVersion: "v1",
        kind: "ConfigMap",
        metadata: {
            namespace: "redis-cluster",
            name: "redis-cluster-acl-config"
        },
        data: {
            "aclfile.conf": "user radondb on >radondb123@ ~* &* +@all"
        }
    }
};
