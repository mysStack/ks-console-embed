import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-30.js";
import "./module-18.js";
import "./module-97.js";
import "./module-16.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import "./module-45.js";
import "./module-118.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-41.js";
import module61 from "./module-61.js";
import "./module-31.js";
import "./module-58.js";
import "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module88 from "./module-88.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import module240 from "./module-240.js";
import { LIST_DEFAULT_ORDER } from "./module-72.js";
import module68 from "./module-68.js";
import module120 from "./module-120.js";
let u;
let c;
let f;
let d;
let p;
let h;
u = ((e)=>{
    module55(o, e);
    var r = ((e)=>{
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
    })(o);
    function o(t = "roles") {
        let e;
        module36(this, o);
        e = r.call(this, t);
        e.roleTemplates = new module120;
        e.basicRoleTemplates = new module120;
        module65(e, "isLoading", c, module88(e));
        module65(e, "roleCategory", f, module88(e));
        e.getResourceUrl = function(t) {
            return `kapis/iam.kubesphere.io/v1beta1${e.getPath(t)}/${e.module}`;
        };
        e.getListUrl = e.getResourceUrl;
        module65(e, "fetchTemplatesCategory", d, module88(e));
        module65(e, "fetchRoleTemplates", p, module88(e));
        module65(e, "fetchBasicRoleTemplates", h, module88(e));
        return e;
    }
    module37(o, [
        {
            key: "getPath",
            value: function({ cluster, workspace, namespace, devops }) {
                let a = "";
                if (cluster) {
                    a += `/klusters/${cluster}`;
                }
                if (namespace) {
                    return `${a}/namespaces/${namespace}`;
                }
                if (devops) {
                    return `${a}/namespaces/${devops}`;
                }
                if (workspace) {
                    return `/workspaces/${workspace}`;
                }
                return a;
            }
        }
    ]);
    module37(o, [
        {
            key: "fetchList",
            value: async function() {
                let n;
                let cluster;
                let workspace;
                let l;
                let u;
                let c;
                let f;
                let d;
                let p;
                const _this = this;
                const v = arguments;
                n = v.length > 0 && v[0] !== undefined ? v[0] : {};
                ({ cluster, workspace, namespace: l, devops: u, more: c, ...f } = n);
                this.list.isLoading = true;
                if (!(f.sortBy || f.ascending !== undefined)) {
                    f.sortBy = LIST_DEFAULT_ORDER[this.module] || "createTime";
                }
                if (!(f.limit !== Infinity && f.limit !== -1)) {
                    f.limit = -1;
                    f.page = 1;
                }
                f.limit = f.limit || 10;
                d = await request.get(this.getResourceUrl({
                    cluster,
                    workspace,
                    namespace: l ?? u
                }), {
                    ...f,
                    annotation: "kubesphere.io/creator"
                }, {}, function() {
                    return {
                        items: []
                    };
                });
                p = d?.items?.map(function(e) {
                    return {
                        cluster,
                        workspace,
                        ..._this.mapper(e, u ? "devopsroles" : _this.module)
                    };
                });
                this.list.update({
                    data: c ? [].concat(module61(this.list.data), module61(p)) : p,
                    total: d.totalItems || d.total_count || p.length || 0,
                    ...f,
                    limit: Number(f.limit) || 10,
                    page: Number(f.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
            }
        },
        {
            key: "batchDelete",
            value: function(e, n) {
                const _this = this;
                const { cluster, workspace, namespace } = n;
                if (!e.some((e)=>_this.checkIfIsPresetRole(e))) {
                    return this.submitting(Promise.all(e.map((name)=>request.delete(_this.getDetailUrl({
                            name,
                            cluster,
                            workspace,
                            namespace
                        })))));
                }
                module240.error(t("DELETING_PRESET_ROLES_NOT_ALLOWED"));
            }
        },
        {
            key: "delete",
            value: function({ cluster, name, workspace, namespace }) {
                if (!this.checkIfIsPresetRole(name)) {
                    return this.submitting(request.delete(this.getDetailUrl({
                        cluster,
                        name,
                        workspace,
                        namespace
                    })));
                }
                module240.error(t("DELETING_PRESET_ROLES_NOT_ALLOWED"));
            }
        },
        {
            key: "checkName",
            value: function(e) {
                return request.get(this.getDetailUrl(e), {}, {
                    headers: {
                        "x-check-exist": true
                    }
                });
            }
        },
        {
            key: "checkIfIsPresetRole",
            value: function(e) {
                if (this.module === "roles") {
                    return module63(globals.config.presetRoles) && globals.config.presetRoles.includes(e);
                }
                return module63(globals.config.presetClusterRoles) && globals.config.presetClusterRoles.includes(e);
            }
        }
    ]);
    return o;
})(module68);
c = module49(u.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
f = module49(u.prototype, "roleCategory", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
module49(u.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchList"), u.prototype);
module49(u.prototype, "batchDelete", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "batchDelete"), u.prototype);
d = module49(u.prototype, "fetchTemplatesCategory", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (n, r)=>{
            let labelSelector;
            let i;
            let l;
            labelSelector = `iam.kubesphere.io/scope=${n},${r ? `${r}.` : ""}kubesphere.io/managed=true`;
            _this.isLoading = true;
            i = await request.get("kapis/iam.kubesphere.io/v1beta1/categories", {
                labelSelector
            });
            l = [];
            if (Array.isArray(i.items)) {
                l = i.items.map((e)=>({
                        name: module26(e, "metadata.name"),
                        displayName: module26(e, "spec.displayName")
                    }));
            }
            _this.roleCategory = l;
            _this.isLoading = false;
            return l;
        };
    }
});
p = module49(u.prototype, "fetchRoleTemplates", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async function(n, r) {
            let o;
            let i;
            let l;
            let s;
            const u = arguments;
            o = u.length > 2 && u[2] !== undefined ? u[2] : {};
            _this.roleTemplates.isLoading = true;
            i = _this.getPath(o);
            l = await request.get(`kapis/iam.kubesphere.io/v1beta1${i}/roletemplates`, {
                labelSelector: r || `iam.kubesphere.io/scope=${n}`
            });
            s = module26(l, "items", []).map((t)=>_this.mapper(t, _this.module));
            _this.roleTemplates.update({
                data: s,
                total: l.totalItems || l.total_count || 0,
                isLoading: false
            });
        };
    }
});
h = module49(u.prototype, "fetchBasicRoleTemplates", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async function(n, r) {
            let o;
            let i;
            let l;
            let s;
            const u = arguments;
            o = u.length > 2 && u[2] !== undefined ? u[2] : {};
            _this.basicRoleTemplates.isLoading = true;
            i = _this.getPath(o);
            l = await request.get(`kapis/iam.kubesphere.io/v1beta1${i}/roletemplates`, {
                labelSelector: r || `iam.kubesphere.io/scope=${n}`
            });
            s = module26(l, "items", []).map((t)=>_this.mapper(t, _this.module));
            _this.basicRoleTemplates.update({
                data: s,
                total: l.totalItems || l.total_count || 0,
                isLoading: false
            });
        };
    }
});
module49(u.prototype, "delete", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "delete"), u.prototype);
module49(u.prototype, "checkName", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "checkName"), u.prototype);
export default u;
