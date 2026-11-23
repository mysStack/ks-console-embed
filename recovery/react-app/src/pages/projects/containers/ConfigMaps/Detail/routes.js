import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import component from "pages/projects/containers/ConfigMaps/Detail/ConfigDetail";
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
