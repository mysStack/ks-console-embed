import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-87.js";
import "./module-16.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import module31 from "./module-31.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import { QUOTAS_MAP } from "./module-72.js";
export const RESERVED_MODULES = [
    "limits.cpu",
    "requests.cpu",
    "limits.memory",
    "requests.memory"
];
export const QUOTAS_KEY_MODULE_MAP = Object.entries(QUOTAS_MAP).reduce((acc, entry)=>({
        ...acc,
        ...module31({}, entry[1].name, entry[0])
    }), {});
export const FEDERATED_PROJECT_UNSOPPORT_QUOTA = [
    "daemonsets",
    "jobs",
    "cronjobs"
];
