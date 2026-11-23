import "unpacked/module-15.js";
import "unpacked/module-5.js";
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
import module26 from "unpacked/module-26.js";
import module241 from "unpacked/module-241.js";
import module1100 from "components/Forms/Volume/VolumeSettings/FormTemplate";
import module1050 from "components/Forms/Workload/ClusterDiffSettings/EditForm";
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.handleSubmit = function(t) {
            const e_props = e.props;
            const a_index = e_props.index;
            e_props.onEdit({
                index: a_index,
                data: module241(t, [
                    "spec"
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
                const { cluster, namespace, formData } = props;
                return module553.default.createElement(module1050, {
                    ...this.props,
                    title: t("STORAGE_CLASS_VALUE", {
                        value: module26(formData, "spec.storageClassName")
                    }),
                    onOk: this.handleSubmit
                }, module553.default.createElement("div", {
                    className: "padding-12"
                }, module553.default.createElement(module1100, {
                    cluster,
                    namespace
                })));
            }
        }
    ]);
    return r;
})(module553.Component);
export default g;
