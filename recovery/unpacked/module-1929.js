import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-73.js";
import "./module-18.js";
import "./module-87.js";
import "./module-48.js";
import "./module-16.js";
import "./module-27.js";
import "./module-932.js";
import "./module-138.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-64.js";
import "./module-137.js";
import "./module-75.js";
import "./module-813.js";
import "./module-7.js";
import "./module-249.js";
import "./module-45.js";
import "./module-28.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-193.js";
import module58 from "./module-58.js";
import module96 from "./module-96.js";
import "./module-31.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module189 from "./module-189.js";
import module63 from "./module-63.js";
import module903 from "./module-903.js";
import module896 from "./module-896.js";
import module1024 from "./module-1024.js";
import module4798 from "./module-4798.js";
import module4799 from "./module-4799.js";
import module242 from "./module-242.js";
import module159 from "./module-159.js";
import module458 from "./module-458.js";
import { convertJVMToMemoryMebiBytes, convertToMebiBytes } from "./module-1247.js";
import { PGImage, RadonDBAppId, getAppIdByKind } from "./module-817.js";
import { getCKParams, getECKParams, getKafkaParams, getMongoDBParams, getMySQLParams, getOpenSearchParams, getPGParams, getRedisParams } from "./module-4825.js";
import { getManifestApi } from "./module-1016.js";
import { kafkaYaml } from "./module-1093.js";
let l;
let i;
let u;
function Y(e) {
    const t = (()=>{
        if (typeof Reflect === "undefined" || !Reflect.construct) {
            return false;
        }
        if (Reflect.construct.sham) {
            return false;
        }
        if (typeof Proxy === "function") {
            return true;
        }
        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    })();
    return function() {
        let a;
        const r = module51(e);
        if (t) {
            const n = module51(this).constructor;
            a = Reflect.construct(r, arguments, n);
        } else {
            a = r.apply(this, arguments);
        }
        return module56(this, a);
    };
}
l = ((e)=>{
    module55(g, e);
    let t;
    let c;
    var l = Y(g);
    function g(...a_1) {
        let e;
        module36(this, g);
        e = l.call(this, ...a_1);
        e.resourceName = "params";
        e.app_id = "";
        e.getUrl = function({ workspace, namespace, cluster, cluster_id } = {}) {
            return getManifestApi({
                workspace,
                namespace,
                cluster,
                cluster_id
            });
        };
        module65(e, "fetchList", i, module88(e));
        module65(e, "updateParams", u, module88(e));
        e.updateCKParams = (()=>{
            const t = module44(module41.mark(function t(a) {
                let r;
                let n;
                let o;
                let c;
                let l;
                let i;
                let u;
                let d;
                let f;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                r = a.workspace;
                                n = a.cluster_id;
                                o = a.cluster;
                                c = a.namespace;
                                l = a.params;
                                t.next = 3;
                                return request.get(e.getUrl({
                                    workspace: r,
                                    namespace: c,
                                    cluster: o,
                                    cluster_id: n
                                }));
                            case 3:
                                i = t.sent;
                                u = JSON.parse(i.customResource);
                                if (!module63(l)) {
                                    t.next = 7;
                                    break;
                                }
                                return t.abrupt("return");
                            case 7:
                                d = l.max_memory_usage;
                                if (f = l.max_server_memory_usage) {
                                    module74(u, "spec.configuration.settings.max_server_memory_usage", f);
                                }
                                if (d) {
                                    module74(u, 'spec.configuration.profiles["default/max_memory_usage"]', d);
                                }
                                i.customResource = JSON.stringify(u);
                                i.version += 1;
                                t.next = 14;
                                return request.put(e.getUrl({
                                    workspace: r,
                                    namespace: c,
                                    cluster: o,
                                    cluster_id: n
                                }), i);
                            case 14:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
        e.updatePGParams = (()=>{
            const t = module44(module41.mark(function t(a) {
                let r;
                let n;
                let c;
                let l;
                let i;
                let u;
                let d;
                let f;
                let p;
                let m;
                let h;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                r = a.workspace;
                                n = a.cluster_id;
                                c = a.cluster;
                                l = a.namespace;
                                i = a.params;
                                t.next = 3;
                                return request.get(e.getUrl({
                                    workspace: r,
                                    namespace: l,
                                    cluster: c,
                                    cluster_id: n
                                }));
                            case 3:
                                u = t.sent;
                                d = JSON.parse(u.customResource);
                                f = module26(d, "spec.postgresql.configs");
                                p = e.getPGParamsByConfig(f);
                                if ((m = {
                                    ...i
                                }).port !== 55555) {
                                    t.next = 10;
                                    break;
                                }
                                throw new Error("PG_PORT_FORBIDDEN_ERROR");
                            case 10:
                                if (m.port && m.port !== p.port) {
                                    module74(d, "spec.services[1].spec.ports[0].port", m.port);
                                    module74(d, "spec.services[2].spec.ports[0].port", m.port);
                                }
                                [
                                    "shared_buffers",
                                    "temp_buffers",
                                    "work_mem",
                                    "wal_buffers",
                                    "maintenance_work_mem",
                                    "wal_writer_flush_after"
                                ].forEach((e)=>{
                                    if (m[e]) {
                                        m[e] += "MB";
                                    }
                                });
                                [
                                    "bgwriter_flush_after"
                                ].forEach((e)=>{
                                    if (m[e]) {
                                        m[e] += "kB";
                                    }
                                });
                                h = Object.entries({
                                    ...p,
                                    ...m
                                }).map((e)=>{
                                    const t = module96(e, 2);
                                    const a = t[0];
                                    const r = t[1];
                                    return `${a}=${r}`;
                                });
                                module74(d, "spec.postgresql.configs", h);
                                u.customResource = JSON.stringify(d);
                                u.version += 1;
                                t.next = 21;
                                return request.put(e.getUrl({
                                    workspace: r,
                                    namespace: l,
                                    cluster: c,
                                    cluster_id: n
                                }), u);
                            case 21:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
        e.updateMySQLParams = async (a)=>{
            let r;
            let n;
            let o;
            let c;
            let l;
            let i;
            let u;
            let d;
            r = a.workspace;
            n = a.cluster_id;
            o = a.cluster;
            c = a.namespace;
            l = a.params;
            i = await request.get(e.getUrl({
                workspace: r,
                namespace: c,
                cluster: o,
                cluster_id: n
            }));
            u = JSON.parse(i.customResource);
            d = module26(u, "spec.mysqlOpts.mysqlConf");
            Object.keys(l).forEach((e)=>{
                l[e] = l[e].toString();
            });
            module74(u, "spec.mysqlOpts.mysqlConf", {
                ...d,
                ...l
            });
            i.customResource = JSON.stringify(u);
            i.version += 1;
            await request.put(e.getUrl({
                workspace: r,
                namespace: c,
                cluster: o,
                cluster_id: n
            }), i);
        };
        e.getParamsFromMongoYaml = function(e) {
            return {
                port: module26(e, "spec.additionalMongodConfig.net.port"),
                oplogSizeMB: module26(e, "spec.additionalMongodConfig.replication.oplogSizeMB"),
                maxIncomingConnections: module26(e, "spec.additionalMongodConfig.net.maxIncomingConnections"),
                cursorTimeoutMillis: module26(e, "spec.additionalMongodConfig.setParameter.cursorTimeoutMillis"),
                profilingMode: module26(e, "spec.additionalMongodConfig.operationProfiling.mode"),
                slowOpThresholdMs: module26(e, "spec.additionalMongodConfig.operationProfiling.slowOpThresholdMs"),
                enableMajorityReadConcern: module26(e, "spec.additionalMongodConfig.replication.enableMajorityReadConcern", true).toString(),
                commandVerbosity: module26(e, "spec.additionalMongodConfig.systemLog.component.command.verbosity", 0).toString(),
                indexVerbosity: module26(e, "spec.additionalMongodConfig.systemLog.component.index.verbosity", 0).toString(),
                queryVerbosity: module26(e, "spec.additionalMongodConfig.systemLog.component.query.verbosity", 0).toString(),
                networkVerbosity: module26(e, "spec.additionalMongodConfig.systemLog.component.network.verbosity", 0).toString(),
                writeVerbosity: module26(e, "spec.additionalMongodConfig.systemLog.component.write.verbosity", 0).toString()
            };
        };
        e.updateMongoParams = async (a)=>{
            let r;
            let n;
            let o;
            let c;
            let l;
            let i;
            let u;
            let d;
            let f;
            let p;
            let m;
            let h;
            let v;
            let g;
            let _;
            let y;
            let E;
            let b;
            let O;
            let R;
            let A;
            r = a.workspace;
            n = a.cluster_id;
            o = a.cluster;
            c = a.namespace;
            l = a.params;
            i = await request.get(e.getUrl({
                workspace: r,
                namespace: c,
                cluster: o,
                cluster_id: n
            }));
            u = JSON.parse(i.customResource);
            d = e.getParamsFromMongoYaml(u);
            f = {
                ...d,
                ...l
            };
            p = f.port;
            m = f.oplogSizeMB;
            h = f.maxIncomingConnections;
            v = f.cursorTimeoutMillis;
            g = f.profilingMode;
            _ = f.slowOpThresholdMs;
            y = f.enableMajorityReadConcern;
            E = f.commandVerbosity;
            b = f.indexVerbosity;
            O = f.queryVerbosity;
            R = f.networkVerbosity;
            A = f.writeVerbosity;
            module74(u, "spec.additionalMongodConfig.net.port", p);
            module74(u, "spec.additionalMongodConfig.replication.oplogSizeMB", m);
            module74(u, "spec.additionalMongodConfig.net.maxIncomingConnections", h);
            module74(u, "spec.additionalMongodConfig.setParameter.cursorTimeoutMillis", v);
            module74(u, "spec.additionalMongodConfig.operationProfiling.mode", g);
            module74(u, "spec.additionalMongodConfig.operationProfiling.slowOpThresholdMs", _);
            module74(u, "spec.additionalMongodConfig.replication.enableMajorityReadConcern", y === "true");
            module74(u, "spec.additionalMongodConfig.systemLog.component.command.verbosity", Number(E));
            module74(u, "spec.additionalMongodConfig.systemLog.component.index.verbosity", Number(b));
            module74(u, "spec.additionalMongodConfig.systemLog.component.query.verbosity", Number(O));
            module74(u, "spec.additionalMongodConfig.systemLog.component.network.verbosity", Number(R));
            module74(u, "spec.additionalMongodConfig.systemLog.component.write.verbosity", Number(A));
            i.customResource = JSON.stringify(u);
            i.version += 1;
            await request.put(e.getUrl({
                workspace: r,
                namespace: c,
                cluster: o,
                cluster_id: n
            }), i);
        };
        e.updateECKParams = async (a)=>{
            let r;
            let n;
            let o;
            let c;
            let l;
            let i;
            let u;
            r = a.workspace;
            n = a.cluster_id;
            o = a.cluster;
            c = a.namespace;
            l = a.params;
            i = await request.get(e.getUrl({
                workspace: r,
                namespace: c,
                cluster: o,
                cluster_id: n
            }));
            u = JSON.parse(i.customResource);
            Object.keys(l).forEach((e)=>{
                if ([
                    "action.destructive_requires_name",
                    "http.cors.enabled"
                ].includes(e)) {
                    l[e] = l[e] === "true";
                }
            });
            module26(u, "spec.nodeSets", []).forEach((e)=>{
                const t = module26(e, "config", {});
                module74(e, "config", {
                    ...t,
                    ...l
                });
            });
            i.customResource = JSON.stringify(u);
            i.version += 1;
            await request.put(e.getUrl({
                workspace: r,
                namespace: c,
                cluster: o,
                cluster_id: n
            }), i);
        };
        e.updateLogStashConfig = async (a, r)=>{
            let n;
            let o;
            let c;
            let l;
            let i;
            let u;
            let d;
            let f;
            let p;
            let m;
            let h;
            let v;
            let g;
            let _;
            let y;
            n = r.namespace;
            o = r.cluster;
            c = r.cluster_id;
            l = {};
            i = /^logstash./;
            module896(a, function(e, t) {
                if (i.test(t)) {
                    const r = t.replace(i, "");
                    l[r] = e;
                    delete a[t];
                }
            });
            if (module1024(l)) {
                u = await e.getLogstashParams({
                    namespace: n,
                    cluster: o,
                    cluster_id: c
                });
                d = u.oldConfig;
                f = u.configMap;
                p = module903({}, d.logstash, l);
                if (m = module26(p, "jvm", 0)) {
                    h = module26(f, "spec.podTemplate.spec.containers[0].resources.limits.memory");
                    v = convertToMebiBytes(h);
                    g = module4798(v * (m / 100));
                    module74(f, "spec.config.jvm", `-Xms${g}m -Xmx${g}m`);
                    delete p.jvm;
                }
                _ = [];
                module896(p, function(e, name) {
                    _.push({
                        name,
                        value: String(e)
                    });
                });
                module74(f, "spec.config.logstashConfig", _);
                y = `apis${globals.app.isMultiCluster && o ? `/clusters/${o}` : ""}/opensearch.opster.io/v1/namespaces/${n}/logstashes/${c}`;
                await request.put(y, f);
            }
        };
        e.updateOpenSearchParams = async (a)=>{
            let r;
            let n;
            let o;
            let c;
            let l;
            let i;
            let u;
            let d;
            r = a.workspace;
            n = a.cluster_id;
            o = a.cluster;
            c = a.namespace;
            l = a.params;
            i = await request.get(e.getUrl({
                workspace: r,
                namespace: c,
                cluster: o,
                cluster_id: n
            }));
            u = JSON.parse(i.customResource);
            Object.keys(l).forEach((e)=>{
                if ([
                    "action.destructive_requires_name",
                    "http.cors.enabled"
                ].includes(e)) {
                    l[e] = l[e] === "true";
                }
            });
            Object.keys(l).forEach((e)=>{
                if ([
                    "thread_pool.write.queue_size",
                    "thread_pool.search.queue_size",
                    "action.destructive_requires_name",
                    "http.cors.enabled"
                ].includes(e)) {
                    l[e] = String(l[e]);
                }
            });
            d = module26(u, "spec.general.additionalConfig", {});
            await e.updateLogStashConfig(l, {
                namespace: c,
                cluster: o,
                cluster_id: n
            });
            module74(u, "spec.general.additionalConfig", {
                ...d,
                ...l
            });
            i.customResource = JSON.stringify(u);
            i.version += 1;
            await request.put(e.getUrl({
                workspace: r,
                namespace: c,
                cluster: o,
                cluster_id: n
            }), i);
        };
        e.updateKafkaParams = (()=>{
            const t = module44(module41.mark(function t(a) {
                let r;
                let o;
                let c;
                let l;
                let i;
                let u;
                let d;
                let f;
                let p;
                let m;
                let h;
                let v;
                let g;
                let _;
                let y;
                let E;
                let O;
                let R;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                r = a.workspace;
                                o = a.cluster_id;
                                c = a.cluster;
                                l = a.namespace;
                                i = a.nodeRole;
                                u = a.params;
                                t.next = 3;
                                return request.get(e.getUrl({
                                    workspace: r,
                                    namespace: l,
                                    cluster: c,
                                    cluster_id: o
                                }));
                            case 3:
                                d = t.sent;
                                f = JSON.parse(d.customResource);
                                p = u.tls;
                                m = u.authentication;
                                h = u.nodePort;
                                v = u.jmxOptions;
                                g = module58(u, [
                                    "tls",
                                    "authentication",
                                    "nodePort",
                                    "jmxOptions"
                                ]);
                                if (!(_ = module26(f, "spec.kafka.listeners[0"))) {
                                    t.next = 25;
                                    break;
                                }
                                y = module26(_, "authentication.type");
                                E = m || y;
                                if (!p) {
                                    t.next = 14;
                                    break;
                                }
                                if (p !== "false" || E !== "tls") {
                                    t.next = 13;
                                    break;
                                }
                                throw new Error("KAFKA_EDIT_PARAMS_ERROR");
                            case 13:
                                module74(_, "tls", p === "true");
                            case 14:
                                if (!m) {
                                    t.next = 24;
                                    break;
                                }
                                if (m !== "no") {
                                    t.next = 20;
                                    break;
                                }
                                delete _.authentication;
                                delete f.spec.kafka.authorization;
                                t.next = 24;
                                break;
                            case 20:
                                if (m !== "tls" || _.tls) {
                                    t.next = 22;
                                    break;
                                }
                                throw new Error("KAFKA_EDIT_PARAMS_ERROR");
                            case 22:
                                module74(f, "spec.kafka.authorization", module26(kafkaYaml.resources, "spec.kafka.authorization"));
                                module74(_, "authentication.type", m);
                            case 24:
                                if (h) {
                                    module74(_, "type", h === "true" ? "nodeport" : "internal");
                                }
                            case 25:
                                Object.keys(g).forEach((e)=>{
                                    if (e === "log.cleaner.enable") {
                                        g[e] = g[e] === "true";
                                    }
                                });
                                if (i === "kafka") {
                                    O = module26(f, "spec.kafka.config", {});
                                    module74(f, "spec.kafka.config", {
                                        ...O,
                                        ...g
                                    });
                                    switch(v){
                                        case "password":
                                            module74(f, "spec.kafka.jmxOptions.authentication.type", "password");
                                            break;
                                        case "enable":
                                            module74(f, "spec.kafka.jmxOptions", {});
                                            break;
                                        default:
                                            module242(f, "spec.kafka.jmxOptions");
                                    }
                                } else {
                                    R = module26(f, "spec.zookeeper.config", {});
                                    module74(f, "spec.zookeeper.config", {
                                        ...R,
                                        ...g
                                    });
                                    switch(v){
                                        case "password":
                                            module74(f, "spec.zookeeper.jmxOptions.authentication.type", "password");
                                            break;
                                        case "enable":
                                            module74(f, "spec.zookeeper.jmxOptions", {});
                                            break;
                                        default:
                                            module242(f, "spec.zookeeper.jmxOptions");
                                    }
                                }
                                d.customResource = JSON.stringify(f);
                                d.version += 1;
                                t.next = 31;
                                return request.put(e.getUrl({
                                    workspace: r,
                                    namespace: l,
                                    cluster: c,
                                    cluster_id: o
                                }), d);
                            case 31:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
        return e;
    }
    module37(g, [
        {
            key: "getParamsFromYamlJSON",
            value: (c = module44(module41.mark(function e(t, a) {
                let r;
                let n;
                let replicasCount;
                let httpPort;
                let tcpPort;
                let max_server_memory_usage;
                let max_memory_usage;
                let f;
                let p;
                let pgVersion;
                let h;
                let v;
                let endpointType;
                let _;
                let y;
                let E;
                let S;
                let tls;
                let authentication;
                let nodePort;
                let k;
                let jmxOptions;
                let C;
                let P;
                let I;
                let w;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                this.app_id = getAppIdByKind(t.kind);
                                e.t0 = this.app_id;
                                e.next = e.t0 === RadonDBAppId.ClickHouse ? 4 : e.t0 === RadonDBAppId.PostgreSQL ? 11 : e.t0 === RadonDBAppId.MySQL ? 16 : e.t0 === RadonDBAppId.MongoDB ? 17 : e.t0 === RadonDBAppId.RedisCluster || e.t0 === RadonDBAppId.RedisSentinel ? 18 : e.t0 === RadonDBAppId.Elasticsearch ? 26 : e.t0 === RadonDBAppId.Kafka ? 28 : e.t0 === RadonDBAppId.OpenSearch ? 38 : 45;
                                break;
                            case 4:
                                r = module26(t, "spec.templates.serviceTemplates[0].spec.ports");
                                n = module26(t, "spec.configuration.clusters[0].layout");
                                replicasCount = n.replicasCount;
                                httpPort = r.find((e)=>e.name === "http");
                                tcpPort = r.find((e)=>e.name === "tcp");
                                max_server_memory_usage = module26(t, "spec.configuration.settings.max_server_memory_usage", 1800000000);
                                max_memory_usage = module26(t, 'spec.configuration.profiles["default/max_memory_usage"]', 200000000);
                                return e.abrupt("return", getCKParams({
                                    replicasCount,
                                    httpPort,
                                    tcpPort,
                                    max_server_memory_usage,
                                    max_memory_usage
                                }));
                            case 11:
                                f = module26(t, "spec.postgresql.configs", []);
                                p = module26(t, "spec.autofailover.podspec.containers[0].image", "");
                                pgVersion = module26(Object.entries(PGImage).find((e)=>{
                                    const t = module96(e, 2)[1];
                                    return p.startsWith(t);
                                }), "[0]");
                                h = this.getPGParamsByConfig(f);
                                return e.abrupt("return", getPGParams({
                                    ...h,
                                    pgVersion
                                }));
                            case 16:
                                return e.abrupt("return", getMySQLParams(module26(t, "spec.mysqlOpts.mysqlConf")));
                            case 17:
                                return e.abrupt("return", getMongoDBParams(this.getParamsFromMongoYaml(t)));
                            case 18:
                                e.next = 20;
                                return this.getRedisParams(a);
                            case 20:
                                v = e.sent;
                                if (module26(t, "spec.kubernetesConfig.redisVersion") !== "7.0.4") {
                                    e.next = 25;
                                    break;
                                }
                                endpointType = module26(t, "spec.kubernetesConfig.endpointType") === "hostname";
                                return e.abrupt("return", getRedisParams({
                                    ...v,
                                    endpointType
                                }));
                            case 25:
                                return e.abrupt("return", getRedisParams(v).slice(1, -1));
                            case 26:
                                _ = module26(t, "spec.nodeSets[0].config", {});
                                return e.abrupt("return", getECKParams(_));
                            case 28:
                                y = a.nodeRole;
                                E = module26(t, `spec.${y}.config`, {});
                                S = module26(t, "spec.kafka.listeners[0]", {});
                                tls = S.tls;
                                authentication = S.authentication ? S.authentication.type : "no";
                                nodePort = S.type === "nodeport";
                                k = module26(t, `spec.${y}.jmxOptions`);
                                jmxOptions = module26(k, "authentication.type") === "password" ? "password" : module159(k) ? "disable" : "enable";
                                return e.abrupt("return", getKafkaParams({
                                    ...E,
                                    tls,
                                    authentication,
                                    nodePort,
                                    jmxOptions
                                }, y));
                            case 38:
                                C = module26(t, "spec.general.additionalConfig", {});
                                e.next = 41;
                                return this.getLogstashParams(a);
                            case 41:
                                P = e.sent;
                                I = P.oldConfig;
                                w = module903({}, I, C);
                                return e.abrupt("return", getOpenSearchParams(w));
                            case 45:
                                return e.abrupt("return", []);
                            case 46:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e, t) {
                return c.apply(this, arguments);
            })
        },
        {
            key: "getPGParamsByConfig",
            value: function(e = []) {
                return e.reduce((acc, t = "")=>{
                    const a = t.trim().split("=");
                    const r = module96(a, 2);
                    const n = r[0];
                    const c = r[1];
                    if (n) {
                        const s = Number(c);
                        acc[n] = Number.isNaN(s) ? c : s;
                    }
                    return acc;
                }, {});
            }
        },
        {
            key: "getRedisParams",
            value: async function(t) {
                let a;
                let r;
                let n;
                let o;
                let c;
                let l;
                a = t.namespace;
                r = t.cluster;
                n = t.cluster_id;
                o = `api${globals.app.isMultiCluster && r ? `/clusters/${r}` : ""}/v1/namespaces/${a}/configmaps/${n}-external-config`;
                c = await request.get(o);
                l = module26(c, 'data["redis-external.conf"]', "");
                return this.configMapToObject(l);
            }
        },
        {
            key: "getLogstashParams",
            value: async (t)=>{
                let a;
                let r;
                let n;
                let o;
                let configMap;
                let l;
                let i;
                let u;
                let d;
                let f;
                let p;
                let logstash;
                let oldConfig;
                a = t.namespace;
                r = t.cluster;
                n = t.cluster_id;
                o = `apis${globals.app.isMultiCluster && r ? `/clusters/${r}` : ""}/opensearch.opster.io/v1/namespaces/${a}/logstashes/${n}`;
                configMap = await request.get(o);
                l = module26(configMap, "spec.config", {});
                i = module26(l, "logstashConfig", []);
                u = module26(l, "jvm", "");
                d = module26(configMap, "spec.podTemplate.spec.containers[0].resources.limits.memory");
                f = convertToMebiBytes(d);
                p = convertJVMToMemoryMebiBytes(u);
                logstash = {};
                module896(i, function(e) {
                    const t = module26(e, "name", "");
                    const a = module26(e, "value", "");
                    logstash[t] = a;
                });
                module74(logstash, "jvm", module4799(p / f * 100) || 50);
                oldConfig = module903({}, {
                    logstash
                });
                return {
                    oldConfig,
                    configMap
                };
            }
        },
        {
            key: "configMapToObject",
            value: function(e) {
                const t = {};
                e.split("\n").forEach((e)=>{
                    const a = e.toString().trim().split(" ");
                    const r = module96(a, 2);
                    const n = r[0];
                    const c = r[1];
                    if (n) {
                        t[n] = c;
                    }
                });
                return t;
            }
        },
        {
            key: "updateRedisParam",
            value: (t = module44(module41.mark(function e(t) {
                let a;
                let r;
                let n;
                let o;
                let c;
                let l;
                let i;
                let u;
                let d;
                let f;
                let p;
                let m;
                let h;
                let v;
                let g;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = t.workspace;
                                r = t.cluster_id;
                                n = t.cluster;
                                o = t.namespace;
                                c = t.params;
                                l = `api${globals.app.isMultiCluster && n ? `/clusters/${n}` : ""}/v1/namespaces/${o}/configmaps/${r}-external-config`;
                                e.next = 4;
                                return request.get(l);
                            case 4:
                                i = e.sent;
                                u = module26(i, 'data["redis-external.conf"]', "");
                                d = this.configMapToObject(u);
                                if (typeof (f = c.maxmemory) === "number") {
                                    c.maxmemory = `${f}MB`;
                                }
                                if (typeof (p = c["repl-backlog-size"]) === "number") {
                                    c["repl-backlog-size"] = `${p}mb`;
                                }
                                if (!c.endpointType) {
                                    e.next = 27;
                                    break;
                                }
                                e.next = 14;
                                return request.get(this.getUrl({
                                    workspace: a,
                                    namespace: o,
                                    cluster: n,
                                    cluster_id: r
                                }));
                            case 14:
                                m = e.sent;
                                h = JSON.parse(m.customResource);
                                if (c.endpointType !== "true") {
                                    e.next = 22;
                                    break;
                                }
                                if (!(module26(h, "spec.redisProxy.replicas") > 0)) {
                                    e.next = 19;
                                    break;
                                }
                                throw new Error("ENDPOINT_TYPE_ERROR");
                            case 19:
                                module74(h, "spec.kubernetesConfig.endpointType", "hostname");
                                e.next = 23;
                                break;
                            case 22:
                                module74(h, "spec.kubernetesConfig", module189(module26(h, "spec.kubernetesConfig"), "endpointType"));
                            case 23:
                                m.customResource = JSON.stringify(h);
                                m.version += 1;
                                e.next = 27;
                                return request.put(this.getUrl({
                                    workspace: a,
                                    namespace: o,
                                    cluster: n,
                                    cluster_id: r
                                }), m);
                            case 27:
                                v = {
                                    ...d,
                                    ...module189(c, "endpointType")
                                };
                                g = Object.entries(v).map((e)=>e.join(" ")).join("\n");
                                module74(i, 'data["redis-external.conf"]', g);
                                e.next = 32;
                                return request.put(l, i);
                            case 32:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return t.apply(this, arguments);
            })
        }
    ]);
    return g;
})(module458);
i = module49(l.prototype, "fetchList", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            let r;
            let n;
            let o;
            let c;
            let keyword;
            let nodeRole;
            let u;
            let d;
            let f;
            let filters;
            r = a.workspace;
            n = a.namespace;
            o = a.cluster;
            c = a.cluster_id;
            keyword = a.keyword;
            nodeRole = a.nodeRole;
            _this.list.isLoading = true;
            u = await request.get(_this.getUrl({
                workspace: r,
                namespace: n,
                cluster: o,
                cluster_id: c
            }));
            d = JSON.parse(u.customResource);
            f = await _this.getParamsFromYamlJSON(d, {
                workspace: r,
                namespace: n,
                cluster: o,
                cluster_id: c,
                nodeRole
            });
            filters = {};
            if (keyword) {
                f = f.filter((e)=>e.name.includes(keyword));
                filters = {
                    keyword
                };
            }
            Object.assign(_this.list, {
                data: f,
                total: f.length,
                filters,
                isLoading: false,
                selectedRowKeys: []
            });
        };
    }
});
u = module49(l.prototype, "updateParams", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return (()=>{
            const t = module44(module41.mark(function t(a) {
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                t.t0 = _this.app_id || a.app_id;
                                t.next = t.t0 === RadonDBAppId.ClickHouse ? 3 : t.t0 === RadonDBAppId.PostgreSQL ? 6 : t.t0 === RadonDBAppId.MySQL ? 9 : t.t0 === RadonDBAppId.MongoDB ? 12 : t.t0 === RadonDBAppId.RedisCluster || t.t0 === RadonDBAppId.RedisSentinel ? 15 : t.t0 === RadonDBAppId.Elasticsearch ? 18 : t.t0 === RadonDBAppId.Kafka ? 21 : t.t0 === RadonDBAppId.OpenSearch ? 24 : 27;
                                break;
                            case 3:
                                t.next = 5;
                                return _this.updateCKParams(a);
                            case 5:
                            case 8:
                            case 11:
                            case 14:
                            case 17:
                            case 20:
                            case 23:
                            case 26:
                            case 27:
                                return t.abrupt("break", 28);
                            case 6:
                                t.next = 8;
                                return _this.updatePGParams(a);
                            case 9:
                                t.next = 11;
                                return _this.updateMySQLParams(a);
                            case 12:
                                t.next = 14;
                                return _this.updateMongoParams(a);
                            case 15:
                                t.next = 17;
                                return _this.updateRedisParam(a);
                            case 18:
                                t.next = 20;
                                return _this.updateECKParams(a);
                            case 21:
                                t.next = 23;
                                return _this.updateKafkaParams(a);
                            case 24:
                                t.next = 26;
                                return _this.updateOpenSearchParams(a);
                            case 28:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
    }
});
export default l;
