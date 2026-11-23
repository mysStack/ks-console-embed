import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import "./module-58.js";
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
import module458 from "./module-458.js";
import module120 from "./module-120.js";
let l;
let u;
let o;
let i;
let c;
l = ((e)=>{
    module55(r, e);
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
        e.resourceName = "repos";
        e.defaultStatus = [
            "active"
        ];
        module65(e, "events", u, module88(e));
        e.getUrl = function({ workspace, repo_id, name } = {}) {
            let e_baseUrl = e.baseUrl;
            if (workspace) {
                e_baseUrl += `/workspaces/${workspace}`;
            }
            if (repo_id) {
                return `${e_baseUrl}/repos/${repo_id}/${name || ""}`;
            }
            return `${e_baseUrl}/repos`;
        };
        e.getWatchListUrl = function({ workspace } = {}) {
            return `apis/application.kubesphere.io/v1alpha1/watch/helmrepos?labelSelector=kubesphere.io/workspace=${workspace}`;
        };
        module65(e, "fetchDetail", o, module88(e));
        module65(e, "update", i, module88(e));
        module65(e, "delete", c, module88(e));
        return e;
    }
    module37(r, [
        {
            key: "validate",
            value: function({ workspace, ...rest }) {
                return request.post(`${this.getUrl({
                    workspace
                })}?validate=true`, rest);
            }
        },
        {
            key: "index",
            value: function({ workspace, repo_id }) {
                if (repo_id) {
                    return request.post(this.getUrl({
                        workspace,
                        repo_id,
                        name: "action"
                    }), {
                        action: "index"
                    });
                }
            }
        },
        {
            key: "fetchEvents",
            value: async function(t) {
                let a;
                let r;
                let l;
                a = t.workspace;
                r = t.repo_id;
                this.events.isLoading = true;
                l = await request.get(this.getUrl({
                    workspace: a,
                    repo_id: r,
                    name: "events"
                }), {});
                this.events.update({
                    data: module26(l, "items", []),
                    total: module26(l, "total_count", 0)
                });
                this.events.isLoading = false;
            }
        },
        {
            key: "setSelectRowKeys",
            value: function(e) {
                this.list.selectedRowKeys = e;
            }
        }
    ]);
    return r;
})(module458);
u = module49(l.prototype, "events", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return new module120;
    }
});
o = module49(l.prototype, "fetchDetail", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return module44(module41.mark(function* t() {
            let a;
            let r;
            let l;
            let u;
            const o = arguments;
            a = o.length > 0 && o[0] !== undefined ? o[0] : {};
            r = a.workspace;
            l = a.repo_id;
            _this.isLoading = true;
            u = yield request.get(_this.getUrl({
                workspace: r,
                repo_id: l
            }));
            _this.detail = u || {};
            _this.detail.workspace = r;
            _this.isLoading = false;
        }));
    }
});
module49(l.prototype, "validate", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "validate"), l.prototype);
module49(l.prototype, "index", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "index"), l.prototype);
module49(l.prototype, "fetchEvents", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchEvents"), l.prototype);
i = module49(l.prototype, "update", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return module44(module41.mark(function* t() {
            let a;
            let workspace;
            let repo_id;
            let u;
            const o = arguments;
            a = o.length > 0 && o[0] !== undefined ? o[0] : {};
            ({ workspace, repo_id, ...u } = a);
            yield _this.submitting(request.patch(_this.getUrl({
                workspace,
                repo_id
            }), u));
        }));
    }
});
c = module49(l.prototype, "delete", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ workspace, repo_id }) {
            return _this.submitting(request.delete(_this.getUrl({
                workspace,
                repo_id
            }), {}));
        };
    }
});
module49(l.prototype, "setSelectRowKeys", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "setSelectRowKeys"), l.prototype);
export default l;
