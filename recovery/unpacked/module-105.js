import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-30.js";
import "./module-18.js";
import "./module-87.js";
import "./module-48.js";
import "./module-97.js";
import "./module-16.js";
import "./module-27.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-24.js";
import "./module-85.js";
import "./module-62.js";
import "./module-64.js";
import "./module-137.js";
import "./module-75.js";
import "./module-7.js";
import "./module-32.js";
import module58 from "./module-58.js";
import module96 from "./module-96.js";
import module31 from "./module-31.js";
import "./module-28.js";
import "./module-442.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-193.js";
import module451 from "./module-451.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module242 from "./module-242.js";
import module198 from "./module-198.js";
import module199 from "./module-199.js";
import module241 from "./module-241.js";
import module63 from "./module-63.js";
import module189 from "./module-189.js";
import module457 from "./module-457.js";
import module454 from "./module-454.js";
import module321 from "./module-321.js";
import module250 from "./module-250.js";
import module136 from "./module-136.js";
import module159 from "./module-159.js";
import { formaDayTime, getAliasName, getDescription, getLocalTime, getResourceCreator, replaceToLocalOrigin, safeParseJSON } from "./module-52.js";
import { safeAtob } from "./module-440.js";
import { getEdgeAppSetsUpdateTime, getJobUpdateTime, getSpringCloudUpdateTime, getWorkloadUpdateTime } from "./module-248.js";
import { getServiceType } from "./module-475.js";
import { getNodeRoles } from "./module-444.js";
import { getPodStatusAndRestartCount } from "./module-434.js";
import { FED_ACTIVE_STATUS } from "./module-72.js";
import module243 from "./module-243.js";
import module481 from "./module-481.js";
import { getDurationSeconds, parserDuration } from "./module-467.js";
let P;
const A = (e, t = {})=>module189(e, [
        "status",
        "metadata.uid",
        "metadata.selfLink",
        "metadata.generation",
        t.ownerReferences ? "" : "metadata.ownerReferences",
        "metadata.resourceVersion",
        "metadata.managedFields"
    ].filter(Boolean));
const R = (e)=>{
    const t = module26(e, "spec.versions", []);
    if (t.length === 0) {
        return "";
    }
    let n = module26(t[t.length - 1], "name");
    t.some((e)=>!!module26(e, "served", false) && (n = module26(e, "name", n), true));
    return n;
};
const j = (e)=>({
        uid: module26(e, "metadata.uid"),
        name: module26(e, "metadata.name"),
        creator: getResourceCreator(e),
        description: getDescription(e),
        aliasName: getAliasName(e),
        createTime: module26(e, "metadata.creationTimestamp", ""),
        resourceVersion: module26(e, "metadata.resourceVersion"),
        isFedManaged: module26(e, 'metadata.labels["kubefed.io/managed"]') === "true"
    });
const N = (e)=>{
    const r = e?.metadata?.labels ?? {};
    return {
        isEdge: Object.keys(r).includes("cluster-role.kubesphere.io/edge"),
        edgeClusterName: r["cluster-role.kubesphere.io/edge"]
    };
};
const I = function(e) {
    return {
        ...j(e),
        username: module26(e, "metadata.name", ""),
        email: module26(e, "spec.email", ""),
        role: module26(e, 'metadata.annotations["iam.kubesphere.io/role"]', ""),
        globalrole: module26(e, 'metadata.annotations["iam.kubesphere.io/globalrole"]', ""),
        clusterrole: module26(e, 'metadata.annotations["iam.kubesphere.io/clusterrole"]', ""),
        workspacerole: module26(e, 'metadata.annotations["iam.kubesphere.io/workspacerole"]', ""),
        nodegrouprole: module26(e, 'metadata.annotations["iam.kubesphere.io/nodegrouprole"]', ""),
        roleBind: module26(e, 'metadata.annotations["iam.kubesphere.io/role-binding"]', ""),
        groups: module26(e, "spec.groups", []),
        status: module26(e, "status.state", "Pending"),
        conditions: module26(e, "status.conditions", []),
        lastLoginTime: module26(e, "status.lastLoginTime"),
        _originData: A(e)
    };
};
const B = function(e) {
    return {
        ...j(e),
        kind: module26(e, "kind", "deployments"),
        updateTime: getWorkloadUpdateTime(e),
        labels: module26(e, "metadata.labels", {}),
        namespace: module26(e, "metadata.namespace"),
        annotations: module26(e, "metadata.annotations"),
        status: module26(e, "status", {}),
        availablePodNums: module26(e, "status.availableReplicas", 0),
        readyPodNums: module26(e, "status.readyReplicas", 0),
        spec: module26(e, "spec", {}),
        podNums: module26(e, "spec.replicas", 0),
        selector: module26(e, "spec.selector.matchLabels"),
        containers: module26(e, "spec.template.spec.containers"),
        initContainers: module26(e, "spec.template.spec.initContainers"),
        volumes: module26(e, "spec.template.spec.volumes"),
        strategy: module26(e, "spec.strategy", {}),
        updateStrategy: module26(e, "spec.updateStrategy.type"),
        availableCondition: module26(e, "status.conditions", []).find((e)=>e.type === "Available") || {},
        app: module26(e, 'metadata.labels["app.kubernetes.io/name"]'),
        ownerReference: module26(e, "metadata.ownerReferences[0]", {}),
        hasS2i: Object.keys(module26(e, "metadata.labels", {})).some((e)=>e.startsWith("s2ibuilder")),
        builderNames: Object.entries(module26(e, "metadata.labels", {})).filter((e)=>e[0].startsWith("s2ibuilder")).map((e)=>e[1]),
        _originData: A(e)
    };
};
const U = function(e) {
    return {
        ...j(e),
        labels: module26(e, "metadata.labels"),
        role: getNodeRoles(module26(e, "metadata.labels")),
        annotations: module26(e, "metadata.annotations"),
        status: module26(e, "status"),
        conditions: module26(e, "status.conditions", []),
        nodeInfo: module26(e, "status.nodeInfo"),
        spec: module26(e, "spec"),
        unschedulable: module26(e, "spec.unschedulable"),
        importStatus: module26(e, 'metadata.labels["kubekey.kubesphere.io/import-status"]', "success"),
        taints: module26(e, "spec.taints", []),
        ip: (module26(e, "status.addresses", []).find((e)=>e.type === "InternalIP") || {}).address || "-",
        _originData: A(e)
    };
};
const F = (e, t, n)=>e.map((e)=>{
        const r = module189(t.find((t)=>t.name === e.name) || {}, "image");
        return {
            ...e,
            ...r,
            namespace: n
        };
    });
