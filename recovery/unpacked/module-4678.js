import "./module-15.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module332 from "./module-332.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-553.js";
import module1543 from "./module-1543.js";
import Module4679 from "./module-4679.js";
import module1905 from "./module-1905.js";
const m = ((e)=>{
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
    function a() {
        module36(this, a);
        return t.apply(this, arguments);
    }
    module37(a, [
        {
            key: "renderEmpty",
            value: function() {
                return null;
            }
        },
        {
            key: "renderContainers",
            value: function() {
                const _this = this;
                const props = this.props;
                const { value, disabled } = props;
                return <ul className={module1905.list}>{value.map((t)=><Module4679 container={t} key={t.name} onEdit={_this.handleEdit} onDelete={_this.handleDelete} disabled={disabled}/>)}</ul>;
            }
        },
        {
            key: "renderInitContainers",
            value: function() {
                const _this = this;
                const props = this.props;
                const initContainers = props.specTemplate.initContainers;
                const r = initContainers === undefined ? [] : initContainers;
                const t_disabled = props.disabled;
                return r.map((t)=><Module4679 container={t} key={t.name} type="init" onEdit={_this.handleEdit} onDelete={_this.handleDelete} disabled={t_disabled}/>);
            }
        },
        {
            key: "renderAdd",
            value: function() {
                if (this.props.disabled) {
                    return null;
                }
                return module332(module51(a.prototype), "renderAdd", this).call(this);
            }
        }
    ]);
    return a;
})(module1543);
export default m;
