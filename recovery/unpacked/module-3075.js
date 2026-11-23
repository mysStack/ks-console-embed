import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-138.js";
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
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import module198 from "./module-198.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import Module829 from "./module-829.js";
import { htmlLinkControl } from "./module-52.js";
import module3076 from "./module-3076.js";
import module1014 from "./module-1014.js";
const D = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.state = {
            activeTab: module26(e.tabs, "[0].name"),
            updatedTabs: {},
            subRoute: {}
        };
        e.registerUpdate = function(t, a) {
            const updatedTabs = e.state.updatedTabs;
            if (!module198(updatedTabs, t)) {
                e.setState({
                    updatedTabs: {
                        ...updatedTabs,
                        ...module31({}, t, a)
                    }
                });
            }
        };
        e.handleChangeTab = function(t) {
            const name = t.currentTarget.dataset.name;
            if (name) {
                e.setState({
                    activeTab: name,
                    subRoute: {}
                });
            }
        };
        e.handleSaveChanges = function(t) {
            return function() {
                const current = e[`${t}FormRef`].current;
                const current_1 = e[`${t}Ref`].current;
                if (current) {
                    current.validate(module44(module41.mark(function* n() {
                        let l;
                        l = current.getData();
                        yield current_1.handleSubmit(l);
                        e.cancelUpdate(t);
                        current_1.fetchData();
                    })));
                }
            };
        };
        e.handleDiscardChanges = function(t) {
            return function() {
                const current = e[`${t}Ref`].current;
                if (current) {
                    current.resetData();
                    e.cancelUpdate(t);
                }
            };
        };
        e.cancelUpdate = function(t) {
            const updatedTabs = {
                ...e.state.updatedTabs
            };
            delete updatedTabs[t];
            e.setState({
                updatedTabs
            });
        };
        e.renderForm = function({ name, component }) {
            const activeTab = e.state.activeTab;
            const L = component;
            if (!L) {
                return null;
            }
            const o = `${name}Ref`;
            if (!e[o]) {
                e[o] = createRef();
            }
            const u = `${name}FormRef`;
            if (!e[u]) {
                e[u] = createRef();
            }
            return <div key={name} className={module3(module1014.formContainer, module31({}, module1014.active, name === activeTab))}>{<L ref={e[o]} formRef={e[u]}/>}</div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "getChildContext",
            value: function() {
                return {
                    registerUpdate: this.registerUpdate
                };
            }
        },
        {
            key: "renderTabs",
            value: function() {
                const _this = this;
                return <ul className={module1014.tabs}>{this.tabs.map(({ icon = "appcenter", title, name })=>{
                    const state = _this.state;
                    const { activeTab, updatedTabs } = state;
                    const f = name === activeTab;
                    const type = f ? "light" : "dark";
                    return <li onClick={_this.handleChangeTab} key={title} data-name={name} className={module3(module31({}, module1014.active, f))}><module186.Tooltip placement="bottomLeft" content={module198(updatedTabs, name) ? _this.updateTip : ""}><span className={module1014.tooltipTrigger}><module186.Icon name={icon} size={20} type={type}/>{module198(updatedTabs, name) && <span className={module1014.tipIcon}/>}</span></module186.Tooltip><p>{t(title)}</p></li>;
                })}</ul>;
            }
        },
        {
            key: "renderFormComponents",
            value: function() {
                const state = this.state;
                const { activeTab, updatedTabs } = state;
                return <div className={module1014.form}><div className={module3(module1014.wrapper, module31({}, module1014.wrapperActive, module198(updatedTabs, activeTab)))}>{this.tabs.map(this.renderForm)}</div><Module829 className={module3(module1014.confirm, module31({}, module1014.confirmActive, module198(updatedTabs, activeTab)))} onOk={this.handleSaveChanges(activeTab)} onCancel={this.handleDiscardChanges(activeTab)}/></div>;
            }
        },
        {
            key: "renderLicenseTip",
            value: function() {
                return <div className={module1014.licenseTip}><div className={module1014.wrapper}><img src="/assets/notification-license-icon.svg" alt=""/><div className={module1014.content}><div className={module1014.title}>{t("TENANT_NOTIFICATION")}</div><p>{t("TENANT_NOTIFICATION_DESC")}</p><p className={module1014.tip}>{this.isAdmin ? htmlLinkControl(t.html("TENANT_NOTIFICATION_LICENSE_ACTIVATION_TIP")) : t("UNADMIN_TENANT_NOTIFICATION_LICENSE_ACTIVATION_TIP")}</p></div></div></div>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                return <div className={module1014.content}><div className={module1014.container}>{this.renderTabs()}{this.renderFormComponents()}</div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const e = {
                    ...this.props
                };
                return <Module788 {...e} bodyClassName={module1014.body} title={t("NOTIFICATION_SETTINGS")} icon="loudspeaker" width={1162} cancelText={t("CLOSE")}>{this.renderContent()}</Module788>;
            }
        },
        {
            key: "isAdmin",
            get: function() {
                return globals.app.isPlatformAdmin;
            }
        },
        {
            key: "updateTip",
            get: function() {
                return <div className={module1014.tip}><h6>{t("CONTENT_NOT_SAVED_TIPS")}</h6><p>{t("SAVE_EDIT_HINTS")}</p></div>;
            }
        },
        {
            key: "tabs",
            get: function() {
                return module3076;
            }
        }
    ]);
    return r;
})(Component);
export default D;
D.propTypes = {
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
};
D.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
};
D.childContextTypes = {
    registerUpdate: module1.func
};
