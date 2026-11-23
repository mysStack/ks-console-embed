import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-98.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module189 from "./module-189.js";
import Module814 from "./module-814.js";
import module2743 from "./module-2743.js";
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.handleDelete = function(t) {
            return function() {
                const e_props = e.props;
                const a_value = e_props.value;
                e_props.onChange(module189(a_value, t));
            };
        };
        e.handleEdit = function(t) {
            return function() {
                e.props.onEdit(t);
            };
        };
        return e;
    }
    module37(r, [
        {
            key: "renderContent",
            value: function() {
                const _this = this;
                const props = this.props;
                const { value, onAdd } = props;
                return <Module814>{Object.entries(value).map((t)=>{
                    const a = module96(t, 2);
                    const r = a[0];
                    const n = a[1];
                    return <Module814.Item key={r} icon="hammer" title={r} description={n || "-"} onDelete={_this.handleDelete(r)} onEdit={_this.handleEdit(r)}/>;
                })}<Module814.Add title={t("ADD_DATA_TCAP")} description={t("ADD_DATA_DESC")} onClick={onAdd}/></Module814>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module2743.wrapper}>{this.renderContent()}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default v;
v.defaultProps = {
    value: {}
};
