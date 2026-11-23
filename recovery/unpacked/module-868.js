import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-448.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module159 from "./module-159.js";
import module76 from "./module-76.js";
import { Children, Component, cloneElement } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module2064 from "./module-2064.js";
const b = ((Component_1)=>{
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
    function a(...n_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...n_1);
        e.handleChildChange = function(t, a, r) {
            const onChange = e.props.onChange;
            const value = e.props.value;
            let u = value === undefined ? {} : value;
            u = module76(u) ? u : {};
            r = module26(r, "currentTarget.value", r);
            module74(u, t, r);
            onChange({
                ...u
            });
            if (a) {
                a(r);
            }
        };
        e.getValue = function(t, a) {
            const r = module26(e.props.value, t);
            const n = module26(e.props.defaultValue, t);
            if (module159(r)) {
                if (module159(n)) {
                    module74(e.props.value, t, a);
                    return a;
                }
                module74(e.props.value, t, n);
                return n;
            }
            return r;
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { className, value, children } = props;
                const l = Children.map(children, function(t) {
                    return cloneElement(t, {
                        ...t.props,
                        className: module3(t.props.className, module2064.item),
                        value: module159(value) ? t.props.value : _this.getValue(t.props.name, t.props.defaultValue),
                        onChange: _this.handleChildChange.bind(_this, t.props.name, t.props.onChange)
                    });
                });
                return <div className={module3(module2064.wrapper, className)}>{l}</div>;
            }
        }
    ]);
    return a;
})(Component);
export default b;
b.propTypes = {
    name: module1.string,
    value: module1.object,
    defaultValue: module1.object,
    onChange: module1.func,
    children: module1.node.isRequired
};
b.defaultProps = {
    name: "",
    value: {},
    onChange: function() {}
};
