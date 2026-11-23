import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module1 from "./module-1.js";
import module74 from "./module-74.js";
import module801 from "./module-801.js";
import module186 from "./module-186.js";
import Module800 from "./module-800.js";
import module2299 from "./module-2299.js";
const y = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.state = {
            replicas: e.props.replicas || 1
        };
        e.triggerChange = module801(function() {
            const e_props = e.props;
            const { template, onChange } = e_props;
            const replicas = e.state.replicas;
            module74(template, "spec.replicas", replicas);
            if (onChange) {
                onChange(replicas);
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
        e.handleChange = function(replicas) {
            e.setState({
                replicas
            }, function() {
                e.triggerChange();
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "renderReplicas",
            value: function() {
                const replicas = this.state.replicas;
                return <div className={module2299.replicas}><div className="margin-b8">{t("POD_REPLICAS")}</div><div style={{
                    textAlign: "center"
                }}><module186.Button type="flat" icon="substract" onClick={this.handleSubStract}/><Module800 value={replicas} onChange={this.handleChange}/><module186.Button type="flat" icon="add" onClick={this.handleAdd}/></div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const replicasExtraControl = this.props.replicasExtraControl;
                return <div className={module2299.wrapper}><module186.Columns className="is-vcentered is-2">{replicasExtraControl && <module186.Column>{replicasExtraControl}</module186.Column>}<module186.Column className={module3({
                    "is-narrow": !replicasExtraControl
                })}>{this.renderReplicas()}</module186.Column></module186.Columns></div>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.propTypes = {
    replicasExtraControl: module1.element,
    template: module1.object
};
