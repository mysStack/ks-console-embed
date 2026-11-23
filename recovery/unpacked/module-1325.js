import "./module-15.js";
import { composeComponent, withProps } from "./module-52.js";
import module2577 from "./module-2577.js";
import module933 from "./module-933.js";
import module971 from "./module-971.js";
import module2578 from "./module-2578.js";
import module1328 from "./module-1328.js";
import module1329 from "./module-1329.js";
import module2593 from "./module-2593.js";
import module1331 from "./module-1331.js";
import module1177 from "./module-1177.js";
import module2602 from "./module-2602.js";
const h = {
    statelessservice: [
        {
            title: "BASIC_INFORMATION",
            icon: "cdn",
            component: module2577,
            required: true
        },
        {
            title: "POD_SETTINGS",
            icon: "docker",
            component: withProps(module933, {
                withService: true,
                supportGpuSelect: true
            }),
            required: true
        },
        {
            title: "STORAGE_SETTINGS",
            icon: "storage",
            component: module971,
            required: true
        },
        {
            title: "ADVANCED_SETTINGS",
            icon: "slider",
            component: module2578,
            required: true
        }
    ],
    statefulservice: [
        {
            title: "BASIC_INFORMATION",
            icon: "cdn",
            component: module2577,
            required: true
        },
        {
            title: "POD_SETTINGS",
            icon: "docker",
            component: withProps(module933, {
                withService: true
            }),
            required: true
        },
        {
            title: "STORAGE_SETTINGS",
            icon: "storage",
            component: module971,
            required: true
        },
        {
            title: "ADVANCED_SETTINGS",
            icon: "slider",
            component: module2578,
            required: true
        }
    ],
    externalservice: [
        {
            title: "BASIC_INFORMATION",
            icon: "cdn",
            component: withProps(module2577, {
                noWorkload: true
            }),
            required: true
        },
        {
            title: "EXTERNAL_SERVICE",
            icon: "strategy-group",
            component: module1328,
            required: true
        }
    ],
    simpleservice: [
        {
            title: "BASIC_INFORMATION",
            icon: "cdn",
            component: withProps(module2577, {
                noWorkload: true
            }),
            required: true
        },
        {
            title: "SERVICE_SETTINGS",
            component: module1329,
            required: true
        },
        {
            title: "ADVANCED_SETTINGS",
            icon: "slider",
            component: withProps(module2578, {
                noWorkload: true
            }),
            required: true
        }
    ],
    b2iservice: [
        {
            title: "BASIC_INFORMATION",
            icon: "cdn",
            component: module2577,
            required: true
        },
        {
            title: "BUILD_SETTINGS",
            icon: "strategy-group",
            component: composeComponent(module2593, withProps(module1331, {
                prefix: "S2i"
            })),
            required: true
        },
        {
            title: "POD_SETTINGS",
            icon: "docker",
            component: withProps(module2602, {
                withService: true
            }),
            required: true
        },
        {
            title: "STORAGE_SETTINGS",
            icon: "storage",
            component: module971,
            required: true
        },
        {
            title: "ADVANCED_SETTINGS",
            icon: "slider",
            component: module2578,
            required: true
        }
    ],
    s2iservice: [
        {
            title: "BASIC_INFORMATION",
            icon: "cdn",
            component: module2577,
            required: true
        },
        {
            title: "BUILD_SETTINGS",
            icon: "strategy-group",
            component: composeComponent(module2593, withProps(module1177, {
                prefix: "S2i"
            })),
            required: true
        },
        {
            title: "POD_SETTINGS",
            icon: "docker",
            component: withProps(module2602, {
                withService: true
            }),
            required: true
        },
        {
            title: "STORAGE_SETTINGS",
            icon: "storage",
            component: module971,
            required: true
        },
        {
            title: "ADVANCED_SETTINGS",
            icon: "slider",
            component: module2578,
            required: true
        }
    ]
};
export default h;
