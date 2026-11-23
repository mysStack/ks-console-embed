import "./module-15.js";
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
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import { Component, createRef } from "./module-553.js";
import { PATTERN_ALIAS_NAME, PATTERN_NAME } from "./module-72.js";
let o;
let i;
let l;
const b = observer((l = i = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.handleOk = function(e) {
            t.props.onOk(e);
        };
        t.form = createRef();
        return t;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { detail, visible, onCancel, isSubmitting } = props;
                return <module788.Form width={691} title={t("EDIT_INFORMATION")} icon="pen" data={detail} onOk={this.handleOk} onCancel={onCancel} isSubmitting={isSubmitting} visible={visible}><module186.Form.Item label={t("NAME")} desc={t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("PATTERN_NAME_INVALID_TIP")
                    }
                ]}><module186.Input name="name" disabled/></module186.Form.Item><module186.Form.Item label={t("CREATOR")} desc={t("DEVOPS_ADMIN_DESC")}><module186.Input name="creator" disabled/></module186.Form.Item><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="aliasName" maxLength={63}/></module186.Form.Item><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea maxLength={256} name="description"/></module186.Form.Item></module788.Form>;
            }
        }
    ]);
    return n;
})(Component), i.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
}, i.defaultProps = {
    visible: false,
    isSubmitting: false,
    detail: {},
    onOk: function() {},
    onCancel: function() {}
}, o = l)) || o;
export default b;
