import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
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
import module186 from "unpacked/module-186.js";
import module2558 from "pages/fedprojects/components/CheckboxGroup";
import module1 from "unpacked/module-1.js";
import * as module553 from "unpacked/module-553.js";
import { showNameAndAlias } from "utils/index";
import { CLUSTER_PROVIDER_ICON } from "utils/constants";
import module2559 from "unpacked/module-2559.js";
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
                const { value, defaultValue, onChange, options } = props;
                return module553.default.createElement("div", {
                    className: module2559.group
                }, module553.default.createElement(module2558, {
                    value,
                    defaultValue,
                    onChange
                }, options.map((e)=>module553.default.createElement(module186.Checkbox, {
                        key: e.name,
                        value: e.name
                    }, module553.default.createElement(module186.Icon, {
                        name: CLUSTER_PROVIDER_ICON[e.provider] || "kubernetes"
                    }), module553.default.createElement("span", {
                        title: e.aliasName ? `${e.aliasName}(${e.name})` : e.name
                    }, showNameAndAlias(e.name, "cluster"))))));
            }
        }
    ]);
    return a;
})(module553.Component);
export default g;
g.propTypes = {
    value: module1.array,
    options: module1.array,
    onChange: module1.func
};
g.defaultProps = {
    value: [],
    options: [],
    onChange: function() {}
};
