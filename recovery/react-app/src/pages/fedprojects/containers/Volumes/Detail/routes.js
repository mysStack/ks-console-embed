import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module815 from "unpacked/module-815.js";
import module821 from "unpacked/module-821.js";
import module5025 from "pages/fedprojects/containers/Volumes/Detail/ResourceStatus";
import module5029 from "pages/fedprojects/containers/Volumes/Detail/VolumeMounts";
export default function(path) {
    return [
        {
            path: `${path}/resource-status`,
            title: "RESOURCE_STATUS",
            exact: true,
            component: module5025
        },
        {
            path: `${path}/volume-mounts`,
            title: "MOUNT_INFORMATION",
            exact: true,
            component: module5029
        },
        {
            path: `${path}/metadata`,
            title: "METADATA",
            component: module821,
            exact: true
        },
        {
            path: `${path}/events`,
            title: "EVENT_PL",
            exact: true,
            component: module815
        },
        getIndexRoute({
            path,
            to: `${path}/resource-status`,
            exact: true
        })
    ];
};
