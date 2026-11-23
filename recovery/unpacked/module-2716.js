import "./module-15.js";
import "./module-5.js";
import "./module-187.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-97.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module63 from "./module-63.js";
import module136 from "./module-136.js";
import Module2717 from "./module-2717.js";
import module1625 from "./module-1625.js";
const g = ((Component_1)=>{
    module55(r, Component_1);
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.handleAdd = function() {
            n.setState(function({ arrayValues }) {
                return {
                    arrayValues: [].concat(module61(arrayValues), [
                        {
                            key: ""
                        }
                    ])
                };
            });
        };
        n.triggerChange = function(arrayValues) {
            const onChange = n.props.onChange;
            n.props.onError();
            const r = arrayValues.some((e)=>module63(e.key));
            let l = false;
            const o = module136(arrayValues);
            arrayValues.forEach((e, t)=>{
                o[t] = undefined;
                const a = o.filter((t)=>t && t.key === e.key && t.value === e.value);
                if (!module63(a)) {
                    l = true;
                }
            });
            n.setState({
                arrayValues
            }, function() {
                if (!r) {
                    onChange(arrayValues);
                }
            });
            if (r) {
                n.props.onError({
                    message: t("EMPTY_KEY")
                });
            } else if (l) {
                n.props.onError({
                    message: t("DUPLICATE_LABELS")
                });
            } else {
                n.props.onError();
            }
        };
        n.handleItemChange = function(e, t) {
            const arrayValues = n.state.arrayValues;
            arrayValues[e] = t;
            n.triggerChange(arrayValues);
        };
        n.handleItemDelete = function(e) {
            const arrayValues = n.state.arrayValues;
            n.triggerChange(arrayValues.filter((t, a)=>a !== e));
        };
        n.state = {
            isValidValues: true,
            arrayValues: e.value || [
                {
                    key: "",
                    value: ""
                }
            ]
        };
        return n;
    }
    module37(r, [
        {
            key: "isAddEnable",
            value: function() {
                return this.state.arrayValues.every((e)=>!(module63(e) || !e.key && !e.value));
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { className, addText, itemProps } = props;
                const arrayValues = this.state.arrayValues;
                return <div className={module3(module1625.wrapper, className)}>{arrayValues.map((t, index)=><Module2717 key={`array-${index}`} index={index} value={t || {}} onChange={_this.handleItemChange} onDelete={_this.handleItemDelete} {...itemProps}/>)}<div className="text-right"><module186.Button className={module1625.add} onClick={this.handleAdd} disabled={!this.isAddEnable()}>{addText}</module186.Button></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default g;
