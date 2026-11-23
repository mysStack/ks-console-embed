import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-48.js";
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
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module1274 from "unpacked/module-1274.js";
import "unpacked/module-315.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-31.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module240 from "unpacked/module-240.js";
import Module1992 from "pages/devops/components/DetailNav";
import Module922 from "pages/devops/components/Status";
import Module1144 from "unpacked/module-1144.js";
import module26 from "unpacked/module-26.js";
import module198 from "unpacked/module-198.js";
import module60 from "unpacked/module-60.js";
import module63 from "unpacked/module-63.js";
import module449 from "unpacked/module-449.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module243 from "unpacked/module-243.js";
import { Component } from "unpacked/module-553.js";
import module1993 from "stores/devops/codeQuality";
import { showNameAndAlias } from "utils/index";
import { trigger } from "utils/action";
import { getPipelineStatus } from "utils/status";
import { getCodeRepoTemplate } from "utils/devOpsRepos";
import "unpacked/module-1994.js";
let c;
const M = inject("rootStore", "devopsStore", "pipelineStore")(c = observer(c = trigger(c = ((Component_1)=>{
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
    function n(...o_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...o_1);
        e.sonarqubeStore = new module1993;
        e.state = {
            formTemplate: e.store.pipeLineConfig
        };
        e.module = "pipelines";
        e.fetchData = async function t() {
            let r;
            let n;
            r = e.props.match.params;
            n = e.store.detail;
            await e.store.fetchDetail(r);
            e.setBranchNames(module14.toJS(n.branchNames), r);
            e.getPipeLineConfig();
            e.getSonarqube();
        };
        e.getPipeLineConfig = async function t() {
            let r;
            let formTemplate;
            r = e.props.match.params;
            formTemplate = await e.store.getPipeLineConfig();
            formTemplate.devops = r.devops;
            formTemplate.cluster = r.cluster;
            formTemplate.devopsName = e.props.devopsStore.devopsName;
            e.setState({
                formTemplate
            });
        };
        e.setBranchNames = function(e, t) {
            if (module60(e) && !module63(e)) {
                t.branch = e[0];
            }
        };
        e.getSonarqube = function() {
            if (module26(globals, "config.devops.sonarqubeURL")) {
                const t = e.props.match.params;
                e.sonarqubeStore.fetchDetail(t);
            }
        };
        e.getUpTime = function() {
            const activityList = e.store.activityList;
            const r = module26(module14.toJS(activityList.data), "[0].startTime", "");
            if (r) {
                return module243(r).format("YYYY-MM-DD HH:mm:ss");
            }
            return "-";
        };
        e.fetchPipelineConfig = async function t() {
            let r;
            r = e.props.match.params;
            await e.store.fetchDetail({
                ...r,
                isSilent: true
            });
            await e.getPipeLineConfig();
        };
        e.getOperations = function() {
            const detail = module14.toJS(e.store).detail;
            const params = e.props.match.params;
            const { devops, cluster, workspace, name } = params;
            return [
                {
                    key: "edit",
                    type: "control",
                    text: t("EDIT_INFORMATION"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("pipeline.edit", {
                            devops,
                            cluster,
                            formTemplate: e.state.formTemplate,
                            success: e.fetchData,
                            handleScanRepository: e.handleScanRepository,
                            trigger: function() {
                                e.trigger(...arguments);
                            }
                        });
                    }
                },
                {
                    key: "editConfig",
                    type: "control",
                    text: t("EDIT_SETTINGS"),
                    action: "edit",
                    onClick: async ()=>{
                        await e.fetchPipelineConfig();
                        e.trigger("pipeline.advance.edit", {
                            devops,
                            cluster,
                            formTemplate: e.state.formTemplate,
                            success: e.fetchData,
                            handleScanRepository: e.handleScanRepository
                        });
                    }
                }
            ].concat(module61(detail.isMultiBranch ? [
                {
                    key: "scan",
                    text: t("SCAN_REPOSITORY"),
                    action: "edit",
                    onClick: e.handleScanRepository
                },
                {
                    key: "scanLogs",
                    text: t("VIEW_SCAN_LOGS"),
                    action: "edit",
                    onClick: function() {
                        e.trigger("pipeline.scanRepositoryLogs", {
                            params: {
                                devops,
                                cluster,
                                workspace,
                                name
                            },
                            handleScanRepository: e.handleScanRepository
                        });
                    }
                }
            ] : []), [
                {
                    key: "delete",
                    text: t("DELETE"),
                    action: "delete",
                    onClick: function() {
                        e.trigger("resource.delete", {
                            devops,
                            cluster,
                            type: e.name,
                            detail: {
                                devops,
                                cluster,
                                name: e.store.detail.name
                            },
                            success: function() {
                                e.routing.push(`/${workspace}/clusters/${cluster}/devops/${devops}/pipelines`);
                            }
                        });
                    }
                }
            ]);
        };
        e.getCurrentState = function() {
            const e_store = e.store;
            const { activityList, branchList, pullRequestList } = e_store;
            const o = {
                activity: module26(module14.toJS(activityList), "data[0]", {}),
                branch: module26(module14.toJS(branchList), "data[0].latestRun", {}),
                "pull-request": module26(module14.toJS(pullRequestList), "data[0].latestRun", {})
            };
            return o[module449(e.props.location.pathname.split("/"))] || o.activity;
        };
        e.getPipelineStatus = function(e) {
            return {
                ...{
                    failed: {
                        type: "failure",
                        label: t("FAILED")
                    },
                    pending: {
                        type: "running",
                        label: t("RUNNING")
                    },
                    working: {
                        type: "running",
                        label: t("RUNNING")
                    },
                    successful: {
                        type: "success",
                        label: t("SUCCESSFUL")
                    }
                }[e]
            };
        };
        e.getAttrs = function() {
            const devopsName = e.props.devopsStore.devopsName;
            let n = {};
            if (e.store.detail.isMultiBranch) {
                const i = module14.toJS(e.store.pipelineConfig);
                const l = module26(i, "spec.multi_branch_pipeline.source_type");
                const s = module26(i, `spec.multi_branch_pipeline.${l}_source`, {});
                n = getCodeRepoTemplate[l]?.(s) ?? {};
            }
            const u = module26(e.store.pipelineConfig, 'metadata.annotations["pipeline.devops.kubesphere.io/syncstatus"]');
            const value = e.store.detail.isMultiBranch ? t("MULTI_BRANCH_PIPELINE") : t("PIPELINE_PL");
            return [
                {
                    name: t("DEVOPS_PROJECT"),
                    value: showNameAndAlias(devopsName, "devops")
                },
                {
                    name: t("KIND_TCAP"),
                    value
                },
                {
                    hide: !e.store.detail.isMultiBranch,
                    name: t("CODE_REPO"),
                    value: n.repo && n.url ? `${n.repo}(${n.url})` : n.url
                },
                {
                    name: t("TASK_STATUS"),
                    value: <Module922 {...getPipelineStatus(e.getCurrentState())}/>
                },
                {
                    name: t("SYNC_STATUS"),
                    value: <Module922 {...e.getPipelineStatus(u)}/>
                },
                {
                    name: t("UPDATE_TIME_TCAP"),
                    value: e.getUpTime()
                }
            ].filter((e)=>!e.hide);
        };
        e.handleScanRepository = async function r() {
            let n;
            let a;
            n = e.props.match.params;
            a = e.store.detail;
            await e.store.scanRepository({
                devops: n.devops,
                name: a.name,
                cluster: n.cluster
            });
            module240.success({
                content: t("SCAN_REPO_SUCCESSFUL")
            });
            e.store.fetchDetail(n);
        };
        e.renderNav = function() {
            return <Module1992 sonarqubeStore={e.sonarqubeStore} detailStore={e.store} route={e.route} match={e.props.match}/>;
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                const params = this.props.match.params;
                const detail = this.store.detail;
                this.setBranchNames(module14.toJS(detail.branchNames), params);
                this.getPipeLineConfig();
                this.getSonarqube();
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const stores = {
                    detailStore: this.store,
                    sonarqubeStore: this.sonarqubeStore
                };
                const operations = this.getOperations().filter((t)=>_this.enabledActions.includes(t.action));
                const formTemplate = this.state.formTemplate;
                const o = module198(formTemplate, "pipeline") ? "pipeline.description" : "multi_branch_pipeline.description";
                const desc = module26(formTemplate, o, "-");
                const params = this.props.match.params;
                const { devops, cluster, workspace } = params;
                const f = {
                    module: this.module,
                    name: module26(this.store.detail, "name"),
                    desc,
                    operations,
                    attrs: this.getAttrs(),
                    labels: this.store.detail.labels,
                    breadcrumbs: [
                        {
                            label: t("PIPELINE_PL"),
                            url: `/${workspace}/clusters/${cluster}/devops/${devops}/pipelines`
                        }
                    ]
                };
                return <Module1144 routes={this.routes} stores={stores} nav={this.renderNav()} {...f}/>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.pipelineStore;
            }
        },
        {
            key: "name",
            get: function() {
                return "PIPELINE";
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                const params = this.props.match.params;
                const { cluster, devops } = params;
                return globals.app.getActions({
                    module: this.module,
                    cluster,
                    devops
                });
            }
        },
        {
            key: "ksVersion",
            get: function() {
                const cluster = this.props.match.params.cluster;
                if (window.parent.globals?.app.isMultiCluster) {
                    return module26(window, `parent.globals.clusterConfig.${cluster}.ksVersion`);
                }
                return module26(window, "parent.globals.ksConfig.ksVersion");
            }
        },
        {
            key: "routes",
            get: function() {
                const [t, ...r] = module1274(this.props.route.routes);
                return [
                    {
                        ...t,
                        component: t.getComponent(this.ksVersion)
                    }
                ].concat(module61(r));
            }
        },
        {
            key: "route",
            get: function() {
                return {
                    ...this.props.route,
                    routes: this.routes
                };
            }
        }
    ]);
    return n;
})(Component)) || c) || c) || c;
export default M;
