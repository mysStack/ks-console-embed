import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import { RadonDBAppId } from "unpacked/module-817.js";
import module4828 from "unpacked/module-4828.js";
import module4867 from "unpacked/module-4867.js";
import module4871 from "unpacked/module-4871.js";
import module4873 from "unpacked/module-4873.js";
import module4878 from "unpacked/module-4878.js";
import module4880 from "unpacked/module-4880.js";
import module4882 from "unpacked/module-4882.js";
const path = "/:workspace/clusters/:cluster/projects/:namespace/applications/database/:id";
const m = [
    {
        path: `${path}/resource-status`,
        name: "resource-status",
        title: "OVERVIEW",
        component: module4828,
        exact: true
    },
    {
        path: `${path}/monitoring`,
        title: "MONITORING",
        component: module4880,
        exact: true
    },
    {
        path: `${path}/alerting`,
        title: "ALERT_RULE_GROUP_PL",
        component: module4878,
        exact: true
    },
    {
        path: `${path}/account`,
        title: "DATABASE_USERS",
        component: module4867,
        exact: true,
        excludeApp: [
            RadonDBAppId.MongoDB,
            RadonDBAppId.Elasticsearch,
            RadonDBAppId.OpenSearch
        ]
    },
    {
        path: `${path}/backup`,
        title: "BACKUPS",
        component: module4871,
        exact: true,
        excludeApp: [
            RadonDBAppId.ClickHouse,
            RadonDBAppId.RedisSentinel,
            RadonDBAppId.RedisCluster,
            RadonDBAppId.MongoDB,
            RadonDBAppId.Elasticsearch,
            RadonDBAppId.Kafka,
            RadonDBAppId.OpenSearch
        ]
    },
    {
        path: `${path}/topic`,
        title: "TOPICS",
        component: module4882,
        exact: true,
        only: RadonDBAppId.Kafka
    },
    {
        path: `${path}/config`,
        title: "PARAMETERS",
        component: module4873,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/resource-status`,
        exact: true
    })
];
export default m;
