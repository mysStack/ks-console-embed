import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import component from "./module-5035.js";
export default function(path) {
    return [
        {
            path: `${path}/detail`,
            title: "DATA",
            component,
            exact: true
        },
        getIndexRoute({
            path,
            to: `${path}/detail`,
            exact: true
        })
    ];
};
