import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import module31 from "./module-31.js";
import { RadonDBAppId } from "./module-817.js";
import module2233 from "./module-2233.js";
import module2234 from "./module-2234.js";
import module2235 from "./module-2235.js";
import module2236 from "./module-2236.js";
import module2237 from "./module-2237.js";
import module2238 from "./module-2238.js";
import module2239 from "./module-2239.js";
import module2240 from "./module-2240.js";
export const RESOURCE_METRICS_CONFIG = {};
module31(RESOURCE_METRICS_CONFIG, RadonDBAppId.MySQL, module2233.Metric);
module31(RESOURCE_METRICS_CONFIG, RadonDBAppId.PostgreSQL, module2234.Metric);
module31(RESOURCE_METRICS_CONFIG, RadonDBAppId.ClickHouse, module2235.Metric);
module31(RESOURCE_METRICS_CONFIG, RadonDBAppId.MongoDB, module2236.Metric);
module31(RESOURCE_METRICS_CONFIG, RadonDBAppId.RedisCluster, module2237.Metric);
module31(RESOURCE_METRICS_CONFIG, RadonDBAppId.RedisSentinel, module2237.Metric);
module31(RESOURCE_METRICS_CONFIG, RadonDBAppId.Elasticsearch, module2238.Metric);
module31(RESOURCE_METRICS_CONFIG, RadonDBAppId.Kafka, module2239.Metric);
module31(RESOURCE_METRICS_CONFIG, RadonDBAppId.OpenSearch, module2240.Metric);
export const ALL_METRICS_CONFIG = {
    ...module2233.Metric,
    ...module2234.Metric,
    ...module2235.Metric,
    ...module2236.Metric,
    ...module2237.Metric,
    ...module2238.Metric,
    ...module2239.Metric,
    ...module2240.Metric
};
export const ALL_MESSAGE_CONFIG = {
    ...module2233.Message,
    ...module2234.Message,
    ...module2235.Message,
    ...module2236.Message,
    ...module2237.Message,
    ...module2238.Message,
    ...module2239.Message,
    ...module2240.Message
};
export const ALL_SUMMARY_CONFIG = {
    ...module2233.Summary,
    ...module2234.Summary,
    ...module2235.Summary,
    ...module2236.Summary,
    ...module2237.Summary,
    ...module2238.Summary,
    ...module2239.Summary,
    ...module2240.Summary
};
export const ALL_QUERY_CONFIG = {
    ...module2233.Query,
    ...module2234.Query,
    ...module2235.Query,
    ...module2236.Query,
    ...module2237.Query,
    ...module2238.Query,
    ...module2239.Query,
    ...module2240.Query
};
