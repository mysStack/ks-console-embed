import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import component from "pages/fedprojects/containers/Secrets/Detail/SecretDetail";
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
