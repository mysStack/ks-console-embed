import "./module-15.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-10.js";
import "./module-24.js";
import "./module-64.js";
import "./module-75.js";
import "./module-7.js";
import "./module-4.js";
import module63 from "./module-63.js";
export const getNodeRoles = function(e) {
    let t = [];
    if (!module63(e)) {
        t = Object.keys(e).filter((e)=>e.startsWith("node-role.kubernetes.io/")).map((e)=>e.replace("node-role.kubernetes.io/", ""));
    }
    return t;
};
export const NODE_CONDITION_ICONS = {
    Ready: "templet",
    OutOfDisk: "storage",
    PIDPressure: "pie-chart",
    MemoryPressure: "memory",
    DiskPressure: "storage",
    NetworkUnavailable: "earth",
    ConfigOK: "record",
    KubeletReady: "cluster"
};
export const getConditionsStatus = function(e) {
    if (e.status === "Unknown") {
        return "Warning";
    }
    switch(e.type){
        case "OutOfDisk":
        case "MemoryPressure":
        case "DiskPressure":
        case "PIDPressure":
        case "NetworkUnavailable":
            if (e.status === "True") {
                return "Warning";
            }
            break;
        case "ConfigOK":
        case "KubeletReady":
            if (e.status === "False") {
                return "Warning";
            }
            break;
        case "Ready":
            if (e.status !== "True") {
                return "Warning";
            }
    }
    return "Running";
};
export const getNodeStatus = function({ status = {}, spec = {}, importStatus }) {
    if (importStatus && importStatus !== "success") {
        return importStatus;
    }
    const l = status.conditions || [];
    let s = true;
    if (spec.unschedulable) {
        return "Unschedulable";
    }
    l.forEach((e)=>{
        s = getConditionsStatus(e) === "Running";
    });
    if (s) {
        return "Running";
    }
    return "Warning";
};
