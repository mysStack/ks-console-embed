import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-84.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module240 from "./module-240.js";
import { ReactComponent } from "./module-1145.js";
import Module1992 from "./module-1992.js";
import Module922 from "./module-922.js";
import Module1144 from "./module-1144.js";
import module801 from "./module-801.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module243 from "./module-243.js";
import { Component } from "./module-553.js";
import module1993 from "./module-1993.js";
import { showNameAndAlias } from "./module-52.js";
import { trigger } from "./module-792.js";
import { getPipelineStatus } from "./module-434.js";
import "./module-1994.js";
let l;
const C = inject("rootStore", "devopsStore", "pipelineStore")(l = observer(l = trigger(l = ((Component_1)=>{
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
        e.module = "pipelineruns";
        e.fetchData = function() {
            const params = e.props.match.params;
            e.store.setDevops(params.devops);
            e.store.getBranchDetail(params);
            e.getSonarqube();
        };
        e.getSonarqube = function() {
            if (module26(globals, "config.devops.sonarqubeURL")) {
                const t = e.props.match.params;
                e.sonarqubeStore.fetchDetail(t);
            }
        };
        e.getOperations = function() {
            return [
                {
                    key: "run",
                    type: "control",
                    text: t("RUN"),
                    action: "edit",
                    onClick: e.handleRun
                }
            ];
        };
        e.getAttrs = function() {
            const e_store = e.store;
            const { detail, activityList, branchDetail } = e_store;
            const devopsName = e.props.devopsStore.devopsName;
            const branch = e.props.match.params.branch;
            return [
                {
                    name: t("DEVOPS_PROJECT"),
                    value: showNameAndAlias(devopsName, "devops")
                },
                {
                    name: t("PIPELINE"),
                    value: <span>{detail.name}/{branchDetail.disabled ? <del>{decodeURIComponent(branch)}</del> : decodeURIComponent(branch)}</span>
                },
                {
                    name: t("TASK_STATUS"),
                    value: <Module922 {...getPipelineStatus(module26(module14.toJS(activityList.data), "[0]", {}))}/>
                },
                {
                    name: t("UPDATE_TIME_TCAP"),
                    value: e.updateTime
                }
            ];
        };
        e.handleRun = module801(module44(module41.mark(function* r() {
            let params;
            let a;
            let o;
            let l;
            params = e.props.match.params;
            yield e.store.getBranchDetail(params);
            a = e.store.branchDetail;
            o = !module63(module14.toJS(a.branchNames));
            l = !module63(module14.toJS(a.parameters));
            if (!(!o && !l)) {
                e.trigger("pipeline.params", {
                    devops: params.devops,
                    cluster: params.cluster,
                    params,
                    branches: e.isAtBranchDetailPage ? null : [
                        module14.toJS(a.name)
                    ],
                    parameters: module14.toJS(a.parameters),
                    success: function() {
                        module240.success({
                            content: t("PIPELINE_RUN_START_SI")
                        });
                        e.handleFetch();
                    }
                });
            } else {
                module240.success({
                    content: t("PIPELINE_RUN_START_SI")
                });
                yield e.store.runBranch(params);
                e.handleFetch();
            }
        })), 500);
        e.handleFetch = function(t, r) {
            e.routing.query(t, r);
        };
        e.renderNav = function() {
            return <Module1992 sonarqubeStore={e.sonarqubeStore} detailStore={e.store} route={e.props.route} match={e.props.match}/>;
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
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
                const branch = this.props.match.params.branch;
                const branchDetail = this.store.branchDetail;
                const i = this.getOperations().filter((t)=>_this.enabledActions.includes(t.action));
                const params = this.props.match.params;
                const { devops, cluster, workspace, name } = params;
                const f = {
                    icon: <span className="icon" style={{
                        width: "20px",
                        height: "20px"
                    }}><ReactComponent/></span>,
                    name: branchDetail.disabled ? <del>{decodeURIComponent(branch)}</del> : decodeURIComponent(branch),
                    operations: branchDetail.disabled ? [] : i,
                    attrs: this.getAttrs(),
                    module: this.module,
                    breadcrumbs: [
                        {
                            label: t("BRANCH_PL"),
                            url: `/${workspace}/clusters/${cluster}/devops/${devops}/pipelines/${name}/branch`
                        }
                    ]
                };
                return <Module1144 routes={this.props.route.routes} stores={stores} nav={this.renderNav()} {...f}/>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.pipelineStore;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "isAtBranchDetailPage",
            get: function() {
                return this.props.match.params.branch;
            }
        },
        {
            key: "createTime",
            get: function() {
                return module243(this.store.detail.createTime).format("YYYY-MM-DD HH:mm:ss");
            }
        },
        {
            key: "updateTime",
            get: function() {
                const activityList = this.store.activityList;
                const t = module26(module14.toJS(activityList.data), "[0].startTime", "");
                if (t) {
                    return module243(t).format("YYYY-MM-DD HH:mm:ss");
                }
                return "-";
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
        }
    ]);
    return n;
})(Component)) || l) || l) || l;
export default C;
