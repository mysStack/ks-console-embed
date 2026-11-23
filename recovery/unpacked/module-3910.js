import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import component from "./module-3911.js";
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
