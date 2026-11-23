import "./module-15.js";
import "./module-84.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import Module4052 from "./module-4052.js";
import module1 from "./module-1.js";
import module4056 from "./module-4056.js";
import Module4057 from "./module-4057.js";
const v = ((Component_1)=>{
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
        let t;
        module36(this, r);
        t = a.call(this, e);
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
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { value, path, showBack, isEdgeWize } = props;
                const showSelect = this.state.showSelect;
                return <div><div className={module4056.titleWrapper} onClick={globals.app.isMultiCluster || isEdgeWize ? this.showSelect : null} style={{
                    padding: showBack ? "4px" : "12px"
                }}><div className={module4056.title} style={{
                    padding: showBack ? "8px" : "0px"
                }}><div className={module4056.icon}><module186.Icon name={isEdgeWize ? "edge-cluster" : "cluster"} size={40} type="light"/></div><div className={module4056.text}><div className="h6" title={value}>{value}</div><p>{isEdgeWize ? t("EDGE_CLUSTER") : t("CLUSTER")}</p></div></div>{showBack && <Module4057 path={path}/>}</div><Module4052 isEdgeWize={isEdgeWize} visible={showSelect} onChange={this.handleSelect} onCancel={this.hideSelect} isObservability={path.includes("/whizard-telemetry/metrics")}/></div>;
            }
        }
    ]);
    return r;
})(Component);
export default v;
v.propTypes = {
    value: module1.object || module1.string,
    onChange: module1.func
};
v.defaultProps = {
    value: "",
    onChange: function() {}
};
