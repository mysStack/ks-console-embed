import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
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
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module3134 from "unpacked/module-3134.js";
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
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.state = {
            show: e.props.show,
            close: false
        };
        e.toggle = function() {
            e.setState(function(e) {
                return {
                    show: !e.show
                };
            });
        };
        e.close = function() {
            e.setState({
                close: true
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                let e;
                const props = this.props;
                const { className, title, hasClose, description, children } = props;
                const state = this.state;
                const { show, close } = state;
                return <div className={module3(module3134.item, (e = {}, module31(e, module3134.hideBg, !show), module31(e, module3134.close, close), e), className)}><div className={module3134.name} onClick={this.toggle}><module186.Icon name={show ? "chevron-down" : "chevron-right"} size={20}/>{title}{hasClose && !show && <module186.Icon onClick={this.close} name="close" size={20} className={module3134.closeIcon}/>}</div><div className={module3(module3134.detail, module31({}, module3134.more, !show))}>{description || children}</div></div>;
            }
        }
    ]);
    return a;
})(Component);
export default v;
v.propTypes = {
    title: module1.PropTypes.string,
    description: module1.PropTypes.string,
    show: module1.PropTypes.bool,
    hasClose: module1.PropTypes.bool
};
v.defaultProps = {
    title: "",
    description: "",
    show: false,
    hasClose: false
};
