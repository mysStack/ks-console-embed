import "unpacked/module-15.js";
import module1679 from "components/EditForms/Workload/Affinity/index";
import module1680 from "components/EditForms/Workload/PodTemplate/index";
import module1681 from "components/EditForms/Workload/UpdateStrategy/index";
import module1682 from "components/EditForms/Workload/VolumeSettings/index";
import module2929 from "pages/fedprojects/components/ClusterDiffSettings";
import module2937 from "pages/fedprojects/components/ServiceSetting";
import module1683 from "components/EditForms/Workload/TerminationSeconds/index";
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
