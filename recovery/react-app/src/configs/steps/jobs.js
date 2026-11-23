import "unpacked/module-15.js";
import { withProps } from "utils/index";
import module974 from "components/Forms/Workload/BaseInfo";
import module971 from "components/Forms/Workload/VolumeSettings";
import module1042 from "components/Forms/Workload/AdvanceSettings";
import module1774 from "components/Forms/Job/JobSettings";
import module1775 from "components/Forms/Job/ContainerSettings";
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
