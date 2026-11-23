import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-73.js";
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
import { observer } from "unpacked/module-239.js";
import module1050 from "components/Forms/Workload/ClusterDiffSettings/EditForm";
import module1290 from "components/Forms/Workload/ContainerSettings/ContainerForm/Environments";
let u;
const g = observer(u = ((e)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.handleSubmit = function(data) {
            const e_props = e.props;
            const a_index = e_props.index;
            e_props.onEdit({
                index: a_index,
                data
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formData, clusters, namespace } = props;
                const title = module553.default.createElement("span", null, `${t("ENVIRONMENT_VARIABLE_PL")}: ${(formData.env || []).map((e)=>e.name).join(", ") || t("NONE")}`);
                return module553.default.createElement(module1050, {
                    ...this.props,
                    title,
                    onOk: this.handleSubmit
                }, module553.default.createElement(module1290, {
                    checkable: false,
                    isFederated: true,
                    namespace,
                    projectDetail: {
                        clusters
                    }
                }));
            }
        }
    ]);
    return r;
})(module553.Component)) || u;
export default g;
