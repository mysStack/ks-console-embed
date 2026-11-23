import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import module1059 from "./module-1059.js";
import module1704 from "./module-1704.js";
const E = ((e)=>{
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
        e.handleAdd = function(t) {
            const e_props = e.props;
            const a_value = e_props.value;
            e_props.onChange([].concat(module61(a_value), [
                t
            ]));
        };
        e.handleDelete = function(t) {
            const e_props = e.props;
            const a_value = e_props.value;
            e_props.onChange(a_value.filter((e)=>e !== t));
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { validate, type, value, className } = props;
                const o = type.toUpperCase();
                return module553.default.createElement("div", {
                    className: module3(module1704.wrapper, className)
                }, module553.default.createElement(module1059, {
                    placeholder: " ",
                    validate,
                    onAdd: this.handleAdd
                }), module553.default.createElement("p", {
                    className: "margin-t8"
                }, t(`${type.toUpperCase()}_LIST`)), module553.default.createElement("div", {
                    className: module3(module1704.boxWrapper, className)
                }, module63(value) ? module553.default.createElement("div", {
                    className: module1704.empty
                }, t(`EMPTY_${o}_DESC`)) : value.map((t)=>module553.default.createElement(module186.Tag, {
                        className: module1704.tag,
                        key: t
                    }, t, module553.default.createElement(module186.Icon, {
                        name: "close",
                        type: "light",
                        size: 12,
                        clickable: true,
                        onClick: function() {
                            return _this.handleDelete(t);
                        }
                    })))));
            }
        }
    ]);
    return r;
})(module553.Component);
export default E;
E.propTypes = {
    value: module1.array,
    onChange: module1.func
};
E.defaultProps = {
    value: [],
    onChange: function() {}
};
