import "unpacked/module-15.js";
import module1216 from "pages/projects/containers/Deployments/Detail";
import module1402 from "pages/projects/containers/StatefulSets/Detail";
import module1221 from "pages/projects/containers/DaemonSets/Detail";
import module1222 from "pages/projects/containers/Jobs/Detail";
import module1224 from "pages/projects/containers/CronJobs/Detail";
import module1225 from "pages/projects/containers/Services/Detail";
import module1227 from "pages/projects/containers/Routes/Detail";
import module1404 from "pages/projects/containers/Secrets/Detail";
import module1405 from "pages/projects/containers/ConfigMaps/Detail";
import module1406 from "pages/projects/containers/ServiceAccounts/Detail";
import module1228 from "pages/projects/containers/Pods/Detail";
import module1229 from "pages/projects/containers/Pods/Containers/Detail";
import module1830 from "pages/projects/containers/Network/Policies/Detail";
import module1230 from "pages/projects/containers/Volumes/Detail";
import module1409 from "pages/projects/containers/VolumeSnapshots/Detail";
import { ClusterAlertPolicyDetail } from "pages/projects/alert-rules/Detail";
import module3933 from "pages/clusters/containers/Storage/VolumeSnapshots/SnapshotContent/Detail";
import module3937 from "pages/clusters/containers/Storage/VolumeSnapshotClasses/Detail";
import module1835 from "pages/clusters/pv/Detail";
import module3946 from "pages/clusters/projects/Layout";
import module3947 from "pages/clusters/containers/Nodes/Detail";
import module3959 from "pages/clusters/containers/EdgeNodes/Detail";
import module3969 from "pages/clusters/containers/Projects/Detail";
import module3991 from "pages/clusters/containers/Storage/StorageClasses/Detail";
import module3995 from "pages/clusters/containers/ServiceComponents/Detail";
import module3998 from "pages/clusters/containers/CustomResources/Detail";
import module4002 from "pages/clusters/containers/Roles/Detail";
import module4007 from "pages/clusters/containers/LogCollections/Detail";
import module4012 from "pages/clusters/ippools/Detail";
import module1234 from "pages/clusters/gateways/Detail";
const w = "/clusters/:cluster";
const L = [
    {
        path: `${w}/nodes/:node`,
        component: module3947
    },
    {
        path: `${w}/edgenodes/:node`,
        component: module3959
    },
    {
        path: `${w}/customresources/:name`,
        component: module3998
    },
    {
        path: `${w}/roles/:name`,
        component: module4002
    },
    {
        path: [
            `${w}/alert-rules/builtin/:name`,
            `${w}/alert-rules/:name`
        ],
        component: ClusterAlertPolicyDetail
    },
    {
        path: `${w}/log-collections/:component/:name`,
        component: module4007
    },
    {
        path: `${w}/components/:namespace/:name`,
        component: module3995
    },
    {
        path: `${w}/gateways/:component/:gatewayName`,
        component: module1234
    },
    {
        path: `${w}/storageclasses/:name`,
        component: module3991
    },
    {
        path: `${w}/ippools/:name`,
        component: module4012
    },
    {
        path: `${w}/pv/:name`,
        component: module1835
    },
    {
        path: `${w}/volume-snapshot-content/:name`,
        component: module3933
    },
    {
        path: `${w}/volume-snapshot-classes/:name`,
        component: module3937
    },
    {
        path: `${w}/projects/:namespace`,
        component: module3946,
        routes: [
            {
                path: `${w}/projects/:namespace/deployments/:name`,
                component: module1216
            },
            {
                path: `${w}/projects/:namespace/statefulsets/:name`,
                component: module1402
            },
            {
                path: `${w}/projects/:namespace/daemonsets/:name`,
                component: module1221
            },
            {
                path: `${w}/projects/:namespace/jobs/:name`,
                component: module1222
            },
            {
                path: `${w}/projects/:namespace/cronjobs/:name`,
                component: module1224
            },
            {
                path: `${w}/projects/:namespace/services/:name`,
                component: module1225
            },
            {
                path: `${w}/projects/:namespace/ingresses/:name`,
                component: module1227
            },
            {
                path: `${w}/projects/:namespace/secrets/:name`,
                component: module1404
            },
            {
                path: `${w}/projects/:namespace/configmaps/:name`,
                component: module1405
            },
            {
                path: `${w}/projects/:namespace/serviceaccounts/:name`,
                component: module1406
            },
            {
                path: `${w}/projects/:namespace/pods/:podName/containers/:containerName`,
                component: module1229
            },
            {
                path: `${w}/projects/:namespace/pods/:podName`,
                component: module1228
            },
            {
                path: `${w}/projects/:namespace/volume-snapshots/:name`,
                component: module1409
            },
            {
                path: `${w}/projects/:namespace/volumes/:name`,
                component: module1230
            },
            {
                path: `${w}/projects/:namespace/networkpolicies/:name`,
                component: module1830
            },
            {
                path: `${w}/projects/:namespace`,
                component: module3969
            }
        ]
    }
];
export default L;
