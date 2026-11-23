import "./module-15.js";
import "./module-5.js";
import "./module-1154.js";
import "./module-18.js";
import "./module-1155.js";
import "./module-16.js";
import "./module-98.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module96 from "utils/babel-helpers/slicedToArray";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module68 from "stores/base";
import module14 from "./module-14.js";
let l;
let u;
let o;
l = ((e)=>{
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
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        module65(e, "tagsGroup", u, module88(e));
        e.group = [
            "production",
            "development",
            "testing",
            "demo"
        ];
        e.getListUrl = function() {
            return "kapis/resources.kubesphere.io/v1alpha3/labels";
        };
        module65(e, "fetchGroupList", o, module88(e));
        return e;
    }
    module37(a, [
        {
            key: "getDetailUrl",
            value: function({ name }) {
                return `kapis/resources.kubesphere.io/v1alpha3/labels/${name}`;
            }
        },
        {
            key: "getActionUrl",
            value: function(e) {
                return `/kapis/cluster.kubesphere.io/v1alpha1/labels${e?.name ? `/${e.name}` : ""}`;
            }
        },
        {
            key: "create",
            value: function(e) {
                return this.submitting(request.post(this.getActionUrl(), e));
            }
        },
        {
            key: "update",
            value: function(e, t) {
                return this.submitting(request.put(this.getActionUrl(t), e));
            }
        },
        {
            key: "delete",
            value: function(e) {
                return this.submitting(request.delete(this.getActionUrl(), e));
            }
        },
        {
            key: "bind",
            value: function(e) {
                return this.submitting(request.post("/kapis/cluster.kubesphere.io/v1alpha1/labelbindings", e));
            }
        },
        {
            key: "unBind",
            value: function(e, t) {
                return this.submitting(request.put(`${this.getActionUrl(t)}?action=unbind`, e));
            }
        },
        {
            key: "tags",
            get: function() {
                return Object.entries(this.tagsGroup).flatMap((e)=>{
                    const t = module96(e, 2);
                    const label = t[0];
                    return t[1].map((e)=>({
                            label,
                            value: e.value,
                            name: e.id
                        }));
                });
            }
        }
    ]);
    return a;
})(module68);
u = module49(l.prototype, "tagsGroup", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
o = module49(l.prototype, "fetchGroupList", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return module44(module41.mark(function* t() {
            let a;
            a = yield request.get(_this.getActionUrl());
            _this.tagsGroup = a;
            return a;
        }));
    }
});
module49(l.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "create"), l.prototype);
module49(l.prototype, "update", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "update"), l.prototype);
module49(l.prototype, "delete", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "delete"), l.prototype);
module49(l.prototype, "bind", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "bind"), l.prototype);
module49(l.prototype, "unBind", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "unBind"), l.prototype);
export default l;
