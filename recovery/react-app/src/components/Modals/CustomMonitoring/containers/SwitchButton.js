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
import { inject, observer } from "unpacked/module-239.js";
import Module1633 from "unpacked/module-1633.js";
let l;
const m = inject("monitoringStore")(l = observer(l = ((Component_1)=>{
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
        e.handleEditClick = function() {
            e.props.monitoringStore.changeModeToEditing();
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                if (this.props.monitoringStore.isEditing) {
                    return <Module1633 type="danger" icon="pen" iconType="light" onClick={this.props.onSaveClick} text={t("OK")}>{t("SAVE_TEMPLATE")}</Module1633>;
                }
                return <Module1633 type="control" icon="pen" iconType="light" onClick={this.handleEditClick}>{t("EDIT_TEMPLATE")}</Module1633>;
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default m;
