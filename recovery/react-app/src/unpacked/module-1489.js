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
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module2102 from "./module-2102.js";
import module1273 from "./module-1273.js";
const p = ((e)=>{
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
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.state = {
            openKey: ""
        };
        e.handleClick = function(openKey) {
            e.setState({
                openKey
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const openKey = this.state.openKey;
                const props = this.props;
                const { style, options, level, onSelect } = props;
                return module553.default.createElement("div", {
                    className: module1273.options,
                    style
                }, options.map((a)=>module553.default.createElement(module2102, {
                        key: a.value,
                        data: a,
                        level,
                        isOpen: a.value === openKey,
                        onClick: _this.handleClick,
                        onSelect
                    })));
            }
        }
    ]);
    return a;
})(module553.Component);
export default p;
p.defaultProps = {
    level: 0,
    options: [],
    onSelect: function() {}
};
