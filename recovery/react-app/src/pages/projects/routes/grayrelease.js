import "unpacked/module-15.js";
import { getChildRoutes } from "utils/router.config";
import module1900 from "pages/projects/containers/GrayRelease";
import module4669 from "pages/projects/grayrelease/cates";
import module1908 from "pages/projects/grayrelease/jobs";
const path = "/:workspace/clusters/:cluster/projects/:namespace/grayrelease";
const i = [
    {
        name: "cates",
        title: "RELEASE_MODE_PL",
        component: module4669
    },
    {
        name: "jobs",
        title: "RELEASE_TASKS",
        component: module1908
    }
];
const u = [
    {
        path,
        component: module1900,
        routes: getChildRoutes(i, path)
    }
];
export default u;
