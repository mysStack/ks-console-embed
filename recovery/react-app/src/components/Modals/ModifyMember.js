import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
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
import { observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import module2973 from "unpacked/module-2973.js";
let l;
let o;
let u;
const b = observer((u = o = ((Component_1)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.handleOk = function(t = {}) {
            const onOk = e.props.onOk;
            const t_role = t.role;
            onOk(t_role);
        };
        e.getRoleOptions = function() {
            return e.props.roles.map((e)=>{
                const a = module26(e, "description");
                return {
                    label: e.name,
                    value: e.name,
                    desc: t(a)
                };
            });
        };
        e.optionRenderer = function(e) {
            return <div className={module2973.option}><div>{e.label}</div><p>{e.desc}</p></div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel, isSubmitting, role } = props;
                return <module788.Form width={691} title={t("CHANGE_ROLE")} icon="role" onOk={this.handleOk} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting}><module186.Form.Item label={t("ROLE")} rules={[
                    {
                        required: true,
                        message: t("SELECT_ROLE_TIP")
                    }
                ]}><module186.Select name="role" optionRenderer={this.optionRenderer} options={this.getRoleOptions()} defaultValue={role}/></module186.Form.Item></module788.Form>;
            }
        }
    ]);
    return r;
})(Component), o.propTypes = {
    role: module1.string,
    roles: module1.array,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
}, o.defaultProps = {
    role: "",
    roles: [],
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
}, l = u)) || l;
export default b;
