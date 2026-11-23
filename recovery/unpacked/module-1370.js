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
import module186 from "./module-186.js";
import Module1059 from "./module-1059.js";
import module1369 from "./module-1369.js";
const y = ((Component_1)=>{
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
        e.handleAdd = function(t) {
            const e_props = e.props;
            const a_value = e_props.value;
            e_props.onChange([].concat(module61(a_value), [
                t
            ]));
        };
        e.handleDelete = function(t, a) {
            const e_props = e.props;
            const { value, onChange } = e_props;
            value.splice(a, 1);
            onChange(value);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const { value, validate, className, title = t("KEYWORDS"), listTitle = t("KEYWORDS_LIST"), emptyDesc = t("EMPTY_KEYWORDS_DESC"), placeholder = t(" ") } = this.props;
                return <div className={module3(module1369.wrapper, className)}><Module1059 className={module1369.wrapper} title={title} placeholder={placeholder} validate={validate} onAdd={this.handleAdd}/><p className="margin-t8">{listTitle}</p><div className={module1369.boxWrapper}>{module63(value) ? <div className={module1369.empty}>{emptyDesc}</div> : value.map((t, a)=><module186.Tag className={module1369.tag} key={`${t}-${a}`}>{t}<module186.Icon name="close" size={12} clickable type="light" onClick={function() {
                        return _this.handleDelete(t, a);
                    }}/></module186.Tag>)}</div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.propTypes = {
    value: module1.array,
    onChange: module1.func
};
y.defaultProps = {
    value: [],
    onChange: function() {}
};
