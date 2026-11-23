import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { trigger } from "utils/action";
import module1287 from "unpacked/module-1287.js";
import module483 from "stores/root";
import module318 from "stores/workload/index";
import module484 from "unpacked/module-484.js";
import module470 from "stores/openpitrix/app";
let o;
const O = trigger(o = ((Component_1)=>{
    module55(a, Component_1);
    var t = ((e)=>{
        const t = (()=>{
            if (typeof Reflect === "undefined" || !Reflect.construct) {
                return false;
            }
            if (Reflect.construct.sham) {
                return false;
            }
            if (typeof Proxy === "function") {
                return true;
            }
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        })();
        return function() {
            let a;
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(a);
    function a(e) {
        let n;
        module36(this, a);
        n = t.call(this, e);
        n.rootStore = new module483;
        n.showCreateApp = function() {
            const e = module88(n);
            const { match, trigger } = e;
            n.trigger("app.template.create.v2", {
                module: "apptemplates",
                workspace: "app",
                cluster: "11-45-edge",
                ...match?.params,
                trigger
            });
        };
        n.showEditApp = function() {
            const e = module88(n);
            const { match, trigger } = e;
            n.trigger("openpitrix.template.edit.v2", {
                module: "apptemplates",
                workspace: "apps",
                detail: {
                    name: "demo",
                    description: "sdasdas",
                    appName: "ttes1",
                    workspace: "edgewize",
                    cluster: "edge-11-45",
                    categoryName: "charge",
                    aliasName: "aaa",
                    appHome: "detail?.spec?.appHome",
                    attachments: [
                        "atty53lv9n072op6o"
                    ],
                    abstraction: "detail?.spec?.abstraction"
                },
                store: n.appStore,
                ...match?.params,
                trigger
            });
        };
        n.showCreateInstance = async function e() {
            let t;
            let a;
            let trigger_1;
            let i;
            t = module88(n);
            a = t.match;
            trigger_1 = t.trigger;
            i = t.rootStore;
            n.trigger("batch.deploy.app.create.v2", {
                module: "edgeappsets",
                ...a?.params,
                appName: "ttes1",
                versionId: "configyaml-ttes1-1.0.0",
                routing: i.routing,
                trigger: trigger_1,
                namespace: "monitor",
                workspace: "edgewize",
                cluster: "edge-11-45",
                onCancel: function() {
                    console.log(22222);
                },
                success: function() {}
            });
        };
        n.showCreateTemplate = function() {
            const e = module88(n);
            const { match, trigger, rootStore } = e;
            n.trigger("batch.deploy.app.create", {
                module: "edgeappsets",
                ...match.params,
                routing: rootStore.routing,
                trigger
            });
        };
        n.deleteWorkspace = function() {
            const e = module88(n);
            const { match, trigger, rootStore } = e;
            n.trigger("workload.batch.delete.v2", {
                module: "deployments",
                resource: [
                    {
                        cluster: "11-45-edge",
                        namespace: "monitor",
                        workspace: "app",
                        kind: "Deployment",
                        apiVersion: "apps/v1",
                        metadata: {
                            name: "hahhahahahah-1-kldx5",
                            namespace: "monitor",
                            uid: "ccdf6979-0ad3-4558-8f15-a3cc507048e1",
                            resourceVersion: "4405142",
                            generation: 1,
                            creationTimestamp: "2023-12-26T06:20:52Z",
                            labels: {
                                app: "hahhahahahah-1-kldx5",
                                "application.kubesphere.io/app-id": "cjb",
                                "apps.edgewize.io/appset": "hahhahahahah-1",
                                "apps.edgewize.io/apptemplate": "configyaml-cjb-1.0.0",
                                "apps.edgewize.io/apptemplateversion": "1.0.0",
                                "apps.edgewize.io/node": "11-45-edge03",
                                "apps.edgewize.io/nodegroup": "ccc"
                            },
                            annotations: {
                                "application.kubesphere.io/app-alias-name": "采集宝",
                                "deployment.kubernetes.io/revision": "1"
                            },
                            managedFields: [
                                {
                                    manager: "controller-manager",
                                    operation: "Update",
                                    apiVersion: "apps/v1",
                                    time: "2023-12-26T06:20:52Z",
                                    fieldsType: "FieldsV1",
                                    fieldsV1: {
                                        "f:metadata": {
                                            "f:annotations": {
                                                ".": {},
                                                "f:application.kubesphere.io/app-alias-name": {}
                                            },
                                            "f:labels": {
                                                ".": {},
                                                "f:app": {},
                                                "f:application.kubesphere.io/app-id": {},
                                                "f:apps.edgewize.io/appset": {},
                                                "f:apps.edgewize.io/apptemplate": {},
                                                "f:apps.edgewize.io/apptemplateversion": {},
                                                "f:apps.edgewize.io/node": {},
                                                "f:apps.edgewize.io/nodegroup": {}
                                            }
                                        },
                                        "f:spec": {
                                            "f:progressDeadlineSeconds": {},
                                            "f:replicas": {},
                                            "f:revisionHistoryLimit": {},
                                            "f:selector": {},
                                            "f:strategy": {
                                                "f:rollingUpdate": {
                                                    ".": {},
                                                    "f:maxSurge": {},
                                                    "f:maxUnavailable": {}
                                                },
                                                "f:type": {}
                                            },
                                            "f:template": {
                                                "f:metadata": {
                                                    "f:annotations": {
                                                        ".": {},
                                                        "f:kubesphere.io/imagepullsecrets": {}
                                                    },
                                                    "f:labels": {
                                                        ".": {},
                                                        "f:app": {},
                                                        "f:apps.edgewize.io/appset": {},
                                                        "f:apps.edgewize.io/apptemplate": {},
                                                        "f:apps.edgewize.io/apptemplateversion": {},
                                                        "f:apps.edgewize.io/node": {},
                                                        "f:apps.edgewize.io/nodegroup": {}
                                                    }
                                                },
                                                "f:spec": {
                                                    "f:containers": {
                                                        'k:{"name":"container-vd8s4r"}': {
                                                            ".": {},
                                                            "f:image": {},
                                                            "f:imagePullPolicy": {},
                                                            "f:name": {},
                                                            "f:ports": {
                                                                ".": {},
                                                                'k:{"containerPort":80,"protocol":"TCP"}': {
                                                                    ".": {},
                                                                    "f:containerPort": {},
                                                                    "f:name": {},
                                                                    "f:protocol": {}
                                                                }
                                                            },
                                                            "f:resources": {},
                                                            "f:terminationMessagePath": {},
                                                            "f:terminationMessagePolicy": {}
                                                        }
                                                    },
                                                    "f:dnsPolicy": {},
                                                    "f:nodeName": {},
                                                    "f:restartPolicy": {},
                                                    "f:schedulerName": {},
                                                    "f:securityContext": {},
                                                    "f:serviceAccount": {},
                                                    "f:serviceAccountName": {},
                                                    "f:terminationGracePeriodSeconds": {},
                                                    "f:tolerations": {}
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    manager: "kube-controller-manager",
                                    operation: "Update",
                                    apiVersion: "apps/v1",
                                    time: "2023-12-26T06:21:05Z",
                                    fieldsType: "FieldsV1",
                                    fieldsV1: {
                                        "f:metadata": {
                                            "f:annotations": {
                                                "f:deployment.kubernetes.io/revision": {}
                                            }
                                        },
                                        "f:status": {
                                            "f:availableReplicas": {},
                                            "f:conditions": {
                                                ".": {},
                                                'k:{"type":"Available"}': {
                                                    ".": {},
                                                    "f:lastTransitionTime": {},
                                                    "f:lastUpdateTime": {},
                                                    "f:message": {},
                                                    "f:reason": {},
                                                    "f:status": {},
                                                    "f:type": {}
                                                },
                                                'k:{"type":"Progressing"}': {
                                                    ".": {},
                                                    "f:lastTransitionTime": {},
                                                    "f:lastUpdateTime": {},
                                                    "f:message": {},
                                                    "f:reason": {},
                                                    "f:status": {},
                                                    "f:type": {}
                                                }
                                            },
                                            "f:observedGeneration": {},
                                            "f:readyReplicas": {},
                                            "f:replicas": {},
                                            "f:updatedReplicas": {}
                                        }
                                    },
                                    subresource: "status"
                                }
                            ]
                        },
                        spec: {
                            replicas: 1,
                            selector: {
                                matchLabels: {
                                    app: "hahhahahahah-1-kldx5",
                                    "apps.edgewize.io/appset": "hahhahahahah-1"
                                }
                            },
                            template: {
                                metadata: {
                                    creationTimestamp: null,
                                    labels: {
                                        app: "hahhahahahah-1-kldx5",
                                        "apps.edgewize.io/appset": "hahhahahahah-1",
                                        "apps.edgewize.io/apptemplate": "configyaml-cjb-1.0.0",
                                        "apps.edgewize.io/apptemplateversion": "1.0.0",
                                        "apps.edgewize.io/node": "11-45-edge03",
                                        "apps.edgewize.io/nodegroup": "ccc"
                                    },
                                    annotations: {
                                        "kubesphere.io/imagepullsecrets": "{}"
                                    }
                                },
                                spec: {
                                    containers: [
                                        {
                                            name: "container-vd8s4r",
                                            image: "nginx:latest",
                                            ports: [
                                                {
                                                    name: "http-0",
                                                    containerPort: 80,
                                                    protocol: "TCP"
                                                }
                                            ],
                                            resources: {},
                                            terminationMessagePath: "/dev/termination-log",
                                            terminationMessagePolicy: "File",
                                            imagePullPolicy: "IfNotPresent"
                                        }
                                    ],
                                    restartPolicy: "Always",
                                    terminationGracePeriodSeconds: 30,
                                    dnsPolicy: "ClusterFirst",
                                    serviceAccountName: "default",
                                    serviceAccount: "default",
                                    nodeName: "11-45-edge03",
                                    securityContext: {},
                                    schedulerName: "default-scheduler",
                                    tolerations: [
                                        {
                                            key: "node.kubernetes.io/unreachable",
                                            operator: "Exists"
                                        }
                                    ]
                                }
                            },
                            strategy: {
                                type: "RollingUpdate",
                                rollingUpdate: {
                                    maxUnavailable: "25%",
                                    maxSurge: "25%"
                                }
                            },
                            revisionHistoryLimit: 10,
                            progressDeadlineSeconds: 600
                        },
                        status: {
                            observedGeneration: 1,
                            replicas: 1,
                            updatedReplicas: 1,
                            readyReplicas: 1,
                            availableReplicas: 1,
                            conditions: [
                                {
                                    type: "Available",
                                    status: "True",
                                    lastUpdateTime: "2023-12-26T06:21:05Z",
                                    lastTransitionTime: "2023-12-26T06:21:05Z",
                                    reason: "MinimumReplicasAvailable",
                                    message: "Deployment has minimum availability."
                                },
                                {
                                    type: "Progressing",
                                    status: "True",
                                    lastUpdateTime: "2023-12-26T06:21:05Z",
                                    lastTransitionTime: "2023-12-26T06:20:53Z",
                                    reason: "NewReplicaSetAvailable",
                                    message: 'ReplicaSet "hahhahahahah-1-kldx5-5844dc9d5d" has successfully progressed.'
                                }
                            ]
                        },
                        uid: "ccdf6979-0ad3-4558-8f15-a3cc507048e1",
                        name: "hahhahahahah-1-kldx5",
                        creator: "",
                        description: "",
                        aliasName: "",
                        createTime: "2023-12-26T06:20:52Z",
                        resourceVersion: "4405142",
                        isFedManaged: false,
                        updateTime: 1703571665000,
                        labels: {
                            app: "hahhahahahah-1-kldx5",
                            "application.kubesphere.io/app-id": "cjb",
                            "apps.edgewize.io/appset": "hahhahahahah-1",
                            "apps.edgewize.io/apptemplate": "configyaml-cjb-1.0.0",
                            "apps.edgewize.io/apptemplateversion": "1.0.0",
                            "apps.edgewize.io/node": "11-45-edge03",
                            "apps.edgewize.io/nodegroup": "ccc"
                        },
                        annotations: {
                            "application.kubesphere.io/app-alias-name": "采集宝",
                            "deployment.kubernetes.io/revision": "1"
                        },
                        availablePodNums: 1,
                        readyPodNums: 1,
                        podNums: 1,
                        selector: {
                            app: "hahhahahahah-1-kldx5",
                            "apps.edgewize.io/appset": "hahhahahahah-1"
                        },
                        containers: [
                            {
                                name: "container-vd8s4r",
                                image: "nginx:latest",
                                ports: [
                                    {
                                        name: "http-0",
                                        containerPort: 80,
                                        protocol: "TCP"
                                    }
                                ],
                                resources: {},
                                terminationMessagePath: "/dev/termination-log",
                                terminationMessagePolicy: "File",
                                imagePullPolicy: "IfNotPresent"
                            }
                        ],
                        strategy: {
                            type: "RollingUpdate",
                            rollingUpdate: {
                                maxUnavailable: "25%",
                                maxSurge: "25%"
                            }
                        },
                        availableCondition: {
                            type: "Available",
                            status: "True",
                            lastUpdateTime: "2023-12-26T06:21:05Z",
                            lastTransitionTime: "2023-12-26T06:21:05Z",
                            reason: "MinimumReplicasAvailable",
                            message: "Deployment has minimum availability."
                        },
                        ownerReference: {},
                        hasS2i: false,
                        builderNames: [],
                        _originData: {
                            kind: "Deployment",
                            apiVersion: "apps/v1",
                            metadata: {
                                name: "hahhahahahah-1-kldx5",
                                namespace: "monitor",
                                labels: {
                                    app: "hahhahahahah-1-kldx5",
                                    "application.kubesphere.io/app-id": "cjb",
                                    "apps.edgewize.io/appset": "hahhahahahah-1",
                                    "apps.edgewize.io/apptemplate": "configyaml-cjb-1.0.0",
                                    "apps.edgewize.io/apptemplateversion": "1.0.0",
                                    "apps.edgewize.io/node": "11-45-edge03",
                                    "apps.edgewize.io/nodegroup": "ccc"
                                },
                                annotations: {
                                    "application.kubesphere.io/app-alias-name": "采集宝",
                                    "deployment.kubernetes.io/revision": "1"
                                }
                            },
                            spec: {
                                replicas: 1,
                                selector: {
                                    matchLabels: {
                                        app: "hahhahahahah-1-kldx5",
                                        "apps.edgewize.io/appset": "hahhahahahah-1"
                                    }
                                },
                                template: {
                                    metadata: {
                                        creationTimestamp: null,
                                        labels: {
                                            app: "hahhahahahah-1-kldx5",
                                            "apps.edgewize.io/appset": "hahhahahahah-1",
                                            "apps.edgewize.io/apptemplate": "configyaml-cjb-1.0.0",
                                            "apps.edgewize.io/apptemplateversion": "1.0.0",
                                            "apps.edgewize.io/node": "11-45-edge03",
                                            "apps.edgewize.io/nodegroup": "ccc"
                                        },
                                        annotations: {
                                            "kubesphere.io/imagepullsecrets": "{}"
                                        }
                                    },
                                    spec: {
                                        containers: [
                                            {
                                                name: "container-vd8s4r",
                                                image: "nginx:latest",
                                                ports: [
                                                    {
                                                        name: "http-0",
                                                        containerPort: 80,
                                                        protocol: "TCP"
                                                    }
                                                ],
                                                resources: {},
                                                terminationMessagePath: "/dev/termination-log",
                                                terminationMessagePolicy: "File",
                                                imagePullPolicy: "IfNotPresent"
                                            }
                                        ],
                                        restartPolicy: "Always",
                                        terminationGracePeriodSeconds: 30,
                                        dnsPolicy: "ClusterFirst",
                                        serviceAccountName: "default",
                                        serviceAccount: "default",
                                        nodeName: "11-45-edge03",
                                        securityContext: {},
                                        schedulerName: "default-scheduler",
                                        tolerations: [
                                            {
                                                key: "node.kubernetes.io/unreachable",
                                                operator: "Exists"
                                            }
                                        ]
                                    }
                                },
                                strategy: {
                                    type: "RollingUpdate",
                                    rollingUpdate: {
                                        maxUnavailable: "25%",
                                        maxSurge: "25%"
                                    }
                                },
                                revisionHistoryLimit: 10,
                                progressDeadlineSeconds: 600
                            }
                        }
                    }
                ],
                type: "DEPLOYMENT",
                ...match?.params,
                routing: rootStore.routing,
                trigger,
                store: n.workloadStore
            });
        };
        n.store = new module484;
        n.workloadStore = new module318("deployments");
        n.appStore = new module470;
        n.state = {
            delete_workloads: false
        };
        return n;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.rootStore.registerActions(module1287);
            }
        },
        {
            key: "render",
            value: function() {
                return <><div onClick={this.showCreateApp}>创建应用</div><div onClick={this.showEditApp}>编辑应用</div><div onClick={this.deleteWorkspace}>删除部署数据</div><div onClick={this.showCreateInstance}>创建实例</div><div onClick={this.showCreateTemplate}>选择边缘模板创建</div></>;
            }
        },
        {
            key: "namespace",
            get: function() {
                return this.props.match.params.namespace;
            }
        }
    ]);
    return a;
})(Component)) || o;
export default O;
