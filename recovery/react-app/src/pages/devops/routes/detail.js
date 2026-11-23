import "unpacked/module-15.js";
import module5071 from "pages/devops/containers/Roles/Detail";
import module5073 from "pages/devops/containers/Credential/detail";
import module5078 from "pages/devops/pipelines/Detail";
import module5119 from "pages/devops/containers/CD/detail";
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
