import "./module-15.js";
import "./module-5.js";
import "./module-84.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-45.js";
import "./module-42.js";
import "./module-10.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import module31 from "./module-31.js";
import "./module-58.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import { safeAtob } from "./module-440.js";
import module3 from "./module-3.js";
import { getConfigSupportLink } from "./module-52.js";
import module2962 from "./module-2962.js";
let s;
let i;
let f;
const D = [
    "Format error",
    "Invalid signature",
    "Invalid type",
    "Empty license"
];
const N = observer((f = i = ((Component_1)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.state = {
            value: "",
            error: false
        };
        e.handleSubmit = async function t() {
            let a;
            let r;
            let error;
            let errorMessage;
            let o;
            a = e.state.value;
            r = await e.handleInvalid(a);
            error = r.error;
            errorMessage = r.errorMessage;
            e.setState({
                error,
                errorMessage
            });
            if (!error) {
                o = JSON.parse(safeAtob(a));
                e.props.onOk(o);
                e.setState({
                    error: false,
                    errorMessage: ""
                });
            }
        };
        e.handleValue = function(value) {
            e.setState({
                value,
                error: false
            });
        };
        e.handleInvalid = (()=>{
            const t = module44(module41.mark(function t(a) {
                let r;
                let n;
                let l;
                let o;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                t.prev = 0;
                                r = e.props.store;
                                n = JSON.parse(safeAtob(a));
                                t.next = 5;
                                return r.invalidLicense(n);
                            case 5:
                                l = t.sent;
                                o = l.status.violation.type;
                                if (!D.includes(o)) {
                                    t.next = 9;
                                    break;
                                }
                                return t.abrupt("return", {
                                    error: true,
                                    errorMessage: o.replace(/\s/g, "_")
                                });
                            case 9:
                                return t.abrupt("return", {
                                    error: false,
                                    errorMessage: ""
                                });
                            case 12:
                                t.prev = 12;
                                t.t0 = t.catch(0);
                                return t.abrupt("return", {
                                    error: true,
                                    errorMessage: "INVALID_ACTIVATION_CODE_DESC"
                                });
                            case 15:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t, null, [
                    [
                        0,
                        12
                    ]
                ]);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
        e.renderTipMessage = function() {
            const { isUnAuthorized = false, isOverLimit = false, isExpired = false } = globals.licenseInfo || {};
            if (isUnAuthorized) {
                return t(`${e.isAdmin ? "ADMIN_" : ""}AUTHORIZED_INVALID_LICENSE_DESC`);
            }
            if (isOverLimit) {
                return t(`${e.isAdmin ? "ADMIN_" : ""}OVER_RESOURCE_LICENSE_LIMIT`);
            }
            if (isExpired) {
                return t(`${e.isAdmin ? "ADMIN_" : ""}EXPIRED_INVALID_LICENSE_DESC`);
            }
            return t(`${e.isAdmin ? "ADMIN_" : ""}AUTHORIZED_INVALID_LICENSE_DESC`);
        };
        e.renderHeader = function() {
            return <><div className={module2962.customHeader}><module186.Icon name="close" type="light" className={module2962.closeIcon}/><b>{t("INVALID_LICENSE")}</b><img src="/assets/logo.svg"/></div><module186.Alert type="error" message={e.renderTipMessage()}/></>;
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel, title, isOverLimit = false, ...rest } = props;
                return <Module788 {...rest} width={600} title={t(title)} visible={visible} onCancel={onCancel} onOk={this.isAdmin ? this.handleSubmit : null} cancelText={this.isAdmin ? t("CANCEL") : t("CLOSE")} icon="pen"><div className={module2962.body}>{isOverLimit && this.renderHeader()}{this.isAdmin ? <><div className={module2962.title}>{t("ACTIVATION_CODE")}</div><module186.TextArea className={module3("max-width-full", module31({}, module2962.TextError, this.state.error))} rows="3" onChange={this.handleValue}/>{this.state.error && <div className={module2962.error}>{t(this.state.errorMessage)}</div>}</> : null}</div></Module788>;
            }
        },
        {
            key: "isAdmin",
            get: function() {
                return globals.app.isPlatformAdmin;
            }
        },
        {
            key: "kscLink",
            get: function() {
                return getConfigSupportLink("ksc");
            }
        }
    ]);
    return r;
})(Component), i.propTypes = {
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
}, i.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
}, s = f)) || s;
export default N;
