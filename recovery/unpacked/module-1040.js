import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-16.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-22.js";
import module61 from "./module-61.js";
import "./module-31.js";
import module58 from "./module-58.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import module105 from "./module-105.js";
import { getWorkloadVolumes } from "./module-248.js";
import module120 from "./module-120.js";
let i;
let c;
let s;
let f;
let d;
let p;
let m;
let h;
let v;
let g;
i = (()=>{
    function e() {
        module36(this, e);
        module65(this, "detail", c, this);
        module65(this, "tagList", s, this);
        module65(this, "isLoading", f, this);
        module65(this, "volumes", d, this);
        module65(this, "logs", p, this);
        this.watchHandler = null;
        this.encryptKey = module26(globals, "config.encryptKey", "kubesphere");
        this.module = "containers";
        this.getDetailUrl = function({ cluster, namespace, podName, gateways }) {
            let l = "api/v1";
            if (cluster) {
                l += `/klusters/${cluster}`;
            }
            if (gateways) {
                l = "";
                const u = namespace !== "kubesphere-controls-system" && namespace ? namespace : "kubesphere-system";
                if (cluster) {
                    l += `/clusters/${cluster}`;
                }
                return l + `/kapis/gateway.kubesphere.io/v2alpha1/namespaces/${u}/gateways/${gateways}/pods/${podName}`;
            }
            return `${l}/namespaces/${namespace}/pods/${podName}`;
        };
        this.getPath = function({ cluster, namespace }) {
            let r = "";
            if (cluster) {
                r += `/klusters/${cluster}`;
            }
            if (namespace) {
                r += `/namespaces/${namespace}`;
            }
            return r;
        };
        module65(this, "fetchRepositoryImages", m, this);
        module65(this, "getImageDetail", h, this);
        module65(this, "getImageTagList", v, this);
        module65(this, "updateTagList", g, this);
    }
    module37(e, [
        {
            key: "fetchDetail",
            value: async function(t) {
                let a;
                let r;
                let n;
                let l;
                let u;
                let i;
                let c;
                a = t.cluster;
                r = t.namespace;
                n = t.podName;
                l = t.containerName;
                this.isLoading = true;
                u = await request.get(this.getDetailUrl({
                    cluster: a,
                    namespace: r,
                    podName: n
                }));
                i = module105.pods(u);
                c = i.containers.find((e)=>e.name === l) || i.initContainers.find((e)=>e.name === l);
                c.createTime = module26(i, "createTime", "");
                c.app = c.app || i.app;
                c.cluster = a;
                i.cluster = a;
                this.volumes = await getWorkloadVolumes(i);
                this.detail = c;
                this.isLoading = false;
            }
        },
        {
            key: "watchLogs",
            value: async function(t, a) {
                let r;
                let n;
                let l;
                let gateways;
                let c;
                let s;
                let f;
                const _this = this;
                ({ cluster: r, namespace: n, podName: l, gateways, silent: c, ...s } = t);
                if (!c) {
                    this.logs.isLoading = true;
                }
                if (s.follow) {
                    this.watchHandler = request.watch(`${this.getDetailUrl({
                        cluster: r,
                        namespace: n,
                        podName: l,
                        gateways
                    })}/log`, s, function(data) {
                        _this.logs = {
                            data,
                            isLoading: false
                        };
                        a();
                    });
                } else {
                    f = await request.get(`${this.getDetailUrl({
                        cluster: r,
                        namespace: n,
                        podName: l,
                        gateways
                    })}/log`, s);
                    this.logs = {
                        data: f,
                        isLoading: false
                    };
                    a();
                }
            }
        },
        {
            key: "stopWatchLogs",
            value: function() {
                if (this.watchHandler) {
                    this.watchHandler.abort();
                }
            }
        },
        {
            key: "checkPreviousLog",
            value: async function(t) {
                let a;
                let r;
                let n;
                let l;
                let i;
                ({ cluster: a, namespace: r, podName: n, ...l } = t);
                i = await request.get(`${this.getDetailUrl({
                    cluster: a,
                    namespace: r,
                    podName: n
                })}/log`, l, {}, function() {});
                return !!i;
            }
        },
        {
            key: "fetchAllLogs",
            value: async function(t) {
                let a;
                let r;
                let n;
                let l;
                ({ cluster: a, namespace: r, podName: n, ...l } = t);
                return await request.get(`${this.getDetailUrl({
                    cluster: a,
                    namespace: r,
                    podName: n
                })}/log`, l);
            }
        }
    ]);
    return e;
})();
c = module49(i.prototype, "detail", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
s = module49(i.prototype, "tagList", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return new module120;
    }
});
f = module49(i.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return true;
    }
});
d = module49(i.prototype, "volumes", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
p = module49(i.prototype, "logs", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: "",
            isLoading: true
        };
    }
});
module49(i.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchDetail"), i.prototype);
module49(i.prototype, "watchLogs", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "watchLogs"), i.prototype);
module49(i.prototype, "stopWatchLogs", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "stopWatchLogs"), i.prototype);
module49(i.prototype, "fetchAllLogs", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchAllLogs"), i.prototype);
m = module49(i.prototype, "fetchRepositoryImages", [
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
            let l;
            r = a.pathParams;
            n = a.queryParams;
            l = `kapis/resources.kubesphere.io/v1alpha3${_this.getPath({
                cluster: r?.cluster,
                namespace: r?.namespace
            })}/images`;
            return await request.get(l, n);
        };
    }
});
h = module49(i.prototype, "getImageDetail", [
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
                let l;
                let i;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                r = a.cluster;
                                n = a.namespace;
                                l = module58(a, [
                                    "cluster",
                                    "namespace"
                                ]);
                                t.next = 3;
                                return request.get(`kapis/resources.kubesphere.io/v1alpha3${_this.getPath({
                                    cluster: r
                                })}/namespaces/${n || "default"}/imageconfig`, l, null, function(e, t) {
                                    return t;
                                });
                            case 3:
                                i = t.sent;
                                if (module26(i, "status", "succeeded") === "succeeded") {
                                    t.next = 6;
                                    break;
                                }
                                return t.abrupt("return", {
                                    status: "failed",
                                    message: i.message
                                });
                            case 6:
                                return t.abrupt("return", module105.imageBlob(i));
                            case 7:
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
v = module49(i.prototype, "getImageTagList", [
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
            let i;
            let limit;
            let f;
            let d;
            let p;
            ({ namespace: r, cluster: l, more: i, limit = 10 } = a);
            f = module58(a, [
                "namespace",
                "cluster",
                "more",
                "limit"
            ]);
            _this.tagList.isLoading = true;
            if (!(limit !== Infinity && limit !== -1)) {
                limit = -1;
                f.page = 1;
            }
            d = await request.get(`kapis/resources.kubesphere.io/v1alpha3${_this.getPath({
                cluster: l,
                namespace: r
            })}/repositorytags`, {
                ...f,
                limit
            }, null, function(e, t) {
                return t;
            });
            p = d.tags || [];
            _this.tagList.update({
                data: i ? [].concat(module61(_this.tagList.data), module61(p)) : p,
                total: d.total || p.length || 0,
                limit: Number(f.limit) || 10,
                page: Number(f.page) || 1,
                isLoading: false
            });
            return d.tags;
        };
    }
});
g = module49(i.prototype, "updateTagList", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.tagList.update(t);
        };
    }
});
export default i;
