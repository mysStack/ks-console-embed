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
import * as module553 from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module2965 from "unpacked/module-2965.js";
const m = ((e)=>{
    module55(r, e);
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.statusLabel = [
            {
                label: t("ENABLE"),
                value: 1
            },
            {
                label: t("DISABLE"),
                value: 0
            }
        ];
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                return module553.default.createElement("div", null, module553.default.createElement("p", {
                    className: module2965.tip
                }, t("LOG_COLLECTION_ENABLE_TIPS")), module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module186.Select, {
                    name: "enabled",
                    options: this.statusLabel,
                    placeholder: t("SELECT_STATUS_TIP")
                })));
            }
        }
    ]);
    return r;
})(module553.Component);
export default m;
