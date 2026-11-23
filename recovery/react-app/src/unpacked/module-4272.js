import "unpacked/module-15.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
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
import { SimpleCircle } from "components/Charts/index";
import module4273 from "unpacked/module-4273.js";
const h = (desire)=>Number(desire || 0);
const v = ((Component_1)=>{
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
        const n = h(e.desire);
        t.state = {
            prevPropDesire: n,
            desire: n,
            seconds: 5
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { theme, className, name, current } = props;
                const desire = this.state.desire;
                const title = t(name);
                const c = t("REPLICAS_CURRENT");
                const i = t("REPLICAS_DESIRED");
                return <div className={module3(module4273.card, className, module4273[theme])}><img className={module4273.cardImg} src="/assets/banner-icon-1.svg"/><div className={module4273.chart}><SimpleCircle theme={theme} title={title} legend={[
                    c,
                    i
                ]} value={current} total={desire}/></div><div className={module4273.status}><div className={module4273.title}>{title}</div><div className={module4273.detail}><p><label>{i}:</label> {desire}</p><p><label>{c}:</label> {current}</p></div></div></div>;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                if (e.desire !== t.prevPropDesire) {
                    const a = h(e.desire);
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
export default v;
v.propTypes = {
    theme: module1.string,
    className: module1.string,
    name: module1.string,
    current: module1.number,
    desire: module1.number,
    onScale: module1.func
};
v.defaultProps = {
    theme: "dark",
    name: "REPLICA_PL",
    current: 0,
    desire: 0,
    onScale: null
};
