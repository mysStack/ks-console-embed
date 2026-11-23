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
import module5227 from "pages/edgewize/projects/Detail";
import module5233 from "pages/edgewize/fota/Detail";
import module5237 from "pages/edgewize/projects/Layout";
import module5238 from "pages/edgewize/nodes/Detail";
import module5249 from "pages/edgewize/rule-group/Detail";
import module5257 from "pages/edgewize/roles/Detail";
import module2002 from "pages/node-groups/edgeippool/Detail";
const C = "/v2/edgewize/clusters/:cluster";
const N = [
    {
        path: `${C}/nodes/:node`,
        component: module5238
    },
    {
        path: `${C}/fota/:node`,
        component: module5233
    },
    {
        path: [
            `${C}/rule-group/builtin/:name`,
            `${C}/rule-group/:name`
        ],
        component: module5249
    },
    {
        path: `${C}/roles/:name`,
        component: module5257
    },
    {
        path: `${C}/edgeippool/:name`,
        component: module2002
    },
    {
        path: `${C}/projects/:namespace`,
        component: module5237,
        routes: [
            {
                path: `${C}/projects/:namespace/deployments/:name`,
                component: module1216
            },
            {
                path: `${C}/projects/:namespace/statefulsets/:name`,
                component: module1402
            },
            {
                path: `${C}/projects/:namespace/daemonsets/:name`,
                component: module1221
            },
            {
                path: `${C}/projects/:namespace/jobs/:name`,
                component: module1222
            },
            {
                path: `${C}/projects/:namespace/cronjobs/:name`,
                component: module1224
            },
            {
                path: `${C}/projects/:namespace/services/:name`,
                component: module1225
            },
            {
                path: `${C}/projects/:namespace/ingresses/:name`,
                component: module1227
            },
            {
                path: `${C}/projects/:namespace/secrets/:name`,
                component: module1404
            },
            {
                path: `${C}/projects/:namespace/configmaps/:name`,
                component: module1405
            },
            {
                path: `${C}/projects/:namespace/serviceaccounts/:name`,
                component: module1406
            },
            {
                path: `${C}/projects/:namespace/pods/:podName/containers/:containerName`,
                component: module1229
            },
            {
                path: `${C}/projects/:namespace/pods/:podName`,
                component: module1228
            },
            {
                path: `${C}/projects/:namespace/volume-snapshots/:name`,
                component: module1409
            },
            {
                path: `${C}/projects/:namespace/volumes/:name`,
                component: module1230
            },
            {
                path: `${C}/projects/:namespace/networkpolicies/:name`,
                component: module1830
            },
            {
                path: `${C}/projects/:namespace`,
                component: module5227
            }
        ]
    }
];
export default N;
