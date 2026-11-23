import "unpacked/module-15.js";
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
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import Module885 from "components/EditMode";
import module2057 from "unpacked/module-2057.js";
const h = ((Component_1)=>{
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
        t.handleCreate = function() {
            t.props.onOk(t.getData());
        };
        t.editor = createRef();
        return t;
    }
    module37(r, [
        {
            key: "getData",
            value: function() {
                return this.editor.current.getData();
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formTemplate, onCancel, isSubmitting } = props;
                return <div><div className={module2057.wrapper}><Module885 ref={this.editor} value={formTemplate}/></div><div className={module2057.footer}><module186.Button onClick={onCancel}>{t("CANCEL")}</module186.Button><module186.Button type="control" onClick={this.handleCreate} loading={isSubmitting} disabled={isSubmitting}>{t("CREATE")}</module186.Button></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default h;
h.propTypes = {
    formTemplate: module1.object,
    onOk: module1.func,
    isSubmitting: module1.bool
};
h.defaultProps = {
    onOk: function() {},
    isSubmitting: false
};
