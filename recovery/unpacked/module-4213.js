import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import component from "./module-4214.js";
export default function(path) {
    return [
        {
            path: `${path}/volume-snapshot`,
            title: "VOLUME_SNAPSHOT_PL",
            exact: true,
            component
        },
        getIndexRoute({
            path,
            to: `${path}/volume-snapshot`,
            exact: true
        })
    ];
};
