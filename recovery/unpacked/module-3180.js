import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-16.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-436.js";
import "./module-22.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-66.js";
import module49 from "./module-49.js";
import module14 from "./module-14.js";
import { getBrowserLang } from "./module-52.js";
import module26 from "./module-26.js";
import module1714 from "./module-1714.js";
import module470 from "./module-470.js";
import { RadonDBAppId, getECKRelatedResources, getKafkaRelatedResources, getMongoDBRelatedResources, getOpenSearchRelatedResources, getRedisClusterRelatedResources, getRedisSentinelRelatedResources, getSecretCrd, mergeCKInstallationData, mergeECKInstallationData, mergeKafkaInstallationData, mergeMongoDBInstallationData, mergeMySQLInstallationData, mergeOpenSearchInstallationData, mergePGInstallationData, mergeRedisClusterInstallationData, mergeRedisSentinelInstallationData } from "./module-817.js";
import { getManifestApi } from "./module-1016.js";
let l;
let o;
l = ((e)=>{
    module55(r, e);
    let t;
    var a = ((e)=>{
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
    })(r);
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.alertRuleStore = new module1714;
        e.getUrl = function({ workspace, cluster, namespace } = {}) {
            return getManifestApi({
                workspace,
                cluster,
                namespace
            });
        };
        module65(e, "fetchDetail", o, module88(e));
        return e;
    }
    module37(r, [
        {
            key: "deploy",
            value: (t = module44(module41.mark(function e(t, a) {
                let workspace;
                let namespace;
                let cluster;
                let restoreParams;
                let c;
                let s;
                let valuesJson;
                let f;
                let description;
                let p;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                workspace = a.workspace;
                                namespace = a.namespace;
                                cluster = a.cluster;
                                restoreParams = a.restoreParams;
                                c = t.app_id;
                                s = t.name;
                                valuesJson = t.conf;
                                f = t.version_id;
                                description = t.description;
                                if (valuesJson.volume && parseFloat(valuesJson.volume) < 10) {
                                    valuesJson.volume = "10Gi";
                                }
                                p = {
                                    name: s,
                                    description,
                                    version: 1,
                                    appVersion: "",
                                    customResource: "{}",
                                    relatedResources: []
                                };
                                p.appVersion = f;
                                if (!namespace) {
                                    e.next = 39;
                                    break;
                                }
                                e.t0 = c;
                                e.next = e.t0 === RadonDBAppId.ClickHouse ? 9 : e.t0 === RadonDBAppId.PostgreSQL ? 11 : e.t0 === RadonDBAppId.MySQL ? 13 : e.t0 === RadonDBAppId.RedisCluster ? 16 : e.t0 === RadonDBAppId.RedisSentinel ? 19 : e.t0 === RadonDBAppId.MongoDB ? 22 : e.t0 === RadonDBAppId.Elasticsearch ? 25 : e.t0 === RadonDBAppId.Kafka ? 28 : e.t0 === RadonDBAppId.OpenSearch ? 31 : 34;
                                break;
                            case 9:
                                p.customResource = mergeCKInstallationData({
                                    name: s,
                                    valuesJson,
                                    namespace
                                });
                                return e.abrupt("break", 35);
                            case 11:
                                p.customResource = mergePGInstallationData({
                                    name: s,
                                    valuesJson,
                                    namespace,
                                    restoreParams
                                });
                                return e.abrupt("break", 35);
                            case 13:
                                p.customResource = mergeMySQLInstallationData({
                                    name: s,
                                    valuesJson,
                                    namespace,
                                    restoreParams
                                });
                                p.relatedResources = [
                                    {
                                        name: "secret",
                                        data: getSecretCrd({
                                            name: s,
                                            namespace
                                        })
                                    }
                                ];
                                return e.abrupt("break", 35);
                            case 16:
                                p.customResource = mergeRedisClusterInstallationData({
                                    name: s,
                                    namespace,
                                    valuesJson
                                });
                                p.relatedResources = getRedisClusterRelatedResources({
                                    name: s,
                                    namespace,
                                    password: valuesJson.password,
                                    specifications: valuesJson.specifications
                                });
                                return e.abrupt("break", 35);
                            case 19:
                                p.customResource = mergeRedisSentinelInstallationData({
                                    name: s,
                                    namespace,
                                    valuesJson
                                });
                                p.relatedResources = getRedisSentinelRelatedResources({
                                    name: s,
                                    namespace,
                                    password: valuesJson.password,
                                    specifications: valuesJson.specifications
                                });
                                return e.abrupt("break", 35);
                            case 22:
                                p.customResource = mergeMongoDBInstallationData({
                                    name: s,
                                    namespace,
                                    valuesJson
                                });
                                p.relatedResources = getMongoDBRelatedResources({
                                    name: s,
                                    namespace
                                });
                                return e.abrupt("break", 35);
                            case 25:
                                p.customResource = mergeECKInstallationData({
                                    name: s,
                                    namespace,
                                    valuesJson
                                });
                                p.relatedResources = getECKRelatedResources({
                                    name: s,
                                    namespace,
                                    kibanaValues: valuesJson.kibana || {}
                                });
                                return e.abrupt("break", 35);
                            case 28:
                                p.customResource = mergeKafkaInstallationData({
                                    name: s,
                                    namespace,
                                    valuesJson
                                });
                                p.relatedResources = getKafkaRelatedResources({
                                    namespace,
                                    name: s
                                });
                                return e.abrupt("break", 35);
                            case 31:
                                p.customResource = mergeOpenSearchInstallationData({
                                    name: s,
                                    namespace,
                                    valuesJson
                                });
                                p.relatedResources = getOpenSearchRelatedResources({
                                    name: s,
                                    namespace,
                                    logstashValues: valuesJson.logstash || {},
                                    username: valuesJson.username,
                                    password: valuesJson.password
                                });
                                return e.abrupt("break", 35);
                            case 34:
                                return e.abrupt("return");
                            case 35:
                                e.next = 37;
                                return this.submitting(request.post(this.getUrl({
                                    namespace,
                                    workspace,
                                    cluster
                                }), p));
                            case 37:
                                e.next = 39;
                                return this.alertRuleStore.createDefaultAlert(c, {
                                    name: s,
                                    namespace,
                                    cluster
                                });
                            case 39:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e, a) {
                return t.apply(this, arguments);
            })
        }
    ]);
    return r;
})(module470);
module49(l.prototype, "deploy", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "deploy"), l.prototype);
o = module49(l.prototype, "fetchDetail", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            let r;
            let l;
            let o;
            let u;
            r = a.app_id;
            l = module26(globals.user, "lang") || getBrowserLang();
            _this.isLoading = true;
            o = `/kapis/application.kubesphere.io/v2/apps/${r}`;
            u = await request.get(o);
            u.abstraction = module26(u, `abstraction_${l}`, u.abstraction);
            u.description = module26(u, `description_${l}`, u.description);
            u.screenshots = module26(u, `screenshots_${l}`, u.screenshots);
            _this.detail = u;
            _this.isLoading = false;
        };
    }
});
export default l;
