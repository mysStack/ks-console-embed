import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-31.js";
import module58 from "./module-58.js";
import "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module68 from "./module-68.js";
import module14 from "./module-14.js";
let o;
let i;
o = ((e)=>{
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
    function r(t = "namespacenetworkpolicies") {
        let e;
        module36(this, r);
        e = a.call(this, t);
        module65(e, "list", i, module88(e));
        e.getResourceUrl = function(t) {
            return `/kapis/network.kubesphere.io/v1alpha1${e.getPath(t)}/${e.module}`;
        };
        return e;
    }
    module37(r, [
        {
            key: "fetchListOut",
            value: async function() {
                let r;
                let cluster;
                let namespace;
                let c;
                let name;
                let f;
                let d;
                let p;
                let m;
                const _this = this;
                const v = arguments;
                r = v.length > 0 && v[0] !== undefined ? v[0] : {};
                ({ cluster, namespace, page: c = this.list.page, name } = r);
                f = module58(r, [
                    "cluster",
                    "namespace",
                    "page",
                    "name"
                ]);
                this.list.isLoading = true;
                if ((d = f).limit) {
                    this.list.limit = d.limit;
                } else {
                    d.limit = this.list.limit;
                }
                if (this.list?.continues?.[c]) {
                    d.continue = this.list.continues[c];
                } else {
                    this.list.continues = {
                        1: ""
                    };
                }
                d.page = c;
                p = await request.get(this.getResourceUrl({
                    cluster,
                    namespace
                }), d);
                m = p.items.map((e)=>({
                        cluster,
                        namespace,
                        ..._this.mapper(e)
                    }));
                this.list.continues[Number(c) + 1] = p.metadata.continue;
                if (Number(c) === 1) {
                    this.list.total = m.length + (p.metadata.remainingItemCount || 0);
                }
                module14.extendObservable(this.list, {
                    data: m,
                    page: Number(c),
                    name
                });
                this.list.isLoading = false;
                return this.list;
            }
        }
    ]);
    return r;
})(module68);
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
module49(o.prototype, "fetchListOut", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchListOut"), o.prototype);
export default o;
