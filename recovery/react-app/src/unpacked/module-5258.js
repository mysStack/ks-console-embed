import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module1023 from "pages/access/containers/Roles/Detail/AuthorizationList";
import module1073 from "pages/access/containers/Roles/Detail/AuthorizedUsers";
const path = "/v2/edgewize/clusters/:cluster/roles/:name";
const l = [
    {
        path: `${path}/authorizations`,
        title: "PERMISSION_PL",
        component: module1023,
        exact: true
    },
    {
        path: `${path}/users`,
        title: "AUTHORIZED_USER_PL",
        component: module1073,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/authorizations`,
        exact: true
    })
];
export default l;
