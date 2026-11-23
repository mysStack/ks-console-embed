import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module3721 from "./module-3721.js";
import module3723 from "./module-3723.js";
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
