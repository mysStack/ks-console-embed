import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-137.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module61 from "./module-61.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module454 from "./module-454.js";
import module449 from "./module-449.js";
import Module952 from "./module-952.js";
import Module836 from "./module-836.js";
import { PATTERN_ALIAS_NAME, PATTERN_URL } from "./module-72.js";
import { UPLOAD_FILE_TYPES } from "./module-327.js";
import { getAppCategoryNames } from "./module-917.js";
import module2461 from "./module-2461.js";
const C = ((Component_1)=>{
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
        t.checkPackage = async (a)=>{
            let r;
            let n;
            let l;
            let i;
            let error;
            let s;
            r = t.props.fileStore;
            n = r.checkFile;
            l = r.handleFileByBase64Str;
            i = r.validateImageSize;
            if (error = n(a, "icon")) {
                t.setState({
                    error,
                    base64Str: ""
                });
            } else {
                s = module449(a.name.toLocaleLowerCase().split("."));
                await l(a, async (base64Str)=>{
                    let r;
                    r = `data:image/${s === "svg" ? "svg+xml" : s};base64,${base64Str}`;
                    if (await i(r)) {
                        t.handleAppChange(base64Str, "icon");
                        t.setState({
                            error: "",
                            base64Str
                        });
                    } else {
                        t.setState({
                            error: "FILE_MAX_SIZE_ICON",
                            base64Str: ""
                        });
                    }
                });
            }
            return Promise.reject();
        };
        t.handleAppChange = function(e, a) {
            t.props.handleChange(e, a);
        };
        t.state = {
            base64Str: ""
        };
        return t;
    }
    module37(r, [
        {
            key: "renderIcon",
            value: function() {
                const formData = this.props.formData;
                const { base64Str = formData.icon, error } = this.state;
                return <><div className={module2461.uploadIcon}><div className={module2461.iconShow}><Module836 iconSize={96} className={module2461.image} isBase64Str={Boolean(base64Str || formData.icon)} src={base64Str || formData.icon} iconLetter={formData.name}/></div><div className={module2461.word}><div className={module2461.note}>{t("APP_ICON_FORMAT")} <br/>{t("APP_ICON_SIZE")}</div><Module952 beforeUpload={this.checkPackage} accept={UPLOAD_FILE_TYPES.icon}><module186.Button>{t("UPLOAD")}</module186.Button></Module952></div></div>{error && <div className={module2461.error}>{t(error)}</div>}</>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { formData, formRef } = props;
                const l = module454(formData.category_set, {
                    status: "enabled"
                }) || {};
                formData.category_id = formData.category_id || l.category_id;
                return <div className={module2461.wrapper}><div className="h5">{t("BASIC_INFORMATION")}</div><module186.Form data={formData} ref={formRef}><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="aliasName" onChange={function(t) {
                    return _this.handleAppChange(t, "aliasName");
                }} maxLength={63}/></module186.Form.Item><module186.Form.Item label={t("DESCRIPTION")} desc={t("APP_DESCRIPTION_DESC")}><module186.TextArea name="description" maxLength={120} onChange={function(t) {
                    return _this.handleAppChange(t, "description");
                }}/></module186.Form.Item><module186.Form.Item label={t("ICON")} className={module2461.upload}>{this.renderIcon()}</module186.Form.Item><module186.Form.Item label={t("APP_CATEGORY")} desc={t("CHOOSE_APP_CATEGORY_DESC")}><module186.Select name="categoryName" options={this.categories} onChange={this.handleAppChange} placeholder=" "/></module186.Form.Item><module186.Form.Item label={t("SERVICE_PROVIDER_WEBSITE_TCAP")} desc={t("SERVICE_PROVIDER_WEBSITE_DESC")} rules={[
                    {
                        pattern: PATTERN_URL,
                        message: t("WRONG_ADDRESS_TIP")
                    }
                ]}><module186.Input name="appHome" onChange={function(t) {
                    return _this.handleAppChange(t, "appHome");
                }} maxLength={100}/></module186.Form.Item></module186.Form></div>;
            }
        },
        {
            key: "categories",
            get: function() {
                return module61(this.props.categories.map((e)=>({
                        label: getAppCategoryNames(e),
                        value: e.metadata.name
                    })));
            }
        }
    ]);
    return r;
})(Component);
export default C;
C.propTypes = {
    formData: module1.PropTypes.object,
    categories: module1.PropTypes.array,
    handleChange: module1.PropTypes.func,
    fileStore: module1.PropTypes.object
};
C.defaultProps = {
    formData: {},
    categories: [],
    handleChange: function() {},
    fileStore: function() {}
};
