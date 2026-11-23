import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module5076 from "./module-5076.js";
import module5077 from "./module-5077.js";
const path = "/:workspace/clusters/:cluster/devops/:devops/credentials/:credential_id";
const s = [
    {
        path: `${path}/detail`,
        title: "DETAILS",
        component: module5076,
        exact: true
    },
    {
        path: `${path}/activity`,
        title: "EVENT_PL",
        component: module5077,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/detail`,
        exact: true
    })
];
export default s;
