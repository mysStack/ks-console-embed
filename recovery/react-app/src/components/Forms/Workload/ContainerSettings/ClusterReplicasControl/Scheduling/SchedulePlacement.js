import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module801 from "unpacked/module-801.js";
import module186 from "unpacked/module-186.js";
import module2296 from "unpacked/module-2296.js";
const g = ((e)=>{
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
        e.state = {
            weight: e.props.weight || 0,
            isChecked: true
        };
        e.triggerChange = module801(function() {
            const e_props = e.props;
            const t_cluster = e_props.cluster;
            e_props.handleClusterChange(e.state.weight, t_cluster);
        }, 200);
        e.handleSubStract = function() {
            e.setState(function({ weight }) {
                return {
                    weight: Math.max(weight - 1, 1)
                };
            }, function() {
                e.triggerChange();
            });
        };
        e.handleAdd = function() {
            e.setState(function(e) {
                return {
                    weight: e.weight + 1
                };
            }, function() {
                e.triggerChange();
            });
        };
        e.handleWrapperClick = function() {
            e.setState(function({ isChecked }) {
                return {
                    weight: isChecked ? 0 : 1,
                    isChecked: !isChecked
                };
            }, function() {
                e.triggerChange();
            });
        };
        e.stopPropagation = function(e) {
            return e.stopPropagation();
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const cluster = this.props.cluster;
                const state = this.state;
                const { weight, isChecked } = state;
                return module553.default.createElement("div", {
                    className: module3(module2296.wrapper, module31({}, module2296.checked, isChecked)),
                    onClick: this.handleWrapperClick
                }, module553.default.createElement(module186.Checkbox, {
                    checked: isChecked,
                    onClick: this.handleWrapperClick
                }, cluster), module553.default.createElement("div", {
                    className: module2296.replicas,
                    onClick: this.stopPropagation
                }, module553.default.createElement(module186.Icon, {
                    name: "substract",
                    type: "light",
                    size: 20,
                    clickable: true,
                    disabled: !isChecked,
                    onClick: this.handleSubStract
                }), module553.default.createElement("span", {
                    className: module2296.value
                }, weight, module553.default.createElement("span", null, " ", t("WEIGHT"))), module553.default.createElement(module186.Icon, {
                    name: "add",
                    type: "light",
                    size: 20,
                    clickable: true,
                    disabled: !isChecked,
                    onClick: this.handleAdd
                })));
            }
        }
    ]);
    return r;
})(module553.Component);
export default g;
