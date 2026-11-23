import "unpacked/module-15.js";
import module974 from "components/Forms/Workload/BaseInfo";
import module933 from "components/Forms/Workload/ContainerSettings";
import module971 from "components/Forms/Workload/VolumeSettings";
import module1042 from "components/Forms/Workload/AdvanceSettings";
const c = [
    {
        title: "BASIC_INFORMATION",
        icon: "cdn",
        component: module974,
        required: true
    },
    {
        title: "POD_SETTINGS",
        icon: "docker",
        component: module933,
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
export default c;
