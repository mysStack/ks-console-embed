import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-16.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module14 from "./module-14.js";
import module_120 from "stores/base.list";
let n;
n = ((module_120_1)=>{
    module55(a, module_120_1);
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
    function a() {
        module36(this, a);
        return t.apply(this, arguments);
    }
    module37(a, [
        {
            key: "addItem",
            value: function(e) {
                this.data = [].concat(module61(this.data), [
                    e
                ]);
            }
        },
        {
            key: "deleteItem",
            value: function(e) {
                this.data = this.data.filter((t)=>t.name !== e.name);
            }
        }
    ]);
    return a;
})(module_120);
module49(n.prototype, "addItem", [
    module14.action
], Object.getOwnPropertyDescriptor(n.prototype, "addItem"), n.prototype);
module49(n.prototype, "deleteItem", [
    module14.action
], Object.getOwnPropertyDescriptor(n.prototype, "deleteItem"), n.prototype);
export default n;
