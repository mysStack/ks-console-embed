import "./module-15.js";
export const eckYaml = {
    resources: {
        apiVersion: "elasticsearch.k8s.elastic.co/v1",
        kind: "Elasticsearch",
        metadata: {
            name: "quickstart"
        },
        spec: {
            version: "7.17.5",
            nodeSets: [
                {
                    name: "master",
                    count: 3,
                    config: {
                        "node.roles": [
                            "master"
                        ]
                    },
                    podTemplate: {
                        spec: {
                            initContainers: [
                                {
                                    name: "sysctl",
                                    securityContext: {
                                        privileged: true,
                                        runAsUser: 0
                                    },
                                    command: [
                                        "sh",
                                        "-c",
                                        "sysctl -w vm.max_map_count=262144"
                                    ]
                                }
                            ],
                            containers: [
                                {
                                    name: "elasticsearch",
                                    resources: {
                                        limits: {
                                            memory: "8Gi",
                                            cpu: 2
                                        },
                                        requests: {
                                            memory: "8Gi",
                                            cpu: 2
                                        }
                                    },
                                    env: [
                                        {
                                            name: "ES_JAVA_OPTS",
                                            value: "-Xms4g -Xmx4g"
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    volumeClaimTemplates: [
                        {
                            metadata: {
                                name: "elasticsearch-data"
                            },
                            spec: {
                                accessModes: [
                                    "ReadWriteOnce"
                                ],
                                resources: {
                                    requests: {
                                        storage: "20Gi"
                                    }
                                },
                                storageClassName: "csi-high-capacity"
                            }
                        }
                    ]
                },
                {
                    name: "hot",
                    count: 2,
                    config: {
                        "node.roles": [
                            "data_hot",
                            "data_content"
                        ]
                    },
                    podTemplate: {
                        spec: {
                            initContainers: [
                                {
                                    name: "sysctl",
                                    securityContext: {
                                        privileged: true,
                                        runAsUser: 0
                                    },
                                    command: [
                                        "sh",
                                        "-c",
                                        "sysctl -w vm.max_map_count=262144"
                                    ]
                                }
                            ],
                            containers: [
                                {
                                    name: "elasticsearch",
                                    resources: {
                                        limits: {
                                            memory: "8Gi",
                                            cpu: 2
                                        },
                                        requests: {
                                            memory: "8Gi",
                                            cpu: 2
                                        }
                                    },
                                    env: [
                                        {
                                            name: "ES_JAVA_OPTS",
                                            value: "-Xms4g -Xmx4g"
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    volumeClaimTemplates: [
                        {
                            metadata: {
                                name: "elasticsearch-data"
                            },
                            spec: {
                                accessModes: [
                                    "ReadWriteOnce"
                                ],
                                resources: {
                                    requests: {
                                        storage: "40Gi"
                                    }
                                },
                                storageClassName: "csi-high-capacity"
                            }
                        }
                    ]
                },
                {
                    name: "warm",
                    count: 0,
                    config: {
                        "node.roles": [
                            "data_warm"
                        ]
                    },
                    podTemplate: {
                        spec: {
                            initContainers: [
                                {
                                    name: "sysctl",
                                    securityContext: {
                                        privileged: true,
                                        runAsUser: 0
                                    },
                                    command: [
                                        "sh",
                                        "-c",
                                        "sysctl -w vm.max_map_count=262144"
                                    ]
                                }
                            ],
                            containers: [
                                {
                                    name: "elasticsearch",
                                    resources: {
                                        limits: {
                                            memory: "8Gi",
                                            cpu: 2
                                        },
                                        requests: {
                                            memory: "8Gi",
                                            cpu: 2
                                        }
                                    },
                                    env: [
                                        {
                                            name: "ES_JAVA_OPTS",
                                            value: "-Xms4g -Xmx4g"
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    volumeClaimTemplates: [
                        {
                            metadata: {
                                name: "elasticsearch-data"
                            },
                            spec: {
                                accessModes: [
                                    "ReadWriteOnce"
                                ],
                                resources: {
                                    requests: {
                                        storage: "40Gi"
                                    }
                                },
                                storageClassName: "csi-high-capacity"
                            }
                        }
                    ]
                },
                {
                    name: "cold",
                    count: 0,
                    config: {
                        "node.roles": [
                            "data_cold"
                        ]
                    },
                    podTemplate: {
                        spec: {
                            initContainers: [
                                {
                                    name: "sysctl",
                                    securityContext: {
                                        privileged: true,
                                        runAsUser: 0
                                    },
                                    command: [
                                        "sh",
                                        "-c",
                                        "sysctl -w vm.max_map_count=262144"
                                    ]
                                }
                            ],
                            containers: [
                                {
                                    name: "elasticsearch",
                                    resources: {
                                        limits: {
                                            memory: "8Gi",
                                            cpu: 2
                                        },
                                        requests: {
                                            memory: "8Gi",
                                            cpu: 2
                                        }
                                    },
                                    env: [
                                        {
                                            name: "ES_JAVA_OPTS",
                                            value: "-Xms4g -Xmx4g"
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    volumeClaimTemplates: [
                        {
                            metadata: {
                                name: "elasticsearch-data"
                            },
                            spec: {
                                accessModes: [
                                    "ReadWriteOnce"
                                ],
                                resources: {
                                    requests: {
                                        storage: "40Gi"
                                    }
                                },
                                storageClassName: "csi-high-capacity"
                            }
                        }
                    ]
                }
            ]
        }
    },
    kibana: {
        apiVersion: "kibana.k8s.elastic.co/v1",
        kind: "Kibana",
        metadata: {
            name: "quickstart"
        },
        spec: {
            version: "7.17.5",
            count: 1,
            elasticsearchRef: {
                name: "quickstart",
                namespace: "default"
            },
            podTemplate: {
                spec: {
                    containers: [
                        {
                            name: "kibana",
                            resources: {
                                requests: {
                                    cpu: "1000m",
                                    memory: "2Gi"
                                },
                                limits: {
                                    cpu: "2000m",
                                    memory: "4Gi"
                                }
                            }
                        }
                    ]
                }
            }
        }
    }
};
