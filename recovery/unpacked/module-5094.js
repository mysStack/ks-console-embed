import "./module-15.js";
import "./module-29.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-118.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-57.js";
import "./module-315.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module1 from "./module-1.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import { getPipelineStatus } from "./module-434.js";
import Module922 from "./module-922.js";
import module5095 from "./module-5095.js";
const E = ((Component_1)=>{
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
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.handleProceed = function(e, r) {
            return function() {
                t.setState({
                    runLoading: true
                });
                t.props.onProceed({
                    parameters: e.input.parameters,
                    nodeId: r,
                    stepId: e.id,
                    inputId: e.input.id
                }, function() {
                    t.setState({
                        runLoading: false
                    });
                });
            };
        };
        t.handleBreak = function(e, r) {
            return function() {
                t.setState({
                    runLoading: true
                });
                t.props.onBreak({
                    nodeId: r,
                    stepId: e.id,
                    inputId: e.input.id
                }, function() {
                    t.setState({
                        runLoading: false
                    });
                });
            };
        };
        t.domTree = [];
        t.state = {
            runLoading: false
        };
        return t;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.calculateHeight();
            }
        },
        {
            key: "calculateHeight",
            value: function() {
                this.heights = this.domTree.map((e)=>e.clientHeight);
                this.props.setHeight(this.heights);
            }
        },
        {
            key: "renderCard",
            value: function(e) {
                let r;
                let n;
                const e_steps = e.steps;
                const l = e_steps === undefined ? [] : e_steps;
                let s = "";
                const u = l.find((e, t)=>{
                    const r = e.state === "FINISHED" && e.result !== "SUCCESS";
                    if (!r) {
                        s = t;
                    }
                    if (r) {
                        return e;
                    }
                    return null;
                });
                const c = (this.context.result === "ABORTED" || this.context.result === "FAILURE") && !e.result;
                const d = !(c || e.state && e.state !== "QUEUED");
                const h = e.state && e.state === "PAUSED";
                if (c) {
                    return <div className={module3(module5095.pipelineCard)}><div className={module5095.pipelineCard__title}>{e.displayName}</div><div className={module5095.pipelineCard__content}><div className={module5095.pipelineCard__item}><div className={module3(module5095.content__status, module5095.content__status__quene)}>{t("ABORTED")}</div></div></div></div>;
                }
                if (h) {
                    const E = e.steps.find((e)=>e.input);
                    if (this.context.result === "FAILURE") {
                        return <div className={module3(module5095.pipelineCard, module5095["pipelineCard--paused"])}><div className={module5095.pipelineCard__title}>{e.displayName}</div><div className={module5095.pipelineCard__content}><div className={module5095.pipelineCard__item}><p className={module5095.content__title__paused}>{t("WAITING_FOR_INPUT")}</p><div className={module3(module5095.content__status, module5095.content__status__quene)}>{t("TASK_FAILED_NOT_OPERATIONAL")}</div></div></div></div>;
                    }
                    const S = module26(E, "approvable");
                    return <div className={module3(module5095.pipelineCard, module5095["pipelineCard--paused"])}><div className={module5095.pipelineCard__title}>{e.displayName}</div><div className={module5095.pipelineCard__content}><div className={module5095.pipelineCard__item}><p className={module5095.content__title__paused}>{t("WAITING_FOR_INPUT")}</p><p className={module5095.content__title__paused}>{module26(E, "input.message")}</p><div className={module3(module5095.content__status, module5095.content__status__quene)}><><module186.Button size="small" type="primary" loading={this.state.runLoading} onClick={this.handleProceed(E, e.id)} disabled={!S}>{t(module26(E, "input.ok") || "PROCEED")}</module186.Button><module186.Button size="small" type="danger" loading={this.state.runLoading} onClick={this.handleBreak(E, e.id)} disabled={!S}>{t("BREAK")}</module186.Button></></div></div></div></div>;
                }
                return <div className={module3(module5095.pipelineCard, (r = {}, module31(r, module5095["pipelineCard--error"], u), module31(r, module5095["pipelineCard--queue"], d), r))}><div className={module5095.pipelineCard__title}>{e.displayName}</div><div className={module5095.pipelineCard__content}><div className={module5095.pipelineCard__item}>{d ? null : <div className={module5095.content__title}>{t("STEPS_COMPLETE_TOTAL", {
                    complete: s === "" ? 0 : s + 1,
                    total: l.length
                })}</div>}{d && e.causeOfBlockage ? <p className={module5095.errorMessage}>{e.causeOfBlockage}</p> : null}<div className={module3(module5095.content__status, (n = {}, module31(n, module5095.content__status__error, u), module31(n, module5095.content__status__quene, d), n))}>{d ? null : <Module922 {...getPipelineStatus(e)} hasLabel={false}/>}{this.renderStatus(e, u)}</div></div></div></div>;
            }
        },
        {
            key: "renderStatus",
            value: function(e, r) {
                if (!e.state || e.state === "QUEUED") {
                    return t("QUEUED");
                }
                if (e.state === "NOT_BUILT") {
                    return t("NOT_BUILT");
                }
                if (e.state === "SKIPPED") {
                    return t("SKIPPED");
                }
                if (e.state === "PAUSED") {
                    return t("PAUSED");
                }
                if (e.result === "ABORTED") {
                    return t("ABORTED");
                }
                if (r || e.result === "FAILURE") {
                    const n = module26(r, "displayName", "");
                    if (n === "Wait for interactive input") {
                        return <span className={module5095.errorMessage}>{t("CANCELLED_IN_REVIEW")}</span>;
                    }
                    return n || <span className={module5095.errorMessage}>{t("FAILED")}</span>;
                }
                if (e.state !== "FINISHED") {
                    return t("RUNNING");
                }
                return t("SUCCESSFUL");
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const nodes = this.props.nodes;
                if (Array.isArray(nodes)) {
                    return <div className={module5095.pipeline_column}>{nodes.map((t, r)=><div key={JSON.stringify(t)} ref={function(t) {
                            if (r) {
                                _this.domTree[r] = t;
                            } else {
                                _this.domTree = [
                                    t
                                ];
                            }
                        }}>{_this.renderCard(t, r)}</div>)}</div>;
                }
                return <div className={module5095.pipeline_column}><div ref={function(t) {
                    _this.domTree = [
                        t
                    ];
                }}>{this.renderCard(nodes)}</div></div>;
            }
        }
    ]);
    return n;
})(Component);
export default E;
E.contextTypes = {
    result: module1.string
};
