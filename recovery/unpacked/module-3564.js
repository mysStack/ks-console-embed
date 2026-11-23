import "./module-15.js";
import { withProps } from "./module-52.js";
import component_1 from "./module-1771.js";
import component from "./module-3565.js";
const u = {
    deployments: [
        {
            icon: "storage",
            name: "volumeSettings",
            title: "STORAGE_SETTINGS",
            component
        },
        {
            icon: "blue-green-deployment",
            name: "diffSettings",
            title: "CLUSTER_DIFF",
            component: component_1
        }
    ],
    statefulsets: [
        {
            icon: "storage",
            name: "volumeSettings",
            title: "STORAGE_SETTINGS",
            component
        },
        {
            icon: "blue-green-deployment",
            name: "diffSettings",
            title: "CLUSTER_DIFF",
            component: withProps(component_1, {
                withService: true
            })
        }
    ],
    daemonsets: [
        {
            icon: "storage",
            name: "volumeSettings",
            title: "STORAGE_SETTINGS",
            component
        },
        {
            icon: "blue-green-deployment",
            name: "diffSettings",
            title: "CLUSTER_DIFF",
            component: withProps(component_1, {
                withService: true
            })
        }
    ]
};
export default u;
