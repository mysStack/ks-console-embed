import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import { ICON_TYPES } from "./module-72.js";
import module1607 from "./module-1607.js";
const h = ((Component_1)=>{
    module55(a, Component_1);
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
        e.handleClick = function() {
            const e_props = e.props;
            e_props.onClick(e_props.detail);
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { module, detail, selected } = props;
                return <div className={module3(module1607.item, module31({}, module1607.selected, selected))} onClick={this.handleClick}><module186.Icon name={ICON_TYPES[module]} size={16}/><div className={module1607.ring}/><span className={module1607.name}>{detail.name}</span></div>;
            }
        }
    ]);
    return a;
})(Component);
export default h;
