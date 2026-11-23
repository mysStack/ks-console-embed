import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
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
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module1195 from "./module-1195.js";
const h = ((Component_1)=>{
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
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.handleClose = function() {
            const e_props = e.props;
            e_props.onClose(e_props.title);
        };
        e.handleToggle = function() {
            const e_props = e.props;
            e_props.onToggle(e_props.title);
        };
        e.stopPropagation = function(e) {
            e.stopPropagation();
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, title, description, operation, closable, open } = props;
                return <div className={module3(module1195.tip, module31({}, module1195.open, open), className)} onClick={this.handleToggle}><div className={module1195.tipIcon}><module186.Icon name={open ? "chevron-down" : "chevron-right"} size={20}/></div><div className={module1195.tipContent}><div>{title}</div>{open && <p className="text-second">{description}</p>}</div><div className={module1195.operations} onClick={this.stopPropagation}>{operation}{closable && <module186.Icon name="close" size={20} clickable onClick={this.handleClose}/>}</div></div>;
            }
        }
    ]);
    return a;
})(Component);
export default h;
h.propTypes = {
    className: module1.string,
    title: module1.string,
    description: module1.oneOfType([
        module1.string,
        module1.element
    ]),
    closable: module1.bool,
    operation: module1.node,
    onClose: module1.func
};
h.defaultProps = {
    closable: true,
    onClose: function() {}
};
