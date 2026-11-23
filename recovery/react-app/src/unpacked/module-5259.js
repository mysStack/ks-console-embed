import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-28.js";
import "unpacked/module-4.js";
import { getIndexRoute } from "utils/router.config";
import module5260 from "unpacked/module-5260.js";
import module5262 from "unpacked/module-5262.js";
import module5269 from "unpacked/module-5269.js";
const path = "/clusters/:cluster/ippools/:name";
export default function(e) {
    let t = [
        {
            path: `${path}/workspaces`,
            title: "WORKSPACE_PL",
            component: module5260,
            exact: true
        },
        {
            path: `${path}/namespaces`,
            title: "NAMESPACE_PL",
            component: module5262,
            exact: true
        },
        {
            path: `${path}/pods`,
            title: "POD_PL",
            component: module5269,
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
