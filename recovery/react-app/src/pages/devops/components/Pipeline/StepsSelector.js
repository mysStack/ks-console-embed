import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module31 from "unpacked/module-31.js";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import { Component } from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import { ReactComponent } from "unpacked/module-882.js";
import Module1181 from "components/Modals/CredentialCreate";
import { PIPELINE_CONDITIONS } from "utils/constants";
import { Branch, Environment, Expression, Params } from "pages/devops/components/Pipeline/StepModals";
import module1017 from "unpacked/module-1017.js";
import module3272 from "unpacked/module-3272.js";
let o;
let i;
let c;
let s;
let f;
let d;
let p;
const x = {
    not: true,
    allOf: true,
    anyOf: true
};
const U = {
    branch: "network-router"
};
const z = {
    branch: t("Current branch name must match the input value"),
    environment: t("The environment variable entered before running the pipeline is match the current value."),
    expression: t("Enter an expression"),
    not: t("Negative prefix"),
    allOf: t("Internal nesting conditions must be matched"),
    anyOf: t("Internal nested conditions only need to satisfy one")
};
const F = observer((i = ((Component_1)=>{
    module55(o, Component_1);
    let r;
    var n = ((e)=>{
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
    })(o);
    function o(e) {
        let a;
        module36(this, o);
        a = n.call(this, e);
        module65(a, "activeTab", c, module88(a));
        module65(a, "handleBack", s, module88(a));
        module65(a, "handleCancel", f, module88(a));
        module65(a, "handleChangeActiveTab", d, module88(a));
        module65(a, "handleAddStep", p, module88(a));
        a.handleAddTask = function(e) {
            return function() {
                if (e in x) {
                    a.props.onAddNoInputTask(e);
                } else {
                    const t = a.state.stepTemplates.filter((t)=>t.name === e);
                    if (t.length) {
                        a.setState({
                            activeTask: t[0],
                            isShowParamModal: true
                        });
                    } else {
                        a.setState(module31({}, `isShow${e}`, true));
                    }
                }
            };
        };
        a.handleCreateCredential = async (t, r)=>{
            let n;
            let devops;
            let o;
            n = a.props.store.params;
            devops = n.devops;
            o = n.cluster;
            await a.props.store.createCredential(t, {
                devops,
                cluster: o
            });
            r();
            a.hideCreateCredential();
        };
        a.hideCreateCredential = async function e() {
            await a.props.store.getCredentials();
            a.setState({
                showCredential: false
            });
        };
        a.handleShowCredential = function() {
            a.setState({
                showCredential: true
            });
        };
        a.renderStepsModal = function() {
            const params = a.props.store.params;
            const { devops, cluster } = params;
            const store = a.props.store;
            const { edittingData, isAddingStep } = store;
            const activeTask = a.state.activeTask;
            const i = activeTask == null ? undefined : activeTask.parameters.some((e)=>e.type === "secret");
            if (isAddingStep === "condition") {
                return <><Branch visible={a.state.isShowbranch} onAddStep={a.handleAddStep("branch")} onCancel={a.handleCancel("branch")} edittingData={edittingData}/><Environment visible={a.state.isShowenvironment} onAddStep={a.handleAddStep("environment")} onCancel={a.handleCancel("environment")} edittingData={edittingData}/><Expression visible={a.state.isShowexpression} onAddStep={a.handleAddStep("expression")} onCancel={a.handleCancel("expression")} edittingData={edittingData}/></>;
            }
            return <>{activeTask && <Params visible={a.state.isShowParamModal} activeTask={activeTask} onAddStep={a.handleAddStep("ParamModal")} onCancel={a.handleCancel("ParamModal")} showCredential={a.handleShowCredential} edittingData={edittingData} store={a.props.store} devops={devops} cluster={cluster} trigger={a.props.trigger}/>}{i && <Module1181 visible={a.state.showCredential} onOk={a.handleCreateCredential} onCancel={a.hideCreateCredential} devops={devops} cluster={cluster}/>}</>;
        };
        a.renderSider = function() {
            if (a.props.store.isAddingStep === "condition") {
                return <div className={module1017.sheet} style={{
                    zIndex: 2
                }}><div className={module1017.title}><span className={module3("custom-icon", module3272.back)} onClick={a.handleBack}><ReactComponent/></span>{t("Add conditions")}</div><div className={module3272.taskList}>{PIPELINE_CONDITIONS.map((e)=><div className={module3272.task} key={e} onClick={a.handleAddTask(e)}><div className={module3272.taskIcon}><module186.Icon name={U[e] || "cdn"} size={24}/></div><div className={module3272.taskInfo}><div className={module3272.taskName}>{e}</div><div className={module3272.desc}>{z[e] || "-"}</div></div></div>)}</div></div>;
            }
            const e = a.state.stepTemplates.filter((e)=>e.category).reduce((acc, item)=>{
                const a = acc[item.category] || [];
                return {
                    ...acc,
                    ...module31({}, item.category, [].concat(module61(a), [
                        item
                    ]))
                };
            }, {
                All: a.state.stepTemplates
            });
            const r = a.state.stepTemplates.filter((e)=>!e.category);
            if (r.length) {
                e.others = r;
            }
            return <div className={module1017.sheet} style={{
                zIndex: 2
            }}><div className={module1017.title}><span className={module3("custom-icon", module3272.back)} onClick={a.handleBack}><ReactComponent/></span>{t("Add Step")}</div>{a.state.isLoading ? <module186.Loading className={module3272.loading}/> : <><div className={module3272.tabs}>{Object.keys(e).map((e)=><div key={e} className={module3(module3272.tab, module31({}, module3272.tab_active, a.activeTab === e))} onClick={a.handleChangeActiveTab(e)}>{t(e)}</div>)}</div><div className={module3272.taskList}>{(e[a.activeTab] || []).map((e)=><div className={module3272.task} key={e.name} onClick={a.handleAddTask(e.name)}><div className={module3272.taskIcon}><module186.Icon name={e.icon || "cdn"} size={24}/></div><div className={module3272.taskInfo}><div className={module3272.taskName}><span>{t(e.title)}</span></div><div className={module3272.desc}>{t(e.desc) || "-"}</div></div></div>)}</div></>}</div>;
        };
        a.state = {
            isLoading: true,
            stepTemplates: [],
            activeTask: null,
            showCredential: false,
            isShowParamModal: false,
            ...PIPELINE_CONDITIONS.reduce((acc, item)=>({
                    ...acc,
                    ...module31({}, `isShow${item}`, false)
                }), {})
        };
        return a;
    }
    module37(o, [
        {
            key: "componentDidMount",
            value: (r = module44(module41.mark(function e() {
                let t;
                let a;
                let activeTask;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                if (!(t = this.props.store.edittingData.type) || !PIPELINE_CONDITIONS.includes(t)) {
                                    e.next = 4;
                                    break;
                                }
                                this.setState(module31({}, `isShow${t}`, true));
                                return e.abrupt("return");
                            case 4:
                                a = this.props.store.params.cluster;
                                if (!t) {
                                    e.next = 11;
                                    break;
                                }
                                e.next = 8;
                                return this.props.store.fetchStepTemplate(t, {
                                    cluster: a
                                });
                            case 8:
                                if (activeTask = e.sent) {
                                    this.setState({
                                        activeTask,
                                        isShowParamModal: true
                                    });
                                }
                                return e.abrupt("return");
                            case 11:
                                e.next = 13;
                                return this.getPipelineSteps();
                            case 13:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function() {
                return r.apply(this, arguments);
            })
        },
        {
            key: "getPipelineSteps",
            value: async function() {
                let t;
                t = this.props.store.params.cluster;
                await this.props.store.fetchPipelineStepTemplates({
                    cluster: t
                });
                this.setState({
                    stepTemplates: module61(this.steps),
                    isLoading: false
                });
            }
        },
        {
            key: "render",
            value: function() {
                return <>{this.props.isEditMode ? null : this.renderSider()}{this.renderStepsModal()}</>;
            }
        },
        {
            key: "steps",
            get: function() {
                return this.props.store.pipelineSteps;
            }
        }
    ]);
    return o;
})(Component), c = module49(i.prototype, "activeTab", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "All";
    }
}), s = module49(i.prototype, "handleBack", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.props.store.isAddingStep = false;
        };
    }
}), f = module49(i.prototype, "handleCancel", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            return function() {
                _this.setState(module31({}, `isShow${t}`, false));
                _this.props.onCancel();
            };
        };
    }
}), d = module49(i.prototype, "handleChangeActiveTab", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            return function() {
                _this.activeTab = t;
            };
        };
    }
}), p = module49(i.prototype, "handleAddStep", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            return function(a) {
                _this.props.onAddStep(a);
                _this.setState(module31({}, `isShow${t}`, false));
            };
        };
    }
}), o = i)) || o;
export default F;
