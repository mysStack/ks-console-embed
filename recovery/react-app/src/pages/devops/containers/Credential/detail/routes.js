import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module5076 from "pages/devops/containers/Credential/detail/detail";
import module5077 from "pages/devops/containers/Credential/detail/activity";
const path = "/:workspace/clusters/:cluster/devops/:devops/credentials/:credential_id";
const s = [
    {
        path: `${path}/detail`,
        title: "DETAILS",
        component: module5076,
        exact: true
    },
    {
        path: `${path}/activity`,
        title: "EVENT_PL",
        component: module5077,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/detail`,
        exact: true
    })
];
export default s;
