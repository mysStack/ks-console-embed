import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import Module1554 from "./module-1554.js";
import module1555 from "./module-1555.js";
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, data, children, hideFooter, onCancel, onOk, cancelText, okText, isSubmitting, bodyClassName, formClassName, disableOk, ...rest } = props;
                return <Module1554 {...rest} bodyClassName={module3(module1555.formBody, bodyClassName)} onCancel={onCancel} hideFooter><module186.Form ref={formRef} data={data} onSubmit={onOk}><div className={module3(module1555.formWrapper, formClassName)}>{children}</div>{!hideFooter && <div className={module1555.formFooter}><module186.Button type="default" onClick={onCancel} data-test="modal-cancel">{cancelText || t("CANCEL")}</module186.Button>{onOk && <module186.Button type="control" htmlType="submit" loading={isSubmitting} disabled={disableOk || isSubmitting} data-test="modal-ok">{okText || t("OK")}</module186.Button>}</div>}</module186.Form></Module1554>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.propTypes = {
    data: module1.object,
    isSubmitting: module1.bool
};
