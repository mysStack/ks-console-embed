import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import component from "pages/access/containers/Roles/Detail/AuthorizationList";
const path = "/node-groups/clusters/:cluster/:group/roles/:name";
const c = [
    {
        path: `${path}/authorizations`,
        title: "PERMISSION_PL",
        component,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/authorizations`,
        exact: true
    })
];
export default c;
