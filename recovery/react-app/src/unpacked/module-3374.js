import "./module-15.js";
import "./module-828.js";
import "./module-18.js";
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
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import module807 from "./module-807.js";
import module3375 from "./module-3375.js";
const v = ((Component_1)=>{
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
        r.handleChange = function(e, t) {
            const r_state = r.state;
            const { startTime, endTime } = r_state;
            const onChange = r.props.onChange;
            const c = module31({
                startTime,
                endTime
            }, e, t);
            r.setState(module31({}, e, t));
            onChange([
                c.startTime,
                c.endTime
            ]);
        };
        r.renderTimePicker = function() {
            const r_state = r.state;
            const { startTime, endTime } = r_state;
            return <div className={module3375.wrapper}><module186.Select value={startTime} defaultValue={startTime} onChange={function(e) {
                return r.handleChange("startTime", e);
            }} options={new Array(24).fill(0).map((e, t)=>({
                    value: 3600 * t,
                    label: t < 10 ? `0${t}` : t
                }))} clearable searchable={false}/><span>–</span><module186.Select value={endTime} defaultValue={endTime} onChange={function(e) {
                return r.handleChange("endTime", e);
            }} options={new Array(24).fill(0).map((e, t)=>({
                    value: 3600 * (t + 1),
                    label: t < 10 ? `0${t}` : t
                }))} clearable/></div>;
        };
        r.renderDatePicker = function() {
            const r_state = r.state;
            const { startTime, endTime } = r_state;
            return <div className={module3375.wrapper}><module186.DatePicker value={startTime} dateFormat="Y-m-d H:i:S" onChange={function(e) {
                r.handleChange("startTime", e[0]);
            }} enableTime/><span>–</span><module186.DatePicker value={endTime} dateFormat="Y-m-d H:i:S" enableTime onChange={function(e) {
                return r.handleChange("endTime", e[0]);
            }}/></div>;
        };
        const value = r.props.value;
        const u = value === undefined ? [] : value;
        r.state = {
            startTime: u[0],
            endTime: u[1],
            value: e.value
        };
        return r;
    }
    module37(a, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const value = this.props.value;
                const a = value === undefined ? [] : value;
                if (!(module807(a, e.value) || module807(a, this.state.value))) {
                    this.setState({
                        value: a,
                        startTime: a[0],
                        endTime: a[1]
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                if (this.props.type === "date") {
                    return this.renderDatePicker();
                }
                return this.renderTimePicker();
            }
        }
    ]);
    return a;
})(Component);
export default v;
