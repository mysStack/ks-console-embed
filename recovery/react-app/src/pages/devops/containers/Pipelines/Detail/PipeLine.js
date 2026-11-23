import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module41 from "unpacked/module-41.js";
import "unpacked/module-31.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import Module963 from "unpacked/module-963.js";
import Module1124 from "pages/devops/components/Pipeline";
import module801 from "unpacked/module-801.js";
import module63 from "unpacked/module-63.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import { Component } from "unpacked/module-553.js";
import { trigger } from "utils/action";
import module5085 from "unpacked/module-5085.js";
let l;
const N = inject("rootStore", "detailStore")(l = observer(l = trigger(l = ((Component_1)=>{
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...i_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...i_1);
        e.store = e.props.detailStore || {};
        e.formTemplate = {};
        e.handlePipelineModal = function() {
            const e_store = e.store;
            const { pipelineJsonData, pipelineConfig } = e_store;
            const o = module14.toJS(pipelineConfig.spec.pipeline.jenkinsfile);
            const params = e.props.match.params;
            e.trigger("pipeline.pipelineTemplate", {
                store: e.store,
                jsonData: module14.toJS(pipelineJsonData.pipelineJson),
                formTemplate: e.formTemplate,
                title: t("CREATE_PIPELINE"),
                imageIcon: "/assets/pipeline/pipeline-icon-dark.svg",
                description: t("CREATE_PIPELINE_DESC"),
                width: "960px",
                contentWidth: "960px",
                noCodeEdit: true,
                params,
                onCancel: function() {
                    return e.handleReset(o);
                },
                success: function(r) {
                    const { jenkinsFile, jsonData, mode } = r;
                    if (r.template === "custom") {
                        e.trigger("pipeline.pipelineCreate", {
                            store: e.store,
                            jsonData: {},
                            params,
                            trigger: function() {
                                e.trigger(...arguments);
                            },
                            onCancel: function() {
                                return e.handleReset(o);
                            },
                            success: function() {
                                const { devops, name } = params;
                                localStorage.removeItem(`${globals.user.username}-${devops}-${name}`);
                                e.handleRefresh();
                            }
                        });
                    } else if (mode) {
                        module240.success({
                            content: t("CREATE_SUCCESSFUL")
                        });
                        e.handleRefresh();
                    } else {
                        e.store.updateJenkinsFile(jenkinsFile);
                        if (module63(jsonData)) {
                            e.handleJenkinsFileModal(undefined, function() {
                                return e.handleReset(o);
                            });
                        } else {
                            e.store.setPipelineJsonData(jsonData);
                            e.handleEditorPipelineModal(undefined, function() {
                                return e.handleReset(o);
                            });
                        }
                    }
                }
            });
        };
        e.handleReset = function(data = "") {
            const params = e.props.match.params;
            const { devops, name, cluster } = params;
            clearTimeout(e.store.timer);
            const i = cluster && cluster !== "default" ? `/klusters/${cluster}` : "";
            request.put(`/kapis/devops.kubesphere.io/v1alpha3${i}/namespaces/${devops}/pipelines/${name}/jenkinsfile?mode=raw`, {
                data
            }, {
                headers: {
                    "content-type": "application/json"
                }
            }).then(e.handleRefresh);
        };
        e.handleEditorPipelineModal = function(t, r) {
            const pipelineJsonData = e.store.pipelineJsonData;
            const params = e.props.match.params;
            e.trigger("pipeline.pipelineCreate", {
                store: e.store,
                jsonData: module14.toJS(pipelineJsonData.pipelineJson),
                onCancel: r,
                params,
                trigger: function() {
                    e.trigger(...arguments);
                },
                success: function() {
                    const { devops, name } = params;
                    localStorage.removeItem(`${globals.user.username}-${devops}-${name}`);
                    e.handleRefresh();
                }
            });
        };
        e.handleJenkinsFileModal = function(t, r) {
            const pipelineConfig = e.store.pipelineConfig;
            const params = e.props.match.params;
            e.trigger("pipeline.jenkins", {
                store: e.store,
                defaultValue: module14.toJS(pipelineConfig.spec.pipeline.jenkinsfile),
                onCancel: r,
                params,
                success: function() {
                    const { devops, name } = params;
                    localStorage.removeItem(`${globals.user.username}-${devops}-${name}`);
                    e.handleRefresh();
                }
            });
        };
        e.getData = async function t() {
            let r;
            let n;
            r = e.props.match.params;
            n = decodeURIComponent(r.name);
            await e.store.getJenkinsFile({
                ...r,
                name: n
            });
            e.store.getActivities(r);
            if (e.jenkinsFileMode) {
                e.handleRefresh();
            }
        };
        e.handleRefresh = async function t() {
            let r;
            let n;
            r = e.props.match.params;
            n = decodeURIComponent(r.name);
            await e.store.getJenkinsFile({
                ...r,
                name: n
            }, true);
            if (e.jenkinsFileMode) {
                e.store.fetchDetailUntilEditModeNull({
                    ...r,
                    name: n
                }).then((t)=>{
                    e.store.detail = t;
                    e.store.setPipelineConfig(t._originData);
                });
            }
        };
        e.handleRunning = module801(module44(module41.mark(function* t() {
            let params;
            let n;
            let a;
            let i;
            params = e.props.match.params;
            yield e.store.fetchDetail(params);
            n = e.store.detail;
            a = !module63(module14.toJS(n.branchNames));
            i = !module63(module14.toJS(n.parameters));
            if (a || i) {
                e.trigger("pipeline.params", {
                    devops: params.devops,
                    cluster: params.cluster,
                    params,
                    branches: module14.toJS(n.branchNames),
                    disabledBrancheNames: module14.toJS(n.disabledBranchNames),
                    parameters: module14.toJS(n.parameters),
                    success: function() {
                        e.props.rootStore.routing.push("./activity");
                    }
                });
            } else {
                e.handleRunSubmit();
            }
        })), 500);
        e.handleRunSubmit = async (parameters, branch)=>{
            let a;
            let i;
            let devops;
            let cluster;
            a = e.store.detail;
            i = e.props.match.params;
            devops = i.devops;
            cluster = i.cluster;
            await e.store.runBranch({
                name: a.name,
                branch,
                parameters,
                cluster,
                devops
            });
            e.props.rootStore.routing.push("./activity");
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                if (!this.isMultibranch && this.editable) {
                    this.getData();
                } else {
                    this.props.rootStore.routing.push("./activity");
                }
            }
        },
        {
            key: "renderBtnGroup",
            value: function() {
                if (this.editable) {
                    return <div className={module5085.pipelineCard__btnGroup}>{this.jenkinsFileMode === "json" ? <module186.Tooltip content={t("JENKINS_UNAVAILABLE")}><module186.Button className={module5085["btn-disabled"]}>{t("EDIT_JENKINSFILE")}</module186.Button></module186.Tooltip> : <module186.Button onClick={this.handleJenkinsFileModal}>{t("EDIT_JENKINSFILE")}</module186.Button>}{this.jenkinsFileMode === "raw" ? <module186.Tooltip content={t("JENKINS_UNAVAILABLE")}><module186.Button className={module5085["btn-disabled"]}>{t("EDIT_PIPELINE")}</module186.Button></module186.Tooltip> : <module186.Button onClick={this.handleEditorPipelineModal}>{t("EDIT_PIPELINE")}</module186.Button>}<module186.Button type="control" onClick={this.handleRunning}>{t("RUN")}</module186.Button></div>;
                }
            }
        },
        {
            key: "renderPipeLineContent",
            value: function() {
                const pipelineJsonData = this.store.pipelineJsonData;
                const e_pipelineJson = pipelineJsonData.pipelineJson;
                if (pipelineJsonData.isLoading) {
                    return <module186.Loading spinning><div className={module5085.pipelineCard}/></module186.Loading>;
                }
                if (this.jenkinsFileMode && this.jenkinsFileMode === "raw") {
                    return <Module963 desc={t("JENKINS_UNAVAILABLE")}>{this.editable && <><module186.Button onClick={this.handleJenkinsFileModal} disabled={this.jenkinsFileMode === "json"}>{t("EDIT_JENKINSFILE")}</module186.Button><module186.Button type="control" onClick={this.handleRunning}>{t("RUN")}</module186.Button></>}</Module963>;
                }
                if (e_pipelineJson && e_pipelineJson.result === "failure" || !this.isValidated) {
                    return <Module963 desc={t("INVALID_JENKINSFILE_TIP")}>{this.editable && <><module186.Button onClick={this.handleJenkinsFileModal} disabled={this.jenkinsFileMode === "json"}>{t("EDIT_JENKINSFILE")}</module186.Button><module186.Button type="control" onClick={this.handleRunning}>{t("RUN")}</module186.Button></>}</Module963>;
                }
                if (module63(module14.toJS(e_pipelineJson)) || !this.jenkinsFile) {
                    return <Module963 desc={t("NO_PIPELINE_CONFIG_FILE_TIP")}>{this.editable && <><module186.Button onClick={this.handleJenkinsFileModal} disabled={this.jenkinsFileMode === "json"}>{t("EDIT_JENKINSFILE")}</module186.Button><module186.Button type="control" onClick={this.handlePipelineModal} disabled={this.jenkinsFileMode === "raw"}>{t("EDIT_PIPELINE")}</module186.Button></>}</Module963>;
                }
                return <div className={module5085.pipelineCard}><div className={module5085.pipelineCard__toolbar}>{this.renderBtnGroup()}</div><div className={module5085.pipelineCard__main}><Module1124 jsonData={e_pipelineJson}/></div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div>{this.renderPipeLineContent()}</div>;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                const params = this.props.match.params;
                const { cluster, devops } = params;
                return globals.app.getActions({
                    module: "pipelines",
                    cluster,
                    devops
                });
            }
        },
        {
            key: "editable",
            get: function() {
                return this.enabledActions.includes("edit");
            }
        },
        {
            key: "jenkinsFileMode",
            get: function() {
                return this.store.pipelineConfig.metadata.annotations["pipeline.devops.kubesphere.io/jenkinsfile.edit.mode"];
            }
        },
        {
            key: "isValidated",
            get: function() {
                return this.store.pipelineConfig.metadata.annotations["pipeline.devops.kubesphere.io/jenkinsfile.validate"] !== "failure";
            }
        },
        {
            key: "jenkinsFile",
            get: function() {
                const pipelineConfig = this.store.pipelineConfig;
                return module14.toJS(pipelineConfig.spec.pipeline.jenkinsfile);
            }
        },
        {
            key: "isMultibranch",
            get: function() {
                const detailStore = this.props.detailStore;
                return module14.toJS(detailStore.detail.isMultiBranch);
            }
        }
    ]);
    return n;
})(Component)) || l) || l) || l;
export default N;
