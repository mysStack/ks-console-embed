import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import Module788 from "components/Base/Modal";
import module186 from "unpacked/module-186.js";
import { observer } from "unpacked/module-239.js";
import module2951 from "unpacked/module-2951.js";
let l;
let o;
let u;
const g = observer((u = o = ((Component_1)=>{
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
        e.handleOk = function() {
            const e_props = e.props;
            e_props.onOk(e_props.detail);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel } = props;
                return <Module788 width={600} onCancel={onCancel} visible={visible} closable={false} onOk={this.handleOk} footerClassName={module2951.footer} bodyClassName={module2951.modalBody} hideHeader><div className={module2951.body}><div className={module2951.title}><module186.Icon name="information" type="light" size={20}/><strong>{t("UPDATED_GATEWAY_TITLE")}</strong></div><div className={module2951.content}>{t("UPDATE_GATEWAY_DESC")}</div></div></Module788>;
            }
        }
    ]);
    return r;
})(Component), o.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
}, o.defaultProps = {
    detail: {},
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
}, l = u)) || l;
export default g;
