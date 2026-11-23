import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-30.js";
import "./module-18.js";
import "./module-87.js";
import "./module-16.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-24.js";
import "./module-110.js";
import "./module-38.js";
import "./module-62.js";
import "./module-7.js";
import "./module-32.js";
import module41 from "./module-41.js";
import module31 from "./module-31.js";
import module44 from "./module-44.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-319.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module74 from "./module-74.js";
import module199 from "./module-199.js";
import module159 from "./module-159.js";
import { cpuFormat, memoryFormat, resourceLimitKey, to } from "./module-52.js";
import { getVolumeType } from "./module-472.js";
import { isK8sVersionAbove } from "./module-362.js";
import module105 from "./module-105.js";
export const getHpaFormattedData = function(t = {}, n) {
    const r = module26(t, "metadata.annotations.cpuCurrentUtilization", 0);
    const o = module26(t, "metadata.annotations.cpuTargetUtilization", 0);
    const a = module26(t, "metadata.annotations.memoryCurrentValue", 0);
    const i = module26(t, "metadata.annotations.memoryTargetValue", "");
    const s = o ? [
        {
            type: "Resource",
            resource: {
                name: "cpu",
                target: {
                    type: "Utilization",
                    averageUtilization: Number(o)
                }
            }
        }
    ] : [];
    const f = i?.match(/(\d+)/)?.[0];
    const d = f && Number(f) > 0 ? [
        {
            type: "Resource",
            resource: {
                name: "memory",
                target: {
                    type: "AverageValue",
                    averageValue: `${f}Mi`
                }
            }
        }
    ] : [];
    const p = module199(t, {
        apiVersion: isK8sVersionAbove("v1.23.0", n) ? "autoscaling/v2" : "autoscaling/v2beta2",
        kind: "HorizontalPodAutoscaler",
        metadata: {
            annotations: {
                cpuCurrentUtilization: String(r),
                cpuTargetUtilization: String(o),
                memoryCurrentValue: String(a),
                memoryTargetValue: String(i)
            }
        }
    });
    module74(p, "spec.metrics", [].concat(d, s));
    return p;
};
export const getWorkloadVolumes = (()=>{
    const e = module44(module41.mark(function e(t) {
        let n;
        let r;
        let a;
        let i;
        let u;
        let c;
        const f = arguments;
        return module41.wrap(function(e) {
            while(true){
                switch(e.prev = e.next){
                    case 0:
                        n = f.length > 1 && f[1] !== undefined && f[1];
                        r = t.cluster ? `api/v1/klusters/${t.cluster}/namespaces/${t.namespace}/persistentvolumeclaims` : `api/v1/namespaces/${t.namespace}/persistentvolumeclaims`;
                        a = [];
                        if (module63(t.volumes)) {
                            e.next = 11;
                            break;
                        }
                        i = [];
                        a = t.volumes.map((e)=>{
                            let t = "";
                            if (e.persistentVolumeClaim) {
                                t = e.persistentVolumeClaim.claimName;
                                i.push(to(request.get(`${r}/${t}`)));
                            } else {
                                t = e.HostPath ? e.HostPath.path : e.name;
                            }
                            return {
                                ...e,
                                storage: "-",
                                name: t,
                                mountName: e.name,
                                type: getVolumeType(e)
                            };
                        });
                        e.next = 8;
                        return Promise.all(i);
                    case 8:
                        u = e.sent;
                        c = u.map(module105.volumes);
                        a.forEach((e)=>{
                            if (e.type === "Volume") {
                                const n = c.find((t)=>t.name === e.name) || {};
                                e.storage = n.capacity;
                                e.capacity = n.capacity;
                                e.storageClassName = n.storageClassName;
                                e.accessMode = module26(n, "accessMode");
                            }
                            if (!module63(t.containers)) {
                                const r = [];
                                t.containers.forEach((t)=>{
                                    if (!module63(t.volumeMounts)) {
                                        t.volumeMounts.forEach((n)=>{
                                            if (n.name === e.mountName) {
                                                r.push({
                                                    ...n,
                                                    container: t.name,
                                                    accessMode: n.readOnly ? "read-only" : "read-write"
                                                });
                                            }
                                        });
                                    }
                                });
                                e.mounts = r;
                            }
                        });
                    case 11:
                        if (n) {
                            t.volumes = a;
                        }
                        return e.abrupt("return", a);
                    case 13:
                    case "end":
                        return e.stop();
                }
            }
        }, e);
    }));
    return function(t) {
        return e.apply(this, arguments);
    };
})();
export const getWorkloadUpdateTime = function(e) {
    const t = module26(e, "metadata.annotations", {});
    const n = module26(e, "status", {});
    if (t.updateTime) {
        return t.updateTime;
    }
    const r = n.conditions || [];
    if (module63(r)) {
        return module26(e, "metadata.creationTimestamp");
    }
    let o = new Date(module26(r, "[0].lastUpdateTime", 0)).valueOf();
    r.forEach(({ lastUpdateTime })=>{
        const n = new Date(lastUpdateTime).valueOf();
        if (n > o) {
            o = n;
        }
    });
    return o;
};
export const getEdgeAppSetsUpdateTime = function(e) {
    const t = module26(e, "metadata.managedFields");
    if (module63(t)) {
        return module26(e, "metadata.creationTimestamp");
    }
    let n = new Date(module26(t, "[0].time", 0)).valueOf();
    t.forEach(({ lastUpdateTime })=>{
        const r = new Date(lastUpdateTime).valueOf();
        if (r > n) {
            n = r;
        }
    });
    return n;
};
export const getSpringCloudUpdateTime = function(e) {
    const n = module26(e, "metadata.annotations", {});
    const r = module26(e, "status", {});
    if (n.updateTime) {
        return n.updateTime;
    }
    const o = r.deployment?.conditions || [];
    if (module63(o)) {
        return module26(e, "metadata.creationTimestamp");
    }
    let a = new Date(module26(o, "[0].lastUpdateTime", 0)).valueOf();
    o.forEach(({ lastUpdateTime })=>{
        const n = new Date(lastUpdateTime).valueOf();
        if (n > a) {
            a = n;
        }
    });
    return a;
};
export const getJobUpdateTime = function(e) {
    const t = module26(e, "status", {}).conditions || [];
    if (module63(t)) {
        return module26(e, "metadata.creationTimestamp");
    }
    let n = new Date(module26(t, "[0].lastTransitionTime", 0)).valueOf();
    t.forEach(({ lastTransitionTime })=>{
        const r = new Date(lastTransitionTime).valueOf();
        if (r > n) {
            n = r;
        }
    });
    return n;
};
export const getCurrentRevision = function(e, t, n = "deployments") {
    let r = 0;
    switch(n){
        default:
            r = module26(e, 'annotations["deployment.kubernetes.io/revision"]');
            break;
        case "statefulsets":
        case "daemonsets":
            let o = module26(t[0], "revision", 0);
            for(let a = 1; a < t.length; a++){
                if (t[a].revision > o) {
                    o = t[a].revision;
                }
            }
            const i = t.find((t)=>t.name === module26(e, "status.currentRevision"));
            r = i ? i.revision : o;
    }
    return parseInt(r, 10);
};
export const getWorkloadReplicaCount = function(e, t) {
    const n = {
        ready: 0,
        total: 0
    };
    if (t === "daemonsets") {
        n.ready = module26(e, "status.numberReady", 0);
        n.total = module26(e, "status.desiredNumberScheduled", 0);
    } else {
        n.ready = module26(e, "readyPodNums", 0);
        n.total = module26(e, "podNums", 0);
    }
    return n;
};
export const getLeftQuota = function(e, t) {
    const n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    function r(e, item) {
        let r;
        const o = module26(e, `hard["${item}"]`);
        const a = module26(e, `used["${item}"]`, "0");
        if (o) {
            if (item.endsWith("cpu")) {
                r = cpuFormat(o) - (n ? 0 : cpuFormat(a));
            } else if (item.endsWith("memory")) {
                r = memoryFormat(o) - (n ? 0 : memoryFormat(a));
            }
        }
        return r;
    }
    return {
        workspace: resourceLimitKey.reduce((acc, item)=>({
                ...acc,
                ...module31({}, item, r(e, item))
            }), {}),
        namespace: resourceLimitKey.reduce((acc, item)=>({
                ...acc,
                ...module31({}, item, r(t, item))
            }), {})
    };
};
export const getUsedQuota = function(e) {
    const t = resourceLimitKey.reduce((acc, item)=>({
            ...acc,
            ...module31({}, item, ((e, item_1)=>{
                let n;
                const r = module26(e, `used["${item_1}"]`);
                if (r !== "0") {
                    if (item_1.endsWith("cpu")) {
                        n = cpuFormat(r);
                    } else if (item_1.endsWith("memory")) {
                        n = memoryFormat(r);
                    }
                }
                return n;
            })(e, item))
        }), {});
    return {
        ...t
    };
};
export const getContainersResources = function(e, t, n = 1) {
    const r = [
        "limits.cpu",
        "limits.memory",
        "requests.cpu",
        "requests.memory"
    ];
    const o = {};
    r.forEach((r)=>{
        let a = 0;
        let i = 0;
        let s = function(e) {
            return e;
        };
        if (r.endsWith("cpu")) {
            s = cpuFormat;
        } else if (r.endsWith("memory")) {
            s = memoryFormat;
        }
        t.forEach((e)=>{
            const t = s(module26(e, `resources.${r}`));
            if (module159(t) || t === null) {
                a = Infinity;
            } else if (a !== Infinity) {
                a = Math.max(t, a);
            }
        });
        e.forEach((e)=>{
            const t = s(module26(e, `resources.${r}`));
            if (module159(t) || t === null) {
                i = Infinity;
            } else if (i !== Infinity) {
                i += t;
            }
        });
        o[r] = n * Math.max(a, i);
    });
    return o;
};
export const compareQuotaAndResources = function(e, t) {
    const n = {};
    Object.keys(t).forEach((r)=>{
        const o = t[r];
        let a = "";
        const i = module26(e, `workspace["${r}"]`, Infinity);
        const s = module26(e, `namespace["${r}"]`, Infinity);
        if (r.endsWith("cpu")) {
            a = "Core";
        } else if (r.endsWith("memory")) {
            a = "Mi";
        }
        n[r] = {
            cost: o === Infinity ? undefined : `${o}${a}`,
            namespaceQuota: s === Infinity ? undefined : `${s}${a}`,
            workspaceQuota: i === Infinity ? undefined : `${i}${a}`,
            overcost: o === Infinity ? "unset" : o > i || o > s
        };
    });
    return n;
};
export const getVersionFormattedData = function(e) {
    const t = module26(e, "_originData");
    const spec = {
        ...module26(t, "spec.deploymentSpec"),
        version: e.versionId
    };
    return {
        ...t,
        spec
    };
};
