import "unpacked/module-15.js";
import module2650 from "components/Forms/CD/BaseInfo";
import module2653 from "components/Forms/CD/Advance/CodeRepoSetting";
import module2655 from "components/Forms/CD/Advance/SyncSetting";
export const CD_FORM = [
    {
        title: "BASIC_INFORMATION",
        component: module2650,
        required: true
    },
    {
        title: "CODE_REPOSITORY_SETTINGS",
        component: module2653,
        required: true,
        icon: "code"
    },
    {
        title: "SYNC_SETTINGS",
        component: module2655,
        required: true,
        icon: "timed-task"
    }
];
