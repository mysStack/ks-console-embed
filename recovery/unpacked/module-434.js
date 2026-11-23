import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-86.js";
import "./module-97.js";
import "./module-27.js";
import "./module-10.js";
import "./module-75.js";
import "./module-7.js";
import "./module-245.js";
import "./module-4.js";
import module26 from "./module-26.js";
import module250 from "./module-250.js";
import module63 from "./module-63.js";
import module159 from "./module-159.js";
import module446 from "./module-446.js";
const c = [
    "Initialized",
    "Ready",
    "ContainersReady",
    "PodScheduled"
];
export const getDeployStatus = function({ hasS2i, spec = {}, status = {}, annotations = {} }) {
    if (hasS2i) {
        const f = module26(annotations, "['devops.kubesphere.io/inithasbeencomplted']", "Running");
        if (f !== "Successful") {
            return `S2I_${f}`;
        }
    }
    if (spec.replicas !== 0 || module159(status.readyReplicas) || status.readyReplicas === 0) {
        if (status?.conditions?.find(function(e) {
            return e.type === "ReplicaFailure" && e.status === "True" || e.type === "Progressing" && e.status === "False" || e.type === "Available" && e.status === "False";
        })) {
            return "Updating";
        }
        if (spec.replicas) {
            if (status.readyReplicas === spec.replicas) {
                return "Running";
            }
            return "Updating";
        }
        return "Stopped";
    }
    return "Updating";
};
export const getStatefulSetStatus = function({ spec = {}, status = {} }) {
    if (spec.replicas !== 0 || module159(status.readyReplicas) || status.readyReplicas === 0) {
        if (spec.replicas) {
            if (status.readyReplicas === spec.replicas) {
                return "Running";
            }
            return "Updating";
        }
        return "Stopped";
    }
    return "Updating";
};
export const getDaemonSetStatus = function({ status }) {
    if (status.desiredNumberScheduled === 0) {
        return "Stopped";
    }
    if (status.numberAvailable === status.desiredNumberScheduled) {
        return "Running";
    }
    return "Updating";
};
export const getJobStatus = function({ spec, status }) {
    if (module63(status)) {
        return "Failed";
    }
    let r = "RUNNING";
    if (!module63(status.conditions)) {
        status.conditions.some((e)=>{
            if (e.type === "Failed" && e.status === "True") {
                r = "FAILED";
                return true;
            }
            return e.type === "Complete" && e.status === "True" && (r = "COMPLETED", true);
        });
    }
    if (spec.Completions <= status.Succeed) {
        r = "Failed";
    }
    return r;
};
export const getCronJobStatus = function(e) {
    if (e.spec.suspend) {
        return "Paused";
    }
    return "Running";
};
export const getVolumeStatus = function({ status }) {
    const n = (status === undefined ? {} : status).conditions || [];
    if (!module63(n)) {
        return (n.find(({ type })=>module250([
                "FileSystemResizePending",
                "Resizing"
            ], type)) || {}).type;
    }
};
export const getWorkloadStatus = function(e, t) {
    const n = {
        deployments: getDeployStatus,
        statefulsets: getStatefulSetStatus,
        daemonsets: getDaemonSetStatus,
        jobs: getJobStatus,
        cronjobs: getCronJobStatus
    };
    let r = "";
    let o = "";
    if (n[t]) {
        r = n[t](e);
    }
    if (r === "Updating") {
        const i = module26(e, "status.conditions", []).filter((e)=>{
            if (e.type === "ReplicaFailure") {
                return e.status === "True";
            }
            return e.status === "False";
        }).reverse();
        o = module26(i, "[0].reason");
    }
    return {
        status: r,
        reason: o
    };
};
export const getContainerStatus = function({ state = {}, ready } = {}) {
    let o = "waiting";
    const i = Object.keys(state);
    if (i.length === 0) {
        o = "waiting";
    } else if (i.length === 1) {
        o = i[0];
    } else {
        o = i[0];
        i.forEach((e)=>{
            if (state[o].startedAt < state[e].startedAt) {
                o = e;
            }
        });
    }
    let l = module26(state, `${o}.reason`, "");
    if (!(ready || o !== "running")) {
        o = "waiting";
        l = "ContainerNotReady";
    }
    return {
        reason: l,
        status: o
    };
};
export const getPodStatusAndRestartCount = function(e) {
    let t;
    const { phase = "", reason = "", containerStatuses, initContainerStatuses = [], conditions = [] } = e.status || {};
    let m = phase;
    let restarts = 0;
    let y = false;
    if (!module63(reason)) {
        m = reason;
    }
    if (!module63(initContainerStatuses)) {
        initContainerStatuses.forEach((t, n)=>{
            restarts += Number(t.restartCount);
            const r = module26(t, "state.waiting");
            const o = module26(t, "state.terminated");
            if (!o || o.exitCode !== 0) {
                if (o) {
                    m = module63(o.reason) ? `Init:${o.reason}` : o.signal !== 0 ? `Init:Signal:${o.signal}` : `Init:ExitCode:${o.exitCode}`;
                    y = true;
                } else if (r && o && !module63(o.reason) && r.reason !== "PodInitializing") {
                    m = `Init:${o.reason}`;
                    y = true;
                } else {
                    const i = module26(e, "spec.initContainers.length");
                    m = `Init:${n}/${i}`;
                    y = true;
                }
            }
        });
    }
    if (!y && !module63(containerStatuses)) {
        let b = false;
        restarts = 0;
        containerStatuses.forEach((e)=>{
            restarts += Number(e.restartCount);
            const t = module26(e, "state.waiting");
            const n = module26(e, "state.terminated");
            if (t && t.reason) {
                m = t.reason;
            } else if (n && n.reason) {
                m = n.reason;
            } else if (n && !n.reason) {
                m = n.singal !== 0 ? `Signal:${n.singal}` : `ExitCode:${n.exitCode}`;
            } else if (e.ready && e.state && e.state.running) {
                b = true;
            }
        });
        if (m === "Completed" && b) {
            m = "Running";
        }
        conditions.filter((e)=>c.indexOf(e.type) !== -1).forEach((e)=>{
            if (m === "Running" && (e.type === "Unschedulable" ? e.status === "True" : e.status === "False")) {
                m = "Pending";
            }
            if (e.type === "Ready") {
                t = e;
            }
        });
    }
    if (module26(e, "metadata.deletionTimestamp")) {
        m = reason === "NodeLost" ? "UnKnown" : "Terminating";
    }
    let C = "waiting";
    switch(m){
        case "Running":
            C = "running";
            break;
        case "Failed":
        case "Error":
            C = "error";
            break;
        case "Completed":
            C = "completed";
            break;
        case "Succeeded":
            if (t.reason === "PodCompleted") {
                C = "completed";
            } else {
                m = t.reason;
            }
            break;
        case "Pending":
            const w = module446(conditions.filter((e)=>{
                if (e.type === "Unschedulable") {
                    return e.status === "True";
                }
                return e.status === "False";
            }), "lastTransitionTime");
            m = module26(w, "[0].reason", m);
            break;
        default:
            if (m.startsWith("OutOf")) {
                C = "error";
            }
    }
    return {
        status: m,
        type: C,
        restarts
    };
};
export const getPipelineStatus = function(e) {
    const { state = "", result = "" } = e || {};
    if (state === "QUEUED") {
        return {
            type: "queued",
            label: t("QUEUED")
        };
    }
    if (state === "RUNNING") {
        return {
            type: "running",
            label: t("RUNNING")
        };
    }
    if (result === "UNSTABLE") {
        return {
            type: "unstable",
            label: t("UNSTABLE")
        };
    }
    if (state === "FINISHED" && result === "SUCCESS") {
        return {
            type: "success",
            label: t("SUCCESSFUL")
        };
    }
    if (state === "FINISHED" && result === "FAILURE") {
        return {
            type: "failure",
            label: t("FAILED")
        };
    }
    if (state === "FINISHED" && result === "ABORTED") {
        return {
            type: "aborted",
            label: t("ABORTED")
        };
    }
    if (state === "PAUSED") {
        return {
            type: "paused",
            label: t("PAUSED")
        };
    }
    return {
        type: "nostatus",
        label: t("NOT_RUNNING")
    };
};
export const getComponentStatus = function(e) {
    const e_totalBackends = e.totalBackends;
    if (e.healthyBackends !== e_totalBackends) {
        return "Warning";
    }
    if (e_totalBackends === 0) {
        return "Stopped";
    }
    return "Healthy";
};
export const getOverlayStatus = function({ ipipMode, vxlanMode }) {
    if (ipipMode === "Never" && vxlanMode === "Never" || !ipipMode && !vxlanMode) {
        return {
            type: t("NOT_SET"),
            value: null
        };
    }
    if (ipipMode !== "Never") {
        return {
            type: "IPIP",
            value: ipipMode
        };
    }
    return {
        type: "VXLAN",
        value: vxlanMode
    };
};
