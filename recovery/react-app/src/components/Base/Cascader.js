import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module1489 from "unpacked/module-1489.js";
import module1273 from "unpacked/module-1273.js";
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
            isOpen: false
        };
        e.ref = module553.default.createRef();
        e.handleDOMClick = function(t) {
            if (e.ref && !e.ref.current.contains(t.target)) {
                e.setState({
                    isOpen: false
                });
            }
        };
        e.handleSelect = function(t) {
            e.props.onSelect(t);
            e.setState({
                isOpen: false
            });
        };
        e.triggerOpen = function() {
            e.setState(function(e) {
                return {
                    isOpen: !e.isOpen
                };
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                document.addEventListener("click", this.handleDOMClick);
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                document.removeEventListener("click", this.handleDOMClick);
            }
        },
        {
            key: "getOptionsStyle",
            value: function(e) {
                const t = e.length >= 8 ? 8 : e.length;
                const a = {};
                if (this.ref && this.ref.current) {
                    const r = this.ref.current.getBoundingClientRect();
                    if (window.innerHeight - r.top > 31.5 * t + 8 + r.height) {
                        a.top = r.top + r.height + 8;
                    } else {
                        a.top = r.top - 8 - 31.5 * t;
                    }
                    a.left = r.left;
                }
                return a;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { children, options } = props;
                const isOpen = this.state.isOpen;
                return module553.default.createElement("div", {
                    className: module1273.wrapper,
                    ref: this.ref
                }, module553.default.createElement("div", {
                    className: module1273.trigger,
                    onClick: this.triggerOpen
                }, children), isOpen && module553.default.createElement(module1489, {
                    style: this.getOptionsStyle(options),
                    options,
                    level: 0,
                    onSelect: this.handleSelect
                }));
            }
        }
    ]);
    return a;
})(module553.Component);
export default p;
p.defaultProps = {
    options: [],
    children: "",
    onSelect: function() {}
};
