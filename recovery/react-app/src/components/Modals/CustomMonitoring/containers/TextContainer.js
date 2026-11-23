import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-9.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module14 from "unpacked/module-14.js";
import Module2772 from "components/Modals/CustomMonitoring/components/TextPanelList";
let n;
let l;
const h = inject("monitoringStore", "modalStore")(n = observer((l = ((Component_1)=>{
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
        e.handleDelete = function(t) {
            e.monitors[t].stopMonitoring();
            e.textMonitorsRow.deleteTextMonitorByIndex(t);
        };
        e.handleEdit = function(t) {
            const a = e.textMonitorsRow.monitors[t];
            e.props.modalStore.selectMonitor(a);
        };
        e.handleAdd = function() {
            const t = e.monitoringStore.generateNewTextMonitor();
            e.modalStore.selectMonitor(t);
        };
        e.handleSort = function(t) {
            const a = t.map((e)=>e.monitor);
            e.textMonitorsRow.updateMonitors(a);
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                this.monitors.forEach((t)=>t.monitoring(_this.monitoringStore));
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.monitors.forEach((e)=>e.stopMonitoring());
            }
        },
        {
            key: "componentDidUpdate",
            value: function() {
                const _this = this;
                this.monitors.forEach((t)=>t.monitoring(_this.monitoringStore));
            }
        },
        {
            key: "render",
            value: function() {
                const isEditing = this.props.monitoringStore.isEditing;
                const textMonitorData = this.textMonitorData;
                const monitors = this.monitors.map((monitor)=>({
                        monitor
                    }));
                return <Module2772 isEditing={isEditing} monitors={monitors} textPanels={textMonitorData} onSort={this.handleSort} onDelete={this.handleDelete} onEdit={this.handleEdit} onAdd={this.handleAdd}/>;
            }
        },
        {
            key: "monitoringStore",
            get: function() {
                return this.props.monitoringStore;
            }
        },
        {
            key: "modalStore",
            get: function() {
                return this.props.modalStore;
            }
        },
        {
            key: "textMonitorsRow",
            get: function() {
                return this.monitoringStore.textMonitors;
            }
        },
        {
            key: "monitors",
            get: function() {
                return this.textMonitorsRow.monitors;
            }
        },
        {
            key: "textMonitorData",
            get: function() {
                return this.monitors.map((e)=>{
                    const t = e.config || {};
                    return {
                        title: t.title,
                        id: t.id,
                        value: e.stat,
                        errorMessage: e.errorMessage
                    };
                });
            }
        }
    ]);
    return a;
})(Component), module49(l.prototype, "monitoringStore", [
    module14.computed
], Object.getOwnPropertyDescriptor(l.prototype, "monitoringStore"), l.prototype), module49(l.prototype, "modalStore", [
    module14.computed
], Object.getOwnPropertyDescriptor(l.prototype, "modalStore"), l.prototype), module49(l.prototype, "textMonitorsRow", [
    module14.computed
], Object.getOwnPropertyDescriptor(l.prototype, "textMonitorsRow"), l.prototype), module49(l.prototype, "monitors", [
    module14.computed
], Object.getOwnPropertyDescriptor(l.prototype, "monitors"), l.prototype), module49(l.prototype, "textMonitorData", [
    module14.computed
], Object.getOwnPropertyDescriptor(l.prototype, "textMonitorData"), l.prototype), n = l)) || n) || n;
export default h;
