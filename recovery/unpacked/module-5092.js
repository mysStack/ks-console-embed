import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import "./module-58.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import { Component, createRef } from "./module-553.js";
import { observer } from "./module-239.js";
import module63 from "./module-63.js";
import module14 from "./module-14.js";
import module1 from "./module-1.js";
import Module1170 from "./module-1170.js";
import Module1716 from "./module-1716.js";
import Module5093 from "./module-5093.js";
import module5096 from "./module-5096.js";
let i;
let l;
let s;
let u;
let c;
let d;
let f;
let p;
let h;
const x = observer((h = p = ((Component_1)=>{
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
    function r(e) {
        let n;
        module36(this, r);
        n = t.call(this, e);
        module65(n, "isUserMoved", s, module88(n));
        module65(n, "parameters", u, module88(n));
        module65(n, "showParamsModal", c, module88(n));
        module65(n, "handleRefresh", d, module88(n));
        module65(n, "handleProceed", f, module88(n));
        n.handelShowProceedModal = function({ parameters, ...rest }, t) {
            n.parameters = parameters;
            n.elseParams = rest;
            if (module63(parameters)) {
                n.handleProceed(parameters, t);
            } else {
                n.showParamsModal = true;
            }
        };
        n.hideProceedModal = function() {
            n.showParamsModal = false;
        };
        n.draggerCref = createRef();
        return n;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function() {
                if (this.draggerCref.current && !this.draggerCref.current.isMoved && this.draggerCref.current.initialComponent) {
                    this.draggerCref.current.initialComponent();
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { isEditMode, jsonData } = props;
                return <><Module1170 ref={this.draggerCref} className={module5096.container} enableToggleFullScreen XOffset={30} YOffset={60}><Module5093 isEditMode={isEditMode} stages={jsonData} onProceed={this.handelShowProceedModal} onBreak={this.context.onBreak}/></Module1170><Module1716 visible={this.showParamsModal} parameters={module14.toJS(this.parameters)} onCancel={this.hideProceedModal} onOk={this.handleProceed}/></>;
            }
        }
    ]);
    return r;
})(Component), p.contextTypes = {
    onProceed: module1.func,
    onBreak: module1.func
}, l = h, s = module49(l.prototype, "isUserMoved", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), u = module49(l.prototype, "parameters", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), c = module49(l.prototype, "showParamsModal", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), d = module49(l.prototype, "handleRefresh", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.scale = 1;
            _this.translateX = 0;
            _this.translateY = 0;
        };
    }
}), f = module49(l.prototype, "handleProceed", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (parameters, n)=>{
            await _this.context.onProceed({
                parameters,
                ..._this.elseParams
            }, typeof n === "function" ? n : undefined);
            _this.showParamsModal = false;
        };
    }
}), i = l)) || i;
export default x;
