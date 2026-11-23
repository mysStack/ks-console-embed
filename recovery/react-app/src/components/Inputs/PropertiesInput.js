import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-187.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-97.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-140.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-251.js";
import "unpacked/module-252.js";
import "unpacked/module-193.js";
import "unpacked/module-315.js";
import module31 from "unpacked/module-31.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import module198 from "unpacked/module-198.js";
import module63 from "unpacked/module-63.js";
import module1 from "unpacked/module-1.js";
import { Component } from "unpacked/module-553.js";
import module1481 from "unpacked/module-1481.js";
import Module2063 from "components/Inputs/PropertiesInput/Item";
const S = ((Component_1)=>{
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
        n.triggerChange = function(e) {
            const onChange = n.props.onChange;
            const n_state = n.state;
            const { hiddenValues, readOnlyValues } = n_state;
            let c = false;
            let s = false;
            n.props.onError();
            const f = [].concat(module61(hiddenValues), module61(readOnlyValues), module61(e)).reduce((acc, item)=>{
                item.key = item.key || "";
                if (module63(item.key) && module63(item.value)) {
                    s = true;
                }
                if (module198(acc, item.key)) {
                    c = true;
                    return acc;
                }
                return {
                    ...acc,
                    ...module31({}, item.key, item.value || "")
                };
            }, {});
            n.setState({
                arrayValues: e
            }, function() {
                if (!(s || c)) {
                    onChange(f);
                }
            });
            if (Object.keys(f).some((e)=>module63(e))) {
                n.props.onError({
                    message: t("EMPTY_KEY")
                });
            } else if (c) {
                n.props.onError({
                    message: t("DUPLICATE_KEYS")
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
            existedKey: false,
            propsValue: e.value,
            ...r.getValues(e)
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.controlled && this.props.value !== e.value) {
                    this.setState({
                        propsValue: this.props.value,
                        ...r.getValues(this.props)
                    });
                }
            }
        },
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
                const { className, addText, itemProps, maxLen } = props;
                const state = this.state;
                const { readOnlyValues, arrayValues } = state;
                return <div className={module3(module1481.wrapper, className)}>{readOnlyValues.map((e)=><Module2063 key={`readonly-${e.key}`} value={e} readOnly {...itemProps}/>)}{arrayValues.map((t, index)=><Module2063 key={`array-${index}`} index={index} value={t || {}} onChange={_this.handleItemChange} onDelete={_this.handleItemDelete} {...itemProps}/>)}{maxLen && arrayValues.length >= maxLen ? null : <div className="text-right"><module186.Button className={module1481.add} onClick={this.handleAdd} disabled={!this.isAddEnable()}>{addText}</module186.Button></div>}</div>;
            }
        }
    ], [
        {
            key: "getValues",
            value: function(e) {
                const t = e.value || {};
                const hiddenValues = [];
                const readOnlyValues = [];
                const n = [];
                Object.keys(t).forEach((l)=>{
                    if (e.hiddenKeys.some((e)=>new RegExp(e).test(l))) {
                        hiddenValues.push({
                            key: l,
                            value: t[l]
                        });
                    } else if (e.readOnlyKeys.some((e)=>new RegExp(e).test(l))) {
                        readOnlyValues.push({
                            key: l,
                            value: t[l]
                        });
                    } else {
                        n.push({
                            key: l,
                            value: t[l]
                        });
                    }
                });
                if (module63(n) && module63(readOnlyValues)) {
                    n.push({
                        key: ""
                    });
                }
                return {
                    hiddenValues,
                    readOnlyValues,
                    arrayValues: n
                };
            }
        }
    ]);
    return r;
})(Component);
export default S;
S.propTypes = {
    name: module1.string,
    value: module1.object,
    hiddenKeys: module1.arrayOf(module1.string),
    readOnlyKeys: module1.arrayOf(module1.string),
    controlled: module1.bool,
    onChange: module1.func,
    onError: module1.func,
    maxLen: module1.number
};
S.defaultProps = {
    name: "",
    value: {},
    hiddenKeys: [],
    readOnlyKeys: [],
    controlled: false,
    onChange: function() {}
};
