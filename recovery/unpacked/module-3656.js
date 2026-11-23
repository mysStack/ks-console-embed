import "./module-15.js";
import "./module-5.js";
import module61 from "./module-61.js";
import { getIndexRoute } from "./module-317.js";
import module1783 from "./module-1783.js";
import module1785 from "./module-1785.js";
import module3663 from "./module-3663.js";
import module3664 from "./module-3664.js";
import module3665 from "./module-3665.js";
import module3678 from "./module-3678.js";
import module3711 from "./module-3711.js";
import module3712 from "./module-3712.js";
import module3718 from "./module-3718.js";
import module3719 from "./module-3719.js";
import module3725 from "./module-3725.js";
import module3727 from "./module-3727.js";
import module3729 from "./module-3729.js";
import module1194 from "./module-1194.js";
import module3733 from "./module-3733.js";
import module3734 from "./module-3734.js";
import module3735 from "./module-3735.js";
import module3736 from "./module-3736.js";
import module3737 from "./module-3737.js";
import module3738 from "./module-3738.js";
import module3739 from "./module-3739.js";
import module3741 from "./module-3741.js";
import module3742 from "./module-3742.js";
import module3743 from "./module-3743.js";
import module3747 from "./module-3747.js";
import module3749 from "./module-3749.js";
import module3750 from "./module-3750.js";
import module3751 from "./module-3751.js";
import module3783 from "./module-3783.js";
import module3796 from "./module-3796.js";
import module3797 from "./module-3797.js";
import module3798 from "./module-3798.js";
import module3801 from "./module-3801.js";
import module3803 from "./module-3803.js";
import module3804 from "./module-3804.js";
import module3806 from "./module-3806.js";
import module3808 from "./module-3808.js";
import module3815 from "./module-3815.js";
import module3817 from "./module-3817.js";
import module3822 from "./module-3822.js";
import module3824 from "./module-3824.js";
const path = "/clusters/:cluster";
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
                        component: module1785.ClusterAlertingPolicies
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
