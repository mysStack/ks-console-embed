import "unpacked/module-15.js";
import "unpacked/module-5.js";
import module61 from "unpacked/module-61.js";
import { getIndexRoute } from "utils/router.config";
import module1783 from "pages/projects/alerts";
import module3663 from "pages/clusters/layout";
import module3664 from "pages/clusters/BaseList";
import module3665 from "pages/clusters/containers/Clusters";
import module3678 from "pages/clusters/overview";
import module3711 from "pages/clusters/storageclasses";
import module3712 from "pages/clusters/containers/Storage/VolumeSnapshots";
import module3718 from "pages/clusters/containers/Storage/VolumeSnapshotClasses";
import module3719 from "pages/clusters/containers/Storage/Volumes";
import module3725 from "pages/clusters/nodes";
import module3727 from "pages/clusters/edgenodes";
import module3729 from "pages/clusters/containers/ServiceComponents";
import module1194 from "pages/clusters/projects";
import module3733 from "pages/clusters/customresources";
import module3734 from "pages/clusters/deployments";
import module3735 from "pages/clusters/statefulsets";
import module3736 from "pages/clusters/daemonsets";
import module3737 from "pages/clusters/jobs";
import module3738 from "pages/clusters/cronjobs";
import module3739 from "pages/clusters/pods";
import module3741 from "pages/clusters/services";
import module3742 from "pages/clusters/ingresses";
import module3743 from "pages/clusters/clusteringresssettings";
import module3747 from "pages/clusters/secrets";
import module3749 from "pages/clusters/configmaps";
import module3750 from "pages/clusters/serviceaccounts";
import module3751 from "pages/clusters/containers/Monitor/Cluster";
import module3783 from "pages/clusters/containers/Monitor/Resource";
import module3796 from "pages/clusters/members";
import module3797 from "pages/clusters/roles";
import module3798 from "pages/clusters/containers/BaseInfo";
import module3801 from "pages/clusters/containers/Visibility";
import module3803 from "pages/clusters/containers/KubeConfig";
import module3804 from "pages/clusters/containers/Network/Policies";
import module3806 from "pages/clusters/ippools";
import module3808 from "pages/clusters/containers/LogCollections";
import module3815 from "pages/clusters/custom-monitoring";
import module3817 from "pages/clusters/gateways";
import module3822 from "pages/clusters/tags";
import module3824 from "pages/clusters/detail-routes";
const path = "/clusters/:cluster";
function RecoveredClusterAlertingPolicies(props) {
    const C = require("pages/projects/alert-rules").ClusterAlertingPolicies;
    return React.createElement(C, props);
}
const q = [
    {
        path: "/clusters",
        component: module3665,
        redirect: globals.app.isMultiCluster ? null : {
            from: "/clusters",
            to: "/clusters/default/overview",
            exact: true
        },
        exact: true
    },
    {
        path: "/clusters/tags",
        component: module3822,
        exact: true
    },
    {
        path,
        component: module3663,
        routes: [].concat(module61(module3824), [
            {
                path: `${path}/kubeConfig`,
                component: module3803,
                exact: true
            },
            {
                path: "",
                component: module3664,
                routes: [
                    {
                        path: `${path}/overview`,
                        component: module3678,
                        exact: true
                    },
                    {
                        path: `${path}/nodes`,
                        component: module3725
                    },
                    {
                        path: `${path}/edgenodes`,
                        component: module3727,
                        exact: true
                    },
                    {
                        path: `${path}/components`,
                        component: module3729,
                        exact: true
                    },
                    {
                        path: `${path}/projects`,
                        component: module1194,
                        exact: true
                    },
                    {
                        path: `${path}/customresources`,
                        component: module3733,
                        exact: true
                    },
                    {
                        path: `${path}/deployments`,
                        component: module3734,
                        exact: true
                    },
                    {
                        path: `${path}/statefulsets`,
                        component: module3735,
                        exact: true
                    },
                    {
                        path: `${path}/daemonsets`,
                        component: module3736,
                        exact: true
                    },
                    {
                        path: `${path}/jobs`,
                        component: module3737,
                        exact: true
                    },
                    {
                        path: `${path}/cronjobs`,
                        component: module3738,
                        exact: true
                    },
                    {
                        path: `${path}/pods`,
                        component: module3739,
                        exact: true
                    },
                    {
                        path: `${path}/services`,
                        component: module3741,
                        exact: true
                    },
                    {
                        path: `${path}/ingresses`,
                        component: module3742,
                        exact: true
                    },
                    {
                        path: `${path}/clusteringresssettings`,
                        component: module3743,
                        exact: true
                    },
                    {
                        path: `${path}/secrets`,
                        component: module3747,
                        exact: true
                    },
                    {
                        path: `${path}/configmaps`,
                        component: module3749,
                        exact: true
                    },
                    {
                        path: `${path}/serviceaccounts`,
                        component: module3750,
                        exact: true
                    },
                    {
                        path: `${path}/storageclasses`,
                        component: module3711,
                        exact: true
                    },
                    {
                        path: `${path}/volumes`,
                        component: module3719
                    },
                    {
                        path: `${path}/volume-snapshots`,
                        component: module3712
                    },
                    {
                        path: `${path}/volume-snapshot-classes`,
                        component: module3718
                    },
                    {
                        path: `${path}/monitor-cluster`,
                        component: module3751
                    },
                    {
                        path: `${path}/monitor-resource`,
                        component: module3783
                    },
                    {
                        path: `${path}/alerts`,
                        component: module1783
                    },
                    {
                        path: `${path}/alert-rules`,
                        component: RecoveredClusterAlertingPolicies
                    },
                    {
                        path: `${path}/base-info`,
                        component: module3798,
                        exact: true
                    },
                    {
                        path: `${path}/visibility`,
                        component: module3801,
                        exact: true
                    },
                    {
                        path: `${path}/members`,
                        component: module3796,
                        exact: true
                    },
                    {
                        path: `${path}/roles`,
                        component: module3797,
                        exact: true
                    },
                    {
                        path: `${path}/storageclasses`,
                        component: module3711,
                        exact: true
                    },
                    {
                        path: `${path}/snapshots/:namespace?`,
                        component: module3712
                    },
                    {
                        path: `${path}/networkpolicies`,
                        component: module3804,
                        exact: true
                    },
                    {
                        path: `${path}/ippools`,
                        component: module3806,
                        exact: true
                    },
                    {
                        path: `${path}/log-collections/:component`,
                        component: module3808
                    },
                    {
                        path: `${path}/custom-monitoring`,
                        component: module3815,
                        exact: true,
                        clusterModule: "whizard-monitoring"
                    },
                    {
                        path: `${path}/gateways/:component`,
                        component: module3817,
                        exact: true
                    },
                    getIndexRoute({
                        path,
                        to: `${path}/overview`,
                        exact: true
                    }),
                    getIndexRoute({
                        path: `${path}/workloads`,
                        to: `${path}/deployments`,
                        exact: true
                    }),
                    getIndexRoute({
                        path: `${path}/log-collections`,
                        to: `${path}/log-collections/logs`,
                        exact: true
                    }),
                    getIndexRoute({
                        path: `${path}/gateways`,
                        to: `${path}/gateways/cluster`,
                        exact: true
                    }),
                    getIndexRoute({
                        path: "*",
                        to: "/404",
                        exact: true
                    })
                ]
            }
        ])
    }
];
export default q;
