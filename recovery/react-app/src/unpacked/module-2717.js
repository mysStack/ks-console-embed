import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module58 from "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import Module868 from "components/Inputs/ObjectInput";
import module1625 from "./module-1625.js";
const h = ((Component_1)=>{
    module55(r, Component_1);
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
        e.handleChange = function(t) {
            const e_props = e.props;
            const a_index = e_props.index;
            e_props.onChange(a_index, t);
        };
        e.handleDelete = function() {
            const e_props = e.props;
            const t_index = e_props.index;
            e_props.onDelete(t_index);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { readOnly, onDelete: _onDelete, onChange: _onChange, keyProps = {}, valueProps = {}, ...rest } = props;
                const keyProps_component = keyProps.component;
                const F = keyProps_component === undefined ? module186.Input : keyProps_component;
                const h = module58(keyProps, [
                    "component"
                ]);
                const valueProps_component = valueProps.component;
                const Y = valueProps_component === undefined ? module186.Input : valueProps_component;
                const g = module58(valueProps, [
                    "component"
                ]);
                return <div className={module1625.item}><Module868 {...rest} onChange={this.handleChange}>{<F name="key" placeholder={t("KEY")} readOnly={readOnly} {...h}/>}{<Y name="value" placeholder={t("VALUE")} readOnly={readOnly} {...g}/>}</Module868>{!readOnly && <module186.Button type="flat" icon="trash" className={module1625.delete} onClick={this.handleDelete}/>}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default h;
