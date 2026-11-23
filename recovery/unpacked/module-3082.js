import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-18.js";
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
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import Module814 from "./module-814.js";
import Module1059 from "./module-1059.js";
import module1369 from "./module-1369.js";
const g = ((Component_1)=>{
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
    function a(...u) {
        let e;
        module36(this, a);
        e = t.call(this, ...u);
        e.handleAdd = function(t) {
            const e_props = e.props;
            const a_value = e_props.value;
            e_props.onChange([].concat(module61(a_value), [
                t
            ]));
        };
        e.handleDelete = function(t) {
            const e_props = e.props;
            const a_value = e_props.value;
            e_props.onChange(a_value.filter((e)=>e !== t));
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { value, placeholder, validate, className } = props;
                return <div className={module3(module1369.wrapper, className)}><Module1059 className={module1369.wrapper} placeholder={placeholder} validate={validate} onAdd={this.handleAdd}/>{!module63(value) && <div className={module1369.listWrapper}><Module814>{value.map((t)=><Module814.Item key={t} className={module1369.listItem} title={t} onDelete={function() {
                        return _this.handleDelete(t);
                    }}/>)}</Module814></div>}</div>;
            }
        }
    ]);
    return a;
})(Component);
export default g;
g.propTypes = {
    value: module1.array,
    onChange: module1.func
};
g.defaultProps = {
    value: [],
    onChange: function() {}
};
