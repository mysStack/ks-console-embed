import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-109.js";
import "./module-45.js";
import "./module-442.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module243 from "./module-243.js";
const d = ((Component_1)=>{
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
        e.state = {
            time: Date.now()
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.updateTime();
            }
        },
        {
            key: "updateTime",
            value: function() {
                const _this = this;
                this.timer = setTimeout(()=>{
                    _this.setState({
                        time: Date.now()
                    });
                    _this.updateTime();
                }, 1000);
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                clearTimeout(this.timer);
            }
        },
        {
            key: "render",
            value: function() {
                return <>{t("TIME")}: {module243(this.state.time).format("YYYY-MM-DD HH:mm:ss")}</>;
            }
        }
    ]);
    return r;
})(Component);
export default d;
