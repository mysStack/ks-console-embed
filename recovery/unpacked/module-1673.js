import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import { SCHEME_OPTIONS, SCHEME_REG } from "./module-72.js";
import module2877 from "./module-2877.js";
const m = ((Component_1)=>{
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
    function a(...u_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...u_1);
        e.handleInputChange = function(t, a) {
            const r = (a = a.toLowerCase()).match(SCHEME_REG) || [];
            const [, o = e.schemeValue, , c = ""] = module96(r, 4);
            e.props.onChange(`${o}${c}`);
        };
        e.handleSchemeChange = function(t) {
            e.props.onChange(`${t}${e.inputValue}`);
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                return <div className={module2877.container}><module186.Select value={this.schemeValue} className={module2877.select} options={SCHEME_OPTIONS} onChange={this.handleSchemeChange}/><module186.Input className={module2877.input} onChange={this.handleInputChange} value={this.inputValue} autoComplete="off"/></div>;
            }
        },
        {
            key: "inputValue",
            get: function() {
                const e = this.props.value.match(SCHEME_REG) || [];
                const t = module96(e, 4)[3];
                if (t === undefined) {
                    return "";
                }
                return t;
            }
        },
        {
            key: "schemeValue",
            get: function() {
                const e = this.props.value.match(SCHEME_REG) || [];
                const t = module96(e, 2)[1];
                if (t === undefined) {
                    return "https://";
                }
                return t;
            }
        }
    ]);
    return a;
})(Component);
export default m;
m.defaultProps = {
    className: "",
    value: "",
    onChange: function() {}
};
