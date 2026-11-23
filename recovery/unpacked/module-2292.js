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
import module801 from "./module-801.js";
import module186 from "./module-186.js";
import module2293 from "./module-2293.js";
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.state = {
            replicas: e.props.replicas || 0
        };
        e.triggerChange = module801(function() {
            const e_props = e.props;
            const { cluster, onChange } = e_props;
            const replicas = e.state.replicas;
            if (onChange) {
                onChange(cluster, replicas);
            }
        }, 200);
        e.handleSubStract = function() {
            e.setState(function({ replicas }) {
                return {
                    replicas: Math.max(replicas - 1, 1)
                };
            }, function() {
                e.triggerChange();
            });
        };
        e.handleAdd = function() {
            e.setState(function(e) {
                return {
                    replicas: e.replicas + 1
                };
            }, function() {
                e.triggerChange();
            });
        };
        e.handleWrapperClick = function() {
            e.setState(function(e) {
                return {
                    replicas: e.replicas > 0 ? 0 : 1
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
                const replicas = this.state.replicas;
                const checked = !!replicas;
                return module553.default.createElement("div", {
                    className: module3(module2293.wrapper, module31({}, module2293.checked, checked)),
                    onClick: this.handleWrapperClick
                }, module553.default.createElement(module186.Checkbox, {
                    checked,
                    onClick: this.handleWrapperClick
                }, module553.default.createElement("span", {
                    title: cluster
                }, cluster)), module553.default.createElement("div", {
                    className: module2293.replicas,
                    onClick: this.stopPropagation
                }, module553.default.createElement(module186.Icon, {
                    name: "substract",
                    type: "light",
                    size: 20,
                    clickable: true,
                    disabled: !checked,
                    onClick: this.handleSubStract
                }), module553.default.createElement("span", {
                    className: module2293.value
                }, replicas, module553.default.createElement("span", null, " ", replicas === 1 ? t("REPLICA_LOW_SI") : t("REPLICA_LOW_PL"))), module553.default.createElement(module186.Icon, {
                    name: "add",
                    type: "light",
                    size: 20,
                    clickable: true,
                    disabled: !checked,
                    onClick: this.handleAdd
                })));
            }
        }
    ]);
    return r;
})(module553.Component);
export default g;
