import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module4396 from "./module-4396.js";
import module4398 from "./module-4398.js";
const path = "/workspaces/:workspace/members/:name";
const c = [
    {
        path: `${path}/projects`,
        title: "PROJECT_PL",
        component: module4396,
        exact: true
    },
    {
        path: `${path}/devops`,
        title: "DEVOPS_PROJECT_PL",
        component: module4398,
        ksModule: "devops",
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/projects`,
        exact: true
    })
];
export default c;
