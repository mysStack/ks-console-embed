import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-18.js";
import "./module-16.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import { getDisplayName } from "./module-52.js";
import module2630 from "./module-2630.js";
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
        e.handleNameChange = function(name) {
            e.props.onChange({
                name
            });
        };
        e.handleKeyChange = function(key) {
            const e_props = e.props;
            const a_value = e_props.value;
            e_props.onChange({
                name: a_value.name,
                key
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "getResourceOptions",
            value: function() {
                return this.props.secrets.map((e)=>({
                        label: getDisplayName(e),
                        value: e.name
                    }));
            }
        },
        {
            key: "getKeysOptions",
            value: function() {
                const props = this.props;
                const e_value = props.value;
                const a = props.secrets.find((e)=>e.name === e_value.name);
                if (a) {
                    return Object.keys(a.data || {}).map((e)=>({
                            label: e,
                            value: e
                        }));
                }
                return [];
            }
        },
        {
            key: "render",
            value: function() {
                const { name, value = {} } = this.props;
                return <div className={module2630.wrapper}><module186.Select name="name" key={`${name}.name`} value={value.name} prefixIcon={`${t("SECRET")}: `} options={this.getResourceOptions()} onChange={this.handleNameChange} placeholder=" "/><module186.Select name="key" key={`${name}.key`} value={value.key} prefixIcon={`${t("KEY")}: `} options={this.getKeysOptions()} onChange={this.handleKeyChange} placeholder=" "/></div>;
            }
        }
    ]);
    return r;
})(Component);
export default h;
h.propTypes = {
    value: module1.object,
    onChange: module1.func,
    secrets: module1.array
};
h.defaultProps = {
    name: "",
    value: {},
    onChange: function() {},
    secrets: []
};