const Z = (e)=>{
    const t = module26(e, "status.phase");
    if (module26(e, "metadata.deletionTimestamp")) {
        return "Terminating";
    }
    return t;
};
const q = function(e) {
    return {
        deletionTime: module26(e, "metadata.deletionTimestamp"),
        phase: Z(e),
        ...j(e),
        storageProvisioner: module26(e, 'metadata.annotations["volume.beta.kubernetes.io/storage-provisioner"]'),
        status: module26(e, "status", {}),
        conditions: module26(e, "status.conditions", []),
        namespace: module26(e, "metadata.namespace"),
        labels: module26(e, "metadata.labels"),
        annotations: module26(e, "metadata.annotations"),
        accessMode: module26(e, "spec.accessModes[0]"),
        accessModes: module26(e, "spec.accessModes"),
        storageClassName: module26(e, "spec.storageClassName"),
        resources: module26(e, "spec.resources"),
        capacity: module26(e, "spec.resources.requests.storage", module26(e, "status.capacity.storage")),
        inUse: module26(e, 'metadata.annotations["kubesphere.io/in-use"]') === "true" || module26(e, "status.phase") === "Bound",
        type: "pvc",
        _originData: A(e)
    };
};
const W = function(e) {
    const t = N(e);
    return {
        ...j(e),
        labels: module26(e, "metadata.labels", {}),
        namespace: module26(e, "metadata.namespace"),
        annotations: module26(e, "metadata.annotations"),
        dependencies: safeParseJSON(module26(e, 'metadata.annotations["iam.kubesphere.io/dependencies"]', ""), []),
        roleTemplates: module26(e, "aggregationRoleTemplates.templateNames", []),
        rules: module26(e, "rules"),
        ...t,
        _originData: A(e)
    };
};
const G = (e)=>{
    for(let t = module26(e, "status.conditions", []), n = 0; n < t.length; n++){
        const r = t[n];
        if (r.type === "Error" && r.status === "True") {
            return "Error";
        }
        if (r.type === "Ready" && r.status === "True") {
            return "Running";
        }
    }
    return "Updating";
};
const Y = (e)=>module26(e, "status.components", []).filter((e)=>e.kind === "Service").map((e)=>e.name);
const $ = (e)=>{
    const t = [
        "Deployment",
        "StatefulSet"
    ];
    return module26(e, "status.components", []).filter((e)=>t.includes(e.kind)).map((e)=>e.name);
};
const K = (e)=>module26(e, "status.conditions", []).reduce((acc, { lastUpdateTime } = {})=>{
        if (acc) {
            if (lastUpdateTime) {
                if (acc > lastUpdateTime) {
                    return acc;
                }
                return lastUpdateTime;
            }
            return acc;
        }
        return lastUpdateTime;
    }, undefined);
const J = (e)=>{
    const t = module26(e, "spec.versionList.[0].metadata.creationTimestamp", "");
    const n = module26(e, "metadata.creationTimestamp");
    return t || n;
};
const apptemplateversions = function(e) {
    const containers = module26(e, "spec.deploymentSpec.template.spec.containers", []);
    return {
        ...j(e),
        containers,
        versionId: module26(e, "spec.version"),
        _originData: A(e)
    };
};
const X = (e, t, n, r)=>{
    const o = module454(e, function(e) {
        return e.metric === t || e.val === t;
    }, {});
    return module26(o, n || "value", r || "");
};
const ee = function(e) {
    return {
        ...j(e),
        namespace: module26(e, "metadata.namespace"),
        title: module26(e, "spec.title"),
        datasource: module26(e, "spec.datasource"),
        _originData: A(e)
    };
};
const te = function(e) {
    return {
        ...j(e),
        namespace: module26(e, "metadata.namespace"),
        _originData: A(e),
        key: `${module26(e, "metadata.namespace")}-${module26(e, "metadata.name")}`
    };
};
const ne = function(e) {
    const rules = safeParseJSON(module26(e, "spec.rules"), []);
    return {
        ...j(e),
        enabled: module26(e, 'metadata.labels["alerting.kubesphere.io/enable"]', "false"),
        interval: module26(e, "spec.interval", ""),
        rules,
        evaluationTime: module26(e, "status.evaluationTime", "-"),
        lastEvaluation: module26(e, "status.lastEvaluation", "-"),
        rulesStats: module26(e, "status.rulesStats", {}),
        rulesStatus: module26(e, "status.rulesStatus", []),
        _originData: A(e),
        _originDataWithStatus: module136(e)
    };
};
P = [
    [
        "kind",
        "kind"
    ],
    [
        "apiVersion",
        "apiVersion"
    ],
    [
        "metadata",
        "metadata"
    ],
    [
        "name",
        "metadata.name"
    ],
    [
        "desc",
        'metadata.annotations["kubesphere.io/description"]'
    ],
    [
        "aliasName",
        'metadata.annotations["kubesphere.io/alias-name"]'
    ],
    [
        "matchExpressions",
        "spec.matcher.matchExpressions",
        []
    ],
    [
        "cron",
        "spec.schedule"
    ],
    [
        "createTime",
        "metadata.creationTimestamp"
    ],
    [
        "creator",
        'metadata.annotations["kubesphere.io/creator"]'
    ],
    [
        "duration",
        "spec.duration"
    ],
    [
        "condition",
        function(e, t) {
            if (t.matchExpressions.length > 0) {
                return 2;
            }
            return 1;
        }
    ],
    [
        "type",
        function(e, { isCron }) {
            const r = module26(e, "spec", {});
            const { startsAt, duration, schedule } = r;
            if (startsAt && !duration) {
                return 1;
            }
            if (startsAt && duration) {
                return 2;
            }
            if (schedule && duration) {
                return 3;
            }
            if (isCron) {
                return 4;
            }
        }
    ],
    [
        "timeType",
        function(e, { cron }) {
            const { dayOfMonth = [], dayOfWeek = [] } = module26(cron, "fields", {});
            if (dayOfWeek.filter(Boolean).length !== 7 || dayOfMonth.length !== 31 || dayOfMonth.includes("L")) {
                if (dayOfWeek.filter(Boolean).length < 7) {
                    return 2;
                }
                return 3;
            }
            return 1;
        }
    ],
    [
        "isCron",
        function(e, { isType3, isCron }) {
            return !isType3 && isCron;
        }
    ],
    [
        "dateRange",
        function(e) {
            const t = module26(e, "spec", {});
            const { startsAt, duration } = t;
            if (startsAt || duration) {
                if (duration) {
                    return [
                        startsAt,
                        module243(startsAt).add(parserDuration(duration)).format()
                    ];
                }
                return [
                    startsAt
                ];
            }
            return [];
        }
    ],
    [
        "timeRange",
        function(e, t) {
            const t_cron = t.cron;
            if (!t.isType3) {
                return [];
            }
            const hour = t_cron.fields.hour;
            if (hour.length === 1) {
                return [
                    60 * hour[0] * 60,
                    module26(e, "spec.duration") ? 60 * hour[0] * 60 + getDurationSeconds(module26(e, "spec.duration")) : null
                ];
            }
        }
    ],
    [
        "week",
        function(e, { cron }) {
            return module26(cron, "fields.dayOfWeek", []);
        }
    ],
    [
        "month",
        function(e, { cron }) {
            return module26(cron, "fields.dayOfMonth", []);
        }
    ],
    [
        "__data",
        function(e) {
            return e;
        }
    ]
];
const re = (e, t)=>P.reduce((acc, item)=>{
        const o = module96(item, 3);
        const a = o[0];
        const s = o[1];
        const c = o[2];
        return {
            ...acc,
            ...module31({}, a, typeof s === "string" ? module26(e, s, c) : typeof s === "function" ? s(e, t) : c)
        };
    }, {});
