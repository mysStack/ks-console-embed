import "./module-12.js";
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
import "./module-315.js";
import "./module-58.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module198 from "./module-198.js";
import module136 from "./module-136.js";
import module63 from "./module-63.js";
import { Component, createRef } from "./module-553.js";
import module3 from "./module-3.js";
import module1 from "./module-1.js";
import module14 from "./module-14.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import Module829 from "./module-829.js";
import module322 from "./module-322.js";
import module3547 from "./module-3547.js";
import module3552 from "./module-3552.js";
const I = ((Component_1)=>{
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
        t.registerUpdate = function(e, a) {
            const updatedTabs = t.state.updatedTabs;
            if (!module198(updatedTabs, e)) {
                t.setState({
                    updatedTabs: {
                        ...updatedTabs,
                        ...module31({}, e, a)
                    }
                });
            }
        };
        t.handleChangeTab = function(e) {
            const name = e.currentTarget.dataset.name;
            if (name) {
                t.setState({
                    activeTab: name,
                    subRoute: {}
                });
            }
        };
        t.handleSaveChanges = function(e) {
            return function() {
                const onOk = t.props.onOk;
                const current = t[`${e}FormRef`].current;
                if (current) {
                    current.validate(function() {
                        const n = current.getData();
                        onOk(n);
                        t.cancelUpdate(e);
                    });
                }
            };
        };
        t.handleDiscardChanges = function(e) {
            return function() {
                const current = t[`${e}Ref`].current;
                if (current) {
                    current.resetData();
                    t.cancelUpdate(e);
                }
            };
        };
        t.cancelUpdate = function(e) {
            const updatedTabs = {
                ...t.state.updatedTabs
            };
            delete updatedTabs[e];
            t.setState({
                updatedTabs
            });
        };
        t.renderForm = function({ name, component }) {
            const store = t.props.store;
            const activeTab = t.state.activeTab;
            const O = component;
            if (!O) {
                return null;
            }
            const c = `${name}Ref`;
            if (!t[c]) {
                t[c] = createRef();
            }
            const s = `${name}FormRef`;
            if (!t[s]) {
                t[s] = createRef();
            }
            return <div key={name} className={module3(module3552.form, module31({}, module3552.active, name === activeTab))}>{<O store={store} ref={t[c]} formRef={t[s]} formData={t.state.formData}/>}</div>;
        };
        t.state = {
            formData: {},
            activeTab: module26(t.tabs, "[0].name"),
            updatedTabs: {}
        };
        t.store = new module322;
        return t;
    }
    module37(r, [
        {
            key: "getChildContext",
            value: function() {
                return {
                    registerUpdate: this.registerUpdate
                };
            }
        }
    ]);
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                this.store.fetchDetail({
                    name: globals.user.username
                }).then(()=>{
                    const formData = {
                        apiVersion: "iam.kubesphere.io/v1beta1",
                        kind: "User",
                        ...module136(module14.toJS(_this.store.detail._originData))
                    };
                    module74(formData, "metadata.resourceVersion", _this.store.detail.resourceVersion);
                    _this.setState({
                        formData
                    });
                });
            }
        },
        {
            key: "renderTabs",
            value: function() {
                const _this = this;
                return <ul className={module3552.tabs}>{this.tabs.map(({ icon = "appcenter", title, name })=>{
                    const state = _this.state;
                    const { activeTab, updatedTabs } = state;
                    const f = name === activeTab;
                    const type = f ? "light" : "dark";
                    return <li onClick={_this.handleChangeTab} key={title} data-name={name} className={module3(module31({}, module3552.active, f))}><module186.Tooltip placement="bottomLeft" content={module198(updatedTabs, name) ? _this.updateTip : ""}><span className={module3552.tooltipTrigger}><module186.Icon name={icon} size={16} type={type}/>{module198(updatedTabs, name) && <span className={module3552.tipIcon}/>}</span></module186.Tooltip><p>{t(title)}</p></li>;
                })}</ul>;
            }
        },
        {
            key: "renderFormComponents",
            value: function() {
                const state = this.state;
                const { activeTab, updatedTabs } = state;
                return <div className={module3552.formWrapper}>{this.tabs.map(this.renderForm)}<div className={module3(module3552.operations, module31({}, module3552.active, module198(updatedTabs, activeTab)))}><Module829 className={module3552.confirm} onOk={this.handleSaveChanges(activeTab)} onCancel={this.handleDiscardChanges(activeTab)}/></div></div>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                return <div className={module3552.content}><div className={module3552.forms}>{this.renderTabs()}{this.renderFormComponents()}</div></div>;
            }
        },
        {
            key: "renderFooter",
            value: function() {
                const subRoute = this.state.subRoute;
                const a = subRoute === undefined ? {} : subRoute;
                const { onCancel, onSave } = a;
                return <div className={module3552.footer}>{onCancel && <module186.Button onClick={this.handlePrev}>{t("PREVIOUS")}</module186.Button>}{onSave && <module186.Button type="control" onClick={this.handleSubFormSave}>{t("OK")}</module186.Button>}{module63(a) && <module186.Button onClick={this.props.onCancel}>{t("CLOSE")}</module186.Button>}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { detail: _detail, onOk: _onOk, ...rest } = props;
                return <Module788 bodyClassName={module3552.body} title={t("USER_SETTINGS")} icon="wrench" width={1162} hideFooter {...rest}><div className={module3552.main}>{this.renderContent()}{this.renderFooter()}</div></Module788>;
            }
        },
        {
            key: "updateTip",
            get: function() {
                return <div className={module3552.tip}><h6>{t("CONTENT_NOT_SAVED_TIPS")}</h6><p>{t("SAVE_EDIT_HINTS")}</p></div>;
            }
        },
        {
            key: "tabs",
            get: function() {
                return module3547;
            }
        }
    ]);
    return r;
})(Component);
export default I;
I.propTypes = {
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
};
I.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
};
I.childContextTypes = {
    registerUpdate: module1.func
};
