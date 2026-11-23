import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-48.js";
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
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-24.js";
import "unpacked/module-64.js";
import "unpacked/module-1092.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import { observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module186 from "unpacked/module-186.js";
import Module788 from "components/Base/Modal";
import module1712 from "components/Forms/AppDeploy/BasicInfo";
import module3145 from "components/Forms/AppDeploy/AppConfig";
import module943 from "stores/openpitrix/version";
import module936 from "stores/openpitrix/file";
import { generateId } from "utils/index";
import Module3149 from "pages/apps/components/Modals/AppDeploy/Steps";
import module3151 from "unpacked/module-3151.js";
let s;
let i;
let f;
const w = observer((f = i = ((Component_1)=>{
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
        t.handlePrev = function() {
            t.setState(function({ currentStep }) {
                return {
                    currentStep: Math.max(0, currentStep - 1)
                };
            });
        };
        t.handleNext = function() {
            const current = t.formRef.current;
            if (current) {
                current.validate(function() {
                    t.setState(function({ currentStep }) {
                        return {
                            currentStep: Math.min(t.steps.length - 1, currentStep + 1)
                        };
                    });
                });
            }
        };
        t.handleOk = function() {
            const current = t.formRef.current;
            if (current) {
                current.validate(function() {
                    t.props.onOk(t.state.formData);
                });
            }
        };
        t.state = {
            currentStep: 0,
            formData: {
                app_id: e.app.app_id,
                name: `${e.app.name.slice(0, 7).toLowerCase().replaceAll(" ", "-")}-${generateId()}`,
                version_id: e.versionId,
                namespace: e.namespace,
                cluster: e.cluster,
                workspace: e.workspace
            },
            intializing: true
        };
        t.versionStore = new module943;
        t.fileStore = new module936;
        t.formRef = createRef();
        return t;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.init();
            }
        },
        {
            key: "init",
            value: async function() {
                await this.versionStore.fetchList({
                    app_id: this.props.app.app_id
                });
                if (!this.state.formData.version_id) {
                    this.setState({
                        formData: {
                            ...this.state.formData,
                            version_id: module26(this.versionStore, "list.data[0].version_id", "")
                        }
                    });
                }
                await this.fileStore.fetch({
                    app_id: this.props.app.app_id,
                    version_id: this.state.formData.version_id
                });
                this.setState({
                    intializing: false
                });
            }
        },
        {
            key: "renderSteps",
            value: function() {
                return <div className={module3151.steps}><Module3149 steps={this.steps} current={this.state.currentStep}/></div>;
            }
        },
        {
            key: "renderForm",
            value: function() {
                const props = this.props;
                const { app, cluster, workspace, namespace, versionId } = props;
                const state = this.state;
                const { formData, currentStep } = state;
                if (state.intializing) {
                    return <module186.Loading className={module3151.loading}/>;
                }
                const s = this.steps[currentStep];
                const Component = s.component;
                const f = {
                    formData,
                    cluster,
                    workspace,
                    namespace,
                    versionId,
                    versionStore: this.versionStore,
                    fileStore: this.fileStore,
                    appId: app.app_id
                };
                if (s.isForm) {
                    f.formRef = this.formRef;
                } else {
                    f.ref = this.formRef;
                }
                return <div className={module3151.form}>{<Component {...f}/>}</div>;
            }
        },
        {
            key: "renderFooter",
            value: function() {
                const currentStep = this.state.currentStep;
                const a = this.steps.length - 1;
                return <div className={module3151.footer}>{currentStep > 0 && <module186.Button type="control" onClick={this.handlePrev}>{t("PREVIOUS")}</module186.Button>}{currentStep < a ? <module186.Button type="control" onClick={this.handleNext}>{t("NEXT")}</module186.Button> : <module186.Button type="control" onClick={this.handleOk} loading={this.props.store.isSubmitting}>{t("INSTALL")}</module186.Button>}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { app, versionId: _versionId, onOk: _onOk, onCancel, isSubmitting: _isSubmitting, ...rest } = props;
                return <Module788 bodyClassName={module3151.body} imageIcon={app.icon || app.name} title={app.name} description={app.description} onCancel={onCancel} rightScreen hideFooter {...rest}>{this.renderSteps()}{this.renderForm()}{this.renderFooter()}</Module788>;
            }
        },
        {
            key: "steps",
            get: function() {
                return [
                    {
                        title: "BASIC_INFORMATION",
                        component: module1712,
                        required: true,
                        isForm: true
                    },
                    {
                        title: "APP_SETTINGS",
                        component: module3145,
                        required: true
                    }
                ];
            }
        }
    ]);
    return n;
})(Component), i.propTypes = {
    visible: module1.bool,
    app: module1.object,
    store: module1.object,
    cluster: module1.string,
    workspace: module1.string,
    namespace: module1.string,
    versionId: module1.string,
    onOk: module1.func,
    onCancel: module1.func
}, i.defaultProps = {
    visible: false,
    app: {},
    onOk: function() {},
    onCancel: function() {}
}, s = f)) || s;
export default w;
