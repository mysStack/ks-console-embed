import "unpacked/module-15.js";
import "unpacked/module-5.js";
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
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module2871 from "unpacked/module-2871.js";
const p = ((Component_1)=>{
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
        e.handleUp = function() {
            const e_props = e.props;
            const { value, onChange } = e_props;
            if (onChange) {
                onChange(value + 1);
            }
        };
        e.handleDown = function() {
            const e_props = e.props;
            const { value, onChange } = e_props;
            if (onChange) {
                onChange(Math.max(value - 1, 1));
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { value, onChange } = props;
                return <div className={module2871.wrapper}><span className={module2871.value}>{value}</span><span className={module2871.text}><p><strong>{t(value === 1 ? "REPLICA" : "REPLICA_PL")}</strong></p><p>{t("GRAYSCALE_REPLICAS_DESC")}</p></span>{onChange && <span className={module2871.buttons}><module186.Icon name="chevron-up" size={24} onClick={this.handleUp}/><module186.Icon name="chevron-down" size={24} onClick={this.handleDown}/></span>}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default p;
