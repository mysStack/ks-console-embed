import "unpacked/module-15.js";
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
import module1 from "unpacked/module-1.js";
import module831 from "unpacked/module-831.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import module5132 from "unpacked/module-5132.js";
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.state = {
            formData: module831(e.detail)
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.visible && this.props.visible !== e.visible) {
                    this.setState({
                        formData: module831(this.props.detail)
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, isSubmitting, onOk, onCancel } = props;
                const formData = this.state.formData;
                return <module788.Form data={formData} width={960} title="Github OAuth" description={t("GITHUB_OAUTH_DESC")} icon="github" onOk={onOk} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting}><module186.Columns className={module5132.content}><module186.Column><module186.Form.Item label={t("NAME")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    }
                ]}><module186.Input name="name" defaultValue="github" disabled/></module186.Form.Item><module186.Form.Item label={t("CLIENT_ID")} rules={[
                    {
                        required: true,
                        message: t("PLEASE_INPUT_CLIENT_ID")
                    }
                ]}><module186.Input name="clientID"/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("SERVER_ADDRESS")} rules={[
                    {
                        required: true,
                        message: t("PLEASE_INPUT_SERVER_ADDRESS")
                    }
                ]}><module186.Input name="server" defaultValue="https://github.com/login/oauth/access_token" disabled/></module186.Form.Item><module186.Form.Item label={t("CLIENT_SECRET")}><module186.Input name="secret"/></module186.Form.Item></module186.Column></module186.Columns></module788.Form>;
            }
        }
    ]);
    return r;
})(Component);
export default v;
v.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
v.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false
};
