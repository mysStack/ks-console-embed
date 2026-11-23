import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
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
import "./module-58.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module68 from "./module-68.js";
import module26 from "./module-26.js";
const g = {
    headers: {
        "content-type": "application/x-www-form-urlencoded"
    }
};
const y = ((e)=>{
    module55(l, e);
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
    })(l);
    function l(...a_1) {
        let e;
        module36(this, l);
        e = r.call(this, ...a_1);
        e.module = "ippools";
        e.getNetworkUrl = "kapis/crd.projectcalico.org/v1";
        e.getResourceUrl = function(t = {}) {
            return `${e.getNetworkUrl}/${e.getPath(t)}/${e.module}`;
        };
        e.migrate = function(t, oldippool, newippool) {
            const n = `${e.getNetworkUrl}/${e.getPath({
                cluster: t
            })}/ippoolmigrations`;
            return e.submitting(request.post(n, {
                oldippool,
                newippool
            }, g));
        };
        e.getNetworkResourceUrl = function(t = {}) {
            return `${e.getNetworkUrl}/${e.module}/${t.name}/migrate`;
        };
        return e;
    }
    module37(l, [
        {
            key: "fetchMigrateIpPool",
            value: async function() {
                let t;
                let a;
                let r;
                let name;
                let o;
                let i;
                let c;
                const _this = this;
                const f = arguments;
                t = f.length > 0 && f[0] !== undefined ? f[0] : {};
                ({ cluster: a, namespace: r, name, ...o } = t);
                i = await request.get(this.getNetworkResourceUrl({
                    name
                }), this.getFilterParams(o));
                c = (module26(i, "items") || []).map((e)=>({
                        cluster: a,
                        namespace: r,
                        ..._this.mapper(e)
                    }));
                return c;
            }
        },
        {
            key: "fetchNamespacesIpPools",
            value: async function() {
                let t;
                let a;
                let r;
                let l;
                let o;
                const _this = this;
                const c = arguments;
                t = c.length > 0 && c[0] !== undefined ? c[0] : {};
                ({ namespace: a, cluster: r, ...l } = t);
                o = await request.get(`${this.getNetworkUrl}${this.getPath({
                    namespace: a,
                    cluster: r
                })}/${this.module}`, this.getFilterParams(l));
                return o.map((e)=>({
                        cluster: r,
                        namespace: a,
                        ..._this.mapper(e)
                    }));
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return this.getNetworkUrl;
            }
        }
    ]);
    return l;
})(module68);
export default y;
