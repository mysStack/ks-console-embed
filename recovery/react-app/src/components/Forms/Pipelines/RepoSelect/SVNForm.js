import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module241 from "unpacked/module-241.js";
import module186 from "unpacked/module-186.js";
import { observer } from "unpacked/module-239.js";
import module2734 from "unpacked/module-2734.js";
let l;
function y(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const g = observer(l = ((Component_1)=>{
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.handleTypeChange = function(type) {
            n.setState({
                type
            });
        };
        n.getCredentialsListData = function(e) {
            const n_props = n.props;
            const { devops, cluster } = n_props;
            return n.props.store.getCredentials({
                devops,
                cluster,
                ...e
            });
        };
        n.getCredentialsList = function() {
            return module61(n.props.store.credentials.data.map((e)=>({
                    label: e.name,
                    value: e.name,
                    type: e.type
                })));
        };
        n.optionRender = function({ label, type, disabled }) {
            return <span style={{
                display: "flex",
                alignItem: "center"
            }}>{label}  <module186.Tag type={disabled ? "" : "warning"}>{type && t(`CREDENTIAL_TYPE_${type.toUpperCase()}`)}</module186.Tag></span>;
        };
        n.state = {
            type: "svn"
        };
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const store = this.props.store;
                const { formData, credentials } = store;
                const props = this.props;
                const { formRef, enableTypeChange } = props;
                return <div className={module2734.card}><module186.Form data={formData} ref={formRef}><module186.Form.Item label={t("TYPE")}><module186.Select name="svn_source.type" disabled={enableTypeChange === false} onChange={this.handleTypeChange} options={[
                    {
                        label: t("SINGLE_SVN"),
                        value: "single_svn"
                    },
                    {
                        label: t("SVN"),
                        value: "svn"
                    }
                ]} defaultValue="svn"/></module186.Form.Item><module186.Form.Item label={t("CODE_REPOSITORY_ADDRESS")} rules={[
                    {
                        required: true,
                        message: t("CODE_REPOSITORY_ADDRESS_EMPTY_TIP")
                    }
                ]}><module186.Input name="svn_source.remote"/></module186.Form.Item><module186.Form.Item label={t("CREDENTIAL_SI")} desc=<p>{t("SELECT_CREDENTIAL_DESC")}<span className={module2734.clickable} onClick={this.props.showCredential}>{t("CREATE_CREDENTIAL")}</span></p> rules={[
                    {
                        required: true,
                        message: t("PIPELINE_CREDENTIAL_EMPTY_TIP")
                    }
                ]}><module186.Select name="svn_source.credential_id" options={this.getCredentialsList()} pagination={module241(credentials, [
                    "page",
                    "limit",
                    "total"
                ])} isLoading={credentials.isLoading} onFetch={this.getCredentialsListData} optionRenderer={this.optionRender} valueRenderer={this.optionRender} placeholder=" " searchable clearable/></module186.Form.Item>{this.state.type !== "single_svn" ? <><module186.Form.Item label={t("BRANCH_INCLUDED")}><module186.Input name="svn_source.includes" defaultValue="trunk,branches/*,tags/*,sandbox/*"/></module186.Form.Item><module186.Form.Item label={t("BRANCH_EXCLUDED")}><module186.Input name="svn_source.excludes"/></module186.Form.Item></> : null}</module186.Form></div>;
            }
        }
    ]);
    return r;
})(Component)) || l;
export default g;
