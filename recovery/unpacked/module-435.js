import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import module31 from "./module-31.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module242 from "./module-242.js";
import { strategyMap } from "./module-468.js";
import { MODULE_KIND_MAP } from "./module-72.js";
const p = {
    deployments: function(e) {
        return {
            apiVersion: "apps/v1",
            kind: "Deployment",
            metadata: {
                namespace: e.namespace,
                labels: {}
            },
            spec: {
                replicas: 1,
                selector: {
                    matchLabels: {}
                },
                template: {
                    metadata: {
                        labels: {}
                    },
                    spec: {
                        containers: [],
                        serviceAccount: "default"
                    }
                },
                strategy: {
                    type: "RollingUpdate",
                    rollingUpdate: {
                        maxUnavailable: "25%",
                        maxSurge: "25%"
                    }
                }
            }
        };
    },
    deploymentsSchedule: function({ data, includeClusters }) {
        const r = module26(data, "metadata.namespace");
        const o = module136(data);
        module242(o, "apiVersion");
        module242(o, "kind");
        module242(o, "metadata.name");
        module242(o, "metadata.annotations");
        const clusters = {};
        includeClusters.forEach((e)=>{
            clusters[e] = {
                weight: 1
            };
        });
        return {
            apiVersion: "scheduling.kubefed.io/v1alpha1",
            kind: "ReplicaSchedulingPreference",
            metadata: {
                namespace: r
            },
            spec: {
                rebalance: true,
                targetKind: "FederatedDeployment",
                totalReplicas: "",
                clusters
            }
        };
    },
    daemonsets: function(e) {
        return {
            apiVersion: "apps/v1",
            kind: "DaemonSet",
            metadata: {
                namespace: e.namespace,
                labels: {}
            },
            spec: {
                replicas: 1,
                selector: {
                    matchLabels: {}
                },
                template: {
                    metadata: {
                        labels: {}
                    },
                    spec: {
                        containers: [],
                        serviceAccount: "default"
                    }
                },
                updateStrategy: {
                    type: "RollingUpdate",
                    rollingUpdate: {
                        maxUnavailable: "20%"
                    }
                },
                minReadySeconds: 0
            }
        };
    },
    statefulsets: function(e) {
        return {
            apiVersion: "apps/v1",
            kind: "StatefulSet",
            metadata: {
                namespace: e.namespace,
                labels: {}
            },
            spec: {
                replicas: 1,
                selector: {
                    matchLabels: {}
                },
                template: {
                    metadata: {
                        labels: {}
                    },
                    spec: {
                        containers: [],
                        serviceAccount: "default"
                    }
                },
                updateStrategy: {
                    type: "RollingUpdate",
                    rollingUpdate: {
                        partition: 0
                    }
                }
            }
        };
    },
    jobs: function(e) {
        return {
            apiVersion: "batch/v1",
            kind: "Job",
            metadata: {
                namespace: e.namespace,
                labels: {}
            },
            spec: {
                template: {
                    metadata: {
                        labels: {}
                    },
                    spec: {
                        containers: [],
                        restartPolicy: "Never",
                        serviceAccount: "default"
                    }
                }
            }
        };
    },
    cronjobs: function(e) {
        return {
            apiVersion: "batch/v1",
            kind: "CronJob",
            metadata: {
                namespace: e.namespace,
                labels: {}
            },
            spec: {
                concurrencyPolicy: "Forbid",
                jobTemplate: {
                    metadata: {
                        labels: {}
                    },
                    spec: {
                        template: {
                            spec: {
                                containers: [],
                                restartPolicy: "Never",
                                serviceAccount: "default"
                            }
                        }
                    }
                }
            }
        };
    },
    services: function({ namespace, selector }) {
        return {
            apiVersion: "v1",
            kind: "Service",
            metadata: {
                namespace,
                labels: {}
            },
            spec: {
                sessionAffinity: "None",
                selector: selector === undefined ? {} : selector
            }
        };
    },
    ingresses: function(e) {
        return {
            apiVersion: "networking.k8s.io/v1",
            kind: "Ingress",
            metadata: {
                namespace: e.namespace,
                labels: {}
            },
            spec: {
                rules: []
            }
        };
    },
    configmaps: function(e) {
        return {
            apiVersion: "v1",
            kind: "ConfigMap",
            metadata: {
                namespace: e.namespace,
                labels: {}
            }
        };
    },
    serviceaccounts: function(e) {
        return {
            apiVersion: "v1",
            kind: "ServiceAccount",
            metadata: {
                namespace: e.namespace,
                labels: {}
            }
        };
    },
    secrets: function(e) {
        return {
            apiVersion: "v1",
            kind: "Secret",
            metadata: {
                namespace: e.namespace,
                labels: {}
            },
            type: "Opaque"
        };
    },
    hpa: function({ name, namespace, target }) {
        return {
            apiVersion: "autoscaling/v2beta2",
            kind: "HorizontalPodAutoscaler",
            metadata: {
                name,
                namespace
            },
            spec: {
                scaleTargetRef: {
                    apiVersion: target.apiVersion,
                    kind: target.kind,
                    name
                }
            }
        };
    },
    roles: function(e) {
        return {
            apiVersion: "iam.kubesphere.io/v1beta1",
            kind: "Role",
            metadata: {
                namespace: e.namespace
            },
            rules: []
        };
    },
    clusterroles: function() {
        return {
            apiVersion: "iam.kubesphere.io/v1beta1",
            kind: "ClusterRole",
            rules: []
        };
    },
    globalroles: function() {
        return {
            apiVersion: "iam.kubesphere.io/v1beta1",
            kind: "GlobalRole",
            rules: []
        };
    },
    workspaceroles: function() {
        return {
            apiVersion: "iam.kubesphere.io/v1beta1",
            kind: "WorkspaceRole",
            rules: []
        };
    },
    volumes: function(e) {
        return {
            apiVersion: "v1",
            kind: "PersistentVolumeClaim",
            metadata: {
                namespace: e.namespace
            },
            spec: {
                accessModes: [
                    "ReadWriteOnce"
                ],
                resources: {
                    requests: {
                        storage: "10Gi"
                    }
                }
            }
        };
    },
    volumesnapshotclass: function() {
        return {
            apiVersion: "snapshot.storage.k8s.io/v1",
            deletionPolicy: "Delete",
            driver: "",
            kind: "VolumeSnapshotClass",
            metadata: {
                name: "",
                annotations: {}
            }
        };
    },
    storageclasses: function() {
        return {
            apiVersion: "storage.k8s.io/v1",
            kind: "StorageClass",
            metadata: {
                name: "",
                annotations: {}
            },
            parameters: {},
            reclaimPolicy: "Delete",
            allowVolumeExpansion: "false",
            volumeBindingMode: "WaitForFirstConsumer"
        };
    },
    accessors: function(e) {
        return {
            apiVersion: "storage.kubesphere.io/v1alpha1",
            kind: "Accessor",
            metadata: {
                name: `${e}-accessor`
            },
            spec: {
                storageClassName: `${e}-disabled`,
                namespaceSelector: {
                    fieldSelector: [
                        {
                            fieldExpressions: [
                                {
                                    field: "Name",
                                    operator: "In",
                                    values: []
                                }
                            ]
                        }
                    ]
                },
                workspaceSelector: {
                    fieldSelector: [
                        {
                            fieldExpressions: [
                                {
                                    field: "Name",
                                    operator: "In",
                                    values: []
                                }
                            ]
                        }
                    ]
                }
            }
        };
    },
    project: function() {
        return {
            apiVersion: "v1",
            kind: "Namespace",
            metadata: {}
        };
    },
    limitRange: function() {
        return {
            apiVersion: "v1",
            kind: "LimitRange",
            metadata: {},
            spec: {
                limits: [
                    {
                        default: {
                            cpu: "500m",
                            memory: "500Mi"
                        },
                        defaultRequest: {
                            cpu: "10m",
                            memory: "10Mi"
                        },
                        type: "Container"
                    }
                ]
            }
        };
    },
    "alert-policies": function({ workspace, namespace } = {}) {
        return {
            alert: {
                alert_name: ""
            },
            resource_filter: {
                workspace,
                namespace,
                resource_type: "",
                rs_type_id: "",
                rs_filter_param: {}
            },
            policy: {
                creator: "",
                rs_type_id: "",
                policy_name: "",
                policy_description: "",
                policy_config: {
                    critical: {
                        repeat_type: "fixed-minutes",
                        repeat_interval_initvalue: 30,
                        max_send_count: 2147483648
                    },
                    major: {
                        repeat_type: "fixed-minutes",
                        repeat_interval_initvalue: 120,
                        max_send_count: 5
                    },
                    minor: {
                        repeat_type: "not-repeat",
                        repeat_interval_initvalue: 0,
                        max_send_count: 1
                    }
                },
                available_start_time: "00:00:00",
                available_end_time: "23:59:00"
            },
            rules: [],
            action: {
                action_name: "",
                nf_address_list_id: ""
            }
        };
    },
    rules: function({ namespace, multi } = {}) {
        const r = {
            apiVersion: "alerting.kubesphere.io/v2beta1",
            kind: multi ? "GlobalRuleGroup" : namespace ? "RuleGroup" : "ClusterRuleGroup",
            metadata: {
                name: "",
                labels: {
                    "alerting.kubesphere.io/enable": "true"
                }
            },
            annotations: {
                aliasName: "",
                description: ""
            },
            spec: {
                interval: "",
                partial_response_strategy: "",
                rules: []
            }
        };
        if (namespace) {
            module74(r, "metadata.namespace", namespace);
        }
        return r;
    },
    applications: function(e) {
        return {
            apiVersion: "app.k8s.io/v1beta1",
            kind: "Application",
            metadata: {
                name: "",
                namespace: e.namespace,
                labels: {
                    "app.kubernetes.io/version": "v1"
                }
            },
            spec: {
                selector: {
                    matchLabels: {
                        "app.kubernetes.io/version": "v1"
                    }
                },
                addOwnerRef: true
            }
        };
    },
    strategies: function(e) {
        const e_type = e.type;
        return {
            kind: "Strategy",
            apiVersion: "servicemesh.kubesphere.io/v1alpha2",
            metadata: {
                namespace: e.namespace,
                name: ""
            },
            spec: {
                type: e_type,
                strategyPolicy: strategyMap.wait
            }
        };
    },
    strategyPolicy: function({ name, namespace, selector }) {
        return {
            kind: "ServicePolicy",
            apiVersion: "servicemesh.kubesphere.io/v1alpha2",
            metadata: {
                name,
                namespace,
                labels: selector
            },
            spec: {
                selector: {
                    matchForLables: selector
                },
                template: {
                    labels: selector,
                    spec: {
                        host: name
                    }
                }
            }
        };
    },
    workspaces: function() {
        return {
            apiVersion: "tenant.kubesphere.io/v1beta1",
            kind: "WorkspaceTemplate",
            metadata: {
                name: ""
            }
        };
    },
    s2ibuilders: function(e) {
        const { namespace, isS2i } = e;
        const r = isS2i === undefined || isS2i;
        const e_languageType = e.languageType;
        return {
            apiVersion: "devops.kubesphere.io/v1alpha1",
            kind: "S2iBuilder",
            metadata: {
                labels: {
                    "controller-tools.k8s.io": "1.0",
                    "s2i-type.kubesphere.io": r ? "s2i" : "b2i"
                },
                annotations: {
                    languageType: e_languageType === undefined ? "" : e_languageType
                },
                name: "",
                namespace
            },
            spec: {
                config: {
                    replicas: 0,
                    export: true,
                    outputBuildResult: true,
                    builderPullPolicy: "if-not-present",
                    ...!r ? {
                        isBinaryURL: true
                    } : {}
                }
            }
        };
    },
    b2iBuilders: function(e) {
        const e_namespace = e.namespace;
        return {
            apiVersion: "devops.kubesphere.io/v1alpha1",
            kind: "S2iBinary",
            metadata: {
                labels: {
                    "controller-tools.k8s.io": "1.0"
                },
                name: e.name,
                namespace: e_namespace
            }
        };
    },
    "volume-snapshots": function() {
        return {
            apiVersion: "snapshot.storage.k8s.io/v1alpha1",
            kind: "VolumeSnapshot",
            metadata: {
                name: ""
            },
            spec: {
                source: {
                    kind: "PersistentVolumeClaim"
                }
            }
        };
    },
    namespacenetworkpolicies: function(e) {
        return {
            apiVersion: "network.kubesphere.io/v1alpha1",
            kind: "NamespaceNetworkPolicy",
            metadata: {
                namespace: e.namespace
            },
            spec: {}
        };
    },
    dashboards: function(e) {
        return {
            apiVersion: "monitoring.kubesphere.io/v1alpha1",
            kind: "Dashboard",
            metadata: {
                namespace: e.namespace
            },
            spec: {}
        };
    },
    clusterdashboards: function() {
        return {
            apiVersion: "monitoring.kubesphere.io/v1alpha1",
            kind: "ClusterDashboard",
            metadata: {},
            spec: {}
        };
    },
    federated: function({ data, clusters, kind }) {
        const o = module26(data, "metadata.namespace");
        const placement = {
            clusters: clusters.map((name)=>({
                    name
                }))
        };
        const overrides = clusters.map((clusterName)=>({
                clusterName,
                clusterOverrides: []
            }));
        const template = module136(data);
        module242(template, "apiVersion");
        module242(template, "kind");
        module242(template, "metadata.name");
        module242(template, "metadata.annotations");
        return {
            apiVersion: "types.kubefed.io/v1beta1",
            kind: `Federated${kind}`,
            metadata: {
                namespace: o
            },
            spec: {
                placement,
                template,
                overrides
            }
        };
    },
    servicemonitors: function(e) {
        return {
            apiVersion: "monitoring.coreos.com/v1",
            kind: "ServiceMonitor",
            metadata: {
                name: e.name,
                namespace: e.namespace
            },
            spec: {}
        };
    },
    workspacerolebinding: function(e) {
        return {
            kind: "WorkspaceRoleBinding",
            apiVersion: "iam.kubesphere.io/v1beta1",
            subjects: [
                {
                    kind: "Group",
                    apiGroup: "rbac.authorization.k8s.io",
                    name: e.name
                }
            ],
            roleRef: {
                apiGroup: "iam.kubesphere.io/v1beta1",
                kind: "WorkspaceRole",
                name: e.role
            }
        };
    },
    rolebinding: function(e) {
        return {
            subjects: [
                {
                    kind: "Group",
                    apiGroup: "rbac.authorization.k8s.io",
                    name: e.name
                }
            ],
            roleRef: {
                apiGroup: "rbac.authorization.k8s.io",
                kind: "Role",
                name: e.role
            }
        };
    },
    globalsecret: function(e) {
        return {
            apiVersion: "v1",
            kind: "Secret",
            metadata: {
                name: e.name
            },
            type: "Opaque"
        };
    },
    notificationconfigs: function(e) {
        return {
            apiVersion: "notification.kubesphere.io/v2beta2",
            kind: "Config",
            metadata: {
                name: e.name
            },
            spec: {}
        };
    },
    notificationreceivers: function({ name, type }) {
        return {
            apiVersion: "notification.kubesphere.io/v2beta2",
            kind: "Receiver",
            metadata: {
                name
            },
            spec: module31({}, type, {
                enabled: false
            })
        };
    },
    gateways: function() {
        return {
            kind: "Gateway",
            apiVersion: "gateway.kubesphere.io/v2alpha1",
            metadata: {
                name: "",
                namespace: "",
                labels: {
                    "kubesphere.io/gateway-type": "project"
                }
            },
            spec: {}
        };
    },
    notificationVerify: function({ user }) {
        return {
            config: {
                apiVersion: "notification.kubesphere.io/v2beta2",
                kind: "Config",
                metadata: {
                    name: "test-user-config",
                    labels: {
                        app: "notification-manager",
                        type: user ? "tenant" : "default",
                        user
                    }
                },
                spec: {}
            },
            receiver: {
                apiVersion: "notification.kubesphere.io/v2beta2",
                kind: "Receiver",
                metadata: {
                    name: "test-user-receiver",
                    labels: {
                        app: "notification-manager",
                        type: user ? "tenant" : "global",
                        user
                    }
                },
                spec: {}
            }
        };
    },
    configurations: function(e) {
        return {
            apiVersion: "springcloud.kubesphere.io/v1alpha1",
            kind: "Configuration",
            metadata: {
                name: e.name,
                namespace: e.namespace,
                annotations: {
                    "springcloud.kubesphere.io/group": "DEFAULT_GROUP"
                }
            },
            data: {},
            spec: {}
        };
    },
    microservicegateways: function(e) {
        return {
            apiVersion: "springcloud.kubesphere.io/v1alpha1",
            kind: "Gateway",
            metadata: {
                name: e.name,
                namespace: e.namespace,
                labels: {
                    "springcloud.kubesphere.io/is-default-gateway": "true"
                }
            },
            spec: {
                service: {
                    type: ""
                }
            }
        };
    },
    servicerouting: function(e) {
        return {
            apiVersion: "springcloud.kubesphere.io/v1alpha1",
            kind: "GatewayRouteConfig",
            metadata: {
                name: e.name,
                namespace: e.namespace
            },
            spec: {
                gateway: e.gateway
            }
        };
    },
    cds: function() {
        return {
            kind: "Application",
            apiVersion: "gitops.kubesphere.io/v1alpha1",
            metadata: {}
        };
    },
    codeRepos: function(e) {
        return {
            kind: "GitRepository",
            apiVersion: "devops.kubesphere.io/v1alpha3",
            metadata: {
                name: "",
                namespace: e.namespace
            },
            spec: {}
        };
    },
    silences: function(e) {
        return {
            type: 1,
            condition: 1,
            timeType: 1,
            isCron: false,
            cron: "",
            week: [],
            month: [],
            dateRange: [],
            timeRange: [],
            ...e
        };
    },
    apptemplates: function(e) {
        return {
            apiVersion: "apps.edgewize.io/v1alpha1",
            kind: "AppTemplate",
            metadata: {
                name: "",
                labels: {
                    "kubesphere.io/workspace": e.workspace
                }
            },
            spec: {
                replicas: 1,
                template: {
                    metadata: {
                        labels: {}
                    },
                    spec: {
                        containers: [],
                        serviceAccount: "default"
                    }
                },
                strategy: {
                    type: "RollingUpdate",
                    rollingUpdate: {
                        maxUnavailable: "25%",
                        maxSurge: "25%"
                    }
                }
            }
        };
    },
    apptemplateversions: function({ name = "", version = "" }) {
        return {
            kind: "AppTemplateVersion",
            apiVersion: "apps.edgewize.io/v1alpha1",
            metadata: {
                labels: {
                    "apps.edgewize.io/apptemplate": name,
                    "apps.edgewize.io/apptemplateversion": version
                },
                name: version && name ? `${name}-${version}` : ""
            },
            spec: {
                version,
                replicas: 1,
                template: {
                    metadata: {
                        labels: {}
                    },
                    spec: {
                        containers: [],
                        serviceAccount: "default"
                    }
                },
                strategy: {
                    type: "RollingUpdate",
                    rollingUpdate: {
                        maxUnavailable: "25%",
                        maxSurge: "25%"
                    }
                }
            }
        };
    },
    edgeappsets: function(e) {
        const e_namespace = e.namespace;
        const n = e_namespace === undefined ? "" : e_namespace;
        const e_name = e.name;
        return {
            kind: "EdgeAppSet",
            apiVersion: "apps.edgewize.io/v1alpha1",
            metadata: {
                name: e_name === undefined ? "" : e_name,
                namespace: n
            },
            spec: {
                appTemplateName: "",
                version: e.version,
                deploymentTemplate: {
                    spec: {
                        replicas: 1,
                        selector: {
                            matchLabels: {
                                app: ""
                            }
                        },
                        template: {
                            metadata: {
                                labels: {
                                    app: ""
                                }
                            },
                            spec: {
                                containers: []
                            }
                        }
                    }
                },
                nodeSelectors: []
            }
        };
    },
    "node-groups": function() {
        return {
            apiVersion: "infra.kubesphere.io/v1alpha1",
            kind: "NodeGroup",
            metadata: {
                name: ""
            },
            spec: {
                alias: "",
                description: ""
            }
        };
    },
    customScalings: function(e) {
        return {
            apiVersion: "keda.sh/v1alpha1",
            kind: "ScaledObject",
            metadata: {
                name: "",
                namespace: e.namespace
            },
            spec: {
                scaleTargetRef: {
                    apiVersion: "",
                    kind: "",
                    name: "",
                    envSourceContainerName: ""
                },
                pollingInterval: 30,
                cooldownPeriod: 300,
                minReplicaCount: 0,
                maxReplicaCount: 100,
                advanced: {
                    restoreToOriginalReplicaCount: false,
                    horizontalPodAutoscalerConfig: {
                        behavior: {
                            scaleDown: {
                                stabilizationWindowSeconds: 300,
                                policies: [
                                    {
                                        type: "Percent",
                                        value: 100,
                                        periodSeconds: 15
                                    }
                                ]
                            },
                            scaleUp: {
                                stabilizationWindowSeconds: 0,
                                policies: [
                                    {
                                        type: "Percent",
                                        value: 100,
                                        periodSeconds: 15
                                    },
                                    {
                                        type: "Pods",
                                        value: 4,
                                        periodSeconds: 15
                                    }
                                ],
                                selectPolicy: "Max"
                            }
                        }
                    }
                },
                triggers: []
            }
        };
    },
    whizard: function() {
        return {
            compactor: {
                resources: {
                    limits: {
                        cpu: "",
                        memory: ""
                    },
                    requests: {
                        cpu: "",
                        memory: ""
                    }
                },
                retention: {
                    retentionRaw: "60d",
                    retention5m: "180d",
                    retention1h: "360d"
                }
            },
            gateway: {
                replicas: 2,
                resources: {
                    limits: {
                        cpu: "",
                        memory: ""
                    },
                    requests: {
                        cpu: "",
                        memory: ""
                    }
                }
            },
            ingester: {
                localTsdbRetention: "7d",
                replicas: 2,
                resources: {
                    limits: {
                        cpu: "",
                        memory: ""
                    },
                    requests: {
                        cpu: "",
                        memory: ""
                    }
                }
            },
            query: {
                replicas: 2,
                resources: {
                    limits: {
                        cpu: "",
                        memory: ""
                    },
                    requests: {
                        cpu: "",
                        memory: ""
                    }
                }
            },
            queryFrontend: {
                replicas: 2,
                resources: {
                    limits: {
                        cpu: "",
                        memory: ""
                    },
                    requests: {
                        cpu: "",
                        memory: ""
                    }
                }
            },
            router: {
                replicas: 2,
                replicationFactor: 1,
                resources: {
                    limits: {
                        cpu: "",
                        memory: ""
                    },
                    requests: {
                        cpu: "",
                        memory: ""
                    }
                }
            },
            ruler: {
                resources: {
                    limits: {
                        cpu: "",
                        memory: ""
                    },
                    requests: {
                        cpu: "",
                        memory: ""
                    }
                }
            },
            store: {
                resources: {
                    limits: {
                        cpu: "1",
                        memory: "4"
                    },
                    requests: {
                        cpu: "0.1",
                        memory: "0.5"
                    }
                }
            }
        };
    },
    storage: function() {
        return {
            bucket: "",
            region: "",
            endpoint: "",
            access_key: "",
            secret_key: ""
        };
    },
    clusteringresssettings: function() {
        return {
            apiVersion: "gateway.kubesphere.io/v1alpha2",
            kind: "ClusterIngressSetting",
            metadata: {
                name: "",
                annotations: {
                    "kubesphere.io/description": ""
                }
            },
            spec: {
                uniqueDomainPattern: ""
            }
        };
    },
    persistentvolumes: function() {
        return {
            apiVersion: "v1",
            kind: "PersistentVolume",
            metadata: {
                name: ""
            },
            spec: {
                csi: {
                    readOnly: false
                },
                volumeMode: "Filesystem",
                persistentVolumeReclaimPolicy: "Retain"
            }
        };
    }
};
export default p;
export const getFormTemplate = function(e, t) {
    const n = MODULE_KIND_MAP[t];
    if (!n || !p[t]) {
        return {};
    }
    const r = p[t]({
        namespace: e
    });
    return module31({}, n, r);
};
