import "unpacked/module-15.js";
import module1679 from "components/EditForms/Workload/Affinity/index";
import module3603 from "unpacked/module-3603.js";
import module1680 from "components/EditForms/Workload/PodTemplate/index";
import module1683 from "components/EditForms/Workload/TerminationSeconds/index";
import module1681 from "components/EditForms/Workload/UpdateStrategy/index";
import module1682 from "components/EditForms/Workload/VolumeSettings/index";
const i = {
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
            icon: "eip-group",
            name: "ippools",
            title: "POD_IP_POOL",
            component: module3603,
            disabled: !globals.app.hasKSModule("network")
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
            icon: "group",
            name: "deploymentMode",
            title: "POD_SCHEDULING_RULES",
            component: module1679
        },
        {
            icon: "eip-group",
            name: "ippools",
            title: "POD_IP_POOL",
            component: module3603,
            disabled: !globals.app.hasKSModule("network")
        }
    ],
    daemonsets: [
        {
            icon: "dashboard",
            name: "updateStrategy",
            title: "UPDATE_STRATEGY",
            component: module1681
        },
        {
            icon: "container",
            name: "podTemplate",
            title: "POD_PL",
            component: module1680
        },
        {
            icon: "storage",
            name: "volumeSettings",
            title: "STORAGE",
            component: module1682
        },
        {
            icon: "forbid-right-duotone",
            name: "podMode",
            title: "POD_GRACE_PERIOD",
            component: module1683
        },
        {
            icon: "eip-group",
            name: "ippools",
            title: "POD_IP_POOL",
            component: module3603,
            disabled: !globals.app.hasKSModule("network")
        }
    ]
};
export default i;
