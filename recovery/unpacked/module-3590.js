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
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import Module1098 from "./module-1098.js";
import Module843 from "./module-843.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module3591 from "./module-3591.js";
const E = ((Component_1)=>{
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
        t.toggleAdvanced = function() {
            t.setState({
                showAdvanced: !t.state.showAdvanced
            });
        };
        t.handleError = function(e) {
            t.context.setError(!!e);
        };
        t.state = {
            showAdvanced: false
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                return <module186.Form.Group><module186.Columns><module186.Column><module186.Form.Item label={t("BUCKET")} desc={t("BUCKET_NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("BUCKET_NAME_EMPTY_TIP")
                    }
                ]}><module186.Input name="bucket"/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("REGION")} desc={t("REGION_DESC")}><module186.Input name="region"/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("ENDPOINT")} desc={t("ENDPOINT_DESC")} rules={[
                    {
                        required: true,
                        message: t("ENDPOINT_EMPTY_TIP")
                    }
                ]}><module186.Input name="endpoint"/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("ACCESS_KEY")} desc={t("ACCESS_KEY_DESC")} rules={[
                    {
                        required: true,
                        message: t("ACCESS_KEY_EMPTY_TIP")
                    }
                ]}><module186.Input name="access_key"/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("SECRET_KEY")} desc={t("SECRET_KEY_DESC")} rules={[
                    {
                        required: true,
                        message: t("SECRET_KEY_EMPTY_TIP")
                    }
                ]}><module186.Input name="secret_key"/></module186.Form.Item></module186.Column></module186.Columns><div className={module3591.advanced} onClick={this.toggleAdvanced}><span>{t("ADVANCED_SETTINGS")}</span><module186.Icon name={this.state.showAdvanced ? "chevron-up" : "chevron-down"} size="20"/></div>{this.state.showAdvanced && <><div className="margin-b12"><div className={module3591.content}><module186.Form.Item><Module1098 name="insecure" title={t("HTTP_PROTOCOL")} description={t("HTTP_PROTOCOL_DESC")}/></module186.Form.Item></div></div><div className="margin-b12"><module186.Form.Group label={t("ADD_STORAGE_CLASS")} desc={t("ADD_STORAGE_CLASS_DESC")} checkable><div className={module3591.expandContent}><module186.Form.Item label={t("OBJECT_STORAGE_PARAMETERS")}><Module843 name="put_user_metadata" addText={t("ADD")} onError={this.handleError}/></module186.Form.Item></div></module186.Form.Group></div><module186.Form.Group label={t("HTTP_CONFIGURATION")} desc={t("HTTP_CONFIGURATION_DESC")} checkable><div className={module3591.expandContent}><div className="margin-b12"><div className={module3591.title}>{t("TLS_CERTIFICATE")}</div><div className={module3591.content}><module186.Form.Item><Module1098 name="http_config.insecure_skip_verify" title={t("TLS_CERTIFICATE_VERIFY")} description={t("TLS_CERTIFICATE_VERIFY_DESC")}/></module186.Form.Item></div></div><div><div className={module3591.title}>{t("TLS_CONNECTION")}</div><div className={module3(module3591.content, "padding-12")}><module186.Columns><module186.Column><module186.Form.Item label={t("CA_CERTIFICATE")} desc={t("CA_CERTIFICATE_DESC")}><module186.Input name="http_config.tls_config.ca_file"/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("CERT_CERTIFICATE")} desc={t("CERT_CERTIFICATE_DESC")}><module186.Input name="http_config.tls_config.cert_file"/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("KEY_FILE")} desc={t("KEY_FILE_DESC")}><module186.Input name="http_config.tls_config.key_file"/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("SERVER_NAME")} desc={t("SERVER_NAME_DESC")}><module186.Input name="http_config.tls_config.server_name"/></module186.Form.Item></module186.Column></module186.Columns><div className={module3591.content}><module186.Form.Item><Module1098 name="http_config.tls_config.insecure_skip_verify" title={t("SERVER_CERTIFICATE_VERFICATION")} description={t("SERVER_CERTIFICATE_VERFICATION_DESC")}/></module186.Form.Item></div></div></div></div></module186.Form.Group></>}</module186.Form.Group>;
            }
        }
    ]);
    return r;
})(Component);
export default E;
E.contextTypes = {
    setError: module1.PropTypes.func
};
