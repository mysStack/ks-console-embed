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
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module2264 from "unpacked/module-2264.js";
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.state = {
            show: e.props.defaultShow || false
        };
        e.toggle = function() {
            e.setState(function(e) {
                return {
                    show: !e.show
                };
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, label, children } = props;
                const show = this.state.show;
                return <><div className={module3(module2264.toggle, className)} onClick={this.toggle}><a><span className="align-middle">{t(label)} </span><module186.Icon name={show ? "chevron-up" : "chevron-down"}/></a></div><div className={module3(module31({}, module2264.children, !show))}>{children}</div></>;
            }
        }
    ]);
    return r;
})(Component);
export default v;
v.propTypes = {
    label: module1.PropTypes.string
};
v.defaultProps = {
    label: "ADVANCED_SETTINGS"
};
