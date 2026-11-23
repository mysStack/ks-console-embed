import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-87.js";
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
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import { observer } from "./module-239.js";
import module26 from "./module-26.js";
import module198 from "./module-198.js";
import module63 from "./module-63.js";
import module199 from "./module-199.js";
import module14 from "./module-14.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module788 from "components/Base/Modal";
import module829 from "components/Forms/Base/Confirm";
import module435 from "utils/form.templates";
import module3577 from "./module-3577.js";
import module3594 from "./module-3594.js";
let u;
let c;
let s;
const M = observer((s = c = ((e)=>{
    module55(n, e);
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
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.setError = function(error) {
            t.setState({
                error
            });
        };
        t.handleSubFormSave = function(e) {
            if (!t.state.error) {
                if (t[`ref${e}`].current) {
                    t[`ref${e}`].current.handleSubmit(function() {
                        t.cancelUpdate(e);
                    });
                }
            }
        };
        t.handleDiscardChanges = function(e) {
            t.handleSubFormCancel(e);
            t.cancelUpdate(e);
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
        t.handleSubFormCancel = function(e) {
            if (t[`ref${e}`].current) {
                t[`ref${e}`].current.resetData();
            }
        };
        t.registerUpdate = function(e, a) {
            const updatedTabs = t.state.updatedTabs;
            t.setState({
                updatedTabs: {
                    ...updatedTabs,
                    ...module31({}, e, a)
                }
            });
        };
        t.handleCancel = function() {
            t.props.onCancel();
        };
        t.handleOk = async function e() {
            t.props.onOk(t.state.formTemplate);
        };
        t.handleChangeTab = function(e) {
            const name = e.currentTarget.dataset.name;
            if (name) {
                t.setState({
                    activeTab: name,
                    error: false
                });
            }
        };
        t.onSave = function(e, a) {
            t.setState({
                formTemplate: a.reduce((acc, item)=>module199(acc, module31({}, item, module26(e, item, {}))), {
                    ...t.state.formTemplate
                })
            });
        };
        t.renderTabs = function() {
            const t_state = t.state;
            const { activeTab, updatedTabs } = t_state;
            return module553.default.createElement("ul", {
                className: module3594.tabs
            }, t.tabs.map(({ icon = "appcenter", title, name })=>{
                const c = name === activeTab;
                const type = c ? "light" : "dark";
                return module553.default.createElement("li", {
                    onClick: t.handleChangeTab,
                    key: title,
                    "data-name": name,
                    className: module3(module31({}, module3594.active, c))
                }, module553.default.createElement(module186.Tooltip, {
                    placement: "bottomLeft",
                    content: module198(updatedTabs, name) ? t.updateTip : ""
                }, module553.default.createElement("span", {
                    className: module3594.tooltipTrigger
                }, module553.default.createElement(module186.Icon, {
                    name: icon,
                    size: 20,
                    type
                }), module198(updatedTabs, name) && module553.default.createElement("span", {
                    className: module3594.tipIcon
                }))), module553.default.createElement("p", null, title));
            }));
        };
        t.renderContent = function() {
            const t_state = t.state;
            const { activeTab, formTemplate, updatedTabs } = t_state;
            const l = t.tabs.filter((e)=>e.name === activeTab)[0];
            if (module63(formTemplate) || !l) {
                return null;
            }
            t[`ref${activeTab}`] = module553.createRef();
            return <l.component updatedData={module26(updatedTabs, activeTab, null)} formTemplate={formTemplate} onSave={t.onSave} cancelUpdate={t.cancelUpdate} store={t.store} ref={t[`ref${activeTab}`]} rootStore={t.props.rootStore}/>;
        };
        t.state = {
            activeTab: "dataAccess",
            error: false,
            formTemplate: {},
            updatedTabs: {}
        };
        return t;
    }
    module37(n, [
        {
            key: "getChildContext",
            value: function() {
                return {
                    registerUpdate: this.registerUpdate,
                    setError: this.setError
                };
            }
        }
    ]);
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchConfigs();
            }
        },
        {
            key: "fetchConfigs",
            value: async function() {
                await this.store.fetchConfigs();
                this.setState({
                    formTemplate: module199({}, module435.whizard(), module14.toJS(this.store.configs.data))
                });
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const visible = this.props.visible;
                const state = this.state;
                const { activeTab, updatedTabs } = state;
                const isLoading = this.store.configs.isLoading;
                return module553.default.createElement(module788, {
                    bodyClassName: module3594.body,
                    width: 1162,
                    title: t("COMPONENT_PARAMETER_CONFIG"),
                    icon: "cogwheel",
                    visible,
                    onCancel: this.handleCancel,
                    hideFooter: true
                }, module553.default.createElement(module186.Loading, {
                    spinning: isLoading
                }, module553.default.createElement("div", {
                    className: module3594.wrapper
                }, this.renderTabs(), module553.default.createElement("div", {
                    className: module3594.content
                }, module553.default.createElement("div", {
                    className: module3594.main
                }, this.renderContent()), module553.default.createElement(module829, {
                    className: module3(module3594.confirm, module31({}, module3594.confirmActive, module198(updatedTabs, activeTab))),
                    onOk: function() {
                        return _this.handleSubFormSave(activeTab);
                    },
                    onCancel: function() {
                        return _this.handleDiscardChanges(activeTab);
                    }
                })))), module553.default.createElement("div", {
                    className: module3594.formFooter
                }, module553.default.createElement(module186.Button, {
                    type: "default",
                    onClick: this.handleCancel,
                    "data-test": "modal-cancel"
                }, t("CANCEL")), module553.default.createElement(module186.Button, {
                    type: "control",
                    htmlType: "submit",
                    loading: this.store.isSubmitting,
                    disabled: !module63(updatedTabs),
                    onClick: this.handleOk,
                    "data-test": "modal-ok"
                }, t("OK"))));
            }
        },
        {
            key: "updateTip",
            get: function() {
                return module553.default.createElement("div", {
                    className: module3594.tip
                }, module553.default.createElement("h6", null, t("CONTENT_NOT_SAVED_TIPS")), module553.default.createElement("p", null, t("SAVE_EDIT_HINTS")));
            }
        },
        {
            key: "tabs",
            get: function() {
                return module3577;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.store;
            }
        }
    ]);
    return n;
})(module553.Component), c.propTypes = {
    store: module1.object,
    rootStore: module1.object,
    title: module1.string,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
}, c.childContextTypes = {
    registerUpdate: module1.func,
    setError: module1.func
}, u = s)) || u;
export default M;
