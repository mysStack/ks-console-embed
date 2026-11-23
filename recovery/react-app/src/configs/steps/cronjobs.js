import "unpacked/module-15.js";
import { withProps } from "utils/index";
import component from "components/Forms/CronJob/BaseInfo";
import module1774 from "components/Forms/Job/JobSettings";
import module1775 from "components/Forms/Job/ContainerSettings";
import module971 from "components/Forms/Workload/VolumeSettings";
import module1042 from "components/Forms/Workload/AdvanceSettings";
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
