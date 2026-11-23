import "./module-15.js";
import { withProps } from "./module-52.js";
import module974 from "./module-974.js";
import module933 from "./module-933.js";
import module971 from "./module-971.js";
import module1042 from "./module-1042.js";
const s = [
    {
        title: "BASIC_INFORMATION",
        icon: "cdn",
        component: module974,
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
        component: module1042,
        required: true
    }
];
export default s;
