import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module4601 from "./module-4601.js";
const m = ((e)=>{
    module55(r, e);
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
        e.handleClick = function(t) {
            e.props.onChange(t.currentTarget.dataset.value);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { value, options } = props;
                return module553.default.createElement("div", {
                    className: module4601.buttons
                }, options.map((a)=>module553.default.createElement(module186.Button, {
                        key: a.value,
                        icon: a.icon,
                        iconType: value === a.value ? "light" : "dark",
                        type: value === a.value ? "control" : "default",
                        "data-value": a.value,
                        onClick: _this.handleClick
                    }, t(a.label))));
            }
        }
    ]);
    return r;
})(module553.Component);
export default m;
