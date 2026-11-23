import "./module-15.js";
import module1234 from "./module-1234.js";
import module4394 from "./module-4394.js";
import module4400 from "./module-4400.js";
import module4402 from "./module-4402.js";
import module4425 from "./module-4425.js";
import module4429 from "./module-4429.js";
const i = "/workspaces/:workspace";
const f = [
    {
        path: `${i}/members/:name`,
        component: module4394
    },
    {
        path: `${i}/roles/:name`,
        component: module4400
    },
    {
        path: `${i}/apps/:appId`,
        component: module4402
    },
    {
        path: `${i}/repos/:repo_id`,
        component: module4425
    },
    {
        path: `${i}/gateways/:component/:gatewayName`,
        component: module1234
    },
    {
        path: `${i}/edge-apps/:name`,
        component: module4429
    }
];
export default f;
