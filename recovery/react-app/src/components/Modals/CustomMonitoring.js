import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import { Provider, observer } from "unpacked/module-239.js";
import module2756 from "stores/monitoring/custom/labelsets";
import Module2757 from "components/Modals/CustomMonitoring/containers/SwitchButton";
import Module2759 from "components/Modals/CustomMonitoring/containers/Title";
import Module2762 from "components/Modals/CustomMonitoring/containers/RefreshIntervalSelector";
import Module2765 from "components/Modals/CustomMonitoring/containers/TimeRangeSelect";
import Module2771 from "components/Modals/CustomMonitoring/containers/TextContainer";
import Module2776 from "components/Modals/CustomMonitoring/containers/MonitorEditor";
import Module2821 from "components/Modals/CustomMonitoring/containers/GraphOverview";
import Module2845 from "components/Modals/CustomMonitoring/containers/ThemeSwitchButton";
import Module2846 from "components/Modals/CustomMonitoring/components/Clock";
import Module2847 from "components/Modals/CustomMonitoring/components/Modal/Theme";
import Module2851 from "components/Modals/CustomMonitoring/components/Layout";
import module2853 from "components/Modals/CustomMonitoring/store";
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
