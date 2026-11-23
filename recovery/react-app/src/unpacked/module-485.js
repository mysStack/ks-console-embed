import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-30.js";
import "./module-18.js";
import "./module-16.js";
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
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-58.js";
import "./module-41.js";
import "./module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import module_68 from "stores/base";
let l;
l = ((module_68_1)=>{
    module55(r, module_68_1);
    var n = ((e)=>{
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
    })(r);
    function r(...o) {
        let e;
        module36(this, r);
        e = n.call(this, ...o);
        e.module = "edgeappsets";
        e.getUrl = function({ cluster = "", namespace = "", name }) {
            return `/kapis${cluster && `/clusters/${cluster}`}/apps.edgewize.io/v1alpha1${e.getPath({
                namespace
            })}/${e.module}/${name}`;
        };
        e.getResourceUrl = function({ cluster = "", namespace = "" } = {}) {
            return `/kapis${cluster && `/clusters/${cluster}`}/apps.edgewize.io/v1alpha1${e.getPath({
                namespace
            })}/${e.module}`;
        };
        return e;
    }
    module37(r, [
        {
            key: "getPath",
            value: function({ namespace } = {}) {
                let n = "";
                if (namespace) {
                    n += `/namespaces/${namespace}`;
                }
                return n;
            }
        },
        {
            key: "fetchDetail",
            value: async function(t) {
                let n;
                let r;
                this.isLoading = true;
                n = await request.get(`${this.getResourceUrl(t)}/${t.name}`);
                r = {
                    ...t,
                    ...this.mapper(n)
                };
                this.detail = r;
                this.isLoading = false;
                return r;
            }
        },
        {
            key: "create",
            value: function({ cluster = "", ...rest } = {}, a) {
                const i = module26(a, "metadata.name");
                const l = `/apis${cluster && `/clusters/${cluster}`}/apps.edgewize.io/v1alpha1${this.getPath(rest)}/${this.module}/${i}`;
                return this.submitting(request.post(l, a));
            }
        },
        {
            key: "patch",
            value: function(e, t) {
                const { cluster, name } = e;
                const o = `/apis${cluster && `/clusters/${cluster}`}/apps.edgewize.io/v1alpha1${this.getPath(e)}/${this.module}/${name}`;
                return this.submitting(request.patch(o, t));
            }
        },
        {
            key: "delete",
            value: function(e, t) {
                const n = this.getUrl(e);
                return this.submitting(request.delete(n, {
                    delete_workloads: t
                }));
            }
        },
        {
            key: "batchDelete",
            value: function(e, t) {
                const _this = this;
                return this.submitting(Promise.all(e.map((e)=>{
                    const r = _this.list.data.find((t)=>t.name === e);
                    const o = _this.getUrl(r);
                    return request.delete(o, {
                        delete_workloads: t
                    });
                })));
            }
        }
    ]);
    return r;
})(module_68);
module49(l.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchDetail"), l.prototype);
module49(l.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "create"), l.prototype);
module49(l.prototype, "patch", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "patch"), l.prototype);
module49(l.prototype, "delete", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "delete"), l.prototype);
module49(l.prototype, "batchDelete", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "batchDelete"), l.prototype);
export default l;
