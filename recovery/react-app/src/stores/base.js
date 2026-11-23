import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-30.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-196.js";
import "unpacked/module-24.js";
import "unpacked/module-38.js";
import "unpacked/module-64.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-109.js";
import "unpacked/module-118.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import module41 from "unpacked/module-41.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-58.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module74 from "unpacked/module-74.js";
import module14 from "unpacked/module-14.js";
import { API_VERSIONS, LIST_DEFAULT_ORDER } from "utils/constants";
import module105 from "utils/object.mapper";
import { getApiVersion } from "unpacked/module-362.js";
import module120 from "stores/base.list";
let l;
let s;
let u;
let c;
let f;
let d;
let p;
l = (()=>{
    function e(t) {
        const _this = this;
        module36(this, e);
        this.list = new module120;
        module65(this, "detail", s, this);
        module65(this, "isLoading", u, this);
        module65(this, "isSubmitting", c, this);
        module65(this, "ksVersion", f, this);
        this.getListUrl = function(e = {}, t = "") {
            const r = t ? getApiVersion(_this.module, t) : _this.apiVersion;
            return `${r}${_this.getPath(e)}/${_this.module}${e.dryRun ? "?dryRun=All" : ""}`;
        };
        this.getDetailUrl = function(e = {}, t) {
            return `${_this.getListUrl(e, t)}/${e.name}`;
        };
        this.getWatchListUrl = function(e = {}) {
            return `${_this.apiVersion}/watch${_this.getPath(e)}/${_this.module}`;
        };
        this.getWatchUrl = function(e = {}) {
            return `${_this.getWatchListUrl(e)}/${e.name}`;
        };
        this.getResourceUrl = function(e = {}) {
            return `kapis/resources.kubesphere.io/v1alpha3${_this.getPath(e)}/${_this.module}`;
        };
        this.getFilterParams = function(e) {
            const t = {
                ...e
            };
            if (t.app) {
                t.labelSelector = t.labelSelector || "";
                t.labelSelector += `app.kubernetes.io/name=${t.app}`;
                delete t.app;
            }
            return t;
        };
        module65(this, "submitting", d, this);
        this.reject = function(e) {
            _this.isSubmitting = false;
            window.onunhandledrejection(e);
        };
        module65(this, "clear", p, this);
        this.module = t;
    }
    let t;
    let b;
    module37(e, [
        {
            key: "getPath",
            value: function({ cluster, namespace } = {}) {
                let r = "";
                if (cluster) {
                    r += `/klusters/${cluster}`;
                }
                if (namespace) {
                    r += `/namespaces/${namespace}`;
                }
                return r;
            }
        },
        {
            key: "setModule",
            value: function(e) {
                this.module = e;
            }
        },
        {
            key: "fetchList",
            value: async function() {
                let t;
                let n;
                let workspace;
                let l;
                let s;
                let devops;
                let c;
                let f;
                let d;
                const _this = this;
                const h = arguments;
                t = h.length > 0 && h[0] !== undefined ? h[0] : {};
                ({ cluster: n, workspace, namespace: l, more: s, devops, ...c } = t);
                this.list.isLoading = true;
                if (!(c.sortBy || c.ascending !== undefined)) {
                    c.sortBy = LIST_DEFAULT_ORDER[this.module] || "createTime";
                }
                if (!(c.limit !== Infinity && c.limit !== -1)) {
                    c.limit = -1;
                    c.page = 1;
                }
                c.limit = c.limit || 10;
                f = await request.get(this.getResourceUrl({
                    cluster: n,
                    workspace,
                    namespace: l,
                    devops
                }), this.getFilterParams(c));
                d = (module26(f, "items") || []).map((e)=>({
                        cluster: n,
                        namespace: l,
                        workspace,
                        ...e,
                        ..._this.mapper(e)
                    }));
                this.list.update({
                    data: s ? [].concat(module61(this.list.data), module61(d)) : d,
                    total: f.totalItems || f.totalCount || f.total_count || d.length || 0,
                    ...c,
                    limit: Number(c.limit) || 10,
                    page: Number(c.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return d;
            }
        },
        {
            key: "fetchListByK8s",
            value: async function() {
                let t;
                let n;
                let r;
                let module;
                let l;
                let s;
                let u;
                let c;
                const _this = this;
                const d = arguments;
                t = d.length > 0 && d[0] !== undefined ? d[0] : {};
                ({ cluster: n, namespace: r, module, ...l } = t);
                this.list.isLoading = true;
                if (module) {
                    this.module = module;
                }
                s = l;
                u = await request.get(this.getListUrl({
                    cluster: n,
                    namespace: r,
                    module
                }), s, {}, function() {
                    return {
                        items: []
                    };
                });
                c = Array.isArray(u.items) ? u.items.map((e)=>({
                        cluster: n,
                        module: module || _this.module,
                        ..._this.mapper(e)
                    })) : [];
                this.list.update({
                    data: c,
                    total: u.items.length || 0,
                    isLoading: false
                });
                return c;
            }
        },
        {
            key: "fetchDetail",
            value: async function(t, n) {
                let r;
                let a;
                let i;
                this.isLoading = true;
                r = this.getDetailUrl(t, n);
                a = await request.get(r);
                i = {
                    ...t,
                    ...this.mapper(a)
                };
                this.detail = i;
                this.isLoading = false;
                return i;
            }
        },
        {
            key: "fetchDetailWithoutWarning",
            value: (b = module44(module41.mark(function e(t) {
                let urlNotSupport;
                let r;
                let a;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                urlNotSupport = false;
                                this.isLoading = true;
                                e.next = 4;
                                return request.get(this.getDetailUrl(t), {}, {}, function(e, t) {
                                    if (e) {
                                        if (e.status === 404) {
                                            urlNotSupport = true;
                                        }
                                        return {};
                                    }
                                    return t;
                                });
                            case 4:
                                r = e.sent;
                                if (!urlNotSupport) {
                                    e.next = 7;
                                    break;
                                }
                                return e.abrupt("return", {
                                    urlNotSupport
                                });
                            case 7:
                                a = module63(r) ? {} : {
                                    ...t,
                                    ...this.mapper(r)
                                };
                                this.detail = a;
                                this.isLoading = false;
                                return e.abrupt("return", a);
                            case 11:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return b.apply(this, arguments);
            })
        },
        {
            key: "setSelectRowKeys",
            value: function(e) {
                this.list.selectedRowKeys.replace(e);
            }
        },
        {
            key: "create",
            value: async function(t) {
                let n;
                let r;
                const a = arguments;
                n = a.length > 1 && a[1] !== undefined ? a[1] : {};
                r = await this.submitting(request.post(this.getListUrl(n), t));
                if (this.afterChange) {
                    this.afterChange(r);
                }
                return r;
            }
        },
        {
            key: "update",
            value: async function(t, n, r) {
                let a;
                let i;
                let l;
                a = await request.get(this.getDetailUrl(t, r));
                if (i = module26(a, "metadata.resourceVersion")) {
                    module74(n, "metadata.resourceVersion", i);
                }
                l = this.submitting(request.put(this.getDetailUrl(t, r), n));
                if (this.afterChange) {
                    this.afterChange(l, t);
                }
                return l;
            }
        },
        {
            key: "patch",
            value: async function(t, n, r) {
                let a;
                a = await this.submitting(request.patch(this.getDetailUrl(t, r), n));
                if (this.afterChange) {
                    this.afterChange(a, t);
                }
                return a;
            }
        },
        {
            key: "delete",
            value: async function(t, n) {
                let r;
                r = await this.submitting(request.delete(this.getDetailUrl(t, n)));
                if (this.afterDelete) {
                    this.afterDelete(r, t);
                }
                return r;
            }
        },
        {
            key: "batchDelete",
            value: function(e) {
                const _this = this;
                return this.submitting(Promise.all(e.map((e)=>{
                    const n = _this.list.data.find((t)=>t.name === e);
                    return request.delete(_this.getDetailUrl(n));
                })));
            }
        },
        {
            key: "checkName",
            value: function(e, t, n = "") {
                return request.get(this.getDetailUrl(e, n), {
                    ...t
                }, {
                    headers: {
                        "x-check-exist": true
                    }
                });
            }
        },
        {
            key: "checkLabels",
            value: function({ labels, ...rest }, r = "") {
                return request.get(this.getListUrl(rest, r), {
                    labelSelector: Object.keys(labels).map((e)=>`${e}=${labels[e]}`).join(",")
                }, {
                    headers: {
                        "x-check-exist": true
                    }
                });
            }
        },
        {
            key: "getKsVersion",
            value: (t = module44(module41.mark(function e(t) {
                let n;
                let r;
                let a;
                let i;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                if ((a = module26(globals.clusterConfig, `${t.cluster}.ksVersion`, "")) === "") {
                                    e.next = 5;
                                    break;
                                }
                                r = a.replace(/[^\d.]/g, "");
                                e.next = 15;
                                break;
                            case 5:
                                if (!globals.ksConfig.multicluster) {
                                    e.next = 11;
                                    break;
                                }
                                e.next = 8;
                                return request.get(`/kapis/clusters/${t.cluster}/version`);
                            case 8:
                                n = e.sent;
                                e.next = 14;
                                break;
                            case 11:
                                e.next = 13;
                                return request.get("/kapis/version");
                            case 13:
                                n = e.sent;
                            case 14:
                                r = n.gitVersion.replace(/[^\d.]/g, "");
                            case 15:
                                i = Number(r.split(".").slice(0, 2).join("."));
                                this.ksVersion = i;
                                return e.abrupt("return", i);
                            case 18:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return t.apply(this, arguments);
            })
        },
        {
            key: "apiVersion",
            get: function() {
                return API_VERSIONS[this.module] || "";
            }
        },
        {
            key: "mapper",
            get: function() {
                return module105[this.module] || function(e) {
                    return e;
                };
            }
        }
    ]);
    return e;
})();
s = module49(l.prototype, "detail", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
u = module49(l.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return true;
    }
});
c = module49(l.prototype, "isSubmitting", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
f = module49(l.prototype, "ksVersion", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 3.1;
    }
});
module49(l.prototype, "setModule", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "setModule"), l.prototype);
d = module49(l.prototype, "submitting", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.isSubmitting = true;
            setTimeout(()=>{
                t.catch(()=>{}).finally(()=>{
                    _this.isSubmitting = false;
                });
            }, 500);
            return t;
        };
    }
});
module49(l.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchList"), l.prototype);
module49(l.prototype, "fetchListByK8s", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchListByK8s"), l.prototype);
module49(l.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchDetail"), l.prototype);
module49(l.prototype, "fetchDetailWithoutWarning", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchDetailWithoutWarning"), l.prototype);
module49(l.prototype, "setSelectRowKeys", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "setSelectRowKeys"), l.prototype);
module49(l.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "create"), l.prototype);
module49(l.prototype, "update", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "update"), l.prototype);
module49(l.prototype, "patch", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "patch"), l.prototype);
module49(l.prototype, "delete", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "delete"), l.prototype);
module49(l.prototype, "batchDelete", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "batchDelete"), l.prototype);
module49(l.prototype, "checkName", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "checkName"), l.prototype);
module49(l.prototype, "checkLabels", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "checkLabels"), l.prototype);
p = module49(l.prototype, "clear", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.list = new module120;
            _this.detail = {};
        };
    }
});
export default l;
