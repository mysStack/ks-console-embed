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
import module63 from "unpacked/module-63.js";
import { inject, observer } from "unpacked/module-239.js";
import Module790 from "components/Base/Panel";
import Module1808 from "unpacked/module-1808.js";
import Module1218 from "unpacked/module-1218.js";
import module1026 from "unpacked/module-1026.js";
import module1911 from "unpacked/module-1911.js";
let o;
const y = inject("detailStore", "instanceDetailStore")(o = observer(o = ((Component_1)=>{
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
        e.store = new module1026;
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                return <>{!module63(this.instanceAnnotations) && <Module790 title={t("SPRING_CLOUD_METADATA")}><Module1218 annotations={this.instanceAnnotations}/></Module790>}<Module790 title={t("POD_METADATA")}><Module1808 className={module1911.wrapper} labels={this.detail.labels}/><Module1218 className={module1911.wrapper} annotations={this.detail.annotations}/></Module790></>;
            }
        },
        {
            key: "detail",
            get: function() {
                return this.props.detailStore.detail;
            }
        },
        {
            key: "instanceAnnotations",
            get: function() {
                return this.props.instanceDetailStore.detail.annotations;
            }
        }
    ]);
    return r;
})(Component)) || o) || o;
export default y;
