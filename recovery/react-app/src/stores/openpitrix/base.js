import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-138.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-196.js";
import "unpacked/module-7.js";
import "unpacked/module-109.js";
import "unpacked/module-28.js";
import "unpacked/module-245.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import module41 from "unpacked/module-41.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module14 from "unpacked/module-14.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module189 from "unpacked/module-189.js";
import { MAX_LIMIT } from "configs/openpitrix/app";
import { getFilterString } from "utils/index";
let s;
let u;
let c;
let f;
let d;
let p;
let h;
let v;
let m;
let g;
let y;
let b;
s = (()=>{
    function e() {
        const _this = this;
        module36(this, e);
        this.sortKey = "create_time";
        this.defaultStatus = [];
        this.defaultRepo = "";
        module65(this, "list", u, this);
        module65(this, "detail", c, this);
        module65(this, "isLoading", f, this);
        module65(this, "isSubmitting", d, this);
        this.getUrl = function({ workspace, app_id, version_id, name } = {}) {
            let baseUrl = _this.baseUrl;
            if (workspace) {
                baseUrl += `/workspaces/${workspace}`;
            }
            if (version_id) {
                const l = _this.resourceName === "versions" ? "" : _this.resourceName;
                return `${baseUrl}/apps/${app_id}/versions/${version_id}/${name || l}`;
            }
            if (app_id) {
                const s = _this.resourceName === "apps" ? "" : _this.resourceName;
                return `${baseUrl}/apps/${app_id}/${name || s}`;
            }
            return `${baseUrl}/${name || _this.resourceName}`;
        };
        module65(this, "submitting", p, this);
        this.getConditions = function({ status, app_id, version_id, repo_id } = {}) {
            const i = {
                status: status || _this.defaultStatus
            };
            if (_this.resourceName === "applications") {
                i.app_id = app_id;
                i.version_id = version_id;
            }
            if (repo_id || _this.defaultRepo) {
                i.repo_id = repo_id || _this.defaultRepo;
            }
            return i;
        };
        module65(this, "fetchList", h, this);
        module65(this, "fetchDetail", v, this);
        module65(this, "create", m, this);
        module65(this, "update", g, this);
        module65(this, "delete", y, this);
        module65(this, "setSelectRowKeys", b, this);
        this.reject = function(e) {
            _this.isSubmitting = false;
            _this.isLoading = false;
            window.onunhandledrejection(e);
        };
    }
    module37(e, [
        {
            key: "getPath",
            value: function({ workspace, cluster, namespace }) {
                let o = "";
                if (workspace) {
                    o += `/workspaces/${workspace}`;
                }
                if (globals.app.isMultiCluster && cluster) {
                    o += `/clusters/${cluster}`;
                }
                if (namespace) {
                    o += `/namespaces/${namespace}`;
                }
                return o;
            }
        },
        {
            key: "clearSearch",
            value: function() {
                this.list.keyword = "";
            }
        },
        {
            key: "baseUrl",
            get: function() {
                return "kapis/application.kubesphere.io/v2";
            }
        }
    ]);
    return e;
})();
u = module49(s.prototype, "list", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: [],
            page: 0,
            limit: 10,
            total: 0,
            reverse: false,
            filters: {},
            isLoading: true,
            keyword: "",
            selectedRowKeys: [],
            setSelectRowKeys: this.setSelectRowKeys
        };
    }
});
c = module49(s.prototype, "detail", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
f = module49(s.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return true;
    }
});
d = module49(s.prototype, "isSubmitting", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
p = module49(s.prototype, "submitting", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t, n = 500) {
            _this.isSubmitting = true;
            setTimeout(()=>{
                t.catch(()=>{}).finally(()=>{
                    _this.isSubmitting = false;
                });
            }, n);
            return t;
        };
    }
});
h = module49(s.prototype, "fetchList", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return module44(module41.mark(function* t() {
            let n;
            let r;
            let i;
            let s;
            let status;
            let c;
            let f;
            let repo_id;
            let p;
            let order;
            let reverse;
            let m;
            let g;
            let y;
            let b;
            let C;
            let w;
            let _;
            let x;
            const M = arguments;
            n = M.length > 0 && M[0] !== undefined ? M[0] : {};
            ({ limit: r, page: i, noLimit: s, status, app_id: c, version_id: f, repo_id, statistics: p, order, reverse, more: m, workspace: g, ...y } = n);
            _this.list.isLoading = true;
            b = _this.getConditions({
                status,
                app_id: c,
                version_id: f,
                repo_id
            });
            C = {
                orderBy: order || _this.sortKey,
                paging: `limit=${s ? MAX_LIMIT : r || 10},page=${i || 1}`,
                conditions: getFilterString(b)
            };
            if (reverse === undefined) {
                reverse = true;
            }
            if (!module63(y)) {
                w = getFilterString(y);
                C.conditions += w ? `,${w}` : "";
            }
            if (reverse) {
                C.reverse = true;
            }
            if (p) {
                C.statistics = true;
            }
            _ = yield request.get(_this.getUrl({
                workspace: g,
                app_id: c,
                version_id: f
            }), C, {}, _this.reject);
            x = module26(_, "items", []).map((e)=>({
                    ...e,
                    workspace: g
                }));
            Object.assign(_this.list, {
                data: m ? [].concat(module61(_this.list.data), module61(x)) : x,
                total: module26(_, "total_count", 0),
                isLoading: false,
                limit: Number(r) || 10,
                page: Number(i) || 1,
                order,
                reverse,
                filters: module189(y, [
                    "isv",
                    "workspace",
                    "category_id"
                ]),
                selectedRowKeys: []
            });
        }));
    }
});
v = module49(s.prototype, "fetchDetail", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return module44(module41.mark(function* t() {
            let n;
            let r;
            let a;
            let i;
            let s;
            let u;
            let c;
            const f = arguments;
            n = f.length > 0 && f[0] !== undefined ? f[0] : {};
            ({ app_id: r, appId: a, version_id: i, workspace: s, ...u } = n);
            _this.isLoading = true;
            c = yield request.get(_this.getUrl({
                app_id: r || a,
                version_id: i,
                workspace: s
            }), u, {}, _this.reject);
            _this.detail = c || {};
            _this.detail.workspace = s;
            _this.isLoading = false;
        }));
    }
});
m = module49(s.prototype, "create", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return module44(module41.mark(function* t() {
            let n;
            let r;
            let a;
            let i;
            let s;
            const u = arguments;
            n = u.length > 0 && u[0] !== undefined ? u[0] : {};
            ({ app_id: r, version_id: a, workspace: i, ...s } = n);
            yield _this.submitting(request.post(_this.getUrl({
                app_id: r,
                workspace: i,
                version_id: a
            }), s));
        }));
    }
});
g = module49(s.prototype, "update", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return module44(module41.mark(function* t() {
            let n;
            let r;
            let a;
            let i;
            let s;
            const u = arguments;
            n = u.length > 0 && u[0] !== undefined ? u[0] : {};
            ({ app_id: r, version_id: a, workspace: i, ...s } = n);
            yield _this.submitting(request.patch(_this.getUrl({
                app_id: r,
                workspace: i,
                version_id: a
            }), s));
        }));
    }
});
y = module49(s.prototype, "delete", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (n)=>{
            delete n.name;
            await _this.submitting(request.delete(_this.getUrl(n)));
        };
    }
});
module49(s.prototype, "clearSearch", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "clearSearch"), s.prototype);
b = module49(s.prototype, "setSelectRowKeys", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.list.selectedRowKeys = t;
        };
    }
});
export default s;
