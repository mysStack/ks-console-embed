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
let i;
let c;
i = ((e)=>{
    module55(n, e);
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(t = "namespacenetworkpolicies") {
        let e;
        module36(this, n);
        e = r.call(this, t);
        module65(e, "list", c, module88(e));
        e.getResourceUrl = function(t) {
            return `/kapis/networking.k8s.io/v1${e.getPath(t)}/${e.module}`;
        };
        return e;
    }
    module37(n, [
        {
            key: "fetchList",
            value: async function() {
                let n;
                let cluster;
                let namespace;
                let l;
                let s;
                let d;
                let f;
                let p;
                let m;
                const _this = this;
                const g = arguments;
                n = g.length > 0 && g[0] !== undefined ? g[0] : {};
                ({ cluster, namespace, page: l = this.list.page } = n);
                s = module58(n, [
                    "cluster",
                    "namespace",
                    "page"
                ]);
                this.list.isLoading = true;
                d = s;
                f = s.name;
                if (d.limit) {
                    this.list.limit = d.limit;
                } else {
                    d.limit = this.list.limit;
                }
                if (this.list?.continues?.[l]) {
                    d.continue = this.list.continues[l];
                } else {
                    this.list.continues = {
                        1: ""
                    };
                }
                d.page = l;
                p = await request.get(this.getResourceUrl({
                    cluster,
                    namespace
                }), d);
                m = p.items.map((e)=>({
                        cluster,
                        namespace,
                        ..._this.mapper(e)
                    }));
                this.list.continues[Number(l) + 1] = p.metadata.continue || "";
                if (Number(l) === 1) {
                    this.list.total = m.length + (p.metadata.remainingItemCount || 0);
                }
                if (f) {
                    this.list.filters = {
                        name: f
                    };
                }
                module14.extendObservable(this.list, {
                    data: m,
                    page: Number(l),
                    name: f
                });
                this.list.isLoading = false;
                return this.list;
            }
        }
    ]);
    return n;
})(module68);
c = module49(i.prototype, "list", [
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
module49(i.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchList"), i.prototype);
export default i;
