import "./module-15.js";
import module2667 from "./module-2667.js";
import module2670 from "./module-2670.js";
import module2676 from "./module-2676.js";
import module2678 from "./module-2678.js";
import module2680 from "./module-2680.js";
import module2689 from "./module-2689.js";
import module2692 from "./module-2692.js";
import module1621 from "./module-1621.js";
import module2700 from "./module-2700.js";
export const IMPORT_CLUSTER = [
    {
        title: "BASIC_INFORMATION",
        component: module2670,
        required: true
    },
    {
        title: "CONNECTION_SETTINGS",
        component: module2676,
        required: true,
        isForm: false
    },
    {
        title: "CLUSTER_CONFIG",
        component: module2678,
        required: false,
        isForm: false
    }
];
export const IMPORT_EDGEWIZE_CLUSTER = [
    {
        title: "BASIC_INFORMATION",
        component: module1621,
        required: true
    },
    {
        title: "CLUSTER_SETTINGS",
        component: module2700,
        required: true
    }
];
export const NEW_CLUSTER = [
    {
        title: "HOW_TO_ADD",
        component: module2667,
        required: true
    },
    {
        title: "BASIC_INFORMATION",
        component: module2670,
        required: true
    },
    {
        title: "CONNECTION_SETTINGS",
        component: module2680,
        required: true
    },
    {
        title: "SYSTEM_COMPONENT_PL",
        component: module2692,
        required: true
    },
    {
        title: "ADVANCED_SETTINGS",
        component: module2689,
        required: true
    }
];
