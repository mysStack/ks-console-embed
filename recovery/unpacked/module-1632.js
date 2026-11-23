import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import { Provider, observer } from "./module-239.js";
import module2756 from "./module-2756.js";
import Module2757 from "./module-2757.js";
import Module2759 from "./module-2759.js";
import Module2762 from "./module-2762.js";
import Module2765 from "./module-2765.js";
import Module2771 from "./module-2771.js";
import Module2776 from "./module-2776.js";
import Module2821 from "./module-2821.js";
import Module2845 from "./module-2845.js";
import Module2846 from "./module-2846.js";
import Module2847 from "./module-2847.js";
import Module2851 from "./module-2851.js";
import module2853 from "./module-2853.js";
let n;
const T = observer(n = ((Component_1)=>{
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
        e.store = e.props.store;
        e.modalStore = new module2853;
        e.labelStore = new module2756;
        e.subForm = createRef();
        e.handleSave = function(t) {
            const onOk = e.props.onOk;
            if (e.subForm && e.subForm.current) {
                e.subForm.current.handleSubmit();
            }
            onOk(t);
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { readOnly, onCancel, isSubmitting } = props;
                const selectedMonitor = this.modalStore.selectedMonitor;
                const isEditing = this.store.isEditing;
                const o = selectedMonitor && isEditing;
                return <Provider monitoringStore={this.store} labelStore={this.labelStore} modalStore={this.modalStore}><Module2847 theme={this.modalStore.theme} onCancel={onCancel} title=<Module2759/> description=<Module2846/> operations=<><Module2845/><Module2765/><Module2762/>{!readOnly && <Module2757 onSaveClick={this.handleSave} isSubmitting={isSubmitting}/>}</>><Module2851 sidebar=<Module2771/> content={o ? <Module2776 ref={this.subForm}/> : <Module2821/>}/></Module2847></Provider>;
            }
        }
    ]);
    return a;
})(Component)) || n;
export default T;
