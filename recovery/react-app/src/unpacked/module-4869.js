import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-197.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-30.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-192.js";
import "unpacked/module-16.js";
import "unpacked/module-138.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-110.js";
import "unpacked/module-85.js";
import "unpacked/module-38.js";
import "unpacked/module-64.js";
import "unpacked/module-137.js";
import "unpacked/module-813.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-860.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-1431.js";
import "unpacked/module-1432.js";
import "unpacked/module-1433.js";
import "unpacked/module-1434.js";
import module58 from "unpacked/module-58.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module61 from "unpacked/module-61.js";
import "unpacked/module-31.js";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module14 from "unpacked/module-14.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module457 from "unpacked/module-457.js";
import module74 from "unpacked/module-74.js";
import module242 from "unpacked/module-242.js";
import module68 from "stores/base";
import { safeAtob, safeBtoa } from "utils/base64";
import { getLocalTime } from "utils/index";
import { RadonDBAppId, getAppIdByKind } from "unpacked/module-817.js";
import { getManifestApi } from "unpacked/module-1016.js";
import { kafkaYaml } from "unpacked/module-1093.js";
let c;
let s;
let l;
let i;
let u;
let d;
let f;
function U(e) {
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
const B = '{"apiVersion":"mysql.radondb.com/v1alpha1","kind":"MysqlUser","metadata":{"name":"user-sample","labels":{}},"spec":{"user":"sample_user","hosts":["%"],"permissions":[{"database":"*","tables":["*"],"privileges":["SELECT"]}],"clusterBinder":{"clusterName":"sample","nameSpace":"default"},"secretBinder":{"secretName":"sample-user-password","secretKey":"pwdForSample"}}}';
const Y = [
    "ALTER",
    "ALTER ROUTINE",
    "CREATE",
    "CREATE ROUTINE",
    "CREATE TEMPORARY TABLES",
    "CREATE VIEW",
    "DELETE",
    "DROP",
    "EXECUTE",
    "EVENT",
    "INDEX",
    "INSERT",
    "LOCK TABLES",
    "SELECT",
    "SHOW VIEW",
    "UPDATE",
    "TRIGGER",
    "REFERENCES"
];
const F = [
    "ALTER",
    "ALTER ROUTINE",
    "CREATE",
    "CREATE ROUTINE",
    "CREATE TEMPORARY TABLES",
    "CREATE VIEW",
    "DELETE",
    "DROP",
    "EXECUTE",
    "EVENT",
    "INDEX",
    "INSERT",
    "LOCK TABLES",
    "PROCESS",
    "RELOAD",
    "SELECT",
    "SHOW DATABASES",
    "SHOW VIEW",
    "UPDATE",
    "TRIGGER",
    "REFERENCES"
];
c = ((e)=>{
    module55(P, e);
    let a;
    let O;
    var R = U(P);
    function P(...a_1) {
        let e;
        module36(this, P);
        e = R.call(this, ...a_1);
        e.resourceName = "db_user";
        e.app_id = "";
        e.allUsers = [];
        e.getUrl = function(e) {
            return getManifestApi(e);
        };
        module65(e, "fetchList", s, module88(e));
        module65(e, "checkUserName", l, module88(e));
        module65(e, "add", i, module88(e));
        module65(e, "edit", u, module88(e));
        module65(e, "delete", d, module88(e));
        module65(e, "batchDelete", f, module88(e));
        e.getPGUsersFromYaml = function(e) {
            const t = module26(e, "spec.postgresql.users.admin", []).map((e)=>({
                    ...e,
                    permission: "Advanced"
                }));
            const a = module26(e, "spec.postgresql.users.normal", []).map((e)=>({
                    ...e,
                    permission: "General"
                }));
            return [].concat(module61(t), module61(a));
        };
        e.getMySQLSecretCrd = async (a)=>{
            let r;
            let n;
            let c;
            let s;
            r = a.cluster;
            n = a.namespace;
            c = a.cluster_id;
            s = await request.get(e.getMySQLSecretUrl(r, n, c));
            return s;
        };
        e.addMySQLSecret = async (a)=>{
            let r;
            let n;
            let c;
            let s;
            let l;
            r = a.cluster;
            n = a.namespace;
            c = a.yamlJSON;
            s = a.user;
            l = a.cluster_id;
            module74(c, `data.${s.name}`, safeBtoa(s.password));
            await request.put(e.getMySQLSecretUrl(r, n, l), c);
        };
        e.deleteMySQLSecret = async (a)=>{
            let r;
            let n;
            let c;
            let s;
            let l;
            r = a.cluster;
            n = a.namespace;
            c = a.secretKeys;
            s = a.cluster_id;
            l = await e.getMySQLSecretCrd({
                cluster: r,
                namespace: n,
                cluster_id: s
            });
            c.forEach((e)=>{
                delete l.data[e];
            });
            await request.put(e.getMySQLSecretUrl(r, n, s), l);
        };
        e.getMySQLUserList = async (a)=>{
            let r;
            let n;
            let c;
            let s;
            let l;
            r = a.cluster;
            n = a.namespace;
            c = a.cluster_id;
            s = await request.get(`${e.getMysqlUsersUrl(r, n)}?labelSelector=cluster_id=${c}`);
            l = await e.getMySQLSecretCrd({
                cluster: r,
                namespace: n,
                cluster_id: c
            });
            return s.items.filter((e)=>module26(e, "status.conditions[0].status") !== "False").map((e)=>({
                    name: module26(e, "spec.user"),
                    host: module26(e, "spec.hosts").join(","),
                    database: module26(e, "spec.permissions[0].database"),
                    permission: module26(e, "spec.permissions[0].privileges", []).length === F.length ? "Advanced" : "General",
                    password: safeAtob(l.data[module26(e, "spec.user")])
                }));
        };
        e.addMySQLUser = (()=>{
            const t = module44(module41.mark(function t(a, yamlJSON) {
                let n;
                let c;
                let s;
                let l;
                let secretKey;
                let u;
                let d;
                let f;
                let m;
                let h;
                let v;
                let g;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                n = a.cluster;
                                c = a.cluster_id;
                                s = a.namespace;
                                l = a.user;
                                secretKey = l.name;
                                u = l.permission;
                                d = l.host;
                                f = l.database;
                                m = `${c}---${e.userNameToMetadataName(secretKey)}`;
                                h = `${e.getMysqlUsersUrl(n, s)}/${m}`;
                                v = JSON.parse(B);
                                module74(v, "metadata.name", m);
                                module74(v, "metadata.labels", {
                                    cluster_id: c
                                });
                                module74(v, "spec.user", secretKey);
                                module74(v, "spec.hosts", d.split(","));
                                module74(v, "spec.permissions[0].database", f);
                                module74(v, "spec.permissions[0].privileges", u === "Advanced" ? F : Y);
                                module74(v, "spec.withGrantOption", u === "Advanced");
                                module74(v, "spec.userOwner", {
                                    clusterName: c,
                                    nameSpace: s
                                });
                                module74(v, "spec.secretSelector", {
                                    secretName: e.getMySQLSecretName(c),
                                    secretKey
                                });
                                if (yamlJSON) {
                                    t.next = 18;
                                    break;
                                }
                                t.next = 17;
                                return e.getMySQLSecretCrd({
                                    cluster: n,
                                    namespace: s,
                                    cluster_id: c
                                });
                            case 17:
                                yamlJSON = t.sent;
                            case 18:
                                t.next = 20;
                                return request.post(h, v);
                            case 20:
                                t.next = 22;
                                return e.addMySQLSecret({
                                    cluster: n,
                                    cluster_id: c,
                                    namespace: s,
                                    user: l,
                                    yamlJSON
                                });
                            case 22:
                                g = 0;
                                t.next = 25;
                                return new Promise((resolve, reject)=>{
                                    var r = setInterval(module44(module41.mark(function* i() {
                                        let u;
                                        let d;
                                        u = yield request.get(h);
                                        d = module26(u, "status.conditions[0].status");
                                        g++;
                                        if (d === "False" || g > 50) {
                                            clearInterval(r);
                                            yield e.deleteMySQLUser({
                                                cluster: n,
                                                namespace: s,
                                                cluster_id: c,
                                                users: [
                                                    l
                                                ]
                                            });
                                            reject({
                                                message: "Create Failed"
                                            });
                                        } else {
                                            if (d === "True") {
                                                clearInterval(r);
                                                resolve();
                                            }
                                        }
                                    })), 200);
                                });
                            case 25:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e, a) {
                return t.apply(this, arguments);
            };
        })();
        e.deleteMySQLUser = async (a)=>{
            let r;
            let n;
            let c;
            let s;
            let l;
            let secretKeys;
            r = a.cluster;
            n = a.namespace;
            c = a.cluster_id;
            s = a.users;
            l = [];
            secretKeys = [];
            s.forEach((t)=>{
                l.push(request.delete(`${e.getMysqlUsersUrl(r, n)}/${c}---${e.userNameToMetadataName(t.name)}`));
                secretKeys.push(t.name);
            });
            await Promise.all(l);
            await e.deleteMySQLSecret({
                cluster: r,
                namespace: n,
                cluster_id: c,
                secretKeys
            });
        };
        e.editMySQLUser = async (a)=>{
            let r;
            let n;
            let c;
            let s;
            let l;
            r = a.cluster;
            n = a.cluster_id;
            c = a.namespace;
            s = a.user;
            l = a.oldUser;
            await e.deleteMySQLUser({
                cluster: r,
                cluster_id: n,
                namespace: c,
                users: [
                    l
                ]
            });
            await e.addMySQLUser({
                cluster: r,
                cluster_id: n,
                namespace: c,
                user: s
            });
        };
        e.getRedisUserList = async (a)=>{
            let r;
            let n;
            r = await request.get(e.getRedisUsersUrl(a));
            n = module26(r, 'data["aclfile.conf"]', "");
            return e.getUsersFromRedisText(n);
        };
        return e;
    }
    module37(P, [
        {
            key: "updateList",
            value: (O = module44(module41.mark(function e(t) {
                let a;
                let r;
                let page;
                let limit;
                let keyword;
                let namespace;
                let d;
                let f;
                const p = arguments;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = p.length > 1 && p[1] !== undefined ? p[1] : {};
                                r = JSON.parse(t.customResource);
                                ({ page = 1, limit = 10, keyword, namespace } = a);
                                this.app_id = getAppIdByKind(r.kind);
                                d = [];
                                e.t0 = this.app_id;
                                e.next = e.t0 === RadonDBAppId.ClickHouse ? 8 : e.t0 === RadonDBAppId.PostgreSQL ? 11 : e.t0 === RadonDBAppId.MySQL ? 13 : e.t0 === RadonDBAppId.RedisCluster || e.t0 === RadonDBAppId.RedisSentinel ? 17 : e.t0 === RadonDBAppId.Kafka ? 21 : 25;
                                break;
                            case 8:
                                f = module26(r, "spec.configuration.users", {});
                                d = Object.keys(f).filter((e)=>e.endsWith("/password")).map((e)=>{
                                    const t = e.replace("/password", "");
                                    return {
                                        name: t,
                                        password: f[e],
                                        ip: module26(f, `${t}/networks/ip.[0]`),
                                        network: module26(f, `${t}/networks/ip.[1]`),
                                        namespace
                                    };
                                });
                                return e.abrupt("break", 26);
                            case 11:
                                d = this.getPGUsersFromYaml(r);
                                return e.abrupt("break", 26);
                            case 13:
                                e.next = 15;
                                return this.getMySQLUserList(a);
                            case 15:
                                d = e.sent;
                                return e.abrupt("break", 26);
                            case 17:
                                e.next = 19;
                                return this.getRedisUserList(a);
                            case 19:
                                d = e.sent;
                                return e.abrupt("break", 26);
                            case 21:
                                e.next = 23;
                                return this.getKafkaUserList(a);
                            case 23:
                                d = e.sent;
                                return e.abrupt("break", 26);
                            case 25:
                                return e.abrupt("break", 26);
                            case 26:
                                this.allUsers = d.slice();
                                if (keyword) {
                                    d = d.filter((e)=>e.name.includes(keyword));
                                }
                                Object.assign(this.list, {
                                    data: d.slice((page - 1) * limit, page * limit),
                                    total: d.length,
                                    isLoading: false,
                                    limit,
                                    page,
                                    filters: keyword ? {
                                        keyword
                                    } : {},
                                    selectedRowKeys: []
                                });
                            case 29:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return O.apply(this, arguments);
            })
        },
        {
            key: "addUserToYamlJSON",
            value: function({ name, password, network = "::/0", ip = "127.0.0.1", permission }, t, a) {
                switch(a){
                    case RadonDBAppId.ClickHouse:
                        const u = module26(t, "spec.configuration.users", {});
                        u[`${name}/networks/ip`] = [
                            ip,
                            network
                        ];
                        u[`${name}/password`] = password;
                        u[`${name}/profile`] = "default";
                        u[`${name}/quotas`] = "default";
                        return t;
                    case RadonDBAppId.PostgreSQL:
                        const d = {
                            name,
                            password
                        };
                        const f = module26(t, "spec.postgresql.users", {
                            admin: [],
                            normal: []
                        });
                        if (permission === "Advanced") {
                            f.admin.push(d);
                        } else {
                            f.normal.push(d);
                        }
                        module74(t, "spec.postgresql.users", f);
                        return t;
                    default:
                        return t;
                }
            }
        },
        {
            key: "deleteUserFromYamlJSON",
            value: function(e, t, a) {
                const e_name = e.name;
                switch(a){
                    case RadonDBAppId.ClickHouse:
                        const n = module26(t, "spec.configuration.users", {});
                        var o = [
                            "/networks/ip",
                            "/password",
                            "/profile",
                            "/quotas"
                        ];
                        const c = module457(n, function(e, t) {
                            return o.map((e)=>e_name + e).includes(t);
                        });
                        module74(t, "spec.configuration.users", c);
                        return t;
                    case RadonDBAppId.PostgreSQL:
                        let s = [];
                        const l = (s = e.permission === "Advanced" ? module26(t, "spec.postgresql.users.admin", []) : module26(t, "spec.postgresql.users.normal", [])).findIndex((t)=>t.name === e.name);
                        if (l > -1) {
                            s.splice(l, 1);
                        }
                        return t;
                    default:
                        return t;
                }
            }
        },
        {
            key: "getSecretUrl",
            value: function(e, t, a) {
                return `/api${globals.app.isMultiCluster && e ? `/clusters/${e}` : ""}/v1/namespaces/${t}/secrets/${a}`;
            }
        },
        {
            key: "getMySQLSecretName",
            value: function(e) {
                return `${e}-userpassword-secret`;
            }
        },
        {
            key: "getMysqlUsersUrl",
            value: function(e, t) {
                return `/apis${globals.app.isMultiCluster && e ? `/clusters/${e}` : ""}/mysql.radondb.com/v1alpha1/namespaces/${t}/mysqlusers`;
            }
        },
        {
            key: "getMySQLSecretUrl",
            value: function(e, t, a) {
                return this.getSecretUrl(e, t, this.getMySQLSecretName(a));
            }
        },
        {
            key: "userNameToMetadataName",
            value: function(e) {
                return e.toLowerCase().replace(/_/g, "-0-z");
            }
        },
        {
            key: "getRedisUsersUrl",
            value: function({ cluster, namespace, cluster_id }) {
                return `/api${globals.app.isMultiCluster && cluster ? `/clusters/${cluster}` : ""}/v1/namespaces/${namespace}/configmaps/${cluster_id}-acl-config`;
            }
        },
        {
            key: "getUsersFromRedisText",
            value: function(e) {
                if (e) {
                    return e.split("\n").map((e)=>{
                        const t = e.trim().split(" ");
                        return {
                            name: module26(t, "[1]"),
                            password: module26(t, "[3]", "").substring(1),
                            permission: t.slice(4).join(" ")
                        };
                    });
                }
                return [];
            }
        },
        {
            key: "createRedisUserText",
            value: function({ name, password, permission = "~* &* +@all" }) {
                return `user ${name} on >${password} ${permission}`;
            }
        },
        {
            key: "addRedisUser",
            value: async function(t) {
                let a;
                let r;
                let c;
                let s;
                let l;
                ({ user: a, ...r } = t);
                c = await request.get(this.getRedisUsersUrl(r));
                s = module26(c, 'data["aclfile.conf"]', "");
                if (!this.getUsersFromRedisText(s).find((e)=>e.name === a.name)) {
                    l = this.createRedisUserText(a);
                    module74(c, 'data["aclfile.conf"]', s ? `${l}
${s}` : l);
                }
                await request.put(this.getRedisUsersUrl(r), c);
            }
        },
        {
            key: "deleteRedisUsers",
            value: async function(t) {
                let a;
                let r;
                let c;
                let s;
                const _this = this;
                ({ users: a, ...r } = t);
                c = await request.get(this.getRedisUsersUrl(r));
                s = module26(c, 'data["aclfile.conf"]', "");
                a.forEach((e)=>{
                    const t = _this.getUsersFromRedisText(s);
                    const a = s.split("\n");
                    const r = t.findIndex((t)=>t.name === e.name);
                    if (s && r > -1) {
                        a.splice(r, 1);
                        s = a.join("\n");
                    }
                });
                module74(c, 'data["aclfile.conf"]', s);
                await request.put(this.getRedisUsersUrl(r), c);
            }
        },
        {
            key: "editRedisUser",
            value: async function(t) {
                let a;
                let r;
                let c;
                let s;
                let l;
                let i;
                let u;
                let d;
                t.oldUser;
                a = t.user;
                r = module58(t, [
                    "oldUser",
                    "user"
                ]);
                c = await request.get(this.getRedisUsersUrl(r));
                s = module26(c, 'data["aclfile.conf"]', "");
                l = this.getUsersFromRedisText(s);
                i = l.findIndex((e)=>e.name === a.name);
                if (s && i > -1) {
                    (u = s.split("\n")).splice(i, 1);
                    d = this.createRedisUserText(a);
                    u.unshift(d);
                    module74(c, 'data["aclfile.conf"]', u.join("\n"));
                    await request.put(this.getRedisUsersUrl(r), c);
                }
            }
        },
        {
            key: "getKafkaUserUrl",
            value: function({ cluster, namespace, name, cluster_id }) {
                return `/apis${globals.app.isMultiCluster && cluster ? `/clusters/${cluster}` : ""}/kafka.strimzi.io/v1beta2/namespaces/${namespace}/kafkausers${name ? `/${name}` : cluster_id ? `?labelSelector=strimzi.io/cluster=${cluster_id}` : ""}`;
            }
        },
        {
            key: "getKafkaUserList",
            value: async function(t) {
                let a;
                let r;
                const _this = this;
                a = await request.get(this.getKafkaUserUrl(t));
                r = await Promise.all(a.items.map((e)=>request.get(_this.getSecretUrl(t.cluster, t.namespace, e.metadata.name))));
                return a.items.map((e, t)=>{
                    const a = window.atob || safeAtob;
                    const n = a(module26(r, `[${t}]data["user.p12"]`, ""));
                    const o = n ? module26(r, `[${t}]data["user.password"]`, "") : module26(r, `[${t}]data.password`, "");
                    return {
                        name: e.metadata.name,
                        password: a(o),
                        authentication: e.spec.authentication.type,
                        authorization: e.spec.authorization.type,
                        permissionRules: e.spec.authorization.acls,
                        kafkaUserConfig: module26(e, "spec.quotas", {}),
                        cert: n ? {
                            value: n,
                            validDate: getLocalTime(e.metadata.creationTimestamp).add(3650, "d").format("YYYY.MM.DD")
                        } : null
                    };
                });
            }
        },
        {
            key: "addKafkaUser",
            value: async function(t) {
                let a;
                let r;
                let c;
                ({ user: a, ...r } = t);
                c = JSON.parse(JSON.stringify(kafkaYaml.user));
                module74(c, "metadata.name", a.name);
                module74(c, 'metadata.labels["strimzi.io/cluster"]', r.cluster_id);
                module74(c, "spec.authentication", {
                    type: a.authentication
                });
                module74(c, "spec.authorization", {
                    type: a.authorization,
                    acls: a.permissionRules.map((e)=>({
                            ...e,
                            host: "*"
                        }))
                });
                if (module63(a.kafkaUserConfig)) {
                    module242(c, "spec.quotas");
                } else {
                    module74(c, "spec.quotas", a.kafkaUserConfig);
                }
                delete r.cluster_id;
                await request.post(this.getKafkaUserUrl(r), c);
            }
        },
        {
            key: "editKafkaUser",
            value: (a = module44(module41.mark(function e(t) {
                let a;
                let r;
                let c;
                let s;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = t.user;
                                r = t.oldUser;
                                c = module58(t, [
                                    "user",
                                    "oldUser"
                                ]);
                                if (a.name === r.name) {
                                    e.next = 7;
                                    break;
                                }
                                e.next = 4;
                                return this.deleteKafkaUsers({
                                    users: [
                                        r
                                    ],
                                    ...c
                                });
                            case 4:
                                e.next = 6;
                                return this.addKafkaUser({
                                    user: a,
                                    ...c
                                });
                            case 6:
                                return e.abrupt("return");
                            case 7:
                                e.next = 9;
                                return request.get(this.getKafkaUserUrl({
                                    name: a.name,
                                    ...c
                                }));
                            case 9:
                                s = e.sent;
                                module74(s, "spec.authentication", {
                                    type: a.authentication
                                });
                                module74(s, "spec.authorization", {
                                    type: a.authorization,
                                    acls: a.permissionRules.map((e)=>({
                                            ...e,
                                            host: "*"
                                        }))
                                });
                                if (module63(a.kafkaUserConfig)) {
                                    module242(s, "spec.quotas");
                                } else {
                                    module74(s, "spec.quotas", a.kafkaUserConfig);
                                }
                                e.next = 15;
                                return request.put(this.getKafkaUserUrl({
                                    name: a.name,
                                    ...c
                                }), s);
                            case 15:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return a.apply(this, arguments);
            })
        },
        {
            key: "deleteKafkaUsers",
            value: async function(t) {
                let a;
                let r;
                const _this = this;
                ({ users: a, ...r } = t);
                return await Promise.all(a.map((e)=>request.delete(_this.getKafkaUserUrl({
                        ...r,
                        name: e.name
                    }))));
            }
        }
    ]);
    return P;
})(module68);
s = module49(c.prototype, "fetchList", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            let r;
            _this.list.isLoading = true;
            r = await request.get(_this.getUrl(a));
            await _this.updateList(r, a);
        };
    }
});
l = module49(c.prototype, "checkUserName", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t, a) {
            return t === a || !_this.allUsers.find((e)=>e.name === t);
        };
    }
});
i = module49(c.prototype, "add", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return (()=>{
            const t = module44(module41.mark(function t(a) {
                let r;
                let n;
                let c;
                let s;
                let l;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                t.next = 2;
                                return request.get(_this.getUrl(a));
                            case 2:
                                r = t.sent;
                                n = JSON.parse(r.customResource);
                                t.t0 = a.app_id;
                                t.next = t.t0 === RadonDBAppId.MySQL ? 7 : t.t0 === RadonDBAppId.RedisCluster || t.t0 === RadonDBAppId.RedisSentinel ? 17 : t.t0 === RadonDBAppId.Kafka ? 22 : 36;
                                break;
                            case 7:
                                c = a.user.name;
                                t.next = 10;
                                return _this.getMySQLSecretCrd(a);
                            case 10:
                                if ((s = t.sent).data && s.data[c]) {
                                    t.next = 16;
                                    break;
                                }
                                t.next = 14;
                                return _this.addMySQLUser(a, s);
                            case 14:
                                t.next = 16;
                                return _this.updateList(r, a);
                            case 16:
                            case 21:
                            case 43:
                                return t.abrupt("break", 44);
                            case 17:
                                t.next = 19;
                                return _this.addRedisUser(a);
                            case 19:
                                t.next = 21;
                                return _this.updateList(r, a);
                            case 22:
                                t.next = 24;
                                return _this.addKafkaUser(a);
                            case 24:
                                t.prev = 24;
                                module74(window, "globals.config.enableErrorNotify", false);
                                t.next = 28;
                                return _this.updateList(r, a);
                            case 28:
                                t.next = 34;
                                break;
                            case 30:
                                t.prev = 30;
                                t.t1 = t.catch(24);
                                t.next = 34;
                                return new Promise((resolve, reject)=>{
                                    setTimeout(()=>{
                                        module74(window, "globals.config.enableErrorNotify", true);
                                        _this.updateList(r, a).then(()=>{
                                            resolve();
                                        }, (e)=>reject(e));
                                    }, 2000);
                                });
                            case 34:
                                module74(window, "globals.config.enableErrorNotify", true);
                                return t.abrupt("break", 44);
                            case 36:
                                l = _this.addUserToYamlJSON(a.user, n, _this.app_id);
                                r.customResource = JSON.stringify(l);
                                r.version += 1;
                                t.next = 41;
                                return request.put(_this.getUrl(a), r);
                            case 41:
                                t.next = 43;
                                return _this.updateList(r, a);
                            case 44:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t, null, [
                    [
                        24,
                        30
                    ]
                ]);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
    }
});
u = module49(c.prototype, "edit", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return (()=>{
            const t = module44(module41.mark(function t(a) {
                let r;
                let n;
                let c;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                t.next = 2;
                                return request.get(_this.getUrl(a));
                            case 2:
                                r = t.sent;
                                t.t0 = _this.app_id;
                                t.next = t.t0 === RadonDBAppId.MySQL ? 6 : t.t0 === RadonDBAppId.RedisCluster || t.t0 === RadonDBAppId.RedisSentinel ? 11 : t.t0 === RadonDBAppId.Kafka ? 16 : 21;
                                break;
                            case 6:
                                t.next = 8;
                                return _this.editMySQLUser(a);
                            case 8:
                                t.next = 10;
                                return _this.updateList(r, a);
                            case 10:
                            case 15:
                            case 20:
                            case 30:
                                return t.abrupt("break", 31);
                            case 11:
                                t.next = 13;
                                return _this.editRedisUser(a);
                            case 13:
                                t.next = 15;
                                return _this.updateList(r, a);
                            case 16:
                                t.next = 18;
                                return _this.editKafkaUser(a);
                            case 18:
                                t.next = 20;
                                return _this.updateList(r, a);
                            case 21:
                                n = JSON.parse(r.customResource);
                                c = _this.addUserToYamlJSON(a.user, _this.deleteUserFromYamlJSON(a.oldUser, n, _this.app_id), _this.app_id);
                                r.customResource = JSON.stringify(c);
                                r.version += 1;
                                t.next = 28;
                                return request.put(_this.getUrl(a), r);
                            case 28:
                                t.next = 30;
                                return _this.updateList(r, a);
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
    }
});
d = module49(c.prototype, "delete", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return (()=>{
            const t = module44(module41.mark(function t(a) {
                let r;
                let n;
                let c;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                t.next = 2;
                                return request.get(_this.getUrl(a));
                            case 2:
                                r = t.sent;
                                t.t0 = _this.app_id;
                                t.next = t.t0 === RadonDBAppId.MySQL ? 6 : t.t0 === RadonDBAppId.RedisCluster || t.t0 === RadonDBAppId.RedisSentinel ? 11 : t.t0 === RadonDBAppId.Kafka ? 16 : 22;
                                break;
                            case 6:
                                t.next = 8;
                                return _this.deleteMySQLUser({
                                    ...a,
                                    users: [
                                        a
                                    ]
                                });
                            case 8:
                                t.next = 10;
                                return _this.updateList(r, a);
                            case 10:
                            case 15:
                            case 21:
                            case 30:
                                return t.abrupt("break", 31);
                            case 11:
                                t.next = 13;
                                return _this.deleteRedisUsers({
                                    ...a,
                                    users: [
                                        {
                                            name: a.name,
                                            password: a.password
                                        }
                                    ]
                                });
                            case 13:
                                t.next = 15;
                                return _this.updateList(r, a);
                            case 16:
                                t.next = 18;
                                return _this.deleteKafkaUsers({
                                    ...a,
                                    users: [
                                        {
                                            name: a.name
                                        }
                                    ]
                                });
                            case 18:
                                delete a.name;
                                t.next = 21;
                                return _this.updateList(r, a);
                            case 22:
                                n = JSON.parse(r.customResource);
                                c = _this.deleteUserFromYamlJSON(a, n, _this.app_id);
                                r.customResource = JSON.stringify(c);
                                r.version += 1;
                                t.next = 28;
                                return request.put(_this.getUrl(a), r);
                            case 28:
                                t.next = 30;
                                return _this.updateList(r, a);
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
    }
});
f = module49(c.prototype, "batchDelete", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return (()=>{
            const t = module44(module41.mark(function t(a) {
                let users;
                let s;
                let l;
                let i;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                ({ selectedItems: users = [] } = a);
                                s = module58(a, [
                                    "selectedItems"
                                ]);
                                t.next = 3;
                                return request.get(_this.getUrl(s));
                            case 3:
                                l = t.sent;
                                t.t0 = _this.app_id;
                                t.next = t.t0 === RadonDBAppId.MySQL ? 7 : t.t0 === RadonDBAppId.RedisCluster || t.t0 === RadonDBAppId.RedisSentinel ? 12 : t.t0 === RadonDBAppId.Kafka ? 15 : 18;
                                break;
                            case 7:
                                t.next = 9;
                                return _this.deleteMySQLUser({
                                    ...s,
                                    users
                                });
                            case 9:
                                t.next = 11;
                                return _this.updateList(l, s);
                            case 11:
                            case 14:
                            case 17:
                            case 26:
                                return t.abrupt("break", 27);
                            case 12:
                                t.next = 14;
                                return _this.deleteRedisUsers({
                                    ...s,
                                    users
                                });
                            case 15:
                                t.next = 17;
                                return _this.deleteKafkaUsers({
                                    ...s,
                                    users
                                });
                            case 18:
                                i = JSON.parse(l.customResource);
                                users.forEach((t)=>{
                                    _this.deleteUserFromYamlJSON(t, i, _this.app_id);
                                });
                                l.customResource = JSON.stringify(i);
                                l.version += 1;
                                t.next = 24;
                                return request.put(_this.getUrl(s), l);
                            case 24:
                                t.next = 26;
                                return _this.updateList(l, s);
                            case 27:
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
export default c;
