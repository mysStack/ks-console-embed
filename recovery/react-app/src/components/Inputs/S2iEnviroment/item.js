import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-29.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import Module1609 from "components/Inputs/BoolSelect";
import Module868 from "components/Inputs/ObjectInput";
const v = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.handleChange = function(t) {
            const options = e.props.options;
            const r = module26(t, "name");
            const n = options.find((e)=>e.key === r);
            if (e.key !== r) {
                t.value = module26(n, "defaultValue", "");
            }
            e.props.onChange(t);
            e.key = r;
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { value, options } = props;
                return <Module868 value={value} onChange={this.handleChange}><module186.Select name="name" placeholder={t("KEY")} options={options}/>{this.valueType === "boolean" ? <Module1609 name="value" placeholder={t("VALUE")}/> : <module186.Input name="value" placeholder={t("VALUE")}/>}</Module868>;
            }
        },
        {
            key: "valueType",
            get: function() {
                const props = this.props;
                const { value, options } = props;
                const r = module26(value, "name", "");
                const n = options.find((e)=>e.key === r);
                return module26(n, "type", "string");
            }
        }
    ]);
    return r;
})(Component);
export default v;
v.propTypes = {
    value: module1.object,
    onChange: module1.func,
    configMaps: module1.array,
    secrets: module1.array
};
v.defaultProps = {
    value: {},
    onChange: function() {}
};
