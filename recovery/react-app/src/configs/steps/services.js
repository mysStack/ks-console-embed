import "unpacked/module-15.js";
import { composeComponent, withProps } from "utils/index";
import module2577 from "components/Forms/Service/BaseInfo";
import module933 from "components/Forms/Workload/ContainerSettings";
import module971 from "components/Forms/Workload/VolumeSettings";
import module2578 from "components/Forms/Service/AdvanceSettings";
import module1328 from "components/Forms/Service/ExternalName";
import module1329 from "components/Forms/Service/ServiceSettings";
import module2593 from "components/Forms/Service/StatefulSetting";
import module1331 from "components/Forms/ImageBuilder/B2IForm";
import module1177 from "components/Forms/ImageBuilder/S2IForm";
import module2602 from "components/Forms/Service/ContainerSetting";
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
