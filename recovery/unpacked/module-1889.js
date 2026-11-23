import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-30.js";
import "./module-18.js";
import "./module-16.js";
import "./module-27.js";
import "./module-138.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import module41 from "./module-41.js";
import module61 from "./module-61.js";
import "./module-58.js";
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
import "./module-45.js";
import "./module-28.js";
import "./module-245.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module14 from "./module-14.js";
import { getFilterString } from "./module-52.js";
import module458 from "./module-458.js";
let v;
let g;
let _;
let y;
let E;
const C = {
    creating: "Creating",
    created: "Creating",
    active: "Running",
    failed: "Failed",
    deleting: "Deleting",
    upgrading: "Upgrading",
    upgraded: "Upgrading",
    deployed: "Running"
};
const P = (e)=>{
    const t = module26(e, "cluster.status");
    return {
        ...e,
        ...e.cluster,
        selector: {
            "application.kubesphere.io/instance": e.cluster.name
        },
        status: C[t]
    };
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
        e.getWatchListUrl = function({ cluster, namespace }) {
            return `${e.baseUrl}${e.getPath({
                namespace,
                cluster
            })}/releases?watch=true`;
        };
        e.getUrl = function({ namespace, cluster, name } = {}) {
            const o = `${e.baseUrl}${e.getPath({
                namespace,
                cluster
            })}/applications`;
            if (name) {
                return `${o}/${name}`;
            }
            return o;
        };
        e.getDeleteUrl = function({ workspace, namespace, cluster, name } = {}) {
            const c = `${e.baseUrl}${e.getDeletePath({
                workspace,
                namespace,
                cluster
            })}/applications`;
            if (name) {
                return `${c}/${name}`;
            }
            return c;
        };
        module65(e, "fetchList", g, module88(e));
        module65(e, "fetchDetail", _, module88(e));
        module65(e, "delete", y, module88(e));
        module65(e, "batchDelete", E, module88(e));
        return e;
    }
    module37(a, [
        {
            key: "getPath",
            value: function({ cluster, namespace }) {
                let r = "";
                if (globals.app.isMultiCluster && cluster) {
                    r += `/klusters/${cluster}`;
                }
                if (namespace) {
                    r += `/namespaces/${namespace}`;
                }
                return r;
            }
        },
        {
            key: "getDeletePath",
            value: function({ workspace, cluster, namespace }) {
                let n = "";
                if (workspace) {
                    n += `/workspaces/${workspace}`;
                }
                if (globals.app.isMultiCluster && cluster) {
                    n += `/clusters/${cluster}`;
                }
                if (namespace) {
                    n += `/namespaces/${namespace}`;
                }
                return n;
            }
        },
        {
            key: "baseUrl",
            get: function() {
                return "kapis/native.helm/v1alpha1";
            }
        }
    ]);
    return a;
})(module458);
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
            let r;
            let s;
            let cluster;
            let namespace;
            let workspace;
            let d;
            let status;
            let order;
            let reverse;
            let filters;
            let v;
            let g;
            let _;
            let y;
            const E = arguments;
            a = E.length > 0 && E[0] !== undefined ? E[0] : {};
            ({ limit: r, page: s, cluster, namespace, workspace, more: d, status, sortBy: order, reverse, ...filters } = a);
            _this.list.isLoading = true;
            v = {
                conditions: getFilterString({
                    status
                }) || undefined
            };
            if (!(order || reverse !== undefined)) {
                order = "status_time";
            }
            if (!module63(filters)) {
                if (g = getFilterString(filters)) {
                    v.conditions += `,${g}`;
                }
            }
            if (r !== Infinity) {
                v.paging = `limit=${r || 10},page=${s || 1}`;
            }
            if (order) {
                v.orderBy = order;
            }
            if (reverse) {
                v.reverse = true;
            }
            _ = yield request.get(_this.getUrl({
                namespace,
                cluster
            }), v);
            y = (_.items || []).map((e)=>({
                    ...P(e),
                    workspace,
                    cluster
                }));
            Object.assign(_this.list, {
                data: d ? [].concat(module61(_this.list.data), module61(y)) : y,
                total: _.total_count || 0,
                limit: Number(r) || 10,
                page: Number(s) || 1,
                order,
                reverse,
                filters,
                selectedRowKeys: []
            });
            _this.list.isLoading = false;
            return y;
        }));
    }
});
_ = module49(v.prototype, "fetchDetail", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            let workspace;
            let namespace;
            let cluster;
            let s;
            let l;
            workspace = a.workspace;
            namespace = a.namespace;
            cluster = a.cluster;
            s = a.name;
            _this.isLoading = true;
            l = await request.get(_this.getUrl({
                namespace,
                cluster,
                name: s
            }));
            _this.detail = {
                ...P(l),
                workspace,
                namespace,
                cluster
            };
            _this.isLoading = false;
        };
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
        return function({ name, cluster, workspace, zone }) {
            return _this.submitting(request.delete(_this.getDeleteUrl({
                namespace: zone,
                name,
                cluster,
                workspace
            })));
        };
    }
});
E = module49(v.prototype, "batchDelete", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t, { namespace, cluster, workspace }) {
            return _this.submitting(Promise.all(t.map((name)=>request.delete(_this.getDeleteUrl({
                    namespace,
                    cluster,
                    workspace,
                    name
                })))));
        };
    }
});
export default v;
