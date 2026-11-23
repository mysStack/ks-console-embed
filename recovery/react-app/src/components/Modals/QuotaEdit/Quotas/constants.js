import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-87.js";
import "unpacked/module-16.js";
import "unpacked/module-98.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import { QUOTAS_MAP } from "utils/constants";
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
