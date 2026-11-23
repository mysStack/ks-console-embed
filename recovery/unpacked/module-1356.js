import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-138.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import * as module553 from "./module-553.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import module441 from "./module-441.js";
import module2878 from "./module-2878.js";
let u;
let o;
const O = observer((o = ((e)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.roleStore = new module441;
        e.fetchRoles = function() {
            const e_props = e.props;
            const { cluster, namespace } = e_props;
            return e.roleStore.fetchList({
                cluster,
                namespace,
                limit: -1,
                sortBy: "createTime"
            });
        };
        e.optionRenderer = function(e) {
            return module553.default.createElement("div", {
                className: module2878.option
            }, module553.default.createElement("div", null, e.label), module553.default.createElement("p", null, e.desc));
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.props.namespace) {
                    this.fetchRoles();
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.namespace !== e.namespace && this.props.namespace) {
                    this.fetchRoles();
                }
            }
        },
        {
            key: "render",
            value: function() {
                const e = {
                    ...this.props
                };
                return module553.default.createElement(module186.Select, {
                    options: this.roles,
                    optionRenderer: this.optionRenderer,
                    ...e
                });
            }
        },
        {
            key: "roles",
            get: function() {
                return this.roleStore.list.data.map((item)=>({
                        label: item.name,
                        value: item.name,
                        item,
                        desc: t(module26(item, "description"))
                    }));
            }
        }
    ]);
    return r;
})(module553.Component), module49(o.prototype, "roles", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "roles"), o.prototype), u = o)) || u;
export default O;
