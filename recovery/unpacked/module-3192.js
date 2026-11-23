import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-48.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-24.js";
import "./module-64.js";
import "./module-1092.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module26 from "./module-26.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import module943 from "./module-943.js";
import module3193 from "./module-3193.js";
import module1712 from "./module-1712.js";
import { generateId } from "./module-52.js";
import module3194 from "./module-3194.js";
import Module3199 from "./module-3199.js";
import module3201 from "./module-3201.js";
import { RadonDBAppIds } from "./module-817.js";
let u;
const k = observer(u = ((Component_1)=>{
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
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.handleOk = function() {
            const current = t.formRef.current;
            if (current) {
                current.validate(function() {
                    const formData = t.state.formData;
                    const { cluster, workspace, namespace, ...rest } = formData;
                    t.props.appStore.deploy(rest, {
                        cluster,
                        namespace,
                        workspace,
                        restoreParams: t.props.restoreParams
                    }).then(()=>{
                        t.props.onOk();
                    });
                });
            }
        };
        t.handleNext = function() {
            const current = t.formRef.current;
            if (current) {
                current.validate(function() {
                    if (t.props.stepCount !== 2) {
                        t.setState(function({ currentStep }) {
                            return {
                                currentStep: Math.min(t.steps.length - 1, currentStep + 1)
                            };
                        });
                        if (t.props.onFormOk) {
                            t.props.onFormOk();
                        }
                    } else {
                        t.handleOk();
                    }
                });
            }
        };
        t.appId = e.app_id;
        t.versionStore = new module943;
        t.fileStore = new module3193;
        const { workspace, cluster, namespace } = e;
        t.state = {
            currentStep: e.stepCount,
            formData: {
                app_id: t.appId,
                workspace,
                cluster,
                namespace
            }
        };
        t.formRef = createRef();
        return t;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fixBodyColor();
                this.getData();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                const stepCount = this.props.stepCount;
                if (this.props.next) {
                    this.handleNext();
                } else {
                    if (e.stepCount !== stepCount) {
                        if (stepCount > e.stepCount) {
                            this.handleNext();
                        } else {
                            this.setState({
                                currentStep: stepCount
                            });
                        }
                    }
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                document.querySelector("html").style.backgroundColor = this.htmlOrigBgColor;
            }
        },
        {
            key: "fixBodyColor",
            value: function() {
                const htmlElement = document.querySelector("html");
                this.htmlOrigBgColor = window.getComputedStyle(htmlElement).backgroundColor;
                htmlElement.style.backgroundColor = "white";
            }
        },
        {
            key: "getData",
            value: async function() {
                let t;
                let a;
                let r;
                await this.versionStore.fetchList({
                    app_id: this.appId,
                    status: "active"
                });
                t = module26(this.versionStore, "list.data[0].version_id", "");
                a = module26(this.versionStore, "list.data[0].name", "");
                r = this.props.appStore.detail.name;
                this.fileStore.loadRadonDB({
                    app_id: this.appId,
                    restoreParams: this.props.restoreParams
                });
                this.setState({
                    formData: {
                        ...this.state.formData,
                        name: `${r.slice(0, 7).toLowerCase().replaceAll(" ", "-")}-${generateId()}`,
                        version_id: this.isRadonDB ? a : t
                    }
                });
            }
        },
        {
            key: "renderForm",
            value: function() {
                const state = this.state;
                const { formData, currentStep } = state;
                const r = this.steps[currentStep];
                const Component = r.component;
                const l = {
                    formData,
                    fromStore: true,
                    versionStore: this.versionStore,
                    fileStore: this.fileStore,
                    appId: this.appId
                };
                if (r.isForm) {
                    l.formRef = this.formRef;
                } else {
                    l.ref = this.formRef;
                }
                return <div className={module3201.form}>{<Component {...l}/>}</div>;
            }
        },
        {
            key: "renderControl",
            value: function() {
                const currentStep = this.state.currentStep;
                const a = this.steps.length - 1;
                return <div className={module3201.control}>{currentStep < a ? <module186.Button type="control" onClick={this.handleNext}>{t("NEXT")}</module186.Button> : <module186.Button type="control" onClick={this.handleOk} loading={this.props.appStore.isSubmitting}>{t("INSTALL")}</module186.Button>}</div>;
            }
        },
        {
            key: "renderSteps",
            value: function() {
                return <div className={module3201.steps}><Module3199 steps={this.steps} current={this.state.currentStep}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module3201.main}><div className={module3201.content}>{this.renderSteps()}<div className={module3201.formWrapper}>{this.renderForm()}</div></div></div>;
            }
        },
        {
            key: "isRadonDB",
            get: function() {
                return RadonDBAppIds.includes(this.appId);
            }
        },
        {
            key: "steps",
            get: function() {
                const e = [
                    {
                        title: "BASIC_INFORMATION",
                        component: module1712,
                        required: true,
                        isForm: true
                    }
                ];
                e.push({
                    title: "APP_SETTINGS",
                    component: module3194,
                    required: true
                });
                return e;
            }
        }
    ]);
    return n;
})(Component)) || u;
export default k;
