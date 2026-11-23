import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import Module788 from "components/Base/Modal";
import { observer } from "./module-239.js";
import Module3293 from "./module-3293.js";
import module3295 from "./module-3295.js";
let l;
let o;
let u;
const O = {
    title: "",
    description: "",
    logo: "",
    favicon: "",
    background: ""
};
const C = observer((u = o = ((Component_1)=>{
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
        t.handleLogoChange = function({ image }) {
            const formTemplate = t.state.formTemplate;
            t.setState({
                formTemplate: {
                    ...formTemplate,
                    logo: image
                }
            });
        };
        t.handleFavicon = function(e) {
            const formTemplate = t.state.formTemplate;
            const e_image = e.image;
            t.setState({
                formTemplate: {
                    ...formTemplate,
                    favicon: e_image
                }
            });
        };
        t.handleBackground = function(e) {
            const formTemplate = t.state.formTemplate;
            const e_image = e.image;
            t.setState({
                formTemplate: {
                    ...formTemplate,
                    background: e_image
                }
            });
        };
        t.handleOK = function() {
            t.formRef.current.validate(function() {
                t.props.onOk(t.formRef.current.getData());
            });
        };
        t.state = {
            formTemplate: {
                ...O,
                ...globals.theme
            }
        };
        t.formRef = createRef();
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel, isSubmitting } = props;
                const formTemplate = this.state.formTemplate;
                return <Module788 width={960} onOk={this.handleOK} onCancel={onCancel} visible={visible} title={t("MODIFY_PLATFORM_INFO")} icon="cogwheel" okText={t("OK")} cancelText={t("CANCEL")} isSubmitting={isSubmitting}><module186.Form data={formTemplate} ref={this.formRef}><div className={module3295.form}><div className={module3295.item}><module186.Form.Item label={t("PLATFORM_TITLE_TCAP")} desc={t("PLATFORM_TITLE_TIP")} rules={[
                    {
                        required: true,
                        message: t("TITLE_EMPTY_TIP")
                    }
                ]}><module186.Input name="title" maxLength={63}/></module186.Form.Item></div><div className={module3295.item}><module186.Form.Item label={t("PLATFORM_DESCRIPTION_TCAP")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="description" maxLength={256}/></module186.Form.Item></div></div><div className={module3295.form}><div className={module3295.item}><module186.Form.Item label={t("PLATFORM_LOGO")} rules={[
                    {
                        required: true,
                        message: t("PLATFORM_LOGO_REQUIRED")
                    }
                ]}><Module3293 name="logo" uploadName="image" type={[
                    "png",
                    "svg",
                    "jpg"
                ]} tooltipText={t("PLATFORM_LOGO_DESC", {
                    imageSize: "200*40",
                    fileSize: "2M",
                    fileType: "svg、png、jpg"
                })} uploadUrl={this.uploadUrl} imagUrl={formTemplate.logo} fileSize={2} onChange={this.handleLogoChange}/></module186.Form.Item><module186.Form.Item className={module3295.marginTop} label={t("BROWSER_FAVICON")} rules={[
                    {
                        required: true,
                        message: t("BROWSER_FAVICON_REQUIRED")
                    }
                ]}><Module3293 name="favicon" text={t("UPLOAD")} uploadName="image" type={[
                    "ico",
                    "png",
                    "svg",
                    "jpg"
                ]} tooltipText={t("BROWSER_FAVICON_DESC")} imagUrl={formTemplate.favicon} uploadUrl={this.uploadUrl} fileSize={2} onChange={this.handleFavicon}/></module186.Form.Item></div><div className={module3295.item}><module186.Form.Item label={t("LOGIN_BACKGROUND")}><Module3293 text={t("UPLOAD")} height={288} uploadName="image" type={[
                    "png",
                    "svg",
                    "jpg"
                ]} tooltipText={t("LOGIN_BACKGROUND_DESC")} uploadUrl={this.uploadUrl} imagUrl={formTemplate.background} onChange={this.handleBackground} fileSize={2} preview/></module186.Form.Item></div></div></module186.Form></Module788>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.store;
            }
        },
        {
            key: "uploadUrl",
            get: function() {
                return this.store.getImagePath();
            }
        }
    ]);
    return r;
})(Component), o.propTypes = {
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
}, o.defaultProps = {
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
}, l = u)) || l;
export default C;
