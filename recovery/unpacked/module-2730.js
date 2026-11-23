import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
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
import module61 from "./module-61.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { observer } from "./module-239.js";
import module241 from "./module-241.js";
import module186 from "./module-186.js";
import module2731 from "./module-2731.js";
let l;
const b = observer(l = ((Component_1)=>{
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
        e.getCredentialsListData = function(t) {
            const e_props = e.props;
            const { devops, cluster } = e_props;
            return e.props.store.getCredentials({
                devops,
                cluster,
                ...t
            });
        };
        e.getCredentialsList = function() {
            return module61(e.props.store.credentials.data.map((e)=>({
                    label: e.name,
                    value: e.name,
                    type: e.type
                })));
        };
        e.optionRender = function({ label, type, disabled }) {
            return <span style={{
                display: "flex",
                alignItem: "center"
            }}>{label}  <module186.Tag type={disabled ? "" : "warning"}>{type && t(`CREDENTIAL_TYPE_${type.toUpperCase()}`)}</module186.Tag></span>;
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const store = this.props.store;
                const { formData, credentials } = store;
                const props = this.props;
                const { formRef, noJenkins } = props;
                return <div className={module2731.card}><module186.Form data={formData} ref={formRef}><module186.Form.Item label={t("CODE_REPOSITORY_ADDRESS")} desc={noJenkins ? "" : t("CODE_REPOSITORY_ADDRESS_DESC")} rules={[
                    {
                        required: true,
                        message: t("CODE_REPOSITORY_ADDRESS_EMPTY_TIP")
                    }
                ]}><module186.Input name="git_source.url"/></module186.Form.Item><module186.Form.Item label={t("CREDENTIAL_SI")} desc=<p>{t("SELECT_CREDENTIAL_DESC")}<span className={module2731.clickable} onClick={this.props.showCredential}>{t("CREATE_CREDENTIAL")}</span></p>><module186.Select name="git_source.credential_id" options={this.getCredentialsList()} pagination={module241(credentials, [
                    "page",
                    "limit",
                    "total"
                ])} isLoading={credentials.isLoading} onFetch={this.getCredentialsListData} optionRenderer={this.optionRender} valueRenderer={this.optionRender} placeholder=" " searchable clearable/></module186.Form.Item></module186.Form></div>;
            }
        }
    ]);
    return r;
})(Component)) || l;
export default b;
