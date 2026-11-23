import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-320.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-138.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import module41 from "unpacked/module-41.js";
import module58 from "unpacked/module-58.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import "unpacked/module-31.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-245.js";
import "unpacked/module-442.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-1431.js";
import "unpacked/module-1432.js";
import "unpacked/module-1433.js";
import "unpacked/module-1434.js";
import module14 from "unpacked/module-14.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module446 from "unpacked/module-446.js";
import module242 from "unpacked/module-242.js";
import module68 from "stores/base";
import { safeAtob } from "utils/base64";
import { RadonDBAppId } from "unpacked/module-817.js";
import { getDmpSecrets, getManifestApi } from "unpacked/module-1016.js";
let v;
let g;
let _;
let y;
let E;
let b;
const w = {
    apiVersion: "mysql.radondb.com/v1alpha1",
    kind: "Backup",
    metadata: {
        annotations: {
            "kubesphere.io/alias-name": ""
        },
        name: "",
        namespace: ""
    },
    spec: {
        clusterName: "",
        image: "larryhuang142/mysql57-sidecar:v202205301443"
    }
};
const x = {
    Started: "Creating",
    Complete: "Success"
};
const M = (e, { app_id, workspace, namespace, cluster })=>{
    const c = {
        name: module26(e, "metadata.name"),
        createAt: module26(e, "metadata.creationTimestamp"),
        app_id,
        workspace,
        namespace,
        cluster
    };
    const s = module446(module26(e, "status.conditions"), "lastTransitionTime").reverse();
    switch(app_id){
        case RadonDBAppId.MySQL:
            return {
                ...c,
                status: x[module26(s, "[0].type", "Creating")] || "Failed",
                completeAt: module26(s, "[0].lastTransitionTime"),
                restoreParams: {
                    restoreFrom: module26(e, "status.backupName")
                }
            };
        case RadonDBAppId.PostgreSQL:
            return {
                ...c,
                name: e.backup_id,
                createAt: new Date(e.begin_time),
                size: e.size,
                repoPath: e.repoPath,
                status: "Success",
                completeAt: new Date(e.end_time),
                restoreParams: {
                    restoreFrom: e.repoPath,
                    restoreTarget: e.name
                },
                specifications: `${module26(e, "cpu")}, ${module26(e, "memory")}`,
                volume: module26(e, "pvc_size"),
                nodes: module26(e, "replicas")
            };
        default:
            return c;
    }
};
v = ((e)=>{
    module55(a, e);
    var t = ((e)=>{
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
    })(a);
    function a(...n_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...n_1);
        e.yamlJSONObj = undefined;
        e.getUrl = function(t) {
            switch(t.app_id){
                case RadonDBAppId.MySQL:
                    return e.getMysqlBackupUrl(t);
                case RadonDBAppId.PostgreSQL:
                    return e.getPGBackupUrl(t);
                default:
                    return "";
            }
        };
        e.getWatchListUrl = function({ cluster_id, cluster, name, app_id, namespace }) {
            if (app_id === RadonDBAppId.MySQL) {
                return `/apis${globals.app.isMultiCluster && cluster ? `/clusters/${cluster}` : ""}/mysql.radondb.com/v1alpha1/watch/namespaces/${namespace}/backups${name ? `/${name}` : `?labelSelector=cluster=${cluster_id}`}`;
            }
            return "";
        };
        module65(e, "fetchList", g, module88(e));
        module65(e, "add", _, module88(e));
        module65(e, "delete", y, module88(e));
        module65(e, "batchDelete", E, module88(e));
        module65(e, "autoBackup", b, module88(e));
        return e;
    }
    module37(a, [
        {
            key: "getMysqlBackupUrl",
            value: function({ cluster_id, cluster, namespace, name }) {
                return `/apis${globals.app.isMultiCluster && cluster ? `/clusters/${cluster}` : ""}/mysql.radondb.com/v1alpha1/namespaces/${namespace}/backups${name ? `/${name}` : `?labelSelector=cluster=${cluster_id}`}`;
            }
        },
        {
            key: "getPGBackupUrl",
            value: function({ cluster_id, cluster, namespace }) {
                return `/apis${globals.app.isMultiCluster && cluster ? `/clusters/${cluster}` : ""}/postgres.radondb.io/v1/namespaces/${namespace}/postgresqls${cluster_id ? `/${cluster_id}` : ""}`;
            }
        }
    ]);
    return a;
})(module68);
g = module49(v.prototype, "fetchList", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return module44(module41.mark(function* t() {
            let a;
            let c;
            let l;
            let workspace;
            let cluster;
            let namespace;
            let reverse;
            let cluster_id;
            let app_id;
            let filters;
            let v;
            let g;
            let _;
            let y;
            const E = arguments;
            a = E.length > 0 && E[0] !== undefined ? E[0] : {};
            ({ limit: c = 10, page: l = 1, workspace, cluster, namespace } = a);
            a.more;
            a.status;
            reverse = a.reverse;
            cluster_id = a.id;
            app_id = a.app_id;
            filters = module58(a, [
                "limit",
                "page",
                "workspace",
                "cluster",
                "namespace",
                "more",
                "status",
                "reverse",
                "id",
                "app_id"
            ]);
            _this.list.isLoading = true;
            v = [];
            if (!(app_id !== RadonDBAppId.PostgreSQL)) {
                g = yield request.get(_this.getUrl({
                    app_id,
                    workspace,
                    namespace,
                    cluster,
                    cluster_id
                }));
                v = module26(g, "status.backups_list", []).reverse();
            } else {
                _ = yield request.get(_this.getUrl({
                    app_id,
                    workspace,
                    namespace,
                    cluster,
                    cluster_id
                }));
                v = _.items ? _.items.sort((e, t)=>new Date(t.metadata.creationTimestamp).getTime() - new Date(e.metadata.creationTimestamp).getTime()) : [];
            }
            y = v.map((e)=>({
                    ...M(e, {
                        app_id,
                        workspace,
                        namespace,
                        cluster
                    }),
                    cluster
                })).filter((e)=>!filters.keyword || module26(e, "name", "").includes(filters.keyword));
            Object.assign(_this.list, {
                data: y.slice((l - 1) * c, l * c),
                total: y.length,
                limit: Number(c) || 10,
                page: Number(l) || 1,
                reverse,
                filters,
                selectedRowKeys: []
            });
            _this.list.isLoading = false;
            return y;
        }));
    }
});
_ = module49(v.prototype, "add", [
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
                let o;
                let c;
                let s;
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
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                r = a.name;
                                o = a.namespace;
                                c = a.cluster_id;
                                s = a.alias;
                                l = a.image;
                                t.t0 = a.app_id;
                                t.next = t.t0 === RadonDBAppId.MySQL ? 4 : t.t0 === RadonDBAppId.PostgreSQL ? 14 : 38;
                                break;
                            case 4:
                                i = JSON.parse(JSON.stringify(w));
                                module74(i, "metadata.name", `${c.substring(0, 30)}-${r}`);
                                module74(i, "metadata.namespace", o);
                                module74(i, 'metadata.annotations["kubesphere.io/alias-name"]', s);
                                module74(i, "spec.clusterName", c);
                                module74(i, 'metadata.labels["cluster"]', c);
                                module74(i, "spec.image", l);
                                t.next = 13;
                                return request.post(_this.getUrl(a), i);
                            case 13:
                            case 37:
                            case 38:
                                return t.abrupt("break", 39);
                            case 14:
                                u = window.atob || safeAtob;
                                t.next = 17;
                                return request.get(getManifestApi(a));
                            case 17:
                                d = t.sent;
                                t.next = 20;
                                return request.get(getDmpSecrets({
                                    namespace: "dmp-system",
                                    cluster_id: "dmp-managed-s3-secret"
                                }));
                            case 20:
                                f = t.sent;
                                p = u(module26(f, "data.s3-access-key"));
                                m = u(module26(f, "data.s3-secret-key"));
                                h = u(module26(f, "data.pg-s3-bucket"));
                                v = u(module26(f, "data.s3-endpoint"));
                                g = JSON.parse(d.customResource);
                                _ = module26(g, "spec.backupCluster.backupToS3.manual.trigger-id", 1);
                                module74(g, "spec.S3.ACCESS_KEY", p);
                                module74(g, "spec.S3.SECRET_KEY", m);
                                module74(g, "spec.S3.BUCKET", h);
                                module74(g, "spec.S3.ENDPOINT", v);
                                module74(g, "spec.S3.PATH", `${o}/backup`);
                                module74(g, "spec.backupCluster.backupToS3.manual.trigger-id", _ + 1);
                                d.customResource = JSON.stringify(g);
                                d.version += 1;
                                t.next = 37;
                                return request.put(getManifestApi(a), d);
                            case 39:
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
y = module49(v.prototype, "delete", [
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
                let o;
                let c;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                t.t0 = a.app_id;
                                t.next = t.t0 === RadonDBAppId.MySQL ? 3 : t.t0 === RadonDBAppId.PostgreSQL ? 6 : 17;
                                break;
                            case 3:
                                t.next = 5;
                                return request.delete(_this.getUrl(a));
                            case 5:
                            case 16:
                            case 17:
                                return t.abrupt("break", 18);
                            case 6:
                                r = getManifestApi({
                                    ...a,
                                    cluster_id: a.id
                                });
                                t.next = 9;
                                return request.get(r);
                            case 9:
                                o = t.sent;
                                c = JSON.parse(o.customResource);
                                module74(c, "spec.backupToDelete", `${Date.now()}|${a.name}`);
                                o.customResource = JSON.stringify(c);
                                o.version += 1;
                                t.next = 16;
                                return request.put(r, o);
                            case 18:
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
E = module49(v.prototype, "batchDelete", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return (()=>{
            const e = module44(module41.mark(function e(t) {
                let r;
                let c;
                let s;
                let l;
                let i;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                ({ selectedItems: r = [] } = t);
                                c = module58(t, [
                                    "selectedItems"
                                ]);
                                s = getManifestApi({
                                    ...c,
                                    cluster_id: c.id
                                });
                                e.next = 4;
                                return request.get(s);
                            case 4:
                                l = e.sent;
                                e.t0 = c.app_id;
                                e.next = e.t0 === RadonDBAppId.PostgreSQL ? 8 : 15;
                                break;
                            case 8:
                                i = JSON.parse(l.customResource);
                                module74(i, "spec.backupToDelete", `${Date.now()}|${r.map((e)=>e.name).join("|")}`);
                                l.customResource = JSON.stringify(i);
                                l.version += 1;
                                e.next = 14;
                                return request.put(s, l);
                            case 14:
                            case 15:
                                return e.abrupt("break", 16);
                            case 16:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        })();
    }
});
b = module49(v.prototype, "autoBackup", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return (()=>{
            const e = module44(module41.mark(function e(t) {
                let a;
                let r;
                let c;
                let s;
                let l;
                let i;
                let u;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = t.backupSchedule;
                                r = t.retentionTime;
                                c = module58(t, [
                                    "backupSchedule",
                                    "retentionTime"
                                ]);
                                s = getManifestApi(c);
                                e.next = 4;
                                return request.get(s);
                            case 4:
                                l = e.sent;
                                e.t0 = c.app_id;
                                e.next = e.t0 === RadonDBAppId.PostgreSQL ? 8 : e.t0 === RadonDBAppId.MySQL ? 15 : 22;
                                break;
                            case 8:
                                i = JSON.parse(l.customResource);
                                if (a !== "") {
                                    module74(i, "spec.backupCluster.backupToS3.cron.enable", true);
                                    module74(i, "spec.backupCluster.backupToS3.cron.schedule", a);
                                    module74(i, "spec.backupCluster.backupToS3.policy.retention", `RECOVERY WINDOW OF ${r} DAYS`);
                                } else {
                                    module242(i, "spec.backupCluster.backupToS3.cron");
                                    module74(i, "spec.backupCluster.backupToS3.policy.retention", "REDUNDANCY 10");
                                }
                                l.customResource = JSON.stringify(i);
                                l.version += 1;
                                e.next = 14;
                                return request.put(s, l);
                            case 14:
                            case 21:
                            case 22:
                                return e.abrupt("break", 23);
                            case 15:
                                u = JSON.parse(l.customResource);
                                module74(u, "spec.backupSchedule", a ? `0 ${a}` : "");
                                l.customResource = JSON.stringify(u);
                                l.version += 1;
                                e.next = 21;
                                return request.put(s, l);
                            case 23:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        })();
    }
});
export default v;
