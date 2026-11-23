import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module241 from "unpacked/module-241.js";
import module1050 from "components/Forms/Workload/ClusterDiffSettings/EditForm";
import module1096 from "components/Forms/Workload/ContainerSettings/ContainerForm/Ports";
import module2575 from "unpacked/module-2575.js";
const g = ((e)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.handleSubmit = function(t) {
            const e_props = e.props;
            const { index, containerType } = e_props;
            e_props.onEdit({
                index,
                containerType,
                data: module241(t, [
                    "ports"
                ])
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formData, containerType, withService } = props;
                const l = containerType !== "init" && withService;
                const title = module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", null, `${t("IMAGE")}: ${formData.image}`), formData.ports && formData.ports.map((e, key)=>module553.default.createElement("div", {
                        key,
                        className: module2575.port
                    }, module553.default.createElement("span", null, `${t("PROTOCOL")}: ${e.protocol}`), module553.default.createElement("span", null, `${t("NAME")}: ${e.name}`), module553.default.createElement("span", null, `${t("CONTAINER_PORT")}: ${e.containerPort}`), l && module553.default.createElement("span", null, `${t("SERVICE_PORT")}: ${e.servicePort}`))));
                return module553.default.createElement(module1050, {
                    ...this.props,
                    title,
                    onOk: this.handleSubmit
                }, module553.default.createElement(module1096, {
                    withService: containerType !== "init" && withService
                }));
            }
        }
    ]);
    return r;
})(module553.Component);
export default g;
