import "./module-15.js";
import "./module-5.js";
import "./module-86.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import module31 from "./module-31.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import module856 from "./module-856.js";
import module1844 from "./module-1844.js";
import { inject, observer } from "./module-239.js";
import { trigger } from "./module-792.js";
import module4061 from "./module-4061.js";
let o;
const S = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
    })(n);
    function n(...l) {
        let e;
        module36(this, n);
        e = r.call(this, ...l);
        e.licenseStore = new module1844;
        e.handleGetDataDebounce = module856(function(t) {
            if (t === "needUpdated") {
                e.getData();
            }
        }, 1000);
        e.getData = async function t() {
            let a;
            a = await e.licenseStore.fetchLicense();
            e.props.rootStore.setLicense(a);
        };
        e.handleCloseTip = function() {
            e.props.rootStore.hideLicenseTip();
            localStorage.setItem("hideLicenseTip", "true");
        };
        e.renderIcon = function() {
            if (e.isInfoTip) {
                return <module186.Icon name="information" size={16} color={{
                    primary: "#c7deef",
                    secondary: "#326e93"
                }}/>;
            }
            return <module186.Icon name="exclamation" size={16} color={{
                primary: "#ffe1be",
                secondary: "#8d663e"
            }}/>;
        };
        e.renderTipText = function() {
            if (e.isUnAuthorized) {
                return t(`${e.isAdmin ? "ADMIN_" : ""}INACTIVATED_LICENSE_DESC`);
            }
            if (e.isOverLimit) {
                return t(`${e.isAdmin ? "ADMIN_" : ""}OVER_RESOURCE_LICENSE_LIMIT`);
            }
            if (e.isExpired) {
                return t(`${e.isAdmin ? "ADMIN_" : ""}SUB_EXPIRED_LICENSE_DESC`);
            }
            if (e.unExpired) {
                if (e.dueDate <= 30 && e.dueDate > 0) {
                    return t(`${e.isAdmin ? "ADMIN_" : ""}UPDATE_LICENSE_DESC`, {
                        day: e.dueDate,
                        type: t(e.type === "subscription" ? "SUBSCRIPTION" : "WARRANTY")
                    });
                }
                return t(`${e.isAdmin ? "ADMIN_" : ""}MA_EXPIRED_LICENSE_DESC`);
            }
            return "";
        };
        e.renderTipOperation = function() {
            const color = e.isInfoTip ? {
                primary: "#326e93",
                secondary: "#326e93"
            } : {
                primary: "#8d663e",
                secondary: "#8d663e"
            };
            const title = e.isUnAuthorized || e.isExpired ? "ACTIVATE" : "UPDATE_LICENSE";
            if (title !== "ACTIVATE") {
                return null;
            }
            return <div onClick={function() {
                e.trigger("license.update", {
                    store: e.licenseStore,
                    title,
                    success: async ()=>{
                        await e.getData();
                        if (e.currentUrl.indexOf("notification-history") > -1) {
                            e.props.rootStore.routing.push("/settings/base-info");
                        }
                    }
                });
            }}><span style={{
                color
            }}>{t(title)}</span><module186.Icon name="next" size={16} color={color}/></div>;
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: async function() {
                const _this = this;
                if (globals.user) {
                    await this.getData();
                    window.triggerEvent.add("licenseViolation", function(e) {
                        _this.handleGetDataDebounce(e);
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const e = this.currentUrl.indexOf("/license-info") !== -1;
                const isExpired = this.isExpired;
                return <div className={module3(module4061.licenseTip, module31({}, module4061.tipInfo, this.isInfoTip))} style={{
                    display: this.visible ? "block" : "none"
                }}><span>{this.renderIcon()}{this.renderTipText()}</span><div className={module4061.operation}>{!e && this.isAdmin && this.renderTipOperation()}{(!e || e && !isExpired) && this.isInfoTip && <module186.Icon name="close" color={{
                    primary: "#326e93",
                    secondary: "#326e93"
                }} size={16} onClick={this.handleCloseTip}/>}</div></div>;
            }
        },
        {
            key: "visible",
            get: function() {
                let showLicenseTip = this.props.rootStore.showLicenseTip;
                if (this.isUnAuthorized || this.isExpired) {
                    localStorage.removeItem("hideLicenseTip");
                    return showLicenseTip;
                }
                if (localStorage.getItem("hideLicenseTip") === "true") {
                    showLicenseTip = false;
                    this.props.rootStore.hideLicenseTip();
                }
                return showLicenseTip;
            }
        },
        {
            key: "licenseInfo",
            get: function() {
                return {};
            }
        },
        {
            key: "isAdmin",
            get: function() {
                return globals.app.isPlatformAdmin;
            }
        },
        {
            key: "type",
            get: function() {
                return module26(this.licenseInfo, "licenseType", "subscription");
            }
        },
        {
            key: "isOverLimit",
            get: function() {
                return this.licenseInfo.isOverLimit || false;
            }
        },
        {
            key: "isUnAuthorized",
            get: function() {
                return this.licenseInfo.isUnAuthorized || false;
            }
        },
        {
            key: "isExpired",
            get: function() {
                return this.licenseInfo.isExpired || false;
            }
        },
        {
            key: "unExpired",
            get: function() {
                return this.licenseInfo.unExpired || false;
            }
        },
        {
            key: "isInfoTip",
            get: function() {
                return this.unExpired;
            }
        },
        {
            key: "dueDate",
            get: function() {
                return this.licenseInfo.dueDate || -1;
            }
        },
        {
            key: "currentUrl",
            get: function() {
                return this.props.rootStore.routing.location.pathname;
            }
        }
    ]);
    return n;
})(Component)) || o) || o) || o;
export default S;
