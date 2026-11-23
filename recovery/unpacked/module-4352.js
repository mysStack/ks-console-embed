import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module1023 from "./module-1023.js";
import module1073 from "./module-1073.js";
const path = "/access/roles/:name";
const i = [
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
export default i;
