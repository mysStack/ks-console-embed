import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-48.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-110.js";
import "./module-64.js";
import "./module-75.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module58 from "./module-58.js";
import "./module-31.js";
import module41 from "./module-41.js";
import module61 from "./module-61.js";
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
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module242 from "./module-242.js";
import module247 from "./module-247.js";
import module14 from "./module-14.js";
import module68 from "./module-68.js";
import { generateId } from "./module-52.js";
import module435 from "./module-435.js";
import { B2I_SUPPORTED_TYPES, S2I_SUPPORTED_TYPES } from "./module-72.js";
import module473 from "./module-473.js";
let s;
let u;
let c;
let f;
s = ((e)=>{
    module55(r, e);
    let t;
    var n = ((e)=>{
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
            let n;
            const r = module51(e);
            if (t) {
                const o = module51(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else {
                n = r.apply(this, arguments);
            }
            return module56(this, n);
        };
    })(r);
    function r(...o_1) {
        let e;
        module36(this, r);
        e = n.call(this, ...o_1);
        e.module = "s2ibuilders";
        e.runStore = new module473;
        module65(e, "detail", u, module88(e));
        e.getS2iSupportLanguage = async (n)=>{
            let r;
            let o;
            let a;
            r = await e.getBuilderTemplate(n);
            o = {
                s2i: module61(S2I_SUPPORTED_TYPES),
                b2i: module61(B2I_SUPPORTED_TYPES)
            };
            a = {
                java: "jar",
                tomcat: "war"
            };
            if (r && r.items) {
                r.items.forEach((e)=>{
                    if (module26(e, 'metadata.labels["builder-type.kubesphere.io/b2i"]')) {
                        o.b2i.push(a[e.spec.codeFramework] || e.spec.codeFramework);
                    }
                    if (module26(e, 'metadata.labels["builder-type.kubesphere.io/s2i"]')) {
                        o.s2i.push(e.spec.codeFramework);
                    }
                });
            }
            o.s2i = module247(o.s2i);
            o.b2i = module247(o.b2i);
            return o;
        };
        e.getBuilderTemplate = async (n)=>await request.get(`apis/devops.kubesphere.io/v1alpha1${e.getPath(n)}/s2ibuildertemplates`);
        module65(e, "fetchDetail", c, module88(e));
        module65(e, "rerun", f, module88(e));
        return e;
    }
    module37(r, [
        {
            key: "updateCreateData",
            value: function(e) {
                const t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
                if (!t) {
                    const n = `${module26(e, "spec.config.imageName", "").replace(/[_/:]/g, "-")}-${module26(e, "spec.config.tag")}`;
                    e.metadata.name = `${n.slice(0, 60)}-${generateId(3)}`;
                }
                let r = module26(e, 'metadata.annotations["kubesphere.io/repoUrl"]', "");
                r = r.replace(/^(http(s)?:\/\/)?(.*)$/, "$3");
                const o = module26(e, "spec.config.imageName", "");
                if (r && !o.startsWith(r)) {
                    const a = r.endsWith("/") ? `${r}${o}` : `${r}/${o}`;
                    module74(e, "spec.config.imageName", a);
                }
                if (e.isUpdateWorkload === false) {
                    module74(e, 'metadata.annotations["devops.kubesphere.io/donotautoscale"]', "true");
                } else {
                    module242(e, 'metadata.annotations["devops.kubesphere.io/donotautoscale"]');
                }
                delete e.isUpdateWorkload;
            }
        },
        {
            key: "creatBinary",
            value: function(e, t, cluster) {
                const r = module435.b2iBuilders({
                    name: e,
                    namespace: t
                });
                return request.post(`apis/devops.kubesphere.io/v1alpha1/${this.getPath({
                    namespace: t,
                    cluster
                })}/s2ibinaries/${e}`, r);
            }
        },
        {
            key: "create",
            value: function(e, t) {
                const _this = this;
                const { cluster, namespace } = t;
                this.updateCreateData(e, false);
                return request.post(this.getListUrl({
                    cluster,
                    namespace
                }), e).then(()=>{
                    const t = module26(e, "metadata.annotations.sourceUrl");
                    _this.createS2IRun({
                        cluster,
                        namespace,
                        builderName: module26(e, "metadata.name"),
                        binaryUrl: t
                    });
                });
            }
        },
        {
            key: "updateBuilder",
            value: function(e, t) {
                const _this = this;
                const { cluster, namespace, name } = t;
                this.updateCreateData(e, true);
                return request.patch(this.getDetailUrl({
                    cluster,
                    namespace,
                    name
                }), e).then(()=>{
                    const t = module26(e, "metadata.annotations.sourceUrl");
                    _this.createS2IRun({
                        cluster,
                        namespace,
                        builderName: module26(e, "metadata.name"),
                        binaryUrl: t
                    });
                });
            }
        },
        {
            key: "createS2IRun",
            value: function({ cluster, namespace, builderName, binaryUrl }) {
                if (builderName && namespace) {
                    const a = {
                        apiVersion: "devops.kubesphere.io/v1alpha1",
                        kind: "S2iRun",
                        metadata: {
                            name: `${builderName.slice(0, 37)}-${generateId(3)}`,
                            cluster,
                            namespace
                        },
                        spec: {
                            builderName,
                            binaryUrl,
                            ...binaryUrl ? {
                                isBinaryURL: true
                            } : {}
                        }
                    };
                    return this.runStore.create(a, {
                        cluster,
                        namespace
                    });
                }
            }
        },
        {
            key: "verifyRepoReadable",
            value: (t = module44(module41.mark(function e(remoteUrl, n, r) {
                let o;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                if (remoteUrl) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return");
                            case 2:
                                o = n ? {
                                    remoteUrl,
                                    secretRef: {
                                        name: n,
                                        namespace: r
                                    }
                                } : {
                                    remoteUrl
                                };
                                e.next = 5;
                                return request.post("kapis/resources.kubesphere.io/v1alpha2/git/verify", o, {}, function(e) {
                                    const message = module26(e, "message", "");
                                    if (message) {
                                        return Promise.resolve({
                                            message
                                        });
                                    }
                                    return Promise.reject(e);
                                });
                            case 5:
                                return e.abrupt("return", e.sent);
                            case 6:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e);
            })), function(e, n, r) {
                return t.apply(this, arguments);
            })
        },
        {
            key: "apiVersion",
            get: function() {
                return "apis/devops.kubesphere.io/v1alpha1";
            }
        }
    ]);
    return r;
})(module68);
u = module49(s.prototype, "detail", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
c = module49(s.prototype, "fetchDetail", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (n)=>{
            let cluster;
            let o;
            let a;
            let l;
            cluster = n.cluster;
            o = n.namespace;
            a = n.name;
            _this.isLoading = true;
            l = await request.get(`apis/devops.kubesphere.io/v1alpha1${_this.getPath({
                cluster,
                namespace: o
            })}/s2ibuilders/${a}`, undefined, undefined, function(e) {
                if (e.reason === "NotFound") {
                    return e;
                }
                Promise.reject(e);
            });
            _this.detail = _this.mapper(l);
            _this.detail.cluster = cluster;
            _this.isLoading = false;
            return _this.detail;
        };
    }
});
f = module49(s.prototype, "rerun", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (n)=>{
            let builderName;
            let a;
            let s;
            let u;
            let annotations;
            builderName = n.name;
            n.cluster;
            ({ namespace: a, isUpdateWorkload: s = true } = n);
            u = module58(n, [
                "name",
                "cluster",
                "namespace",
                "isUpdateWorkload"
            ]);
            annotations = s ? {} : {
                "devops.kubesphere.io/donotautoscale": "true"
            };
            return _this.runStore.create({
                apiVersion: "devops.kubesphere.io/v1alpha1",
                kind: "S2iRun",
                metadata: {
                    annotations,
                    name: `${builderName}-rerun-${generateId(3)}`,
                    namespace: a
                },
                spec: {
                    builderName,
                    ...u
                }
            });
        };
    }
});
export default s;
