import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import component from "pages/devops/containers/CD/detail/SyncStatus";
const path = "/:workspace/clusters/:cluster/devops/:devops/cd/:cd";
const l = [
    {
        path: `${path}/syncStatus`,
        title: "SYNC_STATUS",
        component
    },
    getIndexRoute({
        path,
        to: `${path}/syncStatus`,
        exact: true
    })
];
export default l;
