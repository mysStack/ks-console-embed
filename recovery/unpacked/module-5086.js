import "./module-15.js";
import "./module-5.js";
import "./module-84.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import Module963 from "./module-963.js";
import Module1124 from "./module-1124.js";
import module801 from "./module-801.js";
import module63 from "./module-63.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import { Component } from "./module-553.js";
import { trigger } from "./module-792.js";
import module5087 from "./module-5087.js";
let i;
const _ = inject("rootStore", "detailStore")(i = observer(i = trigger(i = ((Component_1)=>{
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
            const pipelineJsonData = e.store.pipelineJsonData;
            const params = e.props.match.params;
            e.trigger("pipeline.pipelineTemplateOld", {
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
                success: function(jsonData) {
                    e.trigger("pipeline.pipelineCreate", {
                        store: e.store,
                        jsonData,
                        isOld: true,
                        params,
                        success: function() {
                            const { devops, name } = params;
                            localStorage.removeItem(`${globals.user.username}-${devops}-${name}`);
                            e.handleRefresh();
                        }
                    });
                }
            });
        };
        e.handleEditorPipelineModal = function() {
            const pipelineJsonData = e.store.pipelineJsonData;
            const params = e.props.match.params;
            e.trigger("pipeline.pipelineCreate", {
                store: e.store,
                jsonData: module14.toJS(pipelineJsonData.pipelineJson),
                params,
                success: function() {
                    const { devops, name } = params;
                    localStorage.removeItem(`${globals.user.username}-${devops}-${name}`);
                    e.handleRefresh();
                }
            });
        };
        e.handleJenkinsFileModal = function() {
            const jenkinsfile = e.store.jenkinsfile;
            const params = e.props.match.params;
            e.trigger("pipeline.jenkins", {
                store: e.store,
                defaultValue: module14.toJS(jenkinsfile),
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
            r = e.props.match.params;
            await e.store.getJenkinsFile(r);
            e.store.getActivities(r);
        };
        e.handleRefresh = function() {
            const params = e.props.match.params;
            e.store.getJenkinsFile(params);
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
                    disabledBrancheNames: module14.toJS(n.disabledBrancheNames),
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
                if (!this.isMultibranch && this.enabledActions.includes("edit")) {
                    this.getData();
                } else {
                    this.props.rootStore.routing.push("./activity");
                }
            }
        },
        {
            key: "renderBtnGroup",
            value: function() {
                const e = this.enabledActions.includes("edit");
                return <div className={module5087.pipelineCard__btnGroup}>{e && <module186.Button onClick={this.handleJenkinsFileModal}>{t("EDIT_JENKINSFILE")}</module186.Button>}{e && <module186.Button onClick={this.handleEditorPipelineModal}>{t("EDIT_PIPELINE")}</module186.Button>}{e && <module186.Button type="control" onClick={this.handleRunning}>{t("RUN")}</module186.Button>}</div>;
            }
        },
        {
            key: "renderPipeLineContent",
            value: function() {
                const pipelineJsonData = this.store.pipelineJsonData;
                const { pipelineJson, isLoading } = pipelineJsonData;
                const a = this.enabledActions.includes("edit");
                if (isLoading) {
                    return <module186.Loading spinning><div className={module5087.pipelineCard}/></module186.Loading>;
                }
                if (module63(module14.toJS(pipelineJson))) {
                    return <Module963 desc={t("NO_PIPELINE_CONFIG_FILE_TIP")}>{a && <module186.Button type="control" onClick={this.handlePipelineModal}>{t("EDIT_PIPELINE")}</module186.Button>}{a && <module186.Button onClick={this.handleJenkinsFileModal}>{t("EDIT_JENKINSFILE")}</module186.Button>}</Module963>;
                }
                if (pipelineJson.result === "failure") {
                    return <Module963 desc={t("INVALID_JENKINSFILE_TIP")}>{a && <module186.Button onClick={this.handleJenkinsFileModal}>{t("EDIT_JENKINSFILE")}</module186.Button>}{a && <module186.Button type="control" onClick={this.handleRunning}>{t("RUN")}</module186.Button>}</Module963>;
                }
                return <div className={module5087.pipelineCard}><div className={module5087.pipelineCard__toolbar}>{this.renderBtnGroup()}</div><div className={module5087.pipelineCard__main}><Module1124 jsonData={pipelineJson}/></div></div>;
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
            key: "isMultibranch",
            get: function() {
                const detailStore = this.props.detailStore;
                return module14.toJS(detailStore.detail.isMultiBranch);
            }
        }
    ]);
    return n;
})(Component)) || i) || i) || i;
export default _;
