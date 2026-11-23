import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
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
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import module14 from "unpacked/module-14.js";
import module26 from "unpacked/module-26.js";
import module105 from "utils/object.mapper";
import module120 from "stores/base.list";
import module_854 from "unpacked/module-854.js";
let u;
u = ((module_854_1)=>{
    module55(o, module_854_1);
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
    })(o);
    function o(...r) {
        let e;
        module36(this, o);
        e = n.call(this, ...r);
        e.roleTemplatesDetail = new module120;
        return e;
    }
    module37(o, [
        {
            key: "fetchDetail",
            value: async function(t) {
                let r;
                let n;
                let o;
                let u;
                let c;
                r = t.cluster;
                n = t.group;
                o = t.name;
                this.isLoading = true;
                u = await request.get(`${this.getDetailUrl({
                    cluster: r,
                    name: n
                })}/roles/${o}`);
                c = {
                    cluster: r,
                    group: n,
                    name: o,
                    ...this.mapper(u)
                };
                this.detail = c;
                this.isLoading = false;
                return c;
            }
        },
        {
            key: "fetchRoleTemplatesToDetail",
            value: async function(t) {
                let r;
                let n;
                let o;
                r = t.cluster;
                n = t.group;
                this.roleTemplatesDetail.isLoading = true;
                o = await request.get(`${this.getDetailUrl({
                    cluster: r,
                    name: n
                })}/roles?labelSelector=iam.kubesphere.io/role-template=true`);
                this.roleTemplatesDetail.update({
                    data: module26(o, "items", []).map(this.mapper),
                    total: o.totalItems || o.total_count || 0,
                    isLoading: false
                });
            }
        },
        {
            key: "edgeNodeMapper",
            get: function() {
                return module105.nodegrouproles;
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "/kapis/iam.kubesphere.io/v1alpha2";
            }
        },
        {
            key: "mapper",
            get: function() {
                return module105.roles;
            }
        }
    ]);
    return o;
})(module_854);
module49(u.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchDetail"), u.prototype);
module49(u.prototype, "fetchRoleTemplatesToDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchRoleTemplatesToDetail"), u.prototype);
export default u;
