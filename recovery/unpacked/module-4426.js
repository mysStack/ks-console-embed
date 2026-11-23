import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import component from "./module-4427.js";
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
