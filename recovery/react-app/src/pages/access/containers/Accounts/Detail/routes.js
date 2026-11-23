import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import component from "pages/access/containers/Accounts/Detail/LoginHistory";
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
