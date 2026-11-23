import "unpacked/module-15.js";
import { withProps } from "utils/index";
import component_1 from "components/Forms/Volume/ClusterDiffSettings";
import component from "pages/fedprojects/components/VolumeSetting/VolumeSettingForm";
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
