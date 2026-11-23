import "./module-15.js";
import module1679 from "./module-1679.js";
import module1680 from "./module-1680.js";
import module1681 from "./module-1681.js";
import module1682 from "./module-1682.js";
import module2929 from "./module-2929.js";
import module2937 from "./module-2937.js";
import module1683 from "./module-1683.js";
const f = {
    deployments: [
        {
            icon: "dashboard",
            name: "updateStrategy",
            title: "UPDATE_STRATEGY",
            component: module1681
        },
        {
            icon: "container",
            name: "podTemplate",
            title: "CONTAINER_PL",
            component: module1680
        },
        {
            icon: "storage",
            name: "volumeSettings",
            title: "STORAGE",
            component: module1682
        },
        {
            icon: "group",
            name: "deploymentMode",
            title: "POD_SCHEDULING_RULES",
            component: module1679
        },
        {
            icon: "forbid-right-duotone",
            name: "podMode",
            title: "POD_GRACE_PERIOD",
            component: module1683
        },
        {
            title: "CLUSTER_DIFF",
            icon: "blue-green-deployment",
            name: "Diff Settings",
            component: module2929
        }
    ],
    statefulsets: [
        {
            icon: "dashboard",
            name: "updateStrategy",
            title: "UPDATE_STRATEGY",
            component: module1681
        },
        {
            icon: "container",
            name: "podTemplate",
            title: "CONTAINER_PL",
            component: module1680
        },
        {
            icon: "forbid-right-duotone",
            name: "podMode",
            title: "POD_GRACE_PERIOD",
            component: module1683
        },
        {
            icon: "storage",
            name: "volumeSettings",
            title: "STORAGE",
            component: module1682
        },
        {
            title: "CLUSTER_DIFF",
            icon: "blue-green-deployment",
            name: "Diff Settings",
            component: module2929
        }
    ],
    service: [
        {
            icon: "network-router",
            name: "editService",
            title: "SERVICE_SETTINGS",
            component: module2937
        },
        {
            title: "CLUSTER_DIFF",
            icon: "blue-green-deployment",
            name: "Diff Settings",
            component: module2929
        }
    ]
};
export default f;
