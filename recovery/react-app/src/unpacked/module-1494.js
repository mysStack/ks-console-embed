import "./module-15.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module946 from "./module-946.js";
import module2116 from "./module-2116.js";
const v = ((Component_1)=>{
    module55(a, Component_1);
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
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.renderClusterItem = function(e) {
            const r_props = r.props;
            const { onDelete, name } = r_props;
            const r_state = r.state;
            const { label, value } = r_state;
            return <div className={module3(module2116.clusterTagItem, e || r.props.isTooltipContent ? module2116.widthAuto : "")}><span className={module2116.label}>{label}</span><span className={module2116.value}>{value}</span>{onDelete && <module186.Icon name="close" size={16} onClick={function() {
                return onDelete({
                    label,
                    value,
                    name
                });
            }} clickable/>}</div>;
        };
        r.tagStore = new module946("labels");
        r.state = {
            label: e.label,
            value: e.value,
            name: e.name
        };
        return r;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                const props = this.props;
                const { label, value, name } = props;
                if (!(!name || label || value)) {
                    this.tagStore.fetchDetail({
                        name
                    }).then((t)=>{
                        _this.setState(t);
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { label, value } = state;
                const isTooltipContent = this.props.isTooltipContent;
                return <div>{(label.length > 8 || value.length > 8) && !isTooltipContent ? <module186.Tooltip placement="top" appendToBody content={this.renderClusterItem(true)}>{this.renderClusterItem()}</module186.Tooltip> : this.renderClusterItem()}</div>;
            }
        }
    ]);
    return a;
})(Component);
export default v;
v.propTypes = {
    label: module1.string,
    value: module1.string,
    onDelete: module1.func,
    name: module1.string.isRequired
};
