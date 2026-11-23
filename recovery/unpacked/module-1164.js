import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import { getMinutes, getTimeOptions } from "./module-950.js";
import module1519 from "./module-1519.js";
const y = [
    "1m",
    "2m",
    "5m",
    "10m",
    "15m",
    "30m",
    "1h",
    "2h",
    "5h"
];
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
        n.handlerStartDateClose = n.handlerDateClose("start");
        n.handlerEndDateClose = n.handlerDateClose("end");
        n.handleOk = function() {
            const n_formData = n.formData;
            const { step, start, end } = n_formData;
            if (start[0] && end[0]) {
                const start_1 = start[0].valueOf() / 1000;
                const end_1 = end[0].valueOf() / 1000;
                const i = end_1 - start_1;
                if (i > 0) {
                    const c = {
                        step,
                        times: Math.floor(i / (60 * getMinutes(step))) || 1,
                        start: start_1,
                        end: end_1,
                        lastTime: ""
                    };
                    n.props.onSubmit(c);
                } else {
                    module240.error({
                        content: t("TIMERANGE_SELECTOR_MSG")
                    });
                }
            } else {
                module240.error({
                    content: t("TIMERANGE_SELECTOR_ERROR_MSG")
                });
            }
        };
        const date = new Date;
        const o = new Date(date.valueOf() - 3600000);
        n.formData = {
            step: e.step,
            start: e.start ? [
                e.start
            ] : [
                o
            ],
            end: e.end ? [
                e.end
            ] : [
                date
            ]
        };
        return n;
    }
    module37(r, [
        {
            key: "handlerDateClose",
            value: function(e) {
                const _this = this;
                return function(a) {
                    _this.formData[e] = a;
                    _this.forceUpdate();
                };
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { onCancel, className } = props;
                const formData = this.formData;
                const { start, end } = formData;
                return <div className={module3(module1519.custom, className)}><div className={module1519.title}>{t("CUSTOM_TIME_RANGE")}</div><module186.Form data={this.formData}><module186.Form.Item label={t("START_TIME")}><module186.DatePicker name="start" defaultDate={start[0]} maxDate={end[0]} enableTime enableSeconds dateFormat="Y-m-d H:i:S" onClose={this.handlerStartDateClose}/></module186.Form.Item><module186.Form.Item label={t("END_TIME")}><module186.DatePicker name="end" defaultDate={end[0]} maxDate={end[0]} enableTime enableSeconds dateFormat="Y-m-d H:i:S" onClose={this.handlerEndDateClose}/></module186.Form.Item>{this.props.showStep && <module186.Form.Item label={t("SAMPLING_INTERVAL")}><module186.Select className={module1519.selectBox} defaultValue="1m" name="step" options={getTimeOptions(y)}/></module186.Form.Item>}<div className={module3(module1519.actions, module31({}, module1519.bottom10, !this.props.showStep))}><module186.Button onClick={onCancel}>{t("CANCEL")}</module186.Button><module186.Button type="control" onClick={this.handleOk}>{t("OK")}</module186.Button></div></module186.Form></div>;
            }
        }
    ]);
    return r;
})(Component);
export default E;
E.propTypes = {
    showStep: module1.bool,
    step: module1.string,
    times: module1.number,
    onSubmit: module1.func,
    onCancel: module1.func
};
E.defaultProps = {
    showStep: true,
    step: "10m",
    times: 30,
    onSubmit: function() {},
    onCancel: function() {}
};
