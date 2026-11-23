import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-84.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-45.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-57.js";
import { Component } from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import { PIPELINE_TASKS } from "utils/constants";
import module1 from "unpacked/module-1.js";
import module14 from "unpacked/module-14.js";
import module136 from "unpacked/module-136.js";
import module807 from "unpacked/module-807.js";
import { renderStepArgs } from "unpacked/module-1375.js";
import module1017 from "unpacked/module-1017.js";
import module1061 from "unpacked/module-1061.js";
import Module1722 from "pages/devops/components/Pipeline/StepsEditorOld/StepContainer";
const S = {
    withCredentials: true,
    dir: true,
    container: true,
    timeout: true,
    withSonarQubeEnv: true,
    not: true,
    allOf: true,
    anyOf: true
};
const C = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.step = module14.toJS(e.props.step);
        e.toggleAddStep = function(t, a) {
            return function() {
                e.context.toggleAddStep(t, a)();
            };
        };
        e.handleEdit = function(t, a, r, n) {
            return function() {
                e.context.handleEdit(t, a, r, n)();
            };
        };
        e.handleDeleteStep = function(t, a, r) {
            return function() {
                e.context.handleDeleteStep(t, a, r)();
            };
        };
        return e;
    }
    module37(r, [
        {
            key: "shouldComponentUpdate",
            value: function(e) {
                if (this.props.listType === "condition") {
                    return true;
                }
                const t = module14.toJS(e.step);
                return !module807(this.step, t) && (this.step = module136(module14.toJS(e.step)), true);
            }
        },
        {
            key: "render",
            value: function() {
                let e;
                const props = this.props;
                const { step, index, zIndex, listType, isLast } = props;
                return <div key={JSON.stringify(step.name) + index} className={module3(`pipelineCard__item-${index}`, module1061.pipelineCard__item)} data-id={JSON.stringify(step) + index} style={isLast ? {
                    border: "none"
                } : null}><span className={module1017.delete} onClick={this.handleDeleteStep(index, zIndex, listType)}><module186.Icon name="trash" clickable/></span>{listType || (e = step.name, !PIPELINE_TASKS.All.includes(e) && e !== "sh") ? null : <span className={module1017.edit} onClick={this.handleEdit(zIndex, index, step, listType)}><module186.Icon name="wrench" clickable/></span>}<div style={{
                    color: "#329dce"
                }} className={module1061.content__title}>{t(step.name)}</div>{renderStepArgs(module14.toJS(step))}<Module1722 steps={step.children} zIndex={[].concat(module61(zIndex), [
                    index
                ])} listType={listType}/>{step.name in S ? <div className={module1061.addSteps} onClick={this.toggleAddStep([].concat(module61(zIndex), [
                    index
                ]), listType)}><module186.Icon name="add"/>  {listType ? t(`Add nesting ${listType}s`) : t("Add nesting steps")}</div> : null}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default C;
C.contextTypes = {
    toggleAddStep: module1.func,
    handleEdit: module1.func,
    handleDeleteStep: module1.func
};
