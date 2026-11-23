import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module807 from "unpacked/module-807.js";
const E = ((e)=>{
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
    function a(...n_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...n_1);
        e.state = {
            values: e.props.value || []
        };
        e.handleOptionChange = function(t, a) {
            let values_1;
            const onChange = e.props.onChange;
            const values = e.state.values;
            values_1 = t ? [].concat(module61(values), [
                a
            ]) : values.filter((e)=>e !== a);
            e.setState({
                values: values_1
            }, function() {
                return onChange(values_1);
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { className, name, direction, options, children } = props;
                const values = this.state.values;
                if (children && children.length > 0) {
                    const i = module553.default.Children.map(children, function(t) {
                        return module553.default.cloneElement(t, {
                            ...t.props,
                            name,
                            checked: values.includes(t.props.value),
                            onChange: _this.handleOptionChange
                        });
                    });
                    return module553.default.createElement("div", {
                        "data-direction": direction,
                        className: module3("checkbox-group", className)
                    }, i);
                }
                return module553.default.createElement("div", {
                    "data-direction": direction,
                    className: module3("checkbox-group", className)
                }, options.map((t)=>module553.default.createElement(module186.Checkbox, {
                        key: t.value,
                        name,
                        value: t.value,
                        checked: values.includes(t.value),
                        onChange: _this.handleOptionChange
                    }, t.label)));
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                if (module807(e.value, t.values)) {
                    return null;
                }
                return {
                    values: e.value
                };
            }
        }
    ]);
    return a;
})(module553.Component);
export default E;
E.propTypes = {
    options: module1.arrayOf(module1.oneOfType([
        module1.string,
        module1.shape({
            value: module1.any,
            label: module1.string,
            disabled: module1.bool
        })
    ])),
    value: module1.array,
    onChange: module1.func,
    direction: module1.oneOf([
        "row",
        "column"
    ]),
    className: module1.string,
    disabled: module1.bool,
    children: module1.node
};
E.defaultProps = {
    direction: "row",
    options: [],
    value: [],
    onChange: function() {}
};
