import "./module-15.js";
import "./module-5.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-442.js";
import "./module-42.js";
import "./module-57.js";
import module96 from "./module-96.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import { Component } from "./module-553.js";
import { observer } from "./module-239.js";
import module14 from "./module-14.js";
import module3 from "./module-3.js";
import module243 from "./module-243.js";
import module186 from "./module-186.js";
import Module1164 from "./module-1164.js";
import Module1163 from "./module-1163.js";
import { getTimeLabel } from "./module-950.js";
import module3480 from "./module-3480.js";
let l;
let u;
let o;
let i;
let c;
let s;
let f;
let d;
let p;
const P = observer((u = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        module65(e, "showDropDown", o, module88(e));
        module65(e, "step", i, module88(e));
        module65(e, "times", c, module88(e));
        module65(e, "lastTime", s, module88(e));
        module65(e, "handleTimeChange", f, module88(e));
        module65(e, "changeLastTime", d, module88(e));
        module65(e, "toggleDropdown", p, module88(e));
        e.hiddenDropdown = function() {
            e.showDropDown = false;
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                return <div><div className={module3(module3480.select, this.props.className)} onClick={this.toggleDropdown}><module186.Icon name="timed-task" type="light"/><div className={module3480.duration}>{this.duration}</div><module186.Icon name="caret-down" type="light"/></div>{this.showDropDown && this.renderDropdown()}</div>;
            }
        },
        {
            key: "renderDropdown",
            value: function() {
                const duration = this.props.duration;
                const { startTime, endTime } = duration;
                return <div className={module3480.durationDropdown}><Module1163 step={this.step} times={this.times} onChange={this.changeLastTime}/><Module1164 start={startTime} end={endTime} showStep={false} onSubmit={this.handleTimeChange} onCancel={this.hiddenDropdown}/></div>;
            }
        },
        {
            key: "duration",
            get: function() {
                if (this.lastTime) {
                    return `${t("LAST")} ${getTimeLabel(this.lastTime)}`;
                }
                const duration = this.props.duration;
                const { startTime, endTime } = duration;
                return `${module243(startTime).format("YYYY-MM-DD HH:mm:ss")} 
    ~ ${module243(endTime).format("YYYY-MM-DD HH:mm:ss")}`;
            }
        }
    ]);
    return r;
})(Component), o = module49(u.prototype, "showDropDown", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), i = module49(u.prototype, "step", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "1m";
    }
}), c = module49(u.prototype, "times", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 1;
    }
}), s = module49(u.prototype, "lastTime", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
}), module49(u.prototype, "duration", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "duration"), u.prototype), f = module49(u.prototype, "handleTimeChange", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ end, lastTime, start, step, times }) {
            _this.step = step;
            _this.times = times;
            _this.lastTime = lastTime;
            const duration = _this.props.duration;
            duration.startTime = 1000 * start;
            duration.endTime = 1000 * end;
            _this.hiddenDropdown();
            _this.props.onChange();
        };
    }
}), d = module49(u.prototype, "changeLastTime", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ step, times, lastTime }) {
            _this.step = step;
            _this.times = times;
            _this.lastTime = lastTime;
            const duration = _this.props.duration;
            const u = Date.now();
            duration.endTime = u;
            const o = step.match(/(\d+)(m)$/);
            const i = module96(o, 2)[1];
            const c = i === undefined ? 0 : i;
            duration.startTime = u - c * times * 60 * 1000;
            _this.hiddenDropdown();
            _this.props.onChange();
        };
    }
}), p = module49(u.prototype, "toggleDropdown", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.showDropDown = !_this.showDropDown;
        };
    }
}), l = u)) || l;
export default P;
