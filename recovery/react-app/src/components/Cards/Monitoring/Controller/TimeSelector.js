import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { PureComponent } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module189 from "unpacked/module-189.js";
import module186 from "unpacked/module-186.js";
import Module1163 from "unpacked/module-1163.js";
import Module1164 from "components/Cards/Monitoring/Controller/TimeSelector/Range/Custom";
import { getDateStr, getLastTimeStr, getTimeLabel } from "unpacked/module-950.js";
import module2191 from "unpacked/module-2191.js";
function b(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const _ = ((PureComponent_1)=>{
    module55(r, PureComponent_1);
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleToggle = function() {
            t.setState({
                visible: !t.state.visible
            }, function() {
                t.props.onToggle(t.state.visible);
            });
        };
        t.hideSelector = function() {
            t.setState({
                visible: false
            }, function() {
                t.props.onToggle(false);
            });
        };
        t.handleTimeChange = function(e) {
            t.setState({
                visible: false,
                ...e
            }, function() {
                const a = module189(e, [
                    "lastTime"
                ]);
                t.props.onChange(a);
            });
        };
        const { step, times } = e;
        t.state = {
            visible: false,
            prevPropStep: step,
            step,
            prevPropTimes: times,
            times,
            start: "",
            end: "",
            lastTime: ""
        };
        return t;
    }
    module37(r, [
        {
            key: "renderButtonText",
            value: function() {
                const state = this.state;
                const { step, times, start, end, lastTime } = state;
                const showStep = this.props.showStep;
                const i = showStep === undefined || showStep;
                if (start && end && !lastTime) {
                    const c = `(${t("INTERVAL")} ${getTimeLabel(step)})`;
                    return `${getDateStr(start)} ~ ${getDateStr(end)} ${i ? c : ""}`;
                }
                const value = getTimeLabel(lastTime || getLastTimeStr(step, times));
                return t("LAST_TIME", {
                    value
                });
            }
        },
        {
            key: "renderContent",
            value: function() {
                const state = this.state;
                const { step, times } = state;
                const showStep = this.props.showStep;
                const showStep_1 = showStep === undefined || showStep;
                return <div className={module2191.content}><Module1163 step={step} times={times} onChange={this.handleTimeChange}/><Module1164 step={step} times={times} showStep={showStep_1} onSubmit={this.handleTimeChange} onCancel={this.hideSelector}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, dark, arrowIcon } = props;
                return <div className={module3(module2191.selector, className, module31({}, module2191.active, this.state.visible))}><div className={module3(module2191.mask, module31({}, module2191.active, this.state.visible))} onClick={this.hideSelector}/><module186.Button className={module2191.button} onClick={this.handleToggle}><module186.Icon type={dark ? "dark" : "light"} name="timed-task" size={20}/><p>{this.renderButtonText()}</p><module186.Icon className={module2191.arrow} type={dark ? "dark" : "light"} name={arrowIcon || "caret-down"}/></module186.Button><div className={module2191.dropdown}>{this.renderContent()}</div></div>;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                if (e.step !== t.prevPropStep || e.times !== t.prevPropTimes) {
                    const { step, times } = e;
                    return {
                        prevPropStep: step,
                        step,
                        prevPropTimes: times,
                        times
                    };
                }
                return null;
            }
        }
    ]);
    return r;
})(PureComponent);
export default _;
_.propTypes = {
    step: module1.string,
    times: module1.number,
    onChange: module1.func,
    onToggle: module1.func
};
_.defaultProps = {
    step: "10m",
    times: 30,
    onChange: function() {},
    onToggle: function() {}
};
