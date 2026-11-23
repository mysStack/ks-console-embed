import "./module-15.js";
export const mysqlYaml = {
    resources: {
        apiVersion: "mysql.radondb.com/v1alpha1",
        kind: "MysqlCluster",
        metadata: {
            name: "sample",
            namespace: "default"
        },
        spec: {
            replicas: 3,
            mysqlVersion: "5.7",
            backupSecretName: "$DMP-MANAGED-S3-SECRET$",
            mysqlOpts: {
                rootPassword: "",
                image: "percona/percona-server:5.7.39",
                rootHost: "localhost",
                user: "radondb_usr",
                password: "RadonDB@123",
                database: "radondb",
                initTokuDB: true,
                mysqlConf: {},
                resources: {
                    requests: {
                        cpu: "100m",
                        memory: "256Mi"
                    },
                    limits: {
                        cpu: "500m",
                        memory: "1Gi"
                    }
                }
            },
            xenonOpts: {
                image: "radondb/xenon:v2.3.0",
                admitDefeatHearbeatCount: 5,
                electionTimeout: 10000,
                resources: {
                    requests: {
                        cpu: "50m",
                        memory: "128Mi"
                    },
                    limits: {
                        cpu: "100m",
                        memory: "256Mi"
                    }
                }
            },
            metricsOpts: {
                enabled: true,
                image: "prom/mysqld-exporter:v0.12.1",
                resources: {
                    requests: {
                        cpu: "10m",
                        memory: "32Mi"
                    },
                    limits: {
                        cpu: "100m",
                        memory: "128Mi"
                    }
                }
            },
            podPolicy: {
                imagePullPolicy: "IfNotPresent",
                sidecarImage: "radondb/mysql-sidecar:v2.3.0",
                busyboxImage: "busybox:1.32",
                slowLogTail: false,
                auditLogTail: false,
                labels: {},
                annotations: {},
                affinity: {
                    podAntiAffinity: {
                        requiredDuringSchedulingIgnoredDuringExecution: [
                            {
                                labelSelector: {
                                    matchExpressions: [
                                        {
                                            key: "mysql.radondb.com/cluster",
                                            operator: "In",
                                            values: [
                                                "mysql"
                                            ]
                                        }
                                    ]
                                },
                                topologyKey: "kubernetes.io/hostname"
                            }
                        ]
                    }
                },
                priorityClassName: "",
                schedulerName: "",
                extraResources: {
                    requests: {
                        cpu: "100m",
                        memory: "500Mi"
                    }
                }
            },
            persistence: {
                enabled: true,
                accessModes: [
                    "ReadWriteOnce"
                ],
                size: "10Gi"
            }
        }
    }
};
