import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import { Component, Fragment } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import Module3224 from "pages/devops/components/Pipeline/Card";
import Module1721 from "pages/devops/components/Pipeline/Edges";
let n;
let l;
let u;
let o;
let i;
let c;
let s;
const D = observer((s = c = ((Component_1)=>{
    module55(a, Component_1);
    var t = ((e)=>{
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
    })(a);
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        module65(e, "heights", u, module88(e));
        e.handleAddBranch = function(t) {
            return function() {
                e.props.store.handleAddBranch(t);
            };
        };
        e.onInsertColumn = function(t) {
            e.props.store.insertColumn(t);
        };
        e.handleFocus = function(t) {
            return function(a) {
                e.props.store.setFocus(t, a);
            };
        };
        module65(e, "onAddStep", o, module88(e));
        module65(e, "setHeight", i, module88(e));
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { stages, isEditMode } = props;
                if (!stages.length && isEditMode) {
                    return <Module1721 onInsertColumn={this.onInsertColumn} isEditMode={isEditMode} index={-1} heights={[]}/>;
                }
                return <><Module1721 onInsertColumn={this.onInsertColumn} isEditMode={isEditMode} index={-1} heights={this.sumHeights}/>{stages.map((t, index)=><Fragment key={`${t.name}${index}`}><Module3224 onAddBranch={_this.handleAddBranch(index)} onAddStep={_this.onAddStep} isEditMode={isEditMode} nodes={module14.toJS(t)} index={index} setHeight={_this.setHeight(index)} onFocus={_this.handleFocus(index)}/><Module1721 onInsertColumn={_this.onInsertColumn} isEditMode={isEditMode} index={index} heights={_this.sumHeights}/></Fragment>)}</>;
            }
        },
        {
            key: "sumHeights",
            get: function() {
                const stages = this.props.stages;
                const t = stages === undefined ? [] : stages;
                return this.heights.slice(0, t.length).map((e)=>{
                    let t = 0;
                    return e.map((e)=>t += e);
                });
            }
        }
    ]);
    return a;
})(Component), c.defaultProps = {}, l = s, u = module49(l.prototype, "heights", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), module49(l.prototype, "sumHeights", [
    module14.computed
], Object.getOwnPropertyDescriptor(l.prototype, "sumHeights"), l.prototype), o = module49(l.prototype, "onAddStep", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.props.store.isAddingStep = true;
        };
    }
}), i = module49(l.prototype, "setHeight", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            return function(a) {
                const r = module61(_this.heights);
                r[t] = a;
                _this.heights = r;
            };
        };
    }
}), n = l)) || n;
export default D;
