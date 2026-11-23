import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import component from "pages/projects/containers/Network/Policies/Detail/Viewer";
export default function(path) {
    return [
        {
            path: `${path}/egress`,
            title: t("EGRESS_RULES"),
            component,
            exact: true
        },
        {
            path: `${path}/ingress`,
            title: t("INGRESS_RULES"),
            component,
            exact: true
        },
        getIndexRoute({
            path,
            to: `${path}/egress`,
            exact: true
        })
    ];
};
