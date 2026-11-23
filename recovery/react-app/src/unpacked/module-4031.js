import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
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
import module186 from "unpacked/module-186.js";
import Module4032 from "unpacked/module-4032.js";
import { getTimeLabel } from "unpacked/module-1841.js";
import module4034 from "unpacked/module-4034.js";
const y = ((PureComponent_1)=>{
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
        t.handleTimeChange = function({ duration }) {
            t.setState({
                visible: false,
                duration
            }, function() {
                t.props.onChange(duration);
            });
        };
        const e_duration = e.duration;
        t.state = {
            visible: false,
            preDuration: "",
            duration: e_duration || "10m"
        };
        return t;
    }
    module37(r, [
        {
            key: "renderButtonText",
            value: function() {
                const duration = this.state.duration;
                const a = getTimeLabel(duration);
                return `${t("LAST")} ${a}`;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const duration = this.state.duration;
                return <div className={module4034.content}><Module4032 duration={duration} onChange={this.handleTimeChange}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, dark, arrowIcon } = props;
                return <div className={module3(module4034.selector, className, module31({}, module4034.active, this.state.visible))}><div className={module3(module4034.mask, module31({}, module4034.active, this.state.visible))} onClick={this.hideSelector}/><module186.Button className={module4034.button} onClick={this.handleToggle}><module186.Icon type={dark ? "dark" : "light"} name="timed-task" size={20}/><p>{this.renderButtonText()}</p><module186.Icon className={module4034.arrow} type={dark ? "dark" : "light"} name={arrowIcon || "caret-down"}/></module186.Button><div className={module4034.dropdown}>{this.renderContent()}</div></div>;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                if (e.duration !== t.preDuration) {
                    const a = e.duration;
                    return {
                        prevPropStep: a,
                        duration: a
                    };
                }
                return null;
            }
        }
    ]);
    return r;
})(PureComponent);
export default y;
y.propTypes = {
    duration: module1.string,
    onChange: module1.func,
    onToggle: module1.func
};
y.defaultProps = {
    duration: "10m",
    onChange: function() {},
    onToggle: function() {}
};
