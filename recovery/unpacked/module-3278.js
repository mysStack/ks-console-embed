import "./module-15.js";
import module1717 from "./module-1717.js";
import module3279 from "./module-3279.js";
import module3281 from "./module-3281.js";
import module3287 from "./module-3287.js";
import module3288 from "./module-3288.js";
export const PIPELINE_PROJECT_CREATE_STEPS = [
    {
        title: "BASIC_INFORMATION",
        component: module3279,
        icon: "cdn",
        required: true
    },
    {
        title: "ADVANCED_SETTINGS",
        component: module1717,
        required: true
    }
];
export const PIPELINE_CREATE_STEPS = [
    {
        title: "SELECT_TEMPLATE",
        component: module3281,
        required: true
    },
    {
        title: "PARAMETER_CONFIG",
        component: module3287,
        required: true,
        icon: "slider"
    }
];
export const PIPELINE_CREATE_STEPS_OLD = [
    {
        title: "SELECT_TEMPLATE",
        component: module3281,
        required: true
    },
    {
        title: "PARAMETER_CONFIG",
        component: module3288,
        required: true,
        icon: "slider"
    }
];
