import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module2870 from "unpacked/module-2870.js";
const v = ((Component_1)=>{
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
    function a(...n_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...n_1);
        e.handleClick = function(t) {
            const value_1 = t.currentTarget.dataset.value;
            const e_props = e.props;
            const { value, onChange } = e_props;
            if (value.includes(value_1)) {
                onChange(value.filter((e)=>e !== value_1));
            } else {
                onChange([].concat(module61(value), [
                    value_1
                ]));
            }
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { options, value } = props;
                return <ul className={module2870.wrapper}>{options.map((t)=><li className={module3(module31({}, module2870.select, value.includes(t.value)))} key={t.value} data-value={t.value} onClick={_this.handleClick}>{t.icon && <module186.Icon name={t.icon} size={24}/>}{t.label}</li>)}</ul>;
            }
        }
    ]);
    return a;
})(Component);
export default v;
v.propTypes = {
    options: module1.array,
    value: module1.array,
    onChange: module1.func
};
v.defaultProps = {
    options: [],
    value: [],
    onChange: function() {}
};
