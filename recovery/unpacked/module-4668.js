import "./module-15.js";
import { getChildRoutes } from "./module-317.js";
import module1900 from "./module-1900.js";
import module4669 from "./module-4669.js";
import module1908 from "./module-1908.js";
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
