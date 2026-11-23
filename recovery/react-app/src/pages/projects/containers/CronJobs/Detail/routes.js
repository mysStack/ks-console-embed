import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module815 from "unpacked/module-815.js";
import module821 from "unpacked/module-821.js";
import module3872 from "pages/projects/containers/CronJobs/Detail/JobRecords";
export default function(path) {
    return [
        {
            path: `${path}/records`,
            title: "RUN_RECORDS",
            component: module3872,
            exact: true
        },
        {
            path: `${path}/metadata`,
            title: "METADATA",
            component: module821,
            exact: true
        },
        {
            path: `${path}/events`,
            title: "EVENT_PL",
            component: module815,
            exact: true,
            clusterModule: "whizard-monitoring"
        },
        getIndexRoute({
            path,
            to: `${path}/records`,
            exact: true
        })
    ];
};
