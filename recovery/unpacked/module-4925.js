import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import component from "./module-4926.js";
export default function(path) {
    return [
        {
            path: `${path}/resources`,
            title: "RESOURCE_STATUS",
            component,
            exact: true
        },
        getIndexRoute({
            path,
            to: `${path}/resources`,
            exact: true
        })
    ];
};
