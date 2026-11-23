import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module63 from "unpacked/module-63.js";
import module2663 from "unpacked/module-2663.js";
const v = ((e)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const current = this.props.current;
                if (module63(this.formattedStep)) {
                    return module553.default.createElement(module553.default.Fragment, null);
                }
                return module553.default.createElement("div", {
                    className: module2663.wrapper
                }, this.formattedStep.map((a, r)=>module553.default.createElement("div", {
                        key: a.title
                    }, current >= r ? module553.default.createElement(module186.Icon, {
                        name: "success",
                        type: "coloured",
                        size: 12
                    }) : module553.default.createElement(module186.Icon, {
                        name: "dot",
                        type: "light",
                        size: 12
                    }), module553.default.createElement("span", null, t(a.title)))));
            }
        },
        {
            key: "formattedStep",
            get: function() {
                return this.props.steps.filter((e)=>!!e.title);
            }
        }
    ]);
    return r;
})(module553.Component);
export default v;
