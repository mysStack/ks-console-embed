import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-48.js";
import "./module-16.js";
import "./module-27.js";
import "./module-1525.js";
import "./module-932.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-316.js";
import "./module-24.js";
import "./module-64.js";
import "./module-137.js";
import "./module-7.js";
import "./module-58.js";
import module31 from "./module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "./module-28.js";
import "./module-191.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-436.js";
import "./module-319.js";
import "./module-193.js";
import module903 from "./module-903.js";
import module63 from "./module-63.js";
import module334 from "./module-334.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import { safeBtoa } from "utils/base64";
import { redisCluster, redisSentinal } from "./module-2228.js";
import { mongoYaml } from "./module-2229.js";
import { ckYaml } from "./module-2230.js";
import { pgYaml } from "./module-2231.js";
import { mysqlYaml } from "./module-2232.js";
import { eckYaml } from "./module-1527.js";
import { kafkaYaml } from "./module-1093.js";
import { opensearchYaml } from "./module-1528.js";
import { Password, passwordRegx, userNameRegx } from "./module-1286.js";
export const getAppIdByKind = function(e) {
    return I[e];
};
export const convertAppIdToName = function(e) {
    return module26(Object.entries(RadonDBAppId).find((t)=>module96(t, 2)[1] === e), "[0]");
};
export const mergeCKInstallationData = function({ name, valuesJson, namespace }) {
    const n = module903({}, ValuesJSON[RadonDBAppId.ClickHouse], module334(valuesJson, isValid));
    const l = {
        ...ckYaml.resources
    };
    module74(l, "metadata.name", name);
    module74(l, "metadata.namespace", namespace);
    module74(l, "spec.templates.podTemplates[0].spec.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].values", [
        name
    ]);
    let u = JSON.stringify(l);
    const { specifications, volume, volumeType, nodes, replicasets, username, password } = n;
    const g = getCpuAndMemoryFromSpecifications(specifications);
    const { cpu, memory } = g;
    u = u.replace(/{"memory":"1Gi","cpu":"500m"}/g, `{"memory":"${memory}","cpu":"${cpu}"}`);
    u = (u = (u = volumeType ? u.replace("csi-qingcloud", volumeType) : u.replace(',"storageClassName":"csi-qingcloud"', "")).replace('{"storage":"10Gi"}', `{"storage":"${volume}"}`)).replace('{"shardsCount":1,"replicasCount":2}', `{"shardsCount":${Number(nodes)},"replicasCount":${Number(replicasets)}}`);
    if (userNameRegx.test(username) && passwordRegx.test(password)) {
        u = u.replace('"clickhouse/password":"c1ickh0use0perator","clickhouse/networks/ip":["127.0.0.1","::/0"],"clickhouse/profile":"default","clickhouse/quotas":"default"', generateClickHouseUserString(username, password));
    }
    return u;
};
export const mergeMySQLInstallationData = function({ name, valuesJson, namespace, restoreParams }) {
    const l = module903({}, ValuesJSON[RadonDBAppId.MySQL], module334(valuesJson, isValid));
    const { version, specifications, volume, volumeType, nodes } = l;
    const d = getCpuAndMemoryFromSpecifications(specifications);
    const m = JSON.parse(JSON.stringify(mysqlYaml.resources));
    module74(m, "metadata.name", name);
    module74(m, "metadata.namespace", namespace);
    module74(m, "spec.mysqlOpts.resources.requests", d);
    module74(m, "spec.mysqlOpts.resources.limits", d);
    module74(m, "spec.replicas", nodes + 1);
    module74(m, "spec.persistence.storageClass", volumeType);
    module74(m, "spec.persistence.size", volume);
    module74(m, "spec.mysqlVersion", version);
    module74(m, "spec.podPolicy.sidecarImage", MySQLSidecarImage[version]);
    module74(m, "spec.mysqlOpts.image", MySQLOptsImage[version]);
    module74(m, "spec.podPolicy.affinity.podAntiAffinity.requiredDuringSchedulingIgnoredDuringExecution[0].labelSelector.matchExpressions[0].values", [
        name
    ]);
    if (restoreParams) {
        module74(m, "spec.restoreFrom", restoreParams.restoreFrom);
    }
    return JSON.stringify(m);
};
export const mergeRedisClusterInstallationData = function({ name, namespace, valuesJson }) {
    const n = module903({}, ValuesJSON[RadonDBAppId.MySQL], module334(valuesJson, isValid));
    const { version, volume, volumeType, nodes, password, specifications, predixyNodes, predixySpecification, endpointType } = n;
    const y = getCpuAndMemoryFromSpecifications(specifications);
    const E = JSON.parse(JSON.stringify(redisCluster.resource));
    J(E, {
        name,
        namespace,
        volume,
        volumeType,
        nodes,
        password,
        cm: y,
        version
    });
    module74(E, "spec.clusterSize", nodes);
    module74(E, "spec.redisLeader.replicas", nodes);
    module74(E, "spec.redisFollower.replicas", nodes);
    module74(E, "spec.kubernetesConfig.image", RedisImage[version]);
    if (version === "7.0.4" && predixyNodes === 0 && endpointType === "true") {
        module74(E, "spec.kubernetesConfig.endpointType", "hostname");
    }
    module74(E, "spec.redisLeader.redisConfig.additionalRedisConfig", `${name}-external-config`);
    module74(E, "spec.redisFollower.redisConfig.additionalRedisConfig", `${name}-external-config`);
    module74(E, "spec.redisLeader.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].values", [
        name
    ]);
    module74(E, "spec.redisFollower.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].values", [
        name
    ]);
    module74(E, "spec.redisProxy.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].values", [
        name
    ]);
    module74(E, "spec.redisProxy.enabled", predixyNodes > 0);
    module74(E, "spec.redisProxy.replicas", predixyNodes);
    module74(E, "spec.redisProxy.predixyConfigParams.clusterName", name);
    const b = getCpuAndMemoryFromSpecifications(predixySpecification);
    module74(E, "spec.redisProxy.resources.requests", b);
    module74(E, "spec.redisProxy.resources.limits", b);
    return JSON.stringify(E);
};
export const getRedisClusterRelatedResources = function(e) {
    return Z(redisCluster, e);
};
export const mergeRedisSentinelInstallationData = function({ name, namespace, valuesJson }) {
    const n = module903({}, ValuesJSON[RadonDBAppId.MySQL], module334(valuesJson, isValid));
    const { version, volume, volumeType, nodes, password } = n;
    const s = getCpuAndMemoryFromSpecifications(n.specifications);
    const d = {
        ...redisSentinal.resource
    };
    J(d, {
        name,
        namespace,
        volume,
        volumeType,
        password,
        cm: s,
        version
    });
    module74(d, "spec.clusterSize", nodes);
    module74(d, "spec.redisReplica.replicas", nodes);
    module74(d, "spec.kubernetesConfig.image", `radondb/redis:v${version}`);
    module74(d, "spec.redisReplica.redisConfig.additionalRedisConfig", `${name}-external-config`);
    module74(d, "spec.redisSentinel.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].values", [
        name
    ]);
    module74(d, "spec.redisReplica.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].values", [
        name
    ]);
    return JSON.stringify(d);
};
export const getRedisSentinelRelatedResources = function(e) {
    return Z(redisSentinal, e);
};
export const mergeMongoDBInstallationData = function({ name, namespace, valuesJson }) {
    const n = module903({}, ValuesJSON[RadonDBAppId.MySQL], module334(valuesJson, isValid));
    const { specifications, nodes, volume, volumeType, version } = n;
    const s = getCpuAndMemoryFromSpecifications(specifications);
    const d = {
        ...mongoYaml.resources
    };
    module74(d, "metadata.name", name);
    module74(d, "metadata.namespace", namespace);
    module74(d, "spec.members", nodes);
    module74(d, "spec.version", version);
    module74(d, "spec.statefulSet.spec.template.spec.containers[0].resources.requests", s);
    module74(d, "spec.statefulSet.spec.template.spec.containers[0].resources.limits", s);
    module74(d, "spec.prometheus.passwordSecretRef.name", `${name}-metrics-password`);
    module74(d, "spec.statefulSet.spec.volumeClaimTemplates[0].spec.storageClassName", volumeType);
    module74(d, "spec.statefulSet.spec.volumeClaimTemplates[0].spec.resources.requests.storage", volume);
    module74(d, "spec.users[0].passwordSecretRef.name", `${name}-operator-password`);
    module74(d, "spec.users[0].scramCredentialsSecretName", `${name}-operator-password`);
    module74(d, "spec.users[1].passwordSecretRef.name", `${name}-root-password`);
    module74(d, "spec.users[1].scramCredentialsSecretName", `${name}-root-password`);
    module74(d, "spec.statefulSet.spec.template.spec.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].values", [
        name
    ]);
    return JSON.stringify(d);
};
export const getMongoDBRelatedResources = function({ name, namespace }) {
    const r = [];
    const mongoYaml_masterSecret = mongoYaml.masterSecret;
    module74(mongoYaml_masterSecret, "metadata.name", `${name}-operator-password`);
    module74(mongoYaml_masterSecret, "metadata.namespace", namespace);
    r.push({
        name: "masterSecret",
        data: JSON.stringify(mongoYaml_masterSecret)
    });
    const mongoYaml_rootSecret = mongoYaml.rootSecret;
    module74(mongoYaml_rootSecret, "metadata.name", `${name}-root-password`);
    module74(mongoYaml_rootSecret, "metadata.namespace", namespace);
    r.push({
        name: "rootSecret",
        data: JSON.stringify(mongoYaml_rootSecret)
    });
    return r;
};
export const getSecretCrd = function({ name, namespace }) {
    const r = {
        apiVersion: "v1",
        kind: "Secret",
        type: "Opaque",
        metadata: {
            name: `${name}-userpassword-secret`,
            namespace
        }
    };
    return JSON.stringify(r);
};
export const mergePGInstallationData = function({ name, valuesJson, namespace, restoreParams }) {
    const l = module903({}, ValuesJSON[RadonDBAppId.PostgreSQL], module334(valuesJson, isValid));
    const { specifications, nodes, volume, volumeType, version } = l;
    const d = getCpuAndMemoryFromSpecifications(specifications);
    const m = JSON.parse(JSON.stringify(pgYaml.resources));
    module74(m, "metadata.name", name);
    module74(m, "metadata.namespace", namespace);
    module74(m, "spec.postgresql.readwriteinstance.podspec.containers[0].resources", {
        requests: d,
        limits: d
    });
    module74(m, "spec.autofailover.volumeClaimTemplates[0].spec.storageClassName", volumeType);
    module74(m, "spec.postgresql.readwriteinstance.volumeClaimTemplates[0].spec.storageClassName", volumeType);
    module74(m, "spec.postgresql.readwriteinstance.volumeClaimTemplates[0].spec.resources.requests.storage", volume);
    module74(m, "spec.postgresql.readwriteinstance.replicas", nodes);
    module74(m, "spec.autofailover.podspec.containers[0].image", `${PGImage[version]}-v1.2.0`);
    module74(m, "spec.postgresql.readwriteinstance.podspec.containers[0].image", `${PGImage[version]}-v1.2.0`);
    module74(m, "spec.postgresql.readonlyinstance.podspec.containers[0].image", `${PGImage[version]}-v1.2.0`);
    module74(m, "spec.deletes3", true);
    if (restoreParams) {
        const { backupId, S3, backupToS3Name } = restoreParams;
        module74(m, "spec.restore.froms3.recovery", backupId);
        module74(m, "spec.restore.froms3.name", backupToS3Name);
        module74(m, "spec.S3", S3);
    }
    return JSON.stringify(m);
};
export const mergeECKInstallationData = function({ name, valuesJson, namespace }) {
    const n = module903({}, ValuesJSON[RadonDBAppId.Elasticsearch], module334(valuesJson, isValid));
    const l = JSON.parse(JSON.stringify(eckYaml.resources));
    module74(l, "metadata.name", name);
    module74(l, "metadata.namespace", namespace);
    const u = module26(l, "spec.nodeSets");
    const i = Object.entries(n).map((e)=>{
        const t = module96(e, 2);
        const a = t[0];
        const r = t[1];
        const { nodes, specifications, volume, volumeType } = r;
        const s = u.find((e)=>e.name === a);
        if (s) {
            const f = getCpuAndMemoryFromSpecifications(specifications);
            const d = module26(s, "name");
            module74(s, "name", `${d}-${volume.toLowerCase()}`);
            module74(s, "count", nodes);
            module74(s, "podTemplate.spec.containers[0].resources", {
                limits: f,
                requests: f
            });
            module74(s, "podTemplate.spec.containers[0].env[0].value", `-Xms${parseInt(f.memory, 10) / 2}g -Xmx${parseInt(f.memory, 10) / 2}g`);
            module74(s, "volumeClaimTemplates[0].spec.resources.requests.storage", volume);
            module74(s, "volumeClaimTemplates[0].spec.storageClassName", volumeType);
        }
        return s;
    }).filter((e)=>e && e.count > 0);
    module74(l, "spec.nodeSets", i);
    return JSON.stringify(l);
};
export const getECKRelatedResources = function({ name, kibanaValues, namespace }) {
    const { nodes, specifications } = kibanaValues;
    const u = JSON.parse(JSON.stringify(eckYaml.kibana));
    const o = getCpuAndMemoryFromSpecifications(specifications);
    module74(u, "metadata.name", name);
    module74(u, "metadata.namespace", namespace);
    module74(u, "spec.count", nodes);
    module74(u, "spec.elasticsearchRef.name", name);
    module74(u, "spec.elasticsearchRef.namespace", namespace);
    module74(u, "spec.podTemplate.spec.containers[0].resources.requests", o);
    module74(u, "spec.podTemplate.spec.containers[0].resources.limits", o);
    return [
        {
            name: "kibana",
            data: JSON.stringify(u)
        }
    ];
};
export const mergeKafkaInstallationData = function({ name, valuesJson, namespace }) {
    const n = module903({}, ValuesJSON[RadonDBAppId.Kafka], module334(valuesJson, isValid));
    const l = JSON.parse(JSON.stringify(kafkaYaml.resources));
    module74(l, "metadata.name", name);
    module74(l, "metadata.namespace", namespace);
    const { kafka, zookeeper } = n;
    const i = getCpuAndMemoryFromSpecifications(kafka.specifications);
    module74(l, "spec.kafka.version", kafka.version);
    module74(l, "spec.kafka.replicas", kafka.nodes);
    module74(l, "spec.kafka.resources.requests", i);
    module74(l, "spec.kafka.resources.limits", i);
    module74(l, "spec.kafka.storage.volumes[0]", {
        id: 0,
        type: "persistent-claim",
        class: kafka.volumeType,
        size: kafka.volume,
        deleteClaim: true
    });
    module74(l, "spec.kafka.metricsConfig.valueFrom.configMapKeyRef.name", `${name}-kafka-metrics`);
    const c = getCpuAndMemoryFromSpecifications(zookeeper.specifications);
    module74(l, "spec.zookeeper.replicas", zookeeper.nodes);
    module74(l, "spec.zookeeper.resources.requests", c);
    module74(l, "spec.zookeeper.resources.limits", c);
    module74(l, "spec.zookeeper.storage", {
        type: "persistent-claim",
        class: zookeeper.volumeType,
        size: zookeeper.volume,
        deleteClaim: true
    });
    module74(l, "spec.zookeeper.metricsConfig.valueFrom.configMapKeyRef.name", `${name}-kafka-metrics`);
    return JSON.stringify(l);
};
export const getKafkaRelatedResources = function({ namespace, name }) {
    const r = JSON.parse(JSON.stringify(kafkaYaml.configMap));
    module74(r, "metadata.name", `${name}-kafka-metrics`);
    module74(r, "metadata.namespace", namespace);
    const n = JSON.parse(JSON.stringify(kafkaYaml.podMonitor));
    module74(n, "metadata.name", `${name}-kafka-resources-metrics`);
    module74(n, "metadata.namespace", namespace);
    module74(n, "spec.namespaceSelector.matchNames", [
        namespace
    ]);
    return [
        {
            name: "configMap",
            data: JSON.stringify(r)
        },
        {
            name: "podMonitor",
            data: JSON.stringify(n)
        }
    ];
};
export const mergeOpenSearchInstallationData = function({ name, valuesJson, namespace }) {
    const n = module903({}, ValuesJSON[RadonDBAppId.OpenSearch], module334(valuesJson, isValid));
    const { version, password: _password, username: _username, logstash: _logstash, dashboard, ...rest } = n;
    const s = JSON.parse(JSON.stringify(opensearchYaml.resources));
    module74(s, "metadata.name", name);
    module74(s, "metadata.namespace", namespace);
    module74(s, "spec.general.serviceName", name);
    module74(s, "spec.general.version", version);
    module74(s, "spec.dashboards.version", version);
    if (version === "2.8.0") {
        module74(s, 'spec.general.additionalConfig["prometheus.indices"]', "false");
    }
    module74(s, "spec.dashboards.enable", dashboard.nodes > 0);
    module74(s, "spec.dashboards.replicas", dashboard.nodes);
    module74(s, "spec.security.config.securityConfigSecret.name", `${name}-securityconfig-secret`);
    module74(s, "spec.security.config.adminCredentialsSecret.name", `${name}-admin-secret`);
    const d = getCpuAndMemoryFromSpecifications(dashboard.specifications);
    module74(s, "spec.dashboards.resources", {
        limits: d,
        requests: d
    });
    const v = module26(s, "spec.nodePools");
    const g = Object.entries(rest).map((e)=>{
        const t = module96(e, 2);
        const a = t[0];
        const r = t[1];
        const { nodes, specifications, volume, volumeType } = r;
        let c = v.find((e)=>module26(e, 'additionalConfig["node.attr.datatier"]') === a);
        if (!c) {
            c = JSON.parse(JSON.stringify(opensearchYaml.node));
            module74(c, 'additionalConfig["node.attr.datatier"]', a);
            module74(c, "component", `data-node-${a}`);
        }
        const s = getCpuAndMemoryFromSpecifications(specifications);
        module74(c, "replicas", nodes);
        module74(c, "resources", {
            limits: s,
            requests: s
        });
        module74(c, "diskSize", volume);
        module74(c, "persistence.pvc.storageClass", volumeType);
        return c;
    }).filter((e)=>e && e.replicas > 0);
    module74(s, "spec.nodePools", g);
    return JSON.stringify(s);
};
export const getOpenSearchRelatedResources = function({ name, logstashValues, namespace, username, password }) {
    const { nodes, specifications } = logstashValues;
    const i = JSON.parse(JSON.stringify(opensearchYaml.logstash));
    const c = getCpuAndMemoryFromSpecifications(specifications);
    module74(i, "metadata.name", name);
    module74(i, "metadata.namespace", namespace);
    module74(i, "spec.replicas", nodes);
    const s = parseInt(c.memory, 10) / 2;
    module74(i, "spec.config.jvm", `-Xms${s}g -Xmx${s}g`);
    module74(i, "spec.config.openSearchInfo.openSearchCluster.name", name);
    module74(i, "spec.config.openSearchInfo.openSearchCluster.namespace", namespace);
    module74(i, "spec.config.openSearchInfo.openSearchService.name", name);
    module74(i, "spec.podTemplate.spec.containers[0].resources.requests", c);
    module74(i, "spec.podTemplate.spec.containers[0].resources.limits", c);
    const f = JSON.parse(JSON.stringify(opensearchYaml.logstashSecret));
    module74(f, "metadata.name", `${name}-logstash-password`);
    module74(f, "metadata.namespace", namespace);
    const d = JSON.parse(JSON.stringify(opensearchYaml.adminSecret));
    module74(d, "metadata.name", `${name}-admin-secret`);
    module74(d, "metadata.namespace", namespace);
    module74(d, "data.username", safeBtoa(username || "admin"));
    module74(d, "data.password", safeBtoa(password || "RadonDB@123"));
    const p = JSON.parse(JSON.stringify(opensearchYaml.securityConfigSecret));
    module74(p, "metadata.name", `${name}-securityconfig-secret`);
    module74(p, "metadata.namespace", namespace);
    return [
        {
            name: "logstash",
            data: JSON.stringify(i)
        },
        {
            name: "logstashSecret",
            data: JSON.stringify(f)
        },
        {
            name: "adminSecret",
            data: JSON.stringify(d)
        },
        {
            name: "securityConfigSecret",
            data: JSON.stringify(p)
        }
    ];
};
let i;
let c;
let s;
export var RadonDBAppId = {
    ClickHouse: "app-clickhouse",
    PostgreSQL: "app-postgresql",
    MySQL: "app-mysql",
    RedisSentinel: "app-redis-sentinel",
    RedisCluster: "app-redis-cluster",
    MongoDB: "app-mongodb",
    Elasticsearch: "app-eck",
    Kafka: "app-kafka",
    OpenSearch: "app-opensearch"
};
export const RadonDBAppIds = Object.values(RadonDBAppId);
var I = {
    ClickHouseInstallation: RadonDBAppId.ClickHouse,
    PostgreSQL: RadonDBAppId.PostgreSQL,
    MysqlCluster: RadonDBAppId.MySQL,
    RedisSentinel: RadonDBAppId.RedisSentinel,
    RedisCluster: RadonDBAppId.RedisCluster,
    MongoDBCommunity: RadonDBAppId.MongoDB,
    Elasticsearch: RadonDBAppId.Elasticsearch,
    Kafka: RadonDBAppId.Kafka,
    OpenSearchCluster: RadonDBAppId.OpenSearch
};
export var MySQLSidecarImage = {
    5.7: "radondb/mysql57-sidecar:v2.3.0",
    "8.0": "radondb/mysql80-sidecar:v2.3.0"
};
export var MySQLOptsImage = {
    5.7: "percona/percona-server:5.7.39",
    "8.0": "percona/percona-server:8.0.25"
};
export var RedisImage = {
    "6.2.5": "radondb/redis:v6.2.5",
    "7.0.4": "nosqlpass/redis:v7.0.4"
};
export var PGImage = {
    12: "radondb/radondb-postgresql:12.12",
    13: "radondb/radondb-postgresql:13.8",
    14: "radondb/radondb-postgresql:14.5",
    15: "radondb/radondb-postgresql:15.0"
};
export const SpecificationsOptions = [
    {
        label: t("CORE_GIB", {
            core: "1",
            gib: "1"
        }),
        value: "1000m, 1Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "1",
            gib: "2"
        }),
        value: "1000m, 2Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "2",
            gib: "4"
        }),
        value: "2000m, 4Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "2",
            gib: "8"
        }),
        value: "2000m, 8Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "4",
            gib: "8"
        }),
        value: "4000m, 8Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "4",
            gib: "16"
        }),
        value: "4000m, 16Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "8",
            gib: "16"
        }),
        value: "8000m, 16Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "8",
            gib: "32"
        }),
        value: "8000m, 32Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "8",
            gib: "64"
        }),
        value: "8000m, 64Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "16",
            gib: "32"
        }),
        value: "16000m, 32Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "16",
            gib: "64"
        }),
        value: "16000m, 64Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "16",
            gib: "128"
        }),
        value: "16000m, 128Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "32",
            gib: "128"
        }),
        value: "32000m, 128Gi"
    }
];
const L = [
    {
        label: t("CORE_GIB", {
            core: "1",
            gib: "1"
        }),
        value: "1000m, 1Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "2",
            gib: "4"
        }),
        value: "2000m, 4Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "2",
            gib: "8"
        }),
        value: "2000m, 8Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "4",
            gib: "8"
        }),
        value: "4000m, 8Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "8",
            gib: "16"
        }),
        value: "8000m, 16Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "8",
            gib: "32"
        }),
        value: "8000m, 32Gi"
    }
];
const x = [
    {
        label: t("CORE_GIB", {
            core: "1",
            gib: "1"
        }),
        value: "1000m, 1Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "2",
            gib: "2"
        }),
        value: "2000m, 2Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "4",
            gib: "4"
        }),
        value: "4000m, 4Gi"
    }
];
const options = [
    {
        label: t("CORE_GIB", {
            core: "2",
            gib: "4"
        }),
        value: "2000m, 4Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "2",
            gib: "8"
        }),
        value: "2000m, 8Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "4",
            gib: "8"
        }),
        value: "4000m, 8Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "8",
            gib: "16"
        }),
        value: "8000m, 16Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "8",
            gib: "32"
        }),
        value: "8000m, 32Gi"
    }
];
const z = [
    {
        label: t("CORE_GIB", {
            core: "2",
            gib: "4"
        }),
        value: "2000m, 4Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "2",
            gib: "8"
        }),
        value: "2000m, 8Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "4",
            gib: "16"
        }),
        value: "4000m, 16Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "8",
            gib: "32"
        }),
        value: "8000m, 32Gi"
    },
    {
        label: t("CORE_GIB", {
            core: "16",
            gib: "64"
        }),
        value: "16000m, 64Gi"
    }
];
const F = {
    master: [
        {
            label: t("CORE_GIB", {
                core: "1",
                gib: "2"
            }),
            value: "1000m, 2Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "2",
                gib: "4"
            }),
            value: "2000m, 4Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "2",
                gib: "8"
            }),
            value: "2000m, 8Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "4",
                gib: "8"
            }),
            value: "4000m, 8Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "8",
                gib: "16"
            }),
            value: "8000m, 16Gi"
        }
    ],
    hot: z,
    warm: z,
    cold: z,
    kibana: [
        {
            label: t("CORE_GIB", {
                core: "1",
                gib: "2"
            }),
            value: "1000m, 2Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "2",
                gib: "4"
            }),
            value: "2000m, 4Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "4",
                gib: "8"
            }),
            value: "4000m, 8Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "8",
                gib: "16"
            }),
            value: "8000m, 16Gi"
        }
    ]
};
const G = {
    master: F.master,
    hot: z,
    warm: z,
    cold: z,
    dashboard: F.master,
    logstash: [
        {
            label: t("CORE_GIB", {
                core: "1",
                gib: "2"
            }),
            value: "1000m, 2Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "2",
                gib: "4"
            }),
            value: "2000m, 4Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "2",
                gib: "8"
            }),
            value: "2000m, 8Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "4",
                gib: "8"
            }),
            value: "4000m, 8Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "4",
                gib: "16"
            }),
            value: "4000m, 16Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "8",
                gib: "16"
            }),
            value: "8000m, 16Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "8",
                gib: "32"
            }),
            value: "8000m, 32Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "16",
                gib: "32"
            }),
            value: "16000m, 32Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "16",
                gib: "64"
            }),
            value: "16000m, 64Gi"
        }
    ]
};
const V = {
    kafka: [
        {
            label: t("CORE_GIB", {
                core: "1",
                gib: "1"
            }),
            value: "1000m, 1Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "1",
                gib: "2"
            }),
            value: "1000m, 2Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "2",
                gib: "4"
            }),
            value: "2000m, 4Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "4",
                gib: "8"
            }),
            value: "4000m, 8Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "8",
                gib: "16"
            }),
            value: "8000m, 16Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "8",
                gib: "32"
            }),
            value: "8000m, 32Gi"
        }
    ],
    zookeeper: [
        {
            label: t("CORE_GIB", {
                core: "1",
                gib: "1"
            }),
            value: "1000m, 1Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "1",
                gib: "2"
            }),
            value: "1000m, 2Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "2",
                gib: "4"
            }),
            value: "2000m, 4Gi"
        },
        {
            label: t("CORE_GIB", {
                core: "4",
                gib: "8"
            }),
            value: "4000m, 8Gi"
        }
    ]
};
export const getNodeRoleOptions = function(e, a) {
    switch(e){
        case RadonDBAppId.Elasticsearch:
            return ((e)=>{
                switch(e){
                    case "specifications":
                        return [
                            {
                                label: t("PRIMARY_NODE"),
                                value: "master"
                            },
                            {
                                label: t("HOT_NODE"),
                                value: "hot"
                            },
                            {
                                label: t("WARM_NODE"),
                                value: "warm"
                            },
                            {
                                label: t("COLD_NODE"),
                                value: "cold"
                            },
                            {
                                label: t("KIBANA_NODE"),
                                value: "kibana"
                            }
                        ];
                    case "storage":
                        return [
                            {
                                label: t("HOT_NODE"),
                                value: "hot"
                            },
                            {
                                label: t("WARM_NODE"),
                                value: "warm"
                            },
                            {
                                label: t("COLD_NODE"),
                                value: "cold"
                            }
                        ];
                    case "node":
                        return [
                            {
                                label: t("HOT_NODE"),
                                value: "hot"
                            },
                            {
                                label: t("WARM_NODE"),
                                value: "warm"
                            },
                            {
                                label: t("COLD_NODE"),
                                value: "cold"
                            },
                            {
                                label: t("KIBANA_NODE"),
                                value: "kibana"
                            }
                        ];
                    default:
                        return [];
                }
            })(a);
        case RadonDBAppId.RedisCluster:
            return ((e)=>{
                switch(e){
                    case "specifications":
                    case "node":
                        return [
                            {
                                label: t("REDIS_NODE"),
                                value: "master"
                            },
                            {
                                label: t("PROXY_NODE"),
                                value: "proxy"
                            }
                        ];
                    default:
                        return [];
                }
            })(a);
        case RadonDBAppId.Kafka:
            return ((e)=>{
                switch(e){
                    case "specifications":
                    case "node":
                    case "storage":
                        return [
                            {
                                label: t("KAFKA_NODE"),
                                value: "kafka"
                            },
                            {
                                label: t("ZOOKEEPER_NODE"),
                                value: "zookeeper"
                            }
                        ];
                    default:
                        return [];
                }
            })(a);
        case RadonDBAppId.OpenSearch:
            return ((e)=>{
                switch(e){
                    case "specifications":
                        return [
                            {
                                label: t("PRIMARY_NODE"),
                                value: "master"
                            },
                            {
                                label: t("HOT_NODE"),
                                value: "hot"
                            },
                            {
                                label: t("WARM_NODE"),
                                value: "warm"
                            },
                            {
                                label: t("COLD_NODE"),
                                value: "cold"
                            },
                            {
                                label: t("DASHBOARD_NODE"),
                                value: "dashboard"
                            },
                            {
                                label: t("LOGSTASH_NODE"),
                                value: "logstash"
                            }
                        ];
                    case "storage":
                        return [
                            {
                                label: t("HOT_NODE"),
                                value: "hot"
                            },
                            {
                                label: t("WARM_NODE"),
                                value: "warm"
                            },
                            {
                                label: t("COLD_NODE"),
                                value: "cold"
                            }
                        ];
                    case "node":
                        return [
                            {
                                label: t("HOT_NODE"),
                                value: "hot"
                            },
                            {
                                label: t("WARM_NODE"),
                                value: "warm"
                            },
                            {
                                label: t("COLD_NODE"),
                                value: "cold"
                            },
                            {
                                label: t("DASHBOARD_NODE"),
                                value: "dashboard"
                            },
                            {
                                label: t("LOGSTASH_NODE"),
                                value: "logstash"
                            }
                        ];
                    default:
                        return [];
                }
            })(a);
        default:
            return [];
    }
};
i = {};
module31(i, RadonDBAppId.ClickHouse, SpecificationsOptions.slice(1, -1));
module31(i, RadonDBAppId.MySQL, SpecificationsOptions);
module31(i, RadonDBAppId.PostgreSQL, SpecificationsOptions);
module31(i, RadonDBAppId.RedisCluster, {
    master: L,
    proxy: x
});
module31(i, RadonDBAppId.RedisSentinel, L);
module31(i, RadonDBAppId.MongoDB, options);
module31(i, RadonDBAppId.Elasticsearch, F);
module31(i, RadonDBAppId.Kafka, V);
module31(i, RadonDBAppId.OpenSearch, G);
export const SpecificationOptionsObject = i;
export function validateStorage(e, { app_id, max, nodeRole, oldStorage } = {}) {
    const o = parseFloat(e);
    if (!Number.isInteger(o)) {
        return {
            error: true,
            message: t("VALUE_MUST_BE_INTEGER")
        };
    }
    if (max && o > max) {
        return {
            error: true,
            message: t("VALUE_CANNOT_BE_GREATER_THAN_VALUE", {
                max
            })
        };
    }
    switch(app_id){
        case RadonDBAppId.Elasticsearch:
            if (Number.isNaN(o) || o < 20) {
                return {
                    error: true,
                    message: t("VALUE_CANNOT_BE_LESS_THAN_20")
                };
            }
            break;
        case RadonDBAppId.Kafka:
            if (oldStorage && o < oldStorage) {
                return {
                    error: true,
                    message: t("VOLUME_CAPACITY_CANNOT_REDUCE.")
                };
            }
            if (nodeRole === "kafka") {
                if (Number.isNaN(o) || o < 20) {
                    return {
                        error: true,
                        message: t("VALUE_CANNOT_BE_LESS_THAN_20")
                    };
                }
                break;
            }
        default:
            if (Number.isNaN(o) || o < 10) {
                return {
                    error: true,
                    message: t("VALUE_CANNOT_BE_LESS_THAN_10")
                };
            }
    }
    return {
        error: false
    };
}
c = {};
module31(c, RadonDBAppId.ClickHouse, {
    $schema: "https://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
        specifications: {
            type: "string",
            title: "RESOURCES",
            render: "select",
            options: SpecificationsOptions.slice(1, -1)
        },
        volumeType: {
            type: "string",
            title: "STORAGE_CLASS",
            description: "DATABASE_STORAGE_CLASS_DESC",
            render: "select",
            options: []
        },
        volume: {
            type: "string",
            title: "VOLUME",
            render: "slider",
            sliderMin: 0,
            sliderMax: 2048,
            sliderUnit: "Gi",
            rowExclusive: true,
            validator: validateStorage
        },
        nodes: {
            type: "integer",
            title: "SHARD_COUNT",
            min: 1,
            max: 100,
            showFunc: true,
            tooltipContent: "DATABASE_NODE_TIP"
        },
        replicasets: {
            type: "integer",
            title: "REPLICA_COUNT",
            min: 1,
            max: 3,
            showFunc: true
        },
        username: {
            type: "string",
            title: "USERNAME",
            description: "DATABASE_USERNAME_DESC",
            rules: [
                {
                    pattern: userNameRegx,
                    message: "INVALID_DATABASE_USERNAME_DESC"
                }
            ]
        },
        password: {
            ...Password,
            type: "string",
            render: "password",
            title: "PASSWORD"
        }
    }
});
module31(c, RadonDBAppId.PostgreSQL, {
    $schema: "https://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
        version: {
            type: "string",
            title: "KERNEL_VERSION",
            description: "DATABASE_KERNEL_VERSION_DESC",
            render: "select",
            options: [
                {
                    label: "PostgreSQL 12",
                    value: "12"
                },
                {
                    label: "PostgreSQL 13",
                    value: "13"
                },
                {
                    label: "PostgreSQL 14",
                    value: "14"
                },
                {
                    label: "PostgreSQL 15",
                    value: "15"
                }
            ],
            rowExclusive: true,
            halfRow: true
        },
        specifications: {
            type: "string",
            title: "RESOURCES",
            render: "select",
            options: SpecificationsOptions
        },
        volumeType: {
            type: "string",
            title: "STORAGE_CLASS",
            description: "DATABASE_STORAGE_CLASS_DESC",
            render: "select",
            options: []
        },
        volume: {
            type: "string",
            title: "VOLUME",
            render: "slider",
            sliderMin: 0,
            sliderMax: 1024,
            sliderUnit: "Gi",
            rowExclusive: true,
            validator: validateStorage
        },
        nodes: {
            type: "integer",
            title: "DATA_NODE_COUNT",
            min: 2,
            max: 8,
            showFunc: true,
            halfRow: true
        }
    }
});
module31(c, RadonDBAppId.MySQL, {
    $schema: "https://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
        version: {
            type: "string",
            title: "KERNEL_VERSION",
            description: "DATABASE_KERNEL_VERSION_DESC",
            render: "select",
            options: [
                {
                    label: "MySQL 5.7",
                    value: "5.7"
                },
                {
                    label: "MySQL 8.0",
                    value: "8.0"
                }
            ],
            halfRow: true
        },
        specifications: {
            type: "string",
            title: "RESOURCES",
            render: "select",
            options: SpecificationsOptions
        },
        volumeType: {
            type: "string",
            title: "STORAGE_CLASS",
            description: "DATABASE_STORAGE_CLASS_DESC",
            render: "select",
            options: []
        },
        volume: {
            type: "string",
            title: "VOLUME",
            render: "slider",
            sliderMin: 0,
            sliderMax: 2048,
            sliderUnit: "Gi",
            rowExclusive: true,
            validator: validateStorage
        },
        nodes: {
            type: "string",
            title: "STANDBY_DATABASE_COUNT",
            description: "STANDBY_DATABASE_COUNT_DESC",
            render: "select",
            options: [
                1,
                2,
                4
            ].map((e)=>({
                    label: e,
                    value: e
                })),
            halfRow: true
        }
    }
});
module31(c, RadonDBAppId.RedisCluster, {
    $schema: "https://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
        version: {
            type: "string",
            title: "KERNEL_VERSION",
            description: "DATABASE_KERNEL_VERSION_DESC",
            render: "select",
            options: [
                {
                    label: "Redis 7.0.4",
                    value: "7.0.4"
                }
            ],
            halfRow: true
        },
        specifications: {
            type: "string",
            title: "RESOURCES",
            render: "select",
            options: L
        },
        volumeType: {
            type: "string",
            title: "STORAGE_CLASS",
            description: "DATABASE_STORAGE_CLASS_DESC",
            render: "select",
            options: []
        },
        volume: {
            type: "string",
            title: "VOLUME",
            render: "slider",
            sliderMin: 0,
            sliderMax: 1024,
            sliderUnit: "Gi",
            rowExclusive: true,
            validator: validateStorage
        },
        nodes: {
            type: "integer",
            title: "SHARD_COUNT",
            min: 3,
            max: 50,
            showFunc: true
        },
        password: {
            type: "string",
            title: "PASSWORD",
            description: "REDIS_PASSWORD_DESC",
            render: "password",
            placeholder: "OPTIONAL",
            rules: [
                {
                    pattern: /[a-zA-Z0-9!@#$%^&*()./;]{6,31}$/,
                    message: "INVALID_REDIS_PASSWORD_DESC"
                }
            ]
        },
        predixyNodes: {
            type: "integer",
            title: "PROXY_NODE_COUNT",
            min: 0,
            max: 50,
            showFunc: true,
            advanced: true
        },
        predixySpecification: {
            type: "string",
            title: "PROXY_NODE_RESOURCES",
            render: "select",
            options: x,
            advanced: true
        },
        endpointType: {
            type: "string",
            title: "ENDPOINT_TYPE",
            description: "ENDPOINT_TYPE_DESC",
            render: "select",
            options: [
                {
                    label: t("ENABLED"),
                    value: "true"
                },
                {
                    label: t("DISABLED"),
                    value: "false"
                }
            ],
            forVersion: [
                "7.0.4"
            ],
            advanced: true,
            halfRow: true
        }
    }
});
module31(c, RadonDBAppId.RedisSentinel, {
    $schema: "https://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
        version: {
            type: "string",
            title: "KERNEL_VERSION",
            description: "DATABASE_KERNEL_VERSION_DESC",
            render: "select",
            options: [
                {
                    label: "Redis 7.0.4",
                    value: "7.0.4"
                }
            ],
            halfRow: true
        },
        specifications: {
            type: "string",
            title: "RESOURCES",
            render: "select",
            options: L
        },
        volumeType: {
            type: "string",
            title: "STORAGE_CLASS",
            description: "DATABASE_STORAGE_CLASS_DESC",
            render: "select",
            options: []
        },
        volume: {
            type: "string",
            title: "VOLUME",
            render: "slider",
            sliderMin: 0,
            sliderMax: 1024,
            sliderUnit: "Gi",
            rowExclusive: true,
            validator: validateStorage
        },
        nodes: {
            type: "string",
            title: "REDIS_NODE_COUNT",
            description: "REDIS_NODE_COUNT_DESC",
            render: "select",
            options: [
                3,
                5,
                7
            ].map((e)=>({
                    label: e,
                    value: e
                }))
        },
        password: {
            type: "string",
            title: "PASSWORD",
            description: "REDIS_PASSWORD_DESC",
            render: "password",
            placeholder: "OPTIONAL",
            rules: [
                {
                    pattern: /[a-zA-Z0-9!@#$%^&*()./;]{6,31}$/,
                    message: "INVALID_REDIS_PASSWORD_DESC"
                }
            ]
        }
    }
});
module31(c, RadonDBAppId.MongoDB, {
    $schema: "https://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
        version: {
            type: "string",
            title: "KERNEL_VERSION",
            description: "DATABASE_KERNEL_VERSION_DESC",
            render: "select",
            options: [
                {
                    label: "MongoDB 4.2.19",
                    value: "4.2.19"
                }
            ],
            halfRow: true
        },
        specifications: {
            type: "string",
            title: "RESOURCES",
            render: "select",
            options
        },
        volumeType: {
            type: "string",
            title: "STORAGE_CLASS",
            description: "DATABASE_STORAGE_CLASS_DESC",
            render: "select",
            options: []
        },
        volume: {
            type: "string",
            title: "VOLUME",
            render: "slider",
            sliderMin: 0,
            sliderMax: 2048,
            sliderUnit: "Gi",
            rowExclusive: true,
            validator: validateStorage
        },
        nodes: {
            type: "string",
            title: "NODE_COUNT",
            description: "MONGODB_NODE_COUNT_DESC",
            render: "select",
            options: [
                1,
                3,
                5,
                7
            ].map((e)=>({
                    label: e,
                    value: e
                })),
            halfRow: true
        }
    }
});
module31(c, RadonDBAppId.Elasticsearch, {
    $schema: "https://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
        version: {
            type: "string",
            title: "KERNEL_VERSION",
            description: "DATABASE_KERNEL_VERSION_DESC",
            render: "select",
            options: [
                {
                    label: "ES 7.17.5",
                    value: "7.17.5"
                }
            ],
            halfRow: true
        },
        master: {
            type: "object",
            title: "PRIMARY_NODE_SETTINGS",
            icon: "pod",
            properties: {
                specifications: {
                    type: "string",
                    title: "RESOURCES",
                    description: "PRIMARY_NODE_RESOURCES_DESC",
                    render: "select",
                    options: F.master
                },
                nodes: {
                    type: "string",
                    title: "PRIMARY_NODE_COUNT",
                    disabled: true
                },
                volumeType: {
                    type: "string",
                    title: "STORAGE_CLASS",
                    description: "DATABASE_STORAGE_CLASS_DESC",
                    render: "select",
                    options: [],
                    halfRow: true
                },
                volume: {
                    type: "alert",
                    title: "VOLUME",
                    content: "VOLUMN_PERSIST",
                    rowExclusive: true
                }
            }
        },
        hot: {
            type: "object",
            title: "HOT_NODE_SETTINGS",
            icon: "pod",
            properties: {
                specifications: {
                    type: "string",
                    title: "RESOURCES",
                    description: "HOT_NODE_RESOURCES_DESC",
                    render: "select",
                    options: F.hot
                },
                nodes: {
                    type: "integer",
                    title: "HOT_NODE_COUNT",
                    min: 1,
                    max: 200,
                    showFunc: true
                },
                volumeType: {
                    type: "string",
                    title: "STORAGE_CLASS",
                    description: "DATABASE_STORAGE_CLASS_DESC",
                    render: "select",
                    options: [],
                    halfRow: true
                },
                volume: {
                    type: "string",
                    title: "VOLUME",
                    render: "slider",
                    sliderMin: 0,
                    sliderMax: 1920,
                    sliderUnit: "Gi",
                    rowExclusive: true,
                    validator: validateStorage
                }
            }
        },
        warm: {
            type: "object",
            title: "WARM_NODE_SETTINGS",
            icon: "pod",
            properties: {
                specifications: {
                    type: "string",
                    title: "RESOURCES",
                    description: "WARM_NODE_RESOURCES_DESC",
                    render: "select",
                    options: F.warm
                },
                nodes: {
                    type: "integer",
                    title: "WARM_NODE_COUNT",
                    min: 0,
                    max: 200,
                    showFunc: true
                },
                volumeType: {
                    type: "string",
                    title: "STORAGE_CLASS",
                    description: "DATABASE_STORAGE_CLASS_DESC",
                    render: "select",
                    options: [],
                    halfRow: true
                },
                volume: {
                    type: "string",
                    title: "VOLUME",
                    render: "slider",
                    sliderMin: 0,
                    sliderMax: 1920,
                    sliderUnit: "Gi",
                    rowExclusive: true,
                    validator: validateStorage
                }
            }
        },
        cold: {
            type: "object",
            title: "COLD_NODE_SETTINGS",
            icon: "pod",
            properties: {
                specifications: {
                    type: "string",
                    title: "RESOURCES",
                    description: "COLD_NODE_RESOURCES_DESC",
                    render: "select",
                    options: F.cold
                },
                nodes: {
                    type: "integer",
                    title: "COLD_NODE_COUNT",
                    min: 0,
                    max: 200,
                    showFunc: true
                },
                volumeType: {
                    type: "string",
                    title: "STORAGE_CLASS",
                    description: "DATABASE_STORAGE_CLASS_DESC",
                    render: "select",
                    options: [],
                    halfRow: true
                },
                volume: {
                    type: "string",
                    title: "VOLUME",
                    render: "slider",
                    sliderMin: 0,
                    sliderMax: 3200,
                    sliderUnit: "Gi",
                    rowExclusive: true,
                    validator: validateStorage
                }
            }
        },
        kibana: {
            type: "object",
            title: "KIBANA_NODE_SETTINGS",
            icon: "pod",
            properties: {
                specifications: {
                    type: "string",
                    title: "RESOURCES",
                    description: "KIBANA_NODE_RESOURCES_DESC",
                    render: "select",
                    options: F.kibana
                },
                nodes: {
                    type: "integer",
                    title: "KIBANA_NODE_COUNT",
                    min: 0,
                    max: 8,
                    showFunc: true
                }
            }
        }
    }
});
module31(c, RadonDBAppId.Kafka, {
    $schema: "https://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
        empty: {
            type: ""
        },
        kafka: {
            type: "object",
            title: "KAFKA_SETTINGS",
            icon: "pod",
            properties: {
                version: {
                    type: "string",
                    title: "KAFKA_VERSION",
                    description: "  ",
                    render: "select",
                    options: [
                        {
                            label: "Kafka 3.2.0",
                            value: "3.2.0"
                        }
                    ],
                    halfRow: true
                },
                specifications: {
                    type: "string",
                    title: "RESOURCES",
                    description: "KAFKA_NODE_RESOURCES_DESC",
                    render: "select",
                    options: V.kafka
                },
                nodes: {
                    type: "integer",
                    title: "KAFKA_NODE_COUNT",
                    min: 3,
                    max: 100,
                    showFunc: true
                },
                volumeType: {
                    type: "string",
                    title: "STORAGE_CLASS",
                    description: "DATABASE_STORAGE_CLASS_DESC",
                    render: "select",
                    options: [],
                    halfRowL: true
                },
                volume: {
                    type: "string",
                    title: "VOLUME",
                    render: "slider",
                    sliderMin: 0,
                    sliderMax: 2048,
                    sliderUnit: "Gi",
                    rowExclusive: true,
                    validator: validateStorage
                }
            }
        },
        zookeeper: {
            type: "object",
            title: "ZOOKEEPER_SETTINGS",
            icon: "pod",
            properties: {
                specifications: {
                    type: "string",
                    title: "RESOURCES",
                    description: "ZOOKEEPER_NODE_RESOURCES_DESC",
                    render: "select",
                    options: V.zookeeper
                },
                nodes: {
                    type: "string",
                    title: "ZOOKEEPER_NODE_COUNT",
                    render: "select",
                    options: [
                        1,
                        3,
                        5,
                        7,
                        9
                    ].map((e)=>({
                            label: e,
                            value: e
                        }))
                },
                volumeType: {
                    type: "string",
                    title: "STORAGE_CLASS",
                    description: "DATABASE_STORAGE_CLASS_DESC",
                    render: "select",
                    options: [],
                    halfRow: true
                },
                volume: {
                    type: "string",
                    title: "VOLUME",
                    render: "slider",
                    sliderMin: 0,
                    sliderMax: 100,
                    sliderUnit: "Gi",
                    rowExclusive: true,
                    validator: validateStorage
                }
            }
        }
    }
});
module31(c, RadonDBAppId.OpenSearch, {
    $schema: "https://json-schema.org/draft-07/schema#",
    type: "object",
    unfoldAdvanced: true,
    properties: {
        version: {
            type: "string",
            title: "KERNEL_VERSION",
            description: "DATABASE_KERNEL_VERSION_DESC",
            render: "select",
            options: [
                {
                    label: "OpenSearch 2.8.0",
                    value: "2.8.0"
                }
            ],
            halfRow: true
        },
        username: {
            type: "string",
            title: "USERNAME",
            rules: [
                {
                    required: true,
                    message: "USERNAME_EMPTY_DESC"
                }
            ],
            advanced: true
        },
        password: {
            type: "string",
            title: "PASSWORD",
            description: Password.description,
            rules: Password.rules,
            advanced: true
        },
        master: {
            type: "object",
            title: "PRIMARY_NODE_SETTINGS",
            icon: "pod",
            properties: {
                specifications: {
                    type: "string",
                    title: "RESOURCES",
                    description: "PRIMARY_NODE_RESOURCES_DESC",
                    render: "select",
                    options: G.master
                },
                nodes: {
                    type: "string",
                    title: "PRIMARY_NODE_COUNT",
                    description: "PRIMARY_NODE_COUNT_DESC",
                    disabled: true
                },
                volumeType: {
                    type: "string",
                    title: "STORAGE_CLASS",
                    description: "DATABASE_STORAGE_CLASS_DESC",
                    render: "select",
                    options: [],
                    halfRow: true
                },
                volume: {
                    type: "alert",
                    title: "VOLUME",
                    content: "VOLUMN_PERSIST",
                    rowExclusive: true
                }
            }
        },
        hot: {
            type: "object",
            title: "HOT_NODE_SETTINGS",
            icon: "pod",
            properties: {
                specifications: {
                    type: "string",
                    title: "RESOURCES",
                    description: "HOT_NODE_RESOURCES_DESC",
                    render: "select",
                    options: G.hot
                },
                nodes: {
                    type: "integer",
                    title: "HOT_NODE_COUNT",
                    min: 1,
                    max: 200,
                    showFunc: true
                },
                volumeType: {
                    type: "string",
                    title: "STORAGE_CLASS",
                    description: "DATABASE_STORAGE_CLASS_DESC",
                    render: "select",
                    options: [],
                    halfRow: true
                },
                volume: {
                    type: "string",
                    title: "VOLUME",
                    render: "slider",
                    sliderMin: 0,
                    sliderMax: 15360,
                    sliderUnit: "Gi",
                    rowExclusive: true,
                    validator: validateStorage
                }
            }
        },
        warm: {
            type: "object",
            title: "WARM_NODE_SETTINGS",
            icon: "pod",
            properties: {
                specifications: {
                    type: "string",
                    title: "RESOURCES",
                    description: "WARM_NODE_RESOURCES_DESC",
                    render: "select",
                    options: G.warm
                },
                nodes: {
                    type: "integer",
                    title: "WARM_NODE_COUNT",
                    min: 0,
                    max: 200,
                    showFunc: true
                },
                volumeType: {
                    type: "string",
                    title: "STORAGE_CLASS",
                    description: "DATABASE_STORAGE_CLASS_DESC",
                    render: "select",
                    options: [],
                    halfRow: true
                },
                volume: {
                    type: "string",
                    title: "VOLUME",
                    render: "slider",
                    sliderMin: 0,
                    sliderMax: 15360,
                    sliderUnit: "Gi",
                    rowExclusive: true,
                    validator: validateStorage
                }
            }
        },
        cold: {
            type: "object",
            title: "COLD_NODE_SETTINGS",
            icon: "pod",
            properties: {
                specifications: {
                    type: "string",
                    title: "RESOURCES",
                    description: "COLD_NODE_RESOURCES_DESC",
                    render: "select",
                    options: G.cold
                },
                nodes: {
                    type: "integer",
                    title: "COLD_NODE_COUNT",
                    min: 0,
                    max: 200,
                    showFunc: true
                },
                volumeType: {
                    type: "string",
                    title: "STORAGE_CLASS",
                    description: "DATABASE_STORAGE_CLASS_DESC",
                    render: "select",
                    options: [],
                    halfRow: true
                },
                volume: {
                    type: "string",
                    title: "VOLUME",
                    render: "slider",
                    sliderMin: 0,
                    sliderMax: 15360,
                    sliderUnit: "Gi",
                    rowExclusive: true,
                    validator: validateStorage
                }
            }
        },
        dashboard: {
            type: "object",
            title: t("DASHBOARD_NODE_SETTINGS"),
            icon: "pod",
            properties: {
                specifications: {
                    type: "string",
                    title: "RESOURCES",
                    description: "DASHBOARD_NODE_RESOURCES_DESC",
                    render: "select",
                    options: G.dashboard
                },
                nodes: {
                    type: "integer",
                    title: "DASHOBOARD_NODE_COUNT",
                    min: 0,
                    max: 8,
                    showFunc: true
                }
            }
        },
        logstash: {
            type: "object",
            title: t("LOGSTASH_NODE_SETTINGS"),
            icon: "pod",
            properties: {
                specifications: {
                    type: "string",
                    title: "RESOURCES",
                    description: "LOGSTASH_NODE_RESOURCES_DESC",
                    render: "select",
                    options: G.logstash
                },
                nodes: {
                    type: "integer",
                    title: "LOGSTASH_NODE_COUNT",
                    min: 0,
                    max: 10,
                    showFunc: true
                }
            }
        }
    }
});
export const ValuesSchema = c;
s = {};
module31(s, RadonDBAppId.ClickHouse, {
    specifications: "2000m, 4Gi",
    volumeType: "",
    volume: "10Gi",
    nodes: 1,
    replicasets: 2,
    username: "clickhouse",
    password: "C1ickh0use-0perator",
    port: 8123
});
module31(s, RadonDBAppId.PostgreSQL, {
    version: "12",
    specifications: "1000m, 1Gi",
    volumeType: "qingcloud",
    volume: "10Gi",
    nodes: 2
});
module31(s, RadonDBAppId.MySQL, {
    version: "5.7",
    specifications: "1000m, 1Gi",
    volumeType: "qingcloud",
    volume: "10Gi",
    nodes: 2
});
module31(s, RadonDBAppId.RedisCluster, {
    version: "7.0.4",
    specifications: "2000m, 4Gi",
    volumeType: "qingcloud",
    volume: "10Gi",
    nodes: 3,
    password: "",
    predixyNodes: 0,
    predixySpecification: "1000m, 1Gi",
    endpointType: "false"
});
module31(s, RadonDBAppId.RedisSentinel, {
    version: "7.0.4",
    specifications: "2000m, 4Gi",
    volumeType: "qingcloud",
    volume: "10Gi",
    nodes: 3,
    password: ""
});
module31(s, RadonDBAppId.MongoDB, {
    version: "4.2.19",
    specifications: "2000m, 8Gi",
    volumeType: "qingcloud",
    volume: "10Gi",
    nodes: 3
});
module31(s, RadonDBAppId.Elasticsearch, {
    version: "7.17.5",
    master: {
        specifications: "1000m, 2Gi",
        nodes: 3,
        volume: "20Gi"
    },
    hot: {
        specifications: "2000m, 4Gi",
        nodes: 2,
        volume: "20Gi"
    },
    warm: {
        specifications: "2000m, 4Gi",
        nodes: 0,
        volume: "20Gi"
    },
    cold: {
        specifications: "2000m, 4Gi",
        nodes: 0,
        volume: "20Gi"
    },
    kibana: {
        specifications: "1000m, 2Gi",
        nodes: 0
    }
});
module31(s, RadonDBAppId.Kafka, {
    kafka: {
        version: "3.2.0",
        specifications: "1000m, 2Gi",
        nodes: 3,
        volume: "20Gi"
    },
    zookeeper: {
        specifications: "1000m, 1Gi",
        nodes: 3,
        volume: "10Gi"
    }
});
module31(s, RadonDBAppId.OpenSearch, {
    version: "2.8.0",
    username: "admin",
    password: "RadonDB@123",
    master: {
        specifications: "1000m, 2Gi",
        nodes: 3,
        volume: "20Gi"
    },
    hot: {
        specifications: "2000m, 4Gi",
        nodes: 2,
        volume: "20Gi"
    },
    warm: {
        specifications: "2000m, 4Gi",
        nodes: 0,
        volume: "20Gi"
    },
    cold: {
        specifications: "2000m, 4Gi",
        nodes: 0,
        volume: "20Gi"
    },
    dashboard: {
        specifications: "1000m, 2Gi",
        nodes: 1
    },
    logstash: {
        specifications: "1000m, 2Gi",
        nodes: 0
    }
});
export var ValuesJSON = s;
export function isValid(e) {
    return Number.isInteger(e) || !module63(e);
}
export function generateClickHouseUserString(e, t) {
    return `"${e}/password":"${t}","${e}/networks/ip":["127.0.0.1","::/0"],"${e}/profile":"default","${e}/quotas":"default"`;
}
export function getCpuAndMemoryFromSpecifications(e) {
    const t = e.split(", ");
    const a = module96(t, 2);
    return {
        cpu: a[0],
        memory: a[1]
    };
}
function J(e, { name, namespace, volume, volumeType, password, cm, version }) {
    module74(e, "metadata.name", name);
    module74(e, "metadata.namespace", namespace);
    if (password) {
        module74(e, "spec.kubernetesConfig.redisSecret", {
            name: `${name}-password-secret`,
            key: "password"
        });
    }
    module74(e, "spec.aclConfig.aclFile", `${name}-acl-config`);
    module74(e, "spec.storage.volumeClaimTemplate.spec.storageClassName", volumeType);
    module74(e, "spec.storage.volumeClaimTemplate.spec.resources.requests.storage", volume);
    module74(e, "spec.kubernetesConfig.resources.requests", cm);
    module74(e, "spec.kubernetesConfig.resources.limits", cm);
    module74(e, "spec.kubernetesConfig.redisVersion", version);
    module74(e, "spec.kubernetesConfig.image", RedisImage[version]);
}
function Z(e, { name, namespace, password, specifications }) {
    const u = [];
    const e_secret = e.secret;
    if (e_secret && password) {
        module74(e_secret, "metadata.name", `${name}-password-secret`);
        module74(e_secret, "metadata.namespace", namespace);
        module74(e_secret, "data.password", safeBtoa(password));
        u.push({
            name: "secret",
            data: JSON.stringify(e_secret)
        });
    }
    const i = JSON.parse(JSON.stringify(e.externalConfig));
    if (i) {
        module74(i, "metadata.name", `${name}-external-config`);
        module74(i, "metadata.namespace", namespace);
        const c = getCpuAndMemoryFromSpecifications(specifications).memory;
        const s = module26(i, 'data["redis-external.conf"]', "");
        module74(i, 'data["redis-external.conf"]', s.replace("maxmemory 0", `maxmemory ${1024 * parseFloat(c) - 50}MB`));
        u.push({
            name: "externalConfig",
            data: JSON.stringify(i)
        });
    }
    const e_aclConfig = e.aclConfig;
    if (e_aclConfig) {
        module74(e_aclConfig, "metadata.name", `${name}-acl-config`);
        module74(e_aclConfig, "metadata.namespace", namespace);
        u.push({
            name: "aclConfig",
            data: JSON.stringify(e_aclConfig)
        });
    }
    const e_service = e.service;
    if (e_service) {
        module74(e_service, "metadata.name", `${name}-metrics-service`);
        module74(e_service, "metadata.namespace", namespace);
        u.push({
            name: "metricsService",
            data: JSON.stringify(e_service)
        });
    }
    return u;
}
