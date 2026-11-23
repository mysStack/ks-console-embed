import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module4396 from "pages/workspaces/containers/Members/Detail/Projects";
import module4398 from "pages/workspaces/containers/Members/Detail/DevOps";
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
