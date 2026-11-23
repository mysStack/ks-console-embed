import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-16.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
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
import { ReactComponent } from "unpacked/module-882.js";
import module3 from "unpacked/module-3.js";
import Module1181 from "components/Modals/CredentialCreate";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import { Component } from "unpacked/module-553.js";
import { PIPELINE_CONDITIONS, PIPELINE_TASKS } from "utils/constants";
import module1017 from "unpacked/module-1017.js";
import { ArchiveArtifacts, Branch, CD, Checkout, Container, Dir, Echo, Environment, Expression, Git, InputStep, KubernetesDeploy, Mail, Script, Shell, Sonarqube, Timeout, WaitForQualityGate, WithCredentials } from "pages/devops/components/Pipeline/StepModalsOld";
import module3258 from "unpacked/module-3258.js";
let i;
let c;
let s;
let f;
let d;
let p;
let m;
let h;
const L = {
    not: true,
    allOf: true,
    anyOf: true
};
const x = {
    echo: "loudspeaker",
    mail: "mail",
    shell: "terminal",
    container: "terminal",
    checkout: "network-router",
    git: "network-router",
    cd: "rocket",
    withCredentials: "key",
    kubernetesDeploy: "kubernetes",
    branch: "network-router",
    timeout: "clock",
    withSonarQubeEnv: "network"
};
const U = observer((c = ((Component_1)=>{
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        module65(n, "activeTab", s, module88(n));
        module65(n, "handleBack", f, module88(n));
        module65(n, "handleAddTask", d, module88(n));
        module65(n, "handleCancel", p, module88(n));
        module65(n, "handleChangeActiveTab", m, module88(n));
        module65(n, "handleAddStep", h, module88(n));
        n.handleSetValue = function() {
            n.stage.name = n.stageName || n.stage.name;
            n.props.store.setValue(n.stage);
        };
        n.handleCreateCredential = async (t, a)=>{
            let r;
            let devops;
            let cluster;
            r = n.props.store.params;
            devops = r.devops;
            cluster = r.cluster;
            await n.props.store.createCredential(t, {
                devops,
                cluster
            });
            a();
            n.hideCreateCredential();
        };
        n.hideCreateCredential = async function e() {
            await n.props.store.getCredentials();
            n.setState({
                showCredential: false
            });
        };
        n.handleShowCredential = function() {
            n.setState({
                showCredential: true
            });
        };
        n.renderStepsModal = function() {
            const params = n.props.store.params;
            const { devops, cluster } = params;
            const store = n.props.store;
            const r_edittingData = store.edittingData;
            if (store.isAddingStep === "condition") {
                return <><Branch visible={n.state.isShowbranch} onAddStep={n.handleAddStep("branch")} onCancel={n.handleCancel("branch")} edittingData={r_edittingData}/><Environment visible={n.state.isShowenvironment} onAddStep={n.handleAddStep("environment")} onCancel={n.handleCancel("environment")} edittingData={r_edittingData}/><Expression visible={n.state.isShowexpression} onAddStep={n.handleAddStep("expression")} onCancel={n.handleCancel("expression")} edittingData={r_edittingData}/></>;
            }
            return <><Echo visible={n.state.isShowecho} onAddStep={n.handleAddStep("echo")} onCancel={n.handleCancel("echo")} edittingData={r_edittingData}/><Shell visible={n.state.isShowshell} onAddStep={n.handleAddStep("shell")} onCancel={n.handleCancel("shell")} edittingData={r_edittingData}/><Dir visible={n.state.isShowdir} onAddStep={n.handleAddStep("dir")} onCancel={n.handleCancel("dir")} edittingData={r_edittingData}/><Container visible={n.state.isShowcontainer} onAddStep={n.handleAddStep("container")} onCancel={n.handleCancel("container")} edittingData={r_edittingData}/><ArchiveArtifacts visible={n.state.isShowarchiveArtifacts} onAddStep={n.handleAddStep("archiveArtifacts")} onCancel={n.handleCancel("archiveArtifacts")} edittingData={r_edittingData}/><Git visible={n.state.isShowgit} showCredential={n.handleShowCredential} onAddStep={n.handleAddStep("git")} onCancel={n.handleCancel("git")} edittingData={r_edittingData} store={n.props.store}/><CD visible={n.state.isShowcd} showCredential={n.handleShowCredential} onAddStep={n.handleAddStep("cd")} onCancel={n.handleCancel("cd")} edittingData={r_edittingData} store={n.props.store}/><Checkout visible={n.state.isShowcheckout} showCredential={n.handleShowCredential} onAddStep={n.handleAddStep("checkout")} onCancel={n.handleCancel("checkout")} edittingData={r_edittingData} store={n.props.store}/><InputStep devops={devops} cluster={cluster} visible={n.state.isShowinput} edittingData={r_edittingData} onAddStep={n.handleAddStep("input")} onCancel={n.handleCancel("input")}/><WithCredentials visible={n.state.isShowwithCredentials} onAddStep={n.handleAddStep("withCredentials")} onCancel={n.handleCancel("withCredentials")} store={n.props.store} showCredential={n.handleShowCredential} edittingData={r_edittingData}/><KubernetesDeploy visible={n.state.isShowkubernetesDeploy} onAddStep={n.handleAddStep("kubernetesDeploy")} onCancel={n.handleCancel("kubernetesDeploy")} store={n.props.store} showCredential={n.handleShowCredential} edittingData={r_edittingData}/><Timeout visible={n.state.isShowtimeout} onAddStep={n.handleAddStep("timeout")} onCancel={n.handleCancel("timeout")} edittingData={r_edittingData}/><Module1181 visible={n.state.showCredential} onOk={n.handleCreateCredential} onCancel={n.hideCreateCredential} devops={devops} cluster={cluster} credentialType={n.state.isShowkubernetesDeploy ? "kubeconfig" : ""}/><Sonarqube visible={n.state.isShowwithSonarQubeEnv} onAddStep={n.handleAddStep("withSonarQubeEnv")} onCancel={n.handleCancel("withSonarQubeEnv")} edittingData={r_edittingData}/><WaitForQualityGate visible={n.state.isShowwaitForQualityGate} onAddStep={n.handleAddStep("waitForQualityGate")} onCancel={n.handleCancel("waitForQualityGate")} edittingData={r_edittingData}/><Script visible={n.state.isShowscript} onAddStep={n.handleAddStep("script")} onCancel={n.handleCancel("script")} edittingData={r_edittingData}/><Mail visible={n.state.isShowmail} onAddStep={n.handleAddStep("mail")} onCancel={n.handleCancel("mail")} edittingData={r_edittingData}/></>;
        };
        n.renderSider = function() {
            if (n.props.store.isAddingStep === "condition") {
                return <div className={module1017.sheet}><div className={module1017.title}><span className={module3("custom-icon", module3258.back)} onClick={n.handleBack}><ReactComponent/></span>{t("Add conditions")}</div><div className={module3258.taskList}>{PIPELINE_CONDITIONS.map((e)=><div className={module3258.task} key={e} onClick={n.handleAddTask(e)}><div className={module3258.taskIcon}><module186.Icon name={x[e] || "cdn"} size={24}/></div><div className={module3258.taskInfo}><div className={module3258.taskName}>{e}</div><div className={module3258.desc}>{n.taskDescs[e] || "-"}</div></div></div>)}</div></div>;
            }
            return <div className={module1017.sheet}><div className={module1017.title}><span className={module3("custom-icon", module3258.back)} onClick={n.handleBack}><ReactComponent/></span>{t("Add Step")}</div><div className={module3258.tabs}>{Object.keys(PIPELINE_TASKS).map((e)=><div key={e} className={module3(module3258.tab, module31({}, module3258.tab_active, n.activeTab === e))} onClick={n.handleChangeActiveTab(e)}>{t(e)}</div>)}</div><div className={module3258.taskList}>{PIPELINE_TASKS[n.activeTab].map((e)=><div className={module3258.task} key={e} onClick={n.handleAddTask(e)}><div className={module3258.taskIcon}><module186.Icon name={x[e] || "cdn"} size={24}/></div><div className={module3258.taskInfo}><div className={module3258.taskName}><span>{t(e)}</span>{e === "kubernetesDeploy" && <module186.Tooltip content={t("KUBERNETES_DEPLOY_DEPRECATED_TIP")}><module186.Icon name="exclamation" size={16} color={{
                    primary: "#fff",
                    secondary: "#F5A623"
                }}/></module186.Tooltip>}</div><div className={module3258.desc}>{n.taskDescs[e] || "-"}</div></div></div>)}</div></div>;
        };
        n.taskDescs = {
            git: t("Pull code by Git"),
            shell: t("You can execute shell commands or windows batch commands in the build."),
            container: t("Specify a container to add nested tasks to execute inside the container"),
            echo: t("Send messages in the build"),
            mail: t("Send messages by email"),
            checkout: t("CHECKOUT_DESC"),
            dir: t("Change Current Directory"),
            archiveArtifacts: t("Save Artifact"),
            cleanWs: t("Clean Workspace"),
            input: t("REVIEW_DESC"),
            withCredentials: t("Load credentials into environment variables"),
            kubernetesDeploy: t("Deploy resources to the Kubernetes cluster"),
            timeout: t("Executes the code inside the block with a determined time out limit."),
            branch: t("Current branch name must match the input value"),
            environment: t("The environment variable entered before running the pipeline is match the current value."),
            expression: t("Enter an expression"),
            not: t("Negative prefix"),
            allOf: t("Internal nesting conditions must be matched"),
            anyOf: t("Internal nested conditions only need to satisfy one"),
            withSonarQubeEnv: t("withSonarQubeEnv_DESC"),
            waitForQualityGate: t("waitForQualityGate_DESC"),
            script: t("script_DESC"),
            cd: t("CD_STEP_DESC")
        };
        n.state = [].concat(module61(PIPELINE_TASKS.All), module61(PIPELINE_CONDITIONS)).reduce((acc, item)=>{
            acc[`isShow${item}`] = false;
            return acc;
        }, {});
        n.state.showCredential = false;
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const type = this.props.store.edittingData.type;
                const t = type === "sh" ? "shell" : type;
                this.setState(module31({}, `isShow${t}`, true));
            }
        },
        {
            key: "render",
            value: function() {
                return <>{this.props.isEditMode ? null : this.renderSider()}{this.renderStepsModal()}</>;
            }
        }
    ]);
    return r;
})(Component), s = module49(c.prototype, "activeTab", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "All";
    }
}), f = module49(c.prototype, "handleBack", [
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
}), d = module49(c.prototype, "handleAddTask", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            return function() {
                if (t in L) {
                    _this.props.onAddNoInputTask(t);
                } else {
                    _this.setState(module31({}, `isShow${t}`, true));
                }
            };
        };
    }
}), p = module49(c.prototype, "handleCancel", [
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
}), m = module49(c.prototype, "handleChangeActiveTab", [
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
}), h = module49(c.prototype, "handleAddStep", [
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
}), i = c)) || i;
export default U;
