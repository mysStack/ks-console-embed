import "unpacked/module-15.js";
import module1234 from "pages/clusters/gateways/Detail";
import module1216 from "pages/projects/containers/Deployments/Detail";
import module1402 from "pages/projects/containers/StatefulSets/Detail";
import module1221 from "pages/projects/containers/DaemonSets/Detail";
import module1222 from "pages/projects/containers/Jobs/Detail";
import module1224 from "pages/projects/containers/CronJobs/Detail";
import module1228 from "pages/projects/containers/Pods/Detail";
import module1229 from "pages/projects/containers/Pods/Containers/Detail";
import module1225 from "pages/projects/containers/Services/Detail";
import module1227 from "pages/projects/containers/Routes/Detail";
import module1230 from "pages/projects/containers/Volumes/Detail";
import module1409 from "pages/projects/containers/VolumeSnapshots/Detail";
import module1404 from "pages/projects/containers/Secrets/Detail";
import module1405 from "pages/projects/containers/ConfigMaps/Detail";
import module1406 from "pages/projects/containers/ServiceAccounts/Detail";
import module4716 from "pages/projects/microservices/Detail";
import module4721 from "pages/projects/microservice-instances/Detail";
import module4727 from "pages/projects/configurations/Detail";
import module4734 from "pages/projects/microservicegateways/Detail";
import module4738 from "pages/projects/servicerouting/Detail";
import module4742 from "pages/projects/containers/Applications/CRDAppDetail";
import module4787 from "pages/projects/containers/Applications/OPAppDetail";
import module4795 from "pages/projects/applications-database/Detail";
import module4886 from "pages/projects/applications-others/Detail";
import module4892 from "pages/projects/containers/Roles/Detail";
import module4894 from "pages/projects/s2ibuilders/Detail";
import module1833 from "pages/projects/alert-rules/Detail";
import module4911 from "pages/projects/custom-scaling/Detail";
import module4924 from "pages/projects/edgeappsets/Detail";
export default function(e) {
    return [
        {
            path: `${e}/deployments/:name`,
            component: module1216
        },
        {
            path: `${e}/statefulsets/:name`,
            component: module1402
        },
        {
            path: `${e}/daemonsets/:name`,
            component: module1221
        },
        {
            path: `${e}/jobs/:name`,
            component: module1222
        },
        {
            path: `${e}/cronjobs/:name`,
            component: module1224
        },
        {
            path: `${e}/pods/:podName/containers/:containerName`,
            component: module1229
        },
        {
            path: `${e}/pods/:podName`,
            component: module1228
        },
        {
            path: `${e}/services/:name`,
            component: module1225
        },
        {
            path: `${e}/ingresses/:name`,
            component: module1227
        },
        {
            path: `${e}/volumes/:name`,
            component: module1230
        },
        {
            path: `${e}/volume-snapshots/:name`,
            component: module1409
        },
        {
            path: `${e}/secrets/:name`,
            component: module1404
        },
        {
            path: `${e}/configmaps/:name`,
            component: module1405
        },
        {
            path: `${e}/serviceAccounts/:name`,
            component: module1406
        },
        {
            path: `${e}/microservices/:name`,
            component: module4716
        },
        {
            path: `${e}/microservice-instances/:podName/:instanceId`,
            component: module4721
        },
        {
            path: `${e}/configurations/:name`,
            component: module4727
        },
        {
            path: `${e}/microservicegateways/:name`,
            component: module4734
        },
        {
            path: `${e}/servicerouting/:name`,
            component: module4738
        },
        {
            path: `${e}/composing/:name`,
            component: module4742
        },
        {
            path: `${e}/applications/template/:id`,
            component: module4787
        },
        {
            path: `${e}/applications/database/:id`,
            component: module4795
        },
        {
            path: `${e}/applications/others/:name`,
            component: module4886
        },
        {
            path: `${e}/edgeappsets/:name`,
            component: module4924
        },
        {
            path: `${e}/roles/:name`,
            component: module4892
        },
        {
            path: `${e}/s2ibuilders/:name`,
            component: module4894
        },
        {
            path: `${e}/custom-scaling/:name`,
            component: module4911
        },
        {
            path: `${e}/gateways/:gatewayName`,
            component: module1234
        },
        {
            path: [
                `${e}/alert-rules/builtin/:name`,
                `${e}/alert-rules/:name`
            ],
            component: module1833
        }
    ];
};
