import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import component from "./module-4349.js";
const path = "/access/accounts/:name";
const c = [
    {
        path: `${path}/login-history`,
        title: "LOGIN_HISTORY",
        component,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/login-history`,
        exact: true
    })
];
export default c;
