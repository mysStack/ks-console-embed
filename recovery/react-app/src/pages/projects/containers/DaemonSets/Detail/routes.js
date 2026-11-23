import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module815 from "unpacked/module-815.js";
import module962 from "unpacked/module-962.js";
import module821 from "unpacked/module-821.js";
import module1072 from "unpacked/module-1072.js";
import module1071 from "pages/projects/containers/Deployments/Detail/RevisionControl";
import module3865 from "pages/projects/containers/DaemonSets/Detail/ResourceStatus";
export default function(path) {
    return [
        {
            path: `${path}/resource-status`,
            title: "RESOURCE_STATUS",
            component: module3865,
            exact: true
        },
        {
            path: `${path}/revision-control`,
            title: "REVISION_RECORDS",
            component: module1071,
            exact: true
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
            component: module1072,
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
