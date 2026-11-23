import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-9.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import * as module553 from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module14 from "unpacked/module-14.js";
import module2777 from "components/Modals/CustomMonitoring/components/FormContainer";
import singlestat from "components/Modals/CustomMonitoring/containers/TextMonitorForm";
import graph from "components/Modals/CustomMonitoring/containers/GraphMonitorForm";
import table from "components/Modals/CustomMonitoring/containers/TableMonitorForm";
let o;
let u;
const S = {
    singlestat,
    graph,
    table
};
const _ = inject("modalStore", "monitoringStore")(o = observer((u = ((e)=>{
    module55(r, e);
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.temporaryMonitor = e.getTemporaryMonitor();
        e.handleCancel = function() {
            e.props.modalStore.unSelectMonitor();
        };
        e.handleSubmit = function() {
            if (e.isNewMonitor) {
                e.monitor.belongTo.push(e.temporaryMonitor);
            } else {
                e.monitor.config = e.temporaryMonitor.config;
            }
            e.props.modalStore.unSelectMonitor();
        };
        return e;
    }
    module37(r, [
        {
            key: "getTemporaryMonitor",
            value: function() {
                if (this.isNewMonitor) {
                    return this.monitor;
                }
                return this.monitor.clone();
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.temporaryMonitor.monitoring(this.props.monitoringStore);
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.temporaryMonitor.stopMonitoring();
            }
        },
        {
            key: "render",
            value: function() {
                const e = S[this.monitor.type];
                return module553.default.createElement(module2777, {
                    formData: this.temporaryMonitor.config,
                    onSubmit: this.handleSubmit,
                    onCancel: this.handleCancel
                }, e ? module553.default.createElement(e, {
                    monitor: this.temporaryMonitor
                }) : t("MONITOR_TYPE_NO_SUPPORT"));
            }
        },
        {
            key: "monitor",
            get: function() {
                return this.props.modalStore.selectedMonitor;
            }
        },
        {
            key: "isNewMonitor",
            get: function() {
                const monitor = this.monitor;
                return !monitor.belongTo.has(monitor);
            }
        }
    ]);
    return r;
})(module553.Component), module49(u.prototype, "monitor", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "monitor"), u.prototype), module49(u.prototype, "isNewMonitor", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "isNewMonitor"), u.prototype), o = u)) || o) || o;
export default _;
