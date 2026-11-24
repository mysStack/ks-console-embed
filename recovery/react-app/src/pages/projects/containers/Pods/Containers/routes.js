import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module962 from "unpacked/module-962.js";
import module3901 from "pages/projects/containers/Pods/Containers/ResourceStatus";
import module3906 from "pages/projects/containers/Pods/Containers/Monitoring";
import module3908 from "pages/projects/containers/Pods/Containers/Logs";
export default function(path) {
    return [
        {
            path: `${path}/resource-status`,
            title: "RESOURCE_STATUS",
            component: module3901,
            exact: true
        },
        {
            path: `${path}/monitors`,
            title: "MONITORING",
            component: module3906,
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
            path: `${path}/logs`,
            title: "CONTAINER_LOGS",
            component: module3908,
            exact: true
        },
        getIndexRoute({
            path,
            to: `${path}/resource-status`,
            exact: true
        })
    ];
};
