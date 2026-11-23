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
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import module3049 from "./module-3049.js";
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
        e.width = 504;
        return e;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.visible && this.props.visible !== e.visible) {
                    this.setState({
                        confirm: ""
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onOk, onCancel, isSubmitting } = props;
                return <Module788 width={this.width} bodyClassName={module3049.modalBody} visible={visible} isSubmitting={isSubmitting} onOk={onOk} onCancel={onCancel} hideHeader><div className={module3049.body}><div className={module3049.title}><module186.Icon name="information" size={20}/>{t("SYNC_TIME")}</div><div className={module3049.content}>{t("SYNC_TIME_TIPS")}</div></div></Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default v;
v.propTypes = {
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
v.defaultProps = {
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
};
