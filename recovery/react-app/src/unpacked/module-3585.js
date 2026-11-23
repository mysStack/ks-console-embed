import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-87.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import module136 from "./module-136.js";
import module60 from "./module-60.js";
import module63 from "./module-63.js";
import module807 from "./module-807.js";
import module186 from "./module-186.js";
import module791 from "components/Base/Text";
import module852 from "components/Base/Switch";
import module885 from "components/EditMode";
import { trigger } from "utils/action";
import module14 from "./module-14.js";
import module435 from "utils/form.templates";
import module3586 from "./module-3586.js";
import module3588 from "./module-3588.js";
import module3589 from "./module-3589.js";
import module3590 from "./module-3590.js";
import module3592 from "./module-3592.js";
let u;
let c;
let s;
const TabPanel = module186.Tabs.TabPanel;
const F = trigger(u = observer((s = c = ((e)=>{
    module55(n, e);
    let a;
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
        t.getFormDataFromCode = function(e) {
            const code2formParse = t.props.code2formParse;
            return (code2formParse === undefined ? function(e) {
                return e;
            } : code2formParse)(module60(e) ? e.reduce((acc, item)=>({
                    ...acc,
                    ...item
                }), {}) : e);
        };
        t.handleModeChange = function() {
            const form2codeParse = t.props.form2codeParse;
            const a = form2codeParse === undefined ? (e)=>e : form2codeParse;
            t.setState(function({ isCodeMode, storageFormTemplate }) {
                const l = {
                    storageFormTemplate: a(storageFormTemplate),
                    isCodeMode: !isCodeMode
                };
                if (isCodeMode) {
                    l.storageFormTemplate = t.getFormDataFromCode(t.getData());
                }
                return l;
            });
        };
        t.handleFormChange = function() {
            const t_state = t.state;
            const { formTemplate, storageFormTemplate, enabledStorage } = t_state;
            t.context.registerUpdate(t.name, {
                enabledStorage,
                formTemplate,
                storageFormTemplate
            });
        };
        t.handleStorageChange = function() {
            const t_state = t.state;
            const { formTemplate, storageFormTemplate, enabledStorage } = t_state;
            const registerUpdate = t.context.registerUpdate;
            t.setState({
                hasObjectSet: false
            });
            registerUpdate(t.name, {
                enabledStorage,
                formTemplate,
                storageFormTemplate
            });
        };
        t.verifyStorage = async (a)=>{
            let r;
            r = t.props.store;
            return r.verifyStorage(a);
        };
        t.handleStorageSubmit = async (a)=>{
            let r;
            let n;
            let l;
            let u;
            let t0;
            r = t.state.isCodeMode;
            n = t.props.store;
            l = !module63(t.storageData);
            if (r) {
                t0 = t.getFormDataFromCode(t.getData());
            } else {
                t0 = await t.getFormData();
            }
            u = t0;
            await t.verifyStorage(u);
            if (l) {
                await n.updateStorage(u);
            } else {
                await n.createStorage(u);
            }
            t.setState({
                hasObjectSet: true
            });
            a();
        };
        t.handleSubmit = function(e) {
            const onSave = t.props.onSave;
            const t_state = t.state;
            const r_formTemplate = t_state.formTemplate;
            if (t_state.type === "objectStorage") {
                t.handleStorageSubmit(e);
            } else if (t.formRef.current) {
                t.formRef.current.validate(function() {
                    onSave(r_formTemplate, [
                        "store",
                        "compactor"
                    ]);
                    e();
                });
            }
        };
        t.handleTabChange = function(type) {
            return t.setState({
                type
            });
        };
        t.resetData = function() {
            const formTemplate = t.props.formTemplate;
            const a = module136(t.storageData);
            t.setState({
                formTemplate: module136(formTemplate),
                storageFormTemplate: module63(a) ? module136(module435[t.name]()) : a,
                hasObjectSet: !module63(a)
            });
        };
        t.handleStorageEnabledChange = function(enabledStorage_1) {
            const t_props = t.props;
            const { store, cancelUpdate } = t_props;
            if (!enabledStorage_1) {
                t.trigger("whizard.storage.delete", {
                    store: t.props.store,
                    success: function() {
                        store.storage.data = {};
                        t.resetData();
                        cancelUpdate(t.name);
                        t.setState({
                            enabledStorage: enabledStorage_1
                        });
                    }
                });
            }
        };
        t.handleEnabledStorage = function() {
            const t_state = t.state;
            const { formTemplate, storageFormTemplate, enabledStorage } = t_state;
            t.context.registerUpdate(t.name, {
                enabledStorage,
                formTemplate,
                storageFormTemplate
            });
            t.setState({
                ...t.state,
                enabledStorage: true
            });
        };
        const t_props = t.props;
        const { updatedData, formTemplate } = t_props;
        const c = updatedData || {};
        const { formTemplate: formTemplate_1, storageFormTemplate, enabledStorage } = c;
        const m = storageFormTemplate || t.storageData;
        const v = formTemplate_1 || formTemplate;
        t.state = {
            type: "objectStorage",
            isCodeMode: false,
            enabledStorage: enabledStorage || !module63(m),
            hasObjectSet: module807(storageFormTemplate, t.storageData),
            formTemplate: module136(v),
            storageFormTemplate: module136(m)
        };
        t.formRef = module553.createRef();
        t.storageFormRef = module553.createRef();
        t.editor = module553.createRef();
        return t;
    }
    module37(n, [
        {
            key: "name",
            get: function() {
                return "storage";
            }
        },
        {
            key: "storageData",
            get: function() {
                return module14.toJS(this.props.store.storage.data);
            }
        }
    ]);
    module37(n, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const props = this.props;
                const { updatedData, formTemplate } = props;
                const storageFormTemplate_1 = this.state.storageFormTemplate;
                const l = updatedData || {};
                const { formTemplate: formTemplate_1, storageFormTemplate } = l;
                if (!(e.formTemplate === formTemplate && e.updatedData === updatedData)) {
                    this.setState({
                        formTemplate: module136(formTemplate_1 || formTemplate),
                        storageFormTemplate: storageFormTemplate ? module136(storageFormTemplate) : storageFormTemplate_1
                    });
                }
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.fetchStorage();
            }
        },
        {
            key: "getData",
            value: function() {
                return this.editor.current.getData();
            }
        },
        {
            key: "fetchStorage",
            value: (a = module44(module41.mark(function e() {
                let t;
                let a;
                let r;
                let n;
                let l;
                let u;
                let c;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                t = this.props;
                                a = t.updatedData;
                                r = t.store;
                                l = (n = a || {}).storageFormTemplate;
                                u = n.enabledStorage;
                                if (!l && !u) {
                                    e.next = 4;
                                    break;
                                }
                                return e.abrupt("return");
                            case 4:
                                e.next = 6;
                                return r.fetchStorage();
                            case 6:
                                c = module136(this.storageData);
                                this.setState({
                                    ...this.state,
                                    enabledStorage: !module63(c),
                                    hasObjectSet: !module63(c),
                                    storageFormTemplate: module63(c) ? module136(module435[this.name]()) : c
                                });
                            case 8:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function() {
                return a.apply(this, arguments);
            })
        },
        {
            key: "getFormData",
            value: function() {
                const _this = this;
                return new Promise((resolve)=>{
                    if (_this.storageFormRef.current) {
                        _this.storageFormRef.current.validate(function() {
                            resolve(_this.storageFormRef.current.getData());
                        });
                    }
                });
            }
        },
        {
            key: "renderForms",
            value: function() {
                const storageFormTemplate = this.state.storageFormTemplate;
                return module553.default.createElement(module186.Form, {
                    data: storageFormTemplate,
                    ref: this.storageFormRef,
                    onChange: this.handleStorageChange
                }, module553.default.createElement(module3590, null));
            }
        },
        {
            key: "renderCodeEditor",
            value: function() {
                const storageFormTemplate = this.state.storageFormTemplate;
                return module553.default.createElement(module885, {
                    ref: this.editor,
                    value: {
                        formTemplate: storageFormTemplate
                    },
                    onChange: this.handleStorageChange
                });
            }
        },
        {
            key: "renderOperations",
            value: function() {
                const state = this.state;
                const e_isCodeMode = state.isCodeMode;
                if (state.type !== "objectStorage") {
                    return null;
                }
                return module553.default.createElement(module852, {
                    className: module3592.yamlSwitch,
                    text: t("EDIT_YAML"),
                    onChange: this.handleModeChange,
                    checked: e_isCodeMode
                });
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { enabledStorage, type, isCodeMode, formTemplate, hasObjectSet } = state;
                const store = this.props.store;
                if (enabledStorage) {
                    return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                        className: module3592.wrapper
                    }, module553.default.createElement("div", {
                        className: module3592.textWrapper
                    }, module553.default.createElement(module791, {
                        className: module3592.text,
                        icon: function() {
                            return module553.default.createElement(module186.Icon, {
                                name: "storage",
                                size: 40,
                                style: {
                                    marginRight: "12px"
                                }
                            });
                        },
                        title: t("LONG_TERM_STORAGE"),
                        description: t("LONG_TERM_STORAGE_TIPS")
                    }), module553.default.createElement(module852, {
                        className: module3592.switch,
                        text: enabledStorage ? t("ENABLED") : t("DISABLED"),
                        checked: enabledStorage,
                        onChange: this.handleStorageEnabledChange
                    }))), module553.default.createElement("div", {
                        className: module3592.form
                    }, module553.default.createElement(module186.Tabs, {
                        type: "button",
                        value: type,
                        onChange: this.handleTabChange
                    }, module553.default.createElement(TabPanel, {
                        label: t("OBJECT_STORAGE"),
                        name: "objectStorage"
                    }, isCodeMode ? this.renderCodeEditor() : this.renderForms()), module553.default.createElement(TabPanel, {
                        label: hasObjectSet ? t("STORE_GATEWAY") : module553.default.createElement(module186.Tooltip, {
                            className: module3592.tooltip,
                            content: t("OBJECT_STORAGE_TIPS"),
                            placement: "top"
                        }, module553.default.createElement("span", null, t("STORE_GATEWAY"))),
                        name: "store",
                        disabled: !hasObjectSet
                    }, module553.default.createElement(module186.Form, {
                        ref: this.formRef,
                        data: formTemplate,
                        onChange: this.handleFormChange
                    }, module553.default.createElement(module3589, {
                        formTemplate
                    }))), module553.default.createElement(TabPanel, {
                        label: hasObjectSet ? t("COMPRESSION_DOWNSAMPLING") : module553.default.createElement(module186.Tooltip, {
                            className: module3592.tooltip,
                            content: t("OBJECT_STORAGE_TIPS"),
                            placement: "top"
                        }, module553.default.createElement("span", null, t("COMPRESSION_DOWNSAMPLING"))),
                        disabled: !hasObjectSet,
                        name: "compactor"
                    }, module553.default.createElement(module186.Form, {
                        ref: this.formRef,
                        data: formTemplate,
                        onChange: this.handleFormChange
                    }, module553.default.createElement(module3588, {
                        formTemplate
                    })))), this.renderOperations()));
                }
                return module553.default.createElement(module186.Loading, {
                    spinning: store.storage.isLoading
                }, module553.default.createElement(module3586, {
                    handleEnabledStorage: this.handleEnabledStorage
                }));
            }
        }
    ]);
    return n;
})(module553.default.Component), c.contextTypes = {
    registerUpdate: module1.func,
    setError: module1.func
}, u = s)) || u) || u;
export default F;
