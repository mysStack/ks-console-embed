import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-18.js";
import "./module-97.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-24.js";
import "./module-193.js";
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
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import Module814 from "./module-814.js";
import Module1059 from "./module-1059.js";
import module240 from "./module-240.js";
import { PATTERN_EMAIL } from "./module-72.js";
import module322 from "./module-322.js";
import module1701 from "./module-1701.js";
const S = ((Component_1)=>{
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
    function r(...o) {
        let e;
        module36(this, r);
        e = a.call(this, ...o);
        e.userStore = new module322;
        e.validateMail = function(a) {
            const value = e.props.value;
            const max_number_of_email = globals.config.notification.wecom.max_number_of_email;
            if (a) {
                if (value.length > max_number_of_email - 1) {
                    module240.error({
                        content: t.html("MAX_EAMIL_COUNT", {
                            count: max_number_of_email
                        }),
                        duration: 1000
                    });
                } else if (value.some((e)=>e === a)) {
                    module240.error({
                        content: t("EMAIL_EXISTS"),
                        duration: 1000
                    });
                } else {
                    if (PATTERN_EMAIL.test(a)) {
                        return true;
                    }
                    module240.error({
                        content: t("INVALID_EMAIL"),
                        duration: 1000
                    });
                }
            } else {
                module240.error({
                    content: t("EMAIL_EMPTY_DESC"),
                    duration: 1000
                });
            }
        };
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
        e.renderListItem = function(a) {
            return <div>{a} {a === e.userEmail && <module186.Tag>{t("CURRENT_USER")}</module186.Tag>}</div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { value, className } = props;
                return <div className={module3(module1701.wrapper, className)}><Module1059 placeholder="user@example.com" validate={this.validateMail} onAdd={this.handleAdd} showIcon/>{!module63(value) && <div className={module1701.listWrapper}><Module814>{value.map((t)=><Module814.Item key={t} className={module1701.listItem} title={_this.renderListItem(t)} onDelete={function() {
                        return _this.handleDelete(t);
                    }}/>)}</Module814></div>}</div>;
            }
        },
        {
            key: "userEmail",
            get: function() {
                return module26(globals, "user.email");
            }
        }
    ]);
    return r;
})(Component);
export default S;
S.propTypes = {
    value: module1.array,
    onChange: module1.func
};
S.defaultProps = {
    value: [],
    onChange: function() {}
};
