import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-31.js";
import node from "./module-3657.js";
import workload from "./module-3658.js";
import pod from "./module-3659.js";
export const RESOURCE_METRICS_CONFIG = {
    node,
    workload,
    pod
};
export const ALL_METRICS_CONFIG = {
    ...node,
    ...workload,
    ...pod
};
