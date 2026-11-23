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
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import Module1101 from "components/Base/NotifyConfirm";
import { SimpleCircle } from "components/Charts/index";
import Module3845 from "pages/projects/components/Cards/Replica/Status/NumberControl";
import module1813 from "unpacked/module-1813.js";
const g = (desire)=>Number(desire || 0);
const y = ((Component_1)=>{
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.showConfirm = function() {
            t.setState({
                showConfirm: true
            }, function() {
                t.startTimer();
            });
        };
        t.hideConfirm = function() {
            t.setState({
                showConfirm: false
            }, function() {
                t.stopTimer();
            });
        };
        t.handleCancel = function() {
            t.setState({
                desire: t.props.desire
            }, function() {
                t.hideConfirm();
            });
        };
        t.handleConfirm = function() {
            t.props.onScale(t.state.desire);
            t.hideConfirm();
        };
        t.handleScale = function(desire) {
            if (desire >= 0) {
                t.setState({
                    desire,
                    seconds: 5
                }, function() {
                    t.showConfirm();
                });
            }
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
        const n = g(e.desire);
        t.state = {
            prevPropDesire: n,
            desire: n,
            seconds: 5,
            showConfirm: false
        };
        return t;
    }
    module37(r, [
        {
            key: "componentWillUnmount",
            value: function() {
                this.stopTimer();
            }
        },
        {
            key: "renderScaleOperation",
            value: function() {
                if (!this.props.onScale) {
                    return null;
                }
                const desire = this.state.desire;
                return <div className={module1813.scale}><Module3845 value={desire} onChange={this.handleScale}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { theme, className, name, current } = props;
                const state = this.state;
                const { showConfirm, seconds, desire } = state;
                const title = t(name);
                const h = t("REPLICAS_CURRENT");
                const g = t("REPLICAS_DESIRED");
                return <div className={module3(module1813.card, className, module1813[theme])}><img className={module1813.cardImg} src="/assets/banner-icon-1.svg"/><div className={module1813.chart}><SimpleCircle theme={theme} title={title} legend={[
                    h,
                    g
                ]} value={current} total={desire}/></div><div className={module1813.status}><div className={module1813.title}>{title}</div><div className={module1813.detail}><p><label>{g}:</label> {desire}</p><p><label>{h}:</label> {current}</p></div></div>{this.renderScaleOperation()}<Module1101 visible={showConfirm} width={400} title={t("ADJUST_REPLICAS")} content={t.html("REPLICAS_SCALE_NOTIFY_CONTENT", {
                    num: desire
                })} cancelText={t("REPLICAS_SCALE_NOTIFY_CANCEL")} confirmText={t("REPLICAS_SCALE_NOTIFY_CONFIRM", {
                    seconds
                })} onCancel={this.handleCancel} onConfirm={this.handleConfirm}/></div>;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                if (e.desire !== t.prevPropDesire) {
                    const a = g(e.desire);
                    return {
                        prevPropDesire: a,
                        desire: a
                    };
                }
                return null;
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.propTypes = {
    theme: module1.string,
    className: module1.string,
    name: module1.string,
    current: module1.number,
    desire: module1.number,
    onScale: module1.func
};
y.defaultProps = {
    theme: "dark",
    name: "REPLICA_PL",
    current: 0,
    desire: 0,
    onScale: null
};
