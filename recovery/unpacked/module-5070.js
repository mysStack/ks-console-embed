import "./module-15.js";
import module5071 from "./module-5071.js";
import module5073 from "./module-5073.js";
import module5078 from "./module-5078.js";
import module5119 from "./module-5119.js";
const s = "/:workspace/clusters/:cluster/devops";
const u = [
    {
        path: `${s}/:devops/pipelines/:name`,
        component: module5078
    },
    {
        path: `${s}/:devops/credentials/:credential_id`,
        component: module5073
    },
    {
        path: `${s}/:devops/cd/:cd`,
        component: module5119
    },
    {
        path: `${s}/:namespace/roles/:name`,
        component: module5071
    }
];
export default u;
