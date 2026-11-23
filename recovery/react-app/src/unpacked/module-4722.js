import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module815 from "unpacked/module-815.js";
import module4723 from "unpacked/module-4723.js";
import module4724 from "unpacked/module-4724.js";
import module1824 from "pages/projects/containers/Pods/Detail/ResourceStatus";
import module1827 from "pages/projects/containers/Pods/Detail/ScheduleInfo";
import module4725 from "unpacked/module-4725.js";
export default function(path) {
    return [
        {
            path: `${path}/resource-status`,
            title: "RESOURCE_STATUS",
            component: module1824,
            exact: true
        },
        {
            path: `${path}/schedule`,
            title: "SCHEDULING_INFORMATION",
            component: module1827
        },
        {
            path: `${path}/metadata`,
            title: "METADATA",
            component: module4724,
            exact: true
        },
        {
            path: `${path}/monitors`,
            title: "MONITORING",
            component: module4725,
            exact: true,
            clusterModule: "whizard-monitoring"
        },
        {
            path: `${path}/env`,
            title: "ENVIRONMENT_VARIABLE_PL",
            component: module4723,
            exact: true
        },
        {
            path: `${path}/events`,
            title: "EVENT_PL",
            component: module815,
            exact: true
        },
        getIndexRoute({
            path,
            to: `${path}/resource-status`,
            exact: true
        })
    ];
};
