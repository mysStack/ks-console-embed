import "unpacked/module-15.js";
import "unpacked/module-5.js";
import module61 from "unpacked/module-61.js";
import { getIndexRoute } from "utils/router.config";
import module815 from "unpacked/module-815.js";
import module821 from "unpacked/module-821.js";
import module5008 from "pages/fedprojects/containers/Services/Detail/ResourceStatus";
import module5010 from "pages/fedprojects/containers/Services/Detail/ServiceAccess";
export default function(path, t) {
    return [
        {
            path: `${path}/resource-status`,
            title: "RESOURCE_STATUS",
            component: module5008,
            exact: true
        }
    ].concat(module61(t.isFedManaged ? [
        {
            path: `${path}/access`,
            title: "ACCESS_INFORMATION",
            component: module5010,
            exact: true
        }
    ] : []), [
        {
            path: `${path}/metadata`,
            title: "METADATA",
            component: module821,
            exact: true
        },
        {
            path: `${path}/events`,
            title: "EVENT_PL",
            component: module815,
            exact: true
        },
        getIndexRoute({
            path,
            to: `${path}/resource-status`,
            exact: true
        })
    ]);
};
