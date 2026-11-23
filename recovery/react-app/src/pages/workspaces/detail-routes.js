import "unpacked/module-15.js";
import module1234 from "pages/clusters/gateways/Detail";
import module4394 from "pages/workspaces/containers/Members/Detail";
import module4400 from "pages/workspaces/containers/Roles/Detail";
import module4402 from "pages/workspaces/containers/Apps/Detail";
import module4425 from "pages/workspaces/containers/Repos/Detail";
import module4429 from "pages/workspaces/edge-apps/Detail";
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
