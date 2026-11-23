import "./module-15.js";
import "./module-5.js";
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
import module1489 from "./module-1489.js";
import module1273 from "./module-1273.js";
const v = ((e)=>{
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
        e.ref = module553.default.createRef();
        e.handleClick = function() {
            const e_props = e.props;
            const t_data = e_props.data;
            e_props.onClick(t_data.value);
        };
        e.handleSelect = function() {
            const e_props = e.props;
            const t_data = e_props.data;
            e_props.onSelect(t_data.value);
        };
        return e;
    }
    module37(a, [
        {
            key: "getOptionsStyle",
            value: function() {
                const e = {};
                if (this.ref && this.ref.current) {
                    const t = this.props.data;
                    if (t.children) {
                        const a = Math.min(t.children.length, 8);
                        const r = this.ref.current.getBoundingClientRect();
                        const n = this.ref.current.parentNode.getBoundingClientRect();
                        if (r.top - n.top > n.height / 2) {
                            e.top = r.top - 4 - 32 * (a - 1);
                        } else {
                            e.top = r.top - 4;
                        }
                        e.left = r.left + r.width;
                        if (window.innerHeight - e.top < 252) {
                            e.maxHeight = window.innerHeight - e.top - 8;
                        }
                    }
                }
                return e;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { data, level, isOpen, onSelect } = props;
                if (data.children) {
                    return module553.default.createElement("div", {
                        ref: this.ref
                    }, module553.default.createElement("div", {
                        className: module3(module1273.item, module1273.hasChildren, module31({}, module1273.isOpen, isOpen)),
                        onClick: this.handleClick
                    }, data.label, module553.default.createElement(module186.Icon, {
                        name: "chevron-right",
                        type: "light"
                    })), isOpen && module553.default.createElement(module1489, {
                        level: level + 1,
                        options: data.children,
                        onSelect,
                        style: this.getOptionsStyle()
                    }));
                }
                return module553.default.createElement("div", {
                    className: module1273.item,
                    onClick: this.handleSelect
                }, data.label);
            }
        }
    ]);
    return a;
})(module553.Component);
export default v;
