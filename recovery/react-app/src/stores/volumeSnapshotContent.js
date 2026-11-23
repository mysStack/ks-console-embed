import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-27.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-58.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import module26 from "unpacked/module-26.js";
import module14 from "unpacked/module-14.js";
import { LIST_DEFAULT_ORDER } from "utils/constants";
import module_68 from "stores/base";
let i;
i = ((module_68_1)=>{
    module55(o, module_68_1);
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
    })(o);
    function o(...a) {
        let e;
        module36(this, o);
        e = r.call(this, ...a);
        e.module = "volumesnapshotcontents";
        e.getResourceUrl = function(t) {
            return `kapis/snapshot.storage.k8s.io/v1${e.getPath(t)}/${e.module}`;
        };
        return e;
    }
    module37(o, [
        {
            key: "getPath",
            value: function({ cluster } = {}) {
                let a = "";
                if (cluster) {
                    a += `/klusters/${cluster}`;
                }
                return a;
            }
        },
        {
            key: "fetchDetail",
            value: async function(t) {
                let a;
                let r;
                this.isLoading = true;
                a = await request.get(this.getDetailUrl(t));
                r = {
                    ...t,
                    ...this.mapper(a)
                };
                this.detail = r;
                this.isLoading = false;
                return r;
            }
        },
        {
            key: "fetchList",
            value: async function() {
                let t;
                let cluster;
                let workspace;
                let namespace;
                let i;
                let devops;
                let s;
                let f;
                let d;
                let p;
                const _this = this;
                const h = arguments;
                t = h.length > 0 && h[0] !== undefined ? h[0] : {};
                ({ cluster, workspace, namespace, more: i, devops, ...s } = t);
                this.list.isLoading = true;
                f = [];
                if (!(s.sortBy || s.ascending !== undefined)) {
                    s.sortBy = LIST_DEFAULT_ORDER[this.module] || "createTime";
                }
                if (!(s.limit !== Infinity && s.limit !== -1)) {
                    s.limit = -1;
                    s.page = 1;
                }
                if (s.readyToUse) {
                    f.push(`status.readyToUse=${s.readyToUse}`);
                }
                f = f.join(",") || undefined;
                s.fieldSelector = f;
                s.limit = s.limit || 10;
                d = await request.get(this.getResourceUrl({
                    cluster,
                    workspace,
                    namespace,
                    devops
                }), this.getFilterParams(s));
                p = (module26(d, "items") || []).map((e)=>({
                        cluster,
                        namespace,
                        workspace,
                        ..._this.mapper(e)
                    }));
                this.list.update({
                    data: i ? [].concat(module61(this.list.data), module61(p)) : p,
                    total: d.totalItems || d.totalCount || d.total_count || p.length || 0,
                    ...s,
                    limit: Number(s.limit) || 10,
                    page: Number(s.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return p;
            }
        },
        {
            key: "resourceKind",
            get: function() {
                return "VolumeSnapshotContent";
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "apis/snapshot.storage.k8s.io/v1";
            }
        }
    ]);
    return o;
})(module_68);
module49(i.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchDetail"), i.prototype);
module49(i.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchList"), i.prototype);
export default i;
