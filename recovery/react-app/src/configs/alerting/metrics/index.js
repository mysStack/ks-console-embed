import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-31.js";
import node from "configs/alerting/metrics/node";
import workload from "configs/alerting/metrics/workload";
import pod from "configs/alerting/metrics/pod";
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
