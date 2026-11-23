import "./module-15.js";
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
import module1 from "./module-1.js";
import Module5281 from "./module-5281.js";
import module5287 from "./module-5287.js";
const m = ((Component_1)=>{
    module55(n, Component_1);
    var r = ((e)=>{
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.showSelect = function() {
            t.setState({
                showSelect: true
            });
        };
        t.hideSelect = function() {
            t.setState({
                showSelect: false
            });
        };
        t.handleSelect = function(e) {
            const onChange = t.props.onChange;
            t.hideSelect();
            onChange(e);
        };
        t.state = {
            showSelect: false
        };
        return t;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const value = this.props.value;
                const showSelect = this.state.showSelect;
                return <div><div className={module5287.titleWrapper} onClick={this.showSelect}><div className={module5287.icon}><img src="/assets/node_group_light.svg"/></div><div className={module5287.text}><div className="h6">{value}</div><p>{t("NODE_GROUP")}</p></div></div><Module5281 visible={showSelect} cluster={this.props.cluster} onChange={this.handleSelect} onCancel={this.hideSelect}/></div>;
            }
        }
    ]);
    return n;
})(Component);
export default m;
m.propTypes = {
    value: module1.string,
    onChange: module1.func
};
m.defaultProps = {
    value: "",
    onChange: function() {}
};
