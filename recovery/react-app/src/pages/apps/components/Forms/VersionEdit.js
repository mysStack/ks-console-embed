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
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import { PATTERN_APPTEMPLATE_VERSION } from "utils/constants";
import module4421 from "unpacked/module-4421.js";
let o;
let u;
let l;
const E = observer((l = u = ((Component_1)=>{
    module55(a, Component_1);
    var r = ((e)=>{
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
            let r;
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(...n) {
        let e;
        module36(this, a);
        e = r.call(this, ...n);
        e.handleChange = function(t, r) {
            e.props.handleChange(t, r);
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { formData, formRef } = props;
                return <module186.Form data={formData} ref={formRef} className={module4421.editForm}><module186.Form.Item label={t("VERSION_NUMBER")} rules={[
                    {
                        required: true,
                        message: t("ENTER_VERSION_NUMBER_TIP")
                    },
                    {
                        pattern: PATTERN_APPTEMPLATE_VERSION,
                        message: t("INVALID_VERSION_TIP")
                    }
                ]}><module186.Input name="name" autoFocus maxLength={30} onChange={function(t) {
                    return _this.handleChange(t, "name");
                }}/></module186.Form.Item><module186.Form.Item label={t("UPDATE_LOG")} desc={t("UPDATE_LOG_DESC")}><module186.TextArea name="description" onChange={function(t) {
                    return _this.handleChange(t, "description");
                }}/></module186.Form.Item></module186.Form>;
            }
        }
    ]);
    return a;
})(Component), u.propTypes = {
    formData: module1.object,
    handleChange: module1.func
}, u.defaultProps = {
    formData: {},
    handleChange: function() {}
}, o = l)) || o;
export default E;
