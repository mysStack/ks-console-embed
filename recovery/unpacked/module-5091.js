import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import module65 from "./module-65.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import { inject, observer } from "./module-239.js";
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module856 from "./module-856.js";
import module186 from "./module-186.js";
import { addFullScreenChangeEvents, enterFullScreen, removeFullScreenChangeEvents } from "./module-453.js";
import Module1305 from "./module-1305.js";
import Module922 from "./module-922.js";
import { getPipelineStatus } from "./module-434.js";
import Module5092 from "./module-5092.js";
import Module5097 from "./module-5097.js";
import module5103 from "./module-5103.js";
let u;
let c;
let d;
let f;
let p;
const B = inject("rootStore", "detailStore")(u = observer((p = f = ((Component_1)=>{
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
    function n(e) {
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.handleFetch = function() {
            const runDetail = a.store.runDetail;
            if (!module63(module14.toJS(runDetail)) && !a.isQueued) {
                const t = a.props.match.params;
                a.store.getNodesStatus(t);
            }
        };
        a.handleTabChange = function(activeTab) {
            a.setState({
                activeTab
            });
        };
        a.toggleFullScreenState = function() {
            const isFullScreen = a.state.isFullScreen;
            a.setState({
                isFullScreen: !isFullScreen
            });
        };
        a.handleEnterFullScreen = function() {
            enterFullScreen(a.container);
            a.setState({
                isFullScreen: true
            });
        };
        a.showLog = function() {
            a.setState({
                showLog: true
            });
        };
        a.showErrorLog = function() {
            a.setState({
                showErrorLog: true
            });
        };
        a.hideLog = function() {
            a.setState({
                showLog: false
            });
        };
        a.handleDownloadLogs = function() {
            const params = a.props.match.params;
            a.store.handleDownloadLogs(params);
        };
        a.handleProceed = async (t, r)=>{
            let n;
            try {
                n = a.props.match.params;
                await a.store.handleProceed({
                    ...t,
                    ...n
                });
                await a.store.getRunDetail(n);
            } finally{
                if (r) {
                    r();
                }
            }
        };
        a.handleBreak = async (t, r)=>{
            let n;
            try {
                n = a.props.match.params;
                await a.store.handleBreak({
                    ...t,
                    ...n
                });
                await a.store.getRunDetail(n);
            } finally{
                if (r) {
                    r();
                }
            }
        };
        a.renderLoadingCard = function() {
            return <div className={module5103.card}><div><span className={module3(module5103.runningIcon, module5103.icon)}/></div><div className={module5103.title}>{t("INITIALIZING_PIPELINE")}</div><div className={module5103.desc}>{t("INITIALIZING_PIPELINE_DESC")}</div><div className={module5103.btn}><module186.Button onClick={a.showErrorLog}>{t("VIEW_LOGS")}</module186.Button></div></div>;
        };
        a.renderQueuedCard = function(e) {
            return <div className={module5103.card}><div><span className={module3(module5103.QueuedIcon, module5103.icon)}/></div><div className={module5103.title}>{t("PIPELINE_QUEUED_TITLE")}</div><div className={module5103.desc}>{module26(e, "causeOfBlockage") || t("INITIALIZING_PIPELINE_DESC")}</div></div>;
        };
        module65(a, "refreshFlag", d, module88(a));
        a.handleRefresh = module856(function() {
            a.refreshFlag = !a.refreshFlag;
        }, 1000);
        a.state = {
            isFullScreen: false,
            showLog: false,
            showErrorLog: false,
            activeTab: "pipeline",
            refreshFlag: true
        };
        a.store = e.detailStore || {};
        a.updateReaction = module14.reaction(function() {
            return a.store.runDetail;
        }, a.handleFetch);
        return a;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.handleFetch();
                addFullScreenChangeEvents(this.toggleFullScreenState);
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.updateReaction();
                removeFullScreenChangeEvents(this.toggleFullScreenState);
            }
        },
        {
            key: "getChildContext",
            value: function() {
                return {
                    onProceed: this.handleProceed,
                    onBreak: this.handleBreak,
                    result: this.store.runDetail.result
                };
            }
        },
        {
            key: "renderBtnGroup",
            value: function() {
                return <div className={module5103.pipelineCard__btnGroup}><span onClick={this.handleEnterFullScreen}><module186.Button icon="maximize" type="flat"/></span><module186.Button onClick={this.showLog}>{t("VIEW_LOGS")}</module186.Button></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const showErrorLog = this.state.showErrorLog;
                const store = this.store;
                const { nodesStatus, runDetailLogs, runDetail } = store;
                if (nodesStatus.length === 0) {
                    if (this.isQueued) {
                        return this.renderQueuedCard(runDetail);
                    }
                    if (this.hasRuning && !showErrorLog) {
                        return this.renderLoadingCard();
                    }
                    return <div className={module5103.pipelineCard}><div className={module5103.pipelineCard__toolbar}>{this.hasRuning ? <span className={module5103.running_tips}><Module922 hasLabel={false} {...getPipelineStatus(runDetail)}/>{t("PIPELINE_PREPARE_DESC")}</span> : null}<div className={module5103.pipelineCard__btnGroup}><module186.Button onClick={this.handleDownloadLogs}>{t("DOWNLOAD_LOGS")}</module186.Button></div></div><div className={module5103.pipelineCard__main} ref={function(t) {
                        _this.container = t;
                    }}><pre>{runDetailLogs}</pre></div></div>;
                }
                return <><div className={module5103.pipelineCard}><div className={module5103.pipelineCard__tab}><div><Module1305 value={this.state.activeTab} onChange={this.handleTabChange} options={[
                    {
                        label: t("PIPELINE"),
                        value: "pipeline"
                    },
                    {
                        label: t("RUN_LOGS"),
                        value: "logs"
                    }
                ]}/></div></div>{this.state.activeTab === "pipeline" && <div className={module3(module5103.pipelineCard_content, module5103.pipelineCard_pipeline_content)}><div className={module3(module5103.pipelineCard__main)} ref={function(t) {
                    _this.container = t;
                }}><Module5092 jsonData={nodesStatus}/></div></div>}{this.state.activeTab === "logs" && <div className={module3(module5103.pipelineCard_content)}><div className={module5103.pipelineCard__main}><Module5097 handleDownloadLogs={this.handleDownloadLogs} params={this.props.match.params} runId={this.store.runDetail.id} nodes={nodesStatus} refreshFlag={this.refreshFlag} hasRunning={this.hasRunningOmitPaused}/></div></div>}</div></>;
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
            key: "hasRuning",
            get: function() {
                const runDetail = this.store.runDetail;
                const t = module26(runDetail, "state");
                return t && t !== "FINISHED" && t !== "PAUSED";
            }
        },
        {
            key: "hasRunningOmitPaused",
            get: function() {
                const runDetail = this.store.runDetail;
                return module26(runDetail, "state") !== "FINISHED";
            }
        },
        {
            key: "isQueued",
            get: function() {
                const runDetail = this.store.runDetail;
                return module26(runDetail, "state", "") === "QUEUED";
            }
        }
    ]);
    return n;
})(Component), f.childContextTypes = {
    onProceed: module1.func,
    onBreak: module1.func,
    result: module1.string
}, c = p, d = module49(c.prototype, "refreshFlag", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return true;
    }
}), u = c)) || u) || u;
export default B;
