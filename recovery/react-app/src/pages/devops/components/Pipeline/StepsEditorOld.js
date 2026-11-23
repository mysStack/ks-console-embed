import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-29.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-192.js";
import "unpacked/module-16.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-118.js";
import "unpacked/module-28.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-57.js";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module186 from "unpacked/module-186.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module807 from "unpacked/module-807.js";
import module74 from "unpacked/module-74.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import { Component } from "unpacked/module-553.js";
import module1061 from "unpacked/module-1061.js";
import module1017 from "unpacked/module-1017.js";
import Module1376 from "unpacked/module-1376.js";
import Module3230 from "pages/devops/components/Pipeline/StepsSelectorOld";
import Module1722 from "pages/devops/components/Pipeline/StepsEditorOld/StepContainer";
let l;
let u;
let o;
let i;
let c;
let s;
let f;
let d;
let p;
let m;
let h;
let v;
let g;
let y;
let E;
let b;
let _;
let O;
let S;
let C;
const options = [
    {
        label: "Any",
        value: "any"
    },
    {
        label: "node",
        value: "node"
    },
    {
        label: "kubernetes",
        value: "kubernetes"
    },
    {
        label: "none",
        value: "none"
    }
];
const Q = observer((C = S = ((Component_1)=>{
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
        module65(e, "zIndex", o, module88(e));
        module65(e, "isEditMode", i, module88(e));
        module65(e, "formData", c, module88(e));
        module65(e, "showYaml", s, module88(e));
        module65(e, "handleChangeName", f, module88(e));
        module65(e, "handleSetYaml", d, module88(e));
        module65(e, "hideYamlEditor", p, module88(e));
        module65(e, "showEditor", m, module88(e));
        e.initFormData = function() {
            const t = module14.toJS(module26(e.props.activeStage, "agent.arguments", []));
            e.formData = t.reduce((acc, item)=>{
                if (Array.isArray(item.value)) {
                    const a = item.value.reduce((acc_1, item_1)=>{
                        const a = {};
                        a[item_1.key] = item_1.value.value;
                        acc_1.push(a);
                        return acc_1;
                    }, []);
                    acc[item.key] = a;
                } else {
                    acc[item.key] = item.value.value;
                }
                return acc;
            }, {});
        };
        e.handleAgentTypeArg = function() {
            e.getAgentArguments();
        };
        e.renderAgentForms = function() {
            const options_1 = module14.toJS(e.labelDataList);
            const defaultValue = module26(options_1, "0.value", "");
            switch(e.agentType){
                case "node":
                    return <module186.Form data={e.formData} ref={e.formRef}><module186.Form.Item label={t("label")} desc={t("The label on which to run the Pipeline or individual stage")}><module186.Select name="label" options={options_1} defaultValue={defaultValue} onChange={e.handleAgentTypeArg}/></module186.Form.Item></module186.Form>;
                case "kubernetes":
                    return <module186.Form data={e.formData} ref={e.formRef}><module186.Form.Item label={t("label")} desc={t("")}><module186.Input name="label" defaultValue="default" onChange={e.handleAgentTypeArg}/></module186.Form.Item><module186.Form.Item label={t("yaml")} desc=<span className={module1017.clickable} onClick={e.showEditor}>{t("show yaml editor")}</span>><module186.Input name="yaml" onChange={e.handleAgentTypeArg}/></module186.Form.Item><module186.Form.Item label={t("defaultContainer")} desc={t("")}><module186.Input name="defaultContainer" onChange={e.handleAgentTypeArg}/></module186.Form.Item></module186.Form>;
                default:
                    return null;
            }
        };
        module65(e, "handleAgentTypeChange", h, module88(e));
        e.handleDelete = function() {
            e.props.store.deleteStage();
        };
        module65(e, "toggleAddStep", v, module88(e));
        module65(e, "handleEdit", g, module88(e));
        module65(e, "handleEditCancel", y, module88(e));
        module65(e, "handleEditStep", E, module88(e));
        module65(e, "handleAddStep", b, module88(e));
        e.addNoInputTask = function(name) {
            const activeStage = e.props.activeStage;
            if (!activeStage.when) {
                module74(activeStage, "when.conditions", []);
            }
            if (e.zIndex.length) {
                const r = e.zIndex.reduce((acc, item, index)=>{
                    if (index === 0) {
                        return `[${item}]`;
                    }
                    return `${acc}.children[${item}]`;
                }, "");
                module26(activeStage.when.conditions, `${r}.children`).push({
                    name,
                    children: []
                });
            } else {
                activeStage.when.conditions.push({
                    name,
                    children: []
                });
            }
            e.props.store.isAddingStep = false;
            e.handleSetValue();
        };
        module65(e, "handleDeleteStep", _, module88(e));
        module65(e, "handleSortSteps", O, module88(e));
        e.handleSetValue = function() {
            if (e.props.activeStage.when && !e.props.activeStage.when.conditions.length) {
                delete e.props.activeStage.when;
            }
            if (e.props.activeStage.error) {
                e.props.activeStage.error = undefined;
            }
            e.props.store.setValue(e.props.activeStage);
        };
        e.cancelFocus = function() {
            e.getAgentArguments();
            e.props.store.clearFocus();
        };
        return e;
    }
    module37(r, [
        {
            key: "getChildContext",
            value: function() {
                return {
                    toggleAddStep: this.toggleAddStep,
                    handleEdit: this.handleEdit,
                    handleDeleteStep: this.handleDeleteStep
                };
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.initFormData();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!module807(this.props.activeStage, e.activeStage)) {
                    this.initFormData();
                }
            }
        },
        {
            key: "getAgentArguments",
            value: function() {
                const _this = this;
                const t = module26(this.props.activeStage, "agent.type");
                const a = module26(this.props.activeStage, "agent.arguments");
                const r = module14.toJS(this.formData);
                if (!t) {
                    module74(this.props.activeStage, "agent.type", "none");
                }
                if (!module63(r)) {
                    const n = Object.keys(this.formData).map((t)=>{
                        const a = module14.toJS(_this.formData[t]);
                        if (Array.isArray(a)) {
                            return {
                                key: t,
                                value: a.map((e)=>Object.keys(e).map((t)=>({
                                            key: t,
                                            value: {
                                                isLiteral: true,
                                                value: e[t]
                                            }
                                        }))[0])
                            };
                        }
                        return {
                            key: t,
                            value: {
                                isLiteral: true,
                                value: a
                            }
                        };
                    });
                    module74(this.props.activeStage, "agent.arguments", module63(n) ? undefined : n);
                }
                if (module63(r) && !module63(module14.toJS(a))) {
                    delete this.props.activeStage.agent.arguments;
                }
            }
        },
        {
            key: "renderConditions",
            value: function() {
                const steps = module26(this.props, "activeStage.when.conditions");
                if (steps) {
                    return <Module1722 steps={steps} zIndex={[]} listType="condition"/>;
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                const isAddingStep = this.props.store.isAddingStep;
                return <div className={module1017.sheet}><div className={module1017.title}>{t("STAGE")}<span className={module1017.delete} onClick={this.handleDelete}><module186.Icon name="trash" clickable/></span></div><div className={module1017.form}><module186.Form.Item label={t("NAME")}><module186.Input className={module1017.name_input} value={this.props.activeStage.name || ""} onChange={this.handleChangeName}/></module186.Form.Item><div className={module1017.title}>{t("AGENT")}</div><module186.Form.Item desc={t("AGENT_TYPE_DESC")} label={t("TYPE")}><module186.Select options={options} defaultValue="none" value={this.agentType} onChange={this.handleAgentTypeChange}/></module186.Form.Item>{this.renderAgentForms()}<div className={module1017.title}>{t("pipeline_conditions")}<span>{t("The conditions required to implement the current phase (optional).")}</span></div><div className={module1017.conditionList}>{this.renderConditions()}</div>{this.hasNestStage ? null : <div className={module1061.addSteps} onClick={this.toggleAddStep("", "condition")}><module186.Icon name="add"/>  {t("Add conditions")}</div>}<div className={module1017.title}>{t("TASK")}</div><Module1722 steps={this.steps} zIndex={[]}/>{this.hasNestStage ? null : <div className={module1061.addSteps} onClick={this.toggleAddStep("")}><module186.Icon name="add"/>  {t("Add Step")}</div>}</div><div className={module1017.footer}><module186.Button onClick={this.cancelFocus}>{t("OK")}</module186.Button></div>{isAddingStep ? <Module3230 onAddStep={this.handleAddStep} store={this.props.store} isEditMode={this.isEditMode} onCancel={this.handleEditCancel} onAddNoInputTask={this.addNoInputTask}/> : null}<Module1376 value={this.formData.yaml || ""} visible={this.showYaml} onCancel={this.hideYamlEditor} onOk={this.handleSetYaml}/></div>;
            }
        },
        {
            key: "steps",
            get: function() {
                return module26(this.props.activeStage, "branches[0].steps", []);
            }
        },
        {
            key: "labelDataList",
            get: function() {
                return module26(this.props.store, "labelDataList", []);
            }
        },
        {
            key: "hasNestStage",
            get: function() {
                return !!this.props.activeStage.stages;
            }
        },
        {
            key: "agentType",
            get: function() {
                return module26(this.props.activeStage, "agent.type", "none");
            }
        }
    ]);
    return r;
})(Component), S.defaultProps = {
    activeStage: {}
}, S.childContextTypes = {
    toggleAddStep: module1.func,
    handleEdit: module1.func,
    handleDeleteStep: module1.func
}, u = C, o = module49(u.prototype, "zIndex", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
}), i = module49(u.prototype, "isEditMode", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), c = module49(u.prototype, "formData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
}), s = module49(u.prototype, "showYaml", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), f = module49(u.prototype, "handleChangeName", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.props.activeStage.name = t;
            _this.handleSetValue();
        };
    }
}), d = module49(u.prototype, "handleSetYaml", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.formData.yaml = t;
            _this.handleAgentTypeArg();
            _this.showYaml = false;
        };
    }
}), p = module49(u.prototype, "hideYamlEditor", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.showYaml = false;
        };
    }
}), m = module49(u.prototype, "showEditor", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.showYaml = true;
        };
    }
}), h = module49(u.prototype, "handleAgentTypeChange", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            let label = "";
            switch(t){
                case "node":
                    label = module26(module14.toJS(_this.labelDataList), "0.value", "");
                    _this.formData = {
                        label
                    };
                    break;
                case "kubernetes":
                    label = "default";
                    _this.formData = {
                        label
                    };
                    break;
                default:
                    _this.formData = {};
            }
            module74(_this.props.activeStage, "agent.type", t);
            _this.handleAgentTypeArg();
            _this.handleSetValue();
        };
    }
}), v = module49(u.prototype, "toggleAddStep", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t, a) {
            return function() {
                _this.isEditMode = false;
                _this.zIndex = t;
                _this.props.store.isAddingStep = a || true;
            };
        };
    }
}), g = module49(u.prototype, "handleEdit", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t, a, r, n) {
            return function() {
                _this.props.store.setEdittingData({
                    type: r.name,
                    data: r.arguments
                });
                _this.index = a;
                _this.zIndex = t;
                _this.isEditMode = true;
                _this.props.store.isAddingStep = n || true;
            };
        };
    }
}), y = module49(u.prototype, "handleEditCancel", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            if (_this.isEditMode) {
                _this.isEditMode = false;
                _this.props.store.isAddingStep = false;
                _this.props.store.setEdittingData({});
            }
        };
    }
}), E = module49(u.prototype, "handleEditStep", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            if (_this.zIndex.length) {
                const a = _this.zIndex.reduce((acc, item, index)=>{
                    if (index === 0) {
                        return `[${item}]`;
                    }
                    return `${acc}.children[${item}]`;
                }, "");
                const r = module26(_this.steps, `${a}.children[${_this.index}].children`);
                if (r) {
                    t.children = r;
                }
                module26(_this.steps, `${a}.children`).splice(_this.index, 1, t);
            } else {
                const n = module26(_this.steps, `[${_this.index}].children`);
                if (n) {
                    t.children = n;
                }
                _this.steps.splice(_this.index, 1, t);
            }
            _this.props.store.isAddingStep = false;
            _this.isEditMode = false;
            _this.props.store.setEdittingData({});
            _this.handleSetValue();
        };
    }
}), b = module49(u.prototype, "handleAddStep", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            if (_this.isEditMode) {
                _this.handleEditStep(t);
            } else {
                let a = _this.steps;
                if (typeof _this.props.store.isAddingStep === "string") {
                    if (!_this.props.activeStage.when) {
                        module74(_this.props.activeStage, "when.conditions", []);
                    }
                    a = _this.props.activeStage.when.conditions;
                }
                if (_this.zIndex.length) {
                    const r = _this.zIndex.reduce((acc, item, index)=>{
                        if (index === 0) {
                            return `[${item}]`;
                        }
                        return `${acc}.children[${item}]`;
                    }, "");
                    module26(a, `${r}.children`).push(t);
                } else {
                    a.push(t);
                }
                _this.props.store.isAddingStep = false;
                _this.handleSetValue();
            }
        };
    }
}), _ = module49(u.prototype, "handleDeleteStep", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t, a, r) {
            return function() {
                const n = r ? _this.props.activeStage.when.conditions : _this.steps;
                if (a.length) {
                    const l = a.reduce((acc, item, index)=>{
                        if (index === 0) {
                            return `[${item}]`;
                        }
                        return `${acc}.children[${item}]`;
                    }, "");
                    module26(n, `${l}.children`).splice(t, 1);
                } else {
                    n.splice(t, 1);
                }
                _this.setState({
                    index: 1
                });
                _this.handleSetValue();
            };
        };
    }
}), O = module49(u.prototype, "handleSortSteps", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            return function(a) {
                if (t.length) {
                    const r = t.reduce((acc, item, index)=>{
                        if (index === 0) {
                            return `[${item}]`;
                        }
                        return `${acc}.children[${item}]`;
                    }, "");
                    const n = module26(_this.steps, `${r}.children`);
                    const l = a.map((e)=>n.find((t, a)=>JSON.stringify(t) + a === e));
                    module74(_this.steps, `${r}.children`, l);
                } else {
                    const u = _this.steps;
                    const o = a.map((e)=>u.find((t, a)=>JSON.stringify(t) + a === e));
                    module74(_this.props.activeStage, "branches[0].steps", o);
                }
                _this.handleSetValue();
            };
        };
    }
}), l = u)) || l;
export default Q;
