import "unpacked/module-15.js";
import module974 from "components/Forms/Workload/BaseInfo";
import module1773 from "components/Forms/Volume/VolumeSettings";
import module3570 from "components/Forms/Volume/AdvanceSettings";
import module3572 from "components/Forms/Volume/VolumeSettings/AccessModeSelectForm";
const c = [
    {
        title: "BASIC_INFORMATION",
        icon: "cdn",
        component: module974,
        required: true
    },
    {
        title: "STORAGE_SETTINGS",
        icon: "storage",
        component: module1773,
        required: true
    },
    {
        title: "ADVANCED_SETTINGS",
        icon: "slider",
        component: module3570,
        required: true
    }
];
export default c;
export const APPLY_SNAPSHOT_FORM_STEPS = [
    {
        title: "BASIC_INFORMATION",
        icon: "cdn",
        component: module974,
        required: true
    },
    {
        title: "STORAGE_SETTINGS",
        icon: "storage",
        component: module3572,
        required: true
    },
    {
        title: "ADVANCED_SETTINGS",
        icon: "slider",
        component: module3570,
        required: true
    }
];
