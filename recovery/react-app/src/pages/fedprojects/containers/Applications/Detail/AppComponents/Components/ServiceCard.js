import "unpacked/module-15.js";
import "unpacked/module-5.js";
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
import { Link } from "unpacked/module-433.js";
import module26 from "unpacked/module-26.js";
import module791 from "components/Base/Text";
import module4981 from "unpacked/module-4981.js";
const v = ((e)=>{
    module55(a, e);
    var r = ((e)=>{
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
            let r;
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a() {
        module36(this, a);
        return r.apply(this, arguments);
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { data, prefix } = props;
                const n = module26(data, 'annotations["kubesphere.io/serviceType"]', "");
                return module553.default.createElement("div", {
                    className: module4981.wrapper
                }, module553.default.createElement(module791, {
                    icon: "appcenter",
                    title: module553.default.createElement(Link, {
                        to: `${prefix}/services/${data.name}`
                    }, data.name),
                    description: t(`SERVICE_TYPE_${n.toUpperCase()}`)
                }), module553.default.createElement(module791, {
                    title: `${data.name}.${data.namespace}.svc`,
                    description: t("INTERNAL_DOMAIN_NAME_SCAP")
                }), module553.default.createElement(module791, {
                    title: data.clusterIP,
                    description: t("VIRTUAL_IP_ADDRESS")
                }));
            }
        }
    ]);
    return a;
})(module553.Component);
export default v;
