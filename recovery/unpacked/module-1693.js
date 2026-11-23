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
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module105 from "./module-105.js";
import module14 from "./module-14.js";
import module_854 from "./module-854.js";
let l;
function h(e) {
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
}
l = ((module_854_1)=>{
    module55(s, module_854_1);
    var l = h(s);
    function s() {
        module36(this, s);
        return l.apply(this, arguments);
    }
    module37(s, [
        {
            key: "addMember",
            value: async function(t) {
                let a;
                let r;
                let l;
                a = t.cluster;
                r = t.group;
                l = t.data;
                return this.submitting(request.post(`${this.getDetailUrl({
                    cluster: a,
                    name: r
                })}/members`, l));
            }
        },
        {
            key: "removeMember",
            value: async function(t) {
                let a;
                let r;
                let l;
                a = t.cluster;
                r = t.group;
                l = t.name;
                return this.submitting(request.delete(`${this.getDetailUrl({
                    cluster: a,
                    name: r
                })}/members/${l}`));
            }
        },
        {
            key: "updateMember",
            value: async function(t) {
                let a;
                let r;
                let l;
                let u;
                a = t.cluster;
                r = t.group;
                l = t.name;
                u = t.data;
                return this.submitting(request.put(`${this.getDetailUrl({
                    cluster: a,
                    name: r
                })}/members/${l}`, u));
            }
        },
        {
            key: "edgeNodeMapper",
            get: function() {
                return module105.nodegroupmembers;
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "/kapis/iam.kubesphere.io/v1alpha2";
            }
        }
    ]);
    return s;
})(module_854);
module49(l.prototype, "addMember", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "addMember"), l.prototype);
module49(l.prototype, "removeMember", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "removeMember"), l.prototype);
module49(l.prototype, "updateMember", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "updateMember"), l.prototype);
export default l;
