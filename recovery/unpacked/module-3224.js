import "./module-15.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import module3225 from "./module-3225.js";
import module63 from "./module-63.js";
import module807 from "./module-807.js";
import module136 from "./module-136.js";
import { renderStepArgs } from "./module-1375.js";
import module1061 from "./module-1061.js";
const O = {
    echo: "loudspeaker",
    mail: "mail",
    shell: "terminal",
    sh: "terminal",
    container: "terminal",
    checkout: "network-router",
    git: "network-router",
    withCredentials: "key",
    kubernetesDeploy: "kubernetes",
    branch: "network-router",
    timeout: "clock",
    withSonarQubeEnv: "network"
};
const S = ((Component_1)=>{
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
        n.handleAddStep = function() {
            n.props.onAddStep();
        };
        n.handleFocus = function(e) {
            return function(t) {
                if (n.props.isEditMode) {
                    t.stopPropagation();
                    n.props.onFocus(e);
                }
            };
        };
        n.renderNestStages = function(e) {
            if (n.props.isEditMode) {
                return <div className={module1061.errorTip}>{t("not support edit nested stage")}</div>;
            }
            if (!module63(e) && module14.isObservableArray(e)) {
                return <div className={module1061.nestStage_content}><div className={module1061.indentBorder}/><div className={module1061.nestsStage_detail}>{e.map((e)=>n.renderCardContent(e))}</div></div>;
            }
        };
        n.renderSteps = function(e, a) {
            if (e && e.length) {
                return e.map((e, r)=><div key={JSON.stringify(e) + r} className={module1061.pipelineCard__item}><div className={module3(module1061.content__title, module1061.content__title__noDetail, module31({}, module1061.content__title__error, a && a.index === r))}><module186.Icon size={20} name={O[e.name] || "cdn"}/><span className={module1061.content__title__text}>{t(e.name)}</span></div>{e.name === "sh" || e.name === "script" ? <div className={module1061.content__text}>{renderStepArgs(module14.toJS(e))}</div> : null}{n.renderSteps(e.children)}</div>);
            }
        };
        n.domTree = [];
        n.heights = [];
        n.nodes = module14.toJS(n.props.nodes);
        return n;
    }
    module37(r, [
        {
            key: "shouldComponentUpdate",
            value: function(e) {
                const t = module14.toJS(e.nodes);
                return !module807(t, this.nodes) && (this.nodes = module136(t), true);
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.calculateHeight();
            }
        },
        {
            key: "componentDidUpdate",
            value: function() {
                this.calculateHeight();
            }
        },
        {
            key: "calculateHeight",
            value: function() {
                const e = module3225(this.domTree.map((e)=>e && e.clientHeight), null);
                if (JSON.stringify(e) !== JSON.stringify(this.heights)) {
                    this.heights = e;
                    this.props.setHeight(this.heights);
                }
            }
        },
        {
            key: "renderAddBranchCard",
            value: function() {
                return <div className={module1061.addBranchCard} onClick={this.props.onAddBranch}><module186.Icon size={16} name="add"/><span>{t("Add Parallel Stage")}</span></div>;
            }
        },
        {
            key: "renderConditions",
            value: function(e) {
                if (e.when) {
                    return <div className={module1061.conditions}><p className={module1061.conditions__title}>{t("pipeline_conditions")}</p>{this.renderSteps(e.when.conditions, e.conditionError)}</div>;
                }
                return null;
            }
        },
        {
            key: "renderCard",
            value: function(e, a) {
                let r;
                const isEditMode = this.props.isEditMode;
                return <div className={module3(module1061.pipelineCard, {
                    "pipelineCard-edit": isEditMode
                })} onClick={this.handleFocus(a)}><div className={module3(module1061.pipelineCard__title, module31({}, module1061["pipelineCard__title-error"], e.error))}>{e.name || t("Unnamed")}</div><div className={module3(module1061.pipelineCard__content, (r = {}, module31(r, module1061["pipelineCard-active"], e.isActive), module31(r, module1061["pipelineCard-error"], e.error), r))}>{this.renderCardContent(e)}</div></div>;
            }
        },
        {
            key: "renderCardContent",
            value: function(e) {
                const isEditMode = this.props.isEditMode;
                const r = !!e.stages;
                return <>{e.error || e.conditionError ? <div className={module1061.errorTip}>{t(module26(e, "error.error") || module26(e, "conditionError.error")) || t("Configuration error")}</div> : null}{this.renderConditions(e, e.conditionError)}{e.stages ? this.renderNestStages(e.stages) : this.renderSteps(module26(e, "branches[0].steps"), e.error)}{isEditMode && !r ? <div className={module1061.addSteps} onClick={this.handleAddStep}><module186.Icon size={16} name="add"/><span>{t("Add Step")}</span></div> : null}</>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { nodes, isEditMode } = props;
                if (nodes.parallel) {
                    return <div className={module1061.pipeline_column} data-card="card">{nodes.parallel.map((t, a)=><div key={JSON.stringify(t)} ref={function(t) {
                            _this.domTree[a] = t;
                        }}>{_this.renderCard(t, a)}</div>)}{isEditMode ? this.renderAddBranchCard() : null}</div>;
                }
                return <div className={module1061.pipeline_column} data-card="card"><div ref={function(t) {
                    _this.domTree = [
                        t
                    ];
                }}>{this.renderCard(nodes, 0)}</div>{isEditMode ? this.renderAddBranchCard() : null}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default S;
