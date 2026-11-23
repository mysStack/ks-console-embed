import "./module-15.js";
import { withProps } from "./module-52.js";
import component from "./module-3611.js";
import module1774 from "./module-1774.js";
import module1775 from "./module-1775.js";
import module971 from "./module-971.js";
import module1042 from "./module-1042.js";
const i = [
    {
        title: "BASIC_INFORMATION",
        icon: "cdn",
        component,
        required: true
    },
    {
        title: "STRATEGY_SETTINGS",
        icon: "cron-job",
        component: withProps(module1774, {
            prefix: "spec.jobTemplate.spec."
        }),
        required: true
    },
    {
        title: "POD_SETTINGS",
        icon: "docker",
        component: withProps(module1775, {
            prefix: "spec.jobTemplate.spec.template."
        }),
        required: true
    },
    {
        title: "STORAGE_SETTINGS",
        icon: "storage",
        component: withProps(module971, {
            prefix: "spec.jobTemplate.spec.template."
        }),
        required: true
    },
    {
        title: "ADVANCED_SETTINGS",
        icon: "slider",
        component: withProps(module1042, {
            prefix: "spec.jobTemplate.spec.template."
        }),
        required: true
    }
];
export default i;
