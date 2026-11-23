import "./module-15.js";
import "./module-5.js";
import "./module-86.js";
import "./module-16.js";
import "./module-27.js";
import "./module-190.js";
import "./module-24.js";
import "./module-137.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import { SERVICE_TYPES } from "./module-72.js";
export const getServiceType = function(e) {
    const t = module26(e, "spec.type");
    const n = module26(e, "spec.clusterIP");
    const r = module26(e, "spec.selector", {});
    let SERVICE_TYPES_VirtualIP = SERVICE_TYPES.VirtualIP;
    if (t === "ClusterIP") {
        if (!(n !== "None" && n !== "")) {
            SERVICE_TYPES_VirtualIP = module63(r) ? SERVICE_TYPES.Unknown : SERVICE_TYPES.Headless;
        }
    } else if (t === "ExternalName") {
        SERVICE_TYPES_VirtualIP = SERVICE_TYPES.ExternalName;
    }
    return SERVICE_TYPES_VirtualIP;
};
export const getServicePort = function(e) {
    let e_protocol = e.protocol;
    if (e.name && e.name.indexOf("-") !== -1) {
        e_protocol = e.name.split("-")[0].toUpperCase();
    }
    return `${e.port}${e.targetPort ? `:${e.targetPort}` : ""}/${e_protocol}`;
};
export const getMetricData = function(e, t) {
    return e[e.length - 1] && Number(e[e.length - 1][1]) || t;
};
export const getSuccessCount = function(e = [], t = []) {
    const n = Number(e[1]) || 0;
    const r = Number(t[1]) || 0;
    return [
        e[0],
        n > 0 ? n - r : NaN
    ];
};
export const getSuccessRate = function(e = [], t = []) {
    const n = Number(e[1]) || 0;
    const r = Number(t[1]) || 0;
    return [
        e[0],
        n > 0 ? ((n - r) / n).toFixed(4) : NaN
    ];
};
