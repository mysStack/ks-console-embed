import "unpacked/module-15.js";
import module5170 from "unpacked/module-5170.js";
import module5172 from "unpacked/module-5172.js";
import { getIndexRoute } from "utils/router.config";
export default function(path) {
    return [
        {
            path: `${path}/role`,
            title: "SILENCE_TIME",
            component: module5170,
            exact: true
        },
        {
            path: `${path}/condition`,
            title: "SILENCE_CONDITIONS",
            component: module5172,
            exact: true
        },
        getIndexRoute({
            path,
            to: `${path}/role`,
            exact: true
        })
    ];
};
