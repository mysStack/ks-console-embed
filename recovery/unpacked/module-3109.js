import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-140.js";
import "./module-24.js";
import "./module-17.js";
import "./module-7.js";
import "./module-249.js";
import "./module-45.js";
import "./module-28.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-251.js";
import "./module-252.js";
import "./module-193.js";
import "./module-31.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module88 from "./module-88.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module3110 from "./module-3110.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module972 from "./module-972.js";
import { checkRepoInvalidReason } from "./module-917.js";
import module186 from "./module-186.js";
import module1372 from "./module-1372.js";
let l;
let o;
let u;
let c;
let s;
let i;
let f;
let d;
let p;
const x = /^(http|https|s3):\/\//;
const options = [
    {
        label: "http://",
        value: "http"
    },
    {
        label: "https://",
        value: "https"
    },
    {
        label: "s3://",
        value: "s3"
    }
];
const F = observer((p = d = ((Component_1)=>{
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
        module65(n, "handleTypeChange", u, module88(n));
        module65(n, "handleUrlChange", c, module88(n));
        module65(n, "handleAccessInputChange", s, module88(n));
        module65(n, "handleVerify", i, module88(n));
        module65(n, "handleVerifyResult", f, module88(n));
        const type = module26(e.formData, "type", "http");
        const url = n.getUrl(e.formData);
        const credential = n.getCredential(e.formData);
        module14.extendObservable(module88(n), {
            type,
            url,
            credential,
            validateStatus: "",
            validateStatusCode: 0,
            isValid: false
        });
        n.validateSchema = new module3110({
            url: function(e, a, r) {
                if (n.isValid && n.validateStatus === "success") {
                    r();
                } else {
                    r(new Error(t("INVALID_URL_DESC")));
                }
            }
        });
        return n;
    }
    module37(r, [
        {
            key: "store",
            get: function() {
                return this.props.store;
            }
        }
    ]);
    module37(r, [
        {
            key: "getUrl",
            value: function(e) {
                if (e.url) {
                    const t = new RegExp("^([\\s\\S]*?:\\/\\/)([\\s\\S]*)$", "g").exec(e.url);
                    if (t) {
                        return t[2];
                    }
                    return "";
                }
                return "";
            }
        },
        {
            key: "getCredential",
            value: function(e) {
                const t = {
                    accessKeyID: "",
                    secretAccessKey: ""
                };
                if (e.credential) {
                    try {
                        return {
                            ...t,
                            ...JSON.parse(e.credential)
                        };
                    } catch (e) {}
                }
                return t;
            }
        },
        {
            key: "resetValidateStatus",
            value: function() {
                this.validateStatus = "";
                this.validate();
            }
        },
        {
            key: "checkVerifyEnable",
            value: function() {
                if (this.validateStatus === "validating") {
                    return false;
                }
                if (this.type === "s3") {
                    const e = this.credential;
                    const { accessKeyID, secretAccessKey } = e;
                    return !module63(this.url) && !module63(accessKeyID) && !module63(secretAccessKey);
                }
                return !module63(this.url);
            }
        },
        {
            key: "validate",
            value: function() {
                const props = this.props;
                const { formData, onValidate } = props;
                this.validateSchema.validate(formData, {
                    first: true
                }, function(e, t) {
                    onValidate({
                        isValid: module63(t)
                    });
                });
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module1372.urlInput}>{this.renderField()}{this.renderAccess()}</div>;
            }
        },
        {
            key: "renderValidateStatus",
            value: function() {
                const validateStatus = this.validateStatus;
                const validateStatusCode = this.validateStatusCode;
                if (validateStatus === "") {
                    return null;
                }
                const r = validateStatus === "validating" ? <module186.Loading size={16}/> : <module186.Tooltip placement="top" content={validateStatus === "success" ? t("VALID_URL_DESC") : checkRepoInvalidReason(validateStatusCode)}><module186.Icon name={validateStatus}/></module186.Tooltip>;
                return <div className={module1372.validStatus}>{r}</div>;
            }
        },
        {
            key: "renderField",
            value: function() {
                return <div className={module1372.field}><label className={module1372.label}>{t("URL")}</label><div className={module1372.fieldInput}><module186.Select className={module1372.protocol} value={this.type} options={options} onChange={this.handleTypeChange}/><module186.Input className={module1372.url} type="text" name="url" value={this.url} validateStatus={this.validateStatus} placeholder="example.com" onChange={this.handleUrlChange}/>{this.renderValidateStatus()}{this.type !== "s3" && <module186.Button className={module1372.verifyBtn} onClick={this.handleVerify} disabled={!this.checkVerifyEnable() || this.props.isSubmitting}>{t("VALIDATE")}</module186.Button>}</div><div className={module1372.desc}>{t("APP_REPO_URL_DESC")}</div></div>;
            }
        },
        {
            key: "renderAccess",
            value: function() {
                if (this.type !== "s3") {
                    return null;
                }
                return <div className={module1372.access}><div className={module1372.accessItem}><label className={module1372.label}>{t("ACCESS_KEY_ID")}</label><module186.Input name="accessKeyID" value={this.credential.accessKeyID} onChange={this.handleAccessInputChange}/></div><div className={module1372.accessItem}><label className={module1372.label}>{t("SECRET_ACCESS_KEY")}</label><module186.Input name="secretAccessKey" value={this.credential.secretAccessKey} onChange={this.handleAccessInputChange}/></div><module186.Button className={module1372.verifyBtn} onClick={this.handleVerify} disabled={!this.checkVerifyEnable() || this.props.isSubmitting}>{t("VALIDATE")}</module186.Button></div>;
            }
        }
    ]);
    return r;
})(Component), d.propTypes = {
    formData: module1.object,
    onValidate: module1.func,
    isSubmitting: module1.bool
}, d.defaultProps = {
    formData: {},
    onValidate: function() {},
    isSubmitting: false
}, o = p, u = module49(o.prototype, "handleTypeChange", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            const formData = _this.props.formData;
            module74(formData, "credential", t === "s3" ? JSON.stringify(_this.credential) : "{}");
            module74(formData, "type", t);
            _this.type = t;
            if (!x.test(_this.url)) {
                module74(formData, "url", `${t}://${_this.url}`);
            }
            _this.resetValidateStatus();
        };
    }
}), c = module49(o.prototype, "handleUrlChange", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t, a) {
            const formData = _this.props.formData;
            const n = module972(a);
            module74(formData, "url", x.test(n) ? n : `${_this.type}://${n}`);
            _this.url = n;
            _this.resetValidateStatus();
        };
    }
}), s = module49(o.prototype, "handleAccessInputChange", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            const name = t.target.name;
            _this.credential[name] = t.target.value;
            module74(_this.props.formData, "credential", JSON.stringify(_this.credential));
            _this.resetValidateStatus();
        };
    }
}), i = module49(o.prototype, "handleVerify", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.validateStatus = "validating";
            const formData = _this.props.formData;
            const { url, credential } = formData;
            _this.store.validate({
                type: _this.type,
                url,
                workspace: _this.props.workspace,
                credential
            }).then((t)=>{
                _this.handleVerifyResult(t.ok, t.errorCode);
            }).catch(()=>{
                _this.handleVerifyResult(false);
            });
        };
    }
}), f = module49(o.prototype, "handleVerifyResult", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t, a) {
            _this.validateStatus = t ? "success" : "error";
            _this.validateStatusCode = t ? 0 : a;
            _this.isValid = t;
            _this.validate();
        };
    }
}), module49(o.prototype, "resetValidateStatus", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "resetValidateStatus"), o.prototype), l = o)) || l;
export default F;
