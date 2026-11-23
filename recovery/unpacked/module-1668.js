import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-84.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module3 from "./module-3.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module60 from "./module-60.js";
import module2865 from "./module-2865.js";
const y = ((e)=>{
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
            value: e.props.value
        };
        e.handleClick = function(t) {
            const a = t;
            const value = e.state.value;
            const onChange = e.props.onChange;
            if (module60(value)) {
                if (value.includes(a)) {
                    e.setState({
                        value: value.filter((e)=>e !== a)
                    }, function() {
                        onChange(value.filter((e)=>e !== a));
                    });
                } else {
                    e.setState({
                        value: [].concat(module61(value), [
                            a
                        ])
                    }, function() {
                        onChange([].concat(module61(value), [
                            a
                        ]));
                    });
                }
            } else {
                e.setState({
                    value: a
                }, function() {
                    onChange(a);
                });
            }
        };
        e.selectedCheck = function(t) {
            const value = e.state.value;
            if (module60(value)) {
                return value.includes(t);
            }
            return t === value;
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { className, options, selectedClassName } = props;
                return module553.default.createElement("ul", {
                    className: module3(module2865.container, className)
                }, options.map(({ icon = "picture", image, label, value, description })=>module553.default.createElement("li", {
                        key: value,
                        "data-value": value,
                        onClick: function() {
                            return _this.handleClick(value);
                        },
                        className: module3(module31({}, selectedClassName, _this.selectedCheck(value))),
                        style: {
                            paddingTop: description ? "12px" : "18px"
                        }
                    }, module553.default.createElement("figure", null, image ? module553.default.createElement("img", {
                        src: image
                    }) : module553.default.createElement(module186.Icon, {
                        name: icon
                    })), module553.default.createElement("h3", null, label), description && module553.default.createElement("p", null, description))));
            }
        }
    ]);
    return a;
})(module553.Component);
export default y;
y.propTypes = {
    options: module1.array,
    value: module1.oneOfType([
        module1.array,
        module1.string
    ]),
    selectedClassName: module1.string,
    iconSize: module1.oneOfType([
        module1.number,
        module1.string
    ])
};
y.defaultProps = {
    selectedClassName: module2865.selected
};
