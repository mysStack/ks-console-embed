import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
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
import module2617 from "unpacked/module-2617.js";
const p = ((e)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const container = this.props.container;
                return module553.default.createElement("div", null, module553.default.createElement("div", null, t("IMAGE_VALUE", {
                    value: container.image
                })), container.ports && container.ports.map((e, key)=>module553.default.createElement("div", {
                        key,
                        className: module2617.port
                    }, module553.default.createElement("span", null, t("PROTOCOL_VALUE", {
                        value: e.protocol
                    })), module553.default.createElement("span", null, t("NAME_VALUE", {
                        value: e.name
                    })), module553.default.createElement("span", null, t("CONTAINER_PORT_VALUE", {
                        value: e.containerPort
                    })), module553.default.createElement("span", null, t("SERVICE_PORT_VALUE", {
                        value: e.servicePort
                    })))));
            }
        }
    ]);
    return r;
})(module553.Component);
export default p;
