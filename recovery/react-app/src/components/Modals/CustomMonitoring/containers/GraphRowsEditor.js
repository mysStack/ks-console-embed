import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-192.js";
import "unpacked/module-9.js";
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
import module49 from "unpacked/module-49.js";
import * as module553 from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module14 from "unpacked/module-14.js";
import module1635 from "unpacked/module-1635.js";
import module2829 from "components/Modals/CustomMonitoring/components/RowTitleEditor";
import module2831 from "components/Modals/CustomMonitoring/components/RowsSortItem";
import module2833 from "components/Modals/CustomMonitoring/components/Layout/VerticalLayout";
import module2835 from "components/Modals/CustomMonitoring/components/AddPanel";
import module2837 from "components/Modals/CustomMonitoring/components/GraphTypeSelectModal";
let o;
let u;
const O = inject("monitoringStore", "modalStore")(o = observer((u = ((e)=>{
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
        e.addRow = function() {
            e.props.monitoringStore.addNewRow();
        };
        e.showMonitorModal = function() {
            e.props.modalStore.showNewMonitorModal();
        };
        e.onNewMonitorModalCancel = function() {
            e.props.modalStore.hideNewMonitorModal();
        };
        e.onConfirmNewGraphType = function(t) {
            let a;
            if (t === "line" || t === "bar") {
                a = e.props.monitoringStore.generatGraphMonitor({
                    lines: t === "line",
                    bars: t === "bar"
                });
            } else if (t === "table") {
                a = e.props.monitoringStore.generatTableMonitor();
            }
            e.props.modalStore.hideNewMonitorModal();
            e.modalStore.selectMonitor(a);
        };
        return e;
    }
    module37(r, [
        {
            key: "handleRowTitleChange",
            value: function(e) {
                return function(t) {
                    e.config.title = t;
                };
            }
        },
        {
            key: "handleRowPanelsSort",
            value: function(e) {
                return function(t) {
                    const a = e.monitors.map((e)=>e.id).join(",");
                    if (t.map((e)=>e.monitor.id).join(",") !== a) {
                        e.monitors = t.map(({ monitor })=>{
                            monitor.belong(e);
                            return monitor;
                        });
                    }
                };
            }
        },
        {
            key: "handleRowDesc",
            value: function(e) {
                const _this = this;
                return function() {
                    const graphMonitorRows = _this.props.monitoringStore.graphMonitorRows;
                    const a_length = graphMonitorRows.length;
                    const n = graphMonitorRows[e];
                    graphMonitorRows[e] = graphMonitorRows[(e + 1) % a_length];
                    graphMonitorRows[(e + 1) % a_length] = n;
                };
            }
        },
        {
            key: "handleRowAsc",
            value: function(e) {
                const _this = this;
                return function() {
                    const graphMonitorRows = _this.props.monitoringStore.graphMonitorRows;
                    const a_length = graphMonitorRows.length;
                    const n = graphMonitorRows[e];
                    graphMonitorRows[e] = graphMonitorRows[(e + a_length - 1) % a_length];
                    graphMonitorRows[(e + a_length - 1) % a_length] = n;
                };
            }
        },
        {
            key: "handleRowDelete",
            value: function(e) {
                const _this = this;
                return function() {
                    _this.props.monitoringStore.graphMonitorRows.splice(e, 1);
                };
            }
        },
        {
            key: "handleMonitorDelete",
            value: function(e, t) {
                return function() {
                    e.deleteTextMonitorByIndex(t);
                };
            }
        },
        {
            key: "handleMonitorSelect",
            value: function(e) {
                const _this = this;
                return function() {
                    _this.props.modalStore.selectMonitor(e);
                };
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const unNameGraphRow = this.props.monitoringStore.unNameGraphRow;
                const graphMonitorRows = this.props.monitoringStore.graphMonitorRows;
                return module553.default.createElement(module2833, {
                    top: module553.default.createElement("div", null, module553.default.createElement(module1635.ReactSortable, {
                        handle: `.j-sort`,
                        list: unNameGraphRow.monitors.map((e)=>({
                                monitor: e
                            })),
                        setList: this.handleRowPanelsSort(unNameGraphRow),
                        animation: 200,
                        group: "group"
                    }, unNameGraphRow.monitors.map((t, r)=>module553.default.createElement(module2831, {
                            key: t.id,
                            title: t.config.title,
                            sortHandlerClassName: "j-sort",
                            onEditClick: _this.handleMonitorSelect(t),
                            onDeleteClick: _this.handleMonitorDelete(unNameGraphRow, r)
                        }))), graphMonitorRows.map((t, a)=>module553.default.createElement("div", {
                            key: t.config.id
                        }, module553.default.createElement(module2829, {
                            key: t.config.id,
                            onChange: _this.handleRowTitleChange(t),
                            title: t.config.title,
                            onDescClick: _this.handleRowDesc(a),
                            onAscClick: _this.handleRowAsc(a),
                            onDeleteClick: _this.handleRowDelete(a)
                        }), module553.default.createElement(module1635.ReactSortable, {
                            key: `sortTable${t.config.id}`,
                            handle: `.j-sort`,
                            list: t.monitors.map((e)=>({
                                    monitor: e
                                })),
                            setList: _this.handleRowPanelsSort(t),
                            animation: 200,
                            group: "group"
                        }, t.monitors.map((a, r)=>module553.default.createElement(module2831, {
                                key: a.config.id,
                                title: a.config.title,
                                sortHandlerClassName: "j-sort",
                                onEditClick: _this.handleMonitorSelect(a),
                                onDeleteClick: _this.handleMonitorDelete(t, r)
                            })))))),
                    bottom: module553.default.createElement("div", null, module553.default.createElement(module2835, {
                        title: t("ADD_MONITOR_ITEM"),
                        onClick: this.showMonitorModal
                    }), module553.default.createElement(module2835, {
                        title: t("ADD_MONITOR_ROW"),
                        onClick: this.addRow
                    }), module553.default.createElement(module2837, {
                        visible: this.modalStore.shouldNewMonitorModalShow,
                        onCancel: this.onNewMonitorModalCancel,
                        onOk: this.onConfirmNewGraphType
                    }))
                });
            }
        },
        {
            key: "modalStore",
            get: function() {
                return this.props.modalStore;
            }
        },
        {
            key: "monitoringStore",
            get: function() {
                return this.props.monitoringStore;
            }
        }
    ]);
    return r;
})(module553.Component), module49(u.prototype, "modalStore", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "modalStore"), u.prototype), module49(u.prototype, "monitoringStore", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "monitoringStore"), u.prototype), o = u)) || o) || o;
export default O;
