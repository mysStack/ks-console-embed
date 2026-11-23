import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import component from "pages/workspaces/containers/Repos/Detail/Events";
const path = "/workspaces/:workspace/repos/:repo_id";
const l = [
    {
        path: `${path}/events`,
        title: "EVENT_PL",
        component,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/events`,
        exact: true
    })
];
export default l;
