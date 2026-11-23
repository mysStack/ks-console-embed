import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module3721 from "pages/clusters/containers/Storage/Volumes/Volume";
import module3723 from "pages/clusters/containers/Storage/PV";
const path = "/clusters/:cluster/volumes";
const c = [
    {
        path: `${path}/Volumes`,
        title: "PERSISTENT_VOLUME_CLAIM_PL",
        component: module3721,
        exact: true
    },
    {
        path: `${path}/PV`,
        title: "PERSISTENT_VOLUME_PL",
        component: module3723,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/Volumes`,
        exact: true
    })
];
export default c;
