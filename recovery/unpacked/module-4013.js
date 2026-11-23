import "./module-15.js";
import "./module-11.js";
import "./module-28.js";
import "./module-4.js";
import { getIndexRoute } from "./module-317.js";
import module4014 from "./module-4014.js";
import module4016 from "./module-4016.js";
import module4026 from "./module-4026.js";
const path = "/clusters/:cluster/ippools/:name";
export default function(e) {
    let t = [
        {
            path: `${path}/workspaces`,
            title: "WORKSPACE_PL",
            component: module4014,
            exact: true
        },
        {
            path: `${path}/namespaces`,
            title: "NAMESPACE_PL",
            component: module4016,
            exact: true
        },
        {
            path: `${path}/pods`,
            title: "POD_PL",
            component: module4026,
            exact: true
        }
    ];
    if (e) {
        (t = t.filter((e)=>e.title !== "WORKSPACE_PL")).push(getIndexRoute({
            path,
            to: `${path}/namespaces`,
            exact: true
        }));
    } else {
        (t = t.filter((e)=>e.title !== "NAMESPACE_PL")).push(getIndexRoute({
            path,
            to: `${path}/workspaces`,
            exact: true
        }));
    }
    return t;
};
