import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-9.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
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
import Module5094 from "pages/devops/components/PipelineStatus/card";
import Module1721 from "pages/devops/components/Pipeline/Edges";
let a;
let o;
let i;
let l;
const D = observer((o = ((Component_1)=>{
    module55(r, Component_1);
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
    })(r);
    function r(...a) {
        let e;
        module36(this, r);
        e = t.call(this, ...a);
        module65(e, "heights", i, module88(e));
        module65(e, "setHeight", l, module88(e));
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const stages = this.props.stages;
                return <><Module1721 index={-1} heights={this.sumHeights}/>{stages.map((t, index)=><Fragment key={JSON.stringify(t)}><Module5094 nodes={module14.toJS(t)} index={index} setHeight={_this.setHeight(index)} onProceed={_this.props.onProceed} onBreak={_this.props.onBreak}/><Module1721 index={index} heights={_this.sumHeights}/></Fragment>)}</>;
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
    return r;
})(Component), i = module49(o.prototype, "heights", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), module49(o.prototype, "sumHeights", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "sumHeights"), o.prototype), l = module49(o.prototype, "setHeight", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            return function(r) {
                const n = module61(_this.heights);
                n[t] = r;
                _this.heights = n;
            };
        };
    }
}), a = o)) || a;
export default D;
