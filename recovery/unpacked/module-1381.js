import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module186 from "./module-186.js";
import { Modal } from "./module-904.js";
import module1738 from "./module-1738.js";
import module3376 from "./module-3376.js";
const g = ((Component_1)=>{
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
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.icon = "pen";
        r.handleOk = function() {
            const r_props = r.props;
            const { formTemplate, onOk } = r_props;
            r.formRef.current.validate(module44(module41.mark(function* e() {
                onOk(formTemplate);
            })));
        };
        r.component = module1738;
        r.formRef = createRef();
        return r;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { title, formTemplate, store, ...rest } = props;
                const Component = this.component;
                return <Modal width={960} {...rest} onOk={this.handleOk} title=<div className={module3376.title}><module186.Icon name={this.icon} className="margin-r8"/><div>{title}</div></div>><div className={module3376.wrapper}>{<Component formTemplate={formTemplate} formRef={this.formRef} isEdit store={store}/>}</div></Modal>;
            }
        }
    ]);
    return a;
})(Component);
export default g;
