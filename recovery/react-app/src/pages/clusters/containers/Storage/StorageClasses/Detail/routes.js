import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import component from "pages/clusters/containers/Storage/StorageClasses/Detail/Volumes";
const path = "/clusters/:cluster/storageclasses/:name";
const i = [
    {
        name: "volumes",
        path: `${path}/volumes`,
        title: "PERSISTENT_VOLUME_CLAIM_PL",
        component
    },
    getIndexRoute({
        path,
        to: `${path}/volumes`,
        exact: true
    }),
    getIndexRoute({
        path: "*",
        to: "/404",
        exact: true
    })
];
export default i;
