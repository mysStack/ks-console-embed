import "unpacked/module-15.js";
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
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import { getTimeOptions } from "unpacked/module-950.js";
import module201 from "utils/cookie";
import module243 from "unpacked/module-243.js";
import module3530 from "unpacked/module-3530.js";
const g = [
    "1h",
    "2h",
    "4h",
    "8h",
    "1d"
];
const dateFormat = module201("lang") === "zh" ? "Y年Md日 H:i" : "M d, Y H:i";
const E = ((Component_1)=>{
    module55(r, Component_1);
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
        n.getTimeRange = function({ type, methord }) {
            return function(e) {
                const n_props = n.props;
                const { getTime, timeRange } = n_props;
                const { end, start } = timeRange;
                const c = new Date(e[0]).getTime();
                if (!(type === "start" && c >= end || type === "end" && c <= start)) {
                    getTime({
                        type,
                        value: c,
                        methord
                    });
                }
            };
        };
        n.handleStepChange = function({ type, methord }) {
            return function(e) {
                const l = e;
                const n_props = n.props;
                const { getTime, timeRange } = n_props;
                const { end, start } = timeRange;
                if (Math.floor((end - start) / 3600 / 24 / 1000) >= 30 && l !== "1d") {
                    module240.error({
                        content: t("TIMERANGE_MORE_30DAY_MSG")
                    });
                } else {
                    getTime({
                        type,
                        value: l,
                        methord
                    });
                }
            };
        };
        n.handleTimeRangeChange = function(e) {
            return function(a) {
                const n_props = n.props;
                const { getTime, timeRange } = n_props;
                const { end, start, step } = timeRange;
                const s = new Date(a[0]).getTime();
                if (e === "start" && s >= end || e === "end" && s <= start) {
                    module240.error({
                        content: t("TIMERANGE_SELECTOR_MSG")
                    });
                } else {
                    if (e === "start" && Math.floor((end - s) / 3600 / 24 / 1000) >= 30 && step !== "1d") {
                        getTime({
                            type: "step",
                            value: "1d",
                            methord: "change"
                        });
                    }
                    if (e === "end" && Math.floor((s - start) / 3600 / 24 / 1000) >= 30 && step !== "1d") {
                        getTime({
                            type: "step",
                            value: "1d",
                            methord: "change"
                        });
                    }
                    getTime({
                        type: e,
                        value: s,
                        methord: "change"
                    });
                }
            };
        };
        const timeRange = n.props.timeRange;
        const o = timeRange.end || new Date;
        n.endMaxDate = new Date(o);
        n.maxDate = new Date(module243(o).subtract(1, "minutes"));
        n.minDate = new Date(timeRange.start);
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const timeRange = this.props.timeRange;
                const { step, start, end } = timeRange;
                return <div className={module3530.datepicker}><div className={module3530.datepickerLeft}><div>{t("BILLING_CYCLE")}</div></div><div className={module3530.datepickerRight}><div><module186.DatePicker defaultValue={start} value={start} showClearBtn={false} dateFormat={dateFormat} minDate={this.minDate} maxDate={this.maxDate} onClose={this.getTimeRange({
                    type: "start",
                    methord: "close"
                })} onChange={this.handleTimeRangeChange("start")}/><p>{t("START_TIME")}</p></div><div><module186.DatePicker defaultValue={end} value={end} showClearBtn={false} dateFormat={dateFormat} minDate={this.minDate} maxDate={this.endMaxDate} onClose={this.getTimeRange({
                    type: "end",
                    methord: "close"
                })} onChange={this.handleTimeRangeChange("end")}/><p>{t("END_TIME")}</p></div><div><div><module186.Select value={step} options={getTimeOptions(g)} onChange={this.handleStepChange({
                    type: "step",
                    methord: "close"
                })}/></div><p>{t("SAMPLING_INTERVAL")}</p></div></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default E;
