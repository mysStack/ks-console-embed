import "./module-12.js";
import "./module-11.js";
import "./module-1036.js";
import "./module-6.js";
import "./module-18.js";
import "./module-1037.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-109.js";
import "./module-45.js";
import "./module-118.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import module31 from "./module-31.js";
import "./module-41.js";
import "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module60 from "./module-60.js";
import module63 from "./module-63.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import Module788 from "./module-788.js";
import module186 from "./module-186.js";
import Module922 from "./module-922.js";
import { getPipelineStatus } from "./module-434.js";
import module1988 from "./module-1988.js";
import Module5098 from "./module-5098.js";
import Module5099 from "./module-5099.js";
import module1989 from "./module-1989.js";
import Module5101 from "./module-5101.js";
let s;
let u;
let c;
let d;
let f;
const F = observer((u = ((Component_1)=>{
    module55(s, Component_1);
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
    })(s);
    function s(e) {
        let r;
        module36(this, s);
        r = a.call(this, e);
        module65(r, "isShowLog", c, module88(r));
        module65(r, "activeNodeIndex", d, module88(r));
        r.logRefresh = null;
        module65(r, "updateActiveTabs", f, module88(r));
        r.handleDownloadLogs = function() {
            r.props.handleDownloadLogs();
        };
        r.handleExpandErrorStep = function() {
            const e = module14.toJS(r.props.nodes);
            if (e.length !== 0) {
                let t;
                const n = e.flat().map((e)=>e.result);
                if ((t = r.props.hasRunning ? n.filter((e)=>e === "FAILURE" || e === "SUCCESS").length : Math.max(n.filter((e)=>e === "FAILURE" || e === "SUCCESS").length - 1, 0)) !== -1) {
                    for(let a = 0, o = 0; a < e.length;){
                        if (Array.isArray(e[a])) {
                            if (t < o + e[a].length) {
                                return void (r.activeNodeIndex = [
                                    a,
                                    t - o
                                ]);
                            }
                            o += e[a].length;
                        } else {
                            if (a === t) {
                                return void (r.activeNodeIndex = [
                                    a
                                ]);
                            }
                            o += 1;
                        }
                        a += 1;
                    }
                }
            }
        };
        r.handleDownload = async function e() {
            r.setState({
                isDownloading: true
            });
            await r.store.handleDownloadLogs(r.props.params);
            r.setState({
                isDownloading: false
            });
        };
        r.handleJumpFullLogs = function() {
            r.store.handleJumpFullLogs(r.props.params);
        };
        r.handleVisableLog = function() {
            r.isShowLog = !r.isShowLog;
        };
        r.renderLogButton = function() {
            if (r.isRunning) {
                return <module186.Button onClick={r.handleVisableLog}>{t("VIEW_REAL_TIME_LOG")}</module186.Button>;
            }
            return <span><module186.Button loading={r.state.isLoading} onClick={r.handleDownload}>{t("DOWNLOAD_LOGS")}</module186.Button><module186.Button onClick={r.handleJumpFullLogs}>{t("VIEW_FULL_LOG")}</module186.Button></span>;
        };
        r.store = new module1988;
        r.state = {
            isDownloading: false
        };
        r.reaction = module14.reaction(function() {
            return r.isEmptySteps;
        }, function() {
            clearInterval(r.getIndexLogInterval);
            if (r.isEmptySteps && Array.isArray(r.activeStage?.steps)) {
                r.getIndexLogInterval = setInterval(r.getPipelineIndexLog, 4000);
            }
        });
        return r;
    }
    module37(s, [
        {
            key: "componentDidMount",
            value: async function() {
                await this.getPipelineIndexLog();
                this.handleExpandErrorStep();
                this.store.getRunDetail(this.props.params);
            }
        },
        {
            key: "getPipelineIndexLog",
            value: async function() {
                await this.store.getRunStatusLogs(this.params);
            }
        },
        {
            key: "renderLeftTab",
            value: function(e, r) {
                const _this = this;
                if (Array.isArray(e)) {
                    return <div key={e.id ?? r} className={module1989.stageContainer}><div className={module3(module1989.cutTitle, module31({}, module1989.activeTitle, this.activeNodeIndex[0] === r))}>{t("STAGE")}</div>{e.map((e, t)=><div key={e.id} onClick={_this.updateActiveTabs(r, t)} className={module3(module1989.leftTab, module31({}, module1989.leftTab__active, _this.activeNodeIndex[0] === r && _this.activeNodeIndex[1] === t))}><Module922 {...getPipelineStatus(e)} hasLabel={false}/>{e.displayName}</div>)}</div>;
                }
                return <div key={e.id} className={module1989.stageContainer}><div className={module3(module1989.cutTitle, module31({}, module1989.activeTitle, this.activeNodeIndex[0] === r))}>{t("STAGE")}</div><div className={module3(module1989.leftTab, module31({}, module1989.leftTab__active, this.activeNodeIndex[0] === r))} onClick={this.updateActiveTabs(r, 0)}><Module922 {...getPipelineStatus(e)} hasLabel={false}/>{e.displayName}</div></div>;
            }
        },
        {
            key: "renderLogContent",
            value: function() {
                const _this = this;
                const runDetailLogs = this.store.runDetailLogs;
                if (this.isEmptySteps) {
                    if (this.activeStage?.state !== "FINISHED") {
                        return null;
                    }
                    return <pre className={module1989.LogItem_content}>{runDetailLogs}</pre>;
                }
                return this.activeStage?.steps.map(function(step) {
                    return <Module5099 key={step.id} step={step} nodeId={_this.activeStage?.id} params={_this.params} refreshFlag={_this.props.refreshFlag}/>;
                });
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const nodes = this.props.nodes;
                const i = module14.toJS(nodes);
                return <><div className={module1989.container}><div className={module1989.left}>{i.map((e, t)=>_this.renderLeftTab(e, t))}</div><div className={module1989.right}><div className={module1989.header}><span><Module5098 startTime={this.activeStage?.startTime} time={this.activeStage?.result !== "UNKNOWN" ? this.activeStage?.durationInMillis : undefined}/></span>{this.renderLogButton()}</div><div className={module1989.logContainer}>{this.renderLogContent()}</div></div></div><Module788 visible={this.isShowLog} title={t("PIPELINE_LOG")} width={1162} onCancel={this.handleVisableLog}><Module5101 store={this.store} isShowLog={this.isShowLog} params={this.params} handleVisableLog={this.handleVisableLog}/></Module788></>;
            }
        },
        {
            key: "activeStage",
            get: function() {
                const nodes = this.props.nodes;
                const t = module14.toJS(nodes[this.activeNodeIndex[0]]);
                if (module60(t) && !module63(t)) {
                    return t[this.activeNodeIndex[1]];
                }
                return t;
            }
        },
        {
            key: "isEmptySteps",
            get: function() {
                return module63(this.activeStage?.steps);
            }
        },
        {
            key: "params",
            get: function() {
                const props = this.props;
                const { params, runId } = props;
                return {
                    ...params,
                    runId
                };
            }
        },
        {
            key: "isRunning",
            get: function() {
                return this.activeStage?.result && this.activeStage?.result === "UNKNOWN";
            }
        }
    ]);
    return s;
})(Component), c = module49(u.prototype, "isShowLog", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), module49(u.prototype, "activeStage", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "activeStage"), u.prototype), module49(u.prototype, "isEmptySteps", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "isEmptySteps"), u.prototype), d = module49(u.prototype, "activeNodeIndex", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [
            0,
            0
        ];
    }
}), f = module49(u.prototype, "updateActiveTabs", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t, r) {
            return function() {
                _this.activeNodeIndex = [
                    t,
                    r
                ];
            };
        };
    }
}), module49(u.prototype, "getPipelineIndexLog", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "getPipelineIndexLog"), u.prototype), s = u)) || s;
export default F;
