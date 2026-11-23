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
import { PureComponent } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module1540 from "components/Forms/Workload/ContainerSettings/ContainerForm/SecurityContext/UserGroup";
import Module1541 from "components/Forms/Workload/ContainerSettings/ContainerForm/SecurityContext/SELinuxOptions";
const m = ((PureComponent_1)=>{
    module55(r, PureComponent_1);
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
                return <module186.Form.Group label={t("POD_SECURITY_CONTEXT")} desc={t("POD_SECURITY_CONTEXT_DESC")} checkable><module186.Alert className="margin-b12" type="info" title={t("NOTE")} message={t("POD_SECURITY_CONTEXT_TIP")}/><Module1540 prefix={this.props.prefix}/><Module1541 prefix={this.props.prefix}/></module186.Form.Group>;
            }
        }
    ]);
    return r;
})(PureComponent);
export default m;
