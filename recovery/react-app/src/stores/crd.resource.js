import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-196.js";
import "unpacked/module-7.js";
import "unpacked/module-109.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import module58 from "unpacked/module-58.js";
import "utils/babel-helpers/asyncToGenerator";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module14 from "unpacked/module-14.js";
import module105 from "utils/object.mapper";
let o;
let i;
let c;
o = (()=>{
    function e(t) {
        const _this = this;
        const { module, kind, apiVersion } = t;
        module36(this, e);
        module65(this, "list", i, this);
        this.getListUrl = function(e = {}) {
            return `${_this.apiVersion}${_this.getPath(e)}/${_this.module}`;
        };
        this.getDetailUrl = function(e = {}) {
            return `${_this.getListUrl(e)}/${e.name}`;
        };
        module65(this, "submitting", c, this);
        this.module = module;
        this.kind = kind;
        this.apiVersion = apiVersion;
    }
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
            key: "fetchList",
            value: async function() {
                let t;
                let cluster;
                let namespace;
                let o;
                let i;
                let c;
                let s;
                let f;
                let d;
                const _this = this;
                const m = arguments;
                t = m.length > 0 && m[0] !== undefined ? m[0] : {};
                ({ cluster, namespace, page: o = this.list.page, name: i } = t);
                c = module58(t, [
                    "cluster",
                    "namespace",
                    "page",
                    "name"
                ]);
                this.list.isLoading = true;
                if ((s = c).limit) {
                    this.list.limit = s.limit;
                } else {
                    s.limit = this.list.limit;
                }
                if (this.list.continues[o]) {
                    s.continue = this.list.continues[o];
                }
                if (i) {
                    s.fieldSelector = `metadata.name=${i}`;
                }
                f = await request.get(this.getListUrl({
                    cluster,
                    namespace
                }), s);
                d = f.items.map((e)=>({
                        cluster,
                        namespace,
                        ..._this.mapper(e)
                    }));
                this.list.continues[Number(o) + 1] = f.metadata.continue;
                if (o === 1) {
                    this.list.total = d.length + (f.metadata.remainingItemCount || 0);
                }
                module14.extendObservable(this.list, {
                    data: d,
                    page: Number(o),
                    name: i
                });
                this.list.isLoading = false;
                return this.list;
            }
        },
        {
            key: "update",
            value: async function(t, a) {
                let r;
                let l;
                r = await request.get(this.getDetailUrl(t));
                if (l = module26(r, "metadata.resourceVersion")) {
                    module74(a, "metadata.resourceVersion", l);
                }
                return this.submitting(request.put(this.getDetailUrl(t), a));
            }
        },
        {
            key: "patch",
            value: function(e, t) {
                return this.submitting(request.patch(this.getDetailUrl(e), t));
            }
        },
        {
            key: "delete",
            value: function(e) {
                return this.submitting(request.delete(this.getDetailUrl(e)));
            }
        },
        {
            key: "mapper",
            get: function() {
                return module105.customresourcedefinitions;
            }
        }
    ]);
    return e;
})();
i = module49(o.prototype, "list", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: [],
            page: 1,
            limit: 10,
            total: 0,
            continues: {
                1: ""
            },
            isLoading: true
        };
    }
});
c = module49(o.prototype, "submitting", [
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
module49(o.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchList"), o.prototype);
module49(o.prototype, "update", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "update"), o.prototype);
module49(o.prototype, "patch", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "patch"), o.prototype);
module49(o.prototype, "delete", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "delete"), o.prototype);
export default o;
