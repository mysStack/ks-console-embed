import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-192.js";
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
import module63 from "./module-63.js";
import module814 from "./module-814.js";
import Module2899 from "./module-2899.js";
import module2900 from "./module-2900.js";
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.handleAddTrigger = function() {
            e.props.onShowTrigger();
        };
        e.handleEdit = function(t, a) {
            e.props.onShowEdit(t, a);
        };
        e.handleDelete = function(t) {
            const e_props = e.props;
            const { value, onChange } = e_props;
            value.splice(t, 1);
            onChange(value);
        };
        return e;
    }
    module37(r, [
        {
            key: "renderAddTrigger",
            value: function() {
                return <module814.Add onClick={this.handleAddTrigger} title={t("ADD_TRIGGER")} description={t("ADD_TRIGGER_DESC")}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const value = this.props.value;
                return <div className={module2900.wrapper}><div className={module2900.content}>{!module63(value) && <ul className={module2900.list}>{value.map((trigger, a)=><Module2899 trigger={trigger} key={a} index={a} onEdit={_this.handleEdit} onDelete={_this.handleDelete}/>)}</ul>}{this.renderAddTrigger()}</div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default h;
h.defaultProps = {
    prefix: "",
    onChange: function() {},
    onShowTrigger: function() {},
    onShowEdit: function() {}
};
h.contextTypes = {
    formData: module1.object
};
