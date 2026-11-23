import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-73.js";
import "./module-138.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-137.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-319.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import module41 from "./module-41.js";
import "./module-31.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module1198 from "./module-1198.js";
import { RadonDBAppId } from "./module-817.js";
import module984 from "./module-984.js";
const options = [
    {
        label: "00:00:00–02:00:00",
        value: "0"
    },
    {
        label: "02:00:00–04:00:00",
        value: "2"
    },
    {
        label: "04:00:00–06:00:00",
        value: "4"
    },
    {
        label: "06:00:00–08:00:00",
        value: "6"
    },
    {
        label: "08:00:00–10:00:00",
        value: "8"
    },
    {
        label: "10:00:00–12:00:00",
        value: "10"
    },
    {
        label: "12:00:00–14:00:00",
        value: "12"
    },
    {
        label: "14:00:00–16:00:00",
        value: "14"
    },
    {
        label: "16:00:00–18:00:00",
        value: "16"
    },
    {
        label: "18:00:00–20:00:00",
        value: "18"
    },
    {
        label: "20:00:00–22:00:00",
        value: "20"
    },
    {
        label: "22:00:00–24:00:00",
        value: "22"
    }
];
const D = ((e)=>{
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.getBackupSchedule = function() {
            const n_state = n.state;
            const { checked, timePeriod, cycle } = n_state;
            if (checked && cycle.length) {
                return `0 ${timePeriod} * * ${cycle.join(",")}`;
            }
            return "";
        };
        n.handleToggle = function(checked) {
            n.setState({
                checked
            });
        };
        n.handleCheckBoxChange = function(cycle) {
            n.setState({
                cycle
            });
        };
        n.handleSelectChange = function(timePeriod) {
            n.setState({
                timePeriod
            });
        };
        n.onOk = module44(module41.mark(function e() {
            let a;
            let r;
            let l;
            return module41.wrap(function(e) {
                while(true){
                    switch(e.prev = e.next){
                        case 0:
                            a = n.state;
                            r = a.retentionTime;
                            l = a.cycle;
                            if (!a.checked) {
                                e.next = 8;
                                break;
                            }
                            if (r) {
                                e.next = 5;
                                break;
                            }
                            module240.error({
                                content: t("BACKUP_RETENTION_DAYS_ERROR")
                            });
                            return e.abrupt("return");
                        case 5:
                            if (l.length !== 0) {
                                e.next = 8;
                                break;
                            }
                            module240.error({
                                content: t("BACKUP_DATE_ERROR")
                            });
                            return e.abrupt("return");
                        case 8:
                            n.props.onOk({
                                ...n.props,
                                backupSchedule: n.getBackupSchedule(),
                                retentionTime: r
                            });
                        case 9:
                        case "end":
                            return e.stop();
                    }
                }
            }, e);
        }));
        n.onCancel = function() {
            n.props.onCancel();
        };
        const e_backupSchedule = e.backupSchedule;
        const checked = !!e_backupSchedule;
        let timePeriod = "0";
        let cycle = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
        ];
        const d = e.retentionTime || 30;
        if (checked) {
            const p = e_backupSchedule.split(" ");
            timePeriod = module26(p, "[1]", timePeriod);
            cycle = module26(p, "[4]", "").split(",").filter((e)=>cycle.includes(e));
        }
        n.state = {
            checked,
            timePeriod,
            cycle,
            isScheduledDelete: e.isScheduledDelete || false,
            retentionTime: d
        };
        return n;
    }
    module37(r, [
        {
            key: "checkBoxOptions",
            get: function() {
                return [
                    {
                        label: t("MONDAY"),
                        value: "1"
                    },
                    {
                        label: t("TUESDAY"),
                        value: "2"
                    },
                    {
                        label: t("WEDNESDAY"),
                        value: "3"
                    },
                    {
                        label: t("THURSDAY"),
                        value: "4"
                    },
                    {
                        label: t("FRIDAY"),
                        value: "5"
                    },
                    {
                        label: t("SATURDAY"),
                        value: "6"
                    },
                    {
                        label: t("SUNDAY"),
                        value: "0"
                    }
                ];
            }
        },
        {
            key: "checkBoxPGOptions",
            get: function() {
                return [
                    {
                        label: t("MONDAY"),
                        value: "0"
                    },
                    {
                        label: t("TUESDAY"),
                        value: "1"
                    },
                    {
                        label: t("WEDNESDAY"),
                        value: "2"
                    },
                    {
                        label: t("THURSDAY"),
                        value: "3"
                    },
                    {
                        label: t("FRIDAY"),
                        value: "4"
                    },
                    {
                        label: t("SATURDAY"),
                        value: "5"
                    },
                    {
                        label: t("SUNDAY"),
                        value: "6"
                    }
                ];
            }
        },
        {
            key: "showScheduledDelete",
            get: function() {
                return this.props.app_id === RadonDBAppId.PostgreSQL;
            }
        }
    ]);
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const a = {
                    ...this.props
                };
                return module553.default.createElement(module788, {
                    width: 600,
                    footerClassName: module984.footer,
                    ...a,
                    onOk: this.onOk,
                    onCancel: this.onCancel
                }, module553.default.createElement("div", {
                    className: module984.autoBackupToggle
                }, module553.default.createElement(module186.Toggle, {
                    checked: this.state.checked,
                    onChange: this.handleToggle
                }), module553.default.createElement("span", null, this.state.checked ? t("ENABLED") : t("DISABLED"))), this.state.checked ? module553.default.createElement("div", {
                    className: module984.autoBackupSetting
                }, module553.default.createElement("div", {
                    className: module984.formItem
                }, module553.default.createElement("span", {
                    className: module984.label
                }, t("BACKUP_TIME")), module553.default.createElement(module186.Select, {
                    options,
                    value: this.state.timePeriod,
                    onChange: this.handleSelectChange
                })), module553.default.createElement("div", {
                    className: module984.formItem
                }, module553.default.createElement("span", {
                    className: module984.label
                }, t("BACKUP_DATE")), module553.default.createElement(module186.CheckboxGroup, {
                    value: this.state.cycle,
                    options: this.showScheduledDelete ? this.checkBoxPGOptions : this.checkBoxOptions,
                    onChange: this.handleCheckBoxChange
                })), this.showScheduledDelete && module553.default.createElement("div", null, module553.default.createElement("span", {
                    className: module984.label
                }, t("BACKUP_RETENTION_DAYS")), module553.default.createElement(module1198, {
                    className: module984.retentionTime,
                    min: 1,
                    unit: t("BACKUP_DAY"),
                    value: this.state.retentionTime,
                    max: 365,
                    showUnit: true,
                    integer: true,
                    showFunc: true,
                    onChange: function(t) {
                        const a = t === "" ? t : parseInt(t, 10);
                        _this.setState({
                            retentionTime: a
                        });
                    }
                }))) : null);
            }
        }
    ]);
    return r;
})(module553.Component);
export default D;
D.propTypes = {
    onOk: module1.func,
    onCancel: module1.func
};
D.defaultProps = {
    onOk: function() {},
    onCancel: function() {}
};
