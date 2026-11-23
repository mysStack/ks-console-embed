import "./module-15.js";
import module1234 from "./module-1234.js";
import module1216 from "./module-1216.js";
import module1402 from "./module-1402.js";
import module1221 from "./module-1221.js";
import module1222 from "./module-1222.js";
import module1224 from "./module-1224.js";
import module1228 from "./module-1228.js";
import module1229 from "./module-1229.js";
import module1225 from "./module-1225.js";
import module1227 from "./module-1227.js";
import module1230 from "./module-1230.js";
import module1409 from "./module-1409.js";
import module1404 from "./module-1404.js";
import module1405 from "./module-1405.js";
import module1406 from "./module-1406.js";
import module4716 from "./module-4716.js";
import module4721 from "./module-4721.js";
import module4727 from "./module-4727.js";
import module4734 from "./module-4734.js";
import module4738 from "./module-4738.js";
import module4742 from "./module-4742.js";
import module4787 from "./module-4787.js";
import module4795 from "./module-4795.js";
import module4886 from "./module-4886.js";
import module4892 from "./module-4892.js";
import module4894 from "./module-4894.js";
import module1833 from "./module-1833.js";
import module4911 from "./module-4911.js";
import module4924 from "./module-4924.js";
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