const oe = {
    deployments: B,
    daemonsets: B,
    statefulsets: B,
    jobs: function(e) {
        return {
            ...j(e),
            labels: module26(e, "metadata.labels", {}),
            namespace: module26(e, "metadata.namespace"),
            annotations: module26(e, "metadata.annotations"),
            status: module26(e, "status"),
            updateTime: getJobUpdateTime(e),
            startTime: module26(e, "status.startTime"),
            spec: module26(e, "spec", {}),
            selector: module26(e, "spec.selector.matchLabels"),
            containers: module26(e, "spec.template.spec.containers"),
            volumes: module26(e, "spec.template.spec.volumes"),
            _originData: A(e)
        };
    },
    s2ibuilders: function(e) {
        const t = module26(e, "spec.config.sourceUrl", "");
        return {
            ...j(e),
            serviceName: module26(e, "metadata.annotations.serviceName"),
            displayName: module26(e, "metadata.annotations.displayName"),
            createTime: module26(e, "metadata.creationTimestamp"),
            labels: module26(e, "metadata.labels", {}),
            namespace: module26(e, "metadata.namespace"),
            annotations: module26(e, "metadata.annotations"),
            status: module26(e, "status"),
            spec: module26(e, "spec", {}),
            selector: module26(e, "spec.selector.matchLabels"),
            containers: module26(e, "spec.template.spec.containers"),
            tag: module26(e, "spec.config.tag", ""),
            sourceUrl: module26(e, "spec.config.isBinaryURL", "") ? replaceToLocalOrigin(t) : t,
            type: module26(e, 'metadata.labels["s2i-type.kubesphere.io"]', "s2i"),
            module: module26(e, "kind") ? `${module26(e, "kind").toLowerCase()}s` : "s2ibuilders",
            _originData: A(e)
        };
    },
    s2iruns: function(e) {
        let t = module26(e, "status.runState", "");
        t = t === "Running" ? "Building" : t;
        return {
            ...j(e),
            status: t,
            isBinary: !module63(module26(e, 'metadata.["s2ibinary-name.kubesphere.io"]')),
            binaryName: module26(e, "status.s2iBuildSource.binaryName", "-"),
            binarySize: module26(e, "status.s2iBuildSource.binarySize", "-"),
            generation: module26(e, "metadata.generation", ""),
            startTime: module26(e, "status.startTime", ""),
            completionTime: module26(e, "status.completionTime", ""),
            info: module26(e, "status", {}),
            newTag: module26(e, "spec.newTag", ""),
            branch: module26(e, "spec.status.s2iBuildResult.revisionId", ""),
            imageName: module26(e, "status.s2iBuildResult.imageName", ""),
            imageSize: module26(e, "status.s2iBuildResult.imageSize", 0),
            commandPull: module26(e, "status.s2iBuildResult.commandPull", ""),
            imageCreated: module26(e, "status.s2iBuildResult.imageCreated", ""),
            sourceUrl: module26(e, "status.s2iBuildSource.sourceUrl", ""),
            builderImage: module26(e, "status.s2iBuildSource.builderImage", ""),
            revisionId: module26(e, "status.s2iBuildSource.revisionId", ""),
            logURL: module26(e, "status.logURL"),
            _originData: e
        };
    },
    cronjobs: function(e) {
        return {
            ...j(e),
            labels: module26(e, "metadata.labels", {}),
            namespace: module26(e, "metadata.namespace"),
            annotations: module26(e, "metadata.annotations"),
            status: module26(e, "status"),
            spec: module26(e, "spec", {}),
            selector: module26(e, "spec.jobTemplate.metadata.labels"),
            suspend: module26(e, "spec.suspend"),
            _originData: A(e)
        };
    },
    namespaces: function(e) {
        return {
            ...j(e),
            labels: module26(e, "metadata.labels", {}),
            annotations: module26(e, "metadata.annotations", {}),
            workspace: module26(e, 'metadata.labels["kubesphere.io/workspace"]', ""),
            status: module26(e, "status.phase"),
            isFedHostNamespace: module26(e, 'metadata.labels["kubesphere.io/kubefed-host-namespace"]') === "true",
            _originData: A(e)
        };
    },
    revisions: function(e) {
        const spec = module26(e, "data.spec", module26(e, "spec", {}));
        return {
            spec,
            ...j(e),
            ownerKind: module26(e, "metadata.ownerReferences[0].kind", ""),
            ownerName: module26(e, "metadata.ownerReferences[0].name", ""),
            namespace: module26(e, "metadata.namespace"),
            labels: module26(e, "metadata.labels", {}),
            annotations: module26(e, "metadata.annotations"),
            revision: Number(module26(e, 'metadata.annotations["deployment.kubernetes.io/revision"]', e.revision)) || null,
            status: module26(e, "status"),
            podNums: module26(spec, "replicas"),
            selector: module26(spec, "selector.matchLabels"),
            containers: module26(spec, "template.spec.containers"),
            initContainers: module26(spec, "template.spec.initContainers"),
            volumes: module26(spec, "template.spec.volumes"),
            strategy: module26(spec, "strategy", {}),
            updateStrategy: module26(spec, "updateStrategy.type"),
            _originData: A(e)
        };
    },
    horizontalpodautoscalers: function(e) {
        const t = module321(module26(e, "status.currentMetrics") || [], function(e) {
            return module26(e, "resource.name");
        });
        return {
            ...j(e),
            namespace: module26(e, "metadata.namespace"),
            annotations: module26(e, "metadata.annotations"),
            status: module26(e, "status"),
            minReplicas: module26(e, "spec.minReplicas", 0),
            maxReplicas: module26(e, "spec.maxReplicas", 0),
            currentReplicas: module26(e, "status.currentReplicas", 0),
            desiredReplicas: module26(e, "status.desiredReplicas", 0),
            cpuCurrentUtilization: module26(t, "cpu.resource.current.averageUtilization"),
            cpuTargetUtilization: module26(e, "metadata.annotations.cpuTargetUtilization"),
            memoryCurrentValue: module26(t, "memory.resource.current.averageValue", 0),
            memoryTargetValue: module26(e, "metadata.annotations.memoryTargetValue", ""),
            _originData: A(e)
        };
    },
    nodes: U,
    edgenodes: U,
    registries: function(e) {
        return {
            name: module26(e, "display_name"),
            ...e
        };
    },
    pods: function(e) {
        return {
            ...j(e),
            deletionTime: module26(e, "metadata.deletionTimestamp"),
            labels: module26(e, "metadata.labels"),
            namespace: module26(e, "metadata.namespace"),
            annotations: module26(e, "metadata.annotations"),
            podNums: module26(e, "spec.replicas"),
            status: module26(e, "status", {}),
            podStatus: getPodStatusAndRestartCount(e),
            spec: module26(e, "spec", {}),
            metrics: module26(e, "metrics"),
            node: module26(e, "spec.nodeName", ""),
            nodeIp: module26(e, "status.hostIP", "none"),
            podIp: module26(e, "status.podIP"),
            networksStatus: safeParseJSON(module26(e, 'metadata.annotations["k8s.v1.cni.cncf.io/networks-status"]', ""), []),
            app: module26(e, 'metadata.labels["app.kubernetes.io/name"]'),
            containers: F(module26(e, "spec.containers", []), module26(e, "status.containerStatuses", []), module26(e, "metadata.namespace")),
            initContainers: F(module26(e, "spec.initContainers", []), module26(e, "status.initContainerStatuses", []), module26(e, "metadata.namespace")),
            startTime: module26(e, "status.startTime"),
            updateTime: module26(e, "status.startTime"),
            volumes: module26(e, "spec.volumes"),
            ownerKind: module26(e, "metadata.ownerReferences[0].kind", ""),
            ownerName: module26(e, "metadata.ownerReferences[0].name", ""),
            _originData: A(e)
        };
    },
    events: function(e) {
        const n = Date.now();
        e.lastTimestamp = e.lastTimestamp || n;
        const age = e.count > 1 ? e.count === 2 ? t.html("EVENT_AGE_DATA_TWICE", {
            lastTime: module243(e.lastTimestamp).fromNow(),
            duration: module243(e.firstTimestamp).to(n, true)
        }) : t.html("EVENT_AGE_DATA", {
            lastTime: module243(e.lastTimestamp).fromNow(),
            count: e.count,
            duration: module243(e.firstTimestamp).to(n, true)
        }) : module243(e.firstTimestamp).fromNow();
        return {
            ...j(e),
            age,
            type: module26(e, "type"),
            reason: module26(e, "reason"),
            message: module26(e, "message"),
            from: module26(e, "source.component"),
            lastTimestamp: e.lastTimestamp,
            _originData: A(e)
        };
    },
    volumes: q,
    persistentvolumeclaims: q,
    persistentvolumes: function(e) {
        const creationTime = module26(e, "metadata.creationTimestamp");
        let volumeType = "";
        if (module26(e, "spec.csi")) {
            volumeType = "CSI";
        } else if (module26(e, "spec.hostPath")) {
            volumeType = "HostPath";
        } else if (module26(e, "spec.nfs")) {
            volumeType = "NFS";
        }
        return {
            creationTime,
            phase: Z(e),
            ...j(e),
            storageProvisioner: module26(e, 'metadata.annotations["pv.kubernetes.io/provisioned-by"]'),
            status: module26(e, "status", {}),
            resourceVersion: module26(e, "metadata.resourceVersion"),
            annotations: module26(e, "metadata.annotations"),
            labels: module26(e, "metadata.labels"),
            accessMode: module26(e, "spec.accessModes[0]"),
            accessModes: module26(e, "spec.accessModes"),
            storageClassName: module26(e, "spec.storageClassName"),
            capacity: module26(e, "spec.capacity.storage", module26(e, "spec.resources.requests.storage")),
            volumeHandle: module26(e, "spec.csi.volumeHandle"),
            inUse: module26(e, 'metadata.annotations["kubesphere.io/in-use"]') === "true",
            type: "pvc",
            persistentVolumeReclaimPolicy: module26(e, "spec.persistentVolumeReclaimPolicy"),
            volumeMode: module26(e, "spec.volumeMode"),
            volumeType,
            csi: module26(e, "spec.csi"),
            hostPath: module26(e, "spec.hostPath"),
            nfs: module26(e, "spec.nfs"),
            _originData: A(e)
        };
    },
    storageclasses: function(e) {
        return {
            ...j(e),
            annotations: module26(e, "metadata.annotations", {}),
            default: module26(e, 'metadata.annotations["storageclass.kubernetes.io/is-default-class"]') === "true" || module26(e, 'metadata.annotations["storageclass.beta.kubernetes.io/is-default-class"]') === "true",
            parameters: module26(e, "parameters"),
            provisioner: module26(e, "provisioner"),
            reclaimPolicy: module26(e, "reclaimPolicy"),
            volumeBindingMode: module26(e, "volumeBindingMode"),
            allowVolumeExpansion: module26(e, "allowVolumeExpansion"),
            storagetype: module26(e, 'metadata.labels["storage.kubesphere.io/storagetype"]', []),
            supportSnapshot: module26(e, "metadata.annotations['storageclass.kubesphere.io/support-snapshot']") === "true",
            associationPVCCount: Number(module26(e, 'metadata.annotations["kubesphere.io/pvc-count"]')),
            _originData: A(e)
        };
    },
    services: function(e) {
        const specType = module26(e, "spec.type");
        const clusterIP = module26(e, "spec.clusterIP");
        const selector = module26(e, "spec.selector", {});
        return {
            type: getServiceType(e),
            clusterIP,
            selector,
            specType,
            ...j(e),
            namespace: module26(e, "metadata.namespace"),
            labels: module26(e, "metadata.labels", {}),
            annotations: module26(e, "metadata.annotations", {}),
            status: module26(e, "status"),
            ports: module26(e, "spec.ports", []),
            workloadType: module26(e, 'metadata.annotations["kubesphere.io/workloadType"]', "Deployment"),
            sessionAffinity: module26(e, "spec.sessionAffinity"),
            externalIPs: module26(e, "spec.externalIPs", []),
            externalName: module26(e, "spec.externalName"),
            loadBalancerIngress: module26(e, "status.loadBalancer.ingress", []).map((e)=>e.ip || e.hostname),
            app: module26(e, 'metadata.labels["app.kubernetes.io/name"]') || module26(e, "metadata.labels.app"),
            _originData: A(e)
        };
    },
    endpoints: function(e) {
        return {
            addresses: e.addresses || [],
            ports: e.ports || []
        };
    },
    ingresses: function(e) {
        return {
            ...j(e),
            namespace: module26(e, "metadata.namespace"),
            labels: module26(e, "metadata.labels", {}),
            annotations: module26(e, "metadata.annotations", {}),
            rules: module26(e, "spec.rules", []),
            tls: module26(e, "spec.tls", []),
            loadBalancerIngress: module26(e, "status.loadBalancer.ingress", []).map((e)=>e.ip || e.hostname),
            app: module26(e, 'metadata.labels["app.kubernetes.io/name"]'),
            ingressClassName: module26(e, "spec.ingressClassName", ""),
            _originData: A(e)
        };
    },
    ingressClassScopes: function(e) {
        return {
            ...j(e),
            name: module26(e, "metadata.name"),
            ingressClass: module26(e, "spec.ingressClass.name"),
            service: module26(e, "status.service"),
            ingressIp: module26(e, "status.loadBalancer.ingress[0].ip", ""),
            _originData: A(e)
        };
    },
    roles: W,
    clusterroles: W,
    globalroles: W,
    workspaceroles: W,
    rolebinds: function(e) {
        return {
            ...j(e),
            role: module26(e, "roleRef.name"),
            users: e.subjects.filter((e)=>e.kind === "User").map((e)=>e.name),
            _originData: A(e)
        };
    },
    gateway: function(e) {
        const n = module26(e, "spec.values", {});
        const r = module26(e, "status.loadBalancer.ingress", []);
        const lb = module26(e, "spec.values.controller.service['kubesphere.io/loadbalancer-provider']", "");
        const gatewayType = module26(e, 'metadata.labels["kubesphere.io/gateway-type"]');
        const i = module136(e);
        module242(i, "status");
        const l = module26(e, "metadata.deletionTimestamp", "");
        const s = r.find((e)=>!e.ip?.includes(":"))?.ip;
        return {
            ...j(e),
            namespace: module26(e, "metadata.namespace"),
            annotations: module26(n, "controller.service.annotations", {}),
            serviceMeshEnable: module26(n, "controller.integrateKubeSphere.tracing", false),
            replicas: module26(n, "controller.replicaCount"),
            type: module26(n, "controller.service.type"),
            config: module26(n, "controller.config", {}),
            externalIPs: module26(n, "service.externalIPs", []),
            ports: module26(e, "status.service", []),
            loadBalancerIngress: r.map((e)=>e.ip || e.hostname),
            defaultIngress: s || module26(r, "[0].hostname"),
            isHostName: !!module26(r, "[0].hostname"),
            lb,
            gatewayType,
            isDeleteLoading: l !== "",
            _originData: i
        };
    },
    configmaps: function(e) {
        return {
            ...j(e),
            namespace: module26(e, "metadata.namespace"),
            labels: module26(e, "metadata.labels", {}),
            annotations: module26(e, "metadata.annotations", {}),
            data: module26(e, "data", {}),
            _originData: A(e)
        };
    },
    serviceaccounts: function(e) {
        return {
            ...j(e),
            namespace: module26(e, "metadata.namespace"),
            labels: module26(e, "metadata.labels", {}),
            annotations: module26(e, "metadata.annotations", {}),
            role: module26(e, 'metadata.annotations["iam.kubesphere.io/role"]'),
            secrets: module26(e, "secrets", []),
            _originData: A(e)
        };
    },
    secrets: function(e) {
        return {
            ...j(e),
            namespace: module26(e, "metadata.namespace"),
            labels: module26(e, "metadata.labels", {}),
            annotations: module26(e, "metadata.annotations", {}),
            type: module26(e, "type", ""),
            data: (t = e, t.type === "kubernetes.io/basic-auth" ? Object.entries(module26(t, "data", {})).reduce((acc, entry)=>{
                const n = module96(entry, 2);
                const r = n[0];
                const o = n[1];
                return {
                    ...acc,
                    ...module31({}, r, safeAtob(o) === "undefined" ? "" : safeAtob(o))
                };
            }, {}) : Object.entries(module26(t, "data", {})).reduce((acc, entry)=>{
                const n = module96(entry, 2);
                const r = n[0];
                const o = n[1];
                return {
                    ...acc,
                    ...module31({}, r, r === ".dockerconfigjson" ? safeParseJSON(safeAtob(o), {}) : safeAtob(o))
                };
            }, {})),
            isDefault: module26(e, 'metadata.annotations["secret.kubesphere.io/is-default-class"]') === "true",
            _originData: A(e, {
                ownerReferences: true
            })
        };
        var t;
    },
    limitranges: function(e) {
        return {
            ...j(e),
            namespace: module26(e, "metadata.namespace"),
            limit: module26(e, "spec.limits[0]", ""),
            _originData: A(e)
        };
    },
    applications: function(e) {
        return {
            ...j(e),
            namespace: module26(e, "metadata.namespace"),
            version: module26(e, 'metadata.labels["app.kubernetes.io/version"]'),
            icon: module26(e, "spec.descriptor.icons[0].src"),
            labels: module26(e, "metadata.labels", {}),
            annotations: module26(e, "metadata.annotations", {}),
            selector: module26(e, "spec.selector.matchLabels", {}),
            serviceMeshEnable: module26(e, 'metadata.annotations["servicemesh.kubesphere.io/enabled"]') === "true",
            status: G(e),
            services: Y(e),
            workloads: $(e),
            updateTime: K(e),
            _originData: A(e)
        };
    },
    apptemplates: function(e) {
        const versions = module26(e, "spec.versionList", []).map(apptemplateversions);
        const latestVersion = module26(versions, "[0]", {});
        return {
            ...j(e),
            namespace: module26(e, "metadata.namespace"),
            labels: module26(e, "metadata.labels", {}),
            annotations: module26(e, "metadata.annotations", {}),
            versions,
            latestVersion,
            selector: module26(e, "spec.selector.matchLabels", {}),
            serviceMeshEnable: module26(e, 'metadata.annotations["servicemesh.kubesphere.io/enabled"]') === "true",
            updateTime: J(e),
            _originData: A(e)
        };
    },
    edgeappsets: function(e) {
        return {
            ...j(e),
            kind: module26(e, "kind", "deployments"),
            status: module26(e, "status.workloadStats", {}),
            workloads: module26(e, "status.workloads", []).map(B),
            namespace: module26(e, "metadata.namespace"),
            labels: module26(e, "metadata.labels", {}),
            annotations: module26(e, "metadata.annotations", {}),
            updateTime: getEdgeAppSetsUpdateTime(e),
            _originData: A(e)
        };
    },
    apptemplateversions,
    strategies: function(e) {
        const t = module26(e, "spec.type");
        const principal = module26(e, "spec.principal");
        const governor = module26(e, "spec.governor");
        const o = module26(e, "spec.template.spec.http") || module26(e, "spec.template.spec.tcp", []);
        const a = o.some((e)=>!!e.match && e.match.length > 0);
        const protocol = module63(module26(e, "spec.template.spec.http")) ? "tcp" : "http";
        module74(e, "spec.protocol", protocol);
        const l = {
            type: t,
            principal,
            governor,
            protocol
        };
        if (t === "Bluegreen" || t === "Canary" && !a) {
            const s = module26(o, "[0].route", []);
            l.oldRoute = s.find((e)=>module26(e, "destination.subset") === principal) || {};
            l.newRoute = s.find((e)=>module26(e, "destination.subset") !== principal) || {};
            l.newVersion = module26(l.newRoute, "destination.subset");
            l.oldVersion = module26(l.oldRoute, "destination.subset");
        } else if (t === "Canary" && a) {
            const f = o.find((e)=>!!e.match) || {};
            const d = o.find((e)=>!e.match) || {};
            l.newRoute = {
                ...module26(f, "route[0]", {}),
                match: f.match
            };
            l.oldRoute = module26(d, "route[0]", {});
            l.newVersion = module26(l.newRoute, "destination.subset");
            l.oldVersion = module26(l.oldRoute, "destination.subset");
            l.byContent = true;
        } else if (t === "Mirror") {
            const p = o[0] || {};
            l.oldRoute = module26(p, "route[0]");
            l.mirror = p.mirror;
            l.newVersion = module26(l.mirror, "subset");
            l.oldVersion = module26(l.oldRoute, "destination.subset");
            l.governor = l.oldVersion;
        }
        l.hosts = module26(e, "spec.template.spec.hosts[0]");
        l.oldWorkloadName = module26(e, 'metadata.annotations["servicemesh.kubesphere.io/oldWorkloadName"]', `${l.hosts}-${l.oldVersion}`);
        l.newWorkloadName = module26(e, 'metadata.annotations["servicemesh.kubesphere.io/newWorkloadName"]', `${l.hosts}-${l.newVersion}`);
        return {
            ...l,
            ...j(e),
            namespace: module26(e, "metadata.namespace"),
            labels: module26(e, "metadata.labels", {}),
            annotations: module26(e, "metadata.annotations", {}),
            selector: module26(e, "spec.selector.matchLabels"),
            status: module26(e, "spec.assemblyPhase"),
            _originData: A(e)
        };
    },
    servicepolicies: function(e) {
        return {
            ...j(e),
            namespace: module26(e, "metadata.namespace"),
            labels: module26(e, "metadata.labels", {}),
            annotations: module26(e, "metadata.annotations", {}),
            selector: module26(e, "spec.selector.matchLabels", {}),
            connectPoolEnable: !module63(module26(e, "spec.template.spec.trafficPolicy.connectionPool")),
            outlierDetectionEnable: !module63(module26(e, "spec.template.spec.trafficPolicy.outlierDetection")),
            _originData: A(e)
        };
    },
    workspaces: function(e) {
        const t = module26(e, "spec.overrides", []);
        const n = module26(e, "spec.template", {});
        const r = module26(e, "spec.placement.clusters", []);
        const o = module321(t, "clusterName");
        const a = {};
        r.forEach(({ name })=>{
            a[name] = module136(n);
            if (o[name] && o[name].clusterOverrides) {
                o[name].clusterOverrides.forEach((e)=>{
                    const n = e.path.startsWith("/") ? e.path.slice(1) : e.path;
                    module74(a[name], n.replace(/\//g, "."), e.value);
                });
            }
        });
        const i = N(e);
        return {
            ...j(e),
            annotations: module26(e, "metadata.annotations", {}),
            manager: module26(e, "spec.template.spec.manager") || module26(e, "spec.manager") || getResourceCreator(e),
            clusters: r,
            networkIsolation: module26(e, "spec.template.spec.networkIsolation"),
            overrides: t,
            clusterTemplates: a,
            ...i,
            _originData: A(e)
        };
    },
    codequality: function(e) {
        const t = module26(e, "measures.component.measures", []);
        const values = module454(module26(e, "issues.facets", []), function(e) {
            return e.property === "severities";
        }, {}).values;
        return {
            totalCode: X(t, "ncloc", "", 0),
            bugRating: X(t, "reliability_rating", "", 1),
            bugs: X(t, "bugs", "", 0),
            securityRating: X(t, "security_rating", "", 1),
            vulnerabilities: X(t, "vulnerabilities", "", 0),
            codeSmells: X(t, "code_smells", "", 0),
            coverage: X(t, "coverage", "", "0.0"),
            totalStatus: X(t, "quality_gate_details", ""),
            critical: X(values, "CRITICAL", "count", 0),
            major: X(values, "MAJOR", "count", 0),
            minor: X(values, "MINOR", "count", 0),
            info: X(values, "INFO", "count", 0),
            blocker: X(values, "blocker", "count", 0),
            issues: module26(e, "issues.issues", []),
            sonarqubeDashboardUrl: module26(e, "jenkinsAction.sonarqubeDashboardUrl", ""),
            key: module26(e, "measures.component.key", "")
        };
    },
    imageBlob: function(e) {
        const t = module26(e, "imageManifest.layers", []);
        const size = t.reduce((acc, item)=>acc + item.size, 0);
        return {
            imageTag: module26(e, "imageTag", ""),
            message: module26(e, "message", ""),
            registry: module26(e, "registry", ""),
            layers: t.length,
            createTime: module26(e, "created", ""),
            size,
            exposedPorts: Object.keys(module26(e, "config.ExposedPorts", {})),
            status: module26(e, "status", ""),
            slug: module26(e, "slug", "")
        };
    },
    volumesnapshots: function(e) {
        const e_spec = e.spec;
        const n = e_spec === undefined ? {} : e_spec;
        const e_status = e.status;
        const o = e_status === undefined ? {} : e_status;
        const e_metadata = e.metadata;
        const i = e_metadata === undefined ? {} : e_metadata;
        const o_error = o.error;
        const s = o_error === undefined ? {} : o_error;
        const o_readyToUse = o.readyToUse;
        const s_message = s.message;
        const i_namespace = i.namespace;
        const p = i_namespace === undefined ? "" : i_namespace;
        const i_deletionTimestamp = i.deletionTimestamp;
        const m = i_deletionTimestamp === undefined ? "" : i_deletionTimestamp;
        const snapshotSourceName = module26(n, "source.persistentVolumeClaimName");
        return {
            ...j(e),
            snapshotClassName: module26(n, "volumeSnapshotClassName", "-"),
            restoreSize: module26(o, "restoreSize", 0),
            error: s,
            errorMessage: s_message,
            generating: !o_readyToUse && module63(s),
            readyToUse: o_readyToUse,
            status: o_readyToUse ? "ready" : "unready",
            backupStatus: m ? "deleting" : o_readyToUse ? "success" : "updating",
            namespace: p,
            snapshotSourceName,
            boundVolumeSnapshotContentName: module26(o, "boundVolumeSnapshotContentName", "-"),
            _originData: A(e)
        };
    },
    volumesnapshotcontents: function(e) {
        const e_spec = e.spec;
        const n = e_spec === undefined ? {} : e_spec;
        const e_status = e.status;
        const o = e_status === undefined ? {} : e_status;
        const e_metadata = e.metadata;
        const { deletionTimestamp = "", creationTimestamp = "" } = e_metadata === undefined ? {} : e_metadata;
        const o_error = o.error;
        const p = o_error === undefined ? {} : o_error;
        const { readyToUse, snapshotHandle } = o;
        const p_message = p.message;
        return {
            ...j(e),
            creationTimestamp,
            deletionTimestamp,
            namespace: module26(n, "volumeSnapshotRef.namespace"),
            snapshotClassName: module26(n, "volumeSnapshotClassName", "-"),
            volumeSnapshot: module26(n, "volumeSnapshotRef.name"),
            annotations: module26(e, "metadata.annotations"),
            labels: module26(e, "metadata.labels"),
            deletionPolicy: module26(n, "deletionPolicy", "-"),
            driver: module26(n, "driver", ""),
            source: module26(n, "source", {}),
            error: p,
            errorMessage: p_message,
            generating: !readyToUse && module63(p),
            readyToUse,
            status: readyToUse ? "ready" : "unready",
            snapshotHandle,
            restoreSize: module26(o, "restoreSize", 0),
            _originData: A(e)
        };
    },
    volumesnapshotclasses: function(e) {
        const e_metadata = e.metadata;
        const n = e_metadata === undefined ? {} : e_metadata;
        const { apiVersion, driver, deletionPolicy, kind } = e;
        const n_deletionTimestamp = n.deletionTimestamp;
        const deletionTimestamp = n_deletionTimestamp === undefined ? "" : n_deletionTimestamp;
        const n_creationTimestamp = n.creationTimestamp;
        const creationTimestamp = n_creationTimestamp === undefined ? "" : n_creationTimestamp;
        return {
            ...j(e),
            apiVersion,
            driver,
            deletionPolicy,
            kind,
            count: module26(n, 'annotations["kubesphere.io/snapshot-count"]', 0),
            creationTimestamp,
            deletionTimestamp,
            _originData: e
        };
    },
    users: I,
    clusters: function(e) {
        const conditions = module321(module26(e, "status.conditions", []), "type");
        const configz = module26(e, "status.configz", {});
        configz.ksVersion = module26(e, "status.kubeSphereVersion", "");
        const a = module26(conditions, "KubeConfigCertExpiresInSevenDays.message", undefined);
        const expiredDay = a ? formaDayTime(getLocalTime(a) - new Date) : undefined;
        const tags = Object.keys(module26(e, "metadata.labels", {})).filter((e)=>e.startsWith("label.cluster.kubesphere.io/")).map((e)=>({
                name: e.slice("label.cluster.kubesphere.io/".length)
            }));
        const isReady = !globals.app.isMultiCluster || module26(conditions, "Ready.status") === "True";
        const isSchedulable = !module26(e, "metadata.deletionTimestamp") && !!isReady && module26(conditions, "Schedulable.status") !== "False";
        return {
            ...j(e),
            conditions,
            configz,
            provider: module26(e, "spec.provider"),
            isHost: module198(module26(e, "metadata.labels", {}), "cluster-role.kubesphere.io/host"),
            expiredDay,
            kkName: module26(e, 'metadata.labels["kubekey.kubesphere.io/name"]', ""),
            nodeCount: module26(e, "status.nodeCount"),
            kubernetesVersion: module26(e, "status.kubernetesVersion"),
            labels: module26(e, "metadata.labels"),
            group: module26(e, 'metadata.labels["cluster.kubesphere.io/group"]', ""),
            isReady,
            isSchedulable,
            visibility: module26(e, 'metadata.labels["cluster.kubesphere.io/visibility"]'),
            connectionType: module26(e, "spec.connection.type"),
            hostCluster: e?.metadata?.labels?.["infra.edgewize.io/hosted"],
            _originData: A(e),
            tags
        };
    },
    kkclusters: function(e) {
        return {
            ...j(e),
            status: module26(e, "status", {}),
            labels: module26(e, "metadata.labels"),
            _originData: A(e)
        };
    },
    federated: function(e) {
        return function(t) {
            const n = j(t);
            const r = module26(t, "spec.overrides", []);
            const template = module136(module26(t, "spec.template", {}));
            const a = module26(t, "spec.placement.clusters", []);
            const i = module321(r, "clusterName");
            const l = {};
            a.forEach(({ name })=>{
                l[name] = module136(template);
                if (i[name] && i[name].clusterOverrides) {
                    i[name].clusterOverrides.forEach((e)=>{
                        const n = e.path.startsWith("/") ? e.path.slice(1) : e.path;
                        module74(l[name], n.replace(/\//g, "."), e.value);
                    });
                }
            });
            const type = module26(template, "type", "");
            return {
                ...module457(e(module199(template, {
                    metadata: t.metadata
                })), module159),
                ...n,
                overrides: r,
                template,
                clusters: a,
                clusterTemplates: l,
                type,
                isFedManaged: true,
                namespace: module26(t, "metadata.namespace"),
                labels: module26(t, "metadata.labels", {}),
                annotations: module26(t, "metadata.annotations", {}),
                app: module26(t, 'metadata.labels["app.kubernetes.io/name"]'),
                status: module26(t, "metadata.deletionTimestamp") ? "Deleting" : FED_ACTIVE_STATUS[t.kind] || "Active",
                _originData: A(t)
            };
        };
    },
    outputs: function(e) {
        const { metadata, spec } = e;
        const r = module241(spec, [
            "es",
            "kafka",
            "forward"
        ]);
        const o = module26(Object.keys(r), "[0]", "");
        const address = o === "kafka" ? module26(r, "kafka.brokers") : `${module26(r, `${o}.host`)}:${module26(r, `${o}.port`)}`;
        return {
            uid: metadata.uid,
            creationTimestamp: metadata.creationTimestamp,
            rules: module241(spec, [
                "es",
                "kafka",
                "forward"
            ]),
            type: o,
            name: metadata.name,
            address,
            enabled: module26(metadata, 'labels["logging.kubesphere.io/enabled"]') === "true",
            config: spec[o],
            component: module26(metadata, 'labels["logging.kubesphere.io/component"]'),
            _originData: e
        };
    },
    devops: function(e) {
        const t = module26(e, "status.phase");
        const n = module451(module26(e, 'metadata.annotations["devopsproject.devops.kubesphere.io/syncstatus"]'));
        const r = module26(e, "metadata.deletionTimestamp");
        return {
            ...j(e),
            name: module26(e, "metadata.generateName"),
            devops: module26(e, "metadata.name"),
            workspace: module26(e, 'metadata.labels["kubesphere.io/workspace"]'),
            namespace: module26(e, "status.adminNamespace"),
            status: r ? "Terminating" : t || n || "Active",
            sourceRepos: module26(e, "spec.argo.sourceRepos", []),
            destinations: module26(e, "spec.argo.destinations", []),
            _originData: A(e)
        };
    },
    dashboards: ee,
    clusterdashboards: ee,
    customresourcedefinitions: function(e) {
        return {
            versions: module26(e, "spec.versions", []),
            ...j(e),
            group: module26(e, "spec.group"),
            scope: module26(e, "spec.scope"),
            kind: module26(e, "spec.names.kind"),
            latestVersion: R(e),
            module: module26(e, "status.acceptedNames.plural"),
            namespace: module26(e, "metadata.namespace"),
            _originData: {
                ...A(e),
                status: e.status
            }
        };
    },
    pipelines: function(e) {
        const t = 'metadata.annotations["pipeline.devops.kubesphere.io/jenkins-metadata"]';
        const n = safeParseJSON(module26(e, t), {});
        const r = module26(e, "metadata.namespace");
        const o = module26(e, "metadata.name");
        const disabledBrancheNames = safeParseJSON(module26(e, 'metadata.annotations["pipeline.devops.kubesphere.io/jenkins-branches"]'), []).filter((e)=>e.disabled).map((e)=>e.name);
        return {
            ...j(e),
            annotations: module189(module26(e, "metadata.annotations"), t),
            displayName: module26(e, "metadata.name"),
            fullDisplayName: `${r}/${o}`,
            fullName: `${r}/${o}`,
            status: module26(e, 'metadata.annotations["pipeline.devops.kubesphere.io/syncstatus"]'),
            name: o,
            isMultiBranch: module26(e, "spec.type", "") === "multi-branch-pipeline",
            numberOfPipelines: 0,
            numberOfFolders: 0,
            pipelineFolderNames: [],
            totalNumberOfBranches: 0,
            numberOfFailingBranches: 0,
            numberOfSuccessfulBranches: 0,
            numberOfFailingPullRequests: 0,
            numberOfSuccessfulPullRequests: 0,
            branchNames: [],
            parameters: [],
            disabled: false,
            weatherScore: 100,
            validate: module26(e, 'metadata.annotations["pipeline.devops.kubesphere.io/jenkinsfile.validate"]', "success") === "success",
            disabledBrancheNames,
            ...n,
            _originData: A(e)
        };
    },
    networkpolicies: te,
    namespacenetworkpolicies: te,
    ippools: function(e) {
        const t = j(e);
        const n = A(e);
        module74(n, "spec.nodeSelector", module26(n, "spec.nodeSelector", "").replace(/'/g, '"'));
        return {
            ...t,
            cidr: module26(e, "spec.cidr"),
            status: module26(e, "status", {}),
            workspace: module26(e, 'metadata.labels["kubesphere.io/workspace"]', ""),
            isDefault: !module159(module26(e, 'metadata.labels["ippool.network.kubesphere.io/default"]')),
            selector: {
                "ippool.network.kubesphere.io/name": t.name
            },
            disabled: module26(e, "spec.disabled"),
            ipipMode: module26(e, "spec.ipipMode", "Never"),
            vxlanMode: module26(e, "spec.vxlanMode", "Never"),
            blockSize: module26(e, "spec.blockSize"),
            nodeSelector: module26(e, "spec.nodeSelector", ""),
            natOutgoing: module26(e, "spec.natOutgoing", false),
            _originData: n
        };
    },
    storageclasscapabilities: function({ metadata, spec }) {
        const volumeFeature = module26(spec, "features.volume");
        return {
            metadata,
            spec,
            snapshotFeature: module26(spec, "features.snapshot"),
            volumeFeature,
            supportExpandVolume: module250([
                "OFFLINE",
                "ONLINE"
            ], volumeFeature.expandMode)
        };
    },
    servicemonitors: function(e) {
        return {
            ...j(e),
            namespace: module26(e, "metadata.namespace"),
            endpoints: module26(e, "spec.endpoints", []),
            _originData: A(e)
        };
    },
    groups: function(e) {
        return {
            ...j(e),
            key: module26(e, "metadata.name"),
            title: module26(e, "metadata.generateName"),
            group_id: module26(e, "metadata.name"),
            group_name: module26(e, "metadata.generateName"),
            alias_name: module26(e, 'metadata.annotations["kubesphere.io/alias-name"]'),
            parent_id: module26(e, 'metadata.labels["iam.kubesphere.io/group-parent"]'),
            _originData: A(e)
        };
    },
    default: function(e) {
        return {
            ...j(e),
            namespace: module26(e, "metadata.namespace"),
            spec: module26(e, "spec"),
            _originData: A(e)
        };
    },
    rules: ne,
    clusterrulegroups: ne,
    alarmMessage: function(e) {
        const t = module26(e, "labels", {});
        return {
            ...module189(e, "labels"),
            ...t,
            _originData: A(e)
        };
    },
    notificationhistory: function(e) {
        return {
            ...e,
            uid: `${module26(e, "alertname")}-${module26(e, "message")}-${module26(e, "notificationTime")}`
        };
    },
    receivers: function(e) {
        return {
            ...j(e),
            spec: module26(e, "spec", {}),
            _originData: A(e)
        };
    },
    licenses: function(_origin) {
        const { data, status } = _origin;
        let r = {};
        let o = {};
        if (data) {
            const { licenseId, version, licenseType, subject, signature, issuer, notBefore, notAfter, issueAt, maxCluster, maxCore } = data;
            r = {
                id: licenseId,
                version,
                licenseType,
                owner: subject,
                license: signature,
                issuer,
                startTime: notBefore,
                endTime: notAfter,
                issueTime: issueAt,
                maxCluster,
                maxNode: data.maxNode,
                maxCore,
                maEndTime: data.maintenanceEnd,
                componentConstraints: data.componentConstraints,
                ...module58(data, [
                    "licenseId",
                    "version",
                    "licenseType",
                    "subject",
                    "signature",
                    "issuer",
                    "notBefore",
                    "notAfter",
                    "issueAt",
                    "maxCluster",
                    "maxCore",
                    "maxNode",
                    "maintenanceEnd",
                    "componentConstraints"
                ])
            };
        }
        if (status) {
            o = {
                clusterNum: status.clusterNum,
                violation: status.violation,
                serverTime: status.currentTime,
                ...module58(status, [
                    "clusterNum",
                    "violation",
                    "currentTime"
                ])
            };
        }
        return {
            ...r,
            ...o,
            _origin
        };
    },
    microservices: function(e) {
        return {
            ...j(e),
            annotations: module26(e, "status.metadata.annotations", {}),
            metadata: module26(e, "status.metadata", {}),
            labels: module26(e, "status.metadata.labels", {}),
            status: module26(e, "status.phase", ""),
            instanceCount: module26(e, "status.instanceCount"),
            healthyInstanceCount: module26(e, "status.healthyInstanceCount"),
            triggerFlag: module26(e, "status.triggerFlag"),
            enabled: module26(e, "spec.enabled"),
            _originData: A(e)
        };
    },
    microserviceinstances: function(e) {
        return {
            ...j(e),
            name: module26(e, "status.instanceId"),
            instanceId: module26(e, "status.instanceId"),
            ip: module26(e, "status.ip", ""),
            port: module26(e, "status.port", ""),
            podPhase: module26(e, "status.podPhase", ""),
            podName: module26(e, "status.podName", ""),
            podStartTime: module26(e, "status.podStartTime"),
            specEnabled: module26(e, "spec.enabled"),
            enabled: module26(e, "status.enabled"),
            annotations: module26(e, "status.metadata"),
            weight: module26(e, "status.weight"),
            _originData: A(e)
        };
    },
    configurations: function(e) {
        return {
            ...j(e),
            annotations: module26(e, "metadata.annotations", {}),
            labels: module26(e, "metadata.labels", {}),
            data: module26(e, "data"),
            status: module26(e, "status.phase", ""),
            resourceVersion: module26(e, "metadata.resourceVersion"),
            _originData: A(e)
        };
    },
    configurationhistories: function(e) {
        return {
            ...j(e),
            annotations: module26(e, "metadata.annotations", {}),
            labels: module26(e, "metadata.labels", {}),
            data: module26(e, "data"),
            status: module26(e, "status.phase", ""),
            _originData: A(e)
        };
    },
    microservicegateways: function(e) {
        return {
            ...j(e),
            annotations: module26(e, "metadata.annotations", {}),
            updateTime: getSpringCloudUpdateTime(e),
            labels: module26(e, "metadata.labels", {}),
            selector: module26(e, "spec.deployment.selector.matchLabels", {}),
            podNums: module26(e, "spec.deployment.replicas"),
            replicas: module26(e, "spec.deployment.replicas"),
            availablePodNums: module26(e, "status.deployment.availableReplicas", 0),
            containers: module26(e, "spec.deployment.template.spec.containers"),
            status: module26(e, "status.phase", ""),
            specType: module26(e, "spec.service.type", ""),
            ports: module26(e, "spec.service.ports", []),
            loadBalancerIngress: module26(e, "status.service.loadBalancer.ingress", []).map((e)=>e.ip || e.hostname),
            _originData: A(e)
        };
    },
    gatewayrouteconfigs: function(e) {
        return {
            ...j(e),
            gateway: module26(e, "spec.gateway"),
            order: module26(e, "spec.routes[0].order"),
            uri: module26(e, "spec.routes[0].uri"),
            filters: module26(e, "spec.routes[0].filters", []),
            predicates: module26(e, "spec.routes[0].predicates", []),
            _originData: A(e)
        };
    },
    cds: function(e) {
        const t = safeParseJSON(module26(e, "status.argoApp", ""), {});
        const syncStatus = module26(t, "sync.status");
        const healthStatus = module26(t, "health.status");
        const devops = module26(e, "devops");
        const a = module26(e, "spec.argoApp", {});
        const repoSource = module26(a, "spec.source", {});
        const destination = module26(a, "spec.destination", {});
        const operation = module26(a, "operation", {});
        const c = module26(a, "spec.syncPolicy.syncOptions", []);
        const syncType = Object.keys(module26(a, "spec.syncPolicy", {})).includes("automated") ? "automated" : "manual";
        const syncOptions = {};
        if (c.length > 0) {
            c.forEach((e)=>{
                const t = e.split("=");
                syncOptions[t[0]] = safeParseJSON(t[1], t[1]);
            });
        }
        const fluxAppType = module26(e, 'metadata.labels.["gitops.kubepshere.io/type"]');
        const fluxAppReadyNum = module26(e, 'metadata.labels.["gitops.kubesphere.io/ready-number"]');
        const fluxLastRevision = module26(e, 'metadata.annotations.["gitops.kubesphere.io/last-revision"]');
        const g = module26(e, "spec.fluxApp", {});
        const fluxSource = module26(g, "spec.source.sourceRef");
        const b = module26(e, "status.fluxApp", {});
        const fluxHelmReleaseStatus = module26(b, "helmReleaseStatus", {});
        const fluxKustomizationStatus = module26(b, "kustomizationStatus", {});
        return {
            ...j(e),
            syncStatus,
            healthStatus,
            status: t,
            devops,
            repoSource,
            destination,
            operation,
            syncType,
            syncOptions,
            fluxAppType,
            fluxAppReadyNum,
            fluxLastRevision,
            fluxSource,
            fluxHelmReleaseStatus,
            fluxKustomizationStatus,
            _originData: A(module189(e, "devops"))
        };
    },
    codeRepos: function(e) {
        const t = module26(e, "spec", {});
        return {
            ...j(e),
            provider: t.provider,
            repoURL: t.url,
            secret: t.secret || {},
            webhooks: t.webhooks || [],
            _originData: A(module189(e, "devops"))
        };
    },
    labels: function(e) {
        return {
            ...j(e),
            label: module26(e, "spec.key"),
            value: module26(e, "spec.value"),
            name: module26(e, "metadata.name"),
            clusters: module26(e, "spec.clusters", [])
        };
    },
    silences: function(e) {
        const t = module26(e, "spec.schedule", "");
        let isCron = !!t;
        let cron = {};
        try {
            if (t) {
                cron = module481.parseExpression(t);
            }
        } catch (e) {
            isCron = true;
        }
        const matchExpressions = module26(e, "spec.matcher.matchExpressions", []);
        let isType3 = false;
        if (isCron && (/^0 (\d{1,2}|\*) \* \* .*?$/.test(t) || /^0 \* \* \* \*$/.test(t) && !module26(e, "spec.duration") || /^0 \d{1,2} \* \* \*$/.test(t) || /^0 (\d{1,2}|\*) .*? \* \*$/.test(t))) {
            isType3 = true;
        }
        return re(e, {
            matchExpressions,
            cron,
            isCron,
            isType3
        });
    },
    nodegroups: function(e) {
        return {
            ...j(e),
            aliasName: module26(e, "spec.alias", ""),
            nodesCount: module26(e, 'metadata.labels["apps.edgewize.io/nodes-count"]', "0"),
            namespacesCount: module26(e, 'metadata.labels["apps.edgewize.io/namespaces-count"]', "0"),
            description: module26(e, "spec.description", ""),
            createTime: module26(e, "metadata.creationTimestamp", ""),
            status: module26(e, "status.state", ""),
            _originData: A(e)
        };
    },
    nodegrouproles: function(e) {
        return W(e);
    },
    nodegroupmembers: I,
    customScalings: function(e) {
        const n = j(e);
        const { scaleTargetRef, triggers = [], pollingInterval, cooldownPeriod, minReplicaCount, maxReplicaCount, advanced } = e?.spec ?? {};
        return {
            ...n,
            minReplicas: module26(e, "spec.minReplicas"),
            maxReplicas: module26(e, "spec.maxReplicas"),
            status: module26(e, "status", {}),
            workspace: module26(e, 'metadata.labels["kubesphere.io/workspace"]', ""),
            scaleTargetRef,
            triggers,
            pollingInterval,
            cooldownPeriod,
            minReplicaCount,
            maxReplicaCount,
            advanced,
            namespace: module26(e, "metadata.namespace"),
            _originData: A(e)
        };
    },
    clusteringresssettings: function(e) {
        return {
            ...j(e),
            uniqueDomainPattern: module26(e, "spec.uniqueDomainPattern", "")
        };
    }
};
export default oe;
