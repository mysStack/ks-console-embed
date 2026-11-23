import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-138.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-38.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-58.js";
import module41 from "unpacked/module-41.js";
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
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-245.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module14 from "unpacked/module-14.js";
import { getFilterString, joinSelector } from "utils/index";
import { CLUSTER_QUERY_STATUS } from "configs/openpitrix/app";
import module443 from "stores/service";
import module452 from "stores/pod";
import module458 from "stores/openpitrix/base";
let v;
let g;
let y;
let E;
let b;
let _;
let O;
let S;
let C;
const L = {
    creating: "Creating",
    created: "Creating",
    active: "Running",
    failed: "Failed",
    deleting: "Deleting",
    upgrading: "Upgrading",
    upgraded: "Upgrading"
};
const x = (e)=>{
    const t = module26(e, "cluster.status");
    return {
        ...e,
        ...e.cluster,
        selector: {
            "application.kubesphere.io/instance": e.cluster.name
        },
        status: L[t]
    };
};
v = ((e)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.resourceName = "applications";
        e.defaultStatus = CLUSTER_QUERY_STATUS;
        e.serviceStore = new module443;
        e.podStore = new module452;
        module65(e, "components", g, module88(e));
        e.getWatchListUrl = function({ cluster, namespace } = {}) {
            return `apis/application.kubesphere.io/v1alpha1/watch/helmreleases?labelSelector=${joinSelector({
                "kubesphere.io/cluster": globals.app.isMultiCluster ? cluster : null,
                "kubesphere.io/namespace": namespace
            })}`;
        };
        e.getUrl = function({ workspace, namespace, cluster, cluster_id } = {}) {
            const u = `${e.baseUrl}${e.getPath({
                workspace,
                namespace,
                cluster
            })}/applications`;
            if (cluster_id) {
                return `${u}/${cluster_id}`;
            }
            return u;
        };
        module65(e, "env", y, module88(e));
        module65(e, "fetchList", E, module88(e));
        module65(e, "fetchDetail", b, module88(e));
        module65(e, "update", _, module88(e));
        module65(e, "patch", O, module88(e));
        module65(e, "delete", S, module88(e));
        module65(e, "batchDelete", C, module88(e));
        return e;
    }
    module37(r, [
        {
            key: "upgrade",
            value: async function(t, a) {
                let r;
                let n;
                let l;
                let o;
                r = a.workspace;
                n = a.namespace;
                l = a.cluster;
                o = a.cluster_id;
                return this.submitting(request.post(this.getUrl({
                    workspace: r,
                    namespace: n,
                    cluster: l,
                    cluster_id: o
                }), t));
            }
        }
    ]);
    return r;
})(module458);
g = module49(v.prototype, "components", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: [],
            total: 0,
            isLoading: true
        };
    }
});
y = module49(v.prototype, "env", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: {},
            isLoading: false
        };
    }
});
E = module49(v.prototype, "fetchList", [
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
            let o;
            let cluster;
            let namespace;
            let workspace;
            let f;
            let d;
            let order;
            let reverse;
            let filters;
            let v;
            let g;
            let y;
            let E;
            const b = arguments;
            a = b.length > 0 && b[0] !== undefined ? b[0] : {};
            ({ limit: r, page: o, cluster, namespace, workspace, more: f, status: d, sortBy: order, reverse, ...filters } = a);
            _this.list.isLoading = true;
            v = {
                conditions: getFilterString({
                    status: d || _this.defaultStatus
                })
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
                v.paging = `limit=${r || 10},page=${o || 1}`;
            }
            if (order) {
                v.orderBy = order;
            }
            if (reverse) {
                v.reverse = true;
            }
            y = yield request.get(_this.getUrl({
                workspace,
                namespace,
                cluster
            }), v);
            E = (y.items || []).map((e)=>({
                    ...x(e),
                    workspace,
                    cluster
                }));
            Object.assign(_this.list, {
                data: f ? [].concat(module61(_this.list.data), module61(E)) : E,
                total: y.total_count || 0,
                limit: Number(r) || 10,
                page: Number(o) || 1,
                order,
                reverse,
                filters,
                selectedRowKeys: []
            });
            _this.list.isLoading = false;
            return E;
        }));
    }
});
b = module49(v.prototype, "fetchDetail", [
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
            let o;
            let i;
            r = a.workspace;
            n = a.namespace;
            l = a.cluster;
            o = a.id;
            _this.isLoading = true;
            i = await request.get(_this.getUrl({
                workspace: r,
                namespace: n,
                cluster: l,
                cluster_id: o
            }));
            _this.detail = {
                ...x(i),
                workspace: r,
                namespace: n,
                cluster: l
            };
            _this.isLoading = false;
        };
    }
});
module49(v.prototype, "upgrade", [
    module14.action
], Object.getOwnPropertyDescriptor(v.prototype, "upgrade"), v.prototype);
_ = module49(v.prototype, "update", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ cluster_id, cluster, workspace, zone, ...rest }) {
            return _this.submitting(request.patch(_this.getUrl({
                namespace: zone,
                cluster_id,
                cluster,
                workspace
            }), rest));
        };
    }
});
O = module49(v.prototype, "patch", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ cluster_id, cluster, workspace, zone }, a) {
            return _this.submitting(request.patch(_this.getUrl({
                namespace: zone,
                cluster_id,
                cluster,
                workspace
            }), a));
        };
    }
});
S = module49(v.prototype, "delete", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ cluster_id, cluster, workspace, zone }) {
            return _this.submitting(request.delete(_this.getUrl({
                namespace: zone,
                cluster_id,
                cluster,
                workspace
            })));
        };
    }
});
C = module49(v.prototype, "batchDelete", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t, { namespace, cluster, workspace }) {
            return _this.submitting(Promise.all(t.map((cluster_id)=>request.delete(_this.getUrl({
                    namespace,
                    cluster,
                    workspace,
                    cluster_id
                })))));
        };
    }
});
export default v;
