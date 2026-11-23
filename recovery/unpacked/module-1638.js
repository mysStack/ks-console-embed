import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-192.js";
import "./module-16.js";
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
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import module136 from "./module-136.js";
const p = ((Component_1)=>{
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
    function a(...o_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...o_1);
        e.onAdd = function() {
            const { onChange, value = [], defaultItemValue } = e.props;
            onChange([].concat(module61(value), [
                defaultItemValue
            ]));
        };
        e.add = function(t) {
            const e_props = e.props;
            const { onChange, value } = e_props;
            onChange([].concat(module61(value), [
                t
            ]));
        };
        return e;
    }
    module37(a, [
        {
            key: "onDelete",
            value: function(e) {
                const _this = this;
                return function() {
                    const props = _this.props;
                    const { value, onChange } = props;
                    const l = module136(module14.toJS(value));
                    l.splice(e, 1);
                    onChange(l);
                };
            }
        },
        {
            key: "onUpClick",
            value: function(e) {
                const _this = this;
                return function() {
                    const props = _this.props;
                    const { value, onChange } = props;
                    const l = module136(module14.toJS(value));
                    const o = l[e];
                    const u = (e - 1 + l.length) % l.length;
                    l[e] = l[u];
                    l[u] = o;
                    onChange(l);
                };
            }
        },
        {
            key: "onDownClick",
            value: function(e) {
                const _this = this;
                return function() {
                    const props = _this.props;
                    const { value, onChange } = props;
                    const l = module136(module14.toJS(value));
                    const o = l[e];
                    const u = (e + 1 + l.length) % l.length;
                    l[e] = l[u];
                    l[u] = o;
                    onChange(l);
                };
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { value, header, children, name } = props;
                return <div>{header && header({
                    onAdd: this.onAdd,
                    value,
                    add: this.add
                })}<div>{value.map((value_1, index)=>children({
                        index,
                        value: value_1,
                        formItemName: `${name}[${index}]`,
                        onDelete: _this.onDelete(index),
                        onUpClick: _this.onUpClick(index),
                        onDownClick: _this.onDownClick(index)
                    }))}</div></div>;
            }
        }
    ]);
    return a;
})(Component);
export default p;
p.defaultProps = {
    defaultItemValue: {},
    value: []
};
