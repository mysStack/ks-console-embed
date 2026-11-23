import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
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
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import module186 from "unpacked/module-186.js";
import Module829 from "components/Forms/Base/Confirm";
import module2926 from "components/Modals/Edit/Form/wrapper";
import module1678 from "unpacked/module-1678.js";
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
        t.registerSubRoute = function(onSave, onCancel) {
            t.setState({
                subRoute: {
                    onSave,
                    onCancel
                }
            });
        };
        t.resetSubRoute = function() {
            t.setState({
                subRoute: {}
            });
        };
        t.handleSubFormSave = function() {
            const subRoute = t.state.subRoute;
            if (subRoute && subRoute.onSave) {
                subRoute.onSave(function() {
                    t.setState({
                        subRoute: {}
                    });
                });
            }
        };
        t.handleSubFormCancel = function() {
            const subRoute = t.state.subRoute;
            if (subRoute && subRoute.onCancel) {
                subRoute.onCancel();
                t.setState({
                    subRoute: {}
                });
            }
        };
        t.handlePrev = function() {
            t.setState(function({ subRoute }) {
                if (subRoute && subRoute.onCancel) {
                    subRoute.onCancel();
                }
                return {
                    subRoute: {}
                };
            });
        };
        t.handleChangeTab = function(e) {
            const name = e.target.dataset.name;
            if (name) {
                t.setState({
                    activeTab: name,
                    subRoute: {}
                });
            }
        };
        t.handleSaveForm = function(e, formData) {
            t.setState(function({ updatedTabs }) {
                updatedTabs[e] = formData;
                return {
                    updatedTabs,
                    formData
                };
            });
        };
        t.handleSubmit = function() {
            const updatedTabs = t.state.updatedTabs;
            if (module63(updatedTabs)) {
                t.props.onCancel();
            } else {
                t.props.onSubmit(t.state.formData, Object.keys(updatedTabs));
            }
        };
        t.tabs = e.forms.map((e)=>({
                ...e,
                component: module2926(e.component)
            }));
        t.state = {
            formData: e.data,
            activeTab: module26(t.tabs, "[0].name"),
            updatedTabs: {},
            subRoute: {}
        };
        return t;
    }
    module37(r, [
        {
            key: "getChildContext",
            value: function() {
                return {
                    registerSubRoute: this.registerSubRoute,
                    resetSubRoute: this.resetSubRoute
                };
            }
        }
    ]);
    module37(r, [
        {
            key: "renderTabs",
            value: function() {
                const state = this.state;
                const { activeTab, updatedTabs } = state;
                return <ul className={module1678.tabs} onClick={this.handleChangeTab}>{this.tabs.map(({ icon, title, name })=>{
                    const i = name === activeTab;
                    const type = i ? "light" : "dark";
                    return <li key={title} data-name={name} className={module3(module31({}, module1678.active, i))}><div className={module1678.icon}><module186.Icon name={icon || "appcenter"} size={20} type={type}/></div><p>{t(title)}</p><module186.Icon className={module3(module1678.updated, module31({}, module1678.active, updatedTabs[name]))} name="exclamation" size={18} color={{
                        primary: "#fff",
                        secondary: "#f5a623"
                    }}/></li>;
                })}</ul>;
            }
        },
        {
            key: "renderForm",
            value: function() {
                const props = this.props;
                const { module, cluster, store, namespace, ...rest } = props;
                const state = this.state;
                const { activeTab, formData } = state;
                const f = this.tabs.find((e)=>e.name === activeTab) || {};
                const store_1 = f.store || store;
                const Component = f.component;
                this.formRef = createRef();
                return <div className={module1678.form}>{<Component {...rest} {...f} formRef={this.formRef} module={module} namespace={namespace} store={store_1} formData={formData} cluster={cluster} onSaveChange={this.handleSaveForm}/>}{this.renderSubRouteConfirm()}</div>;
            }
        },
        {
            key: "renderSubRouteConfirm",
            value: function() {
                const subRoute = this.state.subRoute;
                if (module63(subRoute)) {
                    return null;
                }
                return <Module829 className={module1678.confirm} onOk={this.handleSubFormSave} onCancel={this.handleSubFormCancel}/>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                return <div className={module1678.content}><div className={module1678.container}>{this.renderTabs()}{this.renderForm()}</div></div>;
            }
        },
        {
            key: "renderFooter",
            value: function() {
                const updatedTabs = this.state.updatedTabs;
                return <div className={module1678.footer}><div><module186.Button onClick={this.props.onCancel}>{t("CANCEL")}</module186.Button>{this.props.onSubmit && <module186.Button type="control" disabled={module63(updatedTabs)} loading={this.props.isSubmitting} onClick={this.handleSubmit}>{t("OK")}</module186.Button>}</div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module1678.wrapper}>{this.renderContent()}{this.renderFooter()}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default C;
C.propTypes = {
    module: module1.string,
    store: module1.object,
    forms: module1.array,
    data: module1.object,
    onSubmit: module1.func
};
C.defaultProps = {
    store: {},
    forms: [],
    data: {}
};
C.childContextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
};
