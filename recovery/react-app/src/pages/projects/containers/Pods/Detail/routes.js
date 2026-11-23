import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module815 from "unpacked/module-815.js";
import module962 from "unpacked/module-962.js";
import module821 from "unpacked/module-821.js";
import module1824 from "pages/projects/containers/Pods/Detail/ResourceStatus";
import module1827 from "pages/projects/containers/Pods/Detail/ScheduleInfo";
import module1829 from "pages/projects/containers/Pods/Detail/Monitoring";
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
            component: module821,
            exact: true
        },
        {
            path: `${path}/monitors`,
            title: "MONITORING",
            component: module1829,
            exact: true,
            clusterModule: "whizard-monitoring"
        },
        {
            path: `${path}/env`,
            title: "ENVIRONMENT_VARIABLE_PL",
            component: module962,
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
