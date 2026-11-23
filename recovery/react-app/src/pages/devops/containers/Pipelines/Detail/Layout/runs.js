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
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module65 from "unpacked/module-65.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module243 from "unpacked/module-243.js";
import module26 from "unpacked/module-26.js";
import module189 from "unpacked/module-189.js";
import { getPipelineStatus } from "utils/status";
import Module922 from "pages/devops/components/Status";
import module1988 from "stores/devops/run";
import { trigger } from "utils/action";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import Module1144 from "unpacked/module-1144.js";
let u;
let c;
let d;
const j = inject("rootStore", "devopsStore", "pipelineStore")(u = observer(u = trigger((c = ((Component_1)=>{
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
    function n(...o) {
        let e;
        module36(this, n);
        e = r.call(this, ...o);
        e.store = new module1988;
        e.module = "pipelines";
        e.state = {
            showEdit: false,
            showYamlEdit: false,
            isLoading: true
        };
        e.refreshTimer = setInterval(()=>e.refreshHandler(), 4000);
        e.refreshHandler = function() {
            const params = e.props.match.params;
            if (!e.store.runDetail.message) {
                if (e.hasRuning) {
                    e.store.getRunDetail(params);
                } else {
                    clearInterval(e.refreshTimer);
                    e.refreshTimer = null;
                }
            }
        };
        e.fetchData = function() {
            const params = e.props.match.params;
            if (e.props.match.params.branch) {
                e.props.pipelineStore.getBranchDetail(module189(params, "runName"));
            }
            e.store.getRunDetail(params);
        };
        e.getRunName = async function t() {
            let r;
            r = e.props.match.params;
            await e.store.getRunName(r);
        };
        module65(e, "rePlay", d, module88(e));
        e.stop = function() {
            const params = e.props.match.params;
            e.props.pipelineStore?.handleActivityStop?.({
                url: e.getActivityDetailLinks(e.store.runDetail),
                ...params
            });
            module240.success({
                content: t("STOP_PIPELINE_SUCCESSFUL")
            });
            e.fetchData();
        };
        e.getActivityDetailLinks = function(e) {
            const t = module26(e, "_originData.spec.scm.refName");
            if (t) {
                return `branches/${encodeURIComponent(t)}/runs/${e.id}`;
            }
            return `runs/${e.id}`;
        };
        e.getOperations = function() {
            return [
                {
                    key: "replay",
                    type: "control",
                    text: t("Replay"),
                    action: "edit",
                    show: !e.isRuning,
                    onClick: function() {
                        return e.rePlay();
                    }
                },
                {
                    key: "stop",
                    text: t("STOP"),
                    action: "edit",
                    type: "danger",
                    show: e.isRuning,
                    onClick: function() {
                        return e.stop();
                    }
                }
            ];
        };
        e.getAttrs = function() {
            const runDetail = e.store.runDetail;
            return [
                {
                    name: t("RUN_ID"),
                    value: runDetail.id
                },
                {
                    name: t("TASK_STATUS"),
                    value: <Module922 {...getPipelineStatus(runDetail)}/>
                },
                {
                    name: t("UPDATE_TIME_TCAP"),
                    value: e.updateTime
                }
            ];
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
            key: "componentDidUpdate",
            value: function(e) {
                const runDetail = this.store.runDetail;
                const params = this.props.match.params;
                const { devops, runName, branch, workspace, cluster } = params;
                if (runName !== e.match.params.runName) {
                    clearInterval(this.refreshTimer);
                    this.refreshTimer = setInterval(this.refreshHandler, 4000);
                }
                if (runDetail.name && runDetail.name !== runName) {
                    this.routing.push(`/${workspace}/clusters/${cluster}devops/${devops}/pipelines/${name}${branch ? `/branch/${branch}` : ""}/run/${runDetail.name}`);
                }
                if (!this.refreshTimer && this.hasRuning) {
                    this.refreshTimer = setInterval(this.refreshHandler, 4000);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                clearInterval(this.refreshTimer);
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const runDetail = this.store.runDetail;
                const { id: name_1, annotations, labels } = runDetail;
                const params = this.props.match.params;
                const { branch, name, runId } = params;
                const stores = {
                    detailStore: this.store
                };
                if (this.store.isLoading && !this.store.detail.name) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const f = this.getOperations().filter((t)=>_this.enabledActions.includes(t.action));
                const p = {
                    name: name_1,
                    operations: this.isDisabled ? [] : f,
                    attrs: this.getAttrs(),
                    desc: module26(annotations, "desc"),
                    labels,
                    module: this.module,
                    breadcrumbs: [
                        {
                            label: branch && runId ? t("BRANCH_PL") : t("RUN_RECORDS"),
                            url: branch ? `${this.listUrl}/${name}/branch/${branch}/activity` : `${this.listUrl}/${name}/activity`
                        }
                    ]
                };
                return <Module1144 routes={this.routes} stores={stores} {...p}/>;
            }
        },
        {
            key: "isDisabled",
            get: function() {
                return this.props.pipelineStore?.branchDetail?.disabled;
            }
        },
        {
            key: "listUrl",
            get: function() {
                const params = this.props.match.params;
                const { workspace, devops, cluster } = params;
                return `/${workspace}/clusters/${cluster}/devops/${devops}/pipelines`;
            }
        },
        {
            key: "hasRuning",
            get: function() {
                const runDetail = this.store.runDetail;
                const t = module26(runDetail, "state");
                return t && t !== "FINISHED";
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "creator",
            get: function() {
                return module26(this.store.detail, "creator", t("unknown"));
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
                const runDetail = this.store.runDetail;
                const t = module26(runDetail, "startTime", "");
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
        },
        {
            key: "isRuning",
            get: function() {
                return this.store.runDetail?.state !== "FINISHED" && this.store.runDetail.state?.state !== "PAUSED";
            }
        },
        {
            key: "routes",
            get: function() {
                const routes = this.props.route.routes;
                if (module26(this.store.runDetail, "spec.parameters", []).length) {
                    return routes;
                }
                return routes.filter((e)=>e.name !== "build-parameters");
            }
        }
    ]);
    return n;
})(Component), d = module49(c.prototype, "rePlay", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return module44(module41.mark(function* t() {
            let r;
            let n;
            r = _this.props.match.params;
            n = yield _this.store.replay(r);
            _this.routing.push(`/${r.workspace}/clusters/${r.cluster}/devops/${r.devops}/pipelines/${r.name}${r.branch ? `/branch/${r.branch}` : ""}/activity`);
            if (n.id) {
                _this.store.runDetail = n;
            }
        }));
    }
}), u = c)) || u) || u) || u;
export default j;
