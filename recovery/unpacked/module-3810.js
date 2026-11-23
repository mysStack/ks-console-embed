import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { ReactComponent } from "./module-882.js";
import module3811 from "./module-3811.js";
export default function(E) {
    return ((Component_1)=>{
        module55(m, Component_1);
        let r;
        let n;
        r = m;
        n = (()=>{
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
        var p = function() {
            let e;
            const t = module51(r);
            if (n) {
                const a = module51(this).constructor;
                e = Reflect.construct(t, arguments, a);
            } else {
                e = t.apply(this, arguments);
            }
            return module56(this, e);
        };
        function m() {
            module36(this, m);
            return p.apply(this, arguments);
        }
        module37(m, [
            {
                key: "render",
                value: function() {
                    const props = this.props;
                    const { wrapperOnBack, wrapperClassName, wrapperTitle = "", hiddenBack = false, ...rest } = props;
                    return <div className={wrapperClassName}><h3 className={module3811.title}>{hiddenBack || <ReactComponent onClick={wrapperOnBack}/>}<strong>{wrapperTitle}</strong></h3><div className={module3811.content}><E {...rest}/></div></div>;
                }
            }
        ]);
        return m;
    })(Component);
};
