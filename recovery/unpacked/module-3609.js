import "./module-15.js";
import { withProps } from "./module-52.js";
import module974 from "./module-974.js";
import module971 from "./module-971.js";
import module1042 from "./module-1042.js";
import module1774 from "./module-1774.js";
import module1775 from "./module-1775.js";
const i = [
    {
        title: "BASIC_INFORMATION",
        icon: "cdn",
        component: withProps(module974, {
            maxNameLength: 63
        }),
        required: true
    },
    {
        title: "STRATEGY_SETTINGS",
        icon: "job",
        component: module1774,
        required: true
    },
    {
        title: "POD_SETTINGS",
        icon: "docker",
        component: module1775,
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
        component: module1042,
        required: true
    }
];
export default i;
