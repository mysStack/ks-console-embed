import "unpacked/module-15.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-109.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-24.js";
import "unpacked/module-193.js";
import * as module553 from "unpacked/module-553.js";
import module1101 from "components/Base/NotifyConfirm";
import module1252 from "unpacked/module-1252.js";
const m = ((e)=>{
    module55(a, e);
    var r = ((e)=>{
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
            let r;
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(e) {
        let t;
        module36(this, a);
        t = r.call(this, e);
        t.handleScale = function(e) {
            const value = e.target.value;
            if (/^\+?[1-9][0-9]*$/.test(value) || value === "") {
                t.setState({
                    desire: value,
                    seconds: 5
                }, function() {
                    t.showConfirm();
                });
            }
        };
        t.showConfirm = function() {
            t.setState({
                showConfirm: true
            }, function() {
                t.startTimer();
            });
        };
        t.startTimer = function() {
            if (t.timer) {
                t.stopTimer();
            }
            t.updateTime();
        };
        t.stopTimer = function() {
            clearTimeout(t.timer);
            t.timer = null;
        };
        t.updateTime = function() {
            const seconds = t.state.seconds;
            t.timer = setTimeout(()=>{
                if (seconds > 0) {
                    t.setState({
                        seconds: seconds - 1
                    }, function() {
                        t.updateTime();
                    });
                } else {
                    t.handleConfirm();
                    t.handleCancel();
                }
            }, 1000);
        };
        t.handleConfirm = function() {
            t.props.onChange(t.state.desire);
            t.hideConfirm();
        };
        t.handleCancel = function() {
            t.setState({
                desire: t.props.desire
            }, function() {
                t.hideConfirm();
            });
        };
        t.hideConfirm = function() {
            t.setState({
                showConfirm: false
            }, function() {
                t.stopTimer();
            });
        };
        const e_desire = e.desire;
        t.state = {
            prevPropDesire: e_desire,
            desire: e_desire,
            seconds: 5,
            showConfirm: false
        };
        return t;
    }
    module37(a, [
        {
            key: "componentWillUnmount",
            value: function() {
                this.stopTimer();
            }
        },
        {
            key: "render",
            value: function() {
                const name = this.props.name;
                const state = this.state;
                const { desire, showConfirm, seconds } = state;
                return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                    className: module1252.replicasInput
                }, module553.default.createElement("input", {
                    name,
                    value: desire,
                    onChange: this.handleScale
                })), module553.default.createElement(module1101, {
                    visible: showConfirm,
                    width: 400,
                    title: t("ADJUST_REPLICAS"),
                    content: t.html("REPLICAS_SCALE_NOTIFY_CONTENT", {
                        num: Number(desire)
                    }),
                    cancelText: t("REPLICAS_SCALE_NOTIFY_CANCEL"),
                    confirmText: t("REPLICAS_SCALE_NOTIFY_CONFIRM", {
                        seconds
                    }),
                    onCancel: this.handleCancel,
                    onConfirm: this.handleConfirm
                }));
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                if (e.desire !== t.prevPropDesire) {
                    a = e.desire;
                    const r = Number(a || 0);
                    return {
                        prevPropDesire: r,
                        desire: r
                    };
                }
                var a;
                return null;
            }
        }
    ]);
    return a;
})(module553.Component);
export default m;
