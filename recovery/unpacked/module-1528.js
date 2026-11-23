import "./module-15.js";
export const opensearchYaml = {
    resources: {
        apiVersion: "opensearch.opster.io/v1",
        kind: "OpenSearchCluster",
        metadata: {
            name: "cluster"
        },
        spec: {
            general: {
                version: "2.3.0",
                httpPort: 9200,
                vendor: "opensearch",
                serviceName: "cluster"
            },
            dashboards: {
                version: "2.3.0",
                enable: true,
                replicas: 1,
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
            },
            confMgmt: {
                smartScaler: true
            },
            security: {
                config: {
                    securityConfigSecret: {
                        name: "securityconfig-secret"
                    },
                    adminCredentialsSecret: {
                        name: "admin-credentials-secret"
                    }
                },
                tls: {
                    transport: {
                        generate: true
                    },
                    http: {
                        generate: true
                    }
                },
                keyStoreConfig: []
            },
            nodePools: [
                {
                    component: "masters",
                    replicas: 2,
                    diskSize: "50Gi",
                    persistence: {
                        pvc: {
                            storageClass: "csi-qingcloud",
                            accessModes: [
                                "ReadWriteOnce"
                            ]
                        }
                    },
                    additionalConfig: {
                        "node.attr.datatier": "master"
                    },
                    resources: {
                        requests: {
                            memory: "1Gi",
                            cpu: "500m"
                        },
                        limits: {
                            memory: "1Gi",
                            cpu: "500m"
                        }
                    },
                    roles: [
                        "cluster_manager"
                    ]
                },
                {
                    component: "data-node-hot",
                    replicas: 2,
                    diskSize: "30Gi",
                    persistence: {
                        pvc: {
                            storageClass: "csi-qingcloud",
                            accessModes: [
                                "ReadWriteOnce"
                            ]
                        }
                    },
                    additionalConfig: {
                        "node.attr.datatier": "hot"
                    },
                    resources: {
                        requests: {
                            memory: "1Gi",
                            cpu: "500m"
                        },
                        limits: {
                            memory: "1Gi",
                            cpu: "500m"
                        }
                    },
                    roles: [
                        "data"
                    ]
                },
                {
                    component: "data-node-warm",
                    replicas: 2,
                    diskSize: "30Gi",
                    persistence: {
                        pvc: {
                            storageClass: "csi-qingcloud",
                            accessModes: [
                                "ReadWriteOnce"
                            ]
                        }
                    },
                    additionalConfig: {
                        "node.attr.datatier": "warm"
                    },
                    resources: {
                        requests: {
                            memory: "1Gi",
                            cpu: "500m"
                        },
                        limits: {
                            memory: "1Gi",
                            cpu: "500m"
                        }
                    },
                    roles: [
                        "data"
                    ]
                }
            ]
        }
    },
    node: {
        component: "data-node-hot",
        replicas: 2,
        diskSize: "30Gi",
        persistence: {
            pvc: {
                storageClass: "csi-qingcloud",
                accessModes: [
                    "ReadWriteOnce"
                ]
            }
        },
        additionalConfig: {
            "node.attr.datatier": "hot"
        },
        resources: {
            requests: {
                memory: "1Gi",
                cpu: "500m"
            },
            limits: {
                memory: "1Gi",
                cpu: "500m"
            }
        },
        roles: [
            "data"
        ]
    },
    logstash: {
        apiVersion: "opensearch.opster.io/v1",
        kind: "Logstash",
        metadata: {
            name: "logstash-sample"
        },
        spec: {
            replicas: 1,
            config: {
                jvm: "-Xms512m -Xmx512m",
                openSearchInfo: {
                    openSearchCluster: {
                        name: "my-cluster",
                        namespace: "default"
                    },
                    openSearchService: {
                        name: "my-cluster"
                    }
                },
                logstashConfig: [],
                ports: [
                    8080
                ],
                pipelineConfig: {
                    inputs: 'http {\n  host => "0.0.0.0"\n  port => 8080\n}',
                    filters: 'mutate {\n  add_field => { "LogstashHost" => "${HOSTNAME}" }\n}',
                    outputs: null,
                    openSearchIndex: 'index => "logstash-%{+YYYY.MM.dd}"'
                }
            },
            podTemplate: {
                spec: {
                    containers: [
                        {
                            name: "logstash",
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
                        },
                        {
                            name: "exporter",
                            resources: {
                                requests: {
                                    memory: "400Mi",
                                    cpu: "200m"
                                },
                                limits: {
                                    memory: "400Mi",
                                    cpu: "200m"
                                }
                            }
                        }
                    ]
                }
            }
        }
    },
    logstashSecret: {
        apiVersion: "v1",
        kind: "Secret",
        metadata: {
            name: "logstash-credential"
        },
        type: "Opaque",
        data: {
            username: "bG9nc3Rhc2g=",
            password: "bG9nc3Rhc2g="
        }
    },
    adminSecret: {
        apiVersion: "v1",
        kind: "Secret",
        metadata: {
            name: "admin-credentials-secret"
        },
        type: "Opaque",
        data: {
            username: "UmFkb25EQkAxMjM=",
            password: "UmFkb25EQkAxMjM="
        }
    },
    securityConfigSecret: {
        apiVersion: "v1",
        kind: "Secret",
        metadata: {
            name: "securityconfig-secret"
        },
        type: "Opaque",
        stringData: {
            "action_groups.yml": '_meta:\n  type: "actiongroups"\n  config_version: 2',
            "internal_users.yml": '_meta:\n  type: "internalusers"\n  config_version: 2\nroot:\n  hash: "$2y$12$JwL3peIal4VShAgkyZlMG.t1zwcCnPSAJ2E6GHCDoGhZJLkRX11b2"\n  reserved: true\n  hidden: true\n  backend_roles:\n  - "admin"\n  description: "Internal root user for cluster"\nadmin:\n  hash: "$2a$10$ihutvIcl7kp9PF2RFMZeXuZb2RdUpBFR5t4W0KV5LFZylPheworfW"\n  reserved: false\n  backend_roles:\n  - "admin"\n  description: "custom admin user"\ndashboarduser:\n  hash: "$2y$12$o8Uxs2c6T8wzTfOpf1Pxvulqxs6BigWaJhSldWUtRdbDa555GM7F6"\n  reserved: false\n  description: "OpenSearch internal dashboards user"\nlogstash:\n  hash: "$2y$12$sjAmhIfYAJsPJXNm2WI29e/rLX5V.OxV1l8L1An7wO2pz6WX5NIpy"\n  reserved: false\n  description: "OpenSearch internal logstash user"\nprometheus:\n  hash: "$2y$12$wml4GdNlHOos1FgNWk1zSu9sWV2JE0.CkWsLP0YHFPxojW/v2EGeq"\n  reserved: true\n  hidden: true\n  backend_roles:\n  - "admin"\n  description: "OpenSearch internal prometheus user"',
            "nodes_dn.yml": '_meta:\n  type: "nodesdn"\n  config_version: 2',
            "whitelist.yml": '_meta:\n  type: "whitelist"\n  config_version: 2',
            "tenants.yml": '_meta:\n  type: "tenants"\n  config_version: 2',
            "roles_mapping.yml": '_meta:\n  type: "rolesmapping"\n  config_version: 2\nall_access:\n  reserved: false\n  backend_roles:\n  - "admin"\n  description: "Maps admin to all_access"\nown_index:\n  reserved: false\n  users:\n  - "*"\n  description: "Allow full access to an index named like the username"\nreadall:\n  reserved: false\n  backend_roles:\n  - "readall"\nmanage_snapshots:\n  reserved: false\n  backend_roles:\n  - "snapshotrestore"\ndashboard_server:\n  reserved: true\n  users:\n  - "dashboarduser"',
            "roles.yml": "_meta:\n  type: \"roles\"\n  config_version: 2\ndashboard_read_only:\n  reserved: true\nsecurity_rest_api_access:\n  reserved: true\n# Allows users to view monitors, destinations and alerts\nalerting_read_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/alerting/alerts/get'\n    - 'cluster:admin/opendistro/alerting/destination/get'\n    - 'cluster:admin/opendistro/alerting/monitor/get'\n    - 'cluster:admin/opendistro/alerting/monitor/search'\n# Allows users to view and acknowledge alerts\nalerting_ack_alerts:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/alerting/alerts/*'\n# Allows users to use all alerting functionality\nalerting_full_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster_monitor'\n    - 'cluster:admin/opendistro/alerting/*'\n  index_permissions:\n    - index_patterns:\n        - '*'\n      allowed_actions:\n        - 'indices_monitor'\n        - 'indices:admin/aliases/get'\n        - 'indices:admin/mappings/get'\n# Allow users to read Anomaly Detection detectors and results\nanomaly_read_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/ad/detector/info'\n    - 'cluster:admin/opendistro/ad/detector/search'\n    - 'cluster:admin/opendistro/ad/detectors/get'\n    - 'cluster:admin/opendistro/ad/result/search'\n    - 'cluster:admin/opendistro/ad/tasks/search'\n    - 'cluster:admin/opendistro/ad/detector/validate'\n    - 'cluster:admin/opendistro/ad/result/topAnomalies'\n# Allows users to use all Anomaly Detection functionality\nanomaly_full_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster_monitor'\n    - 'cluster:admin/opendistro/ad/*'\n  index_permissions:\n    - index_patterns:\n        - '*'\n      allowed_actions:\n        - 'indices_monitor'\n        - 'indices:admin/aliases/get'\n        - 'indices:admin/mappings/get'\n# Allows users to read Notebooks\nnotebooks_read_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/notebooks/list'\n    - 'cluster:admin/opendistro/notebooks/get'\n# Allows users to all Notebooks functionality\nnotebooks_full_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/notebooks/create'\n    - 'cluster:admin/opendistro/notebooks/update'\n    - 'cluster:admin/opendistro/notebooks/delete'\n    - 'cluster:admin/opendistro/notebooks/get'\n    - 'cluster:admin/opendistro/notebooks/list'\n# Allows users to read observability objects\nobservability_read_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opensearch/observability/get'\n# Allows users to all Observability functionality\nobservability_full_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opensearch/observability/create'\n    - 'cluster:admin/opensearch/observability/update'\n    - 'cluster:admin/opensearch/observability/delete'\n    - 'cluster:admin/opensearch/observability/get'\n# Allows users to read and download Reports\nreports_instances_read_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/reports/instance/list'\n    - 'cluster:admin/opendistro/reports/instance/get'\n    - 'cluster:admin/opendistro/reports/menu/download'\n# Allows users to read and download Reports and Report-definitions\nreports_read_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/reports/definition/get'\n    - 'cluster:admin/opendistro/reports/definition/list'\n    - 'cluster:admin/opendistro/reports/instance/list'\n    - 'cluster:admin/opendistro/reports/instance/get'\n    - 'cluster:admin/opendistro/reports/menu/download'\n# Allows users to all Reports functionality\nreports_full_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/reports/definition/create'\n    - 'cluster:admin/opendistro/reports/definition/update'\n    - 'cluster:admin/opendistro/reports/definition/on_demand'\n    - 'cluster:admin/opendistro/reports/definition/delete'\n    - 'cluster:admin/opendistro/reports/definition/get'\n    - 'cluster:admin/opendistro/reports/definition/list'\n    - 'cluster:admin/opendistro/reports/instance/list'\n    - 'cluster:admin/opendistro/reports/instance/get'\n    - 'cluster:admin/opendistro/reports/menu/download'\n# Allows users to use all asynchronous-search functionality\nasynchronous_search_full_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/asynchronous_search/*'\n  index_permissions:\n    - index_patterns:\n        - '*'\n      allowed_actions:\n        - 'indices:data/read/search*'\n# Allows users to read stored asynchronous-search results\nasynchronous_search_read_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/asynchronous_search/get'\n# Allows user to use all index_management actions - ism policies, rollups, transforms\nindex_management_full_access:\n  reserved: true\n  cluster_permissions:\n    - \"cluster:admin/opendistro/ism/*\"\n    - \"cluster:admin/opendistro/rollup/*\"\n    - \"cluster:admin/opendistro/transform/*\"\n  index_permissions:\n    - index_patterns:\n        - '*'\n      allowed_actions:\n        - 'indices:admin/opensearch/ism/*'\n# Allows users to use all cross cluster replication functionality at leader cluster\ncross_cluster_replication_leader_full_access:\n  reserved: true\n  index_permissions:\n    - index_patterns:\n        - '*'\n      allowed_actions:\n        - \"indices:admin/plugins/replication/index/setup/validate\"\n        - \"indices:data/read/plugins/replication/changes\"\n        - \"indices:data/read/plugins/replication/file_chunk\"\n# Allows users to use all cross cluster replication functionality at follower cluster\ncross_cluster_replication_follower_full_access:\n  reserved: true\n  cluster_permissions:\n    - \"cluster:admin/plugins/replication/autofollow/update\"\n  index_permissions:\n    - index_patterns:\n        - '*'\n      allowed_actions:\n        - \"indices:admin/plugins/replication/index/setup/validate\"\n        - \"indices:data/write/plugins/replication/changes\"\n        - \"indices:admin/plugins/replication/index/start\"\n        - \"indices:admin/plugins/replication/index/pause\"\n        - \"indices:admin/plugins/replication/index/resume\"\n        - \"indices:admin/plugins/replication/index/stop\"\n        - \"indices:admin/plugins/replication/index/update\"\n        - \"indices:admin/plugins/replication/index/status_check\"",
            "config.yml": '_meta:\n  type: "config"\n  config_version: "2"\nconfig:\n  dynamic:\n    http:\n      anonymous_auth_enabled: false\n    authc:\n      basic_internal_auth_domain:\n        http_enabled: true\n        transport_enabled: true\n        order: "4"\n        http_authenticator:\n          type: basic\n          challenge: true\n        authentication_backend:\n          type: intern'
        }
    }
};
