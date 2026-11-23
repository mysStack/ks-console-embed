import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-97.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module2611 from "./module-2611.js";
const h = ((e)=>{
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
        e.isOverride = function(t) {
            const overrides = e.props.overrides;
            return !!overrides && overrides.some((e)=>e.clusterName === t);
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { clusters, children } = props;
                return module553.default.createElement("div", {
                    className: module2611.wrapper
                }, clusters.map(({ name })=>{
                    const selected = _this.isOverride(name);
                    return module553.default.createElement("div", {
                        key: name,
                        className: module3(module2611.cluster, module31({}, module2611.selected, selected))
                    }, module553.default.createElement("div", {
                        className: module2611.title
                    }, module553.default.createElement(module186.Icon, {
                        name: "kubernetes",
                        type: "light",
                        size: 20
                    }), module553.default.createElement("span", null, name)), module553.default.createElement("div", null, children({
                        cluster: name,
                        selected
                    })));
                }));
            }
        }
    ]);
    return a;
})(module553.Component);
export default h;
