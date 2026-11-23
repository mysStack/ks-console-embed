import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-75.js";
import "unpacked/module-813.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
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
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module198 from "unpacked/module-198.js";
import module63 from "unpacked/module-63.js";
import module457 from "unpacked/module-457.js";
import module74 from "unpacked/module-74.js";
import module186 from "unpacked/module-186.js";
import module1628 from "stores/devops/scm";
import { REPO_KEY_MAP, REPO_TYPES } from "utils/constants";
import { ReactComponent } from "unpacked/module-882.js";
import Module1181 from "components/Modals/CredentialCreate";
import Module2730 from "components/Forms/Pipelines/RepoSelect/GitForm";
import Module1629 from "components/Forms/Pipelines/RepoSelect/GithubForm";
import Module2733 from "components/Forms/Pipelines/RepoSelect/SVNForm";
import Module2735 from "components/Forms/Pipelines/RepoSelect/BitBucketForm";
import module1626 from "unpacked/module-1626.js";
import Module2737 from "components/Forms/Pipelines/RepoSelect/GitLabForm";
import { compareVersion } from "utils/index";
let o;
let u;
let c;
let s;
let i;
let f;
let d;
const q = observer((d = f = ((Component_1)=>{
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
        module65(t, "source_type", c, module88(t));
        module65(t, "credentialFormData", s, module88(t));
        module65(t, "showCredential", i, module88(t));
        t.restoreSourceData = function() {
            const sourceData = t.props.sourceData;
            const e_source_type = sourceData.source_type;
            t.store.formData = module31({}, REPO_KEY_MAP[e_source_type], module457(sourceData[REPO_KEY_MAP[e_source_type]], function(e, t) {
                return t && t.startsWith("discover") && module63(e);
            }));
            if (module198(sourceData, "credentialId")) {
                if (e_source_type === "github") {
                    t.store.tokenFormData = {
                        credentialId: sourceData.credentialId
                    };
                }
                if (e_source_type === "git") {
                    module74(t.store.formData, `${REPO_KEY_MAP[e_source_type]}.credential_id`, sourceData.credentialId);
                }
                if (e_source_type === "gitlab") {
                    module74(t.store.formData, `${REPO_KEY_MAP[e_source_type]}`, {});
                }
            }
            if (e_source_type === "single_svn") {
                t.store.formData = {
                    svn_source: {
                        type: "single_svn",
                        ...t.store.formData.single_svn_source
                    }
                };
            }
        };
        t.setCredentialsFormData = function(e) {
            if (module198(e, "type")) {
                t.credentialFormData = {
                    ...e
                };
            }
        };
        t.showCreateCredential = function() {
            t.showCredential = true;
        };
        t.hideCreateCredential = async function e() {
            t.showCredential = false;
        };
        t.handleCreateCredential = async (a, r)=>{
            let n;
            let devops;
            let cluster;
            n = t.props;
            devops = n.devops;
            cluster = n.cluster;
            await t.store.createCredential(a, {
                devops,
                cluster
            });
            await t.store.getCredentials({
                devops,
                cluster
            });
            r();
            t.hideCreateCredential();
        };
        t.handleGoBack = function() {
            const resetSubRoute = t.context.resetSubRoute;
            if (resetSubRoute) {
                resetSubRoute();
            }
            t.props.onCancel();
        };
        t.handleSubmit = function(e) {
            const onSave = t.props.onSave;
            const resetSubRoute = t.context.resetSubRoute;
            const formData = t.store.formData;
            if ([
                "github",
                "bitbucket_server"
            ].includes(t.source_type)) {
                if (module63(e)) {
                    return;
                }
                onSave(t.source_type, e);
                return void (resetSubRoute && resetSubRoute());
            }
            if (t.formRef.current) {
                t.formRef.current.validate(function() {
                    if (t.source_type === "git") {
                        onSave("git", {
                            git_source: {
                                ...formData.git_source,
                                discover_branches: true
                            }
                        });
                    }
                    if (t.source_type === "gitlab") {
                        onSave("gitlab", {
                            gitlab_source: {
                                ...formData.gitlab_source,
                                discover_branches: 1,
                                discover_pr_from_forks: {
                                    strategy: 2,
                                    trust: 2
                                },
                                discover_pr_from_origin: 2,
                                discover_tags: true
                            }
                        });
                    }
                    if ([
                        "svn",
                        "single_svn"
                    ].includes(t.source_type)) {
                        const e = module26(formData, "svn_source.type", "svn");
                        onSave(e, module31({}, REPO_KEY_MAP[e], {
                            ...formData.svn_source,
                            remote: module26(formData, "svn_source.remote", "").trim()
                        }));
                    }
                    if (resetSubRoute) {
                        resetSubRoute();
                    }
                });
            }
        };
        t.handleTypeChange = function(e) {
            const sourceData = t.props.sourceData;
            const type = e.currentTarget.dataset.type;
            t.source_type = type;
            t.credentialFormData = {
                type: "username_password"
            };
            t.store.resetStore();
            if (!(module63(sourceData) || sourceData.source_type !== type)) {
                t.restoreSourceData();
            }
        };
        t.formRef = createRef();
        t.tokenFormRef = createRef();
        t.store = new module1628;
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const props = this.props;
                const { onCancel, devops, name, cluster } = props;
                const registerSubRoute = this.context.registerSubRoute;
                const sourceData = this.props.sourceData;
                if (registerSubRoute) {
                    registerSubRoute(this.handleSubmit, onCancel);
                }
                this.store.getCredentials({
                    devops,
                    cluster
                });
                this.store.name = name;
                if (!module63(sourceData)) {
                    this.source_type = sourceData.source_type;
                    this.restoreSourceData();
                }
            }
        },
        {
            key: "renderTypes",
            value: function() {
                const _this = this;
                const props = this.props;
                const { enableTypeChange, cluster, noSVN } = props;
                const l = this.source_type === "single_svn" ? "svn" : this.source_type;
                const o = globals.app.isMultiCluster ? module26(globals, `clusterConfig.${cluster}.ksVersion`) : module26(globals, "ksConfig.ksVersion");
                const u = compareVersion(o, "3.1.0");
                return <ul className={module1626.repoTypes}>{REPO_TYPES.map((t)=>{
                    let r;
                    return !(u < 0 && t.value === "gitlab") && (!noSVN || t.value !== "svn") && <li className={module3((r = {}, module31(r, module1626.selectType, t.value === l), module31(r, module1626.disabled, !enableTypeChange && l !== t.value), r))} key={t.value} data-type={t.value} onClick={_this.handleTypeChange}><module186.Icon name={t.icon} type={t.value === l ? "light" : "dark"} size={32}/><span>{t.name}</span></li>;
                })}</ul>;
            }
        },
        {
            key: "renderForm",
            value: function() {
                const { devops, enableTypeChange, cluster, noJenkins = false } = this.props;
                if (this.source_type === "github") {
                    return <Module1629 store={this.store} formRef={this.formRef} handleSubmit={this.handleSubmit} showCredential={this.showCreateCredential} setCredentialsFormData={this.setCredentialsFormData} cluster={cluster} devops={devops}/>;
                }
                if ([
                    "svn",
                    "single_svn"
                ].includes(this.source_type)) {
                    return <Module2733 store={this.store} formRef={this.formRef} handleSubmit={this.handleSubmit} devops={devops} showCredential={this.showCreateCredential} enableTypeChange={enableTypeChange} cluster={cluster}/>;
                }
                if (this.source_type === "bitbucket_server") {
                    return <Module2735 store={this.store} formRef={this.formRef} showCredential={this.showCreateCredential} handleSubmit={this.handleSubmit} cluster={cluster} devops={devops}/>;
                }
                if (this.source_type === "gitlab") {
                    return <Module2737 store={this.store} formRef={this.formRef} handleSubmit={this.handleSubmit} cluster={cluster} devops={devops} showCredential={this.showCreateCredential}/>;
                }
                return <Module2730 store={this.store} formRef={this.formRef} handleSubmit={this.handleSubmit} devops={devops} cluster={cluster} showCredential={this.showCreateCredential} noJenkins={noJenkins}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { devops, cluster, type } = props;
                return <div className={module1626.formWrapper}>{type !== "import" ? <div className="h4"><a className="custom-icon" onClick={this.handleGoBack}><ReactComponent/></a>{t("SELECT_CODE_REPOSITORY")}</div> : null}<div className={module1626.contentWrapper}>{this.renderTypes()}{this.renderForm()}</div><Module1181 visible={this.showCredential} onOk={this.handleCreateCredential} onCancel={this.hideCreateCredential} devops={devops} cluster={cluster} formTemplate={module14.toJS(this.credentialFormData)} sourceType={this.source_type}/></div>;
            }
        }
    ]);
    return r;
})(Component), f.propTypes = {
    onSave: module1.func,
    onCancel: module1.func,
    sourceData: module1.object,
    enableTypeChange: module1.bool
}, f.defaultProps = {
    onSave: function() {},
    onCancel: function() {},
    sourceData: {},
    enableTypeChange: true
}, f.contextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
}, u = d, c = module49(u.prototype, "source_type", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "github";
    }
}), s = module49(u.prototype, "credentialFormData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            type: "username_password"
        };
    }
}), i = module49(u.prototype, "showCredential", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), o = u)) || o;
export default q;
