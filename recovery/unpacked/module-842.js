import "./module-15.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-45.js";
import "./module-30.js";
import "./module-42.js";
import "./module-57.js";
import "./module-38.js";
import "./module-32.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module2055 from "./module-2055.js";
const v = module553.lazy(function() {
    return import("./module-5298.js");
});
const g = ((e)=>{
    module55(a, e);
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
    function a() {
        module36(this, a);
        return t.apply(this, arguments);
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, mode, options, value, onChange } = props;
                return module553.default.createElement(module553.Suspense, {
                    fallback: module553.default.createElement(module186.Loading, {
                        className: "ks-page-loading"
                    })
                }, module553.default.createElement(v, {
                    ...options,
                    className: module3(module2055.editor, className),
                    value,
                    mode,
                    onChange
                }));
            }
        }
    ]);
    return a;
})(module553.PureComponent);
g.propTypes = {
    value: module1.oneOfType([
        module1.string,
        module1.object,
        module1.arrayOf(module1.string),
        module1.arrayOf(module1.object)
    ]),
    mode: module1.string,
    options: module1.object,
    onChange: module1.func
};
g.defaultProps = {
    value: "",
    mode: "yaml",
    options: {},
    onChange: function() {}
};
export default g;
